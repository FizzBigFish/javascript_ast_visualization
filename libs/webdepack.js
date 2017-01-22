
var esprima = require('esprima');
var esrefactor = require('esrefactor');
var escodegen = require('escodegen');
var estraverse = require('estraverse');
var prettier = require('prettier');

module.exports =  function( code ) {

  var ret = {};
  var ast = esprima.parse(code, { range : true, loc : true });

  var body = ast.body[0];

  var expression = body.expression;
  if( expression ){
    if( expression.operator == '=' 
      && expression.right.type == 'CallExpression'
      && expression.right.arguments[0].type =='ArrayExpression'
    ){
      ret.exports_name = expression.left.name;
      var modules = expression.right.arguments[0];
    }
  }

  var declaration = body.declarations;
  if( declaration ){
    declaration = declaration[0];
    if( declaration.init.type == 'CallExpression'
      && declaration.init.arguments[0].type =='ArrayExpression'
    ){
      ret.exports_name = declaration.id;
      var modules = declaration.init.arguments[0];
    }
  }

  ret.modules = [];

  if( ret.exports_name ){
    var module_prefix = ret.exports_name + '_module_';
  } else {
    var module_prefix = 'untitled_module_';
  }

  if( !modules ){
    console.log(code);
  }

  modules.elements.forEach(function( module, idx ) {
    var webpack_module = {
      id : idx,
      dependencies : [],
      name : module_prefix + idx,
    };

    if( idx == 0 ){
      webpack_module.name = 'index';
    }
    console.log(webpack_module.name);
    ret.modules.push(webpack_module);

    // 单独把模块抽出来做ast & refactor应该快很多

    var module_code = code.slice(module.range[0], module.range[1]);

    var code_for_ast = '(' + module_code + ')';
    var ast = esprima.parse( code_for_ast, { range : true, loc : true });
    var ctx = new esrefactor.Context(ast);

    ctx.rename_identifier = function( node, rename_to ) {
      var identifier = ctx.identify(node.range[0]);
      if( !identifier ){
        console.log( node );
        return;
      }
      [identifier.identifier, identifier.declaration].concat(identifier.references)
        .filter(Boolean)
        .forEach(function( node ) {
          node.name = rename_to;
        });

      return identifier;
    };

    var params = ast.body[0].expression.params;

    var renames = ['module', 'exports', 'require'];
    params.forEach(function( param, idx ) {
      var rename_to = renames[idx];
      var identifier = ctx.rename_identifier(param, rename_to);

      /*
      * 
      * process require calls
      * collect dependents
      * 
      */

      if( idx == 2 ){

        var require_call_to_found = identifier.references.slice(0);

        require_call_to_found.forEach(function( node ) {
          
          estraverse.traverse(ast, {
            enter : function( node, parent ) {
              var idx = require_call_to_found.indexOf(node);
              if( idx != -1 && !node.marked ){
                this.break();
                node.marked = true;

                if( parent.arguments && parent.arguments.length == 1){
                  var val = parent.arguments[0].value;
                  if( webpack_module.dependencies.indexOf(val) == -1 ){
                    webpack_module.dependencies.push( parent.arguments[0].value );
                  }

                  parent.arguments[0].value = './'+ module_prefix + parent.arguments[0].value;
                }
              }
            }
          });
        });
      }

    });


    /**
     * rename exports internal names
     */

    estraverse.traverse(ast, {
      enter : function( node, parent ) {
        node._parent_node = parent;

        if( parent
          && parent.type == 'AssignmentExpression' 
          && parent.left.type == 'MemberExpression' 
          && parent.left.object.name == 'exports' 
          && node == parent.right
          && node.type == 'Identifier'
          // for reserved word
          && parent.left.property.type == 'Identifier'
        ){

          var exports_name = parent.left.property.name;
          if( exports_name == 'default' ){
            exports_name = '_' + exports_name;
          }
          var identifier = ctx.rename_identifier(node, exports_name);

        }
      }
    });

    // 
    // deminify
    // unwrap declaration
    // 
    estraverse.traverse(ast, {
      enter : function( node, parent ) {
        if( parent 
          && node.type == 'VariableDeclaration'
          && node.declarations.length > 1
          && (parent.type == 'index' || parent.type == 'BlockStatement')
        ){
          var idx = parent.body.indexOf(node);
          var nodes = node.declarations.map(function( sub_node ) {
            return {
              type : node.type,
              kind : node.kind,
              declarations : [sub_node]
            };
          });
          parent.body.splice.apply( parent.body, [idx, 1].concat(nodes) );
        }
      }
    });

    //
    // for while if body block
    //
    estraverse.traverse(ast, {
      enter : function( node, parent ) {
        if( 
            (node.type == 'ForInStatement'
          || node.type == 'ForStatement'
          || node.type == 'IfStatement'
          || node.type == 'WhileStatement'
          )
          
        ) {
          if( node.body ){
            if( node.body.type != 'BlockStatement' ){
              var o_body = node.body;
              node.body = {
                type : 'BlockStatement',
                body : [o_body]
              };
            }
          } else if( node.consequent ){
            if( node.consequent.type != 'BlockStatement' ){
              var o_body = node.consequent;
              node.consequent = {
                type : 'BlockStatement',
                body : [o_body]
              };
            }
          } else {
            console.log( node );
          }
        }
      }
    });


    //
    // unwrap sequance
    //

    estraverse.traverse(ast, {
      enter : function( node, parent ) {


        if( node.type == 'SequenceExpression' 
          && parent.type != 'CallExpression'
          && parent.type != 'ForStatement'
        ){

          var _parent_node = parent._parent_node;

          if( _parent_node.type == 'BlockStatement' 
            || _parent_node.type == 'index'
          ){
            var idx = _parent_node.body.indexOf(parent);

            var last = node.expressions[node.expressions.length - 1];
            var rest = node.expressions.slice(0,-1);
            // console.log( parent.type, idx, _parent_node.type );

            if( parent.type == 'ExpressionStatement' ){

              Array.prototype.splice.apply(_parent_node.body, [idx, 1].concat(node.expressions));

            } else if( parent.type == 'VariableDeclarator' ){

              parent.init = last;
              Array.prototype.splice.apply(_parent_node.body, [idx - 1, 0].concat(rest));

            } else if( parent.type == 'ReturnStatement' || parent.type == 'ThrowStatment' ){

              parent.argument = last;
              Array.prototype.splice.apply(_parent_node.body, [idx - 1, 0].concat(rest));

            } else if( parent.type == 'IfStatement'){

              parent.test = last;
              Array.prototype.splice.apply(_parent_node.body, [idx - 1, 0].concat(rest));

            } else if( parent.type == 'SwitchStatement'){
              
              parent.discriminant = last;
              Array.prototype.splice.apply(_parent_node.body, [idx - 1, 0].concat(rest));

            } else {

              // console.log( parent.type );

            }
          } else if( _parent_node == 'ForStatement' ){

          } else {
            // console.log( parent.type, _parent_node.type );
          }

        }
      }
    });

    var body = ast.body[0].expression.body;
    body.type = 'Program';

    webpack_module.code = escodegen.generate(body);

  });


  return ret;
}

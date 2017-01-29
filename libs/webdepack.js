var path = require('path');
var esprima = require('esprima');
var esrefactor = require('esrefactor');
var escodegen = require('escodegen');
var estraverse = require('estraverse');
var prettier = require('prettier');



function expressionStatement ( expression) {
  if( expression.type != 'ExpressionStatement' ){
    return {
      'type': 'ExpressionStatement',
      'expression': expression
    }
  } else {
    return expression;
  }
};

function blockStatement ( block ) {
  if( block.type != 'BlockStatement' ){
    return {
      type : 'BlockStatement',
      body : [expressionStatement(block)]
    }
  } else {
    return block;
  }
};

function stringify_ast_peer( ast ) {
  return escodegen.generate({
    type: 'Program',
    body : [ast]
  });
}

function splice( arr, args ) {
  return Array.prototype.splice.apply(arr, args);
}

var deminify_uuid = 0;
function uniq_deminify_identifier_name( prefix ) {
  return prefix + '_'     + (deminify_uuid++);
}

function identifier( name ){
  return {
    type : 'Identifier',
    name : name
  }
}
function uniq_deminify_identifier( prefix ) {
  return identifier(uniq_deminify_identifier_name(prefix));
}

function assignmentExpression( left, right ) {
  return  {
    type: "AssignmentExpression",
    operator: "=",
    left: left,
    right: right
  };
}

function variableDeclaration( _identifier, init ) {
  return  {
   "type": "VariableDeclaration",
   "declarations": [
      {
       "type": "VariableDeclarator",
       "id": identifier(_identifier.name || _identifier),
       "init": init
      }
     ],
     "kind": "var"
  };

}
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
      ret.exports_name = declaration.id.name;
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
      exports : [],
    };

    if( idx == 0 ){
      webpack_module.name = 'index';
    }

    console.log( module_prefix, webpack_module.name);
    if( !module ){
      console.log( 'has empty module ', idx );
      return;
    }
    console.log( 'start at line : ', module.loc.start.line );
    ret.modules.push(webpack_module);

    // 单独把模块抽出来做ast & refactor应该快很多

    var module_code = code.slice(module.range[0], module.range[1]);

    var code_for_ast = '(' + module_code + ')';
    var ast = esprima.parse( code_for_ast, { range : true, loc : true });
    var ctx = new esrefactor.Context(ast);

    ctx.rename_identifier = function( node, rename_to ) {
      var identifier = this.identify(node.range[0]);
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

    ctx.find_usage = function( node ) {
      var identifier = this.identify(node.range[0]);
      if( !identifier ){
        console.log( node );
        return;
      }
      return [identifier.identifier, identifier.declaration].concat(identifier.references)
                .filter(Boolean)
    }

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

        estraverse.traverse(ast, {
          enter : function( node, parent ) {
            var idx = require_call_to_found.indexOf(node);
            if( idx != -1 && !node.marked ){

              node.marked = true;

              if( parent.arguments && parent.arguments.length == 1){
                var val = parent.arguments[0].value;
                if( webpack_module.dependencies.indexOf(val) == -1 ){
                  webpack_module.dependencies.push( parent.arguments[0].value );
                }

                parent.arguments[0].value = './'+ module_prefix + parent.arguments[0].value;
              }

              if( 
                  require_call_to_found.every(function( node ) {
                    return node.marked
                  })
              ){
                 this.break();
              }
            }
          }
        });

      }

    });


    /**
     * rename exports internal names
     */

    estraverse.traverse(ast, {
      enter : function( node, parent ) {

        if( parent
          && parent.type == 'AssignmentExpression' 
          && parent.left.type == 'MemberExpression' 
          && parent.left.object.name == 'exports' 
          && node == parent.right
        ){
          var exports_name = parent.left.property.name;
          if( webpack_module.exports.indexOf(exports_name) == -1 ){
            webpack_module.exports.push(exports_name);
          }

          if( node.type == 'Identifier'
              // for reserved word
            && parent.left.property.type == 'Identifier'
          ){


            if( exports_name == 'default' ){
              exports_name = '_' + exports_name;
            }
            var identifier = ctx.rename_identifier(node, exports_name);
          } else {
            // other expressions 
          }

        }
      }
    });

    var actual_exports;
    estraverse.traverse(ast, {
      enter : function( node, parent ) {

        if( parent
          && parent.type == 'AssignmentExpression' 
          && parent.left.type == 'MemberExpression' 
          && parent.left.object.name == 'module' 
          && parent.left.property.name == 'exports' 
          && node == parent.right
          && node.type == 'Identifier'
        ){
          
          actual_exports = node;

          this.break();

        }
      }
    });

    if( actual_exports ){
      estraverse.traverse(ast, {
        enter : function( node, parent ) {
          node._parent_node = parent;
        }
      });

      var actual_exports_refs = ctx.find_usage(actual_exports);

      estraverse.traverse(ast, {
        enter : function( node, parent ) {
          if( actual_exports_refs.indexOf(node) != -1 ){

            if( parent.type == 'MemberExpression'
              && parent._parent_node
              && parent._parent_node.type == 'AssignmentExpression'
              && parent._parent_node.left.object == node
            ){
              var exports_name = parent.property.name;
              if( webpack_module.exports.indexOf(exports_name) == -1 ){
                webpack_module.exports.push(exports_name);
              }
            }
          }
        }
      });
    }
    /**
     * rename required module references
     */
    estraverse.traverse(ast, {
      enter : function( node, parent ) {

        if( parent
          && (
            parent.type == 'VariableDeclarator' ||
            parent.type == 'AssignmentExpression'
            )
          && node.type == 'CallExpression'
          && node.callee.name == 'require'
          && node.arguments.length == 1
        ){

          var required_module = path.basename(node.arguments[0].value);

          if( parent.left ){
            ctx.rename_identifier(parent.left, required_module);
          } else if( parent.id ){
            ctx.rename_identifier(parent.id, required_module);
          }

          // find references and get the require func

        }
      }
    });

    // make code more readable
    function deminify ( ast, depth ) {
      depth = depth || 0;

      // if( depth > 0 ){
      //   return
      // }

      // 
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
                declarations : [sub_node],
                _parent_node : parent
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
            var sub_tree = [];

            if( node.body ){
              if( node.body.type != 'BlockStatement' ){
                sub_tree.push( node.body = blockStatement(node.body) );
                node.body._parent_node = node;
              }
            } else if( node.consequent ){

              if( node.consequent.type != 'BlockStatement' ){
                node.consequent = blockStatement(node.consequent);
              }
              sub_tree.push(node.consequent);
              node.consequent._parent_node = node;

              // else & else if 
              if( node.alternate ){
                if( node.alternate.type != 'BlockStatement'  
                  && node.alternate.type != 'IfStatement' 
                ){
                  sub_tree.push(node.alternate = blockStatement(node.alternate));
                }
                sub_tree.push(node.alternate);
                node.alternate._parent_node = node;
              }

            } else {
              // console.log( node );
            }

            //
            // IfStatement has 2 sub node, so if skip, should traverse through them two.
            //
            if( sub_tree.length ){
              this.skip();
              sub_tree.forEach(function( node ) {
                deminify(node, depth+1);
              });
            }
          }
        }
      });
      
      // && => if
      estraverse.traverse(ast, {
        enter : function( node, parent ) {
          parent = parent || node._parent_node;
          
          node._parent_node = parent;

          if( node.type == 'LogicalExpression' ){

            var test;
            var or_test;
            var consequent;

            if( node.operator == '&&' ){
                
                test = or_test = node.left;
                consequent = expressionStatement(node.right);

            } else if( node.operator == '||' ){

                test = {
                  type : 'UnaryExpression',
                  operator : '!',
                  argument : node.left,
                };
                or_test = node.left
                consequent = expressionStatement(node.right);

            } else {
              console.log( 'other logic operator : ', node.expression.operator );
            }

            if( parent.type == 'ExpressionStatement'
              &&( parent._parent_node.type === 'BlockStatement'
                || parent._parent_node.type === 'index')
            ) {
              if( test ){

                parent.type = 'IfStatement';
                parent.test = test
                parent.consequent = blockStatement(consequent);

                parent.test._parent_node = parent;
                parent.consequent._parent_node = parent;

                delete parent.expression;

                this.skip();
                deminify(parent, depth+1);

              }
            } else if ( 
              parent.type === 'VariableDeclarator' 
              && ( parent._parent_node._parent_node.type == 'BlockStatement'
                || parent._parent_node._parent_node.type == 'index')
            ){
              /**
               * VariableDeclaration
               *   VariableDeclarator
               *     id
               *     init
               * =>
               * VariableDeclaration
               *   VariableDeclarator
               *     id
               *     init null
               * Expression
               *   Assignment
               *     left
               *     right
               */
              // split into decarator and assignment
              if( parent._parent_node.declarations.length == 1 ){
                var init = parent.init;
                parent.init = null;
                var block = parent._parent_node._parent_node;
                var assignment = assignmentExpression({
                    type : 'Identifier',
                    name : parent.id.name
                  }, init);

                var idx = block.body.indexOf(parent._parent_node);
                var new_node = expressionStatement(assignment);
                splice(block.body, [idx + 1, 0, new_node]);

                new_node._parent_node = block;
                this.skip();
                deminify(new_node);
              }
            } else if ( 
                parent.type === 'AssignmentExpression'
              && parent._parent_node.type == 'ExpressionStatement'
              && ( parent._parent_node._parent_node.type === 'BlockStatement'
                || parent._parent_node._parent_node.type === 'index')
            ){
              /**
               * Block
               *   Expression
               *     Assignment
               *       left
               *       Logical
               * =>
               * Block
               *   Declaration
               *   IfStatement
               *     test
               *     consequent
               *     alternate
               */
              if( test ){
                var block = parent._parent_node._parent_node;
                var temp_boolean_val = uniq_deminify_identifier('boolean');
                var temp_declaration = variableDeclaration(temp_boolean_val, or_test);

                var idx = block.body.indexOf(parent._parent_node);
                splice(block.body,[idx, 0, temp_declaration]);

                var target_to_replace = parent._parent_node;

                target_to_replace.type = 'IfStatement';
                target_to_replace.test = temp_boolean_val;

                if( node.operator == '&&' ){
                  target_to_replace.consequent = blockStatement(expressionStatement( assignmentExpression(parent.left, consequent.expression)));
                  target_to_replace.alternate = blockStatement(expressionStatement( assignmentExpression(parent.left, temp_boolean_val)));
                } else if ( node.operator == '||' ){
                  target_to_replace.consequent = blockStatement(expressionStatement( assignmentExpression(parent.left, temp_boolean_val)));
                  target_to_replace.alternate = blockStatement(expressionStatement( assignmentExpression(parent.left, consequent.expression)));
                }

                temp_declaration._parent_node = block;
                target_to_replace.consequent._parent_node = target_to_replace;
                target_to_replace.alternate._parent_node = target_to_replace;

                delete target_to_replace.expression;
                this.skip();

                deminify( temp_declaration, depth+1);
                deminify( target_to_replace.consequent, depth+1);
                deminify( target_to_replace.alternate, depth+1);
              } 
            }
          }
        }
      });

      // unwrap ?:
      estraverse.traverse(ast, {
        enter : function( node, parent ) {
          parent = parent || node._parent_node;

          node._parent_node = parent;

          if( node.type == 'ConditionalExpression' ){

            if( parent.type == 'ExpressionStatement'
              && (parent._parent_node.type === 'BlockStatement' 
                || parent._parent_node.type === 'index')
            ){
              parent.type = 'IfStatement';
              parent.test = node.test;
              parent.consequent = blockStatement(node.consequent);
              parent.alternate = blockStatement(node.alternate);

              parent.test._parent_node = parent;
              parent.consequent._parent_node = parent;
              parent.alternate._parent_node = parent;

              delete parent.expression;

              this.skip();
              deminify( parent, depth+1 );
            } else if ( 
              parent.type == 'VariableDeclarator' 
              && ( parent._parent_node._parent_node.type == 'BlockStatement'
                || parent._parent_node._parent_node.type == 'index')
            ){
              if( parent._parent_node.declarations.length == 1){

                var init = parent.init;
                parent.init = null;
                var block = parent._parent_node._parent_node;
                var assignment = assignmentExpression({
                    type : 'Identifier',
                    name : parent.id.name
                  }, init);

                var idx = block.body.indexOf(parent._parent_node);
                var new_node = expressionStatement(assignment);
                splice(block.body, [idx+1, 0, new_node]);

                new_node._parent_node = block;
                this.skip();
                deminify(new_node);

              }
            } else if ( 
              parent.type == 'AssignmentExpression' 
              && ( parent._parent_node.type == 'ExpressionStatement' )
              && ( parent._parent_node._parent_node.type == 'BlockStatement'
                || parent._parent_node._parent_node.type == 'index')
            ){

                var target_to_replace = parent._parent_node;
                delete target_to_replace.expression;

                target_to_replace.type = 'IfStatement';
                target_to_replace.test = node.test;

                target_to_replace.consequent = blockStatement(expressionStatement( assignmentExpression( parent.left, node.consequent )));
                target_to_replace.alternate = blockStatement(expressionStatement( assignmentExpression( parent.left, node.alternate )));
                

                target_to_replace.test._parent_node = target_to_replace;
                target_to_replace.consequent._parent_node = target_to_replace;
                target_to_replace.alternate._parent_node = target_to_replace;

                this.skip();

                deminify( target_to_replace.test, depth+1);
                deminify( target_to_replace.consequent, depth+1);
                deminify( target_to_replace.alternate, depth+1);
            }
          }
        }
      });

      //
      // unwrap sequance
      //

      estraverse.traverse(ast, {
        enter : function( node, parent ) {

          // add referance to ancients
          if( !node._parent_node && parent ){
            node._parent_node = parent;
          }

          var matched = false;

          if( node.type == 'SequenceExpression' 
            && parent.type != 'CallExpression'
            && parent.type != 'ForStatement'
          ){
            var _parent_node = parent._parent_node;


            var last = node.expressions[node.expressions.length - 1];
            var make_expression = function( node ) {
              return expressionStatement(node);
            };

            var rest = node.expressions.slice(0,-1).map(make_expression);
            var rebind_tree = function( last_parent, rest_parent ) {
              if( last_parent ){
                last._parent_node = last_parent;
              }
              if( rest_parent ){
                rest.forEach(function( node ) {
                  node._parent_node = rest_parent;
                });
              }
            }
            if( _parent_node.type == 'VariableDeclaration'
              && parent.type == 'VariableDeclarator'
            ){

              var idx = _parent_node._parent_node.body.indexOf(_parent_node);
              parent.init = last;

              splice(_parent_node._parent_node.body, [idx, 0].concat(rest));
              matched = [parent].concat(rest);

              rebind_tree(parent, _parent_node._parent_node);

            } else if( 
              _parent_node.type == 'BlockStatement' 
              || _parent_node.type == 'index'
            ){
              var idx = _parent_node.body.indexOf(parent);

              // console.log( parent.type, idx, _parent_node.type );

              if( parent.type == 'ExpressionStatement' ){

                matched = node.expressions.map(make_expression);
                splice(_parent_node.body, [idx, 1].concat(matched));

                rest = matched;
                rebind_tree(null, _parent_node);

              } else if( parent.type == 'ReturnStatement' || parent.type == 'ThrowStatment' ){

                matched = [parent].concat(rest);
                parent.argument = last;
                splice(_parent_node.body, [idx, 0].concat(rest));
                rebind_tree(parent, _parent_node);

              } else if( parent.type == 'IfStatement'){
                matched = [parent].concat(rest);
                parent.test = last;

                splice(_parent_node.body, [idx, 0].concat(rest));
                rebind_tree(parent, _parent_node);

              } else if( parent.type == 'SwitchStatement'){
                matched = [parent].concat(rest);
                parent.discriminant = last;

                splice(_parent_node.body, [idx, 0].concat(rest));
                rebind_tree(parent, _parent_node);

              } else {

                // console.log( parent.type );

              }
            } else if( _parent_node == 'ForStatement' ){

            } else {
              // console.log( parent.type, _parent_node.type );
            }

            if( matched ){
              this.skip();
              matched.forEach(function( sub_tree ) {
                // 这里应该处理新生成的节点
                deminify(sub_tree, depth+1);
              })
            }
          }
        }
      });
    }

    deminify(ast);

    estraverse.traverse(ast, {
      enter : function( node ) {
          delete node._parent_node;
      }
    });

    var body = ast.body[0].expression.body;
    body.type = 'Program';

    // console.log( JSON.stringify(body, null, 2));

    webpack_module.code = escodegen.generate(body);

  });


  return ret;
}

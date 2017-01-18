
var esprima = require('esprima');
var esrefactor = require('esrefactor');
var escodegen = require('escodegen');
var estraverse = require('estraverse');

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

  modules.elements.forEach(function( module, idx ) {
    var webpack_module = {
      id : idx,
      dependencies : [],
      name : 'untitled_module_' + idx,
    };

    if( idx == 0 ){
      webpack_module.name = 'index';
    }
    ret.modules.push(webpack_module);

    // 单独把模块抽出来做ast & refactor应该快很多

    var module_code = code.slice(module.range[0], module.range[1]);

    var code_for_ast = '(' + module_code + ')';
    var ast = esprima.parse( code_for_ast, { range : true, loc : true });
    var ctx = new esrefactor.Context(ast);


    var params = ast.body[0].expression.params;
    var body = ast.body[0].expression.body;

    var renames = ['module', 'exports', 'require'];
    params.forEach(function( param, idx ) {
      var identifier = ctx.identify(param.range[0]);
      var rename_to = renames[idx];

      [identifier.identifier, identifier.declaration].concat(identifier.references)
        .filter(Boolean)
        .forEach(function( node ) {
          node.name = rename_to;
        });

      if( idx == 2 ){

        var require_call_to_found = identifier.references.slice(0);

        require_call_to_found.forEach(function( node ) {
          
          estraverse.traverse(ast, {
            enter : function( node, parent ) {
              var idx = require_call_to_found.indexOf(node);
              if( idx != -1 ){
                this.break();
                require_call_to_found.splice(idx, 1);
                if( parent.arguments && parent.arguments.length == 1){
                  webpack_module.dependencies.push( parent.arguments[0].value );
                }
              }
            }
          });
        });
      }

    });

    body.type = 'Program';
    webpack_module.code = escodegen.generate(body);

  });


  return ret;
}

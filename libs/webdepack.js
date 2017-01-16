
var esprima = require('esprima');
var esrefactor = require('esrefactor');

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

  console.log( modules );

  modules.elements.forEach(function( module, idx ) {
    if( idx == 0 ){

    }
    // 单独把模块抽出来做ast & refactor应该快很多

    var module_code = code.slice(module.range[0], module.range[1]);


  });


  return ret;
}

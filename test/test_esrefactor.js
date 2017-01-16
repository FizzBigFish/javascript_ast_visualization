var esrefactor = require('esrefactor');
var esprima = require('esprima');
var estraverse = require('estraverse');

var fs = require('fs-extra');
var path = require('path');
// var source = fs.readFileSync(path.join(__dirname, '../output/root/test.js'), 'utf8');
var source = fs.readFileSync(path.join(__dirname, '../output/root/wx.js'), 'utf8');

var ctx = new esrefactor.Context(source);

var ast = esprima.parse(source, { loc : true, range : true });

var identifiers = [];
var mapped_identifiers = [];


estraverse.traverse(ast,{
  enter : function( node, parent ) {
    if( node.type == 'Identifier' 
      && parent.type != 'MemberExpression' 
      && parent.type != 'Property'
      && node.name != 'arguments'
    ){

      identifiers.push( node );
      // console.log( parent );

    }
  }
});

identifiers.forEach(function( node, idx ) {
  if( node.identifed == true ){
    return;
  }

  var start = node.start = node.range[0];
  var id;

  try{
    var id = ctx.identify( start );
  } catch ( e ) {
    console.log('ignore this first');
  }

  if( id == undefined ){
  } else {


    node.identifed = true;

    console.log( id );

    var declaration = id.declaration;
    var references = id.references;
    var identifier= id.identifier;

    var update_nodes = [identifier];
    var starts = [identifier.range[0]];

    [declaration].concat(references).forEach(function( node ) {
      
      if( node && starts.indexOf(node.range[0]) == -1 ){
        starts.push(node.range[0]);
        update_nodes.push(node);
      }

    });

    mapped_identifiers.push(update_nodes);

    starts.forEach(function( start ) {
      identifiers.forEach(function( node ) {
        if( node.identifed ){
          return;
        }
        if( node.start == undefined ){
          node.start = node.range[0];
        }
        if( starts.indexOf(node.start) != -1 ){
          node.identifed = true;
        }
      })
    });
  }
});

//
// now we got the items need to be edit
//
console.log( JSON.stringify(mapped_identifiers, null, 2));
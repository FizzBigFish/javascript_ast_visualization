var uglifyJs = require('uglify-js');

module.exports = function( code ) {

  var lines = code.split('\n');
  var ret= {
    total_line : lines.length
  };

  var ast = uglifyJs.parse(code);
  ast.figure_out_scope();

  var structure = {};

  var node = function( name ) {
      this.name = name;
      this.body = [];

      this.add_child = function( name ) {
          var child = new node(name);
          this.body.push(child);
          return child;
      };
  };

  var current_node = new node();
  lines.forEach(function( line ) {

    if( line.indexOf( '//*' ) == 0){

    }

  });

  var walker = new uglifyJs.TreeWalker(function(node){
      if (node instanceof uglifyJs.AST_Defun) {
          console.log( node );
          // string_template is a cute little function that uglifyJs uses for warnings
          console.log(uglifyJs.string_template("Found {type} {name} at {line},{col}", {
              type : node.type,
              name: (node.name||{}).name,
              line: node.start.line,
              col: node.start.col
          }));
      }
  });

  ast.walk(walker);

  ret.get_code = function( node ) {
    var start_pos = node.start.pos;
    var end_pos   = node.end.pos;
    return code.slice(start_pos, end_pos + node.end.value.length );
  };

  return ret;
}

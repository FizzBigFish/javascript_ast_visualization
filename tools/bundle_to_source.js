var code_layout = require('../libs/code_layout');

var fs = require('fs-extra');
var path = require('path');

var bundle_to_source = module.exports = function( file ) {
  var code = fs.readFileSync(file, 'utf8');
  var layout = code_layout(code);
  var name = path.basename(file);

  var output_root = path.join(__dirname, '../output');
  var out_map_file = path.join(output_root, name + '.map' );
  
  layout.list.forEach(function( node ) {
    var node_ext = path.extname(node.name);
    if( node_ext == '' ){
      node_name = node.name + '.js';
    }
    var full_path = path.join.apply(path, [output_root].concat(node.paths).concat(node_name));
    fs.outputFile( full_path, node.content);
  });
  fs.outputJSON(out_map_file, layout.root)
}

;(function(){
  if( require.main  == module ){
    bundle_to_source(path.join(__dirname, '../public/js/WAServer.js'));
  }
})()

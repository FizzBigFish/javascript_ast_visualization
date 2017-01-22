var code_layout = require('../libs/code_layout');
var webdepack = require('../libs/webdepack');

var fs = require('fs-extra');
var path = require('path');

var bundle_to_source = module.exports = function( file ) {
  var code = fs.readFileSync(file, 'utf8');
  var layout = code_layout(code);
  var name = path.basename(file);

  var output_root = path.join(__dirname, '../output');
  var out_map_file = path.join(output_root, name + '.map' );
  
  layout.list.forEach(function( node ) {
    
    if( node.module_type == 'text' ){
      var node_ext = path.extname(node.name);
      var node_name = node.name + (node_ext == '' ? '.js' : '');
      var full_path = path.join.apply(path, [output_root].concat(node.paths).concat(node_name));
      fs.outputFile( full_path, node.content);
    } else if ( node.module_type == 'webpack' ){
      var module_info = webdepack(node.content);
      var folder = path.join.apply(path, [output_root].concat(node.paths).concat(node.name));
      module_info.modules.forEach(function( node ) {
        var node_ext = path.extname(node.name);
        var node_name = node.name + (node_ext == '' ? '.js' : '');

        fs.outputFile( path.join(folder, node_name), node.code);
      });
      fs.outputJSON(path.join(folder, 'module_info.json'), module_info);
    }

  });

  fs.outputJSON(out_map_file, layout.root);

}

;(function(){
  if( require.main  == module ){
    bundle_to_source(path.join(__dirname, '../public/js/WAServer.js'));
  }
})()

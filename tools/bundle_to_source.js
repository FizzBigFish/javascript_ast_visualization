var code_layout = require('../libs/code_layout');
var webdepack = require('../libs/webdepack');

var fs = require('fs-extra');
var path = require('path');
var jade = require('jade');

  var bundle_to_source = module.exports = function( outpath, file ) {
    var code = fs.readFileSync(file, 'utf8');
    var layout = code_layout(code);
    var name = path.basename(file);

    var output_root = outpath;
    var out_map_file = path.join(output_root, name + '.map' );
    var out_idx_file = path.join(output_root, name + '.html' );
    
    layout.list.forEach(function( node ) {
      console.log( 'node starts at line :', node.start );
      if( node.module_type == 'text' ){
        var node_ext = path.extname(node.name);
        var node_name = node.name + (node_ext == '' ? '.js' : '');
        var full_path = path.join.apply(path, [output_root].concat(node.paths).concat(node_name));
        fs.outputFile( full_path, node.content);
      } else if ( node.module_type == 'webpack' ){
        var module_info = webdepack(node.content);

        node.modules = module_info.modules;
        node.exports_name = module_info.exports_name;

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

    // create svg here;
    fs.outputFile(out_idx_file, jade.render( fs.readFileSync(path.join(__dirname, '../views/module_view.jade'),'utf8'), {
      name : name,
      modules: layout.list
    }));


}

;(function(){
  if( require.main  == module ){
    console.log('start WAServer');
    bundle_to_source( path.join(__dirname, '../output/WAServer'), path.join(__dirname, '../public/js/WAServer.js'));
    console.log('start WAWebview');
    bundle_to_source( path.join(__dirname, '../output/WAWebview'), path.join(__dirname, '../public/js/WAWebview.js'));
  }
})()

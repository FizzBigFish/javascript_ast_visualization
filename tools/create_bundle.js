var fs = require('fs');
var magicString = require('magic-string');
var path = require('path');

var out_file = 'WAServer.js';
var out_map_file = 'WAServer.js.map';
var root = path.join( __dirname, '../temp')
var files = fs.readdirSync( root );


var bundle = new magicString.Bundle();

files.forEach(function( filename ) {
    if( filename != out_file && filename != out_map_file ){
        var content = fs.readFileSync(path.join(root, filename), 'utf8');
        var source = new magicString( content, {
          filename: filename
        });

        bundle.addSource( source );
    }
});


var map = bundle.generateMap({
  file: out_file,
  includeContent: true,
  hires: true
});

fs.writeFileSync(
  path.join(root, out_file), 
  bundle.toString() + '\n//# sourceMappingURL=/' + out_map_file);

fs.writeFileSync(
  path.join(root, out_map_file), 
  map);

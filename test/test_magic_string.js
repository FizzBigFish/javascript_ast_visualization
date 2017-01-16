var fs = require('fs-extra');
var path = require('path');

var root = path.join(__dirname, '../temp');
var source = fs.readFileSync(path.join(__dirname, '../output/root/AppGlobals.js'), 'utf8');
var magicString = require('magic-string');


var bundle = new magicString.Bundle();
var source = new magicString( source, {
  filename: 'output/root/AppGlobals.js'
});
bundle.addSource( source );

var out_file = 'test.js'
var out_map_file = 'test.js.map';

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

var fs = require('fs-extra');
var path = require('path');

var webdepack = require('../libs/webdepack');

var root = path.join(__dirname, '../temp');
var source = fs.readFileSync(path.join(__dirname, '../output/test.js'), 'utf8');

var module_info = webdepack(source);

module_info.modules.forEach(function( node ) {
  console.log( node.code );
})

fs.outputJSON( path.join(root, 'test_module_info.json'), module_info);
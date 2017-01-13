var express = require('express');
var router = module.exports = express.Router();

var fs = require('fs');
var path = require('path');
var code_layout = require('../libs/code_layout');
var esprima = require('esprima');

router.get('/', function( req, resp, next ) {

    var query = req.query;
    var body = req.body;
    
    fs.readFile( path.join(__dirname, '../temp/WAServer.js'), 'utf8', function(err, code ) {
        if(err){
            next()
        } else {
            resp.render('ast_view', code_layout(code));
        }
    });


});
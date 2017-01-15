var uglifyJs = require('uglify-js');

module.exports = function( code ) {

  var lines = code.split('\n');
  var ret= {
    total_line : lines.length
  };

  // var ast = uglifyJs.parse(code);
  // ast.figure_out_scope();

  var node_list = [];
  var node = function( name ) {
      node_list.push(this);

      this.name = name;
      this.content_before =  '';
      this.content = '';
      this.content_after = '';
      this.body = [];
      this.parent = null;
      this.lv = 0;
      this.closed = false;
      this.paths = [];

      this.close = function() {
          this.closed = true;
      };

      this.add_child = function( name ) {
          var child = new node(name);
          child.parent = this;
          child.paths = this.paths.slice().concat(this.name);
          child.lv = this.lv + 1;
          this.body.push(child);
          return child;
      };
  };

  var current_node = structure = new node('root');
  current_node.lv = -1;
  var last_start_pos = 0;
  var last_end_post = 0;
  /**
   * //@@ #name 
   * //@@ /#name 
   * //@@ ##name
   * //@@ /##name
   */
  var get_content = function( start, end ) {
    console.log( start, end );
    return lines.slice(start, end).join('\n');
  }
  lines.forEach(function( line, idx ) {

    if( line.indexOf( '//@@' ) == 0 ){
      line.replace(/\/\/@@\s+(\/)?(#*)([a-z0-9_-]+)?$/i, function( $, is_close, lv, name) {
          lv = lv.length;
          console.log( $ );
          if( is_close ){
            if( name != current_node.name && name != '' && name != undefined){
              throw new Error('illegal close name : ' + name);
            }
            last_end_post = idx + 1;
            console.log('close set content');
            current_node.content = get_content(last_start_pos, last_end_post);
            current_node.close();
            current_node = current_node.parent;
          } else {
            if( !current_node.closed ){
              last_end_post = idx;
              console.log( 'set content for ', current_node.name);
              current_node.content = get_content(last_start_pos, last_end_post);
              current_node.close();
            }

            if( lv > current_node.lv ){
              var new_node = current_node.add_child(name);
            } else {
              new_node = current_node.parent.add_child(name);
            }
            new_node.lv = lv;
            last_start_pos = idx;
            console.log('set content_before');
            new_node.content_before = get_content(last_end_post, last_start_pos);
            current_node = new_node;
          }
      });
    }

  });
  
  if( current_node.closed  ){
    console.log('set content_after');
    structure.content_after = get_content(last_end_post);
  } else {
    console.log('set content for last node');
    current_node.content = get_content(last_end_post);
  }

  ret.root = structure;
  ret.list = node_list;

  return ret;
}

var related = (function(){
   'use strict';
   var tags$length = defaults.tags.length;
   var script = document.createElement( 'script' );
   var src = defaults.homepage + '/feeds/posts/default' +
      '?alt=json-in-script' +
      '&callback=related' +
      '&max-results=' + ( defaults.length + 1 ) +
      '&q=';
   for ( var n = 0; n < tags$length; n++ ){
      src += 'label:"' + defaults.tags[ n ] + '"' + ( n === tags$length - 1 ? '' : '|' );
   }
   
   script.src = src;
   
   document.body.appendChild( script );
   
   function render( data ){
      var title = data.title.$t;
      var content = data.content;
      var summary = data.summary;
      var body = content ? content.$t : summary.$t;
      var snippet = (body).replace(/<[^>]*>?/g,'').substring( 0, defaults.snippet ) + '...';
      var img = data.media$thumbnail;
      var tempHtml = document.createElement('div');
      tempHtml.innerHTML = body;
      var imgHtml = tempHtml.querySelector('img');
      var image = ( img ? img.url : (imgHtml ? imgHtml.src : defaults.image)).replace( /s\B\d{2,4}-c/, defaults.imgSize); 
      var url = (function(){
         for ( var i = 0; i < data.link.length; i++ ){
            var link = data.link[i];
            if ( link.rel === 'alternate' ){
               return link.href;
            }
         }
      })();
      var published = new Date( data.published.$t ).toLocaleDateString(
         'es-ES',
         {
            year:'numeric',
            month:'long',
            day: 'numeric'
         }
      );
      return (
         '<li>'+ '<a href="' + url + '" class="related-post-link">'+ title + '</a>'+ '</li>'
      );
   }
   function related( json ){
      var i = 0;
      var post;
      var length = defaults.length;
      for ( ; i < length && ( post = json.feed.entry[ i ] ); i++ ){
         if ( defaults.id !== post.id.$t.split( '.post-' )[ 1 ] ){
            defaults.container.innerHTML += render( post );
         } else {
            length++;
         }
      }
   }
   return related;
   })();

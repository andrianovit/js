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
      var url = (function(){
         for ( var i = 0; i < data.link.length; i++ ){
            var link = data.link[i];
            if ( link.rel === 'alternate' ){
               return link.href;
            }
         }
      })();
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

if(/.+\.html(\?m=1)?$/.test(location.href)){var getPageTitle=function(a,c){var d=a.getAttribute("href").replace(location.protocol+"//"+location.hostname,""),b=document.createElement("script");b.src="/feeds/posts/summary?alt=json-in-script&max-results=1&redirect=false&path="+d+"&callback="+c.name;document.body.appendChild(b)},setPageTitle=function(a,c,d,b){if(a.feed.entry&&0<a.feed.entry.length)var e=a.feed.entry[0].title.$t;e&&(c.innerHTML=d+e+b)},olderLink=document.getElementById("Blog1_blog-pager-older-link");
if(olderLink){var setOlderPageTitle=function(a){setPageTitle(a,olderLink,"","")};getPageTitle(olderLink,setOlderPageTitle)}var newerLink=document.getElementById("Blog1_blog-pager-newer-link");if(newerLink){var setNewerPageTitle=function(a){setPageTitle(a,newerLink,"","")};getPageTitle(newerLink,setNewerPageTitle)}};

!function(){var a=function(){var a=[];for(var c in b.services){var d="",e="";switch(c){case "iframe":d=c+'[data-src*="//',e='"]';break;case "object":d=c+'[data*="//',e='"]'}a.push(d+b.services[c].join(e+","+d)+e)}return[].slice.call(document.body.querySelectorAll(a.join(",")))},b=function(){var b=a();return b.forEach(function(a,c){a.classList.contains("superembed-ignore")&&b.splice(c)}),function a(){return b.forEach(function(a){var b=0,c=0,d=0,e=0,f=0,g=!1;"position:absolute;top:0;left:0;"===a.getAttribute("style")&&
a.src.includes("gfycat.com/ifr/")&&!a.getAttribute("data-width")&&(a.setAttribute("style",""),a.parentElement.setAttribute("style",""),a.setAttribute("data-width","16"),a.setAttribute("data-height","9")),a.hasAttribute("data-width")?(c=a.getAttribute("data-width"),d=a.getAttribute("data-height")):(a.classList.contains("superembed-square")?(c=1,d=1):a.hasAttribute("width")?(c=a.offsetWidth,d=a.offsetHeight):(c=16,d=9),a.setAttribute("data-width",c),a.setAttribute("data-height",d)),window.getComputedStyle?
(e=parseInt(window.getComputedStyle(a.parentElement,null).getPropertyValue("width")),f=parseInt(window.getComputedStyle(document.body,null).getPropertyValue("height"))):(e=a.parentElement.offsetWidth,f=document.body.clientHeight),c!=e&&(b=e/c,f=d*b,g=!0),d>f&&(b=f/d,e=c*b,g=!0),g&&(a.setAttribute("width",e),a.setAttribute("height",f),c*=b,d*=b)}),a}()};b.services={iframe:["www.youtube.com/embed","player.vimeo.com/video","www.kickstarter.com/projects","players.brightcove.net","www.hulu.com/embed",
"vine.co/v","videopress.com/embed","www.dailymotion.com/embed","vid.me/e","player.twitch.tv","facebook.com/plugins/video.php","gfycat.com/ifr/","liveleak.com/ll_embed","media.myspace.com","archive.org/embed"],object:["www.flickr.com/apps/video"],css:[".superembed-force"]},window.superEmbed=b}(),window.jQuery?jQuery(document).ready(function(){jQuery(window).resize(superEmbed())}):window.addEventListener("DOMContentLoaded",function(){window.addEventListener("resize",superEmbed())});

var $stickyRight = $('#toc-right');
var $stickyLeft = $('#toc-left');

var topRightHeight = $stickyRight.offset().top;
var topLeftHeight = $stickyLeft.offset().top;

$(window).scroll(function() {
  $stickyRight.toggleClass("fixed", $(window).scrollTop() > topRightHeight-20)
  $stickyLeft.toggleClass("fixed", $(window).scrollTop() > topLeftHeight-20)
});

navigator.isChrome = (function() {
  var ua = navigator.userAgent
  var regexMatch = ua.match(/(chrome)\/?\s*(\d+)/i) || false;
  return regexMatch
})()

if (navigator.isChrome) {
  var client = new ZeroClipboard( document.getElementById("copyRawCSS") );

  client.on( "ready", function(readyEvent) {
    client.on( "aftercopy", function(event) {
      // `this` === `client`
      // `event.target` === the element that was clicked
      $('.copyBoardButton .copy-info').html('Copied!');
      $('.copyBoardButton .copy-info').css({'width':'40%'});
    });
  });

  $('#copyRawCSS').hover(function(){
    $('.copyBoardButton .copy-info').css({'width':'80%'});
    $('.copyBoardButton .copy-info').html('Copy to clipboard');
    $('.copyBoardButton div').show();
  }, function(){
    $('.copyBoardButton div').hide();
  });
} else {
  var el = document.getElementById('copyRawCSS');
  el.parentNode.removeChild(el);
}

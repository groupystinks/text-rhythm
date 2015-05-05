var $stickyRight = $('#toc-right');
var $stickyLeft = $('#toc-left');

var topRightHeight = $stickyRight.offset().top;
var topLeftHeight = $stickyLeft.offset().top;

$(window).scroll(function() {
  $stickyRight.toggleClass("fixed", $(window).scrollTop() > topRightHeight-20)
  $stickyLeft.toggleClass("fixed", $(window).scrollTop() > topLeftHeight-20)
});


var client = new ZeroClipboard( document.getElementById("copyRawCSS") );

client.on( "ready", function(readyEvent) {
  client.on( "aftercopy", function(event) {
    // `this` === `client`
    // `event.target` === the element that was clicked
    $('.copyBoardButton .copy-info').html('Copied!');
    $('.copyBoardButton .copy-info').css({'width':'50px'});
  });
});

$('#copyRawCSS').hover(function(){
  $('.copyBoardButton .copy-info').css({'width':'120px'});
  $('.copyBoardButton .copy-info').html('Copy to clipboard');
  $('.copyBoardButton div').show();
}, function(){
  $('.copyBoardButton div').hide();
});

var $stickyRight = $('#toc-right');
var $stickyLeft = $('#toc-left');

var topRightHeight = $stickyRight.offset().top;
var topLeftHeight = $stickyLeft.offset().top;

$(window).scroll(function() {
  $stickyRight.toggleClass("fixed", $(window).scrollTop() > topRightHeight-20)
  $stickyLeft.toggleClass("fixed", $(window).scrollTop() > topLeftHeight-20)
});

$(document).scroll(function() {
  const windowHeight = $(document).scrollTop();
  if (windowHeight > 25) {
    $('#scroll-btn').fadeIn({duration: 400, easing: 'linear'});
  } else {
    $('#scroll-btn').fadeOut({duration: 400, easing: 'linear'});
  }
});

$('#scroll-btn').click(function() {
  $(document).scrollTop(0);
  $('.new-tweet').slideDown({duration: 100, easing: 'linear'});
  $('#tweet-text').focus();
});
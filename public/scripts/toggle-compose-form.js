$('.compose-toggle').click(() => {
  $('.new-tweet').slideToggle({duration: 500, easing: 'linear'});
  $('#tweet-text').focus();
});
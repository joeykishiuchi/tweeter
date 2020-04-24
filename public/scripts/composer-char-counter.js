$(document).ready(function() {
  const slideToggle = {
    duration: 250,
    easing: 'linear'
  };
  const setCounterColor = function() {
    let charCount = 140 - $(this).val().length;
    if (charCount < 0) {
      $(this).siblings('.counter').text(charCount).css('color','red');
      $('#char-limit-err').slideDown(slideToggle);
    } else {
      $('#char-limit-err').slideUp(slideToggle);
      $(this).siblings('.counter').text(charCount).css('color','#545149');
    }
  }
  // Accounts for different input situations
  $("#tweet-text").on('keydown', setCounterColor);
  $("#tweet-text").on('keyup', setCounterColor);
  $("#tweet-text").on('paste', setCounterColor);
})
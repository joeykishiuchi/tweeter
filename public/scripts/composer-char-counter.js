const slideToggle = {
  duration: 250,
  easing: 'linear'
};

$(document).ready(function() {
  const setCounterColor = function() {
    let charCount = 140 - $(this).val().length;
    if (charCount < 0) {
      $(this).siblings('.counter').text(charCount).css('color','red');
    } else {
      $(this).siblings('.counter').text(charCount).css('color','#545149');
      $('#char-limit-err').slideUp(slideToggle);
      $('#empty-input-err').slideUp(slideToggle);
    }
  }
  // Accounts for different input situations
  $("#tweet-text").on('keydown', setCounterColor);
  $("#tweet-text").on('keyup', setCounterColor);
  $("#tweet-text").on('paste', setCounterColor);
})
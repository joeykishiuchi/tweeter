$(document).ready(function() {
  const setCounterColor = function() {
    let charCount = 140 - $(this).val().length;
    if (charCount < 0) {
      $(this).siblings('.counter').text(charCount).css('color','red');
    } else {
      $(this).siblings('.counter').text(charCount).css('color','#545149');
    }
  }
  // Accounts for different input situations
  $("#tweet-text").on('keydown', setCounterColor);
  $("#tweet-text").on('keyup', setCounterColor);
  $("#tweet-text").on('paste', setCounterColor);
  // resets counter to 140 when tweet is submitted
  $('form').submit(function() {
    $(this).children('.counter').text(140);
  });
})
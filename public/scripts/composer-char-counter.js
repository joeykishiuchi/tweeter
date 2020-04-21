$(document).ready(function() {
  // --- our code goes here ---
  $("#tweet-text").on('keydown', function() {
    let charCount = 140 - this.value.length;
    if (charCount < 0) {
      $(this).siblings('.counter').text(charCount).css('color','red');
    } else {
      $(this).siblings('.counter').text(charCount).css('color','#545149');
    }
  });
})
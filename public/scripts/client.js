/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const formatDate = function(timestamp) {
  const date = new Date(timestamp);
  return date;
};

const renderTweets = function(database) {
  for (const data of database) {
    const $tweet = createTweetElement(data);
    // Adds new tweets to the top of the container
    $('#tweet-container').prepend($tweet).slideDown();
  }
};

const loadTweets = function() {
  $.getJSON('/tweets',)
  .then(function(tweets) {
    renderTweets(tweets);
  });
};
// Loads and displays all tweets in database when page is opened
loadTweets();

$("form").submit(function(event) {
  event.preventDefault();
  const charCounter = $(this).children('.counter').text();
  if (Number(charCounter < 0)) {
    $('#char-limit-err').slideToggle('slow');
  } else {
    $.post('/tweets', $(this).serialize())
    .then(function() {
      // empties the tweet container so that the database isn't added to the previously loaded database
      $('#tweet-container').empty();
      loadTweets();
    });
    $('#char-limit-err').slideUp('slow');
    // Resets counter to 140 when tweet is submitted
    $(this).children('.counter').text(140);
    // Resets input to empty when form is submitted
    $(this)[0].reset();
  }
});

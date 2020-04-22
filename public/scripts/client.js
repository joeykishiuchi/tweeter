/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const formatDate = function(timestamp) {
  const date = new Date(timestamp);
  console.log(date);
  return date;
};

const renderTweets = function(database) {
  for (const data of database) {
    const $tweet = createTweetElement(data);
    // Adds new tweets to the top of the container
    $('#tweet-container').prepend($tweet);
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
  $.post('/tweets', $(this).serialize()).
  then(function() {
    // empties the tweet container so that the database isn't added to the previously loaded database
    $('#tweet-container').empty();
    loadTweets();
  });
  // Resets the form so that the input is empty
  $(this)[0].reset();
});

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

const createTweetElement = function(data) {
  const time = formatDate(data.created_at);
  let newTweet = `<article class="tweet">
    <header>
      <img class="hover-effect" src=${data.user.avatars}>
      <h5 class="name hover-effect">${data.user.name}<h5>
      <h5 class="tag">${data.user.handle}</h5>
    </header>
    <span class="message hover-effect">${data.content.text}</span>
    <footer>
      <span class="date hover-effect">${time}</span>
    </footer>
  </article>`

  return $(newTweet);
}

const renderTweets = function(database) {
  for (const data of database) {
    const $tweet = createTweetElement(data);
    $('#tweet-container').append($tweet);
  }
};

const loadTweets = function() {
  $.ajax('/tweets', {method: 'GET'})
  .then(function(tweets) {
    $('#tweet-container').prepend(createTweetElement(tweets[tweets.length - 1]));
  });
};

$(document).ready(() => {

  $("form").submit(function() {
    event.preventDefault();
    $.ajax('/tweets', { method: 'POST', data: $(this).serialize() }).
    then(function() {
      loadTweets();
    });
    $(this).find('#tweet-text').val('');
  });

});
// Creates a new instance of a tweet to be added to the tweet-container

const createTweetElement = function(data) {
  const time = formatDate(data.created_at);
  let newTweet = `<article class="tweet">
    <header>
      <img class="hover-effect" src=${data.user.avatars}>
      <h5 class="name hover-effect">${data.user.name}<h5>
      <h5 class="tag">${data.user.handle}</h5>
    </header>
    <span class="message hover-effect">${escape(data.content.text)}</span>
    <footer>
      <span class="date hover-effect">${time}</span>
    </footer>
  </article>`

  return $(newTweet);
}
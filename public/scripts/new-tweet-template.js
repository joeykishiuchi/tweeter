// Creates a new instance of a tweet to be added to the tweet-container
const createTweetElement = function(data) {
  const date = new Date(data.created_at);
  const timeAgo = moment(date).fromNow();
  let newTweet = `<article class="tweet">
    <header>
      <img class="hover-effect" src=${data.user.avatars}>
      <h5 class="name hover-effect">${data.user.name}<h5>
      <h5 class="tag">${data.user.handle}</h5>
    </header>
    <p class="message hover-effect">${escape(data.content.text)}</p>
    <footer>
      <span class="date hover-effect">${timeAgo}</span>
      <span class="reaction-icons hover-effect">&#9873; &#8630; &#9829;</span>
    </footer>
  </article>`;
  return $(newTweet);
};
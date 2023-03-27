$(document).ready(function() {

  const createTweetElement = function(tweetData) {
    const $tweet = $(`
    <article>
    <header>
      <img src="/images/profile-hex.png">
      <h3>${tweetData.user.name}</h3>
    </header>
    <section class="tweet-text">${tweetData.content.text}</section>
    <footer>
      <span>
        ${timeago.format(tweetData.created_at)}
      </span>
      <div class="icons">
        <i class="fa-regular fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fa-regular fa-heart"></i>
      </div>
    </footer>
  </article>
    `);
    return $tweet;
  }

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
  $("#tweets-container").append($tweet);

  }
}

const loadTweets = function() {
  $.ajax({
    type: "GET",
    url: "/tweets",
  }).then(function(data) {
  renderTweets(data);
  });
}

  $("form").submit(function(event) {
    event.preventDefault();
    
    if ($( this ).find("textarea").val() === "" || $( this ).find("textarea").val() === null) {
      alert("Tweet box cannot be left empty");
    }

    $.ajax({
      type: "POST",
      url: '/tweets',
      data: $(this).serialize(),
    }).then(function() {
      $("#tweets-container").empty();
      loadTweets();
    });
  });
  loadTweets();
})
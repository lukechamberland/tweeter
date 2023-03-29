$(document).ready(function() {
 
  // Implements the correct random names and avatars, and timeago

  const createTweetElement = function(tweetData) {
    const $tweet = $(`
    <article>
    <header>
      <img src="${tweetData.user.avatars}">
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
// Renders the tweets in reverse order

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
  $("#tweets-container").prepend($tweet);

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

// Implements errors

  $("form").submit(function(event) {
    event.preventDefault();
    if ($( this ).find("textarea").val() === "" || $( this ).find("textarea").val() === null) {
      $('.error').css("display", "block");
      return;
    } else {
      $('.error').css("display", "none");
    }
    if ($(this).find("textarea").val().length > 140) {
      $(".exceeded-error").css("display", "block");
      return;
    } else {
      $(".exceeded-error").css("display", "none");
    }
    
// clears text area and loads tweet after tweet is submitted

    $.ajax({
      type: "POST",
      url: '/tweets',
      data: $(this).serialize(),
    }).then(function() {
      $("textarea").val('');
      $("#tweets-container").empty();
      $(".counter").val(140);
      loadTweets();
    });
  });
  loadTweets();
});

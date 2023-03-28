$(document).ready(function() {
  $("#tweet-text").keydown(function() {
    let str = $(this).val()
    let counter = 140 - str.length
    $(".counter").val(counter)
    if (counter <= 0) {
      $(".counter").css("color", "red")
    } else {
      $(".counter").css("color", "black")
    }
  })
  $('#tweet-text').keyup(function() {
    var characterCount = $(this).val().length;
    if (characterCount > 140) {
      $('.error-message').css("display", "show")
    }
  });
});


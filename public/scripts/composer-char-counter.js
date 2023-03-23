$(document).ready(function() {
  console.log('Test');
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
});


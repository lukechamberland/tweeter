$(document).ready(function() {

  // Implement proper counter and color change
  
  $("#tweet-text").on("input", function() {
    let str = $(this).val();
    let counter = 140 - str.length;
    $(".counter").val(counter);
    if (counter <= 0) {
      $(".counter").css("color", "red");
    } else {
      $(".counter").css("color", "black");
    }
  });
});

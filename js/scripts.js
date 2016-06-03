$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    var name = $("input#name").val();
    $(".name").text(name);
    var address = $("input#address").val();
    $(".address").text(address);

    var activity = $("select#activity").val();
    var local = $("select#local").val();
    var zodiac = $("select#zodiac").val();
    var relax = $("select#relax").val();
    var company = $("select#company").val();
    $(".error").removeClass("error");
    $(".message").remove();

    if (name === "") {
      $(".name-form").addClass("error");
      $(".name-form").append("<p class='message'>Enter your name.</p>");
    } else if (address === "") {
      $(".address-form").addClass("error");
      $(".address-form").append("<p class='message'>Enter where you're from.</p>");
    } else if (activity === "Hike and camp" || relax === "Am outside of my comfort zone") {
      $(".result").text("Kyrgyzstan");
      $(".result-img").attr("src", "img/kyrgyzstan.png");
      $("#vacation").slideUp();
      $("#result").show();
      $(".goback").show();
    } else if (activity === "Lie on the beach" || local === "Play billiard and drink some rum") {
      $(".result").text("Barbados");
      $(".result-img").attr("src", "img/barbados.png");
      $("#vacation").slideUp();
      $("#result").show();
      $(".goback").show();
    } else if (activity === "Eat curry" || relax === "Do yoga" || local === "Unplug yourself and meditate") {
      $(".result").text("Soul & Surf, Kerala, India");
      $(".result-img").attr("src", "img/india.png");
      $("#vacation").slideUp();
      $("#result").show();
      $(".goback").show();
    } else {
      $(".result").text("Tallinn, Estonia");
      $(".result-img").attr("src", "img/tallinn.png");
      $("#vacation").slideUp();
      $("#result").show();
      $(".goback").show();
    }
    event.preventDefault();
  });
});

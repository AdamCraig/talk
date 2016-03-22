$(document).ready(function() {
  $("button#bark").click(function() {
    $("ul#user").prepend("<li>Bark!</li>");
    $("ul#webpage").prepend("<li>Meow!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#meow").click(function() {
    $("ul#user").prepend("<li>Grrr!</li>");
    $("ul#webpage").prepend("<li>Hisss!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#pic").click(function() {
    $("ul#user").after("ADD IMAGE HERE");
    $("ul#webpage").prepend("<li>Meow!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

});

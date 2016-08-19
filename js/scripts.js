//Back end logic
$(document).ready(function() {
  var userInput = $("input#userInput").val();
  parseInt(userInput);

//Front end logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    var userInput = $("input#userInput").val();
    event.preventDefault();
    var array = [];
    for (i = 1; i <= userInput; i++) {

      if (i % 3 === 0 && i % 5 != 0) {
        array.push("ping!" + " ");
      }
      else if (i % 5 === 0 && i % 3 != 0) {
        array.push("pong!" + " ");
      }
      else if (i % 5 === 0 && i % 3 === 0) {
        array.push("pingpong!" + " ");
      }
      else {array.push(i + " ");}
    }
    var cleanArray = array.join(" ")
    $(".output").text(cleanArray);

  });
  });

});

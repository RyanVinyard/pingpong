//Back end logic
var userInput = $("input#userInput").val();
parseInt(userInput);
var riddleAnswerIncrement = 0
parseInt(riddleAnswerIncrement)
var numberArray1 = [];
$(".output").empty();
var clear = function() {
  $(".output").empty();
  numberArray1 = [];
}
var numberArray = function(userInput) {
  clear();
  for (i = 1; i <= userInput; i++) {
    if (i % 3 === 0 && i % 5 != 0) {
      numberArray1.push("ping!");
    }
    else if (i % 5 === 0 && i % 3 != 0) {
      numberArray1.push("pong!");
    }
    else if (i % 5 === 0 && i % 3 === 0) {
      numberArray1.push("pingpong!");
    }
    else {
      numberArray1.push(i);
    }
  }
  riddleAnswerIncrement++;
}
//Front end logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    $("#descriptor").hide();
    var userInput = $("input#userInput").val();
    numberArray(userInput);
    for (i = numberArray1.length-1; i >= 0; i--) {
    $("ul.output").prepend('<li>' + numberArray1[i] + '</li>');
    $("#descriptor").show("slow");
      if (riddleAnswerIncrement >= 6) {
        $("#riddleAnswer").show("slow");
      }
    }
  });
});

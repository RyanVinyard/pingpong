//Back end logic
var userInput = $("input#userInput").val();
parseInt(userInput);
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
}
//Front end logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#userInput").val();
    numberArray(userInput);
    for (i = numberArray1.length-1; i >= 0; i--) {
    $("ul.output").prepend('<li>' + numberArray1[i] + '</li>');
    }
  });
});

// THIS IS THE GOOD ONE QUIT HITTING ALT Z NOW

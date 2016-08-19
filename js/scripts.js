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

      array.push(i + " ");
    }
    cleanArray = array.join(" ")
    $(".output").text(cleanArray);
    console.log(cleanArray);

  });
  });

});

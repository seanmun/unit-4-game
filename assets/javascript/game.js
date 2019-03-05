// Global vars
var randomNumber;
var losses = 0;
var wins = 0;
var images = ["assets/images/gem1.png", "assets/images/gem2.png", "assets/images/gem3.png", "assets/images/gem4.png"];
var previous = 0;
  
//Start the game
var startGame = function() {

  $(".crystals").empty();

  var images = [
    'assets/images/gem1.png', 
    'assets/images/gem2.png', 
    'assets/images/gem3.png', 
    'assets/images/gem4.png'
  ]
  // Create random Number
  randomNumber = Math.floor(Math.random() * 101) + 19;
  console.log(randomNumber);
  $("#randomNumber").text(randomNumber);



  // create random number for crystals
  for (var i = 0; i < 4; i++) {

      var random = Math.floor(Math.random() * 11) + 1;
      console.log(random)
  // Create crystal divs
      var crystal = $("<div>");
          crystal.attr({
            "class": 'crystal',
            "data-random": random,
          });
          crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size": "contain",
            "background-repeat": "no-repeat"
          })

      $(".crystals").append(crystal);
  }
}

startGame()

var reset = function(){

}

// on click for selecting crystals
$(document).on('click', ".crystal", function() {
  // create a running count
  var count = parseInt($(this).attr('data-random'));

  // add count
  previous += count;

  // print score
  $("#finalTotal").text(previous);

  console.log(count)

  // alert if win or lose
  if(previous > randomNumber) {
   alert("You Lose!");
   //add losses to screen
   losses++;
   $("#numberLosses").text(losses);
   previous = 0;
   startGame();
  }
  else if(previous === randomNumber){
    alert("You Win!");
    //add wins to screen
    wins++;
    $("#numberWins").text(wins);
    previous = 0;
    startGame();
  }
})



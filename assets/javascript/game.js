// Global vars
var randomNumber;
var losses;
var wins;
var images = ["assets/images/gem1", "assets/images/gem2", "assets/images/gem3", "assets/images/gem4", ];
var previous = 0;

//Start the game
var startGame = function() {

// Create random Number
randomNumber = Math.floor(Math.random() * 101 + 19);
console.log(randomNumber)
$("#randomNumber").text(randomNumber)

// create random numer for crystals
for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 12);
    console.log(random)
// Create crystam divs
    var crystal = $("<div>");
        crystal.attr({
          "class": 'crystal',
          "data-random": random
        });

    $(".crystals").append(crystal);
}
}

startGame()


// on click for selecting crystals
$(".crystal").on('click', function() {
  // create a running count
  var count = parseInt($(this).attr('data-random'));

  // add count
  previous += count;

  console.log(previous)

  // alert if win or lose
  if(previous > randomNumber) {
   console.log("You Lose!");
   alert("You Lose!");
   //add losses to screen
   losses++
   $("#numberLoses").text(losses);
   startGame();
  }
  else if(previous === randomNumber){
    console.log("You did it!");
    alert("You Win!");
    //add wins to screen
    wins++
    $("#numberWins").text(wins)
    startGame()
  }
})



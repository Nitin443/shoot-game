var winOfPlayer1 = 0;
var winOfPlayer2 = 0;

var player1Health = 100;
var player2Health = 100;


function startGame() {

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  if (player1Health <= 0) {
    winOfPlayer2++;
    if (winOfPlayer2 === 3) {
      document.getElementById("player2").innerHTML = winOfPlayer2;
      document.getElementById("result").innerHTML = "player 2 win";
      // auto refresh in 2 second after winning
      setTimeout(function() {
        location.reload();
      }, 2000);

    } else {
      document.getElementById("player2").innerHTML = winOfPlayer2;
      player1Health = 100;
      player2Health = 100;
    }

  } else if (player2Health <= 0) {
    winOfPlayer1++;
    if (winOfPlayer1 === 3) {
      document.getElementById("player1").innerHTML = winOfPlayer1;
      document.getElementById("result").innerHTML = "player 1 win";
      // auto refresh in 2 second after winning
      setTimeout(function() {
        location.reload();
      }, 2000);
    } else {
      document.getElementById("player1").innerHTML = winOfPlayer1;
      player1Health = 100;
      player2Health = 100;
    }

  } else {
    player1Health = player1Health - randomNumber1;
    player2Health = player2Health - randomNumber2;
    startGame();
  }

}

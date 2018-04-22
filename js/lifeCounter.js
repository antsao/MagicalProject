var player1Life;
var player2Life;
var player3Life;
var player4Life;
var player5Life;
var player6Life;

var playerCount;

function addClickPlayer1() {
  player1Life += parseInt($("#player1Amount").val());
  $("#player1LifeTotal").html("" + player1Life);
}

function minusClickPlayer1() {
  player1Life -= parseInt($("#player1Amount").val());
  $("#player1LifeTotal").html("" + player1Life);
}

function addPlayer() {

}

function removePlayer1() {

}

function removePlayer2() {

}

function removePlayer3() {

}

function removePlayer4() {

}

function removePlayer5() {

}

function removePlayer6() {

}

function changeBackgroundPlayer1() {

}

function changeBackgroundPlayer2() {

}

function changeBackgroundPlayer3() {

}

function changeBackgroundPlayer4() {

}

function changeBackgroundPlayer5() {

}

function changeBackgroundPlayer6() {

}

function main() {
  var islandImageUrl = "./img/island.png";
  var forestImageUrl = "./img/forest.png";
  var swampImageUrl = "./img/swamp.png";
  var mountainUrl = "./img/mountain.png";
  var plainsUrl = "./img/plains.png";

  player1Life = 20;
  player2Life = 20;
  player3Life = 20;
  player4Life = 20;
  player5Life = 20;
  player6Life = 20;

  playerCount = 2;

  $("#player1").css("background-image", "url(" + islandImageUrl + ")");
  $("#player1").css("background-size", "cover");
  $("#player1").css("background-position", "center");

  $("#player2").css("background-image", "url(" + forestImageUrl + ")");
  $("#player2").css("background-size", "cover");
  $("#player2").css("background-position", "center");
}

$(document).ready(main);

var playerCount;

function addLife(playerAmount, playerLifeTotal) {
  document.getElementById(playerLifeTotal).innerHTML =
    parseInt(document.getElementById(playerLifeTotal).innerHTML) +
    parseInt(document.getElementById(playerAmount).value);
}

function minusLife(playerAmount, playerLifeTotal) {
  document.getElementById(playerLifeTotal).innerHTML =
    parseInt(document.getElementById(playerLifeTotal).innerHTML) -
    parseInt(document.getElementById(playerAmount).value);
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

  playerCount = 2;

  $("#player1").css("background-image", "url(" + islandImageUrl + ")");
  $("#player1").css("background-size", "cover");
  $("#player1").css("background-position", "center");

  $("#player2").css("background-image", "url(" + forestImageUrl + ")");
  $("#player2").css("background-size", "cover");
  $("#player2").css("background-position", "center");
}

$(document).ready(main);

var playerCount;
var defaultLifeTotal;

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

function resetLife(playerLifeTotal) {
  document.getElementById(playerLifeTotal).innerHTML = defaultLifeTotal;
}

function addPlayer() {

}

function removePlayer() {

}

function changeBackground() {

}

function main() {
  var islandImageUrl = "./img/island.png";
  var forestImageUrl = "./img/forest.png";
  var swampImageUrl = "./img/swamp.png";
  var mountainImageUrl = "./img/mountain.png";
  var plainsImageUrl = "./img/plains.png";

  playerCount = 2;
  defaultLifeTotal = 20;

  $("#player1").css("background-image", "url(" + mountainImageUrl + ")");
  $("#player2").css("background-image", "url(" + forestImageUrl + ")");

  $("#player3").css("background-image", "url(" + islandImageUrl + ")");
  $("#player3").css("display", "none");

  $("#player4").css("background-image", "url(" + swampImageUrl + ")");
  $("#player4").css("display", "none");

  $("#player5").css("background-image", "url(" + plainsImageUrl + ")");
  $("#player5").css("display", "none");

  $("#player6").css("background-image", "url(" + islandImageUrl + ")");
  $("#player6").css("display", "none");
}

$(document).ready(main);

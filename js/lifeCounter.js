var player1Life;
var player2Life;
var player3Life;
var player4Life;
var player5Life;
var player6Life;
var player7Life;
var player8life;

function addClickPlayer1() {
  var amount = $("#Player1").text();
  $("#player1").html("" + amount + player1Life);
}

function main() {
  var islandImageUrl = "./img/island.png";
  var forestImageUrl = "./img/forest.png";

  var player1Life = 20;
  var player2Life = 20;

  $("#player1").css("background-image", "url(" + islandImageUrl + ")");
  $("#player1").css("background-size", "cover");
  $("#player1").css("background-position", "center");

  $("#player2").css("background-image", "url(" + forestImageUrl + ")");
  $("#player2").css("background-size", "cover");
  $("#player2").css("background-position", "center");
}

$(document).ready(main);

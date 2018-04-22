function main() {
  var islandImageUrl = "./img/island.png";
  var forestImageUrl = "./img/forest.png";

  $("#player1").css("background-image", "url(" + islandImageUrl + ")");
  $("#player1").css("background-size", "cover");
  $("#player1").css("background-position", "center");

  $("#player2").css("background-image", "url(" + forestImageUrl + ")");
  $("#player2").css("background-size", "cover");
  $("#player2").css("background-position", "center");
}

$(document).ready(main);

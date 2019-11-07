"use strict";

var _genGrid = _interopRequireDefault(require("../js/genGrid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Demander le nom des joueurs
var name_j1 = prompt("Entrez le nom du joueur 1 : ");
var name_j2 = prompt("Entrez le nom du joueur 2 : ");

if (!name_j1 || name_j1 === "") {
  name_j1 = "Joueur 1";
}

if (!name_j2 || name_j2 === "") {
  name_j2 = "Joueur 2";
} //Insérer la grille dans le HTML


$(document).ready(function () {
  var grid = new _genGrid["default"](10, 10);
  grid.createGrid();
}); //cd /c/Users/User/Desktop/OPENCLASSROOMS/p6_plateau
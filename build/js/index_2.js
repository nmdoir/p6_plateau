"use strict";

//Demander le nom des joueurs
//import {GenGrid} from "../js/genGrid";
//import {Weapon} from "./weapon";
//import {Cell} from "./cell";
var name_j1 = prompt("Entrez le nom du joueur 1 : ");
var name_j2 = prompt("Entrez le nom du joueur 2 : ");

if (!name_j1 || name_j1 === "") {
  name_j1 = "Joueur 1";
}

if (!name_j2 || name_j2 === "") {
  name_j2 = "Joueur 2";
} //Function to generate the empty grid


function createGrid() {
  var bloc = document.getElementById('board');
  var table = document.createElement('table');
  var tbody = document.createElement('tbody');
  table.setAttribute("class", "center");
  table.appendChild(tbody);

  for (var i = 0; i < 10; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("class", "tdstyle");
    tbody.appendChild(tr);

    for (var j = 0; j < 10; j++) {
      var td = document.createElement('td');
      td.setAttribute("class", "tdstyle");
      td.id = "td-" + i + j;
      tr.appendChild(td);
    }
  }

  bloc.appendChild(table);
} //Generate a random cell id


function getRandomCell() {
  var randomInt = 0;
  var i = 0;
  var id = null;
  var cell = null;

  for (i = 0; i < 100; i++) {
    randomInt = Math.floor(Math.random() * 100);

    if (randomInt < 10) {
      id = 'td-0';
    } else {
      id = 'td-';
    }

    cell = document.getElementById(id + randomInt);

    while (cell.hasAttribute("data-access") || cell.hasAttribute("data-weapon") || cell.hasAttribute("data-player")) {
      randomInt = Math.floor(Math.random() * 100);

      if (randomInt < 10) {
        id = 'td-0';
      } else {
        id = 'td-';
      }

      cell = document.getElementById(id + randomInt);
    }
  }

  return cell;
}

function createNoAccess() {
  var cell = null;

  for (var i = 0; i < 25; i++) {
    cell = getRandomCell();
    cell.style.backgroundColor = 'black';
    cell.setAttribute('data-access', 0);
  }
}

var weaponTab = [{
  "name": "bow",
  "damage": "5"
}, {
  "name": "knife",
  "damage": "10"
}, {
  "name": "sword",
  "damage": "15"
}, {
  "name": "pistol",
  "damage": "20"
}, {
  "name": "dynamite",
  "damage": "25"
}, {
  "name": "bomb",
  "damage": "30"
}];

function getRandomWeapon() {
  var randomInt = 0;

  for (var i = 0; i < weaponTab.length; i++) {
    randomInt = Math.floor(Math.random() * weaponTab.length);
  }

  return weaponTab[randomInt].name;
}

function createWeapon() {
  var cell = null;

  for (var i = 0; i < 8; i++) {
    var randomWeapon = getRandomWeapon();
    cell = getRandomCell(); //document.getElementById(id + randomInt);

    cell.setAttribute('data-weapon', randomWeapon);
  }
}

var playerTab = [{
  "id": 1,
  "name": name_j1
}, {
  "id": 2,
  "name": name_j2
}];

function createPlayer() {
  var cellPlayer1 = getRandomCell(); //document.getElementById(id + randomInt);

  cellPlayer1.setAttribute('data-player', "player1");
  var cellPlayer2 = getRandomCell();
  cellPlayer2.setAttribute('data-player', "player2");
} //Insérer la grille dans le HTML


$(document).ready(function () {
  createGrid();
  createNoAccess();
  createWeapon();
  createPlayer();
});
/*$(document).ready(function() {
    let grid = new GenGrid(10, 10);
    grid.createGrid();
});*/
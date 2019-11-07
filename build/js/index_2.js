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
  var id = null;
  var cell = null;

  for (var i = 0; i < 100; i++) {
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
  "id": "player-1",
  "name": name_j1,
  "life": 100,
  "weapon": null,
  "move": null,
  "position": null
}, {
  "id": "player-2",
  "name": name_j2,
  "life": 100,
  "weapon": null,
  "move": null,
  "position": null
}];
/*function createPlayer() {
    for (let i = 0; i < playerTab.length; i++) {
        let randomCell = getRandomCell();
        playerTab[i].position = randomCell;
        randomCell.setAttribute('data-player', playerTab[i].id);
    }
}*/

function createPlayer() {
  var cellPlayer1 = getRandomCell();
  cellPlayer1.setAttribute('data-player', "player1");
  playerTab[0].position = cellPlayer1;
  var cellPlayer2 = getRandomCell();
  cellPlayer2.setAttribute('data-player', "player2");
  playerTab[1].position = cellPlayer2;
}
/*function availableMove() {
    for (let i = 0; i < playerTab.length; i++) {
        let currentCellId = document.getElementById(playerTab[i].position); //td-57
        let currentCell = currentCellId[3] + currentCellId[4];
        let access = [-30, -20, -10, -3, -2, -1, 1, 2, 3, 10, 20, 30];
        let availableCells = [];
        for (let number of access) {
            availableCells.push("td-" + (number + currentCell));
        }
        for (let element of availableCells) {
            let accessibleCell = document.getElementById(element);
            if (!accessibleCell.hasAttribute('data-player)' && !accessibleCell.hasAttribute('data-access')) { //Comment gérer les fins/début de ligne?
            accessibleCell.setAttribute('data-playeraccess', 1);
        }
    }
}
}*/
//Insérer la grille dans le HTML


$(document).ready(function () {
  createGrid();
  createNoAccess();
  createWeapon();
  createPlayer(); //availableMove();
});
/*$(document).ready(function() {
    let grid = new GenGrid(10, 10);
    grid.createGrid();
});*/
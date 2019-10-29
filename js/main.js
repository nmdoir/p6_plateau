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
}

//Function to generate the empty grid
function createGrid() {
    let bloc = document.getElementById('board');
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    table.setAttribute("class", "center");
    table.appendChild(tbody);

    for (let i = 0; i < 10; i++) {
        let tr = document.createElement('tr');
        tr.setAttribute("class","tdstyle");
        tbody.appendChild(tr);

        for (let j = 0; j < 10; j++) {
            let td = document.createElement('td');
            td.setAttribute("class","tdstyle");
            td.id = "td-" + i + j;
            tr.appendChild(td);
        }
    }

    bloc.appendChild(table);
}

//Generate a random cell id
function getRandomCell() {
    let randomInt = 0;
    let i = 0;
    let id = null;
    let cell = null;

    for (i =0; i < 100; i++) {
        randomInt = Math.floor(Math.random() * 100);
        if (randomInt < 10) {
            id = 'td-0'
        } else {
            id = 'td-'
        }
        cell = document.getElementById(id + randomInt);
    }
    return cell;
}

function createNoAccess() {
    let cell = null;
    for (let i = 0; i < 25; i++) {
        cell = getRandomCell();
        cell.style.backgroundColor = 'black';
        cell.setAttribute('data-access', 0);
    }
}


let weaponTab = [
    {
        "name": "bow",
        "damage": "5"
    },
    {
        "name": "knife",
        "damage": "10"
    },
    {
        "name": "sword",
        "damage": "15"
    },
    {
        "name": "pistol",
        "damage": "20"
    },
    {
        "name": "dynamite",
        "damage": "25"
    },
    {
        "name": "bomb",
        "damage": "30"
    }
];

function getRandomWeapon() {
    let randomInt = 0;

    for (let i = 0; i < weaponTab.length; i++) {
        randomInt = Math.floor(Math.random() * weaponTab.length);
    }
    return weaponTab[randomInt].name;
}

function createWeapon() {
    let cell = null;
    //let weapon = new Weapon();
    //let Cell = new Cell('access', null, null);

    for (let i = 0; i < 8; i++) {
        let randomWeapon = getRandomWeapon();
        cell = getRandomCell(); //document.getElementById(id + randomInt);
        cell.setAttribute('data-weapon', randomWeapon);
    }
}




//Insérer la grille dans le HTML
$(document).ready(function() {
    createGrid();
    createNoAccess();
    createWeapon();
});

/*$(document).ready(function() {
    let grid = new GenGrid(10, 10);
    grid.createGrid();
});*/
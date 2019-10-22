import { Weapon } from "./Weapon";
import { Player } from "./Player";
import { Grid } from "./Grid";
import { Movement } from "./Movement";

class Game {
    constructor(row, column) {
        this.row = row;
        this.column = column;
        this.app = document.getElementById('app');
        this.playerTab = [];
        this.gridLength = this.row * this.column;
    }

    createGrid() {
        let table = document.createElement('table');
        let tbody = document.createElement('tbody');
        let movement = new Movement();
        let player = new Player();
        this.playerTab = player.getPlayerTab();
        player.whoCanPlay();
        table.appendChild(tbody);

        for (let i = 0; i < this.row; i++) {
            let tr = document.createElement('tr');
            body.appendChild(tr);

            for (let j = 0; j < this.column; j++) {
                let td = document.createElement('td');
                td.setAttribute("data-x", j);
                td.setAttribute("data-y", i);
                td.id = "td-" + i + j;

                td.addEventListener('click', () => {
                    this.playerTab = movement.move(td.id, this.playerTab)
                });
                tr.appendChild(td)
            }
        }
        this.app.appendChild(table);
        this.createNoAccess();
        this.createWeapon();
        this.createPlayer()
    }

    createNoAccess() {
        let Grid = new Grid(null, null, null, this.gridLength);
        let cell = null;
        for (let i = 0; i < 50; i++) {
            cell = Grid.browseTab();
            cell.style.backgroundColor = 'black';
            cell.setAttribute('data-accesscase', 0) //setAttribute?
        }
    }

    createWeapon() {
        let randomWeaponInt = 0;
        let cell = null;
        let weapon = new Weapon();
        let Grid = new Grid('data-accesscase', null, null, this.gridLength);

        // Browse the tab 10 times
        for (let i = 0; i < 10; i++) {
            randomWeaponInt = Math.floor(Math.random() * 5);

            cell = Grid.browseTab();

            let randomWeapon = weapon.getRandomWeapon(randomWeaponInt);
            cell.setAttribute('data-weapon', randomWeapon);
            cell.className = randomWeapon
        }
    }

    createPlayer() {
        let Grid = new Grid('data-accesscase', 'data-weapon', null, this.gridLength);
        let setPlayer = false;

        for (let i = 0; i < 2; i++) {
            let browseTab = Grid.browseTab();
            this.playerTab[i].position = browseTab.id;

            if (!setPlayer) {
                browseTab.className = 'player-1';
                browseTab.setAttribute('data-player', this.playerTab[i].name);
                browseTab.setAttribute('data-class', 'player-1');
                setPlayer = true
            } else {
                browseTab.className = 'player-2';
                browseTab.setAttribute('data-player', this.playerTab[i].name);
                browseTab.setAttribute('data-class', 'player-2');
            }
        }
    }
}

export { Game }
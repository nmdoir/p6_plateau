class GenGrid {
    constructor(row, column) {
        this.row = row;
        this.column = column;
        this.gridLength = this.row * this.column;
    }

    createGrid() {
        let bloc = document.getElementById('board');
        let table = document.createElement('table');
        let tbody = document.createElement('tbody');
        table.setAttribute("class", "center");
        table.appendChild(tbody);

        for (let i = 0; i < this.row; i++) {
            let tr = document.createElement('tr');
            tr.setAttribute("class", "tdstyle");
            tbody.appendChild(tr);

            for (let j = 0; j < this.column; j++) {
                let td = document.createElement('td');
                td.setAttribute("class", "tdstyle");
                td.id = "td-" + i + j;
                tr.appendChild(td);
            }
        }

        bloc.appendChild(table);
        createNoAccess();
        createWeapon();
        createPlayer();
    }

    getRandomCell() {
        let randomInt = 0;
        let i = 0;
        let id = null;
        let cell = null;

        for (i = 0; i < this.gridLength; i++) {
            randomInt = Math.floor(Math.random() * this.gridLength);
            if (randomInt < 10) {
                id = 'td-0'
            } else {
                id = 'td-'
            }
            cell = document.getElementById(id + randomInt);

            while (cell.hasAttribute("data-access") || cell.hasAttribute("data-weapon") || cell.hasAttribute("data-player")) {
                randomInt = Math.floor(Math.random() * this.gridLength);
                if (randomInt < 10) {
                    id = 'td-0'
                } else {
                    id = 'td-'
                }
                cell = document.getElementById(id + randomInt);
            }
        }
        return cell;
    }

    createNoAccess() {
        let cell = null;
        for (let i = 0; i < 25; i++) {
            cell = getRandomCell();
            cell.style.backgroundColor = 'black';
            cell.setAttribute('access', 0);
        }
    }

    createWeapon() {
        let cell = null;
        //let weapon = new Weapon();
        //let Cell = new Cell('data-access', null, null);

        for (let i = 0; i < 8; i++) {
            let randomWeapon = getRandomWeapon();
            cell = getRandomCell();
            cell.setAttribute('data-weapon', randomWeapon);
        }
    }

    createPlayer() {
        let cellPlayer1 = getRandomCell(); //document.getElementById(id + randomInt);
        cellPlayer1.setAttribute('data-player', "player1");
        let cellPlayer2 = getRandomCell();
        cellPlayer2.setAttribute('data-player', "player2");
    }
}

export {GenGrid};


/* class Grid {
    constructor(cellId, access, player, weapon, gridLength) {
        this.cellId = attributeFirst ? attributeFirst : null;
        this.access = attributeSecond ? attributeSecond : null;
        this.player = attributeThird ? attributeThird : null;
        this.gridLength = gridLength
    }

 */


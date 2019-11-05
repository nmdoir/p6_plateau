"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenGrid = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GenGrid =
/*#__PURE__*/
function () {
  function GenGrid(row, column) {
    _classCallCheck(this, GenGrid);

    this.row = row;
    this.column = column;
    this.gridLength = this.row * this.column;
  }

  _createClass(GenGrid, [{
    key: "createGrid",
    value: function createGrid() {
      var bloc = document.getElementById('board');
      var table = document.createElement('table');
      var tbody = document.createElement('tbody');
      table.setAttribute("class", "center");
      table.appendChild(tbody);

      for (var i = 0; i < this.row; i++) {
        var tr = document.createElement('tr');
        tr.setAttribute("class", "tdstyle");
        tbody.appendChild(tr);

        for (var j = 0; j < this.column; j++) {
          var td = document.createElement('td');
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
  }, {
    key: "getRandomCell",
    value: function getRandomCell() {
      var randomInt = 0;
      var i = 0;
      var id = null;
      var cell = null;

      for (i = 0; i < this.gridLength; i++) {
        randomInt = Math.floor(Math.random() * this.gridLength);

        if (randomInt < 10) {
          id = 'td-0';
        } else {
          id = 'td-';
        }

        cell = document.getElementById(id + randomInt);

        while (cell.hasAttribute("data-access") || cell.hasAttribute("data-weapon") || cell.hasAttribute("data-player")) {
          randomInt = Math.floor(Math.random() * this.gridLength);

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
  }, {
    key: "createNoAccess",
    value: function createNoAccess() {
      var cell = null;

      for (var i = 0; i < 25; i++) {
        cell = getRandomCell();
        cell.style.backgroundColor = 'black';
        cell.setAttribute('access', 0);
      }
    }
  }, {
    key: "createWeapon",
    value: function createWeapon() {
      var cell = null; //let weapon = new Weapon();
      //let Cell = new Cell('data-access', null, null);

      for (var i = 0; i < 8; i++) {
        var randomWeapon = getRandomWeapon();
        cell = getRandomCell();
        cell.setAttribute('data-weapon', randomWeapon);
      }
    }
  }, {
    key: "createPlayer",
    value: function createPlayer() {
      var cellPlayer1 = getRandomCell(); //document.getElementById(id + randomInt);

      cellPlayer1.setAttribute('data-player', "player1");
      var cellPlayer2 = getRandomCell();
      cellPlayer2.setAttribute('data-player', "player2");
    }
  }]);

  return GenGrid;
}();
/* class Grid {
    constructor(cellId, access, player, weapon, gridLength) {
        this.cellId = attributeFirst ? attributeFirst : null;
        this.access = attributeSecond ? attributeSecond : null;
        this.player = attributeThird ? attributeThird : null;
        this.gridLength = gridLength
    }

 */


exports.GenGrid = GenGrid;
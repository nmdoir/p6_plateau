"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Player = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function Player() {
  _classCallCheck(this, Player);

  this.name = null;
  this.life = 100;
  this.weapon = null;
  this.position = null;
  this.move = false;
  this.playerTab = [{
    "id": 0,
    "name": this.name,
    "life": this.life,
    "weapon": this.weapon,
    "move": this.move,
    "position": this.position,
    "countMove": 0
  }, {
    "id": 0,
    "name": this.name,
    "life": this.life,
    "weapon": this.weapon,
    "move": this.move,
    "position": this.position,
    "countMove": 0
  }];
};

exports.Player = Player;
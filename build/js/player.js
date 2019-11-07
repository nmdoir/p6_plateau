"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Player = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player =
/*#__PURE__*/
function () {
  function Player() {
    _classCallCheck(this, Player);

    this.name = null;
    this.life = 100;
    this.weapon = null;
    this.position = null;
    this.move = false;
    this.playerTab = [{
      "id": 1,
      "name": name_j1,
      "life": this.life,
      "weapon": this.weapon,
      "position": this.position,
      "move": this.move,
      "countMove": 0
    }, {
      "id": 2,
      "name": name_j2,
      "life": this.life,
      "weapon": this.weapon,
      "position": this.position,
      "move": this.move,
      "countMove": 0
    }];
  }

  _createClass(Player, [{
    key: "availableMove",
    value: function availableMove() {}
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getLife",
    value: function getLife() {
      return this.life;
    }
  }, {
    key: "getWeapon",
    value: function getWeapon() {
      return this.weapon;
    }
  }, {
    key: "getMove",
    value: function getMove() {
      return this.move;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: "increaseLife",
    value: function increaseLife(points) {
      this.life += points;
      return this.life;
    }
  }, {
    key: "decreaseLife",
    value: function decreaseLife(damage) {
      this.life -= damage;
      return this.life;
    }
  }]);

  return Player;
}();

exports.Player = Player;
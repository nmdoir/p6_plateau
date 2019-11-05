"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Weapon = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Weapon =
/*#__PURE__*/
function () {
  function Weapon() {
    _classCallCheck(this, Weapon);

    this.weaponTab = [{
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
  }
  /*getWeaponTab() {
      return this.weaponTab
  }*/


  _createClass(Weapon, [{
    key: "getRandomWeapon",
    value: function getRandomWeapon() {
      var randomInt = 0;

      for (var i = 0; i < this.weaponTab.length; i++) {
        randomInt = Math.floor(Math.random() * this.weaponTab.length);
      }

      return this.weaponTab[randomInt].name;
    }
  }, {
    key: "getWeaponDamage",
    value: function getWeaponDamage() {
      return this.weaponTab[name].damage;
    }
  }]);

  return Weapon;
}();

exports.Weapon = Weapon;
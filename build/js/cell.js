"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cell = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cell = function Cell(access, weapon, player) {
  _classCallCheck(this, Cell);

  this.access = access ? access : null;
  this.weapon = weapon ? weapon : null;
  this.player = player ? player : null;
};

exports.Cell = Cell;
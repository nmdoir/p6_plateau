"use strict";

var _leftpad = require("./leftpad");

var serNos = [6934, 23111, 23114, 1001, 211161];
var partEl = document.getElementById('part-list');
var strList = serNos.reduce(function (acc, element) {
  return acc += "<li>".concat((0, _leftpad.leftPad)(element, 8, '0'), "</li>");
}, '');
partEl.innerHTML = strList;
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/genGrid.js":
/*!***************************!*\
  !*** ./src/js/genGrid.js ***!
  \***************************/
/*! exports provided: GenGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GenGrid\", function() { return GenGrid; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar GenGrid =\n/*#__PURE__*/\nfunction () {\n  function GenGrid(row, column) {\n    _classCallCheck(this, GenGrid);\n\n    this.row = row;\n    this.column = column;\n    this.gridLength = this.row * this.column;\n  }\n\n  _createClass(GenGrid, [{\n    key: \"createGrid\",\n    value: function createGrid() {\n      var bloc = document.getElementById('board');\n      var table = document.createElement('table');\n      var tbody = document.createElement('tbody');\n      table.setAttribute(\"class\", \"center\");\n      table.appendChild(tbody);\n\n      for (var i = 0; i < this.row; i++) {\n        var tr = document.createElement('tr');\n        tr.setAttribute(\"class\", \"tdstyle\");\n        tbody.appendChild(tr);\n\n        for (var j = 0; j < this.column; j++) {\n          var td = document.createElement('td');\n          td.setAttribute(\"class\", \"tdstyle\");\n          td.id = \"td-\" + i + j;\n          tr.appendChild(td);\n        }\n      }\n\n      bloc.appendChild(table);\n      createNoAccess();\n      createWeapon();\n      createPlayer();\n    }\n  }, {\n    key: \"getRandomCell\",\n    value: function getRandomCell() {\n      var randomInt = 0;\n      var i = 0;\n      var id = null;\n      var cell = null;\n\n      for (i = 0; i < this.gridLength; i++) {\n        randomInt = Math.floor(Math.random() * this.gridLength);\n\n        if (randomInt < 10) {\n          id = 'td-0';\n        } else {\n          id = 'td-';\n        }\n\n        cell = document.getElementById(id + randomInt);\n\n        while (cell.hasAttribute(\"data-access\") || cell.hasAttribute(\"data-weapon\") || cell.hasAttribute(\"data-player\")) {\n          randomInt = Math.floor(Math.random() * this.gridLength);\n\n          if (randomInt < 10) {\n            id = 'td-0';\n          } else {\n            id = 'td-';\n          }\n\n          cell = document.getElementById(id + randomInt);\n        }\n      }\n\n      return cell;\n    }\n  }, {\n    key: \"createNoAccess\",\n    value: function createNoAccess() {\n      var cell = null;\n\n      for (var i = 0; i < 25; i++) {\n        cell = getRandomCell();\n        cell.style.backgroundColor = 'black';\n        cell.setAttribute('access', 0);\n      }\n    }\n  }, {\n    key: \"createWeapon\",\n    value: function createWeapon() {\n      var cell = null; //let weapon = new Weapon();\n      //let Cell = new Cell('data-access', null, null);\n\n      for (var i = 0; i < 8; i++) {\n        var randomWeapon = getRandomWeapon();\n        cell = getRandomCell();\n        cell.setAttribute('data-weapon', randomWeapon);\n      }\n    }\n  }, {\n    key: \"createPlayer\",\n    value: function createPlayer() {\n      var cellPlayer1 = getRandomCell(); //document.getElementById(id + randomInt);\n\n      cellPlayer1.setAttribute('data-player', \"player1\");\n      var cellPlayer2 = getRandomCell();\n      cellPlayer2.setAttribute('data-player', \"player2\");\n    }\n  }]);\n\n  return GenGrid;\n}();\n\n\n/* class Grid {\r\n    constructor(cellId, access, player, weapon, gridLength) {\r\n        this.cellId = attributeFirst ? attributeFirst : null;\r\n        this.access = attributeSecond ? attributeSecond : null;\r\n        this.player = attributeThird ? attributeThird : null;\r\n        this.gridLength = gridLength\r\n    }\r\n\r\n */\n\n//# sourceURL=webpack:///./src/js/genGrid.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_genGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/genGrid */ \"./src/js/genGrid.js\");\n //Demander le nom des joueurs\n\nvar name_j1 = prompt(\"Entrez le nom du joueur 1 : \");\nvar name_j2 = prompt(\"Entrez le nom du joueur 2 : \");\n\nif (!name_j1 || name_j1 === \"\") {\n  name_j1 = \"Joueur 1\";\n}\n\nif (!name_j2 || name_j2 === \"\") {\n  name_j2 = \"Joueur 2\";\n} //Insérer la grille dans le HTML\n\n\n$(document).ready(function () {\n  var grid = new _js_genGrid__WEBPACK_IMPORTED_MODULE_0__[\"GenGrid\"](10, 10);\n  grid.createGrid();\n}); //cd /c/Users/User/Desktop/OPENCLASSROOMS/p6_plateau\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });
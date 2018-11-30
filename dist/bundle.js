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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar rockPaperScissor = document.addEventListener('DOMContentLoaded', function () {\n    var rock = document.getElementById('rock');\n    var paper = document.getElementById('paper');\n    var scissors = document.getElementById('scissors');\n    var computer = document.getElementById('computer');\n    var choice = document.getElementById('choice');\n    var result = document.getElementById('result');\n    var humanscore = document.getElementById('humanscore');\n    var computerscore = document.getElementById('computerscore');\n    var random = 0;\n    var randomizer = function randomizer() {\n        random = Math.floor(Math.random() * 3);\n        if (random === 0) {\n            computer.innerHTML = \"<img id='computerrock' src='images/rock.jpeg' alt='no image'>\";\n        } else if (random === 1) {\n            computer.innerHTML = \"<img id='computerpaper' src='images/paper.jpg' alt='no image'>\";\n        } else {\n            computer.innerHTML = \"<img id='computerscissors' src='images/scissors.jpg' alt='no image'>\";\n        }\n    };\n    var evaluate = function evaluate() {\n        if (choice === random) {\n            result.innerHTML = 'The game is a tie';\n        } else if (choice === 0 && random === 2) {\n            result.innerHTML = 'You have won';\n        } else if (choice === 2 && random === 1) {\n            result.innerHTML = 'You have won';\n        } else if (choice === 1 && random === 0) {\n            result.innerHTML = 'You have won';\n        } else {\n            result.innerHTML = 'You have lost';\n        }\n    };\n    var addToScore = function addToScore() {\n        if (result.innerHTML === 'You have won') {\n            var points = parseInt(humanscore.innerHTML);\n            points += 1;\n            humanscore.innerHTML = points;\n        } else if (result.innerHTML === 'You have lost') {\n            var _points = parseInt(computerscore.innerHTML);\n            _points += 1;\n            computerscore.innerHTML = _points;\n        }\n    };\n    rock.addEventListener('click', function () {\n        randomizer();\n        choice = 0;\n        evaluate();\n        addToScore();\n    });\n    paper.addEventListener('click', function () {\n        randomizer();\n        choice = 1;\n        evaluate();\n        addToScore();\n    });\n    scissors.addEventListener('click', function () {\n        randomizer();\n        choice = 2;\n        evaluate();\n        addToScore();\n    });\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });
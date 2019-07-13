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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/scripts/common.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/scripts/common.js":
/*!*******************************!*\
  !*** ./app/scripts/common.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.launch = new Launcher({\n  condition: function condition() {\n    return window.test === 5;\n  },\n  callback: function callback(text) {\n    return alert(text);\n  },\n  arg: 'window.test === 5',\n  run: true\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9jb21tb24uanM/YjEyZSJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJsYXVuY2giLCJMYXVuY2hlciIsImNvbmRpdGlvbiIsInRlc3QiLCJjYWxsYmFjayIsInRleHQiLCJhbGVydCIsImFyZyIsInJ1biJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQixJQUFJQyxRQUFKLENBQWE7QUFDekJDLFdBQVMsRUFBRTtBQUFBLFdBQU1ILE1BQU0sQ0FBQ0ksSUFBUCxLQUFnQixDQUF0QjtBQUFBLEdBRGM7QUFFekJDLFVBQVEsRUFBRSxrQkFBQ0MsSUFBRDtBQUFBLFdBQVVDLEtBQUssQ0FBQ0QsSUFBRCxDQUFmO0FBQUEsR0FGZTtBQUd6QkUsS0FBRyxFQUFFLG1CQUhvQjtBQUl6QkMsS0FBRyxFQUFFO0FBSm9CLENBQWIsQ0FBaEIiLCJmaWxlIjoiLi9hcHAvc2NyaXB0cy9jb21tb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cubGF1bmNoID0gbmV3IExhdW5jaGVyKHtcclxuICAgIGNvbmRpdGlvbjogKCkgPT4gd2luZG93LnRlc3QgPT09IDUsXHJcbiAgICBjYWxsYmFjazogKHRleHQpID0+IGFsZXJ0KHRleHQpLFxyXG4gICAgYXJnOiAnd2luZG93LnRlc3QgPT09IDUnLFxyXG4gICAgcnVuOiB0cnVlXHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/scripts/common.js\n");

/***/ })

/******/ });
//# sourceMappingURL=maps/common.js.map

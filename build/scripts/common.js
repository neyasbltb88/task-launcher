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

eval("var tasks = [{\n  condition: function condition() {\n    return window.test === 5;\n  },\n  callback: function callback(text) {\n    console.log(text); // window.test = 0;\n    // this.run();\n  },\n  arg: function arg() {\n    return 'window.test равен ' + window.test;\n  },\n  name: 'test5' // attempts: 50,\n  // run: true\n\n}, {\n  condition: function condition() {\n    return window.test === 4;\n  },\n  callback: function callback(text) {\n    console.log(text); // window.test = 0;\n    // this.run();\n  },\n  arg: function arg() {\n    return 'window.test равен ' + window.test;\n  },\n  name: 'test4',\n  // attempts: 50,\n  run: true\n}];\nwindow.launch = new Launcher(tasks); // window.launch = new Launcher();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9jb21tb24uanM/YjEyZSJdLCJuYW1lcyI6WyJ0YXNrcyIsImNvbmRpdGlvbiIsIndpbmRvdyIsInRlc3QiLCJjYWxsYmFjayIsInRleHQiLCJjb25zb2xlIiwibG9nIiwiYXJnIiwibmFtZSIsInJ1biIsImxhdW5jaCIsIkxhdW5jaGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxLQUFLLEdBQUcsQ0FBQztBQUNUQyxXQUFTLEVBQUU7QUFBQSxXQUFNQyxNQUFNLENBQUNDLElBQVAsS0FBZ0IsQ0FBdEI7QUFBQSxHQURGO0FBRVRDLFVBQVEsRUFBRSxrQkFBU0MsSUFBVCxFQUFlO0FBQ3JCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixFQURxQixDQUdyQjtBQUNBO0FBQ0gsR0FQUTtBQVFURyxLQUFHLEVBQUU7QUFBQSxXQUFNLHVCQUF1Qk4sTUFBTSxDQUFDQyxJQUFwQztBQUFBLEdBUkk7QUFTVE0sTUFBSSxFQUFFLE9BVEcsQ0FVVDtBQUNBOztBQVhTLENBQUQsRUFZVDtBQUNDUixXQUFTLEVBQUU7QUFBQSxXQUFNQyxNQUFNLENBQUNDLElBQVAsS0FBZ0IsQ0FBdEI7QUFBQSxHQURaO0FBRUNDLFVBQVEsRUFBRSxrQkFBU0MsSUFBVCxFQUFlO0FBQ3JCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixFQURxQixDQUdyQjtBQUNBO0FBQ0gsR0FQRjtBQVFDRyxLQUFHLEVBQUU7QUFBQSxXQUFNLHVCQUF1Qk4sTUFBTSxDQUFDQyxJQUFwQztBQUFBLEdBUk47QUFTQ00sTUFBSSxFQUFFLE9BVFA7QUFVQztBQUNBQyxLQUFHLEVBQUU7QUFYTixDQVpTLENBQVo7QUEwQkFSLE1BQU0sQ0FBQ1MsTUFBUCxHQUFnQixJQUFJQyxRQUFKLENBQWFaLEtBQWIsQ0FBaEIsQyxDQUNBIiwiZmlsZSI6Ii4vYXBwL3NjcmlwdHMvY29tbW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHRhc2tzID0gW3tcclxuICAgIGNvbmRpdGlvbjogKCkgPT4gd2luZG93LnRlc3QgPT09IDUsXHJcbiAgICBjYWxsYmFjazogZnVuY3Rpb24odGV4dCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRleHQpO1xyXG5cclxuICAgICAgICAvLyB3aW5kb3cudGVzdCA9IDA7XHJcbiAgICAgICAgLy8gdGhpcy5ydW4oKTtcclxuICAgIH0sXHJcbiAgICBhcmc6ICgpID0+ICd3aW5kb3cudGVzdCDRgNCw0LLQtdC9ICcgKyB3aW5kb3cudGVzdCxcclxuICAgIG5hbWU6ICd0ZXN0NScsXHJcbiAgICAvLyBhdHRlbXB0czogNTAsXHJcbiAgICAvLyBydW46IHRydWVcclxufSwge1xyXG4gICAgY29uZGl0aW9uOiAoKSA9PiB3aW5kb3cudGVzdCA9PT0gNCxcclxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbih0ZXh0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGV4dCk7XHJcblxyXG4gICAgICAgIC8vIHdpbmRvdy50ZXN0ID0gMDtcclxuICAgICAgICAvLyB0aGlzLnJ1bigpO1xyXG4gICAgfSxcclxuICAgIGFyZzogKCkgPT4gJ3dpbmRvdy50ZXN0INGA0LDQstC10L0gJyArIHdpbmRvdy50ZXN0LFxyXG4gICAgbmFtZTogJ3Rlc3Q0JyxcclxuICAgIC8vIGF0dGVtcHRzOiA1MCxcclxuICAgIHJ1bjogdHJ1ZVxyXG59XTtcclxuXHJcbndpbmRvdy5sYXVuY2ggPSBuZXcgTGF1bmNoZXIodGFza3MpO1xyXG4vLyB3aW5kb3cubGF1bmNoID0gbmV3IExhdW5jaGVyKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/scripts/common.js\n");

/***/ })

/******/ });
//# sourceMappingURL=maps/common.js.map

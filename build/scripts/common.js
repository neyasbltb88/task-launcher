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

eval("var tasks = [{\n  condition: function condition() {\n    return window.test === 1;\n  },\n  callback: function callback(text) {\n    console.log(text);\n  },\n  arg: function arg() {\n    return 'window.test равен ' + window.test;\n  },\n  name: 'test1',\n  run: true\n}, {\n  condition: function condition() {\n    var task = this.getTask('test1');\n    return !task.run;\n  },\n  callback: function callback(text) {\n    console.log(text);\n  },\n  arg: function arg(index) {\n    return \"\\u0412\\u044B\\u043F\\u043E\\u043B\\u043D\\u0438\\u043B\\u0441\\u044F \\u0442\\u0430\\u0441\\u043A \".concat(index, \": \\u0422\\u0430\\u0441\\u043A test1 \\u043E\\u0441\\u0442\\u0430\\u043D\\u043E\\u0432\\u043B\\u0435\\u043D\");\n  },\n  name: 'test_stop',\n  run: true\n}, {\n  condition: function condition() {\n    return window.test === 2;\n  },\n  callback: function callback(text) {\n    console.log(text);\n  },\n  arg: function arg() {\n    return 'window.test равен ' + window.test;\n  },\n  name: 'test2',\n  attempts: 150,\n  run: true\n}, {\n  condition: function condition() {\n    var task = this.getTask('test2');\n    return task.complete === false;\n  },\n  callback: function callback(text) {\n    console.log(text);\n  },\n  arg: function arg(index) {\n    return \"\\u0412\\u044B\\u043F\\u043E\\u043B\\u043D\\u0438\\u043B\\u0441\\u044F \\u0442\\u0430\\u0441\\u043A \".concat(index, \": \\u0422\\u0430\\u0441\\u043A test2 \\u0437\\u0430\\u0432\\u0435\\u0440\\u0448\\u0438\\u043B\\u0441\\u044F \\u043D\\u0435\\u0443\\u0434\\u0430\\u0447\\u0435\\u0439\");\n  },\n  name: 'test_complete',\n  run: true\n}]; // window.launch = new Launcher(tasks);\n\nwindow.launch = new Launcher();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9jb21tb24uanM/YjEyZSJdLCJuYW1lcyI6WyJ0YXNrcyIsImNvbmRpdGlvbiIsIndpbmRvdyIsInRlc3QiLCJjYWxsYmFjayIsInRleHQiLCJjb25zb2xlIiwibG9nIiwiYXJnIiwibmFtZSIsInJ1biIsInRhc2siLCJnZXRUYXNrIiwiaW5kZXgiLCJhdHRlbXB0cyIsImNvbXBsZXRlIiwibGF1bmNoIiwiTGF1bmNoZXIiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLEtBQUssR0FBRyxDQUFDO0FBQ0xDLFdBQVMsRUFBRTtBQUFBLFdBQU1DLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQixDQUF0QjtBQUFBLEdBRE47QUFFTEMsVUFBUSxFQUFFLGtCQUFTQyxJQUFULEVBQWU7QUFDckJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0gsR0FKSTtBQUtMRyxLQUFHLEVBQUU7QUFBQSxXQUFNLHVCQUF1Qk4sTUFBTSxDQUFDQyxJQUFwQztBQUFBLEdBTEE7QUFNTE0sTUFBSSxFQUFFLE9BTkQ7QUFPTEMsS0FBRyxFQUFFO0FBUEEsQ0FBRCxFQVNSO0FBQ0lULFdBQVMsRUFBRSxxQkFBVztBQUNsQixRQUFJVSxJQUFJLEdBQUcsS0FBS0MsT0FBTCxDQUFhLE9BQWIsQ0FBWDtBQUNBLFdBQU8sQ0FBQ0QsSUFBSSxDQUFDRCxHQUFiO0FBQ0gsR0FKTDtBQUtJTixVQUFRLEVBQUUsa0JBQVNDLElBQVQsRUFBZTtBQUNyQkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDSCxHQVBMO0FBUUlHLEtBQUcsRUFBRSxhQUFDSyxLQUFEO0FBQUEsMkdBQThCQSxLQUE5QjtBQUFBLEdBUlQ7QUFTSUosTUFBSSxFQUFFLFdBVFY7QUFVSUMsS0FBRyxFQUFFO0FBVlQsQ0FUUSxFQXFCUjtBQUNJVCxXQUFTLEVBQUU7QUFBQSxXQUFNQyxNQUFNLENBQUNDLElBQVAsS0FBZ0IsQ0FBdEI7QUFBQSxHQURmO0FBRUlDLFVBQVEsRUFBRSxrQkFBU0MsSUFBVCxFQUFlO0FBQ3JCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNILEdBSkw7QUFLSUcsS0FBRyxFQUFFO0FBQUEsV0FBTSx1QkFBdUJOLE1BQU0sQ0FBQ0MsSUFBcEM7QUFBQSxHQUxUO0FBTUlNLE1BQUksRUFBRSxPQU5WO0FBT0lLLFVBQVEsRUFBRSxHQVBkO0FBUUlKLEtBQUcsRUFBRTtBQVJULENBckJRLEVBK0JSO0FBQ0lULFdBQVMsRUFBRSxxQkFBVztBQUNsQixRQUFJVSxJQUFJLEdBQUcsS0FBS0MsT0FBTCxDQUFhLE9BQWIsQ0FBWDtBQUNBLFdBQU9ELElBQUksQ0FBQ0ksUUFBTCxLQUFrQixLQUF6QjtBQUNILEdBSkw7QUFLSVgsVUFBUSxFQUFFLGtCQUFTQyxJQUFULEVBQWU7QUFDckJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0gsR0FQTDtBQVFJRyxLQUFHLEVBQUUsYUFBQ0ssS0FBRDtBQUFBLDJHQUE4QkEsS0FBOUI7QUFBQSxHQVJUO0FBU0lKLE1BQUksRUFBRSxlQVRWO0FBVUlDLEtBQUcsRUFBRTtBQVZULENBL0JRLENBQVosQyxDQTZDQTs7QUFDQVIsTUFBTSxDQUFDYyxNQUFQLEdBQWdCLElBQUlDLFFBQUosRUFBaEIiLCJmaWxlIjoiLi9hcHAvc2NyaXB0cy9jb21tb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgdGFza3MgPSBbe1xyXG4gICAgICAgIGNvbmRpdGlvbjogKCkgPT4gd2luZG93LnRlc3QgPT09IDEsXHJcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKHRleHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGV4dCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhcmc6ICgpID0+ICd3aW5kb3cudGVzdCDRgNCw0LLQtdC9ICcgKyB3aW5kb3cudGVzdCxcclxuICAgICAgICBuYW1lOiAndGVzdDEnLFxyXG4gICAgICAgIHJ1bjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBjb25kaXRpb246IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgdGFzayA9IHRoaXMuZ2V0VGFzaygndGVzdDEnKTtcclxuICAgICAgICAgICAgcmV0dXJuICF0YXNrLnJ1bjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbih0ZXh0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXJnOiAoaW5kZXgpID0+IGDQktGL0L/QvtC70L3QuNC70YHRjyDRgtCw0YHQuiAke2luZGV4fTog0KLQsNGB0LogdGVzdDEg0L7RgdGC0LDQvdC+0LLQu9C10L1gLFxyXG4gICAgICAgIG5hbWU6ICd0ZXN0X3N0b3AnLFxyXG4gICAgICAgIHJ1bjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBjb25kaXRpb246ICgpID0+IHdpbmRvdy50ZXN0ID09PSAyLFxyXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbih0ZXh0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXJnOiAoKSA9PiAnd2luZG93LnRlc3Qg0YDQsNCy0LXQvSAnICsgd2luZG93LnRlc3QsXHJcbiAgICAgICAgbmFtZTogJ3Rlc3QyJyxcclxuICAgICAgICBhdHRlbXB0czogMTUwLFxyXG4gICAgICAgIHJ1bjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBjb25kaXRpb246IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgdGFzayA9IHRoaXMuZ2V0VGFzaygndGVzdDInKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRhc2suY29tcGxldGUgPT09IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKHRleHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGV4dCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhcmc6IChpbmRleCkgPT4gYNCS0YvQv9C+0LvQvdC40LvRgdGPINGC0LDRgdC6ICR7aW5kZXh9OiDQotCw0YHQuiB0ZXN0MiDQt9Cw0LLQtdGA0YjQuNC70YHRjyDQvdC10YPQtNCw0YfQtdC5YCxcclxuICAgICAgICBuYW1lOiAndGVzdF9jb21wbGV0ZScsXHJcbiAgICAgICAgcnVuOiB0cnVlXHJcbiAgICB9XHJcbl07XHJcblxyXG4vLyB3aW5kb3cubGF1bmNoID0gbmV3IExhdW5jaGVyKHRhc2tzKTtcclxud2luZG93LmxhdW5jaCA9IG5ldyBMYXVuY2hlcigpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/scripts/common.js\n");

/***/ })

/******/ });
//# sourceMappingURL=maps/common.js.map

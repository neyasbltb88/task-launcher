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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/scripts/task-launcher.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/scripts/task-launcher.js":
/*!**************************************!*\
  !*** ./app/scripts/task-launcher.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Launcher; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Launcher =\n/*  props = {\r\n *       condition:  @Function: должна проверять условие, необходимое для вызова callback и возвращать boolean.\r\n *       callback:   @Function: вызовется когда condition вернет true.\r\n *       arg:        @Any: один аргумент, который передастся в callback при его вызове. Необязательный.\r\n *                   @Function: если передана функция, то все, что она вернет, будет передано в callback при его вызове.\r\n *       attempts:   @Number: количество попыток для проверки условия. Необязательный. \r\n *                   Если не пердан, проверка будет бесконечной, пока condition не вернет true или не будет вызван метод остановки .stop()\r\n *       run:        @Boolean: если true, то запуск таска произойдет автоматически, без вызова .run()\r\n *   } */\nfunction Launcher() {\n  var _this = this;\n\n  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  _classCallCheck(this, Launcher);\n\n  _defineProperty(this, \"running\", false);\n\n  _defineProperty(this, \"wasStopped\", false);\n\n  _defineProperty(this, \"tryNum\", 0);\n\n  _defineProperty(this, \"launch\", function () {\n    // Если функция условия вернула true, тормозим рекурсию и выззываем callback\n    if (_this.condition.call(_this)) {\n      _this.stop();\n\n      _this.callback.call(_this, typeof _this.arg === 'function' ? _this.arg.call(_this) : _this.arg); // Если функция условия вернула false, количество попыток не исчерпано и не остановлена рекурсия,\n      // то увеличиваем счетчик попыток и планируем очередной запуск \n\n    } else if (!_this.condition.call(_this) && _this.tryNum < _this.attempts && !_this.wasStopped) {\n      _this.tryNum++;\n      requestAnimationFrame(_this.launch); // Если количество попыток исчерпано, тормозим рекурсию\n    } else if (_this.tryNum >= _this.attempts) {\n      _this.stop();\n    }\n  });\n\n  _defineProperty(this, \"run\", function (arg) {\n    if (_this.running) return;\n    if (arg !== undefined) _this.arg = arg;\n    _this.running = true;\n    _this.wasStopped = false;\n\n    _this.launch();\n\n    return true;\n  });\n\n  _defineProperty(this, \"stop\", function () {\n    if (!_this.running) return;\n    _this.wasStopped = true;\n    _this.running = false;\n    _this.tryNum = 0;\n    return true;\n  });\n\n  this.condition = props.condition || true;\n  this.callback = props.callback || console.log.bind(this, 'В Laucher не передан callback');\n  this.arg = props.arg;\n  this.attempts = props.attempts || Infinity;\n  if (props.run) this.run();\n};\n\n\nwindow.Launcher = Launcher;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy90YXNrLWxhdW5jaGVyLmpzP2NjMTgiXSwibmFtZXMiOlsiTGF1bmNoZXIiLCJwcm9wcyIsImNvbmRpdGlvbiIsImNhbGwiLCJzdG9wIiwiY2FsbGJhY2siLCJhcmciLCJ0cnlOdW0iLCJhdHRlbXB0cyIsIndhc1N0b3BwZWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsYXVuY2giLCJydW5uaW5nIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsImJpbmQiLCJJbmZpbml0eSIsInJ1biIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQXFCQSxRO0FBS2pCOzs7Ozs7Ozs7QUFTQSxvQkFBd0I7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQUEsbUNBYmQsS0FhYzs7QUFBQSxzQ0FaWCxLQVlXOztBQUFBLGtDQVhmLENBV2U7O0FBQUEsa0NBU2YsWUFBTTtBQUNYO0FBQ0EsUUFBSSxLQUFJLENBQUNDLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixLQUFwQixDQUFKLEVBQStCO0FBQzNCLFdBQUksQ0FBQ0MsSUFBTDs7QUFDQSxXQUFJLENBQUNDLFFBQUwsQ0FBY0YsSUFBZCxDQUFtQixLQUFuQixFQUF5QixPQUFPLEtBQUksQ0FBQ0csR0FBWixLQUFvQixVQUFwQixHQUFpQyxLQUFJLENBQUNBLEdBQUwsQ0FBU0gsSUFBVCxDQUFjLEtBQWQsQ0FBakMsR0FBdUQsS0FBSSxDQUFDRyxHQUFyRixFQUYyQixDQUkzQjtBQUNBOztBQUNILEtBTkQsTUFNTyxJQUFJLENBQUMsS0FBSSxDQUFDSixTQUFMLENBQWVDLElBQWYsQ0FBb0IsS0FBcEIsQ0FBRCxJQUE4QixLQUFJLENBQUNJLE1BQUwsR0FBYyxLQUFJLENBQUNDLFFBQWpELElBQTZELENBQUMsS0FBSSxDQUFDQyxVQUF2RSxFQUFtRjtBQUN0RixXQUFJLENBQUNGLE1BQUw7QUFDQUcsMkJBQXFCLENBQUMsS0FBSSxDQUFDQyxNQUFOLENBQXJCLENBRnNGLENBSXRGO0FBQ0gsS0FMTSxNQUtBLElBQUksS0FBSSxDQUFDSixNQUFMLElBQWUsS0FBSSxDQUFDQyxRQUF4QixFQUFrQztBQUNyQyxXQUFJLENBQUNKLElBQUw7QUFDSDtBQUNKLEdBekJ1Qjs7QUFBQSwrQkE0QmxCLFVBQUNFLEdBQUQsRUFBUztBQUNYLFFBQUksS0FBSSxDQUFDTSxPQUFULEVBQWtCO0FBQ2xCLFFBQUlOLEdBQUcsS0FBS08sU0FBWixFQUF1QixLQUFJLENBQUNQLEdBQUwsR0FBV0EsR0FBWDtBQUV2QixTQUFJLENBQUNNLE9BQUwsR0FBZSxJQUFmO0FBQ0EsU0FBSSxDQUFDSCxVQUFMLEdBQWtCLEtBQWxCOztBQUNBLFNBQUksQ0FBQ0UsTUFBTDs7QUFFQSxXQUFPLElBQVA7QUFDSCxHQXJDdUI7O0FBQUEsZ0NBd0NqQixZQUFNO0FBQ1QsUUFBSSxDQUFDLEtBQUksQ0FBQ0MsT0FBVixFQUFtQjtBQUVuQixTQUFJLENBQUNILFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxTQUFJLENBQUNHLE9BQUwsR0FBZSxLQUFmO0FBQ0EsU0FBSSxDQUFDTCxNQUFMLEdBQWMsQ0FBZDtBQUVBLFdBQU8sSUFBUDtBQUNILEdBaER1Qjs7QUFDcEIsT0FBS0wsU0FBTCxHQUFpQkQsS0FBSyxDQUFDQyxTQUFOLElBQW1CLElBQXBDO0FBQ0EsT0FBS0csUUFBTCxHQUFnQkosS0FBSyxDQUFDSSxRQUFOLElBQWtCUyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBWixDQUFpQixJQUFqQixFQUF1QiwrQkFBdkIsQ0FBbEM7QUFDQSxPQUFLVixHQUFMLEdBQVdMLEtBQUssQ0FBQ0ssR0FBakI7QUFDQSxPQUFLRSxRQUFMLEdBQWdCUCxLQUFLLENBQUNPLFFBQU4sSUFBa0JTLFFBQWxDO0FBRUEsTUFBSWhCLEtBQUssQ0FBQ2lCLEdBQVYsRUFBZSxLQUFLQSxHQUFMO0FBQ2xCLEM7OztBQTRDTEMsTUFBTSxDQUFDbkIsUUFBUCxHQUFrQkEsUUFBbEIiLCJmaWxlIjoiLi9hcHAvc2NyaXB0cy90YXNrLWxhdW5jaGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF1bmNoZXIge1xyXG4gICAgcnVubmluZyA9IGZhbHNlO1xyXG4gICAgd2FzU3RvcHBlZCA9IGZhbHNlO1xyXG4gICAgdHJ5TnVtID0gMDtcclxuXHJcbiAgICAvKiAgcHJvcHMgPSB7XHJcbiAgICAgKiAgICAgICBjb25kaXRpb246ICBARnVuY3Rpb246INC00L7Qu9C20L3QsCDQv9GA0L7QstC10YDRj9GC0Ywg0YPRgdC70L7QstC40LUsINC90LXQvtCx0YXQvtC00LjQvNC+0LUg0LTQu9GPINCy0YvQt9C+0LLQsCBjYWxsYmFjayDQuCDQstC+0LfQstGA0LDRidCw0YLRjCBib29sZWFuLlxyXG4gICAgICogICAgICAgY2FsbGJhY2s6ICAgQEZ1bmN0aW9uOiDQstGL0LfQvtCy0LXRgtGB0Y8g0LrQvtCz0LTQsCBjb25kaXRpb24g0LLQtdGA0L3QtdGCIHRydWUuXHJcbiAgICAgKiAgICAgICBhcmc6ICAgICAgICBAQW55OiDQvtC00LjQvSDQsNGA0LPRg9C80LXQvdGCLCDQutC+0YLQvtGA0YvQuSDQv9C10YDQtdC00LDRgdGC0YHRjyDQsiBjYWxsYmFjayDQv9GA0Lgg0LXQs9C+INCy0YvQt9C+0LLQtS4g0J3QtdC+0LHRj9C30LDRgtC10LvRjNC90YvQuS5cclxuICAgICAqICAgICAgICAgICAgICAgICAgIEBGdW5jdGlvbjog0LXRgdC70Lgg0L/QtdGA0LXQtNCw0L3QsCDRhNGD0L3QutGG0LjRjywg0YLQviDQstGB0LUsINGH0YLQviDQvtC90LAg0LLQtdGA0L3QtdGCLCDQsdGD0LTQtdGCINC/0LXRgNC10LTQsNC90L4g0LIgY2FsbGJhY2sg0L/RgNC4INC10LPQviDQstGL0LfQvtCy0LUuXHJcbiAgICAgKiAgICAgICBhdHRlbXB0czogICBATnVtYmVyOiDQutC+0LvQuNGH0LXRgdGC0LLQviDQv9C+0L/Ri9GC0L7QuiDQtNC70Y8g0L/RgNC+0LLQtdGA0LrQuCDRg9GB0LvQvtCy0LjRjy4g0J3QtdC+0LHRj9C30LDRgtC10LvRjNC90YvQuS4gXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICDQldGB0LvQuCDQvdC1INC/0LXRgNC00LDQvSwg0L/RgNC+0LLQtdGA0LrQsCDQsdGD0LTQtdGCINCx0LXRgdC60L7QvdC10YfQvdC+0LksINC/0L7QutCwIGNvbmRpdGlvbiDQvdC1INCy0LXRgNC90LXRgiB0cnVlINC40LvQuCDQvdC1INCx0YPQtNC10YIg0LLRi9C30LLQsNC9INC80LXRgtC+0LQg0L7RgdGC0LDQvdC+0LLQutC4IC5zdG9wKClcclxuICAgICAqICAgICAgIHJ1bjogICAgICAgIEBCb29sZWFuOiDQtdGB0LvQuCB0cnVlLCDRgtC+INC30LDQv9GD0YHQuiDRgtCw0YHQutCwINC/0YDQvtC40LfQvtC50LTQtdGCINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4LCDQsdC10Lcg0LLRi9C30L7QstCwIC5ydW4oKVxyXG4gICAgICogICB9ICovXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBwcm9wcy5jb25kaXRpb24gfHwgdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gcHJvcHMuY2FsbGJhY2sgfHwgY29uc29sZS5sb2cuYmluZCh0aGlzLCAn0JIgTGF1Y2hlciDQvdC1INC/0LXRgNC10LTQsNC9IGNhbGxiYWNrJyk7XHJcbiAgICAgICAgdGhpcy5hcmcgPSBwcm9wcy5hcmc7XHJcbiAgICAgICAgdGhpcy5hdHRlbXB0cyA9IHByb3BzLmF0dGVtcHRzIHx8IEluZmluaXR5O1xyXG5cclxuICAgICAgICBpZiAocHJvcHMucnVuKSB0aGlzLnJ1bigpO1xyXG4gICAgfVxyXG5cclxuICAgIGxhdW5jaCA9ICgpID0+IHtcclxuICAgICAgICAvLyDQldGB0LvQuCDRhNGD0L3QutGG0LjRjyDRg9GB0LvQvtCy0LjRjyDQstC10YDQvdGD0LvQsCB0cnVlLCDRgtC+0YDQvNC+0LfQuNC8INGA0LXQutGD0YDRgdC40Y4g0Lgg0LLRi9C30LfRi9Cy0LDQtdC8IGNhbGxiYWNrXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uLmNhbGwodGhpcykpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2suY2FsbCh0aGlzLCB0eXBlb2YgdGhpcy5hcmcgPT09ICdmdW5jdGlvbicgPyB0aGlzLmFyZy5jYWxsKHRoaXMpIDogdGhpcy5hcmcpO1xyXG5cclxuICAgICAgICAgICAgLy8g0JXRgdC70Lgg0YTRg9C90LrRhtC40Y8g0YPRgdC70L7QstC40Y8g0LLQtdGA0L3Rg9C70LAgZmFsc2UsINC60L7Qu9C40YfQtdGB0YLQstC+INC/0L7Qv9GL0YLQvtC6INC90LUg0LjRgdGH0LXRgNC/0LDQvdC+INC4INC90LUg0L7RgdGC0LDQvdC+0LLQu9C10L3QsCDRgNC10LrRg9GA0YHQuNGPLFxyXG4gICAgICAgICAgICAvLyDRgtC+INGD0LLQtdC70LjRh9C40LLQsNC10Lwg0YHRh9C10YLRh9C40Log0L/QvtC/0YvRgtC+0Log0Lgg0L/Qu9Cw0L3QuNGA0YPQtdC8INC+0YfQtdGA0LXQtNC90L7QuSDQt9Cw0L/Rg9GB0LogXHJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5jb25kaXRpb24uY2FsbCh0aGlzKSAmJiB0aGlzLnRyeU51bSA8IHRoaXMuYXR0ZW1wdHMgJiYgIXRoaXMud2FzU3RvcHBlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyeU51bSsrO1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sYXVuY2gpO1xyXG5cclxuICAgICAgICAgICAgLy8g0JXRgdC70Lgg0LrQvtC70LjRh9C10YHRgtCy0L4g0L/QvtC/0YvRgtC+0Log0LjRgdGH0LXRgNC/0LDQvdC+LCDRgtC+0YDQvNC+0LfQuNC8INGA0LXQutGD0YDRgdC40Y5cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHJ5TnVtID49IHRoaXMuYXR0ZW1wdHMpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vINCX0LDQv9GD0YHQuiDRgNC10LrRg9GA0YHQuNCy0L3QvtC5INC/0YDQvtCy0LXRgNC60Lgg0YPRgdC70L7QstC40Y9cclxuICAgIHJ1biA9IChhcmcpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5ydW5uaW5nKSByZXR1cm47XHJcbiAgICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB0aGlzLmFyZyA9IGFyZztcclxuXHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLndhc1N0b3BwZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxhdW5jaCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQntGB0YLQsNC90L7QstC60LAg0YDQtdC60YPRgNGB0LjQstC90L7QuSDQv9GA0L7QstC10YDQutC4INGD0YHQu9C+0LLQuNGPXHJcbiAgICBzdG9wID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5ydW5uaW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMud2FzU3RvcHBlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50cnlOdW0gPSAwO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxud2luZG93LkxhdW5jaGVyID0gTGF1bmNoZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/scripts/task-launcher.js\n");

/***/ })

/******/ });
//# sourceMappingURL=maps/task-launcher.js.map

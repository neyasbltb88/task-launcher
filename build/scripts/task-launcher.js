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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Launcher; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Launcher =\n/*  props = {\r\n *       condition:  @Function: должна проверять условие, необходимое для вызова callback и возвращать boolean.\r\n *       callback:   @Function: вызовется когда condition вернет true.\r\n *       arg:        @Any: один аргумент, который передастся в callback при его вызове. Необязательный.\r\n *       attempts:   @Number: количество попыток для проверки условия. Необязательный. \r\n *                   Если не пердан, проверка будет бесконечной, пока condition не вернет true или не будет вызван метод остановки .stop()\r\n *       run:    @Boolean: Если true, то запуск таска произойдет автоматически, без вызова .run()\r\n *   } */\nfunction Launcher() {\n  var _this = this;\n\n  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  _classCallCheck(this, Launcher);\n\n  _defineProperty(this, \"running\", false);\n\n  _defineProperty(this, \"wasStopped\", false);\n\n  _defineProperty(this, \"tryNum\", 0);\n\n  _defineProperty(this, \"launch\", function () {\n    // Если функция условия вернула true, тормозим рекурсию и выззываем callback\n    if (_this.condition.call(_this)) {\n      _this.stop();\n\n      _this.callback(typeof _this.arg === 'function' ? _this.arg.call(_this) : _this.arg); // Если функция условия вернула false, количество попыток не исчерпано и не остановлена рекурсия,\n      // то увеличиваем счетчик попыток и планируем очередной запуск \n\n    } else if (!_this.condition.call(_this) && _this.tryNum < _this.attempts && !_this.wasStopped) {\n      _this.tryNum++;\n      requestAnimationFrame(_this.launch); // Если количество попыток исчерпано, тормозим рекурсию\n    } else if (_this.tryNum >= _this.attempts) {\n      _this.stop();\n    }\n  });\n\n  _defineProperty(this, \"run\", function (arg) {\n    if (_this.running) return;\n    if (arg !== undefined) _this.arg = arg;\n    _this.running = true;\n    _this.wasStopped = false;\n\n    _this.launch();\n\n    return true;\n  });\n\n  _defineProperty(this, \"stop\", function () {\n    if (!_this.running) return;\n    _this.wasStopped = true;\n    _this.running = false;\n    _this.tryNum = 0;\n    return true;\n  });\n\n  this.condition = props.condition || true;\n  this.callback = props.callback || console.log.bind(this, 'В Laucher не передан callback');\n  this.arg = props.arg;\n  this.attempts = props.attempts || Infinity;\n  if (props.run) this.run();\n};\n\n\nwindow.Launcher = Launcher;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy90YXNrLWxhdW5jaGVyLmpzP2NjMTgiXSwibmFtZXMiOlsiTGF1bmNoZXIiLCJwcm9wcyIsImNvbmRpdGlvbiIsImNhbGwiLCJzdG9wIiwiY2FsbGJhY2siLCJhcmciLCJ0cnlOdW0iLCJhdHRlbXB0cyIsIndhc1N0b3BwZWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsYXVuY2giLCJydW5uaW5nIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsImJpbmQiLCJJbmZpbml0eSIsInJ1biIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQXFCQSxRO0FBS2pCOzs7Ozs7OztBQVFBLG9CQUF3QjtBQUFBOztBQUFBLE1BQVpDLEtBQVksdUVBQUosRUFBSTs7QUFBQTs7QUFBQSxtQ0FaZCxLQVljOztBQUFBLHNDQVhYLEtBV1c7O0FBQUEsa0NBVmYsQ0FVZTs7QUFBQSxrQ0FTZixZQUFNO0FBQ1g7QUFDQSxRQUFJLEtBQUksQ0FBQ0MsU0FBTCxDQUFlQyxJQUFmLENBQW9CLEtBQXBCLENBQUosRUFBK0I7QUFDM0IsV0FBSSxDQUFDQyxJQUFMOztBQUNBLFdBQUksQ0FBQ0MsUUFBTCxDQUFjLE9BQU8sS0FBSSxDQUFDQyxHQUFaLEtBQW9CLFVBQXBCLEdBQWlDLEtBQUksQ0FBQ0EsR0FBTCxDQUFTSCxJQUFULENBQWMsS0FBZCxDQUFqQyxHQUF1RCxLQUFJLENBQUNHLEdBQTFFLEVBRjJCLENBSTNCO0FBQ0E7O0FBQ0gsS0FORCxNQU1PLElBQUksQ0FBQyxLQUFJLENBQUNKLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixLQUFwQixDQUFELElBQThCLEtBQUksQ0FBQ0ksTUFBTCxHQUFjLEtBQUksQ0FBQ0MsUUFBakQsSUFBNkQsQ0FBQyxLQUFJLENBQUNDLFVBQXZFLEVBQW1GO0FBQ3RGLFdBQUksQ0FBQ0YsTUFBTDtBQUNBRywyQkFBcUIsQ0FBQyxLQUFJLENBQUNDLE1BQU4sQ0FBckIsQ0FGc0YsQ0FJdEY7QUFDSCxLQUxNLE1BS0EsSUFBSSxLQUFJLENBQUNKLE1BQUwsSUFBZSxLQUFJLENBQUNDLFFBQXhCLEVBQWtDO0FBQ3JDLFdBQUksQ0FBQ0osSUFBTDtBQUNIO0FBQ0osR0F6QnVCOztBQUFBLCtCQTRCbEIsVUFBQ0UsR0FBRCxFQUFTO0FBQ1gsUUFBSSxLQUFJLENBQUNNLE9BQVQsRUFBa0I7QUFDbEIsUUFBSU4sR0FBRyxLQUFLTyxTQUFaLEVBQXVCLEtBQUksQ0FBQ1AsR0FBTCxHQUFXQSxHQUFYO0FBRXZCLFNBQUksQ0FBQ00sT0FBTCxHQUFlLElBQWY7QUFDQSxTQUFJLENBQUNILFVBQUwsR0FBa0IsS0FBbEI7O0FBQ0EsU0FBSSxDQUFDRSxNQUFMOztBQUVBLFdBQU8sSUFBUDtBQUNILEdBckN1Qjs7QUFBQSxnQ0F3Q2pCLFlBQU07QUFDVCxRQUFJLENBQUMsS0FBSSxDQUFDQyxPQUFWLEVBQW1CO0FBRW5CLFNBQUksQ0FBQ0gsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFNBQUksQ0FBQ0csT0FBTCxHQUFlLEtBQWY7QUFDQSxTQUFJLENBQUNMLE1BQUwsR0FBYyxDQUFkO0FBRUEsV0FBTyxJQUFQO0FBQ0gsR0FoRHVCOztBQUNwQixPQUFLTCxTQUFMLEdBQWlCRCxLQUFLLENBQUNDLFNBQU4sSUFBbUIsSUFBcEM7QUFDQSxPQUFLRyxRQUFMLEdBQWdCSixLQUFLLENBQUNJLFFBQU4sSUFBa0JTLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUFaLENBQWlCLElBQWpCLEVBQXVCLCtCQUF2QixDQUFsQztBQUNBLE9BQUtWLEdBQUwsR0FBV0wsS0FBSyxDQUFDSyxHQUFqQjtBQUNBLE9BQUtFLFFBQUwsR0FBZ0JQLEtBQUssQ0FBQ08sUUFBTixJQUFrQlMsUUFBbEM7QUFFQSxNQUFJaEIsS0FBSyxDQUFDaUIsR0FBVixFQUFlLEtBQUtBLEdBQUw7QUFDbEIsQzs7O0FBNENMQyxNQUFNLENBQUNuQixRQUFQLEdBQWtCQSxRQUFsQiIsImZpbGUiOiIuL2FwcC9zY3JpcHRzL3Rhc2stbGF1bmNoZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBMYXVuY2hlciB7XHJcbiAgICBydW5uaW5nID0gZmFsc2U7XHJcbiAgICB3YXNTdG9wcGVkID0gZmFsc2U7XHJcbiAgICB0cnlOdW0gPSAwO1xyXG5cclxuICAgIC8qICBwcm9wcyA9IHtcclxuICAgICAqICAgICAgIGNvbmRpdGlvbjogIEBGdW5jdGlvbjog0LTQvtC70LbQvdCwINC/0YDQvtCy0LXRgNGP0YLRjCDRg9GB0LvQvtCy0LjQtSwg0L3QtdC+0LHRhdC+0LTQuNC80L7QtSDQtNC70Y8g0LLRi9C30L7QstCwIGNhbGxiYWNrINC4INCy0L7Qt9Cy0YDQsNGJ0LDRgtGMIGJvb2xlYW4uXHJcbiAgICAgKiAgICAgICBjYWxsYmFjazogICBARnVuY3Rpb246INCy0YvQt9C+0LLQtdGC0YHRjyDQutC+0LPQtNCwIGNvbmRpdGlvbiDQstC10YDQvdC10YIgdHJ1ZS5cclxuICAgICAqICAgICAgIGFyZzogICAgICAgIEBBbnk6INC+0LTQuNC9INCw0YDQs9GD0LzQtdC90YIsINC60L7RgtC+0YDRi9C5INC/0LXRgNC10LTQsNGB0YLRgdGPINCyIGNhbGxiYWNrINC/0YDQuCDQtdCz0L4g0LLRi9C30L7QstC1LiDQndC10L7QsdGP0LfQsNGC0LXQu9GM0L3Ri9C5LlxyXG4gICAgICogICAgICAgYXR0ZW1wdHM6ICAgQE51bWJlcjog0LrQvtC70LjRh9C10YHRgtCy0L4g0L/QvtC/0YvRgtC+0Log0LTQu9GPINC/0YDQvtCy0LXRgNC60Lgg0YPRgdC70L7QstC40Y8uINCd0LXQvtCx0Y/Qt9Cw0YLQtdC70YzQvdGL0LkuIFxyXG4gICAgICogICAgICAgICAgICAgICAgICAg0JXRgdC70Lgg0L3QtSDQv9C10YDQtNCw0L0sINC/0YDQvtCy0LXRgNC60LAg0LHRg9C00LXRgiDQsdC10YHQutC+0L3QtdGH0L3QvtC5LCDQv9C+0LrQsCBjb25kaXRpb24g0L3QtSDQstC10YDQvdC10YIgdHJ1ZSDQuNC70Lgg0L3QtSDQsdGD0LTQtdGCINCy0YvQt9Cy0LDQvSDQvNC10YLQvtC0INC+0YHRgtCw0L3QvtCy0LrQuCAuc3RvcCgpXHJcbiAgICAgKiAgICAgICBydW46ICAgIEBCb29sZWFuOiDQldGB0LvQuCB0cnVlLCDRgtC+INC30LDQv9GD0YHQuiDRgtCw0YHQutCwINC/0YDQvtC40LfQvtC50LTQtdGCINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4LCDQsdC10Lcg0LLRi9C30L7QstCwIC5ydW4oKVxyXG4gICAgICogICB9ICovXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBwcm9wcy5jb25kaXRpb24gfHwgdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gcHJvcHMuY2FsbGJhY2sgfHwgY29uc29sZS5sb2cuYmluZCh0aGlzLCAn0JIgTGF1Y2hlciDQvdC1INC/0LXRgNC10LTQsNC9IGNhbGxiYWNrJyk7XHJcbiAgICAgICAgdGhpcy5hcmcgPSBwcm9wcy5hcmc7XHJcbiAgICAgICAgdGhpcy5hdHRlbXB0cyA9IHByb3BzLmF0dGVtcHRzIHx8IEluZmluaXR5O1xyXG5cclxuICAgICAgICBpZiAocHJvcHMucnVuKSB0aGlzLnJ1bigpO1xyXG4gICAgfVxyXG5cclxuICAgIGxhdW5jaCA9ICgpID0+IHtcclxuICAgICAgICAvLyDQldGB0LvQuCDRhNGD0L3QutGG0LjRjyDRg9GB0LvQvtCy0LjRjyDQstC10YDQvdGD0LvQsCB0cnVlLCDRgtC+0YDQvNC+0LfQuNC8INGA0LXQutGD0YDRgdC40Y4g0Lgg0LLRi9C30LfRi9Cy0LDQtdC8IGNhbGxiYWNrXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uLmNhbGwodGhpcykpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sodHlwZW9mIHRoaXMuYXJnID09PSAnZnVuY3Rpb24nID8gdGhpcy5hcmcuY2FsbCh0aGlzKSA6IHRoaXMuYXJnKTtcclxuXHJcbiAgICAgICAgICAgIC8vINCV0YHQu9C4INGE0YPQvdC60YbQuNGPINGD0YHQu9C+0LLQuNGPINCy0LXRgNC90YPQu9CwIGZhbHNlLCDQutC+0LvQuNGH0LXRgdGC0LLQviDQv9C+0L/Ri9GC0L7QuiDQvdC1INC40YHRh9C10YDQv9Cw0L3QviDQuCDQvdC1INC+0YHRgtCw0L3QvtCy0LvQtdC90LAg0YDQtdC60YPRgNGB0LjRjyxcclxuICAgICAgICAgICAgLy8g0YLQviDRg9Cy0LXQu9C40YfQuNCy0LDQtdC8INGB0YfQtdGC0YfQuNC6INC/0L7Qv9GL0YLQvtC6INC4INC/0LvQsNC90LjRgNGD0LXQvCDQvtGH0LXRgNC10LTQvdC+0Lkg0LfQsNC/0YPRgdC6IFxyXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuY29uZGl0aW9uLmNhbGwodGhpcykgJiYgdGhpcy50cnlOdW0gPCB0aGlzLmF0dGVtcHRzICYmICF0aGlzLndhc1N0b3BwZWQpIHtcclxuICAgICAgICAgICAgdGhpcy50cnlOdW0rKztcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubGF1bmNoKTtcclxuXHJcbiAgICAgICAgICAgIC8vINCV0YHQu9C4INC60L7Qu9C40YfQtdGB0YLQstC+INC/0L7Qv9GL0YLQvtC6INC40YHRh9C10YDQv9Cw0L3Qviwg0YLQvtGA0LzQvtC30LjQvCDRgNC10LrRg9GA0YHQuNGOXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRyeU51bSA+PSB0aGlzLmF0dGVtcHRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDQl9Cw0L/Rg9GB0Log0YDQtdC60YPRgNGB0LjQstC90L7QuSDQv9GA0L7QstC10YDQutC4INGD0YHQu9C+0LLQuNGPXHJcbiAgICBydW4gPSAoYXJnKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucnVubmluZykgcmV0dXJuO1xyXG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkgdGhpcy5hcmcgPSBhcmc7XHJcblxyXG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy53YXNTdG9wcGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sYXVuY2goKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0J7RgdGC0LDQvdC+0LLQutCwINGA0LXQutGD0YDRgdC40LLQvdC+0Lkg0L/RgNC+0LLQtdGA0LrQuCDRg9GB0LvQvtCy0LjRj1xyXG4gICAgc3RvcCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMucnVubmluZykgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLndhc1N0b3BwZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudHJ5TnVtID0gMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5MYXVuY2hlciA9IExhdW5jaGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/scripts/task-launcher.js\n");

/***/ })

/******/ });
//# sourceMappingURL=maps/task-launcher.js.map

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Launcher; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Launcher =\n/*  props = {\r\n *       condition:  @Function: должна проверять условие, необходимое для вызова callback и возвращать boolean.\r\n *       callback:   @Function: вызовется когда condition вернет true.\r\n *       arg:        @Any: один аргумент, который передастся в callback при его вызове. Необязательный.\r\n *       attempts:   @Number: количество попыток для проверки условия. Необязательный. \r\n *                   Если не пердан, проверка будет бесконечной, пока condition не вернет true или не будет вызван метод остановки .stop()\r\n *       run:    @Boolean: Если true, то запуск таска произойдет автоматически, без вызова .run()\r\n *   } */\nfunction Launcher() {\n  var _this = this;\n\n  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  _classCallCheck(this, Launcher);\n\n  _defineProperty(this, \"running\", false);\n\n  _defineProperty(this, \"wasStopped\", false);\n\n  _defineProperty(this, \"tryNum\", 0);\n\n  _defineProperty(this, \"launch\", function () {\n    // Если функция условия вернула true, тормозим рекурсию и выззываем callback\n    if (_this.condition.call(_this)) {\n      _this.stop();\n\n      _this.callback(_this.arg); // Если функция условия вернула false, количество попыток не исчерпано и не остановлена рекурсия,\n      // то увеличиваем счетчик попыток и планируем очередной запуск \n\n    } else if (!_this.condition.call(_this) && _this.tryNum < _this.attempts && !_this.wasStopped) {\n      _this.tryNum++;\n      requestAnimationFrame(_this.launch); // Если количество попыток исчерпано, тормозим рекурсию\n    } else if (_this.tryNum >= _this.attempts) {\n      _this.stop();\n    }\n  });\n\n  _defineProperty(this, \"run\", function (arg) {\n    if (_this.running) return;\n    if (arg !== undefined) _this.arg = arg;\n    _this.running = true;\n    _this.wasStopped = false;\n\n    _this.launch();\n\n    return true;\n  });\n\n  _defineProperty(this, \"stop\", function () {\n    if (!_this.running) return;\n    _this.wasStopped = true;\n    _this.running = false;\n    _this.tryNum = 0;\n    return true;\n  });\n\n  this.condition = props.condition || true;\n  this.callback = props.callback || console.log.bind(this, 'В Laucher не передан callback');\n  this.arg = props.arg;\n  this.attempts = props.attempts || Infinity;\n  if (props.run) this.run();\n};\n\n\nwindow.Launcher = Launcher;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy90YXNrLWxhdW5jaGVyLmpzP2NjMTgiXSwibmFtZXMiOlsiTGF1bmNoZXIiLCJwcm9wcyIsImNvbmRpdGlvbiIsImNhbGwiLCJzdG9wIiwiY2FsbGJhY2siLCJhcmciLCJ0cnlOdW0iLCJhdHRlbXB0cyIsIndhc1N0b3BwZWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsYXVuY2giLCJydW5uaW5nIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsImJpbmQiLCJJbmZpbml0eSIsInJ1biIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQXFCQSxRO0FBS2pCOzs7Ozs7OztBQVFBLG9CQUF3QjtBQUFBOztBQUFBLE1BQVpDLEtBQVksdUVBQUosRUFBSTs7QUFBQTs7QUFBQSxtQ0FaZCxLQVljOztBQUFBLHNDQVhYLEtBV1c7O0FBQUEsa0NBVmYsQ0FVZTs7QUFBQSxrQ0FTZixZQUFNO0FBQ1g7QUFDQSxRQUFJLEtBQUksQ0FBQ0MsU0FBTCxDQUFlQyxJQUFmLENBQW9CLEtBQXBCLENBQUosRUFBK0I7QUFDM0IsV0FBSSxDQUFDQyxJQUFMOztBQUNBLFdBQUksQ0FBQ0MsUUFBTCxDQUFjLEtBQUksQ0FBQ0MsR0FBbkIsRUFGMkIsQ0FJM0I7QUFDQTs7QUFDSCxLQU5ELE1BTU8sSUFBSSxDQUFDLEtBQUksQ0FBQ0osU0FBTCxDQUFlQyxJQUFmLENBQW9CLEtBQXBCLENBQUQsSUFBOEIsS0FBSSxDQUFDSSxNQUFMLEdBQWMsS0FBSSxDQUFDQyxRQUFqRCxJQUE2RCxDQUFDLEtBQUksQ0FBQ0MsVUFBdkUsRUFBbUY7QUFDdEYsV0FBSSxDQUFDRixNQUFMO0FBQ0FHLDJCQUFxQixDQUFDLEtBQUksQ0FBQ0MsTUFBTixDQUFyQixDQUZzRixDQUl0RjtBQUNILEtBTE0sTUFLQSxJQUFJLEtBQUksQ0FBQ0osTUFBTCxJQUFlLEtBQUksQ0FBQ0MsUUFBeEIsRUFBa0M7QUFDckMsV0FBSSxDQUFDSixJQUFMO0FBQ0g7QUFDSixHQXpCdUI7O0FBQUEsK0JBNEJsQixVQUFDRSxHQUFELEVBQVM7QUFDWCxRQUFJLEtBQUksQ0FBQ00sT0FBVCxFQUFrQjtBQUNsQixRQUFJTixHQUFHLEtBQUtPLFNBQVosRUFBdUIsS0FBSSxDQUFDUCxHQUFMLEdBQVdBLEdBQVg7QUFFdkIsU0FBSSxDQUFDTSxPQUFMLEdBQWUsSUFBZjtBQUNBLFNBQUksQ0FBQ0gsVUFBTCxHQUFrQixLQUFsQjs7QUFDQSxTQUFJLENBQUNFLE1BQUw7O0FBRUEsV0FBTyxJQUFQO0FBQ0gsR0FyQ3VCOztBQUFBLGdDQXdDakIsWUFBTTtBQUNULFFBQUksQ0FBQyxLQUFJLENBQUNDLE9BQVYsRUFBbUI7QUFFbkIsU0FBSSxDQUFDSCxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsU0FBSSxDQUFDRyxPQUFMLEdBQWUsS0FBZjtBQUNBLFNBQUksQ0FBQ0wsTUFBTCxHQUFjLENBQWQ7QUFFQSxXQUFPLElBQVA7QUFDSCxHQWhEdUI7O0FBQ3BCLE9BQUtMLFNBQUwsR0FBaUJELEtBQUssQ0FBQ0MsU0FBTixJQUFtQixJQUFwQztBQUNBLE9BQUtHLFFBQUwsR0FBZ0JKLEtBQUssQ0FBQ0ksUUFBTixJQUFrQlMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQVosQ0FBaUIsSUFBakIsRUFBdUIsK0JBQXZCLENBQWxDO0FBQ0EsT0FBS1YsR0FBTCxHQUFXTCxLQUFLLENBQUNLLEdBQWpCO0FBQ0EsT0FBS0UsUUFBTCxHQUFnQlAsS0FBSyxDQUFDTyxRQUFOLElBQWtCUyxRQUFsQztBQUVBLE1BQUloQixLQUFLLENBQUNpQixHQUFWLEVBQWUsS0FBS0EsR0FBTDtBQUNsQixDOzs7QUE0Q0xDLE1BQU0sQ0FBQ25CLFFBQVAsR0FBa0JBLFFBQWxCIiwiZmlsZSI6Ii4vYXBwL3NjcmlwdHMvdGFzay1sYXVuY2hlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIExhdW5jaGVyIHtcclxuICAgIHJ1bm5pbmcgPSBmYWxzZTtcclxuICAgIHdhc1N0b3BwZWQgPSBmYWxzZTtcclxuICAgIHRyeU51bSA9IDA7XHJcblxyXG4gICAgLyogIHByb3BzID0ge1xyXG4gICAgICogICAgICAgY29uZGl0aW9uOiAgQEZ1bmN0aW9uOiDQtNC+0LvQttC90LAg0L/RgNC+0LLQtdGA0Y/RgtGMINGD0YHQu9C+0LLQuNC1LCDQvdC10L7QsdGF0L7QtNC40LzQvtC1INC00LvRjyDQstGL0LfQvtCy0LAgY2FsbGJhY2sg0Lgg0LLQvtC30LLRgNCw0YnQsNGC0YwgYm9vbGVhbi5cclxuICAgICAqICAgICAgIGNhbGxiYWNrOiAgIEBGdW5jdGlvbjog0LLRi9C30L7QstC10YLRgdGPINC60L7Qs9C00LAgY29uZGl0aW9uINCy0LXRgNC90LXRgiB0cnVlLlxyXG4gICAgICogICAgICAgYXJnOiAgICAgICAgQEFueTog0L7QtNC40L0g0LDRgNCz0YPQvNC10L3Rgiwg0LrQvtGC0L7RgNGL0Lkg0L/QtdGA0LXQtNCw0YHRgtGB0Y8g0LIgY2FsbGJhY2sg0L/RgNC4INC10LPQviDQstGL0LfQvtCy0LUuINCd0LXQvtCx0Y/Qt9Cw0YLQtdC70YzQvdGL0LkuXHJcbiAgICAgKiAgICAgICBhdHRlbXB0czogICBATnVtYmVyOiDQutC+0LvQuNGH0LXRgdGC0LLQviDQv9C+0L/Ri9GC0L7QuiDQtNC70Y8g0L/RgNC+0LLQtdGA0LrQuCDRg9GB0LvQvtCy0LjRjy4g0J3QtdC+0LHRj9C30LDRgtC10LvRjNC90YvQuS4gXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICDQldGB0LvQuCDQvdC1INC/0LXRgNC00LDQvSwg0L/RgNC+0LLQtdGA0LrQsCDQsdGD0LTQtdGCINCx0LXRgdC60L7QvdC10YfQvdC+0LksINC/0L7QutCwIGNvbmRpdGlvbiDQvdC1INCy0LXRgNC90LXRgiB0cnVlINC40LvQuCDQvdC1INCx0YPQtNC10YIg0LLRi9C30LLQsNC9INC80LXRgtC+0LQg0L7RgdGC0LDQvdC+0LLQutC4IC5zdG9wKClcclxuICAgICAqICAgICAgIHJ1bjogICAgQEJvb2xlYW46INCV0YHQu9C4IHRydWUsINGC0L4g0LfQsNC/0YPRgdC6INGC0LDRgdC60LAg0L/RgNC+0LjQt9C+0LnQtNC10YIg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60LgsINCx0LXQtyDQstGL0LfQvtCy0LAgLnJ1bigpXHJcbiAgICAgKiAgIH0gKi9cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IHByb3BzLmNvbmRpdGlvbiB8fCB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBwcm9wcy5jYWxsYmFjayB8fCBjb25zb2xlLmxvZy5iaW5kKHRoaXMsICfQkiBMYXVjaGVyINC90LUg0L/QtdGA0LXQtNCw0L0gY2FsbGJhY2snKTtcclxuICAgICAgICB0aGlzLmFyZyA9IHByb3BzLmFyZztcclxuICAgICAgICB0aGlzLmF0dGVtcHRzID0gcHJvcHMuYXR0ZW1wdHMgfHwgSW5maW5pdHk7XHJcblxyXG4gICAgICAgIGlmIChwcm9wcy5ydW4pIHRoaXMucnVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGF1bmNoID0gKCkgPT4ge1xyXG4gICAgICAgIC8vINCV0YHQu9C4INGE0YPQvdC60YbQuNGPINGD0YHQu9C+0LLQuNGPINCy0LXRgNC90YPQu9CwIHRydWUsINGC0L7RgNC80L7Qt9C40Lwg0YDQtdC60YPRgNGB0LjRjiDQuCDQstGL0LfQt9GL0LLQsNC10LwgY2FsbGJhY2tcclxuICAgICAgICBpZiAodGhpcy5jb25kaXRpb24uY2FsbCh0aGlzKSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLmFyZyk7XHJcblxyXG4gICAgICAgICAgICAvLyDQldGB0LvQuCDRhNGD0L3QutGG0LjRjyDRg9GB0LvQvtCy0LjRjyDQstC10YDQvdGD0LvQsCBmYWxzZSwg0LrQvtC70LjRh9C10YHRgtCy0L4g0L/QvtC/0YvRgtC+0Log0L3QtSDQuNGB0YfQtdGA0L/QsNC90L4g0Lgg0L3QtSDQvtGB0YLQsNC90L7QstC70LXQvdCwINGA0LXQutGD0YDRgdC40Y8sXHJcbiAgICAgICAgICAgIC8vINGC0L4g0YPQstC10LvQuNGH0LjQstCw0LXQvCDRgdGH0LXRgtGH0LjQuiDQv9C+0L/Ri9GC0L7QuiDQuCDQv9C70LDQvdC40YDRg9C10Lwg0L7Rh9C10YDQtdC00L3QvtC5INC30LDQv9GD0YHQuiBcclxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmNvbmRpdGlvbi5jYWxsKHRoaXMpICYmIHRoaXMudHJ5TnVtIDwgdGhpcy5hdHRlbXB0cyAmJiAhdGhpcy53YXNTdG9wcGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJ5TnVtKys7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxhdW5jaCk7XHJcblxyXG4gICAgICAgICAgICAvLyDQldGB0LvQuCDQutC+0LvQuNGH0LXRgdGC0LLQviDQv9C+0L/Ri9GC0L7QuiDQuNGB0YfQtdGA0L/QsNC90L4sINGC0L7RgNC80L7Qt9C40Lwg0YDQtdC60YPRgNGB0LjRjlxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50cnlOdW0gPj0gdGhpcy5hdHRlbXB0cykge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0JfQsNC/0YPRgdC6INGA0LXQutGD0YDRgdC40LLQvdC+0Lkg0L/RgNC+0LLQtdGA0LrQuCDRg9GB0LvQvtCy0LjRj1xyXG4gICAgcnVuID0gKGFyZykgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIHJldHVybjtcclxuICAgICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHRoaXMuYXJnID0gYXJnO1xyXG5cclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMud2FzU3RvcHBlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGF1bmNoKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCe0YHRgtCw0L3QvtCy0LrQsCDRgNC10LrRg9GA0YHQuNCy0L3QvtC5INC/0YDQvtCy0LXRgNC60Lgg0YPRgdC70L7QstC40Y9cclxuICAgIHN0b3AgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy53YXNTdG9wcGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRyeU51bSA9IDA7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cuTGF1bmNoZXIgPSBMYXVuY2hlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/scripts/task-launcher.js\n");

/***/ })

/******/ });
//# sourceMappingURL=maps/task-launcher.js.map

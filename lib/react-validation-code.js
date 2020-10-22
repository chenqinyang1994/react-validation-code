(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["VCode"] = factory(require("react"));
	else
		root["VCode"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VCode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_done_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _assets_error_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var origin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var color = ["#00FF00", "#0000FF", "#660000", "#9900FF", "#99FFFF", "#CC0000", "#CC66FF", "#FF0000", "#FFFF00", "#FF00FF", "#C0C0C0", "#000000"];

function getRandom() {
  return origin.substr(Math.floor(Math.random() * 25), 1);
}

function getColor() {
  var len = color.length - 1;
  return color[Math.floor(Math.random() * len)];
}

var VCode = /*#__PURE__*/function (_Component) {
  _inherits(VCode, _Component);

  function VCode() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, VCode);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VCode)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      originStr: "",
      inputStr: "",
      colorArr: []
    };

    _this.handleInputChange = function (e) {
      var getResult = _this.props.getResult;

      _this.setState({
        inputStr: e.target.value
      }, function () {
        getResult && getResult(_this.getCompareResult());
      });
    };

    _this.handleChangeVcode = function () {
      var getResult = _this.props.getResult;

      _this.setState({
        originStr: getRandom() + getRandom() + getRandom() + getRandom(),
        colorArr: [getColor(), getColor(), getColor(), getColor()]
      }, function () {
        getResult && getResult(_this.getCompareResult());
      });
    };

    _this.getCompareResult = function () {
      var _this$state = _this.state,
          originStr = _this$state.originStr,
          inputStr = _this$state.inputStr;
      return originStr === inputStr.toUpperCase();
    };

    return _this;
  }

  _createClass(VCode, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        originStr: getRandom() + getRandom() + getRandom() + getRandom(),
        colorArr: [getColor(), getColor(), getColor(), getColor()]
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.setState({
        originStr: "",
        inputStr: ""
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          originStr = _this$state2.originStr,
          inputStr = _this$state2.inputStr,
          colorArr = _this$state2.colorArr;
      var result = originStr === inputStr.toUpperCase();
      var _this$props = this.props,
          tips = _this$props.tips,
          tipsWord = _this$props.tipsWord,
          className = _this$props.className,
          placeholder = _this$props.placeholder,
          doneCom = _this$props.doneCom,
          errorCom = _this$props.errorCom;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: className ? "v-code ".concat(className) : "v-code"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "v-input"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        style: {
          width: "140px"
        },
        value: inputStr,
        onChange: this.handleInputChange,
        placeholder: placeholder || "请输入验证码"
      }), inputStr ? result ? doneCom || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _assets_done_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
        alt: "Done",
        className: "result-icon"
      }) : errorCom || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _assets_error_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
        alt: "Error",
        className: "result-icon"
      }) : null), originStr && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "show",
        onClick: this.handleChangeVcode
      }, colorArr.map(function (c, key) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          key: key,
          style: {
            color: c
          }
        }, originStr.substr(key, 1));
      })), tips && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "tips",
        onClick: this.handleChangeVcode
      }, tipsWord || "看不清，换一张"));
    }
  }]);

  return VCode;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTgzNzI2MzE4ODgzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjUgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijk5OSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMjAxLjE3MTg3NSIgaGVpZ2h0PSIxMjAwIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik01MTEuOTQ1NSA5NTguNzEyODA5Yy0yNDcuMDY1NzI0IDAtNDQ4LjA1NDMxMy0yMDAuOTg3NTg5LTQ0OC4wNTQzMTMtNDQ4LjA2MDMxMyAwLTI0Ny4wNjU3MjQgMjAwLjk4NzU4OS00NDguMDU0MzEzIDQ0OC4wNTQzMTMtNDQ4LjA1NDMxMyAyNDcuMDcyNzI0IDAgNDQ4LjA2MDMxMyAyMDAuOTg3NTg5IDQ0OC4wNjAzMTMgNDQ4LjA1NDMxM0M5NjAuMDA1ODEzIDc1Ny43MjQyMiA3NTkuMDE3MjI0IDk1OC43MTI4MDkgNTExLjk0NTUgOTU4LjcxMjgwOUw1MTEuOTQ1NSA5NTguNzEyODA5ek01MTEuOTQ1NSAxMjYuODkzMzcyYy0yMTEuNjA3NjIgMC0zODMuNzU4MTI0IDE3Mi4xNTA1MDQtMzgzLjc1ODEyNCAzODMuNzU4MTI0IDAgMjExLjU4MDYyIDE3Mi4xNTA1MDQgMzgzLjc2NTEyNCAzODMuNzU4MTI0IDM4My43NjUxMjQgMjExLjU4MDYyIDAgMzgzLjc2NTEyNC0xNzIuMTg0NTA0IDM4My43NjUxMjQtMzgzLjc2NTEyNEM4OTUuNzA5NjI0IDI5OS4wNDM4NzYgNzIzLjUyNTEyIDEyNi44OTMzNzIgNTExLjk0NTUgMTI2Ljg5MzM3Mkw1MTEuOTQ1NSAxMjYuODkzMzcyek01MTEuOTQ1NSAxMjYuODkzMzcyIiBwLWlkPSIxMDAwIiBmaWxsPSIjMWFmYTI5Ij48L3BhdGg+PHBhdGggZD0iTTcyNi45NDgxMyAzOTEuODI1MTQ4Yy0xMi41NDUwMzctMTIuNDQ4MDM2LTMyLjgzNzA5Ni0xMi4zMjIwMzYtNDUuMjQ5MTMzIDAuMjU0MDAxTDQ0OC4zODgzMTQgNjI3Ljk0Nzg0bC0xMDMuMjgwMzAzLTEwNi4xMjIzMTFjLTEyLjM1MDAzNi0xMi43MDcwMzctMzIuNjEyMDk2LTEyLjkzMjAzOC00NS4yNDkxMzMtMC42NDAwMDItMTIuNjc4MDM3IDEyLjMyMjAzNi0xMi45NjUwMzggMzIuNjEyMDk2LTAuNjQwMDAyIDQ1LjI1MTEzM2wxMjYuMDMyMzY5IDEyOS41MjIzNzljMC4wNjQgMC4wOTMgMC4xOTAwMDEgMC4wOTMgMC4yNTQwMDEgMC4xOTAwMDEgMC4wNjQgMC4wNjQgMC4wOTcgMC4xOTEwMDEgMC4xNjEgMC4yNTQwMDEgMi4wMTcwMDYgMS45ODgwMDYgNC41MTIwMTMgMy4yMDQwMDkgNi44ODEwMiA0LjU0NzAxMyAxLjI1MDAwNCAwLjY3NDAwMiAyLjI0MTAwNyAxLjc5MzAwNSAzLjUyMDAxIDIuMzA1MDA3IDMuODczMDExIDEuNjAxMDA1IDguMDAwMDIzIDIuMzk4MDA3IDEyLjA5NjAzNSAyLjM5ODAwNyA0LjA2MzAxMiAwIDguMTMxMDI0LTAuNzk2MDAyIDExLjk2OTAzNS0yLjMzNDAwNyAxLjI1MDAwNC0wLjUxMzAwMiAyLjIwODAwNi0xLjUzOTAwNSAzLjM5NDAxLTIuMTc4MDA2IDIuMzk4MDA3LTEuMzQ0MDA0IDQuODk4MDE0LTIuNTI1MDA3IDYuOTQ1MDItNC41NDIwMTMgMC4wNjMtMC4wNjQgMC4wOTgtMC4xOTYwMDEgMC4xOTAwMDEtMC4yNTkwMDEgMC4wNjQtMC4wOTQgMC4xNjEtMC4xMjggMC4yNTkwMDEtMC4xOTEwMDFsMjU2LjI1Mzc1MS0yNTkuMDQxNzU5QzczOS42MjYxNjcgNDI0LjQ5OTI0NCA3MzkuNDk0MTY2IDQwNC4yNDIxODQgNzI2Ljk0ODEzIDM5MS44MjUxNDhMNzI2Ljk0ODEzIDM5MS44MjUxNDh6TTcyNi45NDgxMyAzOTEuODI1MTQ4IiBwLWlkPSIxMDAxIiBmaWxsPSIjMWFmYTI5Ij48L3BhdGg+PC9zdmc+");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTgzNzI2NDQ3ODk2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjUgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1MjIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTIwMS4xNzE4NzUiIGhlaWdodD0iMTIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTExLjc2NDQ5OSA5NTkuODA3ODEyYy0yNDYuOTY2NzI0IDAtNDQ3Ljg3MzMxMi0yMDAuOTA2NTg5LTQ0Ny44NzMzMTItNDQ3Ljg3OTMxMiAwLTI0Ni45NjY3MjQgMjAwLjkwNjU4OS00NDcuODczMzEyIDQ0Ny44NzMzMTItNDQ3Ljg3MzMxMiAyNDYuOTcyNzI0IDAgNDQ3Ljg3OTMxMiAyMDAuOTA2NTg5IDQ0Ny44NzkzMTIgNDQ3Ljg3MzMxMkM5NTkuNjQzODExIDc1OC45MDEyMjMgNzU4LjczNzIyMyA5NTkuODA3ODEyIDUxMS43NjQ0OTkgOTU5LjgwNzgxMkw1MTEuNzY0NDk5IDk1OS44MDc4MTJ6TTUxMS43NjQ0OTkgMTI4LjMyNTM3NmMtMjExLjUyMjYyIDAtMzgzLjYwMzEyNCAxNzIuMDgwNTA0LTM4My42MDMxMjQgMzgzLjYwMzEyNCAwIDIxMS40OTQ2MiAxNzIuMDgxNTA0IDM4My42MTAxMjQgMzgzLjYwMzEyNCAzODMuNjEwMTI0IDIxMS40OTQ2MiAwIDM4My42MTAxMjQtMTcyLjExNDUwNCAzODMuNjEwMTI0LTM4My42MTAxMjRDODk1LjM3MzYyMyAzMDAuNDA1ODggNzIzLjI1OTExOSAxMjguMzI1Mzc2IDUxMS43NjQ0OTkgMTI4LjMyNTM3Nkw1MTEuNzY0NDk5IDEyOC4zMjUzNzZ6TTUxMS43NjQ0OTkgMTI4LjMyNTM3NiIgcC1pZD0iMTUyMyIgZmlsbD0iI2Q4MWUwNiI+PC9wYXRoPjxwYXRoIGQ9Ik01NTYuODEwNjMxIDUxMy4zMDU1MDRsMTM4LjMzMTQwNS0xMzYuODI3NDAxYzEyLjU2OTAzNy0xMi40MDkwMzYgMTIuNjY2MDM3LTMyLjY2MjA5NiAwLjI1NDAwMS00NS4yMzExMzMtMTIuNDE0MDM2LTEyLjU3NTAzNy0zMi42OTYwOTYtMTIuNjczMDM3LTQ1LjIzNjEzMy0wLjI2MDAwMUw1MTEuNjM3NDk5IDQ2Ny45NzczNzEgMzc1LjIzMTA5OSAzMzEuMTQ4OTdjLTEyLjUxMjAzNy0xMi41MDUwMzctMzIuNzMxMDk2LTEyLjU3NDAzNy00NS4yMzcxMzMtMC4wNjItMTIuNTEwMDM3IDEyLjQ3NzAzNy0xMi41NDAwMzcgMzIuNzI1MDk2LTAuMDYyIDQ1LjIzNjEzM2wxMzYuMjE3Mzk5IDEzNi42MzI0LTEzNy4zNDA0MDIgMTM1Ljg2NDM5OGMtMTIuNTY5MDM3IDEyLjQ0ODAzNi0xMi42NjgwMzcgMzIuNjYyMDk2LTAuMjU0MDAxIDQ1LjIzNzEzMyA2LjI2ODAxOCA2LjMzNjAxOSAxNC40OTMwNDIgOS40OTkwMjggMjIuNzQ3MDY3IDkuNDk5MDI4IDguMTIzMDI0IDAgMTYuMjUwMDQ4LTMuMDk5MDA5IDIyLjQ4OTA2Ni05LjI0NTAyN2wxMzcuNTMwNDAzLTEzNi4wMjIzOTkgMTM4LjY0NzQwNiAxMzkuMDk3NDA4YzYuMjM4MDE4IDYuMjY3MDE4IDE0LjQzMDA0MiA5LjQwMTAyOCAyMi42NTAwNjYgOS40MDEwMjggOC4xOTEwMjQgMCAxNi4zNDgwNDgtMy4xMzQwMDkgMjIuNTg2MDY2LTkuMzM5MDI3IDEyLjUwNjAzNy0xMi40NzcwMzcgMTIuNTQyMDM3LTMyLjY5NjA5NiAwLjA2NC00NS4yMzYxMzNMNTU2LjgxMDYzMSA1MTMuMzA1NTA0IDU1Ni44MTA2MzEgNTEzLjMwNTUwNHpNNTU2LjgxMDYzMSA1MTMuMzA1NTA0IiBwLWlkPSIxNTI0IiBmaWxsPSIjZDgxZTA2Ij48L3BhdGg+PC9zdmc+");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(5);
            var content = __webpack_require__(6);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".v-code {\n  display: flex;\n  align-items: center;\n  font-weight: wrap;\n}\n.v-code .v-input {\n  display: flex;\n  align-items: center;\n}\n.v-code .v-input input {\n  height: 32px;\n  padding: 0 10px;\n  box-sizing: border-box;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 32px;\n  outline: none;\n  transition: all 0.3s;\n}\n.v-code .v-input input::placeholder {\n  font-weight: normal;\n}\n.v-code .v-input input:hover {\n  border-color: #1890ff;\n}\n.v-code .v-input .result-icon {\n  margin-left: 10px;\n  width: 20px;\n  height: 20px;\n}\n.v-code .show {\n  width: 100px;\n  height: 32px;\n  margin: 0 20px;\n  box-sizing: border-box;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 32px;\n  text-align: center;\n  letter-spacing: 5px;\n  cursor: pointer;\n  user-select: none;\n}\n.v-code .tips {\n  font-size: 12px;\n  color: #1890ff;\n  cursor: pointer;\n  user-select: none;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ })
/******/ ])["default"];
});
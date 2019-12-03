module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layout/btn-post.jsx":
/*!****************************************!*\
  !*** ./components/layout/btn-post.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Main = ({
  children,
  post
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  return __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_POST_VIEW"],
      post
    }),
    className: "jsx-286330549"
  }, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "286330549"
  }, "button.jsx-286330549{background:transparent;border:none;}button.jsx-286330549:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbGF5b3V0L2J0bi1wb3N0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTa0IsQUFHa0MsQUFJVixhQUNmLFVBSmMsWUFDZCIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL2xheW91dC9idG4tcG9zdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBPTl9QT1NUX1ZJRVcgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcblxuY29uc3QgTWFpbiA9ICh7IGNoaWxkcmVuLCBwb3N0IH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICByZXR1cm4oXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IGRpc3BhdGNoKHsgdHlwZTogT05fUE9TVF9WSUVXLCBwb3N0IH0pfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9idXR0b24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/layout/btn-post.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./components/layout/post.jsx":
/*!************************************!*\
  !*** ./components/layout/post.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layout_var__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout/var */ "./layout/var.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const Home = ({
  title,
  subTitle,
  history
}) => {
  return __jsx("div", {
    className: "jsx-76060649" + " " + "main"
  }, __jsx("div", {
    className: "jsx-76060649" + " " + "home"
  }, __jsx("h1", {
    className: "jsx-76060649"
  }, title), __jsx("p", {
    className: "jsx-76060649"
  }, subTitle), __jsx("p", {
    className: "jsx-76060649"
  }, history)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "76060649"
  }, "p.jsx-76060649{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbGF5b3V0L3Bvc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVrQixBQUdvQixTQUNYIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbGF5b3V0L3Bvc3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBPTl9QT1NUX1ZJRVcgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBjb2xvciB9IGZyb20gJy4uLy4uL2xheW91dC92YXInO1xuXG5jb25zdCBIb21lID0gKHsgdGl0bGUsIHN1YlRpdGxlLCBoaXN0b3J5IH0pID0+IHtcblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVcIj5cbiAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICA8cD57c3ViVGl0bGV9PC9wPlxuICAgICAgICA8cD57aGlzdG9yeX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgcHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEluZm8gPSAoeyB2aXNpYmxlIH0pID0+IHtcbiAgY29uc3QgcG9zdCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBvc3QpO1xuICBjb25zdCB7IHBlcmZpbEltZywgbmFtZSwgbGFzdE5hbWUgfSA9IHBvc3QuY3VycmVudC5hdXRob3I7XG4gIGNvbnN0IHsgZGF0ZSB9ID0gcG9zdC5jdXJyZW50O1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cbiAgICAgICAgICA8aW1nIHNyYz17cGVyZmlsSW1nfSBhbHQ9XCJcIi8+XG4gICAgICAgICAgPHA+e2Ake25hbWV9ICR7bGFzdE5hbWV9YH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cbiAgICAgICAgICA8cD57bmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC9wPlxuICAgICAgICAgIDxzbWFsbD57bmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9PC9zbWFsbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICA8SG9tZSB7Li4ucG9zdC5jdXJyZW50fSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8bmF2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZD1cIk0yODAuMzcgMTQ4LjI2TDk2IDMwMC4xMVY0NjRhMTYgMTYgMCAwIDAgMTYgMTZsMTEyLjA2LS4yOWExNiAxNiAwIDAgMCAxNS45Mi0xNlYzNjhhMTYgMTYgMCAwIDEgMTYtMTZoNjRhMTYgMTYgMCAwIDEgMTYgMTZ2OTUuNjRhMTYgMTYgMCAwIDAgMTYgMTYuMDVMNDY0IDQ4MGExNiAxNiAwIDAgMCAxNi0xNlYzMDBMMjk1LjY3IDE0OC4yNmExMi4xOSAxMi4xOSAwIDAgMC0xNS4zIDB6TTU3MS42IDI1MS40N0w0ODggMTgyLjU2VjQ0LjA1YTEyIDEyIDAgMCAwLTEyLTEyaC01NmExMiAxMiAwIDAgMC0xMiAxMnY3Mi42MUwzMTguNDcgNDNhNDggNDggMCAwIDAtNjEgMEw0LjM0IDI1MS40N2ExMiAxMiAwIDAgMC0xLjYgMTYuOWwyNS41IDMxQTEyIDEyIDAgMCAwIDQ1LjE1IDMwMWwyMzUuMjItMTkzLjc0YTEyLjE5IDEyLjE5IDAgMCAxIDE1LjMgMEw1MzAuOSAzMDFhMTIgMTIgMCAwIDAgMTYuOS0xLjZsMjUuNS0zMWExMiAxMiAwIDAgMC0xLjctMTYuOTN6XCIvPjwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBkPVwiTTQ2Mi4zIDYyLjZDNDA3LjUgMTUuOSAzMjYgMjQuMyAyNzUuNyA3Ni4yTDI1NiA5Ni41bC0xOS43LTIwLjNDMTg2LjEgMjQuMyAxMDQuNSAxNS45IDQ5LjcgNjIuNmMtNjIuOCA1My42LTY2LjEgMTQ5LjgtOS45IDIwNy45bDE5My41IDE5OS44YzEyLjUgMTIuOSAzMi44IDEyLjkgNDUuMyAwbDE5My41LTE5OS44YzU2LjMtNTguMSA1My0xNTQuMy05LjgtMjA3Ljl6XCIvPjwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBkPVwiTTI1NiAzMkMxMTQuNiAzMiAwIDEyNS4xIDAgMjQwYzAgNDkuNiAyMS40IDk1IDU3IDEzMC43QzQ0LjUgNDIxLjEgMi43IDQ2NiAyLjIgNDY2LjVjLTIuMiAyLjMtMi44IDUuNy0xLjUgOC43UzQuOCA0ODAgOCA0ODBjNjYuMyAwIDExNi0zMS44IDE0MC42LTUxLjQgMzIuNyAxMi4zIDY5IDE5LjQgMTA3LjQgMTkuNCAxNDEuNCAwIDI1Ni05My4xIDI1Ni0yMDhTMzk3LjQgMzIgMjU2IDMyelwiLz48L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZD1cIk0zNTIgMzIwYy0yMi42MDggMC00My4zODcgNy44MTktNTkuNzkgMjAuODk1bC0xMDIuNDg2LTY0LjA1NGE5Ni41NTEgOTYuNTUxIDAgMCAwIDAtNDEuNjgzbDEwMi40ODYtNjQuMDU0QzMwOC42MTMgMTg0LjE4MSAzMjkuMzkyIDE5MiAzNTIgMTkyYzUzLjAxOSAwIDk2LTQyLjk4MSA5Ni05NlM0MDUuMDE5IDAgMzUyIDBzLTk2IDQyLjk4MS05NiA5NmMwIDcuMTU4Ljc5IDE0LjEzIDIuMjc2IDIwLjg0MUwxNTUuNzkgMTgwLjg5NUMxMzkuMzg3IDE2Ny44MTkgMTE4LjYwOCAxNjAgOTYgMTYwYy01My4wMTkgMC05NiA0Mi45ODEtOTYgOTZzNDIuOTgxIDk2IDk2IDk2YzIyLjYwOCAwIDQzLjM4Ny03LjgxOSA1OS43OS0yMC44OTVsMTAyLjQ4NiA2NC4wNTRBOTYuMzAxIDk2LjMwMSAwIDAgMCAyNTYgNDE2YzAgNTMuMDE5IDQyLjk4MSA5NiA5NiA5NnM5Ni00Mi45ODEgOTYtOTYtNDIuOTgxLTk2LTk2LTk2elwiLz48L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6ICR7dmlzaWJsZSA/ICcwJyA6ICctMTAwJSd9O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjUpO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlcntcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBwYWRkaW5nOiAycmVtIC41cmVtIDA7XG4gICAgICAgIH1cbiAgICAgICAgcHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnVzZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC51c2VyIGltZ3tcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHl7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICB9XG4gICAgICAgIG5hdntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9yLmRhcmt9O1xuICAgICAgICB9XG4gICAgICAgIG5hdiB1bHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgfVxuICAgICAgICBsaSBidXR0b257XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICB9XG4gICAgICAgIGxpIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGxpIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIGxpIGJ1dHRvbjpob3ZlciBzdmd7XG4gICAgICAgICAgZmlsbDogJHtjb2xvci5wcmltfTtcbiAgICAgICAgfVxuICAgICAgICBsaSBzdmd7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgZmlsbDogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICBsaTpudGgtY2hpbGQob2RkKXtcbiAgICAgICAgICBtYXJnaW46IDAgLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogOTkycHgpe1xuICAgICAgICAgIC5tYWlue1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEJ0bkluZm8gPSAoeyBvbkNsaWNrLCB2aXNpYmxlIH0pID0+IHtcblxuICByZXR1cm4oXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IG9uQ2xpY2soIXZpc2libGUpfT5cbiAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGQ9XCJNMjU2IDUwNEMxMTkgNTA0IDggMzkzIDggMjU2UzExOSA4IDI1NiA4czI0OCAxMTEgMjQ4IDI0OC0xMTEgMjQ4LTI0OCAyNDh6bTI4LjktMTQzLjZMMjA5LjQgMjg4SDM5MmMxMy4zIDAgMjQtMTAuNyAyNC0yNHYtMTZjMC0xMy4zLTEwLjctMjQtMjQtMjRIMjA5LjRsNzUuNS03Mi40YzkuNy05LjMgOS45LTI0LjguNC0zNC4zbC0xMS0xMC45Yy05LjQtOS40LTI0LjYtOS40LTMzLjkgMEwxMDcuNyAyMzljLTkuNCA5LjQtOS40IDI0LjYgMCAzMy45bDEzMi43IDEzMi43YzkuNCA5LjQgMjQuNiA5LjQgMzMuOSAwbDExLTEwLjljOS41LTkuNSA5LjMtMjUtLjQtMzQuM3pcIi8+PC9zdmc+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgcmlnaHQ6IC41cmVtO1xuICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICB0cmFuc2Zvcm06ICR7dmlzaWJsZSA/ICdyb3RhdGUoMTgwZGVnKScgOiAncm90YXRlKDApJ307XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgc3Zne1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVyIHN2Z3tcbiAgICAgICAgICBmaWxsOiAke2NvbG9yLmRhbmdlcn07XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNTc2cHgpe1xuICAgICAgICAgIHN2Z3tcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9idXR0b24+XG4gIClcbn1cblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgcG9zdCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBvc3QpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtpbmZvLCBzZXRJbmZvXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpPT4gc2V0SW5mbyh0cnVlKSwgNTAwKTtcbiAgICByZXR1cm4gKCk9PiBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gIH0sW10pXG4gIHJldHVybihcbiAgICA8TW9kYWwgaXNPcGVuPXtwb3N0LnZpc2libGV9IHN0eWxlPXt7IG1heFdpZHRoOiAnOTV2dycgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5fY2xvc2VcIiBvbkNsaWNrPXsoKT0+IGRpc3BhdGNoKHsgdHlwZTogT05fUE9TVF9WSUVXLCBwb3N0OiB7fSB9KX0+WDwvYnV0dG9uPlxuICAgICAgICA8aW1nIHNyYz17cG9zdC5jdXJyZW50LmltZ30gYWx0PVwiXCIvPlxuICAgICAgICA8QnRuSW5mbyB2aXNpYmxlPXtpbmZvfSBvbkNsaWNrPXtzZXRJbmZvfSAvPlxuICAgICAgICA8SW5mbyB2aXNpYmxlPXtpbmZvfSAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1haW57XG4gICAgICAgICAgICBoZWlnaHQ6IDkydmg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWFpbiBpbWd7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idG5fY2xvc2V7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAuMnJlbTtcbiAgICAgICAgICAgIHJpZ2h0OiAuNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB6LWluZGV4OiAxNTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ0bl9jbG9zZTpmb2N1c3tcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idG5fY2xvc2U6aG92ZXJ7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvci5wcmltfTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9Nb2RhbD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/layout/post.jsx */"));
};

const Info = ({
  visible
}) => {
  const post = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.post);
  const {
    perfilImg,
    name,
    lastName
  } = post.current.author;
  const {
    date
  } = post.current;
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]]) + " " + "main"
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]])
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]]) + " " + "user"
  }, __jsx("img", {
    src: perfilImg,
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]])
  }), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]])
  }, `${name} ${lastName}`)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]]) + " " + "date"
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]])
  }, new Date(date).toLocaleDateString()), __jsx("small", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]])
  }, new Date(date).toLocaleTimeString()))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]]) + " " + "body"
  }, __jsx(Home, post.current)), __jsx("nav", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]])
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]])
  }, __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]])
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]])
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]])
  }, __jsx("path", {
    d: "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]])
  })))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]])
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]])
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]])
  }, __jsx("path", {
    d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]])
  })))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]])
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]])
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]])
  }, __jsx("path", {
    d: "M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]])
  })))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]])
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]])
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]])
  }, __jsx("path", {
    d: "M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]])
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3509891881",
    dynamic: [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]
  }, `.main.__jsx-style-dynamic-selector{position:absolute;height:100%;width:100%;top:0;right:${visible ? '0' : '-100%'};background:rgba(0,0,0,.5);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-transition:300ms ease;transition:300ms ease;}header.__jsx-style-dynamic-selector{color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:2rem .5rem 0;}p.__jsx-style-dynamic-selector{margin:0;}.user.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.user.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{margin-right:.5rem;width:40px;height:40px;border-radius:50%;object-fit:cover;object-position:center;}.body.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;color:#fff;padding:5%;}nav.__jsx-style-dynamic-selector{background:${_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark};}nav.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector{list-style:none;margin:0;padding:0;padding:.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}li.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{width:30px;height:30px;border-radius:50%;background:transparent;border:1px solid #fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:250ms ease;transition:250ms ease;}li.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:focus{outline:none;}li.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{background:#fff;}li.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover svg.__jsx-style-dynamic-selector{fill:${_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim};}li.__jsx-style-dynamic-selector svg.__jsx-style-dynamic-selector{-webkit-transition:250ms ease;transition:250ms ease;width:20px;height:20px;fill:#fff;}li.__jsx-style-dynamic-selector:nth-child(odd){margin:0 .5rem;}@media(min-width:992px){.main.__jsx-style-dynamic-selector{width:50%;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbGF5b3V0L3Bvc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Fa0IsQUFHNkIsQUFXUCxBQU1GLEFBR0ksQUFJTSxBQVFQLEFBSzRCLEFBR3hCLEFBUUwsQUFXRSxBQUdHLEFBR2tCLEFBR1osQUFNUCxBQUlILFNBNURkLENBNkRFLENBbkVhLEFBcUNELEVBV2QsRUFlQSxDQWxDVyxBQXNCWCxFQTlEYyxDQXdCRCxJQXlCTyxFQVJSLEtBeENDLEFBd0JDLElBd0NkLENBdkJnQixLQUxoQixDQW5DUSxBQWdEaUIsQ0F4QkwsS0F2QmlCLEVBd0N0QixHQXlCRixRQXpDTSxHQTBDTCxDQWxCVSxPQW5CWCxHQVpRLENBa0RULEVBMUNhLEtBeEJNLEFBNkJsQixHQXJCbUIsQUEyRGhDLENBbkJlLE9BbEJmLE9BTEEsUUF4QmUsZUF1Q1kscUNBU0YsT0FoQ3pCLGVBZndCLGtCQU9ELG9CQWdDdkIsQ0EvQkEsc0NBd0NxQixDQS9DRyxvREFDeEIsd0NBK0N3QixvREFDeEIiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9sYXlvdXQvcG9zdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IE9OX1BPU1RfVklFVyB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IGNvbG9yIH0gZnJvbSAnLi4vLi4vbGF5b3V0L3Zhcic7XG5cbmNvbnN0IEhvbWUgPSAoeyB0aXRsZSwgc3ViVGl0bGUsIGhpc3RvcnkgfSkgPT4ge1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZVwiPlxuICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgIDxwPntzdWJUaXRsZX08L3A+XG4gICAgICAgIDxwPntoaXN0b3J5fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgSW5mbyA9ICh7IHZpc2libGUgfSkgPT4ge1xuICBjb25zdCBwb3N0ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucG9zdCk7XG4gIGNvbnN0IHsgcGVyZmlsSW1nLCBuYW1lLCBsYXN0TmFtZSB9ID0gcG9zdC5jdXJyZW50LmF1dGhvcjtcbiAgY29uc3QgeyBkYXRlIH0gPSBwb3N0LmN1cnJlbnQ7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtwZXJmaWxJbWd9IGFsdD1cIlwiLz5cbiAgICAgICAgICA8cD57YCR7bmFtZX0gJHtsYXN0TmFtZX1gfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPlxuICAgICAgICAgIDxwPntuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3A+XG4gICAgICAgICAgPHNtYWxsPntuZXcgRGF0ZShkYXRlKS50b0xvY2FsZVRpbWVTdHJpbmcoKX08L3NtYWxsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgIDxIb21lIHsuLi5wb3N0LmN1cnJlbnR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIj48cGF0aCBkPVwiTTI4MC4zNyAxNDguMjZMOTYgMzAwLjExVjQ2NGExNiAxNiAwIDAgMCAxNiAxNmwxMTIuMDYtLjI5YTE2IDE2IDAgMCAwIDE1LjkyLTE2VjM2OGExNiAxNiAwIDAgMSAxNi0xNmg2NGExNiAxNiAwIDAgMSAxNiAxNnY5NS42NGExNiAxNiAwIDAgMCAxNiAxNi4wNUw0NjQgNDgwYTE2IDE2IDAgMCAwIDE2LTE2VjMwMEwyOTUuNjcgMTQ4LjI2YTEyLjE5IDEyLjE5IDAgMCAwLTE1LjMgMHpNNTcxLjYgMjUxLjQ3TDQ4OCAxODIuNTZWNDQuMDVhMTIgMTIgMCAwIDAtMTItMTJoLTU2YTEyIDEyIDAgMCAwLTEyIDEydjcyLjYxTDMxOC40NyA0M2E0OCA0OCAwIDAgMC02MSAwTDQuMzQgMjUxLjQ3YTEyIDEyIDAgMCAwLTEuNiAxNi45bDI1LjUgMzFBMTIgMTIgMCAwIDAgNDUuMTUgMzAxbDIzNS4yMi0xOTMuNzRhMTIuMTkgMTIuMTkgMCAwIDEgMTUuMyAwTDUzMC45IDMwMWExMiAxMiAwIDAgMCAxNi45LTEuNmwyNS41LTMxYTEyIDEyIDAgMCAwLTEuNy0xNi45M3pcIi8+PC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGQ9XCJNNDYyLjMgNjIuNkM0MDcuNSAxNS45IDMyNiAyNC4zIDI3NS43IDc2LjJMMjU2IDk2LjVsLTE5LjctMjAuM0MxODYuMSAyNC4zIDEwNC41IDE1LjkgNDkuNyA2Mi42Yy02Mi44IDUzLjYtNjYuMSAxNDkuOC05LjkgMjA3LjlsMTkzLjUgMTk5LjhjMTIuNSAxMi45IDMyLjggMTIuOSA0NS4zIDBsMTkzLjUtMTk5LjhjNTYuMy01OC4xIDUzLTE1NC4zLTkuOC0yMDcuOXpcIi8+PC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGQ9XCJNMjU2IDMyQzExNC42IDMyIDAgMTI1LjEgMCAyNDBjMCA0OS42IDIxLjQgOTUgNTcgMTMwLjdDNDQuNSA0MjEuMSAyLjcgNDY2IDIuMiA0NjYuNWMtMi4yIDIuMy0yLjggNS43LTEuNSA4LjdTNC44IDQ4MCA4IDQ4MGM2Ni4zIDAgMTE2LTMxLjggMTQwLjYtNTEuNCAzMi43IDEyLjMgNjkgMTkuNCAxMDcuNCAxOS40IDE0MS40IDAgMjU2LTkzLjEgMjU2LTIwOFMzOTcuNCAzMiAyNTYgMzJ6XCIvPjwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBkPVwiTTM1MiAzMjBjLTIyLjYwOCAwLTQzLjM4NyA3LjgxOS01OS43OSAyMC44OTVsLTEwMi40ODYtNjQuMDU0YTk2LjU1MSA5Ni41NTEgMCAwIDAgMC00MS42ODNsMTAyLjQ4Ni02NC4wNTRDMzA4LjYxMyAxODQuMTgxIDMyOS4zOTIgMTkyIDM1MiAxOTJjNTMuMDE5IDAgOTYtNDIuOTgxIDk2LTk2UzQwNS4wMTkgMCAzNTIgMHMtOTYgNDIuOTgxLTk2IDk2YzAgNy4xNTguNzkgMTQuMTMgMi4yNzYgMjAuODQxTDE1NS43OSAxODAuODk1QzEzOS4zODcgMTY3LjgxOSAxMTguNjA4IDE2MCA5NiAxNjBjLTUzLjAxOSAwLTk2IDQyLjk4MS05NiA5NnM0Mi45ODEgOTYgOTYgOTZjMjIuNjA4IDAgNDMuMzg3LTcuODE5IDU5Ljc5LTIwLjg5NWwxMDIuNDg2IDY0LjA1NEE5Ni4zMDEgOTYuMzAxIDAgMCAwIDI1NiA0MTZjMCA1My4wMTkgNDIuOTgxIDk2IDk2IDk2czk2LTQyLjk4MSA5Ni05Ni00Mi45ODEtOTYtOTYtOTZ6XCIvPjwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFpbntcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICByaWdodDogJHt2aXNpYmxlID8gJzAnIDogJy0xMDAlJ307XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHRyYW5zaXRpb246IDMwMG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIHBhZGRpbmc6IDJyZW0gLjVyZW0gMDtcbiAgICAgICAgfVxuICAgICAgICBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICAudXNlcntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnVzZXIgaW1ne1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuYm9keXtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgcGFkZGluZzogNSU7XG4gICAgICAgIH1cbiAgICAgICAgbmF2e1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3IuZGFya307XG4gICAgICAgIH1cbiAgICAgICAgbmF2IHVse1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB9XG4gICAgICAgIGxpIGJ1dHRvbntcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGkgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgbGkgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgbGkgYnV0dG9uOmhvdmVyIHN2Z3tcbiAgICAgICAgICBmaWxsOiAke2NvbG9yLnByaW19O1xuICAgICAgICB9XG4gICAgICAgIGxpIHN2Z3tcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICBmaWxsOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIGxpOm50aC1jaGlsZChvZGQpe1xuICAgICAgICAgIG1hcmdpbjogMCAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA5OTJweCl7XG4gICAgICAgICAgLm1haW57XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgQnRuSW5mbyA9ICh7IG9uQ2xpY2ssIHZpc2libGUgfSkgPT4ge1xuXG4gIHJldHVybihcbiAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gb25DbGljayghdmlzaWJsZSl9PlxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZD1cIk0yNTYgNTA0QzExOSA1MDQgOCAzOTMgOCAyNTZTMTE5IDggMjU2IDhzMjQ4IDExMSAyNDggMjQ4LTExMSAyNDgtMjQ4IDI0OHptMjguOS0xNDMuNkwyMDkuNCAyODhIMzkyYzEzLjMgMCAyNC0xMC43IDI0LTI0di0xNmMwLTEzLjMtMTAuNy0yNC0yNC0yNEgyMDkuNGw3NS41LTcyLjRjOS43LTkuMyA5LjktMjQuOC40LTM0LjNsLTExLTEwLjljLTkuNC05LjQtMjQuNi05LjQtMzMuOSAwTDEwNy43IDIzOWMtOS40IDkuNC05LjQgMjQuNiAwIDMzLjlsMTMyLjcgMTMyLjdjOS40IDkuNCAyNC42IDkuNCAzMy45IDBsMTEtMTAuOWM5LjUtOS41IDkuMy0yNS0uNC0zNC4zelwiLz48L3N2Zz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICByaWdodDogLjVyZW07XG4gICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIHRyYW5zZm9ybTogJHt2aXNpYmxlID8gJ3JvdGF0ZSgxODBkZWcpJyA6ICdyb3RhdGUoMCknfTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBzdmd7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgZmlsbDogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXIgc3Zne1xuICAgICAgICAgIGZpbGw6ICR7Y29sb3IuZGFuZ2VyfTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA1NzZweCl7XG4gICAgICAgICAgc3Zne1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2J1dHRvbj5cbiAgKVxufVxuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICBjb25zdCBwb3N0ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucG9zdCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW2luZm8sIHNldEluZm9dID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCk9PiBzZXRJbmZvKHRydWUpLCA1MDApO1xuICAgIHJldHVybiAoKT0+IGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgfSxbXSlcbiAgcmV0dXJuKFxuICAgIDxNb2RhbCBpc09wZW49e3Bvc3QudmlzaWJsZX0gc3R5bGU9e3sgbWF4V2lkdGg6ICc5NXZ3JyB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bl9jbG9zZVwiIG9uQ2xpY2s9eygpPT4gZGlzcGF0Y2goeyB0eXBlOiBPTl9QT1NUX1ZJRVcsIHBvc3Q6IHt9IH0pfT5YPC9idXR0b24+XG4gICAgICAgIDxpbWcgc3JjPXtwb3N0LmN1cnJlbnQuaW1nfSBhbHQ9XCJcIi8+XG4gICAgICAgIDxCdG5JbmZvIHZpc2libGU9e2luZm99IG9uQ2xpY2s9e3NldEluZm99IC8+XG4gICAgICAgIDxJbmZvIHZpc2libGU9e2luZm99IC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWFpbntcbiAgICAgICAgICAgIGhlaWdodDogOTJ2aDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tYWluIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ0bl9jbG9zZXtcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IC4ycmVtO1xuICAgICAgICAgICAgcmlnaHQ6IC41cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE1O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnRuX2Nsb3NlOmZvY3Vze1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ0bl9jbG9zZTpob3ZlcntcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yLnByaW19O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L01vZGFsPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXX0= */
/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/layout/post.jsx */`));
};

const BtnInfo = ({
  onClick,
  visible
}) => {
  return __jsx("button", {
    onClick: () => onClick(!visible),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2832747095", [visible ? 'rotate(180deg)' : 'rotate(0)', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].danger]]])
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2832747095", [visible ? 'rotate(180deg)' : 'rotate(0)', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].danger]]])
  }, __jsx("path", {
    d: "M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2832747095", [visible ? 'rotate(180deg)' : 'rotate(0)', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].danger]]])
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2832747095",
    dynamic: [visible ? 'rotate(180deg)' : 'rotate(0)', _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].danger]
  }, `button.__jsx-style-dynamic-selector{position:absolute;top:50%;right:.5rem;z-index:10;background:transparent;border:none;-webkit-transform:${visible ? 'rotate(180deg)' : 'rotate(0)'};-ms-transform:${visible ? 'rotate(180deg)' : 'rotate(0)'};transform:${visible ? 'rotate(180deg)' : 'rotate(0)'};}button.__jsx-style-dynamic-selector:focus{outline:none;}svg.__jsx-style-dynamic-selector{-webkit-transition:250ms ease;transition:250ms ease;width:30px;height:30px;fill:#fff;}button.__jsx-style-dynamic-selector:hover svg.__jsx-style-dynamic-selector{fill:${_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].danger};}@media(min-width:576px){svg.__jsx-style-dynamic-selector{width:50px;height:50px;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbGF5b3V0L3Bvc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtLa0IsQUFHNkIsQUFTTCxBQUdTLEFBTVksQUFJckIsV0FDQyxFQWJoQixLQVRVLEtBdUJSLEdBdEJZLFFBaUJkLElBaEJhLFdBQ1ksR0FTWixXQUNDLFNBVEEsR0FVRixTQVQ2QixDQVV6QyxnSUFUQSIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL2xheW91dC9wb3N0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgT05fUE9TVF9WSUVXIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuLi8uLi9sYXlvdXQvdmFyJztcblxuY29uc3QgSG9tZSA9ICh7IHRpdGxlLCBzdWJUaXRsZSwgaGlzdG9yeSB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lXCI+XG4gICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgPHA+e3N1YlRpdGxlfTwvcD5cbiAgICAgICAgPHA+e2hpc3Rvcnl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIHB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBJbmZvID0gKHsgdmlzaWJsZSB9KSA9PiB7XG4gIGNvbnN0IHBvc3QgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wb3N0KTtcbiAgY29uc3QgeyBwZXJmaWxJbWcsIG5hbWUsIGxhc3ROYW1lIH0gPSBwb3N0LmN1cnJlbnQuYXV0aG9yO1xuICBjb25zdCB7IGRhdGUgfSA9IHBvc3QuY3VycmVudDtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XG4gICAgICAgICAgPGltZyBzcmM9e3BlcmZpbEltZ30gYWx0PVwiXCIvPlxuICAgICAgICAgIDxwPntgJHtuYW1lfSAke2xhc3ROYW1lfWB9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+XG4gICAgICAgICAgPHA+e25ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvcD5cbiAgICAgICAgICA8c21hbGw+e25ldyBEYXRlKGRhdGUpLnRvTG9jYWxlVGltZVN0cmluZygpfTwvc21hbGw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgPEhvbWUgey4uLnBvc3QuY3VycmVudH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5hdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTc2IDUxMlwiPjxwYXRoIGQ9XCJNMjgwLjM3IDE0OC4yNkw5NiAzMDAuMTFWNDY0YTE2IDE2IDAgMCAwIDE2IDE2bDExMi4wNi0uMjlhMTYgMTYgMCAwIDAgMTUuOTItMTZWMzY4YTE2IDE2IDAgMCAxIDE2LTE2aDY0YTE2IDE2IDAgMCAxIDE2IDE2djk1LjY0YTE2IDE2IDAgMCAwIDE2IDE2LjA1TDQ2NCA0ODBhMTYgMTYgMCAwIDAgMTYtMTZWMzAwTDI5NS42NyAxNDguMjZhMTIuMTkgMTIuMTkgMCAwIDAtMTUuMyAwek01NzEuNiAyNTEuNDdMNDg4IDE4Mi41NlY0NC4wNWExMiAxMiAwIDAgMC0xMi0xMmgtNTZhMTIgMTIgMCAwIDAtMTIgMTJ2NzIuNjFMMzE4LjQ3IDQzYTQ4IDQ4IDAgMCAwLTYxIDBMNC4zNCAyNTEuNDdhMTIgMTIgMCAwIDAtMS42IDE2LjlsMjUuNSAzMUExMiAxMiAwIDAgMCA0NS4xNSAzMDFsMjM1LjIyLTE5My43NGExMi4xOSAxMi4xOSAwIDAgMSAxNS4zIDBMNTMwLjkgMzAxYTEyIDEyIDAgMCAwIDE2LjktMS42bDI1LjUtMzFhMTIgMTIgMCAwIDAtMS43LTE2LjkzelwiLz48L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZD1cIk00NjIuMyA2Mi42QzQwNy41IDE1LjkgMzI2IDI0LjMgMjc1LjcgNzYuMkwyNTYgOTYuNWwtMTkuNy0yMC4zQzE4Ni4xIDI0LjMgMTA0LjUgMTUuOSA0OS43IDYyLjZjLTYyLjggNTMuNi02Ni4xIDE0OS44LTkuOSAyMDcuOWwxOTMuNSAxOTkuOGMxMi41IDEyLjkgMzIuOCAxMi45IDQ1LjMgMGwxOTMuNS0xOTkuOGM1Ni4zLTU4LjEgNTMtMTU0LjMtOS44LTIwNy45elwiLz48L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZD1cIk0yNTYgMzJDMTE0LjYgMzIgMCAxMjUuMSAwIDI0MGMwIDQ5LjYgMjEuNCA5NSA1NyAxMzAuN0M0NC41IDQyMS4xIDIuNyA0NjYgMi4yIDQ2Ni41Yy0yLjIgMi4zLTIuOCA1LjctMS41IDguN1M0LjggNDgwIDggNDgwYzY2LjMgMCAxMTYtMzEuOCAxNDAuNi01MS40IDMyLjcgMTIuMyA2OSAxOS40IDEwNy40IDE5LjQgMTQxLjQgMCAyNTYtOTMuMSAyNTYtMjA4UzM5Ny40IDMyIDI1NiAzMnpcIi8+PC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGQ9XCJNMzUyIDMyMGMtMjIuNjA4IDAtNDMuMzg3IDcuODE5LTU5Ljc5IDIwLjg5NWwtMTAyLjQ4Ni02NC4wNTRhOTYuNTUxIDk2LjU1MSAwIDAgMCAwLTQxLjY4M2wxMDIuNDg2LTY0LjA1NEMzMDguNjEzIDE4NC4xODEgMzI5LjM5MiAxOTIgMzUyIDE5MmM1My4wMTkgMCA5Ni00Mi45ODEgOTYtOTZTNDA1LjAxOSAwIDM1MiAwcy05NiA0Mi45ODEtOTYgOTZjMCA3LjE1OC43OSAxNC4xMyAyLjI3NiAyMC44NDFMMTU1Ljc5IDE4MC44OTVDMTM5LjM4NyAxNjcuODE5IDExOC42MDggMTYwIDk2IDE2MGMtNTMuMDE5IDAtOTYgNDIuOTgxLTk2IDk2czQyLjk4MSA5NiA5NiA5NmMyMi42MDggMCA0My4zODctNy44MTkgNTkuNzktMjAuODk1bDEwMi40ODYgNjQuMDU0QTk2LjMwMSA5Ni4zMDEgMCAwIDAgMjU2IDQxNmMwIDUzLjAxOSA0Mi45ODEgOTYgOTYgOTZzOTYtNDIuOTgxIDk2LTk2LTQyLjk4MS05Ni05Ni05NnpcIi8+PC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHJpZ2h0OiAke3Zpc2libGUgPyAnMCcgOiAnLTEwMCUnfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgcGFkZGluZzogMnJlbSAuNXJlbSAwO1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIC51c2Vye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAudXNlciBpbWd7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5e1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgfVxuICAgICAgICBuYXZ7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvci5kYXJrfTtcbiAgICAgICAgfVxuICAgICAgICBuYXYgdWx7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cbiAgICAgICAgbGkgYnV0dG9ue1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgICBsaSBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBsaSBidXR0b246aG92ZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICBsaSBidXR0b246aG92ZXIgc3Zne1xuICAgICAgICAgIGZpbGw6ICR7Y29sb3IucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgbGkgc3Zne1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgbGk6bnRoLWNoaWxkKG9kZCl7XG4gICAgICAgICAgbWFyZ2luOiAwIC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDk5MnB4KXtcbiAgICAgICAgICAubWFpbntcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBCdG5JbmZvID0gKHsgb25DbGljaywgdmlzaWJsZSB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxidXR0b24gb25DbGljaz17KCk9PiBvbkNsaWNrKCF2aXNpYmxlKX0+XG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBkPVwiTTI1NiA1MDRDMTE5IDUwNCA4IDM5MyA4IDI1NlMxMTkgOCAyNTYgOHMyNDggMTExIDI0OCAyNDgtMTExIDI0OC0yNDggMjQ4em0yOC45LTE0My42TDIwOS40IDI4OEgzOTJjMTMuMyAwIDI0LTEwLjcgMjQtMjR2LTE2YzAtMTMuMy0xMC43LTI0LTI0LTI0SDIwOS40bDc1LjUtNzIuNGM5LjctOS4zIDkuOS0yNC44LjQtMzQuM2wtMTEtMTAuOWMtOS40LTkuNC0yNC42LTkuNC0zMy45IDBMMTA3LjcgMjM5Yy05LjQgOS40LTkuNCAyNC42IDAgMzMuOWwxMzIuNyAxMzIuN2M5LjQgOS40IDI0LjYgOS40IDMzLjkgMGwxMS0xMC45YzkuNS05LjUgOS4zLTI1LS40LTM0LjN6XCIvPjwvc3ZnPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBidXR0b257XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHJpZ2h0OiAuNXJlbTtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgdHJhbnNmb3JtOiAke3Zpc2libGUgPyAncm90YXRlKDE4MGRlZyknIDogJ3JvdGF0ZSgwKSd9O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHN2Z3tcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBmaWxsOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlciBzdmd7XG4gICAgICAgICAgZmlsbDogJHtjb2xvci5kYW5nZXJ9O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDU3NnB4KXtcbiAgICAgICAgICBzdmd7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IHBvc3QgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wb3N0KTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbaW5mbywgc2V0SW5mb10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKT0+IHNldEluZm8odHJ1ZSksIDUwMCk7XG4gICAgcmV0dXJuICgpPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICB9LFtdKVxuICByZXR1cm4oXG4gICAgPE1vZGFsIGlzT3Blbj17cG9zdC52aXNpYmxlfSBzdHlsZT17eyBtYXhXaWR0aDogJzk1dncnIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuX2Nsb3NlXCIgb25DbGljaz17KCk9PiBkaXNwYXRjaCh7IHR5cGU6IE9OX1BPU1RfVklFVywgcG9zdDoge30gfSl9Plg8L2J1dHRvbj5cbiAgICAgICAgPGltZyBzcmM9e3Bvc3QuY3VycmVudC5pbWd9IGFsdD1cIlwiLz5cbiAgICAgICAgPEJ0bkluZm8gdmlzaWJsZT17aW5mb30gb25DbGljaz17c2V0SW5mb30gLz5cbiAgICAgICAgPEluZm8gdmlzaWJsZT17aW5mb30gLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tYWlue1xuICAgICAgICAgICAgaGVpZ2h0OiA5MnZoO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1haW4gaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnRuX2Nsb3Nle1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogLjJyZW07XG4gICAgICAgICAgICByaWdodDogLjVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgei1pbmRleDogMTU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idG5fY2xvc2U6Zm9jdXN7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnRuX2Nsb3NlOmhvdmVye1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3IucHJpbX07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTW9kYWw+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */
/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/layout/post.jsx */`));
};

const Main = () => {
  const post = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.post);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    0: info,
    1: setInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const timeout = setTimeout(() => setInfo(true), 500);
    return () => clearTimeout(timeout);
  }, []);
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    isOpen: post.visible,
    style: {
      maxWidth: '95vw'
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3673964458", [_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]]) + " " + "main"
  }, __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_POST_VIEW"],
      post: {}
    }),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3673964458", [_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]]) + " " + "btn_close"
  }, "X"), __jsx("img", {
    src: post.current.img,
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3673964458", [_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]]])
  }), __jsx(BtnInfo, {
    visible: info,
    onClick: setInfo
  }), __jsx(Info, {
    visible: info
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3673964458",
    dynamic: [_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim]
  }, `.main.__jsx-style-dynamic-selector{height:92vh;position:relative;overflow:hidden;}.main.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:100%;height:100%;object-fit:cover;object-position:center;}.btn_close.__jsx-style-dynamic-selector{width:25px;height:25px;color:#fff;text-align:center;position:absolute;top:.2rem;right:.5rem;background:transparent;-webkit-transition:250ms ease;transition:250ms ease;border:1px solid #fff;border-radius:50%;z-index:15;}.btn_close.__jsx-style-dynamic-selector:focus{outline:none;}.btn_close.__jsx-style-dynamic-selector:hover{color:${_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim};background:#fff;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbGF5b3V0L3Bvc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ob0IsQUFHeUIsQUFLRCxBQU1BLEFBY0UsQUFHc0IsV0F0QnZCLEFBTUEsQ0FYTSxDQXlCcEIsVUFuQm1CLEFBTU4sT0FYSyxJQVlFLENBZUYsS0FyQk8sTUFMekIsS0EyQkEsQ0Fmb0IsV0FOcEIsT0FPWSxVQUNFLFlBQ1csdUJBQ0Qsb0RBQ0Esc0JBQ0osa0JBQ1AsV0FDYiIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL2xheW91dC9wb3N0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgT05fUE9TVF9WSUVXIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuLi8uLi9sYXlvdXQvdmFyJztcblxuY29uc3QgSG9tZSA9ICh7IHRpdGxlLCBzdWJUaXRsZSwgaGlzdG9yeSB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lXCI+XG4gICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgPHA+e3N1YlRpdGxlfTwvcD5cbiAgICAgICAgPHA+e2hpc3Rvcnl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIHB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBJbmZvID0gKHsgdmlzaWJsZSB9KSA9PiB7XG4gIGNvbnN0IHBvc3QgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wb3N0KTtcbiAgY29uc3QgeyBwZXJmaWxJbWcsIG5hbWUsIGxhc3ROYW1lIH0gPSBwb3N0LmN1cnJlbnQuYXV0aG9yO1xuICBjb25zdCB7IGRhdGUgfSA9IHBvc3QuY3VycmVudDtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XG4gICAgICAgICAgPGltZyBzcmM9e3BlcmZpbEltZ30gYWx0PVwiXCIvPlxuICAgICAgICAgIDxwPntgJHtuYW1lfSAke2xhc3ROYW1lfWB9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+XG4gICAgICAgICAgPHA+e25ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvcD5cbiAgICAgICAgICA8c21hbGw+e25ldyBEYXRlKGRhdGUpLnRvTG9jYWxlVGltZVN0cmluZygpfTwvc21hbGw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgPEhvbWUgey4uLnBvc3QuY3VycmVudH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5hdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTc2IDUxMlwiPjxwYXRoIGQ9XCJNMjgwLjM3IDE0OC4yNkw5NiAzMDAuMTFWNDY0YTE2IDE2IDAgMCAwIDE2IDE2bDExMi4wNi0uMjlhMTYgMTYgMCAwIDAgMTUuOTItMTZWMzY4YTE2IDE2IDAgMCAxIDE2LTE2aDY0YTE2IDE2IDAgMCAxIDE2IDE2djk1LjY0YTE2IDE2IDAgMCAwIDE2IDE2LjA1TDQ2NCA0ODBhMTYgMTYgMCAwIDAgMTYtMTZWMzAwTDI5NS42NyAxNDguMjZhMTIuMTkgMTIuMTkgMCAwIDAtMTUuMyAwek01NzEuNiAyNTEuNDdMNDg4IDE4Mi41NlY0NC4wNWExMiAxMiAwIDAgMC0xMi0xMmgtNTZhMTIgMTIgMCAwIDAtMTIgMTJ2NzIuNjFMMzE4LjQ3IDQzYTQ4IDQ4IDAgMCAwLTYxIDBMNC4zNCAyNTEuNDdhMTIgMTIgMCAwIDAtMS42IDE2LjlsMjUuNSAzMUExMiAxMiAwIDAgMCA0NS4xNSAzMDFsMjM1LjIyLTE5My43NGExMi4xOSAxMi4xOSAwIDAgMSAxNS4zIDBMNTMwLjkgMzAxYTEyIDEyIDAgMCAwIDE2LjktMS42bDI1LjUtMzFhMTIgMTIgMCAwIDAtMS43LTE2LjkzelwiLz48L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZD1cIk00NjIuMyA2Mi42QzQwNy41IDE1LjkgMzI2IDI0LjMgMjc1LjcgNzYuMkwyNTYgOTYuNWwtMTkuNy0yMC4zQzE4Ni4xIDI0LjMgMTA0LjUgMTUuOSA0OS43IDYyLjZjLTYyLjggNTMuNi02Ni4xIDE0OS44LTkuOSAyMDcuOWwxOTMuNSAxOTkuOGMxMi41IDEyLjkgMzIuOCAxMi45IDQ1LjMgMGwxOTMuNS0xOTkuOGM1Ni4zLTU4LjEgNTMtMTU0LjMtOS44LTIwNy45elwiLz48L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZD1cIk0yNTYgMzJDMTE0LjYgMzIgMCAxMjUuMSAwIDI0MGMwIDQ5LjYgMjEuNCA5NSA1NyAxMzAuN0M0NC41IDQyMS4xIDIuNyA0NjYgMi4yIDQ2Ni41Yy0yLjIgMi4zLTIuOCA1LjctMS41IDguN1M0LjggNDgwIDggNDgwYzY2LjMgMCAxMTYtMzEuOCAxNDAuNi01MS40IDMyLjcgMTIuMyA2OSAxOS40IDEwNy40IDE5LjQgMTQxLjQgMCAyNTYtOTMuMSAyNTYtMjA4UzM5Ny40IDMyIDI1NiAzMnpcIi8+PC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGQ9XCJNMzUyIDMyMGMtMjIuNjA4IDAtNDMuMzg3IDcuODE5LTU5Ljc5IDIwLjg5NWwtMTAyLjQ4Ni02NC4wNTRhOTYuNTUxIDk2LjU1MSAwIDAgMCAwLTQxLjY4M2wxMDIuNDg2LTY0LjA1NEMzMDguNjEzIDE4NC4xODEgMzI5LjM5MiAxOTIgMzUyIDE5MmM1My4wMTkgMCA5Ni00Mi45ODEgOTYtOTZTNDA1LjAxOSAwIDM1MiAwcy05NiA0Mi45ODEtOTYgOTZjMCA3LjE1OC43OSAxNC4xMyAyLjI3NiAyMC44NDFMMTU1Ljc5IDE4MC44OTVDMTM5LjM4NyAxNjcuODE5IDExOC42MDggMTYwIDk2IDE2MGMtNTMuMDE5IDAtOTYgNDIuOTgxLTk2IDk2czQyLjk4MSA5NiA5NiA5NmMyMi42MDggMCA0My4zODctNy44MTkgNTkuNzktMjAuODk1bDEwMi40ODYgNjQuMDU0QTk2LjMwMSA5Ni4zMDEgMCAwIDAgMjU2IDQxNmMwIDUzLjAxOSA0Mi45ODEgOTYgOTYgOTZzOTYtNDIuOTgxIDk2LTk2LTQyLjk4MS05Ni05Ni05NnpcIi8+PC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHJpZ2h0OiAke3Zpc2libGUgPyAnMCcgOiAnLTEwMCUnfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgcGFkZGluZzogMnJlbSAuNXJlbSAwO1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIC51c2Vye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAudXNlciBpbWd7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5e1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgfVxuICAgICAgICBuYXZ7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvci5kYXJrfTtcbiAgICAgICAgfVxuICAgICAgICBuYXYgdWx7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cbiAgICAgICAgbGkgYnV0dG9ue1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgICBsaSBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBsaSBidXR0b246aG92ZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICBsaSBidXR0b246aG92ZXIgc3Zne1xuICAgICAgICAgIGZpbGw6ICR7Y29sb3IucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgbGkgc3Zne1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgbGk6bnRoLWNoaWxkKG9kZCl7XG4gICAgICAgICAgbWFyZ2luOiAwIC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDk5MnB4KXtcbiAgICAgICAgICAubWFpbntcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBCdG5JbmZvID0gKHsgb25DbGljaywgdmlzaWJsZSB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxidXR0b24gb25DbGljaz17KCk9PiBvbkNsaWNrKCF2aXNpYmxlKX0+XG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBkPVwiTTI1NiA1MDRDMTE5IDUwNCA4IDM5MyA4IDI1NlMxMTkgOCAyNTYgOHMyNDggMTExIDI0OCAyNDgtMTExIDI0OC0yNDggMjQ4em0yOC45LTE0My42TDIwOS40IDI4OEgzOTJjMTMuMyAwIDI0LTEwLjcgMjQtMjR2LTE2YzAtMTMuMy0xMC43LTI0LTI0LTI0SDIwOS40bDc1LjUtNzIuNGM5LjctOS4zIDkuOS0yNC44LjQtMzQuM2wtMTEtMTAuOWMtOS40LTkuNC0yNC42LTkuNC0zMy45IDBMMTA3LjcgMjM5Yy05LjQgOS40LTkuNCAyNC42IDAgMzMuOWwxMzIuNyAxMzIuN2M5LjQgOS40IDI0LjYgOS40IDMzLjkgMGwxMS0xMC45YzkuNS05LjUgOS4zLTI1LS40LTM0LjN6XCIvPjwvc3ZnPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBidXR0b257XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHJpZ2h0OiAuNXJlbTtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgdHJhbnNmb3JtOiAke3Zpc2libGUgPyAncm90YXRlKDE4MGRlZyknIDogJ3JvdGF0ZSgwKSd9O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHN2Z3tcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBmaWxsOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlciBzdmd7XG4gICAgICAgICAgZmlsbDogJHtjb2xvci5kYW5nZXJ9O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDU3NnB4KXtcbiAgICAgICAgICBzdmd7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IHBvc3QgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wb3N0KTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbaW5mbywgc2V0SW5mb10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKT0+IHNldEluZm8odHJ1ZSksIDUwMCk7XG4gICAgcmV0dXJuICgpPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICB9LFtdKVxuICByZXR1cm4oXG4gICAgPE1vZGFsIGlzT3Blbj17cG9zdC52aXNpYmxlfSBzdHlsZT17eyBtYXhXaWR0aDogJzk1dncnIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuX2Nsb3NlXCIgb25DbGljaz17KCk9PiBkaXNwYXRjaCh7IHR5cGU6IE9OX1BPU1RfVklFVywgcG9zdDoge30gfSl9Plg8L2J1dHRvbj5cbiAgICAgICAgPGltZyBzcmM9e3Bvc3QuY3VycmVudC5pbWd9IGFsdD1cIlwiLz5cbiAgICAgICAgPEJ0bkluZm8gdmlzaWJsZT17aW5mb30gb25DbGljaz17c2V0SW5mb30gLz5cbiAgICAgICAgPEluZm8gdmlzaWJsZT17aW5mb30gLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tYWlue1xuICAgICAgICAgICAgaGVpZ2h0OiA5MnZoO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1haW4gaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnRuX2Nsb3Nle1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogLjJyZW07XG4gICAgICAgICAgICByaWdodDogLjVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgei1pbmRleDogMTU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idG5fY2xvc2U6Zm9jdXN7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnRuX2Nsb3NlOmhvdmVye1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3IucHJpbX07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTW9kYWw+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */
/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/layout/post.jsx */`)));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./components/main/base.scss":
/*!***********************************!*\
  !*** ./components/main/base.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/main/embajada.jsx":
/*!**************************************!*\
  !*** ./components/main/embajada.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/main */ "./layout/main.js");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title */ "./components/main/title.jsx");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos */ "aos");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _test_persons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../test/persons */ "./test/persons.js");
/* harmony import */ var _test_persons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_test_persons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid/v1 */ "uuid/v1");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_7__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const Embajadores = () => {
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2668170661", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark]]]) + " " + "main"
  }, __jsx("div", {
    "data-aos": "fade-in",
    "data-aos-delay": "350",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2668170661", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark]]]) + " " + "info"
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2668170661", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark]]])
  }, "salva el planeta"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2668170661", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark]]])
  }, "Participa en nuestros eventos, auspicia negocios locales, recibe regalos especiales. Se uno de nuestros embajadores como:"), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2668170661", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark]]])
  }, _test_persons__WEBPACK_IMPORTED_MODULE_5___default()(4).map(person => __jsx("li", {
    key: uuid_v1__WEBPACK_IMPORTED_MODULE_7___default()(),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2668170661", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark]]])
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2668170661", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark]]])
  }, __jsx("img", {
    src: person.perfilImg,
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2668170661", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark]]])
  }), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2668170661", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark]]])
  }, `${person.fullName}`)))))), __jsx("div", {
    "data-aos": "fade-left",
    "data-aos-delay": "350",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2668170661", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark]]]) + " " + "woman"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/login"
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2668170661", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark]]])
  }, "Registro")), __jsx("img", {
    src: "/static/cusco.png",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2668170661", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark]]])
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2668170661", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark]]]) + " " + "circle"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2668170661", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark]]]) + " " + "inner_circle"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2668170661", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark]]]) + " " + "inner_circle"
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2668170661",
    dynamic: [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark]
  }, `.main.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-top:2rem;width:100%;background:linear-gradient(rgba(0,0,0,.1),#fff);position:relative;}.circle.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:65vh;height:65vh;border-radius:50%;border:1px solid rgba(0,0,0,.2);position:absolute;top:0;left:40%;z-index:-1;}.inner_circle.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:50vh;width:50vh;border-radius:50%;border:1px solid rgba(0,0,0,.2);}.inner_circle.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{width:30vh;height:30vh;}.info.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;}.info.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{text-transform:uppercase;font-family:${_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title};margin:0;font-size:3.5rem;text-align:center;width:100%;color:${_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark};background:url(/static/cusco.jpg)center center no-repeat;-webkit-background-clip:text;-webkit-text-fill-color:transparent;}.info.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{width:100%;text-align:center;}img.__jsx-style-dynamic-selector{width:100%;height:100%;object-fit:cover;object-position:left center;}.woman.__jsx-style-dynamic-selector{width:100%;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;position:relative;}.woman.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{position:absolute;right:1rem;bottom:1rem;-webkit-transition:250ms ease;transition:250ms ease;background:transparent;border:2px solid ${_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light};color:${_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light};font-size:1.5rem;}.woman.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:focus{outline:none;}.woman.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{background:${_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].light};border-color:${_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim};color:${_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim};}.info.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;list-style:none;margin:0;margin-bottom:2rem;padding:0;width:100%;}.info.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{background:transparent;border:none;color:${_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].dark};display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.info.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:50px;height:50px;border-radius:50%;object-fit:cover;object-position:center;}.info.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;font-size:11px;}@media(min-width:768px){.main.__jsx-style-dynamic-selector{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:60vh;padding-top:0;}}@media(min-width:992px){.info.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:70px;height:70px;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9lbWJhamFkYS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NnQixBQUdzQixBQVNBLEFBYUEsQUFTRixBQUlBLEFBU2MsQUFlZCxBQUlBLEFBT0EsQUFLTyxBQVVMLEFBRzJCLEFBSzNCLEFBVVUsQUFZWixBQU9GLEFBTVksQUFPUixTQVhFLEVBNUZILEFBS0MsQUF1QkssQUFJTixBQU9hLEFBNkNiLEFBb0JFLEVBbERoQixLQVZhLEtBM0NiLEFBZ0NtQixBQXVDTCxBQWFNLEFBb0JsQixDQVpGLENBaEYyQyxJQWdCM0MsQUFnQmMsTUE0QnVCLEtBdkNQLEFBdUJjLENBWHBCLEFBd0NMLGlCQUNNLFFBekVkLEVBcUJYLENBOERnQixDQXZCRCxJQXpHUyxBQVNDLEFBYUEsQUF1RU0sQ0E5Q1osTUF3RW5CLEFBVWtCLENBeENtQixHQXBEWixPQVlMLENBNkJLLEVBb0R2QixhQTNEa0IsRUFyQlAsTUE2Qm1DLENBV2hELElBdkNxQyxLQXFCckMsa0JBa0N5QixRQXpHTixJQW1Ed0MsTUE0QnRCLE9BOUV4QixJQVFRLEFBYUEsT0FuQmlDLElBa0NqQyxhQTJDRixBQWNELGdCQTFDYSxBQTJDcEIsQ0FkWCxRQWVxQixNQTVGRCxhQTZGUixDQTVDMEIsQ0FxRGpCLEdBckdyQixLQTZGYSxXQUNiLElBekZhLEFBYUMsV0FaQSxBQTJCVSxDQWRYLEFBOEJiLFdBMUNvQixBQWFBLGtCQVppQixBQWFBLDZCQWlGYixHQTdGSixBQWFwQixnQkFZb0IsRUF4QlosTUFDRyxTQUNFLENBdUJiLFVBdEJBLCtCQTBGQSIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL21haW4vZW1iYWphZGEuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnQgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi90aXRsZSc7XG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5pbXBvcnQgcGVyc29ucyBmcm9tICcuLi8uLi90ZXN0L3BlcnNvbnMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQvdjEnO1xuXG5jb25zdCBFbWJhamFkb3JlcyA9ICgpID0+IHtcblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS1pblwiIGRhdGEtYW9zLWRlbGF5PVwiMzUwXCIgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICA8aDE+c2FsdmEgZWwgcGxhbmV0YTwvaDE+XG4gICAgICAgIDxwPlBhcnRpY2lwYSBlbiBudWVzdHJvcyBldmVudG9zLCBhdXNwaWNpYSBuZWdvY2lvcyBsb2NhbGVzLCByZWNpYmUgcmVnYWxvcyBlc3BlY2lhbGVzLiBTZSB1bm8gZGUgbnVlc3Ryb3MgZW1iYWphZG9yZXMgY29tbzo8L3A+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBwZXJzb25zKDQpLm1hcChwZXJzb24gPT4gPGxpIGtleT17dXVpZCgpfT48YnV0dG9uPjxpbWcgc3JjPXtwZXJzb24ucGVyZmlsSW1nfSBhbHQ9XCJcIi8+PHA+e2Ake3BlcnNvbi5mdWxsTmFtZX1gfTwvcD48L2J1dHRvbj48L2xpPilcbiAgICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLWxlZnRcIiBkYXRhLWFvcy1kZWxheT1cIjM1MFwiIGNsYXNzTmFtZT1cIndvbWFuXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICA8YnV0dG9uPlJlZ2lzdHJvPC9idXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2N1c2NvLnBuZ1wiIGFsdD1cIlwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lcl9jaXJjbGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyX2NpcmNsZVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5tYWlue1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8vaGVpZ2h0OiA2MHZoO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAuMSksICNmZmYpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAuY2lyY2xle1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDY1dmg7XG4gICAgICAgIGhlaWdodDogNjV2aDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDQwJTtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICB9XG4gICAgICAuaW5uZXJfY2lyY2xle1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiA1MHZoO1xuICAgICAgICB3aWR0aDogNTB2aDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICAgIH1cbiAgICAgIC5pbm5lcl9jaXJjbGUgZGl2e1xuICAgICAgICB3aWR0aDogMzB2aDtcbiAgICAgICAgaGVpZ2h0OiAzMHZoO1xuICAgICAgfVxuICAgICAgLmluZm97XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvL2ZsZXgtZ3JvdzogMTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC5pbmZvIGgxe1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LWZhbWlseTogJHtmb250LnRpdGxlfTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAvL2ZvbnQtc2l6ZTogNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgICAgIC8vd2lkdGg6IDYwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgY29sb3I6ICR7Y29sb3IuZGFya307XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2N1c2NvLmpwZyljZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICAgIC5pbmZvIHB7XG4gICAgICAgIC8vd2lkdGg6IDYwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XG4gICAgICB9XG4gICAgICAud29tYW57XG4gICAgICAgIC8vd2lkdGg6IDUwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC53b21hbiBidXR0b257XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDFyZW07XG4gICAgICAgIGJvdHRvbTogMXJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y29sb3IubGlnaHR9O1xuICAgICAgICBjb2xvcjogJHtjb2xvci5saWdodH07XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgfVxuICAgICAgLndvbWFuIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cbiAgICAgIC53b21hbiBidXR0b246aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3IubGlnaHR9O1xuICAgICAgICBib3JkZXItY29sb3I6ICR7Y29sb3IucHJpbX07XG4gICAgICAgIGNvbG9yOiAke2NvbG9yLnByaW19O1xuICAgICAgfVxuICAgICAgLmluZm8gdWx7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAvL2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5pbmZvIHVsIGJ1dHRvbntcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6ICR7Y29sb3IuZGFya307XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuXG4gICAgICAuaW5mbyB1bCBidXR0b24gaW1ne1xuICAgICAgICAvL3dpZHRoOiA3MHB4O1xuICAgICAgICAvL2hlaWdodDogNzBweDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuaW5mbyB1bCBidXR0b24gcHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAvL3dpZHRoOiAxMDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgfVxuICAgICAgQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpe1xuICAgICAgICAubWFpbntcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGhlaWdodDogNjB2aDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhKG1pbi13aWR0aDogOTkycHgpe1xuICAgICAgICAuaW5mbyB1bCBidXR0b24gaW1ne1xuICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgQU9TLmluaXQoKTtcbiAgICByZXR1cm4gKCk9PiBBT1MucmVmcmVzaCgpO1xuICB9LFtdKVxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8VGl0bGUgd29yZD1cImViYWphZGFkb3Jlc1wiIC8+XG4gICAgICA8RW1iYWphZG9yZXMgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl19 */
/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/embajada.jsx */`));
};

const Main = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    aos__WEBPACK_IMPORTED_MODULE_4___default.a.init();
    return () => aos__WEBPACK_IMPORTED_MODULE_4___default.a.refresh();
  }, []);
  return __jsx("div", {
    className: "main"
  }, __jsx(_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    word: "ebajadadores"
  }), __jsx(Embajadores, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./components/main/events.jsx":
/*!************************************!*\
  !*** ./components/main/events.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var _layout_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layout/main */ "./layout/main.js");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./title */ "./components/main/title.jsx");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aos */ "aos");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const Main = () => {
  const {
    0: width,
    1: setWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    aos__WEBPACK_IMPORTED_MODULE_6___default.a.init();
    setWidth(window.innerWidth);
    return () => aos__WEBPACK_IMPORTED_MODULE_6___default.a.refresh();
  }, []);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3723177055", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim]]]) + " " + "main"
  }, __jsx(_title__WEBPACK_IMPORTED_MODULE_5__["default"], {
    word: "eventos"
  }), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3723177055", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim]]]) + " " + "events"
  }, __jsx("li", {
    "data-aos": "fade-in",
    "data-aos-delay": width > 768 ? '500' : '',
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3723177055", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim]]]) + " " + "tree"
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3723177055", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim]]])
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3723177055", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim]]])
  }, "siembra"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3723177055", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim]]])
  }, "Regalale vida al planeta.")), __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_EVENT"],
      eventType: _store_actions__WEBPACK_IMPORTED_MODULE_3__["eventType"].TREE
    }),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3723177055", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim]]])
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3723177055", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim]]])
  }, "participar"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3723177055", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim]]]) + " " + "circle"
  }))), __jsx("li", {
    "data-aos": "fade-in",
    "data-aos-delay": width > 768 ? '1000' : '',
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3723177055", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim]]]) + " " + "cold"
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3723177055", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim]]])
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3723177055", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim]]])
  }, "ayuda"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3723177055", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim]]])
  }, "Las zonas andinas necesitan un corazon calido.")), __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_EVENT"],
      eventType: _store_actions__WEBPACK_IMPORTED_MODULE_3__["eventType"].COLD
    }),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3723177055", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim]]])
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3723177055", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim]]])
  }, "participar"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3723177055", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim]]]) + " " + "circle"
  }))), __jsx("li", {
    "data-aos": "fade-in",
    "data-aos-delay": width > 768 ? '1500' : '',
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3723177055", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim]]]) + " " + "angel"
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3723177055", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim]]])
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3723177055", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim]]])
  }, "adopta"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3723177055", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim]]])
  }, "Un angel llega en cualquier forma.")), __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_EVENT"],
      eventType: _store_actions__WEBPACK_IMPORTED_MODULE_3__["eventType"].DOG
    }),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3723177055", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim]]])
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3723177055", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim]]])
  }, "participar"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3723177055", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim]]]) + " " + "circle"
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3723177055",
    dynamic: [_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim]
  }, `.main.__jsx-style-dynamic-selector{min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:linear-gradient(rgba(0,0,0,.1),#fff);}.events.__jsx-style-dynamic-selector{list-style:none;height:100%;margin:0;padding:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}li.__jsx-style-dynamic-selector{height:80vh;width:100%;box-shadow:5px 5px 15px rgba(0,0,0,.5);position:relative;}li.__jsx-style-dynamic-selector header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:.5rem;color:#fff;}li.__jsx-style-dynamic-selector:nth-child(2){margin:2rem 0;}button.__jsx-style-dynamic-selector{font-size:1.5rem;background:transparent;border:none;color:#fff;position:absolute;bottom:.5rem;right:.5rem;text-transform:uppercase;-webkit-transition:250ms ease;transition:250ms ease;overflow:hidden;}button.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{position:relative;z-index:2;}.circle.__jsx-style-dynamic-selector{-webkit-transition:250ms ease;transition:250ms ease;width:0px;height:0px;border-radius:50%;background:rgba(0,0,0,.150);position:absolute;right:-40px;bottom:-40px;}button.__jsx-style-dynamic-selector:focus{outline:none;}button.__jsx-style-dynamic-selector:hover .circle.__jsx-style-dynamic-selector{width:100px;height:100px;}button.__jsx-style-dynamic-selector:active{-webkit-transform:scale(.98);-ms-transform:scale(.98);transform:scale(.98);}button.__jsx-style-dynamic-selector:active .circle.__jsx-style-dynamic-selector{width:500px;height:500px;}h2.__jsx-style-dynamic-selector{text-transform:uppercase;font-family:${_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title};}.tree.__jsx-style-dynamic-selector{background:url(/static/arbol.jpg);background-size:cover;background-position:bottom center;background-repeat:no-repeat;}.tree.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector,.tree.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{background:${_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim};}.tree.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{background:${_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim};}.cold.__jsx-style-dynamic-selector{background:url(/static/calido.jpg);background-size:cover;background-position:bottom center;background-repeat:no-repeat;}.cold.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector,.cold.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{background:${_layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim};}.cold.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{background:${_layout_main__WEBPACK_IMPORTED_MODULE_4__["themeRed"].prim};}.angel.__jsx-style-dynamic-selector{background:url(/static/angel.jpg);background-size:cover;background-position:top center;background-repeat:no-repeat;}.angel.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector,.angel.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{background:${_layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim};}.angel.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{background:${_layout_main__WEBPACK_IMPORTED_MODULE_4__["themeBlue"].prim};}@media(min-width:768px){.main.__jsx-style-dynamic-selector{min-height:80vh;}.events.__jsx-style-dynamic-selector{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100%;}li.__jsx-style-dynamic-selector{width:30%;height:78vh;}li.__jsx-style-dynamic-selector:nth-child(2){margin:0;}}@media(min-width:992px){.main.__jsx-style-dynamic-selector{min-height:80vh;height:80vh;}.events.__jsx-style-dynamic-selector{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100%;}li.__jsx-style-dynamic-selector{width:30%;height:100%;}li.__jsx-style-dynamic-selector:nth-child(2){margin:0;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ldmVudHMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEa0IsQUFHNEIsQUFNRCxBQVdKLEFBT0MsQUFPQyxBQUdHLEFBWUMsQUFJSSxBQVVULEFBR0QsQUFJUyxBQUdULEFBSWEsQUFJUyxBQU1NLEFBR0EsQUFHTCxBQU9LLEFBR0EsQUFHTixBQU1NLEFBR0EsQUFJdEIsQUFHRyxBQUlULEFBSUQsQUFLTyxBQUlHLEFBSVQsQUFJRCxTQWhCWCxBQWlCQSxDQXJCYyxBQWlCQSxFQTFISCxBQTZDQyxBQU9DLENBVmYsQ0E3QkEsRUF6QmMsQUE4R1osQUFnQmMsQ0FwSUQsQUFrQ1UsQ0FZYixJQThFVixBQWlCQSxDQTFIMEMsRUE2QzVDLEFBT0EsQUFHMkMsR0FuRWhDLEFBd0NYLEFBc0ZFLE1BdkRzQixBQXlCQSxDQWJBLEVBbEZaLEdBMkJFLEFBaURkLEFBR0EsQUFVQSxBQUdBLEFBU0EsQUFHQSxPQXZHYyxLQTJCRCxBQWNELElBNkJ3QixBQXlCSCxDQWJHLEtBdkVoQixBQStCUCxDQWRPLEdBc0NwQixHQTRDZ0IsQUFpQkEsSUFwRkksQ0E1QkksQ0EyQ3hCLEtBOUNBLENBaUJlLEFBa0ZiLEFBaUJBLE1BaEM0QixHQXpCQSxDQS9FTixBQW9EUyxBQXVDSCxHQXJEaEIsWUFDYSxTQWtFM0IsR0FoR2UsQUF1RWYsQ0EzQm9CLEFBdUNwQixZQWxGZSxBQThCUyxNQWNWLFlBQ0MsR0EvQlUsVUFnQ3pCLE9BdkRzRCxjQXdDcEMsZ0JBQ2xCLE1BL0J3QixZQVR4Qiw0Q0F1QmdCLGNBQ0gsUUFkbUIsR0FlaEMsZ0hBZEEiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL2V2ZW50cy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZXZlbnRUeXBlLCBPTl9FVkVOVCB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnQsIHRoZW1lQmx1ZSwgdGhlbWVSZWQgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi90aXRsZSc7XG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIEFPUy5pbml0KCk7XG4gICAgc2V0V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuICAgIHJldHVybiAoKT0+IEFPUy5yZWZyZXNoKCk7XG4gIH0sW10pXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxUaXRsZSB3b3JkPVwiZXZlbnRvc1wiIC8+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZXZlbnRzXCI+XG4gICAgICAgIDxsaSBkYXRhLWFvcz1cImZhZGUtaW5cIiBkYXRhLWFvcy1kZWxheT17d2lkdGggPiA3NjggPyAnNTAwJyA6ICcnfSBjbGFzc05hbWU9XCJ0cmVlXCI+XG4gICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDxoMj5zaWVtYnJhPC9oMj5cbiAgICAgICAgICAgIDxwPlJlZ2FsYWxlIHZpZGEgYWwgcGxhbmV0YS48L3A+XG4gICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IGRpc3BhdGNoKHsgdHlwZTogT05fRVZFTlQsIGV2ZW50VHlwZTogZXZlbnRUeXBlLlRSRUUgfSl9PlxuICAgICAgICAgICAgPHNwYW4+cGFydGljaXBhcjwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGRhdGEtYW9zPVwiZmFkZS1pblwiIGRhdGEtYW9zLWRlbGF5PXt3aWR0aCA+IDc2OCA/ICcxMDAwJyA6ICcnfSBjbGFzc05hbWU9XCJjb2xkXCI+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPGgyPmF5dWRhPC9oMj5cbiAgICAgICAgICA8cD5MYXMgem9uYXMgYW5kaW5hcyBuZWNlc2l0YW4gdW4gY29yYXpvbiBjYWxpZG8uPC9wPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IGRpc3BhdGNoKHsgdHlwZTogT05fRVZFTlQsIGV2ZW50VHlwZTogZXZlbnRUeXBlLkNPTEQgfSl9PlxuICAgICAgICAgIDxzcGFuPnBhcnRpY2lwYXI8L3NwYW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGRhdGEtYW9zPVwiZmFkZS1pblwiIGRhdGEtYW9zLWRlbGF5PXt3aWR0aCA+IDc2OCA/ICcxNTAwJyA6ICcnfSBjbGFzc05hbWU9XCJhbmdlbFwiPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxoMj5hZG9wdGE8L2gyPlxuICAgICAgICAgIDxwPlVuIGFuZ2VsIGxsZWdhIGVuIGN1YWxxdWllciBmb3JtYS48L3A+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gZGlzcGF0Y2goeyB0eXBlOiBPTl9FVkVOVCwgZXZlbnRUeXBlOiBldmVudFR5cGUuRE9HIH0pfT5cbiAgICAgICAgICA8c3Bhbj5wYXJ0aWNpcGFyPC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFpbntcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgLjEpLCAjZmZmKTtcbiAgICAgICAgfVxuICAgICAgICAuZXZlbnRze1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cbiAgICAgICAgbGl7XG4gICAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgIC8vd2lkdGg6IDMwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIGxpIGhlYWRlcntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgbGk6bnRoLWNoaWxkKDIpe1xuICAgICAgICAgIG1hcmdpbjogMnJlbSAwO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogLjVyZW07XG4gICAgICAgICAgcmlnaHQ6IC41cmVtO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiBzcGFue1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICB9XG4gICAgICAgIC5jaXJjbGV7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICB3aWR0aDogMHB4O1xuICAgICAgICAgIGhlaWdodDogMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4xNTApO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogLTQwcHg7XG4gICAgICAgICAgYm90dG9tOiAtNDBweDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXIgLmNpcmNsZXtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgaGVpZ2h0OjEwMHB4O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjphY3RpdmV7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguOTgpO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjphY3RpdmUgLmNpcmNsZXtcbiAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgfVxuICAgICAgICBoMntcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAke2ZvbnQudGl0bGV9O1xuICAgICAgICB9XG4gICAgICAgIC50cmVle1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2FyYm9sLmpwZyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIH1cbiAgICAgICAgLnRyZWUgaDIsIC50cmVlIHB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvci5wcmltfTtcbiAgICAgICAgfVxuICAgICAgICAudHJlZSBidXR0b257XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvci5wcmltfTtcbiAgICAgICAgfVxuICAgICAgICAuY29sZHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9jYWxpZG8uanBnKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb2xkIGgyLCAuY29sZCBwe1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWVSZWQucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgLmNvbGQgYnV0dG9ue1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWVSZWQucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgLmFuZ2Vse1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2FuZ2VsLmpwZyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIH1cbiAgICAgICAgLmFuZ2VsIGgyLCAuYW5nZWwgcHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lQmx1ZS5wcmltfTtcbiAgICAgICAgfVxuICAgICAgICAuYW5nZWwgYnV0dG9ue1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWVCbHVlLnByaW19O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDc2OHB4KXtcbiAgICAgICAgICAubWFpbntcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ldmVudHN7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaXtcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDc4dmg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpOm50aC1jaGlsZCgyKXtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogOTkycHgpe1xuICAgICAgICAgIC5tYWlue1xuICAgICAgICAgICAgbWluLWhlaWdodDogODB2aDtcbiAgICAgICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmV2ZW50c3tcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpe1xuICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGk6bnRoLWNoaWxkKDIpe1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl19 */
/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/events.jsx */`));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./components/main/greenpost.jsx":
/*!***************************************!*\
  !*** ./components/main/greenpost.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/main */ "./layout/main.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid/v1 */ "uuid/v1");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./title */ "./components/main/title.jsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aos */ "aos");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _node_modules_aos_src_sass_aos_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../node_modules/aos/src/sass/aos.scss */ "./node_modules/aos/src/sass/aos.scss");
/* harmony import */ var _node_modules_aos_src_sass_aos_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_src_sass_aos_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _layout_btn_post__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layout/btn-post */ "./components/layout/btn-post.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











const Post = ({
  post
}) => {
  const {
    img,
    title,
    subTitle,
    date,
    history,
    author,
    index
  } = post;
  const {
    name,
    lastName,
    perfilImg,
    url
  } = author;
  /*useEffect(()=> {
    AOS.init();
    return AOS.refresh();
  },[])*/

  return __jsx(_layout_btn_post__WEBPACK_IMPORTED_MODULE_9__["default"], {
    post: post
  }, __jsx("div", {
    className: "jsx-1153746147" + " " + "main shadow"
  }, __jsx("header", {
    className: "jsx-1153746147"
  }, __jsx("div", {
    className: "jsx-1153746147" + " " + "user"
  }, __jsx("img", {
    src: perfilImg,
    alt: "",
    className: "jsx-1153746147"
  }), __jsx("p", {
    className: "jsx-1153746147"
  }, `${name} ${lastName}`)), __jsx("div", {
    className: "jsx-1153746147" + " " + "date"
  }, __jsx("p", {
    className: "jsx-1153746147"
  }, new Date(date).toLocaleDateString()), __jsx("small", {
    className: "jsx-1153746147"
  }, new Date(date).toLocaleTimeString()))), __jsx("div", {
    className: "jsx-1153746147" + " " + "body"
  }, __jsx("img", {
    src: img,
    alt: "",
    className: "jsx-1153746147"
  })), __jsx("footer", {
    className: "jsx-1153746147"
  }, __jsx("div", {
    className: "jsx-1153746147" + " " + "title"
  }, __jsx("p", {
    className: "jsx-1153746147"
  }, title), __jsx("small", {
    className: "jsx-1153746147"
  }, subTitle)), __jsx("ul", {
    className: "jsx-1153746147" + " " + "info"
  }, __jsx("li", {
    className: "jsx-1153746147"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faHeart"]
  }), "+ 0"), __jsx("li", {
    className: "jsx-1153746147"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faGift"]
  }), "+ 0"), __jsx("li", {
    className: "jsx-1153746147"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faComment"]
  }), __jsx("span", {
    className: "jsx-1153746147"
  }, "+ 0")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1153746147"
  }, ".main.jsx-1153746147{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:60vh;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}header.jsx-1153746147{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:.5rem;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}header.jsx-1153746147 .user.jsx-1153746147{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}header.jsx-1153746147 .user.jsx-1153746147 img.jsx-1153746147{width:50px;height:50px;border-radius:50%;object-fit:cover;object-position:center;}header.jsx-1153746147 .user.jsx-1153746147 p.jsx-1153746147{margin:0;}header.jsx-1153746147 p.jsx-1153746147{margin:0;}.body.jsx-1153746147{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.body.jsx-1153746147 img.jsx-1153746147{width:100%;height:100%;object-fit:cover;object-position:center;}footer.jsx-1153746147{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:.5rem;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}footer.jsx-1153746147 p.jsx-1153746147{margin:0;}footer.jsx-1153746147 .title.jsx-1153746147{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}footer.jsx-1153746147 .info.jsx-1153746147{list-style:none;margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}li.jsx-1153746147{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:1rem;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}li.jsx-1153746147:nth-child(2){margin:0 1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEa0IsQUFHd0IsQUFPQSxBQVFBLEFBS0YsQUFPRixBQUdBLEFBR0csQUFHRCxBQU1FLEFBTUosQUFJSSxBQUtHLEFBU0csQUFNTCxTQTVDaEIsQUFHQSxBQW1CQSxFQTdCYyxBQWdCRCxHQW9DYixFQWZXLE9BcENTLEFBZ0JELEVBcUJQLFVBQ0csS0FyQlUsQ0FoQk4saUJBQ00sS0FnQnpCLFFBTkEsR0FqQ3dCLEFBT1EsQUFRUixBQTJCSCxBQVVHLE9BNUJ4QixZQTBDcUIsZ0JBTk0sMkNBM0RkLEFBZVEsQUFxQ1EsV0FuRGYsSUF5Q0UsUUF4Q0EsTUF5Q0EsS0F1QkMsR0EzREksWUE0REwsS0FQSyx5QkF6RHJCLE1BeUNBLFFBNUJBLFlBcUNBLEFBZUEseUJBNURnQixjQUNBLEdBb0RGLHFEQWxEZCxrQkFtREEiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL2dyZWVucG9zdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbG9yLCBmb250LCBncmVlbkdyYWRpZW50LCBncmVlbkJhY2tncm91bmQgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3YxJztcbmltcG9ydCBUaXRsZSBmcm9tICcuL3RpdGxlJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUFycm93TGVmdCwgZmFBcnJvd1JpZ2h0LCBmYUhlYXJ0LCBmYUdpZnQsIGZhQ29tbWVudCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5pbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9hb3Mvc3JjL3Nhc3MvYW9zLnNjc3MnO1xuaW1wb3J0IEJ0blBvc3QgZnJvbSAnLi4vbGF5b3V0L2J0bi1wb3N0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcbiAgY29uc3QgeyBpbWcsIHRpdGxlLCBzdWJUaXRsZSwgZGF0ZSwgaGlzdG9yeSwgYXV0aG9yLCBpbmRleCB9ID0gcG9zdDtcbiAgY29uc3QgeyBuYW1lLCBsYXN0TmFtZSwgcGVyZmlsSW1nLCB1cmwsIH0gPSBhdXRob3I7XG4gIC8qdXNlRWZmZWN0KCgpPT4ge1xuICAgIEFPUy5pbml0KCk7XG4gICAgcmV0dXJuIEFPUy5yZWZyZXNoKCk7XG4gIH0sW10pKi9cbiAgcmV0dXJuKFxuICAgIDxCdG5Qb3N0IHBvc3Q9e3Bvc3R9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbiBzaGFkb3dcIj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtwZXJmaWxJbWd9IGFsdD1cIlwiLz5cbiAgICAgICAgICA8cD57YCR7bmFtZX0gJHtsYXN0TmFtZX1gfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPlxuICAgICAgICAgIDxwPntuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3A+XG4gICAgICAgICAgPHNtYWxsPntuZXcgRGF0ZShkYXRlKS50b0xvY2FsZVRpbWVTdHJpbmcoKX08L3NtYWxsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD1cIlwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgIDxwPnt0aXRsZX08L3A+XG4gICAgICAgICAgPHNtYWxsPntzdWJUaXRsZX08L3NtYWxsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSGVhcnR9IC8+XG4gICAgICAgICAgICArIDBcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHaWZ0fSAvPlxuICAgICAgICAgICAgKyAwXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ29tbWVudH0gLz5cbiAgICAgICAgICAgIDxzcGFuPisgMDwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgLy9jb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgLnVzZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIC51c2VyIGltZ3tcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciAudXNlciBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgcHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHl7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5IGltZ3tcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAvL2xpbmUtaGVpZ2h0OiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXIgLnRpdGxle1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVyIC5pbmZve1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG4gICAgICAgIGxpe1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIH1cbiAgICAgICAgbGk6bnRoLWNoaWxkKDIpe1xuICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgICA8L0J0blBvc3Q+XG4gIClcbn1cblxuY29uc3QgTWFpbiA9ICgpPT4ge1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3Qgb25Qb3N0cyA9IGFzeW5jKCk9PiB7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCcvZ3JlZW4vYWxsJyk7XG4gICAgICBzZXRQb3N0cyhyZXMuZGF0YSk7XG4gICAgfWNhdGNoKGUpe1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICB9XG4gIH1cbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIG9uUG9zdHMoKTtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uUG9zdHMoKTtcbiAgICB9LCA2MDAwMCk7XG4gICAgcmV0dXJuICgpPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sW10pO1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICB7Y29uc29sZS5sb2cocG9zdHMpfVxuICAgICAgPFRpdGxlIHdvcmQ9XCJ0b3AgZ3JlZW5wb3N0J3NcIiAvPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAge1xuICAgICAgICAgIHBvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+IDxsaT48UG9zdCBpbmRleD17aW5kZXh9IGtleT17dXVpZCgpfSBwb3N0PXtwb3N0fS8+PC9saT4pXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIC8vaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgfVxuICAgICAgICAuYm9keXtcbiAgICAgICAgICAvL2ZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgfVxuICAgICAgICBsaXtcbiAgICAgICAgICAvL3dpZHRoOiAzMCU7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA3NjhweCl7XG4gICAgICAgICAgLm1haW57XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ib2R5e1xuICAgICAgICAgICAgcGFkZGluZzogM3JlbTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpe1xuICAgICAgICAgICAgbWFyZ2luIDEuNXJlbSAwO1xuICAgICAgICAgICAgd2lkdGg6IDMxJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx */")));
};

const Main = () => {
  const {
    0: posts,
    1: setPosts
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  const onPosts = async () => {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('/green/all');
      setPosts(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    onPosts();
    const interval = setInterval(function () {
      onPosts();
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  return __jsx("div", {
    className: "jsx-1114587080" + " " + "main"
  }, console.log(posts), __jsx(_title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    word: "top greenpost's"
  }), __jsx("ul", {
    className: "jsx-1114587080" + " " + "body"
  }, posts.map((post, index) => __jsx("li", {
    className: "jsx-1114587080"
  }, __jsx(Post, {
    index: index,
    key: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
    post: post
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1114587080"
  }, ".main.jsx-1114587080{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}.body.jsx-1114587080{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;list-style:none;margin:0;padding:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}li.jsx-1114587080{width:80%;margin:1rem 0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}@media(min-width:768px){.body.jsx-1114587080{padding:3rem;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}li.jsx-1114587080{margin:1.5rem 0;width:31%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1La0IsQUFJd0IsQUFNQSxBQVdILEFBUUssQUFLRSxVQVpILEdBUU8sR0FLVCxRQVpFLEVBYWQsZ0RBL0JzQixBQU1BLE1BYXhCLEVBT21CLHlEQUNqQixhQTFCYyxBQU1nQix3REFMaEMsMkRBTXFCLDZGQUNILGdCQUNQLFNBQ0MsVUFDSSx3REFDaEIiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL2dyZWVucG9zdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbG9yLCBmb250LCBncmVlbkdyYWRpZW50LCBncmVlbkJhY2tncm91bmQgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3YxJztcbmltcG9ydCBUaXRsZSBmcm9tICcuL3RpdGxlJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUFycm93TGVmdCwgZmFBcnJvd1JpZ2h0LCBmYUhlYXJ0LCBmYUdpZnQsIGZhQ29tbWVudCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5pbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9hb3Mvc3JjL3Nhc3MvYW9zLnNjc3MnO1xuaW1wb3J0IEJ0blBvc3QgZnJvbSAnLi4vbGF5b3V0L2J0bi1wb3N0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcbiAgY29uc3QgeyBpbWcsIHRpdGxlLCBzdWJUaXRsZSwgZGF0ZSwgaGlzdG9yeSwgYXV0aG9yLCBpbmRleCB9ID0gcG9zdDtcbiAgY29uc3QgeyBuYW1lLCBsYXN0TmFtZSwgcGVyZmlsSW1nLCB1cmwsIH0gPSBhdXRob3I7XG4gIC8qdXNlRWZmZWN0KCgpPT4ge1xuICAgIEFPUy5pbml0KCk7XG4gICAgcmV0dXJuIEFPUy5yZWZyZXNoKCk7XG4gIH0sW10pKi9cbiAgcmV0dXJuKFxuICAgIDxCdG5Qb3N0IHBvc3Q9e3Bvc3R9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbiBzaGFkb3dcIj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtwZXJmaWxJbWd9IGFsdD1cIlwiLz5cbiAgICAgICAgICA8cD57YCR7bmFtZX0gJHtsYXN0TmFtZX1gfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPlxuICAgICAgICAgIDxwPntuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3A+XG4gICAgICAgICAgPHNtYWxsPntuZXcgRGF0ZShkYXRlKS50b0xvY2FsZVRpbWVTdHJpbmcoKX08L3NtYWxsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD1cIlwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgIDxwPnt0aXRsZX08L3A+XG4gICAgICAgICAgPHNtYWxsPntzdWJUaXRsZX08L3NtYWxsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSGVhcnR9IC8+XG4gICAgICAgICAgICArIDBcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHaWZ0fSAvPlxuICAgICAgICAgICAgKyAwXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ29tbWVudH0gLz5cbiAgICAgICAgICAgIDxzcGFuPisgMDwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgLy9jb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgLnVzZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIC51c2VyIGltZ3tcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciAudXNlciBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgcHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHl7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5IGltZ3tcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAvL2xpbmUtaGVpZ2h0OiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXIgLnRpdGxle1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVyIC5pbmZve1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG4gICAgICAgIGxpe1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIH1cbiAgICAgICAgbGk6bnRoLWNoaWxkKDIpe1xuICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgICA8L0J0blBvc3Q+XG4gIClcbn1cblxuY29uc3QgTWFpbiA9ICgpPT4ge1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3Qgb25Qb3N0cyA9IGFzeW5jKCk9PiB7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCcvZ3JlZW4vYWxsJyk7XG4gICAgICBzZXRQb3N0cyhyZXMuZGF0YSk7XG4gICAgfWNhdGNoKGUpe1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICB9XG4gIH1cbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIG9uUG9zdHMoKTtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uUG9zdHMoKTtcbiAgICB9LCA2MDAwMCk7XG4gICAgcmV0dXJuICgpPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sW10pO1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICB7Y29uc29sZS5sb2cocG9zdHMpfVxuICAgICAgPFRpdGxlIHdvcmQ9XCJ0b3AgZ3JlZW5wb3N0J3NcIiAvPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAge1xuICAgICAgICAgIHBvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+IDxsaT48UG9zdCBpbmRleD17aW5kZXh9IGtleT17dXVpZCgpfSBwb3N0PXtwb3N0fS8+PC9saT4pXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIC8vaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgfVxuICAgICAgICAuYm9keXtcbiAgICAgICAgICAvL2ZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgfVxuICAgICAgICBsaXtcbiAgICAgICAgICAvL3dpZHRoOiAzMCU7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA3NjhweCl7XG4gICAgICAgICAgLm1haW57XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ib2R5e1xuICAgICAgICAgICAgcGFkZGluZzogM3JlbTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpe1xuICAgICAgICAgICAgbWFyZ2luIDEuNXJlbSAwO1xuICAgICAgICAgICAgd2lkdGg6IDMxJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./components/main/header.jsx":
/*!************************************!*\
  !*** ./components/main/header.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var _layout_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layout/main */ "./layout/main.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const Logo = ({
  header
}) => {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/main"
  }, __jsx("a", {
    href: "",
    title: "Inicio",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1318557158", [header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, header ? '1rem' : '2rem', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light]]])
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1318557158", [header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, header ? '1rem' : '2rem', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light]]])
  }, "GREEN"), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1318557158", [header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, header ? '1rem' : '2rem', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light]]])
  }, "LINK"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1318557158",
    dynamic: [header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, header ? '1rem' : '2rem', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light]
  }, `a.__jsx-style-dynamic-selector,a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:none;text-decoration:none;color:${header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light};margin-left:1rem;}a.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:${_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title};font-size:${header ? '1rem' : '2rem'};-webkit-transition:250ms ease;transition:250ms ease;}p.__jsx-style-dynamic-selector{margin:0;}span.__jsx-style-dynamic-selector{color:transparent;-webkit-text-stroke:1px ${header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9oZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVrQixBQUdnQyxBQUtSLEFBTUosQUFHUyxTQUZwQixTQUd1RCxnQ0FkbEIscUJBZXJDLEdBVjJDLFdBSnhCLGlCQUNuQixhQUl5Qyx1Q0FDakIsb0RBQ3hCIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9oZWFkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBPTl9NQUlOX05BViB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnQgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhQmFycyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cblxuY29uc3QgTG9nbyA9ICh7IGhlYWRlciB9KSA9PiB7XG4gIHJldHVybihcbiAgICA8TGluayBocmVmPVwiL21haW5cIj5cbiAgICAgIDxhIGhyZWY9XCJcIiB0aXRsZT1cIkluaWNpb1wiPlxuICAgICAgICA8cD5HUkVFTjwvcD5cbiAgICAgICAgPHNwYW4+TElOSzwvc3Bhbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYSwgYTpob3ZlcntcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICR7aGVhZGVyID8gY29sb3IucHJpbSA6IGNvbG9yLmxpZ2h0fTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICBhe1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICR7Zm9udC50aXRsZX07XG4gICAgICAgICAgZm9udC1zaXplOiAke2hlYWRlciA/ICcxcmVtJyA6ICcycmVtJ307XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgICBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBzcGFue1xuICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggJHtoZWFkZXIgPyBjb2xvci5wcmltIDogY29sb3IubGlnaHR9O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gIClcbn1cblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBiYXJzID0gPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZD1cIk0xNiAxMzJoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZWNzZjMC04LjgzNy03LjE2My0xNi0xNi0xNkgxNkM3LjE2MyA2MCAwIDY3LjE2MyAwIDc2djQwYzAgOC44MzcgNy4xNjMgMTYgMTYgMTZ6bTAgMTYwaDQxNmM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2di00MGMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE2Yy04LjgzNyAwLTE2IDcuMTYzLTE2IDE2djQwYzAgOC44MzcgNy4xNjMgMTYgMTYgMTZ6bTAgMTYwaDQxNmM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2di00MGMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE2Yy04LjgzNyAwLTE2IDcuMTYzLTE2IDE2djQwYzAgOC44MzcgNy4xNjMgMTYgMTYgMTZ6XCIvPjwvc3ZnPlxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtoZWFkZXIsIHNldEhlYWRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBpZih3aW5kb3cuc2Nyb2xsWSA+IDEwKXtcbiAgICAgIHNldEhlYWRlcih0cnVlKTtcbiAgICB9XG4gIH0pXG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICB3aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XG4gICAgICBpZih3aW5kb3cuc2Nyb2xsWSA+IDEwKXtcbiAgICAgICAgc2V0SGVhZGVyKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SGVhZGVyKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sW10pO1xuICByZXR1cm4oXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJhbmltYXRlZCBmYWRlSW5cIj5cbiAgICAgIDxMb2dvIGhlYWRlcj17aGVhZGVyfSAvPlxuICAgICAgPGJ1dHRvbiAgb25DbGljaz17KCk9PiBkaXNwYXRjaCh7IHR5cGU6IE9OX01BSU5fTkFWIH0pfT5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJhcnN9IC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7aGVhZGVyID8gJyNmZmYnIDogJ3RyYW5zcGFyZW50J307XG4gICAgICAgICAgcGFkZGluZzogLjglO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHotaW5kZXg6IDE1MDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMjUwbXMgbGluZWFyO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDE1cHggcmdiYSgwLCAwLCAwLCAuMyk7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIHdpZHRoOiAke2hlYWRlciA/ICczNXB4JyA6ICc0NXB4J307XG4gICAgICAgICAgaGVpZ2h0OiAke2hlYWRlciA/ICczNXB4JyA6ICc0NXB4J307XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAke2hlYWRlciA/IGNvbG9yLnByaW0gOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAuNyknfTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgIGJvcmRlcjogJHtoZWFkZXIgPyBgMXB4IHNvbGlkICR7Y29sb3IucHJpbX1gIDogJ25vbmUnfTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXJ7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtoZWFkZXIgPyBjb2xvci5wcmltIDogJyd9O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */
/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/header.jsx */`)));
};

const Header = () => {
  const bars = __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, __jsx("path", {
    d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
  }));

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    0: header,
    1: setHeader
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (window.scrollY > 10) {
      setHeader(true);
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.onscroll = () => {
      if (window.scrollY > 10) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };
  }, []);
  return __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2402312291", [header ? '#fff' : 'transparent', header ? '35px' : '45px', header ? '35px' : '45px', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : 'rgba(255, 255, 255, .7)', header ? `1px solid ${_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim}` : 'none', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : '']]]) + " " + "animated fadeIn"
  }, __jsx(Logo, {
    header: header
  }), __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_MAIN_NAV"]
    }),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2402312291", [header ? '#fff' : 'transparent', header ? '35px' : '45px', header ? '35px' : '45px', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : 'rgba(255, 255, 255, .7)', header ? `1px solid ${_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim}` : 'none', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : '']]])
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBars"]
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2402312291",
    dynamic: [header ? '#fff' : 'transparent', header ? '35px' : '45px', header ? '35px' : '45px', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : 'rgba(255, 255, 255, .7)', header ? `1px solid ${_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim}` : 'none', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : '']
  }, `header.__jsx-style-dynamic-selector{background:${header ? '#fff' : 'transparent'};padding:.8%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:fixed;top:0;left:0;width:100%;z-index:150;-webkit-transition:height 250ms linear;transition:height 250ms linear;box-shadow:0 2px 15px rgba(0,0,0,.3);}button.__jsx-style-dynamic-selector{background:transparent;width:${header ? '35px' : '45px'};height:${header ? '35px' : '45px'};border:none;color:${header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : 'rgba(255, 255, 255, .7)'};-webkit-transition:250ms ease;transition:250ms ease;border:${header ? `1px solid ${_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim}` : 'none'};}button.__jsx-style-dynamic-selector:focus{outline:none;}button.__jsx-style-dynamic-selector:hover{color:#fff;background:${header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : ''};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9oZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFa0IsQUFHbUQsQUFjakIsQUFTVixBQUdGLFdBQzZCLEVBSDFDLFVBVHFDLGlCQWR2QixXQTJCZCxDQTFCZSxNQWN1QixvQ0FDeEIsWUFDdUIsb0JBZkwsZUFnQlIsb0RBQ2Msb0NBQ3RDLFlBakJxQiw2RkFDSixlQUNULE1BQ0MsT0FDSSxXQUNDLFlBQ21CLHNFQUNTLHFDQUMxQyIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL21haW4vaGVhZGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgT05fTUFJTl9OQVYgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCB7IGNvbG9yLCBmb250IH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUJhcnMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5cbmNvbnN0IExvZ28gPSAoeyBoZWFkZXIgfSkgPT4ge1xuICByZXR1cm4oXG4gICAgPExpbmsgaHJlZj1cIi9tYWluXCI+XG4gICAgICA8YSBocmVmPVwiXCIgdGl0bGU9XCJJbmljaW9cIj5cbiAgICAgICAgPHA+R1JFRU48L3A+XG4gICAgICAgIDxzcGFuPkxJTks8L3NwYW4+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGEsIGE6aG92ZXJ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAke2hlYWRlciA/IGNvbG9yLnByaW0gOiBjb2xvci5saWdodH07XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgYXtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAke2ZvbnQudGl0bGV9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogJHtoZWFkZXIgPyAnMXJlbScgOiAnMnJlbSd9O1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgcHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbntcbiAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4ICR7aGVhZGVyID8gY29sb3IucHJpbSA6IGNvbG9yLmxpZ2h0fTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8L2E+XG4gICAgPC9MaW5rPlxuICApXG59XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgYmFycyA9IDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGQ9XCJNMTYgMTMyaDQxNmM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2Vjc2YzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZDNy4xNjMgNjAgMCA2Ny4xNjMgMCA3NnY0MGMwIDguODM3IDcuMTYzIDE2IDE2IDE2em0wIDE2MGg0MTZjOC44MzcgMCAxNi03LjE2MyAxNi0xNnYtNDBjMC04LjgzNy03LjE2My0xNi0xNi0xNkgxNmMtOC44MzcgMC0xNiA3LjE2My0xNiAxNnY0MGMwIDguODM3IDcuMTYzIDE2IDE2IDE2em0wIDE2MGg0MTZjOC44MzcgMCAxNi03LjE2MyAxNi0xNnYtNDBjMC04LjgzNy03LjE2My0xNi0xNi0xNkgxNmMtOC44MzcgMC0xNiA3LjE2My0xNiAxNnY0MGMwIDguODM3IDcuMTYzIDE2IDE2IDE2elwiLz48L3N2Zz5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbaGVhZGVyLCBzZXRIZWFkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgaWYod2luZG93LnNjcm9sbFkgPiAxMCl7XG4gICAgICBzZXRIZWFkZXIodHJ1ZSk7XG4gICAgfVxuICB9KVxuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICAgICAgaWYod2luZG93LnNjcm9sbFkgPiAxMCl7XG4gICAgICAgIHNldEhlYWRlcih0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEhlYWRlcihmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9LFtdKTtcbiAgcmV0dXJuKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYW5pbWF0ZWQgZmFkZUluXCI+XG4gICAgICA8TG9nbyBoZWFkZXI9e2hlYWRlcn0gLz5cbiAgICAgIDxidXR0b24gIG9uQ2xpY2s9eygpPT4gZGlzcGF0Y2goeyB0eXBlOiBPTl9NQUlOX05BViB9KX0+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCYXJzfSAvPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGhlYWRlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2hlYWRlciA/ICcjZmZmJyA6ICd0cmFuc3BhcmVudCd9O1xuICAgICAgICAgIHBhZGRpbmc6IC44JTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB6LWluZGV4OiAxNTA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDI1MG1zIGxpbmVhcjtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAxNXB4IHJnYmEoMCwgMCwgMCwgLjMpO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICB3aWR0aDogJHtoZWFkZXIgPyAnMzVweCcgOiAnNDVweCd9O1xuICAgICAgICAgIGhlaWdodDogJHtoZWFkZXIgPyAnMzVweCcgOiAnNDVweCd9O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogJHtoZWFkZXIgPyBjb2xvci5wcmltIDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgLjcpJ307XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICBib3JkZXI6ICR7aGVhZGVyID8gYDFweCBzb2xpZCAke2NvbG9yLnByaW19YCA6ICdub25lJ307XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7aGVhZGVyID8gY29sb3IucHJpbSA6ICcnfTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9oZWFkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */
/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/header.jsx */`));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/main/hero.jsx":
/*!**********************************!*\
  !*** ./components/main/hero.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var _layout_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout/main */ "./layout/main.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








const Nav = ({
  prim,
  sec,
  img,
  index,
  onStop
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  const onTheme = index => {
    onStop(true);
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["ON_MAIN_THEME"],
      index
    });
    setTimeout(() => onStop(false), 15000);
  };

  return __jsx("nav", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4215238909", [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim]]])
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4215238909", [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim]]]) + " " + "line"
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4215238909", [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim]]]) + " " + "nav"
  }, __jsx("button", {
    onClick: () => onTheme(0),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4215238909", [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim]]])
  }, "1"), __jsx("button", {
    onClick: () => onTheme(1),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4215238909", [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim]]])
  }, "2"), __jsx("button", {
    onClick: () => onTheme(2),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4215238909", [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim]]])
  }, "3")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4215238909", [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim]]]) + " " + "line"
  }), __jsx("img", {
    id: "logo",
    src: "/static/logo2.png",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4215238909", [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim]]])
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4215238909",
    dynamic: [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim]
  }, `nav.__jsx-style-dynamic-selector{position:absolute;top:0;right:0;height:100vh;width:5%;min-width:50px;background:${prim};display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:100;}.line.__jsx-style-dynamic-selector{width:2px;height:25%;background:#fff;content:" ";}img#logo.__jsx-style-dynamic-selector{position:absolute;bottom:.5rem;width:50px;height:50px;}div.nav.__jsx-style-dynamic-selector{margin:2rem 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}button.__jsx-style-dynamic-selector{width:25px;height:25px;border-radius:50%;border:1px solid #fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:transparent;color:#fff;-webkit-transition:250ms ease;transition:250ms ease;}button.__jsx-style-dynamic-selector:nth-child(1){background:${index === 1 ? '#fff' : 'transparent'};color:${index === 1 ? prim : '#fff'};}button.__jsx-style-dynamic-selector:nth-child(2){margin:1rem 0;background:${index === 2 ? '#fff' : 'transparent'};color:${index === 2 ? prim : '#fff'};}button.__jsx-style-dynamic-selector:nth-child(3){background:${index === 3 ? '#fff' : 'transparent'};color:${index === 3 ? prim : '#fff'};}button.__jsx-style-dynamic-selector:hover{background:#fff;color:${prim};}button.__jsx-style-dynamic-selector:focus{outline:none;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9oZXJvLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmtCLEFBRzZCLEFBY1IsQUFNUSxBQU1KLEFBTUgsQUFZNkIsQUFJMUIsQUFLMEIsQUFJeEIsQUFJSCxVQTlDRixDQWtCQyxFQTZCZCxDQW5DZSxBQXNCMkIsRUFTTCxFQXpEN0IsQUFvQk8sR0FMRyxFQWtCRSxDQWhDVixPQW9CRyxDQW5CRSxLQWNELEdBNEJ1QixBQVNBLENBbkJiLENBWlYsR0FuQkgsSUFjWCxFQXlDQSxHQXREaUIsQUFtQmpCLEFBMEJxQyxTQWR0QixNQTlCMkIsTUF3QzFDLEFBU0EsYUEzQndCLENBdUJ4QixvQkE1Q2UsNEJBOEJVLDZCQVJBLGlCQXJCRCxxREE4QkgseUJBN0JBLElBcUJyQixnRUFTeUIsdUJBQ1osRUE5QlksU0ErQkQsb0RBQ3hCLHNDQS9CYyxZQUNkIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9oZXJvLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgT05fTUFJTl9USEVNRSB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnQgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5pbXBvcnQgeyBUd2Vlbk1heCB9IGZyb20gJ2dzYXAnO1xuaW1wb3J0IHsgdGhlbWVHcmVlbiwgdGhlbWVSZWQsIHRoZW1lQmx1ZSB9IGZyb20gJy4uLy4uL2xheW91dC9tYWluJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IE5hdiA9ICh7IHByaW0sIHNlYywgaW1nLCBpbmRleCwgb25TdG9wIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBvblRoZW1lID0gKGluZGV4KSA9PiB7XG4gICAgb25TdG9wKHRydWUpO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogT05fTUFJTl9USEVNRSwgaW5kZXggfSk7XG4gICAgc2V0VGltZW91dCgoKT0+IG9uU3RvcChmYWxzZSksIDE1MDAwKTtcbiAgfVxuICByZXR1cm4oXG4gICAgPG5hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gb25UaGVtZSgwKX0+MTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gb25UaGVtZSgxKX0+MjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gb25UaGVtZSgyKX0+MzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIiAvPlxuICAgICAgPGltZyBpZD1cImxvZ29cIiBzcmM9XCIvc3RhdGljL2xvZ28yLnBuZ1wiIGFsdD1cIlwiLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbmF2e1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB3aWR0aDogNSU7XG4gICAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7cHJpbX07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICB9XG4gICAgICAgIC5saW5le1xuICAgICAgICAgIHdpZHRoOiAycHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNSU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgfVxuICAgICAgICBpbWcjbG9nb3tcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAuNXJlbTs7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIGRpdi5uYXZ7XG4gICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOm50aC1jaGlsZCgxKXtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2luZGV4ID09PSAxID8gJyNmZmYnIDogJ3RyYW5zcGFyZW50J307XG4gICAgICAgICAgY29sb3I6ICR7aW5kZXggPT09IDEgPyBwcmltIDogJyNmZmYnfTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246bnRoLWNoaWxkKDIpe1xuICAgICAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7aW5kZXggPT09IDIgPyAnI2ZmZicgOiAndHJhbnNwYXJlbnQnfTtcbiAgICAgICAgICBjb2xvcjogJHtpbmRleCA9PT0gMiA/IHByaW0gOiAnI2ZmZid9O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpudGgtY2hpbGQoMyl7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtpbmRleCA9PT0gMyA/ICcjZmZmJyA6ICd0cmFuc3BhcmVudCd9O1xuICAgICAgICAgIGNvbG9yOiAke2luZGV4ID09PSAzID8gcHJpbSA6ICcjZmZmJ307XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgY29sb3I6ICR7cHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvbmF2PlxuICApXG59XG5cbmNvbnN0IFRleHQgPSAoeyB0aXRsZSwgc3ViVGl0bGUsIGxlZnQsIHJpZ2h0IH0pID0+IHtcblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgPGgyPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPHA+e3N1YlRpdGxlfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXYubWFpbntcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBkaXYudGV4dHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaDJ7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAke2ZvbnQudGl0bGV9O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgcHtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDU3NnB4KXtcbiAgICAgICAgICBkaXYudGV4dHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgye1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA5OTJweCl7XG4gICAgICAgICAgZGl2LnRleHR7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogMTIwMHB4KXtcbiAgICAgICAgICBoMntcbiAgICAgICAgICAgIG1heC13aWR0aDogMjcycHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBCYWxsQ2hhaW4gPSAoeyByaWdodCwgaWQgfSkgPT4ge1xuICByZXR1cm4oXG4gICAgPGRpdiBpZD17aWR9IGNsYXNzTmFtZT1cImJhbGxfY2hhaW4gZC1ub25lIGQtbGctZmxleFwiPlxuICAgICAgeyAhcmlnaHQgJiYgPGRpdiBjbGFzc05hbWU9XCJiYWxsXCIgLz4gfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpblwiIC8+XG4gICAgICB7IHJpZ2h0ICYmIDxkaXYgY2xhc3NOYW1lPVwiYmFsbFwiIC8+IH1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmJhbGxfY2hhaW57XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIC5iYWxse1xuICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgfVxuICAgICAgICAuY2hhaW57XG4gICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgSGVybyA9ICh7IHRoZW1lLCBtZW51LCBvblN0b3AgfSkgPT4ge1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyBpbWcsIHRleHRCb3R0b20sIHByaW0sIHNlYywgdGV4dExlZnQsIHRleHRSaWdodCwgaW5kZXggfSA9IHRoZW1lO1xuICB1c2VFZmZlY3QoKCk9PntcbiAgICBUd2Vlbk1heC50byhgI2xlZnRgLCAyLCB7IHdpZHRoOiAnMTAwJScsIG9wYWNpdHk6IDEgfSk7XG4gICAgVHdlZW5NYXgudG8oYC50ZXh0TGVmdGAsIDIsIHsgb3BhY2l0eTogMSwgZGVsYXk6IDIgfSk7XG4gICAgcmV0dXJuICgpPT4ge1xuICAgICAgVHdlZW5NYXgudG8oYC50ZXh0TGVmdGAsIDIsIHsgb3BhY2l0eTogMCB9KTtcbiAgICB9XG4gIH0sW21lbnVdKVxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBUd2Vlbk1heC50byhgI3JpZ2h0YCwgMiwgeyB3aWR0aDogJzEwMCUnLCBvcGFjaXR5OiAxLCBkZWxheTogMiB9KTtcbiAgICBUd2Vlbk1heC50byhgLnRleHRSaWdodGAsIDIsIHsgb3BhY2l0eTogMSwgZGVsYXk6IDQgfSk7XG4gICAgcmV0dXJuICgpPT4ge1xuICAgICAgVHdlZW5NYXgudG8oYC50ZXh0UmlnaHRgLCAyLCB7IG9wYWNpdHk6IDAgfSk7XG4gICAgfVxuICB9LFttZW51XSlcblxuICBjb25zdCBvbk1vdmUgPSAoZSkgPT4ge1xuICAgIFR3ZWVuTWF4LnRvKCcubW92aW5nJywgMywgeyBsZWZ0OiAoZS5zY3JlZW5YIC8gNTApLCB0b3A6IChlLnNjcmVlblkgLyAzMCkgfSk7XG4gIH1cblxuICByZXR1cm4oXG4gICAgPGRpdiBvbk1vdXNlTW92ZT17b25Nb3ZlfSBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtb3ZpbmdcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0cyB0ZXh0TGVmdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViVGV4dExlZnRcIj5cbiAgICAgICAgICAgIHsgIW1lbnUgJiYgKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxUZXh0IHRpdGxlPXt0ZXh0TGVmdC50aXRsZX0gc3ViVGl0bGU9e3RleHRMZWZ0LnN1YlRpdGxlfSBsZWZ0IC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2xhbmRpbmcnPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1ibG9ja1wiPsK/UXVpZXJlcyBTYWJlciBNw6FzPzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UgYW5pbWF0ZWQgZmFkZUluXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsX2NoYWluX2xlZnRcIj5cbiAgICAgICAgICAgIHsgIW1lbnUgJiYgPEJhbGxDaGFpbiBpZD1cImxlZnRcIiAvPiB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsX2NoYWluX3JpZ2h0XCI+XG4gICAgICAgICAgICB7ICFtZW51ICYmIDxCYWxsQ2hhaW4gaWQ9J3JpZ2h0JyByaWdodCAvPiB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0cyB0ZXh0UmlnaHRcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgeyAhbWVudSAmJiA8VGV4dCB0aXRsZT17dGV4dFJpZ2h0LnRpdGxlfSBzdWJUaXRsZT17dGV4dFJpZ2h0LnN1YlRpdGxlfSAvPiB9XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImQtbWQtbm9uZVwiPsK/UXVpZXJlcyBTYWJlciBNw6FzPzwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJhbmltYXRlZCBmYWRlSW5VcCBkZWxheS00c1wiPnt0ZXh0Qm90dG9tfTwvaDE+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlcm97XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtwcmltfSwgJHtzZWN9KTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICBtYWlue1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0c3tcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHRMZWZ0e1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICAuc3ViVGV4dExlZnR7XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b257XG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1NTA7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgY29sb3I6ICR7cHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgLmltYWdle1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICB9XG4gICAgICAgIC5iYWxsX2NoYWluX2xlZnR7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBib3R0b206ICR7aW5kZXggPT09IDEgPyAnNDl2aCcgOiBpbmRleCA9PT0gMiA/ICc1MHZoJyA6ICc1MHZoJ307XG4gICAgICAgICAgbGVmdDogJHtpbmRleCA9PT0gMSA/ICctMTElJyA6IGluZGV4ID09PSAyID8gJy0xMCUnIDogJy0xMiUnfTtcbiAgICAgICAgICB3aWR0aDogJHtpbmRleCA9PT0gMSA/ICczMCUnIDogaW5kZXggPT09IDIgPyAnNDIlJyA6ICc1OCUnfTtcbiAgICAgICAgfVxuICAgICAgICAuYmFsbF9jaGFpbl9yaWdodHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAke2luZGV4ID09PSAxID8gJzQ0LjJ2aCcgOiBpbmRleCA9PT0gMiA/ICc0MHZoJyA6ICc0MHZoJ307XG4gICAgICAgICAgcmlnaHQ6ICR7aW5kZXggPT09IDEgPyAnLTIwJScgOiBpbmRleCA9PT0gMiA/ICctMTIlJyA6ICctMTIlJ307XG4gICAgICAgICAgd2lkdGg6ICR7aW5kZXggPT09IDEgPyAnNzMlJyA6IGluZGV4ID09PSAyID8gJzQ4JScgOiAnMjAlJ307XG4gICAgICAgIH1cbiAgICAgICAgaW1ne1xuICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0UmlnaHR7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXIgaDF7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICR7Zm9udC50aXRsZX07XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNTc2cHgpe1xuICAgICAgICAgIG1haW57XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dHN7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dExlZnR7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmltYWdle1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0UmlnaHR7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvb3RlciBoMXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggMXB4IDE1cHggcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDk5MnB4KXtcbiAgICAgICAgICB0ZXh0c3tcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHRMZWZ0e1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3ViVGV4dExlZnR7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dFJpZ2h0e1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogJHtpbmRleCA9PT0gMSA/ICc2NXB4JyA6ICcwJ307XG4gICAgICAgICAgfVxuICAgICAgICAgIGltYWdle1xuICAgICAgICAgICAgZmxleDogMSAwIDA7XG4gICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogMzM1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMzNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFsbF9jaGFpbl9sZWZ0e1xuICAgICAgICAgICAgYm90dG9tOiAke2luZGV4ID09PSAxID8gJzQ5dmgnIDogaW5kZXggPT09IDIgPyAnNDl2aCcgOiAnNDl2aCd9O1xuICAgICAgICAgICAgbGVmdDogJHtpbmRleCA9PT0gMSA/ICctNiUnIDogaW5kZXggPT09IDIgPyAnLTIwJScgOiAnLTI1JSd9O1xuICAgICAgICAgICAgd2lkdGg6ICR7aW5kZXggPT09IDEgPyAnMjYlJyA6IGluZGV4ID09PSAyID8gJzUwJScgOiAnNDAlJ307XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYWxsX2NoYWluX3JpZ2h0e1xuICAgICAgICAgICAgdG9wOiAke2luZGV4ID09PSAxID8gJzQ0LjJ2aCcgOiBpbmRleCA9PT0gMiA/ICc0MHZoJyA6ICc0MHZoJ307XG4gICAgICAgICAgICByaWdodDogJHtpbmRleCA9PT0gMSA/ICctMzIlJyA6IGluZGV4ID09PSAyID8gJy0yMyUnIDogJy0xNSUnfTtcbiAgICAgICAgICAgIHdpZHRoOiAke2luZGV4ID09PSAxID8gJzg1JScgOiBpbmRleCA9PT0gMiA/ICc0OCUnIDogJzI4JSd9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb290ZXIgaDF7XG4gICAgICAgICAgICBmb250LXNpemU6IDhyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogOHJlbTtcblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiAxMjAwcHgpe1xuICAgICAgICAgIC5pbWFnZXtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dExlZnQgaDJ7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI3MnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dFJpZ2h0e1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogJHtpbmRleCA9PT0gMSB8fCBpbmRleCA9PT0gMiA/ICcyODBweCcgOiAnMjU5cHgnfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYWxsX2NoYWluX2xlZnR7XG4gICAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAgICAgYm90dG9tOiAke2luZGV4ID09PSAxID8gJzQ2LjV2aCcgOiBpbmRleCA9PT0gMiA/ICc0N3ZoJyA6ICc0N3ZoJ307XG4gICAgICAgICAgICBsZWZ0OiAke2luZGV4ID09PSAxID8gJy0yJScgOiBpbmRleCA9PT0gMiA/ICctOCUnIDogJy04JSd9O1xuICAgICAgICAgICAgd2lkdGg6ICR7aW5kZXggPT09IDEgPyAnMzAlJyA6IGluZGV4ID09PSAyID8gJzU1JScgOiAnMzUlJ307XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYWxsX2NoYWluX3JpZ2h0e1xuICAgICAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgICAgIHRvcDogJHtpbmRleCA9PT0gMSA/ICc1NnZoJyA6IGluZGV4ID09PSAyID8gJzU2dmgnIDogJzU1dmgnfTtcbiAgICAgICAgICAgIHJpZ2h0OiAke2luZGV4ID09PSAxID8gJy0xNiUnIDogaW5kZXggPT09IDIgPyAnLTEyJScgOiAnLTEwJSd9O1xuICAgICAgICAgICAgd2lkdGg6ICR7aW5kZXggPT09IDEgPyAnNjglJyA6IGluZGV4ID09PSAyID8gJzQzJScgOiAnMjglJ307XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvb3RlciBoMXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTByZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICBjb25zdCBpbmRleCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm1haW4udGhlbWUpO1xuICBjb25zdCBtZW51ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubWFpbi5uYXYudmlzaWJsZSkgO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtwYXVzZSwgc2V0UGF1c2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0aGVtZXMgPSBbdGhlbWVHcmVlbiwgdGhlbWVSZWQsIHRoZW1lQmx1ZV07XG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PiB7XG4gICAgICBpZighcGF1c2Upe1xuICAgICAgICBpID0gaSA8IDIgPyBpICsgMSA6IDA7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogT05fTUFJTl9USEVNRSwgaW5kZXg6IGkgfSk7XG4gICAgICB9XG4gICAgfSwgMTUwMDApO1xuICAgIHJldHVybiAoKT0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LFtwYXVzZV0pXG4gIGNvbnN0IG9uQ3Vyc29yID0gKGUpID0+IHtcbiAgICBUd2Vlbk1heC50bygnI2N1cnNvcicsIDAuMSwgeyBsZWZ0OiBlLmNsaWVudFgsIHRvcDogZS5jbGllbnRZIH0pO1xuICB9XG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPE5hdiBvblN0b3A9e3NldFBhdXNlfSB7Li4udGhlbWVzW2luZGV4XX0vPlxuICAgICAge2luZGV4ID09PSAwICYmIDxIZXJvIG9uU3RvcD17c2V0UGF1c2V9IHRoZW1lPXt0aGVtZUdyZWVufSBtZW51PXttZW51fSAvPn1cbiAgICAgIHtpbmRleCA9PT0gMSAmJiA8SGVybyBvblN0b3A9e3NldFBhdXNlfSB0aGVtZT17dGhlbWVSZWR9IG1lbnU9e21lbnV9IC8+fVxuICAgICAge2luZGV4ID09PSAyICYmIDxIZXJvIG9uU3RvcD17c2V0UGF1c2V9IHRoZW1lPXt0aGVtZUJsdWV9IG1lbnU9e21lbnV9IC8+fVxuICAgICAgey8qPGRpdiBpZD1cImN1cnNvclwiIC8+Ki99XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdntcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgLy9jdXJzb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAjY3Vyc29ye1xuICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICB6LWluZGV4OiA1MDA7XG4gICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpO1xuICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */
/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/hero.jsx */`));
};

const Text = ({
  title,
  subTitle,
  left,
  right
}) => {
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2594515184", [_layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title]]]) + " " + "main"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2594515184", [_layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title]]]) + " " + "text"
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2594515184", [_layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title]]])
  }, title), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2594515184", [_layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title]]])
  }, subTitle)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2594515184",
    dynamic: [_layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title]
  }, `div.main.__jsx-style-dynamic-selector{width:100%;}div.text.__jsx-style-dynamic-selector{text-align:center;}h2.__jsx-style-dynamic-selector{font-size:1.5rem;margin:0;font-family:${_layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title};display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}p.__jsx-style-dynamic-selector{font-size:10px;margin:0;}@media(min-width:576px){div.text.__jsx-style-dynamic-selector{text-align:left;}h2.__jsx-style-dynamic-selector{font-size:2rem;}}@media(min-width:992px){div.text.__jsx-style-dynamic-selector{text-align:left;}h2.__jsx-style-dynamic-selector{font-size:2rem;}}@media(min-width:1200px){h2.__jsx-style-dynamic-selector{max-width:272px;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9oZXJvLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwR2tCLEFBR3NCLEFBR08sQUFHRCxBQU1GLEFBS0csQUFHRCxBQUtDLEFBR0QsQUFLQyxXQWhDcEIsSUFZVyxBQVFULEFBUUEsQ0FYQSxBQVFBLEFBUUEsQ0EzQlMsQ0FIWCxNQVVBLEVBTjJDLHlDQUM1QiwwRUFDZiIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL21haW4vaGVyby5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IE9OX01BSU5fVEhFTUUgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCB7IGNvbG9yLCBmb250IH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuaW1wb3J0IHsgVHdlZW5NYXggfSBmcm9tICdnc2FwJztcbmltcG9ydCB7IHRoZW1lR3JlZW4sIHRoZW1lUmVkLCB0aGVtZUJsdWUgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBOYXYgPSAoeyBwcmltLCBzZWMsIGltZywgaW5kZXgsIG9uU3RvcCB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgb25UaGVtZSA9IChpbmRleCkgPT4ge1xuICAgIG9uU3RvcCh0cnVlKTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IE9OX01BSU5fVEhFTUUsIGluZGV4IH0pO1xuICAgIHNldFRpbWVvdXQoKCk9PiBvblN0b3AoZmFsc2UpLCAxNTAwMCk7XG4gIH1cbiAgcmV0dXJuKFxuICAgIDxuYXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IG9uVGhlbWUoMCl9PjE8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IG9uVGhlbWUoMSl9PjI8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IG9uVGhlbWUoMil9PjM8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCIgLz5cbiAgICAgIDxpbWcgaWQ9XCJsb2dvXCIgc3JjPVwiL3N0YXRpYy9sb2dvMi5wbmdcIiBhbHQ9XCJcIi8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG5hdntcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgd2lkdGg6IDUlO1xuICAgICAgICAgIG1pbi13aWR0aDogNTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3ByaW19O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgfVxuICAgICAgICAubGluZXtcbiAgICAgICAgICB3aWR0aDogMnB4O1xuICAgICAgICAgIGhlaWdodDogMjUlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgIH1cbiAgICAgICAgaW1nI2xvZ297XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogLjVyZW07O1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgfVxuICAgICAgICBkaXYubmF2e1xuICAgICAgICAgIG1hcmdpbjogMnJlbSAwO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBidXR0b257XG4gICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpudGgtY2hpbGQoMSl7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtpbmRleCA9PT0gMSA/ICcjZmZmJyA6ICd0cmFuc3BhcmVudCd9O1xuICAgICAgICAgIGNvbG9yOiAke2luZGV4ID09PSAxID8gcHJpbSA6ICcjZmZmJ307XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOm50aC1jaGlsZCgyKXtcbiAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2luZGV4ID09PSAyID8gJyNmZmYnIDogJ3RyYW5zcGFyZW50J307XG4gICAgICAgICAgY29sb3I6ICR7aW5kZXggPT09IDIgPyBwcmltIDogJyNmZmYnfTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246bnRoLWNoaWxkKDMpe1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7aW5kZXggPT09IDMgPyAnI2ZmZicgOiAndHJhbnNwYXJlbnQnfTtcbiAgICAgICAgICBjb2xvcjogJHtpbmRleCA9PT0gMyA/IHByaW0gOiAnI2ZmZid9O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGNvbG9yOiAke3ByaW19O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L25hdj5cbiAgKVxufVxuXG5jb25zdCBUZXh0ID0gKHsgdGl0bGUsIHN1YlRpdGxlLCBsZWZ0LCByaWdodCB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwPntzdWJUaXRsZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2Lm1haW57XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgZGl2LnRleHR7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGgye1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJHtmb250LnRpdGxlfTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA1NzZweCl7XG4gICAgICAgICAgZGl2LnRleHR7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogOTkycHgpe1xuICAgICAgICAgIGRpdi50ZXh0e1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDJ7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDEyMDBweCl7XG4gICAgICAgICAgaDJ7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI3MnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgQmFsbENoYWluID0gKHsgcmlnaHQsIGlkIH0pID0+IHtcbiAgcmV0dXJuKFxuICAgIDxkaXYgaWQ9e2lkfSBjbGFzc05hbWU9XCJiYWxsX2NoYWluIGQtbm9uZSBkLWxnLWZsZXhcIj5cbiAgICAgIHsgIXJpZ2h0ICYmIDxkaXYgY2xhc3NOYW1lPVwiYmFsbFwiIC8+IH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW5cIiAvPlxuICAgICAgeyByaWdodCAmJiA8ZGl2IGNsYXNzTmFtZT1cImJhbGxcIiAvPiB9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5iYWxsX2NoYWlue1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICAuYmFsbHtcbiAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYWlue1xuICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEhlcm8gPSAoeyB0aGVtZSwgbWVudSwgb25TdG9wIH0pID0+IHtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgaW1nLCB0ZXh0Qm90dG9tLCBwcmltLCBzZWMsIHRleHRMZWZ0LCB0ZXh0UmlnaHQsIGluZGV4IH0gPSB0aGVtZTtcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgVHdlZW5NYXgudG8oYCNsZWZ0YCwgMiwgeyB3aWR0aDogJzEwMCUnLCBvcGFjaXR5OiAxIH0pO1xuICAgIFR3ZWVuTWF4LnRvKGAudGV4dExlZnRgLCAyLCB7IG9wYWNpdHk6IDEsIGRlbGF5OiAyIH0pO1xuICAgIHJldHVybiAoKT0+IHtcbiAgICAgIFR3ZWVuTWF4LnRvKGAudGV4dExlZnRgLCAyLCB7IG9wYWNpdHk6IDAgfSk7XG4gICAgfVxuICB9LFttZW51XSlcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgVHdlZW5NYXgudG8oYCNyaWdodGAsIDIsIHsgd2lkdGg6ICcxMDAlJywgb3BhY2l0eTogMSwgZGVsYXk6IDIgfSk7XG4gICAgVHdlZW5NYXgudG8oYC50ZXh0UmlnaHRgLCAyLCB7IG9wYWNpdHk6IDEsIGRlbGF5OiA0IH0pO1xuICAgIHJldHVybiAoKT0+IHtcbiAgICAgIFR3ZWVuTWF4LnRvKGAudGV4dFJpZ2h0YCwgMiwgeyBvcGFjaXR5OiAwIH0pO1xuICAgIH1cbiAgfSxbbWVudV0pXG5cbiAgY29uc3Qgb25Nb3ZlID0gKGUpID0+IHtcbiAgICBUd2Vlbk1heC50bygnLm1vdmluZycsIDMsIHsgbGVmdDogKGUuc2NyZWVuWCAvIDUwKSwgdG9wOiAoZS5zY3JlZW5ZIC8gMzApIH0pO1xuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgb25Nb3VzZU1vdmU9e29uTW92ZX0gY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibW92aW5nXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dHMgdGV4dExlZnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YlRleHRMZWZ0XCI+XG4gICAgICAgICAgICB7ICFtZW51ICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8VGV4dCB0aXRsZT17dGV4dExlZnQudGl0bGV9IHN1YlRpdGxlPXt0ZXh0TGVmdC5zdWJUaXRsZX0gbGVmdCAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9sYW5kaW5nJz5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtYmxvY2tcIj7Cv1F1aWVyZXMgU2FiZXIgTcOhcz88L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlIGFuaW1hdGVkIGZhZGVJblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbF9jaGFpbl9sZWZ0XCI+XG4gICAgICAgICAgICB7ICFtZW51ICYmIDxCYWxsQ2hhaW4gaWQ9XCJsZWZ0XCIgLz4gfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbF9jaGFpbl9yaWdodFwiPlxuICAgICAgICAgICAgeyAhbWVudSAmJiA8QmFsbENoYWluIGlkPSdyaWdodCcgcmlnaHQgLz4gfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD1cIlwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dHMgdGV4dFJpZ2h0XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHsgIW1lbnUgJiYgPFRleHQgdGl0bGU9e3RleHRSaWdodC50aXRsZX0gc3ViVGl0bGU9e3RleHRSaWdodC5zdWJUaXRsZX0gLz4gfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkLW1kLW5vbmVcIj7Cv1F1aWVyZXMgU2FiZXIgTcOhcz88L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYW5pbWF0ZWQgZmFkZUluVXAgZGVsYXktNHNcIj57dGV4dEJvdHRvbX08L2gxPlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oZXJve1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICR7cHJpbX0sICR7c2VjfSk7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgbWFpbntcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAudGV4dHN7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0TGVmdHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnN1YlRleHRMZWZ0e1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICBmb250LXdlaWdodDogNTUwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGNvbG9yOiAke3ByaW19O1xuICAgICAgICB9XG4gICAgICAgIC5pbWFnZXtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgfVxuICAgICAgICAuYmFsbF9jaGFpbl9sZWZ0e1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgYm90dG9tOiAke2luZGV4ID09PSAxID8gJzQ5dmgnIDogaW5kZXggPT09IDIgPyAnNTB2aCcgOiAnNTB2aCd9O1xuICAgICAgICAgIGxlZnQ6ICR7aW5kZXggPT09IDEgPyAnLTExJScgOiBpbmRleCA9PT0gMiA/ICctMTAlJyA6ICctMTIlJ307XG4gICAgICAgICAgd2lkdGg6ICR7aW5kZXggPT09IDEgPyAnMzAlJyA6IGluZGV4ID09PSAyID8gJzQyJScgOiAnNTglJ307XG4gICAgICAgIH1cbiAgICAgICAgLmJhbGxfY2hhaW5fcmlnaHR7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogJHtpbmRleCA9PT0gMSA/ICc0NC4ydmgnIDogaW5kZXggPT09IDIgPyAnNDB2aCcgOiAnNDB2aCd9O1xuICAgICAgICAgIHJpZ2h0OiAke2luZGV4ID09PSAxID8gJy0yMCUnIDogaW5kZXggPT09IDIgPyAnLTEyJScgOiAnLTEyJSd9O1xuICAgICAgICAgIHdpZHRoOiAke2luZGV4ID09PSAxID8gJzczJScgOiBpbmRleCA9PT0gMiA/ICc0OCUnIDogJzIwJSd9O1xuICAgICAgICB9XG4gICAgICAgIGltZ3tcbiAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgfVxuICAgICAgICAudGV4dFJpZ2h0e1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVyIGgxe1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAke2ZvbnQudGl0bGV9O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDU3NnB4KXtcbiAgICAgICAgICBtYWlue1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHRze1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHRMZWZ0e1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbWFnZXtcblxuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dFJpZ2h0e1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb290ZXIgaDF7XG4gICAgICAgICAgICBmb250LXNpemU6IDZyZW07XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogNXB4IDFweCAxNXB4IHJnYmEoMCwgMCwgMCwgLjUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA5OTJweCl7XG4gICAgICAgICAgdGV4dHN7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0TGVmdHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1YlRleHRMZWZ0e1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHRSaWdodHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6ICR7aW5kZXggPT09IDEgPyAnNjVweCcgOiAnMCd9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWFnZXtcbiAgICAgICAgICAgIGZsZXg6IDEgMCAwO1xuICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDMzNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMzVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbGxfY2hhaW5fbGVmdHtcbiAgICAgICAgICAgIGJvdHRvbTogJHtpbmRleCA9PT0gMSA/ICc0OXZoJyA6IGluZGV4ID09PSAyID8gJzQ5dmgnIDogJzQ5dmgnfTtcbiAgICAgICAgICAgIGxlZnQ6ICR7aW5kZXggPT09IDEgPyAnLTYlJyA6IGluZGV4ID09PSAyID8gJy0yMCUnIDogJy0yNSUnfTtcbiAgICAgICAgICAgIHdpZHRoOiAke2luZGV4ID09PSAxID8gJzI2JScgOiBpbmRleCA9PT0gMiA/ICc1MCUnIDogJzQwJSd9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFsbF9jaGFpbl9yaWdodHtcbiAgICAgICAgICAgIHRvcDogJHtpbmRleCA9PT0gMSA/ICc0NC4ydmgnIDogaW5kZXggPT09IDIgPyAnNDB2aCcgOiAnNDB2aCd9O1xuICAgICAgICAgICAgcmlnaHQ6ICR7aW5kZXggPT09IDEgPyAnLTMyJScgOiBpbmRleCA9PT0gMiA/ICctMjMlJyA6ICctMTUlJ307XG4gICAgICAgICAgICB3aWR0aDogJHtpbmRleCA9PT0gMSA/ICc4NSUnIDogaW5kZXggPT09IDIgPyAnNDglJyA6ICcyOCUnfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9vdGVyIGgxe1xuICAgICAgICAgICAgZm9udC1zaXplOiA4cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDhyZW07XG5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogMTIwMHB4KXtcbiAgICAgICAgICAuaW1hZ2V7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHRMZWZ0IGgye1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNzJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHRSaWdodHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6ICR7aW5kZXggPT09IDEgfHwgaW5kZXggPT09IDIgPyAnMjgwcHgnIDogJzI1OXB4J307XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFsbF9jaGFpbl9sZWZ0e1xuICAgICAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgICAgIGJvdHRvbTogJHtpbmRleCA9PT0gMSA/ICc0Ni41dmgnIDogaW5kZXggPT09IDIgPyAnNDd2aCcgOiAnNDd2aCd9O1xuICAgICAgICAgICAgbGVmdDogJHtpbmRleCA9PT0gMSA/ICctMiUnIDogaW5kZXggPT09IDIgPyAnLTglJyA6ICctOCUnfTtcbiAgICAgICAgICAgIHdpZHRoOiAke2luZGV4ID09PSAxID8gJzMwJScgOiBpbmRleCA9PT0gMiA/ICc1NSUnIDogJzM1JSd9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFsbF9jaGFpbl9yaWdodHtcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgICAgICB0b3A6ICR7aW5kZXggPT09IDEgPyAnNTZ2aCcgOiBpbmRleCA9PT0gMiA/ICc1NnZoJyA6ICc1NXZoJ307XG4gICAgICAgICAgICByaWdodDogJHtpbmRleCA9PT0gMSA/ICctMTYlJyA6IGluZGV4ID09PSAyID8gJy0xMiUnIDogJy0xMCUnfTtcbiAgICAgICAgICAgIHdpZHRoOiAke2luZGV4ID09PSAxID8gJzY4JScgOiBpbmRleCA9PT0gMiA/ICc0MyUnIDogJzI4JSd9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb290ZXIgaDF7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgaW5kZXggPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5tYWluLnRoZW1lKTtcbiAgY29uc3QgbWVudSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm1haW4ubmF2LnZpc2libGUpIDtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbcGF1c2UsIHNldFBhdXNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdGhlbWVzID0gW3RoZW1lR3JlZW4sIHRoZW1lUmVkLCB0aGVtZUJsdWVdO1xuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT4ge1xuICAgICAgaWYoIXBhdXNlKXtcbiAgICAgICAgaSA9IGkgPCAyID8gaSArIDEgOiAwO1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IE9OX01BSU5fVEhFTUUsIGluZGV4OiBpIH0pO1xuICAgICAgfVxuICAgIH0sIDE1MDAwKTtcbiAgICByZXR1cm4gKCk9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSxbcGF1c2VdKVxuICBjb25zdCBvbkN1cnNvciA9IChlKSA9PiB7XG4gICAgVHdlZW5NYXgudG8oJyNjdXJzb3InLCAwLjEsIHsgbGVmdDogZS5jbGllbnRYLCB0b3A6IGUuY2xpZW50WSB9KTtcbiAgfVxuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIDxOYXYgb25TdG9wPXtzZXRQYXVzZX0gey4uLnRoZW1lc1tpbmRleF19Lz5cbiAgICAgIHtpbmRleCA9PT0gMCAmJiA8SGVybyBvblN0b3A9e3NldFBhdXNlfSB0aGVtZT17dGhlbWVHcmVlbn0gbWVudT17bWVudX0gLz59XG4gICAgICB7aW5kZXggPT09IDEgJiYgPEhlcm8gb25TdG9wPXtzZXRQYXVzZX0gdGhlbWU9e3RoZW1lUmVkfSBtZW51PXttZW51fSAvPn1cbiAgICAgIHtpbmRleCA9PT0gMiAmJiA8SGVybyBvblN0b3A9e3NldFBhdXNlfSB0aGVtZT17dGhlbWVCbHVlfSBtZW51PXttZW51fSAvPn1cbiAgICAgIHsvKjxkaXYgaWQ9XCJjdXJzb3JcIiAvPiovfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXZ7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIC8vY3Vyc29yOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgI2N1cnNvcntcbiAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgei1pbmRleDogNTAwO1xuICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKTtcbiAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXX0= */
/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/hero.jsx */`));
};

const BallChain = ({
  right,
  id
}) => {
  return __jsx("div", {
    id: id,
    className: "jsx-2920165202" + " " + "ball_chain d-none d-lg-flex"
  }, !right && __jsx("div", {
    className: "jsx-2920165202" + " " + "ball"
  }), __jsx("div", {
    className: "jsx-2920165202" + " " + "chain"
  }), right && __jsx("div", {
    className: "jsx-2920165202" + " " + "ball"
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2920165202"
  }, ".ball_chain.jsx-2920165202{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:0;opacity:0;overflow:hidden;}.ball.jsx-2920165202{width:10px;height:10px;border-radius:50%;background:#fff;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}.chain.jsx-2920165202{height:2px;background:#fff;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9oZXJvLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0SmtCLEFBR3NCLEFBU0EsQUFPQSxXQWZFLEFBU0QsQUFPSSxZQU5FLElBT1AsV0FDYixHQVBrQixnQkFDRiw0QkFYVyw0QkFZM0IscUVBWHFCLDZGQUNYLFFBQ0UsVUFDTSxnQkFDbEIiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL2hlcm8uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBPTl9NQUlOX1RIRU1FIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBjb2xvciwgZm9udCB9IGZyb20gJy4uLy4uL2xheW91dC9tYWluJztcbmltcG9ydCB7IFR3ZWVuTWF4IH0gZnJvbSAnZ3NhcCc7XG5pbXBvcnQgeyB0aGVtZUdyZWVuLCB0aGVtZVJlZCwgdGhlbWVCbHVlIH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgTmF2ID0gKHsgcHJpbSwgc2VjLCBpbWcsIGluZGV4LCBvblN0b3AgfSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IG9uVGhlbWUgPSAoaW5kZXgpID0+IHtcbiAgICBvblN0b3AodHJ1ZSk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBPTl9NQUlOX1RIRU1FLCBpbmRleCB9KTtcbiAgICBzZXRUaW1lb3V0KCgpPT4gb25TdG9wKGZhbHNlKSwgMTUwMDApO1xuICB9XG4gIHJldHVybihcbiAgICA8bmF2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBvblRoZW1lKDApfT4xPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBvblRoZW1lKDEpfT4yPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBvblRoZW1lKDIpfT4zPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiIC8+XG4gICAgICA8aW1nIGlkPVwibG9nb1wiIHNyYz1cIi9zdGF0aWMvbG9nbzIucG5nXCIgYWx0PVwiXCIvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBuYXZ7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHdpZHRoOiA1JTtcbiAgICAgICAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtwcmltfTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgLmxpbmV7XG4gICAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1JTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICB9XG4gICAgICAgIGltZyNsb2dve1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IC41cmVtOztcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgZGl2Lm5hdntcbiAgICAgICAgICBtYXJnaW46IDJyZW0gMDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246bnRoLWNoaWxkKDEpe1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7aW5kZXggPT09IDEgPyAnI2ZmZicgOiAndHJhbnNwYXJlbnQnfTtcbiAgICAgICAgICBjb2xvcjogJHtpbmRleCA9PT0gMSA/IHByaW0gOiAnI2ZmZid9O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpudGgtY2hpbGQoMil7XG4gICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtpbmRleCA9PT0gMiA/ICcjZmZmJyA6ICd0cmFuc3BhcmVudCd9O1xuICAgICAgICAgIGNvbG9yOiAke2luZGV4ID09PSAyID8gcHJpbSA6ICcjZmZmJ307XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOm50aC1jaGlsZCgzKXtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2luZGV4ID09PSAzID8gJyNmZmYnIDogJ3RyYW5zcGFyZW50J307XG4gICAgICAgICAgY29sb3I6ICR7aW5kZXggPT09IDMgPyBwcmltIDogJyNmZmYnfTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBjb2xvcjogJHtwcmltfTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9uYXY+XG4gIClcbn1cblxuY29uc3QgVGV4dCA9ICh7IHRpdGxlLCBzdWJUaXRsZSwgbGVmdCwgcmlnaHQgfSkgPT4ge1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICA8aDI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2gyPlxuICAgICAgICA8cD57c3ViVGl0bGV9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdi5tYWlue1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGRpdi50ZXh0e1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBoMntcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICR7Zm9udC50aXRsZX07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgICBwe1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNTc2cHgpe1xuICAgICAgICAgIGRpdi50ZXh0e1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDJ7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDk5MnB4KXtcbiAgICAgICAgICBkaXYudGV4dHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgye1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiAxMjAwcHgpe1xuICAgICAgICAgIGgye1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNzJweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEJhbGxDaGFpbiA9ICh7IHJpZ2h0LCBpZCB9KSA9PiB7XG4gIHJldHVybihcbiAgICA8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPVwiYmFsbF9jaGFpbiBkLW5vbmUgZC1sZy1mbGV4XCI+XG4gICAgICB7ICFyaWdodCAmJiA8ZGl2IGNsYXNzTmFtZT1cImJhbGxcIiAvPiB9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluXCIgLz5cbiAgICAgIHsgcmlnaHQgJiYgPGRpdiBjbGFzc05hbWU9XCJiYWxsXCIgLz4gfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYmFsbF9jaGFpbntcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgLmJhbGx7XG4gICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFpbntcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBIZXJvID0gKHsgdGhlbWUsIG1lbnUsIG9uU3RvcCB9KSA9PiB7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IGltZywgdGV4dEJvdHRvbSwgcHJpbSwgc2VjLCB0ZXh0TGVmdCwgdGV4dFJpZ2h0LCBpbmRleCB9ID0gdGhlbWU7XG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIFR3ZWVuTWF4LnRvKGAjbGVmdGAsIDIsIHsgd2lkdGg6ICcxMDAlJywgb3BhY2l0eTogMSB9KTtcbiAgICBUd2Vlbk1heC50byhgLnRleHRMZWZ0YCwgMiwgeyBvcGFjaXR5OiAxLCBkZWxheTogMiB9KTtcbiAgICByZXR1cm4gKCk9PiB7XG4gICAgICBUd2Vlbk1heC50byhgLnRleHRMZWZ0YCwgMiwgeyBvcGFjaXR5OiAwIH0pO1xuICAgIH1cbiAgfSxbbWVudV0pXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIFR3ZWVuTWF4LnRvKGAjcmlnaHRgLCAyLCB7IHdpZHRoOiAnMTAwJScsIG9wYWNpdHk6IDEsIGRlbGF5OiAyIH0pO1xuICAgIFR3ZWVuTWF4LnRvKGAudGV4dFJpZ2h0YCwgMiwgeyBvcGFjaXR5OiAxLCBkZWxheTogNCB9KTtcbiAgICByZXR1cm4gKCk9PiB7XG4gICAgICBUd2Vlbk1heC50byhgLnRleHRSaWdodGAsIDIsIHsgb3BhY2l0eTogMCB9KTtcbiAgICB9XG4gIH0sW21lbnVdKVxuXG4gIGNvbnN0IG9uTW92ZSA9IChlKSA9PiB7XG4gICAgVHdlZW5NYXgudG8oJy5tb3ZpbmcnLCAzLCB7IGxlZnQ6IChlLnNjcmVlblggLyA1MCksIHRvcDogKGUuc2NyZWVuWSAvIDMwKSB9KTtcbiAgfVxuXG4gIHJldHVybihcbiAgICA8ZGl2IG9uTW91c2VNb3ZlPXtvbk1vdmV9IGNsYXNzTmFtZT1cImhlcm9cIj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1vdmluZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRzIHRleHRMZWZ0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJUZXh0TGVmdFwiPlxuICAgICAgICAgICAgeyAhbWVudSAmJiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPFRleHQgdGl0bGU9e3RleHRMZWZ0LnRpdGxlfSBzdWJUaXRsZT17dGV4dExlZnQuc3ViVGl0bGV9IGxlZnQgLz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvbGFuZGluZyc+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImQtbm9uZSBkLW1kLWJsb2NrXCI+wr9RdWllcmVzIFNhYmVyIE3DoXM/PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZSBhbmltYXRlZCBmYWRlSW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGxfY2hhaW5fbGVmdFwiPlxuICAgICAgICAgICAgeyAhbWVudSAmJiA8QmFsbENoYWluIGlkPVwibGVmdFwiIC8+IH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGxfY2hhaW5fcmlnaHRcIj5cbiAgICAgICAgICAgIHsgIW1lbnUgJiYgPEJhbGxDaGFpbiBpZD0ncmlnaHQnIHJpZ2h0IC8+IH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9XCJcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRzIHRleHRSaWdodFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7ICFtZW51ICYmIDxUZXh0IHRpdGxlPXt0ZXh0UmlnaHQudGl0bGV9IHN1YlRpdGxlPXt0ZXh0UmlnaHQuc3ViVGl0bGV9IC8+IH1cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZC1tZC1ub25lXCI+wr9RdWllcmVzIFNhYmVyIE3DoXM/PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFuaW1hdGVkIGZhZGVJblVwIGRlbGF5LTRzXCI+e3RleHRCb3R0b219PC9oMT5cbiAgICAgIDwvZm9vdGVyPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaGVyb3tcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAke3ByaW19LCAke3NlY30pO1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIG1haW57XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHRze1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAudGV4dExlZnR7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5zdWJUZXh0TGVmdHtcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBjb2xvcjogJHtwcmltfTtcbiAgICAgICAgfVxuICAgICAgICAuaW1hZ2V7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJhbGxfY2hhaW5fbGVmdHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIGJvdHRvbTogJHtpbmRleCA9PT0gMSA/ICc0OXZoJyA6IGluZGV4ID09PSAyID8gJzUwdmgnIDogJzUwdmgnfTtcbiAgICAgICAgICBsZWZ0OiAke2luZGV4ID09PSAxID8gJy0xMSUnIDogaW5kZXggPT09IDIgPyAnLTEwJScgOiAnLTEyJSd9O1xuICAgICAgICAgIHdpZHRoOiAke2luZGV4ID09PSAxID8gJzMwJScgOiBpbmRleCA9PT0gMiA/ICc0MiUnIDogJzU4JSd9O1xuICAgICAgICB9XG4gICAgICAgIC5iYWxsX2NoYWluX3JpZ2h0e1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6ICR7aW5kZXggPT09IDEgPyAnNDQuMnZoJyA6IGluZGV4ID09PSAyID8gJzQwdmgnIDogJzQwdmgnfTtcbiAgICAgICAgICByaWdodDogJHtpbmRleCA9PT0gMSA/ICctMjAlJyA6IGluZGV4ID09PSAyID8gJy0xMiUnIDogJy0xMiUnfTtcbiAgICAgICAgICB3aWR0aDogJHtpbmRleCA9PT0gMSA/ICc3MyUnIDogaW5kZXggPT09IDIgPyAnNDglJyA6ICcyMCUnfTtcbiAgICAgICAgfVxuICAgICAgICBpbWd7XG4gICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHRSaWdodHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciBoMXtcbiAgICAgICAgICBmb250LWZhbWlseTogJHtmb250LnRpdGxlfTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA1NzZweCl7XG4gICAgICAgICAgbWFpbntcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0c3tcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0TGVmdHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW1hZ2V7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHRSaWdodHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9vdGVyIGgxe1xuICAgICAgICAgICAgZm9udC1zaXplOiA2cmVtO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDVweCAxcHggMTVweCByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogOTkycHgpe1xuICAgICAgICAgIHRleHRze1xuICAgICAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dExlZnR7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdWJUZXh0TGVmdHtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0UmlnaHR7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAke2luZGV4ID09PSAxID8gJzY1cHgnIDogJzAnfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1hZ2V7XG4gICAgICAgICAgICBmbGV4OiAxIDAgMDtcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAzMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogMzM1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYWxsX2NoYWluX2xlZnR7XG4gICAgICAgICAgICBib3R0b206ICR7aW5kZXggPT09IDEgPyAnNDl2aCcgOiBpbmRleCA9PT0gMiA/ICc0OXZoJyA6ICc0OXZoJ307XG4gICAgICAgICAgICBsZWZ0OiAke2luZGV4ID09PSAxID8gJy02JScgOiBpbmRleCA9PT0gMiA/ICctMjAlJyA6ICctMjUlJ307XG4gICAgICAgICAgICB3aWR0aDogJHtpbmRleCA9PT0gMSA/ICcyNiUnIDogaW5kZXggPT09IDIgPyAnNTAlJyA6ICc0MCUnfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbGxfY2hhaW5fcmlnaHR7XG4gICAgICAgICAgICB0b3A6ICR7aW5kZXggPT09IDEgPyAnNDQuMnZoJyA6IGluZGV4ID09PSAyID8gJzQwdmgnIDogJzQwdmgnfTtcbiAgICAgICAgICAgIHJpZ2h0OiAke2luZGV4ID09PSAxID8gJy0zMiUnIDogaW5kZXggPT09IDIgPyAnLTIzJScgOiAnLTE1JSd9O1xuICAgICAgICAgICAgd2lkdGg6ICR7aW5kZXggPT09IDEgPyAnODUlJyA6IGluZGV4ID09PSAyID8gJzQ4JScgOiAnMjglJ307XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvb3RlciBoMXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOHJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4cmVtO1xuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDEyMDBweCl7XG4gICAgICAgICAgLmltYWdle1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0TGVmdCBoMntcbiAgICAgICAgICAgIG1heC13aWR0aDogMjcycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0UmlnaHR7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAke2luZGV4ID09PSAxIHx8IGluZGV4ID09PSAyID8gJzI4MHB4JyA6ICcyNTlweCd9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbGxfY2hhaW5fbGVmdHtcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgICAgICBib3R0b206ICR7aW5kZXggPT09IDEgPyAnNDYuNXZoJyA6IGluZGV4ID09PSAyID8gJzQ3dmgnIDogJzQ3dmgnfTtcbiAgICAgICAgICAgIGxlZnQ6ICR7aW5kZXggPT09IDEgPyAnLTIlJyA6IGluZGV4ID09PSAyID8gJy04JScgOiAnLTglJ307XG4gICAgICAgICAgICB3aWR0aDogJHtpbmRleCA9PT0gMSA/ICczMCUnIDogaW5kZXggPT09IDIgPyAnNTUlJyA6ICczNSUnfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbGxfY2hhaW5fcmlnaHR7XG4gICAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAgICAgdG9wOiAke2luZGV4ID09PSAxID8gJzU2dmgnIDogaW5kZXggPT09IDIgPyAnNTZ2aCcgOiAnNTV2aCd9O1xuICAgICAgICAgICAgcmlnaHQ6ICR7aW5kZXggPT09IDEgPyAnLTE2JScgOiBpbmRleCA9PT0gMiA/ICctMTIlJyA6ICctMTAlJ307XG4gICAgICAgICAgICB3aWR0aDogJHtpbmRleCA9PT0gMSA/ICc2OCUnIDogaW5kZXggPT09IDIgPyAnNDMlJyA6ICcyOCUnfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9vdGVyIGgxe1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubWFpbi50aGVtZSk7XG4gIGNvbnN0IG1lbnUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5tYWluLm5hdi52aXNpYmxlKSA7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW3BhdXNlLCBzZXRQYXVzZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRoZW1lcyA9IFt0aGVtZUdyZWVuLCB0aGVtZVJlZCwgdGhlbWVCbHVlXTtcbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+IHtcbiAgICAgIGlmKCFwYXVzZSl7XG4gICAgICAgIGkgPSBpIDwgMiA/IGkgKyAxIDogMDtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBPTl9NQUlOX1RIRU1FLCBpbmRleDogaSB9KTtcbiAgICAgIH1cbiAgICB9LCAxNTAwMCk7XG4gICAgcmV0dXJuICgpPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sW3BhdXNlXSlcbiAgY29uc3Qgb25DdXJzb3IgPSAoZSkgPT4ge1xuICAgIFR3ZWVuTWF4LnRvKCcjY3Vyc29yJywgMC4xLCB7IGxlZnQ6IGUuY2xpZW50WCwgdG9wOiBlLmNsaWVudFkgfSk7XG4gIH1cbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8TmF2IG9uU3RvcD17c2V0UGF1c2V9IHsuLi50aGVtZXNbaW5kZXhdfS8+XG4gICAgICB7aW5kZXggPT09IDAgJiYgPEhlcm8gb25TdG9wPXtzZXRQYXVzZX0gdGhlbWU9e3RoZW1lR3JlZW59IG1lbnU9e21lbnV9IC8+fVxuICAgICAge2luZGV4ID09PSAxICYmIDxIZXJvIG9uU3RvcD17c2V0UGF1c2V9IHRoZW1lPXt0aGVtZVJlZH0gbWVudT17bWVudX0gLz59XG4gICAgICB7aW5kZXggPT09IDIgJiYgPEhlcm8gb25TdG9wPXtzZXRQYXVzZX0gdGhlbWU9e3RoZW1lQmx1ZX0gbWVudT17bWVudX0gLz59XG4gICAgICB7Lyo8ZGl2IGlkPVwiY3Vyc29yXCIgLz4qL31cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2e1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAvL2N1cnNvcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgICNjdXJzb3J7XG4gICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgIHotaW5kZXg6IDUwMDtcbiAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMyk7XG4gICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/hero.jsx */"));
};

const Hero = ({
  theme,
  menu,
  onStop
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    img,
    textBottom,
    prim,
    sec,
    textLeft,
    textRight,
    index
  } = theme;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    gsap__WEBPACK_IMPORTED_MODULE_6__["TweenMax"].to(`#left`, 2, {
      width: '100%',
      opacity: 1
    });
    gsap__WEBPACK_IMPORTED_MODULE_6__["TweenMax"].to(`.textLeft`, 2, {
      opacity: 1,
      delay: 2
    });
    return () => {
      gsap__WEBPACK_IMPORTED_MODULE_6__["TweenMax"].to(`.textLeft`, 2, {
        opacity: 0
      });
    };
  }, [menu]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    gsap__WEBPACK_IMPORTED_MODULE_6__["TweenMax"].to(`#right`, 2, {
      width: '100%',
      opacity: 1,
      delay: 2
    });
    gsap__WEBPACK_IMPORTED_MODULE_6__["TweenMax"].to(`.textRight`, 2, {
      opacity: 1,
      delay: 4
    });
    return () => {
      gsap__WEBPACK_IMPORTED_MODULE_6__["TweenMax"].to(`.textRight`, 2, {
        opacity: 0
      });
    };
  }, [menu]);

  const onMove = e => {
    gsap__WEBPACK_IMPORTED_MODULE_6__["TweenMax"].to('.moving', 3, {
      left: e.screenX / 50,
      top: e.screenY / 30
    });
  };

  return __jsx("div", {
    onMouseMove: onMove,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "hero"
  }, __jsx("main", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "moving"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "texts textLeft"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "subTextLeft"
  }, !menu && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Text, {
    title: textLeft.title,
    subTitle: textLeft.subTitle,
    left: true
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/landing"
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "d-none d-md-block"
  }, "\xBFQuieres Saber M\xE1s?"))))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "image animated fadeIn"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "ball_chain_left"
  }, !menu && __jsx(BallChain, {
    id: "left"
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "ball_chain_right"
  }, !menu && __jsx(BallChain, {
    id: "right",
    right: true
  })), __jsx("img", {
    src: img,
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]])
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "texts textRight"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]])
  }, !menu && __jsx(Text, {
    title: textRight.title,
    subTitle: textRight.subTitle
  }), __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "d-md-none"
  }, "\xBFQuieres Saber M\xE1s?")))), __jsx("footer", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]])
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "animated fadeInUp delay-4s"
  }, textBottom)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4043052569",
    dynamic: [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']
  }, `.hero.__jsx-style-dynamic-selector{background:linear-gradient(135deg,${prim},${sec});height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:#fff;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;}main.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;}.texts.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.textLeft.__jsx-style-dynamic-selector{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;opacity:0;}.subTextLeft.__jsx-style-dynamic-selector{width:60%;}button.__jsx-style-dynamic-selector{margin-top:1rem;background:transparent;border:2px solid #fff;font-weight:550;font-size:11px;color:#fff;padding:.5rem;-webkit-transition:250ms ease;transition:250ms ease;}button.__jsx-style-dynamic-selector:focus{outline:none;}button.__jsx-style-dynamic-selector:hover{background:#fff;color:${prim};}.image.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;z-index:100;}.ball_chain_left.__jsx-style-dynamic-selector{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;bottom:${index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh'};left:${index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%'};width:${index === 1 ? '30%' : index === 2 ? '42%' : '58%'};}.ball_chain_right.__jsx-style-dynamic-selector{position:absolute;top:${index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh'};right:${index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%'};width:${index === 1 ? '73%' : index === 2 ? '48%' : '20%'};}img.__jsx-style-dynamic-selector{width:250px;height:250px;}.textRight.__jsx-style-dynamic-selector{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0;}footer.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-family:${_layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title};margin:0;text-align:center;position:relative;}@media(min-width:576px){main.__jsx-style-dynamic-selector{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.texts.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;width:25%;}.textLeft.__jsx-style-dynamic-selector{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-left:2rem;}.textRight.__jsx-style-dynamic-selector{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-right:5rem;}footer.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-size:6rem;text-shadow:5px 1px 15px rgba(0,0,0,.5);}}@media(min-width:992px){texts.__jsx-style-dynamic-selector{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}.textLeft.__jsx-style-dynamic-selector{-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}.subTextLeft.__jsx-style-dynamic-selector{width:80%;}.textRight.__jsx-style-dynamic-selector{margin-top:${index === 1 ? '65px' : '0'};}image.__jsx-style-dynamic-selector{-webkit-flex:1 0 0;-ms-flex:1 0 0;flex:1 0 0;width:60%;}img.__jsx-style-dynamic-selector{width:335px;height:335px;position:relative;}.ball_chain_left.__jsx-style-dynamic-selector{bottom:${index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh'};left:${index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%'};width:${index === 1 ? '26%' : index === 2 ? '50%' : '40%'};}.ball_chain_right.__jsx-style-dynamic-selector{top:${index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh'};right:${index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%'};width:${index === 1 ? '85%' : index === 2 ? '48%' : '28%'};}footer.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-size:8rem;line-height:8rem;}}@media(min-width:1200px){.image.__jsx-style-dynamic-selector{position:relative;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;content:" ";}.textLeft.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{max-width:272px;}.textRight.__jsx-style-dynamic-selector{margin-top:${index === 1 || index === 2 ? '280px' : '259px'};}img.__jsx-style-dynamic-selector{width:500px;height:500px;position:relative;top:100px;}.ball_chain_left.__jsx-style-dynamic-selector{z-index:5;bottom:${index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh'};left:${index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%'};width:${index === 1 ? '30%' : index === 2 ? '55%' : '35%'};}.ball_chain_right.__jsx-style-dynamic-selector{z-index:5;top:${index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh'};right:${index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%'};width:${index === 1 ? '68%' : index === 2 ? '43%' : '28%'};}footer.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-size:12rem;line-height:10rem;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9oZXJvLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpUGtCLEFBRzBHLEFBVW5GLEFBTUEsQUFNYSxBQUlmLEFBR00sQUFVSCxBQUdHLEFBSUgsQUFPSyxBQVFBLEFBTU4sQUFJa0IsQUFLVyxBQU9wQixBQUdQLEFBSVcsQUFPQSxBQUlSLEFBTUgsQUFHUyxBQUdYLEFBRytCLEFBRzlCLEFBSUMsQUFLeUIsQUFLSCxBQUtuQixBQU9HLEFBS0YsQUFHeUIsQUFHN0IsQUFNRixBQU1BLEFBTU0sVUFuSnBCLEFBdUZFLEFBaUR1QyxBQU1ILEVBckd2QixBQXdERSxBQWlDQSxDQXJIakIsRUE4RCtDLEFBcUMxQixDQTdHSSxBQWFZLEFBNEduQyxBQXdCb0IsRUF6SFAsQUFRb0IsQUFvRm5CLE9BN0VoQixBQXdEc0IsQUFpQ0EsT0FqQnBCLEVBUHNDLEFBMEN0QyxHQS9DcUMsRUFsR2YsRUE4Q2IsQUF3Q1QsQUFxQ0EsRUE1QkEsQUFpQ1ksQ0FXMEIsQ0FsRDFCLEVBNEN5QixHQXRGbkIsQ0FsQ3BCLEFBbUJxQyxFQWlHbkMsRUF6REEsQUFrQkEsTUF6RmdCLE9BK0NFLENBS2xCLENBbURzQyxDQTVIekIsQUFNQSxBQXNFRCxBQXFCWixDQXNCc0MsRUFuRmYsR0FkUixHQTBJdUIsQ0FuRnRDLENBNkVzQyxJQXJHSCxBQWdCckMsR0FtRWdCLEdBakhILEFBcUJjLENBdERaLElBc0JILEVBb0VVLEFBT0MsRUFhckIsQUFxQ0EsRUFqSGMsR0FqQ0QsQUFzSWIsQ0FoSEYsQ0EyR0UsT0EzRG1CLENBb0duQixDQXhJc0IsQUF3RHRCLENBT0EsQUFtRUEsR0FyR0Ysd0JBckR3QixBQU1BLHdCQW1CeEIsSUFXcUIsT0E3Q0csU0FxRGMsbUJBaUIxQixVQUNaLEtBN0RvQixBQU1DLEVBc0NlLGdCQTNDcEMsaUJBVmEsQ0FzRHdCLE9BVGpCLEdBNUNBLGVBNkNOLEdBNUNLLE9BcURuQixFQVJBLG9CQS9CQSx3REFia0IsZ0JBQ2xCIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9oZXJvLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgT05fTUFJTl9USEVNRSB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnQgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5pbXBvcnQgeyBUd2Vlbk1heCB9IGZyb20gJ2dzYXAnO1xuaW1wb3J0IHsgdGhlbWVHcmVlbiwgdGhlbWVSZWQsIHRoZW1lQmx1ZSB9IGZyb20gJy4uLy4uL2xheW91dC9tYWluJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IE5hdiA9ICh7IHByaW0sIHNlYywgaW1nLCBpbmRleCwgb25TdG9wIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBvblRoZW1lID0gKGluZGV4KSA9PiB7XG4gICAgb25TdG9wKHRydWUpO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogT05fTUFJTl9USEVNRSwgaW5kZXggfSk7XG4gICAgc2V0VGltZW91dCgoKT0+IG9uU3RvcChmYWxzZSksIDE1MDAwKTtcbiAgfVxuICByZXR1cm4oXG4gICAgPG5hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gb25UaGVtZSgwKX0+MTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gb25UaGVtZSgxKX0+MjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gb25UaGVtZSgyKX0+MzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIiAvPlxuICAgICAgPGltZyBpZD1cImxvZ29cIiBzcmM9XCIvc3RhdGljL2xvZ28yLnBuZ1wiIGFsdD1cIlwiLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbmF2e1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB3aWR0aDogNSU7XG4gICAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7cHJpbX07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICB9XG4gICAgICAgIC5saW5le1xuICAgICAgICAgIHdpZHRoOiAycHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNSU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgfVxuICAgICAgICBpbWcjbG9nb3tcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAuNXJlbTs7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIGRpdi5uYXZ7XG4gICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOm50aC1jaGlsZCgxKXtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2luZGV4ID09PSAxID8gJyNmZmYnIDogJ3RyYW5zcGFyZW50J307XG4gICAgICAgICAgY29sb3I6ICR7aW5kZXggPT09IDEgPyBwcmltIDogJyNmZmYnfTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246bnRoLWNoaWxkKDIpe1xuICAgICAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7aW5kZXggPT09IDIgPyAnI2ZmZicgOiAndHJhbnNwYXJlbnQnfTtcbiAgICAgICAgICBjb2xvcjogJHtpbmRleCA9PT0gMiA/IHByaW0gOiAnI2ZmZid9O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpudGgtY2hpbGQoMyl7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtpbmRleCA9PT0gMyA/ICcjZmZmJyA6ICd0cmFuc3BhcmVudCd9O1xuICAgICAgICAgIGNvbG9yOiAke2luZGV4ID09PSAzID8gcHJpbSA6ICcjZmZmJ307XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgY29sb3I6ICR7cHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvbmF2PlxuICApXG59XG5cbmNvbnN0IFRleHQgPSAoeyB0aXRsZSwgc3ViVGl0bGUsIGxlZnQsIHJpZ2h0IH0pID0+IHtcblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgPGgyPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPHA+e3N1YlRpdGxlfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXYubWFpbntcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBkaXYudGV4dHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaDJ7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAke2ZvbnQudGl0bGV9O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgcHtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDU3NnB4KXtcbiAgICAgICAgICBkaXYudGV4dHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgye1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA5OTJweCl7XG4gICAgICAgICAgZGl2LnRleHR7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogMTIwMHB4KXtcbiAgICAgICAgICBoMntcbiAgICAgICAgICAgIG1heC13aWR0aDogMjcycHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBCYWxsQ2hhaW4gPSAoeyByaWdodCwgaWQgfSkgPT4ge1xuICByZXR1cm4oXG4gICAgPGRpdiBpZD17aWR9IGNsYXNzTmFtZT1cImJhbGxfY2hhaW4gZC1ub25lIGQtbGctZmxleFwiPlxuICAgICAgeyAhcmlnaHQgJiYgPGRpdiBjbGFzc05hbWU9XCJiYWxsXCIgLz4gfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpblwiIC8+XG4gICAgICB7IHJpZ2h0ICYmIDxkaXYgY2xhc3NOYW1lPVwiYmFsbFwiIC8+IH1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmJhbGxfY2hhaW57XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIC5iYWxse1xuICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgfVxuICAgICAgICAuY2hhaW57XG4gICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgSGVybyA9ICh7IHRoZW1lLCBtZW51LCBvblN0b3AgfSkgPT4ge1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyBpbWcsIHRleHRCb3R0b20sIHByaW0sIHNlYywgdGV4dExlZnQsIHRleHRSaWdodCwgaW5kZXggfSA9IHRoZW1lO1xuICB1c2VFZmZlY3QoKCk9PntcbiAgICBUd2Vlbk1heC50byhgI2xlZnRgLCAyLCB7IHdpZHRoOiAnMTAwJScsIG9wYWNpdHk6IDEgfSk7XG4gICAgVHdlZW5NYXgudG8oYC50ZXh0TGVmdGAsIDIsIHsgb3BhY2l0eTogMSwgZGVsYXk6IDIgfSk7XG4gICAgcmV0dXJuICgpPT4ge1xuICAgICAgVHdlZW5NYXgudG8oYC50ZXh0TGVmdGAsIDIsIHsgb3BhY2l0eTogMCB9KTtcbiAgICB9XG4gIH0sW21lbnVdKVxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBUd2Vlbk1heC50byhgI3JpZ2h0YCwgMiwgeyB3aWR0aDogJzEwMCUnLCBvcGFjaXR5OiAxLCBkZWxheTogMiB9KTtcbiAgICBUd2Vlbk1heC50byhgLnRleHRSaWdodGAsIDIsIHsgb3BhY2l0eTogMSwgZGVsYXk6IDQgfSk7XG4gICAgcmV0dXJuICgpPT4ge1xuICAgICAgVHdlZW5NYXgudG8oYC50ZXh0UmlnaHRgLCAyLCB7IG9wYWNpdHk6IDAgfSk7XG4gICAgfVxuICB9LFttZW51XSlcblxuICBjb25zdCBvbk1vdmUgPSAoZSkgPT4ge1xuICAgIFR3ZWVuTWF4LnRvKCcubW92aW5nJywgMywgeyBsZWZ0OiAoZS5zY3JlZW5YIC8gNTApLCB0b3A6IChlLnNjcmVlblkgLyAzMCkgfSk7XG4gIH1cblxuICByZXR1cm4oXG4gICAgPGRpdiBvbk1vdXNlTW92ZT17b25Nb3ZlfSBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtb3ZpbmdcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0cyB0ZXh0TGVmdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViVGV4dExlZnRcIj5cbiAgICAgICAgICAgIHsgIW1lbnUgJiYgKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxUZXh0IHRpdGxlPXt0ZXh0TGVmdC50aXRsZX0gc3ViVGl0bGU9e3RleHRMZWZ0LnN1YlRpdGxlfSBsZWZ0IC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2xhbmRpbmcnPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1ibG9ja1wiPsK/UXVpZXJlcyBTYWJlciBNw6FzPzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UgYW5pbWF0ZWQgZmFkZUluXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsX2NoYWluX2xlZnRcIj5cbiAgICAgICAgICAgIHsgIW1lbnUgJiYgPEJhbGxDaGFpbiBpZD1cImxlZnRcIiAvPiB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsX2NoYWluX3JpZ2h0XCI+XG4gICAgICAgICAgICB7ICFtZW51ICYmIDxCYWxsQ2hhaW4gaWQ9J3JpZ2h0JyByaWdodCAvPiB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0cyB0ZXh0UmlnaHRcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgeyAhbWVudSAmJiA8VGV4dCB0aXRsZT17dGV4dFJpZ2h0LnRpdGxlfSBzdWJUaXRsZT17dGV4dFJpZ2h0LnN1YlRpdGxlfSAvPiB9XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImQtbWQtbm9uZVwiPsK/UXVpZXJlcyBTYWJlciBNw6FzPzwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJhbmltYXRlZCBmYWRlSW5VcCBkZWxheS00c1wiPnt0ZXh0Qm90dG9tfTwvaDE+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlcm97XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtwcmltfSwgJHtzZWN9KTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICBtYWlue1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0c3tcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHRMZWZ0e1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICAuc3ViVGV4dExlZnR7XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b257XG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1NTA7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgY29sb3I6ICR7cHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgLmltYWdle1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICB9XG4gICAgICAgIC5iYWxsX2NoYWluX2xlZnR7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBib3R0b206ICR7aW5kZXggPT09IDEgPyAnNDl2aCcgOiBpbmRleCA9PT0gMiA/ICc1MHZoJyA6ICc1MHZoJ307XG4gICAgICAgICAgbGVmdDogJHtpbmRleCA9PT0gMSA/ICctMTElJyA6IGluZGV4ID09PSAyID8gJy0xMCUnIDogJy0xMiUnfTtcbiAgICAgICAgICB3aWR0aDogJHtpbmRleCA9PT0gMSA/ICczMCUnIDogaW5kZXggPT09IDIgPyAnNDIlJyA6ICc1OCUnfTtcbiAgICAgICAgfVxuICAgICAgICAuYmFsbF9jaGFpbl9yaWdodHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAke2luZGV4ID09PSAxID8gJzQ0LjJ2aCcgOiBpbmRleCA9PT0gMiA/ICc0MHZoJyA6ICc0MHZoJ307XG4gICAgICAgICAgcmlnaHQ6ICR7aW5kZXggPT09IDEgPyAnLTIwJScgOiBpbmRleCA9PT0gMiA/ICctMTIlJyA6ICctMTIlJ307XG4gICAgICAgICAgd2lkdGg6ICR7aW5kZXggPT09IDEgPyAnNzMlJyA6IGluZGV4ID09PSAyID8gJzQ4JScgOiAnMjAlJ307XG4gICAgICAgIH1cbiAgICAgICAgaW1ne1xuICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0UmlnaHR7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXIgaDF7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICR7Zm9udC50aXRsZX07XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNTc2cHgpe1xuICAgICAgICAgIG1haW57XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dHN7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dExlZnR7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmltYWdle1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0UmlnaHR7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvb3RlciBoMXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggMXB4IDE1cHggcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDk5MnB4KXtcbiAgICAgICAgICB0ZXh0c3tcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHRMZWZ0e1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3ViVGV4dExlZnR7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dFJpZ2h0e1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogJHtpbmRleCA9PT0gMSA/ICc2NXB4JyA6ICcwJ307XG4gICAgICAgICAgfVxuICAgICAgICAgIGltYWdle1xuICAgICAgICAgICAgZmxleDogMSAwIDA7XG4gICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogMzM1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMzNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFsbF9jaGFpbl9sZWZ0e1xuICAgICAgICAgICAgYm90dG9tOiAke2luZGV4ID09PSAxID8gJzQ5dmgnIDogaW5kZXggPT09IDIgPyAnNDl2aCcgOiAnNDl2aCd9O1xuICAgICAgICAgICAgbGVmdDogJHtpbmRleCA9PT0gMSA/ICctNiUnIDogaW5kZXggPT09IDIgPyAnLTIwJScgOiAnLTI1JSd9O1xuICAgICAgICAgICAgd2lkdGg6ICR7aW5kZXggPT09IDEgPyAnMjYlJyA6IGluZGV4ID09PSAyID8gJzUwJScgOiAnNDAlJ307XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYWxsX2NoYWluX3JpZ2h0e1xuICAgICAgICAgICAgdG9wOiAke2luZGV4ID09PSAxID8gJzQ0LjJ2aCcgOiBpbmRleCA9PT0gMiA/ICc0MHZoJyA6ICc0MHZoJ307XG4gICAgICAgICAgICByaWdodDogJHtpbmRleCA9PT0gMSA/ICctMzIlJyA6IGluZGV4ID09PSAyID8gJy0yMyUnIDogJy0xNSUnfTtcbiAgICAgICAgICAgIHdpZHRoOiAke2luZGV4ID09PSAxID8gJzg1JScgOiBpbmRleCA9PT0gMiA/ICc0OCUnIDogJzI4JSd9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb290ZXIgaDF7XG4gICAgICAgICAgICBmb250LXNpemU6IDhyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogOHJlbTtcblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiAxMjAwcHgpe1xuICAgICAgICAgIC5pbWFnZXtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dExlZnQgaDJ7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI3MnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dFJpZ2h0e1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogJHtpbmRleCA9PT0gMSB8fCBpbmRleCA9PT0gMiA/ICcyODBweCcgOiAnMjU5cHgnfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYWxsX2NoYWluX2xlZnR7XG4gICAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAgICAgYm90dG9tOiAke2luZGV4ID09PSAxID8gJzQ2LjV2aCcgOiBpbmRleCA9PT0gMiA/ICc0N3ZoJyA6ICc0N3ZoJ307XG4gICAgICAgICAgICBsZWZ0OiAke2luZGV4ID09PSAxID8gJy0yJScgOiBpbmRleCA9PT0gMiA/ICctOCUnIDogJy04JSd9O1xuICAgICAgICAgICAgd2lkdGg6ICR7aW5kZXggPT09IDEgPyAnMzAlJyA6IGluZGV4ID09PSAyID8gJzU1JScgOiAnMzUlJ307XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYWxsX2NoYWluX3JpZ2h0e1xuICAgICAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgICAgIHRvcDogJHtpbmRleCA9PT0gMSA/ICc1NnZoJyA6IGluZGV4ID09PSAyID8gJzU2dmgnIDogJzU1dmgnfTtcbiAgICAgICAgICAgIHJpZ2h0OiAke2luZGV4ID09PSAxID8gJy0xNiUnIDogaW5kZXggPT09IDIgPyAnLTEyJScgOiAnLTEwJSd9O1xuICAgICAgICAgICAgd2lkdGg6ICR7aW5kZXggPT09IDEgPyAnNjglJyA6IGluZGV4ID09PSAyID8gJzQzJScgOiAnMjglJ307XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvb3RlciBoMXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTByZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICBjb25zdCBpbmRleCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm1haW4udGhlbWUpO1xuICBjb25zdCBtZW51ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubWFpbi5uYXYudmlzaWJsZSkgO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtwYXVzZSwgc2V0UGF1c2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0aGVtZXMgPSBbdGhlbWVHcmVlbiwgdGhlbWVSZWQsIHRoZW1lQmx1ZV07XG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PiB7XG4gICAgICBpZighcGF1c2Upe1xuICAgICAgICBpID0gaSA8IDIgPyBpICsgMSA6IDA7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogT05fTUFJTl9USEVNRSwgaW5kZXg6IGkgfSk7XG4gICAgICB9XG4gICAgfSwgMTUwMDApO1xuICAgIHJldHVybiAoKT0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LFtwYXVzZV0pXG4gIGNvbnN0IG9uQ3Vyc29yID0gKGUpID0+IHtcbiAgICBUd2Vlbk1heC50bygnI2N1cnNvcicsIDAuMSwgeyBsZWZ0OiBlLmNsaWVudFgsIHRvcDogZS5jbGllbnRZIH0pO1xuICB9XG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPE5hdiBvblN0b3A9e3NldFBhdXNlfSB7Li4udGhlbWVzW2luZGV4XX0vPlxuICAgICAge2luZGV4ID09PSAwICYmIDxIZXJvIG9uU3RvcD17c2V0UGF1c2V9IHRoZW1lPXt0aGVtZUdyZWVufSBtZW51PXttZW51fSAvPn1cbiAgICAgIHtpbmRleCA9PT0gMSAmJiA8SGVybyBvblN0b3A9e3NldFBhdXNlfSB0aGVtZT17dGhlbWVSZWR9IG1lbnU9e21lbnV9IC8+fVxuICAgICAge2luZGV4ID09PSAyICYmIDxIZXJvIG9uU3RvcD17c2V0UGF1c2V9IHRoZW1lPXt0aGVtZUJsdWV9IG1lbnU9e21lbnV9IC8+fVxuICAgICAgey8qPGRpdiBpZD1cImN1cnNvclwiIC8+Ki99XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdntcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgLy9jdXJzb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAjY3Vyc29ye1xuICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICB6LWluZGV4OiA1MDA7XG4gICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpO1xuICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */
/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/hero.jsx */`));
};

const Main = () => {
  const index = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.main.theme);
  const menu = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.main.nav.visible);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: pause,
    1: setPause
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const themes = [_layout_main__WEBPACK_IMPORTED_MODULE_5__["themeGreen"], _layout_main__WEBPACK_IMPORTED_MODULE_5__["themeRed"], _layout_main__WEBPACK_IMPORTED_MODULE_5__["themeBlue"]];
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    let i = 0;
    let interval = setInterval(() => {
      if (!pause) {
        i = i < 2 ? i + 1 : 0;
        dispatch({
          type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["ON_MAIN_THEME"],
          index: i
        });
      }
    }, 15000);
    return () => clearInterval(interval);
  }, [pause]);

  const onCursor = e => {
    gsap__WEBPACK_IMPORTED_MODULE_6__["TweenMax"].to('#cursor', 0.1, {
      left: e.clientX,
      top: e.clientY
    });
  };

  return __jsx("div", {
    className: "jsx-2790436556"
  }, __jsx(Nav, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onStop: setPause
  }, themes[index])), index === 0 && __jsx(Hero, {
    onStop: setPause,
    theme: _layout_main__WEBPACK_IMPORTED_MODULE_5__["themeGreen"],
    menu: menu
  }), index === 1 && __jsx(Hero, {
    onStop: setPause,
    theme: _layout_main__WEBPACK_IMPORTED_MODULE_5__["themeRed"],
    menu: menu
  }), index === 2 && __jsx(Hero, {
    onStop: setPause,
    theme: _layout_main__WEBPACK_IMPORTED_MODULE_5__["themeBlue"],
    menu: menu
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2790436556"
  }, "div.jsx-2790436556{position:relative;}#cursor.jsx-2790436556{width:25px;height:25px;top:0;left:0;border-radius:50%;border:1px solid #fff;z-index:500;content:\" \";position:absolute;background:rgba(255,255,255,.3);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9oZXJvLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxY2tCLEFBRzZCLEFBSVAsV0FDQyxPQUhkLEtBSVEsTUFDQyxPQUNXLGtCQUNJLHNCQUNWLFlBQ0EsWUFDTSxrQkFDaUIsZ0NBQ3JDIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9oZXJvLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgT05fTUFJTl9USEVNRSB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnQgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5pbXBvcnQgeyBUd2Vlbk1heCB9IGZyb20gJ2dzYXAnO1xuaW1wb3J0IHsgdGhlbWVHcmVlbiwgdGhlbWVSZWQsIHRoZW1lQmx1ZSB9IGZyb20gJy4uLy4uL2xheW91dC9tYWluJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IE5hdiA9ICh7IHByaW0sIHNlYywgaW1nLCBpbmRleCwgb25TdG9wIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBvblRoZW1lID0gKGluZGV4KSA9PiB7XG4gICAgb25TdG9wKHRydWUpO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogT05fTUFJTl9USEVNRSwgaW5kZXggfSk7XG4gICAgc2V0VGltZW91dCgoKT0+IG9uU3RvcChmYWxzZSksIDE1MDAwKTtcbiAgfVxuICByZXR1cm4oXG4gICAgPG5hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gb25UaGVtZSgwKX0+MTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gb25UaGVtZSgxKX0+MjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gb25UaGVtZSgyKX0+MzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIiAvPlxuICAgICAgPGltZyBpZD1cImxvZ29cIiBzcmM9XCIvc3RhdGljL2xvZ28yLnBuZ1wiIGFsdD1cIlwiLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbmF2e1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB3aWR0aDogNSU7XG4gICAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7cHJpbX07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICB9XG4gICAgICAgIC5saW5le1xuICAgICAgICAgIHdpZHRoOiAycHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNSU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgfVxuICAgICAgICBpbWcjbG9nb3tcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAuNXJlbTs7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIGRpdi5uYXZ7XG4gICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOm50aC1jaGlsZCgxKXtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2luZGV4ID09PSAxID8gJyNmZmYnIDogJ3RyYW5zcGFyZW50J307XG4gICAgICAgICAgY29sb3I6ICR7aW5kZXggPT09IDEgPyBwcmltIDogJyNmZmYnfTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246bnRoLWNoaWxkKDIpe1xuICAgICAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7aW5kZXggPT09IDIgPyAnI2ZmZicgOiAndHJhbnNwYXJlbnQnfTtcbiAgICAgICAgICBjb2xvcjogJHtpbmRleCA9PT0gMiA/IHByaW0gOiAnI2ZmZid9O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpudGgtY2hpbGQoMyl7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtpbmRleCA9PT0gMyA/ICcjZmZmJyA6ICd0cmFuc3BhcmVudCd9O1xuICAgICAgICAgIGNvbG9yOiAke2luZGV4ID09PSAzID8gcHJpbSA6ICcjZmZmJ307XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgY29sb3I6ICR7cHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvbmF2PlxuICApXG59XG5cbmNvbnN0IFRleHQgPSAoeyB0aXRsZSwgc3ViVGl0bGUsIGxlZnQsIHJpZ2h0IH0pID0+IHtcblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgPGgyPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPHA+e3N1YlRpdGxlfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXYubWFpbntcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBkaXYudGV4dHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaDJ7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAke2ZvbnQudGl0bGV9O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgcHtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDU3NnB4KXtcbiAgICAgICAgICBkaXYudGV4dHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgye1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA5OTJweCl7XG4gICAgICAgICAgZGl2LnRleHR7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogMTIwMHB4KXtcbiAgICAgICAgICBoMntcbiAgICAgICAgICAgIG1heC13aWR0aDogMjcycHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBCYWxsQ2hhaW4gPSAoeyByaWdodCwgaWQgfSkgPT4ge1xuICByZXR1cm4oXG4gICAgPGRpdiBpZD17aWR9IGNsYXNzTmFtZT1cImJhbGxfY2hhaW4gZC1ub25lIGQtbGctZmxleFwiPlxuICAgICAgeyAhcmlnaHQgJiYgPGRpdiBjbGFzc05hbWU9XCJiYWxsXCIgLz4gfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpblwiIC8+XG4gICAgICB7IHJpZ2h0ICYmIDxkaXYgY2xhc3NOYW1lPVwiYmFsbFwiIC8+IH1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmJhbGxfY2hhaW57XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIC5iYWxse1xuICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgfVxuICAgICAgICAuY2hhaW57XG4gICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgSGVybyA9ICh7IHRoZW1lLCBtZW51LCBvblN0b3AgfSkgPT4ge1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyBpbWcsIHRleHRCb3R0b20sIHByaW0sIHNlYywgdGV4dExlZnQsIHRleHRSaWdodCwgaW5kZXggfSA9IHRoZW1lO1xuICB1c2VFZmZlY3QoKCk9PntcbiAgICBUd2Vlbk1heC50byhgI2xlZnRgLCAyLCB7IHdpZHRoOiAnMTAwJScsIG9wYWNpdHk6IDEgfSk7XG4gICAgVHdlZW5NYXgudG8oYC50ZXh0TGVmdGAsIDIsIHsgb3BhY2l0eTogMSwgZGVsYXk6IDIgfSk7XG4gICAgcmV0dXJuICgpPT4ge1xuICAgICAgVHdlZW5NYXgudG8oYC50ZXh0TGVmdGAsIDIsIHsgb3BhY2l0eTogMCB9KTtcbiAgICB9XG4gIH0sW21lbnVdKVxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBUd2Vlbk1heC50byhgI3JpZ2h0YCwgMiwgeyB3aWR0aDogJzEwMCUnLCBvcGFjaXR5OiAxLCBkZWxheTogMiB9KTtcbiAgICBUd2Vlbk1heC50byhgLnRleHRSaWdodGAsIDIsIHsgb3BhY2l0eTogMSwgZGVsYXk6IDQgfSk7XG4gICAgcmV0dXJuICgpPT4ge1xuICAgICAgVHdlZW5NYXgudG8oYC50ZXh0UmlnaHRgLCAyLCB7IG9wYWNpdHk6IDAgfSk7XG4gICAgfVxuICB9LFttZW51XSlcblxuICBjb25zdCBvbk1vdmUgPSAoZSkgPT4ge1xuICAgIFR3ZWVuTWF4LnRvKCcubW92aW5nJywgMywgeyBsZWZ0OiAoZS5zY3JlZW5YIC8gNTApLCB0b3A6IChlLnNjcmVlblkgLyAzMCkgfSk7XG4gIH1cblxuICByZXR1cm4oXG4gICAgPGRpdiBvbk1vdXNlTW92ZT17b25Nb3ZlfSBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtb3ZpbmdcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0cyB0ZXh0TGVmdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViVGV4dExlZnRcIj5cbiAgICAgICAgICAgIHsgIW1lbnUgJiYgKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxUZXh0IHRpdGxlPXt0ZXh0TGVmdC50aXRsZX0gc3ViVGl0bGU9e3RleHRMZWZ0LnN1YlRpdGxlfSBsZWZ0IC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2xhbmRpbmcnPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1ibG9ja1wiPsK/UXVpZXJlcyBTYWJlciBNw6FzPzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UgYW5pbWF0ZWQgZmFkZUluXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsX2NoYWluX2xlZnRcIj5cbiAgICAgICAgICAgIHsgIW1lbnUgJiYgPEJhbGxDaGFpbiBpZD1cImxlZnRcIiAvPiB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsX2NoYWluX3JpZ2h0XCI+XG4gICAgICAgICAgICB7ICFtZW51ICYmIDxCYWxsQ2hhaW4gaWQ9J3JpZ2h0JyByaWdodCAvPiB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0cyB0ZXh0UmlnaHRcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgeyAhbWVudSAmJiA8VGV4dCB0aXRsZT17dGV4dFJpZ2h0LnRpdGxlfSBzdWJUaXRsZT17dGV4dFJpZ2h0LnN1YlRpdGxlfSAvPiB9XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImQtbWQtbm9uZVwiPsK/UXVpZXJlcyBTYWJlciBNw6FzPzwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJhbmltYXRlZCBmYWRlSW5VcCBkZWxheS00c1wiPnt0ZXh0Qm90dG9tfTwvaDE+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlcm97XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtwcmltfSwgJHtzZWN9KTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICBtYWlue1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0c3tcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHRMZWZ0e1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICAuc3ViVGV4dExlZnR7XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b257XG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1NTA7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgY29sb3I6ICR7cHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgLmltYWdle1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICB9XG4gICAgICAgIC5iYWxsX2NoYWluX2xlZnR7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBib3R0b206ICR7aW5kZXggPT09IDEgPyAnNDl2aCcgOiBpbmRleCA9PT0gMiA/ICc1MHZoJyA6ICc1MHZoJ307XG4gICAgICAgICAgbGVmdDogJHtpbmRleCA9PT0gMSA/ICctMTElJyA6IGluZGV4ID09PSAyID8gJy0xMCUnIDogJy0xMiUnfTtcbiAgICAgICAgICB3aWR0aDogJHtpbmRleCA9PT0gMSA/ICczMCUnIDogaW5kZXggPT09IDIgPyAnNDIlJyA6ICc1OCUnfTtcbiAgICAgICAgfVxuICAgICAgICAuYmFsbF9jaGFpbl9yaWdodHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAke2luZGV4ID09PSAxID8gJzQ0LjJ2aCcgOiBpbmRleCA9PT0gMiA/ICc0MHZoJyA6ICc0MHZoJ307XG4gICAgICAgICAgcmlnaHQ6ICR7aW5kZXggPT09IDEgPyAnLTIwJScgOiBpbmRleCA9PT0gMiA/ICctMTIlJyA6ICctMTIlJ307XG4gICAgICAgICAgd2lkdGg6ICR7aW5kZXggPT09IDEgPyAnNzMlJyA6IGluZGV4ID09PSAyID8gJzQ4JScgOiAnMjAlJ307XG4gICAgICAgIH1cbiAgICAgICAgaW1ne1xuICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0UmlnaHR7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXIgaDF7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICR7Zm9udC50aXRsZX07XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNTc2cHgpe1xuICAgICAgICAgIG1haW57XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dHN7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dExlZnR7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmltYWdle1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0UmlnaHR7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvb3RlciBoMXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggMXB4IDE1cHggcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDk5MnB4KXtcbiAgICAgICAgICB0ZXh0c3tcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHRMZWZ0e1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3ViVGV4dExlZnR7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dFJpZ2h0e1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogJHtpbmRleCA9PT0gMSA/ICc2NXB4JyA6ICcwJ307XG4gICAgICAgICAgfVxuICAgICAgICAgIGltYWdle1xuICAgICAgICAgICAgZmxleDogMSAwIDA7XG4gICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogMzM1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMzNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFsbF9jaGFpbl9sZWZ0e1xuICAgICAgICAgICAgYm90dG9tOiAke2luZGV4ID09PSAxID8gJzQ5dmgnIDogaW5kZXggPT09IDIgPyAnNDl2aCcgOiAnNDl2aCd9O1xuICAgICAgICAgICAgbGVmdDogJHtpbmRleCA9PT0gMSA/ICctNiUnIDogaW5kZXggPT09IDIgPyAnLTIwJScgOiAnLTI1JSd9O1xuICAgICAgICAgICAgd2lkdGg6ICR7aW5kZXggPT09IDEgPyAnMjYlJyA6IGluZGV4ID09PSAyID8gJzUwJScgOiAnNDAlJ307XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYWxsX2NoYWluX3JpZ2h0e1xuICAgICAgICAgICAgdG9wOiAke2luZGV4ID09PSAxID8gJzQ0LjJ2aCcgOiBpbmRleCA9PT0gMiA/ICc0MHZoJyA6ICc0MHZoJ307XG4gICAgICAgICAgICByaWdodDogJHtpbmRleCA9PT0gMSA/ICctMzIlJyA6IGluZGV4ID09PSAyID8gJy0yMyUnIDogJy0xNSUnfTtcbiAgICAgICAgICAgIHdpZHRoOiAke2luZGV4ID09PSAxID8gJzg1JScgOiBpbmRleCA9PT0gMiA/ICc0OCUnIDogJzI4JSd9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb290ZXIgaDF7XG4gICAgICAgICAgICBmb250LXNpemU6IDhyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogOHJlbTtcblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiAxMjAwcHgpe1xuICAgICAgICAgIC5pbWFnZXtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dExlZnQgaDJ7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI3MnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dFJpZ2h0e1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogJHtpbmRleCA9PT0gMSB8fCBpbmRleCA9PT0gMiA/ICcyODBweCcgOiAnMjU5cHgnfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYWxsX2NoYWluX2xlZnR7XG4gICAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAgICAgYm90dG9tOiAke2luZGV4ID09PSAxID8gJzQ2LjV2aCcgOiBpbmRleCA9PT0gMiA/ICc0N3ZoJyA6ICc0N3ZoJ307XG4gICAgICAgICAgICBsZWZ0OiAke2luZGV4ID09PSAxID8gJy0yJScgOiBpbmRleCA9PT0gMiA/ICctOCUnIDogJy04JSd9O1xuICAgICAgICAgICAgd2lkdGg6ICR7aW5kZXggPT09IDEgPyAnMzAlJyA6IGluZGV4ID09PSAyID8gJzU1JScgOiAnMzUlJ307XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYWxsX2NoYWluX3JpZ2h0e1xuICAgICAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgICAgIHRvcDogJHtpbmRleCA9PT0gMSA/ICc1NnZoJyA6IGluZGV4ID09PSAyID8gJzU2dmgnIDogJzU1dmgnfTtcbiAgICAgICAgICAgIHJpZ2h0OiAke2luZGV4ID09PSAxID8gJy0xNiUnIDogaW5kZXggPT09IDIgPyAnLTEyJScgOiAnLTEwJSd9O1xuICAgICAgICAgICAgd2lkdGg6ICR7aW5kZXggPT09IDEgPyAnNjglJyA6IGluZGV4ID09PSAyID8gJzQzJScgOiAnMjglJ307XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvb3RlciBoMXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTByZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICBjb25zdCBpbmRleCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm1haW4udGhlbWUpO1xuICBjb25zdCBtZW51ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubWFpbi5uYXYudmlzaWJsZSkgO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtwYXVzZSwgc2V0UGF1c2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0aGVtZXMgPSBbdGhlbWVHcmVlbiwgdGhlbWVSZWQsIHRoZW1lQmx1ZV07XG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PiB7XG4gICAgICBpZighcGF1c2Upe1xuICAgICAgICBpID0gaSA8IDIgPyBpICsgMSA6IDA7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogT05fTUFJTl9USEVNRSwgaW5kZXg6IGkgfSk7XG4gICAgICB9XG4gICAgfSwgMTUwMDApO1xuICAgIHJldHVybiAoKT0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LFtwYXVzZV0pXG4gIGNvbnN0IG9uQ3Vyc29yID0gKGUpID0+IHtcbiAgICBUd2Vlbk1heC50bygnI2N1cnNvcicsIDAuMSwgeyBsZWZ0OiBlLmNsaWVudFgsIHRvcDogZS5jbGllbnRZIH0pO1xuICB9XG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPE5hdiBvblN0b3A9e3NldFBhdXNlfSB7Li4udGhlbWVzW2luZGV4XX0vPlxuICAgICAge2luZGV4ID09PSAwICYmIDxIZXJvIG9uU3RvcD17c2V0UGF1c2V9IHRoZW1lPXt0aGVtZUdyZWVufSBtZW51PXttZW51fSAvPn1cbiAgICAgIHtpbmRleCA9PT0gMSAmJiA8SGVybyBvblN0b3A9e3NldFBhdXNlfSB0aGVtZT17dGhlbWVSZWR9IG1lbnU9e21lbnV9IC8+fVxuICAgICAge2luZGV4ID09PSAyICYmIDxIZXJvIG9uU3RvcD17c2V0UGF1c2V9IHRoZW1lPXt0aGVtZUJsdWV9IG1lbnU9e21lbnV9IC8+fVxuICAgICAgey8qPGRpdiBpZD1cImN1cnNvclwiIC8+Ki99XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdntcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgLy9jdXJzb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAjY3Vyc29ye1xuICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICB6LWluZGV4OiA1MDA7XG4gICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpO1xuICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/hero.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./components/main/layout.jsx":
/*!************************************!*\
  !*** ./components/main/layout.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var _base_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base.scss */ "./components/main/base.scss");
/* harmony import */ var _base_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_base_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header */ "./components/main/header.jsx");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu */ "./components/main/menu.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _layout_var__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../layout/var */ "./layout/var.js");
/* harmony import */ var _main_title__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../main/title */ "./components/main/title.jsx");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


 //import '../../node_modules/bootstrap/scss/bootstrap.scss';











const Login = ({
  prim,
  title,
  event,
  setDonate,
  setLogin
}) => {
  const {
    0: mail,
    1: setMail
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('');
  const {
    0: pass,
    1: setPass
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('');
  const {
    0: mailPop,
    1: setMailPop
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: passPop,
    1: setPassPop
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: disable,
    1: setDisable
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);

  const onSubmit = async e => {
    try {
      e.preventDefault();
      setDisable(true);
      const data = {
        mail,
        pass
      };
      const res = await axios__WEBPACK_IMPORTED_MODULE_11___default.a.post('/user/login', data);

      if (res.data === 'mail') {
        setMailPop(true);
        return setDisable(false);
      }

      if (res.data === 'pass') {
        setPassPop(true);
        return setDisable(false);
      }

      ;

      if (event) {
        setLogin(false);
        setDonate(true);
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push(`/perfil/${res.data}`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return __jsx("form", {
    onSubmit: onSubmit,
    method: "POST",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["963076289", [prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["963076289", [prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["963076289", [prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }, "Iniciar Sesion")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["963076289", [prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]]) + " " + "body"
  }, __jsx("label", {
    htmlFor: "mail",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["963076289", [prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["963076289", [prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }, "Usuario"), __jsx("input", {
    disabled: disable,
    onFocus: () => setMailPop(false),
    value: mail,
    onChange: e => setMail(e.currentTarget.value),
    type: "text",
    id: "mail",
    name: "mail",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["963076289", [prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Popover"], {
    target: "mail",
    placement: "right",
    isOpen: mailPop
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["PopoverBody"], null, "El correo no es valido"))), __jsx("label", {
    htmlFor: "pass",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["963076289", [prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["963076289", [prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }, "contrase\xF1a"), __jsx("input", {
    disabled: disable,
    onFocus: () => setPassPop(false),
    value: pass,
    onChange: e => setPass(e.currentTarget.value),
    type: "password",
    name: "pass",
    id: "pass",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["963076289", [prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Popover"], {
    target: "pass",
    placement: "right",
    isOpen: passPop
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["PopoverBody"], null, "La contrase\xF1a no es valida")))), __jsx("footer", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["963076289", [prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }, disable ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Spinner"], {
    color: title === 'siembra' ? 'main-green' : title === 'ayuda' ? 'main-red' : 'main-blue'
  }) : __jsx("button", {
    disabled: disable,
    type: "submit",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["963076289", [prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }, "Login")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "963076289",
    dynamic: [prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]
  }, `form.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;}header.__jsx-style-dynamic-selector{color:${prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim};margin-top:.5rem;}.body.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}label.__jsx-style-dynamic-selector:nth-child(1){margin-bottom:1rem;}label.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;color:rgba(0,0,0,.2);}input.__jsx-style-dynamic-selector{border:none;border-bottom:2px solid rgba(0,0,0,.2);}input.__jsx-style-dynamic-selector:focus{outline:none;border-color:${prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim};}footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding:.5rem;}button.__jsx-style-dynamic-selector{background:transparent;border:2px solid ${prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim};text-transform:uppercase;-webkit-transition:250ms ease;transition:250ms ease;color:${prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim};}button.__jsx-style-dynamic-selector:focus{outline:none;}button.__jsx-style-dynamic-selector:hover{background:${prim || _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim};color:#fff;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9sYXlvdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFa0IsQUFHd0IsQUFPc0IsQUFJeEIsQUFPUSxBQUdWLEFBSUcsQUFJQyxBQUlBLEFBTVUsQUFPVixBQUcyQixTQTNCaEIsRUFWWCxDQWM2QixDQUlBLEFBaUI1QyxNQTVCQSxJQXFCZ0QsT0FqQmhELEtBZm1CLEtBMENOLFdBdkJiLEFBd0JBLENBMUNBLEdBc0JBLGNBVTJCLEtBeENILEFBaUNYLFdBckJXLEFBc0JHLFNBT0gsb0RBQ2EsTUF6Q0wsV0FZUCxrQkE4QnpCLENBUmdCLGNBQ2hCLGtFQXRCcUIsS0FaQSx3RkFhckIsS0FaYyxZQUNkIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9sYXlvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBPTl9FVkVOVCB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuLy9pbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9ib290c3RyYXAuc2Nzcyc7XG5pbXBvcnQgJy4vYmFzZS5zY3NzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBQb3BvdmVyLCBQb3BvdmVyQm9keSwgU3Bpbm5lciwgTW9kYWwgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IGNvbG9yLCBmb250IH0gZnJvbSAnLi4vLi4vbGF5b3V0L3Zhcic7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vbWFpbi90aXRsZSc7XG5cbmNvbnN0IExvZ2luID0gKHsgcHJpbSwgdGl0bGUsIGV2ZW50LCBzZXREb25hdGUsIHNldExvZ2luIH0pID0+IHtcblxuICBjb25zdCBbbWFpbCwgc2V0TWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwYXNzLCBzZXRQYXNzXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW21haWxQb3AsIHNldE1haWxQb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcGFzc1BvcCwgc2V0UGFzc1BvcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkaXNhYmxlLCBzZXREaXNhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jKGUpID0+IHtcbiAgICB0cnl7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBzZXREaXNhYmxlKHRydWUpO1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgbWFpbCxcbiAgICAgICAgcGFzc1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKTtcbiAgICAgIGlmKHJlcy5kYXRhID09PSAnbWFpbCcpIHtcbiAgICAgICAgIHNldE1haWxQb3AodHJ1ZSk7XG4gICAgICAgICByZXR1cm4gc2V0RGlzYWJsZShmYWxzZSk7XG4gICAgICB9XG4gICAgICBpZihyZXMuZGF0YSA9PT0gJ3Bhc3MnKXtcbiAgICAgICAgc2V0UGFzc1BvcCh0cnVlKVxuICAgICAgICByZXR1cm4gc2V0RGlzYWJsZShmYWxzZSk7XG4gICAgICB9O1xuICAgICAgaWYoZXZlbnQpe1xuICAgICAgICBzZXRMb2dpbihmYWxzZSk7XG4gICAgICAgIHNldERvbmF0ZSh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFJvdXRlci5wdXNoKGAvcGVyZmlsLyR7cmVzLmRhdGF9YCk7XG4gICAgICB9XG4gICAgfWNhdGNoKGUpe1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gbWV0aG9kPVwiUE9TVFwiPlxuICAgICAgPGhlYWRlcj48aDE+SW5pY2lhciBTZXNpb248L2gxPjwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWFpbFwiPlxuICAgICAgICAgIDxwPlVzdWFyaW88L3A+XG4gICAgICAgICAgPGlucHV0IGRpc2FibGVkPXtkaXNhYmxlfSBvbkZvY3VzPXsoKT0+IHNldE1haWxQb3AoZmFsc2UpfSB2YWx1ZT17bWFpbH0gb25DaGFuZ2U9eyhlKT0+IHNldE1haWwoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX0gdHlwZT1cInRleHRcIiBpZD1cIm1haWxcIiBuYW1lPVwibWFpbFwiLz5cbiAgICAgICAgICA8UG9wb3ZlciB0YXJnZXQ9XCJtYWlsXCIgcGxhY2VtZW50PVwicmlnaHRcIiBpc09wZW49e21haWxQb3B9PlxuICAgICAgICAgICAgPFBvcG92ZXJCb2R5PkVsIGNvcnJlbyBubyBlcyB2YWxpZG88L1BvcG92ZXJCb2R5PlxuICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzXCI+XG4gICAgICAgICAgPHA+Y29udHJhc2XDsWE8L3A+XG4gICAgICAgICAgPGlucHV0IGRpc2FibGVkPXtkaXNhYmxlfSBvbkZvY3VzPXsoKT0+IHNldFBhc3NQb3AoZmFsc2UpfSB2YWx1ZT17cGFzc30gb25DaGFuZ2U9eyhlKT0+IHNldFBhc3MoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX0gdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3NcIiBpZD1cInBhc3NcIi8+XG4gICAgICAgICAgPFBvcG92ZXIgdGFyZ2V0PVwicGFzc1wiIHBsYWNlbWVudD1cInJpZ2h0XCIgaXNPcGVuPXtwYXNzUG9wfT5cbiAgICAgICAgICAgIDxQb3BvdmVyQm9keT5MYSBjb250cmFzZcOxYSBubyBlcyB2YWxpZGE8L1BvcG92ZXJCb2R5PlxuICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAge1xuICAgICAgICAgIGRpc2FibGUgPyA8U3Bpbm5lciBjb2xvcj17IHRpdGxlID09PSAnc2llbWJyYScgPyAnbWFpbi1ncmVlbicgOiB0aXRsZSA9PT0gJ2F5dWRhJyA/ICdtYWluLXJlZCcgOiAnbWFpbi1ibHVlJyB9IC8+IDogPGJ1dHRvbiBkaXNhYmxlZD17ZGlzYWJsZX0gdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgIH1cbiAgICAgIDwvZm9vdGVyPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBmb3Jte1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgIGNvbG9yOiAke3ByaW0gfHwgY29sb3IucHJpbX07XG4gICAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHl7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWw6bnRoLWNoaWxkKDEpe1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwgcHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjIpO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0e1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQ6Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7cHJpbSB8fCBjb2xvci5wcmltfTtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke3ByaW0gfHwgY29sb3IucHJpbX07XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgIGNvbG9yOiAke3ByaW0gfHwgY29sb3IucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7cHJpbSB8fCBjb2xvci5wcmltfTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9mb3JtPlxuICApXG59XG5cbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVJlZHVjZXIoKHN0YXRlLCBuZXh0KSA9PiAoeyAuLi5zdGF0ZSwgLi4ubmV4dCB9KSx7XG4gICAgbmFtZTogJycsXG4gICAgbGFzdE5hbWU6ICcnLFxuICAgIG1haWw6ICcnLFxuICAgIHBhc3M6ICcnLFxuICAgIGJpcnRoZGF5OiAnJyxcbiAgICBnZW5yZTogJ011amVyJyxcbiAgfSlcbiAgY29uc3QgW2Rpc2FibGUsIHNldERpc2FibGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbWFpbFBvcCwgc2V0TWFpbFBvcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyhlKSA9PiB7XG4gICAgdHJ5e1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZGF0YSA9IHZhbHVlO1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnL3VzZXIvcmVnaXN0ZXInLCBkYXRhKTtcbiAgICAgIGlmKHJlcy5kYXRhID09PSAnbWFpbCcpe1xuICAgICAgICBzZXRNYWlsUG9wKHRydWUpO1xuICAgICAgICByZXR1cm4gc2V0RGlzYWJsZShmYWxzZSk7XG4gICAgICB9XG4gICAgICBSb3V0ZXIucHVzaChgL3BlcmZpbC8ke3Jlcy5kYXRhfWApO1xuICAgIH1jYXRjaChlKXtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybihcbiAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgIDxoZWFkZXI+PGgxPlJlZ2lzdHJvPC9oMT48L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bGxOYW1lXCI+XG4gICAgICAgICAgPGlucHV0IGRpc2FibGVkPXtkaXNhYmxlfSB2YWx1ZT17dmFsdWUubmFtZX0gb25DaGFuZ2UgPSB7KGUpPT4gc2V0VmFsdWUoeyBuYW1lOiBlLmN1cnJlbnRUYXJnZXQudmFsdWUgfSl9IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOb21icmVcIi8+XG4gICAgICAgICAgPGlucHV0IGRpc2FibGVkPXtkaXNhYmxlfSB2YWx1ZT17dmFsdWUubGFzdE5hbWV9IG9uQ2hhbmdlID0geyhlKT0+IHNldFZhbHVlKHsgbGFzdE5hbWU6IGUuY3VycmVudFRhcmdldC52YWx1ZSB9KX0gdHlwZT1cInRleHRcIiBpZD1cImxhc3ROYW1lXCIgcGxhY2Vob2xkZXI9XCJBcGVsbGlkb1wiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZGlzYWJsZX0gdmFsdWU9e3ZhbHVlLm1haWx9IG9uQ2hhbmdlID0geyhlKT0+IHNldFZhbHVlKHsgbWFpbDogZS5jdXJyZW50VGFyZ2V0LnZhbHVlIH0pfSBvbkZvY3VzPXsoKT0+IHNldE1haWxQb3AoZmFsc2UpfSB0eXBlPVwidGV4dFwiIGlkPVwibWFpbFwiIHBsYWNlaG9sZGVyPVwiQ29ycmVvIGVsZWN0csOzbmljb1wiLz5cbiAgICAgICAgPFBvcG92ZXIgcGxhY2VtZW50PVwiYm90dG9tXCIgdGFyZ2V0PVwibWFpbFwiIGlzT3Blbj17bWFpbFBvcH0+XG4gICAgICAgICAgPFBvcG92ZXJCb2R5PllhIGV4aXN0ZSB1bmEgY3VlbnRhIGNvbiBlc3RlIGNvcnJlbzwvUG9wb3ZlckJvZHk+XG4gICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgPGlucHV0IGRpc2FibGVkPXtkaXNhYmxlfSB2YWx1ZT17dmFsdWUucGFzc30gb25DaGFuZ2UgPSB7KGUpPT4gc2V0VmFsdWUoeyBwYXNzOiBlLmN1cnJlbnRUYXJnZXQudmFsdWUgfSl9IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc1wiIHBsYWNlaG9sZGVyPVwiY29udHJhc2XDsWFcIi8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlydGhfc2V4XCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiaXJ0aGRheVwiPlxuICAgICAgICAgICAgPHA+Q3VtcGxlYcOxb3M8L3A+XG4gICAgICAgICAgICA8aW5wdXQgZGlzYWJsZWQ9e2Rpc2FibGV9IHZhbHVlPXt2YWx1ZS5iaXJ0aGRheX0gb25DaGFuZ2UgPSB7KGUpPT4gc2V0VmFsdWUoeyBiaXJ0aGRheTogZS5jdXJyZW50VGFyZ2V0LnZhbHVlIH0pfSB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJiaXJ0aGRheVwiIGlkPVwiYmlydGhkYXlcIi8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdlbnJlXCI+XG4gICAgICAgICAgICA8cD5HZW5lcm88L3A+XG4gICAgICAgICAgICA8c2VsZWN0IGRpc2FibGVkPXtkaXNhYmxlfSB2YWx1ZT17dmFsdWUuZ2VucmV9IG9uQ2hhbmdlID0geyhlKT0+IHNldFZhbHVlKHsgZ2VucmU6IGUuY3VycmVudFRhcmdldC52YWx1ZSB9KX0gbmFtZT1cImdlbnJlXCIgaWQ9XCJnZW5yZVwiPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibXVqZXJcIj5NdWplcjwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaG9tYnJlXCI+SG9tYnJlPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvdHJvXCI+T3Rybzwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpPT4gT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2godmFsID0+IHNldFZhbHVlKHsgW3ZhbF06ICcnIH0pKX0+Y2FuY2VsYXI8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RW52aWFyPC9idXR0b24+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZm9ybXtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yLnByaW19O1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5e1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0W3R5cGU9XCJkYXRlXCJde1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjIpO1xuICAgICAgICB9XG4gICAgICAgIC5mdWxsTmFtZXtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmZ1bGxOYW1lIGlucHV0e1xuICAgICAgICB9XG4gICAgICAgIC5mdWxsTmFtZSBpbnB1dDpudGgtY2hpbGQoMil7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5iaXJ0aF9zZXh7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yLnByaW19O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y29sb3IucHJpbX07XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3IucHJpbX07XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5jb25zdCBMb2dSZWcgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9jb250XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWJsaXNoXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWluX2NvbnR7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLm1haW57XG4gICAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGFuaW1hdGlvbjogZG93biA2MDBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5wdWJsaXNoe1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnL3N0YXRpYy9yYW5kb20vcjE2LmpwZycpdG9wIGNlbnRlciBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgfVxuICAgICAgICAuY29udHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgZG93bntcbiAgICAgICAgICAwJXtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICA1MCV7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDEwMCV7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNeU1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBtZW51ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubWFpbi5uYXYudmlzaWJsZSk7XG4gIGNvbnN0IG1haW4gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5tYWluLm5hdik7XG4gIGNvbnN0IHsgbG9naW4sIHJlZ2lzdGVyIH0gPSBtYWluO1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxuICAgICAge1xuICAgICAgICBsb2dpbiAmJiA8TG9nUmVnPjxMb2dpbiAvPjwvTG9nUmVnPlxuICAgICAgfVxuICAgICAge1xuICAgICAgICByZWdpc3RlciAmJiA8TG9nUmVnPjxSZWdpc3RlciAvPjwvTG9nUmVnPlxuICAgICAgfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubW9kYWx7XG4gICAgICAgICAgZGlzcGxheTogJHttZW51ID8gJ2Jsb2NrJyA6ICdub25lJ307XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICAgICAgICB6LWluZGV4OiAxNTA7XG4gICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgRXZlbnRIb21lID0gKHsgY3VycmVudCwgc2V0RG9uYXRlIH0pID0+IHtcblxuICByZXR1cm4oXG4gICAgPD5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPntjdXJyZW50LnRpdGxlfTwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViVGl0bGVcIj57Y3VycmVudC5zdWJUaXRsZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgPHA+e2N1cnJlbnQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8YnV0dG9uPlBhcnRpY2lwYXI8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IHNldERvbmF0ZSh0cnVlKX0+RG9uYXI8L2J1dHRvbj5cbiAgICAgIDwvZm9vdGVyPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIGRpdntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIG1hcmdpbjogNXJlbSAwIDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgaDEsIHB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciBoMSwgLnN1YlRpdGxle1xuICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgIGNvbG9yOiAke2N1cnJlbnQucHJpbX07XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b257XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtjdXJyZW50LnByaW19O1xuICAgICAgICAgIGNvbG9yOiAke2N1cnJlbnQucHJpbX07XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjdXJyZW50LnByaW19O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5e1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVyIGJ1dHRvbntcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuY29uc3QgRG9uYXRlID0gKHsgY3VycmVudCB9KSA9PiB7XG4gIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZG9uYXRlLCBzZXREb25hdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbd2VsY29tZSwgc2V0V2VsY29tZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2FkZXIsIHNldExvYWRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttb3VudCwgc2V0TW91bnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHsgZnVsbE5hbWU6ICdzdGFyIGdyZWVuJywgcGVyZmlsSW1nOiAnL3N0YXRpYy9yYW5kb20vcjUuanBnJyB9KTtcbiAgY29uc3Qgb25UZXN0ID0gYXN5bmMoKT0+IHtcbiAgICB0cnl7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJy91c2VyL3Rlc3RMb2dpbicpO1xuICAgICAgaWYocmVzLmRhdGEpe1xuICAgICAgICBzZXRMb2FkZXIoZmFsc2UpO1xuICAgICAgICBzZXRVc2VyKHJlcy5kYXRhKTtcbiAgICAgICAgc2V0RG9uYXRlKHRydWUpO1xuICAgICAgfVxuICAgIH1jYXRjaChlKXtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgc2V0TG9hZGVyKGZhbHNlKTtcbiAgICAgIHNldExvZ2luKHRydWUpO1xuICAgIH1cbiAgfVxuICAgIHVzZUVmZmVjdCgoKT0+IHtcbiAgICAgIG9uVGVzdCgpO1xuICAgIH0sW2xvZ2luXSlcblxuICAgIGNvbnN0IG9uRG9uYXRlID0gYXN5bmMoZSkgPT4ge1xuICAgICAgdHJ5e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldERvbmF0ZShmYWxzZSk7XG4gICAgICAgIHNldExvYWRlcih0cnVlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgIHNldExvYWRlcihmYWxzZSk7XG4gICAgICAgICAgc2V0V2VsY29tZSh0cnVlKTtcbiAgICAgICAgfSwyMDAwKTtcbiAgICAgIH1jYXRjaChlKXtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9XG4gICAgfVxuICBjb25zdCB7IHBlcmZpbEltZywgZnVsbE5hbWUsIHdhbGxldCB9ID0gdXNlcjtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAge1xuICAgICAgICBsb2FkZXIgJiYgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj48U3Bpbm5lciBjb2xvcj17IGN1cnJlbnQudGl0bGUgPT09ICdzaWVtYnJhJyA/ICdtYWluLWdyZWVuJyA6IGN1cnJlbnQudGl0bGUgPT09ICdheXVkYScgPyAnbWFpbi1yZWQnIDogJ21haW4tYmx1ZScgfSAvPjwvZGl2PlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBsb2dpbiAmJiA8ZGl2IGV2ZW50IGNsYXNzTmFtZT1cImxvZ2luXCI+PExvZ2luIGV2ZW50IHNldERvbmF0ZT17c2V0RG9uYXRlfSBzZXRMb2dpbj17c2V0TG9naW59IHByaW09eyBjdXJyZW50LnByaW0gfSB0aXRsZT17Y3VycmVudC50aXRsZX0gLz48L2Rpdj5cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgZG9uYXRlICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fZG9uYXRlIGFuaW1hdGVkIGZhZGVJblwiPlxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyIGFuaW1hdGVkIGZhZGVJbiBkZWxheS0xc1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwZXJmaWxJbWd9IGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICA8cD57ZnVsbE5hbWV9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3VuZCBhbmltYXRlZCBmbGlwSW5YIGRlbGF5LTJzXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2dyZWVuY29pbi5zdmdcIiBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgPHA+e3dhbGxldH08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGVkIGZhZGVJbiBkZWxheS0yc1wiPlxuICAgICAgICAgICAgICA8aDE+RG9uYXI8L2gxPlxuICAgICAgICAgICAgICA8cD5JbmdyZXNhIHVuIG1vbnRvIGVuIGdyZWVuY29pbnMsIGxvcyBtaXNtb3Mgc2VyYW4gZGVzY29udGFkb3MgZGUgc3UgY3VlbnRhIHkgc2VyYW4gcmVjaWJpZG9zIHBvciBsYXMgb2dhbml6YWNpb25lcyBxdWUgYXBveWFuIGVzdGEgY2F1c2EuPC9wPlxuICAgICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgb25TdWJtaXQ9e29uRG9uYXRlfT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e21vdW50fSBvbkNoYW5nZT17KGUpPT4gc2V0TW91bnQoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX0gdHlwZT1cIm51bWJlclwiLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5kb25hcjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAge1xuICAgICAgICB3ZWxjb21lICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUgYW5pbWF0ZWQgZmFkZUluXCI+XG4gICAgICAgICAgICA8aDE+RmVsaWNpZGFkZXMsIHlhIGVyZXMgZW1iYWphZG9yIGRlIGVzdGUgZXZlbnRvPC9oMT5cbiAgICAgICAgICAgIDxwPlBvZHJhcyBzZWd1aXIgbG8gcXVlIGhhY2Vtb3MgY29uIHR1IGNvbGFib3JhY2lvbiBlbiBlbCBzaWd1aWVudGUgPGEgaHJlZj1cIiNcIj5FbmxhY2UuPC9hPjwvcD5cbiAgICAgICAgICAgIDxwPkRlIGlndWFsIG1hbmVyYSBsYXMgYWN0dWFsaXphY2lvbmVzIGRlbCBldmVudG8gc2VyYW4gcHVibGljYWRhcyBlbiB0dSBtdXJvLjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFpbntcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlcntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgcHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmxvYWRlcntcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5sb2dpbntcbiAgICAgICAgICBoZWlnaHQ6IDYwJTtcbiAgICAgICAgfVxuICAgICAgICAubWFpbl9kb25hdGUgaDF7XG4gICAgICAgICAgY29sb3I6ICR7Y3VycmVudC5wcmltfTtcbiAgICAgICAgfVxuICAgICAgICAudXNlciBpbWd7XG4gICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICAuZm91bmR7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5mb3VuZCBpbWd7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjsgY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0e1xuICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICB9XG4gICAgICAgIC53ZWxjb21lIGgxLCBhe1xuICAgICAgICAgIGNvbG9yOiAke2N1cnJlbnQucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgLndlbGNvbWUgYXtcbiAgICAgICAgICBmb250LXdpZ2h0OiA1NTA7XG4gICAgICAgIH1cbiAgICAgICAgLndlbGNvbWUgcHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEV2ZW50cyA9ICgpID0+IHtcbiAgY29uc3QgZXZlbnRzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuZXZlbnRzKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IHZpc2libGUsIGN1cnJlbnQgfSA9IGV2ZW50cztcbiAgY29uc3QgW2RvbmF0ZSwgc2V0RG9uYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpPT4gc2V0RG9uYXRlKHRydWUpLFt2aXNpYmxlXSk7XG4gIHJldHVybihcbiAgICA8TW9kYWwgaXNPcGVuPXt2aXNpYmxlfSBzdHlsZT17eyBtaW5XaWR0aDogJzk1dncnIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxidXR0b24gdGl0bGU9XCJDZXJyYXJcIiBvbkNsaWNrPXsoKT0+IGRpc3BhdGNoKHsgdHlwZTogT05fRVZFTlQsIGV2ZW50VHlwZTogbnVsbCB9KX0+WDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiPlxuICAgICAgICAgIDxpbWcgc3JjPXtjdXJyZW50LmltZ30gYWx0PVwiXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgZG9uYXRlID8gPERvbmF0ZSBjdXJyZW50PXtjdXJyZW50fSAvPiA6IDxFdmVudEhvbWUgY3VycmVudD17Y3VycmVudH0gc2V0RG9uYXRlPXtzZXREb25hdGV9IC8+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tYWlue1xuICAgICAgICAgICAgLy9oZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbWcsIC5pbmZve1xuICAgICAgICAgICAgLy93aWR0aDogNTAlO1xuICAgICAgICAgICAgLy9oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogJHtjdXJyZW50LnByaW0gPT09IFwiIzAzYTdmMFwiID8gJ3RvcCcgOiAnYm90dG9tJyB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5mb3tcbiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtIC41cmVtIC41cmVtIDFyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke2N1cnJlbnQucHJpbX07XG4gICAgICAgICAgICBjb2xvcjogJHtjdXJyZW50LnByaW19O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogLjVyZW07XG4gICAgICAgICAgICByaWdodDogLjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3VycmVudC5wcmltfTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA3NjhweCl7XG4gICAgICAgICAgICAubWFpbntcbiAgICAgICAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmltZywgLmluZm97XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L01vZGFsPlxuICApXG59XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL2FuaW1hdGUubWluLmNzc1wiLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL2Fvcy5jc3NcIi8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QXJjaGl2bytCbGFja3xPcGVuK1NhbnN8UGFjaWZpY28mZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPEV2ZW50cyAvPlxuICAgICAgPC9tYWluPlxuICAgICAgPE1lbnUgLz5cbiAgICAgIDxNeU1vZGFsIC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBtYWlue1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */
/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/layout.jsx */`));
};

const Register = () => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])((state, next) => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, next), {
    name: '',
    lastName: '',
    mail: '',
    pass: '',
    birthday: '',
    genre: 'Mujer'
  });
  const {
    0: disable,
    1: setDisable
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: mailPop,
    1: setMailPop
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);

  const onSubmit = async e => {
    try {
      e.preventDefault();
      const data = value;
      const res = await axios__WEBPACK_IMPORTED_MODULE_11___default.a.post('/user/register', data);

      if (res.data === 'mail') {
        setMailPop(true);
        return setDisable(false);
      }

      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push(`/perfil/${res.data}`);
    } catch (e) {
      console.log(e);
    }
  };

  return __jsx("form", {
    onSubmit: onSubmit,
    method: "POST",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3822388164", [_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3822388164", [_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3822388164", [_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }, "Registro")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3822388164", [_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]]) + " " + "body"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3822388164", [_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]]) + " " + "fullName"
  }, __jsx("input", {
    disabled: disable,
    value: value.name,
    onChange: e => setValue({
      name: e.currentTarget.value
    }),
    type: "text",
    id: "name",
    placeholder: "Nombre",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3822388164", [_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }), __jsx("input", {
    disabled: disable,
    value: value.lastName,
    onChange: e => setValue({
      lastName: e.currentTarget.value
    }),
    type: "text",
    id: "lastName",
    placeholder: "Apellido",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3822388164", [_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  })), __jsx("input", {
    disabled: disable,
    value: value.mail,
    onChange: e => setValue({
      mail: e.currentTarget.value
    }),
    onFocus: () => setMailPop(false),
    type: "text",
    id: "mail",
    placeholder: "Correo electr\xF3nico",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3822388164", [_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Popover"], {
    placement: "bottom",
    target: "mail",
    isOpen: mailPop
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["PopoverBody"], null, "Ya existe una cuenta con este correo")), __jsx("input", {
    disabled: disable,
    value: value.pass,
    onChange: e => setValue({
      pass: e.currentTarget.value
    }),
    type: "password",
    id: "pass",
    placeholder: "contrase\xF1a",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3822388164", [_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3822388164", [_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]]) + " " + "birth_sex"
  }, __jsx("label", {
    htmlFor: "birthday",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3822388164", [_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3822388164", [_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }, "Cumplea\xF1os"), __jsx("input", {
    disabled: disable,
    value: value.birthday,
    onChange: e => setValue({
      birthday: e.currentTarget.value
    }),
    type: "date",
    name: "birthday",
    id: "birthday",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3822388164", [_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  })), __jsx("label", {
    htmlFor: "genre",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3822388164", [_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3822388164", [_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }, "Genero"), __jsx("select", {
    disabled: disable,
    value: value.genre,
    onChange: e => setValue({
      genre: e.currentTarget.value
    }),
    name: "genre",
    id: "genre",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3822388164", [_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }, __jsx("option", {
    value: "mujer",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3822388164", [_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }, "Mujer"), __jsx("option", {
    value: "hombre",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3822388164", [_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }, "Hombre"), __jsx("option", {
    value: "otro",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3822388164", [_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }, "Otro"))))), __jsx("footer", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3822388164", [_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }, __jsx("button", {
    type: "button",
    onClick: () => _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(value).forEach(val => setValue({
      [val]: ''
    })),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3822388164", [_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }, "cancelar"), __jsx("button", {
    type: "submit",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3822388164", [_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]]])
  }, "Enviar")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3822388164",
    dynamic: [_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim]
  }, `form.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;}header.__jsx-style-dynamic-selector{color:${_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim};}.body.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;padding:.5rem;}input.__jsx-style-dynamic-selector{font-size:12px;width:100%;margin-bottom:1rem;padding-left:.5rem;}input[type="date"].__jsx-style-dynamic-selector{border:1px solid rgba(0,0,0,.2);}.fullName.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.fullName.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:nth-child(2){margin-left:.5rem;}.birth_sex.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;width:100%;}footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;padding:.5rem;}button.__jsx-style-dynamic-selector{background:transparent;color:${_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim};border:2px solid ${_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim};-webkit-transition:250ms ease;transition:250ms ease;margin-left:.5rem;}button.__jsx-style-dynamic-selector:focus{outline:none;}button.__jsx-style-dynamic-selector:hover{color:#fff;background:${_layout_var__WEBPACK_IMPORTED_MODULE_13__["color"].prim};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9sYXlvdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlNa0IsQUFHd0IsQUFPc0IsQUFHdEIsQUFRRSxBQU1vQixBQUd0QixBQVFLLEFBR0wsQUFLQSxBQU9VLEFBT1YsQUFHRixXQUM2QixFQUgxQyxFQXZDYSxHQWlCYixLQWVxQyxHQS9CaEIsTUFLckIsR0FqQkEsVUFhcUIsTUF5Q3JCLE9BVmdELE1BOUJoRCxVQXJCd0IsQUFVQSxBQWlCWCxBQVdrQixBQUtKLFdBZkYsbUJBd0JELGdEQW5ESCxBQVVBLElBMENELGVBVEMsR0FVckIsVUF6QnFCLGFBVVIsV0FDYixxQ0F0Q2EsQUFVQSxXQVRDLEFBVUEsUUFnQ0QsSUF6Q2IsQUFVZ0IsT0FnQ0EsRUFoQmhCLEtBZkEsT0FnQ0EiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL2xheW91dC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IE9OX0VWRU5UIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucyc7XG4vL2ltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Jvb3RzdHJhcC5zY3NzJztcbmltcG9ydCAnLi9iYXNlLnNjc3MnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IFBvcG92ZXIsIFBvcG92ZXJCb2R5LCBTcGlubmVyLCBNb2RhbCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnQgfSBmcm9tICcuLi8uLi9sYXlvdXQvdmFyJztcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9tYWluL3RpdGxlJztcblxuY29uc3QgTG9naW4gPSAoeyBwcmltLCB0aXRsZSwgZXZlbnQsIHNldERvbmF0ZSwgc2V0TG9naW4gfSkgPT4ge1xuXG4gIGNvbnN0IFttYWlsLCBzZXRNYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Bhc3MsIHNldFBhc3NdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbWFpbFBvcCwgc2V0TWFpbFBvcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwYXNzUG9wLCBzZXRQYXNzUG9wXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Rpc2FibGUsIHNldERpc2FibGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xuICAgIHRyeXtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNldERpc2FibGUodHJ1ZSk7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBtYWlsLFxuICAgICAgICBwYXNzXG4gICAgICB9XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGRhdGEpO1xuICAgICAgaWYocmVzLmRhdGEgPT09ICdtYWlsJykge1xuICAgICAgICAgc2V0TWFpbFBvcCh0cnVlKTtcbiAgICAgICAgIHJldHVybiBzZXREaXNhYmxlKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGlmKHJlcy5kYXRhID09PSAncGFzcycpe1xuICAgICAgICBzZXRQYXNzUG9wKHRydWUpXG4gICAgICAgIHJldHVybiBzZXREaXNhYmxlKGZhbHNlKTtcbiAgICAgIH07XG4gICAgICBpZihldmVudCl7XG4gICAgICAgIHNldExvZ2luKGZhbHNlKTtcbiAgICAgICAgc2V0RG9uYXRlKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgUm91dGVyLnB1c2goYC9wZXJmaWwvJHtyZXMuZGF0YX1gKTtcbiAgICAgIH1cbiAgICB9Y2F0Y2goZSl7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4oXG4gICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBtZXRob2Q9XCJQT1NUXCI+XG4gICAgICA8aGVhZGVyPjxoMT5JbmljaWFyIFNlc2lvbjwvaDE+PC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtYWlsXCI+XG4gICAgICAgICAgPHA+VXN1YXJpbzwvcD5cbiAgICAgICAgICA8aW5wdXQgZGlzYWJsZWQ9e2Rpc2FibGV9IG9uRm9jdXM9eygpPT4gc2V0TWFpbFBvcChmYWxzZSl9IHZhbHVlPXttYWlsfSBvbkNoYW5nZT17KGUpPT4gc2V0TWFpbChlLmN1cnJlbnRUYXJnZXQudmFsdWUpfSB0eXBlPVwidGV4dFwiIGlkPVwibWFpbFwiIG5hbWU9XCJtYWlsXCIvPlxuICAgICAgICAgIDxQb3BvdmVyIHRhcmdldD1cIm1haWxcIiBwbGFjZW1lbnQ9XCJyaWdodFwiIGlzT3Blbj17bWFpbFBvcH0+XG4gICAgICAgICAgICA8UG9wb3ZlckJvZHk+RWwgY29ycmVvIG5vIGVzIHZhbGlkbzwvUG9wb3ZlckJvZHk+XG4gICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3NcIj5cbiAgICAgICAgICA8cD5jb250cmFzZcOxYTwvcD5cbiAgICAgICAgICA8aW5wdXQgZGlzYWJsZWQ9e2Rpc2FibGV9IG9uRm9jdXM9eygpPT4gc2V0UGFzc1BvcChmYWxzZSl9IHZhbHVlPXtwYXNzfSBvbkNoYW5nZT17KGUpPT4gc2V0UGFzcyhlLmN1cnJlbnRUYXJnZXQudmFsdWUpfSB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc1wiIGlkPVwicGFzc1wiLz5cbiAgICAgICAgICA8UG9wb3ZlciB0YXJnZXQ9XCJwYXNzXCIgcGxhY2VtZW50PVwicmlnaHRcIiBpc09wZW49e3Bhc3NQb3B9PlxuICAgICAgICAgICAgPFBvcG92ZXJCb2R5PkxhIGNvbnRyYXNlw7FhIG5vIGVzIHZhbGlkYTwvUG9wb3ZlckJvZHk+XG4gICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICB7XG4gICAgICAgICAgZGlzYWJsZSA/IDxTcGlubmVyIGNvbG9yPXsgdGl0bGUgPT09ICdzaWVtYnJhJyA/ICdtYWluLWdyZWVuJyA6IHRpdGxlID09PSAnYXl1ZGEnID8gJ21haW4tcmVkJyA6ICdtYWluLWJsdWUnIH0gLz4gOiA8YnV0dG9uIGRpc2FibGVkPXtkaXNhYmxlfSB0eXBlPVwic3VibWl0XCI+TG9naW48L2J1dHRvbj5cbiAgICAgICAgfVxuICAgICAgPC9mb290ZXI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGZvcm17XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgY29sb3I6ICR7cHJpbSB8fCBjb2xvci5wcmltfTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuYm9keXtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbDpudGgtY2hpbGQoMSl7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbCBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXR7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dDpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHtwcmltIHx8IGNvbG9yLnByaW19O1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlcntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7cHJpbSB8fCBjb2xvci5wcmltfTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgY29sb3I6ICR7cHJpbSB8fCBjb2xvci5wcmltfTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtwcmltIHx8IGNvbG9yLnByaW19O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlUmVkdWNlcigoc3RhdGUsIG5leHQpID0+ICh7IC4uLnN0YXRlLCAuLi5uZXh0IH0pLHtcbiAgICBuYW1lOiAnJyxcbiAgICBsYXN0TmFtZTogJycsXG4gICAgbWFpbDogJycsXG4gICAgcGFzczogJycsXG4gICAgYmlydGhkYXk6ICcnLFxuICAgIGdlbnJlOiAnTXVqZXInLFxuICB9KVxuICBjb25zdCBbZGlzYWJsZSwgc2V0RGlzYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttYWlsUG9wLCBzZXRNYWlsUG9wXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jKGUpID0+IHtcbiAgICB0cnl7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBkYXRhID0gdmFsdWU7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCcvdXNlci9yZWdpc3RlcicsIGRhdGEpO1xuICAgICAgaWYocmVzLmRhdGEgPT09ICdtYWlsJyl7XG4gICAgICAgIHNldE1haWxQb3AodHJ1ZSk7XG4gICAgICAgIHJldHVybiBzZXREaXNhYmxlKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIFJvdXRlci5wdXNoKGAvcGVyZmlsLyR7cmVzLmRhdGF9YCk7XG4gICAgfWNhdGNoKGUpe1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gbWV0aG9kPVwiUE9TVFwiPlxuICAgICAgPGhlYWRlcj48aDE+UmVnaXN0cm88L2gxPjwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVsbE5hbWVcIj5cbiAgICAgICAgICA8aW5wdXQgZGlzYWJsZWQ9e2Rpc2FibGV9IHZhbHVlPXt2YWx1ZS5uYW1lfSBvbkNoYW5nZSA9IHsoZSk9PiBzZXRWYWx1ZSh7IG5hbWU6IGUuY3VycmVudFRhcmdldC52YWx1ZSB9KX0gdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5vbWJyZVwiLz5cbiAgICAgICAgICA8aW5wdXQgZGlzYWJsZWQ9e2Rpc2FibGV9IHZhbHVlPXt2YWx1ZS5sYXN0TmFtZX0gb25DaGFuZ2UgPSB7KGUpPT4gc2V0VmFsdWUoeyBsYXN0TmFtZTogZS5jdXJyZW50VGFyZ2V0LnZhbHVlIH0pfSB0eXBlPVwidGV4dFwiIGlkPVwibGFzdE5hbWVcIiBwbGFjZWhvbGRlcj1cIkFwZWxsaWRvXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0IGRpc2FibGVkPXtkaXNhYmxlfSB2YWx1ZT17dmFsdWUubWFpbH0gb25DaGFuZ2UgPSB7KGUpPT4gc2V0VmFsdWUoeyBtYWlsOiBlLmN1cnJlbnRUYXJnZXQudmFsdWUgfSl9IG9uRm9jdXM9eygpPT4gc2V0TWFpbFBvcChmYWxzZSl9IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtYWlsXCIgcGxhY2Vob2xkZXI9XCJDb3JyZW8gZWxlY3Ryw7NuaWNvXCIvPlxuICAgICAgICA8UG9wb3ZlciBwbGFjZW1lbnQ9XCJib3R0b21cIiB0YXJnZXQ9XCJtYWlsXCIgaXNPcGVuPXttYWlsUG9wfT5cbiAgICAgICAgICA8UG9wb3ZlckJvZHk+WWEgZXhpc3RlIHVuYSBjdWVudGEgY29uIGVzdGUgY29ycmVvPC9Qb3BvdmVyQm9keT5cbiAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICA8aW5wdXQgZGlzYWJsZWQ9e2Rpc2FibGV9IHZhbHVlPXt2YWx1ZS5wYXNzfSBvbkNoYW5nZSA9IHsoZSk9PiBzZXRWYWx1ZSh7IHBhc3M6IGUuY3VycmVudFRhcmdldC52YWx1ZSB9KX0gdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzXCIgcGxhY2Vob2xkZXI9XCJjb250cmFzZcOxYVwiLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaXJ0aF9zZXhcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJpcnRoZGF5XCI+XG4gICAgICAgICAgICA8cD5DdW1wbGVhw7FvczwvcD5cbiAgICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZGlzYWJsZX0gdmFsdWU9e3ZhbHVlLmJpcnRoZGF5fSBvbkNoYW5nZSA9IHsoZSk9PiBzZXRWYWx1ZSh7IGJpcnRoZGF5OiBlLmN1cnJlbnRUYXJnZXQudmFsdWUgfSl9IHR5cGU9XCJkYXRlXCIgbmFtZT1cImJpcnRoZGF5XCIgaWQ9XCJiaXJ0aGRheVwiLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2VucmVcIj5cbiAgICAgICAgICAgIDxwPkdlbmVybzwvcD5cbiAgICAgICAgICAgIDxzZWxlY3QgZGlzYWJsZWQ9e2Rpc2FibGV9IHZhbHVlPXt2YWx1ZS5nZW5yZX0gb25DaGFuZ2UgPSB7KGUpPT4gc2V0VmFsdWUoeyBnZW5yZTogZS5jdXJyZW50VGFyZ2V0LnZhbHVlIH0pfSBuYW1lPVwiZ2VucmVcIiBpZD1cImdlbnJlXCI+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtdWplclwiPk11amVyPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJob21icmVcIj5Ib21icmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm90cm9cIj5PdHJvPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCk9PiBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCh2YWwgPT4gc2V0VmFsdWUoeyBbdmFsXTogJycgfSkpfT5jYW5jZWxhcjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5FbnZpYXI8L2J1dHRvbj5cbiAgICAgIDwvZm9vdGVyPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBmb3Jte1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3IucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHl7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0e1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXRbdHlwZT1cImRhdGVcIl17XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgICAgIH1cbiAgICAgICAgLmZ1bGxOYW1le1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZnVsbE5hbWUgaW5wdXR7XG4gICAgICAgIH1cbiAgICAgICAgLmZ1bGxOYW1lIGlucHV0Om50aC1jaGlsZCgyKXtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmJpcnRoX3NleHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlcntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b257XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3IucHJpbX07XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtjb2xvci5wcmltfTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXJ7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvci5wcmltfTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9mb3JtPlxuICApXG59XG5cbmNvbnN0IExvZ1JlZyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX2NvbnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1Ymxpc2hcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udFwiPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW5fY29udHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAubWFpbntcbiAgICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgYW5pbWF0aW9uOiBkb3duIDYwMG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLnB1Ymxpc2h7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcvc3RhdGljL3JhbmRvbS9yMTYuanBnJyl0b3AgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICAgIC5jb250e1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgQGtleWZyYW1lcyBkb3due1xuICAgICAgICAgIDAle1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDUwJXtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMTAwJXtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE15TW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IG1lbnUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5tYWluLm5hdi52aXNpYmxlKTtcbiAgY29uc3QgbWFpbiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm1haW4ubmF2KTtcbiAgY29uc3QgeyBsb2dpbiwgcmVnaXN0ZXIgfSA9IG1haW47XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICB7XG4gICAgICAgIGxvZ2luICYmIDxMb2dSZWc+PExvZ2luIC8+PC9Mb2dSZWc+XG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIHJlZ2lzdGVyICYmIDxMb2dSZWc+PFJlZ2lzdGVyIC8+PC9Mb2dSZWc+XG4gICAgICB9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tb2RhbHtcbiAgICAgICAgICBkaXNwbGF5OiAke21lbnUgPyAnYmxvY2snIDogJ25vbmUnfTtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjUpO1xuICAgICAgICAgIHotaW5kZXg6IDE1MDtcbiAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBFdmVudEhvbWUgPSAoeyBjdXJyZW50LCBzZXREb25hdGUgfSkgPT4ge1xuXG4gIHJldHVybihcbiAgICA8PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+e2N1cnJlbnQudGl0bGV9PC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJUaXRsZVwiPntjdXJyZW50LnN1YlRpdGxlfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICA8cD57Y3VycmVudC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxidXR0b24+UGFydGljaXBhcjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gc2V0RG9uYXRlKHRydWUpfT5Eb25hcjwvYnV0dG9uPlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGhlYWRlcntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgZGl2e1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgbWFyZ2luOiA1cmVtIDAgMXJlbTtcbiAgICAgICAgfVxuICAgICAgICBoMSwgcHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIGgxLCAuc3ViVGl0bGV7XG4gICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgY29sb3I6ICR7Y3VycmVudC5wcmltfTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke2N1cnJlbnQucHJpbX07XG4gICAgICAgICAgY29sb3I6ICR7Y3VycmVudC5wcmltfTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2N1cnJlbnQucHJpbX07XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHl7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlcntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXIgYnV0dG9ue1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCBEb25hdGUgPSAoeyBjdXJyZW50IH0pID0+IHtcbiAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkb25hdGUsIHNldERvbmF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt3ZWxjb21lLCBzZXRXZWxjb21lXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21vdW50LCBzZXRNb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoeyBmdWxsTmFtZTogJ3N0YXIgZ3JlZW4nLCBwZXJmaWxJbWc6ICcvc3RhdGljL3JhbmRvbS9yNS5qcGcnIH0pO1xuICBjb25zdCBvblRlc3QgPSBhc3luYygpPT4ge1xuICAgIHRyeXtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnL3VzZXIvdGVzdExvZ2luJyk7XG4gICAgICBpZihyZXMuZGF0YSl7XG4gICAgICAgIHNldExvYWRlcihmYWxzZSk7XG4gICAgICAgIHNldFVzZXIocmVzLmRhdGEpO1xuICAgICAgICBzZXREb25hdGUodHJ1ZSk7XG4gICAgICB9XG4gICAgfWNhdGNoKGUpe1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICBzZXRMb2FkZXIoZmFsc2UpO1xuICAgICAgc2V0TG9naW4odHJ1ZSk7XG4gICAgfVxuICB9XG4gICAgdXNlRWZmZWN0KCgpPT4ge1xuICAgICAgb25UZXN0KCk7XG4gICAgfSxbbG9naW5dKVxuXG4gICAgY29uc3Qgb25Eb25hdGUgPSBhc3luYyhlKSA9PiB7XG4gICAgICB0cnl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0RG9uYXRlKGZhbHNlKTtcbiAgICAgICAgc2V0TG9hZGVyKHRydWUpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgc2V0TG9hZGVyKGZhbHNlKTtcbiAgICAgICAgICBzZXRXZWxjb21lKHRydWUpO1xuICAgICAgICB9LDIwMDApO1xuICAgICAgfWNhdGNoKGUpe1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH1cbiAgICB9XG4gIGNvbnN0IHsgcGVyZmlsSW1nLCBmdWxsTmFtZSwgd2FsbGV0IH0gPSB1c2VyO1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICB7XG4gICAgICAgIGxvYWRlciAmJiA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPjxTcGlubmVyIGNvbG9yPXsgY3VycmVudC50aXRsZSA9PT0gJ3NpZW1icmEnID8gJ21haW4tZ3JlZW4nIDogY3VycmVudC50aXRsZSA9PT0gJ2F5dWRhJyA/ICdtYWluLXJlZCcgOiAnbWFpbi1ibHVlJyB9IC8+PC9kaXY+XG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGxvZ2luICYmIDxkaXYgZXZlbnQgY2xhc3NOYW1lPVwibG9naW5cIj48TG9naW4gZXZlbnQgc2V0RG9uYXRlPXtzZXREb25hdGV9IHNldExvZ2luPXtzZXRMb2dpbn0gcHJpbT17IGN1cnJlbnQucHJpbSB9IHRpdGxlPXtjdXJyZW50LnRpdGxlfSAvPjwvZGl2PlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBkb25hdGUgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9kb25hdGUgYW5pbWF0ZWQgZmFkZUluXCI+XG4gICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXIgYW5pbWF0ZWQgZmFkZUluIGRlbGF5LTFzXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3BlcmZpbEltZ30gYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgIDxwPntmdWxsTmFtZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvdW5kIGFuaW1hdGVkIGZsaXBJblggZGVsYXktMnNcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvZ3JlZW5jb2luLnN2Z1wiIGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICA8cD57d2FsbGV0fTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZWQgZmFkZUluIGRlbGF5LTJzXCI+XG4gICAgICAgICAgICAgIDxoMT5Eb25hcjwvaDE+XG4gICAgICAgICAgICAgIDxwPkluZ3Jlc2EgdW4gbW9udG8gZW4gZ3JlZW5jb2lucywgbG9zIG1pc21vcyBzZXJhbiBkZXNjb250YWRvcyBkZSBzdSBjdWVudGEgeSBzZXJhbiByZWNpYmlkb3MgcG9yIGxhcyBvZ2FuaXphY2lvbmVzIHF1ZSBhcG95YW4gZXN0YSBjYXVzYS48L3A+XG4gICAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cIlBPU1RcIiBvblN1Ym1pdD17b25Eb25hdGV9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17bW91bnR9IG9uQ2hhbmdlPXsoZSk9PiBzZXRNb3VudChlLmN1cnJlbnRUYXJnZXQudmFsdWUpfSB0eXBlPVwibnVtYmVyXCIvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPmRvbmFyPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIHdlbGNvbWUgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZSBhbmltYXRlZCBmYWRlSW5cIj5cbiAgICAgICAgICAgIDxoMT5GZWxpY2lkYWRlcywgeWEgZXJlcyBlbWJhamFkb3IgZGUgZXN0ZSBldmVudG88L2gxPlxuICAgICAgICAgICAgPHA+UG9kcmFzIHNlZ3VpciBsbyBxdWUgaGFjZW1vcyBjb24gdHUgY29sYWJvcmFjaW9uIGVuIGVsIHNpZ3VpZW50ZSA8YSBocmVmPVwiI1wiPkVubGFjZS48L2E+PC9wPlxuICAgICAgICAgICAgPHA+RGUgaWd1YWwgbWFuZXJhIGxhcyBhY3R1YWxpemFjaW9uZXMgZGVsIGV2ZW50byBzZXJhbiBwdWJsaWNhZGFzIGVuIHR1IG11cm8uPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICAubG9hZGVye1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ2lue1xuICAgICAgICAgIGhlaWdodDogNjAlO1xuICAgICAgICB9XG4gICAgICAgIC5tYWluX2RvbmF0ZSBoMXtcbiAgICAgICAgICBjb2xvcjogJHtjdXJyZW50LnByaW19O1xuICAgICAgICB9XG4gICAgICAgIC51c2VyIGltZ3tcbiAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG4gICAgICAgIC5mb3VuZHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmZvdW5kIGltZ3tcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOyBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXR7XG4gICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLndlbGNvbWUgaDEsIGF7XG4gICAgICAgICAgY29sb3I6ICR7Y3VycmVudC5wcmltfTtcbiAgICAgICAgfVxuICAgICAgICAud2VsY29tZSBhe1xuICAgICAgICAgIGZvbnQtd2lnaHQ6IDU1MDtcbiAgICAgICAgfVxuICAgICAgICAud2VsY29tZSBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgRXZlbnRzID0gKCkgPT4ge1xuICBjb25zdCBldmVudHMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5ldmVudHMpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgdmlzaWJsZSwgY3VycmVudCB9ID0gZXZlbnRzO1xuICBjb25zdCBbZG9uYXRlLCBzZXREb25hdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCk9PiBzZXREb25hdGUodHJ1ZSksW3Zpc2libGVdKTtcbiAgcmV0dXJuKFxuICAgIDxNb2RhbCBpc09wZW49e3Zpc2libGV9IHN0eWxlPXt7IG1pbldpZHRoOiAnOTV2dycgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPGJ1dHRvbiB0aXRsZT1cIkNlcnJhclwiIG9uQ2xpY2s9eygpPT4gZGlzcGF0Y2goeyB0eXBlOiBPTl9FVkVOVCwgZXZlbnRUeXBlOiBudWxsIH0pfT5YPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XG4gICAgICAgICAgPGltZyBzcmM9e2N1cnJlbnQuaW1nfSBhbHQ9XCJcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBkb25hdGUgPyA8RG9uYXRlIGN1cnJlbnQ9e2N1cnJlbnR9IC8+IDogPEV2ZW50SG9tZSBjdXJyZW50PXtjdXJyZW50fSBzZXREb25hdGU9e3NldERvbmF0ZX0gLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1haW57XG4gICAgICAgICAgICAvL2hlaWdodDogODB2aDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmltZywgLmluZm97XG4gICAgICAgICAgICAvL3dpZHRoOiA1MCU7XG4gICAgICAgICAgICAvL2hlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiAke2N1cnJlbnQucHJpbSA9PT0gXCIjMDNhN2YwXCIgPyAndG9wJyA6ICdib3R0b20nIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbmZve1xuICAgICAgICAgICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gMXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b257XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3VycmVudC5wcmltfTtcbiAgICAgICAgICAgIGNvbG9yOiAke2N1cnJlbnQucHJpbX07XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAuNXJlbTtcbiAgICAgICAgICAgIHJpZ2h0OiAuNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjdXJyZW50LnByaW19O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDc2OHB4KXtcbiAgICAgICAgICAgIC5tYWlue1xuICAgICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW1nLCAuaW5mb3tcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTW9kYWw+XG4gIClcbn1cblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvYW5pbWF0ZS5taW4uY3NzXCIvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvYW9zLmNzc1wiLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BcmNoaXZvK0JsYWNrfE9wZW4rU2Fuc3xQYWNpZmljbyZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8RXZlbnRzIC8+XG4gICAgICA8L21haW4+XG4gICAgICA8TWVudSAvPlxuICAgICAgPE15TW9kYWwgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2e1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIG1haW57XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGZsZXg6IDEgMSAwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */
/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/layout.jsx */`));
};

const LogReg = ({
  children
}) => {
  return __jsx("div", {
    className: "jsx-292857699" + " " + "main_cont"
  }, __jsx("div", {
    className: "jsx-292857699" + " " + "main"
  }, __jsx("div", {
    className: "jsx-292857699" + " " + "publish"
  }), __jsx("div", {
    className: "jsx-292857699" + " " + "cont"
  }, children)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "292857699"
  }, ".main_cont.jsx-292857699{height:100vh;width:70%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;}.main.jsx-292857699{height:50%;width:80%;background:#fff;-webkit-animation:down-jsx-292857699 600ms ease-in-out;animation:down-jsx-292857699 600ms ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.publish.jsx-292857699{width:50%;height:100%;background:url('/static/random/r16.jpg')top center no-repeat;background-size:cover;}.cont.jsx-292857699{width:50%;}@-webkit-keyframes down-jsx-292857699{0%{opacity:0;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);}50%{-webkit-transform:translateY(50px);-ms-transform:translateY(50px);transform:translateY(50px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}@keyframes down-jsx-292857699{0%{opacity:0;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);}50%{-webkit-transform:translateY(50px);-ms-transform:translateY(50px);transform:translateY(50px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9sYXlvdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Sa0IsQUFHd0IsQUFRRixBQVFELEFBTUEsQUFJRSxBQUlpQixBQUdqQixVQWhCQSxBQU1kLEFBSWdDLEFBT0YsQ0F6QmxCLEVBUkEsUUFTTSxDQVE2QyxDQWhCaEQsY0FTb0IsOENBUVgsVUFZdEIsSUE1QnVCLEdBZ0N2QixLQWZGLENBUUUsaUNBaEI2Qix5REFSVixTQVNOLDBFQUNmLFVBVG9CLGtCQUNwQiIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL21haW4vbGF5b3V0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgT05fRVZFTlQgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbi8vaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvYm9vdHN0cmFwLnNjc3MnO1xuaW1wb3J0ICcuL2Jhc2Uuc2Nzcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgUG9wb3ZlciwgUG9wb3ZlckJvZHksIFNwaW5uZXIsIE1vZGFsIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBjb2xvciwgZm9udCB9IGZyb20gJy4uLy4uL2xheW91dC92YXInO1xuaW1wb3J0IFRpdGxlIGZyb20gJy4uL21haW4vdGl0bGUnO1xuXG5jb25zdCBMb2dpbiA9ICh7IHByaW0sIHRpdGxlLCBldmVudCwgc2V0RG9uYXRlLCBzZXRMb2dpbiB9KSA9PiB7XG5cbiAgY29uc3QgW21haWwsIHNldE1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzcywgc2V0UGFzc10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFttYWlsUG9wLCBzZXRNYWlsUG9wXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Bhc3NQb3AsIHNldFBhc3NQb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGlzYWJsZSwgc2V0RGlzYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyhlKSA9PiB7XG4gICAgdHJ5e1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2V0RGlzYWJsZSh0cnVlKTtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIG1haWwsXG4gICAgICAgIHBhc3NcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJywgZGF0YSk7XG4gICAgICBpZihyZXMuZGF0YSA9PT0gJ21haWwnKSB7XG4gICAgICAgICBzZXRNYWlsUG9wKHRydWUpO1xuICAgICAgICAgcmV0dXJuIHNldERpc2FibGUoZmFsc2UpO1xuICAgICAgfVxuICAgICAgaWYocmVzLmRhdGEgPT09ICdwYXNzJyl7XG4gICAgICAgIHNldFBhc3NQb3AodHJ1ZSlcbiAgICAgICAgcmV0dXJuIHNldERpc2FibGUoZmFsc2UpO1xuICAgICAgfTtcbiAgICAgIGlmKGV2ZW50KXtcbiAgICAgICAgc2V0TG9naW4oZmFsc2UpO1xuICAgICAgICBzZXREb25hdGUodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBSb3V0ZXIucHVzaChgL3BlcmZpbC8ke3Jlcy5kYXRhfWApO1xuICAgICAgfVxuICAgIH1jYXRjaChlKXtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybihcbiAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgIDxoZWFkZXI+PGgxPkluaWNpYXIgU2VzaW9uPC9oMT48L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1haWxcIj5cbiAgICAgICAgICA8cD5Vc3VhcmlvPC9wPlxuICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZGlzYWJsZX0gb25Gb2N1cz17KCk9PiBzZXRNYWlsUG9wKGZhbHNlKX0gdmFsdWU9e21haWx9IG9uQ2hhbmdlPXsoZSk9PiBzZXRNYWlsKGUuY3VycmVudFRhcmdldC52YWx1ZSl9IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtYWlsXCIgbmFtZT1cIm1haWxcIi8+XG4gICAgICAgICAgPFBvcG92ZXIgdGFyZ2V0PVwibWFpbFwiIHBsYWNlbWVudD1cInJpZ2h0XCIgaXNPcGVuPXttYWlsUG9wfT5cbiAgICAgICAgICAgIDxQb3BvdmVyQm9keT5FbCBjb3JyZW8gbm8gZXMgdmFsaWRvPC9Qb3BvdmVyQm9keT5cbiAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc1wiPlxuICAgICAgICAgIDxwPmNvbnRyYXNlw7FhPC9wPlxuICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZGlzYWJsZX0gb25Gb2N1cz17KCk9PiBzZXRQYXNzUG9wKGZhbHNlKX0gdmFsdWU9e3Bhc3N9IG9uQ2hhbmdlPXsoZSk9PiBzZXRQYXNzKGUuY3VycmVudFRhcmdldC52YWx1ZSl9IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzXCIgaWQ9XCJwYXNzXCIvPlxuICAgICAgICAgIDxQb3BvdmVyIHRhcmdldD1cInBhc3NcIiBwbGFjZW1lbnQ9XCJyaWdodFwiIGlzT3Blbj17cGFzc1BvcH0+XG4gICAgICAgICAgICA8UG9wb3ZlckJvZHk+TGEgY29udHJhc2XDsWEgbm8gZXMgdmFsaWRhPC9Qb3BvdmVyQm9keT5cbiAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIHtcbiAgICAgICAgICBkaXNhYmxlID8gPFNwaW5uZXIgY29sb3I9eyB0aXRsZSA9PT0gJ3NpZW1icmEnID8gJ21haW4tZ3JlZW4nIDogdGl0bGUgPT09ICdheXVkYScgPyAnbWFpbi1yZWQnIDogJ21haW4tYmx1ZScgfSAvPiA6IDxidXR0b24gZGlzYWJsZWQ9e2Rpc2FibGV9IHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICB9XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZm9ybXtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlcntcbiAgICAgICAgICBjb2xvcjogJHtwcmltIHx8IGNvbG9yLnByaW19O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5e1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGxhYmVsOm50aC1jaGlsZCgxKXtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIGxhYmVsIHB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjIpO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0OmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3ByaW0gfHwgY29sb3IucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b257XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtwcmltIHx8IGNvbG9yLnByaW19O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICBjb2xvcjogJHtwcmltIHx8IGNvbG9yLnByaW19O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3ByaW0gfHwgY29sb3IucHJpbX07XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VSZWR1Y2VyKChzdGF0ZSwgbmV4dCkgPT4gKHsgLi4uc3RhdGUsIC4uLm5leHQgfSkse1xuICAgIG5hbWU6ICcnLFxuICAgIGxhc3ROYW1lOiAnJyxcbiAgICBtYWlsOiAnJyxcbiAgICBwYXNzOiAnJyxcbiAgICBiaXJ0aGRheTogJycsXG4gICAgZ2VucmU6ICdNdWplcicsXG4gIH0pXG4gIGNvbnN0IFtkaXNhYmxlLCBzZXREaXNhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21haWxQb3AsIHNldE1haWxQb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xuICAgIHRyeXtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGRhdGEgPSB2YWx1ZTtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy91c2VyL3JlZ2lzdGVyJywgZGF0YSk7XG4gICAgICBpZihyZXMuZGF0YSA9PT0gJ21haWwnKXtcbiAgICAgICAgc2V0TWFpbFBvcCh0cnVlKTtcbiAgICAgICAgcmV0dXJuIHNldERpc2FibGUoZmFsc2UpO1xuICAgICAgfVxuICAgICAgUm91dGVyLnB1c2goYC9wZXJmaWwvJHtyZXMuZGF0YX1gKTtcbiAgICB9Y2F0Y2goZSl7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4oXG4gICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBtZXRob2Q9XCJQT1NUXCI+XG4gICAgICA8aGVhZGVyPjxoMT5SZWdpc3RybzwvaDE+PC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdWxsTmFtZVwiPlxuICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZGlzYWJsZX0gdmFsdWU9e3ZhbHVlLm5hbWV9IG9uQ2hhbmdlID0geyhlKT0+IHNldFZhbHVlKHsgbmFtZTogZS5jdXJyZW50VGFyZ2V0LnZhbHVlIH0pfSB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiTm9tYnJlXCIvPlxuICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZGlzYWJsZX0gdmFsdWU9e3ZhbHVlLmxhc3ROYW1lfSBvbkNoYW5nZSA9IHsoZSk9PiBzZXRWYWx1ZSh7IGxhc3ROYW1lOiBlLmN1cnJlbnRUYXJnZXQudmFsdWUgfSl9IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJsYXN0TmFtZVwiIHBsYWNlaG9sZGVyPVwiQXBlbGxpZG9cIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW5wdXQgZGlzYWJsZWQ9e2Rpc2FibGV9IHZhbHVlPXt2YWx1ZS5tYWlsfSBvbkNoYW5nZSA9IHsoZSk9PiBzZXRWYWx1ZSh7IG1haWw6IGUuY3VycmVudFRhcmdldC52YWx1ZSB9KX0gb25Gb2N1cz17KCk9PiBzZXRNYWlsUG9wKGZhbHNlKX0gdHlwZT1cInRleHRcIiBpZD1cIm1haWxcIiBwbGFjZWhvbGRlcj1cIkNvcnJlbyBlbGVjdHLDs25pY29cIi8+XG4gICAgICAgIDxQb3BvdmVyIHBsYWNlbWVudD1cImJvdHRvbVwiIHRhcmdldD1cIm1haWxcIiBpc09wZW49e21haWxQb3B9PlxuICAgICAgICAgIDxQb3BvdmVyQm9keT5ZYSBleGlzdGUgdW5hIGN1ZW50YSBjb24gZXN0ZSBjb3JyZW88L1BvcG92ZXJCb2R5PlxuICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZGlzYWJsZX0gdmFsdWU9e3ZhbHVlLnBhc3N9IG9uQ2hhbmdlID0geyhlKT0+IHNldFZhbHVlKHsgcGFzczogZS5jdXJyZW50VGFyZ2V0LnZhbHVlIH0pfSB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3NcIiBwbGFjZWhvbGRlcj1cImNvbnRyYXNlw7FhXCIvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpcnRoX3NleFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYmlydGhkYXlcIj5cbiAgICAgICAgICAgIDxwPkN1bXBsZWHDsW9zPC9wPlxuICAgICAgICAgICAgPGlucHV0IGRpc2FibGVkPXtkaXNhYmxlfSB2YWx1ZT17dmFsdWUuYmlydGhkYXl9IG9uQ2hhbmdlID0geyhlKT0+IHNldFZhbHVlKHsgYmlydGhkYXk6IGUuY3VycmVudFRhcmdldC52YWx1ZSB9KX0gdHlwZT1cImRhdGVcIiBuYW1lPVwiYmlydGhkYXlcIiBpZD1cImJpcnRoZGF5XCIvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnZW5yZVwiPlxuICAgICAgICAgICAgPHA+R2VuZXJvPC9wPlxuICAgICAgICAgICAgPHNlbGVjdCBkaXNhYmxlZD17ZGlzYWJsZX0gdmFsdWU9e3ZhbHVlLmdlbnJlfSBvbkNoYW5nZSA9IHsoZSk9PiBzZXRWYWx1ZSh7IGdlbnJlOiBlLmN1cnJlbnRUYXJnZXQudmFsdWUgfSl9IG5hbWU9XCJnZW5yZVwiIGlkPVwiZ2VucmVcIj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm11amVyXCI+TXVqZXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhvbWJyZVwiPkhvbWJyZTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib3Ryb1wiPk90cm88L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKT0+IE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKHZhbCA9PiBzZXRWYWx1ZSh7IFt2YWxdOiAnJyB9KSl9PmNhbmNlbGFyPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkVudmlhcjwvYnV0dG9uPlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGZvcm17XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlcntcbiAgICAgICAgICBjb2xvcjogJHtjb2xvci5wcmltfTtcbiAgICAgICAgfVxuICAgICAgICAuYm9keXtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXR7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dFt0eXBlPVwiZGF0ZVwiXXtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICAgICAgfVxuICAgICAgICAuZnVsbE5hbWV7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5mdWxsTmFtZSBpbnB1dHtcbiAgICAgICAgfVxuICAgICAgICAuZnVsbE5hbWUgaW5wdXQ6bnRoLWNoaWxkKDIpe1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuYmlydGhfc2V4e1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvci5wcmltfTtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke2NvbG9yLnByaW19O1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9yLnByaW19O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuY29uc3QgTG9nUmVnID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fY29udFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVibGlzaFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250XCI+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFpbl9jb250e1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBhbmltYXRpb246IGRvd24gNjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgICAucHVibGlzaHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9zdGF0aWMvcmFuZG9tL3IxNi5qcGcnKXRvcCBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnR7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIGRvd257XG4gICAgICAgICAgMCV7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgNTAle1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMDAle1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTXlNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgbWVudSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm1haW4ubmF2LnZpc2libGUpO1xuICBjb25zdCBtYWluID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubWFpbi5uYXYpO1xuICBjb25zdCB7IGxvZ2luLCByZWdpc3RlciB9ID0gbWFpbjtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICAgIHtcbiAgICAgICAgbG9naW4gJiYgPExvZ1JlZz48TG9naW4gLz48L0xvZ1JlZz5cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgcmVnaXN0ZXIgJiYgPExvZ1JlZz48UmVnaXN0ZXIgLz48L0xvZ1JlZz5cbiAgICAgIH1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1vZGFse1xuICAgICAgICAgIGRpc3BsYXk6ICR7bWVudSA/ICdibG9jaycgOiAnbm9uZSd9O1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgICAgICAgei1pbmRleDogMTUwO1xuICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEV2ZW50SG9tZSA9ICh7IGN1cnJlbnQsIHNldERvbmF0ZSB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT57Y3VycmVudC50aXRsZX08L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YlRpdGxlXCI+e2N1cnJlbnQuc3ViVGl0bGV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgIDxwPntjdXJyZW50LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGJ1dHRvbj5QYXJ0aWNpcGFyPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBzZXREb25hdGUodHJ1ZSl9PkRvbmFyPC9idXR0b24+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciBkaXZ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICBtYXJnaW46IDVyZW0gMCAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIGgxLCBwe1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgaDEsIC5zdWJUaXRsZXtcbiAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICBjb2xvcjogJHtjdXJyZW50LnByaW19O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3VycmVudC5wcmltfTtcbiAgICAgICAgICBjb2xvcjogJHtjdXJyZW50LnByaW19O1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3VycmVudC5wcmltfTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICAuYm9keXtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciBidXR0b257XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IERvbmF0ZSA9ICh7IGN1cnJlbnQgfSkgPT4ge1xuICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2RvbmF0ZSwgc2V0RG9uYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3dlbGNvbWUsIHNldFdlbGNvbWVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbW91bnQsIHNldE1vdW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7IGZ1bGxOYW1lOiAnc3RhciBncmVlbicsIHBlcmZpbEltZzogJy9zdGF0aWMvcmFuZG9tL3I1LmpwZycgfSk7XG4gIGNvbnN0IG9uVGVzdCA9IGFzeW5jKCk9PiB7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCcvdXNlci90ZXN0TG9naW4nKTtcbiAgICAgIGlmKHJlcy5kYXRhKXtcbiAgICAgICAgc2V0TG9hZGVyKGZhbHNlKTtcbiAgICAgICAgc2V0VXNlcihyZXMuZGF0YSk7XG4gICAgICAgIHNldERvbmF0ZSh0cnVlKTtcbiAgICAgIH1cbiAgICB9Y2F0Y2goZSl7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHNldExvYWRlcihmYWxzZSk7XG4gICAgICBzZXRMb2dpbih0cnVlKTtcbiAgICB9XG4gIH1cbiAgICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgICBvblRlc3QoKTtcbiAgICB9LFtsb2dpbl0pXG5cbiAgICBjb25zdCBvbkRvbmF0ZSA9IGFzeW5jKGUpID0+IHtcbiAgICAgIHRyeXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXREb25hdGUoZmFsc2UpO1xuICAgICAgICBzZXRMb2FkZXIodHJ1ZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICBzZXRMb2FkZXIoZmFsc2UpO1xuICAgICAgICAgIHNldFdlbGNvbWUodHJ1ZSk7XG4gICAgICAgIH0sMjAwMCk7XG4gICAgICB9Y2F0Y2goZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfVxuICAgIH1cbiAgY29uc3QgeyBwZXJmaWxJbWcsIGZ1bGxOYW1lLCB3YWxsZXQgfSA9IHVzZXI7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIHtcbiAgICAgICAgbG9hZGVyICYmIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+PFNwaW5uZXIgY29sb3I9eyBjdXJyZW50LnRpdGxlID09PSAnc2llbWJyYScgPyAnbWFpbi1ncmVlbicgOiBjdXJyZW50LnRpdGxlID09PSAnYXl1ZGEnID8gJ21haW4tcmVkJyA6ICdtYWluLWJsdWUnIH0gLz48L2Rpdj5cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgbG9naW4gJiYgPGRpdiBldmVudCBjbGFzc05hbWU9XCJsb2dpblwiPjxMb2dpbiBldmVudCBzZXREb25hdGU9e3NldERvbmF0ZX0gc2V0TG9naW49e3NldExvZ2lufSBwcmltPXsgY3VycmVudC5wcmltIH0gdGl0bGU9e2N1cnJlbnQudGl0bGV9IC8+PC9kaXY+XG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGRvbmF0ZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX2RvbmF0ZSBhbmltYXRlZCBmYWRlSW5cIj5cbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlciBhbmltYXRlZCBmYWRlSW4gZGVsYXktMXNcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGVyZmlsSW1nfSBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgPHA+e2Z1bGxOYW1lfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm91bmQgYW5pbWF0ZWQgZmxpcEluWCBkZWxheS0yc1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9ncmVlbmNvaW4uc3ZnXCIgYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgIDxwPnt3YWxsZXR9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlZCBmYWRlSW4gZGVsYXktMnNcIj5cbiAgICAgICAgICAgICAgPGgxPkRvbmFyPC9oMT5cbiAgICAgICAgICAgICAgPHA+SW5ncmVzYSB1biBtb250byBlbiBncmVlbmNvaW5zLCBsb3MgbWlzbW9zIHNlcmFuIGRlc2NvbnRhZG9zIGRlIHN1IGN1ZW50YSB5IHNlcmFuIHJlY2liaWRvcyBwb3IgbGFzIG9nYW5pemFjaW9uZXMgcXVlIGFwb3lhbiBlc3RhIGNhdXNhLjwvcD5cbiAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwiUE9TVFwiIG9uU3VibWl0PXtvbkRvbmF0ZX0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXttb3VudH0gb25DaGFuZ2U9eyhlKT0+IHNldE1vdW50KGUuY3VycmVudFRhcmdldC52YWx1ZSl9IHR5cGU9XCJudW1iZXJcIi8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+ZG9uYXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgd2VsY29tZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lIGFuaW1hdGVkIGZhZGVJblwiPlxuICAgICAgICAgICAgPGgxPkZlbGljaWRhZGVzLCB5YSBlcmVzIGVtYmFqYWRvciBkZSBlc3RlIGV2ZW50bzwvaDE+XG4gICAgICAgICAgICA8cD5Qb2RyYXMgc2VndWlyIGxvIHF1ZSBoYWNlbW9zIGNvbiB0dSBjb2xhYm9yYWNpb24gZW4gZWwgc2lndWllbnRlIDxhIGhyZWY9XCIjXCI+RW5sYWNlLjwvYT48L3A+XG4gICAgICAgICAgICA8cD5EZSBpZ3VhbCBtYW5lcmEgbGFzIGFjdHVhbGl6YWNpb25lcyBkZWwgZXZlbnRvIHNlcmFuIHB1YmxpY2FkYXMgZW4gdHUgbXVyby48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIHB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5sb2FkZXJ7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubG9naW57XG4gICAgICAgICAgaGVpZ2h0OiA2MCU7XG4gICAgICAgIH1cbiAgICAgICAgLm1haW5fZG9uYXRlIGgxe1xuICAgICAgICAgIGNvbG9yOiAke2N1cnJlbnQucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgLnVzZXIgaW1ne1xuICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmZvdW5ke1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZm91bmQgaW1ne1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb247IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dHtcbiAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgfVxuICAgICAgICAud2VsY29tZSBoMSwgYXtcbiAgICAgICAgICBjb2xvcjogJHtjdXJyZW50LnByaW19O1xuICAgICAgICB9XG4gICAgICAgIC53ZWxjb21lIGF7XG4gICAgICAgICAgZm9udC13aWdodDogNTUwO1xuICAgICAgICB9XG4gICAgICAgIC53ZWxjb21lIHB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBFdmVudHMgPSAoKSA9PiB7XG4gIGNvbnN0IGV2ZW50cyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmV2ZW50cyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyB2aXNpYmxlLCBjdXJyZW50IH0gPSBldmVudHM7XG4gIGNvbnN0IFtkb25hdGUsIHNldERvbmF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKT0+IHNldERvbmF0ZSh0cnVlKSxbdmlzaWJsZV0pO1xuICByZXR1cm4oXG4gICAgPE1vZGFsIGlzT3Blbj17dmlzaWJsZX0gc3R5bGU9e3sgbWluV2lkdGg6ICc5NXZ3JyB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8YnV0dG9uIHRpdGxlPVwiQ2VycmFyXCIgb25DbGljaz17KCk9PiBkaXNwYXRjaCh7IHR5cGU6IE9OX0VWRU5ULCBldmVudFR5cGU6IG51bGwgfSl9Plg8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cbiAgICAgICAgICA8aW1nIHNyYz17Y3VycmVudC5pbWd9IGFsdD1cIlwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRvbmF0ZSA/IDxEb25hdGUgY3VycmVudD17Y3VycmVudH0gLz4gOiA8RXZlbnRIb21lIGN1cnJlbnQ9e2N1cnJlbnR9IHNldERvbmF0ZT17c2V0RG9uYXRlfSAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWFpbntcbiAgICAgICAgICAgIC8vaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW1nLCAuaW5mb3tcbiAgICAgICAgICAgIC8vd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIC8vaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICBvYmplY3QtcG9zaXRpb246ICR7Y3VycmVudC5wcmltID09PSBcIiMwM2E3ZjBcIiA/ICd0b3AnIDogJ2JvdHRvbScgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmluZm97XG4gICAgICAgICAgICBwYWRkaW5nOiAuNXJlbSAuNXJlbSAuNXJlbSAxcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtjdXJyZW50LnByaW19O1xuICAgICAgICAgICAgY29sb3I6ICR7Y3VycmVudC5wcmltfTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IC41cmVtO1xuICAgICAgICAgICAgcmlnaHQ6IC41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246aG92ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2N1cnJlbnQucHJpbX07XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpe1xuICAgICAgICAgICAgLm1haW57XG4gICAgICAgICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbWcsIC5pbmZve1xuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9Nb2RhbD5cbiAgKVxufVxuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9hbmltYXRlLm1pbi5jc3NcIi8+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9hb3MuY3NzXCIvPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFyY2hpdm8rQmxhY2t8T3BlbitTYW5zfFBhY2lmaWNvJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxFdmVudHMgLz5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxNZW51IC8+XG4gICAgICA8TXlNb2RhbCAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXZ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgbWFpbntcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/layout.jsx */"));
};

const MyModal = () => {
  const menu = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.main.nav.visible);
  const main = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.main.nav);
  const {
    login,
    register
  } = main;
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3625275396", [menu ? 'block' : 'none']]]) + " " + "modal"
  }, login && __jsx(LogReg, null, __jsx(Login, null)), register && __jsx(LogReg, null, __jsx(Register, null)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3625275396",
    dynamic: [menu ? 'block' : 'none']
  }, `.modal.__jsx-style-dynamic-selector{display:${menu ? 'block' : 'none'};position:fixed;top:0;left:0;height:100%;width:100%;background:rgba(0,0,0,.5);z-index:150;content:" ";-webkit-transition:250ms ease;transition:250ms ease;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9sYXlvdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRVa0IsQUFHZ0QscUNBQ3RCLGVBQ1QsTUFDQyxPQUNLLFlBQ0QsV0FDa0IsMEJBQ2pCLFlBQ0EsWUFDVSxvREFDeEIiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL2xheW91dC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IE9OX0VWRU5UIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucyc7XG4vL2ltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Jvb3RzdHJhcC5zY3NzJztcbmltcG9ydCAnLi9iYXNlLnNjc3MnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IFBvcG92ZXIsIFBvcG92ZXJCb2R5LCBTcGlubmVyLCBNb2RhbCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnQgfSBmcm9tICcuLi8uLi9sYXlvdXQvdmFyJztcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9tYWluL3RpdGxlJztcblxuY29uc3QgTG9naW4gPSAoeyBwcmltLCB0aXRsZSwgZXZlbnQsIHNldERvbmF0ZSwgc2V0TG9naW4gfSkgPT4ge1xuXG4gIGNvbnN0IFttYWlsLCBzZXRNYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Bhc3MsIHNldFBhc3NdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbWFpbFBvcCwgc2V0TWFpbFBvcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwYXNzUG9wLCBzZXRQYXNzUG9wXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Rpc2FibGUsIHNldERpc2FibGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xuICAgIHRyeXtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNldERpc2FibGUodHJ1ZSk7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBtYWlsLFxuICAgICAgICBwYXNzXG4gICAgICB9XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGRhdGEpO1xuICAgICAgaWYocmVzLmRhdGEgPT09ICdtYWlsJykge1xuICAgICAgICAgc2V0TWFpbFBvcCh0cnVlKTtcbiAgICAgICAgIHJldHVybiBzZXREaXNhYmxlKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGlmKHJlcy5kYXRhID09PSAncGFzcycpe1xuICAgICAgICBzZXRQYXNzUG9wKHRydWUpXG4gICAgICAgIHJldHVybiBzZXREaXNhYmxlKGZhbHNlKTtcbiAgICAgIH07XG4gICAgICBpZihldmVudCl7XG4gICAgICAgIHNldExvZ2luKGZhbHNlKTtcbiAgICAgICAgc2V0RG9uYXRlKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgUm91dGVyLnB1c2goYC9wZXJmaWwvJHtyZXMuZGF0YX1gKTtcbiAgICAgIH1cbiAgICB9Y2F0Y2goZSl7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4oXG4gICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBtZXRob2Q9XCJQT1NUXCI+XG4gICAgICA8aGVhZGVyPjxoMT5JbmljaWFyIFNlc2lvbjwvaDE+PC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtYWlsXCI+XG4gICAgICAgICAgPHA+VXN1YXJpbzwvcD5cbiAgICAgICAgICA8aW5wdXQgZGlzYWJsZWQ9e2Rpc2FibGV9IG9uRm9jdXM9eygpPT4gc2V0TWFpbFBvcChmYWxzZSl9IHZhbHVlPXttYWlsfSBvbkNoYW5nZT17KGUpPT4gc2V0TWFpbChlLmN1cnJlbnRUYXJnZXQudmFsdWUpfSB0eXBlPVwidGV4dFwiIGlkPVwibWFpbFwiIG5hbWU9XCJtYWlsXCIvPlxuICAgICAgICAgIDxQb3BvdmVyIHRhcmdldD1cIm1haWxcIiBwbGFjZW1lbnQ9XCJyaWdodFwiIGlzT3Blbj17bWFpbFBvcH0+XG4gICAgICAgICAgICA8UG9wb3ZlckJvZHk+RWwgY29ycmVvIG5vIGVzIHZhbGlkbzwvUG9wb3ZlckJvZHk+XG4gICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3NcIj5cbiAgICAgICAgICA8cD5jb250cmFzZcOxYTwvcD5cbiAgICAgICAgICA8aW5wdXQgZGlzYWJsZWQ9e2Rpc2FibGV9IG9uRm9jdXM9eygpPT4gc2V0UGFzc1BvcChmYWxzZSl9IHZhbHVlPXtwYXNzfSBvbkNoYW5nZT17KGUpPT4gc2V0UGFzcyhlLmN1cnJlbnRUYXJnZXQudmFsdWUpfSB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc1wiIGlkPVwicGFzc1wiLz5cbiAgICAgICAgICA8UG9wb3ZlciB0YXJnZXQ9XCJwYXNzXCIgcGxhY2VtZW50PVwicmlnaHRcIiBpc09wZW49e3Bhc3NQb3B9PlxuICAgICAgICAgICAgPFBvcG92ZXJCb2R5PkxhIGNvbnRyYXNlw7FhIG5vIGVzIHZhbGlkYTwvUG9wb3ZlckJvZHk+XG4gICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICB7XG4gICAgICAgICAgZGlzYWJsZSA/IDxTcGlubmVyIGNvbG9yPXsgdGl0bGUgPT09ICdzaWVtYnJhJyA/ICdtYWluLWdyZWVuJyA6IHRpdGxlID09PSAnYXl1ZGEnID8gJ21haW4tcmVkJyA6ICdtYWluLWJsdWUnIH0gLz4gOiA8YnV0dG9uIGRpc2FibGVkPXtkaXNhYmxlfSB0eXBlPVwic3VibWl0XCI+TG9naW48L2J1dHRvbj5cbiAgICAgICAgfVxuICAgICAgPC9mb290ZXI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGZvcm17XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgY29sb3I6ICR7cHJpbSB8fCBjb2xvci5wcmltfTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuYm9keXtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbDpudGgtY2hpbGQoMSl7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbCBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXR7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dDpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHtwcmltIHx8IGNvbG9yLnByaW19O1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlcntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7cHJpbSB8fCBjb2xvci5wcmltfTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgY29sb3I6ICR7cHJpbSB8fCBjb2xvci5wcmltfTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtwcmltIHx8IGNvbG9yLnByaW19O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlUmVkdWNlcigoc3RhdGUsIG5leHQpID0+ICh7IC4uLnN0YXRlLCAuLi5uZXh0IH0pLHtcbiAgICBuYW1lOiAnJyxcbiAgICBsYXN0TmFtZTogJycsXG4gICAgbWFpbDogJycsXG4gICAgcGFzczogJycsXG4gICAgYmlydGhkYXk6ICcnLFxuICAgIGdlbnJlOiAnTXVqZXInLFxuICB9KVxuICBjb25zdCBbZGlzYWJsZSwgc2V0RGlzYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttYWlsUG9wLCBzZXRNYWlsUG9wXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jKGUpID0+IHtcbiAgICB0cnl7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBkYXRhID0gdmFsdWU7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCcvdXNlci9yZWdpc3RlcicsIGRhdGEpO1xuICAgICAgaWYocmVzLmRhdGEgPT09ICdtYWlsJyl7XG4gICAgICAgIHNldE1haWxQb3AodHJ1ZSk7XG4gICAgICAgIHJldHVybiBzZXREaXNhYmxlKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIFJvdXRlci5wdXNoKGAvcGVyZmlsLyR7cmVzLmRhdGF9YCk7XG4gICAgfWNhdGNoKGUpe1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gbWV0aG9kPVwiUE9TVFwiPlxuICAgICAgPGhlYWRlcj48aDE+UmVnaXN0cm88L2gxPjwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVsbE5hbWVcIj5cbiAgICAgICAgICA8aW5wdXQgZGlzYWJsZWQ9e2Rpc2FibGV9IHZhbHVlPXt2YWx1ZS5uYW1lfSBvbkNoYW5nZSA9IHsoZSk9PiBzZXRWYWx1ZSh7IG5hbWU6IGUuY3VycmVudFRhcmdldC52YWx1ZSB9KX0gdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5vbWJyZVwiLz5cbiAgICAgICAgICA8aW5wdXQgZGlzYWJsZWQ9e2Rpc2FibGV9IHZhbHVlPXt2YWx1ZS5sYXN0TmFtZX0gb25DaGFuZ2UgPSB7KGUpPT4gc2V0VmFsdWUoeyBsYXN0TmFtZTogZS5jdXJyZW50VGFyZ2V0LnZhbHVlIH0pfSB0eXBlPVwidGV4dFwiIGlkPVwibGFzdE5hbWVcIiBwbGFjZWhvbGRlcj1cIkFwZWxsaWRvXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0IGRpc2FibGVkPXtkaXNhYmxlfSB2YWx1ZT17dmFsdWUubWFpbH0gb25DaGFuZ2UgPSB7KGUpPT4gc2V0VmFsdWUoeyBtYWlsOiBlLmN1cnJlbnRUYXJnZXQudmFsdWUgfSl9IG9uRm9jdXM9eygpPT4gc2V0TWFpbFBvcChmYWxzZSl9IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtYWlsXCIgcGxhY2Vob2xkZXI9XCJDb3JyZW8gZWxlY3Ryw7NuaWNvXCIvPlxuICAgICAgICA8UG9wb3ZlciBwbGFjZW1lbnQ9XCJib3R0b21cIiB0YXJnZXQ9XCJtYWlsXCIgaXNPcGVuPXttYWlsUG9wfT5cbiAgICAgICAgICA8UG9wb3ZlckJvZHk+WWEgZXhpc3RlIHVuYSBjdWVudGEgY29uIGVzdGUgY29ycmVvPC9Qb3BvdmVyQm9keT5cbiAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICA8aW5wdXQgZGlzYWJsZWQ9e2Rpc2FibGV9IHZhbHVlPXt2YWx1ZS5wYXNzfSBvbkNoYW5nZSA9IHsoZSk9PiBzZXRWYWx1ZSh7IHBhc3M6IGUuY3VycmVudFRhcmdldC52YWx1ZSB9KX0gdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzXCIgcGxhY2Vob2xkZXI9XCJjb250cmFzZcOxYVwiLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaXJ0aF9zZXhcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJpcnRoZGF5XCI+XG4gICAgICAgICAgICA8cD5DdW1wbGVhw7FvczwvcD5cbiAgICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZGlzYWJsZX0gdmFsdWU9e3ZhbHVlLmJpcnRoZGF5fSBvbkNoYW5nZSA9IHsoZSk9PiBzZXRWYWx1ZSh7IGJpcnRoZGF5OiBlLmN1cnJlbnRUYXJnZXQudmFsdWUgfSl9IHR5cGU9XCJkYXRlXCIgbmFtZT1cImJpcnRoZGF5XCIgaWQ9XCJiaXJ0aGRheVwiLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2VucmVcIj5cbiAgICAgICAgICAgIDxwPkdlbmVybzwvcD5cbiAgICAgICAgICAgIDxzZWxlY3QgZGlzYWJsZWQ9e2Rpc2FibGV9IHZhbHVlPXt2YWx1ZS5nZW5yZX0gb25DaGFuZ2UgPSB7KGUpPT4gc2V0VmFsdWUoeyBnZW5yZTogZS5jdXJyZW50VGFyZ2V0LnZhbHVlIH0pfSBuYW1lPVwiZ2VucmVcIiBpZD1cImdlbnJlXCI+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtdWplclwiPk11amVyPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJob21icmVcIj5Ib21icmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm90cm9cIj5PdHJvPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCk9PiBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCh2YWwgPT4gc2V0VmFsdWUoeyBbdmFsXTogJycgfSkpfT5jYW5jZWxhcjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5FbnZpYXI8L2J1dHRvbj5cbiAgICAgIDwvZm9vdGVyPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBmb3Jte1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3IucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHl7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0e1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXRbdHlwZT1cImRhdGVcIl17XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgICAgIH1cbiAgICAgICAgLmZ1bGxOYW1le1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZnVsbE5hbWUgaW5wdXR7XG4gICAgICAgIH1cbiAgICAgICAgLmZ1bGxOYW1lIGlucHV0Om50aC1jaGlsZCgyKXtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmJpcnRoX3NleHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlcntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b257XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3IucHJpbX07XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtjb2xvci5wcmltfTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXJ7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvci5wcmltfTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9mb3JtPlxuICApXG59XG5cbmNvbnN0IExvZ1JlZyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX2NvbnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1Ymxpc2hcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udFwiPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW5fY29udHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAubWFpbntcbiAgICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgYW5pbWF0aW9uOiBkb3duIDYwMG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLnB1Ymxpc2h7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcvc3RhdGljL3JhbmRvbS9yMTYuanBnJyl0b3AgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICAgIC5jb250e1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgQGtleWZyYW1lcyBkb3due1xuICAgICAgICAgIDAle1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDUwJXtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMTAwJXtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE15TW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IG1lbnUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5tYWluLm5hdi52aXNpYmxlKTtcbiAgY29uc3QgbWFpbiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm1haW4ubmF2KTtcbiAgY29uc3QgeyBsb2dpbiwgcmVnaXN0ZXIgfSA9IG1haW47XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICB7XG4gICAgICAgIGxvZ2luICYmIDxMb2dSZWc+PExvZ2luIC8+PC9Mb2dSZWc+XG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIHJlZ2lzdGVyICYmIDxMb2dSZWc+PFJlZ2lzdGVyIC8+PC9Mb2dSZWc+XG4gICAgICB9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tb2RhbHtcbiAgICAgICAgICBkaXNwbGF5OiAke21lbnUgPyAnYmxvY2snIDogJ25vbmUnfTtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjUpO1xuICAgICAgICAgIHotaW5kZXg6IDE1MDtcbiAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBFdmVudEhvbWUgPSAoeyBjdXJyZW50LCBzZXREb25hdGUgfSkgPT4ge1xuXG4gIHJldHVybihcbiAgICA8PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+e2N1cnJlbnQudGl0bGV9PC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJUaXRsZVwiPntjdXJyZW50LnN1YlRpdGxlfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICA8cD57Y3VycmVudC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxidXR0b24+UGFydGljaXBhcjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gc2V0RG9uYXRlKHRydWUpfT5Eb25hcjwvYnV0dG9uPlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGhlYWRlcntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgZGl2e1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgbWFyZ2luOiA1cmVtIDAgMXJlbTtcbiAgICAgICAgfVxuICAgICAgICBoMSwgcHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIGgxLCAuc3ViVGl0bGV7XG4gICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgY29sb3I6ICR7Y3VycmVudC5wcmltfTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke2N1cnJlbnQucHJpbX07XG4gICAgICAgICAgY29sb3I6ICR7Y3VycmVudC5wcmltfTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2N1cnJlbnQucHJpbX07XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHl7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlcntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXIgYnV0dG9ue1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCBEb25hdGUgPSAoeyBjdXJyZW50IH0pID0+IHtcbiAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkb25hdGUsIHNldERvbmF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt3ZWxjb21lLCBzZXRXZWxjb21lXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21vdW50LCBzZXRNb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoeyBmdWxsTmFtZTogJ3N0YXIgZ3JlZW4nLCBwZXJmaWxJbWc6ICcvc3RhdGljL3JhbmRvbS9yNS5qcGcnIH0pO1xuICBjb25zdCBvblRlc3QgPSBhc3luYygpPT4ge1xuICAgIHRyeXtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnL3VzZXIvdGVzdExvZ2luJyk7XG4gICAgICBpZihyZXMuZGF0YSl7XG4gICAgICAgIHNldExvYWRlcihmYWxzZSk7XG4gICAgICAgIHNldFVzZXIocmVzLmRhdGEpO1xuICAgICAgICBzZXREb25hdGUodHJ1ZSk7XG4gICAgICB9XG4gICAgfWNhdGNoKGUpe1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICBzZXRMb2FkZXIoZmFsc2UpO1xuICAgICAgc2V0TG9naW4odHJ1ZSk7XG4gICAgfVxuICB9XG4gICAgdXNlRWZmZWN0KCgpPT4ge1xuICAgICAgb25UZXN0KCk7XG4gICAgfSxbbG9naW5dKVxuXG4gICAgY29uc3Qgb25Eb25hdGUgPSBhc3luYyhlKSA9PiB7XG4gICAgICB0cnl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0RG9uYXRlKGZhbHNlKTtcbiAgICAgICAgc2V0TG9hZGVyKHRydWUpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgc2V0TG9hZGVyKGZhbHNlKTtcbiAgICAgICAgICBzZXRXZWxjb21lKHRydWUpO1xuICAgICAgICB9LDIwMDApO1xuICAgICAgfWNhdGNoKGUpe1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH1cbiAgICB9XG4gIGNvbnN0IHsgcGVyZmlsSW1nLCBmdWxsTmFtZSwgd2FsbGV0IH0gPSB1c2VyO1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICB7XG4gICAgICAgIGxvYWRlciAmJiA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPjxTcGlubmVyIGNvbG9yPXsgY3VycmVudC50aXRsZSA9PT0gJ3NpZW1icmEnID8gJ21haW4tZ3JlZW4nIDogY3VycmVudC50aXRsZSA9PT0gJ2F5dWRhJyA/ICdtYWluLXJlZCcgOiAnbWFpbi1ibHVlJyB9IC8+PC9kaXY+XG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGxvZ2luICYmIDxkaXYgZXZlbnQgY2xhc3NOYW1lPVwibG9naW5cIj48TG9naW4gZXZlbnQgc2V0RG9uYXRlPXtzZXREb25hdGV9IHNldExvZ2luPXtzZXRMb2dpbn0gcHJpbT17IGN1cnJlbnQucHJpbSB9IHRpdGxlPXtjdXJyZW50LnRpdGxlfSAvPjwvZGl2PlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBkb25hdGUgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9kb25hdGUgYW5pbWF0ZWQgZmFkZUluXCI+XG4gICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXIgYW5pbWF0ZWQgZmFkZUluIGRlbGF5LTFzXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3BlcmZpbEltZ30gYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgIDxwPntmdWxsTmFtZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvdW5kIGFuaW1hdGVkIGZsaXBJblggZGVsYXktMnNcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvZ3JlZW5jb2luLnN2Z1wiIGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICA8cD57d2FsbGV0fTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZWQgZmFkZUluIGRlbGF5LTJzXCI+XG4gICAgICAgICAgICAgIDxoMT5Eb25hcjwvaDE+XG4gICAgICAgICAgICAgIDxwPkluZ3Jlc2EgdW4gbW9udG8gZW4gZ3JlZW5jb2lucywgbG9zIG1pc21vcyBzZXJhbiBkZXNjb250YWRvcyBkZSBzdSBjdWVudGEgeSBzZXJhbiByZWNpYmlkb3MgcG9yIGxhcyBvZ2FuaXphY2lvbmVzIHF1ZSBhcG95YW4gZXN0YSBjYXVzYS48L3A+XG4gICAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cIlBPU1RcIiBvblN1Ym1pdD17b25Eb25hdGV9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17bW91bnR9IG9uQ2hhbmdlPXsoZSk9PiBzZXRNb3VudChlLmN1cnJlbnRUYXJnZXQudmFsdWUpfSB0eXBlPVwibnVtYmVyXCIvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPmRvbmFyPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIHdlbGNvbWUgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZSBhbmltYXRlZCBmYWRlSW5cIj5cbiAgICAgICAgICAgIDxoMT5GZWxpY2lkYWRlcywgeWEgZXJlcyBlbWJhamFkb3IgZGUgZXN0ZSBldmVudG88L2gxPlxuICAgICAgICAgICAgPHA+UG9kcmFzIHNlZ3VpciBsbyBxdWUgaGFjZW1vcyBjb24gdHUgY29sYWJvcmFjaW9uIGVuIGVsIHNpZ3VpZW50ZSA8YSBocmVmPVwiI1wiPkVubGFjZS48L2E+PC9wPlxuICAgICAgICAgICAgPHA+RGUgaWd1YWwgbWFuZXJhIGxhcyBhY3R1YWxpemFjaW9uZXMgZGVsIGV2ZW50byBzZXJhbiBwdWJsaWNhZGFzIGVuIHR1IG11cm8uPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICAubG9hZGVye1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ2lue1xuICAgICAgICAgIGhlaWdodDogNjAlO1xuICAgICAgICB9XG4gICAgICAgIC5tYWluX2RvbmF0ZSBoMXtcbiAgICAgICAgICBjb2xvcjogJHtjdXJyZW50LnByaW19O1xuICAgICAgICB9XG4gICAgICAgIC51c2VyIGltZ3tcbiAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG4gICAgICAgIC5mb3VuZHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmZvdW5kIGltZ3tcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOyBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXR7XG4gICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLndlbGNvbWUgaDEsIGF7XG4gICAgICAgICAgY29sb3I6ICR7Y3VycmVudC5wcmltfTtcbiAgICAgICAgfVxuICAgICAgICAud2VsY29tZSBhe1xuICAgICAgICAgIGZvbnQtd2lnaHQ6IDU1MDtcbiAgICAgICAgfVxuICAgICAgICAud2VsY29tZSBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgRXZlbnRzID0gKCkgPT4ge1xuICBjb25zdCBldmVudHMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5ldmVudHMpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgdmlzaWJsZSwgY3VycmVudCB9ID0gZXZlbnRzO1xuICBjb25zdCBbZG9uYXRlLCBzZXREb25hdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCk9PiBzZXREb25hdGUodHJ1ZSksW3Zpc2libGVdKTtcbiAgcmV0dXJuKFxuICAgIDxNb2RhbCBpc09wZW49e3Zpc2libGV9IHN0eWxlPXt7IG1pbldpZHRoOiAnOTV2dycgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPGJ1dHRvbiB0aXRsZT1cIkNlcnJhclwiIG9uQ2xpY2s9eygpPT4gZGlzcGF0Y2goeyB0eXBlOiBPTl9FVkVOVCwgZXZlbnRUeXBlOiBudWxsIH0pfT5YPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XG4gICAgICAgICAgPGltZyBzcmM9e2N1cnJlbnQuaW1nfSBhbHQ9XCJcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBkb25hdGUgPyA8RG9uYXRlIGN1cnJlbnQ9e2N1cnJlbnR9IC8+IDogPEV2ZW50SG9tZSBjdXJyZW50PXtjdXJyZW50fSBzZXREb25hdGU9e3NldERvbmF0ZX0gLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1haW57XG4gICAgICAgICAgICAvL2hlaWdodDogODB2aDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmltZywgLmluZm97XG4gICAgICAgICAgICAvL3dpZHRoOiA1MCU7XG4gICAgICAgICAgICAvL2hlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiAke2N1cnJlbnQucHJpbSA9PT0gXCIjMDNhN2YwXCIgPyAndG9wJyA6ICdib3R0b20nIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbmZve1xuICAgICAgICAgICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gMXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b257XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3VycmVudC5wcmltfTtcbiAgICAgICAgICAgIGNvbG9yOiAke2N1cnJlbnQucHJpbX07XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAuNXJlbTtcbiAgICAgICAgICAgIHJpZ2h0OiAuNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjdXJyZW50LnByaW19O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDc2OHB4KXtcbiAgICAgICAgICAgIC5tYWlue1xuICAgICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW1nLCAuaW5mb3tcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTW9kYWw+XG4gIClcbn1cblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvYW5pbWF0ZS5taW4uY3NzXCIvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvYW9zLmNzc1wiLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BcmNoaXZvK0JsYWNrfE9wZW4rU2Fuc3xQYWNpZmljbyZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8RXZlbnRzIC8+XG4gICAgICA8L21haW4+XG4gICAgICA8TWVudSAvPlxuICAgICAgPE15TW9kYWwgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2e1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIG1haW57XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGZsZXg6IDEgMSAwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */
/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/layout.jsx */`));
};

const EventHome = ({
  current,
  setDonate
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2306986395", [current.prim, current.prim, current.prim, current.prim]]])
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2306986395", [current.prim, current.prim, current.prim, current.prim]]])
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2306986395", [current.prim, current.prim, current.prim, current.prim]]])
  }, current.title), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2306986395", [current.prim, current.prim, current.prim, current.prim]]]) + " " + "subTitle"
  }, current.subTitle))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2306986395", [current.prim, current.prim, current.prim, current.prim]]]) + " " + "body"
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2306986395", [current.prim, current.prim, current.prim, current.prim]]])
  }, current.description)), __jsx("footer", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2306986395", [current.prim, current.prim, current.prim, current.prim]]])
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2306986395", [current.prim, current.prim, current.prim, current.prim]]])
  }, "Participar"), __jsx("button", {
    onClick: () => setDonate(true),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2306986395", [current.prim, current.prim, current.prim, current.prim]]])
  }, "Donar")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2306986395",
    dynamic: [current.prim, current.prim, current.prim, current.prim]
  }, `header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}header.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;margin:5rem 0 1rem;}h1.__jsx-style-dynamic-selector,p.__jsx-style-dynamic-selector{max-width:100%;}header.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector,.subTitle.__jsx-style-dynamic-selector{margin:0;color:${current.prim};text-transform:uppercase;}button.__jsx-style-dynamic-selector{background:transparent;border:2px solid ${current.prim};color:${current.prim};-webkit-transition:250ms ease;transition:250ms ease;}button.__jsx-style-dynamic-selector:focus{outline:none;}button.__jsx-style-dynamic-selector:hover{background:${current.prim};color:#fff;}.body.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{margin-left:1rem;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9sYXlvdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdYa0IsQUFHd0IsQUFLQSxBQU9FLEFBR1AsQUFLZSxBQU1WLEFBRzJCLEFBSTVCLEFBR0MsQUFLSSxTQXpCa0IsSUFXckMsRUFkQSxFQTZCQSxNQXJCZ0QsaUJBU25DLElBYmMsT0FjM0Isa0JBYkEsQUFJcUMsRUFZckMsR0FqQ2dDLEFBS1IsQUErQkcsOEJBZEgsZ0RBaEJLLElBaUI3QixlQWNxQixrQkFwQ0ksb0VBTUEsT0ErQnpCLGtDQXBDQSxvRUFNcUIsbUJBQ3JCIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9sYXlvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBPTl9FVkVOVCB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuLy9pbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9ib290c3RyYXAuc2Nzcyc7XG5pbXBvcnQgJy4vYmFzZS5zY3NzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBQb3BvdmVyLCBQb3BvdmVyQm9keSwgU3Bpbm5lciwgTW9kYWwgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IGNvbG9yLCBmb250IH0gZnJvbSAnLi4vLi4vbGF5b3V0L3Zhcic7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vbWFpbi90aXRsZSc7XG5cbmNvbnN0IExvZ2luID0gKHsgcHJpbSwgdGl0bGUsIGV2ZW50LCBzZXREb25hdGUsIHNldExvZ2luIH0pID0+IHtcblxuICBjb25zdCBbbWFpbCwgc2V0TWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwYXNzLCBzZXRQYXNzXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW21haWxQb3AsIHNldE1haWxQb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcGFzc1BvcCwgc2V0UGFzc1BvcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkaXNhYmxlLCBzZXREaXNhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jKGUpID0+IHtcbiAgICB0cnl7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBzZXREaXNhYmxlKHRydWUpO1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgbWFpbCxcbiAgICAgICAgcGFzc1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKTtcbiAgICAgIGlmKHJlcy5kYXRhID09PSAnbWFpbCcpIHtcbiAgICAgICAgIHNldE1haWxQb3AodHJ1ZSk7XG4gICAgICAgICByZXR1cm4gc2V0RGlzYWJsZShmYWxzZSk7XG4gICAgICB9XG4gICAgICBpZihyZXMuZGF0YSA9PT0gJ3Bhc3MnKXtcbiAgICAgICAgc2V0UGFzc1BvcCh0cnVlKVxuICAgICAgICByZXR1cm4gc2V0RGlzYWJsZShmYWxzZSk7XG4gICAgICB9O1xuICAgICAgaWYoZXZlbnQpe1xuICAgICAgICBzZXRMb2dpbihmYWxzZSk7XG4gICAgICAgIHNldERvbmF0ZSh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFJvdXRlci5wdXNoKGAvcGVyZmlsLyR7cmVzLmRhdGF9YCk7XG4gICAgICB9XG4gICAgfWNhdGNoKGUpe1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gbWV0aG9kPVwiUE9TVFwiPlxuICAgICAgPGhlYWRlcj48aDE+SW5pY2lhciBTZXNpb248L2gxPjwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWFpbFwiPlxuICAgICAgICAgIDxwPlVzdWFyaW88L3A+XG4gICAgICAgICAgPGlucHV0IGRpc2FibGVkPXtkaXNhYmxlfSBvbkZvY3VzPXsoKT0+IHNldE1haWxQb3AoZmFsc2UpfSB2YWx1ZT17bWFpbH0gb25DaGFuZ2U9eyhlKT0+IHNldE1haWwoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX0gdHlwZT1cInRleHRcIiBpZD1cIm1haWxcIiBuYW1lPVwibWFpbFwiLz5cbiAgICAgICAgICA8UG9wb3ZlciB0YXJnZXQ9XCJtYWlsXCIgcGxhY2VtZW50PVwicmlnaHRcIiBpc09wZW49e21haWxQb3B9PlxuICAgICAgICAgICAgPFBvcG92ZXJCb2R5PkVsIGNvcnJlbyBubyBlcyB2YWxpZG88L1BvcG92ZXJCb2R5PlxuICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzXCI+XG4gICAgICAgICAgPHA+Y29udHJhc2XDsWE8L3A+XG4gICAgICAgICAgPGlucHV0IGRpc2FibGVkPXtkaXNhYmxlfSBvbkZvY3VzPXsoKT0+IHNldFBhc3NQb3AoZmFsc2UpfSB2YWx1ZT17cGFzc30gb25DaGFuZ2U9eyhlKT0+IHNldFBhc3MoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX0gdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3NcIiBpZD1cInBhc3NcIi8+XG4gICAgICAgICAgPFBvcG92ZXIgdGFyZ2V0PVwicGFzc1wiIHBsYWNlbWVudD1cInJpZ2h0XCIgaXNPcGVuPXtwYXNzUG9wfT5cbiAgICAgICAgICAgIDxQb3BvdmVyQm9keT5MYSBjb250cmFzZcOxYSBubyBlcyB2YWxpZGE8L1BvcG92ZXJCb2R5PlxuICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAge1xuICAgICAgICAgIGRpc2FibGUgPyA8U3Bpbm5lciBjb2xvcj17IHRpdGxlID09PSAnc2llbWJyYScgPyAnbWFpbi1ncmVlbicgOiB0aXRsZSA9PT0gJ2F5dWRhJyA/ICdtYWluLXJlZCcgOiAnbWFpbi1ibHVlJyB9IC8+IDogPGJ1dHRvbiBkaXNhYmxlZD17ZGlzYWJsZX0gdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgIH1cbiAgICAgIDwvZm9vdGVyPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBmb3Jte1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgIGNvbG9yOiAke3ByaW0gfHwgY29sb3IucHJpbX07XG4gICAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHl7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWw6bnRoLWNoaWxkKDEpe1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwgcHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjIpO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0e1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQ6Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7cHJpbSB8fCBjb2xvci5wcmltfTtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke3ByaW0gfHwgY29sb3IucHJpbX07XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgIGNvbG9yOiAke3ByaW0gfHwgY29sb3IucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7cHJpbSB8fCBjb2xvci5wcmltfTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9mb3JtPlxuICApXG59XG5cbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVJlZHVjZXIoKHN0YXRlLCBuZXh0KSA9PiAoeyAuLi5zdGF0ZSwgLi4ubmV4dCB9KSx7XG4gICAgbmFtZTogJycsXG4gICAgbGFzdE5hbWU6ICcnLFxuICAgIG1haWw6ICcnLFxuICAgIHBhc3M6ICcnLFxuICAgIGJpcnRoZGF5OiAnJyxcbiAgICBnZW5yZTogJ011amVyJyxcbiAgfSlcbiAgY29uc3QgW2Rpc2FibGUsIHNldERpc2FibGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbWFpbFBvcCwgc2V0TWFpbFBvcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyhlKSA9PiB7XG4gICAgdHJ5e1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZGF0YSA9IHZhbHVlO1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnL3VzZXIvcmVnaXN0ZXInLCBkYXRhKTtcbiAgICAgIGlmKHJlcy5kYXRhID09PSAnbWFpbCcpe1xuICAgICAgICBzZXRNYWlsUG9wKHRydWUpO1xuICAgICAgICByZXR1cm4gc2V0RGlzYWJsZShmYWxzZSk7XG4gICAgICB9XG4gICAgICBSb3V0ZXIucHVzaChgL3BlcmZpbC8ke3Jlcy5kYXRhfWApO1xuICAgIH1jYXRjaChlKXtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybihcbiAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgIDxoZWFkZXI+PGgxPlJlZ2lzdHJvPC9oMT48L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bGxOYW1lXCI+XG4gICAgICAgICAgPGlucHV0IGRpc2FibGVkPXtkaXNhYmxlfSB2YWx1ZT17dmFsdWUubmFtZX0gb25DaGFuZ2UgPSB7KGUpPT4gc2V0VmFsdWUoeyBuYW1lOiBlLmN1cnJlbnRUYXJnZXQudmFsdWUgfSl9IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOb21icmVcIi8+XG4gICAgICAgICAgPGlucHV0IGRpc2FibGVkPXtkaXNhYmxlfSB2YWx1ZT17dmFsdWUubGFzdE5hbWV9IG9uQ2hhbmdlID0geyhlKT0+IHNldFZhbHVlKHsgbGFzdE5hbWU6IGUuY3VycmVudFRhcmdldC52YWx1ZSB9KX0gdHlwZT1cInRleHRcIiBpZD1cImxhc3ROYW1lXCIgcGxhY2Vob2xkZXI9XCJBcGVsbGlkb1wiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZGlzYWJsZX0gdmFsdWU9e3ZhbHVlLm1haWx9IG9uQ2hhbmdlID0geyhlKT0+IHNldFZhbHVlKHsgbWFpbDogZS5jdXJyZW50VGFyZ2V0LnZhbHVlIH0pfSBvbkZvY3VzPXsoKT0+IHNldE1haWxQb3AoZmFsc2UpfSB0eXBlPVwidGV4dFwiIGlkPVwibWFpbFwiIHBsYWNlaG9sZGVyPVwiQ29ycmVvIGVsZWN0csOzbmljb1wiLz5cbiAgICAgICAgPFBvcG92ZXIgcGxhY2VtZW50PVwiYm90dG9tXCIgdGFyZ2V0PVwibWFpbFwiIGlzT3Blbj17bWFpbFBvcH0+XG4gICAgICAgICAgPFBvcG92ZXJCb2R5PllhIGV4aXN0ZSB1bmEgY3VlbnRhIGNvbiBlc3RlIGNvcnJlbzwvUG9wb3ZlckJvZHk+XG4gICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgPGlucHV0IGRpc2FibGVkPXtkaXNhYmxlfSB2YWx1ZT17dmFsdWUucGFzc30gb25DaGFuZ2UgPSB7KGUpPT4gc2V0VmFsdWUoeyBwYXNzOiBlLmN1cnJlbnRUYXJnZXQudmFsdWUgfSl9IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc1wiIHBsYWNlaG9sZGVyPVwiY29udHJhc2XDsWFcIi8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlydGhfc2V4XCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiaXJ0aGRheVwiPlxuICAgICAgICAgICAgPHA+Q3VtcGxlYcOxb3M8L3A+XG4gICAgICAgICAgICA8aW5wdXQgZGlzYWJsZWQ9e2Rpc2FibGV9IHZhbHVlPXt2YWx1ZS5iaXJ0aGRheX0gb25DaGFuZ2UgPSB7KGUpPT4gc2V0VmFsdWUoeyBiaXJ0aGRheTogZS5jdXJyZW50VGFyZ2V0LnZhbHVlIH0pfSB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJiaXJ0aGRheVwiIGlkPVwiYmlydGhkYXlcIi8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdlbnJlXCI+XG4gICAgICAgICAgICA8cD5HZW5lcm88L3A+XG4gICAgICAgICAgICA8c2VsZWN0IGRpc2FibGVkPXtkaXNhYmxlfSB2YWx1ZT17dmFsdWUuZ2VucmV9IG9uQ2hhbmdlID0geyhlKT0+IHNldFZhbHVlKHsgZ2VucmU6IGUuY3VycmVudFRhcmdldC52YWx1ZSB9KX0gbmFtZT1cImdlbnJlXCIgaWQ9XCJnZW5yZVwiPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibXVqZXJcIj5NdWplcjwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaG9tYnJlXCI+SG9tYnJlPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvdHJvXCI+T3Rybzwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpPT4gT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2godmFsID0+IHNldFZhbHVlKHsgW3ZhbF06ICcnIH0pKX0+Y2FuY2VsYXI8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RW52aWFyPC9idXR0b24+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZm9ybXtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yLnByaW19O1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5e1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0W3R5cGU9XCJkYXRlXCJde1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjIpO1xuICAgICAgICB9XG4gICAgICAgIC5mdWxsTmFtZXtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmZ1bGxOYW1lIGlucHV0e1xuICAgICAgICB9XG4gICAgICAgIC5mdWxsTmFtZSBpbnB1dDpudGgtY2hpbGQoMil7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5iaXJ0aF9zZXh7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yLnByaW19O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y29sb3IucHJpbX07XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3IucHJpbX07XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5jb25zdCBMb2dSZWcgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9jb250XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWJsaXNoXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWluX2NvbnR7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLm1haW57XG4gICAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGFuaW1hdGlvbjogZG93biA2MDBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5wdWJsaXNoe1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnL3N0YXRpYy9yYW5kb20vcjE2LmpwZycpdG9wIGNlbnRlciBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgfVxuICAgICAgICAuY29udHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgZG93bntcbiAgICAgICAgICAwJXtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICA1MCV7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDEwMCV7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNeU1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBtZW51ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubWFpbi5uYXYudmlzaWJsZSk7XG4gIGNvbnN0IG1haW4gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5tYWluLm5hdik7XG4gIGNvbnN0IHsgbG9naW4sIHJlZ2lzdGVyIH0gPSBtYWluO1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxuICAgICAge1xuICAgICAgICBsb2dpbiAmJiA8TG9nUmVnPjxMb2dpbiAvPjwvTG9nUmVnPlxuICAgICAgfVxuICAgICAge1xuICAgICAgICByZWdpc3RlciAmJiA8TG9nUmVnPjxSZWdpc3RlciAvPjwvTG9nUmVnPlxuICAgICAgfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubW9kYWx7XG4gICAgICAgICAgZGlzcGxheTogJHttZW51ID8gJ2Jsb2NrJyA6ICdub25lJ307XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICAgICAgICB6LWluZGV4OiAxNTA7XG4gICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgRXZlbnRIb21lID0gKHsgY3VycmVudCwgc2V0RG9uYXRlIH0pID0+IHtcblxuICByZXR1cm4oXG4gICAgPD5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPntjdXJyZW50LnRpdGxlfTwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViVGl0bGVcIj57Y3VycmVudC5zdWJUaXRsZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgPHA+e2N1cnJlbnQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8YnV0dG9uPlBhcnRpY2lwYXI8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IHNldERvbmF0ZSh0cnVlKX0+RG9uYXI8L2J1dHRvbj5cbiAgICAgIDwvZm9vdGVyPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIGRpdntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIG1hcmdpbjogNXJlbSAwIDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgaDEsIHB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciBoMSwgLnN1YlRpdGxle1xuICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgIGNvbG9yOiAke2N1cnJlbnQucHJpbX07XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b257XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtjdXJyZW50LnByaW19O1xuICAgICAgICAgIGNvbG9yOiAke2N1cnJlbnQucHJpbX07XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjdXJyZW50LnByaW19O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5e1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVyIGJ1dHRvbntcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuY29uc3QgRG9uYXRlID0gKHsgY3VycmVudCB9KSA9PiB7XG4gIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZG9uYXRlLCBzZXREb25hdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbd2VsY29tZSwgc2V0V2VsY29tZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2FkZXIsIHNldExvYWRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttb3VudCwgc2V0TW91bnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHsgZnVsbE5hbWU6ICdzdGFyIGdyZWVuJywgcGVyZmlsSW1nOiAnL3N0YXRpYy9yYW5kb20vcjUuanBnJyB9KTtcbiAgY29uc3Qgb25UZXN0ID0gYXN5bmMoKT0+IHtcbiAgICB0cnl7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJy91c2VyL3Rlc3RMb2dpbicpO1xuICAgICAgaWYocmVzLmRhdGEpe1xuICAgICAgICBzZXRMb2FkZXIoZmFsc2UpO1xuICAgICAgICBzZXRVc2VyKHJlcy5kYXRhKTtcbiAgICAgICAgc2V0RG9uYXRlKHRydWUpO1xuICAgICAgfVxuICAgIH1jYXRjaChlKXtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgc2V0TG9hZGVyKGZhbHNlKTtcbiAgICAgIHNldExvZ2luKHRydWUpO1xuICAgIH1cbiAgfVxuICAgIHVzZUVmZmVjdCgoKT0+IHtcbiAgICAgIG9uVGVzdCgpO1xuICAgIH0sW2xvZ2luXSlcblxuICAgIGNvbnN0IG9uRG9uYXRlID0gYXN5bmMoZSkgPT4ge1xuICAgICAgdHJ5e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldERvbmF0ZShmYWxzZSk7XG4gICAgICAgIHNldExvYWRlcih0cnVlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgIHNldExvYWRlcihmYWxzZSk7XG4gICAgICAgICAgc2V0V2VsY29tZSh0cnVlKTtcbiAgICAgICAgfSwyMDAwKTtcbiAgICAgIH1jYXRjaChlKXtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9XG4gICAgfVxuICBjb25zdCB7IHBlcmZpbEltZywgZnVsbE5hbWUsIHdhbGxldCB9ID0gdXNlcjtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAge1xuICAgICAgICBsb2FkZXIgJiYgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj48U3Bpbm5lciBjb2xvcj17IGN1cnJlbnQudGl0bGUgPT09ICdzaWVtYnJhJyA/ICdtYWluLWdyZWVuJyA6IGN1cnJlbnQudGl0bGUgPT09ICdheXVkYScgPyAnbWFpbi1yZWQnIDogJ21haW4tYmx1ZScgfSAvPjwvZGl2PlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBsb2dpbiAmJiA8ZGl2IGV2ZW50IGNsYXNzTmFtZT1cImxvZ2luXCI+PExvZ2luIGV2ZW50IHNldERvbmF0ZT17c2V0RG9uYXRlfSBzZXRMb2dpbj17c2V0TG9naW59IHByaW09eyBjdXJyZW50LnByaW0gfSB0aXRsZT17Y3VycmVudC50aXRsZX0gLz48L2Rpdj5cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgZG9uYXRlICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fZG9uYXRlIGFuaW1hdGVkIGZhZGVJblwiPlxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyIGFuaW1hdGVkIGZhZGVJbiBkZWxheS0xc1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwZXJmaWxJbWd9IGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICA8cD57ZnVsbE5hbWV9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3VuZCBhbmltYXRlZCBmbGlwSW5YIGRlbGF5LTJzXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2dyZWVuY29pbi5zdmdcIiBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgPHA+e3dhbGxldH08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGVkIGZhZGVJbiBkZWxheS0yc1wiPlxuICAgICAgICAgICAgICA8aDE+RG9uYXI8L2gxPlxuICAgICAgICAgICAgICA8cD5JbmdyZXNhIHVuIG1vbnRvIGVuIGdyZWVuY29pbnMsIGxvcyBtaXNtb3Mgc2VyYW4gZGVzY29udGFkb3MgZGUgc3UgY3VlbnRhIHkgc2VyYW4gcmVjaWJpZG9zIHBvciBsYXMgb2dhbml6YWNpb25lcyBxdWUgYXBveWFuIGVzdGEgY2F1c2EuPC9wPlxuICAgICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgb25TdWJtaXQ9e29uRG9uYXRlfT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e21vdW50fSBvbkNoYW5nZT17KGUpPT4gc2V0TW91bnQoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX0gdHlwZT1cIm51bWJlclwiLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5kb25hcjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAge1xuICAgICAgICB3ZWxjb21lICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUgYW5pbWF0ZWQgZmFkZUluXCI+XG4gICAgICAgICAgICA8aDE+RmVsaWNpZGFkZXMsIHlhIGVyZXMgZW1iYWphZG9yIGRlIGVzdGUgZXZlbnRvPC9oMT5cbiAgICAgICAgICAgIDxwPlBvZHJhcyBzZWd1aXIgbG8gcXVlIGhhY2Vtb3MgY29uIHR1IGNvbGFib3JhY2lvbiBlbiBlbCBzaWd1aWVudGUgPGEgaHJlZj1cIiNcIj5FbmxhY2UuPC9hPjwvcD5cbiAgICAgICAgICAgIDxwPkRlIGlndWFsIG1hbmVyYSBsYXMgYWN0dWFsaXphY2lvbmVzIGRlbCBldmVudG8gc2VyYW4gcHVibGljYWRhcyBlbiB0dSBtdXJvLjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFpbntcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlcntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgcHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmxvYWRlcntcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5sb2dpbntcbiAgICAgICAgICBoZWlnaHQ6IDYwJTtcbiAgICAgICAgfVxuICAgICAgICAubWFpbl9kb25hdGUgaDF7XG4gICAgICAgICAgY29sb3I6ICR7Y3VycmVudC5wcmltfTtcbiAgICAgICAgfVxuICAgICAgICAudXNlciBpbWd7XG4gICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICAuZm91bmR7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5mb3VuZCBpbWd7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjsgY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0e1xuICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICB9XG4gICAgICAgIC53ZWxjb21lIGgxLCBhe1xuICAgICAgICAgIGNvbG9yOiAke2N1cnJlbnQucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgLndlbGNvbWUgYXtcbiAgICAgICAgICBmb250LXdpZ2h0OiA1NTA7XG4gICAgICAgIH1cbiAgICAgICAgLndlbGNvbWUgcHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEV2ZW50cyA9ICgpID0+IHtcbiAgY29uc3QgZXZlbnRzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuZXZlbnRzKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IHZpc2libGUsIGN1cnJlbnQgfSA9IGV2ZW50cztcbiAgY29uc3QgW2RvbmF0ZSwgc2V0RG9uYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpPT4gc2V0RG9uYXRlKHRydWUpLFt2aXNpYmxlXSk7XG4gIHJldHVybihcbiAgICA8TW9kYWwgaXNPcGVuPXt2aXNpYmxlfSBzdHlsZT17eyBtaW5XaWR0aDogJzk1dncnIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxidXR0b24gdGl0bGU9XCJDZXJyYXJcIiBvbkNsaWNrPXsoKT0+IGRpc3BhdGNoKHsgdHlwZTogT05fRVZFTlQsIGV2ZW50VHlwZTogbnVsbCB9KX0+WDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiPlxuICAgICAgICAgIDxpbWcgc3JjPXtjdXJyZW50LmltZ30gYWx0PVwiXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgZG9uYXRlID8gPERvbmF0ZSBjdXJyZW50PXtjdXJyZW50fSAvPiA6IDxFdmVudEhvbWUgY3VycmVudD17Y3VycmVudH0gc2V0RG9uYXRlPXtzZXREb25hdGV9IC8+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tYWlue1xuICAgICAgICAgICAgLy9oZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbWcsIC5pbmZve1xuICAgICAgICAgICAgLy93aWR0aDogNTAlO1xuICAgICAgICAgICAgLy9oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogJHtjdXJyZW50LnByaW0gPT09IFwiIzAzYTdmMFwiID8gJ3RvcCcgOiAnYm90dG9tJyB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5mb3tcbiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtIC41cmVtIC41cmVtIDFyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke2N1cnJlbnQucHJpbX07XG4gICAgICAgICAgICBjb2xvcjogJHtjdXJyZW50LnByaW19O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogLjVyZW07XG4gICAgICAgICAgICByaWdodDogLjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3VycmVudC5wcmltfTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA3NjhweCl7XG4gICAgICAgICAgICAubWFpbntcbiAgICAgICAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmltZywgLmluZm97XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L01vZGFsPlxuICApXG59XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL2FuaW1hdGUubWluLmNzc1wiLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL2Fvcy5jc3NcIi8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QXJjaGl2bytCbGFja3xPcGVuK1NhbnN8UGFjaWZpY28mZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPEV2ZW50cyAvPlxuICAgICAgPC9tYWluPlxuICAgICAgPE1lbnUgLz5cbiAgICAgIDxNeU1vZGFsIC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBtYWlue1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */
/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/layout.jsx */`));
};

const Donate = ({
  current
}) => {
  const {
    0: login,
    1: setLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: donate,
    1: setDonate
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: welcome,
    1: setWelcome
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: loader,
    1: setLoader
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: mount,
    1: setMount
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0);
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    fullName: 'star green',
    perfilImg: '/static/random/r5.jpg'
  });

  const onTest = async () => {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_11___default.a.get('/user/testLogin');

      if (res.data) {
        setLoader(false);
        setUser(res.data);
        setDonate(true);
      }
    } catch (e) {
      console.log(e);
      setLoader(false);
      setLogin(true);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    onTest();
  }, [login]);

  const onDonate = async e => {
    try {
      e.preventDefault();
      setDonate(false);
      setLoader(true);
      setTimeout(() => {
        setLoader(false);
        setWelcome(true);
      }, 2000);
    } catch (e) {
      console.log(e);
    }
  };

  const {
    perfilImg,
    fullName,
    wallet
  } = user;
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2937250933", [current.prim, current.prim]]]) + " " + "main"
  }, loader && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2937250933", [current.prim, current.prim]]]) + " " + "loader"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Spinner"], {
    color: current.title === 'siembra' ? 'main-green' : current.title === 'ayuda' ? 'main-red' : 'main-blue'
  })), login && __jsx("div", {
    event: true,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2937250933", [current.prim, current.prim]]]) + " " + "login"
  }, __jsx(Login, {
    event: true,
    setDonate: setDonate,
    setLogin: setLogin,
    prim: current.prim,
    title: current.title
  })), donate && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2937250933", [current.prim, current.prim]]]) + " " + "main_donate animated fadeIn"
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2937250933", [current.prim, current.prim]]])
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2937250933", [current.prim, current.prim]]]) + " " + "user animated fadeIn delay-1s"
  }, __jsx("img", {
    src: perfilImg,
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2937250933", [current.prim, current.prim]]])
  }), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2937250933", [current.prim, current.prim]]])
  }, fullName)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2937250933", [current.prim, current.prim]]]) + " " + "found animated flipInX delay-2s"
  }, __jsx("img", {
    src: "/static/greencoin.svg",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2937250933", [current.prim, current.prim]]])
  }), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2937250933", [current.prim, current.prim]]])
  }, wallet))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2937250933", [current.prim, current.prim]]]) + " " + "animated fadeIn delay-2s"
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2937250933", [current.prim, current.prim]]])
  }, "Donar"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2937250933", [current.prim, current.prim]]])
  }, "Ingresa un monto en greencoins, los mismos seran descontados de su cuenta y seran recibidos por las oganizaciones que apoyan esta causa."), __jsx("form", {
    method: "POST",
    onSubmit: onDonate,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2937250933", [current.prim, current.prim]]])
  }, __jsx("input", {
    value: mount,
    onChange: e => setMount(e.currentTarget.value),
    type: "number",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2937250933", [current.prim, current.prim]]])
  }), __jsx("button", {
    type: "submit",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2937250933", [current.prim, current.prim]]])
  }, "donar")))), welcome && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2937250933", [current.prim, current.prim]]]) + " " + "welcome animated fadeIn"
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2937250933", [current.prim, current.prim]]])
  }, "Felicidades, ya eres embajador de este evento"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2937250933", [current.prim, current.prim]]])
  }, "Podras seguir lo que hacemos con tu colaboracion en el siguiente ", __jsx("a", {
    href: "#",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2937250933", [current.prim, current.prim]]])
  }, "Enlace.")), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2937250933", [current.prim, current.prim]]])
  }, "De igual manera las actualizaciones del evento seran publicadas en tu muro.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2937250933",
    dynamic: [current.prim, current.prim]
  }, `.main.__jsx-style-dynamic-selector{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:2rem;}header.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;}.loader.__jsx-style-dynamic-selector{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.login.__jsx-style-dynamic-selector{height:60%;}.main_donate.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{color:${current.prim};}.user.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:80px;height:80px;object-fit:cover;object-position:center;border-radius:50%;}.found.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.found.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:30px;height:30px;object-fit:cover;object-position;center;}input.__jsx-style-dynamic-selector{width:60px;}.welcome.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector,a.__jsx-style-dynamic-selector{color:${current.prim};}.welcome.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{font-wight:550;}.welcome.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9sYXlvdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1ma0IsQUFHdUIsQUFNQyxBQU1KLEFBR0csQUFNRCxBQUd3QixBQUd4QixBQU9FLEFBSUYsQUFNQSxBQUd3QixBQUdwQixBQUdOLFNBeENYLEFBeUNBLEVBaENBLEFBTWMsQUFXQSxBQU1kLENBNUNlLEFBZUEsR0FtQ2YsUUF0Qm1CLEFBV0EsWUFmbkIsQUF1QkEsS0FsQnlCLEFBV1IsZ0JBQU8sT0FWSixBQVdwQixXQW5DeUIsQUE0QkosT0FIckIsS0E5QnlCLEFBZUEsaUZBbUJ6QixNQTVCcUIsWUFMQSxBQWVBLGlGQVRBLFlBTHJCLEFBZUEsT0FUQSIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL21haW4vbGF5b3V0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgT05fRVZFTlQgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbi8vaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvYm9vdHN0cmFwLnNjc3MnO1xuaW1wb3J0ICcuL2Jhc2Uuc2Nzcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgUG9wb3ZlciwgUG9wb3ZlckJvZHksIFNwaW5uZXIsIE1vZGFsIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBjb2xvciwgZm9udCB9IGZyb20gJy4uLy4uL2xheW91dC92YXInO1xuaW1wb3J0IFRpdGxlIGZyb20gJy4uL21haW4vdGl0bGUnO1xuXG5jb25zdCBMb2dpbiA9ICh7IHByaW0sIHRpdGxlLCBldmVudCwgc2V0RG9uYXRlLCBzZXRMb2dpbiB9KSA9PiB7XG5cbiAgY29uc3QgW21haWwsIHNldE1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzcywgc2V0UGFzc10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFttYWlsUG9wLCBzZXRNYWlsUG9wXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Bhc3NQb3AsIHNldFBhc3NQb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGlzYWJsZSwgc2V0RGlzYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyhlKSA9PiB7XG4gICAgdHJ5e1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2V0RGlzYWJsZSh0cnVlKTtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIG1haWwsXG4gICAgICAgIHBhc3NcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJywgZGF0YSk7XG4gICAgICBpZihyZXMuZGF0YSA9PT0gJ21haWwnKSB7XG4gICAgICAgICBzZXRNYWlsUG9wKHRydWUpO1xuICAgICAgICAgcmV0dXJuIHNldERpc2FibGUoZmFsc2UpO1xuICAgICAgfVxuICAgICAgaWYocmVzLmRhdGEgPT09ICdwYXNzJyl7XG4gICAgICAgIHNldFBhc3NQb3AodHJ1ZSlcbiAgICAgICAgcmV0dXJuIHNldERpc2FibGUoZmFsc2UpO1xuICAgICAgfTtcbiAgICAgIGlmKGV2ZW50KXtcbiAgICAgICAgc2V0TG9naW4oZmFsc2UpO1xuICAgICAgICBzZXREb25hdGUodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBSb3V0ZXIucHVzaChgL3BlcmZpbC8ke3Jlcy5kYXRhfWApO1xuICAgICAgfVxuICAgIH1jYXRjaChlKXtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybihcbiAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgIDxoZWFkZXI+PGgxPkluaWNpYXIgU2VzaW9uPC9oMT48L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1haWxcIj5cbiAgICAgICAgICA8cD5Vc3VhcmlvPC9wPlxuICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZGlzYWJsZX0gb25Gb2N1cz17KCk9PiBzZXRNYWlsUG9wKGZhbHNlKX0gdmFsdWU9e21haWx9IG9uQ2hhbmdlPXsoZSk9PiBzZXRNYWlsKGUuY3VycmVudFRhcmdldC52YWx1ZSl9IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtYWlsXCIgbmFtZT1cIm1haWxcIi8+XG4gICAgICAgICAgPFBvcG92ZXIgdGFyZ2V0PVwibWFpbFwiIHBsYWNlbWVudD1cInJpZ2h0XCIgaXNPcGVuPXttYWlsUG9wfT5cbiAgICAgICAgICAgIDxQb3BvdmVyQm9keT5FbCBjb3JyZW8gbm8gZXMgdmFsaWRvPC9Qb3BvdmVyQm9keT5cbiAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc1wiPlxuICAgICAgICAgIDxwPmNvbnRyYXNlw7FhPC9wPlxuICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZGlzYWJsZX0gb25Gb2N1cz17KCk9PiBzZXRQYXNzUG9wKGZhbHNlKX0gdmFsdWU9e3Bhc3N9IG9uQ2hhbmdlPXsoZSk9PiBzZXRQYXNzKGUuY3VycmVudFRhcmdldC52YWx1ZSl9IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzXCIgaWQ9XCJwYXNzXCIvPlxuICAgICAgICAgIDxQb3BvdmVyIHRhcmdldD1cInBhc3NcIiBwbGFjZW1lbnQ9XCJyaWdodFwiIGlzT3Blbj17cGFzc1BvcH0+XG4gICAgICAgICAgICA8UG9wb3ZlckJvZHk+TGEgY29udHJhc2XDsWEgbm8gZXMgdmFsaWRhPC9Qb3BvdmVyQm9keT5cbiAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIHtcbiAgICAgICAgICBkaXNhYmxlID8gPFNwaW5uZXIgY29sb3I9eyB0aXRsZSA9PT0gJ3NpZW1icmEnID8gJ21haW4tZ3JlZW4nIDogdGl0bGUgPT09ICdheXVkYScgPyAnbWFpbi1yZWQnIDogJ21haW4tYmx1ZScgfSAvPiA6IDxidXR0b24gZGlzYWJsZWQ9e2Rpc2FibGV9IHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICB9XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZm9ybXtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlcntcbiAgICAgICAgICBjb2xvcjogJHtwcmltIHx8IGNvbG9yLnByaW19O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5e1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGxhYmVsOm50aC1jaGlsZCgxKXtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIGxhYmVsIHB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjIpO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0OmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3ByaW0gfHwgY29sb3IucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b257XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtwcmltIHx8IGNvbG9yLnByaW19O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICBjb2xvcjogJHtwcmltIHx8IGNvbG9yLnByaW19O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3ByaW0gfHwgY29sb3IucHJpbX07XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VSZWR1Y2VyKChzdGF0ZSwgbmV4dCkgPT4gKHsgLi4uc3RhdGUsIC4uLm5leHQgfSkse1xuICAgIG5hbWU6ICcnLFxuICAgIGxhc3ROYW1lOiAnJyxcbiAgICBtYWlsOiAnJyxcbiAgICBwYXNzOiAnJyxcbiAgICBiaXJ0aGRheTogJycsXG4gICAgZ2VucmU6ICdNdWplcicsXG4gIH0pXG4gIGNvbnN0IFtkaXNhYmxlLCBzZXREaXNhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21haWxQb3AsIHNldE1haWxQb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xuICAgIHRyeXtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGRhdGEgPSB2YWx1ZTtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy91c2VyL3JlZ2lzdGVyJywgZGF0YSk7XG4gICAgICBpZihyZXMuZGF0YSA9PT0gJ21haWwnKXtcbiAgICAgICAgc2V0TWFpbFBvcCh0cnVlKTtcbiAgICAgICAgcmV0dXJuIHNldERpc2FibGUoZmFsc2UpO1xuICAgICAgfVxuICAgICAgUm91dGVyLnB1c2goYC9wZXJmaWwvJHtyZXMuZGF0YX1gKTtcbiAgICB9Y2F0Y2goZSl7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4oXG4gICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBtZXRob2Q9XCJQT1NUXCI+XG4gICAgICA8aGVhZGVyPjxoMT5SZWdpc3RybzwvaDE+PC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdWxsTmFtZVwiPlxuICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZGlzYWJsZX0gdmFsdWU9e3ZhbHVlLm5hbWV9IG9uQ2hhbmdlID0geyhlKT0+IHNldFZhbHVlKHsgbmFtZTogZS5jdXJyZW50VGFyZ2V0LnZhbHVlIH0pfSB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiTm9tYnJlXCIvPlxuICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZGlzYWJsZX0gdmFsdWU9e3ZhbHVlLmxhc3ROYW1lfSBvbkNoYW5nZSA9IHsoZSk9PiBzZXRWYWx1ZSh7IGxhc3ROYW1lOiBlLmN1cnJlbnRUYXJnZXQudmFsdWUgfSl9IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJsYXN0TmFtZVwiIHBsYWNlaG9sZGVyPVwiQXBlbGxpZG9cIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW5wdXQgZGlzYWJsZWQ9e2Rpc2FibGV9IHZhbHVlPXt2YWx1ZS5tYWlsfSBvbkNoYW5nZSA9IHsoZSk9PiBzZXRWYWx1ZSh7IG1haWw6IGUuY3VycmVudFRhcmdldC52YWx1ZSB9KX0gb25Gb2N1cz17KCk9PiBzZXRNYWlsUG9wKGZhbHNlKX0gdHlwZT1cInRleHRcIiBpZD1cIm1haWxcIiBwbGFjZWhvbGRlcj1cIkNvcnJlbyBlbGVjdHLDs25pY29cIi8+XG4gICAgICAgIDxQb3BvdmVyIHBsYWNlbWVudD1cImJvdHRvbVwiIHRhcmdldD1cIm1haWxcIiBpc09wZW49e21haWxQb3B9PlxuICAgICAgICAgIDxQb3BvdmVyQm9keT5ZYSBleGlzdGUgdW5hIGN1ZW50YSBjb24gZXN0ZSBjb3JyZW88L1BvcG92ZXJCb2R5PlxuICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZGlzYWJsZX0gdmFsdWU9e3ZhbHVlLnBhc3N9IG9uQ2hhbmdlID0geyhlKT0+IHNldFZhbHVlKHsgcGFzczogZS5jdXJyZW50VGFyZ2V0LnZhbHVlIH0pfSB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3NcIiBwbGFjZWhvbGRlcj1cImNvbnRyYXNlw7FhXCIvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpcnRoX3NleFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYmlydGhkYXlcIj5cbiAgICAgICAgICAgIDxwPkN1bXBsZWHDsW9zPC9wPlxuICAgICAgICAgICAgPGlucHV0IGRpc2FibGVkPXtkaXNhYmxlfSB2YWx1ZT17dmFsdWUuYmlydGhkYXl9IG9uQ2hhbmdlID0geyhlKT0+IHNldFZhbHVlKHsgYmlydGhkYXk6IGUuY3VycmVudFRhcmdldC52YWx1ZSB9KX0gdHlwZT1cImRhdGVcIiBuYW1lPVwiYmlydGhkYXlcIiBpZD1cImJpcnRoZGF5XCIvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnZW5yZVwiPlxuICAgICAgICAgICAgPHA+R2VuZXJvPC9wPlxuICAgICAgICAgICAgPHNlbGVjdCBkaXNhYmxlZD17ZGlzYWJsZX0gdmFsdWU9e3ZhbHVlLmdlbnJlfSBvbkNoYW5nZSA9IHsoZSk9PiBzZXRWYWx1ZSh7IGdlbnJlOiBlLmN1cnJlbnRUYXJnZXQudmFsdWUgfSl9IG5hbWU9XCJnZW5yZVwiIGlkPVwiZ2VucmVcIj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm11amVyXCI+TXVqZXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhvbWJyZVwiPkhvbWJyZTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib3Ryb1wiPk90cm88L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKT0+IE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKHZhbCA9PiBzZXRWYWx1ZSh7IFt2YWxdOiAnJyB9KSl9PmNhbmNlbGFyPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkVudmlhcjwvYnV0dG9uPlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGZvcm17XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlcntcbiAgICAgICAgICBjb2xvcjogJHtjb2xvci5wcmltfTtcbiAgICAgICAgfVxuICAgICAgICAuYm9keXtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXR7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dFt0eXBlPVwiZGF0ZVwiXXtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICAgICAgfVxuICAgICAgICAuZnVsbE5hbWV7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5mdWxsTmFtZSBpbnB1dHtcbiAgICAgICAgfVxuICAgICAgICAuZnVsbE5hbWUgaW5wdXQ6bnRoLWNoaWxkKDIpe1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuYmlydGhfc2V4e1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvci5wcmltfTtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke2NvbG9yLnByaW19O1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9yLnByaW19O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuY29uc3QgTG9nUmVnID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fY29udFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVibGlzaFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250XCI+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFpbl9jb250e1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBhbmltYXRpb246IGRvd24gNjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgICAucHVibGlzaHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9zdGF0aWMvcmFuZG9tL3IxNi5qcGcnKXRvcCBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnR7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIGRvd257XG4gICAgICAgICAgMCV7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgNTAle1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMDAle1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTXlNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgbWVudSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm1haW4ubmF2LnZpc2libGUpO1xuICBjb25zdCBtYWluID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubWFpbi5uYXYpO1xuICBjb25zdCB7IGxvZ2luLCByZWdpc3RlciB9ID0gbWFpbjtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICAgIHtcbiAgICAgICAgbG9naW4gJiYgPExvZ1JlZz48TG9naW4gLz48L0xvZ1JlZz5cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgcmVnaXN0ZXIgJiYgPExvZ1JlZz48UmVnaXN0ZXIgLz48L0xvZ1JlZz5cbiAgICAgIH1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1vZGFse1xuICAgICAgICAgIGRpc3BsYXk6ICR7bWVudSA/ICdibG9jaycgOiAnbm9uZSd9O1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgICAgICAgei1pbmRleDogMTUwO1xuICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEV2ZW50SG9tZSA9ICh7IGN1cnJlbnQsIHNldERvbmF0ZSB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT57Y3VycmVudC50aXRsZX08L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YlRpdGxlXCI+e2N1cnJlbnQuc3ViVGl0bGV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgIDxwPntjdXJyZW50LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGJ1dHRvbj5QYXJ0aWNpcGFyPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBzZXREb25hdGUodHJ1ZSl9PkRvbmFyPC9idXR0b24+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciBkaXZ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICBtYXJnaW46IDVyZW0gMCAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIGgxLCBwe1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgaDEsIC5zdWJUaXRsZXtcbiAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICBjb2xvcjogJHtjdXJyZW50LnByaW19O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3VycmVudC5wcmltfTtcbiAgICAgICAgICBjb2xvcjogJHtjdXJyZW50LnByaW19O1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3VycmVudC5wcmltfTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICAuYm9keXtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciBidXR0b257XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IERvbmF0ZSA9ICh7IGN1cnJlbnQgfSkgPT4ge1xuICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2RvbmF0ZSwgc2V0RG9uYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3dlbGNvbWUsIHNldFdlbGNvbWVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbW91bnQsIHNldE1vdW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7IGZ1bGxOYW1lOiAnc3RhciBncmVlbicsIHBlcmZpbEltZzogJy9zdGF0aWMvcmFuZG9tL3I1LmpwZycgfSk7XG4gIGNvbnN0IG9uVGVzdCA9IGFzeW5jKCk9PiB7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCcvdXNlci90ZXN0TG9naW4nKTtcbiAgICAgIGlmKHJlcy5kYXRhKXtcbiAgICAgICAgc2V0TG9hZGVyKGZhbHNlKTtcbiAgICAgICAgc2V0VXNlcihyZXMuZGF0YSk7XG4gICAgICAgIHNldERvbmF0ZSh0cnVlKTtcbiAgICAgIH1cbiAgICB9Y2F0Y2goZSl7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHNldExvYWRlcihmYWxzZSk7XG4gICAgICBzZXRMb2dpbih0cnVlKTtcbiAgICB9XG4gIH1cbiAgICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgICBvblRlc3QoKTtcbiAgICB9LFtsb2dpbl0pXG5cbiAgICBjb25zdCBvbkRvbmF0ZSA9IGFzeW5jKGUpID0+IHtcbiAgICAgIHRyeXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXREb25hdGUoZmFsc2UpO1xuICAgICAgICBzZXRMb2FkZXIodHJ1ZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICBzZXRMb2FkZXIoZmFsc2UpO1xuICAgICAgICAgIHNldFdlbGNvbWUodHJ1ZSk7XG4gICAgICAgIH0sMjAwMCk7XG4gICAgICB9Y2F0Y2goZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfVxuICAgIH1cbiAgY29uc3QgeyBwZXJmaWxJbWcsIGZ1bGxOYW1lLCB3YWxsZXQgfSA9IHVzZXI7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIHtcbiAgICAgICAgbG9hZGVyICYmIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+PFNwaW5uZXIgY29sb3I9eyBjdXJyZW50LnRpdGxlID09PSAnc2llbWJyYScgPyAnbWFpbi1ncmVlbicgOiBjdXJyZW50LnRpdGxlID09PSAnYXl1ZGEnID8gJ21haW4tcmVkJyA6ICdtYWluLWJsdWUnIH0gLz48L2Rpdj5cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgbG9naW4gJiYgPGRpdiBldmVudCBjbGFzc05hbWU9XCJsb2dpblwiPjxMb2dpbiBldmVudCBzZXREb25hdGU9e3NldERvbmF0ZX0gc2V0TG9naW49e3NldExvZ2lufSBwcmltPXsgY3VycmVudC5wcmltIH0gdGl0bGU9e2N1cnJlbnQudGl0bGV9IC8+PC9kaXY+XG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGRvbmF0ZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX2RvbmF0ZSBhbmltYXRlZCBmYWRlSW5cIj5cbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlciBhbmltYXRlZCBmYWRlSW4gZGVsYXktMXNcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGVyZmlsSW1nfSBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgPHA+e2Z1bGxOYW1lfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm91bmQgYW5pbWF0ZWQgZmxpcEluWCBkZWxheS0yc1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9ncmVlbmNvaW4uc3ZnXCIgYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgIDxwPnt3YWxsZXR9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlZCBmYWRlSW4gZGVsYXktMnNcIj5cbiAgICAgICAgICAgICAgPGgxPkRvbmFyPC9oMT5cbiAgICAgICAgICAgICAgPHA+SW5ncmVzYSB1biBtb250byBlbiBncmVlbmNvaW5zLCBsb3MgbWlzbW9zIHNlcmFuIGRlc2NvbnRhZG9zIGRlIHN1IGN1ZW50YSB5IHNlcmFuIHJlY2liaWRvcyBwb3IgbGFzIG9nYW5pemFjaW9uZXMgcXVlIGFwb3lhbiBlc3RhIGNhdXNhLjwvcD5cbiAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwiUE9TVFwiIG9uU3VibWl0PXtvbkRvbmF0ZX0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXttb3VudH0gb25DaGFuZ2U9eyhlKT0+IHNldE1vdW50KGUuY3VycmVudFRhcmdldC52YWx1ZSl9IHR5cGU9XCJudW1iZXJcIi8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+ZG9uYXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgd2VsY29tZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lIGFuaW1hdGVkIGZhZGVJblwiPlxuICAgICAgICAgICAgPGgxPkZlbGljaWRhZGVzLCB5YSBlcmVzIGVtYmFqYWRvciBkZSBlc3RlIGV2ZW50bzwvaDE+XG4gICAgICAgICAgICA8cD5Qb2RyYXMgc2VndWlyIGxvIHF1ZSBoYWNlbW9zIGNvbiB0dSBjb2xhYm9yYWNpb24gZW4gZWwgc2lndWllbnRlIDxhIGhyZWY9XCIjXCI+RW5sYWNlLjwvYT48L3A+XG4gICAgICAgICAgICA8cD5EZSBpZ3VhbCBtYW5lcmEgbGFzIGFjdHVhbGl6YWNpb25lcyBkZWwgZXZlbnRvIHNlcmFuIHB1YmxpY2FkYXMgZW4gdHUgbXVyby48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIHB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5sb2FkZXJ7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubG9naW57XG4gICAgICAgICAgaGVpZ2h0OiA2MCU7XG4gICAgICAgIH1cbiAgICAgICAgLm1haW5fZG9uYXRlIGgxe1xuICAgICAgICAgIGNvbG9yOiAke2N1cnJlbnQucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgLnVzZXIgaW1ne1xuICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmZvdW5ke1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZm91bmQgaW1ne1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb247IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dHtcbiAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgfVxuICAgICAgICAud2VsY29tZSBoMSwgYXtcbiAgICAgICAgICBjb2xvcjogJHtjdXJyZW50LnByaW19O1xuICAgICAgICB9XG4gICAgICAgIC53ZWxjb21lIGF7XG4gICAgICAgICAgZm9udC13aWdodDogNTUwO1xuICAgICAgICB9XG4gICAgICAgIC53ZWxjb21lIHB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBFdmVudHMgPSAoKSA9PiB7XG4gIGNvbnN0IGV2ZW50cyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmV2ZW50cyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyB2aXNpYmxlLCBjdXJyZW50IH0gPSBldmVudHM7XG4gIGNvbnN0IFtkb25hdGUsIHNldERvbmF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKT0+IHNldERvbmF0ZSh0cnVlKSxbdmlzaWJsZV0pO1xuICByZXR1cm4oXG4gICAgPE1vZGFsIGlzT3Blbj17dmlzaWJsZX0gc3R5bGU9e3sgbWluV2lkdGg6ICc5NXZ3JyB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8YnV0dG9uIHRpdGxlPVwiQ2VycmFyXCIgb25DbGljaz17KCk9PiBkaXNwYXRjaCh7IHR5cGU6IE9OX0VWRU5ULCBldmVudFR5cGU6IG51bGwgfSl9Plg8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cbiAgICAgICAgICA8aW1nIHNyYz17Y3VycmVudC5pbWd9IGFsdD1cIlwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRvbmF0ZSA/IDxEb25hdGUgY3VycmVudD17Y3VycmVudH0gLz4gOiA8RXZlbnRIb21lIGN1cnJlbnQ9e2N1cnJlbnR9IHNldERvbmF0ZT17c2V0RG9uYXRlfSAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWFpbntcbiAgICAgICAgICAgIC8vaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW1nLCAuaW5mb3tcbiAgICAgICAgICAgIC8vd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIC8vaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICBvYmplY3QtcG9zaXRpb246ICR7Y3VycmVudC5wcmltID09PSBcIiMwM2E3ZjBcIiA/ICd0b3AnIDogJ2JvdHRvbScgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmluZm97XG4gICAgICAgICAgICBwYWRkaW5nOiAuNXJlbSAuNXJlbSAuNXJlbSAxcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtjdXJyZW50LnByaW19O1xuICAgICAgICAgICAgY29sb3I6ICR7Y3VycmVudC5wcmltfTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IC41cmVtO1xuICAgICAgICAgICAgcmlnaHQ6IC41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246aG92ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2N1cnJlbnQucHJpbX07XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpe1xuICAgICAgICAgICAgLm1haW57XG4gICAgICAgICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbWcsIC5pbmZve1xuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9Nb2RhbD5cbiAgKVxufVxuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9hbmltYXRlLm1pbi5jc3NcIi8+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9hb3MuY3NzXCIvPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFyY2hpdm8rQmxhY2t8T3BlbitTYW5zfFBhY2lmaWNvJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxFdmVudHMgLz5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxNZW51IC8+XG4gICAgICA8TXlNb2RhbCAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXZ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgbWFpbntcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */
/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/layout.jsx */`));
};

const Events = () => {
  const events = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.events);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const {
    visible,
    current
  } = events;
  const {
    0: donate,
    1: setDonate
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => setDonate(true), [visible]);
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Modal"], {
    isOpen: visible,
    style: {
      minWidth: '95vw'
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["877099070", [current.prim === "#03a7f0" ? 'top' : 'bottom', current.prim, current.prim, current.prim]]]) + " " + "main"
  }, __jsx("button", {
    title: "Cerrar",
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["ON_EVENT"],
      eventType: null
    }),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["877099070", [current.prim === "#03a7f0" ? 'top' : 'bottom', current.prim, current.prim, current.prim]]])
  }, "X"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["877099070", [current.prim === "#03a7f0" ? 'top' : 'bottom', current.prim, current.prim, current.prim]]]) + " " + "img"
  }, __jsx("img", {
    src: current.img,
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["877099070", [current.prim === "#03a7f0" ? 'top' : 'bottom', current.prim, current.prim, current.prim]]])
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["877099070", [current.prim === "#03a7f0" ? 'top' : 'bottom', current.prim, current.prim, current.prim]]]) + " " + "info"
  }, donate ? __jsx(Donate, {
    current: current
  }) : __jsx(EventHome, {
    current: current,
    setDonate: setDonate
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "877099070",
    dynamic: [current.prim === "#03a7f0" ? 'top' : 'bottom', current.prim, current.prim, current.prim]
  }, `.main.__jsx-style-dynamic-selector{height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;}.img.__jsx-style-dynamic-selector,.info.__jsx-style-dynamic-selector{height:50%;}img.__jsx-style-dynamic-selector{width:100%;height:100%;object-fit:cover;object-position:${current.prim === "#03a7f0" ? 'top' : 'bottom'};}.info.__jsx-style-dynamic-selector{padding:.5rem .5rem .5rem 1rem;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}button.__jsx-style-dynamic-selector{background:transparent;border:2px solid ${current.prim};color:${current.prim};-webkit-transition:250ms ease;transition:250ms ease;position:absolute;top:.5rem;right:.5rem;}button.__jsx-style-dynamic-selector:focus{outline:none;}button.__jsx-style-dynamic-selector:hover{background:${current.prim};color:#fff;}@media(min-width:768px){.main.__jsx-style-dynamic-selector{height:80vh;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.img.__jsx-style-dynamic-selector,.info.__jsx-style-dynamic-selector{width:50%;height:100%;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9sYXlvdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9rQm9CLEFBSTBCLEFBUUYsQUFHQSxBQU1vQixBQU1SLEFBU1YsQUFHMkIsQUFLMUIsQUFJRixVQUNFLENBcENoQixBQUdjLENBNkJTLENBeENSLEFBZ0NmLFNBYUUsQ0FqQ2lCLEFBVzZCLFFBTmxDLFNBSmlDLEFBc0JsQyxHQWpCRSxRQWtCZixrQkFacUMsWUFpQm5DLElBM0JGLEVBYndCLGlCQXdCQSxhQU5BLHVDQU9KLFNBeEJBLFNBeUJSLFNBeEJaLENBeUJjLFdBUmQsQ0FTQSIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL21haW4vbGF5b3V0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgT05fRVZFTlQgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbi8vaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvYm9vdHN0cmFwLnNjc3MnO1xuaW1wb3J0ICcuL2Jhc2Uuc2Nzcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgUG9wb3ZlciwgUG9wb3ZlckJvZHksIFNwaW5uZXIsIE1vZGFsIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBjb2xvciwgZm9udCB9IGZyb20gJy4uLy4uL2xheW91dC92YXInO1xuaW1wb3J0IFRpdGxlIGZyb20gJy4uL21haW4vdGl0bGUnO1xuXG5jb25zdCBMb2dpbiA9ICh7IHByaW0sIHRpdGxlLCBldmVudCwgc2V0RG9uYXRlLCBzZXRMb2dpbiB9KSA9PiB7XG5cbiAgY29uc3QgW21haWwsIHNldE1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzcywgc2V0UGFzc10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFttYWlsUG9wLCBzZXRNYWlsUG9wXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Bhc3NQb3AsIHNldFBhc3NQb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGlzYWJsZSwgc2V0RGlzYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyhlKSA9PiB7XG4gICAgdHJ5e1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2V0RGlzYWJsZSh0cnVlKTtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIG1haWwsXG4gICAgICAgIHBhc3NcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJywgZGF0YSk7XG4gICAgICBpZihyZXMuZGF0YSA9PT0gJ21haWwnKSB7XG4gICAgICAgICBzZXRNYWlsUG9wKHRydWUpO1xuICAgICAgICAgcmV0dXJuIHNldERpc2FibGUoZmFsc2UpO1xuICAgICAgfVxuICAgICAgaWYocmVzLmRhdGEgPT09ICdwYXNzJyl7XG4gICAgICAgIHNldFBhc3NQb3AodHJ1ZSlcbiAgICAgICAgcmV0dXJuIHNldERpc2FibGUoZmFsc2UpO1xuICAgICAgfTtcbiAgICAgIGlmKGV2ZW50KXtcbiAgICAgICAgc2V0TG9naW4oZmFsc2UpO1xuICAgICAgICBzZXREb25hdGUodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBSb3V0ZXIucHVzaChgL3BlcmZpbC8ke3Jlcy5kYXRhfWApO1xuICAgICAgfVxuICAgIH1jYXRjaChlKXtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybihcbiAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgIDxoZWFkZXI+PGgxPkluaWNpYXIgU2VzaW9uPC9oMT48L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1haWxcIj5cbiAgICAgICAgICA8cD5Vc3VhcmlvPC9wPlxuICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZGlzYWJsZX0gb25Gb2N1cz17KCk9PiBzZXRNYWlsUG9wKGZhbHNlKX0gdmFsdWU9e21haWx9IG9uQ2hhbmdlPXsoZSk9PiBzZXRNYWlsKGUuY3VycmVudFRhcmdldC52YWx1ZSl9IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtYWlsXCIgbmFtZT1cIm1haWxcIi8+XG4gICAgICAgICAgPFBvcG92ZXIgdGFyZ2V0PVwibWFpbFwiIHBsYWNlbWVudD1cInJpZ2h0XCIgaXNPcGVuPXttYWlsUG9wfT5cbiAgICAgICAgICAgIDxQb3BvdmVyQm9keT5FbCBjb3JyZW8gbm8gZXMgdmFsaWRvPC9Qb3BvdmVyQm9keT5cbiAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc1wiPlxuICAgICAgICAgIDxwPmNvbnRyYXNlw7FhPC9wPlxuICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZGlzYWJsZX0gb25Gb2N1cz17KCk9PiBzZXRQYXNzUG9wKGZhbHNlKX0gdmFsdWU9e3Bhc3N9IG9uQ2hhbmdlPXsoZSk9PiBzZXRQYXNzKGUuY3VycmVudFRhcmdldC52YWx1ZSl9IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzXCIgaWQ9XCJwYXNzXCIvPlxuICAgICAgICAgIDxQb3BvdmVyIHRhcmdldD1cInBhc3NcIiBwbGFjZW1lbnQ9XCJyaWdodFwiIGlzT3Blbj17cGFzc1BvcH0+XG4gICAgICAgICAgICA8UG9wb3ZlckJvZHk+TGEgY29udHJhc2XDsWEgbm8gZXMgdmFsaWRhPC9Qb3BvdmVyQm9keT5cbiAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIHtcbiAgICAgICAgICBkaXNhYmxlID8gPFNwaW5uZXIgY29sb3I9eyB0aXRsZSA9PT0gJ3NpZW1icmEnID8gJ21haW4tZ3JlZW4nIDogdGl0bGUgPT09ICdheXVkYScgPyAnbWFpbi1yZWQnIDogJ21haW4tYmx1ZScgfSAvPiA6IDxidXR0b24gZGlzYWJsZWQ9e2Rpc2FibGV9IHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICB9XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZm9ybXtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlcntcbiAgICAgICAgICBjb2xvcjogJHtwcmltIHx8IGNvbG9yLnByaW19O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5e1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGxhYmVsOm50aC1jaGlsZCgxKXtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIGxhYmVsIHB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjIpO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0OmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3ByaW0gfHwgY29sb3IucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b257XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtwcmltIHx8IGNvbG9yLnByaW19O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICBjb2xvcjogJHtwcmltIHx8IGNvbG9yLnByaW19O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3ByaW0gfHwgY29sb3IucHJpbX07XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VSZWR1Y2VyKChzdGF0ZSwgbmV4dCkgPT4gKHsgLi4uc3RhdGUsIC4uLm5leHQgfSkse1xuICAgIG5hbWU6ICcnLFxuICAgIGxhc3ROYW1lOiAnJyxcbiAgICBtYWlsOiAnJyxcbiAgICBwYXNzOiAnJyxcbiAgICBiaXJ0aGRheTogJycsXG4gICAgZ2VucmU6ICdNdWplcicsXG4gIH0pXG4gIGNvbnN0IFtkaXNhYmxlLCBzZXREaXNhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21haWxQb3AsIHNldE1haWxQb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xuICAgIHRyeXtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGRhdGEgPSB2YWx1ZTtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy91c2VyL3JlZ2lzdGVyJywgZGF0YSk7XG4gICAgICBpZihyZXMuZGF0YSA9PT0gJ21haWwnKXtcbiAgICAgICAgc2V0TWFpbFBvcCh0cnVlKTtcbiAgICAgICAgcmV0dXJuIHNldERpc2FibGUoZmFsc2UpO1xuICAgICAgfVxuICAgICAgUm91dGVyLnB1c2goYC9wZXJmaWwvJHtyZXMuZGF0YX1gKTtcbiAgICB9Y2F0Y2goZSl7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4oXG4gICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBtZXRob2Q9XCJQT1NUXCI+XG4gICAgICA8aGVhZGVyPjxoMT5SZWdpc3RybzwvaDE+PC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdWxsTmFtZVwiPlxuICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZGlzYWJsZX0gdmFsdWU9e3ZhbHVlLm5hbWV9IG9uQ2hhbmdlID0geyhlKT0+IHNldFZhbHVlKHsgbmFtZTogZS5jdXJyZW50VGFyZ2V0LnZhbHVlIH0pfSB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiTm9tYnJlXCIvPlxuICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZGlzYWJsZX0gdmFsdWU9e3ZhbHVlLmxhc3ROYW1lfSBvbkNoYW5nZSA9IHsoZSk9PiBzZXRWYWx1ZSh7IGxhc3ROYW1lOiBlLmN1cnJlbnRUYXJnZXQudmFsdWUgfSl9IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJsYXN0TmFtZVwiIHBsYWNlaG9sZGVyPVwiQXBlbGxpZG9cIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW5wdXQgZGlzYWJsZWQ9e2Rpc2FibGV9IHZhbHVlPXt2YWx1ZS5tYWlsfSBvbkNoYW5nZSA9IHsoZSk9PiBzZXRWYWx1ZSh7IG1haWw6IGUuY3VycmVudFRhcmdldC52YWx1ZSB9KX0gb25Gb2N1cz17KCk9PiBzZXRNYWlsUG9wKGZhbHNlKX0gdHlwZT1cInRleHRcIiBpZD1cIm1haWxcIiBwbGFjZWhvbGRlcj1cIkNvcnJlbyBlbGVjdHLDs25pY29cIi8+XG4gICAgICAgIDxQb3BvdmVyIHBsYWNlbWVudD1cImJvdHRvbVwiIHRhcmdldD1cIm1haWxcIiBpc09wZW49e21haWxQb3B9PlxuICAgICAgICAgIDxQb3BvdmVyQm9keT5ZYSBleGlzdGUgdW5hIGN1ZW50YSBjb24gZXN0ZSBjb3JyZW88L1BvcG92ZXJCb2R5PlxuICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZGlzYWJsZX0gdmFsdWU9e3ZhbHVlLnBhc3N9IG9uQ2hhbmdlID0geyhlKT0+IHNldFZhbHVlKHsgcGFzczogZS5jdXJyZW50VGFyZ2V0LnZhbHVlIH0pfSB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3NcIiBwbGFjZWhvbGRlcj1cImNvbnRyYXNlw7FhXCIvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpcnRoX3NleFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYmlydGhkYXlcIj5cbiAgICAgICAgICAgIDxwPkN1bXBsZWHDsW9zPC9wPlxuICAgICAgICAgICAgPGlucHV0IGRpc2FibGVkPXtkaXNhYmxlfSB2YWx1ZT17dmFsdWUuYmlydGhkYXl9IG9uQ2hhbmdlID0geyhlKT0+IHNldFZhbHVlKHsgYmlydGhkYXk6IGUuY3VycmVudFRhcmdldC52YWx1ZSB9KX0gdHlwZT1cImRhdGVcIiBuYW1lPVwiYmlydGhkYXlcIiBpZD1cImJpcnRoZGF5XCIvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnZW5yZVwiPlxuICAgICAgICAgICAgPHA+R2VuZXJvPC9wPlxuICAgICAgICAgICAgPHNlbGVjdCBkaXNhYmxlZD17ZGlzYWJsZX0gdmFsdWU9e3ZhbHVlLmdlbnJlfSBvbkNoYW5nZSA9IHsoZSk9PiBzZXRWYWx1ZSh7IGdlbnJlOiBlLmN1cnJlbnRUYXJnZXQudmFsdWUgfSl9IG5hbWU9XCJnZW5yZVwiIGlkPVwiZ2VucmVcIj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm11amVyXCI+TXVqZXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhvbWJyZVwiPkhvbWJyZTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib3Ryb1wiPk90cm88L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKT0+IE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKHZhbCA9PiBzZXRWYWx1ZSh7IFt2YWxdOiAnJyB9KSl9PmNhbmNlbGFyPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkVudmlhcjwvYnV0dG9uPlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGZvcm17XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlcntcbiAgICAgICAgICBjb2xvcjogJHtjb2xvci5wcmltfTtcbiAgICAgICAgfVxuICAgICAgICAuYm9keXtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXR7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dFt0eXBlPVwiZGF0ZVwiXXtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICAgICAgfVxuICAgICAgICAuZnVsbE5hbWV7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5mdWxsTmFtZSBpbnB1dHtcbiAgICAgICAgfVxuICAgICAgICAuZnVsbE5hbWUgaW5wdXQ6bnRoLWNoaWxkKDIpe1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuYmlydGhfc2V4e1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvci5wcmltfTtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke2NvbG9yLnByaW19O1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9yLnByaW19O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuY29uc3QgTG9nUmVnID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fY29udFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVibGlzaFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250XCI+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFpbl9jb250e1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBhbmltYXRpb246IGRvd24gNjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgICAucHVibGlzaHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9zdGF0aWMvcmFuZG9tL3IxNi5qcGcnKXRvcCBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnR7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIGRvd257XG4gICAgICAgICAgMCV7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgNTAle1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMDAle1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTXlNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgbWVudSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm1haW4ubmF2LnZpc2libGUpO1xuICBjb25zdCBtYWluID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubWFpbi5uYXYpO1xuICBjb25zdCB7IGxvZ2luLCByZWdpc3RlciB9ID0gbWFpbjtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICAgIHtcbiAgICAgICAgbG9naW4gJiYgPExvZ1JlZz48TG9naW4gLz48L0xvZ1JlZz5cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgcmVnaXN0ZXIgJiYgPExvZ1JlZz48UmVnaXN0ZXIgLz48L0xvZ1JlZz5cbiAgICAgIH1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1vZGFse1xuICAgICAgICAgIGRpc3BsYXk6ICR7bWVudSA/ICdibG9jaycgOiAnbm9uZSd9O1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgICAgICAgei1pbmRleDogMTUwO1xuICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEV2ZW50SG9tZSA9ICh7IGN1cnJlbnQsIHNldERvbmF0ZSB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT57Y3VycmVudC50aXRsZX08L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YlRpdGxlXCI+e2N1cnJlbnQuc3ViVGl0bGV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgIDxwPntjdXJyZW50LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGJ1dHRvbj5QYXJ0aWNpcGFyPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBzZXREb25hdGUodHJ1ZSl9PkRvbmFyPC9idXR0b24+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciBkaXZ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICBtYXJnaW46IDVyZW0gMCAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIGgxLCBwe1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgaDEsIC5zdWJUaXRsZXtcbiAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICBjb2xvcjogJHtjdXJyZW50LnByaW19O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3VycmVudC5wcmltfTtcbiAgICAgICAgICBjb2xvcjogJHtjdXJyZW50LnByaW19O1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3VycmVudC5wcmltfTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICAuYm9keXtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciBidXR0b257XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IERvbmF0ZSA9ICh7IGN1cnJlbnQgfSkgPT4ge1xuICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2RvbmF0ZSwgc2V0RG9uYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3dlbGNvbWUsIHNldFdlbGNvbWVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbW91bnQsIHNldE1vdW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7IGZ1bGxOYW1lOiAnc3RhciBncmVlbicsIHBlcmZpbEltZzogJy9zdGF0aWMvcmFuZG9tL3I1LmpwZycgfSk7XG4gIGNvbnN0IG9uVGVzdCA9IGFzeW5jKCk9PiB7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCcvdXNlci90ZXN0TG9naW4nKTtcbiAgICAgIGlmKHJlcy5kYXRhKXtcbiAgICAgICAgc2V0TG9hZGVyKGZhbHNlKTtcbiAgICAgICAgc2V0VXNlcihyZXMuZGF0YSk7XG4gICAgICAgIHNldERvbmF0ZSh0cnVlKTtcbiAgICAgIH1cbiAgICB9Y2F0Y2goZSl7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHNldExvYWRlcihmYWxzZSk7XG4gICAgICBzZXRMb2dpbih0cnVlKTtcbiAgICB9XG4gIH1cbiAgICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgICBvblRlc3QoKTtcbiAgICB9LFtsb2dpbl0pXG5cbiAgICBjb25zdCBvbkRvbmF0ZSA9IGFzeW5jKGUpID0+IHtcbiAgICAgIHRyeXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXREb25hdGUoZmFsc2UpO1xuICAgICAgICBzZXRMb2FkZXIodHJ1ZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICBzZXRMb2FkZXIoZmFsc2UpO1xuICAgICAgICAgIHNldFdlbGNvbWUodHJ1ZSk7XG4gICAgICAgIH0sMjAwMCk7XG4gICAgICB9Y2F0Y2goZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfVxuICAgIH1cbiAgY29uc3QgeyBwZXJmaWxJbWcsIGZ1bGxOYW1lLCB3YWxsZXQgfSA9IHVzZXI7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIHtcbiAgICAgICAgbG9hZGVyICYmIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+PFNwaW5uZXIgY29sb3I9eyBjdXJyZW50LnRpdGxlID09PSAnc2llbWJyYScgPyAnbWFpbi1ncmVlbicgOiBjdXJyZW50LnRpdGxlID09PSAnYXl1ZGEnID8gJ21haW4tcmVkJyA6ICdtYWluLWJsdWUnIH0gLz48L2Rpdj5cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgbG9naW4gJiYgPGRpdiBldmVudCBjbGFzc05hbWU9XCJsb2dpblwiPjxMb2dpbiBldmVudCBzZXREb25hdGU9e3NldERvbmF0ZX0gc2V0TG9naW49e3NldExvZ2lufSBwcmltPXsgY3VycmVudC5wcmltIH0gdGl0bGU9e2N1cnJlbnQudGl0bGV9IC8+PC9kaXY+XG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGRvbmF0ZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX2RvbmF0ZSBhbmltYXRlZCBmYWRlSW5cIj5cbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlciBhbmltYXRlZCBmYWRlSW4gZGVsYXktMXNcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGVyZmlsSW1nfSBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgPHA+e2Z1bGxOYW1lfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm91bmQgYW5pbWF0ZWQgZmxpcEluWCBkZWxheS0yc1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9ncmVlbmNvaW4uc3ZnXCIgYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgIDxwPnt3YWxsZXR9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlZCBmYWRlSW4gZGVsYXktMnNcIj5cbiAgICAgICAgICAgICAgPGgxPkRvbmFyPC9oMT5cbiAgICAgICAgICAgICAgPHA+SW5ncmVzYSB1biBtb250byBlbiBncmVlbmNvaW5zLCBsb3MgbWlzbW9zIHNlcmFuIGRlc2NvbnRhZG9zIGRlIHN1IGN1ZW50YSB5IHNlcmFuIHJlY2liaWRvcyBwb3IgbGFzIG9nYW5pemFjaW9uZXMgcXVlIGFwb3lhbiBlc3RhIGNhdXNhLjwvcD5cbiAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwiUE9TVFwiIG9uU3VibWl0PXtvbkRvbmF0ZX0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXttb3VudH0gb25DaGFuZ2U9eyhlKT0+IHNldE1vdW50KGUuY3VycmVudFRhcmdldC52YWx1ZSl9IHR5cGU9XCJudW1iZXJcIi8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+ZG9uYXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgd2VsY29tZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lIGFuaW1hdGVkIGZhZGVJblwiPlxuICAgICAgICAgICAgPGgxPkZlbGljaWRhZGVzLCB5YSBlcmVzIGVtYmFqYWRvciBkZSBlc3RlIGV2ZW50bzwvaDE+XG4gICAgICAgICAgICA8cD5Qb2RyYXMgc2VndWlyIGxvIHF1ZSBoYWNlbW9zIGNvbiB0dSBjb2xhYm9yYWNpb24gZW4gZWwgc2lndWllbnRlIDxhIGhyZWY9XCIjXCI+RW5sYWNlLjwvYT48L3A+XG4gICAgICAgICAgICA8cD5EZSBpZ3VhbCBtYW5lcmEgbGFzIGFjdHVhbGl6YWNpb25lcyBkZWwgZXZlbnRvIHNlcmFuIHB1YmxpY2FkYXMgZW4gdHUgbXVyby48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIHB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5sb2FkZXJ7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubG9naW57XG4gICAgICAgICAgaGVpZ2h0OiA2MCU7XG4gICAgICAgIH1cbiAgICAgICAgLm1haW5fZG9uYXRlIGgxe1xuICAgICAgICAgIGNvbG9yOiAke2N1cnJlbnQucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgLnVzZXIgaW1ne1xuICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmZvdW5ke1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZm91bmQgaW1ne1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb247IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dHtcbiAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgfVxuICAgICAgICAud2VsY29tZSBoMSwgYXtcbiAgICAgICAgICBjb2xvcjogJHtjdXJyZW50LnByaW19O1xuICAgICAgICB9XG4gICAgICAgIC53ZWxjb21lIGF7XG4gICAgICAgICAgZm9udC13aWdodDogNTUwO1xuICAgICAgICB9XG4gICAgICAgIC53ZWxjb21lIHB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBFdmVudHMgPSAoKSA9PiB7XG4gIGNvbnN0IGV2ZW50cyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmV2ZW50cyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyB2aXNpYmxlLCBjdXJyZW50IH0gPSBldmVudHM7XG4gIGNvbnN0IFtkb25hdGUsIHNldERvbmF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKT0+IHNldERvbmF0ZSh0cnVlKSxbdmlzaWJsZV0pO1xuICByZXR1cm4oXG4gICAgPE1vZGFsIGlzT3Blbj17dmlzaWJsZX0gc3R5bGU9e3sgbWluV2lkdGg6ICc5NXZ3JyB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8YnV0dG9uIHRpdGxlPVwiQ2VycmFyXCIgb25DbGljaz17KCk9PiBkaXNwYXRjaCh7IHR5cGU6IE9OX0VWRU5ULCBldmVudFR5cGU6IG51bGwgfSl9Plg8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cbiAgICAgICAgICA8aW1nIHNyYz17Y3VycmVudC5pbWd9IGFsdD1cIlwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRvbmF0ZSA/IDxEb25hdGUgY3VycmVudD17Y3VycmVudH0gLz4gOiA8RXZlbnRIb21lIGN1cnJlbnQ9e2N1cnJlbnR9IHNldERvbmF0ZT17c2V0RG9uYXRlfSAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWFpbntcbiAgICAgICAgICAgIC8vaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW1nLCAuaW5mb3tcbiAgICAgICAgICAgIC8vd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIC8vaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICBvYmplY3QtcG9zaXRpb246ICR7Y3VycmVudC5wcmltID09PSBcIiMwM2E3ZjBcIiA/ICd0b3AnIDogJ2JvdHRvbScgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmluZm97XG4gICAgICAgICAgICBwYWRkaW5nOiAuNXJlbSAuNXJlbSAuNXJlbSAxcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtjdXJyZW50LnByaW19O1xuICAgICAgICAgICAgY29sb3I6ICR7Y3VycmVudC5wcmltfTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IC41cmVtO1xuICAgICAgICAgICAgcmlnaHQ6IC41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246aG92ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2N1cnJlbnQucHJpbX07XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpe1xuICAgICAgICAgICAgLm1haW57XG4gICAgICAgICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbWcsIC5pbmZve1xuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9Nb2RhbD5cbiAgKVxufVxuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9hbmltYXRlLm1pbi5jc3NcIi8+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9hb3MuY3NzXCIvPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFyY2hpdm8rQmxhY2t8T3BlbitTYW5zfFBhY2lmaWNvJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxFdmVudHMgLz5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxNZW51IC8+XG4gICAgICA8TXlNb2RhbCAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXZ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgbWFpbntcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */
/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/layout.jsx */`)));
};

const Layout = ({
  children
}) => {
  return __jsx("div", {
    className: "jsx-2044012869"
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, __jsx("link", {
    rel: "stylesheet",
    href: "/static/animate.min.css",
    className: "jsx-2044012869"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/static/aos.css",
    className: "jsx-2044012869"
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Archivo+Black|Open+Sans|Pacifico&display=swap",
    rel: "stylesheet",
    className: "jsx-2044012869"
  })), __jsx("main", {
    className: "jsx-2044012869"
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_8__["default"], null), children, __jsx(Events, null)), __jsx(_menu__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx(MyModal, null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2044012869"
  }, "div.jsx-2044012869{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;position:relative;}main.jsx-2044012869{width:100%;position:relative;-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9sYXlvdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZvQmtCLEFBR3dCLEFBS0YsV0FDTyxrQkFDUCw2Q0FOQSxBQU9LLFdBTkUsS0FPcEIsYUFOQSIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL21haW4vbGF5b3V0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgT05fRVZFTlQgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbi8vaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvYm9vdHN0cmFwLnNjc3MnO1xuaW1wb3J0ICcuL2Jhc2Uuc2Nzcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgUG9wb3ZlciwgUG9wb3ZlckJvZHksIFNwaW5uZXIsIE1vZGFsIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBjb2xvciwgZm9udCB9IGZyb20gJy4uLy4uL2xheW91dC92YXInO1xuaW1wb3J0IFRpdGxlIGZyb20gJy4uL21haW4vdGl0bGUnO1xuXG5jb25zdCBMb2dpbiA9ICh7IHByaW0sIHRpdGxlLCBldmVudCwgc2V0RG9uYXRlLCBzZXRMb2dpbiB9KSA9PiB7XG5cbiAgY29uc3QgW21haWwsIHNldE1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzcywgc2V0UGFzc10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFttYWlsUG9wLCBzZXRNYWlsUG9wXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Bhc3NQb3AsIHNldFBhc3NQb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGlzYWJsZSwgc2V0RGlzYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyhlKSA9PiB7XG4gICAgdHJ5e1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2V0RGlzYWJsZSh0cnVlKTtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIG1haWwsXG4gICAgICAgIHBhc3NcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJywgZGF0YSk7XG4gICAgICBpZihyZXMuZGF0YSA9PT0gJ21haWwnKSB7XG4gICAgICAgICBzZXRNYWlsUG9wKHRydWUpO1xuICAgICAgICAgcmV0dXJuIHNldERpc2FibGUoZmFsc2UpO1xuICAgICAgfVxuICAgICAgaWYocmVzLmRhdGEgPT09ICdwYXNzJyl7XG4gICAgICAgIHNldFBhc3NQb3AodHJ1ZSlcbiAgICAgICAgcmV0dXJuIHNldERpc2FibGUoZmFsc2UpO1xuICAgICAgfTtcbiAgICAgIGlmKGV2ZW50KXtcbiAgICAgICAgc2V0TG9naW4oZmFsc2UpO1xuICAgICAgICBzZXREb25hdGUodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBSb3V0ZXIucHVzaChgL3BlcmZpbC8ke3Jlcy5kYXRhfWApO1xuICAgICAgfVxuICAgIH1jYXRjaChlKXtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybihcbiAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgIDxoZWFkZXI+PGgxPkluaWNpYXIgU2VzaW9uPC9oMT48L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1haWxcIj5cbiAgICAgICAgICA8cD5Vc3VhcmlvPC9wPlxuICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZGlzYWJsZX0gb25Gb2N1cz17KCk9PiBzZXRNYWlsUG9wKGZhbHNlKX0gdmFsdWU9e21haWx9IG9uQ2hhbmdlPXsoZSk9PiBzZXRNYWlsKGUuY3VycmVudFRhcmdldC52YWx1ZSl9IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtYWlsXCIgbmFtZT1cIm1haWxcIi8+XG4gICAgICAgICAgPFBvcG92ZXIgdGFyZ2V0PVwibWFpbFwiIHBsYWNlbWVudD1cInJpZ2h0XCIgaXNPcGVuPXttYWlsUG9wfT5cbiAgICAgICAgICAgIDxQb3BvdmVyQm9keT5FbCBjb3JyZW8gbm8gZXMgdmFsaWRvPC9Qb3BvdmVyQm9keT5cbiAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc1wiPlxuICAgICAgICAgIDxwPmNvbnRyYXNlw7FhPC9wPlxuICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZGlzYWJsZX0gb25Gb2N1cz17KCk9PiBzZXRQYXNzUG9wKGZhbHNlKX0gdmFsdWU9e3Bhc3N9IG9uQ2hhbmdlPXsoZSk9PiBzZXRQYXNzKGUuY3VycmVudFRhcmdldC52YWx1ZSl9IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzXCIgaWQ9XCJwYXNzXCIvPlxuICAgICAgICAgIDxQb3BvdmVyIHRhcmdldD1cInBhc3NcIiBwbGFjZW1lbnQ9XCJyaWdodFwiIGlzT3Blbj17cGFzc1BvcH0+XG4gICAgICAgICAgICA8UG9wb3ZlckJvZHk+TGEgY29udHJhc2XDsWEgbm8gZXMgdmFsaWRhPC9Qb3BvdmVyQm9keT5cbiAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIHtcbiAgICAgICAgICBkaXNhYmxlID8gPFNwaW5uZXIgY29sb3I9eyB0aXRsZSA9PT0gJ3NpZW1icmEnID8gJ21haW4tZ3JlZW4nIDogdGl0bGUgPT09ICdheXVkYScgPyAnbWFpbi1yZWQnIDogJ21haW4tYmx1ZScgfSAvPiA6IDxidXR0b24gZGlzYWJsZWQ9e2Rpc2FibGV9IHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICB9XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZm9ybXtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlcntcbiAgICAgICAgICBjb2xvcjogJHtwcmltIHx8IGNvbG9yLnByaW19O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5e1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGxhYmVsOm50aC1jaGlsZCgxKXtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIGxhYmVsIHB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjIpO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0OmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3ByaW0gfHwgY29sb3IucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b257XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtwcmltIHx8IGNvbG9yLnByaW19O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICBjb2xvcjogJHtwcmltIHx8IGNvbG9yLnByaW19O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3ByaW0gfHwgY29sb3IucHJpbX07XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VSZWR1Y2VyKChzdGF0ZSwgbmV4dCkgPT4gKHsgLi4uc3RhdGUsIC4uLm5leHQgfSkse1xuICAgIG5hbWU6ICcnLFxuICAgIGxhc3ROYW1lOiAnJyxcbiAgICBtYWlsOiAnJyxcbiAgICBwYXNzOiAnJyxcbiAgICBiaXJ0aGRheTogJycsXG4gICAgZ2VucmU6ICdNdWplcicsXG4gIH0pXG4gIGNvbnN0IFtkaXNhYmxlLCBzZXREaXNhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21haWxQb3AsIHNldE1haWxQb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xuICAgIHRyeXtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGRhdGEgPSB2YWx1ZTtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy91c2VyL3JlZ2lzdGVyJywgZGF0YSk7XG4gICAgICBpZihyZXMuZGF0YSA9PT0gJ21haWwnKXtcbiAgICAgICAgc2V0TWFpbFBvcCh0cnVlKTtcbiAgICAgICAgcmV0dXJuIHNldERpc2FibGUoZmFsc2UpO1xuICAgICAgfVxuICAgICAgUm91dGVyLnB1c2goYC9wZXJmaWwvJHtyZXMuZGF0YX1gKTtcbiAgICB9Y2F0Y2goZSl7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4oXG4gICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBtZXRob2Q9XCJQT1NUXCI+XG4gICAgICA8aGVhZGVyPjxoMT5SZWdpc3RybzwvaDE+PC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdWxsTmFtZVwiPlxuICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZGlzYWJsZX0gdmFsdWU9e3ZhbHVlLm5hbWV9IG9uQ2hhbmdlID0geyhlKT0+IHNldFZhbHVlKHsgbmFtZTogZS5jdXJyZW50VGFyZ2V0LnZhbHVlIH0pfSB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiTm9tYnJlXCIvPlxuICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZGlzYWJsZX0gdmFsdWU9e3ZhbHVlLmxhc3ROYW1lfSBvbkNoYW5nZSA9IHsoZSk9PiBzZXRWYWx1ZSh7IGxhc3ROYW1lOiBlLmN1cnJlbnRUYXJnZXQudmFsdWUgfSl9IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJsYXN0TmFtZVwiIHBsYWNlaG9sZGVyPVwiQXBlbGxpZG9cIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW5wdXQgZGlzYWJsZWQ9e2Rpc2FibGV9IHZhbHVlPXt2YWx1ZS5tYWlsfSBvbkNoYW5nZSA9IHsoZSk9PiBzZXRWYWx1ZSh7IG1haWw6IGUuY3VycmVudFRhcmdldC52YWx1ZSB9KX0gb25Gb2N1cz17KCk9PiBzZXRNYWlsUG9wKGZhbHNlKX0gdHlwZT1cInRleHRcIiBpZD1cIm1haWxcIiBwbGFjZWhvbGRlcj1cIkNvcnJlbyBlbGVjdHLDs25pY29cIi8+XG4gICAgICAgIDxQb3BvdmVyIHBsYWNlbWVudD1cImJvdHRvbVwiIHRhcmdldD1cIm1haWxcIiBpc09wZW49e21haWxQb3B9PlxuICAgICAgICAgIDxQb3BvdmVyQm9keT5ZYSBleGlzdGUgdW5hIGN1ZW50YSBjb24gZXN0ZSBjb3JyZW88L1BvcG92ZXJCb2R5PlxuICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZGlzYWJsZX0gdmFsdWU9e3ZhbHVlLnBhc3N9IG9uQ2hhbmdlID0geyhlKT0+IHNldFZhbHVlKHsgcGFzczogZS5jdXJyZW50VGFyZ2V0LnZhbHVlIH0pfSB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3NcIiBwbGFjZWhvbGRlcj1cImNvbnRyYXNlw7FhXCIvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpcnRoX3NleFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYmlydGhkYXlcIj5cbiAgICAgICAgICAgIDxwPkN1bXBsZWHDsW9zPC9wPlxuICAgICAgICAgICAgPGlucHV0IGRpc2FibGVkPXtkaXNhYmxlfSB2YWx1ZT17dmFsdWUuYmlydGhkYXl9IG9uQ2hhbmdlID0geyhlKT0+IHNldFZhbHVlKHsgYmlydGhkYXk6IGUuY3VycmVudFRhcmdldC52YWx1ZSB9KX0gdHlwZT1cImRhdGVcIiBuYW1lPVwiYmlydGhkYXlcIiBpZD1cImJpcnRoZGF5XCIvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnZW5yZVwiPlxuICAgICAgICAgICAgPHA+R2VuZXJvPC9wPlxuICAgICAgICAgICAgPHNlbGVjdCBkaXNhYmxlZD17ZGlzYWJsZX0gdmFsdWU9e3ZhbHVlLmdlbnJlfSBvbkNoYW5nZSA9IHsoZSk9PiBzZXRWYWx1ZSh7IGdlbnJlOiBlLmN1cnJlbnRUYXJnZXQudmFsdWUgfSl9IG5hbWU9XCJnZW5yZVwiIGlkPVwiZ2VucmVcIj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm11amVyXCI+TXVqZXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhvbWJyZVwiPkhvbWJyZTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib3Ryb1wiPk90cm88L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKT0+IE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKHZhbCA9PiBzZXRWYWx1ZSh7IFt2YWxdOiAnJyB9KSl9PmNhbmNlbGFyPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkVudmlhcjwvYnV0dG9uPlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGZvcm17XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlcntcbiAgICAgICAgICBjb2xvcjogJHtjb2xvci5wcmltfTtcbiAgICAgICAgfVxuICAgICAgICAuYm9keXtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXR7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dFt0eXBlPVwiZGF0ZVwiXXtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICAgICAgfVxuICAgICAgICAuZnVsbE5hbWV7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5mdWxsTmFtZSBpbnB1dHtcbiAgICAgICAgfVxuICAgICAgICAuZnVsbE5hbWUgaW5wdXQ6bnRoLWNoaWxkKDIpe1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuYmlydGhfc2V4e1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvci5wcmltfTtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke2NvbG9yLnByaW19O1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9yLnByaW19O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuY29uc3QgTG9nUmVnID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fY29udFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVibGlzaFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250XCI+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFpbl9jb250e1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBhbmltYXRpb246IGRvd24gNjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgICAucHVibGlzaHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9zdGF0aWMvcmFuZG9tL3IxNi5qcGcnKXRvcCBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnR7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIGRvd257XG4gICAgICAgICAgMCV7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgNTAle1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMDAle1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTXlNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgbWVudSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm1haW4ubmF2LnZpc2libGUpO1xuICBjb25zdCBtYWluID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubWFpbi5uYXYpO1xuICBjb25zdCB7IGxvZ2luLCByZWdpc3RlciB9ID0gbWFpbjtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICAgIHtcbiAgICAgICAgbG9naW4gJiYgPExvZ1JlZz48TG9naW4gLz48L0xvZ1JlZz5cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgcmVnaXN0ZXIgJiYgPExvZ1JlZz48UmVnaXN0ZXIgLz48L0xvZ1JlZz5cbiAgICAgIH1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1vZGFse1xuICAgICAgICAgIGRpc3BsYXk6ICR7bWVudSA/ICdibG9jaycgOiAnbm9uZSd9O1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgICAgICAgei1pbmRleDogMTUwO1xuICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEV2ZW50SG9tZSA9ICh7IGN1cnJlbnQsIHNldERvbmF0ZSB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT57Y3VycmVudC50aXRsZX08L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YlRpdGxlXCI+e2N1cnJlbnQuc3ViVGl0bGV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgIDxwPntjdXJyZW50LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGJ1dHRvbj5QYXJ0aWNpcGFyPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBzZXREb25hdGUodHJ1ZSl9PkRvbmFyPC9idXR0b24+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciBkaXZ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICBtYXJnaW46IDVyZW0gMCAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIGgxLCBwe1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgaDEsIC5zdWJUaXRsZXtcbiAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICBjb2xvcjogJHtjdXJyZW50LnByaW19O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3VycmVudC5wcmltfTtcbiAgICAgICAgICBjb2xvcjogJHtjdXJyZW50LnByaW19O1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3VycmVudC5wcmltfTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICAuYm9keXtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciBidXR0b257XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IERvbmF0ZSA9ICh7IGN1cnJlbnQgfSkgPT4ge1xuICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2RvbmF0ZSwgc2V0RG9uYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3dlbGNvbWUsIHNldFdlbGNvbWVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbW91bnQsIHNldE1vdW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7IGZ1bGxOYW1lOiAnc3RhciBncmVlbicsIHBlcmZpbEltZzogJy9zdGF0aWMvcmFuZG9tL3I1LmpwZycgfSk7XG4gIGNvbnN0IG9uVGVzdCA9IGFzeW5jKCk9PiB7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCcvdXNlci90ZXN0TG9naW4nKTtcbiAgICAgIGlmKHJlcy5kYXRhKXtcbiAgICAgICAgc2V0TG9hZGVyKGZhbHNlKTtcbiAgICAgICAgc2V0VXNlcihyZXMuZGF0YSk7XG4gICAgICAgIHNldERvbmF0ZSh0cnVlKTtcbiAgICAgIH1cbiAgICB9Y2F0Y2goZSl7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHNldExvYWRlcihmYWxzZSk7XG4gICAgICBzZXRMb2dpbih0cnVlKTtcbiAgICB9XG4gIH1cbiAgICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgICBvblRlc3QoKTtcbiAgICB9LFtsb2dpbl0pXG5cbiAgICBjb25zdCBvbkRvbmF0ZSA9IGFzeW5jKGUpID0+IHtcbiAgICAgIHRyeXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXREb25hdGUoZmFsc2UpO1xuICAgICAgICBzZXRMb2FkZXIodHJ1ZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICBzZXRMb2FkZXIoZmFsc2UpO1xuICAgICAgICAgIHNldFdlbGNvbWUodHJ1ZSk7XG4gICAgICAgIH0sMjAwMCk7XG4gICAgICB9Y2F0Y2goZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfVxuICAgIH1cbiAgY29uc3QgeyBwZXJmaWxJbWcsIGZ1bGxOYW1lLCB3YWxsZXQgfSA9IHVzZXI7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIHtcbiAgICAgICAgbG9hZGVyICYmIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+PFNwaW5uZXIgY29sb3I9eyBjdXJyZW50LnRpdGxlID09PSAnc2llbWJyYScgPyAnbWFpbi1ncmVlbicgOiBjdXJyZW50LnRpdGxlID09PSAnYXl1ZGEnID8gJ21haW4tcmVkJyA6ICdtYWluLWJsdWUnIH0gLz48L2Rpdj5cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgbG9naW4gJiYgPGRpdiBldmVudCBjbGFzc05hbWU9XCJsb2dpblwiPjxMb2dpbiBldmVudCBzZXREb25hdGU9e3NldERvbmF0ZX0gc2V0TG9naW49e3NldExvZ2lufSBwcmltPXsgY3VycmVudC5wcmltIH0gdGl0bGU9e2N1cnJlbnQudGl0bGV9IC8+PC9kaXY+XG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGRvbmF0ZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX2RvbmF0ZSBhbmltYXRlZCBmYWRlSW5cIj5cbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlciBhbmltYXRlZCBmYWRlSW4gZGVsYXktMXNcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGVyZmlsSW1nfSBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgPHA+e2Z1bGxOYW1lfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm91bmQgYW5pbWF0ZWQgZmxpcEluWCBkZWxheS0yc1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9ncmVlbmNvaW4uc3ZnXCIgYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgIDxwPnt3YWxsZXR9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlZCBmYWRlSW4gZGVsYXktMnNcIj5cbiAgICAgICAgICAgICAgPGgxPkRvbmFyPC9oMT5cbiAgICAgICAgICAgICAgPHA+SW5ncmVzYSB1biBtb250byBlbiBncmVlbmNvaW5zLCBsb3MgbWlzbW9zIHNlcmFuIGRlc2NvbnRhZG9zIGRlIHN1IGN1ZW50YSB5IHNlcmFuIHJlY2liaWRvcyBwb3IgbGFzIG9nYW5pemFjaW9uZXMgcXVlIGFwb3lhbiBlc3RhIGNhdXNhLjwvcD5cbiAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwiUE9TVFwiIG9uU3VibWl0PXtvbkRvbmF0ZX0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXttb3VudH0gb25DaGFuZ2U9eyhlKT0+IHNldE1vdW50KGUuY3VycmVudFRhcmdldC52YWx1ZSl9IHR5cGU9XCJudW1iZXJcIi8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+ZG9uYXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgd2VsY29tZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lIGFuaW1hdGVkIGZhZGVJblwiPlxuICAgICAgICAgICAgPGgxPkZlbGljaWRhZGVzLCB5YSBlcmVzIGVtYmFqYWRvciBkZSBlc3RlIGV2ZW50bzwvaDE+XG4gICAgICAgICAgICA8cD5Qb2RyYXMgc2VndWlyIGxvIHF1ZSBoYWNlbW9zIGNvbiB0dSBjb2xhYm9yYWNpb24gZW4gZWwgc2lndWllbnRlIDxhIGhyZWY9XCIjXCI+RW5sYWNlLjwvYT48L3A+XG4gICAgICAgICAgICA8cD5EZSBpZ3VhbCBtYW5lcmEgbGFzIGFjdHVhbGl6YWNpb25lcyBkZWwgZXZlbnRvIHNlcmFuIHB1YmxpY2FkYXMgZW4gdHUgbXVyby48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIHB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5sb2FkZXJ7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubG9naW57XG4gICAgICAgICAgaGVpZ2h0OiA2MCU7XG4gICAgICAgIH1cbiAgICAgICAgLm1haW5fZG9uYXRlIGgxe1xuICAgICAgICAgIGNvbG9yOiAke2N1cnJlbnQucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgLnVzZXIgaW1ne1xuICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmZvdW5ke1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZm91bmQgaW1ne1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb247IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dHtcbiAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgfVxuICAgICAgICAud2VsY29tZSBoMSwgYXtcbiAgICAgICAgICBjb2xvcjogJHtjdXJyZW50LnByaW19O1xuICAgICAgICB9XG4gICAgICAgIC53ZWxjb21lIGF7XG4gICAgICAgICAgZm9udC13aWdodDogNTUwO1xuICAgICAgICB9XG4gICAgICAgIC53ZWxjb21lIHB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBFdmVudHMgPSAoKSA9PiB7XG4gIGNvbnN0IGV2ZW50cyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmV2ZW50cyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyB2aXNpYmxlLCBjdXJyZW50IH0gPSBldmVudHM7XG4gIGNvbnN0IFtkb25hdGUsIHNldERvbmF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKT0+IHNldERvbmF0ZSh0cnVlKSxbdmlzaWJsZV0pO1xuICByZXR1cm4oXG4gICAgPE1vZGFsIGlzT3Blbj17dmlzaWJsZX0gc3R5bGU9e3sgbWluV2lkdGg6ICc5NXZ3JyB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8YnV0dG9uIHRpdGxlPVwiQ2VycmFyXCIgb25DbGljaz17KCk9PiBkaXNwYXRjaCh7IHR5cGU6IE9OX0VWRU5ULCBldmVudFR5cGU6IG51bGwgfSl9Plg8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cbiAgICAgICAgICA8aW1nIHNyYz17Y3VycmVudC5pbWd9IGFsdD1cIlwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRvbmF0ZSA/IDxEb25hdGUgY3VycmVudD17Y3VycmVudH0gLz4gOiA8RXZlbnRIb21lIGN1cnJlbnQ9e2N1cnJlbnR9IHNldERvbmF0ZT17c2V0RG9uYXRlfSAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWFpbntcbiAgICAgICAgICAgIC8vaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW1nLCAuaW5mb3tcbiAgICAgICAgICAgIC8vd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIC8vaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICBvYmplY3QtcG9zaXRpb246ICR7Y3VycmVudC5wcmltID09PSBcIiMwM2E3ZjBcIiA/ICd0b3AnIDogJ2JvdHRvbScgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmluZm97XG4gICAgICAgICAgICBwYWRkaW5nOiAuNXJlbSAuNXJlbSAuNXJlbSAxcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtjdXJyZW50LnByaW19O1xuICAgICAgICAgICAgY29sb3I6ICR7Y3VycmVudC5wcmltfTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IC41cmVtO1xuICAgICAgICAgICAgcmlnaHQ6IC41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246aG92ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2N1cnJlbnQucHJpbX07XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpe1xuICAgICAgICAgICAgLm1haW57XG4gICAgICAgICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbWcsIC5pbmZve1xuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9Nb2RhbD5cbiAgKVxufVxuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9hbmltYXRlLm1pbi5jc3NcIi8+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9hb3MuY3NzXCIvPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFyY2hpdm8rQmxhY2t8T3BlbitTYW5zfFBhY2lmaWNvJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxFdmVudHMgLz5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxNZW51IC8+XG4gICAgICA8TXlNb2RhbCAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXZ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgbWFpbntcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/layout.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/main/menu.jsx":
/*!**********************************!*\
  !*** ./components/main/menu.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var _layout_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layout/main */ "./layout/main.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const Menu = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const visible = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.main.nav.visible);
  const {
    0: perfil,
    1: setPerfil
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const onTest = async () => {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('/user/testLogin');
      setPerfil(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    onTest();
  }, []);
  return __jsx("nav", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4180070995", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]])
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4180070995", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]])
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4180070995", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]])
  }, "Menu"), __jsx("button", {
    title: "Cerrar",
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_MAIN_NAV"]
    }),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4180070995", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]])
  }, "X")), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4180070995", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]])
  }, __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4180070995", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]])
  }, perfil ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: `/perfil/${perfil._id}`
  }, __jsx("a", {
    href: `/perfil/${perfil._id}`,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4180070995", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]])
  }, "Perfil")) : __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_MAIN_LOGIN"]
    }),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4180070995", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]])
  }, "Login")), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4180070995", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]])
  }, __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_MAIN_REGISTER"]
    }),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4180070995", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]])
  }, "Registro")), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4180070995", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]])
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/landing"
  }, __jsx("a", {
    href: "/landing",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4180070995", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]])
  }, "\xBFQue es GreenLink?"))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4180070995", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]])
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4180070995", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]])
  }, "option")), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4180070995", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]])
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4180070995", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]])
  }, "option"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4180070995",
    dynamic: [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']
  }, `nav.__jsx-style-dynamic-selector{background:${_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray};color:${_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark};width:${visible ? '30%' : '0'};height:100vh;-webkit-transition:500ms ease;transition:500ms ease;overflow:hidden;position:relative;z-index:160;-webkit-flex:2 0 1;-ms-flex:2 0 1;flex:2 0 1;position:-webkit-sticky;position:sticky;top:0;}header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:${_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title};padding:1rem;}header.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;margin-left:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}button.__jsx-style-dynamic-selector{background:transparent;border:none;color:${_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark};}button.__jsx-style-dynamic-selector:focus{outline:none;}header.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{font-size:1.5rem;text-align:right;}ul.__jsx-style-dynamic-selector{width:100%;list-style:none;margin:0;padding:0;border-bottom:1px solid #E6EAEA;}li.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector,a.__jsx-style-dynamic-selector{width:100%;border-top:1px solid #E6EAEA;height:70px;text-align:left;font-size:1.4rem;padding-left:2rem;-webkit-transition:250ms ease;transition:250ms ease;-webkit-text-decoration:none;text-decoration:none;color:#333;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}li.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover,a.__jsx-style-dynamic-selector:hover{background:${_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light};}@media(max-width:576px){nav.__jsx-style-dynamic-selector{width:${visible ? '100%' : '0'};}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9tZW51LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ2tCLEFBR21ELEFBZTNCLEFBT0osQUFLYyxBQUtWLEFBR0ksQUFJTixBQU9BLEFBYTZCLEFBSUgsU0F4Q3BCLEVBaUJELEFBT2EsRUFkL0IsSUFHbUIsTUFSTCxHQUpLLENBaUJSLE9BSlgsQ0FScUMsQUFtQ25DLENBdEJVLElBekN5QixBQStDdkIsQUFZZCxNQWpCa0MsTUFNaEIsZ0JBQ0MsRUFwQm5CLElBZGdDLENBZEssR0EwQ3JDLE9BT29CLGtCQUNJLE9BakRULENBc0JmLFlBckJ3QixnQ0FpREQsb0JBaERMLGNBWUcsRUFYRCxjQWdEUCxJQS9DQyxPQWdEQyxLQS9DRiw2Q0FDSyxnQkFTeUIsUUFzQ3RCLGdCQTlDYixNQUdSLFdBTWUsYUFDZiwrQ0FxQ0EiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL21lbnUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBPTl9NQUlOX05BViwgT05fTUFJTl9MT0dJTiwgT05fTUFJTl9SRUdJU1RFUiB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnQgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgTWVudSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB2aXNpYmxlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubWFpbi5uYXYudmlzaWJsZSk7XG4gIGNvbnN0IFtwZXJmaWwsIHNldFBlcmZpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IG9uVGVzdCA9IGFzeW5jKCk9PiB7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCcvdXNlci90ZXN0TG9naW4nKTtcbiAgICAgIHNldFBlcmZpbChyZXMuZGF0YSk7XG4gICAgfWNhdGNoKGUpe1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICB9XG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBvblRlc3QoKTtcbiAgfSxbXSlcbiAgcmV0dXJuKFxuICAgIDxuYXY+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8cD5NZW51PC9wPlxuICAgICAgICA8YnV0dG9uIHRpdGxlPVwiQ2VycmFyXCIgb25DbGljaz17KCk9PiBkaXNwYXRjaCh7IHR5cGU6IE9OX01BSU5fTkFWIH0pfT5YPC9idXR0b24+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBlcmZpbCA/IDxMaW5rIGhyZWY9e2AvcGVyZmlsLyR7cGVyZmlsLl9pZH1gfT48YSBocmVmPXtgL3BlcmZpbC8ke3BlcmZpbC5faWR9YH0+UGVyZmlsPC9hPjwvTGluaz4gOiA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gZGlzcGF0Y2goeyB0eXBlOiBPTl9NQUlOX0xPR0lOIH0pfT5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBkaXNwYXRjaCh7IHR5cGU6IE9OX01BSU5fUkVHSVNURVIgfSl9PlJlZ2lzdHJvPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TGluayBocmVmPScvbGFuZGluZyc+PGEgaHJlZj1cIi9sYW5kaW5nXCI+wr9RdWUgZXMgR3JlZW5MaW5rPzwvYT48L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YnV0dG9uPm9wdGlvbjwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGJ1dHRvbj5vcHRpb248L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG5hdntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9yLmdyYXl9O1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yLmRhcmt9O1xuICAgICAgICAgIHdpZHRoOiAke3Zpc2libGUgPyAnMzAlJyA6ICcwJ307XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiA1MDBtcyBlYXNlO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHotaW5kZXg6IDE2MDtcbiAgICAgICAgICBmbGV4OiAyIDAgMTtcbiAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAvL3RvcDogMDtcbiAgICAgICAgICAvL3JpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlcntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAke2ZvbnQudGl0bGV9O1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIHB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3IuZGFya307XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIGJ1dHRvbntcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgICB1bHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTZFQUVBO1xuICAgICAgICB9XG4gICAgICAgIGxpIGJ1dHRvbiwgYXtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0U2RUFFQTtcbiAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGxpIGJ1dHRvbjpob3ZlciwgYTpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9yLmxpZ2h0fTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA1NzZweCl7XG4gICAgICAgICAgbmF2e1xuICAgICAgICAgICAgd2lkdGg6ICR7dmlzaWJsZSA/ICcxMDAlJyA6ICcwJ307XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L25hdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudTtcbiJdfQ== */
/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/menu.jsx */`));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/main/title.jsx":
/*!***********************************!*\
  !*** ./components/main/title.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/main */ "./layout/main.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid/v1 */ "uuid/v1");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Title = ({
  word
}) => {
  const {
    0: queque,
    1: setQueque
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Array(15).fill(word));
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1369531362", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim]]]) + " " + "shadow"
  }, __jsx("ul", {
    id: "cartext",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1369531362", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim]]])
  }, queque.map((word, i) => __jsx("li", {
    key: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1369531362", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim]]]) + " " + "cartext"
  }, word))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1369531362",
    dynamic: [_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim]
  }, `div.__jsx-style-dynamic-selector{background:#fff;border-top:3px solid ${_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim};border-bottom:3px solid ${_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim};}ul.__jsx-style-dynamic-selector{margin:0;padding:1rem;color:${_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim};display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:250ms ease;transition:250ms ease;-webkit-animation-name:myAni-__jsx-style-dynamic-selector;animation-name:myAni-__jsx-style-dynamic-selector;-webkit-animation-duration:15s;animation-duration:15s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-transform:translateX(-100px);-ms-transform:translateX(-100px);transform:translateX(-100px);}li.__jsx-style-dynamic-selector{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin:0 1rem;-webkit-transition:250ms ease;transition:250ms ease;text-transform:uppercase;}@-webkit-keyframes myAni-__jsx-style-dynamic-selector{0%{-webkit-transform:translateX(-100px);-ms-transform:translateX(-100px);transform:translateX(-100px);}50%{-webkit-transform:translateX(-3px);-ms-transform:translateX(-3px);transform:translateX(-3px);}100%{-webkit-transform:translateX(-100px);-ms-transform:translateX(-100px);transform:translateX(-100px);}}@keyframes myAni-__jsx-style-dynamic-selector{0%{-webkit-transform:translateX(-100px);-ms-transform:translateX(-100px);transform:translateX(-100px);}50%{-webkit-transform:translateX(-3px);-ms-transform:translateX(-3px);transform:translateX(-3px);}100%{-webkit-transform:translateX(-100px);-ms-transform:translateX(-100px);transform:translateX(-100px);}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi90aXRsZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYW1CLEFBRzJCLEFBS1AsQUFhSyxBQU9pQixBQUdGLEFBR0UsU0F6QmxCLE9BTHFDLE1BTWYsa0NBWXJCLENBWEQsU0FOd0MsSUFrQi9CLHVCQVN0QixNQUhBLEFBTUEsb0JBN0JGLEdBa0IyQixTQVpOLGdCQWFyQiw2RUFad0Isb0RBQ0QsNEdBQ0Usc0RBQ2Usb0ZBQ0gsOEVBQ04sbUdBQy9CIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi90aXRsZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbG9yLCBmb250IH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92MSc7XG5cbmNvbnN0IFRpdGxlID0gKHsgd29yZCB9KSA9PiB7XG4gIGNvbnN0IFtxdWVxdWUsIHNldFF1ZXF1ZV0gPSB1c2VTdGF0ZShBcnJheSgxNSkuZmlsbCh3b3JkKSk7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvd1wiPlxuICAgICAgPHVsIGlkPVwiY2FydGV4dFwiPlxuICAgICAgICB7XG4gICAgICAgICAgcXVlcXVlLm1hcCgod29yZCwgaSkgPT4gPGxpIGtleT17dXVpZCgpfSBjbGFzc05hbWU9XCJjYXJ0ZXh0XCI+e3dvcmR9PC9saT4pXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4ID57YFxuICAgICAgICBkaXZ7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBib3JkZXItdG9wOiAzcHggc29saWQgJHtjb2xvci5wcmltfTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJHtjb2xvci5wcmltfTtcbiAgICAgICAgfVxuICAgICAgICB1bHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvci5wcmltfTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogbXlBbmk7XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNXM7XG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XG4gICAgICAgIH1cbiAgICAgICAgbGl7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwIDFyZW07XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgbXlBbml7XG4gICAgICAgICAgMCV7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgNTAle1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMDAle1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaXRsZTtcbiJdfQ== */
/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/title.jsx */`));
};

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./layout/main.js":
/*!************************!*\
  !*** ./layout/main.js ***!
  \************************/
/*! exports provided: color, greenGradient, greenBackground, font, themeGreen, themeRed, themeBlue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greenGradient", function() { return greenGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greenBackground", function() { return greenBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "font", function() { return font; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeGreen", function() { return themeGreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeRed", function() { return themeRed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeBlue", function() { return themeBlue; });
const color = {
  prim: '#8bb940',
  sec: '#669f09',
  light: '#ffffff',
  dark: '#333333',
  gray: '#f4f7f6'
};
const greenGradient = () => `linear-gradient(135deg, ${color.prim}, ${color.sec})`;
const greenBackground = () => `
  background-color: #8bb940;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%238bb940' width='11' height='11'/%3E%3Crect fill='%238ab93f' x='10' width='11' height='11'/%3E%3Crect fill='%238ab83f' y='10' width='11' height='11'/%3E%3Crect fill='%2389b83e' x='20' width='11' height='11'/%3E%3Crect fill='%2389b73d' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%2388b73c' y='20' width='11' height='11'/%3E%3Crect fill='%2387b63c' x='30' width='11' height='11'/%3E%3Crect fill='%2387b63b' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%2386b53a' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%2385b539' y='30' width='11' height='11'/%3E%3Crect fill='%2385b539' x='40' width='11' height='11'/%3E%3Crect fill='%2384b438' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%2384b437' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%2383b336' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%2382b336' y='40' width='11' height='11'/%3E%3Crect fill='%2382b235' x='50' width='11' height='11'/%3E%3Crect fill='%2381b234' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%2381b133' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%2380b133' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%237fb132' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%237fb031' y='50' width='11' height='11'/%3E%3Crect fill='%237eb030' x='60' width='11' height='11'/%3E%3Crect fill='%237daf30' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%237daf2f' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%237cae2e' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%237cae2d' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%237bad2c' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%237aad2b' x='70' width='11' height='11'/%3E%3Crect fill='%237aad2b' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%2379ac2a' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%2378ac29' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%2378ab28' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%2377ab27' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%2377aa26' x='80' width='11' height='11'/%3E%3Crect fill='%2376aa26' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%2375aa25' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%2375a924' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%2374a923' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%2373a822' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%2373a821' x='90' width='11' height='11'/%3E%3Crect fill='%2372a720' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%2371a71f' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%2371a61e' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%2370a61d' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%2370a61c' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%236fa51b' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%236ea51a' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%236ea419' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%236da418' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%236ca317' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%236ca316' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%236ba215' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%236aa213' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%236aa212' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%2369a111' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%2369a10f' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%2368a00e' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%2367a00c' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23679f0b' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23669f09' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
  //background-attachment: fixed;
  background-size: cover;
  `;
const font = {
  title: 'Archivo Black',
  text: 'Open Sans'
};
const themeGreen = {
  index: 1,
  prim: '#8bb940',
  sec: '#478407',
  img: '/static/main/mundi.png',
  textLeft: {
    title: 'EL PLANETA TE NECESITA',
    subTitle: `Unete con nosotros y diviertete, mietras Proteges el medio ambiente, tan solo por usar greenlink.`
  },
  textRight: {
    title: 'PERÚ',
    subTitle: 'Punto de inicio'
  },
  textBottom: 'PROTEGE!'
};
const themeRed = {
  index: 2,
  prim: '#f03103',
  sec: '#a43112',
  img: '/static/main/gift.png',
  textLeft: {
    title: 'LA NAVIDAD ESTA AQUI',
    subTitle: 'Aprovecha esta hermosa epoca del año para compartir con los seres que amas y Alcanzar tus deseos.'
  },
  textRight: {
    title: 'Regalos',
    subTitle: 'Obten el tuyo ¿Que esperas?'
  },
  textBottom: 'ALCANZA!'
};
const themeBlue = {
  index: 3,
  prim: '#03a7f0',
  sec: '#1251a4',
  img: '/static/main/cofee.png',
  textLeft: {
    title: 'AYUDA CON NOSOTROS',
    subTitle: 'En esta epoca los menos afortunados de las regiones andinas necesitan de ti. Participa mientras te diviertes.'
  },
  textRight: {
    title: 'Calidez',
    subTitle: 'Apoya nuestras causas sociales.'
  },
  textBottom: 'PARTICIPA!'
};

/***/ }),

/***/ "./layout/var.js":
/*!***********************!*\
  !*** ./layout/var.js ***!
  \***********************/
/*! exports provided: color, font, size */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "font", function() { return font; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
const color = {
  prim: "#8bb940",
  sec: "#669f09",
  tri: "#007f1a",
  danger: "#ff6c1a",
  alert: "#f9e453",
  gray1: "#ffffff80",
  light: "#fff",
  dark: "#333"
};
const font = {
  title: 'Sansita',
  text: 'Open Sans',
  logo: 'Pacifico'
};
const size = {
  fontXs: "11px",
  fontSm: "14px",
  fontMd: "16px",
  fontLg: "24px",
  fontXl: "48px",
  fontXxl: "72px"
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/aos/src/sass/aos.scss":
/*!********************************************!*\
  !*** ./node_modules/aos/src/sass/aos.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const url = ctx.asPath ? ctx.asPath : url_1.format({
        pathname: ctx.pathname,
        query: ctx.query
      });
      props = await fetch(url, {
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).then(pageProps => {
        return {
          pageProps
        };
      }).catch(err => {
        return {
          error: err.message,
          status
        };
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic prerendering. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_main_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/main/layout */ "./components/main/layout.jsx");
/* harmony import */ var _components_main_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/main/hero */ "./components/main/hero.jsx");
/* harmony import */ var _components_main_greenpost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/main/greenpost */ "./components/main/greenpost.jsx");
/* harmony import */ var _components_main_embajada__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/main/embajada */ "./components/main/embajada.jsx");
/* harmony import */ var _components_main_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/main/events */ "./components/main/events.jsx");
/* harmony import */ var _components_layout_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout/post */ "./components/layout/post.jsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 //import MainSection from '../components/main/main';
//import Embajadores from '../components/main/embajador';
//      <Embajada />





const Main = () => {
  const postVisible = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post.visible);
  return __jsx(_components_main_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_components_main_hero__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_components_main_embajada__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_components_main_events__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(_components_main_greenpost__WEBPACK_IMPORTED_MODULE_4__["default"], null), postVisible && __jsx(_components_layout_post__WEBPACK_IMPORTED_MODULE_7__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./store/actions.js":
/*!**************************!*\
  !*** ./store/actions.js ***!
  \**************************/
/*! exports provided: ON_DOWN, ON_NOTIFICATIONS, ON_VIEW_NAV, ON_NOTE, ON_LOADER, ON_LOGIN, ON_WALLET, navView, ON_USER, ON_UPDATE, ON_STORE, ON_PRODUCTS, storeSections, ON_POST_REGISTER, ON_GREENINFO, ON_GREEN_CREATOR, ON_GREENPOST, ON_GREEN_LIKE, OFF_GREEN_LIKE, ON_GREEN_WISH_FOUND, ON_GREEN_COMMENT, onStore, ON_WISH, ON_FLOAT, OFF_FLOAT, ON_VAULT, ON_VAULT_HOME, ON_VAULT_PRODUCT, ON_SPACE_HOME, ON_SPACE_WALL, ON_SPACE_CHAT, ON_SPACE_FRIENDS, ON_SPACE_EVENTS, ON_POST, ON_WALL_TOP, ON_WALL_POSTS, ON_CONFIRM, ON_CHAT_FRIEND, ON_CHAT_PRIVATE, ON_CHAT_CLOSE, ON_CHAT_MINIMIZE, ON_CHAT_MSG, ON_CHAT_ALERT, ON_MAIN_NAV, ON_MAIN_THEME, ON_MAIN_LOGIN, ON_MAIN_REGISTER, ON_POST_VIEW, ON_EVENT, eventType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_DOWN", function() { return ON_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_NOTIFICATIONS", function() { return ON_NOTIFICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_VIEW_NAV", function() { return ON_VIEW_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_NOTE", function() { return ON_NOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_LOADER", function() { return ON_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_LOGIN", function() { return ON_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_WALLET", function() { return ON_WALLET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navView", function() { return navView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_USER", function() { return ON_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_UPDATE", function() { return ON_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_STORE", function() { return ON_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_PRODUCTS", function() { return ON_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeSections", function() { return storeSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_POST_REGISTER", function() { return ON_POST_REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_GREENINFO", function() { return ON_GREENINFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_GREEN_CREATOR", function() { return ON_GREEN_CREATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_GREENPOST", function() { return ON_GREENPOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_GREEN_LIKE", function() { return ON_GREEN_LIKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OFF_GREEN_LIKE", function() { return OFF_GREEN_LIKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_GREEN_WISH_FOUND", function() { return ON_GREEN_WISH_FOUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_GREEN_COMMENT", function() { return ON_GREEN_COMMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStore", function() { return onStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_WISH", function() { return ON_WISH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_FLOAT", function() { return ON_FLOAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OFF_FLOAT", function() { return OFF_FLOAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_VAULT", function() { return ON_VAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_VAULT_HOME", function() { return ON_VAULT_HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_VAULT_PRODUCT", function() { return ON_VAULT_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_SPACE_HOME", function() { return ON_SPACE_HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_SPACE_WALL", function() { return ON_SPACE_WALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_SPACE_CHAT", function() { return ON_SPACE_CHAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_SPACE_FRIENDS", function() { return ON_SPACE_FRIENDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_SPACE_EVENTS", function() { return ON_SPACE_EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_POST", function() { return ON_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_WALL_TOP", function() { return ON_WALL_TOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_WALL_POSTS", function() { return ON_WALL_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_CONFIRM", function() { return ON_CONFIRM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_CHAT_FRIEND", function() { return ON_CHAT_FRIEND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_CHAT_PRIVATE", function() { return ON_CHAT_PRIVATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_CHAT_CLOSE", function() { return ON_CHAT_CLOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_CHAT_MINIMIZE", function() { return ON_CHAT_MINIMIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_CHAT_MSG", function() { return ON_CHAT_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_CHAT_ALERT", function() { return ON_CHAT_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_MAIN_NAV", function() { return ON_MAIN_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_MAIN_THEME", function() { return ON_MAIN_THEME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_MAIN_LOGIN", function() { return ON_MAIN_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_MAIN_REGISTER", function() { return ON_MAIN_REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_POST_VIEW", function() { return ON_POST_VIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_EVENT", function() { return ON_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventType", function() { return eventType; });
/***********************
NAV
************************/
const ON_DOWN = 'ON_DOWN';
const ON_NOTIFICATIONS = 'ON_NOTIFICATIONS';
const ON_VIEW_NAV = 'ON_VIEW_NAV';
const ON_NOTE = 'ON_NOTE';
const ON_LOADER = 'ON_LOADER';
const ON_LOGIN = 'ON_LOGIN';
const ON_WALLET = 'ON_WALLET';
const navView = {
  GIFT: 'GIFT',
  NOTES: 'NOTES',
  FRIEND: 'FRIEND'
};
/***********************
USER
************************/

const ON_USER = 'ON_USER';
const ON_UPDATE = 'ON_UPDATE';
/************************
STORE
*************************/

const ON_STORE = 'ON_STORE';
const ON_PRODUCTS = 'ON_PRODUCTS';
const storeSections = {
  PRODUCT: 'PRODUCT',
  HOME: 'HOME',
  MUSIC: 'MUSIC',
  JEWEL: 'JEWEL',
  TV: 'TV',
  TOY: 'TOY',
  CANDY: 'CANDY',
  EBOOK: 'EBOOK'
};
/************************
POSTREGISTER
*************************/

const ON_POST_REGISTER = 'ON_POST_REGISTER';
/************************
GREENPOST
*************************/

const ON_GREENINFO = 'ON_GREENINFO';
const ON_GREEN_CREATOR = 'ON_GREEN_CREATOR';
const ON_GREENPOST = 'ON_GREENPOST';
const ON_GREEN_LIKE = 'ON_GREEN_LIKE';
const OFF_GREEN_LIKE = 'OFF_GREEN_LIKE';
const ON_GREEN_WISH_FOUND = 'ON_GREEN_WISH_FOUND';
const ON_GREEN_COMMENT = 'ON_GREEN_COMMENT';
const onStore = () => null;
const ON_WISH = 'ON_WISH';
/****************************
FLOATING NOTES
*****************************/

const ON_FLOAT = 'ON_FLOAT';
const OFF_FLOAT = 'OFF_FLOAT';
/****************************
VAULT
*****************************/

const ON_VAULT = 'ON_VAULT';
const ON_VAULT_HOME = 'ON_VAULT_HOME';
const ON_VAULT_PRODUCT = 'ON_VAULT_PRODUCT';
/****************************
SPACE
*****************************/

const ON_SPACE_HOME = 'ON_SPACE_HOME';
const ON_SPACE_WALL = 'ON_SPACE_WALL';
const ON_SPACE_CHAT = 'ON_SPACE_CHAT';
const ON_SPACE_FRIENDS = 'ON_SPACE_FRIENDS';
const ON_SPACE_EVENTS = 'ON_SPACE_EVENTS';
/****************************
SPACE - WALL
*****************************/

const ON_POST = 'ON_POST';
const ON_WALL_TOP = 'ON_WALL_TOP';
const ON_WALL_POSTS = 'ON_WALL_POSTS';
/****************************
DIALOG - CONFIRM
*****************************/

const ON_CONFIRM = 'ON_CONFIRM';
/****************************
CHAT
*****************************/

const ON_CHAT_FRIEND = 'ON_CHAT_FRIEND';
const ON_CHAT_PRIVATE = 'ON_CHAT_PRIVATE';
const ON_CHAT_CLOSE = 'ON_CHAT_CLOSE';
const ON_CHAT_MINIMIZE = 'ON_CHAT_MINIMIZE';
const ON_CHAT_MSG = 'ON_CHAT_MSG';
const ON_CHAT_ALERT = 'ON_CHAT_ALERT';
/***********************
MAIN
************************/

const ON_MAIN_NAV = 'ON_MAIN_NAV';
const ON_MAIN_THEME = 'ON_MAIN_THEME';
const ON_MAIN_LOGIN = 'ON_MAIN_LOGIN';
const ON_MAIN_REGISTER = 'ON_MAIN_REGISTER';
/************************
POST VIEW
*************************/

const ON_POST_VIEW = 'ON_POST_VIEW';
/************************
EVENTS
*************************/

const ON_EVENT = 'ON_EVENT';
const eventType = {
  DOG: 'DOG',
  TREE: 'TREE',
  COLD: 'COLD'
};

/***/ }),

/***/ "./test/persons.js":
/*!*************************!*\
  !*** ./test/persons.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const uuid = __webpack_require__(/*! uuid/v1 */ "uuid/v1");

const names = ['james', 'johm', 'jenna', 'patrice', 'thera', 'rowan', 'star'];
const lastNames = ['doe', 'doe', 'fire', 'wind', 'earth', 'fire', 'green'];

const persons = num => {
  const persons = [];

  for (let i = 0; i < num; i++) {
    const _id = uuid();

    const person = {
      _id,
      mail: `foo${i + 1}@mail.com`,
      name: names[i],
      lastName: lastNames[i],
      fullName: `${names[i]} ${lastNames[i]}`,
      perfilImg: `/static/persons/person-${i + 1}.jpg`,
      status: 0,
      url: `/perfil/${_id}`
    };
    persons.push(person);
  }

  return persons;
};

module.exports = persons;

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/felix/Documentos/projects/greenlink/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aos");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "uuid/v1":
/*!**************************!*\
  !*** external "uuid/v1" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v1");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
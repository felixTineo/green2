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
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/main/header.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const Logo = () => {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("a", {
    href: "",
    title: "Inicio",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2151060738", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2151060738", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "GREEN"), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2151060738", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "LINK"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2151060738",
    dynamic: [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light],
    __self: undefined
  }, `a.__jsx-style-dynamic-selector,a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:none;text-decoration:none;color:${_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light};margin-left:1rem;}a.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:${_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title};font-size:2rem;}p.__jsx-style-dynamic-selector{margin:0;}span.__jsx-style-dynamic-selector{color:transparent;-webkit-text-stroke:1px ${_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9oZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVrQixBQUdnQyxBQUtSLEFBS0osQUFHUyxTQUZwQixTQUd1RCxnQ0FibEIscUJBY3JDLEdBVDJDLFdBSnhCLGlCQUNuQixhQUlpQixlQUNqQiIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL21haW4vaGVhZGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBPTl9NQUlOX05BViB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnQgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhQmFycyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cblxuY29uc3QgTG9nbyA9ICgpID0+IHtcbiAgcmV0dXJuKFxuICAgIDxMaW5rIGhyZWY9XCIvbWFpblwiPlxuICAgICAgPGEgaHJlZj1cIlwiIHRpdGxlPVwiSW5pY2lvXCI+XG4gICAgICAgIDxwPkdSRUVOPC9wPlxuICAgICAgICA8c3Bhbj5MSU5LPC9zcGFuPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBhLCBhOmhvdmVye1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvci5saWdodH07XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgYXtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAke2ZvbnQudGl0bGV9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgfVxuICAgICAgICBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBzcGFue1xuICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggJHtjb2xvci5saWdodH07XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPC9hPlxuICAgIDwvTGluaz5cbiAgKVxufVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGJhcnMgPSA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBkPVwiTTE2IDEzMmg0MTZjOC44MzcgMCAxNi03LjE2MyAxNi0xNlY3NmMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE2QzcuMTYzIDYwIDAgNjcuMTYzIDAgNzZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnptMCAxNjBoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwYzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnptMCAxNjBoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwYzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnpcIi8+PC9zdmc+XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgcmV0dXJuKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYW5pbWF0ZWQgZmFkZUluXCI+XG4gICAge2NvbnNvbGUubG9nKCdyZW5kZXInKX1cbiAgICAgIDxMb2dvIC8+XG4gICAgICA8YnV0dG9uICBvbkNsaWNrPXsoKT0+IGRpc3BhdGNoKHsgdHlwZTogT05fTUFJTl9OQVYgfSl9PlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmFyc30gLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgcGFkZGluZzogLjglO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHotaW5kZXg6IDE1MDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b257XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNyk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXJ7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */
/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/header.jsx */`)));
};

const Header = () => {
  const bars = __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("path", {
    d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }));

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  return __jsx("header", {
    className: "jsx-3412175527" + " " + "animated fadeIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, console.log('render'), __jsx(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_MAIN_NAV"]
    }),
    className: "jsx-3412175527",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBars"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3412175527",
    __self: undefined
  }, "header.jsx-3412175527{background:transparent;padding:.8%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:fixed;top:0;left:0;width:100%;z-index:150;}button.jsx-3412175527{background:transparent;width:45px;height:45px;border:none;color:rgba(255,255,255,.7);-webkit-transition:250ms ease;transition:250ms ease;}button.jsx-3412175527:focus{outline:none;}button.jsx-3412175527:hover{color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9oZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEa0IsQUFHa0MsQUFZQSxBQVFWLEFBR0YsV0FDYixFQUhBLFVBcEJjLEFBWUQsV0FDQyxDQVpDLFdBYUQsWUFDa0IsMkJBQ1Isd0JBZFEsNEJBZWhDLHVGQWRxQiw2RkFDSixlQUNULE1BQ0MsT0FDSSxXQUNDLFlBQ2QiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL2hlYWRlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgT05fTUFJTl9OQVYgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCB7IGNvbG9yLCBmb250IH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUJhcnMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5cbmNvbnN0IExvZ28gPSAoKSA9PiB7XG4gIHJldHVybihcbiAgICA8TGluayBocmVmPVwiL21haW5cIj5cbiAgICAgIDxhIGhyZWY9XCJcIiB0aXRsZT1cIkluaWNpb1wiPlxuICAgICAgICA8cD5HUkVFTjwvcD5cbiAgICAgICAgPHNwYW4+TElOSzwvc3Bhbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYSwgYTpob3ZlcntcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3IubGlnaHR9O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIGF7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmb250LWZhbWlseTogJHtmb250LnRpdGxlfTtcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIH1cbiAgICAgICAgcHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbntcbiAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4ICR7Y29sb3IubGlnaHR9O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gIClcbn1cblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBiYXJzID0gPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZD1cIk0xNiAxMzJoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZWNzZjMC04LjgzNy03LjE2My0xNi0xNi0xNkgxNkM3LjE2MyA2MCAwIDY3LjE2MyAwIDc2djQwYzAgOC44MzcgNy4xNjMgMTYgMTYgMTZ6bTAgMTYwaDQxNmM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2di00MGMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE2Yy04LjgzNyAwLTE2IDcuMTYzLTE2IDE2djQwYzAgOC44MzcgNy4xNjMgMTYgMTYgMTZ6bTAgMTYwaDQxNmM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2di00MGMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE2Yy04LjgzNyAwLTE2IDcuMTYzLTE2IDE2djQwYzAgOC44MzcgNy4xNjMgMTYgMTYgMTZ6XCIvPjwvc3ZnPlxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIHJldHVybihcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImFuaW1hdGVkIGZhZGVJblwiPlxuICAgIHtjb25zb2xlLmxvZygncmVuZGVyJyl9XG4gICAgICA8TG9nbyAvPlxuICAgICAgPGJ1dHRvbiAgb25DbGljaz17KCk9PiBkaXNwYXRjaCh7IHR5cGU6IE9OX01BSU5fTkFWIH0pfT5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJhcnN9IC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIHBhZGRpbmc6IC44JTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB6LWluZGV4OiAxNTA7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjcpO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/header.jsx */"));
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

var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/main/hero.jsx";

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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["284623145", [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["284623145", [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim]]]) + " " + "line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["284623145", [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim]]]) + " " + "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("button", {
    onClick: () => onTheme(0),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["284623145", [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "1"), __jsx("button", {
    onClick: () => onTheme(1),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["284623145", [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "2"), __jsx("button", {
    onClick: () => onTheme(2),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["284623145", [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "3")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["284623145", [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim]]]) + " " + "line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx("img", {
    id: "logo",
    src: "/static/logo2.png",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["284623145", [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "284623145",
    dynamic: [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim],
    __self: undefined
  }, `nav.__jsx-style-dynamic-selector{position:absolute;top:0;right:0;height:100vh;width:5%;min-width:50px;background:${prim};display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:100;}.line.__jsx-style-dynamic-selector{width:2px;height:25%;background:#fff;content:" ";}img#logo.__jsx-style-dynamic-selector{position:absolute;bottom:.5rem;width:50px;height:50px;}div.nav.__jsx-style-dynamic-selector{margin:2rem 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}button.__jsx-style-dynamic-selector{width:25px;height:25px;border-radius:50%;border:1px solid #fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:transparent;color:#fff;-webkit-transition:250ms ease;transition:250ms ease;cursor:none;}button.__jsx-style-dynamic-selector:nth-child(1){background:${index === 1 ? '#fff' : 'transparent'};color:${index === 1 ? prim : '#fff'};}button.__jsx-style-dynamic-selector:nth-child(2){margin:1rem 0;background:${index === 2 ? '#fff' : 'transparent'};color:${index === 2 ? prim : '#fff'};}button.__jsx-style-dynamic-selector:nth-child(3){background:${index === 3 ? '#fff' : 'transparent'};color:${index === 3 ? prim : '#fff'};}button.__jsx-style-dynamic-selector:hover{background:#fff;color:${prim};}button.__jsx-style-dynamic-selector:focus{outline:none;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9oZXJvLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QmtCLEFBRzZCLEFBY1IsQUFNUSxBQU1KLEFBTUgsQUFhNkIsQUFJMUIsQUFLMEIsQUFJeEIsQUFJSCxVQS9DRixDQWtCQyxFQThCZCxDQXBDZSxBQXVCMkIsRUFTTCxFQTFEN0IsQUFvQk8sR0FMRyxFQWtCRSxDQWhDVixPQW9CRyxDQW5CRSxLQWNELEdBNkJ1QixBQVNBLENBcEJiLENBWlYsR0FuQkgsSUFjWCxFQTBDQSxHQXZEaUIsQUFtQmpCLEFBMkJxQyxTQWZ0QixNQTlCMkIsTUF5QzFDLEFBU0EsYUE1QndCLENBd0J4QixvQkE3Q2UsNEJBOEJVLDZCQVJBLGlCQXJCRCxxREE4QkgseUJBN0JBLElBcUJyQixnRUFTeUIsdUJBQ1osRUE5QlksU0ErQkQsb0RBQ1YsWUFDZCwwQkFoQ2MsWUFDZCIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL21haW4vaGVyby5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IE9OX01BSU5fVEhFTUUgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCB7IGNvbG9yLCBmb250IH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuaW1wb3J0IHsgVHdlZW5NYXggfSBmcm9tICdnc2FwJztcbmltcG9ydCB7IHRoZW1lR3JlZW4sIHRoZW1lUmVkLCB0aGVtZUJsdWUgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5cbmNvbnN0IE5hdiA9ICh7IHByaW0sIHNlYywgaW1nLCBpbmRleCwgb25TdG9wIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBvblRoZW1lID0gKGluZGV4KSA9PiB7XG4gICAgb25TdG9wKHRydWUpO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogT05fTUFJTl9USEVNRSwgaW5kZXggfSk7XG4gICAgc2V0VGltZW91dCgoKT0+IG9uU3RvcChmYWxzZSksIDE1MDAwKTtcbiAgfVxuICByZXR1cm4oXG4gICAgPG5hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gb25UaGVtZSgwKX0+MTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gb25UaGVtZSgxKX0+MjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gb25UaGVtZSgyKX0+MzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIiAvPlxuICAgICAgPGltZyBpZD1cImxvZ29cIiBzcmM9XCIvc3RhdGljL2xvZ28yLnBuZ1wiIGFsdD1cIlwiLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbmF2e1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB3aWR0aDogNSU7XG4gICAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7cHJpbX07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICB9XG4gICAgICAgIC5saW5le1xuICAgICAgICAgIHdpZHRoOiAycHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNSU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgfVxuICAgICAgICBpbWcjbG9nb3tcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAuNXJlbTs7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIGRpdi5uYXZ7XG4gICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgY3Vyc29yOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpudGgtY2hpbGQoMSl7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtpbmRleCA9PT0gMSA/ICcjZmZmJyA6ICd0cmFuc3BhcmVudCd9O1xuICAgICAgICAgIGNvbG9yOiAke2luZGV4ID09PSAxID8gcHJpbSA6ICcjZmZmJ307XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOm50aC1jaGlsZCgyKXtcbiAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2luZGV4ID09PSAyID8gJyNmZmYnIDogJ3RyYW5zcGFyZW50J307XG4gICAgICAgICAgY29sb3I6ICR7aW5kZXggPT09IDIgPyBwcmltIDogJyNmZmYnfTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246bnRoLWNoaWxkKDMpe1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7aW5kZXggPT09IDMgPyAnI2ZmZicgOiAndHJhbnNwYXJlbnQnfTtcbiAgICAgICAgICBjb2xvcjogJHtpbmRleCA9PT0gMyA/IHByaW0gOiAnI2ZmZid9O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGNvbG9yOiAke3ByaW19O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L25hdj5cbiAgKVxufVxuXG5jb25zdCBUZXh0ID0gKHsgdGl0bGUsIHN1YlRpdGxlLCBsZWZ0LCByaWdodCB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwPntzdWJUaXRsZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2Lm1haW57XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgZGl2LnRleHR7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGgye1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJHtmb250LnRpdGxlfTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA1NzZweCl7XG4gICAgICAgICAgZGl2LnRleHR7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogOTkycHgpe1xuICAgICAgICAgIGRpdi50ZXh0e1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDJ7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDEyMDBweCl7XG4gICAgICAgICAgaDJ7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI3MnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgQmFsbENoYWluID0gKHsgcmlnaHQsIGlkIH0pID0+IHtcbiAgcmV0dXJuKFxuICAgIDxkaXYgaWQ9e2lkfSBjbGFzc05hbWU9XCJiYWxsX2NoYWluIGQtbm9uZSBkLWxnLWZsZXhcIj5cbiAgICAgIHsgIXJpZ2h0ICYmIDxkaXYgY2xhc3NOYW1lPVwiYmFsbFwiIC8+IH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW5cIiAvPlxuICAgICAgeyByaWdodCAmJiA8ZGl2IGNsYXNzTmFtZT1cImJhbGxcIiAvPiB9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5iYWxsX2NoYWlue1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICAuYmFsbHtcbiAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYWlue1xuICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEhlcm8gPSAoeyB0aGVtZSwgbWVudSwgb25TdG9wIH0pID0+IHtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgaW1nLCB0ZXh0Qm90dG9tLCBwcmltLCBzZWMsIHRleHRMZWZ0LCB0ZXh0UmlnaHQsIGluZGV4IH0gPSB0aGVtZTtcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgVHdlZW5NYXgudG8oYCNsZWZ0YCwgMiwgeyB3aWR0aDogJzEwMCUnLCBvcGFjaXR5OiAxIH0pO1xuICAgIFR3ZWVuTWF4LnRvKGAudGV4dExlZnRgLCAyLCB7IG9wYWNpdHk6IDEsIGRlbGF5OiAyIH0pO1xuICAgIHJldHVybiAoKT0+IHtcbiAgICAgIFR3ZWVuTWF4LnRvKGAudGV4dExlZnRgLCAyLCB7IG9wYWNpdHk6IDAgfSk7XG4gICAgfVxuICB9LFttZW51XSlcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgVHdlZW5NYXgudG8oYCNyaWdodGAsIDIsIHsgd2lkdGg6ICcxMDAlJywgb3BhY2l0eTogMSwgZGVsYXk6IDIgfSk7XG4gICAgVHdlZW5NYXgudG8oYC50ZXh0UmlnaHRgLCAyLCB7IG9wYWNpdHk6IDEsIGRlbGF5OiA0IH0pO1xuICAgIHJldHVybiAoKT0+IHtcbiAgICAgIFR3ZWVuTWF4LnRvKGAudGV4dFJpZ2h0YCwgMiwgeyBvcGFjaXR5OiAwIH0pO1xuICAgIH1cbiAgfSxbbWVudV0pXG5cbiAgY29uc3Qgb25Nb3ZlID0gKGUpID0+IHtcbiAgICBUd2Vlbk1heC50bygnLm1vdmluZycsIDMsIHsgbGVmdDogKGUuc2NyZWVuWCAvIDUwKSwgdG9wOiAoZS5zY3JlZW5ZIC8gMzApIH0pO1xuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgb25Nb3VzZU1vdmU9e29uTW92ZX0gY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibW92aW5nXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dHMgdGV4dExlZnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YlRleHRMZWZ0XCI+XG4gICAgICAgICAgICB7ICFtZW51ICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8VGV4dCB0aXRsZT17dGV4dExlZnQudGl0bGV9IHN1YlRpdGxlPXt0ZXh0TGVmdC5zdWJUaXRsZX0gbGVmdCAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtYmxvY2tcIj7Cv1F1aWVyZXMgU2FiZXIgTcOhcz88L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UgYW5pbWF0ZWQgZmFkZUluXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsX2NoYWluX2xlZnRcIj5cbiAgICAgICAgICAgIHsgIW1lbnUgJiYgPEJhbGxDaGFpbiBpZD1cImxlZnRcIiAvPiB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsX2NoYWluX3JpZ2h0XCI+XG4gICAgICAgICAgICB7ICFtZW51ICYmIDxCYWxsQ2hhaW4gaWQ9J3JpZ2h0JyByaWdodCAvPiB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0cyB0ZXh0UmlnaHRcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgeyAhbWVudSAmJiA8VGV4dCB0aXRsZT17dGV4dFJpZ2h0LnRpdGxlfSBzdWJUaXRsZT17dGV4dFJpZ2h0LnN1YlRpdGxlfSAvPiB9XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImQtbWQtbm9uZVwiPsK/UXVpZXJlcyBTYWJlciBNw6FzPzwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJhbmltYXRlZCBmYWRlSW5VcCBkZWxheS00c1wiPnt0ZXh0Qm90dG9tfTwvaDE+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlcm97XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtwcmltfSwgJHtzZWN9KTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgbWFpbntcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAudGV4dHN7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0TGVmdHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnN1YlRleHRMZWZ0e1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICBmb250LXdlaWdodDogNTUwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgIGN1cnNvcjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBjb2xvcjogJHtwcmltfTtcbiAgICAgICAgfVxuICAgICAgICAuaW1hZ2V7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJhbGxfY2hhaW5fbGVmdHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIGJvdHRvbTogJHtpbmRleCA9PT0gMSA/ICc0OXZoJyA6IGluZGV4ID09PSAyID8gJzUwdmgnIDogJzUwdmgnfTtcbiAgICAgICAgICBsZWZ0OiAke2luZGV4ID09PSAxID8gJy0xMSUnIDogaW5kZXggPT09IDIgPyAnLTEwJScgOiAnLTEyJSd9O1xuICAgICAgICAgIHdpZHRoOiAke2luZGV4ID09PSAxID8gJzMwJScgOiBpbmRleCA9PT0gMiA/ICc0MiUnIDogJzU4JSd9O1xuICAgICAgICB9XG4gICAgICAgIC5iYWxsX2NoYWluX3JpZ2h0e1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6ICR7aW5kZXggPT09IDEgPyAnNDQuMnZoJyA6IGluZGV4ID09PSAyID8gJzQwdmgnIDogJzQwdmgnfTtcbiAgICAgICAgICByaWdodDogJHtpbmRleCA9PT0gMSA/ICctMjAlJyA6IGluZGV4ID09PSAyID8gJy0xMiUnIDogJy0xMiUnfTtcbiAgICAgICAgICB3aWR0aDogJHtpbmRleCA9PT0gMSA/ICc3MyUnIDogaW5kZXggPT09IDIgPyAnNDglJyA6ICcyMCUnfTtcbiAgICAgICAgfVxuICAgICAgICBpbWd7XG4gICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHRSaWdodHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciBoMXtcbiAgICAgICAgICBmb250LWZhbWlseTogJHtmb250LnRpdGxlfTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA1NzZweCl7XG4gICAgICAgICAgbWFpbntcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0c3tcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0TGVmdHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW1hZ2V7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHRSaWdodHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9vdGVyIGgxe1xuICAgICAgICAgICAgZm9udC1zaXplOiA2cmVtO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDVweCAxcHggMTVweCByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogOTkycHgpe1xuICAgICAgICAgIHRleHRze1xuICAgICAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dExlZnR7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdWJUZXh0TGVmdHtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0UmlnaHR7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAke2luZGV4ID09PSAxID8gJzY1cHgnIDogJzAnfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1hZ2V7XG4gICAgICAgICAgICBmbGV4OiAxIDAgMDtcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAzMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogMzM1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYWxsX2NoYWluX2xlZnR7XG4gICAgICAgICAgICBib3R0b206ICR7aW5kZXggPT09IDEgPyAnNDl2aCcgOiBpbmRleCA9PT0gMiA/ICc0OXZoJyA6ICc0OXZoJ307XG4gICAgICAgICAgICBsZWZ0OiAke2luZGV4ID09PSAxID8gJy02JScgOiBpbmRleCA9PT0gMiA/ICctMjAlJyA6ICctMjUlJ307XG4gICAgICAgICAgICB3aWR0aDogJHtpbmRleCA9PT0gMSA/ICcyNiUnIDogaW5kZXggPT09IDIgPyAnNTAlJyA6ICc0MCUnfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbGxfY2hhaW5fcmlnaHR7XG4gICAgICAgICAgICB0b3A6ICR7aW5kZXggPT09IDEgPyAnNDQuMnZoJyA6IGluZGV4ID09PSAyID8gJzQwdmgnIDogJzQwdmgnfTtcbiAgICAgICAgICAgIHJpZ2h0OiAke2luZGV4ID09PSAxID8gJy0zMiUnIDogaW5kZXggPT09IDIgPyAnLTIzJScgOiAnLTE1JSd9O1xuICAgICAgICAgICAgd2lkdGg6ICR7aW5kZXggPT09IDEgPyAnODUlJyA6IGluZGV4ID09PSAyID8gJzQ4JScgOiAnMjglJ307XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvb3RlciBoMXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOHJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4cmVtO1xuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDEyMDBweCl7XG4gICAgICAgICAgLmltYWdle1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0TGVmdCBoMntcbiAgICAgICAgICAgIG1heC13aWR0aDogMjcycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0UmlnaHR7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAke2luZGV4ID09PSAxIHx8IGluZGV4ID09PSAyID8gJzI4MHB4JyA6ICcyNTlweCd9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbGxfY2hhaW5fbGVmdHtcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgICAgICBib3R0b206ICR7aW5kZXggPT09IDEgPyAnNDYuNXZoJyA6IGluZGV4ID09PSAyID8gJzQ3dmgnIDogJzQ3dmgnfTtcbiAgICAgICAgICAgIGxlZnQ6ICR7aW5kZXggPT09IDEgPyAnLTIlJyA6IGluZGV4ID09PSAyID8gJy04JScgOiAnLTglJ307XG4gICAgICAgICAgICB3aWR0aDogJHtpbmRleCA9PT0gMSA/ICczMCUnIDogaW5kZXggPT09IDIgPyAnNTUlJyA6ICczNSUnfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbGxfY2hhaW5fcmlnaHR7XG4gICAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAgICAgdG9wOiAke2luZGV4ID09PSAxID8gJzU2dmgnIDogaW5kZXggPT09IDIgPyAnNTZ2aCcgOiAnNTV2aCd9O1xuICAgICAgICAgICAgcmlnaHQ6ICR7aW5kZXggPT09IDEgPyAnLTE2JScgOiBpbmRleCA9PT0gMiA/ICctMTIlJyA6ICctMTAlJ307XG4gICAgICAgICAgICB3aWR0aDogJHtpbmRleCA9PT0gMSA/ICc2OCUnIDogaW5kZXggPT09IDIgPyAnNDMlJyA6ICcyOCUnfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9vdGVyIGgxe1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubWFpbi50aGVtZSk7XG4gIGNvbnN0IG1lbnUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5tYWluLm5hdi52aXNpYmxlKSA7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW3BhdXNlLCBzZXRQYXVzZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRoZW1lcyA9IFt0aGVtZUdyZWVuLCB0aGVtZVJlZCwgdGhlbWVCbHVlXTtcbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+IHtcbiAgICAgIGlmKCFwYXVzZSl7XG4gICAgICAgIGkgPSBpIDwgMiA/IGkgKyAxIDogMDtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBPTl9NQUlOX1RIRU1FLCBpbmRleDogaSB9KTtcbiAgICAgIH1cbiAgICB9LCAxNTAwMCk7XG4gICAgcmV0dXJuICgpPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sW3BhdXNlXSlcbiAgY29uc3Qgb25DdXJzb3IgPSAoZSkgPT4ge1xuICAgIFR3ZWVuTWF4LnRvKCcjY3Vyc29yJywgMC4xLCB7IGxlZnQ6IGUuY2xpZW50WCwgdG9wOiBlLmNsaWVudFkgfSk7XG4gIH1cbiAgcmV0dXJuKFxuICAgIDxkaXYgb25Nb3VzZU1vdmU9e29uQ3Vyc29yfT5cbiAgICAgIDxOYXYgb25TdG9wPXtzZXRQYXVzZX0gey4uLnRoZW1lc1tpbmRleF19Lz5cbiAgICAgIHtpbmRleCA9PT0gMCAmJiA8SGVybyBvblN0b3A9e3NldFBhdXNlfSB0aGVtZT17dGhlbWVHcmVlbn0gbWVudT17bWVudX0gLz59XG4gICAgICB7aW5kZXggPT09IDEgJiYgPEhlcm8gb25TdG9wPXtzZXRQYXVzZX0gdGhlbWU9e3RoZW1lUmVkfSBtZW51PXttZW51fSAvPn1cbiAgICAgIHtpbmRleCA9PT0gMiAmJiA8SGVybyBvblN0b3A9e3NldFBhdXNlfSB0aGVtZT17dGhlbWVCbHVlfSBtZW51PXttZW51fSAvPn1cbiAgICAgIDxkaXYgaWQ9XCJjdXJzb3JcIj48L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2e1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBjdXJzb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAjY3Vyc29ye1xuICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICB6LWluZGV4OiA1MDA7XG4gICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpO1xuICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */
/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/hero.jsx */`));
};

const Text = ({
  title,
  subTitle,
  left,
  right
}) => {
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2594515184", [_layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title]]]) + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2594515184", [_layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title]]]) + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2594515184", [_layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, title), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2594515184", [_layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, subTitle)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2594515184",
    dynamic: [_layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title],
    __self: undefined
  }, `div.main.__jsx-style-dynamic-selector{width:100%;}div.text.__jsx-style-dynamic-selector{text-align:center;}h2.__jsx-style-dynamic-selector{font-size:1.5rem;margin:0;font-family:${_layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title};display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}p.__jsx-style-dynamic-selector{font-size:10px;margin:0;}@media(min-width:576px){div.text.__jsx-style-dynamic-selector{text-align:left;}h2.__jsx-style-dynamic-selector{font-size:2rem;}}@media(min-width:992px){div.text.__jsx-style-dynamic-selector{text-align:left;}h2.__jsx-style-dynamic-selector{font-size:2rem;}}@media(min-width:1200px){h2.__jsx-style-dynamic-selector{max-width:272px;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9oZXJvLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwR2tCLEFBR3NCLEFBR08sQUFHRCxBQU1GLEFBS0csQUFHRCxBQUtDLEFBR0QsQUFLQyxXQWhDcEIsSUFZVyxBQVFULEFBUUEsQ0FYQSxBQVFBLEFBUUEsQ0EzQlMsQ0FIWCxNQVVBLEVBTjJDLHlDQUM1QiwwRUFDZiIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL21haW4vaGVyby5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IE9OX01BSU5fVEhFTUUgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCB7IGNvbG9yLCBmb250IH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuaW1wb3J0IHsgVHdlZW5NYXggfSBmcm9tICdnc2FwJztcbmltcG9ydCB7IHRoZW1lR3JlZW4sIHRoZW1lUmVkLCB0aGVtZUJsdWUgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5cbmNvbnN0IE5hdiA9ICh7IHByaW0sIHNlYywgaW1nLCBpbmRleCwgb25TdG9wIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBvblRoZW1lID0gKGluZGV4KSA9PiB7XG4gICAgb25TdG9wKHRydWUpO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogT05fTUFJTl9USEVNRSwgaW5kZXggfSk7XG4gICAgc2V0VGltZW91dCgoKT0+IG9uU3RvcChmYWxzZSksIDE1MDAwKTtcbiAgfVxuICByZXR1cm4oXG4gICAgPG5hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gb25UaGVtZSgwKX0+MTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gb25UaGVtZSgxKX0+MjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gb25UaGVtZSgyKX0+MzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIiAvPlxuICAgICAgPGltZyBpZD1cImxvZ29cIiBzcmM9XCIvc3RhdGljL2xvZ28yLnBuZ1wiIGFsdD1cIlwiLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbmF2e1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB3aWR0aDogNSU7XG4gICAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7cHJpbX07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICB9XG4gICAgICAgIC5saW5le1xuICAgICAgICAgIHdpZHRoOiAycHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNSU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgfVxuICAgICAgICBpbWcjbG9nb3tcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAuNXJlbTs7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIGRpdi5uYXZ7XG4gICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgY3Vyc29yOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpudGgtY2hpbGQoMSl7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtpbmRleCA9PT0gMSA/ICcjZmZmJyA6ICd0cmFuc3BhcmVudCd9O1xuICAgICAgICAgIGNvbG9yOiAke2luZGV4ID09PSAxID8gcHJpbSA6ICcjZmZmJ307XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOm50aC1jaGlsZCgyKXtcbiAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2luZGV4ID09PSAyID8gJyNmZmYnIDogJ3RyYW5zcGFyZW50J307XG4gICAgICAgICAgY29sb3I6ICR7aW5kZXggPT09IDIgPyBwcmltIDogJyNmZmYnfTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246bnRoLWNoaWxkKDMpe1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7aW5kZXggPT09IDMgPyAnI2ZmZicgOiAndHJhbnNwYXJlbnQnfTtcbiAgICAgICAgICBjb2xvcjogJHtpbmRleCA9PT0gMyA/IHByaW0gOiAnI2ZmZid9O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGNvbG9yOiAke3ByaW19O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L25hdj5cbiAgKVxufVxuXG5jb25zdCBUZXh0ID0gKHsgdGl0bGUsIHN1YlRpdGxlLCBsZWZ0LCByaWdodCB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwPntzdWJUaXRsZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2Lm1haW57XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgZGl2LnRleHR7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGgye1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJHtmb250LnRpdGxlfTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA1NzZweCl7XG4gICAgICAgICAgZGl2LnRleHR7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogOTkycHgpe1xuICAgICAgICAgIGRpdi50ZXh0e1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDJ7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDEyMDBweCl7XG4gICAgICAgICAgaDJ7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI3MnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgQmFsbENoYWluID0gKHsgcmlnaHQsIGlkIH0pID0+IHtcbiAgcmV0dXJuKFxuICAgIDxkaXYgaWQ9e2lkfSBjbGFzc05hbWU9XCJiYWxsX2NoYWluIGQtbm9uZSBkLWxnLWZsZXhcIj5cbiAgICAgIHsgIXJpZ2h0ICYmIDxkaXYgY2xhc3NOYW1lPVwiYmFsbFwiIC8+IH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW5cIiAvPlxuICAgICAgeyByaWdodCAmJiA8ZGl2IGNsYXNzTmFtZT1cImJhbGxcIiAvPiB9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5iYWxsX2NoYWlue1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICAuYmFsbHtcbiAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYWlue1xuICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEhlcm8gPSAoeyB0aGVtZSwgbWVudSwgb25TdG9wIH0pID0+IHtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgaW1nLCB0ZXh0Qm90dG9tLCBwcmltLCBzZWMsIHRleHRMZWZ0LCB0ZXh0UmlnaHQsIGluZGV4IH0gPSB0aGVtZTtcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgVHdlZW5NYXgudG8oYCNsZWZ0YCwgMiwgeyB3aWR0aDogJzEwMCUnLCBvcGFjaXR5OiAxIH0pO1xuICAgIFR3ZWVuTWF4LnRvKGAudGV4dExlZnRgLCAyLCB7IG9wYWNpdHk6IDEsIGRlbGF5OiAyIH0pO1xuICAgIHJldHVybiAoKT0+IHtcbiAgICAgIFR3ZWVuTWF4LnRvKGAudGV4dExlZnRgLCAyLCB7IG9wYWNpdHk6IDAgfSk7XG4gICAgfVxuICB9LFttZW51XSlcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgVHdlZW5NYXgudG8oYCNyaWdodGAsIDIsIHsgd2lkdGg6ICcxMDAlJywgb3BhY2l0eTogMSwgZGVsYXk6IDIgfSk7XG4gICAgVHdlZW5NYXgudG8oYC50ZXh0UmlnaHRgLCAyLCB7IG9wYWNpdHk6IDEsIGRlbGF5OiA0IH0pO1xuICAgIHJldHVybiAoKT0+IHtcbiAgICAgIFR3ZWVuTWF4LnRvKGAudGV4dFJpZ2h0YCwgMiwgeyBvcGFjaXR5OiAwIH0pO1xuICAgIH1cbiAgfSxbbWVudV0pXG5cbiAgY29uc3Qgb25Nb3ZlID0gKGUpID0+IHtcbiAgICBUd2Vlbk1heC50bygnLm1vdmluZycsIDMsIHsgbGVmdDogKGUuc2NyZWVuWCAvIDUwKSwgdG9wOiAoZS5zY3JlZW5ZIC8gMzApIH0pO1xuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgb25Nb3VzZU1vdmU9e29uTW92ZX0gY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibW92aW5nXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dHMgdGV4dExlZnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YlRleHRMZWZ0XCI+XG4gICAgICAgICAgICB7ICFtZW51ICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8VGV4dCB0aXRsZT17dGV4dExlZnQudGl0bGV9IHN1YlRpdGxlPXt0ZXh0TGVmdC5zdWJUaXRsZX0gbGVmdCAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtYmxvY2tcIj7Cv1F1aWVyZXMgU2FiZXIgTcOhcz88L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UgYW5pbWF0ZWQgZmFkZUluXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsX2NoYWluX2xlZnRcIj5cbiAgICAgICAgICAgIHsgIW1lbnUgJiYgPEJhbGxDaGFpbiBpZD1cImxlZnRcIiAvPiB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsX2NoYWluX3JpZ2h0XCI+XG4gICAgICAgICAgICB7ICFtZW51ICYmIDxCYWxsQ2hhaW4gaWQ9J3JpZ2h0JyByaWdodCAvPiB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0cyB0ZXh0UmlnaHRcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgeyAhbWVudSAmJiA8VGV4dCB0aXRsZT17dGV4dFJpZ2h0LnRpdGxlfSBzdWJUaXRsZT17dGV4dFJpZ2h0LnN1YlRpdGxlfSAvPiB9XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImQtbWQtbm9uZVwiPsK/UXVpZXJlcyBTYWJlciBNw6FzPzwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJhbmltYXRlZCBmYWRlSW5VcCBkZWxheS00c1wiPnt0ZXh0Qm90dG9tfTwvaDE+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlcm97XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtwcmltfSwgJHtzZWN9KTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgbWFpbntcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAudGV4dHN7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0TGVmdHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnN1YlRleHRMZWZ0e1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICBmb250LXdlaWdodDogNTUwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgIGN1cnNvcjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBjb2xvcjogJHtwcmltfTtcbiAgICAgICAgfVxuICAgICAgICAuaW1hZ2V7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJhbGxfY2hhaW5fbGVmdHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIGJvdHRvbTogJHtpbmRleCA9PT0gMSA/ICc0OXZoJyA6IGluZGV4ID09PSAyID8gJzUwdmgnIDogJzUwdmgnfTtcbiAgICAgICAgICBsZWZ0OiAke2luZGV4ID09PSAxID8gJy0xMSUnIDogaW5kZXggPT09IDIgPyAnLTEwJScgOiAnLTEyJSd9O1xuICAgICAgICAgIHdpZHRoOiAke2luZGV4ID09PSAxID8gJzMwJScgOiBpbmRleCA9PT0gMiA/ICc0MiUnIDogJzU4JSd9O1xuICAgICAgICB9XG4gICAgICAgIC5iYWxsX2NoYWluX3JpZ2h0e1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6ICR7aW5kZXggPT09IDEgPyAnNDQuMnZoJyA6IGluZGV4ID09PSAyID8gJzQwdmgnIDogJzQwdmgnfTtcbiAgICAgICAgICByaWdodDogJHtpbmRleCA9PT0gMSA/ICctMjAlJyA6IGluZGV4ID09PSAyID8gJy0xMiUnIDogJy0xMiUnfTtcbiAgICAgICAgICB3aWR0aDogJHtpbmRleCA9PT0gMSA/ICc3MyUnIDogaW5kZXggPT09IDIgPyAnNDglJyA6ICcyMCUnfTtcbiAgICAgICAgfVxuICAgICAgICBpbWd7XG4gICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHRSaWdodHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciBoMXtcbiAgICAgICAgICBmb250LWZhbWlseTogJHtmb250LnRpdGxlfTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA1NzZweCl7XG4gICAgICAgICAgbWFpbntcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0c3tcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0TGVmdHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW1hZ2V7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHRSaWdodHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9vdGVyIGgxe1xuICAgICAgICAgICAgZm9udC1zaXplOiA2cmVtO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDVweCAxcHggMTVweCByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogOTkycHgpe1xuICAgICAgICAgIHRleHRze1xuICAgICAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dExlZnR7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdWJUZXh0TGVmdHtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0UmlnaHR7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAke2luZGV4ID09PSAxID8gJzY1cHgnIDogJzAnfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1hZ2V7XG4gICAgICAgICAgICBmbGV4OiAxIDAgMDtcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAzMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogMzM1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYWxsX2NoYWluX2xlZnR7XG4gICAgICAgICAgICBib3R0b206ICR7aW5kZXggPT09IDEgPyAnNDl2aCcgOiBpbmRleCA9PT0gMiA/ICc0OXZoJyA6ICc0OXZoJ307XG4gICAgICAgICAgICBsZWZ0OiAke2luZGV4ID09PSAxID8gJy02JScgOiBpbmRleCA9PT0gMiA/ICctMjAlJyA6ICctMjUlJ307XG4gICAgICAgICAgICB3aWR0aDogJHtpbmRleCA9PT0gMSA/ICcyNiUnIDogaW5kZXggPT09IDIgPyAnNTAlJyA6ICc0MCUnfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbGxfY2hhaW5fcmlnaHR7XG4gICAgICAgICAgICB0b3A6ICR7aW5kZXggPT09IDEgPyAnNDQuMnZoJyA6IGluZGV4ID09PSAyID8gJzQwdmgnIDogJzQwdmgnfTtcbiAgICAgICAgICAgIHJpZ2h0OiAke2luZGV4ID09PSAxID8gJy0zMiUnIDogaW5kZXggPT09IDIgPyAnLTIzJScgOiAnLTE1JSd9O1xuICAgICAgICAgICAgd2lkdGg6ICR7aW5kZXggPT09IDEgPyAnODUlJyA6IGluZGV4ID09PSAyID8gJzQ4JScgOiAnMjglJ307XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvb3RlciBoMXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOHJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4cmVtO1xuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDEyMDBweCl7XG4gICAgICAgICAgLmltYWdle1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0TGVmdCBoMntcbiAgICAgICAgICAgIG1heC13aWR0aDogMjcycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0UmlnaHR7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAke2luZGV4ID09PSAxIHx8IGluZGV4ID09PSAyID8gJzI4MHB4JyA6ICcyNTlweCd9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbGxfY2hhaW5fbGVmdHtcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgICAgICBib3R0b206ICR7aW5kZXggPT09IDEgPyAnNDYuNXZoJyA6IGluZGV4ID09PSAyID8gJzQ3dmgnIDogJzQ3dmgnfTtcbiAgICAgICAgICAgIGxlZnQ6ICR7aW5kZXggPT09IDEgPyAnLTIlJyA6IGluZGV4ID09PSAyID8gJy04JScgOiAnLTglJ307XG4gICAgICAgICAgICB3aWR0aDogJHtpbmRleCA9PT0gMSA/ICczMCUnIDogaW5kZXggPT09IDIgPyAnNTUlJyA6ICczNSUnfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbGxfY2hhaW5fcmlnaHR7XG4gICAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAgICAgdG9wOiAke2luZGV4ID09PSAxID8gJzU2dmgnIDogaW5kZXggPT09IDIgPyAnNTZ2aCcgOiAnNTV2aCd9O1xuICAgICAgICAgICAgcmlnaHQ6ICR7aW5kZXggPT09IDEgPyAnLTE2JScgOiBpbmRleCA9PT0gMiA/ICctMTIlJyA6ICctMTAlJ307XG4gICAgICAgICAgICB3aWR0aDogJHtpbmRleCA9PT0gMSA/ICc2OCUnIDogaW5kZXggPT09IDIgPyAnNDMlJyA6ICcyOCUnfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9vdGVyIGgxe1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubWFpbi50aGVtZSk7XG4gIGNvbnN0IG1lbnUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5tYWluLm5hdi52aXNpYmxlKSA7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW3BhdXNlLCBzZXRQYXVzZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRoZW1lcyA9IFt0aGVtZUdyZWVuLCB0aGVtZVJlZCwgdGhlbWVCbHVlXTtcbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+IHtcbiAgICAgIGlmKCFwYXVzZSl7XG4gICAgICAgIGkgPSBpIDwgMiA/IGkgKyAxIDogMDtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBPTl9NQUlOX1RIRU1FLCBpbmRleDogaSB9KTtcbiAgICAgIH1cbiAgICB9LCAxNTAwMCk7XG4gICAgcmV0dXJuICgpPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sW3BhdXNlXSlcbiAgY29uc3Qgb25DdXJzb3IgPSAoZSkgPT4ge1xuICAgIFR3ZWVuTWF4LnRvKCcjY3Vyc29yJywgMC4xLCB7IGxlZnQ6IGUuY2xpZW50WCwgdG9wOiBlLmNsaWVudFkgfSk7XG4gIH1cbiAgcmV0dXJuKFxuICAgIDxkaXYgb25Nb3VzZU1vdmU9e29uQ3Vyc29yfT5cbiAgICAgIDxOYXYgb25TdG9wPXtzZXRQYXVzZX0gey4uLnRoZW1lc1tpbmRleF19Lz5cbiAgICAgIHtpbmRleCA9PT0gMCAmJiA8SGVybyBvblN0b3A9e3NldFBhdXNlfSB0aGVtZT17dGhlbWVHcmVlbn0gbWVudT17bWVudX0gLz59XG4gICAgICB7aW5kZXggPT09IDEgJiYgPEhlcm8gb25TdG9wPXtzZXRQYXVzZX0gdGhlbWU9e3RoZW1lUmVkfSBtZW51PXttZW51fSAvPn1cbiAgICAgIHtpbmRleCA9PT0gMiAmJiA8SGVybyBvblN0b3A9e3NldFBhdXNlfSB0aGVtZT17dGhlbWVCbHVlfSBtZW51PXttZW51fSAvPn1cbiAgICAgIDxkaXYgaWQ9XCJjdXJzb3JcIj48L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2e1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBjdXJzb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAjY3Vyc29ye1xuICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICB6LWluZGV4OiA1MDA7XG4gICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpO1xuICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */
/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/hero.jsx */`));
};

const BallChain = ({
  right,
  id
}) => {
  return __jsx("div", {
    id: id,
    className: "jsx-2920165202" + " " + "ball_chain d-none d-lg-flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, !right && __jsx("div", {
    className: "jsx-2920165202" + " " + "ball",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2920165202" + " " + "chain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }), right && __jsx("div", {
    className: "jsx-2920165202" + " " + "ball",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2920165202",
    __self: undefined
  }, ".ball_chain.jsx-2920165202{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:0;opacity:0;overflow:hidden;}.ball.jsx-2920165202{width:10px;height:10px;border-radius:50%;background:#fff;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}.chain.jsx-2920165202{height:2px;background:#fff;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9oZXJvLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0SmtCLEFBR3NCLEFBU0EsQUFPQSxXQWZFLEFBU0QsQUFPSSxZQU5FLElBT1AsV0FDYixHQVBrQixnQkFDRiw0QkFYVyw0QkFZM0IscUVBWHFCLDZGQUNYLFFBQ0UsVUFDTSxnQkFDbEIiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL2hlcm8uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBPTl9NQUlOX1RIRU1FIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBjb2xvciwgZm9udCB9IGZyb20gJy4uLy4uL2xheW91dC9tYWluJztcbmltcG9ydCB7IFR3ZWVuTWF4IH0gZnJvbSAnZ3NhcCc7XG5pbXBvcnQgeyB0aGVtZUdyZWVuLCB0aGVtZVJlZCwgdGhlbWVCbHVlIH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuXG5jb25zdCBOYXYgPSAoeyBwcmltLCBzZWMsIGltZywgaW5kZXgsIG9uU3RvcCB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgb25UaGVtZSA9IChpbmRleCkgPT4ge1xuICAgIG9uU3RvcCh0cnVlKTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IE9OX01BSU5fVEhFTUUsIGluZGV4IH0pO1xuICAgIHNldFRpbWVvdXQoKCk9PiBvblN0b3AoZmFsc2UpLCAxNTAwMCk7XG4gIH1cbiAgcmV0dXJuKFxuICAgIDxuYXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IG9uVGhlbWUoMCl9PjE8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IG9uVGhlbWUoMSl9PjI8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IG9uVGhlbWUoMil9PjM8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCIgLz5cbiAgICAgIDxpbWcgaWQ9XCJsb2dvXCIgc3JjPVwiL3N0YXRpYy9sb2dvMi5wbmdcIiBhbHQ9XCJcIi8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG5hdntcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgd2lkdGg6IDUlO1xuICAgICAgICAgIG1pbi13aWR0aDogNTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3ByaW19O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgfVxuICAgICAgICAubGluZXtcbiAgICAgICAgICB3aWR0aDogMnB4O1xuICAgICAgICAgIGhlaWdodDogMjUlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgIH1cbiAgICAgICAgaW1nI2xvZ297XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogLjVyZW07O1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgfVxuICAgICAgICBkaXYubmF2e1xuICAgICAgICAgIG1hcmdpbjogMnJlbSAwO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBidXR0b257XG4gICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgIGN1cnNvcjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246bnRoLWNoaWxkKDEpe1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7aW5kZXggPT09IDEgPyAnI2ZmZicgOiAndHJhbnNwYXJlbnQnfTtcbiAgICAgICAgICBjb2xvcjogJHtpbmRleCA9PT0gMSA/IHByaW0gOiAnI2ZmZid9O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpudGgtY2hpbGQoMil7XG4gICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtpbmRleCA9PT0gMiA/ICcjZmZmJyA6ICd0cmFuc3BhcmVudCd9O1xuICAgICAgICAgIGNvbG9yOiAke2luZGV4ID09PSAyID8gcHJpbSA6ICcjZmZmJ307XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOm50aC1jaGlsZCgzKXtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2luZGV4ID09PSAzID8gJyNmZmYnIDogJ3RyYW5zcGFyZW50J307XG4gICAgICAgICAgY29sb3I6ICR7aW5kZXggPT09IDMgPyBwcmltIDogJyNmZmYnfTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBjb2xvcjogJHtwcmltfTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9uYXY+XG4gIClcbn1cblxuY29uc3QgVGV4dCA9ICh7IHRpdGxlLCBzdWJUaXRsZSwgbGVmdCwgcmlnaHQgfSkgPT4ge1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICA8aDI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2gyPlxuICAgICAgICA8cD57c3ViVGl0bGV9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdi5tYWlue1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGRpdi50ZXh0e1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBoMntcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICR7Zm9udC50aXRsZX07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgICBwe1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNTc2cHgpe1xuICAgICAgICAgIGRpdi50ZXh0e1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDJ7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDk5MnB4KXtcbiAgICAgICAgICBkaXYudGV4dHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgye1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiAxMjAwcHgpe1xuICAgICAgICAgIGgye1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNzJweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEJhbGxDaGFpbiA9ICh7IHJpZ2h0LCBpZCB9KSA9PiB7XG4gIHJldHVybihcbiAgICA8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPVwiYmFsbF9jaGFpbiBkLW5vbmUgZC1sZy1mbGV4XCI+XG4gICAgICB7ICFyaWdodCAmJiA8ZGl2IGNsYXNzTmFtZT1cImJhbGxcIiAvPiB9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluXCIgLz5cbiAgICAgIHsgcmlnaHQgJiYgPGRpdiBjbGFzc05hbWU9XCJiYWxsXCIgLz4gfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYmFsbF9jaGFpbntcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgLmJhbGx7XG4gICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFpbntcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBIZXJvID0gKHsgdGhlbWUsIG1lbnUsIG9uU3RvcCB9KSA9PiB7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IGltZywgdGV4dEJvdHRvbSwgcHJpbSwgc2VjLCB0ZXh0TGVmdCwgdGV4dFJpZ2h0LCBpbmRleCB9ID0gdGhlbWU7XG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIFR3ZWVuTWF4LnRvKGAjbGVmdGAsIDIsIHsgd2lkdGg6ICcxMDAlJywgb3BhY2l0eTogMSB9KTtcbiAgICBUd2Vlbk1heC50byhgLnRleHRMZWZ0YCwgMiwgeyBvcGFjaXR5OiAxLCBkZWxheTogMiB9KTtcbiAgICByZXR1cm4gKCk9PiB7XG4gICAgICBUd2Vlbk1heC50byhgLnRleHRMZWZ0YCwgMiwgeyBvcGFjaXR5OiAwIH0pO1xuICAgIH1cbiAgfSxbbWVudV0pXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIFR3ZWVuTWF4LnRvKGAjcmlnaHRgLCAyLCB7IHdpZHRoOiAnMTAwJScsIG9wYWNpdHk6IDEsIGRlbGF5OiAyIH0pO1xuICAgIFR3ZWVuTWF4LnRvKGAudGV4dFJpZ2h0YCwgMiwgeyBvcGFjaXR5OiAxLCBkZWxheTogNCB9KTtcbiAgICByZXR1cm4gKCk9PiB7XG4gICAgICBUd2Vlbk1heC50byhgLnRleHRSaWdodGAsIDIsIHsgb3BhY2l0eTogMCB9KTtcbiAgICB9XG4gIH0sW21lbnVdKVxuXG4gIGNvbnN0IG9uTW92ZSA9IChlKSA9PiB7XG4gICAgVHdlZW5NYXgudG8oJy5tb3ZpbmcnLCAzLCB7IGxlZnQ6IChlLnNjcmVlblggLyA1MCksIHRvcDogKGUuc2NyZWVuWSAvIDMwKSB9KTtcbiAgfVxuXG4gIHJldHVybihcbiAgICA8ZGl2IG9uTW91c2VNb3ZlPXtvbk1vdmV9IGNsYXNzTmFtZT1cImhlcm9cIj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1vdmluZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRzIHRleHRMZWZ0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJUZXh0TGVmdFwiPlxuICAgICAgICAgICAgeyAhbWVudSAmJiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPFRleHQgdGl0bGU9e3RleHRMZWZ0LnRpdGxlfSBzdWJUaXRsZT17dGV4dExlZnQuc3ViVGl0bGV9IGxlZnQgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImQtbm9uZSBkLW1kLWJsb2NrXCI+wr9RdWllcmVzIFNhYmVyIE3DoXM/PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlIGFuaW1hdGVkIGZhZGVJblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbF9jaGFpbl9sZWZ0XCI+XG4gICAgICAgICAgICB7ICFtZW51ICYmIDxCYWxsQ2hhaW4gaWQ9XCJsZWZ0XCIgLz4gfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbF9jaGFpbl9yaWdodFwiPlxuICAgICAgICAgICAgeyAhbWVudSAmJiA8QmFsbENoYWluIGlkPSdyaWdodCcgcmlnaHQgLz4gfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD1cIlwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dHMgdGV4dFJpZ2h0XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHsgIW1lbnUgJiYgPFRleHQgdGl0bGU9e3RleHRSaWdodC50aXRsZX0gc3ViVGl0bGU9e3RleHRSaWdodC5zdWJUaXRsZX0gLz4gfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkLW1kLW5vbmVcIj7Cv1F1aWVyZXMgU2FiZXIgTcOhcz88L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYW5pbWF0ZWQgZmFkZUluVXAgZGVsYXktNHNcIj57dGV4dEJvdHRvbX08L2gxPlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oZXJve1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICR7cHJpbX0sICR7c2VjfSk7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIG1haW57XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHRze1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAudGV4dExlZnR7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5zdWJUZXh0TGVmdHtcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICBjdXJzb3I6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgY29sb3I6ICR7cHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgLmltYWdle1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICB9XG4gICAgICAgIC5iYWxsX2NoYWluX2xlZnR7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBib3R0b206ICR7aW5kZXggPT09IDEgPyAnNDl2aCcgOiBpbmRleCA9PT0gMiA/ICc1MHZoJyA6ICc1MHZoJ307XG4gICAgICAgICAgbGVmdDogJHtpbmRleCA9PT0gMSA/ICctMTElJyA6IGluZGV4ID09PSAyID8gJy0xMCUnIDogJy0xMiUnfTtcbiAgICAgICAgICB3aWR0aDogJHtpbmRleCA9PT0gMSA/ICczMCUnIDogaW5kZXggPT09IDIgPyAnNDIlJyA6ICc1OCUnfTtcbiAgICAgICAgfVxuICAgICAgICAuYmFsbF9jaGFpbl9yaWdodHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAke2luZGV4ID09PSAxID8gJzQ0LjJ2aCcgOiBpbmRleCA9PT0gMiA/ICc0MHZoJyA6ICc0MHZoJ307XG4gICAgICAgICAgcmlnaHQ6ICR7aW5kZXggPT09IDEgPyAnLTIwJScgOiBpbmRleCA9PT0gMiA/ICctMTIlJyA6ICctMTIlJ307XG4gICAgICAgICAgd2lkdGg6ICR7aW5kZXggPT09IDEgPyAnNzMlJyA6IGluZGV4ID09PSAyID8gJzQ4JScgOiAnMjAlJ307XG4gICAgICAgIH1cbiAgICAgICAgaW1ne1xuICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0UmlnaHR7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXIgaDF7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICR7Zm9udC50aXRsZX07XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNTc2cHgpe1xuICAgICAgICAgIG1haW57XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dHN7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dExlZnR7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmltYWdle1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0UmlnaHR7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvb3RlciBoMXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggMXB4IDE1cHggcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDk5MnB4KXtcbiAgICAgICAgICB0ZXh0c3tcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHRMZWZ0e1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3ViVGV4dExlZnR7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dFJpZ2h0e1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogJHtpbmRleCA9PT0gMSA/ICc2NXB4JyA6ICcwJ307XG4gICAgICAgICAgfVxuICAgICAgICAgIGltYWdle1xuICAgICAgICAgICAgZmxleDogMSAwIDA7XG4gICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogMzM1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMzNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFsbF9jaGFpbl9sZWZ0e1xuICAgICAgICAgICAgYm90dG9tOiAke2luZGV4ID09PSAxID8gJzQ5dmgnIDogaW5kZXggPT09IDIgPyAnNDl2aCcgOiAnNDl2aCd9O1xuICAgICAgICAgICAgbGVmdDogJHtpbmRleCA9PT0gMSA/ICctNiUnIDogaW5kZXggPT09IDIgPyAnLTIwJScgOiAnLTI1JSd9O1xuICAgICAgICAgICAgd2lkdGg6ICR7aW5kZXggPT09IDEgPyAnMjYlJyA6IGluZGV4ID09PSAyID8gJzUwJScgOiAnNDAlJ307XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYWxsX2NoYWluX3JpZ2h0e1xuICAgICAgICAgICAgdG9wOiAke2luZGV4ID09PSAxID8gJzQ0LjJ2aCcgOiBpbmRleCA9PT0gMiA/ICc0MHZoJyA6ICc0MHZoJ307XG4gICAgICAgICAgICByaWdodDogJHtpbmRleCA9PT0gMSA/ICctMzIlJyA6IGluZGV4ID09PSAyID8gJy0yMyUnIDogJy0xNSUnfTtcbiAgICAgICAgICAgIHdpZHRoOiAke2luZGV4ID09PSAxID8gJzg1JScgOiBpbmRleCA9PT0gMiA/ICc0OCUnIDogJzI4JSd9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb290ZXIgaDF7XG4gICAgICAgICAgICBmb250LXNpemU6IDhyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogOHJlbTtcblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiAxMjAwcHgpe1xuICAgICAgICAgIC5pbWFnZXtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dExlZnQgaDJ7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI3MnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dFJpZ2h0e1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogJHtpbmRleCA9PT0gMSB8fCBpbmRleCA9PT0gMiA/ICcyODBweCcgOiAnMjU5cHgnfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYWxsX2NoYWluX2xlZnR7XG4gICAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAgICAgYm90dG9tOiAke2luZGV4ID09PSAxID8gJzQ2LjV2aCcgOiBpbmRleCA9PT0gMiA/ICc0N3ZoJyA6ICc0N3ZoJ307XG4gICAgICAgICAgICBsZWZ0OiAke2luZGV4ID09PSAxID8gJy0yJScgOiBpbmRleCA9PT0gMiA/ICctOCUnIDogJy04JSd9O1xuICAgICAgICAgICAgd2lkdGg6ICR7aW5kZXggPT09IDEgPyAnMzAlJyA6IGluZGV4ID09PSAyID8gJzU1JScgOiAnMzUlJ307XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYWxsX2NoYWluX3JpZ2h0e1xuICAgICAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgICAgIHRvcDogJHtpbmRleCA9PT0gMSA/ICc1NnZoJyA6IGluZGV4ID09PSAyID8gJzU2dmgnIDogJzU1dmgnfTtcbiAgICAgICAgICAgIHJpZ2h0OiAke2luZGV4ID09PSAxID8gJy0xNiUnIDogaW5kZXggPT09IDIgPyAnLTEyJScgOiAnLTEwJSd9O1xuICAgICAgICAgICAgd2lkdGg6ICR7aW5kZXggPT09IDEgPyAnNjglJyA6IGluZGV4ID09PSAyID8gJzQzJScgOiAnMjglJ307XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvb3RlciBoMXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTByZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICBjb25zdCBpbmRleCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm1haW4udGhlbWUpO1xuICBjb25zdCBtZW51ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubWFpbi5uYXYudmlzaWJsZSkgO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtwYXVzZSwgc2V0UGF1c2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0aGVtZXMgPSBbdGhlbWVHcmVlbiwgdGhlbWVSZWQsIHRoZW1lQmx1ZV07XG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PiB7XG4gICAgICBpZighcGF1c2Upe1xuICAgICAgICBpID0gaSA8IDIgPyBpICsgMSA6IDA7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogT05fTUFJTl9USEVNRSwgaW5kZXg6IGkgfSk7XG4gICAgICB9XG4gICAgfSwgMTUwMDApO1xuICAgIHJldHVybiAoKT0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LFtwYXVzZV0pXG4gIGNvbnN0IG9uQ3Vyc29yID0gKGUpID0+IHtcbiAgICBUd2Vlbk1heC50bygnI2N1cnNvcicsIDAuMSwgeyBsZWZ0OiBlLmNsaWVudFgsIHRvcDogZS5jbGllbnRZIH0pO1xuICB9XG4gIHJldHVybihcbiAgICA8ZGl2IG9uTW91c2VNb3ZlPXtvbkN1cnNvcn0+XG4gICAgICA8TmF2IG9uU3RvcD17c2V0UGF1c2V9IHsuLi50aGVtZXNbaW5kZXhdfS8+XG4gICAgICB7aW5kZXggPT09IDAgJiYgPEhlcm8gb25TdG9wPXtzZXRQYXVzZX0gdGhlbWU9e3RoZW1lR3JlZW59IG1lbnU9e21lbnV9IC8+fVxuICAgICAge2luZGV4ID09PSAxICYmIDxIZXJvIG9uU3RvcD17c2V0UGF1c2V9IHRoZW1lPXt0aGVtZVJlZH0gbWVudT17bWVudX0gLz59XG4gICAgICB7aW5kZXggPT09IDIgJiYgPEhlcm8gb25TdG9wPXtzZXRQYXVzZX0gdGhlbWU9e3RoZW1lQmx1ZX0gbWVudT17bWVudX0gLz59XG4gICAgICA8ZGl2IGlkPVwiY3Vyc29yXCI+PC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdntcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgY3Vyc29yOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgI2N1cnNvcntcbiAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgei1pbmRleDogNTAwO1xuICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKTtcbiAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXX0= */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/hero.jsx */"));
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["358407842", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: undefined
  }, __jsx("main", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["358407842", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "moving",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["358407842", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "texts textLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["358407842", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "subTextLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: undefined
  }, !menu && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Text, {
    title: textLeft.title,
    subTitle: textLeft.subTitle,
    left: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: undefined
  }), __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["358407842", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "d-none d-md-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: undefined
  }, "\xBFQuieres Saber M\xE1s?")))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["358407842", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "image animated fadeIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["358407842", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "ball_chain_left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: undefined
  }, !menu && __jsx(BallChain, {
    id: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: undefined
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["358407842", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "ball_chain_right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: undefined
  }, !menu && __jsx(BallChain, {
    id: "right",
    right: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: undefined
  })), __jsx("img", {
    src: img,
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["358407842", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: undefined
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["358407842", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "texts textRight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["358407842", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: undefined
  }, !menu && __jsx(Text, {
    title: textRight.title,
    subTitle: textRight.subTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: undefined
  }), __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["358407842", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "d-md-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: undefined
  }, "\xBFQuieres Saber M\xE1s?")))), __jsx("footer", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["358407842", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: undefined
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["358407842", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "animated fadeInUp delay-4s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: undefined
  }, textBottom)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "358407842",
    dynamic: [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', _layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%'],
    __self: undefined
  }, `.hero.__jsx-style-dynamic-selector{background:linear-gradient(135deg,${prim},${sec});height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:#fff;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}main.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;}.texts.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.textLeft.__jsx-style-dynamic-selector{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;opacity:0;}.subTextLeft.__jsx-style-dynamic-selector{width:60%;}button.__jsx-style-dynamic-selector{margin-top:1rem;background:transparent;border:2px solid #fff;font-weight:550;font-size:11px;color:#fff;padding:.5rem;-webkit-transition:250ms ease;transition:250ms ease;cursor:none;}button.__jsx-style-dynamic-selector:focus{outline:none;}button.__jsx-style-dynamic-selector:hover{background:#fff;color:${prim};}.image.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;z-index:100;}.ball_chain_left.__jsx-style-dynamic-selector{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;bottom:${index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh'};left:${index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%'};width:${index === 1 ? '30%' : index === 2 ? '42%' : '58%'};}.ball_chain_right.__jsx-style-dynamic-selector{position:absolute;top:${index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh'};right:${index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%'};width:${index === 1 ? '73%' : index === 2 ? '48%' : '20%'};}img.__jsx-style-dynamic-selector{width:250px;height:250px;}.textRight.__jsx-style-dynamic-selector{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0;}footer.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-family:${_layout_main__WEBPACK_IMPORTED_MODULE_5__["font"].title};margin:0;text-align:center;position:relative;}@media(min-width:576px){main.__jsx-style-dynamic-selector{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.texts.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;width:25%;}.textLeft.__jsx-style-dynamic-selector{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-left:2rem;}.textRight.__jsx-style-dynamic-selector{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-right:5rem;}footer.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-size:6rem;text-shadow:5px 1px 15px rgba(0,0,0,.5);}}@media(min-width:992px){texts.__jsx-style-dynamic-selector{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}.textLeft.__jsx-style-dynamic-selector{-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}.subTextLeft.__jsx-style-dynamic-selector{width:80%;}.textRight.__jsx-style-dynamic-selector{margin-top:${index === 1 ? '65px' : '0'};}image.__jsx-style-dynamic-selector{-webkit-flex:1 0 0;-ms-flex:1 0 0;flex:1 0 0;width:60%;}img.__jsx-style-dynamic-selector{width:335px;height:335px;position:relative;}.ball_chain_left.__jsx-style-dynamic-selector{bottom:${index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh'};left:${index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%'};width:${index === 1 ? '26%' : index === 2 ? '50%' : '40%'};}.ball_chain_right.__jsx-style-dynamic-selector{top:${index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh'};right:${index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%'};width:${index === 1 ? '85%' : index === 2 ? '48%' : '28%'};}footer.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-size:8rem;line-height:8rem;}}@media(min-width:1200px){.image.__jsx-style-dynamic-selector{position:relative;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;content:" ";}.textLeft.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{max-width:272px;}.textRight.__jsx-style-dynamic-selector{margin-top:${index === 1 || index === 2 ? '280px' : '259px'};}img.__jsx-style-dynamic-selector{width:500px;height:500px;position:relative;top:100px;}.ball_chain_left.__jsx-style-dynamic-selector{z-index:5;bottom:${index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh'};left:${index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%'};width:${index === 1 ? '30%' : index === 2 ? '55%' : '35%'};}.ball_chain_right.__jsx-style-dynamic-selector{z-index:5;top:${index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh'};right:${index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%'};width:${index === 1 ? '68%' : index === 2 ? '43%' : '28%'};}footer.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-size:12rem;line-height:10rem;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9oZXJvLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErT2tCLEFBRzBHLEFBU25GLEFBTUEsQUFNYSxBQUlmLEFBR00sQUFXSCxBQUdHLEFBSUgsQUFPSyxBQVFBLEFBTU4sQUFJa0IsQUFLVyxBQU9wQixBQUdQLEFBSVcsQUFPQSxBQUlSLEFBTUgsQUFHUyxBQUdYLEFBRytCLEFBRzlCLEFBSUMsQUFLeUIsQUFLSCxBQUtuQixBQU9HLEFBS0YsQUFHeUIsQUFHN0IsQUFNRixBQU1BLEFBTU0sVUFwSnBCLEFBd0ZFLEFBaUR1QyxBQU1ILEVBckd2QixBQXdERSxBQWlDQSxDQXJIakIsRUE4RCtDLEFBcUMxQixDQTlHSSxBQWNZLEFBNEduQyxBQXdCb0IsRUF6SFAsQUFRb0IsQUFvRm5CLE9BN0VoQixBQXdEc0IsQUFpQ0EsT0FqQnBCLEVBUHNDLEFBMEN0QyxHQS9DcUMsRUFuR2YsRUErQ2IsQUF3Q1QsQUFxQ0EsRUE1QkEsQUFpQ1ksQ0FXMEIsQ0FsRDFCLEVBNEN5QixHQXRGbkIsQ0FsQ3BCLEFBbUJxQyxFQWlHbkMsRUF6REEsQUFrQkEsTUExRmdCLE9BZ0RFLENBS2xCLENBbURzQyxDQTdIekIsQUFNQSxBQXVFRCxBQXFCWixDQXNCc0MsRUFuRmYsR0FmUixHQTJJdUIsQ0FuRnRDLENBNkVzQyxJQXJHSCxBQWdCckMsR0FtRWdCLEdBbEhILEFBc0JjLENBdERaLElBcUJILEVBcUVVLEFBT0MsRUFhckIsQUFxQ0EsRUFsSGMsR0FoQ0QsQUFzSWIsQ0FqSEYsQ0E0R0UsT0EzRG1CLENBb0duQixDQXpJc0IsQUF5RHRCLENBT0EsQUFtRUEsR0FyR0Ysd0JBdER3QixBQU1BLHdCQW1CVixJQVlPLE9BN0NHLENBa0N4QixRQW1Cc0MsbUJBaUIxQixVQUNaLEtBOURvQixBQU1DLEVBdUNlLGdCQTVDcEMsaUJBVGEsQ0FzRHdCLE9BVGpCLEdBNUNBLGVBNkNOLEdBNUNLLE9BcURuQixFQVJBLG9CQWhDQSx3REFaQSIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL21haW4vaGVyby5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IE9OX01BSU5fVEhFTUUgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCB7IGNvbG9yLCBmb250IH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuaW1wb3J0IHsgVHdlZW5NYXggfSBmcm9tICdnc2FwJztcbmltcG9ydCB7IHRoZW1lR3JlZW4sIHRoZW1lUmVkLCB0aGVtZUJsdWUgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5cbmNvbnN0IE5hdiA9ICh7IHByaW0sIHNlYywgaW1nLCBpbmRleCwgb25TdG9wIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBvblRoZW1lID0gKGluZGV4KSA9PiB7XG4gICAgb25TdG9wKHRydWUpO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogT05fTUFJTl9USEVNRSwgaW5kZXggfSk7XG4gICAgc2V0VGltZW91dCgoKT0+IG9uU3RvcChmYWxzZSksIDE1MDAwKTtcbiAgfVxuICByZXR1cm4oXG4gICAgPG5hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gb25UaGVtZSgwKX0+MTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gb25UaGVtZSgxKX0+MjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gb25UaGVtZSgyKX0+MzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIiAvPlxuICAgICAgPGltZyBpZD1cImxvZ29cIiBzcmM9XCIvc3RhdGljL2xvZ28yLnBuZ1wiIGFsdD1cIlwiLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbmF2e1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB3aWR0aDogNSU7XG4gICAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7cHJpbX07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICB9XG4gICAgICAgIC5saW5le1xuICAgICAgICAgIHdpZHRoOiAycHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNSU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgfVxuICAgICAgICBpbWcjbG9nb3tcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAuNXJlbTs7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIGRpdi5uYXZ7XG4gICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgY3Vyc29yOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpudGgtY2hpbGQoMSl7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtpbmRleCA9PT0gMSA/ICcjZmZmJyA6ICd0cmFuc3BhcmVudCd9O1xuICAgICAgICAgIGNvbG9yOiAke2luZGV4ID09PSAxID8gcHJpbSA6ICcjZmZmJ307XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOm50aC1jaGlsZCgyKXtcbiAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2luZGV4ID09PSAyID8gJyNmZmYnIDogJ3RyYW5zcGFyZW50J307XG4gICAgICAgICAgY29sb3I6ICR7aW5kZXggPT09IDIgPyBwcmltIDogJyNmZmYnfTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246bnRoLWNoaWxkKDMpe1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7aW5kZXggPT09IDMgPyAnI2ZmZicgOiAndHJhbnNwYXJlbnQnfTtcbiAgICAgICAgICBjb2xvcjogJHtpbmRleCA9PT0gMyA/IHByaW0gOiAnI2ZmZid9O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGNvbG9yOiAke3ByaW19O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L25hdj5cbiAgKVxufVxuXG5jb25zdCBUZXh0ID0gKHsgdGl0bGUsIHN1YlRpdGxlLCBsZWZ0LCByaWdodCB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwPntzdWJUaXRsZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2Lm1haW57XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgZGl2LnRleHR7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGgye1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJHtmb250LnRpdGxlfTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA1NzZweCl7XG4gICAgICAgICAgZGl2LnRleHR7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogOTkycHgpe1xuICAgICAgICAgIGRpdi50ZXh0e1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDJ7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDEyMDBweCl7XG4gICAgICAgICAgaDJ7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI3MnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgQmFsbENoYWluID0gKHsgcmlnaHQsIGlkIH0pID0+IHtcbiAgcmV0dXJuKFxuICAgIDxkaXYgaWQ9e2lkfSBjbGFzc05hbWU9XCJiYWxsX2NoYWluIGQtbm9uZSBkLWxnLWZsZXhcIj5cbiAgICAgIHsgIXJpZ2h0ICYmIDxkaXYgY2xhc3NOYW1lPVwiYmFsbFwiIC8+IH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW5cIiAvPlxuICAgICAgeyByaWdodCAmJiA8ZGl2IGNsYXNzTmFtZT1cImJhbGxcIiAvPiB9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5iYWxsX2NoYWlue1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICAuYmFsbHtcbiAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYWlue1xuICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEhlcm8gPSAoeyB0aGVtZSwgbWVudSwgb25TdG9wIH0pID0+IHtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgaW1nLCB0ZXh0Qm90dG9tLCBwcmltLCBzZWMsIHRleHRMZWZ0LCB0ZXh0UmlnaHQsIGluZGV4IH0gPSB0aGVtZTtcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgVHdlZW5NYXgudG8oYCNsZWZ0YCwgMiwgeyB3aWR0aDogJzEwMCUnLCBvcGFjaXR5OiAxIH0pO1xuICAgIFR3ZWVuTWF4LnRvKGAudGV4dExlZnRgLCAyLCB7IG9wYWNpdHk6IDEsIGRlbGF5OiAyIH0pO1xuICAgIHJldHVybiAoKT0+IHtcbiAgICAgIFR3ZWVuTWF4LnRvKGAudGV4dExlZnRgLCAyLCB7IG9wYWNpdHk6IDAgfSk7XG4gICAgfVxuICB9LFttZW51XSlcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgVHdlZW5NYXgudG8oYCNyaWdodGAsIDIsIHsgd2lkdGg6ICcxMDAlJywgb3BhY2l0eTogMSwgZGVsYXk6IDIgfSk7XG4gICAgVHdlZW5NYXgudG8oYC50ZXh0UmlnaHRgLCAyLCB7IG9wYWNpdHk6IDEsIGRlbGF5OiA0IH0pO1xuICAgIHJldHVybiAoKT0+IHtcbiAgICAgIFR3ZWVuTWF4LnRvKGAudGV4dFJpZ2h0YCwgMiwgeyBvcGFjaXR5OiAwIH0pO1xuICAgIH1cbiAgfSxbbWVudV0pXG5cbiAgY29uc3Qgb25Nb3ZlID0gKGUpID0+IHtcbiAgICBUd2Vlbk1heC50bygnLm1vdmluZycsIDMsIHsgbGVmdDogKGUuc2NyZWVuWCAvIDUwKSwgdG9wOiAoZS5zY3JlZW5ZIC8gMzApIH0pO1xuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgb25Nb3VzZU1vdmU9e29uTW92ZX0gY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibW92aW5nXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dHMgdGV4dExlZnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YlRleHRMZWZ0XCI+XG4gICAgICAgICAgICB7ICFtZW51ICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8VGV4dCB0aXRsZT17dGV4dExlZnQudGl0bGV9IHN1YlRpdGxlPXt0ZXh0TGVmdC5zdWJUaXRsZX0gbGVmdCAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtYmxvY2tcIj7Cv1F1aWVyZXMgU2FiZXIgTcOhcz88L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UgYW5pbWF0ZWQgZmFkZUluXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsX2NoYWluX2xlZnRcIj5cbiAgICAgICAgICAgIHsgIW1lbnUgJiYgPEJhbGxDaGFpbiBpZD1cImxlZnRcIiAvPiB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsX2NoYWluX3JpZ2h0XCI+XG4gICAgICAgICAgICB7ICFtZW51ICYmIDxCYWxsQ2hhaW4gaWQ9J3JpZ2h0JyByaWdodCAvPiB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0cyB0ZXh0UmlnaHRcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgeyAhbWVudSAmJiA8VGV4dCB0aXRsZT17dGV4dFJpZ2h0LnRpdGxlfSBzdWJUaXRsZT17dGV4dFJpZ2h0LnN1YlRpdGxlfSAvPiB9XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImQtbWQtbm9uZVwiPsK/UXVpZXJlcyBTYWJlciBNw6FzPzwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJhbmltYXRlZCBmYWRlSW5VcCBkZWxheS00c1wiPnt0ZXh0Qm90dG9tfTwvaDE+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlcm97XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtwcmltfSwgJHtzZWN9KTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgbWFpbntcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAudGV4dHN7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0TGVmdHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnN1YlRleHRMZWZ0e1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICBmb250LXdlaWdodDogNTUwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgIGN1cnNvcjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBjb2xvcjogJHtwcmltfTtcbiAgICAgICAgfVxuICAgICAgICAuaW1hZ2V7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJhbGxfY2hhaW5fbGVmdHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIGJvdHRvbTogJHtpbmRleCA9PT0gMSA/ICc0OXZoJyA6IGluZGV4ID09PSAyID8gJzUwdmgnIDogJzUwdmgnfTtcbiAgICAgICAgICBsZWZ0OiAke2luZGV4ID09PSAxID8gJy0xMSUnIDogaW5kZXggPT09IDIgPyAnLTEwJScgOiAnLTEyJSd9O1xuICAgICAgICAgIHdpZHRoOiAke2luZGV4ID09PSAxID8gJzMwJScgOiBpbmRleCA9PT0gMiA/ICc0MiUnIDogJzU4JSd9O1xuICAgICAgICB9XG4gICAgICAgIC5iYWxsX2NoYWluX3JpZ2h0e1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6ICR7aW5kZXggPT09IDEgPyAnNDQuMnZoJyA6IGluZGV4ID09PSAyID8gJzQwdmgnIDogJzQwdmgnfTtcbiAgICAgICAgICByaWdodDogJHtpbmRleCA9PT0gMSA/ICctMjAlJyA6IGluZGV4ID09PSAyID8gJy0xMiUnIDogJy0xMiUnfTtcbiAgICAgICAgICB3aWR0aDogJHtpbmRleCA9PT0gMSA/ICc3MyUnIDogaW5kZXggPT09IDIgPyAnNDglJyA6ICcyMCUnfTtcbiAgICAgICAgfVxuICAgICAgICBpbWd7XG4gICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHRSaWdodHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciBoMXtcbiAgICAgICAgICBmb250LWZhbWlseTogJHtmb250LnRpdGxlfTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA1NzZweCl7XG4gICAgICAgICAgbWFpbntcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0c3tcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0TGVmdHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW1hZ2V7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHRSaWdodHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9vdGVyIGgxe1xuICAgICAgICAgICAgZm9udC1zaXplOiA2cmVtO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDVweCAxcHggMTVweCByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogOTkycHgpe1xuICAgICAgICAgIHRleHRze1xuICAgICAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dExlZnR7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdWJUZXh0TGVmdHtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0UmlnaHR7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAke2luZGV4ID09PSAxID8gJzY1cHgnIDogJzAnfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1hZ2V7XG4gICAgICAgICAgICBmbGV4OiAxIDAgMDtcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAzMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogMzM1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYWxsX2NoYWluX2xlZnR7XG4gICAgICAgICAgICBib3R0b206ICR7aW5kZXggPT09IDEgPyAnNDl2aCcgOiBpbmRleCA9PT0gMiA/ICc0OXZoJyA6ICc0OXZoJ307XG4gICAgICAgICAgICBsZWZ0OiAke2luZGV4ID09PSAxID8gJy02JScgOiBpbmRleCA9PT0gMiA/ICctMjAlJyA6ICctMjUlJ307XG4gICAgICAgICAgICB3aWR0aDogJHtpbmRleCA9PT0gMSA/ICcyNiUnIDogaW5kZXggPT09IDIgPyAnNTAlJyA6ICc0MCUnfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbGxfY2hhaW5fcmlnaHR7XG4gICAgICAgICAgICB0b3A6ICR7aW5kZXggPT09IDEgPyAnNDQuMnZoJyA6IGluZGV4ID09PSAyID8gJzQwdmgnIDogJzQwdmgnfTtcbiAgICAgICAgICAgIHJpZ2h0OiAke2luZGV4ID09PSAxID8gJy0zMiUnIDogaW5kZXggPT09IDIgPyAnLTIzJScgOiAnLTE1JSd9O1xuICAgICAgICAgICAgd2lkdGg6ICR7aW5kZXggPT09IDEgPyAnODUlJyA6IGluZGV4ID09PSAyID8gJzQ4JScgOiAnMjglJ307XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvb3RlciBoMXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOHJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4cmVtO1xuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDEyMDBweCl7XG4gICAgICAgICAgLmltYWdle1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0TGVmdCBoMntcbiAgICAgICAgICAgIG1heC13aWR0aDogMjcycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0UmlnaHR7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAke2luZGV4ID09PSAxIHx8IGluZGV4ID09PSAyID8gJzI4MHB4JyA6ICcyNTlweCd9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbGxfY2hhaW5fbGVmdHtcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgICAgICBib3R0b206ICR7aW5kZXggPT09IDEgPyAnNDYuNXZoJyA6IGluZGV4ID09PSAyID8gJzQ3dmgnIDogJzQ3dmgnfTtcbiAgICAgICAgICAgIGxlZnQ6ICR7aW5kZXggPT09IDEgPyAnLTIlJyA6IGluZGV4ID09PSAyID8gJy04JScgOiAnLTglJ307XG4gICAgICAgICAgICB3aWR0aDogJHtpbmRleCA9PT0gMSA/ICczMCUnIDogaW5kZXggPT09IDIgPyAnNTUlJyA6ICczNSUnfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbGxfY2hhaW5fcmlnaHR7XG4gICAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAgICAgdG9wOiAke2luZGV4ID09PSAxID8gJzU2dmgnIDogaW5kZXggPT09IDIgPyAnNTZ2aCcgOiAnNTV2aCd9O1xuICAgICAgICAgICAgcmlnaHQ6ICR7aW5kZXggPT09IDEgPyAnLTE2JScgOiBpbmRleCA9PT0gMiA/ICctMTIlJyA6ICctMTAlJ307XG4gICAgICAgICAgICB3aWR0aDogJHtpbmRleCA9PT0gMSA/ICc2OCUnIDogaW5kZXggPT09IDIgPyAnNDMlJyA6ICcyOCUnfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9vdGVyIGgxe1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubWFpbi50aGVtZSk7XG4gIGNvbnN0IG1lbnUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5tYWluLm5hdi52aXNpYmxlKSA7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW3BhdXNlLCBzZXRQYXVzZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRoZW1lcyA9IFt0aGVtZUdyZWVuLCB0aGVtZVJlZCwgdGhlbWVCbHVlXTtcbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+IHtcbiAgICAgIGlmKCFwYXVzZSl7XG4gICAgICAgIGkgPSBpIDwgMiA/IGkgKyAxIDogMDtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBPTl9NQUlOX1RIRU1FLCBpbmRleDogaSB9KTtcbiAgICAgIH1cbiAgICB9LCAxNTAwMCk7XG4gICAgcmV0dXJuICgpPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sW3BhdXNlXSlcbiAgY29uc3Qgb25DdXJzb3IgPSAoZSkgPT4ge1xuICAgIFR3ZWVuTWF4LnRvKCcjY3Vyc29yJywgMC4xLCB7IGxlZnQ6IGUuY2xpZW50WCwgdG9wOiBlLmNsaWVudFkgfSk7XG4gIH1cbiAgcmV0dXJuKFxuICAgIDxkaXYgb25Nb3VzZU1vdmU9e29uQ3Vyc29yfT5cbiAgICAgIDxOYXYgb25TdG9wPXtzZXRQYXVzZX0gey4uLnRoZW1lc1tpbmRleF19Lz5cbiAgICAgIHtpbmRleCA9PT0gMCAmJiA8SGVybyBvblN0b3A9e3NldFBhdXNlfSB0aGVtZT17dGhlbWVHcmVlbn0gbWVudT17bWVudX0gLz59XG4gICAgICB7aW5kZXggPT09IDEgJiYgPEhlcm8gb25TdG9wPXtzZXRQYXVzZX0gdGhlbWU9e3RoZW1lUmVkfSBtZW51PXttZW51fSAvPn1cbiAgICAgIHtpbmRleCA9PT0gMiAmJiA8SGVybyBvblN0b3A9e3NldFBhdXNlfSB0aGVtZT17dGhlbWVCbHVlfSBtZW51PXttZW51fSAvPn1cbiAgICAgIDxkaXYgaWQ9XCJjdXJzb3JcIj48L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2e1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBjdXJzb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAjY3Vyc29ye1xuICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICB6LWluZGV4OiA1MDA7XG4gICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpO1xuICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */
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
    onMouseMove: onCursor,
    className: "jsx-140420266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446
    },
    __self: undefined
  }, __jsx(Nav, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onStop: setPause
  }, themes[index], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  })), index === 0 && __jsx(Hero, {
    onStop: setPause,
    theme: _layout_main__WEBPACK_IMPORTED_MODULE_5__["themeGreen"],
    menu: menu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448
    },
    __self: undefined
  }), index === 1 && __jsx(Hero, {
    onStop: setPause,
    theme: _layout_main__WEBPACK_IMPORTED_MODULE_5__["themeRed"],
    menu: menu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449
    },
    __self: undefined
  }), index === 2 && __jsx(Hero, {
    onStop: setPause,
    theme: _layout_main__WEBPACK_IMPORTED_MODULE_5__["themeBlue"],
    menu: menu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: undefined
  }), __jsx("div", {
    id: "cursor",
    className: "jsx-140420266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "140420266",
    __self: undefined
  }, "div.jsx-140420266{position:relative;cursor:none !important;}#cursor.jsx-140420266{width:25px;height:25px;top:0;left:0;border-radius:50%;border:1px solid #fff;z-index:500;content:\" \";position:absolute;background:rgba(255,255,255,.3);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9oZXJvLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtY2tCLEFBRzZCLEFBSVAsV0FDQyxPQUpXLEtBS2pCLE1BQ0MsT0FDVyxLQU5wQixhQU93QixzQkFDVixZQUNBLFlBQ00sa0JBQ2lCLGdDQUNyQyIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL21haW4vaGVyby5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IE9OX01BSU5fVEhFTUUgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCB7IGNvbG9yLCBmb250IH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuaW1wb3J0IHsgVHdlZW5NYXggfSBmcm9tICdnc2FwJztcbmltcG9ydCB7IHRoZW1lR3JlZW4sIHRoZW1lUmVkLCB0aGVtZUJsdWUgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5cbmNvbnN0IE5hdiA9ICh7IHByaW0sIHNlYywgaW1nLCBpbmRleCwgb25TdG9wIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBvblRoZW1lID0gKGluZGV4KSA9PiB7XG4gICAgb25TdG9wKHRydWUpO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogT05fTUFJTl9USEVNRSwgaW5kZXggfSk7XG4gICAgc2V0VGltZW91dCgoKT0+IG9uU3RvcChmYWxzZSksIDE1MDAwKTtcbiAgfVxuICByZXR1cm4oXG4gICAgPG5hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gb25UaGVtZSgwKX0+MTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gb25UaGVtZSgxKX0+MjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gb25UaGVtZSgyKX0+MzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIiAvPlxuICAgICAgPGltZyBpZD1cImxvZ29cIiBzcmM9XCIvc3RhdGljL2xvZ28yLnBuZ1wiIGFsdD1cIlwiLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbmF2e1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB3aWR0aDogNSU7XG4gICAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7cHJpbX07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICB9XG4gICAgICAgIC5saW5le1xuICAgICAgICAgIHdpZHRoOiAycHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNSU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgfVxuICAgICAgICBpbWcjbG9nb3tcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAuNXJlbTs7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIGRpdi5uYXZ7XG4gICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgY3Vyc29yOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpudGgtY2hpbGQoMSl7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtpbmRleCA9PT0gMSA/ICcjZmZmJyA6ICd0cmFuc3BhcmVudCd9O1xuICAgICAgICAgIGNvbG9yOiAke2luZGV4ID09PSAxID8gcHJpbSA6ICcjZmZmJ307XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOm50aC1jaGlsZCgyKXtcbiAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2luZGV4ID09PSAyID8gJyNmZmYnIDogJ3RyYW5zcGFyZW50J307XG4gICAgICAgICAgY29sb3I6ICR7aW5kZXggPT09IDIgPyBwcmltIDogJyNmZmYnfTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246bnRoLWNoaWxkKDMpe1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7aW5kZXggPT09IDMgPyAnI2ZmZicgOiAndHJhbnNwYXJlbnQnfTtcbiAgICAgICAgICBjb2xvcjogJHtpbmRleCA9PT0gMyA/IHByaW0gOiAnI2ZmZid9O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGNvbG9yOiAke3ByaW19O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L25hdj5cbiAgKVxufVxuXG5jb25zdCBUZXh0ID0gKHsgdGl0bGUsIHN1YlRpdGxlLCBsZWZ0LCByaWdodCB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwPntzdWJUaXRsZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2Lm1haW57XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgZGl2LnRleHR7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGgye1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJHtmb250LnRpdGxlfTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA1NzZweCl7XG4gICAgICAgICAgZGl2LnRleHR7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogOTkycHgpe1xuICAgICAgICAgIGRpdi50ZXh0e1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDJ7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDEyMDBweCl7XG4gICAgICAgICAgaDJ7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI3MnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgQmFsbENoYWluID0gKHsgcmlnaHQsIGlkIH0pID0+IHtcbiAgcmV0dXJuKFxuICAgIDxkaXYgaWQ9e2lkfSBjbGFzc05hbWU9XCJiYWxsX2NoYWluIGQtbm9uZSBkLWxnLWZsZXhcIj5cbiAgICAgIHsgIXJpZ2h0ICYmIDxkaXYgY2xhc3NOYW1lPVwiYmFsbFwiIC8+IH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW5cIiAvPlxuICAgICAgeyByaWdodCAmJiA8ZGl2IGNsYXNzTmFtZT1cImJhbGxcIiAvPiB9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5iYWxsX2NoYWlue1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICAuYmFsbHtcbiAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYWlue1xuICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEhlcm8gPSAoeyB0aGVtZSwgbWVudSwgb25TdG9wIH0pID0+IHtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgaW1nLCB0ZXh0Qm90dG9tLCBwcmltLCBzZWMsIHRleHRMZWZ0LCB0ZXh0UmlnaHQsIGluZGV4IH0gPSB0aGVtZTtcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgVHdlZW5NYXgudG8oYCNsZWZ0YCwgMiwgeyB3aWR0aDogJzEwMCUnLCBvcGFjaXR5OiAxIH0pO1xuICAgIFR3ZWVuTWF4LnRvKGAudGV4dExlZnRgLCAyLCB7IG9wYWNpdHk6IDEsIGRlbGF5OiAyIH0pO1xuICAgIHJldHVybiAoKT0+IHtcbiAgICAgIFR3ZWVuTWF4LnRvKGAudGV4dExlZnRgLCAyLCB7IG9wYWNpdHk6IDAgfSk7XG4gICAgfVxuICB9LFttZW51XSlcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgVHdlZW5NYXgudG8oYCNyaWdodGAsIDIsIHsgd2lkdGg6ICcxMDAlJywgb3BhY2l0eTogMSwgZGVsYXk6IDIgfSk7XG4gICAgVHdlZW5NYXgudG8oYC50ZXh0UmlnaHRgLCAyLCB7IG9wYWNpdHk6IDEsIGRlbGF5OiA0IH0pO1xuICAgIHJldHVybiAoKT0+IHtcbiAgICAgIFR3ZWVuTWF4LnRvKGAudGV4dFJpZ2h0YCwgMiwgeyBvcGFjaXR5OiAwIH0pO1xuICAgIH1cbiAgfSxbbWVudV0pXG5cbiAgY29uc3Qgb25Nb3ZlID0gKGUpID0+IHtcbiAgICBUd2Vlbk1heC50bygnLm1vdmluZycsIDMsIHsgbGVmdDogKGUuc2NyZWVuWCAvIDUwKSwgdG9wOiAoZS5zY3JlZW5ZIC8gMzApIH0pO1xuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgb25Nb3VzZU1vdmU9e29uTW92ZX0gY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibW92aW5nXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dHMgdGV4dExlZnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YlRleHRMZWZ0XCI+XG4gICAgICAgICAgICB7ICFtZW51ICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8VGV4dCB0aXRsZT17dGV4dExlZnQudGl0bGV9IHN1YlRpdGxlPXt0ZXh0TGVmdC5zdWJUaXRsZX0gbGVmdCAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtYmxvY2tcIj7Cv1F1aWVyZXMgU2FiZXIgTcOhcz88L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UgYW5pbWF0ZWQgZmFkZUluXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsX2NoYWluX2xlZnRcIj5cbiAgICAgICAgICAgIHsgIW1lbnUgJiYgPEJhbGxDaGFpbiBpZD1cImxlZnRcIiAvPiB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsX2NoYWluX3JpZ2h0XCI+XG4gICAgICAgICAgICB7ICFtZW51ICYmIDxCYWxsQ2hhaW4gaWQ9J3JpZ2h0JyByaWdodCAvPiB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0cyB0ZXh0UmlnaHRcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgeyAhbWVudSAmJiA8VGV4dCB0aXRsZT17dGV4dFJpZ2h0LnRpdGxlfSBzdWJUaXRsZT17dGV4dFJpZ2h0LnN1YlRpdGxlfSAvPiB9XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImQtbWQtbm9uZVwiPsK/UXVpZXJlcyBTYWJlciBNw6FzPzwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJhbmltYXRlZCBmYWRlSW5VcCBkZWxheS00c1wiPnt0ZXh0Qm90dG9tfTwvaDE+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlcm97XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtwcmltfSwgJHtzZWN9KTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgbWFpbntcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAudGV4dHN7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0TGVmdHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnN1YlRleHRMZWZ0e1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICBmb250LXdlaWdodDogNTUwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgIGN1cnNvcjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBjb2xvcjogJHtwcmltfTtcbiAgICAgICAgfVxuICAgICAgICAuaW1hZ2V7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJhbGxfY2hhaW5fbGVmdHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIGJvdHRvbTogJHtpbmRleCA9PT0gMSA/ICc0OXZoJyA6IGluZGV4ID09PSAyID8gJzUwdmgnIDogJzUwdmgnfTtcbiAgICAgICAgICBsZWZ0OiAke2luZGV4ID09PSAxID8gJy0xMSUnIDogaW5kZXggPT09IDIgPyAnLTEwJScgOiAnLTEyJSd9O1xuICAgICAgICAgIHdpZHRoOiAke2luZGV4ID09PSAxID8gJzMwJScgOiBpbmRleCA9PT0gMiA/ICc0MiUnIDogJzU4JSd9O1xuICAgICAgICB9XG4gICAgICAgIC5iYWxsX2NoYWluX3JpZ2h0e1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6ICR7aW5kZXggPT09IDEgPyAnNDQuMnZoJyA6IGluZGV4ID09PSAyID8gJzQwdmgnIDogJzQwdmgnfTtcbiAgICAgICAgICByaWdodDogJHtpbmRleCA9PT0gMSA/ICctMjAlJyA6IGluZGV4ID09PSAyID8gJy0xMiUnIDogJy0xMiUnfTtcbiAgICAgICAgICB3aWR0aDogJHtpbmRleCA9PT0gMSA/ICc3MyUnIDogaW5kZXggPT09IDIgPyAnNDglJyA6ICcyMCUnfTtcbiAgICAgICAgfVxuICAgICAgICBpbWd7XG4gICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHRSaWdodHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciBoMXtcbiAgICAgICAgICBmb250LWZhbWlseTogJHtmb250LnRpdGxlfTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA1NzZweCl7XG4gICAgICAgICAgbWFpbntcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0c3tcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0TGVmdHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW1hZ2V7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHRSaWdodHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9vdGVyIGgxe1xuICAgICAgICAgICAgZm9udC1zaXplOiA2cmVtO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDVweCAxcHggMTVweCByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogOTkycHgpe1xuICAgICAgICAgIHRleHRze1xuICAgICAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dExlZnR7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdWJUZXh0TGVmdHtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0UmlnaHR7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAke2luZGV4ID09PSAxID8gJzY1cHgnIDogJzAnfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1hZ2V7XG4gICAgICAgICAgICBmbGV4OiAxIDAgMDtcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAzMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogMzM1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYWxsX2NoYWluX2xlZnR7XG4gICAgICAgICAgICBib3R0b206ICR7aW5kZXggPT09IDEgPyAnNDl2aCcgOiBpbmRleCA9PT0gMiA/ICc0OXZoJyA6ICc0OXZoJ307XG4gICAgICAgICAgICBsZWZ0OiAke2luZGV4ID09PSAxID8gJy02JScgOiBpbmRleCA9PT0gMiA/ICctMjAlJyA6ICctMjUlJ307XG4gICAgICAgICAgICB3aWR0aDogJHtpbmRleCA9PT0gMSA/ICcyNiUnIDogaW5kZXggPT09IDIgPyAnNTAlJyA6ICc0MCUnfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbGxfY2hhaW5fcmlnaHR7XG4gICAgICAgICAgICB0b3A6ICR7aW5kZXggPT09IDEgPyAnNDQuMnZoJyA6IGluZGV4ID09PSAyID8gJzQwdmgnIDogJzQwdmgnfTtcbiAgICAgICAgICAgIHJpZ2h0OiAke2luZGV4ID09PSAxID8gJy0zMiUnIDogaW5kZXggPT09IDIgPyAnLTIzJScgOiAnLTE1JSd9O1xuICAgICAgICAgICAgd2lkdGg6ICR7aW5kZXggPT09IDEgPyAnODUlJyA6IGluZGV4ID09PSAyID8gJzQ4JScgOiAnMjglJ307XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvb3RlciBoMXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOHJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4cmVtO1xuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDEyMDBweCl7XG4gICAgICAgICAgLmltYWdle1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0TGVmdCBoMntcbiAgICAgICAgICAgIG1heC13aWR0aDogMjcycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0UmlnaHR7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAke2luZGV4ID09PSAxIHx8IGluZGV4ID09PSAyID8gJzI4MHB4JyA6ICcyNTlweCd9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbGxfY2hhaW5fbGVmdHtcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgICAgICBib3R0b206ICR7aW5kZXggPT09IDEgPyAnNDYuNXZoJyA6IGluZGV4ID09PSAyID8gJzQ3dmgnIDogJzQ3dmgnfTtcbiAgICAgICAgICAgIGxlZnQ6ICR7aW5kZXggPT09IDEgPyAnLTIlJyA6IGluZGV4ID09PSAyID8gJy04JScgOiAnLTglJ307XG4gICAgICAgICAgICB3aWR0aDogJHtpbmRleCA9PT0gMSA/ICczMCUnIDogaW5kZXggPT09IDIgPyAnNTUlJyA6ICczNSUnfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbGxfY2hhaW5fcmlnaHR7XG4gICAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAgICAgdG9wOiAke2luZGV4ID09PSAxID8gJzU2dmgnIDogaW5kZXggPT09IDIgPyAnNTZ2aCcgOiAnNTV2aCd9O1xuICAgICAgICAgICAgcmlnaHQ6ICR7aW5kZXggPT09IDEgPyAnLTE2JScgOiBpbmRleCA9PT0gMiA/ICctMTIlJyA6ICctMTAlJ307XG4gICAgICAgICAgICB3aWR0aDogJHtpbmRleCA9PT0gMSA/ICc2OCUnIDogaW5kZXggPT09IDIgPyAnNDMlJyA6ICcyOCUnfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9vdGVyIGgxe1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubWFpbi50aGVtZSk7XG4gIGNvbnN0IG1lbnUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5tYWluLm5hdi52aXNpYmxlKSA7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW3BhdXNlLCBzZXRQYXVzZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRoZW1lcyA9IFt0aGVtZUdyZWVuLCB0aGVtZVJlZCwgdGhlbWVCbHVlXTtcbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+IHtcbiAgICAgIGlmKCFwYXVzZSl7XG4gICAgICAgIGkgPSBpIDwgMiA/IGkgKyAxIDogMDtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBPTl9NQUlOX1RIRU1FLCBpbmRleDogaSB9KTtcbiAgICAgIH1cbiAgICB9LCAxNTAwMCk7XG4gICAgcmV0dXJuICgpPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sW3BhdXNlXSlcbiAgY29uc3Qgb25DdXJzb3IgPSAoZSkgPT4ge1xuICAgIFR3ZWVuTWF4LnRvKCcjY3Vyc29yJywgMC4xLCB7IGxlZnQ6IGUuY2xpZW50WCwgdG9wOiBlLmNsaWVudFkgfSk7XG4gIH1cbiAgcmV0dXJuKFxuICAgIDxkaXYgb25Nb3VzZU1vdmU9e29uQ3Vyc29yfT5cbiAgICAgIDxOYXYgb25TdG9wPXtzZXRQYXVzZX0gey4uLnRoZW1lc1tpbmRleF19Lz5cbiAgICAgIHtpbmRleCA9PT0gMCAmJiA8SGVybyBvblN0b3A9e3NldFBhdXNlfSB0aGVtZT17dGhlbWVHcmVlbn0gbWVudT17bWVudX0gLz59XG4gICAgICB7aW5kZXggPT09IDEgJiYgPEhlcm8gb25TdG9wPXtzZXRQYXVzZX0gdGhlbWU9e3RoZW1lUmVkfSBtZW51PXttZW51fSAvPn1cbiAgICAgIHtpbmRleCA9PT0gMiAmJiA8SGVybyBvblN0b3A9e3NldFBhdXNlfSB0aGVtZT17dGhlbWVCbHVlfSBtZW51PXttZW51fSAvPn1cbiAgICAgIDxkaXYgaWQ9XCJjdXJzb3JcIj48L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2e1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBjdXJzb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAjY3Vyc29ye1xuICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICB6LWluZGV4OiA1MDA7XG4gICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpO1xuICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/hero.jsx */"));
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/bootstrap/scss/bootstrap.scss */ "./node_modules/bootstrap/scss/bootstrap.scss");
/* harmony import */ var _node_modules_bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header */ "./components/main/header.jsx");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu */ "./components/main/menu.jsx");
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/main/layout.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const Modal = () => {
  const menu = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.main.nav.visible);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3625275396", [menu ? 'block' : 'none']]]) + " " + "modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3625275396",
    dynamic: [menu ? 'block' : 'none'],
    __self: undefined
  }, `.modal.__jsx-style-dynamic-selector{display:${menu ? 'block' : 'none'};position:fixed;top:0;left:0;height:100%;width:100%;background:rgba(0,0,0,.5);z-index:150;content:" ";-webkit-transition:250ms ease;transition:250ms ease;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9sYXlvdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdrQixBQUdnRCxxQ0FDdEIsZUFDVCxNQUNDLE9BQ0ssWUFDRCxXQUNrQiwwQkFDakIsWUFDQSxZQUNVLG9EQUN4QiIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL21haW4vbGF5b3V0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Jvb3RzdHJhcC5zY3NzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5cbmNvbnN0IE1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBtZW51ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubWFpbi5uYXYudmlzaWJsZSk7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tb2RhbHtcbiAgICAgICAgICBkaXNwbGF5OiAke21lbnUgPyAnYmxvY2snIDogJ25vbmUnfTtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjUpO1xuICAgICAgICAgIHotaW5kZXg6IDE1MDtcbiAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9hbmltYXRlLm1pbi5jc3NcIi8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L21haW4+XG4gICAgICA8TWVudSAvPlxuICAgICAgPE1vZGFsIC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgbWFpbntcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */
/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/layout.jsx */`));
};

const Layout = ({
  children
}) => {
  return __jsx("div", {
    className: "jsx-885246517",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("link", {
    rel: "stylesheet",
    href: "/static/animate.min.css",
    className: "jsx-885246517",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  })), __jsx("main", {
    className: "jsx-885246517",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), children), __jsx(_menu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }), __jsx(Modal, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "885246517",
    __self: undefined
  }, "div.jsx-885246517{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100vw;position:relative;}main.jsx-885246517{width:100%;position:relative;-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9sYXlvdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDa0IsQUFHd0IsQUFLRixXQUNPLGtCQUNQLDZDQU5DLEFBT0ksWUFORSxJQU9wQixjQU5BIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9sYXlvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvYm9vdHN0cmFwLnNjc3MnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcblxuY29uc3QgTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IG1lbnUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5tYWluLm5hdi52aXNpYmxlKTtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1vZGFse1xuICAgICAgICAgIGRpc3BsYXk6ICR7bWVudSA/ICdibG9jaycgOiAnbm9uZSd9O1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgICAgICAgei1pbmRleDogMTUwO1xuICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL2FuaW1hdGUubWluLmNzc1wiLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxNZW51IC8+XG4gICAgICA8TW9kYWwgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2e1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBtYWlue1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/layout.jsx */"));
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
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/main/menu.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Menu = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const visible = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.main.nav.visible);
  return __jsx("nav", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2561055233", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2561055233", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2561055233", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Menu"), __jsx("button", {
    title: "Cerrar",
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_MAIN_NAV"]
    }),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2561055233", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "X")), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2561055233", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2561055233", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2561055233", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "option")), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2561055233", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2561055233", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "option")), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2561055233", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2561055233", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "option")), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2561055233", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2561055233", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "option")), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2561055233", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2561055233", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "option"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2561055233",
    dynamic: [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0'],
    __self: undefined
  }, `nav.__jsx-style-dynamic-selector{background:${_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray};color:${_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark};width:${visible ? '30%' : '0'};height:100vh;-webkit-transition:500ms ease;transition:500ms ease;overflow:hidden;position:relative;z-index:160;-webkit-flex:2 0 1;-ms-flex:2 0 1;flex:2 0 1;}header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:${_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title};padding:1rem;}header.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;margin-left:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}button.__jsx-style-dynamic-selector{background:transparent;border:none;color:${_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark};}button.__jsx-style-dynamic-selector:focus{outline:none;}header.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{font-size:1.5rem;text-align:right;}ul.__jsx-style-dynamic-selector{width:100%;list-style:none;margin:0;padding:0;border-bottom:1px solid #E6EAEA;}li.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{width:100%;border-top:1px solid #E6EAEA;height:70px;text-align:left;font-size:1.4rem;padding-left:2rem;-webkit-transition:250ms ease;transition:250ms ease;}li.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{background:${_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light};}@media(max-width:576px){nav.__jsx-style-dynamic-selector{width:${visible ? '100%' : '0'};}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9tZW51LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQmtCLEFBR21ELEFBVzNCLEFBT0osQUFLYyxBQUtWLEFBR0ksQUFJTixBQU9BLEFBUzZCLEFBSUgsU0FwQ3BCLEVBaUJELEFBT2EsRUFkL0IsSUFHbUIsTUFSTCxHQUpLLENBaUJSLE9BSlgsQ0FScUMsQUErQm5DLENBbEJVLElBckN5QixBQTJDdkIsQUFRZCxNQWJrQyxNQU1oQixnQkFDQyxFQXBCbkIsSUFkZ0MsQ0FWSyxHQXNDckMsT0FPb0Isa0JBQ0ksT0E3Q1QsQ0FrQmYsWUFqQndCLGdDQTZDeEIsb0JBNUNrQixjQVFHLEVBUEQsa0JBQ04sWUFDRCw2Q0FDYixnQkFLMkMseUNBQzVCLGFBQ2YiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL21lbnUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IE9OX01BSU5fTkFWIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBjb2xvciwgZm9udCB9IGZyb20gJy4uLy4uL2xheW91dC9tYWluJztcblxuY29uc3QgTWVudSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB2aXNpYmxlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubWFpbi5uYXYudmlzaWJsZSk7XG4gIHJldHVybihcbiAgICA8bmF2PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPHA+TWVudTwvcD5cbiAgICAgICAgPGJ1dHRvbiB0aXRsZT1cIkNlcnJhclwiIG9uQ2xpY2s9eygpPT4gZGlzcGF0Y2goeyB0eXBlOiBPTl9NQUlOX05BViB9KX0+WDwvYnV0dG9uPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YnV0dG9uPm9wdGlvbjwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGJ1dHRvbj5vcHRpb248L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxidXR0b24+b3B0aW9uPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YnV0dG9uPm9wdGlvbjwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGJ1dHRvbj5vcHRpb248L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG5hdntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9yLmdyYXl9O1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yLmRhcmt9O1xuICAgICAgICAgIHdpZHRoOiAke3Zpc2libGUgPyAnMzAlJyA6ICcwJ307XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiA1MDBtcyBlYXNlO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHotaW5kZXg6IDE2MDtcbiAgICAgICAgICBmbGV4OiAyIDAgMTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmb250LWZhbWlseTogJHtmb250LnRpdGxlfTtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b257XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yLmRhcmt9O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciBidXR0b257XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgdWx7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U2RUFFQTtcbiAgICAgICAgfVxuICAgICAgICBsaSBidXR0b257XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFNkVBRUE7XG4gICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGkgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3IubGlnaHR9O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDU3NnB4KXtcbiAgICAgICAgICBuYXZ7XG4gICAgICAgICAgICB3aWR0aDogJHt2aXNpYmxlID8gJzEwMCUnIDogJzAnfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvbmF2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIl19 */
/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/menu.jsx */`));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./layout/main.js":
/*!************************!*\
  !*** ./layout/main.js ***!
  \************************/
/*! exports provided: color, font, themeGreen, themeRed, themeBlue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
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

/***/ "./node_modules/bootstrap/scss/bootstrap.scss":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap/scss/bootstrap.scss ***!
  \****************************************************/
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
/* harmony import */ var _components_main_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/main/layout */ "./components/main/layout.jsx");
/* harmony import */ var _components_main_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/main/hero */ "./components/main/hero.jsx");
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Main = () => {
  return __jsx(_components_main_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_components_main_hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./store/actions.js":
/*!**************************!*\
  !*** ./store/actions.js ***!
  \**************************/
/*! exports provided: ON_DOWN, ON_NOTIFICATIONS, ON_VIEW_NAV, ON_NOTE, ON_LOADER, ON_LOGIN, ON_WALLET, navView, ON_USER, ON_UPDATE, ON_STORE, ON_PRODUCTS, storeSections, ON_POST_REGISTER, ON_GREENINFO, ON_GREEN_CREATOR, ON_GREENPOST, ON_GREEN_LIKE, OFF_GREEN_LIKE, ON_GREEN_WISH_FOUND, ON_GREEN_COMMENT, onStore, ON_WISH, ON_FLOAT, OFF_FLOAT, ON_VAULT, ON_VAULT_HOME, ON_VAULT_PRODUCT, ON_SPACE_HOME, ON_SPACE_WALL, ON_SPACE_CHAT, ON_SPACE_FRIENDS, ON_SPACE_EVENTS, ON_POST, ON_WALL_TOP, ON_WALL_POSTS, ON_CONFIRM, ON_CHAT_FRIEND, ON_CHAT_PRIVATE, ON_CHAT_CLOSE, ON_CHAT_MINIMIZE, ON_CHAT_MSG, ON_CHAT_ALERT, ON_MAIN_NAV, ON_MAIN_THEME */
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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
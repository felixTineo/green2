webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/main/layout.jsx":
/*!************************************!*\
  !*** ./components/main/layout.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _node_modules_bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/bootstrap/scss/bootstrap.scss */ "./node_modules/bootstrap/scss/bootstrap.scss");
/* harmony import */ var _node_modules_bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header */ "./components/main/header.jsx");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu */ "./components/main/menu.jsx");
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/main/layout.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Modal = function Modal() {
  var menu = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.main.nav.visible;
  });
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3625275396", [menu ? 'block' : 'none']]]) + " " + "modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3625275396",
    dynamic: [menu ? 'block' : 'none'],
    __self: this
  }, ".modal.__jsx-style-dynamic-selector{display:".concat(menu ? 'block' : 'none', ";position:fixed;top:0;left:0;height:100%;width:100%;background:rgba(0,0,0,.5);z-index:150;content:\" \";-webkit-transition:250ms ease;transition:250ms ease;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9sYXlvdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdrQixBQUdnRCxxQ0FDdEIsZUFDVCxNQUNDLE9BQ0ssWUFDRCxXQUNrQiwwQkFDakIsWUFDQSxZQUNVLG9EQUN4QiIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL21haW4vbGF5b3V0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Jvb3RzdHJhcC5zY3NzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5cbmNvbnN0IE1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBtZW51ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubWFpbi5uYXYudmlzaWJsZSk7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tb2RhbHtcbiAgICAgICAgICBkaXNwbGF5OiAke21lbnUgPyAnYmxvY2snIDogJ25vbmUnfTtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjUpO1xuICAgICAgICAgIHotaW5kZXg6IDE1MDtcbiAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9hbmltYXRlLm1pbi5jc3NcIi8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L21haW4+XG4gICAgICA8TWVudSAvPlxuICAgICAgPE1vZGFsIC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBtYWlue1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/layout.jsx */")));
};

var Layout = function Layout(_ref) {
  var children = _ref.children;
  return __jsx("div", {
    className: "jsx-2044012869",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("link", {
    rel: "stylesheet",
    href: "/static/animate.min.css",
    className: "jsx-2044012869",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), __jsx("main", {
    className: "jsx-2044012869",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), children), __jsx(_menu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(Modal, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2044012869",
    __self: this
  }, "div.jsx-2044012869{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;position:relative;}main.jsx-2044012869{width:100%;position:relative;-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9sYXlvdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDa0IsQUFHd0IsQUFLRixXQUNPLGtCQUNQLDZDQU5BLEFBT0ssV0FORSxLQU9wQixhQU5BIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9sYXlvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvYm9vdHN0cmFwLnNjc3MnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcblxuY29uc3QgTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IG1lbnUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5tYWluLm5hdi52aXNpYmxlKTtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1vZGFse1xuICAgICAgICAgIGRpc3BsYXk6ICR7bWVudSA/ICdibG9jaycgOiAnbm9uZSd9O1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgICAgICAgei1pbmRleDogMTUwO1xuICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL2FuaW1hdGUubWluLmNzc1wiLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxNZW51IC8+XG4gICAgICA8TW9kYWwgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2e1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIG1haW57XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGZsZXg6IDEgMSAwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/layout.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.05d768282f990a63ef6a.hot-update.js.map
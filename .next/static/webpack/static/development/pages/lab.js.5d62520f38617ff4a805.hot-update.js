webpackHotUpdate("static/development/pages/lab.js",{

/***/ "./pages/lab.jsx":
/*!***********************!*\
  !*** ./pages/lab.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions */ "./store/actions.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _node_modules_bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../node_modules/bootstrap/scss/bootstrap.scss */ "./node_modules/bootstrap/scss/bootstrap.scss");
/* harmony import */ var _node_modules_bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/pages/lab.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Creator = function Creator() {
  var visible = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.greenpost.creator;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('/static/random/r16.jpg'),
      image = _useState[0],
      setImage = _useState[1];

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    style: {
      minWidth: '80%'
    },
    isOpen: visible,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3019890244", [image]]]) + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3019890244", [image]]]) + " " + "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3019890244", [image]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "hi")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3019890244", [image]]]) + " " + "history",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("button", {
    type: "button",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3019890244", [image]]]) + " " + "btn_close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "X")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3019890244",
    dynamic: [image],
    __self: this
  }, ".main.__jsx-style-dynamic-selector{height:60vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;}.img.__jsx-style-dynamic-selector{width:60%;background-image:url(".concat(image, ");background-size:cover;background-position:center;background-repeat:no-repeat;}.history.__jsx-style-dynamic-selector{width:40%;}.btn_close.__jsx-style-dynamic-selector{position:absolute;top:0;right:0;background:transparent;border:none;-webkit-transition:250ms ease;transition:250ms ease;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL3BhZ2VzL2xhYi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJrQixBQUd1QixBQUtGLEFBT0EsQUFHUSxVQVRpQyxBQU9yRCxFQVplLE1BZVAsTUFDRSxRQUNlLHVCQUNYLE1BWlUsTUFhQSxnQkFaSyxHQU5ULGtCQUNwQixNQU04QixTQVk5QixtQkFYQSIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9wYWdlcy9sYWIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgT05fR1JFRU5fQ1JFQVRPUiB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Jvb3RzdHJhcC5zY3NzJztcblxuY29uc3QgQ3JlYXRvciA9ICgpID0+IHtcbiAgY29uc3QgdmlzaWJsZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmdyZWVucG9zdC5jcmVhdG9yKTtcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSgnL3N0YXRpYy9yYW5kb20vcjE2LmpwZycpO1xuICByZXR1cm4oXG4gICAgPE1vZGFsIHN0eWxlPXt7IG1pbldpZHRoOiAnODAlJyB9fSBpc09wZW49e3Zpc2libGV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XG4gICAgICAgICAgPGgxPmhpPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlzdG9yeVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5fY2xvc2VcIiB0eXBlPVwiYnV0dG9uXCI+WDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIGhlaWdodDogNjB2aDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAuaW1ne1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7aW1hZ2V9KTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICB9XG4gICAgICAgIC5oaXN0b3J5e1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmJ0bl9jbG9zZXtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L01vZGFsPlxuICApXG59O1xuXG5jb25zdCBMYWIgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gZGlzcGF0Y2goeyB0eXBlOiBPTl9HUkVFTl9DUkVBVE9SIH0pfT5vcGVuPC9idXR0b24+XG4gICAgICA8Q3JlYXRvciAvPlxuICAgIDwvPlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYWI7XG4iXX0= */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/pages/lab.jsx */")));
};

var Lab = function Lab() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_GREEN_CREATOR"]
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "open"), __jsx(Creator, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Lab);

/***/ })

})
//# sourceMappingURL=lab.js.5d62520f38617ff4a805.hot-update.js.map
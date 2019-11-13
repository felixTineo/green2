webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/main/embajador.jsx":
/*!***************************************!*\
  !*** ./components/main/embajador.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layout/main */ "./layout/main.js");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./title */ "./components/main/title.jsx");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/main/embajador.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var images = [{
  img: '/static/bakery.jpg',
  msg: 'influye'
}, {
  img: '/static/market.jpg',
  msg: 'patrocina'
}, {
  img: '/static/drug.jpg',
  msg: 'beneficiate'
}];

var Cont = function Cont(_ref) {
  var img = _ref.img,
      msg = _ref.msg;
  return __jsx("div", {
    className: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("img", {
    src: img,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, msg));
};

var Carousel = function Carousel() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      index = _useState[0],
      setIndex = _useState[1];

  return __jsx("div", {
    className: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(Cont, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, images[index], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })));
};

var Main = function Main() {
  return __jsx("div", {
    className: "jsx-3106214966" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    word: "embajadores",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(Carousel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3106214966",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9lbWJhamFkb3IuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDa0IiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL2VtYmFqYWRvci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbG9yLCBmb250LCBncmVlbkdyYWRpZW50IH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuaW1wb3J0IFRpdGxlIGZyb20gJy4vdGl0bGUnO1xuaW1wb3J0IHsgVHdlZW5NYXggfSBmcm9tICdnc2FwJztcblxuY29uc3QgaW1hZ2VzID0gW1xuICB7XG4gICAgaW1nOiAnL3N0YXRpYy9iYWtlcnkuanBnJyxcbiAgICBtc2c6ICdpbmZsdXllJ1xuICB9LFxuICB7XG4gICAgaW1nOiAnL3N0YXRpYy9tYXJrZXQuanBnJyxcbiAgICBtc2c6ICdwYXRyb2NpbmEnLFxuICB9LFxuICB7XG4gICAgaW1nOiAnL3N0YXRpYy9kcnVnLmpwZycsXG4gICAgbXNnOiAnYmVuZWZpY2lhdGUnXG4gIH1cbl07XG5cbmNvbnN0IENvbnQgPSAoeyBpbWcsIG1zZyB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiXCIvPlxuICAgICAgPGgxPnttc2d9PC9oMT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBDYXJvdXNlbCA9ICgpID0+IHtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPENvbnQgey4uLmltYWdlc1tpbmRleF19Lz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxUaXRsZSB3b3JkPVwiZW1iYWphZG9yZXNcIiAvPlxuICAgICAgPENhcm91c2VsIC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/embajador.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
false

})
//# sourceMappingURL=index.js.e6a34d66c88afa5289a1.hot-update.js.map
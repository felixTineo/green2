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
    className: "jsx-855141223" + " " + "main",
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
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "855141223",
    __self: this
  }, ".main.jsx-855141223{position:absolute;width:100%;height:100%;top:0;left:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9lbWJhamFkb3IuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Da0IsQUFHNkIsa0JBQ1AsV0FDQyxZQUNOLE1BQ0MsT0FDVCIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL21haW4vZW1iYWphZG9yLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnQsIGdyZWVuR3JhZGllbnQgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi90aXRsZSc7XG5pbXBvcnQgeyBUd2Vlbk1heCB9IGZyb20gJ2dzYXAnO1xuXG5jb25zdCBpbWFnZXMgPSBbXG4gIHtcbiAgICBpbWc6ICcvc3RhdGljL2Jha2VyeS5qcGcnLFxuICAgIG1zZzogJ2luZmx1eWUnXG4gIH0sXG4gIHtcbiAgICBpbWc6ICcvc3RhdGljL21hcmtldC5qcGcnLFxuICAgIG1zZzogJ3BhdHJvY2luYScsXG4gIH0sXG4gIHtcbiAgICBpbWc6ICcvc3RhdGljL2RydWcuanBnJyxcbiAgICBtc2c6ICdiZW5lZmljaWF0ZSdcbiAgfVxuXTtcblxuY29uc3QgQ29udCA9ICh7IGltZywgbXNnIH0pID0+IHtcblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9XCJcIi8+XG4gICAgICA8aDE+e21zZ308L2gxPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IENhcm91c2VsID0gKCkgPT4ge1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8Q29udCB7Li4uaW1hZ2VzW2luZGV4XX0vPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFpbntcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxUaXRsZSB3b3JkPVwiZW1iYWphZG9yZXNcIiAvPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgPENhcm91c2VsIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5e1xuICAgICAgICAgIGZsZXgtZnJvdzogMTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/embajador.jsx */"));
};

var Main = function Main() {
  return __jsx("div", {
    className: "jsx-4122724226" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("header", {
    className: "jsx-4122724226",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    word: "embajadores",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-4122724226" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(Carousel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4122724226",
    __self: this
  }, ".main.jsx-4122724226{height:100vh;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.body.jsx-4122724226{-webkit-flex-frow:1;-ms-flex-frow:1;flex-frow:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9lbWJhamFkb3IuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEa0IsQUFHd0IsQUFNRCxhQUxNLGtCQUNMLGlCQUtmLHlEQUp3Qiw4RUFDeEIiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL2VtYmFqYWRvci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbG9yLCBmb250LCBncmVlbkdyYWRpZW50IH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuaW1wb3J0IFRpdGxlIGZyb20gJy4vdGl0bGUnO1xuaW1wb3J0IHsgVHdlZW5NYXggfSBmcm9tICdnc2FwJztcblxuY29uc3QgaW1hZ2VzID0gW1xuICB7XG4gICAgaW1nOiAnL3N0YXRpYy9iYWtlcnkuanBnJyxcbiAgICBtc2c6ICdpbmZsdXllJ1xuICB9LFxuICB7XG4gICAgaW1nOiAnL3N0YXRpYy9tYXJrZXQuanBnJyxcbiAgICBtc2c6ICdwYXRyb2NpbmEnLFxuICB9LFxuICB7XG4gICAgaW1nOiAnL3N0YXRpYy9kcnVnLmpwZycsXG4gICAgbXNnOiAnYmVuZWZpY2lhdGUnXG4gIH1cbl07XG5cbmNvbnN0IENvbnQgPSAoeyBpbWcsIG1zZyB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiXCIvPlxuICAgICAgPGgxPnttc2d9PC9oMT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBDYXJvdXNlbCA9ICgpID0+IHtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPENvbnQgey4uLmltYWdlc1tpbmRleF19Lz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWFpbiA9ICgpID0+IHtcblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8VGl0bGUgd29yZD1cImVtYmFqYWRvcmVzXCIgLz5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgIDxDYXJvdXNlbCAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICAuYm9keXtcbiAgICAgICAgICBmbGV4LWZyb3c6IDE7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXX0= */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/embajador.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.dce53a86da0a17b095a2.hot-update.js.map
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layout/main */ "./layout/main.js");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./title */ "./components/main/title.jsx");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");


var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/main/embajador.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




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
      msg = _ref.msg,
      id = _ref.id;
  return __jsx("div", {
    id: id,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1960403918", [img]]]) + " " + "main animated",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1960403918", [img]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, msg), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1960403918",
    dynamic: [img],
    __self: this
  }, ".main.__jsx-style-dynamic-selector{height:100%;background:url(".concat(img, ")top center no-repeat;background-size:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9lbWJhamFkb3IuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCa0IsQUFHdUIsWUFDcUQsaUVBQzNDLHNCQUN4QiIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL21haW4vZW1iYWphZG9yLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb2xvciwgZm9udCwgZ3JlZW5HcmFkaWVudCB9IGZyb20gJy4uLy4uL2xheW91dC9tYWluJztcbmltcG9ydCBUaXRsZSBmcm9tICcuL3RpdGxlJztcbmltcG9ydCB7IFR3ZWVuTWF4IH0gZnJvbSAnZ3NhcCc7XG5cbmNvbnN0IGltYWdlcyA9IFtcbiAge1xuICAgIGltZzogJy9zdGF0aWMvYmFrZXJ5LmpwZycsXG4gICAgbXNnOiAnaW5mbHV5ZSdcbiAgfSxcbiAge1xuICAgIGltZzogJy9zdGF0aWMvbWFya2V0LmpwZycsXG4gICAgbXNnOiAncGF0cm9jaW5hJyxcbiAgfSxcbiAge1xuICAgIGltZzogJy9zdGF0aWMvZHJ1Zy5qcGcnLFxuICAgIG1zZzogJ2JlbmVmaWNpYXRlJ1xuICB9XG5dO1xuXG5jb25zdCBDb250ID0gKHsgaW1nLCBtc2csIGlkIH0pID0+IHtcblxuICByZXR1cm4oXG4gICAgPGRpdiBpZD17aWR9IGNsYXNzTmFtZT1cIm1haW4gYW5pbWF0ZWRcIj5cbiAgICAgIDxoMT57bXNnfTwvaDE+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtpbWd9KXRvcCBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IENhcm91c2VsID0gKCkgPT4ge1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBjdXJyZW50ID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VSZWR1Y2VyKChzdGF0ZSwgbmV4dCkgPT4gKHsgLi4uc3RhdGUsIC4uLm5leHQgfSkse1xuICAgIGJha2VyeTogdHJ1ZSxcbiAgICBtYXJrZXQ6IGZhbHNlLFxuICAgIGRydWc6IGZhbHNlLFxuICB9KVxuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgaWYoaSA9PT0gMCl7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWtlcnknKS5jbGFzc0xpc3QgKz0gJyBmYWRlT3V0TGVmdCc7XG4gICAgICAgIHNldFZpc2libGUoeyBtYXJrZXQ6IHRydWUgfSk7XG4gICAgICAgIGkgPSBpICsxO1xuICAgICAgfVxuICAgIH0sIDUwMDApO1xuICAgIHJldHVybiAoKT0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LFtdKVxuICBjb25zdCB7IGJha2VyeSwgbWFya2V0LCBkcnVnIH0gPSB2aXNpYmxlO1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICB7IGJha2VyeSAmJiA8Q29udCBpZD1cImJha2VyeVwiIHsuLi5pbWFnZXNbMF19IC8+IH1cbiAgICAgIHsgbWFya2V0ICYmIDxDb250IGlkPVwibWFya2V0XCIgey4uLmltYWdlc1sxXX0gLz4gfVxuICAgICAgeyBkcnVnICYmIDxDb250IGlkPVwiZHJ1Z1wiIHsuLi5pbWFnZXNbMl19IC8+IH1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPFRpdGxlIHdvcmQ9XCJlbWJhamFkb3Jlc1wiIC8+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICA8Q2Fyb3VzZWwgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFpbntcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICAuYm9keXtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/embajador.jsx */")));
};

var Carousel = function Carousel() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      index = _useState[0],
      setIndex = _useState[1];

  var current = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      width = _useState2[0],
      setWidth = _useState2[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(function (state, next) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, next);
  }, {
    bakery: true,
    market: false,
    drug: false
  }),
      visible = _useReducer[0],
      setVisible = _useReducer[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var i = 0;
    var interval = setInterval(function () {
      if (i === 0) {
        document.getElementById('bakery').classList += ' fadeOutLeft';
        setVisible({
          market: true
        });
        i = i + 1;
      }
    }, 5000);
    return function () {
      return clearInterval(interval);
    };
  }, []);
  var bakery = visible.bakery,
      market = visible.market,
      drug = visible.drug;
  return __jsx("div", {
    className: "jsx-4184971843" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, bakery && __jsx(Cont, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: "bakery"
  }, images[0], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })), market && __jsx(Cont, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: "market"
  }, images[1], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), drug && __jsx(Cont, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: "drug"
  }, images[2], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "4184971843",
    __self: this
  }, ".main.jsx-4184971843{position:absolute;width:100%;height:100%;top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9lbWJhamFkb3IuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEa0IsQUFHNkIsa0JBQ1AsV0FDQyxZQUNOLE1BQ1IiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL2VtYmFqYWRvci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnQsIGdyZWVuR3JhZGllbnQgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi90aXRsZSc7XG5pbXBvcnQgeyBUd2Vlbk1heCB9IGZyb20gJ2dzYXAnO1xuXG5jb25zdCBpbWFnZXMgPSBbXG4gIHtcbiAgICBpbWc6ICcvc3RhdGljL2Jha2VyeS5qcGcnLFxuICAgIG1zZzogJ2luZmx1eWUnXG4gIH0sXG4gIHtcbiAgICBpbWc6ICcvc3RhdGljL21hcmtldC5qcGcnLFxuICAgIG1zZzogJ3BhdHJvY2luYScsXG4gIH0sXG4gIHtcbiAgICBpbWc6ICcvc3RhdGljL2RydWcuanBnJyxcbiAgICBtc2c6ICdiZW5lZmljaWF0ZSdcbiAgfVxuXTtcblxuY29uc3QgQ29udCA9ICh7IGltZywgbXNnLCBpZCB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgaWQ9e2lkfSBjbGFzc05hbWU9XCJtYWluIGFuaW1hdGVkXCI+XG4gICAgICA8aDE+e21zZ308L2gxPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFpbntcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7aW1nfSl0b3AgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBDYXJvdXNlbCA9ICgpID0+IHtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgY3VycmVudCA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlUmVkdWNlcigoc3RhdGUsIG5leHQpID0+ICh7IC4uLnN0YXRlLCAuLi5uZXh0IH0pLHtcbiAgICBiYWtlcnk6IHRydWUsXG4gICAgbWFya2V0OiBmYWxzZSxcbiAgICBkcnVnOiBmYWxzZSxcbiAgfSlcbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmKGkgPT09IDApe1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFrZXJ5JykuY2xhc3NMaXN0ICs9ICcgZmFkZU91dExlZnQnO1xuICAgICAgICBzZXRWaXNpYmxlKHsgbWFya2V0OiB0cnVlIH0pO1xuICAgICAgICBpID0gaSArMTtcbiAgICAgIH1cbiAgICB9LCA1MDAwKTtcbiAgICByZXR1cm4gKCk9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSxbXSlcbiAgY29uc3QgeyBiYWtlcnksIG1hcmtldCwgZHJ1ZyB9ID0gdmlzaWJsZTtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgeyBiYWtlcnkgJiYgPENvbnQgaWQ9XCJiYWtlcnlcIiB7Li4uaW1hZ2VzWzBdfSAvPiB9XG4gICAgICB7IG1hcmtldCAmJiA8Q29udCBpZD1cIm1hcmtldFwiIHsuLi5pbWFnZXNbMV19IC8+IH1cbiAgICAgIHsgZHJ1ZyAmJiA8Q29udCBpZD1cImRydWdcIiB7Li4uaW1hZ2VzWzJdfSAvPiB9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxUaXRsZSB3b3JkPVwiZW1iYWphZG9yZXNcIiAvPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgPENhcm91c2VsIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHl7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/embajador.jsx */"));
};

var Main = function Main() {
  return __jsx("div", {
    className: "jsx-139810686" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("header", {
    className: "jsx-139810686",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_title__WEBPACK_IMPORTED_MODULE_5__["default"], {
    word: "embajadores",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-139810686" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(Carousel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "139810686",
    __self: this
  }, ".main.jsx-139810686{height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.body.jsx-139810686{position:relative;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9lbWJhamFkb3IuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNGa0IsQUFHd0IsQUFLSyxhQUpMLEtBS0QscUVBSlUsRUFLeEIsNEVBSkEiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL2VtYmFqYWRvci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnQsIGdyZWVuR3JhZGllbnQgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi90aXRsZSc7XG5pbXBvcnQgeyBUd2Vlbk1heCB9IGZyb20gJ2dzYXAnO1xuXG5jb25zdCBpbWFnZXMgPSBbXG4gIHtcbiAgICBpbWc6ICcvc3RhdGljL2Jha2VyeS5qcGcnLFxuICAgIG1zZzogJ2luZmx1eWUnXG4gIH0sXG4gIHtcbiAgICBpbWc6ICcvc3RhdGljL21hcmtldC5qcGcnLFxuICAgIG1zZzogJ3BhdHJvY2luYScsXG4gIH0sXG4gIHtcbiAgICBpbWc6ICcvc3RhdGljL2RydWcuanBnJyxcbiAgICBtc2c6ICdiZW5lZmljaWF0ZSdcbiAgfVxuXTtcblxuY29uc3QgQ29udCA9ICh7IGltZywgbXNnLCBpZCB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgaWQ9e2lkfSBjbGFzc05hbWU9XCJtYWluIGFuaW1hdGVkXCI+XG4gICAgICA8aDE+e21zZ308L2gxPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFpbntcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7aW1nfSl0b3AgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBDYXJvdXNlbCA9ICgpID0+IHtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgY3VycmVudCA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlUmVkdWNlcigoc3RhdGUsIG5leHQpID0+ICh7IC4uLnN0YXRlLCAuLi5uZXh0IH0pLHtcbiAgICBiYWtlcnk6IHRydWUsXG4gICAgbWFya2V0OiBmYWxzZSxcbiAgICBkcnVnOiBmYWxzZSxcbiAgfSlcbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmKGkgPT09IDApe1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFrZXJ5JykuY2xhc3NMaXN0ICs9ICcgZmFkZU91dExlZnQnO1xuICAgICAgICBzZXRWaXNpYmxlKHsgbWFya2V0OiB0cnVlIH0pO1xuICAgICAgICBpID0gaSArMTtcbiAgICAgIH1cbiAgICB9LCA1MDAwKTtcbiAgICByZXR1cm4gKCk9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSxbXSlcbiAgY29uc3QgeyBiYWtlcnksIG1hcmtldCwgZHJ1ZyB9ID0gdmlzaWJsZTtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgeyBiYWtlcnkgJiYgPENvbnQgaWQ9XCJiYWtlcnlcIiB7Li4uaW1hZ2VzWzBdfSAvPiB9XG4gICAgICB7IG1hcmtldCAmJiA8Q29udCBpZD1cIm1hcmtldFwiIHsuLi5pbWFnZXNbMV19IC8+IH1cbiAgICAgIHsgZHJ1ZyAmJiA8Q29udCBpZD1cImRydWdcIiB7Li4uaW1hZ2VzWzJdfSAvPiB9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxUaXRsZSB3b3JkPVwiZW1iYWphZG9yZXNcIiAvPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgPENhcm91c2VsIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHl7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/embajador.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.b2af69aa33d14ef43afa.hot-update.js.map
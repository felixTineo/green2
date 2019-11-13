webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_main_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/main/layout */ "./components/main/layout.jsx");
/* harmony import */ var _components_main_hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/main/hero */ "./components/main/hero.jsx");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "/home/felix/Documentos/projects/greenlink/pages/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;


 //import GreenPost from '../components/main/greenpost';
//import MainSection from '../components/main/main';
//import Embajadores from '../components/main/embajador';


var images = [{
  tag: 'bakery',
  img: '/static/bakery.jpg',
  msg: 'influye'
}, {
  tag: 'market',
  img: '/static/market.jpg',
  msg: 'auspicia'
}, {
  tag: 'drug',
  img: '/static/drug.jpg',
  msg: 'beneficiate'
}];

var Cont = function Cont(_ref) {
  var msg = _ref.msg,
      img = _ref.img,
      index = _ref.index,
      ref = _ref.ref,
      className = _ref.className;
  return __jsx("div", {
    style: {
      animationTimingFunction: 'linear'
    },
    ref: ref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2220150883", [img]]]) + " " + "main animated ".concat(className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2220150883", [img]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, msg), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2220150883",
    dynamic: [img],
    __self: this
  }, ".main.__jsx-style-dynamic-selector{background:url(".concat(img, ")top center no-repeat;background-size:cover;position:absolute;top:0;left:0;width:100%;height:100%;}h1.__jsx-style-dynamic-selector{color:#fff;font-size:8rem;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL3BhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmtCLEFBRzRFLEFBWXRELFdBQ0ksZUFDVSx5QkFDM0IsY0Fkd0Isc0JBSUosa0JBQ1osTUFDQyxPQUNJLFdBQ0MsWUFDZCIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9wYWdlcy9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL21haW4vbGF5b3V0JztcbmltcG9ydCBIZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi9oZXJvJztcbi8vaW1wb3J0IEdyZWVuUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL21haW4vZ3JlZW5wb3N0Jztcbi8vaW1wb3J0IE1haW5TZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi9tYWluJztcbi8vaW1wb3J0IEVtYmFqYWRvcmVzIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi9lbWJhamFkb3InO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92MSc7XG5cbmNvbnN0IGltYWdlcyA9IFtcbiAge1xuICAgIHRhZzogJ2Jha2VyeScsXG4gICAgaW1nOiAnL3N0YXRpYy9iYWtlcnkuanBnJyxcbiAgICBtc2c6ICdpbmZsdXllJ1xuICB9LFxuICB7XG4gICAgdGFnOiAnbWFya2V0JyxcbiAgICBpbWc6ICcvc3RhdGljL21hcmtldC5qcGcnLFxuICAgIG1zZzogJ2F1c3BpY2lhJyxcbiAgfSxcbiAge1xuICAgIHRhZzogJ2RydWcnLFxuICAgIGltZzogJy9zdGF0aWMvZHJ1Zy5qcGcnLFxuICAgIG1zZzogJ2JlbmVmaWNpYXRlJ1xuICB9XG5dO1xuXG5jb25zdCBDb250ID0gKHsgbXNnLCBpbWcsIGluZGV4LCByZWYsIGNsYXNzTmFtZSB9KSA9PiB7XG4gIHJldHVybihcbiAgICA8ZGl2IHN0eWxlPXt7IGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJyB9fSByZWY9e3JlZn0gY2xhc3NOYW1lPXtgbWFpbiBhbmltYXRlZCAke2NsYXNzTmFtZX1gfT5cbiAgICAgICAgPGgxPnttc2d9PC9oMT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7aW1nfSl0b3AgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIC8qZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyovXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBoMXtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBmb250LXNpemU6IDhyZW07XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5jb25zdCBDYXJvdXNlbCA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVJlZHVjZXIoKHN0YXRlLCBuZXh0KSA9PiAoey4uLnN0YXRlLCAuLi5uZXh0fSksIHtcbiAgICBiYWtlcnk6IHRydWUsXG4gICAgbWFya2V0OiBmYWxzZSxcbiAgICBkcnVnOiBmYWxzZSxcbiAgfSk7XG4gIGNvbnN0IGJha2VyeVJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgbWFya2V0UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBkcnVnUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKT0+IHtcblxuICAgIGNvbnN0IG5leHQgPSAoY3VycmVudCArIDEpICUgaW1hZ2VzLmxlbmd0aDtcbiAgICBjb25zdCBpZCA9IHNldFRpbWVvdXQoKCk9PiBzZXRDdXJyZW50KG5leHQpLCA1MDAwKTtcbiAgICBzZXRWaXNpYmxlKHsgW2ltYWdlc1tjdXJyZW50XS50YWddIDogdHJ1ZSB9KTtcbiAgICBpZihjdXJyZW50ID4gMCkge1xuICAgICAgc2V0VGltZW91dCgoKT0+IHNldFZpc2libGUoeyBbaW1hZ2VzW2N1cnJlbnQgLSAxXS50YWddIDogZmFsc2UgfSksIDEwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KCgpPT4gc2V0VmlzaWJsZSh7IFtpbWFnZXNbMl0udGFnXSA6IGZhbHNlIH0pLCAxMDAwKTtcbiAgICB9XG4gICAgcmV0dXJuICgpPT4gY2xlYXJUaW1lb3V0KGlkKTtcbiAgfSxbY3VycmVudF0pXG4gIGNvbnN0IHsgYmFrZXJ5LCBtYXJrZXQsIGRydWcgfSA9IHZpc2libGU7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIHtjb25zb2xlLmxvZyhpbWFnZXNbY3VycmVudF0udGFnLCB2aXNpYmxlW2ltYWdlc1tjdXJyZW50XS50YWddKX1cbiAgICAgIHsgYmFrZXJ5ICYmIDxDb250IGNsYXNzTmFtZT17Y3VycmVudCA9PT0gMSA/ICdzbGlkZU91dExlZnQnIDogJ3NsaWRlSW5SaWdodCd9IHsuLi5pbWFnZXNbMF19IC8+IH1cbiAgICAgIHsgbWFya2V0ICYmIDxDb250IGNsYXNzTmFtZT17Y3VycmVudCA9PT0gMiA/ICdzbGlkZU91dExlZnQnIDogJ3NsaWRlSW5SaWdodCd9IHsuLi5pbWFnZXNbMV19IC8+IH1cbiAgICAgIHsgZHJ1ZyAmJiA8Q29udCBjbGFzc05hbWU9e2N1cnJlbnQgPT09IDAgPyAnc2xpZGVPdXRMZWZ0JyA6ICdzbGlkZUluUmlnaHQnfSB7Li4uaW1hZ2VzWzJdfSAvPiB9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWFpbiA9ICgpID0+IHtcblxuICByZXR1cm4oXG4gICAgPExheW91dD5cbiAgICAgIDxIZXJvIC8+XG4gICAgICA8Q2Fyb3VzZWwgLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/pages/index.jsx */")));
};

var Carousel = function Carousel() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      current = _useState[0],
      setCurrent = _useState[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useReducer"])(function (state, next) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, next);
  }, {
    bakery: true,
    market: false,
    drug: false
  }),
      visible = _useReducer[0],
      setVisible = _useReducer[1];

  var bakeryRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var marketRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var drugRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var next = (current + 1) % images.length;
    var id = setTimeout(function () {
      return setCurrent(next);
    }, 5000);
    setVisible(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, images[current].tag, true));

    if (current > 0) {
      setTimeout(function () {
        return setVisible(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, images[current - 1].tag, false));
      }, 1000);
    } else {
      setTimeout(function () {
        return setVisible(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, images[2].tag, false));
      }, 1000);
    }

    return function () {
      return clearTimeout(id);
    };
  }, [current]);
  var bakery = visible.bakery,
      market = visible.market,
      drug = visible.drug;
  return __jsx("div", {
    className: "jsx-4185127896" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, console.log(images[current].tag, visible[images[current].tag]), bakery && __jsx(Cont, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: current === 1 ? 'slideOutLeft' : 'slideInRight'
  }, images[0], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })), market && __jsx(Cont, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: current === 2 ? 'slideOutLeft' : 'slideInRight'
  }, images[1], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })), drug && __jsx(Cont, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: current === 0 ? 'slideOutLeft' : 'slideInRight'
  }, images[2], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "4185127896",
    __self: this
  }, ".main.jsx-4185127896{height:100vh;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL3BhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRmtCLEFBR3dCLGFBQ0csZ0JBQ0gsMEVBQ0ssa0JBQ3BCIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL3BhZ2VzL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi9sYXlvdXQnO1xuaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9tYWluL2hlcm8nO1xuLy9pbXBvcnQgR3JlZW5Qb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QnO1xuLy9pbXBvcnQgTWFpblNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9tYWluL21haW4nO1xuLy9pbXBvcnQgRW1iYWphZG9yZXMgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluL2VtYmFqYWRvcic7XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3YxJztcblxuY29uc3QgaW1hZ2VzID0gW1xuICB7XG4gICAgdGFnOiAnYmFrZXJ5JyxcbiAgICBpbWc6ICcvc3RhdGljL2Jha2VyeS5qcGcnLFxuICAgIG1zZzogJ2luZmx1eWUnXG4gIH0sXG4gIHtcbiAgICB0YWc6ICdtYXJrZXQnLFxuICAgIGltZzogJy9zdGF0aWMvbWFya2V0LmpwZycsXG4gICAgbXNnOiAnYXVzcGljaWEnLFxuICB9LFxuICB7XG4gICAgdGFnOiAnZHJ1ZycsXG4gICAgaW1nOiAnL3N0YXRpYy9kcnVnLmpwZycsXG4gICAgbXNnOiAnYmVuZWZpY2lhdGUnXG4gIH1cbl07XG5cbmNvbnN0IENvbnQgPSAoeyBtc2csIGltZywgaW5kZXgsIHJlZiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgcmV0dXJuKFxuICAgIDxkaXYgc3R5bGU9e3sgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdsaW5lYXInIH19IHJlZj17cmVmfSBjbGFzc05hbWU9e2BtYWluIGFuaW1hdGVkICR7Y2xhc3NOYW1lfWB9PlxuICAgICAgICA8aDE+e21zZ308L2gxPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFpbntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtpbWd9KXRvcCBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgLypkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7Ki9cbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGgxe1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogOHJlbTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmNvbnN0IENhcm91c2VsID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlUmVkdWNlcigoc3RhdGUsIG5leHQpID0+ICh7Li4uc3RhdGUsIC4uLm5leHR9KSwge1xuICAgIGJha2VyeTogdHJ1ZSxcbiAgICBtYXJrZXQ6IGZhbHNlLFxuICAgIGRydWc6IGZhbHNlLFxuICB9KTtcbiAgY29uc3QgYmFrZXJ5UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBtYXJrZXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGRydWdSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpPT4ge1xuXG4gICAgY29uc3QgbmV4dCA9IChjdXJyZW50ICsgMSkgJSBpbWFnZXMubGVuZ3RoO1xuICAgIGNvbnN0IGlkID0gc2V0VGltZW91dCgoKT0+IHNldEN1cnJlbnQobmV4dCksIDUwMDApO1xuICAgIHNldFZpc2libGUoeyBbaW1hZ2VzW2N1cnJlbnRdLnRhZ10gOiB0cnVlIH0pO1xuICAgIGlmKGN1cnJlbnQgPiAwKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpPT4gc2V0VmlzaWJsZSh7IFtpbWFnZXNbY3VycmVudCAtIDFdLnRhZ10gOiBmYWxzZSB9KSwgMTAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCk9PiBzZXRWaXNpYmxlKHsgW2ltYWdlc1syXS50YWddIDogZmFsc2UgfSksIDEwMDApO1xuICAgIH1cbiAgICByZXR1cm4gKCk9PiBjbGVhclRpbWVvdXQoaWQpO1xuICB9LFtjdXJyZW50XSlcbiAgY29uc3QgeyBiYWtlcnksIG1hcmtldCwgZHJ1ZyB9ID0gdmlzaWJsZTtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAge2NvbnNvbGUubG9nKGltYWdlc1tjdXJyZW50XS50YWcsIHZpc2libGVbaW1hZ2VzW2N1cnJlbnRdLnRhZ10pfVxuICAgICAgeyBiYWtlcnkgJiYgPENvbnQgY2xhc3NOYW1lPXtjdXJyZW50ID09PSAxID8gJ3NsaWRlT3V0TGVmdCcgOiAnc2xpZGVJblJpZ2h0J30gey4uLmltYWdlc1swXX0gLz4gfVxuICAgICAgeyBtYXJrZXQgJiYgPENvbnQgY2xhc3NOYW1lPXtjdXJyZW50ID09PSAyID8gJ3NsaWRlT3V0TGVmdCcgOiAnc2xpZGVJblJpZ2h0J30gey4uLmltYWdlc1sxXX0gLz4gfVxuICAgICAgeyBkcnVnICYmIDxDb250IGNsYXNzTmFtZT17Y3VycmVudCA9PT0gMCA/ICdzbGlkZU91dExlZnQnIDogJ3NsaWRlSW5SaWdodCd9IHsuLi5pbWFnZXNbMl19IC8+IH1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuXG4gIHJldHVybihcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlcm8gLz5cbiAgICAgIDxDYXJvdXNlbCAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXX0= */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/pages/index.jsx */"));
};

var Main = function Main() {
  return __jsx(_components_main_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(_components_main_hero__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), __jsx(Carousel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.9a4ea8f82f4d711e3de8.hot-update.js.map
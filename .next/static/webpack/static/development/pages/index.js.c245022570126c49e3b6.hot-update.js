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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_main_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/main/layout */ "./components/main/layout.jsx");
/* harmony import */ var _components_main_hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/main/hero */ "./components/main/hero.jsx");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/home/felix/Documentos/projects/greenlink/pages/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


 //import GreenPost from '../components/main/greenpost';
//import MainSection from '../components/main/main';
//import Embajadores from '../components/main/embajador';


var images = [{
  img: '/static/bakery.jpg',
  msg: 'influye'
}, {
  img: '/static/market.jpg',
  msg: 'auspicia'
}, {
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
    ref: ref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2220150883", [img]]]) + " " + "main animated ".concat(className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2220150883", [img]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, msg), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2220150883",
    dynamic: [img],
    __self: this
  }, ".main.__jsx-style-dynamic-selector{background:url(".concat(img, ")top center no-repeat;background-size:cover;position:absolute;top:0;left:0;width:100%;height:100%;}h1.__jsx-style-dynamic-selector{color:#fff;font-size:8rem;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL3BhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQmtCLEFBRzRFLEFBWXRELFdBQ0ksZUFDVSx5QkFDM0IsY0Fkd0Isc0JBSUosa0JBQ1osTUFDQyxPQUNJLFdBQ0MsWUFDZCIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9wYWdlcy9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL21haW4vbGF5b3V0JztcbmltcG9ydCBIZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi9oZXJvJztcbi8vaW1wb3J0IEdyZWVuUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL21haW4vZ3JlZW5wb3N0Jztcbi8vaW1wb3J0IE1haW5TZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi9tYWluJztcbi8vaW1wb3J0IEVtYmFqYWRvcmVzIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi9lbWJhamFkb3InO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92MSc7XG5cbmNvbnN0IGltYWdlcyA9IFtcbiAge1xuICAgIGltZzogJy9zdGF0aWMvYmFrZXJ5LmpwZycsXG4gICAgbXNnOiAnaW5mbHV5ZSdcbiAgfSxcbiAge1xuICAgIGltZzogJy9zdGF0aWMvbWFya2V0LmpwZycsXG4gICAgbXNnOiAnYXVzcGljaWEnLFxuICB9LFxuICB7XG4gICAgaW1nOiAnL3N0YXRpYy9kcnVnLmpwZycsXG4gICAgbXNnOiAnYmVuZWZpY2lhdGUnXG4gIH1cbl07XG5cbmNvbnN0IENvbnQgPSAoeyBtc2csIGltZywgaW5kZXgsIHJlZiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgcmV0dXJuKFxuICAgIDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT17YG1haW4gYW5pbWF0ZWQgJHtjbGFzc05hbWV9YH0+XG4gICAgICAgIDxoMT57bXNnfTwvaDE+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke2ltZ30pdG9wIGNlbnRlciBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAvKmRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsqL1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgaDF7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC1zaXplOiA4cmVtO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuY29uc3QgQ2Fyb3VzZWwgPSAoKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VSZWR1Y2VyKChzdGF0ZSwgbmV4dCkgPT4gKHsuLi5zdGF0ZSwgLi4ubmV4dH0pLCB7XG4gICAgYmFrZXJ5OiB0cnVlLFxuICAgIG1hcmtldDogZmFsc2UsXG4gICAgZHJ1ZzogZmFsc2UsXG4gIH0pO1xuICBjb25zdCBiYWtlcnlSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IG1hcmtldFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgZHJ1Z1JlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgY29uc3QgbmV4dCA9IChjdXJyZW50ICsgMSkgJSBpbWFnZXMubGVuZ3RoO1xuICAgIGNvbnN0IGlkID0gc2V0VGltZW91dCgoKT0+IHNldEN1cnJlbnQobmV4dCksIDUwMDApO1xuICAgIHJldHVybiAoKT0+IGNsZWFyVGltZW91dChpZCk7XG4gIH0sW2N1cnJlbnRdKVxuICBjb25zdCB7IGJha2VyeSwgbWFya2V0LCBkcnVnIH0gPSB2aXNpYmxlO1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICB7IGJha2VyeSAmJiA8Q29udCBjbGFzc05hbWU9e2N1cnJlbnQgPT09IDEgPyAnc2xpZGVPdXRMZWZ0JyA6ICdzbGlkZUluUmlnaHQnfSByZWY9e2Jha2VyeVJlZn0gey4uLmltYWdlc1tjdXJyZW50XX0gLz4gfVxuICAgICAgeyBtYXJrZXQgJiYgPENvbnQgcmVmPXttYXJrZXRSZWZ9IHsuLi5pbWFnZXNbY3VycmVudF19IC8+IH1cbiAgICAgIHsgZHJ1ZyAmJiA8Q29udCByZWY9e2RydWdSZWZ9IHsuLi5pbWFnZXNbY3VycmVudF19IC8+IH1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuXG4gIHJldHVybihcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlcm8gLz5cbiAgICAgIDxDYXJvdXNlbCAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXX0= */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/pages/index.jsx */")));
};

var Carousel = function Carousel() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      current = _useState[0],
      setCurrent = _useState[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(function (state, next) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, next);
  }, {
    bakery: true,
    market: false,
    drug: false
  }),
      visible = _useReducer[0],
      setVisible = _useReducer[1];

  var bakeryRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var marketRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var drugRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var next = (current + 1) % images.length;
    var id = setTimeout(function () {
      return setCurrent(next);
    }, 5000);
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
      lineNumber: 71
    },
    __self: this
  }, bakery && __jsx(Cont, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: current === 1 ? 'slideOutLeft' : 'slideInRight',
    ref: bakeryRef
  }, images[current], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })), market && __jsx(Cont, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: marketRef
  }, images[current], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })), drug && __jsx(Cont, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: drugRef
  }, images[current], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "4185127896",
    __self: this
  }, ".main.jsx-4185127896{height:100vh;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL3BhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRWtCLEFBR3dCLGFBQ0csZ0JBQ0gsMEVBQ0ssa0JBQ3BCIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL3BhZ2VzL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi9sYXlvdXQnO1xuaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9tYWluL2hlcm8nO1xuLy9pbXBvcnQgR3JlZW5Qb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QnO1xuLy9pbXBvcnQgTWFpblNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9tYWluL21haW4nO1xuLy9pbXBvcnQgRW1iYWphZG9yZXMgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluL2VtYmFqYWRvcic7XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3YxJztcblxuY29uc3QgaW1hZ2VzID0gW1xuICB7XG4gICAgaW1nOiAnL3N0YXRpYy9iYWtlcnkuanBnJyxcbiAgICBtc2c6ICdpbmZsdXllJ1xuICB9LFxuICB7XG4gICAgaW1nOiAnL3N0YXRpYy9tYXJrZXQuanBnJyxcbiAgICBtc2c6ICdhdXNwaWNpYScsXG4gIH0sXG4gIHtcbiAgICBpbWc6ICcvc3RhdGljL2RydWcuanBnJyxcbiAgICBtc2c6ICdiZW5lZmljaWF0ZSdcbiAgfVxuXTtcblxuY29uc3QgQ29udCA9ICh7IG1zZywgaW1nLCBpbmRleCwgcmVmLCBjbGFzc05hbWUgfSkgPT4ge1xuICByZXR1cm4oXG4gICAgPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPXtgbWFpbiBhbmltYXRlZCAke2NsYXNzTmFtZX1gfT5cbiAgICAgICAgPGgxPnttc2d9PC9oMT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7aW1nfSl0b3AgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIC8qZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyovXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBoMXtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBmb250LXNpemU6IDhyZW07XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5jb25zdCBDYXJvdXNlbCA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVJlZHVjZXIoKHN0YXRlLCBuZXh0KSA9PiAoey4uLnN0YXRlLCAuLi5uZXh0fSksIHtcbiAgICBiYWtlcnk6IHRydWUsXG4gICAgbWFya2V0OiBmYWxzZSxcbiAgICBkcnVnOiBmYWxzZSxcbiAgfSk7XG4gIGNvbnN0IGJha2VyeVJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgbWFya2V0UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBkcnVnUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBjb25zdCBuZXh0ID0gKGN1cnJlbnQgKyAxKSAlIGltYWdlcy5sZW5ndGg7XG4gICAgY29uc3QgaWQgPSBzZXRUaW1lb3V0KCgpPT4gc2V0Q3VycmVudChuZXh0KSwgNTAwMCk7XG4gICAgcmV0dXJuICgpPT4gY2xlYXJUaW1lb3V0KGlkKTtcbiAgfSxbY3VycmVudF0pXG4gIGNvbnN0IHsgYmFrZXJ5LCBtYXJrZXQsIGRydWcgfSA9IHZpc2libGU7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIHsgYmFrZXJ5ICYmIDxDb250IGNsYXNzTmFtZT17Y3VycmVudCA9PT0gMSA/ICdzbGlkZU91dExlZnQnIDogJ3NsaWRlSW5SaWdodCd9IHJlZj17YmFrZXJ5UmVmfSB7Li4uaW1hZ2VzW2N1cnJlbnRdfSAvPiB9XG4gICAgICB7IG1hcmtldCAmJiA8Q29udCByZWY9e21hcmtldFJlZn0gey4uLmltYWdlc1tjdXJyZW50XX0gLz4gfVxuICAgICAgeyBkcnVnICYmIDxDb250IHJlZj17ZHJ1Z1JlZn0gey4uLmltYWdlc1tjdXJyZW50XX0gLz4gfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFpbntcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVybyAvPlxuICAgICAgPENhcm91c2VsIC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/pages/index.jsx */"));
};

var Main = function Main() {
  return __jsx(_components_main_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_components_main_hero__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx(Carousel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.c245022570126c49e3b6.hot-update.js.map
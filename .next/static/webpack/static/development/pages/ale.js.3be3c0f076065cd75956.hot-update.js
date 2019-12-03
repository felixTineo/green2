webpackHotUpdate("static/development/pages/ale.js",{

/***/ "./pages/ale.jsx":
/*!***********************!*\
  !*** ./pages/ale.jsx ***!
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
/* harmony import */ var _components_main_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/main/layout */ "./components/main/layout.jsx");
/* harmony import */ var _components_main_hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/main/hero */ "./components/main/hero.jsx");
/* harmony import */ var _components_main_greenpost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/main/greenpost */ "./components/main/greenpost.jsx");
/* harmony import */ var _components_main_embajada__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/main/embajada */ "./components/main/embajada.jsx");
/* harmony import */ var _components_main_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/main/events */ "./components/main/events.jsx");
/* harmony import */ var _components_layout_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout/post */ "./components/layout/post.jsx");
/* harmony import */ var _components_main_title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/main/title */ "./components/main/title.jsx");
/* harmony import */ var _layout_var__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layout/var */ "./layout/var.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




 //import MainSection from '../components/main/main';
//import Embajadores from '../components/main/embajador';
//      <Embajada />









var Ale = function Ale() {
  var arr = Array(20).fill(0);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_11___default.a.init;
    gsap__WEBPACK_IMPORTED_MODULE_12__["TweenMax"].to('.love', 10, {
      x: function x() {
        return Math.floor(Math.random() * 10) % 2 === 0 ? Math.random() * 300 : -(Math.random() * 300);
      },
      y: function y() {
        return -(Math.random() * 300);
      },
      opacity: 1,
      repeat: -1
    });
  }, []);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3374759753", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "main"
  }, __jsx(_components_main_title__WEBPACK_IMPORTED_MODULE_9__["default"], {
    word: "La mas hermosa"
  }), __jsx("div", {
    "data-aos": "fade-in",
    "data-aos-delay": "500",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3374759753", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "cont"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3374759753", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "image"
  }, arr.map(function (item) {
    return __jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3374759753", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "love"
    }, __jsx("path", {
      d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3374759753", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]])
    }));
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3374759753", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "info"
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3374759753", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]])
  }, "Alejandra ", __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3374759753", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]])
  }, "Rojas")), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3374759753", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]])
  }, "La usuaria mas Hermosa de esta y de todas las redes sociales que puedan existir y mas importante que eso, la mujer mas hermosa del mundo en el coraz\xF3n de felix tineo coo-creador de GreenLink. TE AMO!!"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3374759753",
    dynamic: [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]
  }, ".cont.__jsx-style-dynamic-selector{height:100vh;}.image.__jsx-style-dynamic-selector{background:url(/static/alejandra.jpg)top center no-repeat;background-size:cover;width:100%;height:70%;position:relative;}.info.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 .5rem;}.info.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{color:".concat(_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, ";font-weight:900;}.info.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{color:transparent;-webkit-text-stroke:1px ").concat(_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, ";}.info.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{text-align:justify;}svg.__jsx-style-dynamic-selector{width:30px;height:30px;fill:red;position:absolute;bottom:0;left:50%;opacity:0;}@media(min-width:576px){.cont.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:80vh;}.image.__jsx-style-dynamic-selector,.info.__jsx-style-dynamic-selector{width:50%;height:100%;overflow:hidden;}.info.__jsx-style-dynamic-selector{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:1rem;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}svg.__jsx-style-dynamic-selector{width:50px;height:50px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL3BhZ2VzL2FsZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNrQixBQUt3QixBQUc2QyxBQU83QyxBQU1zQixBQUlqQixBQUlDLEFBR1IsQUFVSSxBQUlILEFBS2EsQUFLWixVQVRDLENBZEYsQUF3QkUsRUFuRGhCLEtBb0J1RCxDQUl2RCxHQWtCb0IsQ0FkVCxBQXdCVCxTQXZCa0IsR0FiRixHQTJCaEIsWUFiUyxDQWJYLE9BZHdCLENBNEJiLFNBQ0MsR0FYWixHQVh3QixBQTJCUixJQUpoQixFQTdCYSxNQWtDWCxLQWpDVSxRQXlDSyxHQXhDRyxVQXlDTyxRQXhDM0IsZ0NBSXFCLHFFQXFDbkIsd0JBcENnQixnQkFDbEIiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvcGFnZXMvYWxlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi9sYXlvdXQnO1xuaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9tYWluL2hlcm8nO1xuaW1wb3J0IEdyZWVuUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL21haW4vZ3JlZW5wb3N0Jztcbi8vaW1wb3J0IE1haW5TZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi9tYWluJztcbi8vaW1wb3J0IEVtYmFqYWRvcmVzIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi9lbWJhamFkb3InO1xuLy8gICAgICA8RW1iYWphZGEgLz5cbmltcG9ydCBFbWJhamFkYSBmcm9tICcuLi9jb21wb25lbnRzL21haW4vZW1iYWphZGEnO1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuLi9jb21wb25lbnRzL21haW4vZXZlbnRzJztcbmltcG9ydCBQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L3Bvc3QnO1xuaW1wb3J0IFRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi90aXRsZSc7XG5pbXBvcnQgeyBjb2xvciwgZm9udCB9IGZyb20gJy4uL2xheW91dC92YXInO1xuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xuaW1wb3J0IHsgVHdlZW5NYXggfSBmcm9tICdnc2FwJztcblxuY29uc3QgQWxlID0gKCkgPT4ge1xuICBjb25zdCBhcnIgPSBBcnJheSgyMCkuZmlsbCgwKTtcbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIEFPUy5pbml0O1xuICAgIFR3ZWVuTWF4LnRvKCcubG92ZScsIDEwLCB7XG4gICAgICB4OiAoKT0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDIgPT09IDAgPyBNYXRoLnJhbmRvbSgpICogMzAwIDogLShNYXRoLnJhbmRvbSgpICogMzAwKSxcbiAgICAgIHk6ICgpPT4gLShNYXRoLnJhbmRvbSgpICogMzAwKSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICByZXBlYXQ6IC0xLFxuICAgIH0pXG4gIH0sW10pXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxUaXRsZSB3b3JkPVwiTGEgbWFzIGhlcm1vc2FcIiAvPlxuICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtaW5cIiBkYXRhLWFvcy1kZWxheT1cIjUwMFwiIGNsYXNzTmFtZT1cImNvbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFyci5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwibG92ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBkPVwiTTQ2Mi4zIDYyLjZDNDA3LjUgMTUuOSAzMjYgMjQuMyAyNzUuNyA3Ni4yTDI1NiA5Ni41bC0xOS43LTIwLjNDMTg2LjEgMjQuMyAxMDQuNSAxNS45IDQ5LjcgNjIuNmMtNjIuOCA1My42LTY2LjEgMTQ5LjgtOS45IDIwNy45bDE5My41IDE5OS44YzEyLjUgMTIuOSAzMi44IDEyLjkgNDUuMyAwbDE5My41LTE5OS44YzU2LjMtNTguMSA1My0xNTQuMy05LjgtMjA3Ljl6XCIvPjwvc3ZnPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICA8aDE+QWxlamFuZHJhIDxzcGFuPlJvamFzPC9zcGFuPjwvaDE+XG4gICAgICAgICAgPHA+TGEgdXN1YXJpYSBtYXMgSGVybW9zYSBkZSBlc3RhIHkgZGUgdG9kYXMgbGFzIHJlZGVzIHNvY2lhbGVzIHF1ZSBwdWVkYW4gZXhpc3RpciB5IG1hcyBpbXBvcnRhbnRlIHF1ZSBlc28sIGxhIG11amVyIG1hcyBoZXJtb3NhIGRlbCBtdW5kbyBlbiBlbCBjb3JhesOzbiBkZSBmZWxpeCB0aW5lbyBjb28tY3JlYWRvciBkZSBHcmVlbkxpbmsuIFRFIEFNTyEhPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udHtcbiAgICAgICAgICAvL2Rpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgLy9mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIH1cbiAgICAgICAgLmltYWdle1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2FsZWphbmRyYS5qcGcpdG9wIGNlbnRlciBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6NzAlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAuaW5mb3tcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAwIC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5pbmZvIGgxe1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yLnByaW19O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm8gc3BhbntcbiAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4ICR7Y29sb3IucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgLmluZm8gcHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICB9XG4gICAgICAgIHN2Z3tcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgZmlsbDogcmVkO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNTc2cHgpe1xuICAgICAgICAgIC5jb250e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmltYWdlLCAuaW5mb3tcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5mb3tcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdmd7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IHBvc3RWaXNpYmxlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucG9zdC52aXNpYmxlKTtcbiAgcmV0dXJuKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVybyAvPlxuICAgICAgPEVtYmFqYWRhIC8+XG4gICAgICA8RXZlbnRzIC8+XG4gICAgICA8QWxlIC8+XG4gICAgICA8R3JlZW5Qb3N0IC8+XG4gICAgICB7IHBvc3RWaXNpYmxlICYmIDxQb3N0IC8+IH1cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/pages/ale.jsx */")));
};

var Main = function Main() {
  var postVisible = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post.visible;
  });
  return __jsx(_components_main_layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, __jsx(_components_main_hero__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_components_main_embajada__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(_components_main_events__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx(Ale, null), __jsx(_components_main_greenpost__WEBPACK_IMPORTED_MODULE_5__["default"], null), postVisible && __jsx(_components_layout_post__WEBPACK_IMPORTED_MODULE_8__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=ale.js.3be3c0f076065cd75956.hot-update.js.map
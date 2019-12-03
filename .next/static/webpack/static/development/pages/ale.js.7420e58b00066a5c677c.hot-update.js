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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["753278564", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "main"
  }, __jsx(_components_main_title__WEBPACK_IMPORTED_MODULE_9__["default"], {
    word: "La mas hermosa"
  }), __jsx("div", {
    "data-aos": "fade-in",
    "data-aos-delay": "500",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["753278564", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "cont"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["753278564", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "image"
  }, arr.map(function (item) {
    return __jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["753278564", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "love"
    }, __jsx("path", {
      d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["753278564", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]])
    }));
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["753278564", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "info"
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["753278564", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]])
  }, "Alejandra ", __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["753278564", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]])
  }, "Rojas")), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["753278564", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]])
  }, "La usuaria mas Hermosa de esta y de todas las redes sociales que puedan existir y mas importante que eso, la mujer mas hermosa del mundo en el coraz\xF3n de felix tineo coo-creador de GreenLink. TE AMO!!"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "753278564",
    dynamic: [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]
  }, ".cont.__jsx-style-dynamic-selector{height:100vh;}.image.__jsx-style-dynamic-selector{background:url(/static/alejandra.jpg)top center no-repeat;background-size:cover;width:100%;height:70%;position:relative;}.info.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 .5rem;}.info.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{color:".concat(_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, ";font-weight:900;}.info.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{color:transparent;-webkit-text-stroke:1px ").concat(_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, ";}.info.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{text-align:justify;}svg.__jsx-style-dynamic-selector{width:30px;height:30px;fill:red;position:absolute;bottom:0;left:50%;opacity:0;}@media(min-width:576px){.cont.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:80vh;}.image.__jsx-style-dynamic-selector,.info.__jsx-style-dynamic-selector{width:50%;height:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL3BhZ2VzL2FsZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNrQixBQUt3QixBQUc2QyxBQU83QyxBQU1zQixBQUlqQixBQUlDLEFBR1IsQUFVSSxBQUlILFVBQ0UsQ0FkRixFQTNCZCxLQW9CdUQsQ0FJdkQsR0FrQkUsQ0FkUyxTQUNTLEdBYkYsZUFjUCxDQWJYLE9BZHdCLENBNEJiLFNBQ0MsR0FYWixHQVh3QixBQTJCUixJQUpoQixFQTdCYSxNQWtDWCxLQWpDVSxXQUNRLGtCQUNwQixnQ0FJcUIsNkZBQ0gsZ0JBQ2xCIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL3BhZ2VzL2FsZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL21haW4vbGF5b3V0JztcbmltcG9ydCBIZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi9oZXJvJztcbmltcG9ydCBHcmVlblBvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluL2dyZWVucG9zdCc7XG4vL2ltcG9ydCBNYWluU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL21haW4vbWFpbic7XG4vL2ltcG9ydCBFbWJhamFkb3JlcyBmcm9tICcuLi9jb21wb25lbnRzL21haW4vZW1iYWphZG9yJztcbi8vICAgICAgPEVtYmFqYWRhIC8+XG5pbXBvcnQgRW1iYWphZGEgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluL2VtYmFqYWRhJztcbmltcG9ydCBFdmVudHMgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluL2V2ZW50cyc7XG5pbXBvcnQgUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9wb3N0JztcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL21haW4vdGl0bGUnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnQgfSBmcm9tICcuLi9sYXlvdXQvdmFyJztcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCB7IFR3ZWVuTWF4IH0gZnJvbSAnZ3NhcCc7XG5cbmNvbnN0IEFsZSA9ICgpID0+IHtcbiAgY29uc3QgYXJyID0gQXJyYXkoMjApLmZpbGwoMCk7XG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBBT1MuaW5pdDtcbiAgICBUd2Vlbk1heC50bygnLmxvdmUnLCAxMCwge1xuICAgICAgeDogKCk9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAyID09PSAwID8gTWF0aC5yYW5kb20oKSAqIDMwMCA6IC0oTWF0aC5yYW5kb20oKSAqIDMwMCksXG4gICAgICB5OiAoKT0+IC0oTWF0aC5yYW5kb20oKSAqIDMwMCksXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgcmVwZWF0OiAtMSxcbiAgICB9KVxuICB9LFtdKVxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8VGl0bGUgd29yZD1cIkxhIG1hcyBoZXJtb3NhXCIgLz5cbiAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLWluXCIgZGF0YS1hb3MtZGVsYXk9XCI1MDBcIiBjbGFzc05hbWU9XCJjb250XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBhcnIubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImxvdmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZD1cIk00NjIuMyA2Mi42QzQwNy41IDE1LjkgMzI2IDI0LjMgMjc1LjcgNzYuMkwyNTYgOTYuNWwtMTkuNy0yMC4zQzE4Ni4xIDI0LjMgMTA0LjUgMTUuOSA0OS43IDYyLjZjLTYyLjggNTMuNi02Ni4xIDE0OS44LTkuOSAyMDcuOWwxOTMuNSAxOTkuOGMxMi41IDEyLjkgMzIuOCAxMi45IDQ1LjMgMGwxOTMuNS0xOTkuOGM1Ni4zLTU4LjEgNTMtMTU0LjMtOS44LTIwNy45elwiLz48L3N2Zz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgPGgxPkFsZWphbmRyYSA8c3Bhbj5Sb2phczwvc3Bhbj48L2gxPlxuICAgICAgICAgIDxwPkxhIHVzdWFyaWEgbWFzIEhlcm1vc2EgZGUgZXN0YSB5IGRlIHRvZGFzIGxhcyByZWRlcyBzb2NpYWxlcyBxdWUgcHVlZGFuIGV4aXN0aXIgeSBtYXMgaW1wb3J0YW50ZSBxdWUgZXNvLCBsYSBtdWplciBtYXMgaGVybW9zYSBkZWwgbXVuZG8gZW4gZWwgY29yYXrDs24gZGUgZmVsaXggdGluZW8gY29vLWNyZWFkb3IgZGUgR3JlZW5MaW5rLiBURSBBTU8hITwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnR7XG4gICAgICAgICAgLy9kaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC8vZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICB9XG4gICAgICAgIC5pbWFnZXtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9hbGVqYW5kcmEuanBnKXRvcCBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OjcwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm97XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMCAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuaW5mbyBoMXtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvci5wcmltfTtcbiAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICB9XG4gICAgICAgIC5pbmZvIHNwYW57XG4gICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCAke2NvbG9yLnByaW19O1xuICAgICAgICB9XG4gICAgICAgIC5pbmZvIHB7XG4gICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgfVxuICAgICAgICBzdmd7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIGZpbGw6IHJlZDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDU3NnB4KXtcbiAgICAgICAgICAuY29udHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbWFnZSwgLmluZm97XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgcG9zdFZpc2libGUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wb3N0LnZpc2libGUpO1xuICByZXR1cm4oXG4gICAgPExheW91dD5cbiAgICAgIDxIZXJvIC8+XG4gICAgICA8RW1iYWphZGEgLz5cbiAgICAgIDxFdmVudHMgLz5cbiAgICAgIDxBbGUgLz5cbiAgICAgIDxHcmVlblBvc3QgLz5cbiAgICAgIHsgcG9zdFZpc2libGUgJiYgPFBvc3QgLz4gfVxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXX0= */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/pages/ale.jsx */")));
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
//# sourceMappingURL=ale.js.7420e58b00066a5c677c.hot-update.js.map
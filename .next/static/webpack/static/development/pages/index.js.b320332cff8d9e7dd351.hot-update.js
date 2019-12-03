webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
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
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/pages/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




 //import MainSection from '../components/main/main';
//import Embajadores from '../components/main/embajador';
//      <Embajada />









var Ale = function Ale() {
  var arr = Array(30).fill(0);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_11___default.a.init;
    gsap__WEBPACK_IMPORTED_MODULE_12__["TweenMax"].to('.love', 7, {
      x: function x() {
        return Math.floor(Math.random() * 10) % 2 === 0 ? Math.random() * 1000 : -(Math.random() * 1000);
      },
      y: function y() {
        return Math.floor(Math.random() * 10) % 2 === 0 ? Math.random() * 1000 : -(Math.random() * 1000);
      },
      //-(Math.random() * 1000),
      //opacity: 1,
      repeat: -1
    });
  }, []);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2048662505", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_components_main_title__WEBPACK_IMPORTED_MODULE_9__["default"], {
    word: "Green Star",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("div", {
    "data-aos": "fade-in",
    "data-aos-delay": "500",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2048662505", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2048662505", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, arr.map(function (item, index) {
    switch (Math.floor(Math.random() * 5)) {
      case 0:
        return __jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2048662505", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "love",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, __jsx("path", {
          d: "M368 96h-48V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24v-42.11l80.606-35.977C429.396 365.063 448 336.388 448 304.86V176c0-44.112-35.888-80-80-80zm16 208.86a16.018 16.018 0 0 1-9.479 14.611L320 343.805V160h48c8.822 0 16 7.178 16 16v128.86zM208 384c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16zm-96 0c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16z",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2048662505", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }));

      case 1:
        return __jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 320 512",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2048662505", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "love",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, __jsx("path", {
          d: "M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2048662505", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }));

      case 2:
        return __jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 288 512",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2048662505", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "love",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, __jsx("path", {
          d: "M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2048662505", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }));

      case 3:
        return __jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 384 512",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2048662505", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "love",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, __jsx("path", {
          d: "M372 64h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9-80.7 80.7c-22.2-14-48.5-22.1-76.7-22.1C64.5 160 0 224.5 0 304s64.5 144 144 144 144-64.5 144-144c0-28.2-8.1-54.5-22.1-76.7l80.7-80.7 16.9 16.9c7.6 7.6 20.5 2.2 20.5-8.5V76c0-6.6-5.4-12-12-12zM144 384c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2048662505", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }));

      case 4:
        return __jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 496 512",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2048662505", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "love",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, __jsx("path", {
          d: "M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm184 248c0 31.93-8.2 61.97-22.57 88.17L280 240.63V74.97c86.23 15.21 152 90.5 152 181.03zM216 437.03c-33.86-5.97-64.49-21.2-89.29-43.02L216 322.57v114.46zm64-114.46L369.29 394c-24.8 21.82-55.43 37.05-89.29 43.02V322.57zm-64-247.6v165.66L86.57 344.17C72.2 317.97 64 287.93 64 256c0-90.53 65.77-165.82 152-181.03z",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2048662505", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }));
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2048662505", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2048662505", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Luis ", __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2048662505", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Huamani")), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2048662505", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2048662505", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Trabajo: Ingeniero minero."), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2048662505", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Hobbies: Proteger el medio ambiente, Hacer Porno, Salir con Venecas, Hacer sacapuntas con su jefe, Atascarse en embotellamientos."), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2048662505", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Religion: Encantador de serpientes"), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2048662505", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Apodos: El Destructor de la luz, Pastelito(solo su mama), El caballero de la noche"), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2048662505", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Discipulos: kim jong-un, El papa francisco, Chuck Norris, Steve Jobs(QEPD), Elon musk"), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2048662505", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Fortuna: Valorada en mas de mil trillones de greencoins"), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2048662505", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Personajes inspirados en el: Goku, Batman, James bond, Sheldon cooper, Bart Simpson, Thanos, Harry potter, Jack Bauer, Rambo"), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2048662505", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Parejas conocidas: Scarlett Johanson, Kara delivigne, Mia Kalifa, El clan kardashian completo(incluyendo a la mama y al \"papa\" o lo que sea)")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2048662505",
    dynamic: [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim],
    __self: this
  }, ".cont.__jsx-style-dynamic-selector{height:100vh;}.image.__jsx-style-dynamic-selector{background:url(/static/luis.jpg)center center no-repeat;background-size:cover;width:100%;height:70%;position:relative;}.info.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 .5rem;}.info.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{color:".concat(_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, ";font-weight:900;}.info.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{color:transparent;-webkit-text-stroke:1px ").concat(_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, ";}.info.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{text-align:justify;}svg.__jsx-style-dynamic-selector{width:30px;height:30px;fill:").concat(_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, ";position:absolute;bottom:50%;left:50%;}@media(min-width:576px){.cont.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:80vh;}.image.__jsx-style-dynamic-selector,.info.__jsx-style-dynamic-selector{width:50%;height:100%;overflow:hidden;}.info.__jsx-style-dynamic-selector{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:1rem;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}svg.__jsx-style-dynamic-selector{width:50px;height:50px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL3BhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRWtCLEFBS3dCLEFBRzJDLEFBTzNDLEFBTXNCLEFBSWpCLEFBSUMsQUFHUixBQVVJLEFBSUgsQUFLYSxBQUtaLFVBVEMsQ0FkRixBQXdCRSxFQW5EaEIsS0FvQnVELENBSXZELEdBa0JvQixDQWRnQixBQXdCbEMsWUFwQ2dCLEdBMkJoQixhQTFCRixLQWR3QixDQTBCSixjQVJwQixHQVh3QixBQTJCUixDQVBILEdBMUJBLFFBMkJGLEFBT1QsR0FqQ1UsTUE0QlosSUFhaUIsQ0F4Q0csWUF5Q08sTUF4QzNCLGtDQUlxQixxRUFxQ25CLHdCQXBDZ0IsZ0JBQ2xCIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL3BhZ2VzL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi9sYXlvdXQnO1xuaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9tYWluL2hlcm8nO1xuaW1wb3J0IEdyZWVuUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL21haW4vZ3JlZW5wb3N0Jztcbi8vaW1wb3J0IE1haW5TZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi9tYWluJztcbi8vaW1wb3J0IEVtYmFqYWRvcmVzIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi9lbWJhamFkb3InO1xuLy8gICAgICA8RW1iYWphZGEgLz5cbmltcG9ydCBFbWJhamFkYSBmcm9tICcuLi9jb21wb25lbnRzL21haW4vZW1iYWphZGEnO1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuLi9jb21wb25lbnRzL21haW4vZXZlbnRzJztcbmltcG9ydCBQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L3Bvc3QnO1xuXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluL3RpdGxlJztcbmltcG9ydCB7IGNvbG9yLCBmb250IH0gZnJvbSAnLi4vbGF5b3V0L3Zhcic7XG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5pbXBvcnQgeyBUd2Vlbk1heCB9IGZyb20gJ2dzYXAnO1xuXG5jb25zdCBBbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGFyciA9IEFycmF5KDMwKS5maWxsKDApO1xuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgQU9TLmluaXQ7XG4gICAgVHdlZW5NYXgudG8oJy5sb3ZlJywgNywge1xuICAgICAgeDogKCk9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAyID09PSAwID8gTWF0aC5yYW5kb20oKSAqIDEwMDAgOiAtKE1hdGgucmFuZG9tKCkgKiAxMDAwKSxcbiAgICAgIHk6ICgpPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICUgMiA9PT0gMCA/IE1hdGgucmFuZG9tKCkgKiAxMDAwIDogLShNYXRoLnJhbmRvbSgpICogMTAwMCksLy8tKE1hdGgucmFuZG9tKCkgKiAxMDAwKSxcbiAgICAgIC8vb3BhY2l0eTogMSxcbiAgICAgIHJlcGVhdDogLTEsXG4gICAgfSlcbiAgfSxbXSlcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPFRpdGxlIHdvcmQ9XCJHcmVlbiBTdGFyXCIgLz5cbiAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLWluXCIgZGF0YS1hb3MtZGVsYXk9XCI1MDBcIiBjbGFzc05hbWU9XCJjb250XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBhcnIubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHN2ZyBjbGFzc05hbWU9XCJsb3ZlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGQ9XCJNMzY4IDk2aC00OFY1NmMwLTEzLjI1NS0xMC43NDUtMjQtMjQtMjRIMjRDMTAuNzQ1IDMyIDAgNDIuNzQ1IDAgNTZ2NDAwYzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNGgyNzJjMTMuMjU1IDAgMjQtMTAuNzQ1IDI0LTI0di00Mi4xMWw4MC42MDYtMzUuOTc3QzQyOS4zOTYgMzY1LjA2MyA0NDggMzM2LjM4OCA0NDggMzA0Ljg2VjE3NmMwLTQ0LjExMi0zNS44ODgtODAtODAtODB6bTE2IDIwOC44NmExNi4wMTggMTYuMDE4IDAgMCAxLTkuNDc5IDE0LjYxMUwzMjAgMzQzLjgwNVYxNjBoNDhjOC44MjIgMCAxNiA3LjE3OCAxNiAxNnYxMjguODZ6TTIwOCAzODRjLTguODM2IDAtMTYtNy4xNjQtMTYtMTZWMTQ0YzAtOC44MzYgNy4xNjQtMTYgMTYtMTZzMTYgNy4xNjQgMTYgMTZ2MjI0YzAgOC44MzYtNy4xNjQgMTYtMTYgMTZ6bS05NiAwYy04LjgzNiAwLTE2LTcuMTY0LTE2LTE2VjE0NGMwLTguODM2IDcuMTY0LTE2IDE2LTE2czE2IDcuMTY0IDE2IDE2djIyNGMwIDguODM2LTcuMTY0IDE2LTE2IDE2elwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPVwibG92ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBkPVwiTTI5NiAxNjBIMTgwLjZsNDIuNi0xMjkuOEMyMjcuMiAxNSAyMTUuNyAwIDIwMCAwSDU2QzQ0IDAgMzMuOCA4LjkgMzIuMiAyMC44bC0zMiAyNDBDLTEuNyAyNzUuMiA5LjUgMjg4IDI0IDI4OGgxMTguN0w5Ni42IDQ4Mi41Yy0zLjYgMTUuMiA4IDI5LjUgMjMuMyAyOS41IDguNCAwIDE2LjQtNC40IDIwLjgtMTJsMTc2LTMwNGM5LjMtMTUuOS0yLjItMzYtMjAuNy0zNnpcIi8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3ZnIGNsYXNzTmFtZT1cImxvdmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyODggNTEyXCI+PHBhdGggZD1cIk0yMDkuMiAyMzMuNGwtMTA4LTMxLjZDODguNyAxOTguMiA4MCAxODYuNSA4MCAxNzMuNWMwLTE2LjMgMTMuMi0yOS41IDI5LjUtMjkuNWg2Ni4zYzEyLjIgMCAyNC4yIDMuNyAzNC4yIDEwLjUgNi4xIDQuMSAxNC4zIDMuMSAxOS41LTJsMzQuOC0zNGM3LjEtNi45IDYuMS0xOC40LTEuOC0yNC41QzIzOCA3NC44IDIwNy40IDY0LjEgMTc2IDY0VjE2YzAtOC44LTcuMi0xNi0xNi0xNmgtMzJjLTguOCAwLTE2IDcuMi0xNiAxNnY0OGgtMi41QzQ1LjggNjQtNS40IDExOC43LjUgMTgzLjZjNC4yIDQ2LjEgMzkuNCA4My42IDgzLjggOTYuNmwxMDIuNSAzMGMxMi41IDMuNyAyMS4yIDE1LjMgMjEuMiAyOC4zIDAgMTYuMy0xMy4yIDI5LjUtMjkuNSAyOS41aC02Ni4zQzEwMCAzNjggODggMzY0LjMgNzggMzU3LjVjLTYuMS00LjEtMTQuMy0zLjEtMTkuNSAybC0zNC44IDM0Yy03LjEgNi45LTYuMSAxOC40IDEuOCAyNC41IDI0LjUgMTkuMiA1NS4xIDI5LjkgODYuNSAzMHY0OGMwIDguOCA3LjIgMTYgMTYgMTZoMzJjOC44IDAgMTYtNy4yIDE2LTE2di00OC4yYzQ2LjYtLjkgOTAuMy0yOC42IDEwNS43LTcyLjcgMjEuNS02MS42LTE0LjYtMTI0LjgtNzIuNS0xNDEuN3pcIi8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3ZnIGNsYXNzTmFtZT1cImxvdmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzODQgNTEyXCI+PHBhdGggZD1cIk0zNzIgNjRoLTc5Yy0xMC43IDAtMTYgMTIuOS04LjUgMjAuNWwxNi45IDE2LjktODAuNyA4MC43Yy0yMi4yLTE0LTQ4LjUtMjIuMS03Ni43LTIyLjFDNjQuNSAxNjAgMCAyMjQuNSAwIDMwNHM2NC41IDE0NCAxNDQgMTQ0IDE0NC02NC41IDE0NC0xNDRjMC0yOC4yLTguMS01NC41LTIyLjEtNzYuN2w4MC43LTgwLjcgMTYuOSAxNi45YzcuNiA3LjYgMjAuNSAyLjIgMjAuNS04LjVWNzZjMC02LjYtNS40LTEyLTEyLTEyek0xNDQgMzg0Yy00NC4xIDAtODAtMzUuOS04MC04MHMzNS45LTgwIDgwLTgwIDgwIDM1LjkgODAgODAtMzUuOSA4MC04MCA4MHpcIi8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3ZnIGNsYXNzTmFtZT1cImxvdmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0OTYgNTEyXCI+PHBhdGggZD1cIk0yNDggOEMxMTEuMDMgOCAwIDExOS4wMyAwIDI1NnMxMTEuMDMgMjQ4IDI0OCAyNDggMjQ4LTExMS4wMyAyNDgtMjQ4UzM4NC45NyA4IDI0OCA4em0xODQgMjQ4YzAgMzEuOTMtOC4yIDYxLjk3LTIyLjU3IDg4LjE3TDI4MCAyNDAuNjNWNzQuOTdjODYuMjMgMTUuMjEgMTUyIDkwLjUgMTUyIDE4MS4wM3pNMjE2IDQzNy4wM2MtMzMuODYtNS45Ny02NC40OS0yMS4yLTg5LjI5LTQzLjAyTDIxNiAzMjIuNTd2MTE0LjQ2em02NC0xMTQuNDZMMzY5LjI5IDM5NGMtMjQuOCAyMS44Mi01NS40MyAzNy4wNS04OS4yOSA0My4wMlYzMjIuNTd6bS02NC0yNDcuNnYxNjUuNjZMODYuNTcgMzQ0LjE3QzcyLjIgMzE3Ljk3IDY0IDI4Ny45MyA2NCAyNTZjMC05MC41MyA2NS43Ny0xNjUuODIgMTUyLTE4MS4wM3pcIi8+PC9zdmc+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICA8aDE+THVpcyA8c3Bhbj5IdWFtYW5pPC9zcGFuPjwvaDE+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlRyYWJham86IEluZ2VuaWVybyBtaW5lcm8uPC9saT5cbiAgICAgICAgICAgIDxsaT5Ib2JiaWVzOiBQcm90ZWdlciBlbCBtZWRpbyBhbWJpZW50ZSwgSGFjZXIgUG9ybm8sIFNhbGlyIGNvbiBWZW5lY2FzLCBIYWNlciBzYWNhcHVudGFzIGNvbiBzdSBqZWZlLCBBdGFzY2Fyc2UgZW4gZW1ib3RlbGxhbWllbnRvcy48L2xpPlxuICAgICAgICAgICAgPGxpPlJlbGlnaW9uOiBFbmNhbnRhZG9yIGRlIHNlcnBpZW50ZXM8L2xpPlxuICAgICAgICAgICAgPGxpPkFwb2RvczogRWwgRGVzdHJ1Y3RvciBkZSBsYSBsdXosIFBhc3RlbGl0byhzb2xvIHN1IG1hbWEpLCBFbCBjYWJhbGxlcm8gZGUgbGEgbm9jaGU8L2xpPlxuICAgICAgICAgICAgPGxpPkRpc2NpcHVsb3M6IGtpbSBqb25nLXVuLCBFbCBwYXBhIGZyYW5jaXNjbywgQ2h1Y2sgTm9ycmlzLCBTdGV2ZSBKb2JzKFFFUEQpLCBFbG9uIG11c2s8L2xpPlxuICAgICAgICAgICAgPGxpPkZvcnR1bmE6IFZhbG9yYWRhIGVuIG1hcyBkZSBtaWwgdHJpbGxvbmVzIGRlIGdyZWVuY29pbnM8L2xpPlxuICAgICAgICAgICAgPGxpPlBlcnNvbmFqZXMgaW5zcGlyYWRvcyBlbiBlbDogR29rdSwgQmF0bWFuLCBKYW1lcyBib25kLCBTaGVsZG9uIGNvb3BlciwgQmFydCBTaW1wc29uLCBUaGFub3MsIEhhcnJ5IHBvdHRlciwgSmFjayBCYXVlciwgUmFtYm88L2xpPlxuICAgICAgICAgICAgPGxpPlBhcmVqYXMgY29ub2NpZGFzOiBTY2FybGV0dCBKb2hhbnNvbiwgS2FyYSBkZWxpdmlnbmUsIE1pYSBLYWxpZmEsIEVsIGNsYW4ga2FyZGFzaGlhbiBjb21wbGV0byhpbmNsdXllbmRvIGEgbGEgbWFtYSB5IGFsIFwicGFwYVwiIG8gbG8gcXVlIHNlYSk8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250e1xuICAgICAgICAgIC8vZGlzcGxheTogZmxleDtcbiAgICAgICAgICAvL2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxuICAgICAgICAuaW1hZ2V7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvbHVpcy5qcGcpY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6NzAlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAuaW5mb3tcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAwIC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5pbmZvIGgxe1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yLnByaW19O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm8gc3BhbntcbiAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4ICR7Y29sb3IucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgLmluZm8gcHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICB9XG4gICAgICAgIHN2Z3tcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgZmlsbDogJHtjb2xvci5wcmltfTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiA1MCU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIC8vb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA1NzZweCl7XG4gICAgICAgICAgLmNvbnR7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW1hZ2UsIC5pbmZve1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbmZve1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN2Z3tcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgcG9zdFZpc2libGUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wb3N0LnZpc2libGUpO1xuICByZXR1cm4oXG4gICAgPExheW91dD5cbiAgICAgIDxIZXJvIC8+XG4gICAgICA8RW1iYWphZGEgLz5cbiAgICAgIDxFdmVudHMgLz5cbiAgICAgIDxBbGUgLz5cbiAgICAgIDxHcmVlblBvc3QgLz5cbiAgICAgIHsgcG9zdFZpc2libGUgJiYgPFBvc3QgLz4gfVxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXX0= */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/pages/index.jsx */")));
};

var Main = function Main() {
  var postVisible = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post.visible;
  });
  return __jsx(_components_main_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx(_components_main_hero__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), __jsx(_components_main_embajada__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }), __jsx(_components_main_events__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), __jsx(Ale, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), __jsx(_components_main_greenpost__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), postVisible && __jsx(_components_layout_post__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.b320332cff8d9e7dd351.hot-update.js.map
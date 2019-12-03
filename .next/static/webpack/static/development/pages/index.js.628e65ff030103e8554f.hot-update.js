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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "main",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "image",
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
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "love",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, __jsx("path", {
          d: "M368 96h-48V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24v-42.11l80.606-35.977C429.396 365.063 448 336.388 448 304.86V176c0-44.112-35.888-80-80-80zm16 208.86a16.018 16.018 0 0 1-9.479 14.611L320 343.805V160h48c8.822 0 16 7.178 16 16v128.86zM208 384c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16zm-96 0c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16z",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
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
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "love",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, __jsx("path", {
          d: "M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
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
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "love",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, __jsx("path", {
          d: "M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
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
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "love",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, __jsx("path", {
          d: "M372 64h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9-80.7 80.7c-22.2-14-48.5-22.1-76.7-22.1C64.5 160 0 224.5 0 304s64.5 144 144 144 144-64.5 144-144c0-28.2-8.1-54.5-22.1-76.7l80.7-80.7 16.9 16.9c7.6 7.6 20.5 2.2 20.5-8.5V76c0-6.6-5.4-12-12-12zM144 384c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
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
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "love",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, __jsx("path", {
          d: "M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm184 248c0 31.93-8.2 61.97-22.57 88.17L280 240.63V74.97c86.23 15.21 152 90.5 152 181.03zM216 437.03c-33.86-5.97-64.49-21.2-89.29-43.02L216 322.57v114.46zm64-114.46L369.29 394c-24.8 21.82-55.43 37.05-89.29 43.02V322.57zm-64-247.6v165.66L86.57 344.17C72.2 317.97 64 287.93 64 256c0-90.53 65.77-165.82 152-181.03z",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }));
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]) + " " + "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Luis ", __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Huamani")), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Trabajo: Ingeniero minero."), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Hobbies: Proteger el medio ambiente, Hacer Porno, Salir con Venecas, Hacer sacapuntas con su jefe, Atascarse en embotellamientos."), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Religion: Encantador de serpientes."), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Apodos: El Destructor de la luz, Pastelito(solo su mama), El caballero de la noche."), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Discipulos: kim jong-un, El papa francisco, Chuck Norris, Steve Jobs(QEPD), Elon musk."), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Fortuna: Valorada en mas de mil trillones de greencoins."), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Personajes inspirados en el: Goku, Batman, James bond, Sheldon cooper, Bart Simpson, Thanos, Harry potter, Jack Bauer, Rambo, darth vader."), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Parejas conocidas: Scarlett Johanson, Kara delivigne, Mia Kalifa, la tigresa del oriente, El clan kardashian completo(incluyendo a la mama y al \"papa\" o lo que sea)."), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Composiciones Musicales: Stairway to heaven, la quinta melodia de bethoben, despacito, todos los numero uno de los beatles y bob dylan, el intro del chavo del 8"), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376751942", [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Frase Celebre: \"Luke, Yo soy tu padre\"")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1376751942",
    dynamic: [_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim],
    __self: this
  }, ".image.__jsx-style-dynamic-selector{background:url(/static/luis.jpg)center center no-repeat;background-size:cover;width:100%;height:70%;position:relative;}.info.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 .5rem;}.info.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{color:".concat(_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, ";font-weight:900;}.info.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{color:transparent;-webkit-text-stroke:1px ").concat(_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, ";}.info.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{text-align:justify;}svg.__jsx-style-dynamic-selector{width:30px;height:30px;fill:").concat(_layout_var__WEBPACK_IMPORTED_MODULE_10__["color"].prim, ";position:absolute;bottom:50%;left:50%;}@media(min-width:576px){.cont.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:80vh;}.image.__jsx-style-dynamic-selector,.info.__jsx-style-dynamic-selector{width:50%;height:100%;overflow:hidden;}.info.__jsx-style-dynamic-selector{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:1rem;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}svg.__jsx-style-dynamic-selector{width:50px;height:50px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL3BhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRWtCLEFBUW1FLEFBTzNDLEFBTXNCLEFBSWpCLEFBSUMsQUFHUixBQVVJLEFBSUgsQUFLYSxBQUtaLFVBVEMsQ0FkRixBQXdCRSxPQS9CdUMsQ0FJdkQsR0FrQm9CLENBZGdCLEFBd0JsQyxZQXBDZ0IsR0EyQmhCLGFBMUJGLEtBZHdCLENBMEJKLGNBUnBCLEdBWHdCLEFBMkJSLENBUEgsR0ExQkEsUUEyQkYsQUFPVCxHQWpDVSxNQTRCWixJQWFpQixDQXhDRyxZQXlDTyxNQXhDM0Isa0NBSXFCLHFFQXFDbkIsd0JBcENnQixnQkFDbEIiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvcGFnZXMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluL2xheW91dCc7XG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL21haW4vaGVybyc7XG5pbXBvcnQgR3JlZW5Qb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QnO1xuLy9pbXBvcnQgTWFpblNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9tYWluL21haW4nO1xuLy9pbXBvcnQgRW1iYWphZG9yZXMgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluL2VtYmFqYWRvcic7XG4vLyAgICAgIDxFbWJhamFkYSAvPlxuaW1wb3J0IEVtYmFqYWRhIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi9lbWJhamFkYSc7XG5pbXBvcnQgRXZlbnRzIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi9ldmVudHMnO1xuaW1wb3J0IFBvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvcG9zdCc7XG5cbmltcG9ydCBUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL21haW4vdGl0bGUnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnQgfSBmcm9tICcuLi9sYXlvdXQvdmFyJztcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCB7IFR3ZWVuTWF4IH0gZnJvbSAnZ3NhcCc7XG5cbmNvbnN0IEFsZSA9ICgpID0+IHtcbiAgY29uc3QgYXJyID0gQXJyYXkoMzApLmZpbGwoMCk7XG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBBT1MuaW5pdDtcbiAgICBUd2Vlbk1heC50bygnLmxvdmUnLCA3LCB7XG4gICAgICB4OiAoKT0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDIgPT09IDAgPyBNYXRoLnJhbmRvbSgpICogMTAwMCA6IC0oTWF0aC5yYW5kb20oKSAqIDEwMDApLFxuICAgICAgeTogKCk9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAyID09PSAwID8gTWF0aC5yYW5kb20oKSAqIDEwMDAgOiAtKE1hdGgucmFuZG9tKCkgKiAxMDAwKSwvLy0oTWF0aC5yYW5kb20oKSAqIDEwMDApLFxuICAgICAgLy9vcGFjaXR5OiAxLFxuICAgICAgcmVwZWF0OiAtMSxcbiAgICB9KVxuICB9LFtdKVxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8VGl0bGUgd29yZD1cIkdyZWVuIFN0YXJcIiAvPlxuICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtaW5cIiBkYXRhLWFvcy1kZWxheT1cIjUwMFwiIGNsYXNzTmFtZT1cImNvbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFyci5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3ZnIGNsYXNzTmFtZT1cImxvdmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZD1cIk0zNjggOTZoLTQ4VjU2YzAtMTMuMjU1LTEwLjc0NS0yNC0yNC0yNEgyNEMxMC43NDUgMzIgMCA0Mi43NDUgMCA1NnY0MDBjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0aDI3MmMxMy4yNTUgMCAyNC0xMC43NDUgMjQtMjR2LTQyLjExbDgwLjYwNi0zNS45NzdDNDI5LjM5NiAzNjUuMDYzIDQ0OCAzMzYuMzg4IDQ0OCAzMDQuODZWMTc2YzAtNDQuMTEyLTM1Ljg4OC04MC04MC04MHptMTYgMjA4Ljg2YTE2LjAxOCAxNi4wMTggMCAwIDEtOS40NzkgMTQuNjExTDMyMCAzNDMuODA1VjE2MGg0OGM4LjgyMiAwIDE2IDcuMTc4IDE2IDE2djEyOC44NnpNMjA4IDM4NGMtOC44MzYgMC0xNi03LjE2NC0xNi0xNlYxNDRjMC04LjgzNiA3LjE2NC0xNiAxNi0xNnMxNiA3LjE2NCAxNiAxNnYyMjRjMCA4LjgzNi03LjE2NCAxNi0xNiAxNnptLTk2IDBjLTguODM2IDAtMTYtNy4xNjQtMTYtMTZWMTQ0YzAtOC44MzYgNy4xNjQtMTYgMTYtMTZzMTYgNy4xNjQgMTYgMTZ2MjI0YzAgOC44MzYtNy4xNjQgMTYtMTYgMTZ6XCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHN2ZyBjbGFzc05hbWU9XCJsb3ZlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGQ9XCJNMjk2IDE2MEgxODAuNmw0Mi42LTEyOS44QzIyNy4yIDE1IDIxNS43IDAgMjAwIDBINTZDNDQgMCAzMy44IDguOSAzMi4yIDIwLjhsLTMyIDI0MEMtMS43IDI3NS4yIDkuNSAyODggMjQgMjg4aDExOC43TDk2LjYgNDgyLjVjLTMuNiAxNS4yIDggMjkuNSAyMy4zIDI5LjUgOC40IDAgMTYuNC00LjQgMjAuOC0xMmwxNzYtMzA0YzkuMy0xNS45LTIuMi0zNi0yMC43LTM2elwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPVwibG92ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI4OCA1MTJcIj48cGF0aCBkPVwiTTIwOS4yIDIzMy40bC0xMDgtMzEuNkM4OC43IDE5OC4yIDgwIDE4Ni41IDgwIDE3My41YzAtMTYuMyAxMy4yLTI5LjUgMjkuNS0yOS41aDY2LjNjMTIuMiAwIDI0LjIgMy43IDM0LjIgMTAuNSA2LjEgNC4xIDE0LjMgMy4xIDE5LjUtMmwzNC44LTM0YzcuMS02LjkgNi4xLTE4LjQtMS44LTI0LjVDMjM4IDc0LjggMjA3LjQgNjQuMSAxNzYgNjRWMTZjMC04LjgtNy4yLTE2LTE2LTE2aC0zMmMtOC44IDAtMTYgNy4yLTE2IDE2djQ4aC0yLjVDNDUuOCA2NC01LjQgMTE4LjcuNSAxODMuNmM0LjIgNDYuMSAzOS40IDgzLjYgODMuOCA5Ni42bDEwMi41IDMwYzEyLjUgMy43IDIxLjIgMTUuMyAyMS4yIDI4LjMgMCAxNi4zLTEzLjIgMjkuNS0yOS41IDI5LjVoLTY2LjNDMTAwIDM2OCA4OCAzNjQuMyA3OCAzNTcuNWMtNi4xLTQuMS0xNC4zLTMuMS0xOS41IDJsLTM0LjggMzRjLTcuMSA2LjktNi4xIDE4LjQgMS44IDI0LjUgMjQuNSAxOS4yIDU1LjEgMjkuOSA4Ni41IDMwdjQ4YzAgOC44IDcuMiAxNiAxNiAxNmgzMmM4LjggMCAxNi03LjIgMTYtMTZ2LTQ4LjJjNDYuNi0uOSA5MC4zLTI4LjYgMTA1LjctNzIuNyAyMS41LTYxLjYtMTQuNi0xMjQuOC03Mi41LTE0MS43elwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPVwibG92ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDM4NCA1MTJcIj48cGF0aCBkPVwiTTM3MiA2NGgtNzljLTEwLjcgMC0xNiAxMi45LTguNSAyMC41bDE2LjkgMTYuOS04MC43IDgwLjdjLTIyLjItMTQtNDguNS0yMi4xLTc2LjctMjIuMUM2NC41IDE2MCAwIDIyNC41IDAgMzA0czY0LjUgMTQ0IDE0NCAxNDQgMTQ0LTY0LjUgMTQ0LTE0NGMwLTI4LjItOC4xLTU0LjUtMjIuMS03Ni43bDgwLjctODAuNyAxNi45IDE2LjljNy42IDcuNiAyMC41IDIuMiAyMC41LTguNVY3NmMwLTYuNi01LjQtMTItMTItMTJ6TTE0NCAzODRjLTQ0LjEgMC04MC0zNS45LTgwLTgwczM1LjktODAgODAtODAgODAgMzUuOSA4MCA4MC0zNS45IDgwLTgwIDgwelwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPVwibG92ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ5NiA1MTJcIj48cGF0aCBkPVwiTTI0OCA4QzExMS4wMyA4IDAgMTE5LjAzIDAgMjU2czExMS4wMyAyNDggMjQ4IDI0OCAyNDgtMTExLjAzIDI0OC0yNDhTMzg0Ljk3IDggMjQ4IDh6bTE4NCAyNDhjMCAzMS45My04LjIgNjEuOTctMjIuNTcgODguMTdMMjgwIDI0MC42M1Y3NC45N2M4Ni4yMyAxNS4yMSAxNTIgOTAuNSAxNTIgMTgxLjAzek0yMTYgNDM3LjAzYy0zMy44Ni01Ljk3LTY0LjQ5LTIxLjItODkuMjktNDMuMDJMMjE2IDMyMi41N3YxMTQuNDZ6bTY0LTExNC40NkwzNjkuMjkgMzk0Yy0yNC44IDIxLjgyLTU1LjQzIDM3LjA1LTg5LjI5IDQzLjAyVjMyMi41N3ptLTY0LTI0Ny42djE2NS42Nkw4Ni41NyAzNDQuMTdDNzIuMiAzMTcuOTcgNjQgMjg3LjkzIDY0IDI1NmMwLTkwLjUzIDY1Ljc3LTE2NS44MiAxNTItMTgxLjAzelwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgIDxoMT5MdWlzIDxzcGFuPkh1YW1hbmk8L3NwYW4+PC9oMT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+VHJhYmFqbzogSW5nZW5pZXJvIG1pbmVyby48L2xpPlxuICAgICAgICAgICAgPGxpPkhvYmJpZXM6IFByb3RlZ2VyIGVsIG1lZGlvIGFtYmllbnRlLCBIYWNlciBQb3JubywgU2FsaXIgY29uIFZlbmVjYXMsIEhhY2VyIHNhY2FwdW50YXMgY29uIHN1IGplZmUsIEF0YXNjYXJzZSBlbiBlbWJvdGVsbGFtaWVudG9zLjwvbGk+XG4gICAgICAgICAgICA8bGk+UmVsaWdpb246IEVuY2FudGFkb3IgZGUgc2VycGllbnRlcy48L2xpPlxuICAgICAgICAgICAgPGxpPkFwb2RvczogRWwgRGVzdHJ1Y3RvciBkZSBsYSBsdXosIFBhc3RlbGl0byhzb2xvIHN1IG1hbWEpLCBFbCBjYWJhbGxlcm8gZGUgbGEgbm9jaGUuPC9saT5cbiAgICAgICAgICAgIDxsaT5EaXNjaXB1bG9zOiBraW0gam9uZy11biwgRWwgcGFwYSBmcmFuY2lzY28sIENodWNrIE5vcnJpcywgU3RldmUgSm9icyhRRVBEKSwgRWxvbiBtdXNrLjwvbGk+XG4gICAgICAgICAgICA8bGk+Rm9ydHVuYTogVmFsb3JhZGEgZW4gbWFzIGRlIG1pbCB0cmlsbG9uZXMgZGUgZ3JlZW5jb2lucy48L2xpPlxuICAgICAgICAgICAgPGxpPlBlcnNvbmFqZXMgaW5zcGlyYWRvcyBlbiBlbDogR29rdSwgQmF0bWFuLCBKYW1lcyBib25kLCBTaGVsZG9uIGNvb3BlciwgQmFydCBTaW1wc29uLCBUaGFub3MsIEhhcnJ5IHBvdHRlciwgSmFjayBCYXVlciwgUmFtYm8sIGRhcnRoIHZhZGVyLjwvbGk+XG4gICAgICAgICAgICA8bGk+UGFyZWphcyBjb25vY2lkYXM6IFNjYXJsZXR0IEpvaGFuc29uLCBLYXJhIGRlbGl2aWduZSwgTWlhIEthbGlmYSwgbGEgdGlncmVzYSBkZWwgb3JpZW50ZSwgRWwgY2xhbiBrYXJkYXNoaWFuIGNvbXBsZXRvKGluY2x1eWVuZG8gYSBsYSBtYW1hIHkgYWwgXCJwYXBhXCIgbyBsbyBxdWUgc2VhKS48L2xpPlxuICAgICAgICAgICAgPGxpPkNvbXBvc2ljaW9uZXMgTXVzaWNhbGVzOiBTdGFpcndheSB0byBoZWF2ZW4sIGxhIHF1aW50YSBtZWxvZGlhIGRlIGJldGhvYmVuLCBkZXNwYWNpdG8sIHRvZG9zIGxvcyBudW1lcm8gdW5vIGRlIGxvcyBiZWF0bGVzIHkgYm9iIGR5bGFuLCBlbCBpbnRybyBkZWwgY2hhdm8gZGVsIDg8L2xpPlxuICAgICAgICAgICAgPGxpPkZyYXNlIENlbGVicmU6IFwiTHVrZSwgWW8gc295IHR1IHBhZHJlXCI8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250e1xuICAgICAgICAgIC8vZGlzcGxheTogZmxleDtcbiAgICAgICAgICAvL2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgLy9oZWlnaHQ6IDEwMHZoO1xuICAgICAgICB9XG4gICAgICAgIC5pbWFnZXtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9sdWlzLmpwZyljZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDo3MCU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC5pbmZve1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDAgLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmluZm8gaDF7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3IucHJpbX07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgfVxuICAgICAgICAuaW5mbyBzcGFue1xuICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggJHtjb2xvci5wcmltfTtcbiAgICAgICAgfVxuICAgICAgICAuaW5mbyBwe1xuICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIH1cbiAgICAgICAgc3Zne1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBmaWxsOiAke2NvbG9yLnByaW19O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDUwJTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgLy9vcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDU3NnB4KXtcbiAgICAgICAgICAuY29udHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbWFnZSwgLmluZm97XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmluZm97XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3Zne1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICBjb25zdCBwb3N0VmlzaWJsZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBvc3QudmlzaWJsZSk7XG4gIHJldHVybihcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlcm8gLz5cbiAgICAgIDxFbWJhamFkYSAvPlxuICAgICAgPEV2ZW50cyAvPlxuICAgICAgPEFsZSAvPlxuICAgICAgPEdyZWVuUG9zdCAvPlxuICAgICAgeyBwb3N0VmlzaWJsZSAmJiA8UG9zdCAvPiB9XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/pages/index.jsx */")));
};

var Main = function Main() {
  var postVisible = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post.visible;
  });
  return __jsx(_components_main_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx(_components_main_hero__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), __jsx(_components_main_embajada__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), __jsx(_components_main_events__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), __jsx(Ale, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }), __jsx(_components_main_greenpost__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), postVisible && __jsx(_components_layout_post__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.628e65ff030103e8554f.hot-update.js.map
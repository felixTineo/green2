webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/main/events.jsx":
/*!************************************!*\
  !*** ./components/main/events.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/main */ "./layout/main.js");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title */ "./components/main/title.jsx");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/main/events.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Main = function Main() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      width = _useState[0],
      setWidth = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_4___default.a.init();
    setWidth(window.innerWidth);
    return function () {
      return aos__WEBPACK_IMPORTED_MODULE_4___default.a.refresh();
    };
  }, []);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["662025125", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]) + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    word: "eventos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["662025125", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]) + " " + "events",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("li", {
    "data-aos": "fade-in",
    "data-aos-delay": width > 768 ? '500' : '',
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["662025125", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]) + " " + "tree",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["662025125", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["662025125", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "siembra"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["662025125", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Regalale vida al planeta.")), __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["662025125", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["662025125", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "participar"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["662025125", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]) + " " + "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }))), __jsx("li", {
    "data-aos": "fade-in",
    "data-aos-delay": width > 768 ? '1000' : '',
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["662025125", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]) + " " + "cold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["662025125", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["662025125", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "ayuda"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["662025125", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Las zonas andinas necesitan un corazon calido.")), __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["662025125", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "participar", __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["662025125", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]) + " " + "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))), __jsx("li", {
    "data-aos": "fade-in",
    "data-aos-delay": width > 768 ? '1500' : '',
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["662025125", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]) + " " + "angel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["662025125", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["662025125", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "adopta"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["662025125", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Un angel llega en cualquier forma.")), __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["662025125", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "participar", __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["662025125", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]) + " " + "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "662025125",
    dynamic: [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim],
    __self: this
  }, ".main.__jsx-style-dynamic-selector{min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:linear-gradient(rgba(0,0,0,.1),#fff);}.events.__jsx-style-dynamic-selector{list-style:none;height:100%;margin:0;padding:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}li.__jsx-style-dynamic-selector{height:80vh;width:100%;box-shadow:5px 5px 15px rgba(0,0,0,.5);position:relative;}li.__jsx-style-dynamic-selector header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:.5rem;color:#fff;}li.__jsx-style-dynamic-selector:nth-child(2){margin:2rem 0;}button.__jsx-style-dynamic-selector{font-size:1.5rem;background:transparent;color:#fff;position:absolute;bottom:.5rem;right:.5rem;text-transform:uppercase;-webkit-transition:250ms ease;transition:250ms ease;overflow:hidden;}button.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{position:relative;z-index:2;}.circle.__jsx-style-dynamic-selector{-webkit-transition:250ms ease;transition:250ms ease;width:0px;height:0px;border-radius:50%;background:rgba(0,0,0,.2);position:absolute;right:-20px;bottom:-20px;}button.__jsx-style-dynamic-selector:focus{outline:none;}button.__jsx-style-dynamic-selector:hover .circle.__jsx-style-dynamic-selector{width:50px;height:50px;}h2.__jsx-style-dynamic-selector{text-transform:uppercase;font-family:".concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, ";}.tree.__jsx-style-dynamic-selector{background:url(/static/arbol.jpg);background-size:cover;background-position:bottom center;background-repeat:no-repeat;}.tree.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector,.tree.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{background:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, ";}.tree.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{background:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, ";}.cold.__jsx-style-dynamic-selector{background:url(/static/calido.jpg);background-size:cover;background-position:bottom center;background-repeat:no-repeat;}.cold.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector,.cold.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{background:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, ";}.cold.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{background:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, ";border-color:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, ";}.angel.__jsx-style-dynamic-selector{background:url(/static/angel.jpg);background-size:cover;background-position:top center;background-repeat:no-repeat;}.angel.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector,.angel.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{background:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, ";}.angel.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{background:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, ";border-color:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, ";}@media(min-width:768px){.main.__jsx-style-dynamic-selector{min-height:80vh;}.events.__jsx-style-dynamic-selector{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100%;}li.__jsx-style-dynamic-selector{width:30%;height:78vh;}li.__jsx-style-dynamic-selector:nth-child(2){margin:0;}}@media(min-width:992px){.main.__jsx-style-dynamic-selector{min-height:80vh;height:80vh;}.events.__jsx-style-dynamic-selector{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100%;}li.__jsx-style-dynamic-selector{width:30%;height:100%;}li.__jsx-style-dynamic-selector:nth-child(2){margin:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ldmVudHMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDa0IsQUFHNEIsQUFNRCxBQVdKLEFBT0MsQUFPQyxBQUdHLEFBV0MsQUFJSSxBQVVULEFBR0YsQUFJYyxBQUlTLEFBTU0sQUFHQSxBQUdMLEFBT0ssQUFHQSxBQUlOLEFBTU0sQUFHQSxBQUt0QixBQUdHLEFBSVQsQUFJRCxBQUtPLEFBSUcsQUFJVCxBQUlELFNBaEJYLEFBaUJBLENBckJjLEFBaUJBLENBeEVILENBNUNBLENBeUNiLENBNUJBLEVBekJjLEFBd0daLEFBZ0JjLENBOUhELEFBa0NVLENBV2IsSUF5RVYsQUFpQkEsQ0FwSDBDLEFBNEM1QyxFQUcyQyxHQTNEaEMsQUF1Q1gsQUFpRkUsTUF6RHNCLEFBMEJBLENBZEEsRUExRVosR0EyQkMsQUF5Q2IsQUFHQSxBQVVBLEFBRzRDLEFBVTVDLEFBRzRDLE9BaEc5QixJQTJCTSxDQWFSLElBc0J3QixBQTBCSCxDQWRHLEtBL0RoQixBQThCUCxJQWlCYixHQTlCZSxBQTRFQyxBQWlCQSxJQS9FSSxDQTNCSSxNQUh4QixDQTZGRSxBQWlCQSxDQTdGWSxBQXVEZCxBQWFBLEtBUjhCLEdBMUJBLENBdkVOLEFBbURPLEFBZ0NELEdBN0NILHFCQTREM0IsRUE5Q29CLENBM0NMLEFBK0RmLENBakN3QixBQTZDeEIsWUExRWUsSUEyQ0QsWUFDQyxLQTlCVSxRQStCekIsU0F0RHNELEVBdUNwQyxnQkFDbEIsa0JBOUJ3QixZQVR4Qiw0Q0F1QmdCLGNBQ0gsUUFkbUIsR0FlaEMsZ0hBZEEiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL2V2ZW50cy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbG9yLCBmb250LCB0aGVtZUJsdWUsIHRoZW1lUmVkIH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuaW1wb3J0IFRpdGxlIGZyb20gJy4vdGl0bGUnO1xuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKDApO1xuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgQU9TLmluaXQoKTtcbiAgICBzZXRXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgcmV0dXJuICgpPT4gQU9TLnJlZnJlc2goKTtcbiAgfSxbXSlcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPFRpdGxlIHdvcmQ9XCJldmVudG9zXCIgLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJldmVudHNcIj5cbiAgICAgICAgPGxpIGRhdGEtYW9zPVwiZmFkZS1pblwiIGRhdGEtYW9zLWRlbGF5PXt3aWR0aCA+IDc2OCA/ICc1MDAnIDogJyd9IGNsYXNzTmFtZT1cInRyZWVcIj5cbiAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGgyPnNpZW1icmE8L2gyPlxuICAgICAgICAgICAgPHA+UmVnYWxhbGUgdmlkYSBhbCBwbGFuZXRhLjwvcD5cbiAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgPHNwYW4+cGFydGljaXBhcjwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGRhdGEtYW9zPVwiZmFkZS1pblwiIGRhdGEtYW9zLWRlbGF5PXt3aWR0aCA+IDc2OCA/ICcxMDAwJyA6ICcnfSBjbGFzc05hbWU9XCJjb2xkXCI+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPGgyPmF5dWRhPC9oMj5cbiAgICAgICAgICA8cD5MYXMgem9uYXMgYW5kaW5hcyBuZWNlc2l0YW4gdW4gY29yYXpvbiBjYWxpZG8uPC9wPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICBwYXJ0aWNpcGFyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGRhdGEtYW9zPVwiZmFkZS1pblwiIGRhdGEtYW9zLWRlbGF5PXt3aWR0aCA+IDc2OCA/ICcxNTAwJyA6ICcnfSBjbGFzc05hbWU9XCJhbmdlbFwiPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxoMj5hZG9wdGE8L2gyPlxuICAgICAgICAgIDxwPlVuIGFuZ2VsIGxsZWdhIGVuIGN1YWxxdWllciBmb3JtYS48L3A+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgIHBhcnRpY2lwYXJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIC4xKSwgI2ZmZik7XG4gICAgICAgIH1cbiAgICAgICAgLmV2ZW50c3tcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG4gICAgICAgIGxpe1xuICAgICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAgICAvL3dpZHRoOiAzMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgLjUpO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBsaSBoZWFkZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIGxpOm50aC1jaGlsZCgyKXtcbiAgICAgICAgICBtYXJnaW46IDJyZW0gMDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b257XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogLjVyZW07XG4gICAgICAgICAgcmlnaHQ6IC41cmVtO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiBzcGFue1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICB9XG4gICAgICAgIC5jaXJjbGV7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICB3aWR0aDogMHB4O1xuICAgICAgICAgIGhlaWdodDogMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IC0yMHB4O1xuICAgICAgICAgIGJvdHRvbTogLTIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVyIC5jaXJjbGV7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OjUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDJ7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBmb250LWZhbWlseTogJHtmb250LnRpdGxlfTtcbiAgICAgICAgfVxuICAgICAgICAudHJlZXtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9hcmJvbC5qcGcpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICB9XG4gICAgICAgIC50cmVlIGgyLCAudHJlZSBwe1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3IucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgLnRyZWUgYnV0dG9ue1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3IucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgLmNvbGR7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvY2FsaWRvLmpwZyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIH1cblxuICAgICAgICAuY29sZCBoMiwgLmNvbGQgcHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lUmVkLnByaW19O1xuICAgICAgICB9XG4gICAgICAgIC5jb2xkIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lUmVkLnByaW19O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZVJlZC5wcmltfTtcbiAgICAgICAgfVxuICAgICAgICAuYW5nZWx7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvYW5nZWwuanBnKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgfVxuICAgICAgICAuYW5nZWwgaDIsIC5hbmdlbCBwe1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWVCbHVlLnByaW19O1xuICAgICAgICB9XG4gICAgICAgIC5hbmdlbCBidXR0b246aG92ZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZUJsdWUucHJpbX07XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lQmx1ZS5wcmltfTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA3NjhweCl7XG4gICAgICAgICAgLm1haW57XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA4MHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZXZlbnRze1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGl7XG4gICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA3OHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaTpudGgtY2hpbGQoMil7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDk5MnB4KXtcbiAgICAgICAgICAubWFpbntcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ldmVudHN7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaXtcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpOm50aC1jaGlsZCgyKXtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/events.jsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.982e1c258091c183bffb.hot-update.js.map
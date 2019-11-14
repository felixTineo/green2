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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1446687152", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]) + " " + "main",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1446687152", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]) + " " + "events",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("li", {
    "data-aos": "fade-in",
    "data-aos-delay": width > 768 ? '500' : '',
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1446687152", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]) + " " + "tree",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1446687152", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1446687152", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "siembra"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1446687152", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Regalale vida al planeta.")), __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1446687152", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "participar", __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1446687152", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]) + " " + "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }))), __jsx("li", {
    "data-aos": "fade-in",
    "data-aos-delay": width > 768 ? '1000' : '',
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1446687152", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]) + " " + "cold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1446687152", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1446687152", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "ayuda"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1446687152", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Las zonas andinas necesitan un corazon calido.")), __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1446687152", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "participar", __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1446687152", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]) + " " + "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))), __jsx("li", {
    "data-aos": "fade-in",
    "data-aos-delay": width > 768 ? '1500' : '',
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1446687152", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]) + " " + "angel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1446687152", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1446687152", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "adopta"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1446687152", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Un angel llega en cualquier forma.")), __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1446687152", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "participar", __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1446687152", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]) + " " + "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1446687152",
    dynamic: [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim],
    __self: this
  }, ".main.__jsx-style-dynamic-selector{min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:linear-gradient(rgba(0,0,0,.1),#fff);}.events.__jsx-style-dynamic-selector{list-style:none;height:100%;margin:0;padding:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}li.__jsx-style-dynamic-selector{height:80vh;width:100%;box-shadow:5px 5px 15px rgba(0,0,0,.5);position:relative;}li.__jsx-style-dynamic-selector header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:.5rem;color:#fff;}li.__jsx-style-dynamic-selector:nth-child(2){margin:2rem 0;}button.__jsx-style-dynamic-selector{font-size:1.5rem;background:transparent;border:2px solid #fff;color:#fff;position:absolute;bottom:.5rem;right:.5rem;text-transform:uppercase;-webkit-transition:250ms ease;transition:250ms ease;}.circle.__jsx-style-dynamic-selector{width:50px;height:50px;border-radius:50%;background:rgba(0,0,0,.5);position:absolute;right:-20px;bottom:-20px;}button.__jsx-style-dynamic-selector:focus{outline:none;}h2.__jsx-style-dynamic-selector{text-transform:uppercase;font-family:".concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, ";}.tree.__jsx-style-dynamic-selector{background:url(/static/arbol.jpg);background-size:cover;background-position:bottom center;background-repeat:no-repeat;}.tree.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector,.tree.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{background:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, ";}.tree.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{background:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, ";border-color:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, ";}.cold.__jsx-style-dynamic-selector{background:url(/static/calido.jpg);background-size:cover;background-position:bottom center;background-repeat:no-repeat;}.cold.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector,.cold.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{background:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, ";}.cold.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{background:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, ";border-color:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, ";}.angel.__jsx-style-dynamic-selector{background:url(/static/angel.jpg);background-size:cover;background-position:top center;background-repeat:no-repeat;}.angel.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector,.angel.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{background:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, ";}.angel.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{background:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, ";border-color:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, ";}@media(min-width:768px){.main.__jsx-style-dynamic-selector{min-height:80vh;}.events.__jsx-style-dynamic-selector{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100%;}li.__jsx-style-dynamic-selector{width:30%;height:78vh;}li.__jsx-style-dynamic-selector:nth-child(2){margin:0;}}@media(min-width:992px){.main.__jsx-style-dynamic-selector{min-height:80vh;height:80vh;}.events.__jsx-style-dynamic-selector{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100%;}li.__jsx-style-dynamic-selector{width:30%;height:100%;}li.__jsx-style-dynamic-selector:nth-child(2){margin:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ldmVudHMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDa0IsQUFHNEIsQUFNRCxBQVdKLEFBT0MsQUFPQyxBQUdHLEFBV04sQUFTRSxBQUdZLEFBSVMsQUFNTSxBQUdBLEFBSUwsQUFPSyxBQUdBLEFBSU4sQUFNTSxBQUdBLEFBS3RCLEFBR0csQUFJVCxBQUlELEFBS08sQUFJRyxBQUlULEFBSUQsU0FoQlgsQUFpQkEsQ0FyQmMsQUFpQkEsQ0FqRkYsQ0EzQkQsQ0FvQ2IsQ0F2QkEsRUF6QmMsQUFnR1osQUFnQmMsQ0F0SEQsQUFrQ1UsS0E0RXZCLEFBaUJBLENBNUcwQyxBQTJCeEIsRUFXdUIsR0FsRGhDLEFBZ0hULE1BMURzQixBQTJCQSxDQWRBLEVBbEVaLEdBMkJZLEFBZ0N4QixBQUc0QyxBQVc1QyxBQUc0QyxBQVU1QyxBQUc0QyxDQWxEYixNQXRDakIsU0FxRHNCLEFBMkJILENBZEcsS0F2RGhCLEFBZ0JQLElBc0JiLENBVm9CLEVBeURKLEFBaUJBLElBckZJLENBYkksTUFIeEIsQ0FxRkUsQUFpQkEsQ0FwREYsQUFjQSxBQWFBLEdBakRjLEVBeUNnQixHQTNCQSxDQTlETixBQXFDVCxBQXNDZSxNQTFCZixPQVhELE1BWWQsS0F3Q0EsQ0FuRDJCLEVBOUJaLEFBc0RmLENBYUEsWUFsRWUsVUE4QlMsV0FoQkMsaUJBdkI2Qix3QkF3Q3RELFlBOUJ3QixZQVR4Qiw0Q0F1QmdCLGNBQ0gsUUFkbUIsR0FlaEMsZ0hBZEEiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL2V2ZW50cy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbG9yLCBmb250LCB0aGVtZUJsdWUsIHRoZW1lUmVkIH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuaW1wb3J0IFRpdGxlIGZyb20gJy4vdGl0bGUnO1xuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKDApO1xuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgQU9TLmluaXQoKTtcbiAgICBzZXRXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgcmV0dXJuICgpPT4gQU9TLnJlZnJlc2goKTtcbiAgfSxbXSlcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPFRpdGxlIHdvcmQ9XCJldmVudG9zXCIgLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJldmVudHNcIj5cbiAgICAgICAgPGxpIGRhdGEtYW9zPVwiZmFkZS1pblwiIGRhdGEtYW9zLWRlbGF5PXt3aWR0aCA+IDc2OCA/ICc1MDAnIDogJyd9IGNsYXNzTmFtZT1cInRyZWVcIj5cbiAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGgyPnNpZW1icmE8L2gyPlxuICAgICAgICAgICAgPHA+UmVnYWxhbGUgdmlkYSBhbCBwbGFuZXRhLjwvcD5cbiAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgcGFydGljaXBhclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgZGF0YS1hb3M9XCJmYWRlLWluXCIgZGF0YS1hb3MtZGVsYXk9e3dpZHRoID4gNzY4ID8gJzEwMDAnIDogJyd9IGNsYXNzTmFtZT1cImNvbGRcIj5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8aDI+YXl1ZGE8L2gyPlxuICAgICAgICAgIDxwPkxhcyB6b25hcyBhbmRpbmFzIG5lY2VzaXRhbiB1biBjb3Jhem9uIGNhbGlkby48L3A+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgIHBhcnRpY2lwYXJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgZGF0YS1hb3M9XCJmYWRlLWluXCIgZGF0YS1hb3MtZGVsYXk9e3dpZHRoID4gNzY4ID8gJzE1MDAnIDogJyd9IGNsYXNzTmFtZT1cImFuZ2VsXCI+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPGgyPmFkb3B0YTwvaDI+XG4gICAgICAgICAgPHA+VW4gYW5nZWwgbGxlZ2EgZW4gY3VhbHF1aWVyIGZvcm1hLjwvcD5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxidXR0b24+XG4gICAgICAgICAgcGFydGljaXBhclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFpbntcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgLjEpLCAjZmZmKTtcbiAgICAgICAgfVxuICAgICAgICAuZXZlbnRze1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cbiAgICAgICAgbGl7XG4gICAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgIC8vd2lkdGg6IDMwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIGxpIGhlYWRlcntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgbGk6bnRoLWNoaWxkKDIpe1xuICAgICAgICAgIG1hcmdpbjogMnJlbSAwO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IC41cmVtO1xuICAgICAgICAgIHJpZ2h0OiAuNXJlbTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgLmNpcmNsZXtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjUpO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogLTIwcHg7XG4gICAgICAgICAgYm90dG9tOiAtMjBweDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBoMntcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAke2ZvbnQudGl0bGV9O1xuICAgICAgICB9XG4gICAgICAgIC50cmVle1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2FyYm9sLmpwZyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIH1cbiAgICAgICAgLnRyZWUgaDIsIC50cmVlIHB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvci5wcmltfTtcbiAgICAgICAgfVxuICAgICAgICAudHJlZSBidXR0b246aG92ZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvci5wcmltfTtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7Y29sb3IucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgLmNvbGR7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvY2FsaWRvLmpwZyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIH1cblxuICAgICAgICAuY29sZCBoMiwgLmNvbGQgcHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lUmVkLnByaW19O1xuICAgICAgICB9XG4gICAgICAgIC5jb2xkIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lUmVkLnByaW19O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZVJlZC5wcmltfTtcbiAgICAgICAgfVxuICAgICAgICAuYW5nZWx7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvYW5nZWwuanBnKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgfVxuICAgICAgICAuYW5nZWwgaDIsIC5hbmdlbCBwe1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWVCbHVlLnByaW19O1xuICAgICAgICB9XG4gICAgICAgIC5hbmdlbCBidXR0b246aG92ZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZUJsdWUucHJpbX07XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lQmx1ZS5wcmltfTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA3NjhweCl7XG4gICAgICAgICAgLm1haW57XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA4MHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZXZlbnRze1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGl7XG4gICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA3OHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaTpudGgtY2hpbGQoMil7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDk5MnB4KXtcbiAgICAgICAgICAubWFpbntcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ldmVudHN7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaXtcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpOm50aC1jaGlsZCgyKXtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/events.jsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.018158f2d5ac47c9f415.hot-update.js.map
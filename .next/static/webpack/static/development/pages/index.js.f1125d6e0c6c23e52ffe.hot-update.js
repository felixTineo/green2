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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3787777296", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]) + " " + "main",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3787777296", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]) + " " + "events",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("li", {
    "data-aos": "fade-in",
    "data-aos-delay": width > 768 ? '500' : '',
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3787777296", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]) + " " + "tree",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3787777296", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3787777296", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "siembra"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3787777296", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Regalale vida al planeta.")), __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3787777296", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "participar", __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3787777296", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]) + " " + "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }))), __jsx("li", {
    "data-aos": "fade-in",
    "data-aos-delay": width > 768 ? '1000' : '',
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3787777296", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]) + " " + "cold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3787777296", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3787777296", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "ayuda"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3787777296", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Las zonas andinas necesitan un corazon calido.")), __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3787777296", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "participar", __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3787777296", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]) + " " + "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))), __jsx("li", {
    "data-aos": "fade-in",
    "data-aos-delay": width > 768 ? '1500' : '',
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3787777296", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]) + " " + "angel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3787777296", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3787777296", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "adopta"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3787777296", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Un angel llega en cualquier forma.")), __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3787777296", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "participar", __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3787777296", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim]]]) + " " + "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3787777296",
    dynamic: [_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, _layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim],
    __self: this
  }, ".main.__jsx-style-dynamic-selector{min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:linear-gradient(rgba(0,0,0,.1),#fff);}.events.__jsx-style-dynamic-selector{list-style:none;height:100%;margin:0;padding:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}li.__jsx-style-dynamic-selector{height:80vh;width:100%;box-shadow:5px 5px 15px rgba(0,0,0,.5);position:relative;}li.__jsx-style-dynamic-selector header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:.5rem;color:#fff;}li.__jsx-style-dynamic-selector:nth-child(2){margin:2rem 0;}button.__jsx-style-dynamic-selector{font-size:1.5rem;background:transparent;border:2px solid #fff;color:#fff;position:absolute;bottom:.5rem;right:.5rem;text-transform:uppercase;-webkit-transition:250ms ease;transition:250ms ease;}.circle.__jsx-style-dynamic-selector{width:50px;height:50px;border-radius:50%;background:rgba(0,0,0,.5);}button.__jsx-style-dynamic-selector:focus{outline:none;}h2.__jsx-style-dynamic-selector{text-transform:uppercase;font-family:".concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["font"].title, ";}.tree.__jsx-style-dynamic-selector{background:url(/static/arbol.jpg);background-size:cover;background-position:bottom center;background-repeat:no-repeat;}.tree.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector,.tree.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{background:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, ";}.tree.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{background:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, ";border-color:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, ";}.cold.__jsx-style-dynamic-selector{background:url(/static/calido.jpg);background-size:cover;background-position:bottom center;background-repeat:no-repeat;}.cold.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector,.cold.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{background:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, ";}.cold.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{background:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, ";border-color:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["themeRed"].prim, ";}.angel.__jsx-style-dynamic-selector{background:url(/static/angel.jpg);background-size:cover;background-position:top center;background-repeat:no-repeat;}.angel.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector,.angel.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{background:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, ";}.angel.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{background:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, ";border-color:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["themeBlue"].prim, ";}@media(min-width:768px){.main.__jsx-style-dynamic-selector{min-height:80vh;}.events.__jsx-style-dynamic-selector{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100%;}li.__jsx-style-dynamic-selector{width:30%;height:78vh;}li.__jsx-style-dynamic-selector:nth-child(2){margin:0;}}@media(min-width:992px){.main.__jsx-style-dynamic-selector{min-height:80vh;height:80vh;}.events.__jsx-style-dynamic-selector{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100%;}li.__jsx-style-dynamic-selector{width:30%;height:100%;}li.__jsx-style-dynamic-selector:nth-child(2){margin:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ldmVudHMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDa0IsQUFHNEIsQUFNRCxBQVdKLEFBT0MsQUFPQyxBQUdHLEFBV04sQUFNRSxBQUdZLEFBSVMsQUFNTSxBQUdBLEFBSUwsQUFPSyxBQUdBLEFBSU4sQUFNTSxBQUdBLEFBS3RCLEFBR0csQUFJVCxBQUlELEFBS08sQUFJRyxBQUlULEFBSUQsU0FoQlgsQUFpQkEsQ0FyQmMsQUFpQkEsQ0E5RUYsQ0EzQkQsQ0FpQ2IsQ0FwQkEsRUF6QmMsQUE2RlosQUFnQmMsQ0FuSEQsQUFrQ1UsS0F5RXZCLEFBaUJBLENBekcwQyxBQTJCeEIsRUFRdUIsR0EvQ2hDLEFBNkdULE1BMURzQixBQTJCQSxDQWRBLEVBL0RaLEdBMkJZLEFBNkJ4QixBQUc0QyxBQVc1QyxBQUc0QyxBQVU1QyxBQUc0QyxDQS9DYixNQXRDakIsU0FrRHNCLEFBMkJILENBZEcsS0FwRGhCLEFBZ0JQLElBbUJiLENBUEEsRUFzRGdCLEFBaUJBLElBbEZJLENBYkksTUFIeEIsQ0FrRkUsQUFpQkEsQ0FwREYsQUFjQSxBQWFBLEtBUjhCLEdBM0JBLENBM0ROLEFBcUNULEFBbUNlLGFBbENoQixXQWlEZCxDQWhEMkIsRUE5QlosQUFtRGYsQ0FhQSxZQS9EZSxVQThCUyxXQWhCQyxpQkF2QjZCLHdCQXdDdEQsWUE5QndCLFlBVHhCLDRDQXVCZ0IsY0FDSCxRQWRtQixHQWVoQyxnSEFkQSIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL21haW4vZXZlbnRzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnQsIHRoZW1lQmx1ZSwgdGhlbWVSZWQgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi90aXRsZSc7XG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUoMCk7XG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBBT1MuaW5pdCgpO1xuICAgIHNldFdpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICByZXR1cm4gKCk9PiBBT1MucmVmcmVzaCgpO1xuICB9LFtdKVxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8VGl0bGUgd29yZD1cImV2ZW50b3NcIiAvPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImV2ZW50c1wiPlxuICAgICAgICA8bGkgZGF0YS1hb3M9XCJmYWRlLWluXCIgZGF0YS1hb3MtZGVsYXk9e3dpZHRoID4gNzY4ID8gJzUwMCcgOiAnJ30gY2xhc3NOYW1lPVwidHJlZVwiPlxuICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8aDI+c2llbWJyYTwvaDI+XG4gICAgICAgICAgICA8cD5SZWdhbGFsZSB2aWRhIGFsIHBsYW5ldGEuPC9wPlxuICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICBwYXJ0aWNpcGFyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBkYXRhLWFvcz1cImZhZGUtaW5cIiBkYXRhLWFvcy1kZWxheT17d2lkdGggPiA3NjggPyAnMTAwMCcgOiAnJ30gY2xhc3NOYW1lPVwiY29sZFwiPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxoMj5heXVkYTwvaDI+XG4gICAgICAgICAgPHA+TGFzIHpvbmFzIGFuZGluYXMgbmVjZXNpdGFuIHVuIGNvcmF6b24gY2FsaWRvLjwvcD5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxidXR0b24+XG4gICAgICAgICAgcGFydGljaXBhclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBkYXRhLWFvcz1cImZhZGUtaW5cIiBkYXRhLWFvcy1kZWxheT17d2lkdGggPiA3NjggPyAnMTUwMCcgOiAnJ30gY2xhc3NOYW1lPVwiYW5nZWxcIj5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8aDI+YWRvcHRhPC9oMj5cbiAgICAgICAgICA8cD5VbiBhbmdlbCBsbGVnYSBlbiBjdWFscXVpZXIgZm9ybWEuPC9wPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICBwYXJ0aWNpcGFyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAuMSksICNmZmYpO1xuICAgICAgICB9XG4gICAgICAgIC5ldmVudHN7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuICAgICAgICBsaXtcbiAgICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgLy93aWR0aDogMzAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgbGkgaGVhZGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICBsaTpudGgtY2hpbGQoMil7XG4gICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogLjVyZW07XG4gICAgICAgICAgcmlnaHQ6IC41cmVtO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgICAuY2lyY2xle1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgaDJ7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBmb250LWZhbWlseTogJHtmb250LnRpdGxlfTtcbiAgICAgICAgfVxuICAgICAgICAudHJlZXtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9hcmJvbC5qcGcpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICB9XG4gICAgICAgIC50cmVlIGgyLCAudHJlZSBwe1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3IucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgLnRyZWUgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3IucHJpbX07XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAke2NvbG9yLnByaW19O1xuICAgICAgICB9XG4gICAgICAgIC5jb2xke1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2NhbGlkby5qcGcpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbGQgaDIsIC5jb2xkIHB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZVJlZC5wcmltfTtcbiAgICAgICAgfVxuICAgICAgICAuY29sZCBidXR0b246aG92ZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZVJlZC5wcmltfTtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVSZWQucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgLmFuZ2Vse1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2FuZ2VsLmpwZyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIH1cbiAgICAgICAgLmFuZ2VsIGgyLCAuYW5nZWwgcHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lQmx1ZS5wcmltfTtcbiAgICAgICAgfVxuICAgICAgICAuYW5nZWwgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWVCbHVlLnByaW19O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUJsdWUucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpe1xuICAgICAgICAgIC5tYWlue1xuICAgICAgICAgICAgbWluLWhlaWdodDogODB2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmV2ZW50c3tcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpe1xuICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgIGhlaWdodDogNzh2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGk6bnRoLWNoaWxkKDIpe1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA5OTJweCl7XG4gICAgICAgICAgLm1haW57XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA4MHZoO1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZXZlbnRze1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGl7XG4gICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaTpudGgtY2hpbGQoMil7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXX0= */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/events.jsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.f1125d6e0c6c23e52ffe.hot-update.js.map
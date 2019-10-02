webpackHotUpdate("static/development/pages/foo.js",{

/***/ "./components/greenpost/creator.jsx":
/*!******************************************!*\
  !*** ./components/greenpost/creator.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _creator_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creator.scss */ "./components/greenpost/creator.scss");
/* harmony import */ var _creator_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_creator_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/greenpost/creator.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var GreenPost = function GreenPost() {
  return __jsx("div", {
    style: {
      backgroundImage: "url('/static/random/r16.jpg')"
    },
    className: "creator_greenpost_main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("input", {
    type: "file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })));
};

var Creator = function Creator() {
  var visible = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.greenpost.creator;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      green = _useState[0],
      setGreen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      store = _useState2[0],
      setStore = _useState2[1];

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    isOpen: visible,
    style: {
      maxWidth: '90vw'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "creator_main_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "GreenPost"), __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["ON_GREEN_CREATOR"]
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "X")), __jsx("div", {
    className: "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, green && __jsx(GreenPost, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Creator);

/***/ }),

/***/ "./pages/foo.jsx":
/*!***********************!*\
  !*** ./pages/foo.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions */ "./store/actions.js");
/* harmony import */ var _components_store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/store/store */ "./components/store/store.jsx");
/* harmony import */ var _components_store_store_cont__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/store/store-cont */ "./components/store/store-cont.jsx");
/* harmony import */ var _components_greenpost_creator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/greenpost/creator */ "./components/greenpost/creator.jsx");
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/pages/foo.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






/*const Foo = () => {
  const dispatch = useDispatch();
  const visible = useSelector(state => state.greenstore.visible);
  return(
    <div className="foo_main_cont">
      <StoreCont><Store /></StoreCont>
      <button onClick={()=> dispatch({ type: ON_STORE })} >store</button>
      {console.log(visible)}
    </div>
  )
};*/

var Foo = function Foo() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_greenpost_creator__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_2__["ON_GREEN_CREATOR"]
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "abrir"));
};

/* harmony default export */ __webpack_exports__["default"] = (Foo);

/***/ })

})
//# sourceMappingURL=foo.js.e53e8c748fa0cdd26dc7.hot-update.js.map
webpackHotUpdate("static/development/pages/perfil.js",{

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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var GreenPost = function GreenPost() {
  return __jsx("div", {
    style: {
      backgroundImg: '/static/randon/r16.jpg'
    },
    className: "creator_greenpost_main"
  }, __jsx("label", {
    htmlFor: "green"
  }, __jsx("input", {
    type: "file"
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
    }
  }, __jsx("div", {
    className: "creator_main_cont"
  }, __jsx("header", null, __jsx("p", null, "GreenPost"), __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["ON_GREEN_CREATOR"]
      });
    }
  }, "X")), __jsx("div", {
    className: "body"
  }, green && __jsx(GreenPost, null)), __jsx("footer", null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Creator);

/***/ })

})
//# sourceMappingURL=perfil.js.fc90578e49ab37031d24.hot-update.js.map
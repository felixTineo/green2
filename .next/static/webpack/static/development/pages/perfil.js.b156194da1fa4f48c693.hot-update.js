webpackHotUpdate("static/development/pages/perfil.js",{

/***/ "./components/chat/friends.jsx":
/*!*************************************!*\
  !*** ./components/chat/friends.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/space/space.jsx":
/*!************************************!*\
  !*** ./components/space/space.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _space_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./space.scss */ "./components/space/space.scss");
/* harmony import */ var _space_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_space_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav */ "./components/space/nav.jsx");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "./components/space/user.jsx");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home */ "./components/space/home.jsx");
/* harmony import */ var _wall__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wall */ "./components/space/wall.jsx");
/* harmony import */ var _chat_friends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../chat/friends */ "./components/chat/friends.jsx");
/* harmony import */ var _chat_friends__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_chat_friends__WEBPACK_IMPORTED_MODULE_7__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Space = function Space() {
  var space = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.space;
  });
  return __jsx("div", {
    className: "space_main_cont"
  }, __jsx("div", {
    className: "container-fluid"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-10 p-0 m-0"
  }, __jsx("div", {
    className: "row p-0 m-0"
  }, __jsx("div", {
    className: "col-12 p-0"
  }, __jsx(_nav__WEBPACK_IMPORTED_MODULE_3__["default"], null)), __jsx("div", {
    className: "col-3 pl-0"
  }, __jsx(_user__WEBPACK_IMPORTED_MODULE_4__["default"], null)), __jsx("div", {
    className: "col-9"
  }, space.home && __jsx(_home__WEBPACK_IMPORTED_MODULE_5__["default"], null), space.wall && __jsx(_wall__WEBPACK_IMPORTED_MODULE_6__["default"], null)))), __jsx("div", {
    className: "col-2 p-0 m-0"
  }, __jsx(_chat_friends__WEBPACK_IMPORTED_MODULE_7___default.a, null)))), "    ");
};

/* harmony default export */ __webpack_exports__["default"] = (Space);

/***/ })

})
//# sourceMappingURL=perfil.js.b156194da1fa4f48c693.hot-update.js.map
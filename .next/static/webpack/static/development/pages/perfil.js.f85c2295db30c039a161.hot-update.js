webpackHotUpdate("static/development/pages/perfil.js",{

/***/ "./components/greenpost/wish.jsx":
/*!***************************************!*\
  !*** ./components/greenpost/wish.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var _wish_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wish.scss */ "./components/greenpost/wish.scss");
/* harmony import */ var _wish_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wish_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Wish = function Wish() {
  var wish = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user.greenPost.wish;
  });
  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  user.owner = true;
  return __jsx("div", {
    className: "wish_main_cont animated fadeIn"
  }, console.log(wish), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(wish).length < 0 && __jsx("div", {
    className: "nowish_main_cont"
  }, __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_STORE"]
      });
    },
    disabled: !user.owner
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faGift"]
  }), user.owner ? __jsx("p", null, "Elige un deseo, podria concederse muy pronto.") : __jsx("p", null, user.name, " aun no a elegido un deseo"))), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(wish).length > 0 && __jsx("div", {
    className: "wish_cont shadow"
  }, __jsx("img", {
    src: wish.img,
    alt: ""
  }), __jsx("form", null, __jsx("input", {
    type: "number",
    max: "5"
  }), __jsx("button", null, "enviar")), __jsx("div", {
    className: "wish_loader_cont"
  }, __jsx("div", {
    className: "wish_loader"
  })), __jsx("footer", null, __jsx("p", null, wish.name), __jsx("p", null, "$", wish.price))));
};

/* harmony default export */ __webpack_exports__["default"] = (Wish);

/***/ })

})
//# sourceMappingURL=perfil.js.f85c2295db30c039a161.hot-update.js.map
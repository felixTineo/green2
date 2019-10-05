webpackHotUpdate("static/development/pages/perfil.js",{

/***/ "./pages/perfil.jsx":
/*!**************************!*\
  !*** ./pages/perfil.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/layout */ "./components/layout/layout.jsx");
/* harmony import */ var _components_greenpost_greenpost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/greenpost/greenpost */ "./components/greenpost/greenpost.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/actions */ "./store/actions.js");
/* harmony import */ var _components_space_space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/space/space */ "./components/space/space.jsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Perfil = function Perfil() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var user = router.query;
    if (typeof user.posts === 'string') user.posts = JSON.parse(user.posts);
    if (typeof user.greenPost === 'string') user.greenPost = JSON.parse(user.greenPost);
    if (typeof user.firstTime === 'string') user.firstTime = JSON.parse(user.firstTime);
    if (typeof user.owner === 'string') user.owner = JSON.parse(user.owner);
    if (user.firstTime && user.owner) dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["ON_POST_REGISTER"]
    });
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["ON_LOADER"],
      loader: 0
    });
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["ON_USER"],
      user: user
    });
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["ON_LOGIN"],
      option: true
    });
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["ON_GREENPOST"],
      greenpost: user.greenPost[0]
    });
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["ON_GREENINFO"]
    });
  }, [router.query]);
  return __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, console.log(router.query), __jsx(_components_greenpost_greenpost__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_components_space_space__WEBPACK_IMPORTED_MODULE_6__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Perfil);

/***/ })

})
//# sourceMappingURL=perfil.js.d8fff7e1267b2fbc3cdb.hot-update.js.map
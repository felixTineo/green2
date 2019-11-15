webpackHotUpdate("static/development/pages/perfil.js",{

/***/ "./components/space/nav.jsx":
/*!**********************************!*\
  !*** ./components/space/nav.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var _nav_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav.scss */ "./components/space/nav.scss");
/* harmony import */ var _nav_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nav_scss__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Nav = function Nav() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var space = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.space;
  });
  var onSection = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (section) {
    dispatch({
      type: section
    });
  });
  return __jsx("nav", {
    className: "spacenav_main_cont"
  }, __jsx("ul", null, __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      space_btn_active: space.home
    })
  }, __jsx("button", {
    id: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_SPACE_HOME"],
    onClick: function onClick(e) {
      return onSection(e.currentTarget.id);
    }
  }, "inicio"), __jsx("div", {
    className: "line"
  })), __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      space_btn_active: space.wall
    })
  }, __jsx("button", {
    id: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_SPACE_WALL"],
    onClick: function onClick(e) {
      return onSection(e.currentTarget.id);
    }
  }, "muro"), __jsx("div", {
    className: "line"
  })), __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      space_btn_active: space.friends
    })
  }, __jsx("button", {
    id: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_SPACE_FRIENDS"],
    onClick: function onClick(e) {
      return onSection(e.currentTarget.id);
    }
  }, "amigos"), __jsx("div", {
    className: "line"
  })), __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      space_btn_active: space.events
    })
  }, __jsx("button", {
    id: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_SPACE_EVENTS"],
    onClick: function onClick(e) {
      return onSection(e.currentTarget.id);
    }
  }, "eventos"), __jsx("div", {
    className: "line"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=perfil.js.c75516171a161ac5b5ff.hot-update.js.map
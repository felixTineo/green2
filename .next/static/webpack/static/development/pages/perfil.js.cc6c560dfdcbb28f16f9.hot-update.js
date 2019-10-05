webpackHotUpdate("static/development/pages/perfil.js",{

/***/ "./components/greenpost/greenpost.jsx":
/*!********************************************!*\
  !*** ./components/greenpost/greenpost.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _greenpost_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./greenpost.scss */ "./components/greenpost/greenpost.scss");
/* harmony import */ var _greenpost_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_greenpost_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home */ "./components/greenpost/home.jsx");
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./creator */ "./components/greenpost/creator.jsx");
/* harmony import */ var _wish__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wish */ "./components/greenpost/wish.jsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











var GreenNav = function GreenNav(_ref) {
  var setVisible = _ref.setVisible;
  return __jsx("nav", {
    className: "greennav_main_cont"
  }, __jsx("ul", null, __jsx("li", null, __jsx("button", {
    onClick: function onClick() {
      return setVisible({
        home: true,
        wish: false
      });
    },
    title: "Inicio"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faHome"]
  }))), __jsx("li", null, __jsx("button", {
    title: "Reaccionar"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faHeart"]
  }))), __jsx("li", null, __jsx("button", {
    onClick: function onClick() {
      return setVisible({
        home: false,
        wish: true
      });
    },
    title: "Ver Deseo"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGift"]
  }))), __jsx("li", null, __jsx("button", {
    title: "Comentar"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faComment"]
  }))), __jsx("li", null, __jsx("button", {
    title: "Compartir en mi perfil"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faShare"]
  }))), __jsx("li", null, __jsx("button", {
    title: "Abrir en pantala completa"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faExpandArrowsAlt"]
  })))));
};

var GreenInfo = function GreenInfo() {
  var info = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.greenpost.info;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(function (state, next) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, next);
  }, {
    home: true,
    wish: false
  }),
      visible = _useReducer[0],
      setVisible = _useReducer[1];

  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()({
      greeninfo_main_cont: true,
      greeninfo_main_cont_visible: info
    })
  }, __jsx("div", {
    className: "section_main_cont"
  }, visible.home && __jsx(_home__WEBPACK_IMPORTED_MODULE_8__["default"], null), visible.wish && __jsx(_wish__WEBPACK_IMPORTED_MODULE_10__["default"], null)), __jsx("footer", null, __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["ON_GREEN_CREATOR"]
      });
    },
    title: "Crear Post"
  }, "GreenPost"), __jsx(GreenNav, {
    setVisible: setVisible
  })));
};

var BtnInfo = function BtnInfo() {
  var info = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.greenpost.info;
  });
  var green = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.greenpost;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  return __jsx("button", {
    title: info ? "Ocultar" : "Ver",
    onClick: function onClick() {
      return dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["ON_GREENINFO"]
      });
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()({
      btngreen_info: true,
      btngreen_info_rotate: info
    })
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faArrowCircleLeft"]
  }));
};

var GreenPost = function GreenPost() {
  var green = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.greenpost.current;
  });
  var img = green.img;
  return __jsx("div", {
    style: {
      backgroundImage: "url(".concat(img, ")")
    },
    className: "greenpost_main_cont"
  }, __jsx(_creator__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx(GreenInfo, null), __jsx(BtnInfo, null));
};

/* harmony default export */ __webpack_exports__["default"] = (GreenPost);

/***/ })

})
//# sourceMappingURL=perfil.js.cc6c560dfdcbb28f16f9.hot-update.js.map
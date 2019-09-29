webpackHotUpdate("static/development/pages/perfil.js",{

/***/ "./components/greenpost/creator.jsx":
/*!******************************************!*\
  !*** ./components/greenpost/creator.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/greenpost/greenpost.jsx":
/*!********************************************!*\
  !*** ./components/greenpost/greenpost.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _greenpost_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./greenpost.scss */ "./components/greenpost/greenpost.scss");
/* harmony import */ var _greenpost_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_greenpost_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home */ "./components/greenpost/home.jsx");
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./creator */ "./components/greenpost/creator.jsx");
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_creator__WEBPACK_IMPORTED_MODULE_8__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var GreenNav = function GreenNav() {
  return __jsx("nav", {
    className: "greennav_main_cont"
  }, __jsx("ul", null, __jsx("li", null, __jsx("button", {
    title: "Inicio"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faHome"]
  }))), __jsx("li", null, __jsx("button", {
    title: "Reaccionar"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faHeart"]
  }))), __jsx("li", null, __jsx("button", {
    title: "Ver Deseo"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faGift"]
  }))), __jsx("li", null, __jsx("button", {
    title: "Comentar"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faComment"]
  }))), __jsx("li", null, __jsx("button", {
    title: "Compartir en mi perfil"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faShare"]
  }))), __jsx("li", null, __jsx("button", {
    title: "Abrir en pantala completa"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faExpandArrowsAlt"]
  })))));
};

var GreenInfo = function GreenInfo() {
  var info = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.greenpost.info;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
      greeninfo_main_cont: true,
      greeninfo_main_cont_visible: info
    })
  }, __jsx("div", {
    className: "section_main_cont"
  }, __jsx(_home__WEBPACK_IMPORTED_MODULE_7__["default"], null)), __jsx("footer", null, __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["ON_GREEN_CREATOR"]
      });
    },
    title: "Crear Post"
  }, "GreenPost"), __jsx(GreenNav, null)));
};

var BtnInfo = function BtnInfo() {
  var info = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.greenpost.info;
  });
  var green = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.greenpost;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  return __jsx("button", {
    title: info ? "Ocultar" : "Ver",
    onClick: function onClick() {
      return dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["ON_GREENINFO"]
      });
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
      btngreen_info: true,
      btngreen_info_rotate: info
    })
  }, console.log(green), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faArrowCircleLeft"]
  }));
};

var GreenPost = function GreenPost() {
  var green = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user.greenPost;
  });
  var img = green.img;
  return __jsx("div", {
    style: {
      backgroundImage: "url(".concat(img, ")")
    },
    className: "greenpost_main_cont"
  }, __jsx(_creator__WEBPACK_IMPORTED_MODULE_8___default.a, null), __jsx(GreenInfo, null), __jsx(BtnInfo, null));
};

/* harmony default export */ __webpack_exports__["default"] = (GreenPost);

/***/ })

})
//# sourceMappingURL=perfil.js.19191116767c01e53814.hot-update.js.map
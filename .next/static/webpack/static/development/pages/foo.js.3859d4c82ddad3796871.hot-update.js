webpackHotUpdate("static/development/pages/foo.js",{

/***/ "./components/greenpost/creator.jsx":
/*!******************************************!*\
  !*** ./components/greenpost/creator.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _creator_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./creator.scss */ "./components/greenpost/creator.scss");
/* harmony import */ var _creator_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_creator_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/store */ "./components/store/store.jsx");


var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/greenpost/creator.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var GreenPost = function GreenPost(_ref) {
  var img = _ref.img,
      setImg = _ref.setImg,
      onImg = _ref.onImg,
      historyVisible = _ref.historyVisible,
      setHistoryVisible = _ref.setHistoryVisible,
      onSubmit = _ref.onSubmit,
      history = _ref.history,
      setHistory = _ref.setHistory;
  return __jsx("div", {
    style: {
      backgroundImage: "url(".concat(img, ")")
    },
    className: "creator_greenpost_main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("input", {
    id: "green",
    name: "green",
    onChange: onImg,
    type: "file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faCamera"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("div", {
    className: "history_main_cont",
    style: {
      transform: historyVisible ? 'translateX(0)' : 'translateX(100%)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Agrega una historia")), __jsx("textarea", {
    onChange: function onChange(e) {
      return setHistory(e.currentTarget.value);
    },
    value: history,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("button", {
    onClick: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "crear"))), __jsx("button", {
    onClick: function onClick() {
      return setHistoryVisible(!history);
    },
    title: "Agregar historia",
    style: {
      transform: history ? 'rotate(180deg)' : null
    },
    className: "arrow_history",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faArrowCircleLeft"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })));
};

var Creator = function Creator() {
  var _jsx;

  var visible = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.greenpost.creator;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(function (state, next) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, next);
  }, {
    green: true,
    store: false
  }),
      section = _useReducer[0],
      setSection = _useReducer[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      historyVisible = _useState[0],
      setHistoryVisible = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      store = _useState2[0],
      setStore = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('/static/random/r16.jpg'),
      img = _useState3[0],
      setImg = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      history = _useState4[0],
      setHistory = _useState4[1];

  var onImg = function onImg(e) {
    var img = e.target.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      if (reader.result) {
        setImg(reader.result);
        setHistoryVisible(true);
      } else {
        setImg('/static/random/r16.jpg');
      }
    };

    reader.readAsDataURL(img);
  };

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    isOpen: visible,
    style: {
      maxWidth: '90vw'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: "creator_main_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "GreenPost"), __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_6__["ON_GREEN_CREATOR"]
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "X")), __jsx("div", {
    className: "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, section.green && __jsx(GreenPost, (_jsx = {
    onImg: onImg,
    img: img,
    setImg: setImg,
    history: historyVisible,
    setHistory: setHistoryVisible
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "history", history), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "setHistory", setHistory), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 65
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx)), section.store && __jsx(_store_store__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Creator);

/***/ })

})
//# sourceMappingURL=foo.js.3859d4c82ddad3796871.hot-update.js.map
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
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/greenpost/creator.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var GreenPost = function GreenPost(_ref) {
  var img = _ref.img,
      setImg = _ref.setImg,
      onImg = _ref.onImg;
  return __jsx("div", {
    style: {
      backgroundImage: "url(".concat(img, ")")
    },
    className: "creator_greenpost_main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("input", {
    id: "green",
    name: "green",
    onChange: onImg,
    type: "file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCamera"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('/static/random/r16.jpg'),
      img = _useState3[0],
      setImg = _useState3[1];

  var onImg = function onImg(e) {
    var img = e.target.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      if (reader.result) {
        setImg(reader.result);
      } else {
        setImg('/static/random/r16.jpg');
      }
    };

    reader.readAsDataURL(img);
  };

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    isOpen: visible,
    style: {
      maxWidth: '90vw'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "creator_main_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
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
      lineNumber: 44
    },
    __self: this
  }, "X")), __jsx("div", {
    className: "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, green && __jsx(GreenPost, {
    onImg: onImg,
    img: img,
    setImg: setImg,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), __jsx("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Creator);

/***/ })

})
//# sourceMappingURL=foo.js.09bc5daac700a64baf62.hot-update.js.map
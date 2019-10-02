module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/greenpost/creator.jsx":
/*!******************************************!*\
  !*** ./components/greenpost/creator.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _creator_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creator.scss */ "./components/greenpost/creator.scss");
/* harmony import */ var _creator_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_creator_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/store */ "./components/store/store.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/greenpost/creator.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










const GreenPost = ({
  img,
  setImg,
  onImg,
  historyVisible,
  setHistoryVisible,
  onSubmit,
  history,
  setHistory
}) => {
  return __jsx("div", {
    style: {
      backgroundImage: `url(${img})`
    },
    className: "creator_greenpost_main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("input", {
    id: "green",
    name: "green",
    onChange: onImg,
    type: "file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faCamera"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })), __jsx("div", {
    className: "history_main_cont",
    style: {
      transform: historyVisible ? 'translateX(0)' : 'translateX(100%)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("div", {
    className: "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Agrega una historia")), __jsx("textarea", {
    onChange: e => setHistory(e.currentTarget.value),
    value: history,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })), __jsx("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("button", {
    onClick: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "crear"))), __jsx("button", {
    onClick: () => setHistoryVisible(!historyVisible),
    title: "Agregar historia",
    style: {
      transform: historyVisible ? 'rotate(180deg)' : null
    },
    className: "arrow_history",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faArrowCircleLeft"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  })));
};

const Creator = () => {
  const visible = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.greenpost.creator);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const {
    0: section,
    1: setSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])((state, next) => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, next), {
    green: true,
    store: false
  });
  const {
    0: historyVisible,
    1: setHistoryVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: store,
    1: setStore
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: img,
    1: setImg
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('/static/random/r16.jpg');
  const {
    0: history,
    1: setHistory
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const onImg = e => {
    const img = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      if (reader.result) {
        setImg(reader.result);
        setHistoryVisible(true);
      } else {
        setImg('/static/random/r16.jpg');
      }
    };

    reader.readAsDataURL(img);
  };

  const onSubmit = async () => {
    try {
      const data = {
        history,
        img
      };
      await axios__WEBPACK_IMPORTED_MODULE_9___default.a.post('/post/greenpost', data);
    } catch (err) {
      console.log(err);
    }
  };

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    isOpen: visible,
    style: {
      maxWidth: '90vw'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx("div", {
    className: "creator_main_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "GreenPost"), __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["ON_GREEN_CREATOR"]
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "X")), __jsx("div", {
    className: "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, section.green && __jsx(GreenPost, {
    onImg: onImg,
    img: img,
    setImg: setImg,
    historyVisible: historyVisible,
    setHistoryVisible: setHistoryVisible,
    history: history,
    setHistory: setHistory,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }), section.store && __jsx(_store_store__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Creator);

/***/ }),

/***/ "./components/greenpost/creator.scss":
/*!*******************************************!*\
  !*** ./components/greenpost/creator.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/store/store-cont.jsx":
/*!*****************************************!*\
  !*** ./components/store/store-cont.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var _store_cont_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store-cont.scss */ "./components/store/store-cont.scss");
/* harmony import */ var _store_cont_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_store_cont_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/store/store-cont.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const StoreCont = ({
  children
}) => {
  const visible = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.greenstore.visible);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    isOpen: visible,
    style: {
      maxWidth: '95vw'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("div", {
    className: "storecont_main_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].HOME
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "inicio"), __jsx("div", {
    className: "storesearch_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("input", {
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSearch"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }))), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }))), __jsx("button", {
    title: "cerrar",
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_2__["ON_STORE"]
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "X")), children));
};

/* harmony default export */ __webpack_exports__["default"] = (StoreCont);

/***/ }),

/***/ "./components/store/store-cont.scss":
/*!******************************************!*\
  !*** ./components/store/store-cont.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/store/store.jsx":
/*!************************************!*\
  !*** ./components/store/store.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var _store_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store.scss */ "./components/store/store.scss");
/* harmony import */ var _store_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_store_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _test_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../test/products */ "./test/products.js");
/* harmony import */ var _test_products__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_test_products__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid/v1 */ "uuid/v1");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/store/store.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Home = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  return __jsx("div", {
    className: "storehome_main_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("div", {
    className: "cont_left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].MUSIC
    }),
    id: "music",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("img", {
    src: "/static/store/ms.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "musica"))), __jsx("div", {
    className: "cont_right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].CANDY
    }),
    id: "candy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("img", {
    src: "/static/store/gol.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "golosinas")), __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].JEWEL
    }),
    className: "four",
    id: "jewel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("img", {
    src: "/static/store/bis.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "bisuteria")), __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].TOY
    }),
    className: "four",
    id: "toy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("img", {
    src: "/static/store/ty.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "juguetes")), __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].EBOOK
    }),
    className: "four",
    id: "ebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("img", {
    src: "/static/store/eb.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "ebook's")), __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].TV
    }),
    className: "four",
    id: "tv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("img", {
    src: "static/store/tv.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "tv's"))));
};

const Category = ({
  tag
}) => {
  const items = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.greenstore.items);
  const products = items.filter(product => product.tag === tag);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  const onProduct = e => {
    const product = products.find(product => product.id === e.target.id);
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].PRODUCT,
      product
    });
  };

  return __jsx("div", {
    className: "category_main_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, products.map(product => __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("button", {
    onClick: onProduct,
    id: product.id,
    className: "shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("img", {
    id: product.id,
    src: product.img,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), __jsx("footer", {
    id: product.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("p", {
    id: product.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, product.name), __jsx("p", {
    id: product.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "$", product.price)))))));
};

const Product = () => {
  const product = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.greenstore.current);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const owner = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user.owner);
  return __jsx("div", {
    className: "product_main_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-12 col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("div", {
    className: "img_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx("img", {
    src: product.img,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }))), __jsx("div", {
    className: "col-12 col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx("div", {
    className: "description_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, product.name), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, "precio: $", product.price), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, product.description)), __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, __jsx("textarea", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }), __jsx("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx("button", {
    onClick: () => dispatch({
      type: product.tag
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, "atr\xE1s"), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, owner ? 'agregar' : 'enviar'))))));
};

const Store = () => {
  const store = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.greenstore);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  const onProducts = async () => {
    try {
      //const res = await axios.get('/products');
      //dispatch({ type: ON_PRODUCTS, products: res.data });
      dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_2__["ON_PRODUCTS"],
        products: (_test_products__WEBPACK_IMPORTED_MODULE_4___default())
      });
    } catch (err) {
      console.log(err);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    onProducts();
  }, []);
  return __jsx("div", {
    className: "store_main_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, store.home && __jsx(Home, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }), store.music && __jsx(Category, {
    tag: _store_actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].MUSIC,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }), store.candy && __jsx(Category, {
    tag: _store_actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].CANDY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }), store.jewel && __jsx(Category, {
    tag: _store_actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].JEWEL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }), store.toy && __jsx(Category, {
    tag: _store_actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].TOY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }), store.ebook && __jsx(Category, {
    tag: _store_actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].EBOOK,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }), store.tv && __jsx(Category, {
    tag: _store_actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].TV,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }), store.product && __jsx(Product, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ }),

/***/ "./components/store/store.scss":
/*!*************************************!*\
  !*** ./components/store/store.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./pages/foo.jsx":
/*!***********************!*\
  !*** ./pages/foo.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
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

const Foo = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_greenpost_creator__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_2__["ON_GREEN_CREATOR"]
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "abrir"));
};

/* harmony default export */ __webpack_exports__["default"] = (Foo);

/***/ }),

/***/ "./store/actions.js":
/*!**************************!*\
  !*** ./store/actions.js ***!
  \**************************/
/*! exports provided: ON_DOWN, ON_NOTIFICATIONS, ON_VIEW_NAV, ON_NOTE, ON_LOADER, ON_LOGIN, navView, ON_USER, ON_STORE, ON_PRODUCTS, storeSections, ON_GREENINFO, ON_GREEN_CREATOR, onStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_DOWN", function() { return ON_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_NOTIFICATIONS", function() { return ON_NOTIFICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_VIEW_NAV", function() { return ON_VIEW_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_NOTE", function() { return ON_NOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_LOADER", function() { return ON_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_LOGIN", function() { return ON_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navView", function() { return navView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_USER", function() { return ON_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_STORE", function() { return ON_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_PRODUCTS", function() { return ON_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeSections", function() { return storeSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_GREENINFO", function() { return ON_GREENINFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_GREEN_CREATOR", function() { return ON_GREEN_CREATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStore", function() { return onStore; });
/***********************
NAV
************************/
const ON_DOWN = 'ON_DOWN';
const ON_NOTIFICATIONS = 'ON_NOTIFICATIONS';
const ON_VIEW_NAV = 'ON_VIEW_NAV';
const ON_NOTE = 'ON_NOTE';
const ON_LOADER = 'ON_LOADER';
const ON_LOGIN = 'ON_LOGIN';
const navView = {
  GIFT: 'GIFT',
  NOTES: 'NOTES',
  FRIEND: 'FRIEND'
};
/***********************
USER
************************/

const ON_USER = 'ON_USER';
/************************
STORE
*************************/

const ON_STORE = 'ON_STORE';
const ON_PRODUCTS = 'ON_PRODUCTS';
const storeSections = {
  PRODUCT: 'PRODUCT',
  HOME: 'HOME',
  MUSIC: 'MUSIC',
  JEWEL: 'JEWEL',
  TV: 'TV',
  TOY: 'TOY',
  CANDY: 'CANDY',
  EBOOK: 'EBOOK'
};
/************************
GREENPOST
*************************/

const ON_GREENINFO = 'ON_GREENINFO';
const ON_GREEN_CREATOR = 'ON_GREEN_CREATOR';
const onStore = () => null;

/***/ }),

/***/ "./test/products.js":
/*!**************************!*\
  !*** ./test/products.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const uuid = __webpack_require__(/*! uuid/v1 */ "uuid/v1");

const products = [{
  id: uuid(),
  name: '',
  price: 0,
  tag: '',
  img: '/static/store/products/',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'pulsera de perlas',
  price: 100,
  tag: 'JEWEL',
  img: '/static/store/products/bis-1.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'pulsera reloj',
  price: 150,
  tag: 'JEWEL',
  img: '/static/store/products/bis-2.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'pulsera de perlas negras',
  price: 200,
  tag: 'JEWEL',
  img: '/static/store/products/bis-3.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'pulsera de plata con perlas',
  price: 250,
  tag: 'JEWEL',
  img: '/static/store/products/bis-4.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'pulsera de oro y rubi',
  price: 300,
  tag: 'JEWEL',
  img: '/static/store/products/bis-5.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'pulsera de oro y rubis',
  price: 350,
  tag: 'JEWEL',
  img: '/static/store/products/bis-6.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'pablo neruda, poemas',
  price: 20,
  tag: 'EBOOK',
  img: '/static/store/products/eb-1.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'once minutos',
  price: 25,
  tag: 'EBOOK',
  img: '/static/store/products/eb-2.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'la culpa es de la vaca',
  price: 15,
  tag: 'EBOOK',
  img: '/static/store/products/eb-3.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'adulterio',
  price: 25,
  tag: 'EBOOK',
  img: '/static/store/products/eb-4.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: '100 años de soledad',
  price: 40,
  tag: 'EBOOK',
  img: '/static/store/products/eb-5.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'dracula',
  price: 30,
  tag: 'EBOOK',
  img: '/static/store/products/eb-6.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'oreo',
  price: 5,
  tag: 'CANDY',
  img: '/static/store/products/gol-1.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'sabmba',
  price: 15,
  tag: 'CANDY',
  img: '/static/store/products/gol-2.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'suzy',
  price: 10,
  tag: 'CANDY',
  img: '/static/store/products/gol-3.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'cocosette',
  price: 10,
  tag: 'CANDY',
  img: '/static/store/products/gol-4.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'caramelos duros',
  price: 5,
  tag: 'CANDY',
  img: '/static/store/products/gol-5.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'helado',
  price: 25,
  tag: 'CANDY',
  img: '/static/store/products/gol-6.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'aoki',
  price: 50,
  tag: 'MUSIC',
  img: '/static/store/products/ms-1.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'marc anthony',
  price: 20,
  tag: 'MUSIC',
  img: '/static/store/products/ms-2.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'mana',
  price: 30,
  tag: 'MUSIC',
  img: '/static/store/products/ms-3.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'maluma',
  price: 1,
  tag: 'MUSIC',
  img: '/static/store/products/ms-4.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'david guetta',
  price: 50,
  tag: 'MUSIC',
  img: '/static/store/products/ms-5.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'netflix',
  price: 30,
  tag: 'TV',
  img: '/static/store/products/tv-1.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'amazon GO',
  price: 30,
  tag: 'TV',
  img: '/static/store/products/tv-2.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'HBO',
  price: 30,
  tag: 'TV',
  img: '/static/store/products/tv-3.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'oso tedy',
  price: 30,
  tag: 'TOY',
  img: '/static/store/products/ty-1.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'cara de papa',
  price: 40,
  tag: 'TOY',
  img: '/static/store/products/ty-2.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'finger spinner',
  price: 30,
  tag: 'TOY',
  img: '/static/store/products/ty-3.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'oso hipster',
  price: 30,
  tag: 'TOY',
  img: '/static/store/products/ty-4.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'toy story 4',
  price: 30,
  tag: 'TOY',
  img: '/static/store/products/ty-5.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}];
module.exports = products;

/***/ }),

/***/ 5:
/*!*****************************!*\
  !*** multi ./pages/foo.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/felix/Documentos/projects/greenlink/pages/foo.jsx */"./pages/foo.jsx");


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "uuid/v1":
/*!**************************!*\
  !*** external "uuid/v1" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v1");

/***/ })

/******/ });
//# sourceMappingURL=foo.js.map
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dIuJ");


/***/ }),

/***/ "489e":
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "4vPi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("qzSc");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Main = ({
  children,
  post
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  return __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_3__[/* ON_POST_VIEW */ "y"],
      post
    }),
    className: "jsx-3354141160"
  }, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3354141160"
  }, ["button.jsx-3354141160{background:transparent;border:none;}", "button.jsx-3354141160:focus{outline;}"]));
};

/* harmony default export */ __webpack_exports__["a"] = (Main);

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "9Ok7":
/***/ (function(module, exports) {



/***/ }),

/***/ "ADPJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("qzSc");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layout_var__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("uTi6");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const Confirm = () => {
  const confirmation = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.confirm);
  const {
    onConfirm,
    msg1,
    msg2
  } = confirmation.current;
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  const onNext = () => {
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_3__[/* ON_CONFIRM */ "h"],
      current: {}
    });
    onConfirm();
  };

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    isOpen: confirmation.visible
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["736367645", [_layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].light]]]) + " " + "main"
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["736367645", [_layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].light]]])
  }, __jsx("button", {
    title: "Cancelar",
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_3__[/* ON_CONFIRM */ "h"],
      current: {}
    }),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["736367645", [_layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].light]]])
  }, "X")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["736367645", [_layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].light]]]) + " " + "body"
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["736367645", [_layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].light]]])
  }, msg1), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["736367645", [_layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].light]]])
  }, msg2), __jsx("button", {
    onClick: onNext,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["736367645", [_layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].light]]])
  }, "Aceptar")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "736367645",
    dynamic: [_layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].light]
  }, ["div.main.__jsx-style-dynamic-selector{height:25vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", "button.__jsx-style-dynamic-selector{-webkit-transition:250ms ease;transition:250ms ease;}", "button.__jsx-style-dynamic-selector:focus{outline:none;}", `header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;background:${_layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim};border-radius:3px;}`, `header.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{background:transparent;border:none;color:${_layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].light};}`, ".body.__jsx-style-dynamic-selector{padding:.5rem;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", `.body.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;color:${_layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark};width:80%;text-align:center;}`, `.body.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{border:1px solid ${_layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim};color:${_layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim};background:transparent;margin-top:1rem;}`, `.body.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{background:${_layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim};color:${_layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].light};}`])));
};

/* harmony default export */ __webpack_exports__["a"] = (Confirm);

/***/ }),

/***/ "CUYq":
/***/ (function(module, exports) {

module.exports = require("uuid/v1");

/***/ }),

/***/ "Cg2A":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("y6vh");

/***/ }),

/***/ "DZ85":
/***/ (function(module, exports, __webpack_require__) {

var _Date$now = __webpack_require__("Cg2A");

const uuid = __webpack_require__("CUYq");

const rdn = num => Math.floor(Math.random() * num + 1);

const createPosts = num => {
  let i = 0;
  const posts = [];

  while (i < num) {
    const author = {
      _id: uuid(),
      name: `User-${rdn(7)}`,
      lastName: 'Green',
      perfilImg: `/static/persons/person-${rdn(7)}.jpg`,
      url: `/perfil/${uuid()}`
    };
    const post = {
      author,
      date: _Date$now(),
      img: `/static/random/r${rdn(16)}.jpg`,
      title: `post-${rdn(16)}`,
      subTitle: `sub-posts-${rdn(16)}`,
      history: `post-${rdn(16)}`,
      comments: [],
      likes: Array(rdn(30)).fill(0)
    };
    posts.unshift(post);
    i++;
  }

  return posts;
};

const posts = createPosts(16);
const greenposts = createPosts(10);
console.log(posts);
module.exports = {
  posts,
  greenposts
};

/***/ }),

/***/ "DsJc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("qzSc");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const MyLink = ({
  url,
  children,
  callback
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  const onLink = async () => {
    let loader = 0;
    const interval = setInterval(() => {
      loader += 15;
      dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_3__[/* ON_LOADER */ "q"],
        loader
      });
    }, 1000);

    if (loader >= 75) {
      dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_3__[/* ON_LOADER */ "q"],
        loader: 97
      });
      clearInterval(interval);
    }

    try {
      clearInterval(interval);
      callback();
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push(url);
      dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_3__[/* ON_LOADER */ "q"],
        loader: 100
      });
    } catch (err) {
      console.log(err);
      clearInterval(interval);
    }
  };

  return __jsx("button", {
    onClick: onLink,
    type: "button",
    className: "jsx-2059577519"
  }, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2059577519"
  }, ["button.jsx-2059577519{background:transparent;border:none;padding:0;margin:0;outline:none;}", "button.jsx-2059577519:focus{outline:none;}"]));
};

/* harmony default export */ __webpack_exports__["a"] = (MyLink);

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "KiU5":
/***/ (function(module, exports) {



/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "P5f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "PW+0":
/***/ (function(module, exports) {



/***/ }),

/***/ "R/PV":
/***/ (function(module, exports) {



/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "T4W4":
/***/ (function(module, exports) {



/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Vssk":
/***/ (function(module, exports, __webpack_require__) {

const uuid = __webpack_require__("CUYq");

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

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "ZTmz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/layout/logo.jsx
var logo = __webpack_require__("b9Vz");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./components/layout/header.scss
var header = __webpack_require__("PW+0");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./store/actions.js
var actions = __webpack_require__("qzSc");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: external "uuid/v1"
var v1_ = __webpack_require__("CUYq");
var v1_default = /*#__PURE__*/__webpack_require__.n(v1_);

// EXTERNAL MODULE: external "socket.io-client"
var external_socket_io_client_ = __webpack_require__("pI2v");
var external_socket_io_client_default = /*#__PURE__*/__webpack_require__.n(external_socket_io_client_);

// EXTERNAL MODULE: ./components/mylink/link.jsx
var mylink_link = __webpack_require__("DsJc");

// CONCATENATED MODULE: ./components/layout/header.jsx

var __jsx = external_react_default.a.createElement;















const DownBar = () => {
  const {
    0: down,
    1: setDown
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    window.onscroll = () => {
      if (window.scrollY > 30) {
        setDown(true);
      } else {
        setDown(false);
      }
    };
  }, []);
  const {
    0: sm,
    1: setSm
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    if (window.innerWidth < 576) {
      setSm(true);
    }
  }, []);
  return __jsx("div", {
    className: "down_bar",
    style: {
      height: 40
      /*down || sm ? 40 : 0*/

    }
  });
};

const SearchBar = () => {
  const {
    0: suggest,
    1: setSuggest
  } = Object(external_react_["useState"])([]);
  const {
    0: visible,
    1: setVisible
  } = Object(external_react_["useState"])(false);

  const onSuggest = async e => {
    const value = e.target.value;

    if (value) {
      value.toLocaleLowerCase();
      const res = await external_axios_default.a.get(`/user/search/${value}`);

      if (res.data) {
        console.log(res.data);
        setVisible(true);
        setSuggest(res.data);
      }
    } else {
      setVisible(false);
      setSuggest([]);
    }
  };

  return __jsx("div", {
    className: "searchbar_main_cont"
  }, __jsx("div", {
    className: "search_cont"
  }, __jsx("input", {
    onChange: onSuggest,
    type: "text"
  }), __jsx("p", null, __jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faSearch"]
  }))), visible && __jsx("ul", {
    style: {
      padding: suggest.length > 0 ? '.2rem' : '0'
    },
    className: "sugesstlist"
  }, suggest.map(item => __jsx("li", {
    key: v1_default()()
  }, __jsx(mylink_link["a" /* default */], {
    url: item.url,
    callback: setVisible
  }, __jsx("div", {
    className: "user_search_cont"
  }, __jsx("img", {
    src: item.perfilImg,
    alt: ""
  }), __jsx("p", null, item.fullName)))))));
};

const Gift = () => {
  const gifts = Object(external_react_redux_["useSelector"])(state => state.nav.notifications.gifts);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const onView = Object(external_react_["useCallback"])(() => {
    dispatch({
      type: actions["L" /* ON_VIEW_NAV */],
      note: actions["Q" /* navView */].GIFT
    });
    dispatch({
      type: actions["I" /* ON_VAULT */]
    });
  });
  return __jsx("div", {
    className: "btnicon_cont"
  }, __jsx("button", {
    id: "gift",
    onClick: onView,
    style: !gifts.view && gifts.items.length > 0 ? {
      background: "#fff",
      color: "#ff6c1a"
    } : {
      background: "transparent",
      color: "#fff"
    },
    className: "btnicon_nav"
  }, __jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faGift"]
  })), __jsx("span", {
    style: !gifts.view && gifts.items.length > 0 ? {
      color: "#ff6c1a"
    } : {
      color: "#fff"
    }
  }, "+", gifts.items.length));
};

const Note = () => {
  const notes = Object(external_react_redux_["useSelector"])(state => state.nav.notifications.notes);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const onView = Object(external_react_["useCallback"])(() => {
    dispatch({
      type: actions["L" /* ON_VIEW_NAV */],
      note: actions["Q" /* navView */].NOTES
    });
  });
  const {
    0: pop,
    1: setPop
  } = Object(external_react_["useState"])(false);

  const handleView = () => {
    onView();
    setPop(!pop);
  };

  const handleViewOut = () => {
    setPop(false);
  };

  return __jsx("div", {
    className: "jsx-1160065305" + " " + "btnicon_cont"
  }, __jsx("button", {
    id: "note",
    onClick: handleView,
    style: !notes.view && notes.items.length > 0 ? {
      background: "#fff",
      color: "#ff6c1a"
    } : {
      background: "transparent",
      color: "#fff"
    },
    className: "jsx-1160065305" + " " + "btnicon_nav"
  }, __jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faBell"]
  })), __jsx("span", {
    style: !notes.view && notes.items.length > 0 ? {
      color: "#ff6c1a"
    } : {
      color: "#fff"
    },
    className: "jsx-1160065305"
  }, "+", notes.items.length), __jsx(external_reactstrap_["Popover"], {
    target: "note",
    isOpen: pop,
    placement: "bottom"
  }, __jsx(external_reactstrap_["PopoverBody"], null, __jsx("ul", {
    onClick: handleViewOut,
    onMouseLeave: handleViewOut,
    className: "jsx-1160065305"
  }, notes.items.map(item => __jsx("li", {
    key: v1_default()(),
    className: "jsx-1160065305"
  }, __jsx(mylink_link["a" /* default */], {
    url: item.url
  }, __jsx("div", {
    className: "jsx-1160065305" + " " + "friend_cont"
  }, __jsx("img", {
    src: item.perfilImg,
    alt: "",
    className: "jsx-1160065305"
  }), __jsx("p", {
    className: "jsx-1160065305"
  }, __jsx("strong", {
    className: "jsx-1160065305"
  }, `${item.name} ${item.lastName}`), __jsx("small", {
    className: "jsx-1160065305"
  }, item.action === 'LIKE' ? 'le gusta uno de tus posts' : item.action === 'ACCEPT' ? 'Acepto tu solicitud de amistad' : 'comento uno de tus posts'))))))))), __jsx(style_default.a, {
    id: "1160065305"
  }, ["ul.jsx-1160065305{list-style:none;margin:0;padding:0;}", ".friend_cont.jsx-1160065305{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:250ms ease;transition:250ms ease;}", ".friend_cont.jsx-1160065305 p.jsx-1160065305{margin:0;margin-left:.5rem;text-transform:capitalize;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}", ".friend_cont.jsx-1160065305 p.jsx-1160065305 strong.jsx-1160065305:hover{-webkit-text-decoration:underline;text-decoration:underline;color:#8bb940;}", ".friend_cont.jsx-1160065305 img.jsx-1160065305{width:40px;height:40px;object-fit:cover;object-position:center;border-radius:50%;}"]));
};

const Friend = () => {
  const friend = Object(external_react_redux_["useSelector"])(state => state.nav.notifications.friendReq);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const onView = Object(external_react_["useCallback"])(() => {
    dispatch({
      type: actions["L" /* ON_VIEW_NAV */],
      note: actions["Q" /* navView */].FRIEND
    });
  });
  const {
    0: pop,
    1: setPop
  } = Object(external_react_["useState"])(false);

  const handleView = () => {
    onView();
    setPop(!pop);
  };

  const handleViewOut = () => {
    setPop(false);
  };

  return __jsx("div", {
    className: "jsx-1415226531" + " " + "btnicon_cont"
  }, __jsx("button", {
    id: "friend",
    onClick: handleView,
    style: !friend.view && friend.items.length > 0 ? {
      background: "#fff",
      color: "#ff6c1a"
    } : {
      background: "transparent",
      color: "#fff"
    },
    className: "jsx-1415226531" + " " + "btnicon_nav"
  }, __jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faUser"]
  })), __jsx("span", {
    style: !friend.view && friend.items.length > 0 ? {
      color: "#ff6c1a"
    } : {
      color: "#fff"
    },
    className: "jsx-1415226531"
  }, "+", friend.items.length), __jsx(external_reactstrap_["Popover"], {
    target: "friend",
    isOpen: pop,
    placement: "bottom"
  }, __jsx(external_reactstrap_["PopoverBody"], null, __jsx("ul", {
    onMouseLeave: handleViewOut,
    className: "jsx-1415226531"
  }, friend.items.map(item => __jsx("li", {
    key: v1_default()(),
    className: "jsx-1415226531"
  }, __jsx(mylink_link["a" /* default */], {
    url: item.url,
    callback: () => null
  }, __jsx("div", {
    className: "jsx-1415226531" + " " + "friend_cont"
  }, __jsx("img", {
    src: item.perfilImg,
    alt: "",
    className: "jsx-1415226531"
  }), __jsx("p", {
    className: "jsx-1415226531"
  }, `${item.name} ${item.lastName}`)))))))), __jsx(style_default.a, {
    id: "1415226531"
  }, ["ul.jsx-1415226531{list-style:none;margin:0;padding:0;}", ".friend_cont.jsx-1415226531{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:250ms ease;transition:250ms ease;}", ".friend_cont.jsx-1415226531 p.jsx-1415226531{margin:0;margin-left:.5rem;text-transform:capitalize;}", ".friend_cont.jsx-1415226531 p.jsx-1415226531:hover{-webkit-text-decoration:underline;text-decoration:underline;color:#8bb940;}", ".friend_cont.jsx-1415226531 img.jsx-1415226531{width:40px;height:40px;object-fit:cover;object-position:center;border-radius:50%;}"]));
};

const Option = () => {
  const {
    0: pop,
    1: setPop
  } = Object(external_react_["useState"])(false);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const id = Object(external_react_redux_["useSelector"])(state => state.nav.notifications.id);
  const onLogout = Object(external_react_["useCallback"])(async () => {
    try {
      await external_axios_default.a.get('/user/logout');
      dispatch({
        type: actions["r" /* ON_LOGIN */],
        option: false
      });
      router_default.a.push('/login');
    } catch (err) {
      console.log(err);
    }
  });
  return __jsx("div", {
    className: "btnicon_cont"
  }, __jsx("button", {
    id: "option",
    onClick: () => setPop(!pop),
    className: "btnicon_nav"
  }, __jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faCog"]
  })), __jsx(external_reactstrap_["Popover"], {
    target: "option",
    isOpen: pop,
    placement: "bottom"
  }, __jsx(external_reactstrap_["PopoverBody"], {
    style: {
      padding: 0
    }
  }, __jsx("ul", {
    className: "option_list",
    onMouseLeave: () => setPop(false)
  }, __jsx("li", null, __jsx(mylink_link["a" /* default */], {
    url: `/perfil/${id}`,
    callback: () => null
  }, __jsx("p", {
    style: {
      color: '#8bb940',
      margin: 0
    }
  }, "Perfil"))), __jsx("li", null, __jsx("button", {
    onClick: onLogout
  }, "salir"))))));
};

const Wallet = () => {
  const wallet = Object(external_react_redux_["useSelector"])(state => state.nav.notifications.wallet);
  return __jsx("div", {
    className: "btnicon_cont"
  }, __jsx("p", {
    className: "wallet_cont"
  }, __jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faCoins"]
  })), __jsx("span", {
    style: {
      fontSize: 16
    }
  }, "+", wallet));
};

const Notifications = () => {
  return __jsx("ul", {
    className: "notifications_main_cont"
  }, __jsx("li", null, __jsx(Gift, null)), __jsx("li", null, __jsx(Note, null)), __jsx("li", null, __jsx(Friend, null)), __jsx("li", null, __jsx(Option, null)), __jsx("li", null, __jsx(Wallet, null)));
};

const BarLoader = () => {
  const loader = Object(external_react_redux_["useSelector"])(state => state.nav.loader);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const onLoader = Object(external_react_["useCallback"])(loader => dispatch({
    type: actions["q" /* ON_LOADER */],
    loader
  }));
  return __jsx("div", {
    className: "barloader",
    style: {
      width: `${loader}%`,
      opacity: loader > 0 ? 1 : 0
    }
  });
};

const Header = () => {
  const nav = Object(external_react_redux_["useSelector"])(state => state.nav);
  const {
    0: width,
    1: setWidth
  } = Object(external_react_["useState"])(0);
  const dispatch = Object(external_react_redux_["useDispatch"])();

  const onNotifications = async () => {
    try {
      if (nav.login) {
        const res = await external_axios_default.a.get(`/user/notifications`);
        dispatch({
          type: actions["v" /* ON_NOTIFICATIONS */],
          notifications: res.data
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  Object(external_react_["useEffect"])(() => {
    const socket = external_socket_io_client_default()();
    socket.open();
    socket.on(`nav:${nav.notifications.id}`, payload => {
      dispatch({
        type: 'ON_NOTE',
        payload
      });
      dispatch({
        type: actions["j" /* ON_FLOAT */],
        payload
      });
    });
    return () => socket.close();
  }, [nav.notifications]);
  Object(external_react_["useEffect"])(() => {
    onNotifications();
  }, [nav.login]);
  Object(external_react_["useEffect"])(() => {
    setWidth(window.innerWidth);
  }, []);
  return __jsx("header", {
    className: "header_main_cont"
  }, __jsx(BarLoader, null), __jsx("nav", null, __jsx(DownBar, null), __jsx("div", {
    className: "logo_search"
  }, __jsx(logo["a" /* default */], {
    url: "/"
  }), nav.login && width > 992 && __jsx(SearchBar, null)), !nav.login && __jsx(link_default.a, {
    href: "/login"
  }, __jsx("button", {
    className: "btn_login"
  }, "login")), nav.login && __jsx(Notifications, null)), width < 576 && nav.login && __jsx(SearchBar, null));
};

/* harmony default export */ var layout_header = (Header);
// EXTERNAL MODULE: ./layout/base.scss
var base = __webpack_require__("R/PV");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js + 1 modules
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./components/postregister/postregister.scss
var postregister = __webpack_require__("jnwH");

// EXTERNAL MODULE: ./components/loader/loader.jsx
var loader_loader = __webpack_require__("oHqC");

// CONCATENATED MODULE: ./components/postregister/postregister.jsx

var postregister_jsx = external_react_default.a.createElement;











const BtnUpload = () => {
  return postregister_jsx("div", {
    className: "btnUpload_main_cont"
  }, postregister_jsx("label", {
    htmlFor: "img"
  }, postregister_jsx("div", {
    className: "img_cont"
  }, postregister_jsx("img", {
    src: "",
    alt: ""
  }), postregister_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faUser"]
  })), postregister_jsx("input", {
    id: "img",
    name: "img",
    type: "file"
  })));
};

const Welcome = () => {
  return postregister_jsx("div", {
    className: "welcome_main_cont"
  }, postregister_jsx("h1", null, "Bienvenido a ", postregister_jsx("span", null, "Greenlink!")), postregister_jsx("p", null, "Completa el registro agregando informacion adicional y creando tu primer ", postregister_jsx("strong", null, "GreenPost,"), " de esta manera podras ser encontrado por otros usuarios ademas de recibir obsequios. Recuerda, mietras mas preciso seas mas facil sera que tus seres queridos contacten contigo."));
};

const Congratulations = () => {
  const user = Object(external_react_redux_["useSelector"])(state => state.user);
  return postregister_jsx("div", {
    className: "welcome_main_cont"
  }, postregister_jsx("h1", null, "Felicidades ", user.name), postregister_jsx("p", null, "No olvides crear tu primer", postregister_jsx("strong", null, "GreenPost,")));
};

const UserInfo = ({
  values,
  setValues,
  onImg
}) => {
  const user = Object(external_react_redux_["useSelector"])(state => state.user);
  return postregister_jsx("div", {
    className: "user_postregister_cont"
  }, postregister_jsx("label", {
    htmlFor: "perfilImg"
  }, !values.perfilImgFrontEnd && postregister_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faUser"]
  }), values.perfilImgFrontEnd && postregister_jsx("img", {
    src: values.perfilImgFrontEnd,
    alt: ""
  }), postregister_jsx("input", {
    onChange: onImg,
    type: "file",
    name: "perfilImg",
    id: "perfilImg"
  })), postregister_jsx("p", null, "Elige una foto de perfil"), user.name === 'Green' && postregister_jsx(external_react_default.a.Fragment, null, postregister_jsx("input", {
    value: values.name,
    onChange: e => setValues({
      name: e.currentTarget.value
    }),
    placeholder: "Nombre",
    type: "text"
  }), postregister_jsx("input", {
    value: values.lastName,
    onChange: e => setValues({
      lastName: e.currentTarget.value
    }),
    placeholder: "Apellido",
    type: "text"
  }), postregister_jsx("div", {
    className: "birth_sex_main"
  }, postregister_jsx("p", null, "Cumplea\xF1os"), postregister_jsx("input", {
    type: "date",
    value: values.birthday,
    onChange: e => setValues({
      birthday: e.currentTarget.value
    })
  }), postregister_jsx("div", {
    className: "birthday_sex",
    style: {
      marginLeft: '1rem'
    }
  }, postregister_jsx("p", null, "Sexo"), postregister_jsx("select", {
    onChange: e => setValues({
      sex: e.currentTarget.value
    }),
    name: "sex",
    id: "sex"
  }, postregister_jsx("option", {
    value: "female"
  }, "Mujer"), postregister_jsx("option", {
    value: "male"
  }, "Hombre"), postregister_jsx("option", {
    value: "otro"
  }, "Otro"))))));
};

const PostRegister = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: values,
    1: setValues
  } = Object(external_react_["useReducer"])((state, next) => Object(objectSpread["a" /* default */])({}, state, next), {
    name: '',
    lastName: '',
    birthday: '',
    sex: '',
    perfilImgFrontEnd: '',
    perfilImg: ''
  });
  const user = Object(external_react_redux_["useSelector"])(state => state.user);

  const onImg = e => {
    const img = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      if (reader.result) {
        setValues({
          perfilImgFrontEnd: reader.result,
          perfilImg: img
        });
      } else {
        setValues({
          perfilImgFrontEnd: null,
          perfilImg: null
        });
      }
    };

    reader.readAsDataURL(img);
  };

  const {
    0: section,
    1: setSection
  } = Object(external_react_["useReducer"])((state, next) => Object(objectSpread["a" /* default */])({}, state, next), {
    welcome: true,
    info: false,
    loader: false,
    congratulations: false
  });
  const visible = Object(external_react_redux_["useSelector"])(state => state.postregister);

  const onSubmit = async () => {
    try {
      const {
        name,
        lastName,
        birthday,
        sex,
        perfilImg
      } = values;
      const data = new FormData();
      setSection({
        info: false,
        loader: true
      });

      if (user.name === 'Green') {
        data.append('name', name);
        data.append('lastName', lastName);
        data.append('birthday', birthday);
        data.append('sex', sex);
      }

      data.append('perfilImg', perfilImg);
      const res = await external_axios_default.a.post('/user/postregister', data);
      dispatch({
        type: actions["G" /* ON_UPDATE */],
        payload: res.data
      });
      dispatch({
        type: actions["M" /* ON_WALLET */],
        coin: 50
      });
      setSection({
        loader: false,
        congratulations: true
      });
      setTimeout(() => {
        dispatch({
          type: actions["x" /* ON_POST_REGISTER */]
        });
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return postregister_jsx(external_reactstrap_["Modal"], {
    className: "my_modal",
    isOpen: visible
  }, postregister_jsx("div", {
    className: "postregister_main_cont"
  }, postregister_jsx("header", null, postregister_jsx(logo["a" /* default */], {
    dark: true,
    url: "/"
  })), postregister_jsx("div", {
    className: "body"
  }, section.welcome && postregister_jsx(Welcome, null), section.info && postregister_jsx(UserInfo, {
    values: values,
    setValues: setValues,
    onImg: onImg
  }), section.loader && postregister_jsx(loader_loader["a" /* default */], {
    dark: true
  }), section.congratulations && postregister_jsx(Congratulations, null)), postregister_jsx("footer", null, section.welcome && postregister_jsx("button", {
    onClick: () => setSection({
      welcome: false,
      info: true
    })
  }, "siguiente"), section.info && postregister_jsx("button", {
    onClick: onSubmit
  }, "enviar"))));
};

/* harmony default export */ var postregister_postregister = (PostRegister);
// EXTERNAL MODULE: ./components/store/store-cont.scss
var store_cont = __webpack_require__("T4W4");

// CONCATENATED MODULE: ./components/store/store-cont.jsx
var store_cont_jsx = external_react_default.a.createElement;








const StoreCont = ({
  children
}) => {
  const visible = Object(external_react_redux_["useSelector"])(state => state.greenstore.visible);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  return store_cont_jsx(external_reactstrap_["Modal"], {
    isOpen: visible,
    style: {
      maxWidth: '95vw'
    }
  }, store_cont_jsx("div", {
    className: "storecont_main_cont"
  }, store_cont_jsx("header", null, store_cont_jsx("nav", null, store_cont_jsx("button", {
    onClick: () => dispatch({
      type: actions["S" /* storeSections */].HOME
    })
  }, "inicio"), store_cont_jsx("div", {
    className: "storesearch_cont"
  }, store_cont_jsx("div", null, store_cont_jsx("input", {
    type: "text"
  }), store_cont_jsx("p", null, store_cont_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faSearch"]
  }))), store_cont_jsx("ul", null))), store_cont_jsx("button", {
    title: "cerrar",
    onClick: () => dispatch({
      type: actions["F" /* ON_STORE */]
    })
  }, "X")), children));
};

/* harmony default export */ var store_store_cont = (StoreCont);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("6BQ9");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: ./components/store/store.scss
var store_store = __webpack_require__("avu+");

// EXTERNAL MODULE: ./test/products.js
var test_products = __webpack_require__("Vssk");
var products_default = /*#__PURE__*/__webpack_require__.n(test_products);

// CONCATENATED MODULE: ./components/store/store.jsx

var store_jsx = external_react_default.a.createElement;








const Home = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  return store_jsx("div", {
    className: "storehome_main_cont"
  }, store_jsx("div", {
    className: "cont_left"
  }, store_jsx("button", {
    onClick: () => dispatch({
      type: actions["S" /* storeSections */].MUSIC
    }),
    id: "music"
  }, store_jsx("img", {
    src: "/static/store/ms.jpg",
    alt: ""
  }), store_jsx("span", null, "musica"))), store_jsx("div", {
    className: "cont_right"
  }, store_jsx("button", {
    onClick: () => dispatch({
      type: actions["S" /* storeSections */].CANDY
    }),
    id: "candy"
  }, store_jsx("img", {
    src: "/static/store/gol.jpg",
    alt: ""
  }), store_jsx("span", null, "golosinas")), store_jsx("button", {
    onClick: () => dispatch({
      type: actions["S" /* storeSections */].JEWEL
    }),
    className: "four",
    id: "jewel"
  }, store_jsx("img", {
    src: "/static/store/bis.jpg",
    alt: ""
  }), store_jsx("span", null, "bisuteria")), store_jsx("button", {
    onClick: () => dispatch({
      type: actions["S" /* storeSections */].TOY
    }),
    className: "four",
    id: "toy"
  }, store_jsx("img", {
    src: "/static/store/ty.jpg",
    alt: ""
  }), store_jsx("span", null, "juguetes")), store_jsx("button", {
    onClick: () => dispatch({
      type: actions["S" /* storeSections */].EBOOK
    }),
    className: "four",
    id: "ebook"
  }, store_jsx("img", {
    src: "/static/store/eb.jpg",
    alt: ""
  }), store_jsx("span", null, "ebook's")), store_jsx("button", {
    onClick: () => dispatch({
      type: actions["S" /* storeSections */].TV
    }),
    className: "four",
    id: "tv"
  }, store_jsx("img", {
    src: "/static/store/tv.jpg",
    alt: ""
  }), store_jsx("span", null, "tv's"))));
};

const Category = ({
  tag
}) => {
  const items = Object(external_react_redux_["useSelector"])(state => state.greenstore.items);
  const products = items.filter(product => product.tag === tag);
  const dispatch = Object(external_react_redux_["useDispatch"])();

  const onProduct = e => {
    const product = products.find(product => product.id === e.target.id);
    dispatch({
      type: actions["S" /* storeSections */].PRODUCT,
      product
    });
  };

  return store_jsx("div", {
    className: "category_main_cont"
  }, store_jsx("ul", null, products.map(product => store_jsx("li", null, store_jsx("button", {
    onClick: onProduct,
    id: product.id,
    className: "shadow"
  }, store_jsx("img", {
    id: product.id,
    src: product.img,
    alt: ""
  }), store_jsx("footer", {
    id: product.id
  }, store_jsx("p", {
    id: product.id
  }, product.name), store_jsx("p", {
    id: product.id
  }, "$", product.price)))))));
};

const Product = () => {
  const product = Object(external_react_redux_["useSelector"])(state => state.greenstore.current);
  const postType = Object(external_react_redux_["useSelector"])(state => state.greenstore.postType);
  const uid = Object(external_react_redux_["useSelector"])(state => state.user._id);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const owner = Object(external_react_redux_["useSelector"])(state => state.user.owner);
  const {
    0: disable,
    1: setDisable
  } = Object(external_react_["useState"])(false);
  const {
    0: note,
    1: setNote
  } = Object(external_react_["useState"])();

  const onGift = async e => {
    try {
      e.preventDefault();
      setDisable(true);
      const data = {
        gift: product,
        uid,
        note,
        postType
      };
      await external_axios_default.a.post('/user/gift', data);

      const parseCoin = parse_int_default()(product.price, 10);

      dispatch({
        type: actions["M" /* ON_WALLET */],
        coin: -parseCoin
      });
      setDisable(false);
      dispatch({
        type: actions["F" /* ON_STORE */]
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onWish = async e => {
    try {
      e.preventDefault();
      setDisable(true);
      const res = await external_axios_default.a.post('/green/wish', {
        product
      });
      console.log(res.data);
      dispatch({
        type: actions["P" /* ON_WISH */],
        wish: res.data
      });
      setDisable(false);
      dispatch({
        type: actions["F" /* ON_STORE */]
      });
    } catch (err) {
      console.log(err);
    }
  };

  return store_jsx("div", {
    className: "product_main_cont"
  }, store_jsx("div", {
    className: "row"
  }, store_jsx("div", {
    className: "col-12 col-md-6"
  }, store_jsx("div", {
    className: "img_cont"
  }, store_jsx("img", {
    src: product.img,
    alt: ""
  }))), store_jsx("div", {
    className: "col-12 col-md-6"
  }, store_jsx("div", {
    className: "description_cont"
  }, store_jsx("h1", null, product.name), store_jsx("p", null, "precio: $", product.price), store_jsx("p", null, product.description)), store_jsx("form", {
    onSubmit: !owner || postType.type ? onGift : onWish
  }, !owner || postType.type && store_jsx("textarea", {
    value: note,
    onChange: e => setNote(e.currentTarget.value)
  }), store_jsx("footer", null, store_jsx("button", {
    onClick: () => dispatch({
      type: product.tag
    })
  }, "atr\xE1s"), store_jsx("button", {
    disabled: disable,
    type: "submit"
  }, !owner || postType.type ? 'enviar' : 'agregar'))))));
};

const Store = () => {
  const store = Object(external_react_redux_["useSelector"])(state => state.greenstore);
  const dispatch = Object(external_react_redux_["useDispatch"])();

  const onProducts = async () => {
    try {
      //const res = await axios.get('/products');
      //dispatch({ type: ON_PRODUCTS, products: res.data });
      dispatch({
        type: actions["z" /* ON_PRODUCTS */],
        products: products_default.a
      });
    } catch (err) {
      console.log(err);
    }
  };

  Object(external_react_["useEffect"])(() => {
    onProducts();
  }, []);
  return store_jsx("div", {
    className: "store_main_cont"
  }, store.home && store_jsx(Home, null), store.music && store_jsx(Category, {
    tag: actions["S" /* storeSections */].MUSIC
  }), store.candy && store_jsx(Category, {
    tag: actions["S" /* storeSections */].CANDY
  }), store.jewel && store_jsx(Category, {
    tag: actions["S" /* storeSections */].JEWEL
  }), store.toy && store_jsx(Category, {
    tag: actions["S" /* storeSections */].TOY
  }), store.ebook && store_jsx(Category, {
    tag: actions["S" /* storeSections */].EBOOK
  }), store.tv && store_jsx(Category, {
    tag: actions["S" /* storeSections */].TV
  }), store.product && store_jsx(Product, null));
};

/* harmony default export */ var components_store_store = (Store);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/date/now.js
var now = __webpack_require__("Cg2A");
var now_default = /*#__PURE__*/__webpack_require__.n(now);

// EXTERNAL MODULE: ./components/floating-notes/floating-notes.scss
var floating_notes = __webpack_require__("hzNJ");

// CONCATENATED MODULE: ./components/floating-notes/floating-notes.jsx


var floating_notes_jsx = external_react_default.a.createElement;








const floating_notes_Note = ({
  note
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    user
  } = note;
  Object(external_react_["useEffect"])(() => {
    setTimeout(() => {
      dispatch({
        type: actions["a" /* OFF_FLOAT */],
        id: note.id
      });
    }, 6000);
  }, [note]);
  const date = new Date(now_default()());
  return floating_notes_jsx("div", {
    id: note.id,
    className: "jsx-3558922848" + " " + "floating_note_cont shadow animated"
  }, floating_notes_jsx("header", {
    className: "jsx-3558922848"
  }, floating_notes_jsx("p", {
    className: "jsx-3558922848"
  }, (() => {
    switch (note.type) {
      case 'ACCEPT':
        return 'Nuevo Amigo';

      case 'REACTION':
        return 'Reaccion';

      case 'FRIEND':
        return 'Solicitud';

      case 'COMMENT':
        return 'Comentario';

      case 'GIFT':
        return 'Regalo';
    }
  })()), floating_notes_jsx("button", {
    onClick: () => dispatch({
      type: actions["a" /* OFF_FLOAT */],
      id: note.id
    }),
    className: "jsx-3558922848"
  }, "x")), floating_notes_jsx(mylink_link["a" /* default */], {
    id: user.url
  }, floating_notes_jsx("div", {
    className: "jsx-3558922848" + " " + "body"
  }, floating_notes_jsx("img", {
    src: note.type === 'GIFT' ? user.img : user.perfilImg,
    alt: "",
    className: "jsx-3558922848"
  }), floating_notes_jsx("div", {
    className: "jsx-3558922848" + " " + "info"
  }, floating_notes_jsx("p", {
    className: "jsx-3558922848"
  }, note.type === 'GIFT' ? user.name : user.fullName), floating_notes_jsx("small", {
    className: "jsx-3558922848"
  }, (() => {
    switch (note.type) {
      case 'ACCEPT':
        return 'Acepto tu solicitud de amistad';

      case 'REACTION':
        return 'Reacciono a uno de tus posts';

      case 'FRIEND':
        return 'Quiere Ser Tu Amigo';

      case 'COMMENT':
        return 'Comento uno de tus posts';

      case 'GIFT':
        return 'Has recibido un regalo';
    }
  })())))), floating_notes_jsx(style_default.a, {
    id: "3558922848"
  }, ["div.floating_note_cont.jsx-3558922848{width:65%;background:#fff;position:relative;left:100%;margin:.5rem;z-index:50;border-radius:3px;}", "header.jsx-3558922848{padding:.2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#8bb940;}", "header.jsx-3558922848 p.jsx-3558922848{margin:0;}", "header.jsx-3558922848 button.jsx-3558922848{background:transparent;-webkit-transition:250ms ease;transition:250ms ease;border:none;color:#333;}", "header.jsx-3558922848 button.jsx-3558922848:focus{outline:none;}", "header.jsx-3558922848 button.jsx-3558922848:hover{color:#fff;}", "div.body.jsx-3558922848{padding:.2rem;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".body.jsx-3558922848 p.jsx-3558922848{margin:0;}", ".body.jsx-3558922848 .info.jsx-3558922848{margin-left:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}", "small.jsx-3558922848{font-size:11px;margin:0;}", "img.jsx-3558922848{width:60px;height:60px;border-radius:50%;object-fit:cover;object-position:center;}"]));
};

const FloatingNotes = () => {
  const notes = Object(external_react_redux_["useSelector"])(state => state.floatingnotes);
  return floating_notes_jsx("div", {
    className: "jsx-2440513572" + " " + "floating_main_cont"
  }, notes.map((note, i) => floating_notes_jsx("div", {
    className: "jsx-2440513572" + " " + "animated fadeInLeft"
  }, floating_notes_jsx(floating_notes_Note, {
    key: v1_default()(),
    note: note
  }))), floating_notes_jsx(style_default.a, {
    id: "2440513572"
  }, [".floating_main_cont.jsx-2440513572{position:fixed;top:0;left:-30%;border:1px solid red;width:30%;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;z-index:50;}"]));
};

/* harmony default export */ var floating_notes_floating_notes = (FloatingNotes);
// CONCATENATED MODULE: ./components/vault/vault.jsx

var vault_jsx = external_react_default.a.createElement;






const ProductList = ({
  item
}) => {
  return vault_jsx("li", {
    className: style_default.a.dynamic([["1039609738", [item.img]]])
  }, vault_jsx("button", {
    title: `enviado por ${item.sender.fullName}`,
    id: item._id,
    className: style_default.a.dynamic([["1039609738", [item.img]]]) + " " + "shadow"
  }, vault_jsx("img", {
    id: item._id,
    src: item.sender.perfilImg,
    alt: "",
    className: style_default.a.dynamic([["1039609738", [item.img]]])
  })), vault_jsx(style_default.a, {
    id: "1039609738",
    dynamic: [item.img]
  }, ["li.__jsx-style-dynamic-selector{margin:1rem;}", `button.__jsx-style-dynamic-selector{background:url(${item.img})center top no-repeat;background-size:cover;width:200px;height:220px;border:1px solid #fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-transition:250ms ease;transition:250ms ease;}`, "button.__jsx-style-dynamic-selector:hover{border-color:#8bb940;}", "img.__jsx-style-dynamic-selector{width:50px;height:50px;object-fit:cover;object-position:center;border-radius:50%;}"]));
};

const vault_Home = () => {
  const items = Object(external_react_redux_["useSelector"])(state => state.nav.notifications.gifts.items);
  return vault_jsx("div", {
    className: "jsx-551955279" + " " + "home"
  }, vault_jsx("ul", {
    className: "jsx-551955279"
  }, items.map(item => vault_jsx(ProductList, {
    key: v1_default()(),
    item: item
  }))), vault_jsx(style_default.a, {
    id: "551955279"
  }, [".home.jsx-551955279{padding:1rem;}", "ul.jsx-551955279{margin:0;padding:0;list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}"]));
};

const vault_Product = () => {
  const product = Object(external_react_redux_["useSelector"])(state => state.vault.current);
  return vault_jsx("div", {
    className: "product_main"
  }, vault_jsx("div", {
    className: "left"
  }, vault_jsx("img", {
    src: product.img,
    alt: ""
  })), vault_jsx("div", {
    className: "right"
  }, vault_jsx("h1", null, product.name), vault_jsx("p", null, product.description), vault_jsx("div", {
    className: "sender"
  })));
};

const Vault = () => {
  const vault = Object(external_react_redux_["useSelector"])(state => state.vault);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  return vault_jsx(external_reactstrap_["Modal"], {
    isOpen: vault.visible,
    style: {
      minWidth: "95vw"
    }
  }, vault_jsx("div", {
    className: "jsx-305558536" + " " + "vault_main_cont"
  }, vault_jsx("header", {
    className: "jsx-305558536"
  }, vault_jsx("button", {
    onClick: () => dispatch({
      type: actions["J" /* ON_VAULT_HOME */]
    }),
    className: "jsx-305558536"
  }, "inicio"), vault_jsx("button", {
    title: "cerrar",
    onClick: () => dispatch({
      type: actions["I" /* ON_VAULT */]
    }),
    className: "jsx-305558536"
  }, "x")), vault_jsx("div", {
    className: "jsx-305558536" + " " + "body"
  }, vault.home && vault_jsx(vault_Home, null), vault.product && vault_jsx(vault_Product, null))), vault_jsx(style_default.a, {
    id: "305558536"
  }, ["header.jsx-305558536{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "header.jsx-305558536 button.jsx-305558536{background:transparent;border:none;-webkit-transition:250ms ease;transition:250ms ease;text-transform:capitalize;}", "header.jsx-305558536 button.jsx-305558536:focus{outline:none;}", "header.jsx-305558536 button.jsx-305558536:hover{color:#8bb940;}"]));
};

/* harmony default export */ var vault_vault = (Vault);
// EXTERNAL MODULE: ./components/dialogs/confirm.jsx
var dialogs_confirm = __webpack_require__("ADPJ");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./test/persons.js
var persons = __webpack_require__("nMOO");

// EXTERNAL MODULE: ./layout/var.js
var layout_var = __webpack_require__("uTi6");

// CONCATENATED MODULE: ./components/chat/private.jsx


var private_jsx = external_react_default.a.createElement;









const Chat = ({
  fullName,
  perfilImg,
  _id,
  minimize,
  chatHistory,
  privates,
  anAlert
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const cuid = Object(external_react_redux_["useSelector"])(state => state.nav.notifications.id);
  const {
    0: msg,
    1: setMsg
  } = Object(external_react_["useState"])([]);
  const inputRef = Object(external_react_["useRef"])(null);
  const chatRef = Object(external_react_["useRef"])(null);
  const current = Object(external_react_redux_["useSelector"])(state => state.chat.current);
  const {
    0: chat,
    1: setChat
  } = Object(external_react_["useState"])([]);

  const onChat = async () => {
    try {
      const res = await external_axios_default.a.get(`/chat/private/${_id}`);
      setChat(res.data);
      chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
    } catch (e) {
      console.log(e);
    }
  };

  Object(external_react_["useEffect"])(() => {
    onChat();
  }, []);
  Object(external_react_["useEffect"])(() => {
    chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
    inputRef.current.focus();
  }, [chat]);
  Object(external_react_["useEffect"])(() => {
    const socket = external_socket_io_client_default()();

    try {
      socket.open();
      socket.on(`private:${cuid}`, payload => {
        setChat([...chat, payload.msg]);
        chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
        inputRef.current.focus();
      });
    } catch (e) {
      console.log(e);
    }

    return () => socket.close();
  }, [chat]);

  const onMinimize = () => {
    const isMin = privates.find(user => user._id === _id);

    if (isMin.minimize) {
      dispatch({
        type: actions["e" /* ON_CHAT_MINIMIZE */],
        _id,
        option: false
      });
      dispatch({
        type: actions["c" /* ON_CHAT_ALERT */],
        _id,
        option: false
      });
    } else {
      dispatch({
        type: actions["e" /* ON_CHAT_MINIMIZE */],
        _id,
        option: true
      });
    }
  };

  const onSubmit = async e => {
    try {
      if (e.keyCode === 13 && !e.shiftKey || e.type === "submit") {
        e.preventDefault();
        const newMsg = {
          id: cuid,
          pm: msg
        };
        const data = {
          tid: _id,
          msg: newMsg
        };
        setMsg('');
        setChat([...chat, newMsg]);
        await external_axios_default.a.post('/chat/send', data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return private_jsx("li", {
    className: style_default.a.dynamic([["1622551285", [layout_var["a" /* color */].sec, minimize ? '-43px' : '-343px', anAlert ? layout_var["a" /* color */].danger : layout_var["a" /* color */].prim, layout_var["a" /* color */].prim]]]) + " " + "main shadow"
  }, console.log(chat), private_jsx("header", {
    className: style_default.a.dynamic([["1622551285", [layout_var["a" /* color */].sec, minimize ? '-43px' : '-343px', anAlert ? layout_var["a" /* color */].danger : layout_var["a" /* color */].prim, layout_var["a" /* color */].prim]]])
  }, private_jsx("button", {
    onClick: onMinimize,
    className: style_default.a.dynamic([["1622551285", [layout_var["a" /* color */].sec, minimize ? '-43px' : '-343px', anAlert ? layout_var["a" /* color */].danger : layout_var["a" /* color */].prim, layout_var["a" /* color */].prim]]]) + " " + "name"
  }, private_jsx("img", {
    src: perfilImg,
    alt: "",
    className: style_default.a.dynamic([["1622551285", [layout_var["a" /* color */].sec, minimize ? '-43px' : '-343px', anAlert ? layout_var["a" /* color */].danger : layout_var["a" /* color */].prim, layout_var["a" /* color */].prim]]])
  }), fullName), private_jsx("button", {
    onClick: () => dispatch({
      type: actions["d" /* ON_CHAT_CLOSE */],
      _id
    }),
    className: style_default.a.dynamic([["1622551285", [layout_var["a" /* color */].sec, minimize ? '-43px' : '-343px', anAlert ? layout_var["a" /* color */].danger : layout_var["a" /* color */].prim, layout_var["a" /* color */].prim]]])
  }, "X")), private_jsx("ul", {
    ref: chatRef,
    className: style_default.a.dynamic([["1622551285", [layout_var["a" /* color */].sec, minimize ? '-43px' : '-343px', anAlert ? layout_var["a" /* color */].danger : layout_var["a" /* color */].prim, layout_var["a" /* color */].prim]]]) + " " + "body"
  }, chat.map(msg => private_jsx("li", {
    key: v1_default()(),
    style: {
      alignSelf: cuid === msg.id ? 'flex-end' : 'flex-start'
    },
    className: style_default.a.dynamic([["1622551285", [layout_var["a" /* color */].sec, minimize ? '-43px' : '-343px', anAlert ? layout_var["a" /* color */].danger : layout_var["a" /* color */].prim, layout_var["a" /* color */].prim]]])
  }, cuid !== msg.id && private_jsx("img", {
    src: perfilImg,
    alt: "",
    className: style_default.a.dynamic([["1622551285", [layout_var["a" /* color */].sec, minimize ? '-43px' : '-343px', anAlert ? layout_var["a" /* color */].danger : layout_var["a" /* color */].prim, layout_var["a" /* color */].prim]]])
  }), private_jsx("p", {
    style: {
      background: cuid === msg.id ? layout_var["a" /* color */].prim : 'rgba(0, 0, 0, .050)',
      color: cuid === msg.id ? layout_var["a" /* color */].light : layout_var["a" /* color */].dark
    },
    className: style_default.a.dynamic([["1622551285", [layout_var["a" /* color */].sec, minimize ? '-43px' : '-343px', anAlert ? layout_var["a" /* color */].danger : layout_var["a" /* color */].prim, layout_var["a" /* color */].prim]]])
  }, msg.pm)))), private_jsx("form", {
    onSubmit: onSubmit,
    className: style_default.a.dynamic([["1622551285", [layout_var["a" /* color */].sec, minimize ? '-43px' : '-343px', anAlert ? layout_var["a" /* color */].danger : layout_var["a" /* color */].prim, layout_var["a" /* color */].prim]]])
  }, private_jsx("textarea", {
    id: _id,
    value: msg,
    onChange: e => setMsg(e.currentTarget.value),
    onKeyDown: onSubmit,
    ref: inputRef,
    className: style_default.a.dynamic([["1622551285", [layout_var["a" /* color */].sec, minimize ? '-43px' : '-343px', anAlert ? layout_var["a" /* color */].danger : layout_var["a" /* color */].prim, layout_var["a" /* color */].prim]]])
  })), private_jsx("footer", {
    className: style_default.a.dynamic([["1622551285", [layout_var["a" /* color */].sec, minimize ? '-43px' : '-343px', anAlert ? layout_var["a" /* color */].danger : layout_var["a" /* color */].prim, layout_var["a" /* color */].prim]]])
  }), private_jsx(style_default.a, {
    id: "1622551285",
    dynamic: [layout_var["a" /* color */].sec, minimize ? '-43px' : '-343px', anAlert ? layout_var["a" /* color */].danger : layout_var["a" /* color */].prim, layout_var["a" /* color */].prim]
  }, [`li.main.__jsx-style-dynamic-selector{width:25%;border:1px solid ${layout_var["a" /* color */].sec};position:relative;top:${minimize ? '-43px' : '-343px'};margin-right:1rem;border-radius:3px 3px 0 0;}`, `header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:${anAlert ? layout_var["a" /* color */].danger : layout_var["a" /* color */].prim};}`, "header.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{-webkit-transition:250ms ease;transition:250ms ease;border:none;font-size:1rem;color:rgba(255,255,255,.7);text-transform:capitalize;background:transparent;}", "header.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:focus{outline:none;}", "header.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{color:#fff;}", ".name.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;text-align:left;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:550;}", ".name.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:40px;height:40px;object-fit:cover;object-position:center;border-radius:50%;margin-right:.3rem;}", "ul.__jsx-style-dynamic-selector{list-style:none;marign:0;padding:0;height:250px;overflow-y:scroll;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#fff;}", "ul.__jsx-style-dynamic-selector::-webkit-scrollbar{width:0;}", "ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{margin:.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}", "ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:25px;height:25px;object-fit:cover;object-position:center;border-radius:50%;}", "ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;background:rgba(0,0,0,.050);padding:.1rem .2rem;margin-left:.5rem;border-radius:3px;border:1px solid rgba(0,0,0,.080);}", "form.__jsx-style-dynamic-selector{width:30px;width:100%;margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", "form.__jsx-style-dynamic-selector textarea.__jsx-style-dynamic-selector{resize:none;width:100%;height:100%;margin:0;font-size:11px;}", `footer.__jsx-style-dynamic-selector{height:10px;background:${layout_var["a" /* color */].prim};}`]));
};

const Private = () => {
  const {
    0: chats,
    1: setChats
  } = Object(external_react_["useState"])([]);
  const privates = Object(external_react_redux_["useSelector"])(state => state.chat.privates);
  Object(external_react_["useEffect"])(() => {
    setChats(privates);
  }, [privates.length]);
  return private_jsx("div", {
    className: "jsx-60269558"
  }, private_jsx("ul", {
    className: "jsx-60269558"
  }, privates.map(chat => private_jsx(Chat, Object(esm_extends["a" /* default */])({
    key: v1_default()()
  }, chat, {
    privates: privates
  })))), private_jsx(style_default.a, {
    id: "60269558"
  }, ["ul.jsx-60269558{list-style:none;margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}"]));
};

/* harmony default export */ var chat_private = (Private);
// EXTERNAL MODULE: ./components/layout/post.jsx
var layout_post = __webpack_require__("dBck");

// CONCATENATED MODULE: ./components/layout/layout.jsx


var layout_jsx = external_react_default.a.createElement;














const Layout = ({
  children
}) => {
  const post = Object(external_react_redux_["useSelector"])(state => state.post);
  return layout_jsx("div", {
    style: {
      position: 'relative'
    },
    className: "jsx-3133056425" + " " + "lauout_main_cont"
  }, layout_jsx(head_default.a, null, layout_jsx("link", {
    rel: "stylesheet",
    href: "/static/animate.min.css",
    className: "jsx-3133056425"
  }), layout_jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Sansita|Open+Sans|Pacifico&display=swap",
    rel: "stylesheet",
    className: "jsx-3133056425"
  })), layout_jsx(layout_header, null), layout_jsx(postregister_postregister, null), layout_jsx(store_store_cont, null, layout_jsx(components_store_store, null)), layout_jsx(floating_notes_floating_notes, null), layout_jsx(vault_vault, null), layout_jsx(dialogs_confirm["a" /* default */], null), post.visible && layout_jsx(layout_post["a" /* default */], null), children, layout_jsx("footer", {
    className: "jsx-3133056425" + " " + "col-10 p-0"
  }, layout_jsx(chat_private, null)), layout_jsx(style_default.a, {
    id: "3133056425"
  }, ["footer.jsx-3133056425{position:fixed;width:100%;bottom:-28px;background:#8bb940;height:28px;}"]));
};

/* harmony default export */ var layout = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "avu+":
/***/ (function(module, exports) {



/***/ }),

/***/ "b9Vz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Ok7");
/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logo_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Logo = ({
  url,
  dark
}) => {
  const tirangle = __jsx("svg", {
    width: "200",
    height: "200",
    version: "1.1",
    viewBox: "0 0 52.917 52.917",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("g", {
    transform: "translate(0 -244.08)"
  }, __jsx("ellipse", {
    cx: "26.548",
    cy: "250.43",
    r: "3.2741",
    fill: dark ? "#8bb940" : "#fff"
  }), __jsx("ellipse", {
    cx: "46.306",
    cy: "289.77",
    r: "3.2741",
    fill: dark ? "#8bb940" : "#fff"
  }), __jsx("path", {
    transform: "matrix(.62733 0 0 .72498 9.012 74.897)",
    d: "m59.521 296.7h-31.551-31.551l31.551-54.648 15.776 27.324z",
    fill: "none",
    stroke: dark ? "#8bb940" : "#fff",
    strokeWidth: "2"
  }), __jsx("circle", {
    cx: "46.306",
    cy: "289.77",
    r: "3.2741",
    fill: dark ? "#8bb940" : "#fff"
  }), __jsx("circle", {
    cx: "7.2335",
    cy: "289.77",
    r: "3.2741",
    fill: dark ? "#8bb940" : "#fff"
  }), __jsx("path", {
    d: "m25.542 276.71c0.25134 0.37102-0.37613 0.52185-0.61667 0.41774-0.65184-0.28213-0.59357-1.1753-0.21882-1.6511 0.67035-0.85098 1.9605-0.71767 2.6855-0.0199 1.0639 1.024 0.84772 2.7571-0.17903 3.7199-1.3685 1.2832-3.558 0.98044-4.7543-0.37795-1.5055-1.7094-1.1146-4.3608 0.57688-5.7887 2.0486-1.7294 5.1648-1.2495 6.8231 0.7758 1.9543 2.3868 1.385 5.9694-0.97472 7.8575-2.7244 2.1798-6.7746 1.5208-8.8919-1.1736-2.4058-3.0616-1.6568-7.5801 1.3726-9.9264 3.3985-2.6321 8.3859-1.7931 10.961 1.5715 2.8586 3.7353 1.9294 9.1918-1.7704 11.995",
    fill: "none",
    stroke: dark ? "#8bb940" : "#fff",
    strokeWidth: ".79375"
  }), __jsx("circle", {
    cx: "26.541",
    cy: "250.72",
    r: "3.2741",
    fill: dark ? "#8bb940" : "#fff"
  })));

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: url
  }, __jsx("a", {
    className: "logo_main_cont"
  }, tirangle, __jsx("p", {
    style: dark ? {
      color: '#8bb940'
    } : {
      color: '#fff'
    }
  }, "greenlink")));
};

/* harmony default export */ __webpack_exports__["a"] = (Logo);

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("P5f7");

var _utils = __webpack_require__("g/15");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dBck":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("qzSc");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layout_var__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("uTi6");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const Home = ({
  title,
  subTitle,
  history
}) => {
  return __jsx("div", {
    className: "jsx-76060649" + " " + "main"
  }, __jsx("div", {
    className: "jsx-76060649" + " " + "home"
  }, __jsx("h1", {
    className: "jsx-76060649"
  }, title), __jsx("p", {
    className: "jsx-76060649"
  }, subTitle), __jsx("p", {
    className: "jsx-76060649"
  }, history)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "76060649"
  }, ["p.jsx-76060649{margin:0;}"]));
};

const Info = ({
  visible
}) => {
  const post = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.post);
  const {
    perfilImg,
    name,
    lastName
  } = post.current.author;
  const {
    date
  } = post.current;
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]]) + " " + "main"
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]])
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]]) + " " + "user"
  }, __jsx("img", {
    src: perfilImg,
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]])
  }), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]])
  }, `${name} ${lastName}`)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]]) + " " + "date"
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]])
  }, new Date(date).toLocaleDateString()), __jsx("small", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]])
  }, new Date(date).toLocaleTimeString()))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]]) + " " + "body"
  }, __jsx(Home, post.current)), __jsx("nav", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]])
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]])
  }, __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]])
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]])
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]])
  }, __jsx("path", {
    d: "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]])
  })))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]])
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]])
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]])
  }, __jsx("path", {
    d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]])
  })))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]])
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]])
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]])
  }, __jsx("path", {
    d: "M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]])
  })))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]])
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]])
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]])
  }, __jsx("path", {
    d: "M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3509891881", [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]])
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3509891881",
    dynamic: [visible ? '0' : '-100%', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]
  }, [`.main.__jsx-style-dynamic-selector{position:absolute;height:100%;width:100%;top:0;right:${visible ? '0' : '-100%'};background:rgba(0,0,0,.5);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-transition:300ms ease;transition:300ms ease;}`, "header.__jsx-style-dynamic-selector{color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:2rem .5rem 0;}", "p.__jsx-style-dynamic-selector{margin:0;}", ".user.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".user.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{margin-right:.5rem;width:40px;height:40px;border-radius:50%;object-fit:cover;object-position:center;}", ".body.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;color:#fff;padding:5%;}", `nav.__jsx-style-dynamic-selector{background:${_layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].dark};}`, "nav.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector{list-style:none;margin:0;padding:0;padding:.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}", "li.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{width:30px;height:30px;border-radius:50%;background:transparent;border:1px solid #fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:250ms ease;transition:250ms ease;}", "li.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:focus{outline:none;}", "li.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{background:#fff;}", `li.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover svg.__jsx-style-dynamic-selector{fill:${_layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim};}`, "li.__jsx-style-dynamic-selector svg.__jsx-style-dynamic-selector{-webkit-transition:250ms ease;transition:250ms ease;width:20px;height:20px;fill:#fff;}", "li.__jsx-style-dynamic-selector:nth-child(odd){margin:0 .5rem;}", "@media(min-width:992px){.main.__jsx-style-dynamic-selector{width:50%;}}"]));
};

const BtnInfo = ({
  onClick,
  visible
}) => {
  return __jsx("button", {
    onClick: () => onClick(!visible),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2832747095", [visible ? 'rotate(180deg)' : 'rotate(0)', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].danger]]])
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2832747095", [visible ? 'rotate(180deg)' : 'rotate(0)', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].danger]]])
  }, __jsx("path", {
    d: "M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2832747095", [visible ? 'rotate(180deg)' : 'rotate(0)', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].danger]]])
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2832747095",
    dynamic: [visible ? 'rotate(180deg)' : 'rotate(0)', _layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].danger]
  }, [`button.__jsx-style-dynamic-selector{position:absolute;top:50%;right:.5rem;z-index:10;background:transparent;border:none;-webkit-transform:${visible ? 'rotate(180deg)' : 'rotate(0)'};-ms-transform:${visible ? 'rotate(180deg)' : 'rotate(0)'};transform:${visible ? 'rotate(180deg)' : 'rotate(0)'};}`, "button.__jsx-style-dynamic-selector:focus{outline:none;}", "svg.__jsx-style-dynamic-selector{-webkit-transition:250ms ease;transition:250ms ease;width:30px;height:30px;fill:#fff;}", `button.__jsx-style-dynamic-selector:hover svg.__jsx-style-dynamic-selector{fill:${_layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].danger};}`, "@media(min-width:576px){svg.__jsx-style-dynamic-selector{width:50px;height:50px;}}"]));
};

const Main = () => {
  const post = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.post);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    0: info,
    1: setInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    isOpen: post.visible,
    style: {
      maxWidth: '95vw'
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3673964458", [_layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]]) + " " + "main"
  }, __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_3__[/* ON_POST_VIEW */ "y"],
      post: {}
    }),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3673964458", [_layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]]) + " " + "btn_close"
  }, "X"), __jsx("img", {
    src: post.current.img,
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3673964458", [_layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]]])
  }), __jsx(BtnInfo, {
    visible: info,
    onClick: setInfo
  }), __jsx(Info, {
    visible: info
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3673964458",
    dynamic: [_layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim]
  }, [".main.__jsx-style-dynamic-selector{height:92vh;position:relative;overflow:hidden;}", ".main.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:100%;height:100%;object-fit:cover;object-position:center;}", ".btn_close.__jsx-style-dynamic-selector{width:25px;height:25px;color:#fff;text-align:center;position:absolute;top:.2rem;right:.5rem;background:transparent;-webkit-transition:250ms ease;transition:250ms ease;border:1px solid #fff;border-radius:50%;z-index:15;}", ".btn_close.__jsx-style-dynamic-selector:focus{outline:none;}", `.btn_close.__jsx-style-dynamic-selector:hover{color:${_layout_var__WEBPACK_IMPORTED_MODULE_5__[/* color */ "a"].prim};background:#fff;}`])));
};

/* harmony default export */ __webpack_exports__["a"] = (Main);

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dIuJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("qzSc");
/* harmony import */ var _test_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("DZ85");
/* harmony import */ var _test_posts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_test_posts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ZTmz");
/* harmony import */ var _components_layout_btn_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4vPi");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Main = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const post = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post);
  return __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, __jsx(_components_layout_btn_post__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    post: _test_posts__WEBPACK_IMPORTED_MODULE_3__["posts"][0]
  }, __jsx("button", {
    style: {
      marginTop: 500
    }
  }, "Post")));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__("SqZg");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__("eVuF");

var _Object$assign = __webpack_require__("UXZV");

var _Object$defineProperty = __webpack_require__("hfKm");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const rewrite_url_for_export_1 = __webpack_require__("P5f7");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const is_dynamic_1 = __webpack_require__("/jkW");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (false) {} // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "production" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const url = ctx.asPath ? ctx.asPath : url_1.format({
        pathname: ctx.pathname,
        query: ctx.query
      });
      props = await fetch(url, {
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).then(pageProps => {
        return {
          pageProps
        };
      }).catch(err => {
        return {
          error: err.message,
          status
        };
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "hzNJ":
/***/ (function(module, exports) {



/***/ }),

/***/ "jnwH":
/***/ (function(module, exports) {



/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "nMOO":
/***/ (function(module, exports, __webpack_require__) {

const uuid = __webpack_require__("CUYq");

const names = ['james', 'johm', 'jenna', 'patrice', 'thera', 'rowan', 'star'];
const lastNames = ['doe', 'doe', 'fire', 'wind', 'earth', 'fire', 'green'];

const persons = num => {
  const persons = [];

  for (let i = 0; i < num; i++) {
    const _id = uuid();

    const person = {
      _id,
      mail: `foo${i + 1}@mail.com`,
      name: names[i],
      lastName: lastNames[i],
      fullName: `${names[i]} ${lastNames[i]}`,
      perfilImg: `/static/persons/person-${i + 1}.jpg`,
      status: 0,
      url: `/perfil/${_id}`
    };
    persons.push(person);
  }

  return persons;
};

module.exports = persons;

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oHqC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("489e");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loader_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KiU5");
/* harmony import */ var _loader_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loader_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Loader extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    gsap__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].to('#loader_line', 3.5, {
      strokeDashoffset: '-1000',
      repeat: -1,
      ease: Linear.easeNone
    });
  }

  render() {
    const {
      dark
    } = this.props;
    return __jsx("svg", {
      className: "green_loader",
      width: "200",
      height: "200",
      viewBox: "0 0 200 200"
    }, __jsx("polyline", {
      id: "loader_line",
      fill: "none",
      stroke: dark ? "#669f09" : '#fff',
      strokeWidth: "10px",
      strokeDasharray: "500",
      points: "15,185 95,15 185,180 15,180"
    }), __jsx("circle", {
      className: "circle",
      id: "circle-1",
      fill: dark ? "#669f09" : '#fff',
      cx: "20",
      cy: "180",
      r: "20"
    }), __jsx("circle", {
      className: "circle",
      id: "circle-2",
      fill: dark ? "#669f09" : '#fff',
      cx: "95",
      cy: "20",
      r: "20"
    }), __jsx("circle", {
      className: "circle",
      id: "circle-3",
      fill: dark ? "#669f09" : '#fff',
      cx: "180",
      cy: "180",
      r: "20"
    }));
  }

}

;
/* harmony default export */ __webpack_exports__["a"] = (Loader);

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "pI2v":
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "qzSc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ON_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return ON_NOTIFICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return ON_VIEW_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return ON_NOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return ON_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return ON_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return ON_WALLET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return navView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return ON_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return ON_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return ON_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return ON_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return storeSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return ON_POST_REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ON_GREENINFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return ON_GREEN_CREATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return ON_GREENPOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return ON_GREEN_LIKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OFF_GREEN_LIKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return ON_GREEN_WISH_FOUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return ON_GREEN_COMMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return onStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return ON_WISH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ON_FLOAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OFF_FLOAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return ON_VAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return ON_VAULT_HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return ON_VAULT_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return ON_SPACE_HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return ON_SPACE_WALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return ON_SPACE_CHAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return ON_SPACE_FRIENDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return ON_SPACE_EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return ON_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return ON_WALL_TOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return ON_WALL_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ON_CONFIRM; });
/* unused harmony export ON_CHAT_FRIEND */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ON_CHAT_PRIVATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ON_CHAT_CLOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ON_CHAT_MINIMIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ON_CHAT_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ON_CHAT_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return ON_MAIN_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return ON_MAIN_THEME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return ON_POST_VIEW; });
/***********************
NAV
************************/
const ON_DOWN = 'ON_DOWN';
const ON_NOTIFICATIONS = 'ON_NOTIFICATIONS';
const ON_VIEW_NAV = 'ON_VIEW_NAV';
const ON_NOTE = 'ON_NOTE';
const ON_LOADER = 'ON_LOADER';
const ON_LOGIN = 'ON_LOGIN';
const ON_WALLET = 'ON_WALLET';
const navView = {
  GIFT: 'GIFT',
  NOTES: 'NOTES',
  FRIEND: 'FRIEND'
};
/***********************
USER
************************/

const ON_USER = 'ON_USER';
const ON_UPDATE = 'ON_UPDATE';
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
POSTREGISTER
*************************/

const ON_POST_REGISTER = 'ON_POST_REGISTER';
/************************
GREENPOST
*************************/

const ON_GREENINFO = 'ON_GREENINFO';
const ON_GREEN_CREATOR = 'ON_GREEN_CREATOR';
const ON_GREENPOST = 'ON_GREENPOST';
const ON_GREEN_LIKE = 'ON_GREEN_LIKE';
const OFF_GREEN_LIKE = 'OFF_GREEN_LIKE';
const ON_GREEN_WISH_FOUND = 'ON_GREEN_WISH_FOUND';
const ON_GREEN_COMMENT = 'ON_GREEN_COMMENT';
const onStore = () => null;
const ON_WISH = 'ON_WISH';
/****************************
FLOATING NOTES
*****************************/

const ON_FLOAT = 'ON_FLOAT';
const OFF_FLOAT = 'OFF_FLOAT';
/****************************
VAULT
*****************************/

const ON_VAULT = 'ON_VAULT';
const ON_VAULT_HOME = 'ON_VAULT_HOME';
const ON_VAULT_PRODUCT = 'ON_VAULT_PRODUCT';
/****************************
SPACE
*****************************/

const ON_SPACE_HOME = 'ON_SPACE_HOME';
const ON_SPACE_WALL = 'ON_SPACE_WALL';
const ON_SPACE_CHAT = 'ON_SPACE_CHAT';
const ON_SPACE_FRIENDS = 'ON_SPACE_FRIENDS';
const ON_SPACE_EVENTS = 'ON_SPACE_EVENTS';
/****************************
SPACE - WALL
*****************************/

const ON_POST = 'ON_POST';
const ON_WALL_TOP = 'ON_WALL_TOP';
const ON_WALL_POSTS = 'ON_WALL_POSTS';
/****************************
DIALOG - CONFIRM
*****************************/

const ON_CONFIRM = 'ON_CONFIRM';
/****************************
CHAT
*****************************/

const ON_CHAT_FRIEND = 'ON_CHAT_FRIEND';
const ON_CHAT_PRIVATE = 'ON_CHAT_PRIVATE';
const ON_CHAT_CLOSE = 'ON_CHAT_CLOSE';
const ON_CHAT_MINIMIZE = 'ON_CHAT_MINIMIZE';
const ON_CHAT_MSG = 'ON_CHAT_MSG';
const ON_CHAT_ALERT = 'ON_CHAT_ALERT';
/***********************
MAIN
************************/

const ON_MAIN_NAV = 'ON_MAIN_NAV';
const ON_MAIN_THEME = 'ON_MAIN_THEME';
/************************
POST VIEW
*************************/

const ON_POST_VIEW = 'ON_POST_VIEW';

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "uTi6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return font; });
/* unused harmony export size */
const color = {
  prim: "#8bb940",
  sec: "#669f09",
  tri: "#007f1a",
  danger: "#ff6c1a",
  alert: "#f9e453",
  gray1: "#ffffff80",
  light: "#fff",
  dark: "#333"
};
const font = {
  title: 'Sansita',
  text: 'Open Sans',
  logo: 'Pacifico'
};
const size = {
  fontXs: "11px",
  fontSm: "14px",
  fontMd: "16px",
  fontLg: "24px",
  fontXl: "48px",
  fontXxl: "72px"
};

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "y6vh":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });
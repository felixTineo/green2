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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+UYx":
/***/ (function(module, exports) {

module.exports = require("aos");

/***/ }),

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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cMU6");


/***/ }),

/***/ "489e":
/***/ (function(module, exports) {

module.exports = require("gsap");

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

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "IbaP":
/***/ (function(module, exports) {



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

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "UeEY":
/***/ (function(module, exports) {



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

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cMU6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/bootstrap/scss/bootstrap.scss
var bootstrap = __webpack_require__("IbaP");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./store/actions.js
var actions = __webpack_require__("qzSc");

// EXTERNAL MODULE: ./layout/main.js
var main = __webpack_require__("nbCS");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// CONCATENATED MODULE: ./components/main/header.jsx

var __jsx = external_react_default.a.createElement;








const Logo = ({
  header
}) => {
  return __jsx(link_default.a, {
    href: "/main"
  }, __jsx("a", {
    href: "",
    title: "Inicio",
    className: style_default.a.dynamic([["1318557158", [header ? main["a" /* color */].prim : main["a" /* color */].light, main["b" /* font */].title, header ? '1rem' : '2rem', header ? main["a" /* color */].prim : main["a" /* color */].light]]])
  }, __jsx("p", {
    className: style_default.a.dynamic([["1318557158", [header ? main["a" /* color */].prim : main["a" /* color */].light, main["b" /* font */].title, header ? '1rem' : '2rem', header ? main["a" /* color */].prim : main["a" /* color */].light]]])
  }, "GREEN"), __jsx("span", {
    className: style_default.a.dynamic([["1318557158", [header ? main["a" /* color */].prim : main["a" /* color */].light, main["b" /* font */].title, header ? '1rem' : '2rem', header ? main["a" /* color */].prim : main["a" /* color */].light]]])
  }, "LINK"), __jsx(style_default.a, {
    id: "1318557158",
    dynamic: [header ? main["a" /* color */].prim : main["a" /* color */].light, main["b" /* font */].title, header ? '1rem' : '2rem', header ? main["a" /* color */].prim : main["a" /* color */].light]
  }, [`a.__jsx-style-dynamic-selector,a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:none;text-decoration:none;color:${header ? main["a" /* color */].prim : main["a" /* color */].light};margin-left:1rem;}`, `a.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:${main["b" /* font */].title};font-size:${header ? '1rem' : '2rem'};-webkit-transition:250ms ease;transition:250ms ease;}`, "p.__jsx-style-dynamic-selector{margin:0;}", `span.__jsx-style-dynamic-selector{color:transparent;-webkit-text-stroke:1px ${header ? main["a" /* color */].prim : main["a" /* color */].light};}`])));
};

const Header = () => {
  const bars = __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, __jsx("path", {
    d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
  }));

  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: header,
    1: setHeader
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    if (window.scrollY > 10) {
      setHeader(true);
    }
  });
  Object(external_react_["useEffect"])(() => {
    window.onscroll = () => {
      if (window.scrollY > 10) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };
  }, []);
  return __jsx("header", {
    className: style_default.a.dynamic([["2402312291", [header ? '#fff' : 'transparent', header ? '35px' : '45px', header ? '35px' : '45px', header ? main["a" /* color */].prim : 'rgba(255, 255, 255, .7)', header ? `1px solid ${main["a" /* color */].prim}` : 'none', header ? main["a" /* color */].prim : '']]]) + " " + "animated fadeIn"
  }, __jsx(Logo, {
    header: header
  }), __jsx("button", {
    onClick: () => dispatch({
      type: actions["s" /* ON_MAIN_NAV */]
    }),
    className: style_default.a.dynamic([["2402312291", [header ? '#fff' : 'transparent', header ? '35px' : '45px', header ? '35px' : '45px', header ? main["a" /* color */].prim : 'rgba(255, 255, 255, .7)', header ? `1px solid ${main["a" /* color */].prim}` : 'none', header ? main["a" /* color */].prim : '']]])
  }, __jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faBars"]
  })), __jsx(style_default.a, {
    id: "2402312291",
    dynamic: [header ? '#fff' : 'transparent', header ? '35px' : '45px', header ? '35px' : '45px', header ? main["a" /* color */].prim : 'rgba(255, 255, 255, .7)', header ? `1px solid ${main["a" /* color */].prim}` : 'none', header ? main["a" /* color */].prim : '']
  }, [`header.__jsx-style-dynamic-selector{background:${header ? '#fff' : 'transparent'};padding:.8%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:fixed;top:0;left:0;width:100%;z-index:150;-webkit-transition:height 250ms linear;transition:height 250ms linear;box-shadow:0 2px 15px rgba(0,0,0,.3);}`, `button.__jsx-style-dynamic-selector{background:transparent;width:${header ? '35px' : '45px'};height:${header ? '35px' : '45px'};border:none;color:${header ? main["a" /* color */].prim : 'rgba(255, 255, 255, .7)'};-webkit-transition:250ms ease;transition:250ms ease;border:${header ? `1px solid ${main["a" /* color */].prim}` : 'none'};}`, "button.__jsx-style-dynamic-selector:focus{outline:none;}", `button.__jsx-style-dynamic-selector:hover{color:#fff;background:${header ? main["a" /* color */].prim : ''};}`]));
};

/* harmony default export */ var main_header = (Header);
// CONCATENATED MODULE: ./components/main/menu.jsx

var menu_jsx = external_react_default.a.createElement;





const Menu = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const visible = Object(external_react_redux_["useSelector"])(state => state.main.nav.visible);
  return menu_jsx("nav", {
    className: style_default.a.dynamic([["664601504", [main["a" /* color */].gray, main["a" /* color */].dark, visible ? '30%' : '0', main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, visible ? '100%' : '0']]])
  }, menu_jsx("header", {
    className: style_default.a.dynamic([["664601504", [main["a" /* color */].gray, main["a" /* color */].dark, visible ? '30%' : '0', main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, visible ? '100%' : '0']]])
  }, menu_jsx("p", {
    className: style_default.a.dynamic([["664601504", [main["a" /* color */].gray, main["a" /* color */].dark, visible ? '30%' : '0', main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, visible ? '100%' : '0']]])
  }, "Menu"), menu_jsx("button", {
    title: "Cerrar",
    onClick: () => dispatch({
      type: actions["s" /* ON_MAIN_NAV */]
    }),
    className: style_default.a.dynamic([["664601504", [main["a" /* color */].gray, main["a" /* color */].dark, visible ? '30%' : '0', main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, visible ? '100%' : '0']]])
  }, "X")), menu_jsx("ul", {
    className: style_default.a.dynamic([["664601504", [main["a" /* color */].gray, main["a" /* color */].dark, visible ? '30%' : '0', main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, visible ? '100%' : '0']]])
  }, menu_jsx("li", {
    className: style_default.a.dynamic([["664601504", [main["a" /* color */].gray, main["a" /* color */].dark, visible ? '30%' : '0', main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, visible ? '100%' : '0']]])
  }, menu_jsx("button", {
    className: style_default.a.dynamic([["664601504", [main["a" /* color */].gray, main["a" /* color */].dark, visible ? '30%' : '0', main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, visible ? '100%' : '0']]])
  }, "option")), menu_jsx("li", {
    className: style_default.a.dynamic([["664601504", [main["a" /* color */].gray, main["a" /* color */].dark, visible ? '30%' : '0', main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, visible ? '100%' : '0']]])
  }, menu_jsx("button", {
    className: style_default.a.dynamic([["664601504", [main["a" /* color */].gray, main["a" /* color */].dark, visible ? '30%' : '0', main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, visible ? '100%' : '0']]])
  }, "option")), menu_jsx("li", {
    className: style_default.a.dynamic([["664601504", [main["a" /* color */].gray, main["a" /* color */].dark, visible ? '30%' : '0', main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, visible ? '100%' : '0']]])
  }, menu_jsx("button", {
    className: style_default.a.dynamic([["664601504", [main["a" /* color */].gray, main["a" /* color */].dark, visible ? '30%' : '0', main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, visible ? '100%' : '0']]])
  }, "option")), menu_jsx("li", {
    className: style_default.a.dynamic([["664601504", [main["a" /* color */].gray, main["a" /* color */].dark, visible ? '30%' : '0', main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, visible ? '100%' : '0']]])
  }, menu_jsx("button", {
    className: style_default.a.dynamic([["664601504", [main["a" /* color */].gray, main["a" /* color */].dark, visible ? '30%' : '0', main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, visible ? '100%' : '0']]])
  }, "option")), menu_jsx("li", {
    className: style_default.a.dynamic([["664601504", [main["a" /* color */].gray, main["a" /* color */].dark, visible ? '30%' : '0', main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, visible ? '100%' : '0']]])
  }, menu_jsx("button", {
    className: style_default.a.dynamic([["664601504", [main["a" /* color */].gray, main["a" /* color */].dark, visible ? '30%' : '0', main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, visible ? '100%' : '0']]])
  }, "option"))), menu_jsx(style_default.a, {
    id: "664601504",
    dynamic: [main["a" /* color */].gray, main["a" /* color */].dark, visible ? '30%' : '0', main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, visible ? '100%' : '0']
  }, [`nav.__jsx-style-dynamic-selector{background:${main["a" /* color */].gray};color:${main["a" /* color */].dark};width:${visible ? '30%' : '0'};height:100vh;-webkit-transition:500ms ease;transition:500ms ease;overflow:hidden;position:relative;z-index:160;-webkit-flex:2 0 1;-ms-flex:2 0 1;flex:2 0 1;position:-webkit-sticky;position:sticky;top:0;}`, `header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:${main["b" /* font */].title};padding:1rem;}`, "header.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;margin-left:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}", `button.__jsx-style-dynamic-selector{background:transparent;border:none;color:${main["a" /* color */].dark};}`, "button.__jsx-style-dynamic-selector:focus{outline:none;}", "header.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{font-size:1.5rem;text-align:right;}", "ul.__jsx-style-dynamic-selector{width:100%;list-style:none;margin:0;padding:0;border-bottom:1px solid #E6EAEA;}", "li.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{width:100%;border-top:1px solid #E6EAEA;height:70px;text-align:left;font-size:1.4rem;padding-left:2rem;-webkit-transition:250ms ease;transition:250ms ease;}", `li.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{background:${main["a" /* color */].light};}`, `@media(max-width:576px){nav.__jsx-style-dynamic-selector{width:${visible ? '100%' : '0'};}}`]));
};

/* harmony default export */ var main_menu = (Menu);
// CONCATENATED MODULE: ./components/main/layout.jsx

var layout_jsx = external_react_default.a.createElement;







const Modal = () => {
  const menu = Object(external_react_redux_["useSelector"])(state => state.main.nav.visible);
  return layout_jsx("div", {
    className: style_default.a.dynamic([["3625275396", [menu ? 'block' : 'none']]]) + " " + "modal"
  }, layout_jsx(style_default.a, {
    id: "3625275396",
    dynamic: [menu ? 'block' : 'none']
  }, [`.modal.__jsx-style-dynamic-selector{display:${menu ? 'block' : 'none'};position:fixed;top:0;left:0;height:100%;width:100%;background:rgba(0,0,0,.5);z-index:150;content:" ";-webkit-transition:250ms ease;transition:250ms ease;}`]));
};

const Layout = ({
  children
}) => {
  return layout_jsx("div", {
    className: "jsx-2044012869"
  }, layout_jsx(head_default.a, null, layout_jsx("link", {
    rel: "stylesheet",
    href: "/static/animate.min.css",
    className: "jsx-2044012869"
  }), layout_jsx("link", {
    rel: "stylesheet",
    href: "/static/aos.css",
    className: "jsx-2044012869"
  }), layout_jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Archivo+Black|Open+Sans|Pacifico&display=swap",
    rel: "stylesheet",
    className: "jsx-2044012869"
  })), layout_jsx("main", {
    className: "jsx-2044012869"
  }, layout_jsx(main_header, null), children), layout_jsx(main_menu, null), layout_jsx(Modal, null), layout_jsx(style_default.a, {
    id: "2044012869"
  }, ["div.jsx-2044012869{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;position:relative;}", "main.jsx-2044012869{width:100%;position:relative;-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;overflow:hidden;}"]));
};

/* harmony default export */ var layout = (Layout);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__("489e");

// CONCATENATED MODULE: ./components/main/hero.jsx


var hero_jsx = external_react_default.a.createElement;








const Nav = ({
  prim,
  sec,
  img,
  index,
  onStop
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();

  const onTheme = index => {
    onStop(true);
    dispatch({
      type: actions["t" /* ON_MAIN_THEME */],
      index
    });
    setTimeout(() => onStop(false), 15000);
  };

  return hero_jsx("nav", {
    className: style_default.a.dynamic([["4215238909", [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim]]])
  }, hero_jsx("div", {
    className: style_default.a.dynamic([["4215238909", [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim]]]) + " " + "line"
  }), hero_jsx("div", {
    className: style_default.a.dynamic([["4215238909", [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim]]]) + " " + "nav"
  }, hero_jsx("button", {
    onClick: () => onTheme(0),
    className: style_default.a.dynamic([["4215238909", [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim]]])
  }, "1"), hero_jsx("button", {
    onClick: () => onTheme(1),
    className: style_default.a.dynamic([["4215238909", [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim]]])
  }, "2"), hero_jsx("button", {
    onClick: () => onTheme(2),
    className: style_default.a.dynamic([["4215238909", [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim]]])
  }, "3")), hero_jsx("div", {
    className: style_default.a.dynamic([["4215238909", [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim]]]) + " " + "line"
  }), hero_jsx("img", {
    id: "logo",
    src: "/static/logo2.png",
    alt: "",
    className: style_default.a.dynamic([["4215238909", [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim]]])
  }), hero_jsx(style_default.a, {
    id: "4215238909",
    dynamic: [prim, index === 1 ? '#fff' : 'transparent', index === 1 ? prim : '#fff', index === 2 ? '#fff' : 'transparent', index === 2 ? prim : '#fff', index === 3 ? '#fff' : 'transparent', index === 3 ? prim : '#fff', prim]
  }, [`nav.__jsx-style-dynamic-selector{position:absolute;top:0;right:0;height:100vh;width:5%;min-width:50px;background:${prim};display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:100;}`, ".line.__jsx-style-dynamic-selector{width:2px;height:25%;background:#fff;content:\" \";}", "img#logo.__jsx-style-dynamic-selector{position:absolute;bottom:.5rem;width:50px;height:50px;}", "div.nav.__jsx-style-dynamic-selector{margin:2rem 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", "button.__jsx-style-dynamic-selector{width:25px;height:25px;border-radius:50%;border:1px solid #fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:transparent;color:#fff;-webkit-transition:250ms ease;transition:250ms ease;}", `button.__jsx-style-dynamic-selector:nth-child(1){background:${index === 1 ? '#fff' : 'transparent'};color:${index === 1 ? prim : '#fff'};}`, `button.__jsx-style-dynamic-selector:nth-child(2){margin:1rem 0;background:${index === 2 ? '#fff' : 'transparent'};color:${index === 2 ? prim : '#fff'};}`, `button.__jsx-style-dynamic-selector:nth-child(3){background:${index === 3 ? '#fff' : 'transparent'};color:${index === 3 ? prim : '#fff'};}`, `button.__jsx-style-dynamic-selector:hover{background:#fff;color:${prim};}`, "button.__jsx-style-dynamic-selector:focus{outline:none;}"]));
};

const Text = ({
  title,
  subTitle,
  left,
  right
}) => {
  return hero_jsx("div", {
    className: style_default.a.dynamic([["2594515184", [main["b" /* font */].title]]]) + " " + "main"
  }, hero_jsx("div", {
    className: style_default.a.dynamic([["2594515184", [main["b" /* font */].title]]]) + " " + "text"
  }, hero_jsx("h2", {
    className: style_default.a.dynamic([["2594515184", [main["b" /* font */].title]]])
  }, title), hero_jsx("p", {
    className: style_default.a.dynamic([["2594515184", [main["b" /* font */].title]]])
  }, subTitle)), hero_jsx(style_default.a, {
    id: "2594515184",
    dynamic: [main["b" /* font */].title]
  }, ["div.main.__jsx-style-dynamic-selector{width:100%;}", "div.text.__jsx-style-dynamic-selector{text-align:center;}", `h2.__jsx-style-dynamic-selector{font-size:1.5rem;margin:0;font-family:${main["b" /* font */].title};display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}`, "p.__jsx-style-dynamic-selector{font-size:10px;margin:0;}", "@media(min-width:576px){div.text.__jsx-style-dynamic-selector{text-align:left;}h2.__jsx-style-dynamic-selector{font-size:2rem;}}", "@media(min-width:992px){div.text.__jsx-style-dynamic-selector{text-align:left;}h2.__jsx-style-dynamic-selector{font-size:2rem;}}", "@media(min-width:1200px){h2.__jsx-style-dynamic-selector{max-width:272px;}}"]));
};

const BallChain = ({
  right,
  id
}) => {
  return hero_jsx("div", {
    id: id,
    className: "jsx-2920165202" + " " + "ball_chain d-none d-lg-flex"
  }, !right && hero_jsx("div", {
    className: "jsx-2920165202" + " " + "ball"
  }), hero_jsx("div", {
    className: "jsx-2920165202" + " " + "chain"
  }), right && hero_jsx("div", {
    className: "jsx-2920165202" + " " + "ball"
  }), hero_jsx(style_default.a, {
    id: "2920165202"
  }, [".ball_chain.jsx-2920165202{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:0;opacity:0;overflow:hidden;}", ".ball.jsx-2920165202{width:10px;height:10px;border-radius:50%;background:#fff;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}", ".chain.jsx-2920165202{height:2px;background:#fff;width:100%;}"]));
};

const Hero = ({
  theme,
  menu,
  onStop
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    img,
    textBottom,
    prim,
    sec,
    textLeft,
    textRight,
    index
  } = theme;
  Object(external_react_["useEffect"])(() => {
    external_gsap_["TweenMax"].to(`#left`, 2, {
      width: '100%',
      opacity: 1
    });
    external_gsap_["TweenMax"].to(`.textLeft`, 2, {
      opacity: 1,
      delay: 2
    });
    return () => {
      external_gsap_["TweenMax"].to(`.textLeft`, 2, {
        opacity: 0
      });
    };
  }, [menu]);
  Object(external_react_["useEffect"])(() => {
    external_gsap_["TweenMax"].to(`#right`, 2, {
      width: '100%',
      opacity: 1,
      delay: 2
    });
    external_gsap_["TweenMax"].to(`.textRight`, 2, {
      opacity: 1,
      delay: 4
    });
    return () => {
      external_gsap_["TweenMax"].to(`.textRight`, 2, {
        opacity: 0
      });
    };
  }, [menu]);

  const onMove = e => {
    external_gsap_["TweenMax"].to('.moving', 3, {
      left: e.screenX / 50,
      top: e.screenY / 30
    });
  };

  return hero_jsx("div", {
    onMouseMove: onMove,
    className: style_default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', main["b" /* font */].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "hero"
  }, hero_jsx("main", {
    className: style_default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', main["b" /* font */].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "moving"
  }, hero_jsx("div", {
    className: style_default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', main["b" /* font */].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "texts textLeft"
  }, hero_jsx("div", {
    className: style_default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', main["b" /* font */].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "subTextLeft"
  }, !menu && hero_jsx(external_react_default.a.Fragment, null, hero_jsx(Text, {
    title: textLeft.title,
    subTitle: textLeft.subTitle,
    left: true
  }), hero_jsx(link_default.a, {
    href: "/landing"
  }, hero_jsx("button", {
    className: style_default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', main["b" /* font */].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "d-none d-md-block"
  }, "\xBFQuieres Saber M\xE1s?"))))), hero_jsx("div", {
    className: style_default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', main["b" /* font */].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "image animated fadeIn"
  }, hero_jsx("div", {
    className: style_default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', main["b" /* font */].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "ball_chain_left"
  }, !menu && hero_jsx(BallChain, {
    id: "left"
  })), hero_jsx("div", {
    className: style_default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', main["b" /* font */].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "ball_chain_right"
  }, !menu && hero_jsx(BallChain, {
    id: "right",
    right: true
  })), hero_jsx("img", {
    src: img,
    alt: "",
    className: style_default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', main["b" /* font */].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]])
  })), hero_jsx("div", {
    className: style_default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', main["b" /* font */].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "texts textRight"
  }, hero_jsx("div", {
    className: style_default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', main["b" /* font */].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]])
  }, !menu && hero_jsx(Text, {
    title: textRight.title,
    subTitle: textRight.subTitle
  }), hero_jsx("button", {
    className: style_default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', main["b" /* font */].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "d-md-none"
  }, "\xBFQuieres Saber M\xE1s?")))), hero_jsx("footer", {
    className: style_default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', main["b" /* font */].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]])
  }, hero_jsx("h1", {
    className: style_default.a.dynamic([["4043052569", [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', main["b" /* font */].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']]]) + " " + "animated fadeInUp delay-4s"
  }, textBottom)), hero_jsx(style_default.a, {
    id: "4043052569",
    dynamic: [prim, sec, prim, index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh', index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%', index === 1 ? '30%' : index === 2 ? '42%' : '58%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%', index === 1 ? '73%' : index === 2 ? '48%' : '20%', main["b" /* font */].title, index === 1 ? '65px' : '0', index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh', index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%', index === 1 ? '26%' : index === 2 ? '50%' : '40%', index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh', index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%', index === 1 ? '85%' : index === 2 ? '48%' : '28%', index === 1 || index === 2 ? '280px' : '259px', index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh', index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%', index === 1 ? '30%' : index === 2 ? '55%' : '35%', index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh', index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%', index === 1 ? '68%' : index === 2 ? '43%' : '28%']
  }, [`.hero.__jsx-style-dynamic-selector{background:linear-gradient(135deg,${prim},${sec});height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:#fff;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;}`, "main.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;}", ".texts.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".textLeft.__jsx-style-dynamic-selector{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;opacity:0;}", ".subTextLeft.__jsx-style-dynamic-selector{width:60%;}", "button.__jsx-style-dynamic-selector{margin-top:1rem;background:transparent;border:2px solid #fff;font-weight:550;font-size:11px;color:#fff;padding:.5rem;-webkit-transition:250ms ease;transition:250ms ease;}", "button.__jsx-style-dynamic-selector:focus{outline:none;}", `button.__jsx-style-dynamic-selector:hover{background:#fff;color:${prim};}`, ".image.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;z-index:100;}", `.ball_chain_left.__jsx-style-dynamic-selector{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;bottom:${index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh'};left:${index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%'};width:${index === 1 ? '30%' : index === 2 ? '42%' : '58%'};}`, `.ball_chain_right.__jsx-style-dynamic-selector{position:absolute;top:${index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh'};right:${index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%'};width:${index === 1 ? '73%' : index === 2 ? '48%' : '20%'};}`, "img.__jsx-style-dynamic-selector{width:250px;height:250px;}", ".textRight.__jsx-style-dynamic-selector{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0;}", `footer.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-family:${main["b" /* font */].title};margin:0;text-align:center;position:relative;}`, "@media(min-width:576px){main.__jsx-style-dynamic-selector{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.texts.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;width:25%;}.textLeft.__jsx-style-dynamic-selector{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-left:2rem;}.textRight.__jsx-style-dynamic-selector{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-right:5rem;}footer.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-size:6rem;text-shadow:5px 1px 15px rgba(0,0,0,.5);}}", `@media(min-width:992px){texts.__jsx-style-dynamic-selector{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}.textLeft.__jsx-style-dynamic-selector{-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}.subTextLeft.__jsx-style-dynamic-selector{width:80%;}.textRight.__jsx-style-dynamic-selector{margin-top:${index === 1 ? '65px' : '0'};}image.__jsx-style-dynamic-selector{-webkit-flex:1 0 0;-ms-flex:1 0 0;flex:1 0 0;width:60%;}img.__jsx-style-dynamic-selector{width:335px;height:335px;position:relative;}.ball_chain_left.__jsx-style-dynamic-selector{bottom:${index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh'};left:${index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%'};width:${index === 1 ? '26%' : index === 2 ? '50%' : '40%'};}.ball_chain_right.__jsx-style-dynamic-selector{top:${index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh'};right:${index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%'};width:${index === 1 ? '85%' : index === 2 ? '48%' : '28%'};}footer.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-size:8rem;line-height:8rem;}}`, `@media(min-width:1200px){.image.__jsx-style-dynamic-selector{position:relative;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;content:" ";}.textLeft.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{max-width:272px;}.textRight.__jsx-style-dynamic-selector{margin-top:${index === 1 || index === 2 ? '280px' : '259px'};}img.__jsx-style-dynamic-selector{width:500px;height:500px;position:relative;top:100px;}.ball_chain_left.__jsx-style-dynamic-selector{z-index:5;bottom:${index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh'};left:${index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%'};width:${index === 1 ? '30%' : index === 2 ? '55%' : '35%'};}.ball_chain_right.__jsx-style-dynamic-selector{z-index:5;top:${index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh'};right:${index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%'};width:${index === 1 ? '68%' : index === 2 ? '43%' : '28%'};}footer.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-size:12rem;line-height:10rem;}}`]));
};

const Main = () => {
  const index = Object(external_react_redux_["useSelector"])(state => state.main.theme);
  const menu = Object(external_react_redux_["useSelector"])(state => state.main.nav.visible);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: pause,
    1: setPause
  } = Object(external_react_["useState"])(false);
  const themes = [main["d" /* themeGreen */], main["e" /* themeRed */], main["c" /* themeBlue */]];
  Object(external_react_["useEffect"])(() => {
    let i = 0;
    let interval = setInterval(() => {
      if (!pause) {
        i = i < 2 ? i + 1 : 0;
        dispatch({
          type: actions["t" /* ON_MAIN_THEME */],
          index: i
        });
      }
    }, 15000);
    return () => clearInterval(interval);
  }, [pause]);

  const onCursor = e => {
    external_gsap_["TweenMax"].to('#cursor', 0.1, {
      left: e.clientX,
      top: e.clientY
    });
  };

  return hero_jsx("div", {
    className: "jsx-2790436556"
  }, hero_jsx(Nav, Object(esm_extends["a" /* default */])({
    onStop: setPause
  }, themes[index])), index === 0 && hero_jsx(Hero, {
    onStop: setPause,
    theme: main["d" /* themeGreen */],
    menu: menu
  }), index === 1 && hero_jsx(Hero, {
    onStop: setPause,
    theme: main["e" /* themeRed */],
    menu: menu
  }), index === 2 && hero_jsx(Hero, {
    onStop: setPause,
    theme: main["c" /* themeBlue */],
    menu: menu
  }), hero_jsx(style_default.a, {
    id: "2790436556"
  }, ["div.jsx-2790436556{position:relative;}", "#cursor.jsx-2790436556{width:25px;height:25px;top:0;left:0;border-radius:50%;border:1px solid #fff;z-index:500;content:\" \";position:absolute;background:rgba(255,255,255,.3);}"]));
};

/* harmony default export */ var hero = (Main);
// EXTERNAL MODULE: external "uuid/v1"
var v1_ = __webpack_require__("CUYq");
var v1_default = /*#__PURE__*/__webpack_require__.n(v1_);

// CONCATENATED MODULE: ./components/main/title.jsx

var title_jsx = external_react_default.a.createElement;




const Title = ({
  word
}) => {
  const {
    0: queque,
    1: setQueque
  } = Object(external_react_["useState"])(Array(15).fill(word));
  return title_jsx("div", {
    className: style_default.a.dynamic([["1369531362", [main["a" /* color */].prim, main["a" /* color */].prim, main["a" /* color */].prim]]]) + " " + "shadow"
  }, title_jsx("ul", {
    id: "cartext",
    className: style_default.a.dynamic([["1369531362", [main["a" /* color */].prim, main["a" /* color */].prim, main["a" /* color */].prim]]])
  }, queque.map((word, i) => title_jsx("li", {
    key: v1_default()(),
    className: style_default.a.dynamic([["1369531362", [main["a" /* color */].prim, main["a" /* color */].prim, main["a" /* color */].prim]]]) + " " + "cartext"
  }, word))), title_jsx(style_default.a, {
    id: "1369531362",
    dynamic: [main["a" /* color */].prim, main["a" /* color */].prim, main["a" /* color */].prim]
  }, [`div.__jsx-style-dynamic-selector{background:#fff;border-top:3px solid ${main["a" /* color */].prim};border-bottom:3px solid ${main["a" /* color */].prim};}`, `ul.__jsx-style-dynamic-selector{margin:0;padding:1rem;color:${main["a" /* color */].prim};display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:250ms ease;transition:250ms ease;-webkit-animation-name:myAni-__jsx-style-dynamic-selector;animation-name:myAni-__jsx-style-dynamic-selector;-webkit-animation-duration:15s;animation-duration:15s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-transform:translateX(-100px);-ms-transform:translateX(-100px);transform:translateX(-100px);}`, "li.__jsx-style-dynamic-selector{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin:0 1rem;-webkit-transition:250ms ease;transition:250ms ease;text-transform:uppercase;}", "@-webkit-keyframes myAni-__jsx-style-dynamic-selector{0%{-webkit-transform:translateX(-100px);-ms-transform:translateX(-100px);transform:translateX(-100px);}50%{-webkit-transform:translateX(-3px);-ms-transform:translateX(-3px);transform:translateX(-3px);}100%{-webkit-transform:translateX(-100px);-ms-transform:translateX(-100px);transform:translateX(-100px);}}", "@keyframes myAni-__jsx-style-dynamic-selector{0%{-webkit-transform:translateX(-100px);-ms-transform:translateX(-100px);transform:translateX(-100px);}50%{-webkit-transform:translateX(-3px);-ms-transform:translateX(-3px);transform:translateX(-3px);}100%{-webkit-transform:translateX(-100px);-ms-transform:translateX(-100px);transform:translateX(-100px);}}"]));
};

/* harmony default export */ var main_title = (Title);
// EXTERNAL MODULE: ./test/posts.js
var test_posts = __webpack_require__("DZ85");

// EXTERNAL MODULE: external "aos"
var external_aos_ = __webpack_require__("+UYx");
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_);

// EXTERNAL MODULE: ./node_modules/aos/src/sass/aos.scss
var aos = __webpack_require__("UeEY");

// CONCATENATED MODULE: ./components/main/greenpost.jsx


var greenpost_jsx = external_react_default.a.createElement;










const Post = ({
  img,
  title,
  subTitle,
  date,
  history,
  author,
  index
}) => {
  const {
    name,
    lastName,
    perfilImg,
    url
  } = author;
  Object(external_react_["useEffect"])(() => {
    external_aos_default.a.init();
    return external_aos_default.a.refresh();
  }, []);
  return greenpost_jsx("div", {
    "data-aos": "flip-left",
    className: "jsx-1153746147" + " " + "main shadow"
  }, greenpost_jsx("header", {
    className: "jsx-1153746147"
  }, greenpost_jsx("div", {
    className: "jsx-1153746147" + " " + "user"
  }, greenpost_jsx("img", {
    src: perfilImg,
    alt: "",
    className: "jsx-1153746147"
  }), greenpost_jsx("p", {
    className: "jsx-1153746147"
  }, `${name} ${lastName}`)), greenpost_jsx("div", {
    className: "jsx-1153746147" + " " + "date"
  }, greenpost_jsx("p", {
    className: "jsx-1153746147"
  }, new Date(date).toLocaleDateString()), greenpost_jsx("small", {
    className: "jsx-1153746147"
  }, new Date(date).toLocaleTimeString()))), greenpost_jsx("div", {
    className: "jsx-1153746147" + " " + "body"
  }, greenpost_jsx("img", {
    src: img,
    alt: "",
    className: "jsx-1153746147"
  })), greenpost_jsx("footer", {
    className: "jsx-1153746147"
  }, greenpost_jsx("div", {
    className: "jsx-1153746147" + " " + "title"
  }, greenpost_jsx("p", {
    className: "jsx-1153746147"
  }, title), greenpost_jsx("small", {
    className: "jsx-1153746147"
  }, subTitle)), greenpost_jsx("ul", {
    className: "jsx-1153746147" + " " + "info"
  }, greenpost_jsx("li", {
    className: "jsx-1153746147"
  }, greenpost_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faHeart"]
  }), "+ 0"), greenpost_jsx("li", {
    className: "jsx-1153746147"
  }, greenpost_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faGift"]
  }), "+ 0"), greenpost_jsx("li", {
    className: "jsx-1153746147"
  }, greenpost_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faComment"]
  }), greenpost_jsx("span", {
    className: "jsx-1153746147"
  }, "+ 0")))), greenpost_jsx(style_default.a, {
    id: "1153746147"
  }, [".main.jsx-1153746147{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:60vh;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}", "header.jsx-1153746147{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:.5rem;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}", "header.jsx-1153746147 .user.jsx-1153746147{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "header.jsx-1153746147 .user.jsx-1153746147 img.jsx-1153746147{width:50px;height:50px;border-radius:50%;object-fit:cover;object-position:center;}", "header.jsx-1153746147 .user.jsx-1153746147 p.jsx-1153746147{margin:0;}", "header.jsx-1153746147 p.jsx-1153746147{margin:0;}", ".body.jsx-1153746147{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}", ".body.jsx-1153746147 img.jsx-1153746147{width:100%;height:100%;object-fit:cover;object-position:center;}", "footer.jsx-1153746147{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:.5rem;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}", "footer.jsx-1153746147 p.jsx-1153746147{margin:0;}", "footer.jsx-1153746147 .title.jsx-1153746147{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}", "footer.jsx-1153746147 .info.jsx-1153746147{list-style:none;margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}", "li.jsx-1153746147{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:1rem;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}", "li.jsx-1153746147:nth-child(2){margin:0 1rem;}"]));
};

const greenpost_Main = () => {
  const {
    0: posts,
    1: setPosts
  } = Object(external_react_["useState"])(test_posts["posts"]);
  return greenpost_jsx("div", {
    className: "jsx-1114587080" + " " + "main"
  }, greenpost_jsx(main_title, {
    word: "top greenpost's"
  }), greenpost_jsx("ul", {
    className: "jsx-1114587080" + " " + "body"
  }, posts.map((post, index) => greenpost_jsx("li", {
    className: "jsx-1114587080"
  }, greenpost_jsx(Post, Object(esm_extends["a" /* default */])({
    index: index,
    key: v1_default()()
  }, post))))), greenpost_jsx(style_default.a, {
    id: "1114587080"
  }, [".main.jsx-1114587080{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}", ".body.jsx-1114587080{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;list-style:none;margin:0;padding:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}", "li.jsx-1114587080{width:80%;margin:1rem 0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}", "@media(min-width:768px){.body.jsx-1114587080{padding:3rem;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}li.jsx-1114587080{margin:1.5rem 0;width:31%;}}"]));
};

/* harmony default export */ var greenpost = (greenpost_Main);
// EXTERNAL MODULE: ./test/persons.js
var persons = __webpack_require__("nMOO");
var persons_default = /*#__PURE__*/__webpack_require__.n(persons);

// CONCATENATED MODULE: ./components/main/embajada.jsx


var embajada_jsx = external_react_default.a.createElement;






const Embajadores = () => {
  return embajada_jsx("div", {
    className: style_default.a.dynamic([["4051095565", [main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].prim, main["a" /* color */].prim, main["a" /* color */].dark]]]) + " " + "main"
  }, embajada_jsx("div", {
    "data-aos": "fade-in",
    "data-aos-delay": "100",
    className: style_default.a.dynamic([["4051095565", [main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].prim, main["a" /* color */].prim, main["a" /* color */].dark]]]) + " " + "info"
  }, embajada_jsx("h1", {
    className: style_default.a.dynamic([["4051095565", [main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].prim, main["a" /* color */].prim, main["a" /* color */].dark]]])
  }, "salva el planeta"), embajada_jsx("p", {
    className: style_default.a.dynamic([["4051095565", [main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].prim, main["a" /* color */].prim, main["a" /* color */].dark]]])
  }, "Participa en nuestros eventos, auspicia negocios locales, recibe regalos especiales. Se uno de nuestros embajadores como:"), embajada_jsx("ul", {
    className: style_default.a.dynamic([["4051095565", [main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].prim, main["a" /* color */].prim, main["a" /* color */].dark]]])
  }, persons_default()(4).map(person => embajada_jsx("li", {
    className: style_default.a.dynamic([["4051095565", [main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].prim, main["a" /* color */].prim, main["a" /* color */].dark]]])
  }, embajada_jsx("button", {
    className: style_default.a.dynamic([["4051095565", [main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].prim, main["a" /* color */].prim, main["a" /* color */].dark]]])
  }, embajada_jsx("img", {
    src: person.perfilImg,
    alt: "",
    className: style_default.a.dynamic([["4051095565", [main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].prim, main["a" /* color */].prim, main["a" /* color */].dark]]])
  }), embajada_jsx("p", {
    className: style_default.a.dynamic([["4051095565", [main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].prim, main["a" /* color */].prim, main["a" /* color */].dark]]])
  }, `${person.fullName}`)))))), embajada_jsx("div", {
    "data-aos": "fade-left",
    "data-aos-delay": "100",
    className: style_default.a.dynamic([["4051095565", [main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].prim, main["a" /* color */].prim, main["a" /* color */].dark]]]) + " " + "woman"
  }, embajada_jsx("button", {
    className: style_default.a.dynamic([["4051095565", [main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].prim, main["a" /* color */].prim, main["a" /* color */].dark]]])
  }, "Registro"), embajada_jsx("img", {
    src: "/static/cusco.png",
    alt: "",
    className: style_default.a.dynamic([["4051095565", [main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].prim, main["a" /* color */].prim, main["a" /* color */].dark]]])
  })), embajada_jsx("div", {
    className: style_default.a.dynamic([["4051095565", [main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].prim, main["a" /* color */].prim, main["a" /* color */].dark]]]) + " " + "circle"
  }, embajada_jsx("div", {
    className: style_default.a.dynamic([["4051095565", [main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].prim, main["a" /* color */].prim, main["a" /* color */].dark]]]) + " " + "inner_circle"
  }, embajada_jsx("div", {
    className: style_default.a.dynamic([["4051095565", [main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].prim, main["a" /* color */].prim, main["a" /* color */].dark]]]) + " " + "inner_circle"
  }))), embajada_jsx(style_default.a, {
    id: "4051095565",
    dynamic: [main["b" /* font */].title, main["a" /* color */].dark, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].light, main["a" /* color */].prim, main["a" /* color */].prim, main["a" /* color */].dark]
  }, [".main.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:60vh;background:linear-gradient(rgba(0,0,0,.1),#fff);position:relative;}", ".circle.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:65vh;height:65vh;border-radius:50%;border:1px solid rgba(0,0,0,.2);position:absolute;top:0;left:40%;z-index:-1;}", ".inner_circle.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:50vh;width:50vh;border-radius:50%;border:1px solid rgba(0,0,0,.2);}", ".inner_circle.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{width:30vh;height:30vh;}", ".info.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;}", `.info.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{text-transform:uppercase;font-family:${main["b" /* font */].title};margin:0;font-size:5rem;width:60%;color:${main["a" /* color */].dark};background:url(/static/cusco.jpg) no-repeat right;-webkit-background-clip:text;-webkit-text-fill-color:transparent;}`, ".info.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{width:60%;}", "img.__jsx-style-dynamic-selector{width:100%;height:100%;object-fit:cover;object-position:left center;}", ".woman.__jsx-style-dynamic-selector{width:50%;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;position:relative;}", `.woman.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{position:absolute;right:1rem;bottom:1rem;-webkit-transition:250ms ease;transition:250ms ease;background:transparent;border:2px solid ${main["a" /* color */].light};color:${main["a" /* color */].light};font-size:1.5rem;}`, ".woman.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:focus{outline:none;}", `.woman.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{background:${main["a" /* color */].light};border-color:${main["a" /* color */].prim};color:${main["a" /* color */].prim};}`, ".info.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;list-style:none;margin:0;padding:0;}", `.info.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{background:transparent;border:none;color:${main["a" /* color */].dark};display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}`, ".info.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:70px;height:70px;border-radius:50%;object-fit:cover;object-position:center;}", ".info.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;width:100px;}"]));
};

const embajada_Main = () => {
  Object(external_react_["useEffect"])(() => {
    external_aos_default.a.init();
    return () => external_aos_default.a.refresh();
  }, []);
  return embajada_jsx("div", {
    className: "main"
  }, embajada_jsx(main_title, {
    word: "ebajadadores"
  }), embajada_jsx(Embajadores, null));
};

/* harmony default export */ var embajada = (embajada_Main);
// CONCATENATED MODULE: ./pages/index.jsx
var pages_jsx = external_react_default.a.createElement;



 //import MainSection from '../components/main/main';
//import Embajadores from '../components/main/embajador';

 //      <Embajada />

const pages_Main = () => {
  return pages_jsx(layout, null, pages_jsx(hero, null), pages_jsx(embajada, null), pages_jsx(greenpost, null));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Main);

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

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

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

/***/ "nbCS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return color; });
/* unused harmony export greenGradient */
/* unused harmony export greenBackground */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return font; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return themeGreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return themeRed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return themeBlue; });
const color = {
  prim: '#8bb940',
  sec: '#669f09',
  light: '#ffffff',
  dark: '#333333',
  gray: '#f4f7f6'
};
const greenGradient = () => `linear-gradient(135deg, ${color.prim}, ${color.sec})`;
const greenBackground = () => `
  background-color: #8bb940;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%238bb940' width='11' height='11'/%3E%3Crect fill='%238ab93f' x='10' width='11' height='11'/%3E%3Crect fill='%238ab83f' y='10' width='11' height='11'/%3E%3Crect fill='%2389b83e' x='20' width='11' height='11'/%3E%3Crect fill='%2389b73d' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%2388b73c' y='20' width='11' height='11'/%3E%3Crect fill='%2387b63c' x='30' width='11' height='11'/%3E%3Crect fill='%2387b63b' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%2386b53a' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%2385b539' y='30' width='11' height='11'/%3E%3Crect fill='%2385b539' x='40' width='11' height='11'/%3E%3Crect fill='%2384b438' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%2384b437' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%2383b336' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%2382b336' y='40' width='11' height='11'/%3E%3Crect fill='%2382b235' x='50' width='11' height='11'/%3E%3Crect fill='%2381b234' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%2381b133' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%2380b133' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%237fb132' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%237fb031' y='50' width='11' height='11'/%3E%3Crect fill='%237eb030' x='60' width='11' height='11'/%3E%3Crect fill='%237daf30' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%237daf2f' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%237cae2e' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%237cae2d' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%237bad2c' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%237aad2b' x='70' width='11' height='11'/%3E%3Crect fill='%237aad2b' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%2379ac2a' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%2378ac29' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%2378ab28' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%2377ab27' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%2377aa26' x='80' width='11' height='11'/%3E%3Crect fill='%2376aa26' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%2375aa25' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%2375a924' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%2374a923' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%2373a822' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%2373a821' x='90' width='11' height='11'/%3E%3Crect fill='%2372a720' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%2371a71f' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%2371a61e' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%2370a61d' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%2370a61c' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%236fa51b' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%236ea51a' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%236ea419' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%236da418' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%236ca317' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%236ca316' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%236ba215' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%236aa213' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%236aa212' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%2369a111' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%2369a10f' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%2368a00e' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%2367a00c' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23679f0b' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23669f09' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
  //background-attachment: fixed;
  background-size: cover;
  `;
const font = {
  title: 'Archivo Black',
  text: 'Open Sans'
};
const themeGreen = {
  index: 1,
  prim: '#8bb940',
  sec: '#478407',
  img: '/static/main/mundi.png',
  textLeft: {
    title: 'EL PLANETA TE NECESITA',
    subTitle: `Unete con nosotros y diviertete, mietras Proteges el medio ambiente, tan solo por usar greenlink.`
  },
  textRight: {
    title: 'PERÚ',
    subTitle: 'Punto de inicio'
  },
  textBottom: 'PROTEGE!'
};
const themeRed = {
  index: 2,
  prim: '#f03103',
  sec: '#a43112',
  img: '/static/main/gift.png',
  textLeft: {
    title: 'LA NAVIDAD ESTA AQUI',
    subTitle: 'Aprovecha esta hermosa epoca del año para compartir con los seres que amas y Alcanzar tus deseos.'
  },
  textRight: {
    title: 'Regalos',
    subTitle: 'Obten el tuyo ¿Que esperas?'
  },
  textBottom: 'ALCANZA!'
};
const themeBlue = {
  index: 3,
  prim: '#03a7f0',
  sec: '#1251a4',
  img: '/static/main/cofee.png',
  textLeft: {
    title: 'AYUDA CON NOSOTROS',
    subTitle: 'En esta epoca los menos afortunados de las regiones andinas necesitan de ti. Participa mientras te diviertes.'
  },
  textRight: {
    title: 'Calidez',
    subTitle: 'Apoya nuestras causas sociales.'
  },
  textBottom: 'PARTICIPA!'
};

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return ON_VIEW_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return ON_NOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return ON_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return ON_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return ON_WALLET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return navView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return ON_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return ON_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return ON_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return ON_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return storeSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return ON_POST_REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ON_GREENINFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return ON_GREEN_CREATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return ON_GREENPOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return ON_GREEN_LIKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OFF_GREEN_LIKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return ON_GREEN_WISH_FOUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return ON_GREEN_COMMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return onStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return ON_WISH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ON_FLOAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OFF_FLOAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return ON_VAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return ON_VAULT_HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return ON_VAULT_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return ON_SPACE_HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return ON_SPACE_WALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return ON_SPACE_CHAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return ON_SPACE_FRIENDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return ON_SPACE_EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return ON_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return ON_WALL_TOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return ON_WALL_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ON_CONFIRM; });
/* unused harmony export ON_CHAT_FRIEND */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ON_CHAT_PRIVATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ON_CHAT_CLOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ON_CHAT_MINIMIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ON_CHAT_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ON_CHAT_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return ON_MAIN_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return ON_MAIN_THEME; });
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

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "y6vh":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ })

/******/ });
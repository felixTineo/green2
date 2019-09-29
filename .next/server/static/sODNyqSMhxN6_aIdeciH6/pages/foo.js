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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("tLCo");


/***/ }),

/***/ "CUYq":
/***/ (function(module, exports) {

module.exports = require("uuid/v1");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "T4W4":
/***/ (function(module, exports) {



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

/***/ "avu+":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "qzSc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ON_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ON_NOTIFICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ON_VIEW_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ON_NOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ON_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ON_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return navView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ON_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ON_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ON_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return storeSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ON_GREENINFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ON_GREEN_CREATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return onStore; });
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

/***/ "tLCo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./store/actions.js
var actions = __webpack_require__("qzSc");

// EXTERNAL MODULE: ./components/store/store.scss
var store_store = __webpack_require__("avu+");

// EXTERNAL MODULE: ./test/products.js
var test_products = __webpack_require__("Vssk");
var products_default = /*#__PURE__*/__webpack_require__.n(test_products);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");

// EXTERNAL MODULE: external "uuid/v1"
var v1_ = __webpack_require__("CUYq");

// CONCATENATED MODULE: ./components/store/store.jsx
var __jsx = external_react_default.a.createElement;








const Home = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  return __jsx("div", {
    className: "storehome_main_cont"
  }, __jsx("div", {
    className: "cont_left"
  }, __jsx("button", {
    onClick: () => dispatch({
      type: actions["n" /* storeSections */].MUSIC
    }),
    id: "music"
  }, __jsx("img", {
    src: "/static/store/ms.jpg",
    alt: ""
  }), __jsx("span", null, "musica"))), __jsx("div", {
    className: "cont_right"
  }, __jsx("button", {
    onClick: () => dispatch({
      type: actions["n" /* storeSections */].CANDY
    }),
    id: "candy"
  }, __jsx("img", {
    src: "/static/store/gol.jpg",
    alt: ""
  }), __jsx("span", null, "golosinas")), __jsx("button", {
    onClick: () => dispatch({
      type: actions["n" /* storeSections */].JEWEL
    }),
    className: "four",
    id: "jewel"
  }, __jsx("img", {
    src: "/static/store/bis.jpg",
    alt: ""
  }), __jsx("span", null, "bisuteria")), __jsx("button", {
    onClick: () => dispatch({
      type: actions["n" /* storeSections */].TOY
    }),
    className: "four",
    id: "toy"
  }, __jsx("img", {
    src: "/static/store/ty.jpg",
    alt: ""
  }), __jsx("span", null, "juguetes")), __jsx("button", {
    onClick: () => dispatch({
      type: actions["n" /* storeSections */].EBOOK
    }),
    className: "four",
    id: "ebook"
  }, __jsx("img", {
    src: "/static/store/eb.jpg",
    alt: ""
  }), __jsx("span", null, "ebook's")), __jsx("button", {
    onClick: () => dispatch({
      type: actions["n" /* storeSections */].TV
    }),
    className: "four",
    id: "tv"
  }, __jsx("img", {
    src: "static/store/tv.jpg",
    alt: ""
  }), __jsx("span", null, "tv's"))));
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
      type: actions["n" /* storeSections */].PRODUCT,
      product
    });
  };

  return __jsx("div", {
    className: "category_main_cont"
  }, __jsx("ul", null, products.map(product => __jsx("li", null, __jsx("button", {
    onClick: onProduct,
    id: product.id,
    className: "shadow"
  }, __jsx("img", {
    id: product.id,
    src: product.img,
    alt: ""
  }), __jsx("footer", {
    id: product.id
  }, __jsx("p", {
    id: product.id
  }, product.name), __jsx("p", {
    id: product.id
  }, "$", product.price)))))));
};

const Product = () => {
  const product = Object(external_react_redux_["useSelector"])(state => state.greenstore.current);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const owner = Object(external_react_redux_["useSelector"])(state => state.user.owner);
  return __jsx("div", {
    className: "product_main_cont"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12 col-md-6"
  }, __jsx("div", {
    className: "img_cont"
  }, __jsx("img", {
    src: product.img,
    alt: ""
  }))), __jsx("div", {
    className: "col-12 col-md-6"
  }, __jsx("div", {
    className: "description_cont"
  }, __jsx("h1", null, product.name), __jsx("p", null, "precio: $", product.price), __jsx("p", null, product.description)), __jsx("form", null, __jsx("textarea", null), __jsx("footer", null, __jsx("button", {
    onClick: () => dispatch({
      type: product.tag
    })
  }, "atr\xE1s"), __jsx("button", null, owner ? 'agregar' : 'enviar'))))));
};

const Store = () => {
  const store = Object(external_react_redux_["useSelector"])(state => state.greenstore);
  const dispatch = Object(external_react_redux_["useDispatch"])();

  const onProducts = async () => {
    try {
      //const res = await axios.get('/products');
      //dispatch({ type: ON_PRODUCTS, products: res.data });
      dispatch({
        type: actions["h" /* ON_PRODUCTS */],
        products: products_default.a
      });
    } catch (err) {
      console.log(err);
    }
  };

  Object(external_react_["useEffect"])(() => {
    onProducts();
  }, []);
  return __jsx("div", {
    className: "store_main_cont"
  }, store.home && __jsx(Home, null), store.music && __jsx(Category, {
    tag: actions["n" /* storeSections */].MUSIC
  }), store.candy && __jsx(Category, {
    tag: actions["n" /* storeSections */].CANDY
  }), store.jewel && __jsx(Category, {
    tag: actions["n" /* storeSections */].JEWEL
  }), store.toy && __jsx(Category, {
    tag: actions["n" /* storeSections */].TOY
  }), store.ebook && __jsx(Category, {
    tag: actions["n" /* storeSections */].EBOOK
  }), store.tv && __jsx(Category, {
    tag: actions["n" /* storeSections */].TV
  }), store.product && __jsx(Product, null));
};

/* harmony default export */ var components_store_store = (Store);
// EXTERNAL MODULE: ./components/store/store-cont.scss
var store_cont = __webpack_require__("T4W4");

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

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
      type: actions["n" /* storeSections */].HOME
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
      type: actions["i" /* ON_STORE */]
    })
  }, "X")), children));
};

/* harmony default export */ var store_store_cont = (StoreCont);
// CONCATENATED MODULE: ./pages/foo.jsx
var foo_jsx = external_react_default.a.createElement;






const Foo = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const visible = Object(external_react_redux_["useSelector"])(state => state.greenstore.visible);
  return foo_jsx("div", {
    className: "foo_main_cont"
  }, foo_jsx(store_store_cont, null, foo_jsx(components_store_store, null)), foo_jsx("button", {
    onClick: () => dispatch({
      type: actions["i" /* ON_STORE */]
    })
  }, "store"), console.log(visible));
};

/* harmony default export */ var foo = __webpack_exports__["default"] = (Foo);

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });
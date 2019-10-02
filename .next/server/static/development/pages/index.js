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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/about/about.jsx":
/*!************************************!*\
  !*** ./components/about/about.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _about_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.scss */ "./components/about/about.scss");
/* harmony import */ var _about_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_about_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logo_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logo/logo */ "./components/logo/logo.jsx");
/* harmony import */ var _buttons_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buttons/button */ "./components/buttons/button.jsx");
<<<<<<< HEAD:.next/server/static/development/pages/index.js
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/about/about.jsx";
=======
>>>>>>> perfil:.next/server/static/development/pages/index.js

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const About = () => __jsx("section", {
<<<<<<< HEAD:.next/server/static/development/pages/index.js
  className: "about_main_cont",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: "container-fluid",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("div", {
  className: "container_relative",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "EL mundo es tuyo, cuidalo!"), __jsx("div", {
  className: "about_line",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "Greenlink parte de la iniciativa del cambio, Somos la unica red social dispuesta a unir personas por un mundo mas limpio. Mas de 1000 especies hoy en dia estan en la lista de peligro de extigncion, especies que incluso llevan en el mundo mas tiempo que el hombre. Nuestro estilo de vida esta deborando el planeta a un paso alarmante. En greenlink incentivamos la union, la celebracion de la vida, el amor. Nuestra moneda busca aportar a ese cambio."), __jsx("a", {
  href: "#more",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "\xBFQuieres saber mas?"), __jsx("div", {
  className: "logo_about_cont",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx(_buttons_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
  size: "lg",
  color: "light",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "Unete")))));

/* harmony default export */ __webpack_exports__["default"] = (About);

=======
  className: "about_main_cont"
}, __jsx("div", {
  className: "container-fluid"
}, __jsx("div", {
  className: "container_relative"
}, __jsx("h1", null, "EL mundo es tuyo, cuidalo!"), __jsx("div", {
  className: "about_line"
}), __jsx("p", null, "Greenlink parte de la iniciativa del cambio, Somos la unica red social dispuesta a unir personas por un mundo mas limpio. Mas de 1000 especies hoy en dia estan en la lista de peligro de extigncion, especies que incluso llevan en el mundo mas tiempo que el hombre. Nuestro estilo de vida esta deborando el planeta a un paso alarmante. En greenlink incentivamos la union, la celebracion de la vida, el amor. Nuestra moneda busca aportar a ese cambio."), __jsx("a", {
  href: "#more"
}, "\xBFQuieres saber mas?"), __jsx("div", {
  className: "logo_about_cont"
}, __jsx(_buttons_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
  size: "lg",
  color: "light"
}, "Unete")))));

/* harmony default export */ __webpack_exports__["default"] = (About);

>>>>>>> perfil:.next/server/static/development/pages/index.js
/***/ }),

/***/ "./components/about/about.scss":
/*!*************************************!*\
  !*** ./components/about/about.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/buttons/button.jsx":
/*!***************************************!*\
  !*** ./components/buttons/button.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.scss */ "./components/buttons/button.scss");
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
<<<<<<< HEAD:.next/server/static/development/pages/index.js
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/buttons/button.jsx";
=======
>>>>>>> perfil:.next/server/static/development/pages/index.js

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Button = ({
  id,
  color,
  size,
  onClick,
  type,
  children,
  title
}) => __jsx("div", {
<<<<<<< HEAD:.next/server/static/development/pages/index.js
  className: "my_button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
=======
  className: "my_button"
>>>>>>> perfil:.next/server/static/development/pages/index.js
}, __jsx("button", {
  id: id,
  title: title,
  color: color,
  onClick: onClick,
  type: type,
  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    my_button: true,
    md: size === "md",
    lg: size === "lg",
    light: color === "light",
    dark: color === "dark"
<<<<<<< HEAD:.next/server/static/development/pages/index.js
  }),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
=======
  })
>>>>>>> perfil:.next/server/static/development/pages/index.js
}, children));

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/buttons/button.scss":
/*!****************************************!*\
  !*** ./components/buttons/button.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/explain/explain.jsx":
/*!****************************************!*\
  !*** ./components/explain/explain.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _explain_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explain.scss */ "./components/explain/explain.scss");
/* harmony import */ var _explain_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_explain_scss__WEBPACK_IMPORTED_MODULE_1__);
<<<<<<< HEAD:.next/server/static/development/pages/index.js
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/explain/explain.jsx";
=======
>>>>>>> perfil:.next/server/static/development/pages/index.js

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Explain = () => __jsx("section", {
<<<<<<< HEAD:.next/server/static/development/pages/index.js
  className: "explain_main_cont",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("header", {
  className: "explain_title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("p", {
  className: "container-fluid",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "Nuestra estrategia incluye a las empresas y los usuarios, Juntos por un mundo mas limpio")), __jsx("div", {
  className: "explain_body_cont container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("div", {
  className: "col-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("div", {
  className: "explain_cont shadow",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("img", {
  className: "img-fluid",
  src: "/static/explain-1.jpg",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx("strong", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "Crea"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "Crea tu publicasion, como en cualquier otra red social. Diviertete publicando tus fotos, videos y pensamientos."))), __jsx("div", {
  className: "col-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx("div", {
  className: "explain_cont shadow",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("img", {
  className: "img-fluid",
  src: "/static/explain-2.jpg",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}), __jsx("strong", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, "Comparte"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, "Comparte con tus familiares y amigos. Unidos crearemos un mundo mejor para todos. Simplemente compartiendo e incentivando el cambio!"))), __jsx("div", {
  className: "col-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("div", {
  className: "explain_cont shadow",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx("img", {
  className: "img-fluid",
  src: "/static/explain-3.jpg",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), __jsx("strong", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, "Gana"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, "Gana credito por tu publicasion a travez de corazones, comentarios y Ey! quizas recibas una grata Sorpresa de nuestra tienda.")))), __jsx("div", {
=======
  className: "explain_main_cont"
}, __jsx("header", {
  className: "explain_title"
}, __jsx("p", {
  className: "container-fluid"
}, "Nuestra estrategia incluye a las empresas y los usuarios, Juntos por un mundo mas limpio")), __jsx("div", {
  className: "explain_body_cont container"
}, __jsx("div", {
  className: "row"
}, __jsx("div", {
  className: "col-4"
}, __jsx("div", {
  className: "explain_cont shadow"
}, __jsx("img", {
  className: "img-fluid",
  src: "/static/explain-1.jpg",
  alt: ""
}), __jsx("strong", null, "Crea"), __jsx("p", null, "Crea tu publicasion, como en cualquier otra red social. Diviertete publicando tus fotos, videos y pensamientos."))), __jsx("div", {
  className: "col-4"
}, __jsx("div", {
  className: "explain_cont shadow"
}, __jsx("img", {
  className: "img-fluid",
  src: "/static/explain-2.jpg",
  alt: ""
}), __jsx("strong", null, "Comparte"), __jsx("p", null, "Comparte con tus familiares y amigos. Unidos crearemos un mundo mejor para todos. Simplemente compartiendo e incentivando el cambio!"))), __jsx("div", {
  className: "col-4"
}, __jsx("div", {
  className: "explain_cont shadow"
}, __jsx("img", {
  className: "img-fluid",
  src: "/static/explain-3.jpg",
  alt: ""
}), __jsx("strong", null, "Gana"), __jsx("p", null, "Gana credito por tu publicasion a travez de corazones, comentarios y Ey! quizas recibas una grata Sorpresa de nuestra tienda.")))), __jsx("div", {
>>>>>>> perfil:.next/server/static/development/pages/index.js
  className: "row",
  style: {
    margin: "2rem 0",
    borderBottom: "4px solid  #8bb940"
<<<<<<< HEAD:.next/server/static/development/pages/index.js
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, __jsx("div", {
  className: "col-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, __jsx("div", {
  className: "explain_coin_cont",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, __jsx("path", {
  d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
})), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, "Greencoin"))), __jsx("div", {
  className: "col-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, __jsx("div", {
  className: "coin_info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, "\xBFComo obtener Greencoins?"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, "Existen varios met\xF3dos para obtener greencoins; reciclando, comprando productos participantes en nuestra iniciativa, creando publicasiones y colaborando en los eventos de greenlink. Unidos crearemos un mundo mejor para las generaciones futuras.")))), __jsx("div", {
  className: "explain_store_cont",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, __jsx("div", {
  className: "col-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, "\xBFDonde canjear los greencoins?"), __jsx("img", {
  src: "/static/store-2.jpg",
  alt: "",
  className: "img-fluid shadow",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, "En nuestra tienda encontraras un amplia variedad de productos participantes, divididos en categorias tales como: Acesorios, Golosinas, Juguetes, Ebooks, Musica y Supscripciones a servicios de streaming. Podras canjear tus greencoins, enviarle regalos a amigos por sus publicasiones, participar por premios y mas.")), __jsx("div", {
  className: "col-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
=======
  }
}, __jsx("div", {
  className: "col-4"
}, __jsx("div", {
  className: "explain_coin_cont"
}, __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, __jsx("path", {
  d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"
})), __jsx("p", null, "Greencoin"))), __jsx("div", {
  className: "col-8"
}, __jsx("div", {
  className: "coin_info"
}, __jsx("h3", null, "\xBFComo obtener Greencoins?"), __jsx("p", null, "Existen varios met\xF3dos para obtener greencoins; reciclando, comprando productos participantes en nuestra iniciativa, creando publicasiones y colaborando en los eventos de greenlink. Unidos crearemos un mundo mejor para las generaciones futuras.")))), __jsx("div", {
  className: "explain_store_cont"
}, __jsx("div", {
  className: "row"
}, __jsx("div", {
  className: "col-12"
}, __jsx("h3", null, "\xBFDonde canjear los greencoins?"), __jsx("img", {
  src: "/static/store-2.jpg",
  alt: "",
  className: "img-fluid shadow"
}), __jsx("p", null, "En nuestra tienda encontraras un amplia variedad de productos participantes, divididos en categorias tales como: Acesorios, Golosinas, Juguetes, Ebooks, Musica y Supscripciones a servicios de streaming. Podras canjear tus greencoins, enviarle regalos a amigos por sus publicasiones, participar por premios y mas.")), __jsx("div", {
  className: "col-12"
>>>>>>> perfil:.next/server/static/development/pages/index.js
})))));

/* harmony default export */ __webpack_exports__["default"] = (Explain);

/***/ }),

/***/ "./components/explain/explain.scss":
/*!*****************************************!*\
  !*** ./components/explain/explain.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/form/form.scss":
/*!***********************************!*\
  !*** ./components/form/form.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
<<<<<<< HEAD:.next/server/static/development/pages/index.js

/***/ "./components/form/input.jsx":
/*!***********************************!*\
  !*** ./components/form/input.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _form_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.scss */ "./components/form/form.scss");
/* harmony import */ var _form_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_form_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/form/input.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const eyeOpen = __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("path", {
  d: "M569.354 231.631C512.969 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-75.162 0-136-60.827-136-136 0-75.162 60.826-136 136-136 75.162 0 136 60.826 136 136 0 75.162-60.826 136-136 136zm104-136c0 57.438-46.562 104-104 104s-104-46.562-104-104c0-17.708 4.431-34.379 12.236-48.973l-.001.032c0 23.651 19.173 42.823 42.824 42.823s42.824-19.173 42.824-42.823c0-23.651-19.173-42.824-42.824-42.824l-.032.001C253.621 156.431 270.292 152 288 152c57.438 0 104 46.562 104 104z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
=======

/***/ "./components/form/input.jsx":
/*!***********************************!*\
  !*** ./components/form/input.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _form_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.scss */ "./components/form/form.scss");
/* harmony import */ var _form_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_form_scss__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const eyeOpen = __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512"
}, __jsx("path", {
  d: "M569.354 231.631C512.969 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-75.162 0-136-60.827-136-136 0-75.162 60.826-136 136-136 75.162 0 136 60.826 136 136 0 75.162-60.826 136-136 136zm104-136c0 57.438-46.562 104-104 104s-104-46.562-104-104c0-17.708 4.431-34.379 12.236-48.973l-.001.032c0 23.651 19.173 42.823 42.824 42.823s42.824-19.173 42.824-42.823c0-23.651-19.173-42.824-42.824-42.824l-.032.001C253.621 156.431 270.292 152 288 152c57.438 0 104 46.562 104 104z"
>>>>>>> perfil:.next/server/static/development/pages/index.js
}));

const eyeClose = __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
<<<<<<< HEAD:.next/server/static/development/pages/index.js
  viewBox: "0 0 576 512",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("path", {
  d: "M286.693 391.984l32.579 46.542A333.958 333.958 0 0 1 288 440C168.19 440 63.031 376.051 6.646 280.369a47.999 47.999 0 0 1 0-48.739c24.023-40.766 56.913-75.775 96.024-102.537l57.077 81.539C154.736 224.82 152 240.087 152 256c0 74.736 60.135 135.282 134.693 135.984zm282.661-111.615c-31.667 53.737-78.747 97.46-135.175 125.475l.011.015 41.47 59.2c7.6 10.86 4.96 25.82-5.9 33.42l-13.11 9.18c-10.86 7.6-25.82 4.96-33.42-5.9L100.34 46.94c-7.6-10.86-4.96-25.82 5.9-33.42l13.11-9.18c10.86-7.6 25.82-4.96 33.42 5.9l51.038 72.617C230.68 75.776 258.905 72 288 72c119.81 0 224.969 63.949 281.354 159.631a48.002 48.002 0 0 1 0 48.738zM424 256c0-75.174-60.838-136-136-136-17.939 0-35.056 3.473-50.729 9.772l19.299 27.058c25.869-8.171 55.044-6.163 80.4 7.41h-.03c-23.65 0-42.82 19.17-42.82 42.82 0 23.626 19.147 42.82 42.82 42.82 23.65 0 42.82-19.17 42.82-42.82v-.03c18.462 34.49 16.312 77.914-8.25 110.95v.01l19.314 27.061C411.496 321.2 424 290.074 424 256zM262.014 356.727l-77.53-110.757c-5.014 52.387 29.314 98.354 77.53 110.757z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
=======
  viewBox: "0 0 576 512"
}, __jsx("path", {
  d: "M286.693 391.984l32.579 46.542A333.958 333.958 0 0 1 288 440C168.19 440 63.031 376.051 6.646 280.369a47.999 47.999 0 0 1 0-48.739c24.023-40.766 56.913-75.775 96.024-102.537l57.077 81.539C154.736 224.82 152 240.087 152 256c0 74.736 60.135 135.282 134.693 135.984zm282.661-111.615c-31.667 53.737-78.747 97.46-135.175 125.475l.011.015 41.47 59.2c7.6 10.86 4.96 25.82-5.9 33.42l-13.11 9.18c-10.86 7.6-25.82 4.96-33.42-5.9L100.34 46.94c-7.6-10.86-4.96-25.82 5.9-33.42l13.11-9.18c10.86-7.6 25.82-4.96 33.42 5.9l51.038 72.617C230.68 75.776 258.905 72 288 72c119.81 0 224.969 63.949 281.354 159.631a48.002 48.002 0 0 1 0 48.738zM424 256c0-75.174-60.838-136-136-136-17.939 0-35.056 3.473-50.729 9.772l19.299 27.058c25.869-8.171 55.044-6.163 80.4 7.41h-.03c-23.65 0-42.82 19.17-42.82 42.82 0 23.626 19.147 42.82 42.82 42.82 23.65 0 42.82-19.17 42.82-42.82v-.03c18.462 34.49 16.312 77.914-8.25 110.95v.01l19.314 27.061C411.496 321.2 424 290.074 424 256zM262.014 356.727l-77.53-110.757c-5.014 52.387 29.314 98.354 77.53 110.757z"
>>>>>>> perfil:.next/server/static/development/pages/index.js
}));

class Input extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      eye: false,
      eyeShow: false,
      type: 'text'
    };
    this.handleEye = this.handleEye.bind(this);
  }

  componentWillMount() {
    const {
      type
    } = this.props;

    if (type === 'password') {
      this.setState({
        type: 'password',
        eyeShow: true
      });
    }
  }

  handleEye() {
    const {
      eye
    } = this.state;

    if (!eye) {
      this.setState({
        eye: true,
        type: 'text'
      });
    } else {
      this.setState({
        eye: false,
        type: 'password'
      });
    }
  }

  render() {
    const {
      id,
      type,
      value,
      pop,
      popText,
      onBlur,
      onFocus,
      onChange,
      color,
      placeholder,
      label,
      style
    } = this.props;
    const {
      eye
    } = this.state;
    return __jsx("div", {
<<<<<<< HEAD:.next/server/static/development/pages/index.js
      className: "input_main_cont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
=======
      className: "input_main_cont"
>>>>>>> perfil:.next/server/static/development/pages/index.js
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        input_cont: true,
        light: color === 'light',
        dark: color === 'dark'
      }),
<<<<<<< HEAD:.next/server/static/development/pages/index.js
      style: style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("label", {
      htmlFor: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, label), __jsx("div", {
      className: "input_eye",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
=======
      style: style
    }, __jsx("label", {
      htmlFor: id
    }, label), __jsx("div", {
      className: "input_eye"
>>>>>>> perfil:.next/server/static/development/pages/index.js
    }, __jsx("input", {
      id: id,
      value: value,
      name: id,
      type: this.state.type,
      onBlur: onBlur,
      onFocus: onFocus,
      onChange: onChange,
<<<<<<< HEAD:.next/server/static/development/pages/index.js
      placeholder: placeholder,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }), this.state.eyeShow && __jsx("span", {
      className: "pass",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, eye ? __jsx("button", {
      onClick: this.handleEye,
      type: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, eyeOpen) : __jsx("button", {
      onClick: this.handleEye,
      type: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, eyeClose))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      placement: "bottom",
      target: id,
      isOpen: pop,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PopoverBody"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, popText))));
=======
      placeholder: placeholder
    }), this.state.eyeShow && __jsx("span", {
      className: "pass"
    }, eye ? __jsx("button", {
      onClick: this.handleEye,
      type: "button"
    }, eyeOpen) : __jsx("button", {
      onClick: this.handleEye,
      type: "button"
    }, eyeClose))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      placement: "bottom",
      target: id,
      isOpen: pop
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PopoverBody"], null, popText))));
>>>>>>> perfil:.next/server/static/development/pages/index.js
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./components/hero/hero.jsx":
/*!**********************************!*\
  !*** ./components/hero/hero.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _social_buttons_heart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../social-buttons/heart */ "./components/social-buttons/heart.jsx");
/* harmony import */ var _social_buttons_gift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../social-buttons/gift */ "./components/social-buttons/gift.jsx");
/* harmony import */ var _social_buttons_comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../social-buttons/comment */ "./components/social-buttons/comment.jsx");
/* harmony import */ var _social_buttons_share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../social-buttons/share */ "./components/social-buttons/share.jsx");
/* harmony import */ var _buttons_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buttons/button */ "./components/buttons/button.jsx");
/* harmony import */ var _register_cont__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-cont */ "./components/hero/register-cont.jsx");
/* harmony import */ var _form_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form/input */ "./components/form/input.jsx");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/functions */ "./utils/functions.js");
/* harmony import */ var _hero_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hero.scss */ "./components/hero/hero.scss");
/* harmony import */ var _hero_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_hero_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _loader_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../loader/loader */ "./components/loader/loader.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
<<<<<<< HEAD:.next/server/static/development/pages/index.js
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/hero/hero.jsx";
=======
>>>>>>> perfil:.next/server/static/development/pages/index.js
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















class Hero extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      register: false,
      spinner: false,
      registerForm: true,
      mail: '',
      mailError: false,
      mailPop: false,
      pass: '',
      passPop: false
    };
    this.onRegister = this.onRegister.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    gsap__WEBPACK_IMPORTED_MODULE_12__["TweenMax"].to('#comparte', 7, {
      strokeDashoffset: 0,
      delay: 3.5
    });
  }

  onRegister() {
    const {
      register
    } = this.state;
    this.setState({
      register: !register
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleFocus(e) {
    const element = `${e.target.id}Pop`;
    this.setState({
      [element]: false
    });
  }

  async onSubmit(e) {
    e.preventDefault();
    const {
      mail,
      pass
    } = this.state;

    if (!Object(_utils_functions__WEBPACK_IMPORTED_MODULE_8__["validateEmail"])(mail.trim().toLocaleLowerCase())) {
      this.setState({
        mailPop: true
      });
    } else if (!Object(_utils_functions__WEBPACK_IMPORTED_MODULE_8__["validateEmpty"])(pass)) {
      this.setState({
        passPop: true
      });
    } else {
      const data = {
        mail: mail.trim().toLocaleLowerCase(),
        pass: pass
      };

      try {
        this.setState({
          spinner: true
        });
        const res = await axios__WEBPACK_IMPORTED_MODULE_13___default.a.post('/user/register', data);
        this.setState({
          spinner: false
        });
        next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push({
          pathname: `/perfil?id=${res.data.id}`,
          query: res.data
        }, `/perfil/${res.data._id}`);
      } catch (err) {
        this.setState({
          mailError: true,
          spinner: false
        });
      }
      /*const options = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(data),
      }
      this.setState({ spinner:true })
      fetch('/api/registro.js', options)
        .then((res)=> {
          if (res.status === 201) {
            res.text().then((res) => {
              Router.push(`/postregistro?id=${res}`);
            })
          } else {
            this.setState({ mailError: true, spinner: false });
          }
        })*/

    }
  }

  render() {
    const {
      register,
      mail,
      mailError,
      mailPop,
      pass,
      passPop,
      spinner
    } = this.state;

    const arrowCircle = __jsx("svg", {
      className: "next",
      xmlns: "http://www.w3.org/2000/svg",
<<<<<<< HEAD:.next/server/static/development/pages/index.js
      viewBox: "0 0 512 512",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx("path", {
      d: "M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }));

    return __jsx("section", {
      className: "hero_main_cont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx("p", {
      className: "vertical_text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, "La unica red social donde puedes ganar regalos y criptomonedas mientras te diviertes y ayudas al planeta"), __jsx(_register_cont__WEBPACK_IMPORTED_MODULE_6__["default"], {
      isOpen: register,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, !spinner && __jsx("form", {
      className: "p-0",
      onSubmit: this.onSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, __jsx("div", {
      className: "inputs_cont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, __jsx("div", {
      className: "mail_cont_registro",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
=======
      viewBox: "0 0 512 512"
    }, __jsx("path", {
      d: "M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"
    }));

    return __jsx("section", {
      className: "hero_main_cont"
    }, __jsx("p", {
      className: "vertical_text"
    }, "La unica red social donde puedes ganar regalos y criptomonedas mientras te diviertes y ayudas al planeta"), __jsx(_register_cont__WEBPACK_IMPORTED_MODULE_6__["default"], {
      isOpen: register
    }, !spinner && __jsx("form", {
      className: "p-0",
      onSubmit: this.onSubmit
    }, __jsx("div", {
      className: "inputs_cont"
    }, __jsx("div", {
      className: "mail_cont_registro"
>>>>>>> perfil:.next/server/static/development/pages/index.js
    }, __jsx(_form_input__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: "mail",
      type: "text",
      value: mail,
      pop: mailPop,
      popText: "El correo no es valido",
      color: "light",
      placeholder: "indique su direccion de correo",
      label: "Correo",
      onChange: this.handleChange,
      onFocus: this.handleFocus,
      style: mailError ? {
        borderColor: 'red'
      } : {
        borderColor: '#fff'
<<<<<<< HEAD:.next/server/static/development/pages/index.js
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
=======
      }
>>>>>>> perfil:.next/server/static/development/pages/index.js
    }), __jsx("small", {
      style: mailError ? {
        display: 'block'
      } : {
        display: 'none'
<<<<<<< HEAD:.next/server/static/development/pages/index.js
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
=======
      }
>>>>>>> perfil:.next/server/static/development/pages/index.js
    }, "El correo ya existe!")), __jsx(_form_input__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: "pass",
      type: "password",
      value: pass,
      pop: passPop,
      popText: "No puede estar vacio",
      color: "light",
      placeholder: "Contrase\xF1a",
      label: "Contrase\xF1a",
      onChange: this.handleChange,
<<<<<<< HEAD:.next/server/static/development/pages/index.js
      onFocus: this.handleFocus,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    })), __jsx("button", {
      title: "Registrar",
      type: "submit",
      className: "btn_next",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, arrowCircle)), spinner && __jsx("div", {
      style: {
        marginTop: '25%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, __jsx("div", {
      className: "register_loader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, __jsx(_loader_loader__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    })))), __jsx("div", {
      className: "container-fluid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, __jsx("div", {
      className: "col-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, __jsx("div", {
      className: "social_nav_cont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, __jsx("nav", {
      className: "social_nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, __jsx(_social_buttons_heart__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "fadeIn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }), __jsx(_social_buttons_share__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "fadeIn delay-1s",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }), __jsx(_social_buttons_gift__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "fadeIn delay-2s",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }), __jsx(_social_buttons_comment__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "fadeIn delay-3s",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    })))), __jsx("div", {
      className: "col-7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, __jsx("div", {
      className: "msg_cont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, __jsx("div", {
      className: "msg_cont-2 animated fadeIn delay-5s",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
=======
      onFocus: this.handleFocus
    })), __jsx("button", {
      title: "Registrar",
      type: "submit",
      className: "btn_next"
    }, arrowCircle)), spinner && __jsx("div", {
      style: {
        marginTop: '25%'
      }
    }, __jsx("div", {
      className: "register_loader"
    }, __jsx(_loader_loader__WEBPACK_IMPORTED_MODULE_10__["default"], null)))), __jsx("div", {
      className: "container-fluid"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-3"
    }, __jsx("div", {
      className: "social_nav_cont"
    }, __jsx("nav", {
      className: "social_nav"
    }, __jsx(_social_buttons_heart__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "fadeIn"
    }), __jsx(_social_buttons_share__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "fadeIn delay-1s"
    }), __jsx(_social_buttons_gift__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "fadeIn delay-2s"
    }), __jsx(_social_buttons_comment__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "fadeIn delay-3s"
    })))), __jsx("div", {
      className: "col-7"
    }, __jsx("div", {
      className: "msg_cont"
    }, __jsx("div", {
      className: "msg_cont-2 animated fadeIn delay-5s"
>>>>>>> perfil:.next/server/static/development/pages/index.js
    }, __jsx(_buttons_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Registro",
      onClick: this.onRegister,
      size: "lg",
<<<<<<< HEAD:.next/server/static/development/pages/index.js
      color: "light",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, "Unete"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, "A Greenlink")), __jsx("div", {
      className: "msg_cont-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, __jsx("h1", {
      className: "animated delay-2s",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, __jsx("svg", {
      width: "376px",
      height: "86",
      className: "hero_comparte",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
=======
      color: "light"
    }, "Unete"), __jsx("p", null, "A Greenlink")), __jsx("div", {
      className: "msg_cont-1"
    }, __jsx("h1", {
      className: "animated delay-2s"
    }, __jsx("svg", {
      width: "376px",
      height: "86",
      className: "hero_comparte"
>>>>>>> perfil:.next/server/static/development/pages/index.js
    }, __jsx("text", {
      id: "comparte",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "2px",
      strokeDasharray: "600px",
      strokeDashoffset: "600",
      fontSize: "72px",
      x: "0",
<<<<<<< HEAD:.next/server/static/development/pages/index.js
      y: "68",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, "COMPARTE"))), __jsx("div", {
      className: "msg_complementary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, __jsx("p", {
      className: "animated fadeIn delay-3s",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, "Disfruta,"), __jsx("p", {
      className: "animated fadeIn delay-4s",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, "Diviertete,"), __jsx("p", {
      className: "animated fadeIn delay-5s",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
=======
      y: "68"
    }, "COMPARTE"))), __jsx("div", {
      className: "msg_complementary"
    }, __jsx("p", {
      className: "animated fadeIn delay-3s"
    }, "Disfruta,"), __jsx("p", {
      className: "animated fadeIn delay-4s"
    }, "Diviertete,"), __jsx("p", {
      className: "animated fadeIn delay-5s"
>>>>>>> perfil:.next/server/static/development/pages/index.js
    }, "Gana greencoins"))))))));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/hero/hero.scss":
/*!***********************************!*\
  !*** ./components/hero/hero.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/hero/register-cont.jsx":
/*!*******************************************!*\
  !*** ./components/hero/register-cont.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _register_cont_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-cont.scss */ "./components/hero/register-cont.scss");
/* harmony import */ var _register_cont_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_register_cont_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
<<<<<<< HEAD:.next/server/static/development/pages/index.js
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/hero/register-cont.jsx";
=======
>>>>>>> perfil:.next/server/static/development/pages/index.js
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class RegisterCont extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      isOpen,
      children
    } = this.props;
    return __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        reigster_cont: true,
        slideInRight: isOpen,
        slideOutRight: !isOpen
<<<<<<< HEAD:.next/server/static/development/pages/index.js
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Registro"), children);
=======
      })
    }, __jsx("h1", null, "Registro"), children);
>>>>>>> perfil:.next/server/static/development/pages/index.js
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (RegisterCont);

/***/ }),

/***/ "./components/hero/register-cont.scss":
/*!********************************************!*\
  !*** ./components/hero/register-cont.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/layout/header.jsx":
/*!**************************************!*\
  !*** ./components/layout/header.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo */ "./components/layout/logo.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.scss */ "./components/layout/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uuid/v1 */ "uuid/v1");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/layout/header.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const DownBar = () => {
  const {
    0: down,
    1: setDown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (window.innerWidth < 576) {
      setSm(true);
    }
  }, []);
  return __jsx("div", {
    className: "down_bar",
    style: {
      height: down || sm ? 40 : 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  });
};

const SearchBar = () => {
  const testList = ["felix", "luis", "maximiliano", "francisco", 'teresa', 'yleana'];
  const {
    0: suggest,
    1: setSuggest
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const onSuggest = e => {
    const value = e.target.value;

    if (value) {
      value.toLocaleLowerCase();
      const suggest = testList.filter(name => name.toLocaleLowerCase().indexOf(value) > -1);
      setSuggest(suggest);
    } else {
      setSuggest([]);
    }
  };

  return __jsx("div", {
    className: "searchbar_main_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx("div", {
    className: "search_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("input", {
    onChange: onSuggest,
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSearch"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }))), __jsx("ul", {
    style: {
      padding: suggest.length > 0 ? '.2rem' : '0'
    },
    className: "sugesstlist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, suggest.map(item => __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, item))));
};

const Gift = () => {
  const gifts = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.nav.notifications.gifts);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const onView = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_7__["ON_VIEW_NAV"],
      note: _store_actions__WEBPACK_IMPORTED_MODULE_7__["navView"].GIFT
    });
  });
  return __jsx("div", {
    className: "btnicon_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("button", {
    id: "gift",
    onClick: onView,
    style: gifts.view && gifts.length > 0 ? {
      background: "#fff",
      color: "#ff6c1a"
    } : {
      background: "transparent",
      color: "#fff"
    },
    className: "btnicon_nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faGift"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  })), __jsx("span", {
    style: gifts.view && gifts.length > 0 ? {
      color: "#ff6c1a"
    } : {
      color: "#fff"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, "+", gifts.items.length));
};

const Note = () => {
  const notes = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.nav.notifications.notes);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const onView = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_7__["ON_VIEW_NAV"],
      note: _store_actions__WEBPACK_IMPORTED_MODULE_7__["navView"].NOTES
    });
  });
  const {
    0: pop,
    1: setPop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleView = () => {
    onView();
    setPop(!pop);
  };

  const handleViewOut = () => {
    setPop(false);
  };

  return __jsx("div", {
    className: "btnicon_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, __jsx("button", {
    id: "note",
    onClick: handleView,
    style: notes.view && notes.length > 0 ? {
      background: "#fff",
      color: "#ff6c1a"
    } : {
      background: "transparent",
      color: "#fff"
    },
    className: "btnicon_nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBell"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  })), __jsx("span", {
    style: notes.view && notes.length > 0 ? {
      color: "#ff6c1a"
    } : {
      color: "#fff"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, "+", notes.items.length), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Popover"], {
    target: "note",
    isOpen: pop,
    placement: "bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["PopoverBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, __jsx("ul", {
    onClick: handleViewOut,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, notes.items.map(item => __jsx("li", {
    key: uuid_v1__WEBPACK_IMPORTED_MODULE_11___default()(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, item.id))))));
};

const Friend = () => {
  const friend = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.nav.notifications.friendReq);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const onView = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_7__["ON_VIEW_NAV"],
      note: _store_actions__WEBPACK_IMPORTED_MODULE_7__["navView"].FRIEND
    });
  });
  /*  const [list, setList] = useState([]);
    useEffect(()=> {
      setList(friend.items);
    },[friend.items]);*/

  const {
    0: pop,
    1: setPop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleView = () => {
    onView();
    setPop(!pop);
  };

  const handleViewOut = () => {
    setPop(false);
  };

  return __jsx("div", {
    className: "btnicon_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
  }, __jsx("button", {
    id: "friend",
    onClick: handleView,
    style: friend.view && friend.length > 0 ? {
      background: "#fff",
      color: "#ff6c1a"
    } : {
      background: "transparent",
      color: "#fff"
    },
    className: "btnicon_nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUser"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: undefined
  })), __jsx("span", {
    style: friend.view && friend.length > 0 ? {
      color: "#ff6c1a"
    } : {
      color: "#fff"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: undefined
  }, "+", friend.items.length), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Popover"], {
    target: "friend",
    isOpen: pop,
    placement: "bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["PopoverBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: undefined
  }, __jsx("ul", {
    onMouseLeave: handleViewOut,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: undefined
  }, friend.items.map(item => __jsx("li", {
    key: uuid_v1__WEBPACK_IMPORTED_MODULE_11___default()(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: undefined
  }, item.name))))));
};

const Option = () => {
  const {
    0: pop,
    1: setPop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const onLogout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async () => {
    try {
      await axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('/user/logout');
      dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_7__["ON_LOGIN"],
        option: false
      });
      window.location = '/';
    } catch (err) {
      console.log(err);
    }
  });
  return __jsx("div", {
    className: "btnicon_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: undefined
  }, __jsx("button", {
    id: "option",
    onClick: () => setPop(!pop),
    className: "btnicon_nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCog"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: undefined
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Popover"], {
    target: "option",
    isOpen: pop,
    placement: "bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["PopoverBody"], {
    style: {
      padding: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: undefined
  }, __jsx("ul", {
    className: "option_list",
    onMouseLeave: () => setPop(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: undefined
  }, __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: undefined
  }, "perfil")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: undefined
  }, __jsx("button", {
    onClick: onLogout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: undefined
  }, "salir"))))));
};

const Wallet = () => {
  const wallet = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.nav.wallet);
  return __jsx("div", {
    className: "btnicon_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: undefined
  }, __jsx("p", {
    className: "wallet_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCoins"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: undefined
  })), __jsx("span", {
    style: {
      fontSize: 16
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: undefined
  }, "+", wallet));
};

const Notifications = () => {
  return __jsx("ul", {
    className: "notifications_main_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: undefined
  }, __jsx(Gift, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: undefined
  })), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: undefined
  }, __jsx(Note, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: undefined
  })), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: undefined
  }, __jsx(Friend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: undefined
  })), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: undefined
  }, __jsx(Option, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: undefined
  })), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: undefined
  }, __jsx(Wallet, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: undefined
  })));
};

const BarLoader = () => {
  const loader = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.nav.loader);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const onLoader = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(loader => dispatch({
    type: _store_actions__WEBPACK_IMPORTED_MODULE_7__["ON_LOADER"],
    loader
  }));
  return __jsx("div", {
    className: "barloader",
    style: {
      width: `${loader}%`
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: undefined
  });
};

const Header = () => {
  const nav = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.nav);
  const {
    0: width,
    1: setWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  const onNotifications = async () => {
    try {
      if (nav.login) {
        const res = await axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(`/user/notifications`);
        dispatch({
          type: _store_actions__WEBPACK_IMPORTED_MODULE_7__["ON_NOTIFICATIONS"],
          notifications: res.data
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_12___default()();
    socket.open();
    socket.on(`nav:${nav.notifications.id}`, payload => {
      let items = nav.notifications[payload.note].items;
      console.log(items);
      items = [payload.user, ...nav.notifications[payload.note].items];
      console.log(items);
      const reduxPayload = {
        note: payload.action,
        items
      };
      dispatch({
        type: 'ON_NOTE',
        payload: reduxPayload
      });
    });
    return () => socket.close();
  }, [nav.notifications]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    onNotifications();
  }, [nav.login]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setWidth(window.innerWidth);
  }, []);
  return __jsx("header", {
    className: "header_main_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: undefined
  }, __jsx(BarLoader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: undefined
  }), __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: undefined
  }, __jsx(DownBar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: undefined
  }), __jsx("div", {
    className: "logo_search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: undefined
  }, __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    url: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: undefined
  }), nav.login && width > 992 && __jsx(SearchBar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: undefined
  })), !nav.login && __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: undefined
  }, __jsx("button", {
    className: "btn_login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: undefined
  }, "login")), nav.login && __jsx(Notifications, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: undefined
  })), width < 576 && nav.login && __jsx(SearchBar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/layout/header.scss":
/*!***************************************!*\
  !*** ./components/layout/header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/layout/layout.jsx":
/*!**************************************!*\
  !*** ./components/layout/layout.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./components/layout/header.jsx");
/* harmony import */ var _layout_base_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/base.scss */ "./layout/base.scss");
/* harmony import */ var _layout_base_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_base_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
<<<<<<< HEAD:.next/server/static/development/pages/index.js
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/layout/layout.jsx";
=======
/* harmony import */ var _postregister_postregister__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../postregister/postregister */ "./components/postregister/postregister.jsx");
>>>>>>> perfil:.next/server/static/development/pages/index.js

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Layout = ({
  children
}) => {
  return __jsx("div", {
    className: "lauout_main_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("link", {
    rel: "stylesheet",
<<<<<<< HEAD:.next/server/static/development/pages/index.js
    href: "/static/animate.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })), __jsx(_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), children, __jsx("div", {
=======
    href: "/static/animate.min.css"
  })), __jsx(_header__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_postregister_postregister__WEBPACK_IMPORTED_MODULE_5__["default"], null), children, __jsx("div", {
>>>>>>> perfil:.next/server/static/development/pages/index.js
    style: {
      height: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/layout/logo.jsx":
/*!************************************!*\
  !*** ./components/layout/logo.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.scss */ "./components/layout/logo.scss");
/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logo_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/layout/logo.jsx";

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
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("g", {
    transform: "translate(0 -244.08)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("ellipse", {
    cx: "26.548",
    cy: "250.43",
    r: "3.2741",
<<<<<<< HEAD:.next/server/static/development/pages/index.js
    fill: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
=======
    fill: dark ? "#8bb940" : "#fff"
>>>>>>> perfil:.next/server/static/development/pages/index.js
  }), __jsx("ellipse", {
    cx: "46.306",
    cy: "289.77",
    r: "3.2741",
<<<<<<< HEAD:.next/server/static/development/pages/index.js
    fill: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
=======
    fill: dark ? "#8bb940" : "#fff"
>>>>>>> perfil:.next/server/static/development/pages/index.js
  }), __jsx("path", {
    transform: "matrix(.62733 0 0 .72498 9.012 74.897)",
    d: "m59.521 296.7h-31.551-31.551l31.551-54.648 15.776 27.324z",
    fill: "none",
<<<<<<< HEAD:.next/server/static/development/pages/index.js
    stroke: "#fff",
    strokeWidth: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
=======
    stroke: dark ? "#8bb940" : "#fff",
    strokeWidth: "2"
>>>>>>> perfil:.next/server/static/development/pages/index.js
  }), __jsx("circle", {
    cx: "46.306",
    cy: "289.77",
    r: "3.2741",
<<<<<<< HEAD:.next/server/static/development/pages/index.js
    fill: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
=======
    fill: dark ? "#8bb940" : "#fff"
>>>>>>> perfil:.next/server/static/development/pages/index.js
  }), __jsx("circle", {
    cx: "7.2335",
    cy: "289.77",
    r: "3.2741",
<<<<<<< HEAD:.next/server/static/development/pages/index.js
    fill: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("path", {
    d: "m25.542 276.71c0.25134 0.37102-0.37613 0.52185-0.61667 0.41774-0.65184-0.28213-0.59357-1.1753-0.21882-1.6511 0.67035-0.85098 1.9605-0.71767 2.6855-0.0199 1.0639 1.024 0.84772 2.7571-0.17903 3.7199-1.3685 1.2832-3.558 0.98044-4.7543-0.37795-1.5055-1.7094-1.1146-4.3608 0.57688-5.7887 2.0486-1.7294 5.1648-1.2495 6.8231 0.7758 1.9543 2.3868 1.385 5.9694-0.97472 7.8575-2.7244 2.1798-6.7746 1.5208-8.8919-1.1736-2.4058-3.0616-1.6568-7.5801 1.3726-9.9264 3.3985-2.6321 8.3859-1.7931 10.961 1.5715 2.8586 3.7353 1.9294 9.1918-1.7704 11.995",
    fill: "none",
    stroke: "#fff",
    strokeWidth: ".79375",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
=======
    fill: dark ? "#8bb940" : "#fff"
  }), __jsx("path", {
    d: "m25.542 276.71c0.25134 0.37102-0.37613 0.52185-0.61667 0.41774-0.65184-0.28213-0.59357-1.1753-0.21882-1.6511 0.67035-0.85098 1.9605-0.71767 2.6855-0.0199 1.0639 1.024 0.84772 2.7571-0.17903 3.7199-1.3685 1.2832-3.558 0.98044-4.7543-0.37795-1.5055-1.7094-1.1146-4.3608 0.57688-5.7887 2.0486-1.7294 5.1648-1.2495 6.8231 0.7758 1.9543 2.3868 1.385 5.9694-0.97472 7.8575-2.7244 2.1798-6.7746 1.5208-8.8919-1.1736-2.4058-3.0616-1.6568-7.5801 1.3726-9.9264 3.3985-2.6321 8.3859-1.7931 10.961 1.5715 2.8586 3.7353 1.9294 9.1918-1.7704 11.995",
    fill: "none",
    stroke: dark ? "#8bb940" : "#fff",
    strokeWidth: ".79375"
>>>>>>> perfil:.next/server/static/development/pages/index.js
  }), __jsx("circle", {
    cx: "26.541",
    cy: "250.72",
    r: "3.2741",
<<<<<<< HEAD:.next/server/static/development/pages/index.js
    fill: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
=======
    fill: dark ? "#8bb940" : "#fff"
>>>>>>> perfil:.next/server/static/development/pages/index.js
  })));

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("a", {
<<<<<<< HEAD:.next/server/static/development/pages/index.js
    className: "logo_main_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, tirangle, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
=======
    className: "logo_main_cont"
  }, tirangle, __jsx("p", {
    style: dark ? {
      color: '#8bb940'
    } : {
      color: '#fff'
    }
>>>>>>> perfil:.next/server/static/development/pages/index.js
  }, "greenlink")));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/layout/logo.scss":
/*!*************************************!*\
  !*** ./components/layout/logo.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/loader/loader.jsx":
/*!**************************************!*\
  !*** ./components/loader/loader.jsx ***!
  \**************************************/
<<<<<<< HEAD:.next/server/static/development/pages/index.js
=======
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loader_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.scss */ "./components/loader/loader.scss");
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
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./components/loader/loader.scss":
/*!***************************************!*\
  !*** ./components/loader/loader.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/logo/logo.jsx":
/*!**********************************!*\
  !*** ./components/logo/logo.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.scss */ "./components/logo/logo.scss");
/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logo_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Logo = ({
  size,
  color
}) => __jsx("div", {
  title: "Inicio",
  className: "logo_cont"
}, __jsx("a", {
  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    dark: color === 'dark'
  }),
  href: "/"
}, __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, __jsx("path", {
  d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"
})), __jsx("span", null, "Greenlink")));

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/logo/logo.scss":
/*!***********************************!*\
  !*** ./components/logo/logo.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/postregister/postregister.jsx":
/*!**************************************************!*\
  !*** ./components/postregister/postregister.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _postregister_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./postregister.scss */ "./components/postregister/postregister.scss");
/* harmony import */ var _postregister_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_postregister_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _layout_logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layout/logo */ "./components/layout/logo.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _loader_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../loader/loader */ "./components/loader/loader.jsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











const BtnUpload = () => {
  return __jsx("div", {
    className: "btnUpload_main_cont"
  }, __jsx("label", {
    htmlFor: "img"
  }, __jsx("div", {
    className: "img_cont"
  }, __jsx("img", {
    src: "",
    alt: ""
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUser"]
  })), __jsx("input", {
    id: "img",
    name: "img",
    type: "file"
  })));
};

const Welcome = () => {
  return __jsx("div", {
    className: "welcome_main_cont"
  }, __jsx("h1", null, "Bienvenido a ", __jsx("span", null, "Greenlink!")), __jsx("p", null, "Completa el registro agregando informacion adicional y creando tu primer ", __jsx("strong", null, "GreenPost,"), " de esta manera podras ser encontrado por otros usuarios ademas de recibir obsequios. Recuerda, mietras mas preciso seas mas facil sera que tus seres queridos contacten contigo."));
};

const Congratulations = () => {
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  return __jsx("div", {
    className: "welcome_main_cont"
  }, __jsx("h1", null, "Felicidades ", user.name), __jsx("p", null, "No olvides crear tu primer", __jsx("strong", null, "GreenPost,")));
};

const UserInfo = ({
  values,
  setValues,
  onImg
}) => {
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  return __jsx("div", {
    className: "user_postregister_cont"
  }, __jsx("label", {
    htmlFor: "perfilImg"
  }, !values.perfilImgFrontEnd && __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUser"]
  }), values.perfilImgFrontEnd && __jsx("img", {
    src: values.perfilImgFrontEnd,
    alt: ""
  }), __jsx("input", {
    onChange: onImg,
    type: "file",
    name: "perfilImg",
    id: "perfilImg"
  })), __jsx("p", null, "Elige una foto de perfil"), user.name === 'Green' && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("input", {
    value: values.name,
    onChange: e => setValues({
      name: e.currentTarget.value
    }),
    placeholder: "Nombre",
    type: "text"
  }), __jsx("input", {
    value: values.lastName,
    onChange: e => setValues({
      lastName: e.currentTarget.value
    }),
    placeholder: "Apellido",
    type: "text"
  }), __jsx("div", {
    className: "birth_sex_main"
  }, __jsx("p", null, "Cumplea\xF1os"), __jsx("input", {
    type: "date",
    value: values.birthday,
    onChange: e => setValues({
      birthday: e.currentTarget.value
    })
  }), __jsx("div", {
    className: "birthday_sex",
    style: {
      marginLeft: '1rem'
    }
  }, __jsx("p", null, "Sexo"), __jsx("select", {
    onChange: e => setValues({
      sex: e.currentTarget.value
    }),
    name: "sex",
    id: "sex"
  }, __jsx("option", {
    value: "female"
  }, "Mujer"), __jsx("option", {
    value: "male"
  }, "Hombre"), __jsx("option", {
    value: "otro"
  }, "Otro"))))));
};

const PostRegister = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    0: values,
    1: setValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])((state, next) => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, next), {
    name: '',
    lastName: '',
    birthday: '',
    sex: '',
    perfilImgFrontEnd: '',
    perfilImg: ''
  });
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);

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
    console.log(perfilImg);
    console.log(img);
  };

  const {
    0: section,
    1: setSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])((state, next) => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, next), {
    welcome: true,
    info: false,
    loader: false,
    congratulations: false
  });
  const visible = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.postregister);

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
      await axios__WEBPACK_IMPORTED_MODULE_9___default.a.post('/user/postregister', data);
      setSection({
        loader: false,
        congratulations: true
      });
      setTimeout(() => {
        dispatch({
          type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_POST_REGISTER"]
        });
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    className: "my_modal",
    isOpen: visible
  }, __jsx("div", {
    className: "postregister_main_cont"
  }, __jsx("header", null, __jsx(_layout_logo__WEBPACK_IMPORTED_MODULE_8__["default"], {
    dark: true,
    url: "/"
  })), __jsx("div", {
    className: "body"
  }, section.welcome && __jsx(Welcome, null), section.info && __jsx(UserInfo, {
    values: values,
    setValues: setValues,
    onImg: onImg
  }), section.loader && __jsx(_loader_loader__WEBPACK_IMPORTED_MODULE_10__["default"], {
    dark: true
  }), section.congratulations && __jsx(Congratulations, null)), __jsx("footer", null, section.welcome && __jsx("button", {
    onClick: () => setSection({
      welcome: false,
      info: true
    })
  }, "siguiente"), section.info && __jsx("button", {
    onClick: onSubmit
  }, "enviar"))));
};

/* harmony default export */ __webpack_exports__["default"] = (PostRegister);

/***/ }),

/***/ "./components/postregister/postregister.scss":
/*!***************************************************!*\
  !*** ./components/postregister/postregister.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/social-buttons/comment.jsx":
/*!***********************************************!*\
  !*** ./components/social-buttons/comment.jsx ***!
  \***********************************************/
>>>>>>> perfil:.next/server/static/development/pages/index.js
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
<<<<<<< HEAD:.next/server/static/development/pages/index.js
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loader_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.scss */ "./components/loader/loader.scss");
/* harmony import */ var _loader_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loader_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/loader/loader.jsx";
=======
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social.scss */ "./components/social-buttons/social.scss");
/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_social_scss__WEBPACK_IMPORTED_MODULE_2__);
>>>>>>> perfil:.next/server/static/development/pages/index.js
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




<<<<<<< HEAD:.next/server/static/development/pages/index.js
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
      viewBox: "0 0 200 200",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("polyline", {
      id: "loader_line",
      fill: "none",
      stroke: dark ? "#669f09" : '#fff',
      strokeWidth: "10px",
      strokeDasharray: "500",
      points: "15,185 95,15 185,180 15,180",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), __jsx("circle", {
      className: "circle",
      id: "circle-1",
      fill: dark ? "#669f09" : '#fff',
      cx: "20",
      cy: "180",
      r: "20",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), __jsx("circle", {
      className: "circle",
      id: "circle-2",
      fill: dark ? "#669f09" : '#fff',
      cx: "95",
      cy: "20",
      r: "20",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), __jsx("circle", {
      className: "circle",
      id: "circle-3",
      fill: dark ? "#669f09" : '#fff',
      cx: "180",
      cy: "180",
      r: "20",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Loader);
=======
class Comment extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      commentPop: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePop = this.handlePop.bind(this);
  }

  handleChange(e) {
    this.setState({
      comment: e.target.value
    });
  }
>>>>>>> perfil:.next/server/static/development/pages/index.js

  handlePop() {
    const {
      commentPop
    } = this.state;
    this.setState({
      commentPop: !commentPop
    });
  }

<<<<<<< HEAD:.next/server/static/development/pages/index.js
/***/ "./components/loader/loader.scss":
/*!***************************************!*\
  !*** ./components/loader/loader.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {
=======
  render() {
    const {
      commentPop,
      comment
    } = this.state;
    const {
      className
    } = this.props;
    return __jsx("div", {
      className: "comment_cont"
    }, __jsx("button", {
      title: "Comentar",
      id: "btn_comment",
      onClick: this.handlePop,
      className: `btn_social animated ${className}`
    }, __jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, __jsx("path", {
      d: "M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"
    }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      placement: "bottom",
      target: "btn_comment",
      isOpen: commentPop
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PopoverBody"], null, __jsx("form", null, __jsx("textarea", {
      style: {
        resize: 'none',
        border: 'none',
        outline: 'none'
      },
      value: comment,
      className: "text_area_comment",
      onChange: this.handleChange,
      name: "commet",
      id: "comment",
      cols: "15",
      rows: "5"
    }), __jsx("button", {
      className: "send_comment",
      type: "submit"
    }, "enviar")))));
  }
>>>>>>> perfil:.next/server/static/development/pages/index.js

}

;
/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ }),

<<<<<<< HEAD:.next/server/static/development/pages/index.js
/***/ "./components/logo/logo.jsx":
/*!**********************************!*\
  !*** ./components/logo/logo.jsx ***!
  \**********************************/
=======
/***/ "./components/social-buttons/gift.jsx":
/*!********************************************!*\
  !*** ./components/social-buttons/gift.jsx ***!
  \********************************************/
>>>>>>> perfil:.next/server/static/development/pages/index.js
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
<<<<<<< HEAD:.next/server/static/development/pages/index.js
/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.scss */ "./components/logo/logo.scss");
/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logo_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/logo/logo.jsx";

=======
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social.scss */ "./components/social-buttons/social.scss");
/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_social_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid/v1 */ "uuid/v1");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
>>>>>>> perfil:.next/server/static/development/pages/index.js
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



<<<<<<< HEAD:.next/server/static/development/pages/index.js
const Logo = ({
  size,
  color
}) => __jsx("div", {
  title: "Inicio",
  className: "logo_cont",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("a", {
  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    dark: color === 'dark'
  }),
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("path", {
  d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
})), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "Greenlink")));

/* harmony default export */ __webpack_exports__["default"] = (Logo);
=======

>>>>>>> perfil:.next/server/static/development/pages/index.js


<<<<<<< HEAD:.next/server/static/development/pages/index.js
/***/ "./components/logo/logo.scss":
/*!***********************************!*\
  !*** ./components/logo/logo.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {
=======
>>>>>>> perfil:.next/server/static/development/pages/index.js


const brocha = __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512"
}, __jsx("path", {
  d: "M256.47 216.77l86.73 109.18s-16.6 102.36-76.57 150.12C206.66 523.85 0 510.19 0 510.19s3.8-23.14 11-55.43l94.62-112.17c3.97-4.7-.87-11.62-6.65-9.5l-60.4 22.09c14.44-41.66 32.72-80.04 54.6-97.47 59.97-47.76 163.3-40.94 163.3-40.94zM636.53 31.03l-19.86-25c-5.49-6.9-15.52-8.05-22.41-2.56l-232.48 177.8-34.14-42.97c-5.09-6.41-15.14-5.21-18.59 2.21l-25.33 54.55 86.73 109.18 58.8-12.45c8-1.69 11.42-11.2 6.34-17.6l-34.09-42.92 232.48-177.8c6.89-5.48 8.04-15.53 2.55-22.44z"
}));

const candy = __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, __jsx("path", {
  d: "M497.5 92C469.6 33.1 411.8 0 352.4 0c-27.9 0-56.2 7.3-81.8 22.6L243.1 39c-15.2 9.1-20.1 28.7-11 43.9l32.8 54.9c6 10 16.6 15.6 27.5 15.6 5.6 0 11.2-1.5 16.4-4.5l27.5-16.4c5.1-3.1 10.8-4.5 16.4-4.5 10.9 0 21.5 5.6 27.5 15.6 9.1 15.1 4.1 34.8-11 43.9L15.6 397.6c-15.2 9.1-20.1 28.7-11 43.9l32.8 54.9c6 10 16.6 15.6 27.5 15.6 5.6 0 11.2-1.5 16.4-4.5L428.6 301c71.7-42.9 104.6-133.5 68.9-209zm-177.7 13l-2.5 1.5L296.8 45c9.7-4.7 19.8-8.1 30.3-10.2l20.6 61.8c-9.8.8-19.4 3.3-27.9 8.4zM145.9 431.8l-60.5-38.5 30.8-18.3 60.5 38.5-30.8 18.3zm107.5-63.9l-60.5-38.5 30.8-18.3 60.5 38.5-30.8 18.3zM364.3 302l-60.5-38.5 30.8-18.3 60.5 38.5-30.8 18.3zm20.4-197.3l46-46c8.4 6.5 16 14.1 22.6 22.6L407.6 127c-5.7-9.3-13.7-16.9-22.9-22.3zm82.1 107.8l-59.5-19.8c3.2-5.3 5.8-10.9 7.4-17.1 1.1-4.5 1.7-9.1 1.8-13.6l60.4 20.1c-2.1 10.4-5.5 20.6-10.1 30.4z"
}));

const carrot = __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, __jsx("path", {
  d: "M298.2 156.6c-52.7-25.7-114.5-10.5-150.2 32.8l55.2 55.2c6.3 6.3 6.3 16.4 0 22.6-3.1 3.1-7.2 4.7-11.3 4.7s-8.2-1.6-11.3-4.7L130.4 217 2.3 479.7c-2.9 6-3.1 13.3 0 19.7 5.4 11.1 18.9 15.7 30 10.3l133.6-65.2-49.2-49.2c-6.3-6.2-6.3-16.4 0-22.6 6.3-6.2 16.4-6.2 22.6 0l57 57 102-49.8c24-11.7 44.5-31.3 57.1-57.1 30.1-61.7 4.5-136.1-57.2-166.2zm92.1-34.9C409.8 81 399.7 32.9 360 0c-50.3 41.7-52.5 107.5-7.9 151.9l8 8c44.4 44.6 110.3 42.4 151.9-7.9-32.9-39.7-81-49.8-121.7-30.3z"
}));

const chicken = __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, __jsx("path", {
  d: "M462.79 49.57c-66.14-66.09-173.36-66.09-239.5 0C187.81 85.02 160.12 128 160.12 192v85.83l-40.62 40.59c-9.7 9.69-24.04 11.07-36.78 5.98-21.72-8.68-47.42-4.29-65.02 13.29-23.61 23.59-23.61 61.84 0 85.43 15.28 15.27 36.53 19.58 56.14 15.09-4.5 19.6-.18 40.83 15.1 56.1 23.61 23.59 61.88 23.59 85.49 0 17.6-17.58 21.99-43.26 13.31-64.97-5.09-12.73-3.72-27.05 5.99-36.75L234.35 352h85.89c23.2 0 43.57-3.72 61.89-10.03-39.64-43.89-39.83-110.23 1.05-151.07 34.38-34.36 86.76-39.46 128.74-16.8 1.3-44.93-14.81-90.25-49.13-124.53z"
}));

const hat = __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, __jsx("path", {
  d: "M496 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-304-64l-64-32 64-32 32-64 32 64 64 32-64 32-16 32h208l-86.41-201.63a63.955 63.955 0 0 1-1.89-45.45L416 0 228.42 107.19a127.989 127.989 0 0 0-53.46 59.15L64 416h144l-16-32zm64-224l16-32 16 32 32 16-32 16-16 32-16-32-32-16 32-16z"
}));

const game = __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512"
}, __jsx("path", {
  d: "M480 96H160C71.6 96 0 167.6 0 256s71.6 160 160 160c44.8 0 85.2-18.4 114.2-48h91.5c29 29.6 69.5 48 114.2 48 88.4 0 160-71.6 160-160S568.4 96 480 96zM256 276c0 6.6-5.4 12-12 12h-52v52c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-52H76c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h52v-52c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h52c6.6 0 12 5.4 12 12v40zm184 68c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-80c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
}));

const glass = __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512"
}, __jsx("path", {
  d: "M639.4 433.6c-8.4-20.4-31.8-30.1-52.2-21.6l-22.1 9.2-38.7-101.9c47.9-35 64.8-100.3 34.5-152.8L474.3 16c-8-13.9-25.1-19.7-40-13.6L320 49.8 205.7 2.4c-14.9-6.2-32-.3-40 13.6L79.1 166.5C48.9 219 65.7 284.3 113.6 319.2L74.9 421.1l-22.1-9.2c-20.4-8.5-43.7 1.2-52.2 21.6-1.7 4.1.2 8.8 4.3 10.5l162.3 67.4c4.1 1.7 8.7-.2 10.4-4.3 8.4-20.4-1.2-43.8-21.6-52.3l-22.1-9.2L173.3 342c4.4.5 8.8 1.3 13.1 1.3 51.7 0 99.4-33.1 113.4-85.3l20.2-75.4 20.2 75.4c14 52.2 61.7 85.3 113.4 85.3 4.3 0 8.7-.8 13.1-1.3L506 445.6l-22.1 9.2c-20.4 8.5-30.1 31.9-21.6 52.3 1.7 4.1 6.4 6 10.4 4.3L635.1 444c4-1.7 6-6.3 4.3-10.4zM275.9 162.1l-112.1-46.5 36.5-63.4 94.5 39.2-18.9 70.7zm88.2 0l-18.9-70.7 94.5-39.2 36.5 63.4-112.1 46.5z"
}));

const drum = __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512"
}, __jsx("path", {
  d: "M458.08 120.88l102.39-61.43c15.16-9.09 20.06-28.75 10.97-43.91C562.34.39 542.7-4.53 527.53 4.57l-160.69 96.41A629.32 629.32 0 0 0 288 96C128.94 96 0 153.31 0 224v160.83c0 30.46 24.03 58.4 64 80.37v-96.37c0-17.6 14.4-32 32-32s32 14.4 32 32v122.41c37.4 11.13 81 18.44 128 20.75V400.84c0-17.6 14.4-32 32-32s32 14.4 32 32V512c47-2.31 90.6-9.62 128-20.75V368.84c0-17.6 14.4-32 32-32s32 14.4 32 32v96.37c39.97-21.97 64-49.91 64-80.37V224.01c-.01-42.38-46.54-79.84-117.92-103.13zM288 304c-132.55 0-240-35.82-240-80s107.45-80 240-80c2.34 0 4.62.1 6.94.12l-87.41 52.44c-15.16 9.09-20.06 28.75-10.97 43.91 9.56 15.93 29.51 19.61 43.91 10.97l162.71-97.62C477.55 167.41 528 193.74 528 224.01 528 268.19 420.54 304 288 304z"
}));

const money = __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 288 512"
}, __jsx("path", {
  d: "M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"
}));

const gifts = [brocha, candy, carrot, chicken, hat, game, glass, drum, money];

class Gift extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      popGift: false
    };
    this.handleGift = this.handleGift.bind(this);
  }

  handleGift() {
    const {
      onStore
    } = this.props;
    onStore(_store_actions__WEBPACK_IMPORTED_MODULE_4__["storeSections"].OPEN_STORE); //const { popGift } = this.state;
    //this.setState({ popGift: !popGift });
  }

  render() {
    const {
      popGift
    } = this.state;
    const {
      className
    } = this.props;
    return __jsx("div", {
      className: "gift_cont"
    }, __jsx("button", {
      title: "Obsequiar",
      onClick: this.handleGift,
      id: "gift_button",
      className: `btn_social animated ${className}`
    }, __jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, __jsx("path", {
      d: "M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
    }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      isOpen: popGift,
      target: "gift_button",
      placement: "bottom"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PopoverBody"], null, __jsx("ul", {
      className: "gifts_cont"
    }, gifts.map(gift => __jsx("li", {
      key: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()()
    }, gift))))));
  }

}

;

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])({
  onStore: _store_actions__WEBPACK_IMPORTED_MODULE_4__["onStore"]
}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(null, mapDispatchToProps)(Gift));

/***/ }),

<<<<<<< HEAD:.next/server/static/development/pages/index.js
/***/ "./components/social-buttons/comment.jsx":
/*!***********************************************!*\
  !*** ./components/social-buttons/comment.jsx ***!
  \***********************************************/
=======
/***/ "./components/social-buttons/heart.jsx":
/*!*********************************************!*\
  !*** ./components/social-buttons/heart.jsx ***!
  \*********************************************/
>>>>>>> perfil:.next/server/static/development/pages/index.js
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
<<<<<<< HEAD:.next/server/static/development/pages/index.js
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social.scss */ "./components/social-buttons/social.scss");
/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_social_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/social-buttons/comment.jsx";
=======
/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social.scss */ "./components/social-buttons/social.scss");
/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_social_scss__WEBPACK_IMPORTED_MODULE_1__);
>>>>>>> perfil:.next/server/static/development/pages/index.js
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const heart = __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, __jsx("path", {
  d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
}));

<<<<<<< HEAD:.next/server/static/development/pages/index.js
class Comment extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      commentPop: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePop = this.handlePop.bind(this);
  }

  handleChange(e) {
    this.setState({
      comment: e.target.value
    });
  }

  handlePop() {
    const {
      commentPop
    } = this.state;
    this.setState({
      commentPop: !commentPop
    });
  }

  render() {
    const {
      commentPop,
      comment
    } = this.state;
    const {
      className
    } = this.props;
    return __jsx("div", {
      className: "comment_cont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("button", {
      title: "Comentar",
      id: "btn_comment",
      onClick: this.handlePop,
      className: `btn_social animated ${className}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("path", {
      d: "M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      placement: "bottom",
      target: "btn_comment",
      isOpen: commentPop,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PopoverBody"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("form", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("textarea", {
      style: {
        resize: 'none',
        border: 'none',
        outline: 'none'
      },
      value: comment,
      className: "text_area_comment",
      onChange: this.handleChange,
      name: "commet",
      id: "comment",
      cols: "15",
      rows: "5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), __jsx("button", {
      className: "send_comment",
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "enviar")))));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ }),

/***/ "./components/social-buttons/gift.jsx":
/*!********************************************!*\
  !*** ./components/social-buttons/gift.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social.scss */ "./components/social-buttons/social.scss");
/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_social_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid/v1 */ "uuid/v1");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/social-buttons/gift.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const brocha = __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("path", {
  d: "M256.47 216.77l86.73 109.18s-16.6 102.36-76.57 150.12C206.66 523.85 0 510.19 0 510.19s3.8-23.14 11-55.43l94.62-112.17c3.97-4.7-.87-11.62-6.65-9.5l-60.4 22.09c14.44-41.66 32.72-80.04 54.6-97.47 59.97-47.76 163.3-40.94 163.3-40.94zM636.53 31.03l-19.86-25c-5.49-6.9-15.52-8.05-22.41-2.56l-232.48 177.8-34.14-42.97c-5.09-6.41-15.14-5.21-18.59 2.21l-25.33 54.55 86.73 109.18 58.8-12.45c8-1.69 11.42-11.2 6.34-17.6l-34.09-42.92 232.48-177.8c6.89-5.48 8.04-15.53 2.55-22.44z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}));

const candy = __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("path", {
  d: "M497.5 92C469.6 33.1 411.8 0 352.4 0c-27.9 0-56.2 7.3-81.8 22.6L243.1 39c-15.2 9.1-20.1 28.7-11 43.9l32.8 54.9c6 10 16.6 15.6 27.5 15.6 5.6 0 11.2-1.5 16.4-4.5l27.5-16.4c5.1-3.1 10.8-4.5 16.4-4.5 10.9 0 21.5 5.6 27.5 15.6 9.1 15.1 4.1 34.8-11 43.9L15.6 397.6c-15.2 9.1-20.1 28.7-11 43.9l32.8 54.9c6 10 16.6 15.6 27.5 15.6 5.6 0 11.2-1.5 16.4-4.5L428.6 301c71.7-42.9 104.6-133.5 68.9-209zm-177.7 13l-2.5 1.5L296.8 45c9.7-4.7 19.8-8.1 30.3-10.2l20.6 61.8c-9.8.8-19.4 3.3-27.9 8.4zM145.9 431.8l-60.5-38.5 30.8-18.3 60.5 38.5-30.8 18.3zm107.5-63.9l-60.5-38.5 30.8-18.3 60.5 38.5-30.8 18.3zM364.3 302l-60.5-38.5 30.8-18.3 60.5 38.5-30.8 18.3zm20.4-197.3l46-46c8.4 6.5 16 14.1 22.6 22.6L407.6 127c-5.7-9.3-13.7-16.9-22.9-22.3zm82.1 107.8l-59.5-19.8c3.2-5.3 5.8-10.9 7.4-17.1 1.1-4.5 1.7-9.1 1.8-13.6l60.4 20.1c-2.1 10.4-5.5 20.6-10.1 30.4z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}));

const carrot = __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("path", {
  d: "M298.2 156.6c-52.7-25.7-114.5-10.5-150.2 32.8l55.2 55.2c6.3 6.3 6.3 16.4 0 22.6-3.1 3.1-7.2 4.7-11.3 4.7s-8.2-1.6-11.3-4.7L130.4 217 2.3 479.7c-2.9 6-3.1 13.3 0 19.7 5.4 11.1 18.9 15.7 30 10.3l133.6-65.2-49.2-49.2c-6.3-6.2-6.3-16.4 0-22.6 6.3-6.2 16.4-6.2 22.6 0l57 57 102-49.8c24-11.7 44.5-31.3 57.1-57.1 30.1-61.7 4.5-136.1-57.2-166.2zm92.1-34.9C409.8 81 399.7 32.9 360 0c-50.3 41.7-52.5 107.5-7.9 151.9l8 8c44.4 44.6 110.3 42.4 151.9-7.9-32.9-39.7-81-49.8-121.7-30.3z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}));

const chicken = __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("path", {
  d: "M462.79 49.57c-66.14-66.09-173.36-66.09-239.5 0C187.81 85.02 160.12 128 160.12 192v85.83l-40.62 40.59c-9.7 9.69-24.04 11.07-36.78 5.98-21.72-8.68-47.42-4.29-65.02 13.29-23.61 23.59-23.61 61.84 0 85.43 15.28 15.27 36.53 19.58 56.14 15.09-4.5 19.6-.18 40.83 15.1 56.1 23.61 23.59 61.88 23.59 85.49 0 17.6-17.58 21.99-43.26 13.31-64.97-5.09-12.73-3.72-27.05 5.99-36.75L234.35 352h85.89c23.2 0 43.57-3.72 61.89-10.03-39.64-43.89-39.83-110.23 1.05-151.07 34.38-34.36 86.76-39.46 128.74-16.8 1.3-44.93-14.81-90.25-49.13-124.53z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}));

const hat = __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("path", {
  d: "M496 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-304-64l-64-32 64-32 32-64 32 64 64 32-64 32-16 32h208l-86.41-201.63a63.955 63.955 0 0 1-1.89-45.45L416 0 228.42 107.19a127.989 127.989 0 0 0-53.46 59.15L64 416h144l-16-32zm64-224l16-32 16 32 32 16-32 16-16 32-16-32-32-16 32-16z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}));

const game = __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("path", {
  d: "M480 96H160C71.6 96 0 167.6 0 256s71.6 160 160 160c44.8 0 85.2-18.4 114.2-48h91.5c29 29.6 69.5 48 114.2 48 88.4 0 160-71.6 160-160S568.4 96 480 96zM256 276c0 6.6-5.4 12-12 12h-52v52c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-52H76c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h52v-52c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h52c6.6 0 12 5.4 12 12v40zm184 68c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-80c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}));

const glass = __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("path", {
  d: "M639.4 433.6c-8.4-20.4-31.8-30.1-52.2-21.6l-22.1 9.2-38.7-101.9c47.9-35 64.8-100.3 34.5-152.8L474.3 16c-8-13.9-25.1-19.7-40-13.6L320 49.8 205.7 2.4c-14.9-6.2-32-.3-40 13.6L79.1 166.5C48.9 219 65.7 284.3 113.6 319.2L74.9 421.1l-22.1-9.2c-20.4-8.5-43.7 1.2-52.2 21.6-1.7 4.1.2 8.8 4.3 10.5l162.3 67.4c4.1 1.7 8.7-.2 10.4-4.3 8.4-20.4-1.2-43.8-21.6-52.3l-22.1-9.2L173.3 342c4.4.5 8.8 1.3 13.1 1.3 51.7 0 99.4-33.1 113.4-85.3l20.2-75.4 20.2 75.4c14 52.2 61.7 85.3 113.4 85.3 4.3 0 8.7-.8 13.1-1.3L506 445.6l-22.1 9.2c-20.4 8.5-30.1 31.9-21.6 52.3 1.7 4.1 6.4 6 10.4 4.3L635.1 444c4-1.7 6-6.3 4.3-10.4zM275.9 162.1l-112.1-46.5 36.5-63.4 94.5 39.2-18.9 70.7zm88.2 0l-18.9-70.7 94.5-39.2 36.5 63.4-112.1 46.5z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}));

const drum = __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("path", {
  d: "M458.08 120.88l102.39-61.43c15.16-9.09 20.06-28.75 10.97-43.91C562.34.39 542.7-4.53 527.53 4.57l-160.69 96.41A629.32 629.32 0 0 0 288 96C128.94 96 0 153.31 0 224v160.83c0 30.46 24.03 58.4 64 80.37v-96.37c0-17.6 14.4-32 32-32s32 14.4 32 32v122.41c37.4 11.13 81 18.44 128 20.75V400.84c0-17.6 14.4-32 32-32s32 14.4 32 32V512c47-2.31 90.6-9.62 128-20.75V368.84c0-17.6 14.4-32 32-32s32 14.4 32 32v96.37c39.97-21.97 64-49.91 64-80.37V224.01c-.01-42.38-46.54-79.84-117.92-103.13zM288 304c-132.55 0-240-35.82-240-80s107.45-80 240-80c2.34 0 4.62.1 6.94.12l-87.41 52.44c-15.16 9.09-20.06 28.75-10.97 43.91 9.56 15.93 29.51 19.61 43.91 10.97l162.71-97.62C477.55 167.41 528 193.74 528 224.01 528 268.19 420.54 304 288 304z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}));

const money = __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 288 512",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("path", {
  d: "M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}));

const gifts = [brocha, candy, carrot, chicken, hat, game, glass, drum, money];

class Gift extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      popGift: false
    };
    this.handleGift = this.handleGift.bind(this);
  }

  handleGift() {
    const {
      onStore
    } = this.props;
    onStore(_store_actions__WEBPACK_IMPORTED_MODULE_4__["storeSections"].OPEN_STORE); //const { popGift } = this.state;
    //this.setState({ popGift: !popGift });
  }

  render() {
    const {
      popGift
=======
class Heart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      like: 0,
      myLike: false
    };
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    const {
      myLike,
      like
    } = this.state;

    if (myLike) {
      this.setState({
        like: like - 1,
        myLike: false
      });
    } else {
      this.setState({
        like: like + 1,
        myLike: true
      });
    }
  }

  render() {
    const {
      like,
      myLike
>>>>>>> perfil:.next/server/static/development/pages/index.js
    } = this.state;
    const {
      className
    } = this.props;
<<<<<<< HEAD:.next/server/static/development/pages/index.js
    return __jsx("div", {
      className: "gift_cont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("button", {
      title: "Obsequiar",
      onClick: this.handleGift,
      id: "gift_button",
      className: `btn_social animated ${className}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("path", {
      d: "M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      isOpen: popGift,
      target: "gift_button",
      placement: "bottom",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PopoverBody"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("ul", {
      className: "gifts_cont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, gifts.map(gift => __jsx("li", {
      key: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, gift))))));
  }

}

;

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])({
  onStore: _store_actions__WEBPACK_IMPORTED_MODULE_4__["onStore"]
}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(null, mapDispatchToProps)(Gift));

/***/ }),

/***/ "./components/social-buttons/heart.jsx":
/*!*********************************************!*\
  !*** ./components/social-buttons/heart.jsx ***!
=======
    return __jsx("button", {
      title: "Amor",
      onClick: this.handleLike,
      className: `btn_social animated ${className}`
    }, __jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      style: myLike ? {
        fill: "#ff6c1a"
      } : null
    }, __jsx("path", {
      d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
    })), __jsx("span", {
      style: myLike ? {
        color: "#ff6c1a"
      } : null
    }, " +", like));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Heart);

/***/ }),

/***/ "./components/social-buttons/share.jsx":
/*!*********************************************!*\
  !*** ./components/social-buttons/share.jsx ***!
>>>>>>> perfil:.next/server/static/development/pages/index.js
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social.scss */ "./components/social-buttons/social.scss");
/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_social_scss__WEBPACK_IMPORTED_MODULE_1__);
<<<<<<< HEAD:.next/server/static/development/pages/index.js
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/social-buttons/heart.jsx";
=======
>>>>>>> perfil:.next/server/static/development/pages/index.js
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



<<<<<<< HEAD:.next/server/static/development/pages/index.js
const heart = __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("path", {
  d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}));

class Heart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      like: 0,
      myLike: false
    };
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    const {
      myLike,
      like
    } = this.state;

    if (myLike) {
      this.setState({
        like: like - 1,
        myLike: false
      });
    } else {
      this.setState({
        like: like + 1,
        myLike: true
      });
    }
=======
class Share extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      shared: 0,
      myShare: false
    };
    this.handleShare = this.handleShare.bind(this);
  }

  handleShare() {
    const {
      shared
    } = this.state;
    this.setState({
      myShare: true,
      shared: shared + 1
    });
>>>>>>> perfil:.next/server/static/development/pages/index.js
  }

  render() {
    const {
<<<<<<< HEAD:.next/server/static/development/pages/index.js
      like,
      myLike
=======
      shared,
      myShare
>>>>>>> perfil:.next/server/static/development/pages/index.js
    } = this.state;
    const {
      className
    } = this.props;
    return __jsx("button", {
<<<<<<< HEAD:.next/server/static/development/pages/index.js
      title: "Amor",
      onClick: this.handleLike,
      className: `btn_social animated ${className}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      style: myLike ? {
        fill: "#ff6c1a"
      } : null,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("path", {
      d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    })), __jsx("span", {
      style: myLike ? {
        color: "#ff6c1a"
      } : null,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, " +", like));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Heart);

/***/ }),

/***/ "./components/social-buttons/share.jsx":
/*!*********************************************!*\
  !*** ./components/social-buttons/share.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social.scss */ "./components/social-buttons/social.scss");
/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_social_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/social-buttons/share.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Share extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      shared: 0,
      myShare: false
    };
    this.handleShare = this.handleShare.bind(this);
  }

  handleShare() {
    const {
      shared
    } = this.state;
    this.setState({
      myShare: true,
      shared: shared + 1
    });
  }

  render() {
    const {
      shared,
      myShare
    } = this.state;
    const {
      className
    } = this.props;
    return __jsx("button", {
      title: "Compartir",
      onClick: this.handleShare,
      className: `btn_social animated ${className}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      style: myShare ? {
        fill: "#ff6c1a"
      } : null,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("path", {
      d: "M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    })), __jsx("span", {
      style: myShare ? {
        color: "#ff6c1a"
      } : null,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, " +", shared));
  }

}
=======
      title: "Compartir",
      onClick: this.handleShare,
      className: `btn_social animated ${className}`
    }, __jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      style: myShare ? {
        fill: "#ff6c1a"
      } : null
    }, __jsx("path", {
      d: "M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"
    })), __jsx("span", {
      style: myShare ? {
        color: "#ff6c1a"
      } : null
    }, " +", shared));
  }

}
>>>>>>> perfil:.next/server/static/development/pages/index.js

;
/* harmony default export */ __webpack_exports__["default"] = (Share);

/***/ }),

/***/ "./components/social-buttons/social.scss":
/*!***********************************************!*\
  !*** ./components/social-buttons/social.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./layout/base.scss":
/*!**************************!*\
  !*** ./layout/base.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
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

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

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

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

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

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

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

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

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

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

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
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

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

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


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
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

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

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

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
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

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
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
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
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


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

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic prerendering. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/layout */ "./components/layout/layout.jsx");
/* harmony import */ var _components_hero_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hero/hero */ "./components/hero/hero.jsx");
/* harmony import */ var _components_about_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/about/about */ "./components/about/about.jsx");
/* harmony import */ var _components_explain_explain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/explain/explain */ "./components/explain/explain.jsx");
<<<<<<< HEAD:.next/server/static/development/pages/index.js
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/pages/index.js";
=======
>>>>>>> perfil:.next/server/static/development/pages/index.js

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




<<<<<<< HEAD:.next/server/static/development/pages/index.js
/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(_components_hero_hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx(_components_about_about__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx(_components_explain_explain__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
})));
=======
/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(_components_hero_hero__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_components_about_about__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_components_explain_explain__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
>>>>>>> perfil:.next/server/static/development/pages/index.js

/***/ }),

/***/ "./store/actions.js":
/*!**************************!*\
  !*** ./store/actions.js ***!
  \**************************/
/*! exports provided: ON_DOWN, ON_NOTIFICATIONS, ON_VIEW_NAV, ON_NOTE, ON_LOADER, ON_LOGIN, navView, ON_USER, ON_STORE, ON_PRODUCTS, storeSections, ON_POST_REGISTER, ON_GREENINFO, ON_GREEN_CREATOR, onStore */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_POST_REGISTER", function() { return ON_POST_REGISTER; });
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
POSTREGISTER
*************************/

const ON_POST_REGISTER = 'ON_POST_REGISTER';
/************************
GREENPOST
*************************/

const ON_GREENINFO = 'ON_GREENINFO';
const ON_GREEN_CREATOR = 'ON_GREEN_CREATOR';
const onStore = () => null;

/***/ }),

/***/ "./utils/functions.js":
/*!****************************!*\
  !*** ./utils/functions.js ***!
  \****************************/
/*! exports provided: detect, initialDetect, scrollToElement, validateEmail, validateEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detect", function() { return detect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialDetect", function() { return initialDetect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToElement", function() { return scrollToElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmail", function() { return validateEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmpty", function() { return validateEmpty; });
const RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const detect = id => {
  const element = document.getElementById(id);
  const position = element.getBoundingClientRect();

  if (position.top >= 0 && position.bottom - element.offsetHeight + 100 <= window.innerHeight) {
    return true;
  }

  return false;
};
const initialDetect = id => {
  const element = document.getElementById(id);
  const position = element.getBoundingClientRect();

  if (position.top >= 0 && position.bottom - element.offsetHeight <= window.innerHeight) {
    return true;
  }

  return false;
};
const scrollToElement = id => {
  const position = document.getElementById(id).offsetTop;
  window.scrollTo(0, position - 70);
};
const validateEmail = value => RegExp.test(value);
const validateEmpty = value => value && true;

/***/ }),

<<<<<<< HEAD:.next/server/static/development/pages/index.js
/***/ 3:
=======
/***/ 4:
>>>>>>> perfil:.next/server/static/development/pages/index.js
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/felix/Documentos/projects/greenlink/pages/index.js */"./pages/index.js");


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

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

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

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

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

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

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
//# sourceMappingURL=index.js.map
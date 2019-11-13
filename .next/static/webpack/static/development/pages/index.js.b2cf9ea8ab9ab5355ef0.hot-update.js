webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/main/greenpost.jsx":
/*!***************************************!*\
  !*** ./components/main/greenpost.jsx ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/main */ "./layout/main.js");
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Main = function Main() {
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1158441312", [Object(_layout_main__WEBPACK_IMPORTED_MODULE_2__["greenGradient"])()]]]) + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1158441312",
    dynamic: [Object(_layout_main__WEBPACK_IMPORTED_MODULE_2__["greenGradient"])()],
    __self: this
  }, ".__jsx-style-dynamic-selector{background:".concat(Object(_layout_main__WEBPACK_IMPORTED_MODULE_2__["greenGradient"])(), ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFrQixBQUVpRCx3Q0FDMUMiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL2dyZWVucG9zdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbG9yLCBmb250LCBncmVlbkdyYWRpZW50IH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuXG5jb25zdCBNYWluID0gKCk9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGJhY2tncm91bmQ6ICR7Z3JlZW5HcmFkaWVudCgpfTtcbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx */")));
};

/***/ }),

/***/ "./layout/main.js":
/*!************************!*\
  !*** ./layout/main.js ***!
  \************************/
/*! exports provided: color, greenGradient, font, themeGreen, themeRed, themeBlue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greenGradient", function() { return greenGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "font", function() { return font; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeGreen", function() { return themeGreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeRed", function() { return themeRed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeBlue", function() { return themeBlue; });
var color = {
  prim: '#8bb940',
  sec: '#669f09',
  light: '#ffffff',
  dark: '#333333',
  gray: '#f4f7f6'
};
var greenGradient = function greenGradient() {
  return "linear-gradient(135deg, ".concat(color.prim, ", ").concat(color.sec, ")");
};
var font = {
  title: 'Archivo Black',
  text: 'Open Sans'
};
var themeGreen = {
  index: 1,
  prim: '#8bb940',
  sec: '#478407',
  img: '/static/main/mundi.png',
  textLeft: {
    title: 'EL PLANETA TE NECESITA',
    subTitle: "Unete con nosotros y diviertete, mietras Proteges el medio ambiente, tan solo por usar greenlink."
  },
  textRight: {
    title: 'PERÚ',
    subTitle: 'Punto de inicio'
  },
  textBottom: 'PROTEGE!'
};
var themeRed = {
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
var themeBlue = {
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

/***/ })

})
//# sourceMappingURL=index.js.b2cf9ea8ab9ab5355ef0.hot-update.js.map
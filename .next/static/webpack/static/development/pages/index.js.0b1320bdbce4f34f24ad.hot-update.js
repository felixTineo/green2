webpackHotUpdate("static/development/pages/index.js",{

/***/ "./layout/main.js":
/*!************************!*\
  !*** ./layout/main.js ***!
  \************************/
/*! exports provided: color, greenGradient, greenBackground, font, themeGreen, themeRed, themeBlue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greenGradient", function() { return greenGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greenBackground", function() { return greenBackground; });
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
var greenBackground = function greenBackground() {
  return "\n  background-color: #8bb940;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%238bb940' width='11' height='11'/%3E%3Crect fill='%238ab93f' x='10' width='11' height='11'/%3E%3Crect fill='%238ab83f' y='10' width='11' height='11'/%3E%3Crect fill='%2389b83e' x='20' width='11' height='11'/%3E%3Crect fill='%2389b73d' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%2388b73c' y='20' width='11' height='11'/%3E%3Crect fill='%2387b63c' x='30' width='11' height='11'/%3E%3Crect fill='%2387b63b' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%2386b53a' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%2385b539' y='30' width='11' height='11'/%3E%3Crect fill='%2385b539' x='40' width='11' height='11'/%3E%3Crect fill='%2384b438' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%2384b437' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%2383b336' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%2382b336' y='40' width='11' height='11'/%3E%3Crect fill='%2382b235' x='50' width='11' height='11'/%3E%3Crect fill='%2381b234' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%2381b133' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%2380b133' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%237fb132' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%237fb031' y='50' width='11' height='11'/%3E%3Crect fill='%237eb030' x='60' width='11' height='11'/%3E%3Crect fill='%237daf30' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%237daf2f' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%237cae2e' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%237cae2d' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%237bad2c' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%237aad2b' x='70' width='11' height='11'/%3E%3Crect fill='%237aad2b' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%2379ac2a' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%2378ac29' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%2378ab28' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%2377ab27' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%2377aa26' x='80' width='11' height='11'/%3E%3Crect fill='%2376aa26' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%2375aa25' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%2375a924' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%2374a923' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%2373a822' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%2373a821' x='90' width='11' height='11'/%3E%3Crect fill='%2372a720' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%2371a71f' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%2371a61e' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%2370a61d' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%2370a61c' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%236fa51b' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%236ea51a' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%236ea419' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%236da418' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%236ca317' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%236ca316' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%236ba215' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%236aa213' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%236aa212' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%2369a111' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%2369a10f' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%2368a00e' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%2367a00c' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23679f0b' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23669f09' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E\");\n  //background-attachment: fixed;\n  background-size: cover;\n  ";
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
//# sourceMappingURL=index.js.0b1320bdbce4f34f24ad.hot-update.js.map
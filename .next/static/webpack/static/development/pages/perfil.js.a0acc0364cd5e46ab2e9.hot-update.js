webpackHotUpdate("static/development/pages/perfil.js",{

/***/ "./components/floating-notes/floating-notes.jsx":
/*!******************************************************!*\
  !*** ./components/floating-notes/floating-notes.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _floating_notes_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./floating-notes.scss */ "./components/floating-notes/floating-notes.scss");
/* harmony import */ var _floating_notes_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_floating_notes_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var FloatingNotes = function FloatingNotes() {
  return __jsx("div", {
    className: "jsx-2087164354" + " " + "floating_main_cont"
  }, __jsx("div", {
    className: "jsx-2087164354" + " " + "floating_note_cont"
  }, __jsx("img", {
    src: "/static/random/r1.jpg",
    alt: "",
    className: "jsx-2087164354"
  }), __jsx("a", {
    href: "#",
    className: "jsx-2087164354"
  }, "star green"), __jsx("p", {
    className: "jsx-2087164354"
  }, "Le gusta tu post")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2087164354"
  }, ".floating_main_cont.jsx-2087164354{position:fixed;top:0;left:0;border:1px solid red;width:30%;height:100vh;}.floating_note_cont.jsx-2087164354{width:50% height:80px;background:#eee;padding:.5rem;}img.jsx-2087164354{width:40px;height:40px;border-radius:50%;object-fit:cover;object-position:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvZmxvYXRpbmctbm90ZXMvZmxvYXRpbmctbm90ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFnQixBQUd3QixBQVNILEFBS0QsV0FDQyxJQWROLE1BQ0MsQ0FRUyxDQU1FLEtBYkcsVUFRUCxHQU1HLFFBYlAsR0FRWixNQU15QixDQWJWLGFBQ2YsU0FhQSIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL2Zsb2F0aW5nLW5vdGVzL2Zsb2F0aW5nLW5vdGVzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL2Zsb2F0aW5nLW5vdGVzLnNjc3MnO1xuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuXG5jb25zdCBGbG9hdGluZ05vdGVzID0gKCkgPT4ge1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0aW5nX21haW5fY29udFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdGluZ19ub3RlX2NvbnRcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL3JhbmRvbS9yMS5qcGdcIiBhbHQ9XCJcIi8+XG4gICAgICAgIDxhIGhyZWY9XCIjXCI+c3RhciBncmVlbjwvYT5cbiAgICAgICAgPHA+TGUgZ3VzdGEgdHUgcG9zdDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5mbG9hdGluZ19tYWluX2NvbnR7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICB9XG4gICAgICAuZmxvYXRpbmdfbm90ZV9jb250e1xuICAgICAgICB3aWR0aDogNTAlXG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICB9XG4gICAgICBpbWd7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbG9hdGluZ05vdGVzO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/floating-notes/floating-notes.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FloatingNotes);

/***/ })

})
//# sourceMappingURL=perfil.js.a0acc0364cd5e46ab2e9.hot-update.js.map
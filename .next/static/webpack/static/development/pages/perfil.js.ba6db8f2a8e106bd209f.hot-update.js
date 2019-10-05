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
    className: "jsx-269137064" + " " + "floating_main_cont"
  }, __jsx("div", {
    className: "jsx-269137064" + " " + "floating_note_cont"
  }, __jsx("img", {
    src: "/static/random/r1.jpg",
    alt: "",
    className: "jsx-269137064"
  }), __jsx("a", {
    href: "#",
    className: "jsx-269137064"
  }, "star green"), __jsx("p", {
    className: "jsx-269137064"
  }, "Le gusta tu post")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "269137064"
  }, ".floating_main_cont.jsx-269137064{position:fixed;top:0;left:-30%;border:1px solid red;width:30%;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;z-index:50;}.floating_note_cont.jsx-269137064{width:50% height:80px;background:#eee;padding:.5rem;position:relative;left:100%;margin:.5rem;z-index:50;}img.jsx-269137064{width:40px;height:40px;border-radius:50%;object-fit:cover;object-position:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvZmxvYXRpbmctbm90ZXMvZmxvYXRpbmctbm90ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFnQixBQUd3QixBQWFILEFBU0QsV0FDQyxJQXRCTixNQUNJLENBWU0sQ0FVRSxRQXJCRyxPQVlQLEdBVUcsV0FyQlAsQUFZUSxNQVVLLElBckJWLFFBWUgsS0FYRyxLQVlBLENBU2YsWUFSYSxXQUNiLDZDQWJ3Qiw4RUFDRyxpR0FDZCxXQUNiIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvZmxvYXRpbmctbm90ZXMvZmxvYXRpbmctbm90ZXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vZmxvYXRpbmctbm90ZXMuc2Nzcyc7XG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5cbmNvbnN0IEZsb2F0aW5nTm90ZXMgPSAoKSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmdfbWFpbl9jb250XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0aW5nX25vdGVfY29udFwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvcmFuZG9tL3IxLmpwZ1wiIGFsdD1cIlwiLz5cbiAgICAgICAgPGEgaHJlZj1cIiNcIj5zdGFyIGdyZWVuPC9hPlxuICAgICAgICA8cD5MZSBndXN0YSB0dSBwb3N0PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmZsb2F0aW5nX21haW5fY29udHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IC0zMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgei1pbmRleDogNTA7XG4gICAgICB9XG4gICAgICAuZmxvYXRpbmdfbm90ZV9jb250e1xuICAgICAgICB3aWR0aDogNTAlXG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAuNXJlbTtcbiAgICAgICAgei1pbmRleDogNTA7XG4gICAgICB9XG4gICAgICBpbWd7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbG9hdGluZ05vdGVzO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/floating-notes/floating-notes.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FloatingNotes);

/***/ })

})
//# sourceMappingURL=perfil.js.ba6db8f2a8e106bd209f.hot-update.js.map
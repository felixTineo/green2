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
/* harmony import */ var _mylink_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mylink/link */ "./components/mylink/link.jsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var notification = {
  type: 'Reaccion',
  msg: 'Le gusta tu post',
  user: {
    perfilImg: '/static/random/r2.jpg',
    fullName: 'Green Star',
    id: '123456789'
  }
};

var Note = function Note(_ref) {
  var note = _ref.note;
  var type = note.type,
      user = note.user,
      msg = note.msg;
  return __jsx("div", {
    className: "jsx-361959527" + " " + "floating_note_cont"
  }, __jsx("header", {
    className: "jsx-361959527"
  }, __jsx("p", {
    className: "jsx-361959527"
  }, note.type), __jsx("button", {
    className: "jsx-361959527"
  }, "x")), __jsx("img", {
    src: user.perfilImg,
    alt: "",
    className: "jsx-361959527"
  }), __jsx(_mylink_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: user.id
  }, user.fullName), __jsx("p", {
    className: "jsx-361959527"
  }, msg), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "361959527"
  }, "div.jsx-361959527{height:80px;background:#fff;padding:.5rem;position:relative;left:100%;margin:.5rem;z-index:50;}header.jsx-361959527{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}img.jsx-361959527{width:60px;height:60px;border-radius:50%;object-fit:cover;object-position:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvZmxvYXRpbmctbm90ZXMvZmxvYXRpbmctbm90ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCa0IsQUFHdUIsQUFTQyxBQUlGLFdBQ0MsQ0FiSSxXQWNFLEtBYkosYUFjRyxDQWJDLGdCQWNLLEVBYmIsVUFDRyxJQU1oQixBQUFDLE9BT0EsRUFaYSxXQUNiIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvZmxvYXRpbmctbm90ZXMvZmxvYXRpbmctbm90ZXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vZmxvYXRpbmctbm90ZXMuc2Nzcyc7XG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQgTXlMaW5rIGZyb20gJy4uL215bGluay9saW5rJztcblxuY29uc3Qgbm90aWZpY2F0aW9uID0ge1xuICB0eXBlOiAnUmVhY2Npb24nLFxuICBtc2c6ICdMZSBndXN0YSB0dSBwb3N0JyxcbiAgdXNlcjoge1xuICAgIHBlcmZpbEltZzogJy9zdGF0aWMvcmFuZG9tL3IyLmpwZycsXG4gICAgZnVsbE5hbWU6ICdHcmVlbiBTdGFyJyxcbiAgICBpZDogJzEyMzQ1Njc4OScsXG4gIH1cbn1cblxuY29uc3QgTm90ZSA9ICh7IG5vdGUgfSkgPT4ge1xuICBjb25zdCB7IHR5cGUsIHVzZXIsIG1zZyB9ID0gbm90ZTtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmdfbm90ZV9jb250XCI+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8cD57bm90ZS50eXBlfTwvcD5cbiAgICAgICAgPGJ1dHRvbj54PC9idXR0b24+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxpbWcgc3JjPXt1c2VyLnBlcmZpbEltZ30gYWx0PVwiXCIvPlxuICAgICAgPE15TGluayBpZD17dXNlci5pZH0+e3VzZXIuZnVsbE5hbWV9PC9NeUxpbms+XG4gICAgICA8cD57bXNnfTwvcD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2e1xuICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogLjVyZW07XG4gICAgICAgICAgei1pbmRleDogNTA7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYmFja2dyb3VuZDogXG4gICAgICAgIH1cbiAgICAgICAgaW1ne1xuICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEZsb2F0aW5nTm90ZXMgPSAoKSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmdfbWFpbl9jb250XCI+XG4gICAgICA8Tm90ZSBub3RlPXtub3RpZmljYXRpb259IC8+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmZsb2F0aW5nX21haW5fY29udHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IC0zMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgei1pbmRleDogNTA7XG4gICAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsb2F0aW5nTm90ZXM7XG4iXX0= */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/floating-notes/floating-notes.jsx */"));
};

var FloatingNotes = function FloatingNotes() {
  return __jsx("div", {
    className: "jsx-2714419340" + " " + "floating_main_cont"
  }, __jsx(Note, {
    note: notification
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2714419340"
  }, ".floating_main_cont.jsx-2714419340{position:fixed;top:0;left:-30%;border:1px solid red;width:30%;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;z-index:50;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvZmxvYXRpbmctbm90ZXMvZmxvYXRpbmctbm90ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEZ0IsQUFHd0IsZUFDVCxNQUNJLFVBQ1cscUJBQ1gsVUFDRyxhQUNBLDBFQUNTLDhFQUNHLGlHQUNkLFdBQ2IiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9mbG9hdGluZy1ub3Rlcy9mbG9hdGluZy1ub3Rlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9mbG9hdGluZy1ub3Rlcy5zY3NzJztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcbmltcG9ydCBNeUxpbmsgZnJvbSAnLi4vbXlsaW5rL2xpbmsnO1xuXG5jb25zdCBub3RpZmljYXRpb24gPSB7XG4gIHR5cGU6ICdSZWFjY2lvbicsXG4gIG1zZzogJ0xlIGd1c3RhIHR1IHBvc3QnLFxuICB1c2VyOiB7XG4gICAgcGVyZmlsSW1nOiAnL3N0YXRpYy9yYW5kb20vcjIuanBnJyxcbiAgICBmdWxsTmFtZTogJ0dyZWVuIFN0YXInLFxuICAgIGlkOiAnMTIzNDU2Nzg5JyxcbiAgfVxufVxuXG5jb25zdCBOb3RlID0gKHsgbm90ZSB9KSA9PiB7XG4gIGNvbnN0IHsgdHlwZSwgdXNlciwgbXNnIH0gPSBub3RlO1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdGluZ19ub3RlX2NvbnRcIj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxwPntub3RlLnR5cGV9PC9wPlxuICAgICAgICA8YnV0dG9uPng8L2J1dHRvbj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGltZyBzcmM9e3VzZXIucGVyZmlsSW1nfSBhbHQ9XCJcIi8+XG4gICAgICA8TXlMaW5rIGlkPXt1c2VyLmlkfT57dXNlci5mdWxsTmFtZX08L015TGluaz5cbiAgICAgIDxwPnttc2d9PC9wPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXZ7XG4gICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAuNXJlbTtcbiAgICAgICAgICB6LWluZGV4OiA1MDtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcbiAgICAgICAgfVxuICAgICAgICBpbWd7XG4gICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgRmxvYXRpbmdOb3RlcyA9ICgpID0+IHtcblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdGluZ19tYWluX2NvbnRcIj5cbiAgICAgIDxOb3RlIG5vdGU9e25vdGlmaWNhdGlvbn0gLz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuZmxvYXRpbmdfbWFpbl9jb250e1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogLTMwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB6LWluZGV4OiA1MDtcbiAgICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxvYXRpbmdOb3RlcztcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/floating-notes/floating-notes.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FloatingNotes);

/***/ })

})
//# sourceMappingURL=perfil.js.5124e072a9ca1325b668.hot-update.js.map
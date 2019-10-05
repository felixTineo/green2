webpackHotUpdate("static/development/pages/login.js",{

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
    className: "jsx-3859067946" + " " + "floating_note_cont"
  }, __jsx("header", {
    className: "jsx-3859067946"
  }, __jsx("p", {
    className: "jsx-3859067946"
  }, note.type), __jsx("button", {
    className: "jsx-3859067946"
  }, "x")), __jsx("div", {
    className: "jsx-3859067946" + " " + "body"
  }, __jsx("img", {
    src: user.perfilImg,
    alt: "",
    className: "jsx-3859067946"
  }), __jsx(_mylink_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: user.id
  }, user.fullName)), __jsx("p", {
    className: "jsx-3859067946"
  }, msg), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3859067946"
  }, "div.floating_note_cont.jsx-3859067946{height:100px;background:#fff;position:relative;left:100%;margin:.5rem;z-index:50;border-radius:3px;}header.jsx-3859067946{padding:.2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#8bb940;}header.jsx-3859067946 p.jsx-3859067946{margin:0;}header.jsx-3859067946 button.jsx-3859067946{background:transparent;-webkit-transition:250ms ease;transition:250ms ease;border:none;color:#333;}header.jsx-3859067946 button.jsx-3859067946:focus{outline:none;}header.jsx-3859067946 button.jsx-3859067946:hover{color:#fff;}div.body.jsx-3859067946{padding:.2rem;margin:0;}img.jsx-3859067946{width:60px;height:60px;border-radius:50%;object-fit:cover;object-position:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvZmxvYXRpbmctbm90ZXMvZmxvYXRpbmctbm90ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCa0IsQUFHd0IsQUFTQyxBQU9MLEFBR2MsQUFNVixBQUdGLEFBR0csQUFJSCxTQWxCYixFQVlBLEFBT2MsRUFuQ0ksQUF5QmxCLENBaEJlLEFBc0JKLFNBWmEsQUFheEIsQUFJb0IsTUFuQ0EsWUFvQ0QsTUFuQ1AsVUFDRyxDQW1DVSxZQWxDWixLQWdCQyxNQWZNLEFBa0NwQixNQWxCYSxDQVhtQixVQVloQyxDQWhCQSx3R0FLcUIsNkZBQ0EsbUJBQ3JCIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvZmxvYXRpbmctbm90ZXMvZmxvYXRpbmctbm90ZXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vZmxvYXRpbmctbm90ZXMuc2Nzcyc7XG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQgTXlMaW5rIGZyb20gJy4uL215bGluay9saW5rJztcblxuY29uc3Qgbm90aWZpY2F0aW9uID0ge1xuICB0eXBlOiAnUmVhY2Npb24nLFxuICBtc2c6ICdMZSBndXN0YSB0dSBwb3N0JyxcbiAgdXNlcjoge1xuICAgIHBlcmZpbEltZzogJy9zdGF0aWMvcmFuZG9tL3IyLmpwZycsXG4gICAgZnVsbE5hbWU6ICdHcmVlbiBTdGFyJyxcbiAgICBpZDogJzEyMzQ1Njc4OScsXG4gIH1cbn1cblxuY29uc3QgTm90ZSA9ICh7IG5vdGUgfSkgPT4ge1xuICBjb25zdCB7IHR5cGUsIHVzZXIsIG1zZyB9ID0gbm90ZTtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmdfbm90ZV9jb250XCI+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8cD57bm90ZS50eXBlfTwvcD5cbiAgICAgICAgPGJ1dHRvbj54PC9idXR0b24+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICA8aW1nIHNyYz17dXNlci5wZXJmaWxJbWd9IGFsdD1cIlwiLz5cbiAgICAgICAgPE15TGluayBpZD17dXNlci5pZH0+e3VzZXIuZnVsbE5hbWV9PC9NeUxpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwPnttc2d9PC9wPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXYuZmxvYXRpbmdfbm90ZV9jb250e1xuICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IC41cmVtO1xuICAgICAgICAgIHotaW5kZXg6IDUwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgcGFkZGluZzogLjJyZW07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjOGJiOTQwO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgYnV0dG9ue1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIGRpdi5ib2R5e1xuICAgICAgICAgIHBhZGRpbmc6IC4ycmVtO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBpbWd7XG4gICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgRmxvYXRpbmdOb3RlcyA9ICgpID0+IHtcblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdGluZ19tYWluX2NvbnRcIj5cbiAgICAgIDxOb3RlIG5vdGU9e25vdGlmaWNhdGlvbn0gLz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuZmxvYXRpbmdfbWFpbl9jb250e1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogLTMwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB6LWluZGV4OiA1MDtcbiAgICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxvYXRpbmdOb3RlcztcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/floating-notes/floating-notes.jsx */"));
};

var FloatingNotes = function FloatingNotes() {
  return __jsx("div", {
    className: "jsx-2714419340" + " " + "floating_main_cont"
  }, __jsx(Note, {
    note: notification
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2714419340"
  }, ".floating_main_cont.jsx-2714419340{position:fixed;top:0;left:-30%;border:1px solid red;width:30%;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;z-index:50;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvZmxvYXRpbmctbm90ZXMvZmxvYXRpbmctbm90ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtGZ0IsQUFHd0IsZUFDVCxNQUNJLFVBQ1cscUJBQ1gsVUFDRyxhQUNBLDBFQUNTLDhFQUNHLGlHQUNkLFdBQ2IiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9mbG9hdGluZy1ub3Rlcy9mbG9hdGluZy1ub3Rlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9mbG9hdGluZy1ub3Rlcy5zY3NzJztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcbmltcG9ydCBNeUxpbmsgZnJvbSAnLi4vbXlsaW5rL2xpbmsnO1xuXG5jb25zdCBub3RpZmljYXRpb24gPSB7XG4gIHR5cGU6ICdSZWFjY2lvbicsXG4gIG1zZzogJ0xlIGd1c3RhIHR1IHBvc3QnLFxuICB1c2VyOiB7XG4gICAgcGVyZmlsSW1nOiAnL3N0YXRpYy9yYW5kb20vcjIuanBnJyxcbiAgICBmdWxsTmFtZTogJ0dyZWVuIFN0YXInLFxuICAgIGlkOiAnMTIzNDU2Nzg5JyxcbiAgfVxufVxuXG5jb25zdCBOb3RlID0gKHsgbm90ZSB9KSA9PiB7XG4gIGNvbnN0IHsgdHlwZSwgdXNlciwgbXNnIH0gPSBub3RlO1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdGluZ19ub3RlX2NvbnRcIj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxwPntub3RlLnR5cGV9PC9wPlxuICAgICAgICA8YnV0dG9uPng8L2J1dHRvbj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgIDxpbWcgc3JjPXt1c2VyLnBlcmZpbEltZ30gYWx0PVwiXCIvPlxuICAgICAgICA8TXlMaW5rIGlkPXt1c2VyLmlkfT57dXNlci5mdWxsTmFtZX08L015TGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHA+e21zZ308L3A+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdi5mbG9hdGluZ19ub3RlX2NvbnR7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogLjVyZW07XG4gICAgICAgICAgei1pbmRleDogNTA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlcntcbiAgICAgICAgICBwYWRkaW5nOiAuMnJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM4YmI5NDA7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIHB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciBidXR0b257XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciBidXR0b246aG92ZXJ7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgZGl2LmJvZHl7XG4gICAgICAgICAgcGFkZGluZzogLjJyZW07XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIGltZ3tcbiAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBGbG9hdGluZ05vdGVzID0gKCkgPT4ge1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0aW5nX21haW5fY29udFwiPlxuICAgICAgPE5vdGUgbm90ZT17bm90aWZpY2F0aW9ufSAvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5mbG9hdGluZ19tYWluX2NvbnR7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAtMzAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIHotaW5kZXg6IDUwO1xuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbG9hdGluZ05vdGVzO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/floating-notes/floating-notes.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FloatingNotes);

/***/ })

})
//# sourceMappingURL=login.js.a5b50c2b25d316c16fb2.hot-update.js.map
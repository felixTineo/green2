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
  return __jsx(_mylink_link__WEBPACK_IMPORTED_MODULE_4__["default"], null, __jsx("div", {
    className: "jsx-3119006703" + " " + "floating_note_cont"
  }, __jsx("header", {
    className: "jsx-3119006703"
  }, __jsx("p", {
    className: "jsx-3119006703"
  }, note.type), __jsx("button", {
    className: "jsx-3119006703"
  }, "x")), __jsx("div", {
    className: "jsx-3119006703" + " " + "body"
  }, __jsx("img", {
    src: user.perfilImg,
    alt: "",
    className: "jsx-3119006703"
  }), __jsx("div", {
    className: "jsx-3119006703" + " " + "info"
  }, __jsx("p", {
    className: "jsx-3119006703"
  }, user.fullName), __jsx("small", {
    className: "jsx-3119006703"
  }, msg))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3119006703"
  }, "div.floating_note_cont.jsx-3119006703{background:#fff;position:relative;left:100%;margin:.5rem;z-index:50;border-radius:3px;}header.jsx-3119006703{padding:.2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#8bb940;}header.jsx-3119006703 p.jsx-3119006703{margin:0;}header.jsx-3119006703 button.jsx-3119006703{background:transparent;-webkit-transition:250ms ease;transition:250ms ease;border:none;color:#333;}header.jsx-3119006703 button.jsx-3119006703:focus{outline:none;}header.jsx-3119006703 button.jsx-3119006703:hover{color:#fff;}div.body.jsx-3119006703{padding:.2rem;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.body.jsx-3119006703 p.jsx-3119006703{margin:0;}.body.jsx-3119006703 .info.jsx-3119006703{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}img.jsx-3119006703{width:60px;height:60px;border-radius:50%;object-fit:cover;object-position:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvZmxvYXRpbmctbm90ZXMvZmxvYXRpbmctbm90ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCb0IsQUFHNkIsQUFRRixBQU9MLEFBR2MsQUFNVixBQUdGLEFBR0csQUFLTCxBQUdJLEFBSUYsU0ExQmIsQUFvQkEsRUFSQSxBQWVjLEVBbEJkLENBaEJlLEFBc0JKLEVBOUJTLE9Ba0JJLEFBYVQsQUFZSyxXQTFDUixPQTJDTyxHQTFDSixhQUNGLENBMENZLFVBekNMLE1Ba0NJLENBbkJWLE1BMkJkLEtBekNBLENBZWEsQ0FYbUIsU0F1QmhDLENBWEEsc0RBa0JBLG1EQTdCcUIsNkZBQ0EsbUJBQ3JCIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvZmxvYXRpbmctbm90ZXMvZmxvYXRpbmctbm90ZXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vZmxvYXRpbmctbm90ZXMuc2Nzcyc7XG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQgTXlMaW5rIGZyb20gJy4uL215bGluay9saW5rJztcblxuY29uc3Qgbm90aWZpY2F0aW9uID0ge1xuICB0eXBlOiAnUmVhY2Npb24nLFxuICBtc2c6ICdMZSBndXN0YSB0dSBwb3N0JyxcbiAgdXNlcjoge1xuICAgIHBlcmZpbEltZzogJy9zdGF0aWMvcmFuZG9tL3IyLmpwZycsXG4gICAgZnVsbE5hbWU6ICdHcmVlbiBTdGFyJyxcbiAgICBpZDogJzEyMzQ1Njc4OScsXG4gIH1cbn1cblxuY29uc3QgTm90ZSA9ICh7IG5vdGUgfSkgPT4ge1xuICBjb25zdCB7IHR5cGUsIHVzZXIsIG1zZyB9ID0gbm90ZTtcbiAgcmV0dXJuKFxuICAgIDxNeUxpbms+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0aW5nX25vdGVfY29udFwiPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxwPntub3RlLnR5cGV9PC9wPlxuICAgICAgICAgIDxidXR0b24+eDwvYnV0dG9uPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAgPGltZyBzcmM9e3VzZXIucGVyZmlsSW1nfSBhbHQ9XCJcIi8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICA8cD57dXNlci5mdWxsTmFtZX08L3A+XG4gICAgICAgICAgICA8c21hbGw+e21zZ308L3NtYWxsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGRpdi5mbG9hdGluZ19ub3RlX2NvbnR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogLjVyZW07XG4gICAgICAgICAgICB6LWluZGV4OiA1MDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVye1xuICAgICAgICAgICAgcGFkZGluZzogLjJyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4YmI5NDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciBwe1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgYnV0dG9ue1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciBidXR0b246Zm9jdXN7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgYnV0dG9uOmhvdmVye1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdi5ib2R5e1xuICAgICAgICAgICAgcGFkZGluZzogLjJyZW07XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYm9keSBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJvZHkgLmluZm97XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTXlMaW5rPlxuICApXG59XG5cbmNvbnN0IEZsb2F0aW5nTm90ZXMgPSAoKSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmdfbWFpbl9jb250XCI+XG4gICAgICA8Tm90ZSBub3RlPXtub3RpZmljYXRpb259IC8+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmZsb2F0aW5nX21haW5fY29udHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IC0zMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgei1pbmRleDogNTA7XG4gICAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsb2F0aW5nTm90ZXM7XG4iXX0= */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/floating-notes/floating-notes.jsx */")));
};

var FloatingNotes = function FloatingNotes() {
  return __jsx("div", {
    className: "jsx-2714419340" + " " + "floating_main_cont"
  }, __jsx(Note, {
    note: notification
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2714419340"
  }, ".floating_main_cont.jsx-2714419340{position:fixed;top:0;left:-30%;border:1px solid red;width:30%;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;z-index:50;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvZmxvYXRpbmctbm90ZXMvZmxvYXRpbmctbm90ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZGZ0IsQUFHd0IsZUFDVCxNQUNJLFVBQ1cscUJBQ1gsVUFDRyxhQUNBLDBFQUNTLDhFQUNHLGlHQUNkLFdBQ2IiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9mbG9hdGluZy1ub3Rlcy9mbG9hdGluZy1ub3Rlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9mbG9hdGluZy1ub3Rlcy5zY3NzJztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcbmltcG9ydCBNeUxpbmsgZnJvbSAnLi4vbXlsaW5rL2xpbmsnO1xuXG5jb25zdCBub3RpZmljYXRpb24gPSB7XG4gIHR5cGU6ICdSZWFjY2lvbicsXG4gIG1zZzogJ0xlIGd1c3RhIHR1IHBvc3QnLFxuICB1c2VyOiB7XG4gICAgcGVyZmlsSW1nOiAnL3N0YXRpYy9yYW5kb20vcjIuanBnJyxcbiAgICBmdWxsTmFtZTogJ0dyZWVuIFN0YXInLFxuICAgIGlkOiAnMTIzNDU2Nzg5JyxcbiAgfVxufVxuXG5jb25zdCBOb3RlID0gKHsgbm90ZSB9KSA9PiB7XG4gIGNvbnN0IHsgdHlwZSwgdXNlciwgbXNnIH0gPSBub3RlO1xuICByZXR1cm4oXG4gICAgPE15TGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmdfbm90ZV9jb250XCI+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPHA+e25vdGUudHlwZX08L3A+XG4gICAgICAgICAgPGJ1dHRvbj54PC9idXR0b24+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgICA8aW1nIHNyYz17dXNlci5wZXJmaWxJbWd9IGFsdD1cIlwiLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICAgIDxwPnt1c2VyLmZ1bGxOYW1lfTwvcD5cbiAgICAgICAgICAgIDxzbWFsbD57bXNnfTwvc21hbGw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgZGl2LmZsb2F0aW5nX25vdGVfY29udHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAuNXJlbTtcbiAgICAgICAgICAgIHotaW5kZXg6IDUwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgICBwYWRkaW5nOiAuMnJlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzhiYjk0MDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIHB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciBidXR0b257XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciBidXR0b246aG92ZXJ7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2LmJvZHl7XG4gICAgICAgICAgICBwYWRkaW5nOiAuMnJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ib2R5IHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYm9keSAuaW5mb3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9NeUxpbms+XG4gIClcbn1cblxuY29uc3QgRmxvYXRpbmdOb3RlcyA9ICgpID0+IHtcblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdGluZ19tYWluX2NvbnRcIj5cbiAgICAgIDxOb3RlIG5vdGU9e25vdGlmaWNhdGlvbn0gLz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuZmxvYXRpbmdfbWFpbl9jb250e1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogLTMwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB6LWluZGV4OiA1MDtcbiAgICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxvYXRpbmdOb3RlcztcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/floating-notes/floating-notes.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FloatingNotes);

/***/ })

})
//# sourceMappingURL=perfil.js.eda8d9d7e8cdb9862d38.hot-update.js.map
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
    className: "jsx-1540997575" + " " + "floating_note_cont"
  }, __jsx("header", {
    className: "jsx-1540997575"
  }, __jsx("p", {
    className: "jsx-1540997575"
  }, note.type), __jsx("button", {
    className: "jsx-1540997575"
  }, "x")), __jsx("div", {
    className: "jsx-1540997575" + " " + "body"
  }, __jsx("img", {
    src: user.perfilImg,
    alt: "",
    className: "jsx-1540997575"
  }), __jsx("div", {
    className: "jsx-1540997575" + " " + "info"
  }, __jsx("p", {
    className: "jsx-1540997575"
  }, user.fullName), __jsx("small", {
    className: "jsx-1540997575"
  }, msg))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1540997575"
  }, "div.floating_note_cont.jsx-1540997575{background:#fff;position:relative;left:100%;margin:.5rem;z-index:50;border-radius:3px;}header.jsx-1540997575{padding:.2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#8bb940;}header.jsx-1540997575 p.jsx-1540997575{margin:0;}header.jsx-1540997575 button.jsx-1540997575{background:transparent;-webkit-transition:250ms ease;transition:250ms ease;border:none;color:#333;}header.jsx-1540997575 button.jsx-1540997575:focus{outline:none;}header.jsx-1540997575 button.jsx-1540997575:hover{color:#fff;}div.body.jsx-1540997575{padding:.2rem;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}img.jsx-1540997575{width:60px;height:60px;border-radius:50%;object-fit:cover;object-position:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvZmxvYXRpbmctbm90ZXMvZmxvYXRpbmctbm90ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCb0IsQUFHNkIsQUFRRixBQU9MLEFBR2MsQUFNVixBQUdGLEFBR0csQUFLSCxTQW5CYixFQVlBLEFBUWMsRUFYZCxDQWhCZSxBQXNCSixFQTlCUyxPQWtCSSxBQWFULEFBS0ssV0FuQ1IsT0FvQ08sR0FuQ0osYUFDRixDQW1DWSxVQWxDTCxPQWVOLE1Bb0JkLEtBbENBLENBZWEsQ0FYbUIsU0F1QmhDLENBWEEseUdBWHFCLDZGQUNBLG1CQUNyQiIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL2Zsb2F0aW5nLW5vdGVzL2Zsb2F0aW5nLW5vdGVzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL2Zsb2F0aW5nLW5vdGVzLnNjc3MnO1xuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuaW1wb3J0IE15TGluayBmcm9tICcuLi9teWxpbmsvbGluayc7XG5cbmNvbnN0IG5vdGlmaWNhdGlvbiA9IHtcbiAgdHlwZTogJ1JlYWNjaW9uJyxcbiAgbXNnOiAnTGUgZ3VzdGEgdHUgcG9zdCcsXG4gIHVzZXI6IHtcbiAgICBwZXJmaWxJbWc6ICcvc3RhdGljL3JhbmRvbS9yMi5qcGcnLFxuICAgIGZ1bGxOYW1lOiAnR3JlZW4gU3RhcicsXG4gICAgaWQ6ICcxMjM0NTY3ODknLFxuICB9XG59XG5cbmNvbnN0IE5vdGUgPSAoeyBub3RlIH0pID0+IHtcbiAgY29uc3QgeyB0eXBlLCB1c2VyLCBtc2cgfSA9IG5vdGU7XG4gIHJldHVybihcbiAgICA8TXlMaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdGluZ19ub3RlX2NvbnRcIj5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8cD57bm90ZS50eXBlfTwvcD5cbiAgICAgICAgICA8YnV0dG9uPng8L2J1dHRvbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLnBlcmZpbEltZ30gYWx0PVwiXCIvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgPHA+e3VzZXIuZnVsbE5hbWV9PC9wPlxuICAgICAgICAgICAgPHNtYWxsPnttc2d9PC9zbWFsbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBkaXYuZmxvYXRpbmdfbm90ZV9jb250e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IC41cmVtO1xuICAgICAgICAgICAgei1pbmRleDogNTA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlcntcbiAgICAgICAgICAgIHBhZGRpbmc6IC4ycmVtO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOGJiOTQwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgcHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIGJ1dHRvbntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYuYm9keXtcbiAgICAgICAgICAgIHBhZGRpbmc6IC4ycmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTXlMaW5rPlxuICApXG59XG5cbmNvbnN0IEZsb2F0aW5nTm90ZXMgPSAoKSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmdfbWFpbl9jb250XCI+XG4gICAgICA8Tm90ZSBub3RlPXtub3RpZmljYXRpb259IC8+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmZsb2F0aW5nX21haW5fY29udHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IC0zMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgei1pbmRleDogNTA7XG4gICAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsb2F0aW5nTm90ZXM7XG4iXX0= */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/floating-notes/floating-notes.jsx */")));
};

var FloatingNotes = function FloatingNotes() {
  return __jsx("div", {
    className: "jsx-2714419340" + " " + "floating_main_cont"
  }, __jsx(Note, {
    note: notification
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2714419340"
  }, ".floating_main_cont.jsx-2714419340{position:fixed;top:0;left:-30%;border:1px solid red;width:30%;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;z-index:50;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvZmxvYXRpbmctbm90ZXMvZmxvYXRpbmctbm90ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNGZ0IsQUFHd0IsZUFDVCxNQUNJLFVBQ1cscUJBQ1gsVUFDRyxhQUNBLDBFQUNTLDhFQUNHLGlHQUNkLFdBQ2IiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9mbG9hdGluZy1ub3Rlcy9mbG9hdGluZy1ub3Rlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9mbG9hdGluZy1ub3Rlcy5zY3NzJztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcbmltcG9ydCBNeUxpbmsgZnJvbSAnLi4vbXlsaW5rL2xpbmsnO1xuXG5jb25zdCBub3RpZmljYXRpb24gPSB7XG4gIHR5cGU6ICdSZWFjY2lvbicsXG4gIG1zZzogJ0xlIGd1c3RhIHR1IHBvc3QnLFxuICB1c2VyOiB7XG4gICAgcGVyZmlsSW1nOiAnL3N0YXRpYy9yYW5kb20vcjIuanBnJyxcbiAgICBmdWxsTmFtZTogJ0dyZWVuIFN0YXInLFxuICAgIGlkOiAnMTIzNDU2Nzg5JyxcbiAgfVxufVxuXG5jb25zdCBOb3RlID0gKHsgbm90ZSB9KSA9PiB7XG4gIGNvbnN0IHsgdHlwZSwgdXNlciwgbXNnIH0gPSBub3RlO1xuICByZXR1cm4oXG4gICAgPE15TGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmdfbm90ZV9jb250XCI+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPHA+e25vdGUudHlwZX08L3A+XG4gICAgICAgICAgPGJ1dHRvbj54PC9idXR0b24+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgICA8aW1nIHNyYz17dXNlci5wZXJmaWxJbWd9IGFsdD1cIlwiLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICAgIDxwPnt1c2VyLmZ1bGxOYW1lfTwvcD5cbiAgICAgICAgICAgIDxzbWFsbD57bXNnfTwvc21hbGw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgZGl2LmZsb2F0aW5nX25vdGVfY29udHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAuNXJlbTtcbiAgICAgICAgICAgIHotaW5kZXg6IDUwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgICBwYWRkaW5nOiAuMnJlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzhiYjk0MDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIHB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciBidXR0b257XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciBidXR0b246aG92ZXJ7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2LmJvZHl7XG4gICAgICAgICAgICBwYWRkaW5nOiAuMnJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L015TGluaz5cbiAgKVxufVxuXG5jb25zdCBGbG9hdGluZ05vdGVzID0gKCkgPT4ge1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0aW5nX21haW5fY29udFwiPlxuICAgICAgPE5vdGUgbm90ZT17bm90aWZpY2F0aW9ufSAvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5mbG9hdGluZ19tYWluX2NvbnR7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAtMzAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIHotaW5kZXg6IDUwO1xuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbG9hdGluZ05vdGVzO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/floating-notes/floating-notes.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FloatingNotes);

/***/ })

})
//# sourceMappingURL=perfil.js.6c173753c478ebe82274.hot-update.js.map
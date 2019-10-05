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
  noteId: '123456789',
  type: 'Reaccion',
  msg: 'Reacciono a tu post',
  user: {
    perfilImg: '/static/random/r2.jpg',
    fullName: 'Green Star',
    id: '123456789'
  }
};

var Note = function Note(_ref) {
  var note = _ref.note,
      rmNote = _ref.rmNote;
  var type = note.type,
      user = note.user,
      msg = note.msg;
  return __jsx(_mylink_link__WEBPACK_IMPORTED_MODULE_4__["default"], null, __jsx("div", {
    className: "jsx-859176072" + " " + "floating_note_cont shadow animated fadeInLeft"
  }, __jsx("header", {
    className: "jsx-859176072"
  }, __jsx("p", {
    className: "jsx-859176072"
  }, note.type), __jsx("button", {
    id: note.noteId,
    onClick: rmNote,
    className: "jsx-859176072"
  }, "x")), __jsx("div", {
    className: "jsx-859176072" + " " + "body"
  }, __jsx("img", {
    src: user.perfilImg,
    alt: "",
    className: "jsx-859176072"
  }), __jsx("div", {
    className: "jsx-859176072" + " " + "info"
  }, __jsx("p", {
    className: "jsx-859176072"
  }, user.fullName), __jsx("small", {
    className: "jsx-859176072"
  }, msg))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "859176072"
  }, "div.floating_note_cont.jsx-859176072{width:60%;background:#fff;position:relative;left:100%;margin:.5rem;z-index:50;border-radius:3px;}header.jsx-859176072{padding:.2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#8bb940;}header.jsx-859176072 p.jsx-859176072{margin:0;}header.jsx-859176072 button.jsx-859176072{background:transparent;-webkit-transition:250ms ease;transition:250ms ease;border:none;color:#333;}header.jsx-859176072 button.jsx-859176072:focus{outline:none;}header.jsx-859176072 button.jsx-859176072:hover{color:#fff;}div.body.jsx-859176072{padding:.2rem;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.body.jsx-859176072 p.jsx-859176072{margin:0;}.body.jsx-859176072 .info.jsx-859176072{margin-left:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}img.jsx-859176072{width:60px;height:60px;border-radius:50%;object-fit:cover;object-position:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvZmxvYXRpbmctbm90ZXMvZmxvYXRpbmctbm90ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDb0IsQUFHdUIsQUFTSSxBQU9MLEFBR2MsQUFNVixBQUdGLEFBR0csQUFLTCxBQUdRLEFBT04sU0E3QmIsQUFvQkEsQ0FwQ2tCLENBNEJsQixBQWtCYyxFQXJCZCxDQWhCZSxBQXNCSixHQVFJLE1BcEJTLEFBYVQsQUFlSyxHQTlDQSxlQStDRCxHQTlDUCxVQUNHLElBOENVLFNBN0NaLFFBZ0JDLEdBZk0sR0E2Q3BCLE1BN0JhLENBWG1CLEdBOEJSLEtBbEN4QixDQTJCQSxDQVhBLHVFQW1CeUIsa0NBOUJKLGlFQStCQSw0QkE5QkEsbUJBQ3JCLDhDQThCQSIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL2Zsb2F0aW5nLW5vdGVzL2Zsb2F0aW5nLW5vdGVzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL2Zsb2F0aW5nLW5vdGVzLnNjc3MnO1xuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuaW1wb3J0IE15TGluayBmcm9tICcuLi9teWxpbmsvbGluayc7XG5cbmNvbnN0IG5vdGlmaWNhdGlvbiA9IHtcbiAgbm90ZUlkOiAnMTIzNDU2Nzg5JyxcbiAgdHlwZTogJ1JlYWNjaW9uJyxcbiAgbXNnOiAnUmVhY2Npb25vIGEgdHUgcG9zdCcsXG4gIHVzZXI6IHtcbiAgICBwZXJmaWxJbWc6ICcvc3RhdGljL3JhbmRvbS9yMi5qcGcnLFxuICAgIGZ1bGxOYW1lOiAnR3JlZW4gU3RhcicsXG4gICAgaWQ6ICcxMjM0NTY3ODknLFxuICB9XG59XG5cbmNvbnN0IE5vdGUgPSAoeyBub3RlLCBybU5vdGUgfSkgPT4ge1xuICBjb25zdCB7IHR5cGUsIHVzZXIsIG1zZyB9ID0gbm90ZTtcbiAgcmV0dXJuKFxuICAgIDxNeUxpbms+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0aW5nX25vdGVfY29udCBzaGFkb3cgYW5pbWF0ZWQgZmFkZUluTGVmdFwiPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxwPntub3RlLnR5cGV9PC9wPlxuICAgICAgICAgIDxidXR0b24gaWQ9e25vdGUubm90ZUlkfSBvbkNsaWNrPXtybU5vdGV9ID54PC9idXR0b24+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgICA8aW1nIHNyYz17dXNlci5wZXJmaWxJbWd9IGFsdD1cIlwiLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICAgIDxwPnt1c2VyLmZ1bGxOYW1lfTwvcD5cbiAgICAgICAgICAgIDxzbWFsbD57bXNnfTwvc21hbGw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgZGl2LmZsb2F0aW5nX25vdGVfY29udHtcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogLjVyZW07XG4gICAgICAgICAgICB6LWluZGV4OiA1MDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVye1xuICAgICAgICAgICAgcGFkZGluZzogLjJyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4YmI5NDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciBwe1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgYnV0dG9ue1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciBidXR0b246Zm9jdXN7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgYnV0dG9uOmhvdmVye1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdi5ib2R5e1xuICAgICAgICAgICAgcGFkZGluZzogLjJyZW07XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYm9keSBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJvZHkgLmluZm97XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9NeUxpbms+XG4gIClcbn1cblxuY29uc3QgRmxvYXRpbmdOb3RlcyA9ICgpID0+IHtcbiAgY29uc3QgW25vdGVzLCBzZXROb3Rlc10gPSB1c2VTdGF0ZShbbm90aWZpY2F0aW9uXSk7XG4gIGNvbnN0IHJtTm90ZSA9IChlKSA9PiB7XG4gICAgY29uc3QgbmV3Tm90ZXMgPSBub3Rlcy5maWx0ZXIobm90ZSA9PiBub3RlLm5vdGVJZCAhPT0gZS50YXJnZXQuaWQpO1xuICAgIHNldE5vdGVzKG5ld05vdGVzKTtcbiAgfVxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdGluZ19tYWluX2NvbnRcIj5cbiAgICAgIHtcbiAgICAgICAgbm90ZXMubWFwKG5vdGUgPT4gPE5vdGUgbm90ZT17bm90ZX0gcm1Ob3RlPXtybU5vdGV9IC8+KVxuICAgICAgfVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5mbG9hdGluZ19tYWluX2NvbnR7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAtMzAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIHotaW5kZXg6IDUwO1xuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbG9hdGluZ05vdGVzO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/floating-notes/floating-notes.jsx */")));
};

var FloatingNotes = function FloatingNotes() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([notification]),
      notes = _useState[0],
      setNotes = _useState[1];

  var rmNote = function rmNote(e) {
    var newNotes = notes.filter(function (note) {
      return note.noteId !== e.target.id;
    });
    setNotes(newNotes);
  };

  return __jsx("div", {
    className: "jsx-2714419340" + " " + "floating_main_cont"
  }, notes.map(function (note) {
    return __jsx(Note, {
      note: note,
      rmNote: rmNote
    });
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2714419340"
  }, ".floating_main_cont.jsx-2714419340{position:fixed;top:0;left:-30%;border:1px solid red;width:30%;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;z-index:50;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvZmxvYXRpbmctbm90ZXMvZmxvYXRpbmctbm90ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdHZ0IsQUFHd0IsZUFDVCxNQUNJLFVBQ1cscUJBQ1gsVUFDRyxhQUNBLDBFQUNTLDhFQUNHLGlHQUNkLFdBQ2IiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9mbG9hdGluZy1ub3Rlcy9mbG9hdGluZy1ub3Rlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9mbG9hdGluZy1ub3Rlcy5zY3NzJztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcbmltcG9ydCBNeUxpbmsgZnJvbSAnLi4vbXlsaW5rL2xpbmsnO1xuXG5jb25zdCBub3RpZmljYXRpb24gPSB7XG4gIG5vdGVJZDogJzEyMzQ1Njc4OScsXG4gIHR5cGU6ICdSZWFjY2lvbicsXG4gIG1zZzogJ1JlYWNjaW9ubyBhIHR1IHBvc3QnLFxuICB1c2VyOiB7XG4gICAgcGVyZmlsSW1nOiAnL3N0YXRpYy9yYW5kb20vcjIuanBnJyxcbiAgICBmdWxsTmFtZTogJ0dyZWVuIFN0YXInLFxuICAgIGlkOiAnMTIzNDU2Nzg5JyxcbiAgfVxufVxuXG5jb25zdCBOb3RlID0gKHsgbm90ZSwgcm1Ob3RlIH0pID0+IHtcbiAgY29uc3QgeyB0eXBlLCB1c2VyLCBtc2cgfSA9IG5vdGU7XG4gIHJldHVybihcbiAgICA8TXlMaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdGluZ19ub3RlX2NvbnQgc2hhZG93IGFuaW1hdGVkIGZhZGVJbkxlZnRcIj5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8cD57bm90ZS50eXBlfTwvcD5cbiAgICAgICAgICA8YnV0dG9uIGlkPXtub3RlLm5vdGVJZH0gb25DbGljaz17cm1Ob3RlfSA+eDwvYnV0dG9uPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAgPGltZyBzcmM9e3VzZXIucGVyZmlsSW1nfSBhbHQ9XCJcIi8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICA8cD57dXNlci5mdWxsTmFtZX08L3A+XG4gICAgICAgICAgICA8c21hbGw+e21zZ308L3NtYWxsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGRpdi5mbG9hdGluZ19ub3RlX2NvbnR7XG4gICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IC41cmVtO1xuICAgICAgICAgICAgei1pbmRleDogNTA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlcntcbiAgICAgICAgICAgIHBhZGRpbmc6IC4ycmVtO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOGJiOTQwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgcHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIGJ1dHRvbntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYuYm9keXtcbiAgICAgICAgICAgIHBhZGRpbmc6IC4ycmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJvZHkgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ib2R5IC5pbmZve1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTXlMaW5rPlxuICApXG59XG5cbmNvbnN0IEZsb2F0aW5nTm90ZXMgPSAoKSA9PiB7XG4gIGNvbnN0IFtub3Rlcywgc2V0Tm90ZXNdID0gdXNlU3RhdGUoW25vdGlmaWNhdGlvbl0pO1xuICBjb25zdCBybU5vdGUgPSAoZSkgPT4ge1xuICAgIGNvbnN0IG5ld05vdGVzID0gbm90ZXMuZmlsdGVyKG5vdGUgPT4gbm90ZS5ub3RlSWQgIT09IGUudGFyZ2V0LmlkKTtcbiAgICBzZXROb3RlcyhuZXdOb3Rlcyk7XG4gIH1cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmdfbWFpbl9jb250XCI+XG4gICAgICB7XG4gICAgICAgIG5vdGVzLm1hcChub3RlID0+IDxOb3RlIG5vdGU9e25vdGV9IHJtTm90ZT17cm1Ob3RlfSAvPilcbiAgICAgIH1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuZmxvYXRpbmdfbWFpbl9jb250e1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogLTMwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB6LWluZGV4OiA1MDtcbiAgICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxvYXRpbmdOb3RlcztcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/floating-notes/floating-notes.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FloatingNotes);

/***/ })

})
//# sourceMappingURL=perfil.js.aa75e7b70e94641a344e.hot-update.js.map
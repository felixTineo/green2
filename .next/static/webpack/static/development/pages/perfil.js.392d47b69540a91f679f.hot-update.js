webpackHotUpdate("static/development/pages/perfil.js",{

/***/ "./components/floating-notes/floating-notes.jsx":
/*!******************************************************!*\
  !*** ./components/floating-notes/floating-notes.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var _floating_notes_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./floating-notes.scss */ "./components/floating-notes/floating-notes.scss");
/* harmony import */ var _floating_notes_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_floating_notes_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mylink_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mylink/link */ "./components/mylink/link.jsx");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_8__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var Note = function Note(_ref) {
  var note = _ref.note;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var user = note.user;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setTimeout(function () {
      dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["OFF_FLOAT"],
        id: note.id
      });
    }, 6000);
  }, [note]);
  var date = new Date(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()());
  return __jsx("div", {
    id: note.id,
    className: "jsx-3558922848" + " " + "floating_note_cont shadow animated"
  }, __jsx("header", {
    className: "jsx-3558922848"
  }, __jsx("p", {
    className: "jsx-3558922848"
  }, function () {
    switch (note.type) {
      case 'ACCEPT':
        return 'Nuevo Amigo';

      case 'REACTION':
        return 'Reaccion';

      case 'FRIEND':
        return 'Solicitud';

      case 'COMMENT':
        return 'Comentario';

      case 'GIFT':
        return 'Regalo';
    }
  }()), __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["OFF_FLOAT"],
        id: note.id
      });
    },
    className: "jsx-3558922848"
  }, "x")), __jsx(_mylink_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: user.url
  }, __jsx("div", {
    className: "jsx-3558922848" + " " + "body"
  }, __jsx("img", {
    src: note.type === 'GIFT' ? user.img : user.perfilImg,
    alt: "",
    className: "jsx-3558922848"
  }), __jsx("div", {
    className: "jsx-3558922848" + " " + "info"
  }, __jsx("p", {
    className: "jsx-3558922848"
  }, note.type === 'GIFT' ? user.name : user.fullName), __jsx("small", {
    className: "jsx-3558922848"
  }, function () {
    switch (note.type) {
      case 'ACCEPT':
        return 'Acepto tu solicitud de amistad';

      case 'REACTION':
        return 'Reacciono a uno de tus posts';

      case 'FRIEND':
        return 'Quiere Ser Tu Amigo';

      case 'COMMENT':
        return 'Comento uno de tus posts';

      case 'GIFT':
        return 'Has recibido un regalo';
    }
  }())))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3558922848"
  }, "div.floating_note_cont.jsx-3558922848{width:65%;background:#fff;position:relative;left:100%;margin:.5rem;z-index:50;border-radius:3px;}header.jsx-3558922848{padding:.2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#8bb940;}header.jsx-3558922848 p.jsx-3558922848{margin:0;}header.jsx-3558922848 button.jsx-3558922848{background:transparent;-webkit-transition:250ms ease;transition:250ms ease;border:none;color:#333;}header.jsx-3558922848 button.jsx-3558922848:focus{outline:none;}header.jsx-3558922848 button.jsx-3558922848:hover{color:#fff;}div.body.jsx-3558922848{padding:.2rem;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.body.jsx-3558922848 p.jsx-3558922848{margin:0;}.body.jsx-3558922848 .info.jsx-3558922848{margin-left:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}small.jsx-3558922848{font-size:11px;margin:0;}img.jsx-3558922848{width:60px;height:60px;border-radius:50%;object-fit:cover;object-position:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvZmxvYXRpbmctbm90ZXMvZmxvYXRpbmctbm90ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFb0IsQUFHdUIsQUFTSSxBQU9MLEFBR2MsQUFNVixBQUdGLEFBR0csQUFLTCxBQUdRLEFBT0YsQUFJSixTQWpDYixBQW9CQSxDQXBDa0IsQ0E0QmxCLEFBc0JjLEVBekJkLENBaEJlLEFBc0JKLENBZUEsRUFQSSxNQXBCUyxBQWFULEFBbUJLLENBSnBCLEVBOUNvQixlQW1ERCxHQWxEUCxVQUNHLElBa0RVLFNBakRaLFFBZ0JDLEdBZk0sR0FpRHBCLE1BakNhLENBWG1CLEdBOEJSLEtBbEN4QixDQTJCQSxDQVhBLHVFQW1CeUIsa0NBOUJKLGlFQStCSSw0QkE5QkosbUJBQ3JCLDhEQThCQSIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL2Zsb2F0aW5nLW5vdGVzL2Zsb2F0aW5nLW5vdGVzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgT0ZGX0ZMT0FUIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCAnLi9mbG9hdGluZy1ub3Rlcy5zY3NzJztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcbmltcG9ydCBNeUxpbmsgZnJvbSAnLi4vbXlsaW5rL2xpbmsnO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92MSc7XG5cbmNvbnN0IE5vdGUgPSAoeyBub3RlIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IHVzZXIgfSA9IG5vdGU7XG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogT0ZGX0ZMT0FULCBpZDogbm90ZS5pZCB9KVxuICAgIH0sIDYwMDApXG4gIH0sW25vdGVdKTtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKERhdGUubm93KCkpO1xuICByZXR1cm4oXG4gICAgICA8ZGl2IGlkPXtub3RlLmlkfSBjbGFzc05hbWU9XCJmbG9hdGluZ19ub3RlX2NvbnQgc2hhZG93IGFuaW1hdGVkXCI+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICgoKT0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG5vdGUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSAnQUNDRVBUJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdOdWV2byBBbWlnbydcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ1JFQUNUSU9OJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdSZWFjY2lvbic7XG4gICAgICAgICAgICAgICAgICBjYXNlICdGUklFTkQnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1NvbGljaXR1ZCdcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ0NPTU1FTlQnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0NvbWVudGFyaW8nXG4gICAgICAgICAgICAgICAgICBjYXNlICdHSUZUJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdSZWdhbG8nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBkaXNwYXRjaCh7IHR5cGU6IE9GRl9GTE9BVCwgaWQ6IG5vdGUuaWQgfSl9ID54PC9idXR0b24+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8TXlMaW5rIGlkPXt1c2VyLnVybH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17bm90ZS50eXBlID09PSAnR0lGVCcgPyB1c2VyLmltZyA6IHVzZXIucGVyZmlsSW1nfSBhbHQ9XCJcIi8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICAgICAgPHA+e25vdGUudHlwZSA9PT0gJ0dJRlQnID8gdXNlci5uYW1lIDogdXNlci5mdWxsTmFtZX08L3A+XG4gICAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAoKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobm90ZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQUNDRVBUJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnQWNlcHRvIHR1IHNvbGljaXR1ZCBkZSBhbWlzdGFkJztcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlICdSRUFDVElPTic6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1JlYWNjaW9ubyBhIHVubyBkZSB0dXMgcG9zdHMnO1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0ZSSUVORCc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1F1aWVyZSBTZXIgVHUgQW1pZ28nXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQ09NTUVOVCc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0NvbWVudG8gdW5vIGRlIHR1cyBwb3N0cydcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlICdHSUZUJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnSGFzIHJlY2liaWRvIHVuIHJlZ2FsbydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSkoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L015TGluaz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGRpdi5mbG9hdGluZ19ub3RlX2NvbnR7XG4gICAgICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IC41cmVtO1xuICAgICAgICAgICAgei1pbmRleDogNTA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlcntcbiAgICAgICAgICAgIHBhZGRpbmc6IC4ycmVtO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOGJiOTQwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgcHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIGJ1dHRvbntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYuYm9keXtcbiAgICAgICAgICAgIHBhZGRpbmc6IC4ycmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJvZHkgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ib2R5IC5pbmZve1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNtYWxse1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgRmxvYXRpbmdOb3RlcyA9ICgpID0+IHtcbiAgY29uc3Qgbm90ZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5mbG9hdGluZ25vdGVzKTtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmdfbWFpbl9jb250XCI+XG4gICAgICB7XG4gICAgICAgIG5vdGVzLm1hcCgobm90ZSwgaSkgPT4gPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlZCBmYWRlSW5MZWZ0XCI+PE5vdGUga2V5PXt1dWlkKCl9IG5vdGU9e25vdGV9IC8+PC9kaXY+KVxuICAgICAgfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZmxvYXRpbmdfbWFpbl9jb250e1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogLTMwJTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICAgIHotaW5kZXg6IDUwO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbG9hdGluZ05vdGVzO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/floating-notes/floating-notes.jsx */"));
};

var FloatingNotes = function FloatingNotes() {
  var notes = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.floatingnotes;
  });
  return __jsx("div", {
    className: "jsx-2440513572" + " " + "floating_main_cont"
  }, notes.map(function (note, i) {
    return __jsx("div", {
      className: "jsx-2440513572" + " " + "animated fadeInLeft"
    }, __jsx(Note, {
      key: uuid_v1__WEBPACK_IMPORTED_MODULE_8___default()(),
      note: note
    }));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2440513572"
  }, ".floating_main_cont.jsx-2440513572{position:fixed;top:0;left:-30%;border:1px solid red;width:30%;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;z-index:50;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvZmxvYXRpbmctbm90ZXMvZmxvYXRpbmctbm90ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlJa0IsQUFHMEIsZUFDVCxNQUNJLFVBQ1cscUJBQ1gsVUFDRyxhQUNBLDBFQUNpQixzR0FDbkIsV0FDYiIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL2Zsb2F0aW5nLW5vdGVzL2Zsb2F0aW5nLW5vdGVzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgT0ZGX0ZMT0FUIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCAnLi9mbG9hdGluZy1ub3Rlcy5zY3NzJztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcbmltcG9ydCBNeUxpbmsgZnJvbSAnLi4vbXlsaW5rL2xpbmsnO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92MSc7XG5cbmNvbnN0IE5vdGUgPSAoeyBub3RlIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IHVzZXIgfSA9IG5vdGU7XG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogT0ZGX0ZMT0FULCBpZDogbm90ZS5pZCB9KVxuICAgIH0sIDYwMDApXG4gIH0sW25vdGVdKTtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKERhdGUubm93KCkpO1xuICByZXR1cm4oXG4gICAgICA8ZGl2IGlkPXtub3RlLmlkfSBjbGFzc05hbWU9XCJmbG9hdGluZ19ub3RlX2NvbnQgc2hhZG93IGFuaW1hdGVkXCI+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICgoKT0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG5vdGUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSAnQUNDRVBUJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdOdWV2byBBbWlnbydcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ1JFQUNUSU9OJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdSZWFjY2lvbic7XG4gICAgICAgICAgICAgICAgICBjYXNlICdGUklFTkQnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1NvbGljaXR1ZCdcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ0NPTU1FTlQnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0NvbWVudGFyaW8nXG4gICAgICAgICAgICAgICAgICBjYXNlICdHSUZUJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdSZWdhbG8nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBkaXNwYXRjaCh7IHR5cGU6IE9GRl9GTE9BVCwgaWQ6IG5vdGUuaWQgfSl9ID54PC9idXR0b24+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8TXlMaW5rIGlkPXt1c2VyLnVybH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17bm90ZS50eXBlID09PSAnR0lGVCcgPyB1c2VyLmltZyA6IHVzZXIucGVyZmlsSW1nfSBhbHQ9XCJcIi8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICAgICAgPHA+e25vdGUudHlwZSA9PT0gJ0dJRlQnID8gdXNlci5uYW1lIDogdXNlci5mdWxsTmFtZX08L3A+XG4gICAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAoKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobm90ZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQUNDRVBUJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnQWNlcHRvIHR1IHNvbGljaXR1ZCBkZSBhbWlzdGFkJztcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlICdSRUFDVElPTic6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1JlYWNjaW9ubyBhIHVubyBkZSB0dXMgcG9zdHMnO1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0ZSSUVORCc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1F1aWVyZSBTZXIgVHUgQW1pZ28nXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQ09NTUVOVCc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0NvbWVudG8gdW5vIGRlIHR1cyBwb3N0cydcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlICdHSUZUJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnSGFzIHJlY2liaWRvIHVuIHJlZ2FsbydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSkoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L015TGluaz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGRpdi5mbG9hdGluZ19ub3RlX2NvbnR7XG4gICAgICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IC41cmVtO1xuICAgICAgICAgICAgei1pbmRleDogNTA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlcntcbiAgICAgICAgICAgIHBhZGRpbmc6IC4ycmVtO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOGJiOTQwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgcHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIGJ1dHRvbntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYuYm9keXtcbiAgICAgICAgICAgIHBhZGRpbmc6IC4ycmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJvZHkgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ib2R5IC5pbmZve1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNtYWxse1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgRmxvYXRpbmdOb3RlcyA9ICgpID0+IHtcbiAgY29uc3Qgbm90ZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5mbG9hdGluZ25vdGVzKTtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmdfbWFpbl9jb250XCI+XG4gICAgICB7XG4gICAgICAgIG5vdGVzLm1hcCgobm90ZSwgaSkgPT4gPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlZCBmYWRlSW5MZWZ0XCI+PE5vdGUga2V5PXt1dWlkKCl9IG5vdGU9e25vdGV9IC8+PC9kaXY+KVxuICAgICAgfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZmxvYXRpbmdfbWFpbl9jb250e1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogLTMwJTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICAgIHotaW5kZXg6IDUwO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbG9hdGluZ05vdGVzO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/floating-notes/floating-notes.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FloatingNotes);

/***/ })

})
//# sourceMappingURL=perfil.js.392d47b69540a91f679f.hot-update.js.map
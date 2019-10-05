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
    className: "jsx-1392856258" + " " + "floating_main_cont"
  }, __jsx("div", {
    className: "jsx-1392856258" + " " + "floating_note_cont"
  }, __jsx("img", {
    src: "/static/random/r1.jpg",
    alt: "",
    className: "jsx-1392856258"
  }), __jsx("a", {
    href: "#",
    className: "jsx-1392856258"
  }, "star green"), __jsx("p", {
    className: "jsx-1392856258"
  }, "Le gusta tu post")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1392856258"
  }, ".floating_main_cont.jsx-1392856258{position:fixed;top:0;left:-30%;border:1px solid red;width:30%;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;z-index:50;}.floating_note_cont.jsx-1392856258{width:50% height:80px;background:#eee;padding:.5rem;position:relative;left:100%;margin-left:.5rem;z-index:50;}img.jsx-1392856258{width:40px;height:40px;border-radius:50%;object-fit:cover;object-position:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvZmxvYXRpbmctbm90ZXMvZmxvYXRpbmctbm90ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFnQixBQUd3QixBQWFILEFBU0QsV0FDQyxJQXRCTixNQUNJLENBWU0sQ0FVRSxRQXJCRyxPQVlQLEdBVUcsV0FyQlAsQUFZUSxNQVVLLElBckJWLFFBWUgsS0FYRyxLQVlLLENBU3BCLGlCQVJhLFdBQ2Isd0NBYndCLDhFQUNHLGlHQUNkLFdBQ2IiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9mbG9hdGluZy1ub3Rlcy9mbG9hdGluZy1ub3Rlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9mbG9hdGluZy1ub3Rlcy5zY3NzJztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcblxuY29uc3QgRmxvYXRpbmdOb3RlcyA9ICgpID0+IHtcblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdGluZ19tYWluX2NvbnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmdfbm90ZV9jb250XCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9yYW5kb20vcjEuanBnXCIgYWx0PVwiXCIvPlxuICAgICAgICA8YSBocmVmPVwiI1wiPnN0YXIgZ3JlZW48L2E+XG4gICAgICAgIDxwPkxlIGd1c3RhIHR1IHBvc3Q8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuZmxvYXRpbmdfbWFpbl9jb250e1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogLTMwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB6LWluZGV4OiA1MDtcbiAgICAgIH1cbiAgICAgIC5mbG9hdGluZ19ub3RlX2NvbnR7XG4gICAgICAgIHdpZHRoOiA1MCVcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLjVyZW07XG4gICAgICAgIHotaW5kZXg6IDUwO1xuICAgICAgfVxuICAgICAgaW1ne1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxvYXRpbmdOb3RlcztcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/floating-notes/floating-notes.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FloatingNotes);

/***/ })

})
//# sourceMappingURL=perfil.js.824bec3c0f87ad4ad762.hot-update.js.map
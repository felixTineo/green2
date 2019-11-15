webpackHotUpdate("static/development/pages/perfil.js",{

/***/ "./components/layout/layout.jsx":
/*!**************************************!*\
  !*** ./components/layout/layout.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./components/layout/header.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _layout_base_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layout/base.scss */ "./layout/base.scss");
/* harmony import */ var _layout_base_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_layout_base_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _postregister_postregister__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../postregister/postregister */ "./components/postregister/postregister.jsx");
/* harmony import */ var _store_store_cont__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/store-cont */ "./components/store/store-cont.jsx");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/store */ "./components/store/store.jsx");
/* harmony import */ var _floating_notes_floating_notes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../floating-notes/floating-notes */ "./components/floating-notes/floating-notes.jsx");
/* harmony import */ var _vault_vault__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../vault/vault */ "./components/vault/vault.jsx");
/* harmony import */ var _dialogs_confirm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dialogs/confirm */ "./components/dialogs/confirm.jsx");
/* harmony import */ var _chat_private__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../chat/private */ "./components/chat/private.jsx");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













var Layout = function Layout(_ref) {
  var children = _ref.children;
  return __jsx("div", {
    style: {
      position: 'relative'
    },
    className: "jsx-3133056425" + " " + "lauout_main_cont"
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx("link", {
    rel: "stylesheet",
    href: "/static/animate.min.css",
    className: "jsx-3133056425"
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Sansita|Open+Sans|Pacifico&display=swap",
    rel: "stylesheet",
    className: "jsx-3133056425"
  })), __jsx(_header__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_postregister_postregister__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx(_store_store_cont__WEBPACK_IMPORTED_MODULE_8__["default"], null, __jsx(_store_store__WEBPACK_IMPORTED_MODULE_9__["default"], null)), __jsx(_floating_notes_floating_notes__WEBPACK_IMPORTED_MODULE_10__["default"], null), __jsx(_vault_vault__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx(_dialogs_confirm__WEBPACK_IMPORTED_MODULE_12__["default"], null), children, __jsx("footer", {
    className: "jsx-3133056425" + " " + "col-10 p-0"
  }, __jsx(_chat_private__WEBPACK_IMPORTED_MODULE_13__["default"], null)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3133056425"
  }, "footer.jsx-3133056425{position:fixed;width:100%;bottom:-28px;background:#8bb940;height:28px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JrQixBQUcwQixlQUNKLFdBQ0UsYUFDTSxtQkFDUCxZQUNkIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICcuLi8uLi9sYXlvdXQvYmFzZS5zY3NzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBQb3N0UmVnaXN0ZXIgZnJvbSAnLi4vcG9zdHJlZ2lzdGVyL3Bvc3RyZWdpc3Rlcic7XG5pbXBvcnQgU3RvcmVDb250IGZyb20gJy4uL3N0b3JlL3N0b3JlLWNvbnQnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4uL3N0b3JlL3N0b3JlJztcbmltcG9ydCBGbG9hdGluZ05vdGVzIGZyb20gJy4uL2Zsb2F0aW5nLW5vdGVzL2Zsb2F0aW5nLW5vdGVzJztcbmltcG9ydCBWYXVsdCBmcm9tICcuLi92YXVsdC92YXVsdCc7XG5pbXBvcnQgQ29uZmlybSBmcm9tICcuLi9kaWFsb2dzL2NvbmZpcm0nO1xuaW1wb3J0IFByaXZhdGUgZnJvbSAnLi4vY2hhdC9wcml2YXRlJ1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF1b3V0X21haW5fY29udFwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9hbmltYXRlLm1pbi5jc3NcIi8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U2Fuc2l0YXxPcGVuK1NhbnN8UGFjaWZpY28mZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxQb3N0UmVnaXN0ZXIgLz5cbiAgICAgIDxTdG9yZUNvbnQ+PFN0b3JlIC8+PC9TdG9yZUNvbnQ+XG4gICAgICA8RmxvYXRpbmdOb3RlcyAvPlxuICAgICAgPFZhdWx0IC8+XG4gICAgICA8Q29uZmlybSAvPlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJjb2wtMTAgcC0wXCI+XG4gICAgICAgIDxQcml2YXRlIC8+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZm9vdGVye1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3R0b206IC0yOHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM4YmI5NDA7XG4gICAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/layout/layout.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=perfil.js.a83a99d0f557e79852cb.hot-update.js.map
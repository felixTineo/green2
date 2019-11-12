webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/main/menu.jsx":
/*!**********************************!*\
  !*** ./components/main/menu.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var _layout_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layout/main */ "./layout/main.js");
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/main/menu.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Menu = function Menu() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var visible = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.main.nav.visible;
  });
  return __jsx("nav", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["664601504", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["664601504", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["664601504", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Menu"), __jsx("button", {
    title: "Cerrar",
    onClick: function onClick() {
      return dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_MAIN_NAV"]
      });
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["664601504", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "X")), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["664601504", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["664601504", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["664601504", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "option")), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["664601504", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["664601504", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "option")), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["664601504", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["664601504", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "option")), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["664601504", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["664601504", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "option")), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["664601504", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["664601504", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "option"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "664601504",
    dynamic: [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0'],
    __self: this
  }, "nav.__jsx-style-dynamic-selector{background:".concat(_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, ";color:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, ";width:").concat(visible ? '30%' : '0', ";height:100vh;-webkit-transition:500ms ease;transition:500ms ease;overflow:hidden;position:relative;z-index:160;-webkit-flex:2 0 1;-ms-flex:2 0 1;flex:2 0 1;position:-webkit-sticky;position:sticky;top:0;}header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, ";padding:1rem;}header.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;margin-left:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}button.__jsx-style-dynamic-selector{background:transparent;border:none;color:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, ";}button.__jsx-style-dynamic-selector:focus{outline:none;}header.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{font-size:1.5rem;text-align:right;}ul.__jsx-style-dynamic-selector{width:100%;list-style:none;margin:0;padding:0;border-bottom:1px solid #E6EAEA;}li.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{width:100%;border-top:1px solid #E6EAEA;height:70px;text-align:left;font-size:1.4rem;padding-left:2rem;-webkit-transition:250ms ease;transition:250ms ease;}li.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{background:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, ";}@media(max-width:576px){nav.__jsx-style-dynamic-selector{width:").concat(visible ? '100%' : '0', ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9tZW51LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQmtCLEFBR21ELEFBZTNCLEFBT0osQUFLYyxBQUtWLEFBR0ksQUFJTixBQU9BLEFBUzZCLEFBSUgsU0FwQ3BCLEVBaUJELEFBT2EsRUFkL0IsSUFHbUIsTUFSTCxHQUpLLENBaUJSLE9BSlgsQ0FScUMsQUErQm5DLENBbEJVLElBekN5QixBQStDdkIsQUFRZCxNQWJrQyxNQU1oQixnQkFDQyxFQXBCbkIsSUFkZ0MsQ0FkSyxHQTBDckMsT0FPb0Isa0JBQ0ksT0FqRFQsQ0FzQmYsWUFyQndCLGdDQWlEeEIsb0JBaERrQixjQVlHLEVBWEQsa0JBQ04sWUFDRCw2Q0FDSyxnQkFTeUIsd0JBUm5DLE1BR1IsV0FNZSxhQUNmIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9tZW51LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBPTl9NQUlOX05BViB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnQgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5cbmNvbnN0IE1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgdmlzaWJsZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm1haW4ubmF2LnZpc2libGUpO1xuICByZXR1cm4oXG4gICAgPG5hdj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxwPk1lbnU8L3A+XG4gICAgICAgIDxidXR0b24gdGl0bGU9XCJDZXJyYXJcIiBvbkNsaWNrPXsoKT0+IGRpc3BhdGNoKHsgdHlwZTogT05fTUFJTl9OQVYgfSl9Plg8L2J1dHRvbj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGJ1dHRvbj5vcHRpb248L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxidXR0b24+b3B0aW9uPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YnV0dG9uPm9wdGlvbjwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGJ1dHRvbj5vcHRpb248L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxidXR0b24+b3B0aW9uPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBuYXZ7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvci5ncmF5fTtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvci5kYXJrfTtcbiAgICAgICAgICB3aWR0aDogJHt2aXNpYmxlID8gJzMwJScgOiAnMCd9O1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogNTAwbXMgZWFzZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAxNjA7XG4gICAgICAgICAgZmxleDogMiAwIDE7XG4gICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgLy90b3A6IDA7XG4gICAgICAgICAgLy9yaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmb250LWZhbWlseTogJHtmb250LnRpdGxlfTtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b257XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yLmRhcmt9O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciBidXR0b257XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgdWx7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U2RUFFQTtcbiAgICAgICAgfVxuICAgICAgICBsaSBidXR0b257XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFNkVBRUE7XG4gICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGkgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3IubGlnaHR9O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDU3NnB4KXtcbiAgICAgICAgICBuYXZ7XG4gICAgICAgICAgICB3aWR0aDogJHt2aXNpYmxlID8gJzEwMCUnIDogJzAnfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvbmF2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/menu.jsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=index.js.5ad35e399cc99d6a2757.hot-update.js.map
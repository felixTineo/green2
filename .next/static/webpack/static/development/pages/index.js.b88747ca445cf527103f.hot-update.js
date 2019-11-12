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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1768138636", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1768138636", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1768138636", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1768138636", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "X")), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1768138636", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1768138636", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1768138636", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "option")), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1768138636", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1768138636", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "option")), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1768138636", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1768138636", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "option")), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1768138636", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1768138636", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "option")), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1768138636", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1768138636", [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "option"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1768138636",
    dynamic: [_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, visible ? '30%' : '0', _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, visible ? '100%' : '0'],
    __self: this
  }, "nav.__jsx-style-dynamic-selector{background:".concat(_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].gray, ";color:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, ";width:").concat(visible ? '30%' : '0', ";height:100vh;-webkit-transition:500ms ease;transition:500ms ease;overflow:hidden;position:relative;z-index:160;-webkit-flex:2 0 1;-ms-flex:2 0 1;flex:2 0 1;position:fixed;top:0;right:0;}header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, ";padding:1rem;}header.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;margin-left:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}button.__jsx-style-dynamic-selector{background:transparent;border:none;color:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].dark, ";}button.__jsx-style-dynamic-selector:focus{outline:none;}header.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{font-size:1.5rem;text-align:right;}ul.__jsx-style-dynamic-selector{width:100%;list-style:none;margin:0;padding:0;border-bottom:1px solid #E6EAEA;}li.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{width:100%;border-top:1px solid #E6EAEA;height:70px;text-align:left;font-size:1.4rem;padding-left:2rem;-webkit-transition:250ms ease;transition:250ms ease;}li.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{background:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, ";}@media(max-width:576px){nav.__jsx-style-dynamic-selector{width:").concat(visible ? '100%' : '0', ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9tZW51LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQmtCLEFBR21ELEFBYzNCLEFBT0osQUFLYyxBQUtWLEFBR0ksQUFJTixBQU9BLEFBUzZCLEFBSUgsU0FwQ3BCLEVBaUJELEFBT2EsRUFkL0IsSUFHbUIsTUFSTCxHQUpLLENBaUJSLE9BSlgsQ0FScUMsQUErQm5DLENBbEJVLElBeEN5QixBQThDdkIsQUFRZCxNQWJrQyxNQU1oQixnQkFDQyxFQXBCbkIsSUFkZ0MsQ0FiSyxHQXlDckMsT0FPb0Isa0JBQ0ksT0FoRFQsQ0FxQmYsWUFwQndCLGdDQWdEeEIsb0JBL0NrQixjQVdHLEVBVkQsa0JBQ04sWUFDRCw2Q0FDSSxlQUNULENBT21DLEtBTmpDLFFBQ1YsNEJBTWUsYUFDZiIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL21haW4vbWVudS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgT05fTUFJTl9OQVYgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCB7IGNvbG9yLCBmb250IH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuXG5jb25zdCBNZW51ID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHZpc2libGUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5tYWluLm5hdi52aXNpYmxlKTtcbiAgcmV0dXJuKFxuICAgIDxuYXY+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8cD5NZW51PC9wPlxuICAgICAgICA8YnV0dG9uIHRpdGxlPVwiQ2VycmFyXCIgb25DbGljaz17KCk9PiBkaXNwYXRjaCh7IHR5cGU6IE9OX01BSU5fTkFWIH0pfT5YPC9idXR0b24+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxidXR0b24+b3B0aW9uPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YnV0dG9uPm9wdGlvbjwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGJ1dHRvbj5vcHRpb248L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxidXR0b24+b3B0aW9uPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YnV0dG9uPm9wdGlvbjwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbmF2e1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3IuZ3JheX07XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3IuZGFya307XG4gICAgICAgICAgd2lkdGg6ICR7dmlzaWJsZSA/ICczMCUnIDogJzAnfTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHRyYW5zaXRpb246IDUwMG1zIGVhc2U7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgei1pbmRleDogMTYwO1xuICAgICAgICAgIGZsZXg6IDIgMCAxO1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICR7Zm9udC50aXRsZX07XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgcHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvci5kYXJrfTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgYnV0dG9ue1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHVse1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFNkVBRUE7XG4gICAgICAgIH1cbiAgICAgICAgbGkgYnV0dG9ue1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTZFQUVBO1xuICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICB9XG4gICAgICAgIGxpIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9yLmxpZ2h0fTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA1NzZweCl7XG4gICAgICAgICAgbmF2e1xuICAgICAgICAgICAgd2lkdGg6ICR7dmlzaWJsZSA/ICcxMDAlJyA6ICcwJ307XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L25hdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudTtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/menu.jsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=index.js.b88747ca445cf527103f.hot-update.js.map
webpackHotUpdate("static/development/pages/lab.js",{

/***/ "./pages/lab.jsx":
/*!***********************!*\
  !*** ./pages/lab.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions */ "./store/actions.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _layout_var__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/var */ "./layout/var.js");
/* harmony import */ var _node_modules_bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../node_modules/bootstrap/scss/bootstrap.scss */ "./node_modules/bootstrap/scss/bootstrap.scss");
/* harmony import */ var _node_modules_bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/pages/lab.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Creator = function Creator() {
  var visible = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.greenpost.creator;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('/static/random/r16.jpg'),
      image = _useState[0],
      setImage = _useState[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    style: {
      minWidth: '80%'
    },
    isOpen: visible,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2968892488", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]) + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2968892488", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]) + " " + "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2968892488", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "hi")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2968892488", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]) + " " + "history",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2968892488", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2968892488", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Historia"), __jsx("small", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2968892488", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "cuentanos tu histor\xEDa!")), __jsx("form", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2968892488", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("textarea", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2968892488", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2968892488", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Crear"))), __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_GREEN_CREATOR"]
      });
    },
    title: "Cancelar",
    type: "button",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2968892488", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]) + " " + "btn_close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "X")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2968892488",
    dynamic: [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light],
    __self: this
  }, ".main.__jsx-style-dynamic-selector{height:60vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;}.img.__jsx-style-dynamic-selector{width:60%;background-image:url(".concat(image, ");background-size:cover;background-position:center;background-repeat:no-repeat;}.history.__jsx-style-dynamic-selector{width:40%;height:100%;padding:1rem .5rem 0;color:").concat(_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}h1.__jsx-style-dynamic-selector{margin:0;line-height:1.5rem;}small.__jsx-style-dynamic-selector{color:").concat(_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, ";}form.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:1px solid red;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}form.__jsx-style-dynamic-selector textarea.__jsx-style-dynamic-selector{resize:none;height:50%;}.btn_close.__jsx-style-dynamic-selector{position:absolute;top:.2rem;right:.2rem;background:transparent;border:none;-webkit-transition:250ms ease;transition:250ms ease;border:1px solid ").concat(_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, ";border-radius:50%;width:30px;height:30px;}.btn_close.__jsx-style-dynamic-selector:focus{outline:none;}.btn_close.__jsx-style-dynamic-selector:hover{color:").concat(_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, ";background:").concat(_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, ";border-color:").concat(_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL3BhZ2VzL2xhYi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJrQixBQUd1QixBQUtGLEFBT0EsQUFRRCxBQUkwQixBQUd2QixBQU9BLEFBT00sQUFZTCxBQUdzQixTQW5DaEIsQ0FmZ0MsQUFPdkMsRUFaQyxBQWtDRixDQW1CYixLQVpZLElBNUJXLENBc0J2QixLQWRBLEFBcUJjLE9BbEJkLEFBZ0MwQyxLQWJqQixHQTdCWSxrQkFSYixFQXNDVixRQWpCQyxJQWtCUyxBQVlvQixHQTFDN0IsS0FSYyxHQU5ULGtCQUNwQixNQU04QixPQWtEOUIsVUFaZ0QsV0FyQ2hELE9BbUJ3QixPQVpBLHFCQStCSixrQkFDUCxXQUNDLFlBQ2QsU0FyQnVCLE9BWnZCLGNBYXlCLG1HQUN6QiIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9wYWdlcy9sYWIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgT05fR1JFRU5fQ1JFQVRPUiB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IGNvbG9yIH0gZnJvbSAnLi4vbGF5b3V0L3Zhcic7XG5pbXBvcnQgJy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9ib290c3RyYXAuc2Nzcyc7XG5cbmNvbnN0IENyZWF0b3IgPSAoKSA9PiB7XG4gIGNvbnN0IHZpc2libGUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5ncmVlbnBvc3QuY3JlYXRvcik7XG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoJy9zdGF0aWMvcmFuZG9tL3IxNi5qcGcnKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICByZXR1cm4oXG4gICAgPE1vZGFsIHN0eWxlPXt7IG1pbldpZHRoOiAnODAlJyB9fSBpc09wZW49e3Zpc2libGV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XG4gICAgICAgICAgPGgxPmhpPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlzdG9yeVwiPlxuICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8aDE+SGlzdG9yaWE8L2gxPlxuICAgICAgICAgICAgPHNtYWxsPmN1ZW50YW5vcyB0dSBoaXN0b3LDrWEhPC9zbWFsbD5cbiAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q3JlYXI8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5kaXNwYXRjaCh7IHR5cGU6IE9OX0dSRUVOX0NSRUFUT1IgfSl9IHRpdGxlPVwiQ2FuY2VsYXJcIiBjbGFzc05hbWU9XCJidG5fY2xvc2VcIiB0eXBlPVwiYnV0dG9uXCI+WDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIGhlaWdodDogNjB2aDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAuaW1ne1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7aW1hZ2V9KTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICB9XG4gICAgICAgIC5oaXN0b3J5e1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW0gLjVyZW0gMDtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvci5wcmltfTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgaDF7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgc21hbGx7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3IuZGFya307XG4gICAgICAgIH1cbiAgICAgICAgZm9ybXtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBmb3JtIHRleHRhcmVhe1xuICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICBmb3JtIGJ1dHRvbntcblxuICAgICAgICB9XG4gICAgICAgIC5idG5fY2xvc2V7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogLjJyZW07XG4gICAgICAgICAgcmlnaHQ6IC4ycmVtO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3IuZGFya307XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgfVxuICAgICAgICAuYnRuX2Nsb3NlOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmJ0bl9jbG9zZTpob3ZlcntcbiAgICAgICAgICBjb2xvcjogJHtjb2xvci5saWdodH07XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvci5wcmltfTtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7Y29sb3IubGlnaHR9O1xuICAgICAgICB9XG5cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTW9kYWw+XG4gIClcbn07XG5cbmNvbnN0IExhYiA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICByZXR1cm4oXG4gICAgPD5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBkaXNwYXRjaCh7IHR5cGU6IE9OX0dSRUVOX0NSRUFUT1IgfSl9Pm9wZW48L2J1dHRvbj5cbiAgICAgIDxDcmVhdG9yIC8+XG4gICAgPC8+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhYjtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/pages/lab.jsx */")));
};

var Lab = function Lab() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_GREEN_CREATOR"]
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "open"), __jsx(Creator, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Lab);

/***/ })

})
//# sourceMappingURL=lab.js.6526a154847bac999f7f.hot-update.js.map
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3645611693", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]) + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3645611693", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]) + " " + "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3645611693", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "hi")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3645611693", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]) + " " + "history",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("form", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3645611693", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("input", {
    placeholder: "Titulo",
    type: "text",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3645611693", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]) + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Sub-titulo opcional",
    type: "text",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3645611693", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]) + " " + "sub-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("textarea", {
    placeholder: "Cuentanos tu historia",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3645611693", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3645611693", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3645611693", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]) + " " + "btn_close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "X")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3645611693",
    dynamic: [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light],
    __self: this
  }, ".main.__jsx-style-dynamic-selector{height:60vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;}.img.__jsx-style-dynamic-selector{width:60%;background-image:url(".concat(image, ");background-size:cover;background-position:center;background-repeat:no-repeat;}.history.__jsx-style-dynamic-selector{width:40%;height:100%;padding:1rem .5rem 0;color:").concat(_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;}form.__jsx-style-dynamic-selector{color:").concat(_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, ";-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;margin-top:1.5rem;}input.__jsx-style-dynamic-selector{width:100%;padding:0;line-height:0;border:none;}input.__jsx-style-dynamic-selector:focus{outline:none;}.title.__jsx-style-dynamic-selector{font-size:2rem;}.sub-title.__jsx-style-dynamic-selector{font-size:1.2rem;}textarea.__jsx-style-dynamic-selector{margin-top:1rem;resize:none;width:100%;border:none;font-size:.8rem;height:60%;}form.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{position:absolute;bottom:.5rem;right:.5rem;}.btn_close.__jsx-style-dynamic-selector{position:absolute;top:.5rem;right:.5rem;background:transparent;border:none;-webkit-transition:250ms ease;transition:250ms ease;border:1px solid ").concat(_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, ";border-radius:50%;width:30px;height:30px;}.btn_close.__jsx-style-dynamic-selector:focus{outline:none;}.btn_close.__jsx-style-dynamic-selector:hover{color:").concat(_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, ";background:").concat(_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, ";border-color:").concat(_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL3BhZ2VzL2xhYi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJrQixBQUd1QixBQUtGLEFBT0EsQUFTeUIsQUFLeEIsQUFNRSxBQUdFLEFBR0UsQUFHRCxBQVFFLEFBS0EsQUFZTCxBQUdzQixVQS9EZ0IsQUFPdkMsQ0FjRixDQTFCRyxDQWdDZixBQWtDQSxFQS9CQSxDQU1jLENBSGQsQ0FXZSxBQUtILEdBM0JJLENBZE8sTUE2QlYsQUFhQyxHQUxBLElBN0JBLEFBT0EsQUF5QzRCLElBMUI1QixDQWFXLEdBMUNZLEFBcUNyQyxJQXRCQSxJQWVrQixVQXRDTSxFQW1EVixJQVpELFFBYVcsQUFZb0IsR0F2RDdCLEFBK0JmLEtBdkM2QixHQU5ULGtCQUNwQixFQW9Cb0IsSUFkVSxPQStEOUIsT0FoREEsR0FvQ2dELFdBbERoRCxjQU93QixxQkE0Q0osa0JBQ1AsV0FDQyxZQUNkLGdCQTlDb0Isa0JBQ3BCIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL3BhZ2VzL2xhYi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBPTl9HUkVFTl9DUkVBVE9SIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuLi9sYXlvdXQvdmFyJztcbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Jvb3RzdHJhcC5zY3NzJztcblxuY29uc3QgQ3JlYXRvciA9ICgpID0+IHtcbiAgY29uc3QgdmlzaWJsZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmdyZWVucG9zdC5jcmVhdG9yKTtcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSgnL3N0YXRpYy9yYW5kb20vcjE2LmpwZycpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIHJldHVybihcbiAgICA8TW9kYWwgc3R5bGU9e3sgbWluV2lkdGg6ICc4MCUnIH19IGlzT3Blbj17dmlzaWJsZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cbiAgICAgICAgICA8aDE+aGk8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaXN0b3J5XCI+XG4gICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJUaXR1bG9cIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInRpdGxlXCIvPlxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiU3ViLXRpdHVsbyBvcGNpb25hbFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwic3ViLXRpdGxlXCIvPlxuICAgICAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiQ3VlbnRhbm9zIHR1IGhpc3RvcmlhXCIgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNyZWFyPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+ZGlzcGF0Y2goeyB0eXBlOiBPTl9HUkVFTl9DUkVBVE9SIH0pfSB0aXRsZT1cIkNhbmNlbGFyXCIgY2xhc3NOYW1lPVwiYnRuX2Nsb3NlXCIgdHlwZT1cImJ1dHRvblwiPlg8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFpbntcbiAgICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLmltZ3tcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2ltYWdlfSk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgfVxuICAgICAgICAuaGlzdG9yeXtcbiAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIC41cmVtIDA7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3IucHJpbX07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBmb3Jte1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yLmRhcmt9O1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXR7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQ6Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zdWItdGl0bGV7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIH1cbiAgICAgICAgdGV4dGFyZWF7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgICAgaGVpZ2h0OiA2MCU7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybSBidXR0b257XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogLjVyZW07XG4gICAgICAgICAgcmlnaHQ6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5idG5fY2xvc2V7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogLjVyZW07XG4gICAgICAgICAgcmlnaHQ6IC41cmVtO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3IuZGFya307XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgfVxuICAgICAgICAuYnRuX2Nsb3NlOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmJ0bl9jbG9zZTpob3ZlcntcbiAgICAgICAgICBjb2xvcjogJHtjb2xvci5saWdodH07XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvci5wcmltfTtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7Y29sb3IubGlnaHR9O1xuICAgICAgICB9XG5cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTW9kYWw+XG4gIClcbn07XG5cbmNvbnN0IExhYiA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICByZXR1cm4oXG4gICAgPD5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBkaXNwYXRjaCh7IHR5cGU6IE9OX0dSRUVOX0NSRUFUT1IgfSl9Pm9wZW48L2J1dHRvbj5cbiAgICAgIDxDcmVhdG9yIC8+XG4gICAgPC8+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhYjtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/pages/lab.jsx */")));
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
      lineNumber: 114
    },
    __self: this
  }, "open"), __jsx(Creator, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Lab);

/***/ })

})
//# sourceMappingURL=lab.js.9163a5328bf210b31afd.hot-update.js.map
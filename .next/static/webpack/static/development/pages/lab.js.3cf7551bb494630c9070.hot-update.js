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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2236817168", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]) + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2236817168", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]) + " " + "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2236817168", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "hi")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2236817168", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]) + " " + "history",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("form", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2236817168", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("input", {
    placeholder: "Titulo",
    type: "text",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2236817168", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]) + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Sub-titulo opcional",
    type: "text",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2236817168", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]) + " " + "sub-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("textarea", {
    placeholder: "Cuentanos tu historia!",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2236817168", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2236817168", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2236817168", [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]) + " " + "btn_close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "X")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2236817168",
    dynamic: [image, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light],
    __self: this
  }, ".main.__jsx-style-dynamic-selector{height:60vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;}.img.__jsx-style-dynamic-selector{width:60%;background-image:url(".concat(image, ");background-size:cover;background-position:center;background-repeat:no-repeat;}.history.__jsx-style-dynamic-selector{width:40%;height:100%;padding:1rem .5rem 0;color:").concat(_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;}form.__jsx-style-dynamic-selector{color:").concat(_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, ";-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;margin-top:1.5rem;}input.__jsx-style-dynamic-selector{width:100%;padding:0;line-height:0;border:none;}input.__jsx-style-dynamic-selector:focus{outline:none;}.title.__jsx-style-dynamic-selector{font-size:2rem;}.sub-title.__jsx-style-dynamic-selector{font-size:1.2rem;}textarea.__jsx-style-dynamic-selector{margin-top:1rem;resize:none;width:100%;border:none;font-size:.8rem;height:70%;}textarea.__jsx-style-dynamic-selector:focus{outline:none;}form.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{position:absolute;bottom:.5rem;right:.5rem;-webkit-transition:250ms ease;transition:250ms ease;background:transparent;border:1px solid ").concat(_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, ";}from.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:focus{outline:none;}form.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{background:").concat(_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, ";color:").concat(_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, ";}.btn_close.__jsx-style-dynamic-selector{position:absolute;top:.5rem;right:.5rem;background:transparent;border:none;-webkit-transition:250ms ease;transition:250ms ease;border:1px solid ").concat(_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, ";border-radius:50%;width:30px;height:30px;}.btn_close.__jsx-style-dynamic-selector:focus{outline:none;}.btn_close.__jsx-style-dynamic-selector:hover{color:").concat(_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, ";background:").concat(_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, ";border-color:").concat(_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL3BhZ2VzL2xhYi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJrQixBQUd1QixBQUtGLEFBT0EsQUFTeUIsQUFLeEIsQUFNRSxBQUdFLEFBR0UsQUFHRCxBQVFKLEFBR00sQUFRTCxBQUcyQixBQUl0QixBQVlMLEFBR3NCLFVBNUVnQixBQU92QyxDQWNGLENBMUJHLENBZ0NmLEFBaUJBLEFBV0EsQUFtQkEsRUE1Q0EsQ0FNYyxDQUhkLENBY2UsQUFlSCxHQXhDSSxDQWRPLE1BNkJWLEFBMEJDLEdBZkEsSUFoQ0EsQUFPQSxBQXNENEIsSUF2QzVCLENBcUJmLEFBSzBCLEdBdkRZLEFBd0NiLElBekJ4QixJQWVrQixVQXRDTSxFQWdFVixJQXpCRCxRQW1CYixBQU93QixBQVlvQixHQXBFN0IsQUErQmYsS0F2QzZCLEdBTlQsU0FzREssU0FyRHpCLEVBb0JvQixJQWRVLE9BNEU5QixDQTVCZ0QsTUFqQ2hELEdBaURnRCxXQS9EaEQsY0FPd0IsWUF5Q3hCLFNBZ0JvQixrQkFDUCxXQUNDLFlBQ2QsZ0JBM0RvQixrQkFDcEIiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvcGFnZXMvbGFiLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IE9OX0dSRUVOX0NSRUFUT1IgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBjb2xvciB9IGZyb20gJy4uL2xheW91dC92YXInO1xuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvYm9vdHN0cmFwLnNjc3MnO1xuXG5jb25zdCBDcmVhdG9yID0gKCkgPT4ge1xuICBjb25zdCB2aXNpYmxlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuZ3JlZW5wb3N0LmNyZWF0b3IpO1xuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKCcvc3RhdGljL3JhbmRvbS9yMTYuanBnJyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgcmV0dXJuKFxuICAgIDxNb2RhbCBzdHlsZT17eyBtaW5XaWR0aDogJzgwJScgfX0gaXNPcGVuPXt2aXNpYmxlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiPlxuICAgICAgICAgIDxoMT5oaTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpc3RvcnlcIj5cbiAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlRpdHVsb1wiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidGl0bGVcIi8+XG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJTdWItdGl0dWxvIG9wY2lvbmFsXCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIi8+XG4gICAgICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJDdWVudGFub3MgdHUgaGlzdG9yaWEhXCIgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNyZWFyPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+ZGlzcGF0Y2goeyB0eXBlOiBPTl9HUkVFTl9DUkVBVE9SIH0pfSB0aXRsZT1cIkNhbmNlbGFyXCIgY2xhc3NOYW1lPVwiYnRuX2Nsb3NlXCIgdHlwZT1cImJ1dHRvblwiPlg8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFpbntcbiAgICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLmltZ3tcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2ltYWdlfSk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgfVxuICAgICAgICAuaGlzdG9yeXtcbiAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIC41cmVtIDA7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3IucHJpbX07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBmb3Jte1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yLmRhcmt9O1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXR7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQ6Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zdWItdGl0bGV7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIH1cbiAgICAgICAgdGV4dGFyZWF7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgIH1cbiAgICAgICAgdGV4dGFyZWE6Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTpub25lO1xuICAgICAgICB9XG4gICAgICAgIGZvcm0gYnV0dG9ue1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IC41cmVtO1xuICAgICAgICAgIHJpZ2h0OiAuNXJlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3IucHJpbX07XG4gICAgICAgIH1cbiAgICAgICAgZnJvbSBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBmb3JtIGJ1dHRvbntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9yLnByaW19O1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yLmxpZ2h0fVxuICAgICAgICB9XG4gICAgICAgIC5idG5fY2xvc2V7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogLjVyZW07XG4gICAgICAgICAgcmlnaHQ6IC41cmVtO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3IuZGFya307XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgfVxuICAgICAgICAuYnRuX2Nsb3NlOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmJ0bl9jbG9zZTpob3ZlcntcbiAgICAgICAgICBjb2xvcjogJHtjb2xvci5saWdodH07XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvci5wcmltfTtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7Y29sb3IubGlnaHR9O1xuICAgICAgICB9XG5cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTW9kYWw+XG4gIClcbn07XG5cbmNvbnN0IExhYiA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICByZXR1cm4oXG4gICAgPD5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBkaXNwYXRjaCh7IHR5cGU6IE9OX0dSRUVOX0NSRUFUT1IgfSl9Pm9wZW48L2J1dHRvbj5cbiAgICAgIDxDcmVhdG9yIC8+XG4gICAgPC8+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhYjtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/pages/lab.jsx */")));
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
      lineNumber: 127
    },
    __self: this
  }, "open"), __jsx(Creator, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Lab);

/***/ })

})
//# sourceMappingURL=lab.js.3cf7551bb494630c9070.hot-update.js.map
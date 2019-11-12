webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/main/greenpost.jsx":
/*!***************************************!*\
  !*** ./components/main/greenpost.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/main */ "./layout/main.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Title = function Title() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Array(50).fill("GREENPOST'S")),
      queque = _useState[0],
      setQueque = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to('#text', 5, {
      x: '100%'
    });
  }, []);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["140603937", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, console.log(queque.length), __jsx("ul", {
    id: "text",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["140603937", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, queque.map(function (word, i) {
    return __jsx("li", {
      key: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["140603937", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, word);
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "140603937",
    dynamic: [_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim],
    __self: this
  }, "div.__jsx-style-dynamic-selector{overflow:hidden;}ul.__jsx-style-dynamic-selector{margin:0;padding:1rem;color:".concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, ";display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:250ms ease;transition:250ms ease;border:1px solid black;}li.__jsx-style-dynamic-selector{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin:0 1rem;-webkit-transition:250ms ease;transition:250ms ease;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CbUIsQUFHNkIsQUFHVCxBQVNLLFNBUkQsT0FIYixNQUltQyxrQ0FRckIsQ0FQTSxhQVFFLG9EQUN4QixxQ0FScUIsNkZBQ0csb0RBQ0MsdUJBQ3pCIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb2xvciwgZm9udCB9IGZyb20gJy4uLy4uL2xheW91dC9tYWluJztcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQvdjEnO1xuaW1wb3J0IFR3ZWVuTWF4IGZyb20gJ2dzYXAnO1xuXG5jb25zdCBUaXRsZSA9ICgpID0+IHtcbiAgY29uc3QgW3F1ZXF1ZSwgc2V0UXVlcXVlXSA9IHVzZVN0YXRlKEFycmF5KDUwKS5maWxsKFwiR1JFRU5QT1NUJ1NcIikpO1xuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgVHdlZW5NYXgudG8oJyN0ZXh0JywgNSwgeyB4OiAnMTAwJScgfSk7XG4gIH0sW10pO1xuXG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAge2NvbnNvbGUubG9nKHF1ZXF1ZS5sZW5ndGgpfVxuICAgICAgPHVsIGlkPVwidGV4dFwiPlxuICAgICAgICB7XG4gICAgICAgICAgcXVlcXVlLm1hcCgod29yZCwgaSkgPT4gPGxpIGtleT17dXVpZCgpfT57d29yZH08L2xpPilcbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3ggPntgXG4gICAgICAgIGRpdntcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICB1bHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvci5wcmltfTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIH1cbiAgICAgICAgbGl7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwIDFyZW07XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8VGl0bGUgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2e1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx */")));
};

var Main = function Main() {
  return __jsx("div", {
    className: "jsx-1103894341",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1103894341",
    __self: this
  }, "div.jsx-1103894341{width:100vw;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDa0IsQUFHdUIsWUFDSSxnQkFDbEIiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL2dyZWVucG9zdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbG9yLCBmb250IH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92MSc7XG5pbXBvcnQgVHdlZW5NYXggZnJvbSAnZ3NhcCc7XG5cbmNvbnN0IFRpdGxlID0gKCkgPT4ge1xuICBjb25zdCBbcXVlcXVlLCBzZXRRdWVxdWVdID0gdXNlU3RhdGUoQXJyYXkoNTApLmZpbGwoXCJHUkVFTlBPU1QnU1wiKSk7XG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBUd2Vlbk1heC50bygnI3RleHQnLCA1LCB7IHg6ICcxMDAlJyB9KTtcbiAgfSxbXSk7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICB7Y29uc29sZS5sb2cocXVlcXVlLmxlbmd0aCl9XG4gICAgICA8dWwgaWQ9XCJ0ZXh0XCI+XG4gICAgICAgIHtcbiAgICAgICAgICBxdWVxdWUubWFwKCh3b3JkLCBpKSA9PiA8bGkga2V5PXt1dWlkKCl9Pnt3b3JkfTwvbGk+KVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgICAgPHN0eWxlIGpzeCA+e2BcbiAgICAgICAgZGl2e1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgIHVse1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yLnByaW19O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgfVxuICAgICAgICBsaXtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIDxUaXRsZSAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXZ7XG4gICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXX0= */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.075dbea67de152f3d2d3.hot-update.js.map
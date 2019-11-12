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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Array(20).fill("GREENPOST'S")),
      queque = _useState[0],
      setQueque = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    gsap__WEBPACK_IMPORTED_MODULE_4__["default"].set('.titleText', {
      x: function x(i) {
        return i * 150;
      }
    });
  });
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1861456714", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, console.log(queque.length), __jsx("ul", {
    id: "text",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1861456714", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, queque.map(function (word, i) {
    return __jsx("li", {
      key: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1861456714", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim]]]) + " " + "titleText",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, word);
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1861456714",
    dynamic: [_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim],
    __self: this
  }, "div.__jsx-style-dynamic-selector{overflow:hidden;}ul.__jsx-style-dynamic-selector{margin:0;padding:1rem;color:".concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, ";position:relative;}li.__jsx-style-dynamic-selector{margin:0 1rem;position:absolute;top:25%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCbUIsQUFHNkIsQUFHVCxBQVVLLFNBVEQsS0FXSyxFQWRsQixNQUltQyxVQVczQixRQUNWLGlCQVJvQixrQkFDcEIiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL2dyZWVucG9zdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbG9yLCBmb250IH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92MSc7XG5pbXBvcnQgVHdlZW5NYXggZnJvbSAnZ3NhcCc7XG5cbmNvbnN0IFRpdGxlID0gKCkgPT4ge1xuICBjb25zdCBbcXVlcXVlLCBzZXRRdWVxdWVdID0gdXNlU3RhdGUoQXJyYXkoMjApLmZpbGwoXCJHUkVFTlBPU1QnU1wiKSk7XG4gICAgdXNlRWZmZWN0KCgpPT4ge1xuICAgICAgVHdlZW5NYXguc2V0KCcudGl0bGVUZXh0JywgeyB4OiAoaSkgPT4gaSAqIDE1MCB9KTtcbiAgICB9KVxuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIHtjb25zb2xlLmxvZyhxdWVxdWUubGVuZ3RoKX1cbiAgICAgIDx1bCBpZD1cInRleHRcIj5cbiAgICAgICAge1xuICAgICAgICAgIHF1ZXF1ZS5tYXAoKHdvcmQsIGkpID0+IDxsaSBjbGFzc05hbWU9XCJ0aXRsZVRleHRcIiBrZXk9e3V1aWQoKX0+e3dvcmR9PC9saT4pXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4ID57YFxuICAgICAgICBkaXZ7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgdWx7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3IucHJpbX07XG4gICAgICAgICAgLy9kaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC8vYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAvL3RyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIGxpe1xuICAgICAgICAgIC8vZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwIDFyZW07XG4gICAgICAgICAgLy90cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDI1JTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8VGl0bGUgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2e1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx */")));
};

var Main = function Main() {
  return __jsx("div", {
    className: "jsx-1103894341",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1103894341",
    __self: this
  }, "div.jsx-1103894341{width:100vw;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEa0IsQUFHdUIsWUFDSSxnQkFDbEIiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL2dyZWVucG9zdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbG9yLCBmb250IH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92MSc7XG5pbXBvcnQgVHdlZW5NYXggZnJvbSAnZ3NhcCc7XG5cbmNvbnN0IFRpdGxlID0gKCkgPT4ge1xuICBjb25zdCBbcXVlcXVlLCBzZXRRdWVxdWVdID0gdXNlU3RhdGUoQXJyYXkoMjApLmZpbGwoXCJHUkVFTlBPU1QnU1wiKSk7XG4gICAgdXNlRWZmZWN0KCgpPT4ge1xuICAgICAgVHdlZW5NYXguc2V0KCcudGl0bGVUZXh0JywgeyB4OiAoaSkgPT4gaSAqIDE1MCB9KTtcbiAgICB9KVxuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIHtjb25zb2xlLmxvZyhxdWVxdWUubGVuZ3RoKX1cbiAgICAgIDx1bCBpZD1cInRleHRcIj5cbiAgICAgICAge1xuICAgICAgICAgIHF1ZXF1ZS5tYXAoKHdvcmQsIGkpID0+IDxsaSBjbGFzc05hbWU9XCJ0aXRsZVRleHRcIiBrZXk9e3V1aWQoKX0+e3dvcmR9PC9saT4pXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4ID57YFxuICAgICAgICBkaXZ7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgdWx7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3IucHJpbX07XG4gICAgICAgICAgLy9kaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC8vYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAvL3RyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIGxpe1xuICAgICAgICAgIC8vZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwIDFyZW07XG4gICAgICAgICAgLy90cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDI1JTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8VGl0bGUgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2e1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.cd9e26be50716129ec1d.hot-update.js.map
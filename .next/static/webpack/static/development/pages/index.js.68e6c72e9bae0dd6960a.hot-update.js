webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/main/title.jsx":
/*!***********************************!*\
  !*** ./components/main/title.jsx ***!
  \***********************************/
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
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/main/title.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Title = function Title(_ref) {
  var word = _ref.word;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Array(15).fill(word)),
      queque = _useState[0],
      setQueque = _useState[1];

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3166491664", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim]]]) + " " + "shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("ul", {
    id: "cartext",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3166491664", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, queque.map(function (word, i) {
    return __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3166491664", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim]]]) + " " + "cartext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, word);
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3166491664",
    dynamic: [_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim],
    __self: this
  }, "div.__jsx-style-dynamic-selector{background:#fff;}ul.__jsx-style-dynamic-selector{margin:0;padding:1rem;color:".concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:250ms ease;transition:250ms ease;-webkit-animation-name:myAni-__jsx-style-dynamic-selector;animation-name:myAni-__jsx-style-dynamic-selector;-webkit-animation-duration:15s;animation-duration:15s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-transform:translateX(-100px);-ms-transform:translateX(-100px);transform:translateX(-100px);}li.__jsx-style-dynamic-selector{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin:0 1rem;-webkit-transition:250ms ease;transition:250ms ease;text-transform:uppercase;}@-webkit-keyframes myAni-__jsx-style-dynamic-selector{0%{-webkit-transform:translateX(-100px);-ms-transform:translateX(-100px);transform:translateX(-100px);}50%{-webkit-transform:translateX(-3px);-ms-transform:translateX(-3px);transform:translateX(-3px);}100%{-webkit-transform:translateX(-100px);-ms-transform:translateX(-100px);transform:translateX(-100px);}}@keyframes myAni-__jsx-style-dynamic-selector{0%{-webkit-transform:translateX(-100px);-ms-transform:translateX(-100px);transform:translateX(-100px);}50%{-webkit-transform:translateX(-3px);-ms-transform:translateX(-3px);transform:translateX(-3px);}100%{-webkit-transform:translateX(-100px);-ms-transform:translateX(-100px);transform:translateX(-100px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi90aXRsZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYW1CLEFBRzJCLEFBSVAsQUFhSyxBQU9pQixBQUdGLEFBR0UsU0F6QmxCLE9BSGYsTUFJcUMsa0NBWXJCLENBWEQsYUFZUyx1QkFTdEIsTUFIQSxBQU1BLHVCQVh5QixTQVpOLGdCQWFyQiw2RUFad0Isb0RBQ0QsNEdBQ0Usc0RBQ2Usb0ZBQ0gsOEVBQ04sbUdBQy9CIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi90aXRsZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbG9yLCBmb250IH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92MSc7XG5cbmNvbnN0IFRpdGxlID0gKHsgd29yZCB9KSA9PiB7XG4gIGNvbnN0IFtxdWVxdWUsIHNldFF1ZXF1ZV0gPSB1c2VTdGF0ZShBcnJheSgxNSkuZmlsbCh3b3JkKSk7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvd1wiPlxuICAgICAgPHVsIGlkPVwiY2FydGV4dFwiPlxuICAgICAgICB7XG4gICAgICAgICAgcXVlcXVlLm1hcCgod29yZCwgaSkgPT4gPGxpIGNsYXNzTmFtZT1cImNhcnRleHRcIj57d29yZH08L2xpPilcbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3ggPntgXG4gICAgICAgIGRpdntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIC8vbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgfVxuICAgICAgICB1bHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvci5wcmltfTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogbXlBbmk7XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNXM7XG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XG4gICAgICAgIH1cbiAgICAgICAgbGl7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwIDFyZW07XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgbXlBbml7XG4gICAgICAgICAgMCV7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgNTAle1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMDAle1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaXRsZTtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/title.jsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ })

})
//# sourceMappingURL=index.js.68e6c72e9bae0dd6960a.hot-update.js.map
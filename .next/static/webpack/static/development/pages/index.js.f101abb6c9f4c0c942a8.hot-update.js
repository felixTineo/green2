webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/main/greenpost.jsx":
/*!***************************************!*\
  !*** ./components/main/greenpost.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layout/main */ "./layout/main.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Word = function Word(_ref) {
  var word = _ref.word,
      id = _ref.id;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    gsap__WEBPACK_IMPORTED_MODULE_5__["default"].to("#".concat(id), 2, {
      x: "50px"
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("li", {
    id: id,
    className: "jsx-843923463" + " " + "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, word), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "843923463",
    __self: this
  }, "li.jsx-843923463{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin:0 1rem;-webkit-transition:250ms ease;transition:250ms ease;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlrQixBQUd5Qix3REFDQSxjQUNRLG9EQUN4QiIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL21haW4vZ3JlZW5wb3N0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnQgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3YxJztcbmltcG9ydCBUd2Vlbk1heCBmcm9tICdnc2FwJztcblxuY29uc3QgV29yZCA9ICh7IHdvcmQsIGlkIH0pID0+IHtcbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIFR3ZWVuTWF4LnRvKGAjJHtpZH1gLCAyLCB7IHg6IFwiNTBweFwiIH0pO1xuICB9LFtdKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bGkgaWQ9e2lkfSBjbGFzc05hbWU9XCJcIj57d29yZH08L2xpPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBsaXtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCBUaXRsZSA9ICgpID0+IHtcbiAgY29uc3QgW3F1ZXF1ZSwgc2V0UXVlcXVlXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3Qgd29yZCA9IFwiR1JFRU5QT1NUJ1NcIjtcbiAgICAgIGlmKHF1ZXF1ZS5sZW5ndGggPD0xNSl7XG4gICAgICAgIHNldFF1ZXF1ZShbd29yZCwgLi4ucXVlcXVlXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdBcnIgPSBxdWVxdWU7XG4gICAgICAgIG5ld0Fyci5wb3AoKTtcbiAgICAgICAgc2V0UXVlcXVlKFt3b3JkLCAuLi5uZXdBcnJdKTtcbiAgICAgICAgY29uc29sZS5sb2cocXVlcXVlLmxlbmd0aCk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gICAgcmV0dXJuICgpPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sW3F1ZXF1ZV0pXG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAge2NvbnNvbGUubG9nKHF1ZXF1ZS5sZW5ndGgpfVxuICAgICAgPHVsIGlkPVwidGV4dFwiPlxuICAgICAgICB7XG4gICAgICAgICAgcXVlcXVlLm1hcCgod29yZCwgaSkgPT4gPFdvcmQgaWQ9e2BpdGVtLSR7aX1gfSB3b3JkPXt3b3JkfSBrZXk9e3V1aWQoKX0gLz4pXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4ID57YFxuICAgICAgICBkaXZ7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgdWx7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3IucHJpbX07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPFRpdGxlIC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdntcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx */"));
};

var Title = function Title() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      queque = _useState[0],
      setQueque = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var interval = setInterval(function () {
      var word = "GREENPOST'S";

      if (queque.length <= 15) {
        setQueque([word].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(queque)));
      } else {
        var newArr = queque;
        newArr.pop();
        setQueque([word].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(newArr)));
        console.log(queque.length);
      }
    }, 1000);
    return function () {
      return clearInterval(interval);
    };
  }, [queque]);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["648963260", [_layout_main__WEBPACK_IMPORTED_MODULE_3__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, console.log(queque.length), __jsx("ul", {
    id: "text",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["648963260", [_layout_main__WEBPACK_IMPORTED_MODULE_3__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, queque.map(function (word, i) {
    return __jsx(Word, {
      id: "item-".concat(i),
      word: word,
      key: uuid_v1__WEBPACK_IMPORTED_MODULE_4___default()(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "648963260",
    dynamic: [_layout_main__WEBPACK_IMPORTED_MODULE_3__["color"].prim],
    __self: this
  }, "div.__jsx-style-dynamic-selector{overflow:hidden;}ul.__jsx-style-dynamic-selector{margin:0;padding:1rem;color:".concat(_layout_main__WEBPACK_IMPORTED_MODULE_3__["color"].prim, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:250ms ease;transition:250ms ease;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEbUIsQUFHNkIsQUFHVCxTQUNJLE9BSGIsTUFJbUMsbUNBQ3RCLDBFQUNNLDZGQUNHLG9EQUN4QiIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL21haW4vZ3JlZW5wb3N0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnQgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3YxJztcbmltcG9ydCBUd2Vlbk1heCBmcm9tICdnc2FwJztcblxuY29uc3QgV29yZCA9ICh7IHdvcmQsIGlkIH0pID0+IHtcbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIFR3ZWVuTWF4LnRvKGAjJHtpZH1gLCAyLCB7IHg6IFwiNTBweFwiIH0pO1xuICB9LFtdKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bGkgaWQ9e2lkfSBjbGFzc05hbWU9XCJcIj57d29yZH08L2xpPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBsaXtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCBUaXRsZSA9ICgpID0+IHtcbiAgY29uc3QgW3F1ZXF1ZSwgc2V0UXVlcXVlXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3Qgd29yZCA9IFwiR1JFRU5QT1NUJ1NcIjtcbiAgICAgIGlmKHF1ZXF1ZS5sZW5ndGggPD0xNSl7XG4gICAgICAgIHNldFF1ZXF1ZShbd29yZCwgLi4ucXVlcXVlXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdBcnIgPSBxdWVxdWU7XG4gICAgICAgIG5ld0Fyci5wb3AoKTtcbiAgICAgICAgc2V0UXVlcXVlKFt3b3JkLCAuLi5uZXdBcnJdKTtcbiAgICAgICAgY29uc29sZS5sb2cocXVlcXVlLmxlbmd0aCk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gICAgcmV0dXJuICgpPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sW3F1ZXF1ZV0pXG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAge2NvbnNvbGUubG9nKHF1ZXF1ZS5sZW5ndGgpfVxuICAgICAgPHVsIGlkPVwidGV4dFwiPlxuICAgICAgICB7XG4gICAgICAgICAgcXVlcXVlLm1hcCgod29yZCwgaSkgPT4gPFdvcmQgaWQ9e2BpdGVtLSR7aX1gfSB3b3JkPXt3b3JkfSBrZXk9e3V1aWQoKX0gLz4pXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4ID57YFxuICAgICAgICBkaXZ7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgdWx7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3IucHJpbX07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPFRpdGxlIC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdntcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx */")));
};

var Main = function Main() {
  return __jsx("div", {
    className: "jsx-1103894341",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1103894341",
    __self: this
  }, "div.jsx-1103894341{width:100vw;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFa0IsQUFHdUIsWUFDSSxnQkFDbEIiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL2dyZWVucG9zdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbG9yLCBmb250IH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92MSc7XG5pbXBvcnQgVHdlZW5NYXggZnJvbSAnZ3NhcCc7XG5cbmNvbnN0IFdvcmQgPSAoeyB3b3JkLCBpZCB9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBUd2Vlbk1heC50byhgIyR7aWR9YCwgMiwgeyB4OiBcIjUwcHhcIiB9KTtcbiAgfSxbXSlcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGxpIGlkPXtpZH0gY2xhc3NOYW1lPVwiXCI+e3dvcmR9PC9saT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbGl7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwIDFyZW07XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuY29uc3QgVGl0bGUgPSAoKSA9PiB7XG4gIGNvbnN0IFtxdWVxdWUsIHNldFF1ZXF1ZV0gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IHdvcmQgPSBcIkdSRUVOUE9TVCdTXCI7XG4gICAgICBpZihxdWVxdWUubGVuZ3RoIDw9MTUpe1xuICAgICAgICBzZXRRdWVxdWUoW3dvcmQsIC4uLnF1ZXF1ZV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3QXJyID0gcXVlcXVlO1xuICAgICAgICBuZXdBcnIucG9wKCk7XG4gICAgICAgIHNldFF1ZXF1ZShbd29yZCwgLi4ubmV3QXJyXSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHF1ZXF1ZS5sZW5ndGgpO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICAgIHJldHVybiAoKT0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LFtxdWVxdWVdKVxuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIHtjb25zb2xlLmxvZyhxdWVxdWUubGVuZ3RoKX1cbiAgICAgIDx1bCBpZD1cInRleHRcIj5cbiAgICAgICAge1xuICAgICAgICAgIHF1ZXF1ZS5tYXAoKHdvcmQsIGkpID0+IDxXb3JkIGlkPXtgaXRlbS0ke2l9YH0gd29yZD17d29yZH0ga2V5PXt1dWlkKCl9IC8+KVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgICAgPHN0eWxlIGpzeCA+e2BcbiAgICAgICAgZGl2e1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgIHVse1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yLnByaW19O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIDxUaXRsZSAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXZ7XG4gICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXX0= */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.f101abb6c9f4c0c942a8.hot-update.js.map
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





var Word = function Word(_ref) {
  var word = _ref.word,
      id = _ref.id;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {//TweenMax.to(`#${id}`, 2, { x: "50px", opacity: 1 });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
    id: id,
    className: "jsx-843923463" + " " + "animated slideInLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, word), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "843923463",
    __self: this
  }, "li.jsx-843923463{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin:0 1rem;-webkit-transition:250ms ease;transition:250ms ease;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlrQixBQUd5Qix3REFDQSxjQUNRLG9EQUN4QiIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL21haW4vZ3JlZW5wb3N0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnQgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3YxJztcbmltcG9ydCBUd2Vlbk1heCBmcm9tICdnc2FwJztcblxuY29uc3QgV29yZCA9ICh7IHdvcmQsIGlkIH0pID0+IHtcbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIC8vVHdlZW5NYXgudG8oYCMke2lkfWAsIDIsIHsgeDogXCI1MHB4XCIsIG9wYWNpdHk6IDEgfSk7XG4gIH0sW10pXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxsaSBpZD17aWR9IGNsYXNzTmFtZT1cImFuaW1hdGVkIHNsaWRlSW5MZWZ0XCI+e3dvcmR9PC9saT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbGl7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwIDFyZW07XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuY29uc3QgVGl0bGUgPSAoKSA9PiB7XG4gIGNvbnN0IFtxdWVxdWUsIHNldFF1ZXF1ZV0gPSB1c2VTdGF0ZShBcnJheSgxNSkuZmlsbChcIkdSRUVOUE9TVCdTXCIpKTtcbiAgLyp1c2VFZmZlY3QoKCk9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCB3b3JkID0gXCJHUkVFTlBPU1QnU1wiO1xuICAgICAgaWYocXVlcXVlLmxlbmd0aCA8PTE1KXtcbiAgICAgICAgc2V0UXVlcXVlKFt3b3JkLCAuLi5xdWVxdWVdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld0FyciA9IHF1ZXF1ZTtcbiAgICAgICAgbmV3QXJyLnBvcCgpO1xuICAgICAgICBzZXRRdWVxdWUoW3dvcmQsIC4uLm5ld0Fycl0pO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICAgIHJldHVybiAoKT0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LFtxdWVxdWVdKSovXG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBUd2Vlbk1heC50bygnLmNhcnRleHQnLCAxNSwgeyB4OiAtMTUwLCByZXBlYXQ6IC0xLCB5b3lvOiB0cnVlIH0pO1xuICB9LFtdKVxuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIDx1bCBpZD1cInRleHRcIj5cbiAgICAgICAge1xuICAgICAgICAgIHF1ZXF1ZS5tYXAoKHdvcmQsIGkpID0+IDxsaSBjbGFzc05hbWU9XCJjYXJ0ZXh0XCI+e3dvcmR9PC9saT4pXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4ID57YFxuICAgICAgICBkaXZ7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgdWx7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3IucHJpbX07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGl7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwIDFyZW07XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8VGl0bGUgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2e1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx */"));
};

var Title = function Title() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Array(15).fill("GREENPOST'S")),
      queque = _useState[0],
      setQueque = _useState[1];
  /*useEffect(()=> {
    const interval = setInterval(() => {
      const word = "GREENPOST'S";
      if(queque.length <=15){
        setQueque([word, ...queque]);
      } else {
        const newArr = queque;
        newArr.pop();
        setQueque([word, ...newArr]);
      }
    }, 1000);
    return ()=> clearInterval(interval);
  },[queque])*/


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to('.cartext', 15, {
      x: -150,
      repeat: -1,
      yoyo: true
    });
  }, []);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2196548995", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("ul", {
    id: "text",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2196548995", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, queque.map(function (word, i) {
    return __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2196548995", [_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim]]]) + " " + "cartext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, word);
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2196548995",
    dynamic: [_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim],
    __self: this
  }, "div.__jsx-style-dynamic-selector{overflow:hidden;}ul.__jsx-style-dynamic-selector{margin:0;padding:1rem;color:".concat(_layout_main__WEBPACK_IMPORTED_MODULE_2__["color"].prim, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:250ms ease;transition:250ms ease;}li.__jsx-style-dynamic-selector{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin:0 1rem;-webkit-transition:250ms ease;transition:250ms ease;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEbUIsQUFHNkIsQUFHVCxBQVFLLFNBUEQsT0FIYixNQUltQyxrQ0FPckIsQ0FORCxhQU9TLG9EQUN4QixTQVBxQiw2RkFDRyxvREFDeEIiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL2dyZWVucG9zdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbG9yLCBmb250IH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92MSc7XG5pbXBvcnQgVHdlZW5NYXggZnJvbSAnZ3NhcCc7XG5cbmNvbnN0IFdvcmQgPSAoeyB3b3JkLCBpZCB9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICAvL1R3ZWVuTWF4LnRvKGAjJHtpZH1gLCAyLCB7IHg6IFwiNTBweFwiLCBvcGFjaXR5OiAxIH0pO1xuICB9LFtdKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bGkgaWQ9e2lkfSBjbGFzc05hbWU9XCJhbmltYXRlZCBzbGlkZUluTGVmdFwiPnt3b3JkfTwvbGk+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGxpe1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IFRpdGxlID0gKCkgPT4ge1xuICBjb25zdCBbcXVlcXVlLCBzZXRRdWVxdWVdID0gdXNlU3RhdGUoQXJyYXkoMTUpLmZpbGwoXCJHUkVFTlBPU1QnU1wiKSk7XG4gIC8qdXNlRWZmZWN0KCgpPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3Qgd29yZCA9IFwiR1JFRU5QT1NUJ1NcIjtcbiAgICAgIGlmKHF1ZXF1ZS5sZW5ndGggPD0xNSl7XG4gICAgICAgIHNldFF1ZXF1ZShbd29yZCwgLi4ucXVlcXVlXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdBcnIgPSBxdWVxdWU7XG4gICAgICAgIG5ld0Fyci5wb3AoKTtcbiAgICAgICAgc2V0UXVlcXVlKFt3b3JkLCAuLi5uZXdBcnJdKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgICByZXR1cm4gKCk9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSxbcXVlcXVlXSkqL1xuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgVHdlZW5NYXgudG8oJy5jYXJ0ZXh0JywgMTUsIHsgeDogLTE1MCwgcmVwZWF0OiAtMSwgeW95bzogdHJ1ZSB9KTtcbiAgfSxbXSlcbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8dWwgaWQ9XCJ0ZXh0XCI+XG4gICAgICAgIHtcbiAgICAgICAgICBxdWVxdWUubWFwKCh3b3JkLCBpKSA9PiA8bGkgY2xhc3NOYW1lPVwiY2FydGV4dFwiPnt3b3JkfTwvbGk+KVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgICAgPHN0eWxlIGpzeCA+e2BcbiAgICAgICAgZGl2e1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgIHVse1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yLnByaW19O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICB9XG4gICAgICAgIGxpe1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPFRpdGxlIC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdntcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx */")));
};

var Main = function Main() {
  return __jsx("div", {
    className: "jsx-1103894341",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1103894341",
    __self: this
  }, "div.jsx-1103894341{width:100vw;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFa0IsQUFHdUIsWUFDSSxnQkFDbEIiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL2dyZWVucG9zdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbG9yLCBmb250IH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92MSc7XG5pbXBvcnQgVHdlZW5NYXggZnJvbSAnZ3NhcCc7XG5cbmNvbnN0IFdvcmQgPSAoeyB3b3JkLCBpZCB9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICAvL1R3ZWVuTWF4LnRvKGAjJHtpZH1gLCAyLCB7IHg6IFwiNTBweFwiLCBvcGFjaXR5OiAxIH0pO1xuICB9LFtdKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bGkgaWQ9e2lkfSBjbGFzc05hbWU9XCJhbmltYXRlZCBzbGlkZUluTGVmdFwiPnt3b3JkfTwvbGk+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGxpe1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IFRpdGxlID0gKCkgPT4ge1xuICBjb25zdCBbcXVlcXVlLCBzZXRRdWVxdWVdID0gdXNlU3RhdGUoQXJyYXkoMTUpLmZpbGwoXCJHUkVFTlBPU1QnU1wiKSk7XG4gIC8qdXNlRWZmZWN0KCgpPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3Qgd29yZCA9IFwiR1JFRU5QT1NUJ1NcIjtcbiAgICAgIGlmKHF1ZXF1ZS5sZW5ndGggPD0xNSl7XG4gICAgICAgIHNldFF1ZXF1ZShbd29yZCwgLi4ucXVlcXVlXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdBcnIgPSBxdWVxdWU7XG4gICAgICAgIG5ld0Fyci5wb3AoKTtcbiAgICAgICAgc2V0UXVlcXVlKFt3b3JkLCAuLi5uZXdBcnJdKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgICByZXR1cm4gKCk9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSxbcXVlcXVlXSkqL1xuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgVHdlZW5NYXgudG8oJy5jYXJ0ZXh0JywgMTUsIHsgeDogLTE1MCwgcmVwZWF0OiAtMSwgeW95bzogdHJ1ZSB9KTtcbiAgfSxbXSlcbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8dWwgaWQ9XCJ0ZXh0XCI+XG4gICAgICAgIHtcbiAgICAgICAgICBxdWVxdWUubWFwKCh3b3JkLCBpKSA9PiA8bGkgY2xhc3NOYW1lPVwiY2FydGV4dFwiPnt3b3JkfTwvbGk+KVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgICAgPHN0eWxlIGpzeCA+e2BcbiAgICAgICAgZGl2e1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgIHVse1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yLnByaW19O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICB9XG4gICAgICAgIGxpe1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPFRpdGxlIC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdntcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.21ed5292017bc3599f91.hot-update.js.map
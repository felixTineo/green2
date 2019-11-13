webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/main/greenpost.jsx":
/*!***************************************!*\
  !*** ./components/main/greenpost.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layout/main */ "./layout/main.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./title */ "./components/main/title.jsx");
/* harmony import */ var _test_posts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../test/posts */ "./test/posts.js");
/* harmony import */ var _test_posts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_test_posts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _node_modules_aos_src_sass_aos_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../node_modules/aos/src/sass/aos.scss */ "./node_modules/aos/src/sass/aos.scss");
/* harmony import */ var _node_modules_aos_src_sass_aos_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_src_sass_aos_scss__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var Post = function Post(_ref) {
  var img = _ref.img,
      title = _ref.title,
      subTitle = _ref.subTitle,
      date = _ref.date,
      history = _ref.history,
      author = _ref.author,
      index = _ref.index;
  var name = author.name,
      lastName = author.lastName,
      perfilImg = author.perfilImg,
      url = author.url;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_9___default.a.init();
    return aos__WEBPACK_IMPORTED_MODULE_9___default.a.refresh();
  }, []);
  return __jsx("div", {
    "data-aos": "flip-left",
    "data-aos-delay": "".concat(index / 2 * 700),
    className: "jsx-1153746147" + " " + "main shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("header", {
    className: "jsx-1153746147",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1153746147" + " " + "user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("img", {
    src: perfilImg,
    alt: "",
    className: "jsx-1153746147",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-1153746147",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "".concat(name, " ").concat(lastName))), __jsx("div", {
    className: "jsx-1153746147" + " " + "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1153746147",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, new Date(date).toLocaleDateString()), __jsx("small", {
    className: "jsx-1153746147",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, new Date(date).toLocaleTimeString()))), __jsx("div", {
    className: "jsx-1153746147" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("img", {
    src: img,
    alt: "",
    className: "jsx-1153746147",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx("footer", {
    className: "jsx-1153746147",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1153746147" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1153746147",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, title), __jsx("small", {
    className: "jsx-1153746147",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, subTitle)), __jsx("ul", {
    className: "jsx-1153746147" + " " + "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1153746147",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faHeart"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), "+ 0"), __jsx("li", {
    className: "jsx-1153746147",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faGift"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), "+ 0"), __jsx("li", {
    className: "jsx-1153746147",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faComment"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1153746147",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "+ 0")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1153746147",
    __self: this
  }, ".main.jsx-1153746147{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:60vh;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}header.jsx-1153746147{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:.5rem;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}header.jsx-1153746147 .user.jsx-1153746147{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}header.jsx-1153746147 .user.jsx-1153746147 img.jsx-1153746147{width:50px;height:50px;border-radius:50%;object-fit:cover;object-position:center;}header.jsx-1153746147 .user.jsx-1153746147 p.jsx-1153746147{margin:0;}header.jsx-1153746147 p.jsx-1153746147{margin:0;}.body.jsx-1153746147{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.body.jsx-1153746147 img.jsx-1153746147{width:100%;height:100%;object-fit:cover;object-position:center;}footer.jsx-1153746147{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:.5rem;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}footer.jsx-1153746147 p.jsx-1153746147{margin:0;}footer.jsx-1153746147 .title.jsx-1153746147{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}footer.jsx-1153746147 .info.jsx-1153746147{list-style:none;margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}li.jsx-1153746147{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:1rem;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}li.jsx-1153746147:nth-child(2){margin:0 1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ea0IsQUFHd0IsQUFPQSxBQVFBLEFBS0YsQUFPRixBQUdBLEFBR0csQUFHRCxBQU1FLEFBTUosQUFJSSxBQUtHLEFBU0csQUFNTCxTQTVDaEIsQUFHQSxBQW1CQSxFQTdCYyxBQWdCRCxHQW9DYixFQWZXLE9BcENTLEFBZ0JELEVBcUJQLFVBQ0csS0FyQlUsQ0FoQk4saUJBQ00sS0FnQnpCLFFBTkEsR0FqQ3dCLEFBT1EsQUFRUixBQTJCSCxBQVVHLE9BNUJ4QixZQTBDcUIsZ0JBTk0sMkNBM0RkLEFBZVEsQUFxQ1EsV0FuRGYsSUF5Q0UsUUF4Q0EsTUF5Q0EsS0F1QkMsR0EzREksWUE0REwsS0FQSyx5QkF6RHJCLE1BeUNBLFFBNUJBLFlBcUNBLEFBZUEseUJBNURnQixjQUNBLEdBb0RGLHFEQWxEZCxrQkFtREEiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL2dyZWVucG9zdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbG9yLCBmb250LCBncmVlbkdyYWRpZW50LCBncmVlbkJhY2tncm91bmQgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3YxJztcbmltcG9ydCBUaXRsZSBmcm9tICcuL3RpdGxlJztcbmltcG9ydCB7IHBvc3RzIGFzIG15UG9zdHMgfSBmcm9tICcuLi8uLi90ZXN0L3Bvc3RzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUFycm93TGVmdCwgZmFBcnJvd1JpZ2h0LCBmYUhlYXJ0LCBmYUdpZnQsIGZhQ29tbWVudCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5pbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9hb3Mvc3JjL3Nhc3MvYW9zLnNjc3MnO1xuXG5jb25zdCBQb3N0ID0gKHsgaW1nLCB0aXRsZSwgc3ViVGl0bGUsIGRhdGUsIGhpc3RvcnksIGF1dGhvciwgaW5kZXggfSkgPT4ge1xuICBjb25zdCB7IG5hbWUsIGxhc3ROYW1lLCBwZXJmaWxJbWcsIHVybCwgfSA9IGF1dGhvcjtcbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIEFPUy5pbml0KCk7XG4gICAgcmV0dXJuIEFPUy5yZWZyZXNoKCk7XG4gIH0sW10pXG4gIHJldHVybihcbiAgICA8ZGl2IGRhdGEtYW9zPVwiZmxpcC1sZWZ0XCIgZGF0YS1hb3MtZGVsYXk9e2Ake2luZGV4LzIgKiA3MDB9YH0gY2xhc3NOYW1lPVwibWFpbiBzaGFkb3dcIj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtwZXJmaWxJbWd9IGFsdD1cIlwiLz5cbiAgICAgICAgICA8cD57YCR7bmFtZX0gJHtsYXN0TmFtZX1gfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPlxuICAgICAgICAgIDxwPntuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3A+XG4gICAgICAgICAgPHNtYWxsPntuZXcgRGF0ZShkYXRlKS50b0xvY2FsZVRpbWVTdHJpbmcoKX08L3NtYWxsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD1cIlwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgIDxwPnt0aXRsZX08L3A+XG4gICAgICAgICAgPHNtYWxsPntzdWJUaXRsZX08L3NtYWxsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSGVhcnR9IC8+XG4gICAgICAgICAgICArIDBcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHaWZ0fSAvPlxuICAgICAgICAgICAgKyAwXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ29tbWVudH0gLz5cbiAgICAgICAgICAgIDxzcGFuPisgMDwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgLy9jb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgLnVzZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIC51c2VyIGltZ3tcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciAudXNlciBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgcHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHl7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5IGltZ3tcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAvL2xpbmUtaGVpZ2h0OiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXIgLnRpdGxle1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVyIC5pbmZve1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG4gICAgICAgIGxpe1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIH1cbiAgICAgICAgbGk6bnRoLWNoaWxkKDIpe1xuICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNYWluID0gKCk9PiB7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUobXlQb3N0cyk7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxUaXRsZSB3b3JkPVwidG9wIGdyZWVucG9zdCdzXCIgLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgIHtcbiAgICAgICAgICBwb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PiA8bGk+PFBvc3QgaW5kZXg9e2luZGV4fSBrZXk9e3V1aWQoKX0gey4uLnBvc3R9Lz48L2xpPilcbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgLy9oZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5e1xuICAgICAgICAgIC8vZmxleC1ncm93OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAvL2p1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgfVxuICAgICAgICBsaXtcbiAgICAgICAgICAvL3dpZHRoOiAzMCU7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA3NjhweCl7XG4gICAgICAgICAgLm1haW57XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ib2R5e1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIG1hcmdpbjogNHJlbSAwO1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGl7XG4gICAgICAgICAgICB3aWR0aDogMzAlO1xuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXX0= */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx */"));
};

var Main = function Main() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(_test_posts__WEBPACK_IMPORTED_MODULE_6__["posts"]),
      posts = _useState[0],
      setPosts = _useState[1];

  return __jsx("div", {
    className: "jsx-3513811883" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx(_title__WEBPACK_IMPORTED_MODULE_5__["default"], {
    word: "top greenpost's",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), __jsx("ul", {
    className: "jsx-3513811883" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, posts.map(function (post, index) {
    return __jsx("li", {
      className: "jsx-3513811883",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, __jsx(Post, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      index: index,
      key: uuid_v1__WEBPACK_IMPORTED_MODULE_4___default()()
    }, post, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    })));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3513811883",
    __self: this
  }, ".main.jsx-3513811883{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}.body.jsx-3513811883{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;list-style:none;margin:0;padding:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}li.jsx-3513811883{width:80%;margin:1rem 0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}@media(min-width:768px){.body.jsx-3513811883{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:4rem 0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}li.jsx-3513811883{width:30%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStJa0IsQUFJd0IsQUFNQSxBQVdILEFBUVcsQUFNVCxVQWJFLEFBZWQsY0FkYyw2Q0FPRSxLQXpCTSxBQU1BLE1BYXhCLEdBT21CLHlEQUNJLFlBMUJQLEFBT0ssd0RBTnJCLHlCQTBCRSxZQW5CZ0IsZ0JBQ1AsU0FDQyxVQUNJLHdEQUNoQiIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL21haW4vZ3JlZW5wb3N0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnQsIGdyZWVuR3JhZGllbnQsIGdyZWVuQmFja2dyb3VuZCB9IGZyb20gJy4uLy4uL2xheW91dC9tYWluJztcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQvdjEnO1xuaW1wb3J0IFRpdGxlIGZyb20gJy4vdGl0bGUnO1xuaW1wb3J0IHsgcG9zdHMgYXMgbXlQb3N0cyB9IGZyb20gJy4uLy4uL3Rlc3QvcG9zdHMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhQXJyb3dMZWZ0LCBmYUFycm93UmlnaHQsIGZhSGVhcnQsIGZhR2lmdCwgZmFDb21tZW50IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL2Fvcy9zcmMvc2Fzcy9hb3Muc2Nzcyc7XG5cbmNvbnN0IFBvc3QgPSAoeyBpbWcsIHRpdGxlLCBzdWJUaXRsZSwgZGF0ZSwgaGlzdG9yeSwgYXV0aG9yLCBpbmRleCB9KSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgbGFzdE5hbWUsIHBlcmZpbEltZywgdXJsLCB9ID0gYXV0aG9yO1xuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgQU9TLmluaXQoKTtcbiAgICByZXR1cm4gQU9TLnJlZnJlc2goKTtcbiAgfSxbXSlcbiAgcmV0dXJuKFxuICAgIDxkaXYgZGF0YS1hb3M9XCJmbGlwLWxlZnRcIiBkYXRhLWFvcy1kZWxheT17YCR7aW5kZXgvMiAqIDcwMH1gfSBjbGFzc05hbWU9XCJtYWluIHNoYWRvd1wiPlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XG4gICAgICAgICAgPGltZyBzcmM9e3BlcmZpbEltZ30gYWx0PVwiXCIvPlxuICAgICAgICAgIDxwPntgJHtuYW1lfSAke2xhc3ROYW1lfWB9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+XG4gICAgICAgICAgPHA+e25ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvcD5cbiAgICAgICAgICA8c21hbGw+e25ldyBEYXRlKGRhdGUpLnRvTG9jYWxlVGltZVN0cmluZygpfTwvc21hbGw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgPHA+e3RpdGxlfTwvcD5cbiAgICAgICAgICA8c21hbGw+e3N1YlRpdGxlfTwvc21hbGw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFIZWFydH0gLz5cbiAgICAgICAgICAgICsgMFxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdpZnR9IC8+XG4gICAgICAgICAgICArIDBcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDb21tZW50fSAvPlxuICAgICAgICAgICAgPHNwYW4+KyAwPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNjB2aDtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAvL2NvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciAudXNlcntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgLnVzZXIgaW1ne1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIC51c2VyIHB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICAuYm9keXtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHkgaW1ne1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlcntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVyIHB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIC8vbGluZS1oZWlnaHQ6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciAudGl0bGV7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXIgLmluZm97XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cbiAgICAgICAgbGl7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgfVxuICAgICAgICBsaTpudGgtY2hpbGQoMil7XG4gICAgICAgICAgbWFyZ2luOiAwIDFyZW07XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1haW4gPSAoKT0+IHtcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShteVBvc3RzKTtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPFRpdGxlIHdvcmQ9XCJ0b3AgZ3JlZW5wb3N0J3NcIiAvPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAge1xuICAgICAgICAgIHBvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+IDxsaT48UG9zdCBpbmRleD17aW5kZXh9IGtleT17dXVpZCgpfSB7Li4ucG9zdH0vPjwvbGk+KVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFpbntcbiAgICAgICAgICAvL2hlaWdodDogODB2aDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHl7XG4gICAgICAgICAgLy9mbGV4LWdyb3c6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIC8vanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICB9XG4gICAgICAgIGxpe1xuICAgICAgICAgIC8vd2lkdGg6IDMwJTtcbiAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDc2OHB4KXtcbiAgICAgICAgICAubWFpbntcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJvZHl7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgbWFyZ2luOiA0cmVtIDA7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaXtcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XG5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.bdca73f566b57ff6aaec.hot-update.js.map
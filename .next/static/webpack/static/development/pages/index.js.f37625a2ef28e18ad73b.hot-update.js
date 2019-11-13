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

var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







/*const GreenPost = ({ title, subTitle, img, history }) => {

  return(
    <div className="main">
      <div className="image">
        <img src={img} alt=""/>
      </div>
      <div className="info">
        <header>
          <h1>title</h1>
          <p>subTitle</p>
        </header>
        <p>
          {history}
        </p>
      </div>
      <style jsx>{`
        .main{
          display: flex;
        }
        .image{
          width: 60%;
          height: 100%;
        }
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .info{
          background: ${greenGradient()};
          padding: 1rem;
          width: 40%;
          color: #fff;
        }
      `}</style>
    </div>
  )
}

const Gallery = () => {
  const [posts, setPosts] = useState(myPosts);
  return(
    <div className="main">
      <div className="cont shadow">
        <button className="control">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <GreenPost {...posts[0]} />
        <button className="control">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <style jsx>{`
        .main{
          flex-grow: 1;
          border-top: 5px solid ${color.prim};
          border-bottom: 5px solid ${color.prim};
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem 0;
        }
        .cont{
          width: 100%;
          height: 100%;
          display: flex;
        }
        .control{
          width: 10%;
          height: 100%;
          border: none;
          transition: 250ms esae;
          background: ${color.prim};
          color: #fff;
        }
        .control:focus{
          outline: none;
        }
        .control:hover svg{
          width: 50px:
        }
      `}
      </style>
    </div>
  )
}*/

var Post = function Post(_ref) {
  var img = _ref.img,
      title = _ref.title,
      subTitle = _ref.subTitle,
      date = _ref.date,
      history = _ref.history,
      author = _ref.author;
  var name = author.name,
      lastName = author.lastName,
      perfilImg = author.perfilImg,
      url = author.url;
  return __jsx("div", {
    className: "jsx-2191653769" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("header", {
    className: "jsx-2191653769",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2191653769" + " " + "user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("img", {
    src: perfilImg,
    alt: "",
    className: "jsx-2191653769",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-2191653769",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "".concat(name, " ").concat(lastName))), __jsx("div", {
    className: "jsx-2191653769" + " " + "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2191653769",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, new Date(date).toLocaleDateString()), __jsx("small", {
    className: "jsx-2191653769",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, new Date(date).toLocaleTimeString()))), __jsx("div", {
    className: "jsx-2191653769" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("img", {
    src: img,
    alt: "",
    className: "jsx-2191653769",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  })), __jsx("footer", {
    className: "jsx-2191653769",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2191653769" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2191653769",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, title), __jsx("small", {
    className: "jsx-2191653769",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, subTitle)), __jsx("p", {
    className: "jsx-2191653769",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, history)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2191653769",
    __self: this
  }, ".main.jsx-2191653769{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:30%;height:60vh;}header.jsx-2191653769{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}header.jsx-2191653769 .user.jsx-2191653769{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}header.jsx-2191653769 .user.jsx-2191653769 img.jsx-2191653769{width:50px;height:50px;border-radius:50%;object-fit:cover;object-position:center;}header.jsx-2191653769 .user.jsx-2191653769 p.jsx-2191653769{margin:0;}.body.jsx-2191653769{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.body.jsx-2191653769 img.jsx-2191653769{width:100%;height:100%;object-fit:cover;object-position:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBIa0IsQUFHd0IsQUFNQSxBQU1BLEFBS0YsQUFPRixBQUdHLEFBR0QsU0FMYixFQVBjLEFBYUQsWUFaTyxBQWFELGlCQUNNLENBYk4saUJBQ00sS0FhekIsUUFOQSxHQTNCd0IsQUFNUSxBQU1SLE9BU3hCLHVFQXBCWSxBQVlTLFVBWFAsWUFDZCxlQUlxQix3REFPckIscUNBTEEiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL2dyZWVucG9zdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbG9yLCBmb250LCBncmVlbkdyYWRpZW50LCBncmVlbkJhY2tncm91bmQgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3YxJztcbmltcG9ydCBUaXRsZSBmcm9tICcuL3RpdGxlJztcbmltcG9ydCB7IHBvc3RzIGFzIG15UG9zdHMgfSBmcm9tICcuLi8uLi90ZXN0L3Bvc3RzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUFycm93TGVmdCwgZmFBcnJvd1JpZ2h0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxuLypjb25zdCBHcmVlblBvc3QgPSAoeyB0aXRsZSwgc3ViVGl0bGUsIGltZywgaGlzdG9yeSB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9XCJcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxoMT50aXRsZTwvaDE+XG4gICAgICAgICAgPHA+c3ViVGl0bGU8L3A+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7aGlzdG9yeX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLmltYWdle1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGltZ3tcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm97XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtncmVlbkdyYWRpZW50KCl9O1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEdhbGxlcnkgPSAoKSA9PiB7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUobXlQb3N0cyk7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udCBzaGFkb3dcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUFycm93TGVmdH0gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxHcmVlblBvc3Qgey4uLnBvc3RzWzBdfSAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQXJyb3dSaWdodH0gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAke2NvbG9yLnByaW19O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAke2NvbG9yLnByaW19O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnR7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRyb2x7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVzYWU7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvci5wcmltfTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICAuY29udHJvbDpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5jb250cm9sOmhvdmVyIHN2Z3tcbiAgICAgICAgICB3aWR0aDogNTBweDpcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn0qL1xuXG5jb25zdCBQb3N0ID0gKHsgaW1nLCB0aXRsZSwgc3ViVGl0bGUsIGRhdGUsIGhpc3RvcnksIGF1dGhvciB9KSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgbGFzdE5hbWUsIHBlcmZpbEltZywgdXJsLCB9ID0gYXV0aG9yO1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtwZXJmaWxJbWd9IGFsdD1cIlwiLz5cbiAgICAgICAgICA8cD57YCR7bmFtZX0gJHtsYXN0TmFtZX1gfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPlxuICAgICAgICAgIDxwPntuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3A+XG4gICAgICAgICAgPHNtYWxsPntuZXcgRGF0ZShkYXRlKS50b0xvY2FsZVRpbWVTdHJpbmcoKX08L3NtYWxsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD1cIlwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgIDxwPnt0aXRsZX08L3A+XG4gICAgICAgICAgPHNtYWxsPntzdWJUaXRsZX08L3NtYWxsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+e2hpc3Rvcnl9PC9wPlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgIGhlaWdodDogNjB2aDtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAvL2NvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciAudXNlcntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgLnVzZXIgaW1ne1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIC51c2VyIHB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5e1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgfVxuICAgICAgICAuYm9keSBpbWd7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1haW4gPSAoKT0+IHtcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShteVBvc3RzKTtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPFRpdGxlIHdvcmQ9XCJ0b3AgZ3JlZW5wb3N0J3NcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgIHtcbiAgICAgICAgICBwb3N0cy5zbGljZSgwLCAzKS5tYXAocG9zdCA9PiA8UG9zdCB7Li4ucG9zdH0vPilcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIC8vJHtncmVlbkJhY2tncm91bmQoKX07XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHl7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx */"));
};

var Main = function Main() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(_test_posts__WEBPACK_IMPORTED_MODULE_6__["posts"]),
      posts = _useState[0],
      setPosts = _useState[1];

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4223565839", [Object(_layout_main__WEBPACK_IMPORTED_MODULE_3__["greenBackground"])()]]]) + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx(_title__WEBPACK_IMPORTED_MODULE_5__["default"], {
    word: "top greenpost's",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4223565839", [Object(_layout_main__WEBPACK_IMPORTED_MODULE_3__["greenBackground"])()]]]) + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, posts.slice(0, 3).map(function (post) {
    return __jsx(Post, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, post, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4223565839",
    dynamic: [Object(_layout_main__WEBPACK_IMPORTED_MODULE_3__["greenBackground"])()],
    __self: this
  }, ".main.__jsx-style-dynamic-selector{height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.body.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStLa0IsQUFJd0IsQUFLRCxhQUpDLDBEQUtBLGdCQUpTLDBEQUtDLG9CQUp6QiwrRUFLcUIsNkZBQ3JCIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb2xvciwgZm9udCwgZ3JlZW5HcmFkaWVudCwgZ3JlZW5CYWNrZ3JvdW5kIH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92MSc7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi90aXRsZSc7XG5pbXBvcnQgeyBwb3N0cyBhcyBteVBvc3RzIH0gZnJvbSAnLi4vLi4vdGVzdC9wb3N0cyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFBcnJvd0xlZnQsIGZhQXJyb3dSaWdodCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbi8qY29uc3QgR3JlZW5Qb3N0ID0gKHsgdGl0bGUsIHN1YlRpdGxlLCBpbWcsIGhpc3RvcnkgfSkgPT4ge1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8aDE+dGl0bGU8L2gxPlxuICAgICAgICAgIDxwPnN1YlRpdGxlPC9wPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPHA+XG4gICAgICAgICAge2hpc3Rvcnl9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFpbntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5pbWFnZXtcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBpbWd7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5pbmZve1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Z3JlZW5HcmFkaWVudCgpfTtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBHYWxsZXJ5ID0gKCkgPT4ge1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKG15UG9zdHMpO1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnQgc2hhZG93XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBcnJvd0xlZnR9IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8R3JlZW5Qb3N0IHsuLi5wb3N0c1swXX0gLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUFycm93UmlnaHR9IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBib3JkZXItdG9wOiA1cHggc29saWQgJHtjb2xvci5wcmltfTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgJHtjb2xvci5wcmltfTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMXJlbSAwO1xuICAgICAgICB9XG4gICAgICAgIC5jb250e1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5jb250cm9se1xuICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlc2FlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3IucHJpbX07XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRyb2w6Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuY29udHJvbDpob3ZlciBzdmd7XG4gICAgICAgICAgd2lkdGg6IDUwcHg6XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59Ki9cblxuY29uc3QgUG9zdCA9ICh7IGltZywgdGl0bGUsIHN1YlRpdGxlLCBkYXRlLCBoaXN0b3J5LCBhdXRob3IgfSkgPT4ge1xuICBjb25zdCB7IG5hbWUsIGxhc3ROYW1lLCBwZXJmaWxJbWcsIHVybCwgfSA9IGF1dGhvcjtcblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cbiAgICAgICAgICA8aW1nIHNyYz17cGVyZmlsSW1nfSBhbHQ9XCJcIi8+XG4gICAgICAgICAgPHA+e2Ake25hbWV9ICR7bGFzdE5hbWV9YH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cbiAgICAgICAgICA8cD57bmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC9wPlxuICAgICAgICAgIDxzbWFsbD57bmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9PC9zbWFsbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9XCJcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICA8cD57dGl0bGV9PC9wPlxuICAgICAgICAgIDxzbWFsbD57c3ViVGl0bGV9PC9zbWFsbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwPntoaXN0b3J5fTwvcD5cbiAgICAgIDwvZm9vdGVyPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFpbntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgLy9jb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgLnVzZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIC51c2VyIGltZ3tcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciAudXNlciBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICAuYm9keXtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHkgaW1ne1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNYWluID0gKCk9PiB7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUobXlQb3N0cyk7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxUaXRsZSB3b3JkPVwidG9wIGdyZWVucG9zdCdzXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICB7XG4gICAgICAgICAgcG9zdHMuc2xpY2UoMCwgMykubWFwKHBvc3QgPT4gPFBvc3Qgey4uLnBvc3R9Lz4pXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFpbntcbiAgICAgICAgICAvLyR7Z3JlZW5CYWNrZ3JvdW5kKCl9O1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5e1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.f37625a2ef28e18ad73b.hot-update.js.map
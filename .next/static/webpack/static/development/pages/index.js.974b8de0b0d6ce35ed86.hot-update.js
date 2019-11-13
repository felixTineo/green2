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
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./title */ "./components/main/title.jsx");
/* harmony import */ var _test_posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../test/posts */ "./test/posts.js");
/* harmony import */ var _test_posts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_test_posts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







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
  var fullName = author.fullName,
      perfilImg = author.perfilImg,
      url = author.url;
  return __jsx("div", {
    className: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  });
};

var Main = function Main() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_test_posts__WEBPACK_IMPORTED_MODULE_5__["posts"]),
      posts = _useState[0],
      setPosts = _useState[1];

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4126767007", [Object(_layout_main__WEBPACK_IMPORTED_MODULE_2__["greenBackground"])()]]]) + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx(_title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    word: "top greenpost's",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4126767007",
    dynamic: [Object(_layout_main__WEBPACK_IMPORTED_MODULE_2__["greenBackground"])()],
    __self: this
  }, ".main.__jsx-style-dynamic-selector{height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlIa0IsQUFJd0IsYUFDQSwwRUFDUyw4RUFDeEIiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL2dyZWVucG9zdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbG9yLCBmb250LCBncmVlbkdyYWRpZW50LCBncmVlbkJhY2tncm91bmQgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3YxJztcbmltcG9ydCBUaXRsZSBmcm9tICcuL3RpdGxlJztcbmltcG9ydCB7IHBvc3RzIGFzIG15UG9zdHMgfSBmcm9tICcuLi8uLi90ZXN0L3Bvc3RzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUFycm93TGVmdCwgZmFBcnJvd1JpZ2h0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxuLypjb25zdCBHcmVlblBvc3QgPSAoeyB0aXRsZSwgc3ViVGl0bGUsIGltZywgaGlzdG9yeSB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9XCJcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxoMT50aXRsZTwvaDE+XG4gICAgICAgICAgPHA+c3ViVGl0bGU8L3A+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7aGlzdG9yeX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLmltYWdle1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGltZ3tcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm97XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtncmVlbkdyYWRpZW50KCl9O1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEdhbGxlcnkgPSAoKSA9PiB7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUobXlQb3N0cyk7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udCBzaGFkb3dcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUFycm93TGVmdH0gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxHcmVlblBvc3Qgey4uLnBvc3RzWzBdfSAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQXJyb3dSaWdodH0gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAke2NvbG9yLnByaW19O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAke2NvbG9yLnByaW19O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnR7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRyb2x7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVzYWU7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvci5wcmltfTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICAuY29udHJvbDpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5jb250cm9sOmhvdmVyIHN2Z3tcbiAgICAgICAgICB3aWR0aDogNTBweDpcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn0qL1xuXG5jb25zdCBQb3N0ID0gKHsgaW1nLCB0aXRsZSwgc3ViVGl0bGUsIGRhdGUsIGhpc3RvcnksIGF1dGhvciB9KSA9PiB7XG4gIGNvbnN0IHsgZnVsbE5hbWUsIHBlcmZpbEltZywgdXJsLCB9ID0gYXV0aG9yO1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1haW4gPSAoKT0+IHtcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShteVBvc3RzKTtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPFRpdGxlIHdvcmQ9XCJ0b3AgZ3JlZW5wb3N0J3NcIiAvPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIC8vJHtncmVlbkJhY2tncm91bmQoKX07XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.974b8de0b0d6ce35ed86.hot-update.js.map
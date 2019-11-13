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
    className: "jsx-1827171708" + " " + "main shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("header", {
    className: "jsx-1827171708",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1827171708" + " " + "user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("img", {
    src: perfilImg,
    alt: "",
    className: "jsx-1827171708",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-1827171708",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "".concat(name, " ").concat(lastName))), __jsx("div", {
    className: "jsx-1827171708" + " " + "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1827171708",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, new Date(date).toLocaleDateString()), __jsx("small", {
    className: "jsx-1827171708",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, new Date(date).toLocaleTimeString()))), __jsx("div", {
    className: "jsx-1827171708" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("img", {
    src: img,
    alt: "",
    className: "jsx-1827171708",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  })), __jsx("footer", {
    className: "jsx-1827171708",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1827171708" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1827171708",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, title), __jsx("small", {
    className: "jsx-1827171708",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, subTitle)), __jsx("ul", {
    className: "jsx-1827171708" + " " + "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1827171708",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faHeart"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), "+ 0"), __jsx("li", {
    className: "jsx-1827171708",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faGift"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), "+ 0"), __jsx("li", {
    className: "jsx-1827171708",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faComment"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }), "+ 0"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1827171708",
    __self: this
  }, ".main.jsx-1827171708{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:60vh;}header.jsx-1827171708{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:.5rem;}header.jsx-1827171708 .user.jsx-1827171708{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}header.jsx-1827171708 .user.jsx-1827171708 img.jsx-1827171708{width:50px;height:50px;border-radius:50%;object-fit:cover;object-position:center;}header.jsx-1827171708 .user.jsx-1827171708 p.jsx-1827171708{margin:0;}header.jsx-1827171708 p.jsx-1827171708{margin:0;}.body.jsx-1827171708{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.body.jsx-1827171708 img.jsx-1827171708{width:100%;height:100%;object-fit:cover;object-position:center;}footer.jsx-1827171708{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:.5rem;}footer.jsx-1827171708 p.jsx-1827171708{margin:0;line-height:.5rem;}footer.jsx-1827171708 .title.jsx-1827171708{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}footer.jsx-1827171708 .info.jsx-1827171708{list-style:none;margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}li.jsx-1827171708{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:50px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVJa0IsQUFHd0IsQUFNQSxBQU9BLEFBS0YsQUFPRixBQUdBLEFBR0csQUFHRCxBQU1FLEFBS0osQUFJSSxBQUtHLEFBUUgsU0FwQ2YsQUFHQSxBQWlCb0IsRUEzQk4sQUFnQkQsS0FvQkYsT0FuQ1MsQUFnQkQsRUFvQlAsRUFUWixRQVVlLEtBcEJVLENBaEJOLGlCQUNNLEtBZ0J6QixRQU5BLEdBL0J3QixBQU1RLEFBT1IsQUEyQkgsQUFTRyxBQWFILE9BeENyQiw0QkFtQzJCLDJDQXhEZCxBQWFRLEFBb0NRLFdBaERmLElBdUNFLEFBc0JILFFBNURiLEdBNkRxQixHQXRCckIsUUFuQ3FCLGlCQW1EUCx1Q0EzQ2QsWUFvQ0EsY0FjaUIsTUFOakIsS0FuRGdCLElBMERoQixVQXhEQSIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL21haW4vZ3JlZW5wb3N0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnQsIGdyZWVuR3JhZGllbnQsIGdyZWVuQmFja2dyb3VuZCB9IGZyb20gJy4uLy4uL2xheW91dC9tYWluJztcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQvdjEnO1xuaW1wb3J0IFRpdGxlIGZyb20gJy4vdGl0bGUnO1xuaW1wb3J0IHsgcG9zdHMgYXMgbXlQb3N0cyB9IGZyb20gJy4uLy4uL3Rlc3QvcG9zdHMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhQXJyb3dMZWZ0LCBmYUFycm93UmlnaHQsIGZhSGVhcnQsIGZhR2lmdCwgZmFDb21tZW50IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxuLypjb25zdCBHcmVlblBvc3QgPSAoeyB0aXRsZSwgc3ViVGl0bGUsIGltZywgaGlzdG9yeSB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9XCJcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxoMT50aXRsZTwvaDE+XG4gICAgICAgICAgPHA+c3ViVGl0bGU8L3A+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7aGlzdG9yeX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLmltYWdle1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGltZ3tcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm97XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtncmVlbkdyYWRpZW50KCl9O1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEdhbGxlcnkgPSAoKSA9PiB7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUobXlQb3N0cyk7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udCBzaGFkb3dcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUFycm93TGVmdH0gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxHcmVlblBvc3Qgey4uLnBvc3RzWzBdfSAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQXJyb3dSaWdodH0gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAke2NvbG9yLnByaW19O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAke2NvbG9yLnByaW19O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnR7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRyb2x7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVzYWU7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvci5wcmltfTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICAuY29udHJvbDpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5jb250cm9sOmhvdmVyIHN2Z3tcbiAgICAgICAgICB3aWR0aDogNTBweDpcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn0qL1xuXG5jb25zdCBQb3N0ID0gKHsgaW1nLCB0aXRsZSwgc3ViVGl0bGUsIGRhdGUsIGhpc3RvcnksIGF1dGhvciB9KSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgbGFzdE5hbWUsIHBlcmZpbEltZywgdXJsLCB9ID0gYXV0aG9yO1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4gc2hhZG93XCI+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cbiAgICAgICAgICA8aW1nIHNyYz17cGVyZmlsSW1nfSBhbHQ9XCJcIi8+XG4gICAgICAgICAgPHA+e2Ake25hbWV9ICR7bGFzdE5hbWV9YH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cbiAgICAgICAgICA8cD57bmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC9wPlxuICAgICAgICAgIDxzbWFsbD57bmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9PC9zbWFsbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9XCJcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICA8cD57dGl0bGV9PC9wPlxuICAgICAgICAgIDxzbWFsbD57c3ViVGl0bGV9PC9zbWFsbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUhlYXJ0fSAvPlxuICAgICAgICAgICAgKyAwXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhR2lmdH0gLz5cbiAgICAgICAgICAgICsgMFxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNvbW1lbnR9IC8+XG4gICAgICAgICAgICArIDBcbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgICAgLy9jb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgLnVzZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIC51c2VyIGltZ3tcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciAudXNlciBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgcHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHl7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5IGltZ3tcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVyIC50aXRsZXtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciAuaW5mb3tcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cbiAgICAgICAgbGl7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNYWluID0gKCk9PiB7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUobXlQb3N0cyk7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxUaXRsZSB3b3JkPVwidG9wIGdyZWVucG9zdCdzXCIgLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgIHtcbiAgICAgICAgICBwb3N0cy5zbGljZSgwLCAzKS5tYXAocG9zdCA9PiA8bGk+PFBvc3Qga2V5PXt1dWlkKCl9IHsuLi5wb3N0fS8+PC9saT4pXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIC8vJHtncmVlbkJhY2tncm91bmQoKX07XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHl7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIGxpe1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIH1cbiAgICAgICAgbGk6bnRoLWNoaWxkKDIpe1xuICAgICAgICAgIC8vbWFyZ2luOiAxcmVtO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXX0= */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx */"));
};

var Main = function Main() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(_test_posts__WEBPACK_IMPORTED_MODULE_6__["posts"]),
      posts = _useState[0],
      setPosts = _useState[1];

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2870786276", [Object(_layout_main__WEBPACK_IMPORTED_MODULE_3__["greenBackground"])()]]]) + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx(_title__WEBPACK_IMPORTED_MODULE_5__["default"], {
    word: "top greenpost's",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2870786276", [Object(_layout_main__WEBPACK_IMPORTED_MODULE_3__["greenBackground"])()]]]) + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, posts.slice(0, 3).map(function (post) {
    return __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2870786276", [Object(_layout_main__WEBPACK_IMPORTED_MODULE_3__["greenBackground"])()]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }, __jsx(Post, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: uuid_v1__WEBPACK_IMPORTED_MODULE_4___default()()
    }, post, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    })));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2870786276",
    dynamic: [Object(_layout_main__WEBPACK_IMPORTED_MODULE_3__["greenBackground"])()],
    __self: this
  }, ".main.__jsx-style-dynamic-selector{height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.body.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;list-style:none;margin:0;padding:0;}li.__jsx-style-dynamic-selector{width:30%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZOa0IsQUFJd0IsQUFLRCxBQVNGLFVBQ1osR0FkZSwwREFLQSxnQkFKUywwREFLTyxvQkFKL0IsdUdBS3FCLDZGQUNILGdCQUNQLFNBQ0MsVUFDWiIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL21haW4vZ3JlZW5wb3N0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnQsIGdyZWVuR3JhZGllbnQsIGdyZWVuQmFja2dyb3VuZCB9IGZyb20gJy4uLy4uL2xheW91dC9tYWluJztcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQvdjEnO1xuaW1wb3J0IFRpdGxlIGZyb20gJy4vdGl0bGUnO1xuaW1wb3J0IHsgcG9zdHMgYXMgbXlQb3N0cyB9IGZyb20gJy4uLy4uL3Rlc3QvcG9zdHMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhQXJyb3dMZWZ0LCBmYUFycm93UmlnaHQsIGZhSGVhcnQsIGZhR2lmdCwgZmFDb21tZW50IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxuLypjb25zdCBHcmVlblBvc3QgPSAoeyB0aXRsZSwgc3ViVGl0bGUsIGltZywgaGlzdG9yeSB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9XCJcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxoMT50aXRsZTwvaDE+XG4gICAgICAgICAgPHA+c3ViVGl0bGU8L3A+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7aGlzdG9yeX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLmltYWdle1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGltZ3tcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm97XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtncmVlbkdyYWRpZW50KCl9O1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEdhbGxlcnkgPSAoKSA9PiB7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUobXlQb3N0cyk7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udCBzaGFkb3dcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUFycm93TGVmdH0gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxHcmVlblBvc3Qgey4uLnBvc3RzWzBdfSAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQXJyb3dSaWdodH0gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAke2NvbG9yLnByaW19O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAke2NvbG9yLnByaW19O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnR7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRyb2x7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVzYWU7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvci5wcmltfTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICAuY29udHJvbDpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5jb250cm9sOmhvdmVyIHN2Z3tcbiAgICAgICAgICB3aWR0aDogNTBweDpcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn0qL1xuXG5jb25zdCBQb3N0ID0gKHsgaW1nLCB0aXRsZSwgc3ViVGl0bGUsIGRhdGUsIGhpc3RvcnksIGF1dGhvciB9KSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgbGFzdE5hbWUsIHBlcmZpbEltZywgdXJsLCB9ID0gYXV0aG9yO1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4gc2hhZG93XCI+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cbiAgICAgICAgICA8aW1nIHNyYz17cGVyZmlsSW1nfSBhbHQ9XCJcIi8+XG4gICAgICAgICAgPHA+e2Ake25hbWV9ICR7bGFzdE5hbWV9YH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cbiAgICAgICAgICA8cD57bmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC9wPlxuICAgICAgICAgIDxzbWFsbD57bmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9PC9zbWFsbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9XCJcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICA8cD57dGl0bGV9PC9wPlxuICAgICAgICAgIDxzbWFsbD57c3ViVGl0bGV9PC9zbWFsbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUhlYXJ0fSAvPlxuICAgICAgICAgICAgKyAwXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhR2lmdH0gLz5cbiAgICAgICAgICAgICsgMFxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNvbW1lbnR9IC8+XG4gICAgICAgICAgICArIDBcbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgICAgLy9jb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgLnVzZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIC51c2VyIGltZ3tcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciAudXNlciBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgcHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHl7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5IGltZ3tcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVyIC50aXRsZXtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciAuaW5mb3tcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cbiAgICAgICAgbGl7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNYWluID0gKCk9PiB7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUobXlQb3N0cyk7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxUaXRsZSB3b3JkPVwidG9wIGdyZWVucG9zdCdzXCIgLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgIHtcbiAgICAgICAgICBwb3N0cy5zbGljZSgwLCAzKS5tYXAocG9zdCA9PiA8bGk+PFBvc3Qga2V5PXt1dWlkKCl9IHsuLi5wb3N0fS8+PC9saT4pXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIC8vJHtncmVlbkJhY2tncm91bmQoKX07XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHl7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIGxpe1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIH1cbiAgICAgICAgbGk6bnRoLWNoaWxkKDIpe1xuICAgICAgICAgIC8vbWFyZ2luOiAxcmVtO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXX0= */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.0440e9f0411c2a4b8ed6.hot-update.js.map
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
    className: "jsx-3624595004" + " " + "main shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("header", {
    className: "jsx-3624595004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3624595004" + " " + "user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("img", {
    src: perfilImg,
    alt: "",
    className: "jsx-3624595004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-3624595004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "".concat(name, " ").concat(lastName))), __jsx("div", {
    className: "jsx-3624595004" + " " + "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3624595004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, new Date(date).toLocaleDateString()), __jsx("small", {
    className: "jsx-3624595004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, new Date(date).toLocaleTimeString()))), __jsx("div", {
    className: "jsx-3624595004" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("img", {
    src: img,
    alt: "",
    className: "jsx-3624595004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  })), __jsx("footer", {
    className: "jsx-3624595004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3624595004" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3624595004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, title), __jsx("small", {
    className: "jsx-3624595004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, subTitle)), __jsx("p", {
    className: "jsx-3624595004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, history)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3624595004",
    __self: this
  }, ".main.jsx-3624595004{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:30%;height:60vh;}header.jsx-3624595004{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}header.jsx-3624595004 .user.jsx-3624595004{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}header.jsx-3624595004 .user.jsx-3624595004 img.jsx-3624595004{width:50px;height:50px;border-radius:50%;object-fit:cover;object-position:center;}header.jsx-3624595004 .user.jsx-3624595004 p.jsx-3624595004{margin:0;}.body.jsx-3624595004{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.body.jsx-3624595004 img.jsx-3624595004{width:100%;height:100%;object-fit:cover;object-position:center;}footer.jsx-3624595004{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:.5rem;}footer.jsx-3624595004 p.jsx-3624595004{margin:0;line-height:.5rem;}footer.jsx-3624595004 .title.jsx-3624595004{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBIa0IsQUFHd0IsQUFNQSxBQU1BLEFBS0YsQUFPRixBQUdHLEFBR0QsQUFNRSxBQU1KLEFBSUksU0FyQmYsQUFrQm9CLEVBekJOLEFBYUQsWUFaTyxBQWFELElBWW5CLGFBWHlCLENBYk4saUJBQ00sS0FhekIsUUFOQSxHQTNCd0IsQUFNUSxBQU1SLEFBd0JRLEFBVVIsT0F6QnhCLHVFQXBCWSxBQVlTLEFBa0NRLFVBN0NmLFlBQ2QsZUFJcUIsQUE4QkEsd0RBdkJyQixZQWtDQSx5QkF2Q0EsQUE2QmdCLGNBQ2hCIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb2xvciwgZm9udCwgZ3JlZW5HcmFkaWVudCwgZ3JlZW5CYWNrZ3JvdW5kIH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92MSc7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi90aXRsZSc7XG5pbXBvcnQgeyBwb3N0cyBhcyBteVBvc3RzIH0gZnJvbSAnLi4vLi4vdGVzdC9wb3N0cyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFBcnJvd0xlZnQsIGZhQXJyb3dSaWdodCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbi8qY29uc3QgR3JlZW5Qb3N0ID0gKHsgdGl0bGUsIHN1YlRpdGxlLCBpbWcsIGhpc3RvcnkgfSkgPT4ge1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8aDE+dGl0bGU8L2gxPlxuICAgICAgICAgIDxwPnN1YlRpdGxlPC9wPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPHA+XG4gICAgICAgICAge2hpc3Rvcnl9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFpbntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5pbWFnZXtcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBpbWd7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5pbmZve1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Z3JlZW5HcmFkaWVudCgpfTtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBHYWxsZXJ5ID0gKCkgPT4ge1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKG15UG9zdHMpO1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnQgc2hhZG93XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBcnJvd0xlZnR9IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8R3JlZW5Qb3N0IHsuLi5wb3N0c1swXX0gLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUFycm93UmlnaHR9IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBib3JkZXItdG9wOiA1cHggc29saWQgJHtjb2xvci5wcmltfTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgJHtjb2xvci5wcmltfTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMXJlbSAwO1xuICAgICAgICB9XG4gICAgICAgIC5jb250e1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5jb250cm9se1xuICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlc2FlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3IucHJpbX07XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRyb2w6Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuY29udHJvbDpob3ZlciBzdmd7XG4gICAgICAgICAgd2lkdGg6IDUwcHg6XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59Ki9cblxuY29uc3QgUG9zdCA9ICh7IGltZywgdGl0bGUsIHN1YlRpdGxlLCBkYXRlLCBoaXN0b3J5LCBhdXRob3IgfSkgPT4ge1xuICBjb25zdCB7IG5hbWUsIGxhc3ROYW1lLCBwZXJmaWxJbWcsIHVybCwgfSA9IGF1dGhvcjtcblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluIHNoYWRvd1wiPlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XG4gICAgICAgICAgPGltZyBzcmM9e3BlcmZpbEltZ30gYWx0PVwiXCIvPlxuICAgICAgICAgIDxwPntgJHtuYW1lfSAke2xhc3ROYW1lfWB9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+XG4gICAgICAgICAgPHA+e25ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvcD5cbiAgICAgICAgICA8c21hbGw+e25ldyBEYXRlKGRhdGUpLnRvTG9jYWxlVGltZVN0cmluZygpfTwvc21hbGw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgPHA+e3RpdGxlfTwvcD5cbiAgICAgICAgICA8c21hbGw+e3N1YlRpdGxlfTwvc21hbGw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cD57aGlzdG9yeX08L3A+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlcntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIC8vY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIC51c2Vye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciAudXNlciBpbWd7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgLnVzZXIgcHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHl7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5IGltZ3tcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXIgcHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciAudGl0bGV7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWFpbiA9ICgpPT4ge1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKG15UG9zdHMpO1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8VGl0bGUgd29yZD1cInRvcCBncmVlbnBvc3Qnc1wiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAge1xuICAgICAgICAgIHBvc3RzLnNsaWNlKDAsIDMpLm1hcChwb3N0ID0+IDxQb3N0IGtleT17dXVpZCgpfSB7Li4ucG9zdH0vPilcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIC8vJHtncmVlbkJhY2tncm91bmQoKX07XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHl7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx */"));
};

var Main = function Main() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(_test_posts__WEBPACK_IMPORTED_MODULE_6__["posts"]),
      posts = _useState[0],
      setPosts = _useState[1];

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4223565839", [Object(_layout_main__WEBPACK_IMPORTED_MODULE_3__["greenBackground"])()]]]) + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx(_title__WEBPACK_IMPORTED_MODULE_5__["default"], {
    word: "top greenpost's",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4223565839", [Object(_layout_main__WEBPACK_IMPORTED_MODULE_3__["greenBackground"])()]]]) + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, posts.slice(0, 3).map(function (post) {
    return __jsx(Post, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: uuid_v1__WEBPACK_IMPORTED_MODULE_4___default()()
    }, post, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4223565839",
    dynamic: [Object(_layout_main__WEBPACK_IMPORTED_MODULE_3__["greenBackground"])()],
    __self: this
  }, ".main.__jsx-style-dynamic-selector{height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.body.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThMa0IsQUFJd0IsQUFLRCxhQUpDLDBEQUtBLGdCQUpTLDBEQUtDLG9CQUp6QiwrRUFLcUIsNkZBQ3JCIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9ncmVlbnBvc3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb2xvciwgZm9udCwgZ3JlZW5HcmFkaWVudCwgZ3JlZW5CYWNrZ3JvdW5kIH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92MSc7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi90aXRsZSc7XG5pbXBvcnQgeyBwb3N0cyBhcyBteVBvc3RzIH0gZnJvbSAnLi4vLi4vdGVzdC9wb3N0cyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFBcnJvd0xlZnQsIGZhQXJyb3dSaWdodCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbi8qY29uc3QgR3JlZW5Qb3N0ID0gKHsgdGl0bGUsIHN1YlRpdGxlLCBpbWcsIGhpc3RvcnkgfSkgPT4ge1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8aDE+dGl0bGU8L2gxPlxuICAgICAgICAgIDxwPnN1YlRpdGxlPC9wPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPHA+XG4gICAgICAgICAge2hpc3Rvcnl9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFpbntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5pbWFnZXtcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBpbWd7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5pbmZve1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Z3JlZW5HcmFkaWVudCgpfTtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBHYWxsZXJ5ID0gKCkgPT4ge1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKG15UG9zdHMpO1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnQgc2hhZG93XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBcnJvd0xlZnR9IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8R3JlZW5Qb3N0IHsuLi5wb3N0c1swXX0gLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUFycm93UmlnaHR9IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBib3JkZXItdG9wOiA1cHggc29saWQgJHtjb2xvci5wcmltfTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgJHtjb2xvci5wcmltfTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMXJlbSAwO1xuICAgICAgICB9XG4gICAgICAgIC5jb250e1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5jb250cm9se1xuICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlc2FlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3IucHJpbX07XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRyb2w6Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuY29udHJvbDpob3ZlciBzdmd7XG4gICAgICAgICAgd2lkdGg6IDUwcHg6XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59Ki9cblxuY29uc3QgUG9zdCA9ICh7IGltZywgdGl0bGUsIHN1YlRpdGxlLCBkYXRlLCBoaXN0b3J5LCBhdXRob3IgfSkgPT4ge1xuICBjb25zdCB7IG5hbWUsIGxhc3ROYW1lLCBwZXJmaWxJbWcsIHVybCwgfSA9IGF1dGhvcjtcblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluIHNoYWRvd1wiPlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XG4gICAgICAgICAgPGltZyBzcmM9e3BlcmZpbEltZ30gYWx0PVwiXCIvPlxuICAgICAgICAgIDxwPntgJHtuYW1lfSAke2xhc3ROYW1lfWB9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+XG4gICAgICAgICAgPHA+e25ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvcD5cbiAgICAgICAgICA8c21hbGw+e25ldyBEYXRlKGRhdGUpLnRvTG9jYWxlVGltZVN0cmluZygpfTwvc21hbGw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgPHA+e3RpdGxlfTwvcD5cbiAgICAgICAgICA8c21hbGw+e3N1YlRpdGxlfTwvc21hbGw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cD57aGlzdG9yeX08L3A+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlcntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIC8vY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIC51c2Vye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciAudXNlciBpbWd7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgLnVzZXIgcHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHl7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5IGltZ3tcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXIgcHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciAudGl0bGV7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWFpbiA9ICgpPT4ge1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKG15UG9zdHMpO1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8VGl0bGUgd29yZD1cInRvcCBncmVlbnBvc3Qnc1wiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAge1xuICAgICAgICAgIHBvc3RzLnNsaWNlKDAsIDMpLm1hcChwb3N0ID0+IDxQb3N0IGtleT17dXVpZCgpfSB7Li4ucG9zdH0vPilcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgIC8vJHtncmVlbkJhY2tncm91bmQoKX07XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHl7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/greenpost.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.f4aacd924a8fce848868.hot-update.js.map
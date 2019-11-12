webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/main/header.jsx":
/*!************************************!*\
  !*** ./components/main/header.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var _layout_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layout/main */ "./layout/main.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/components/main/header.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var Logo = function Logo(_ref) {
  var header = _ref.header;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("a", {
    href: "",
    title: "Inicio",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1318557158", [header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, header ? '1rem' : '2rem', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1318557158", [header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, header ? '1rem' : '2rem', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "GREEN"), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1318557158", [header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, header ? '1rem' : '2rem', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "LINK"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1318557158",
    dynamic: [header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, header ? '1rem' : '2rem', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light],
    __self: this
  }, "a.__jsx-style-dynamic-selector,a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:none;text-decoration:none;color:".concat(header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, ";margin-left:1rem;}a.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, ";font-size:").concat(header ? '1rem' : '2rem', ";-webkit-transition:250ms ease;transition:250ms ease;}p.__jsx-style-dynamic-selector{margin:0;}span.__jsx-style-dynamic-selector{color:transparent;-webkit-text-stroke:1px ").concat(header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9oZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVrQixBQUdnQyxBQUtSLEFBTUosQUFHUyxTQUZwQixTQUd1RCxnQ0FkbEIscUJBZXJDLEdBVjJDLFdBSnhCLGlCQUNuQixhQUl5Qyx1Q0FDakIsb0RBQ3hCIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9oZWFkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBPTl9NQUlOX05BViB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnQgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhQmFycyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cblxuY29uc3QgTG9nbyA9ICh7IGhlYWRlciB9KSA9PiB7XG4gIHJldHVybihcbiAgICA8TGluayBocmVmPVwiL21haW5cIj5cbiAgICAgIDxhIGhyZWY9XCJcIiB0aXRsZT1cIkluaWNpb1wiPlxuICAgICAgICA8cD5HUkVFTjwvcD5cbiAgICAgICAgPHNwYW4+TElOSzwvc3Bhbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYSwgYTpob3ZlcntcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICR7aGVhZGVyID8gY29sb3IucHJpbSA6IGNvbG9yLmxpZ2h0fTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICBhe1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICR7Zm9udC50aXRsZX07XG4gICAgICAgICAgZm9udC1zaXplOiAke2hlYWRlciA/ICcxcmVtJyA6ICcycmVtJ307XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgICBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBzcGFue1xuICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggJHtoZWFkZXIgPyBjb2xvci5wcmltIDogY29sb3IubGlnaHR9O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gIClcbn1cblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBiYXJzID0gPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZD1cIk0xNiAxMzJoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZWNzZjMC04LjgzNy03LjE2My0xNi0xNi0xNkgxNkM3LjE2MyA2MCAwIDY3LjE2MyAwIDc2djQwYzAgOC44MzcgNy4xNjMgMTYgMTYgMTZ6bTAgMTYwaDQxNmM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2di00MGMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE2Yy04LjgzNyAwLTE2IDcuMTYzLTE2IDE2djQwYzAgOC44MzcgNy4xNjMgMTYgMTYgMTZ6bTAgMTYwaDQxNmM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2di00MGMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE2Yy04LjgzNyAwLTE2IDcuMTYzLTE2IDE2djQwYzAgOC44MzcgNy4xNjMgMTYgMTYgMTZ6XCIvPjwvc3ZnPlxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtoZWFkZXIsIHNldEhlYWRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBpZih3aW5kb3cuc2Nyb2xsWSA+IDEwKXtcbiAgICAgIHNldEhlYWRlcih0cnVlKTtcbiAgICB9XG4gIH0pXG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICB3aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XG4gICAgICBpZih3aW5kb3cuc2Nyb2xsWSA+IDEwKXtcbiAgICAgICAgc2V0SGVhZGVyKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SGVhZGVyKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sW10pO1xuICByZXR1cm4oXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJhbmltYXRlZCBmYWRlSW5cIj5cbiAgICAgIDxMb2dvIGhlYWRlcj17aGVhZGVyfSAvPlxuICAgICAgPGJ1dHRvbiAgb25DbGljaz17KCk9PiBkaXNwYXRjaCh7IHR5cGU6IE9OX01BSU5fTkFWIH0pfT5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJhcnN9IC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7aGVhZGVyID8gJyNmZmYnIDogJ3RyYW5zcGFyZW50J307XG4gICAgICAgICAgcGFkZGluZzogLjglO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHotaW5kZXg6IDE1MDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMjUwbXMgbGluZWFyO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDE1cHggcmdiYSgwLCAwLCAwLCAuMyk7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIHdpZHRoOiAke2hlYWRlciA/ICczNXB4JyA6ICc0NXB4J307XG4gICAgICAgICAgaGVpZ2h0OiAke2hlYWRlciA/ICczNXB4JyA6ICc0NXB4J307XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAke2hlYWRlciA/IGNvbG9yLnByaW0gOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAuNyknfTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgIGJvcmRlcjogJHtoZWFkZXIgPyBgMXB4IHNvbGlkICR7Y29sb3IucHJpbX1gIDogJ25vbmUnfTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXJ7XG4gICAgICAgICAgY29sb3I6ICR7aGVhZGVyID8gY29sb3IucHJpbSA6ICcjZmZmJ307XG5cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9oZWFkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/header.jsx */"))));
};

var Header = function Header() {
  var bars = __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("path", {
    d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }));

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      header = _useState[0],
      setHeader = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (window.scrollY > 10) {
      setHeader(true);
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.onscroll = function () {
      if (window.scrollY > 10) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };
  }, []);
  return __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2051450329", [header ? '#fff' : 'transparent', header ? '35px' : '45px', header ? '35px' : '45px', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : 'rgba(255, 255, 255, .7)', header ? "1px solid ".concat(_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim) : 'none', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : '#fff']]]) + " " + "animated fadeIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(Logo, {
    header: header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_MAIN_NAV"]
      });
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2051450329", [header ? '#fff' : 'transparent', header ? '35px' : '45px', header ? '35px' : '45px', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : 'rgba(255, 255, 255, .7)', header ? "1px solid ".concat(_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim) : 'none', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : '#fff']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBars"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2051450329",
    dynamic: [header ? '#fff' : 'transparent', header ? '35px' : '45px', header ? '35px' : '45px', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : 'rgba(255, 255, 255, .7)', header ? "1px solid ".concat(_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim) : 'none', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : '#fff'],
    __self: this
  }, "header.__jsx-style-dynamic-selector{background:".concat(header ? '#fff' : 'transparent', ";padding:.8%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:fixed;top:0;left:0;width:100%;z-index:150;-webkit-transition:height 250ms linear;transition:height 250ms linear;box-shadow:0 2px 15px rgba(0,0,0,.3);}button.__jsx-style-dynamic-selector{background:transparent;width:").concat(header ? '35px' : '45px', ";height:").concat(header ? '35px' : '45px', ";border:none;color:").concat(header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : 'rgba(255, 255, 255, .7)', ";-webkit-transition:250ms ease;transition:250ms ease;border:").concat(header ? "1px solid ".concat(_layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim) : 'none', ";}button.__jsx-style-dynamic-selector:focus{outline:none;}button.__jsx-style-dynamic-selector:hover{color:").concat(header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : '#fff', ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9oZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFa0IsQUFHbUQsQUFjakIsQUFTVixBQUdzQixhQUZyQyxVQVRxQyxZQWFyQyxLQTNCYyxZQUNDLE1BY3VCLG9DQUN4QixZQUN1QixvQkFmTCxlQWdCUixvREFDYyxvQ0FDdEMsWUFqQnFCLDZGQUNKLGVBQ1QsTUFDQyxPQUNJLFdBQ0MsWUFDbUIsc0VBQ1MscUNBQzFDIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9oZWFkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBPTl9NQUlOX05BViB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnQgfSBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhQmFycyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cblxuY29uc3QgTG9nbyA9ICh7IGhlYWRlciB9KSA9PiB7XG4gIHJldHVybihcbiAgICA8TGluayBocmVmPVwiL21haW5cIj5cbiAgICAgIDxhIGhyZWY9XCJcIiB0aXRsZT1cIkluaWNpb1wiPlxuICAgICAgICA8cD5HUkVFTjwvcD5cbiAgICAgICAgPHNwYW4+TElOSzwvc3Bhbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYSwgYTpob3ZlcntcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICR7aGVhZGVyID8gY29sb3IucHJpbSA6IGNvbG9yLmxpZ2h0fTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICBhe1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICR7Zm9udC50aXRsZX07XG4gICAgICAgICAgZm9udC1zaXplOiAke2hlYWRlciA/ICcxcmVtJyA6ICcycmVtJ307XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgICBwe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBzcGFue1xuICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggJHtoZWFkZXIgPyBjb2xvci5wcmltIDogY29sb3IubGlnaHR9O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gIClcbn1cblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBiYXJzID0gPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZD1cIk0xNiAxMzJoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZWNzZjMC04LjgzNy03LjE2My0xNi0xNi0xNkgxNkM3LjE2MyA2MCAwIDY3LjE2MyAwIDc2djQwYzAgOC44MzcgNy4xNjMgMTYgMTYgMTZ6bTAgMTYwaDQxNmM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2di00MGMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE2Yy04LjgzNyAwLTE2IDcuMTYzLTE2IDE2djQwYzAgOC44MzcgNy4xNjMgMTYgMTYgMTZ6bTAgMTYwaDQxNmM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2di00MGMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE2Yy04LjgzNyAwLTE2IDcuMTYzLTE2IDE2djQwYzAgOC44MzcgNy4xNjMgMTYgMTYgMTZ6XCIvPjwvc3ZnPlxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtoZWFkZXIsIHNldEhlYWRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBpZih3aW5kb3cuc2Nyb2xsWSA+IDEwKXtcbiAgICAgIHNldEhlYWRlcih0cnVlKTtcbiAgICB9XG4gIH0pXG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICB3aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XG4gICAgICBpZih3aW5kb3cuc2Nyb2xsWSA+IDEwKXtcbiAgICAgICAgc2V0SGVhZGVyKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SGVhZGVyKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sW10pO1xuICByZXR1cm4oXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJhbmltYXRlZCBmYWRlSW5cIj5cbiAgICAgIDxMb2dvIGhlYWRlcj17aGVhZGVyfSAvPlxuICAgICAgPGJ1dHRvbiAgb25DbGljaz17KCk9PiBkaXNwYXRjaCh7IHR5cGU6IE9OX01BSU5fTkFWIH0pfT5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJhcnN9IC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7aGVhZGVyID8gJyNmZmYnIDogJ3RyYW5zcGFyZW50J307XG4gICAgICAgICAgcGFkZGluZzogLjglO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHotaW5kZXg6IDE1MDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMjUwbXMgbGluZWFyO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDE1cHggcmdiYSgwLCAwLCAwLCAuMyk7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIHdpZHRoOiAke2hlYWRlciA/ICczNXB4JyA6ICc0NXB4J307XG4gICAgICAgICAgaGVpZ2h0OiAke2hlYWRlciA/ICczNXB4JyA6ICc0NXB4J307XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAke2hlYWRlciA/IGNvbG9yLnByaW0gOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAuNyknfTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgIGJvcmRlcjogJHtoZWFkZXIgPyBgMXB4IHNvbGlkICR7Y29sb3IucHJpbX1gIDogJ25vbmUnfTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXJ7XG4gICAgICAgICAgY29sb3I6ICR7aGVhZGVyID8gY29sb3IucHJpbSA6ICcjZmZmJ307XG5cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9oZWFkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/header.jsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.cc5934e0edcae34a325f.hot-update.js.map
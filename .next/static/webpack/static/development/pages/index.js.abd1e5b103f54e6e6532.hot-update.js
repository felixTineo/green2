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
  }, __jsx("img", {
    src: "/static/logo2.png",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1318557158", [header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, header ? '1rem' : '2rem', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1318557158", [header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, header ? '1rem' : '2rem', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "GREEN"), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1318557158", [header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, header ? '1rem' : '2rem', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "LINK"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1318557158",
    dynamic: [header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, _layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, header ? '1rem' : '2rem', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light],
    __self: this
  }, "a.__jsx-style-dynamic-selector,a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:none;text-decoration:none;color:".concat(header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, ";margin-left:1rem;}a.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:").concat(_layout_main__WEBPACK_IMPORTED_MODULE_4__["font"].title, ";font-size:").concat(header ? '1rem' : '2rem', ";-webkit-transition:250ms ease;transition:250ms ease;}p.__jsx-style-dynamic-selector{margin:0;}span.__jsx-style-dynamic-selector{color:transparent;-webkit-text-stroke:1px ").concat(header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].light, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9oZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCa0IsQUFHZ0MsQUFLUixBQU1KLEFBR1MsU0FGcEIsU0FHdUQsZ0NBZGxCLHFCQWVyQyxHQVYyQyxXQUp4QixpQkFDbkIsYUFJeUMsdUNBQ2pCLG9EQUN4QiIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL21haW4vaGVhZGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgT05fTUFJTl9OQVYgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCB7IGNvbG9yLCBmb250IH0gZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUJhcnMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5cbmNvbnN0IExvZ28gPSAoeyBoZWFkZXIgfSkgPT4ge1xuICByZXR1cm4oXG4gICAgPExpbmsgaHJlZj1cIi9tYWluXCI+XG4gICAgICA8YSBocmVmPVwiXCIgdGl0bGU9XCJJbmljaW9cIj5cbiAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2xvZ28yLnBuZ1wiIGFsdD1cIlwiLz5cbiAgICAgICAgPHA+R1JFRU48L3A+XG4gICAgICAgIDxzcGFuPkxJTks8L3NwYW4+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGEsIGE6aG92ZXJ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAke2hlYWRlciA/IGNvbG9yLnByaW0gOiBjb2xvci5saWdodH07XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgYXtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAke2ZvbnQudGl0bGV9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogJHtoZWFkZXIgPyAnMXJlbScgOiAnMnJlbSd9O1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgcHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbntcbiAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4ICR7aGVhZGVyID8gY29sb3IucHJpbSA6IGNvbG9yLmxpZ2h0fTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8L2E+XG4gICAgPC9MaW5rPlxuICApXG59XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgYmFycyA9IDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGQ9XCJNMTYgMTMyaDQxNmM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2Vjc2YzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZDNy4xNjMgNjAgMCA2Ny4xNjMgMCA3NnY0MGMwIDguODM3IDcuMTYzIDE2IDE2IDE2em0wIDE2MGg0MTZjOC44MzcgMCAxNi03LjE2MyAxNi0xNnYtNDBjMC04LjgzNy03LjE2My0xNi0xNi0xNkgxNmMtOC44MzcgMC0xNiA3LjE2My0xNiAxNnY0MGMwIDguODM3IDcuMTYzIDE2IDE2IDE2em0wIDE2MGg0MTZjOC44MzcgMCAxNi03LjE2MyAxNi0xNnYtNDBjMC04LjgzNy03LjE2My0xNi0xNi0xNkgxNmMtOC44MzcgMC0xNiA3LjE2My0xNiAxNnY0MGMwIDguODM3IDcuMTYzIDE2IDE2IDE2elwiLz48L3N2Zz5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbaGVhZGVyLCBzZXRIZWFkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgaWYod2luZG93LnNjcm9sbFkgPiAxMCl7XG4gICAgICBzZXRIZWFkZXIodHJ1ZSk7XG4gICAgfVxuICB9KVxuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICAgICAgaWYod2luZG93LnNjcm9sbFkgPiAxMCl7XG4gICAgICAgIHNldEhlYWRlcih0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEhlYWRlcihmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9LFtdKTtcbiAgcmV0dXJuKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYW5pbWF0ZWQgZmFkZUluXCI+XG4gICAgICA8TG9nbyBoZWFkZXI9e2hlYWRlcn0gLz5cbiAgICAgIDxidXR0b24gIG9uQ2xpY2s9eygpPT4gZGlzcGF0Y2goeyB0eXBlOiBPTl9NQUlOX05BViB9KX0+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCYXJzfSAvPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGhlYWRlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2hlYWRlciA/ICcjZmZmJyA6ICd0cmFuc3BhcmVudCd9O1xuICAgICAgICAgIHBhZGRpbmc6IC44JTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB6LWluZGV4OiAxNTA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDI1MG1zIGxpbmVhcjtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAxNXB4IHJnYmEoMCwgMCwgMCwgLjMpO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICB3aWR0aDogJHtoZWFkZXIgPyAnMzVweCcgOiAnNDVweCd9O1xuICAgICAgICAgIGhlaWdodDogJHtoZWFkZXIgPyAnMzVweCcgOiAnNDVweCd9O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogJHtoZWFkZXIgPyBjb2xvci5wcmltIDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgLjcpJ307XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXJ7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/header.jsx */"))));
};

var Header = function Header() {
  var bars = __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("path", {
    d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["564613824", [header ? '#fff' : 'transparent', header ? '35px' : '45px', header ? '35px' : '45px', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : 'rgba(255, 255, 255, .7)']]]) + " " + "animated fadeIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(Logo, {
    header: header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_MAIN_NAV"]
      });
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["564613824", [header ? '#fff' : 'transparent', header ? '35px' : '45px', header ? '35px' : '45px', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : 'rgba(255, 255, 255, .7)']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBars"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "564613824",
    dynamic: [header ? '#fff' : 'transparent', header ? '35px' : '45px', header ? '35px' : '45px', header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : 'rgba(255, 255, 255, .7)'],
    __self: this
  }, "header.__jsx-style-dynamic-selector{background:".concat(header ? '#fff' : 'transparent', ";padding:.8%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:fixed;top:0;left:0;width:100%;z-index:150;-webkit-transition:height 250ms linear;transition:height 250ms linear;box-shadow:0 2px 15px rgba(0,0,0,.3);}button.__jsx-style-dynamic-selector{background:transparent;width:").concat(header ? '35px' : '45px', ";height:").concat(header ? '35px' : '45px', ";border:none;color:").concat(header ? _layout_main__WEBPACK_IMPORTED_MODULE_4__["color"].prim : 'rgba(255, 255, 255, .7)', ";-webkit-transition:250ms ease;transition:250ms ease;}button.__jsx-style-dynamic-selector:focus{outline:none;}button.__jsx-style-dynamic-selector:hover{color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbWFpbi9oZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFa0IsQUFHbUQsQUFjakIsQUFRVixBQUdGLFdBQ2IsRUFIQSxVQVJxQyxpQkFkdkIsWUFDQyxNQWN1QixvQ0FDeEIsWUFDdUIsb0JBZkwsZUFnQlIsb0RBQ3hCLGdEQWhCcUIsNkZBQ0osZUFDVCxNQUNDLE9BQ0ksV0FDQyxZQUNtQixzRUFDUyxxQ0FDMUMiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9tYWluL2hlYWRlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IE9OX01BSU5fTkFWIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBjb2xvciwgZm9udCB9IGZyb20gJy4uLy4uL2xheW91dC9tYWluJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFCYXJzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxuXG5jb25zdCBMb2dvID0gKHsgaGVhZGVyIH0pID0+IHtcbiAgcmV0dXJuKFxuICAgIDxMaW5rIGhyZWY9XCIvbWFpblwiPlxuICAgICAgPGEgaHJlZj1cIlwiIHRpdGxlPVwiSW5pY2lvXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9sb2dvMi5wbmdcIiBhbHQ9XCJcIi8+XG4gICAgICAgIDxwPkdSRUVOPC9wPlxuICAgICAgICA8c3Bhbj5MSU5LPC9zcGFuPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBhLCBhOmhvdmVye1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogJHtoZWFkZXIgPyBjb2xvci5wcmltIDogY29sb3IubGlnaHR9O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIGF7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmb250LWZhbWlseTogJHtmb250LnRpdGxlfTtcbiAgICAgICAgICBmb250LXNpemU6ICR7aGVhZGVyID8gJzFyZW0nIDogJzJyZW0nfTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCAke2hlYWRlciA/IGNvbG9yLnByaW0gOiBjb2xvci5saWdodH07XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPC9hPlxuICAgIDwvTGluaz5cbiAgKVxufVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGJhcnMgPSA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBkPVwiTTE2IDEzMmg0MTZjOC44MzcgMCAxNi03LjE2MyAxNi0xNlY3NmMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE2QzcuMTYzIDYwIDAgNjcuMTYzIDAgNzZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnptMCAxNjBoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwYzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnptMCAxNjBoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwYzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnpcIi8+PC9zdmc+XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIGlmKHdpbmRvdy5zY3JvbGxZID4gMTApe1xuICAgICAgc2V0SGVhZGVyKHRydWUpO1xuICAgIH1cbiAgfSlcbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIHdpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGlmKHdpbmRvdy5zY3JvbGxZID4gMTApe1xuICAgICAgICBzZXRIZWFkZXIodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRIZWFkZXIoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSxbXSk7XG4gIHJldHVybihcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImFuaW1hdGVkIGZhZGVJblwiPlxuICAgICAgPExvZ28gaGVhZGVyPXtoZWFkZXJ9IC8+XG4gICAgICA8YnV0dG9uICBvbkNsaWNrPXsoKT0+IGRpc3BhdGNoKHsgdHlwZTogT05fTUFJTl9OQVYgfSl9PlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmFyc30gLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtoZWFkZXIgPyAnI2ZmZicgOiAndHJhbnNwYXJlbnQnfTtcbiAgICAgICAgICBwYWRkaW5nOiAuOCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgei1pbmRleDogMTUwO1xuICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAyNTBtcyBsaW5lYXI7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggMTVweCByZ2JhKDAsIDAsIDAsIC4zKTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b257XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgd2lkdGg6ICR7aGVhZGVyID8gJzM1cHgnIDogJzQ1cHgnfTtcbiAgICAgICAgICBoZWlnaHQ6ICR7aGVhZGVyID8gJzM1cHgnIDogJzQ1cHgnfTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICR7aGVhZGVyID8gY29sb3IucHJpbSA6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIC43KSd9O1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/main/header.jsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.abd1e5b103f54e6e6532.hot-update.js.map
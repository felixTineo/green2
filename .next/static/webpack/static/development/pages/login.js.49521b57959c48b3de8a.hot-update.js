webpackHotUpdate("static/development/pages/login.js",{

/***/ "./components/layout/header.jsx":
/*!**************************************!*\
  !*** ./components/layout/header.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo */ "./components/layout/logo.jsx");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.scss */ "./components/layout/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_12__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;












var DownBar = function DownBar() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      down = _useState[0],
      setDown = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.onscroll = function () {
      if (window.scrollY > 30) {
        setDown(true);
      } else {
        setDown(false);
      }
    };
  }, []);
  console.log(down);
  return __jsx("div", {
    className: "down_bar",
    style: {
      height: down ? 40 : 0
    }
  });
};

var SearchBar = function SearchBar() {
  var testList = ["felix", "luis", "maximiliano", "francisco", 'teresa', 'yleana'];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      suggest = _useState2[0],
      setSuggest = _useState2[1];

  var onSuggest = function onSuggest(e) {
    var value = e.target.value;

    if (value) {
      value.toLocaleLowerCase();

      var _suggest = testList.filter(function (name) {
        return name.toLocaleLowerCase().indexOf(value) > -1;
      });

      setSuggest(_suggest);
    } else {
      setSuggest([]);
    }
  };

  return __jsx("div", {
    className: "searchbar_main_cont"
  }, __jsx("div", {
    className: "search_cont"
  }, __jsx("input", {
    onChange: onSuggest,
    type: "text"
  }), __jsx("p", null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSearch"]
  }))), __jsx("ul", {
    style: {
      padding: suggest.length > 0 ? '.2rem' : '0'
    },
    className: "sugesstlist"
  }, suggest.map(function (item) {
    return __jsx("li", null, item);
  })));
};

var Login = function Login() {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      mail = _useState3[0],
      setMail = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      pass = _useState4[0],
      setPass = _useState4[1];

  var onSubmit =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var data, res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              data = {
                mail: mail,
                pass: pass
              };
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post('/user/login', data);

            case 4:
              res = _context.sent;
              console.log(res.data);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function onSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    className: "navlogin_main_cont"
  }, __jsx("form", {
    onSubmit: onSubmit
  }, __jsx("label", {
    htmlFor: "mail"
  }, "usuario:", __jsx("input", {
    id: "mail",
    name: "mail",
    value: mail,
    onChange: function onChange(e) {
      return setMail(e.currentTarget.value);
    },
    type: "text"
  })), __jsx("label", {
    htmlFor: "pass"
  }, "contrase\xF1a:", __jsx("input", {
    id: "pass",
    name: "pass",
    value: pass,
    onChange: function onChange(e) {
      return setPass(e.currentTarget.value);
    },
    type: "password"
  })), __jsx("button", {
    className: "btn_login",
    type: "submit"
  }, "login")));
};

var Gift = function Gift() {
  var gifts = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.nav.notifications.gifts;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  var onView = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_8__["ON_VIEW_NAV"],
      note: _store_actions__WEBPACK_IMPORTED_MODULE_8__["navView"].GIFT
    });
  });
  return __jsx("div", {
    className: "btnicon_cont"
  }, __jsx("button", {
    id: "gift",
    onClick: onView,
    style: gifts.view && gifts.length > 0 ? {
      background: "#fff",
      color: "#ff6c1a"
    } : {
      background: "transparent",
      color: "#fff"
    },
    className: "btnicon_nav"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faGift"]
  })), __jsx("span", {
    style: gifts.view && gifts.length > 0 ? {
      color: "#ff6c1a"
    } : {
      color: "#fff"
    }
  }, "+", gifts.items.length));
};

var Note = function Note() {
  var notes = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.nav.notifications.notes;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  var onView = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_8__["ON_VIEW_NAV"],
      note: _store_actions__WEBPACK_IMPORTED_MODULE_8__["navView"].NOTES
    });
  });

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      pop = _useState5[0],
      setPop = _useState5[1];

  var handleView = function handleView() {
    onView();
    setPop(!pop);
  };

  var handleViewOut = function handleViewOut() {
    setPop(false);
  };

  return __jsx("div", {
    className: "btnicon_cont"
  }, __jsx("button", {
    id: "note",
    onClick: handleView,
    style: notes.view && notes.length > 0 ? {
      background: "#fff",
      color: "#ff6c1a"
    } : {
      background: "transparent",
      color: "#fff"
    },
    className: "btnicon_nav"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faBell"]
  })), __jsx("span", {
    style: notes.view && notes.length > 0 ? {
      color: "#ff6c1a"
    } : {
      color: "#fff"
    }
  }, "+", notes.items.length), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Popover"], {
    target: "note",
    isOpen: pop,
    placement: "bottom"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["PopoverBody"], null, __jsx("ul", {
    onClick: handleViewOut
  }, notes.items.map(function (item) {
    return __jsx("li", {
      key: uuid_v1__WEBPACK_IMPORTED_MODULE_12___default()()
    }, item.id);
  })))));
};

var Friend = function Friend() {
  var friend = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.nav.notifications.friendReq;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  var onView = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_8__["ON_VIEW_NAV"],
      note: _store_actions__WEBPACK_IMPORTED_MODULE_8__["navView"].FRIEND
    });
  });

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      pop = _useState6[0],
      setPop = _useState6[1];

  var handleView = function handleView() {
    onView();
    setPop(!pop);
  };

  var handleViewOut = function handleViewOut() {
    setPop(false);
  };

  return __jsx("div", {
    className: "btnicon_cont"
  }, __jsx("button", {
    id: "friend",
    onClick: handleView,
    style: friend.view && friend.length > 0 ? {
      background: "#fff",
      color: "#ff6c1a"
    } : {
      background: "transparent",
      color: "#fff"
    },
    className: "btnicon_nav"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faUser"]
  })), __jsx("span", {
    style: friend.view && friend.length > 0 ? {
      color: "#ff6c1a"
    } : {
      color: "#fff"
    }
  }, "+", friend.items.length), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Popover"], {
    target: "friend",
    isOpen: pop,
    placement: "bottom"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["PopoverBody"], null, __jsx("ul", {
    onMouseLeave: handleViewOut
  }, friend.items.map(function (item) {
    return __jsx("li", {
      key: uuid_v1__WEBPACK_IMPORTED_MODULE_12___default()()
    }, item.id);
  })))));
};

var Option = function Option() {
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      pop = _useState7[0],
      setPop = _useState7[1];

  return __jsx("div", {
    className: "btnicon_cont"
  }, __jsx("button", {
    id: "option",
    onClick: function onClick() {
      return setPop(!pop);
    },
    className: "btnicon_nav"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCog"]
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Popover"], {
    target: "option",
    isOpen: pop,
    placement: "bottom"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["PopoverBody"], {
    style: {
      padding: 0
    }
  }, __jsx("ul", {
    className: "option_list",
    onMouseLeave: function onMouseLeave() {
      return setPop(false);
    }
  }, __jsx("li", null, __jsx("button", null, "perfil")), __jsx("li", null, __jsx("button", null, "salir"))))));
};

var Wallet = function Wallet() {
  var wallet = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.nav.wallet;
  });
  return __jsx("div", {
    className: "btnicon_cont"
  }, __jsx("p", {
    className: "wallet_cont"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCoins"]
  })), __jsx("span", {
    style: {
      fontSize: 16
    }
  }, "+", wallet));
};

var Notifications = function Notifications() {
  return __jsx("ul", {
    className: "notifications_main_cont"
  }, __jsx("li", null, __jsx(Gift, null)), __jsx("li", null, __jsx(Note, null)), __jsx("li", null, __jsx(Friend, null)), __jsx("li", null, __jsx(Option, null)), __jsx("li", null, __jsx(Wallet, null)));
};

var BarLoader = function BarLoader() {
  var loader = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.nav.loader;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  var onLoader = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (loader) {
    return dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_8__["ON_LOADER"],
      loader: loader
    });
  });
  return __jsx("div", {
    className: "barloader",
    style: {
      width: "".concat(loader, "%")
    }
  });
};

var Header = function Header() {
  var nav = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.nav;
  });

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      width = _useState8[0],
      setWidth = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setWidth(window.innerWidth);
  }, []);
  return __jsx("header", {
    className: "header_main_cont"
  }, __jsx(BarLoader, null), __jsx("nav", null, __jsx(DownBar, null), __jsx("div", {
    className: "logo_search"
  }, __jsx(_logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: "/"
  }), nav.login && width > 992 && __jsx(SearchBar, null)), !nav.login && __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/login"
  }, __jsx("button", {
    className: "btn_login"
  }, "login")), nav.login && __jsx(Notifications, null)), width < 576 && __jsx(SearchBar, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=login.js.49521b57959c48b3de8a.hot-update.js.map
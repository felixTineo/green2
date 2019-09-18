webpackHotUpdate("static/development/pages/login.js",{

/***/ "./pages/login.jsx":
/*!*************************!*\
  !*** ./pages/login.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _login_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.scss */ "./pages/login.scss");
/* harmony import */ var _login_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_login_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/layout */ "./components/layout/layout.jsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _components_layout_logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout/logo */ "./components/layout/logo.jsx");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../store/actions */ "./store/actions.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;












var LoginForm = function LoginForm(_ref) {
  var setLogin = _ref.setLogin;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      mail = _useState[0],
      setMail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      pass = _useState2[0],
      setPass = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      popMail = _useState3[0],
      setPopMail = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      popPass = _useState4[0],
      setPopPass = _useState4[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"])();

  var onSubmit =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var count, interval, data, res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              e.preventDefault();
              count = 0;
              interval = setInterval(function () {
                count = count + 25;
                dispatch({
                  type: _store_actions__WEBPACK_IMPORTED_MODULE_12__["ON_LOADER"],
                  loader: count
                });
              }, 1000);
              data = {
                mail: mail,
                pass: pass
              };
              _context.next = 7;
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.post('/user/login', data);

            case 7:
              res = _context.sent;
              clearInterval(interval);

              if (!(res.data === 'mail')) {
                _context.next = 12;
                break;
              }

              dispatch({
                type: _store_actions__WEBPACK_IMPORTED_MODULE_12__["ON_LOADER"],
                loader: 0
              });
              return _context.abrupt("return", setPopMail(true));

            case 12:
              if (!(res.data === 'pass')) {
                _context.next = 15;
                break;
              }

              dispatch({
                type: _store_actions__WEBPACK_IMPORTED_MODULE_12__["ON_LOADER"],
                loader: 0
              });
              return _context.abrupt("return", setPopPass(true));

            case 15:
              dispatch({
                type: _store_actions__WEBPACK_IMPORTED_MODULE_12__["ON_LOADER"],
                loader: 100
              });
              _context.next = 21;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 18]]);
    }));

    return function onSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    className: "login_register_cont animated fadeIn"
  }, __jsx("header", null, __jsx("h1", null, "Inicio de sessi\xF3n")), __jsx("form", {
    onSubmit: onSubmit
  }, __jsx("label", {
    htmlFor: "mail"
  }, __jsx("p", null, "usuario"), __jsx("input", {
    onFocus: function onFocus() {
      return setPopMail(false);
    },
    id: "mail",
    value: mail,
    onChange: function onChange(e) {
      return setMail(e.currentTarget.value);
    },
    type: "text"
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Popover"], {
    isOpen: popMail,
    target: "mail",
    placement: "bottom"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["PopoverBody"], null, __jsx("span", null, "El correo no es correcto, por favor verifiquelo e intentelo de nuevo")))), __jsx("label", {
    htmlFor: "pass"
  }, __jsx("p", null, "contrase\xF1a"), __jsx("input", {
    onFocus: function onFocus() {
      return setPopPass(false);
    },
    id: "pass",
    value: pass,
    onChange: function onChange(e) {
      return setPass(e.currentTarget.value);
    },
    type: "password"
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Popover"], {
    isOpen: popPass,
    target: "pass",
    placement: "bottom"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["PopoverBody"], null, __jsx("span", null, "El correo no es correcto, por favor verifiquelo e intentelo de nuevo")))), __jsx("footer", {
    className: "login_register_cont"
  }, __jsx("button", {
    onClick: function onClick() {
      return setLogin(false);
    },
    className: "btn_loogin_register btn_inactive",
    type: "button"
  }, "registro"), __jsx("button", {
    className: "btn_loogin_register btn_active",
    type: "submit"
  }, "login"))));
};

var RegisterForm = function RegisterForm(_ref3) {
  var setLogin = _ref3.setLogin;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(function (state, newState) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, newState);
  }, {
    name: '',
    lastName: '',
    mail: '',
    pass: '',
    birthday: '',
    sex: ''
  }),
      values = _useReducer[0],
      setValues = _useReducer[1];

  return __jsx("div", {
    className: "register_login_cont animated fadeIn"
  }, __jsx("header", null, __jsx("h1", null, "registro"), __jsx("p", null, "Gratis, facil y rapido")), __jsx("form", {
    action: ""
  }, __jsx("div", {
    className: "fullName"
  }, __jsx("input", {
    id: "name",
    type: "text",
    placeholder: "Nombre",
    value: values.name,
    onChange: function onChange(e) {
      return setValues({
        name: e.currentTarget.value
      });
    }
  }), __jsx("input", {
    style: {
      marginLeft: ".5rem"
    },
    id: "lastName",
    type: "text",
    placeholder: "Apellido",
    value: values.lastName,
    onChange: function onChange(e) {
      return setValues({
        lastName: e.currentTarget.value
      });
    }
  })), __jsx("input", {
    id: "mail",
    type: "text",
    placeholder: "Correo electr\xF3nico",
    value: values.mail,
    onChange: function onChange(e) {
      return setValues({
        mail: e.currentTarget.value
      });
    }
  }), __jsx("input", {
    id: "pass",
    type: "password",
    placeholder: "Contrase\xF1a",
    value: values.pass,
    onChange: function onChange(e) {
      return setValues({
        pass: e.currentTarget.value
      });
    }
  }), __jsx("div", {
    className: "birth_sex_main"
  }, __jsx("div", {
    className: "birthday_sex"
  }, __jsx("p", null, "Cumplea\xF1os"), __jsx("input", {
    id: "birthday",
    type: "date",
    placeholder: "Correo electr\xF3nico",
    value: values.birthday,
    onChange: function onChange(e) {
      return setValues({
        birthday: e.currentTarget.value
      });
    }
  })), __jsx("div", {
    className: "birthday_sex",
    style: {
      marginLeft: '1rem'
    }
  }, __jsx("p", null, "Sexo"), __jsx("select", {
    onChange: function onChange(e) {
      return setValues({
        sex: e.currentTarget.value
      });
    },
    name: "sex",
    id: "sex"
  }, __jsx("option", {
    value: "female"
  }, "Mujer"), __jsx("option", {
    value: "male"
  }, "Hombre"), __jsx("option", {
    value: "otro"
  }, "Otro")))), __jsx("footer", {
    className: "login_register_cont"
  }, __jsx("button", {
    className: "btn_loogin_register btn_active",
    type: "submit"
  }, "registro"), __jsx("button", {
    onClick: function onClick() {
      return setLogin(true);
    },
    className: "btn_loogin_register btn_inactive",
    type: "button"
  }, "login"))));
};

var Login = function Login() {
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      login = _useState5[0],
      setLogin = _useState5[1];

  return __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, __jsx("div", {
    className: "login_main_cont"
  }, __jsx("div", {
    className: "login_cont shadow"
  }, __jsx("div", {
    className: "green_cont"
  }, __jsx("header", null, __jsx(_components_layout_logo__WEBPACK_IMPORTED_MODULE_8__["default"], {
    url: "/"
  })), __jsx("div", {
    className: "green_logo"
  }, __jsx("h1", null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGift"]
  })), __jsx("p", null, "Comparte, disfruta... Ayuda el planeta"), __jsx("button", {
    type: "button"
  }, "\xBFquieres saber mas?")), __jsx("small", null, "Comparte con los seres que amas y ayuda a el planeta.")), login && __jsx(LoginForm, {
    setLogin: setLogin
  }), !login && __jsx(RegisterForm, {
    setLogin: setLogin
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.75f5c47ac4bb733518b6.hot-update.js.map
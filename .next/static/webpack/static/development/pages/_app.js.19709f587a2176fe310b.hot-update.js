webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/reducers.js":
/*!***************************!*\
  !*** ./store/reducers.js ***!
  \***************************/
/*! exports provided: initialState, store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./store/actions.js");



var initialState = {
  nav: {
    loader: 0,
    login: false,
    down: false,
    wallet: 0,
    notifications: {
      id: '',
      notes: {
        view: false,
        items: []
      },
      gifts: {
        view: false,
        items: []
      },
      friendReq: {
        view: false,
        items: []
      }
    }
  },
  user: {
    id: '',
    owner: false,
    mail: '',
    pass: '',
    name: '',
    lastName: '',
    birthday: '',
    greenPost: {
      likes: [],
      comments: [],
      wish: {}
    },
    perfilImg: '',
    originCity: '',
    actualCity: '',
    primaryShool: '',
    secondarySchoool: '',
    university: '',
    job: '',
    posts: [{
      green: true,
      img: '',
      date: '',
      author: '',
      _id: '',
      history: '',
      comments: [],
      likes: [],
      wish: {
        id: '123456789',
        name: 'Oreo',
        img: '/static/store/products/gol-1.jpg',
        tag: 'gol',
        price: 100,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }
    }],
    interest: [],
    events: [],
    friends: []
  },
  greenpost: {
    info: false,
    creator: false
  },
  store: {
    visible: true,
    current: {},
    home: false,
    product: false,
    music: true,
    ebook: false,
    toy: false,
    tv: false,
    jewel: false,
    candy: false,
    items: []
  }
};

var nav = function nav() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.nav;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_2__["ON_DOWN"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        down: action.option
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["ON_NOTIFICATIONS"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        notifications: action.notifications
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["ON_LOADER"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        loader: action.loader
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["ON_LOGIN"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        login: action.option
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["ON_VIEW_NAV"]:
      if (action.note === _actions__WEBPACK_IMPORTED_MODULE_2__["navView"].GIFT) {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
          notifications: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.notifications, {
            gifts: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.notifications.gifts, {
              view: true
            })
          })
        });
      }

      if (action.note === _actions__WEBPACK_IMPORTED_MODULE_2__["navView"].NOTES) {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
          notifications: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.notifications, {
            notes: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.notifications.notes, {
              view: true
            })
          })
        });
      }

      if (action.note === _actions__WEBPACK_IMPORTED_MODULE_2__["navView"].FRIEND) {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
          notifications: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.notifications, {
            friendReq: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.notifications.friendReq, {
              view: true
            })
          })
        });
      }

    case _actions__WEBPACK_IMPORTED_MODULE_2__["ON_NOTE"]:
      if (action.payload.note === _actions__WEBPACK_IMPORTED_MODULE_2__["navView"].GIFT) {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
          notifications: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.notifications, {
            gifts: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.notifications.gifts, {
              view: false,
              items: action.payload.items
            })
          })
        });
      }

      if (action.payload.note === _actions__WEBPACK_IMPORTED_MODULE_2__["navView"].NOTES) {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
          notifications: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.notifications, {
            notes: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.notifications.notes, {
              view: false,
              items: action.payload.items
            })
          })
        });
      }

      if (action.payload.note === _actions__WEBPACK_IMPORTED_MODULE_2__["navView"].FRIEND) {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
          notifications: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.notifications, {
            friendReq: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.notifications.friendReq, {
              view: false,
              items: action.payload.items
            })
          })
        });
      }

    default:
      return state;
  }
};

var user = function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.user;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_2__["ON_USER"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, action.user);

    default:
      return state;
  }
};

var greenpost = function greenpost() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.greenpost;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_2__["ON_GREENINFO"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        info: !state.info
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["ON_GREEN_CREATOR"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        creator: !state.creator
      });

    default:
      return state;
  }
};

var greenstore = function greenstore() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.store;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var HOME = _actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].HOME,
      PRODUCT = _actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].PRODUCT,
      MUSIC = _actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].MUSIC,
      TV = _actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].TV,
      EBOOK = _actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].EBOOK,
      CANDY = _actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].CANDY,
      TOY = _actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].TOY,
      JEWEL = _actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].JEWEL;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_2__["ON_STORE"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        visible: !state.visible,
        home: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["ON_PRODUCTS"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        items: action.products
      });

    case PRODUCT:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        current: action.product,
        product: true,
        home: false,
        jewel: false,
        ebook: false,
        music: false,
        toy: false,
        tv: false,
        candy: false
      });

    case HOME:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        product: false,
        home: true,
        jewel: false,
        ebook: false,
        music: false,
        toy: false,
        tv: false,
        candy: false
      });

    case MUSIC:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        product: false,
        home: false,
        jewel: false,
        ebook: false,
        music: true,
        toy: false,
        tv: false,
        candy: false
      });

    case TV:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        product: false,
        home: false,
        jewel: false,
        ebook: false,
        music: false,
        toy: false,
        tv: true,
        candy: false
      });

    case JEWEL:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        product: false,
        home: false,
        jewel: true,
        ebook: false,
        music: false,
        toy: false,
        tv: false,
        candy: false
      });

    case TOY:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        product: false,
        home: false,
        jewel: false,
        ebook: false,
        music: false,
        toy: true,
        tv: false,
        candy: false
      });

    case CANDY:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        product: false,
        home: false,
        jewel: false,
        ebook: false,
        music: false,
        toy: false,
        tv: false,
        candy: true
      });

    case EBOOK:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        product: false,
        home: false,
        jewel: false,
        ebook: true,
        music: false,
        toy: false,
        tv: false,
        candy: false
      });

    default:
      return state;
  }
};

var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  nav: nav,
  user: user,
  greenpost: greenpost,
  greenstore: greenstore
});

/***/ })

})
//# sourceMappingURL=_app.js.19709f587a2176fe310b.hot-update.js.map
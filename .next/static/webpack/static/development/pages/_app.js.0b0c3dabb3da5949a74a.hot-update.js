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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./store/actions.js");





var initialState = {
  nav: {
    loader: 0,
    login: false,
    down: false,
    wallet: 0,
    notifications: {
      id: '',
      wallet: 0,
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
    greenPost: [{
      _id: ''
    }],
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
    _id: '',
    info: false,
    creator: false,
    current: {
      likes: [],
      comments: [],
      wish: {}
    }
  },
  store: {
    visible: false,
    current: {},
    home: false,
    product: false,
    music: false,
    ebook: false,
    toy: false,
    tv: false,
    jewel: false,
    candy: false,
    items: []
  },
  vault: {
    visible: false,
    home: true,
    product: false,
    current: {},
    items: []
  },
  postregister: false,
  floatingnotes: [],
  space: {
    home: true,
    wall: false,
    chat: false,
    friends: false,
    envents: false
  },
  wall: {
    top: [],
    posts: []
  }
};

var nav = function nav() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.nav;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_DOWN"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
        down: action.option
      });

    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_NOTIFICATIONS"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
        notifications: action.notifications
      });

    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_LOADER"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
        loader: action.loader
      });

    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_LOGIN"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
        login: action.option
      });

    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_WALLET"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
        notifications: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state.notifications, {
          wallet: state.notifications.wallet + action.coin
        })
      });

    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_VIEW_NAV"]:
      if (action.note === _actions__WEBPACK_IMPORTED_MODULE_4__["navView"].GIFT) {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
          notifications: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state.notifications, {
            gifts: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state.notifications.gifts, {
              view: true
            })
          })
        });
      }

      if (action.note === _actions__WEBPACK_IMPORTED_MODULE_4__["navView"].NOTES) {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
          notifications: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state.notifications, {
            notes: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state.notifications.notes, {
              view: true
            })
          })
        });
      }

      if (action.note === _actions__WEBPACK_IMPORTED_MODULE_4__["navView"].FRIEND) {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
          notifications: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state.notifications, {
            friendReq: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state.notifications.friendReq, {
              view: true
            })
          })
        });
      }

    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_NOTE"]:
      var _state$notifications = state.notifications,
          gifts = _state$notifications.gifts,
          notes = _state$notifications.notes,
          friendReq = _state$notifications.friendReq;

      if (action.payload.note === _actions__WEBPACK_IMPORTED_MODULE_4__["navView"].GIFT) {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
          notifications: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state.notifications, {
            gifts: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state.notifications.gifts, {
              view: false,
              items: [action.payload.user].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(gifts.items))
            })
          })
        });
      }

      if (action.payload.note === _actions__WEBPACK_IMPORTED_MODULE_4__["navView"].NOTES) {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
          notifications: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state.notifications, {
            notes: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state.notifications.notes, {
              view: false,
              items: [action.payload.user].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(notes.items))
            })
          })
        });
      }

      if (action.payload.note === _actions__WEBPACK_IMPORTED_MODULE_4__["navView"].FRIEND) {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
          notifications: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state.notifications, {
            friendReq: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state.notifications.friendReq, {
              view: false,
              items: [action.payload.user].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(friendReq.items))
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
    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_USER"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, action.user);

    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_UPDATE"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.payload));

    default:
      return state;
  }
};

var greenpost = function greenpost() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.greenpost;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_GREENINFO"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
        info: action.option
      });

    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_GREEN_CREATOR"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
        creator: !state.creator
      });

    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_GREENPOST"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
        current: action.greenpost
      });

    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_GREEN_LIKE"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
        current: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state.current, {
          likes: [action.like].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.current.likes))
        })
      });

    case _actions__WEBPACK_IMPORTED_MODULE_4__["OFF_GREEN_LIKE"]:
      var nextState = state.current.likes.filter(function (like) {
        return like._id !== action.uid;
      });
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
        current: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state.current, {
          likes: nextState
        })
      });

    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_GREEN_WISH_FOUND"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
        current: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state.current, {
          wish: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state.current.wish, {
            found: state.current.wish.found + action.found
          })
        })
      });

    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_GREEN_COMMENT"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
        current: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state.current, {
          comments: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.current.comments), [action.comment])
        })
      });

    default:
      return state;
  }
};

var greenstore = function greenstore() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.store;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var HOME = _actions__WEBPACK_IMPORTED_MODULE_4__["storeSections"].HOME,
      PRODUCT = _actions__WEBPACK_IMPORTED_MODULE_4__["storeSections"].PRODUCT,
      MUSIC = _actions__WEBPACK_IMPORTED_MODULE_4__["storeSections"].MUSIC,
      TV = _actions__WEBPACK_IMPORTED_MODULE_4__["storeSections"].TV,
      EBOOK = _actions__WEBPACK_IMPORTED_MODULE_4__["storeSections"].EBOOK,
      CANDY = _actions__WEBPACK_IMPORTED_MODULE_4__["storeSections"].CANDY,
      TOY = _actions__WEBPACK_IMPORTED_MODULE_4__["storeSections"].TOY,
      JEWEL = _actions__WEBPACK_IMPORTED_MODULE_4__["storeSections"].JEWEL;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_STORE"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
        visible: !state.visible,
        home: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_PRODUCTS"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
        items: action.products
      });

    case PRODUCT:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
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
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
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
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
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
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
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
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
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
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
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
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
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
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
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

var postregister = function postregister() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.postregister;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_4__["ON_POST_REGISTER"]) {
    return !state;
  }

  return state;
};

var floatingnotes = function floatingnotes() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.floatingnotes;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_4__["ON_FLOAT"]) {
    return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state), [action.payload]);
  }

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_4__["OFF_FLOAT"]) {
    var nextState = state.filter(function (note) {
      return note.id !== action.id;
    });
    return nextState;
  }

  return state;
};

var vault = function vault() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.vault;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_VAULT"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
        visible: !state.visible
      });

    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_VAULT_HOME"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
        home: true,
        product: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_VAULT_PRODUCT"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
        home: false,
        product: true,
        current: action.product
      });

    default:
      return state;
  }
};

var space = function space() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.space;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_SPACE_HOME"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
        home: true,
        wall: false,
        chat: false,
        friends: false,
        events: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_SPACE_WALL"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
        home: false,
        wall: true,
        chat: false,
        friends: false,
        events: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_SPACE_CHAT"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
        home: false,
        wall: false,
        chat: true,
        friends: false,
        events: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_SPACE_FRIENDS"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
        home: false,
        wall: false,
        chat: false,
        friends: true,
        events: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_SPACE_EVENTS"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
        home: false,
        wall: false,
        chat: false,
        friends: false,
        events: true
      });

    default:
      return state;
  }
};

var wall = function wall() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.wall;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_WALL_TOP"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
        top: action.posts
      });

    case _actions__WEBPACK_IMPORTED_MODULE_4__["ON_WALL_POSTS"]:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
        posts: action.posts
      });

    default:
      return state;
  }
};

var store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
  nav: nav,
  user: user,
  greenpost: greenpost,
  greenstore: greenstore,
  postregister: postregister,
  floatingnotes: floatingnotes,
  vault: vault,
  space: space,
  wall: wall
});

/***/ })

})
//# sourceMappingURL=_app.js.0b0c3dabb3da5949a74a.hot-update.js.map
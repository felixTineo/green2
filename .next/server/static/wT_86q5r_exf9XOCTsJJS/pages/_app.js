module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+oT+":
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__("eVuF");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js + 1 modules
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("UXZV");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./layout/main.js
var main = __webpack_require__("nbCS");

// EXTERNAL MODULE: ./store/actions.js
var actions = __webpack_require__("qzSc");

// CONCATENATED MODULE: ./store/reducers.js




const themes = [main["d" /* themeGreen */], main["e" /* themeRed */], main["c" /* themeBlue */]];

const reducers_initialState = {
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
    postType: '',
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
  },
  confirm: {
    visible: false,
    current: {}
  },
  chat: {
    friends: [],
    privates: [],
    current: ''
  },
  main: {
    nav: {
      visible: false
    },
    theme: 0
  },
  post: {
    visible: false,
    current: {}
  }
};

const nav = (state = reducers_initialState.nav, action) => {
  switch (action.type) {
    case actions["i" /* ON_DOWN */]:
      return assign_default()({}, state, {
        down: action.option
      });

    case actions["v" /* ON_NOTIFICATIONS */]:
      return assign_default()({}, state, {
        notifications: action.notifications
      });

    case actions["q" /* ON_LOADER */]:
      return assign_default()({}, state, {
        loader: action.loader
      });

    case actions["r" /* ON_LOGIN */]:
      return assign_default()({}, state, {
        login: action.option
      });

    case actions["M" /* ON_WALLET */]:
      return assign_default()({}, state, {
        notifications: assign_default()({}, state.notifications, {
          wallet: state.notifications.wallet + action.coin
        })
      });

    case actions["L" /* ON_VIEW_NAV */]:
      if (action.note === actions["Q" /* navView */].GIFT) {
        return assign_default()({}, state, {
          notifications: assign_default()({}, state.notifications, {
            gifts: assign_default()({}, state.notifications.gifts, {
              view: true
            })
          })
        });
      }

      if (action.note === actions["Q" /* navView */].NOTES) {
        return assign_default()({}, state, {
          notifications: assign_default()({}, state.notifications, {
            notes: assign_default()({}, state.notifications.notes, {
              view: true
            })
          })
        });
      }

      if (action.note === actions["Q" /* navView */].FRIEND) {
        return assign_default()({}, state, {
          notifications: assign_default()({}, state.notifications, {
            friendReq: assign_default()({}, state.notifications.friendReq, {
              view: true
            })
          })
        });
      }

    case actions["u" /* ON_NOTE */]:
      const {
        gifts,
        notes,
        friendReq
      } = state.notifications;

      if (action.payload.note === actions["Q" /* navView */].GIFT) {
        return assign_default()({}, state, {
          notifications: assign_default()({}, state.notifications, {
            gifts: assign_default()({}, state.notifications.gifts, {
              view: false,
              items: [action.payload.user, ...gifts.items]
            })
          })
        });
      }

      if (action.payload.note === actions["Q" /* navView */].NOTES) {
        return assign_default()({}, state, {
          notifications: assign_default()({}, state.notifications, {
            notes: assign_default()({}, state.notifications.notes, {
              view: false,
              items: [action.payload.user, ...notes.items]
            })
          })
        });
      }

      if (action.payload.note === actions["Q" /* navView */].FRIEND) {
        return assign_default()({}, state, {
          notifications: assign_default()({}, state.notifications, {
            friendReq: assign_default()({}, state.notifications.friendReq, {
              view: false,
              items: [action.payload.user, ...friendReq.items]
            })
          })
        });
      }

    default:
      return state;
  }
};

const reducers_user = (state = reducers_initialState.user, action) => {
  switch (action.type) {
    case actions["H" /* ON_USER */]:
      return assign_default()({}, state, action.user);

    case actions["G" /* ON_UPDATE */]:
      return assign_default()({}, state, Object(objectSpread["a" /* default */])({}, action.payload));

    default:
      return state;
  }
};

const greenpost = (state = reducers_initialState.greenpost, action) => {
  switch (action.type) {
    case actions["k" /* ON_GREENINFO */]:
      return assign_default()({}, state, {
        info: action.option
      });

    case actions["n" /* ON_GREEN_CREATOR */]:
      return assign_default()({}, state, {
        creator: !state.creator
      });

    case actions["l" /* ON_GREENPOST */]:
      return assign_default()({}, state, {
        current: action.greenpost
      });

    case actions["o" /* ON_GREEN_LIKE */]:
      return assign_default()({}, state, {
        current: assign_default()({}, state.current, {
          likes: [action.like, ...state.current.likes]
        })
      });

    case actions["P" /* ON_WISH */]:
      return assign_default()({}, state, {
        current: assign_default()({}, state.current, {
          wish: action.wish
        })
      });

    case actions["b" /* OFF_GREEN_LIKE */]:
      const nextState = state.current.likes.filter(like => like._id !== action.uid);
      return assign_default()({}, state, {
        current: assign_default()({}, state.current, {
          likes: nextState
        })
      });

    case actions["p" /* ON_GREEN_WISH_FOUND */]:
      return assign_default()({}, state, {
        current: assign_default()({}, state.current, {
          wish: assign_default()({}, state.current.wish, {
            found: state.current.wish.found + action.found
          })
        })
      });

    case actions["m" /* ON_GREEN_COMMENT */]:
      return assign_default()({}, state, {
        current: assign_default()({}, state.current, {
          comments: [...state.current.comments, action.comment]
        })
      });

    default:
      return state;
  }
};

const greenstore = (state = reducers_initialState.store, action) => {
  const {
    HOME,
    PRODUCT,
    MUSIC,
    TV,
    EBOOK,
    CANDY,
    TOY,
    JEWEL
  } = actions["S" /* storeSections */];

  switch (action.type) {
    case actions["F" /* ON_STORE */]:
      return assign_default()({}, state, {
        visible: !state.visible,
        home: true,
        postType: action.payload || ''
      });

    case actions["z" /* ON_PRODUCTS */]:
      return assign_default()({}, state, {
        items: action.products
      });

    case PRODUCT:
      return assign_default()({}, state, {
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
      return assign_default()({}, state, {
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
      return assign_default()({}, state, {
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
      return assign_default()({}, state, {
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
      return assign_default()({}, state, {
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
      return assign_default()({}, state, {
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
      return assign_default()({}, state, {
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
      return assign_default()({}, state, {
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

const postregister = (state = reducers_initialState.postregister, action) => {
  if (action.type === actions["x" /* ON_POST_REGISTER */]) {
    return !state;
  }

  return state;
};

const floatingnotes = (state = reducers_initialState.floatingnotes, action) => {
  if (action.type === actions["j" /* ON_FLOAT */]) {
    return [...state, action.payload];
  }

  if (action.type === actions["a" /* OFF_FLOAT */]) {
    const nextState = state.filter(note => note.id !== action.id);
    return nextState;
  }

  return state;
};

const vault = (state = reducers_initialState.vault, action) => {
  switch (action.type) {
    case actions["I" /* ON_VAULT */]:
      return assign_default()({}, state, {
        visible: !state.visible
      });

    case actions["J" /* ON_VAULT_HOME */]:
      return assign_default()({}, state, {
        home: true,
        product: false
      });

    case actions["K" /* ON_VAULT_PRODUCT */]:
      return assign_default()({}, state, {
        home: false,
        product: true,
        current: action.product
      });

    default:
      return state;
  }
};

const space = (state = reducers_initialState.space, action) => {
  switch (action.type) {
    case actions["D" /* ON_SPACE_HOME */]:
      return assign_default()({}, state, {
        home: true,
        wall: false,
        chat: false,
        friends: false,
        events: false
      });

    case actions["E" /* ON_SPACE_WALL */]:
      return assign_default()({}, state, {
        home: false,
        wall: true,
        chat: false,
        friends: false,
        events: false
      });

    case actions["A" /* ON_SPACE_CHAT */]:
      return assign_default()({}, state, {
        home: false,
        wall: false,
        chat: true,
        friends: false,
        events: false
      });

    case actions["C" /* ON_SPACE_FRIENDS */]:
      return assign_default()({}, state, {
        home: false,
        wall: false,
        chat: false,
        friends: true,
        events: false
      });

    case actions["B" /* ON_SPACE_EVENTS */]:
      return assign_default()({}, state, {
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

const wall = (state = reducers_initialState.wall, action) => {
  switch (action.type) {
    case actions["w" /* ON_POST */]:
      return assign_default()({}, state, {
        posts: [action.post, ...state.posts]
      });

    case actions["O" /* ON_WALL_TOP */]:
      return assign_default()({}, state, {
        top: action.posts
      });

    case actions["N" /* ON_WALL_POSTS */]:
      return assign_default()({}, state, {
        posts: action.posts
      });

    default:
      return state;
  }
};

const reducers_confirm = (state = reducers_initialState.confirm, action) => {
  switch (action.type) {
    case actions["h" /* ON_CONFIRM */]:
      return assign_default()({}, state, {
        visible: !state.visible,
        current: action.current
      });

    default:
      return state;
  }
};

const chat = (state = reducers_initialState.chat, action) => {
  const {
    privates
  } = state;

  switch (action.type) {
    case actions["g" /* ON_CHAT_PRIVATE */]:
      //const nextArr = privates.length === 4 ?  privates.slice(0, 3) : privates;
      return assign_default()({}, state, {
        privates: [action.user, ...privates.slice(3)]
      });

    case actions["d" /* ON_CHAT_CLOSE */]:
      return assign_default()({}, state, {
        privates: privates.filter(user => user._id !== action._id)
      });

    case actions["e" /* ON_CHAT_MINIMIZE */]:
      return assign_default()({}, state, {
        privates: privates.map(user => user._id !== action._id ? user : assign_default()({}, user, {
          minimize: action.option
        }))
      });

    case actions["f" /* ON_CHAT_MSG */]:
      return assign_default()({}, state, {
        privates: privates.map(user => user._id !== action._id ? user : assign_default()({}, user, {
          history: [...user.history, action.msg]
        })),
        current: action._id
      });

    case actions["c" /* ON_CHAT_ALERT */]:
      return assign_default()({}, state, {
        privates: privates.map(user => user._id !== action._id ? user : assign_default()({}, user, {
          anAlert: action.option
        }))
      });

    default:
      return state;
  }
};

const reducers_main = (state = reducers_initialState.main, action) => {
  switch (action.type) {
    case actions["s" /* ON_MAIN_NAV */]:
      const {
        visible
      } = state.nav;
      return assign_default()({}, state, {
        nav: assign_default()({}, state.nav, {
          visible: !visible
        })
      });

    case actions["t" /* ON_MAIN_THEME */]:
      return assign_default()({}, state, {
        theme: action.index
      });

    default:
      return state;
  }
};

const post = (state = reducers_initialState.post, action) => {
  switch (action.type) {
    case actions["y" /* ON_POST_VIEW */]:
      return assign_default()({}, state, {
        current: action.post,
        visible: !state.visible
      });

    default:
      return state;
  }
};

const reducers_store = Object(external_redux_["combineReducers"])({
  nav,
  user: reducers_user,
  greenpost,
  greenstore,
  postregister,
  floatingnotes,
  vault,
  space,
  wall,
  confirm: reducers_confirm,
  chat,
  main: reducers_main,
  post
});
// CONCATENATED MODULE: ./pages/_app.js
var __jsx = external_react_default.a.createElement;








const makeStore = (initialState, options) => {
  return Object(external_redux_["createStore"])(reducers_store, initialState);
};

class _app_Greenlink extends app_default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(external_react_redux_["Provider"], {
      store: store
    }, __jsx(Component, pageProps));
  }

}

;
/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(makeStore)(_app_Greenlink));

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _utils = __webpack_require__("g/15");

exports.AppInitialProps = _utils.AppInitialProps;

var _router = __webpack_require__("nOHt");
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/


function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    let {
      Component,
      ctx
    } = _ref;
    const pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  getChildContext() {
    return {
      router: (0, _router.makePublicRouterInstance)(this.props.router)
    };
  } // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level


  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps
    } = this.props;
    const url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.childContextTypes = {
  router: _propTypes.default.object
};
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "P5f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__("SqZg");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__("eVuF");

var _Object$assign = __webpack_require__("UXZV");

var _Object$defineProperty = __webpack_require__("hfKm");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const rewrite_url_for_export_1 = __webpack_require__("P5f7");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const is_dynamic_1 = __webpack_require__("/jkW");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (false) {} // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "production" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const url = ctx.asPath ? ctx.asPath : url_1.format({
        pathname: ctx.pathname,
        query: ctx.query
      });
      props = await fetch(url, {
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).then(pageProps => {
        return {
          pageProps
        };
      }).catch(err => {
        return {
          error: err.message,
          status
        };
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "nbCS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return color; });
/* unused harmony export greenGradient */
/* unused harmony export greenBackground */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return font; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return themeGreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return themeRed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return themeBlue; });
const color = {
  prim: '#8bb940',
  sec: '#669f09',
  light: '#ffffff',
  dark: '#333333',
  gray: '#f4f7f6'
};
const greenGradient = () => `linear-gradient(135deg, ${color.prim}, ${color.sec})`;
const greenBackground = () => `
  background-color: #8bb940;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%238bb940' width='11' height='11'/%3E%3Crect fill='%238ab93f' x='10' width='11' height='11'/%3E%3Crect fill='%238ab83f' y='10' width='11' height='11'/%3E%3Crect fill='%2389b83e' x='20' width='11' height='11'/%3E%3Crect fill='%2389b73d' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%2388b73c' y='20' width='11' height='11'/%3E%3Crect fill='%2387b63c' x='30' width='11' height='11'/%3E%3Crect fill='%2387b63b' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%2386b53a' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%2385b539' y='30' width='11' height='11'/%3E%3Crect fill='%2385b539' x='40' width='11' height='11'/%3E%3Crect fill='%2384b438' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%2384b437' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%2383b336' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%2382b336' y='40' width='11' height='11'/%3E%3Crect fill='%2382b235' x='50' width='11' height='11'/%3E%3Crect fill='%2381b234' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%2381b133' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%2380b133' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%237fb132' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%237fb031' y='50' width='11' height='11'/%3E%3Crect fill='%237eb030' x='60' width='11' height='11'/%3E%3Crect fill='%237daf30' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%237daf2f' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%237cae2e' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%237cae2d' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%237bad2c' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%237aad2b' x='70' width='11' height='11'/%3E%3Crect fill='%237aad2b' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%2379ac2a' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%2378ac29' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%2378ab28' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%2377ab27' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%2377aa26' x='80' width='11' height='11'/%3E%3Crect fill='%2376aa26' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%2375aa25' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%2375a924' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%2374a923' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%2373a822' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%2373a821' x='90' width='11' height='11'/%3E%3Crect fill='%2372a720' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%2371a71f' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%2371a61e' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%2370a61d' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%2370a61c' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%236fa51b' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%236ea51a' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%236ea419' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%236da418' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%236ca317' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%236ca316' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%236ba215' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%236aa213' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%236aa212' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%2369a111' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%2369a10f' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%2368a00e' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%2367a00c' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23679f0b' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23669f09' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
  //background-attachment: fixed;
  background-size: cover;
  `;
const font = {
  title: 'Archivo Black',
  text: 'Open Sans'
};
const themeGreen = {
  index: 1,
  prim: '#8bb940',
  sec: '#478407',
  img: '/static/main/mundi.png',
  textLeft: {
    title: 'EL PLANETA TE NECESITA',
    subTitle: `Unete con nosotros y diviertete, mietras Proteges el medio ambiente, tan solo por usar greenlink.`
  },
  textRight: {
    title: 'PERÚ',
    subTitle: 'Punto de inicio'
  },
  textBottom: 'PROTEGE!'
};
const themeRed = {
  index: 2,
  prim: '#f03103',
  sec: '#a43112',
  img: '/static/main/gift.png',
  textLeft: {
    title: 'LA NAVIDAD ESTA AQUI',
    subTitle: 'Aprovecha esta hermosa epoca del año para compartir con los seres que amas y Alcanzar tus deseos.'
  },
  textRight: {
    title: 'Regalos',
    subTitle: 'Obten el tuyo ¿Que esperas?'
  },
  textBottom: 'ALCANZA!'
};
const themeBlue = {
  index: 3,
  prim: '#03a7f0',
  sec: '#1251a4',
  img: '/static/main/cofee.png',
  textLeft: {
    title: 'AYUDA CON NOSOTROS',
    subTitle: 'En esta epoca los menos afortunados de las regiones andinas necesitan de ti. Participa mientras te diviertes.'
  },
  textRight: {
    title: 'Calidez',
    subTitle: 'Apoya nuestras causas sociales.'
  },
  textBottom: 'PARTICIPA!'
};

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "qzSc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ON_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return ON_NOTIFICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return ON_VIEW_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return ON_NOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return ON_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return ON_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return ON_WALLET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return navView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return ON_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return ON_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return ON_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return ON_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return storeSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return ON_POST_REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ON_GREENINFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return ON_GREEN_CREATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return ON_GREENPOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return ON_GREEN_LIKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OFF_GREEN_LIKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return ON_GREEN_WISH_FOUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return ON_GREEN_COMMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return onStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return ON_WISH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ON_FLOAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OFF_FLOAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return ON_VAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return ON_VAULT_HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return ON_VAULT_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return ON_SPACE_HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return ON_SPACE_WALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return ON_SPACE_CHAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return ON_SPACE_FRIENDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return ON_SPACE_EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return ON_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return ON_WALL_TOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return ON_WALL_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ON_CONFIRM; });
/* unused harmony export ON_CHAT_FRIEND */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ON_CHAT_PRIVATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ON_CHAT_CLOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ON_CHAT_MINIMIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ON_CHAT_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ON_CHAT_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return ON_MAIN_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return ON_MAIN_THEME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return ON_POST_VIEW; });
/***********************
NAV
************************/
const ON_DOWN = 'ON_DOWN';
const ON_NOTIFICATIONS = 'ON_NOTIFICATIONS';
const ON_VIEW_NAV = 'ON_VIEW_NAV';
const ON_NOTE = 'ON_NOTE';
const ON_LOADER = 'ON_LOADER';
const ON_LOGIN = 'ON_LOGIN';
const ON_WALLET = 'ON_WALLET';
const navView = {
  GIFT: 'GIFT',
  NOTES: 'NOTES',
  FRIEND: 'FRIEND'
};
/***********************
USER
************************/

const ON_USER = 'ON_USER';
const ON_UPDATE = 'ON_UPDATE';
/************************
STORE
*************************/

const ON_STORE = 'ON_STORE';
const ON_PRODUCTS = 'ON_PRODUCTS';
const storeSections = {
  PRODUCT: 'PRODUCT',
  HOME: 'HOME',
  MUSIC: 'MUSIC',
  JEWEL: 'JEWEL',
  TV: 'TV',
  TOY: 'TOY',
  CANDY: 'CANDY',
  EBOOK: 'EBOOK'
};
/************************
POSTREGISTER
*************************/

const ON_POST_REGISTER = 'ON_POST_REGISTER';
/************************
GREENPOST
*************************/

const ON_GREENINFO = 'ON_GREENINFO';
const ON_GREEN_CREATOR = 'ON_GREEN_CREATOR';
const ON_GREENPOST = 'ON_GREENPOST';
const ON_GREEN_LIKE = 'ON_GREEN_LIKE';
const OFF_GREEN_LIKE = 'OFF_GREEN_LIKE';
const ON_GREEN_WISH_FOUND = 'ON_GREEN_WISH_FOUND';
const ON_GREEN_COMMENT = 'ON_GREEN_COMMENT';
const onStore = () => null;
const ON_WISH = 'ON_WISH';
/****************************
FLOATING NOTES
*****************************/

const ON_FLOAT = 'ON_FLOAT';
const OFF_FLOAT = 'OFF_FLOAT';
/****************************
VAULT
*****************************/

const ON_VAULT = 'ON_VAULT';
const ON_VAULT_HOME = 'ON_VAULT_HOME';
const ON_VAULT_PRODUCT = 'ON_VAULT_PRODUCT';
/****************************
SPACE
*****************************/

const ON_SPACE_HOME = 'ON_SPACE_HOME';
const ON_SPACE_WALL = 'ON_SPACE_WALL';
const ON_SPACE_CHAT = 'ON_SPACE_CHAT';
const ON_SPACE_FRIENDS = 'ON_SPACE_FRIENDS';
const ON_SPACE_EVENTS = 'ON_SPACE_EVENTS';
/****************************
SPACE - WALL
*****************************/

const ON_POST = 'ON_POST';
const ON_WALL_TOP = 'ON_WALL_TOP';
const ON_WALL_POSTS = 'ON_WALL_POSTS';
/****************************
DIALOG - CONFIRM
*****************************/

const ON_CONFIRM = 'ON_CONFIRM';
/****************************
CHAT
*****************************/

const ON_CHAT_FRIEND = 'ON_CHAT_FRIEND';
const ON_CHAT_PRIVATE = 'ON_CHAT_PRIVATE';
const ON_CHAT_CLOSE = 'ON_CHAT_CLOSE';
const ON_CHAT_MINIMIZE = 'ON_CHAT_MINIMIZE';
const ON_CHAT_MSG = 'ON_CHAT_MSG';
const ON_CHAT_ALERT = 'ON_CHAT_ALERT';
/***********************
MAIN
************************/

const ON_MAIN_NAV = 'ON_MAIN_NAV';
const ON_MAIN_THEME = 'ON_MAIN_THEME';
/************************
POST VIEW
*************************/

const ON_POST_VIEW = 'ON_POST_VIEW';

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });
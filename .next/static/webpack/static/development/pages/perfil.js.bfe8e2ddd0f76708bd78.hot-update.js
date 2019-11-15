webpackHotUpdate("static/development/pages/perfil.js",{

/***/ "./components/store/store.jsx":
/*!************************************!*\
  !*** ./components/store/store.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var _store_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store.scss */ "./components/store/store.scss");
/* harmony import */ var _store_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_store_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _test_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../test/products */ "./test/products.js");
/* harmony import */ var _test_products__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_test_products__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_9__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








var Home = function Home() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  return __jsx("div", {
    className: "storehome_main_cont"
  }, __jsx("div", {
    className: "cont_left"
  }, __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["storeSections"].MUSIC
      });
    },
    id: "music"
  }, __jsx("img", {
    src: "/static/store/ms.jpg",
    alt: ""
  }), __jsx("span", null, "musica"))), __jsx("div", {
    className: "cont_right"
  }, __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["storeSections"].CANDY
      });
    },
    id: "candy"
  }, __jsx("img", {
    src: "/static/store/gol.jpg",
    alt: ""
  }), __jsx("span", null, "golosinas")), __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["storeSections"].JEWEL
      });
    },
    className: "four",
    id: "jewel"
  }, __jsx("img", {
    src: "/static/store/bis.jpg",
    alt: ""
  }), __jsx("span", null, "bisuteria")), __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["storeSections"].TOY
      });
    },
    className: "four",
    id: "toy"
  }, __jsx("img", {
    src: "/static/store/ty.jpg",
    alt: ""
  }), __jsx("span", null, "juguetes")), __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["storeSections"].EBOOK
      });
    },
    className: "four",
    id: "ebook"
  }, __jsx("img", {
    src: "/static/store/eb.jpg",
    alt: ""
  }), __jsx("span", null, "ebook's")), __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["storeSections"].TV
      });
    },
    className: "four",
    id: "tv"
  }, __jsx("img", {
    src: "/static/store/tv.jpg",
    alt: ""
  }), __jsx("span", null, "tv's"))));
};

var Category = function Category(_ref) {
  var tag = _ref.tag;
  var items = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.greenstore.items;
  });
  var products = items.filter(function (product) {
    return product.tag === tag;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var onProduct = function onProduct(e) {
    var product = products.find(function (product) {
      return product.id === e.target.id;
    });
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["storeSections"].PRODUCT,
      product: product
    });
  };

  return __jsx("div", {
    className: "category_main_cont"
  }, __jsx("ul", null, products.map(function (product) {
    return __jsx("li", null, __jsx("button", {
      onClick: onProduct,
      id: product.id,
      className: "shadow"
    }, __jsx("img", {
      id: product.id,
      src: product.img,
      alt: ""
    }), __jsx("footer", {
      id: product.id
    }, __jsx("p", {
      id: product.id
    }, product.name), __jsx("p", {
      id: product.id
    }, "$", product.price))));
  })));
};

var Product = function Product() {
  var product = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.greenstore.current;
  });
  var uid = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user._id;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var owner = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.owner;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      disable = _useState[0],
      setDisable = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      note = _useState2[0],
      setNote = _useState2[1];

  var onGift =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var data, parseCoin;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              e.preventDefault();
              setDisable(true);
              data = {
                gift: product,
                uid: uid,
                note: note
              };
              _context.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('/user/gift', data);

            case 6:
              parseCoin = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(product.price, 10);
              dispatch({
                type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["ON_WALLET"],
                coin: -parseCoin
              });
              setDisable(false);
              dispatch({
                type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["ON_STORE"]
              });
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }));

    return function onGift(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onWish =
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
      var res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              e.preventDefault();
              setDisable(true);
              _context2.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('/green/wish', {
                product: product
              });

            case 5:
              res = _context2.sent;
              console.log(res.data);
              dispatch({
                type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["ON_WISH"],
                wish: res.data
              });
              setDisable(false);
              dispatch({
                type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["ON_STORE"]
              });
              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 12]]);
    }));

    return function onWish(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    className: "product_main_cont"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12 col-md-6"
  }, __jsx("div", {
    className: "img_cont"
  }, __jsx("img", {
    src: product.img,
    alt: ""
  }))), __jsx("div", {
    className: "col-12 col-md-6"
  }, __jsx("div", {
    className: "description_cont"
  }, __jsx("h1", null, product.name), __jsx("p", null, "precio: $", product.price), __jsx("p", null, product.description)), __jsx("form", {
    onSubmit: owner ? onWish : onGift
  }, !owner && __jsx("textarea", {
    value: note,
    onChange: function onChange(e) {
      return setNote(e.currentTarget.value);
    }
  }), __jsx("footer", null, __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: product.tag
      });
    }
  }, "atr\xE1s"), __jsx("button", {
    disabled: disable,
    type: "submit"
  }, owner ? 'agregar' : 'enviar'))))));
};

var Store = function Store() {
  var store = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.greenstore;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var onProducts =
  /*#__PURE__*/
  function () {
    var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              try {
                //const res = await axios.get('/products');
                //dispatch({ type: ON_PRODUCTS, products: res.data });
                dispatch({
                  type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["ON_PRODUCTS"],
                  products: _test_products__WEBPACK_IMPORTED_MODULE_7___default.a
                });
              } catch (err) {
                console.log(err);
              }

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onProducts() {
      return _ref4.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    onProducts();
  }, []);
  return __jsx("div", {
    className: "store_main_cont"
  }, store.home && __jsx(Home, null), store.music && __jsx(Category, {
    tag: _store_actions__WEBPACK_IMPORTED_MODULE_5__["storeSections"].MUSIC
  }), store.candy && __jsx(Category, {
    tag: _store_actions__WEBPACK_IMPORTED_MODULE_5__["storeSections"].CANDY
  }), store.jewel && __jsx(Category, {
    tag: _store_actions__WEBPACK_IMPORTED_MODULE_5__["storeSections"].JEWEL
  }), store.toy && __jsx(Category, {
    tag: _store_actions__WEBPACK_IMPORTED_MODULE_5__["storeSections"].TOY
  }), store.ebook && __jsx(Category, {
    tag: _store_actions__WEBPACK_IMPORTED_MODULE_5__["storeSections"].EBOOK
  }), store.tv && __jsx(Category, {
    tag: _store_actions__WEBPACK_IMPORTED_MODULE_5__["storeSections"].TV
  }), store.product && __jsx(Product, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ })

})
//# sourceMappingURL=perfil.js.bfe8e2ddd0f76708bd78.hot-update.js.map
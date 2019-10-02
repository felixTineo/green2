webpackHotUpdate("static/development/pages/foo.js",{

/***/ "./components/greenpost/creator.jsx":
/*!******************************************!*\
  !*** ./components/greenpost/creator.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
false,

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/core-js/library/fn/object/keys.js":
false,

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/_is-array.js":
false,

/***/ "./node_modules/core-js/library/modules/_meta.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
false,

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
false,

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
false,

/***/ "./pages/foo.jsx":
/*!***********************!*\
  !*** ./pages/foo.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions */ "./store/actions.js");
/* harmony import */ var _components_store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/store/store */ "./components/store/store.jsx");
/* harmony import */ var _components_store_store_cont__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/store/store-cont */ "./components/store/store-cont.jsx");
/* harmony import */ var _components_greenpost_creator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/greenpost/creator */ "./components/greenpost/creator.jsx");
/* harmony import */ var _components_greenpost_creator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_greenpost_creator__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/felix/Documentos/projects/greenlink/pages/foo.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






/*const Foo = () => {
  const dispatch = useDispatch();
  const visible = useSelector(state => state.greenstore.visible);
  return(
    <div className="foo_main_cont">
      <StoreCont><Store /></StoreCont>
      <button onClick={()=> dispatch({ type: ON_STORE })} >store</button>
      {console.log(visible)}
    </div>
  )
};*/

var Foo = function Foo() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_greenpost_creator__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_2__["ON_GREEN_CREATOR"]
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "abrir"));
};

/* harmony default export */ __webpack_exports__["default"] = (Foo);

/***/ })

})
//# sourceMappingURL=foo.js.3161223fa31924ac315c.hot-update.js.map
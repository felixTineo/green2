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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/chat/private.jsx":
/*!*************************************!*\
  !*** ./components/chat/private.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid/v1 */ "uuid/v1");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _test_persons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../test/persons */ "./test/persons.js");
/* harmony import */ var _test_persons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_test_persons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layout_var__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../layout/var */ "./layout/var.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_9__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









const Chat = ({
  fullName,
  perfilImg,
  _id,
  minimize,
  chatHistory,
  privates,
  anAlert
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const cuid = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.nav.notifications.id);
  const {
    0: msg,
    1: setMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const chatRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const current = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.chat.current);
  const {
    0: chat,
    1: setChat
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);

  const onChat = async () => {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(`/chat/private/${_id}`);
      setChat(res.data);
      chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
    } catch (e) {
      console.log(e);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
    inputRef.current.focus();
  }, [chat]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_9___default()();
    onChat();

    try {
      socket.open();
      socket.on(`private:${cuid}`, payload => {
        setChat([...chat, payload.msg]);
      });
    } catch (e) {
      console.log(e);
    }

    console.log('hola');
    return () => {
      socket.close();
    };
  }, []);

  const onMinimize = () => {
    const isMin = privates.find(user => user._id === _id);

    if (isMin.minimize) {
      dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["ON_CHAT_MINIMIZE"],
        _id,
        option: false
      });
      dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["ON_CHAT_ALERT"],
        _id,
        option: false
      });
    } else {
      dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["ON_CHAT_MINIMIZE"],
        _id,
        option: true
      });
    }
  };

  const onSubmit = async e => {
    try {
      if (e.keyCode === 13 && !e.shiftKey || e.type === "submit") {
        e.preventDefault();
        const newMsg = {
          id: cuid,
          pm: msg
        };
        const data = {
          tid: _id,
          msg: newMsg
        };
        setMsg('');
        setChat([...chat, newMsg]);
        await axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('/chat/send', data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1622551285", [_layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].sec, minimize ? '-43px' : '-343px', anAlert ? _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].danger : _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim]]]) + " " + "main shadow"
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1622551285", [_layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].sec, minimize ? '-43px' : '-343px', anAlert ? _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].danger : _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim]]])
  }, __jsx("button", {
    onClick: onMinimize,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1622551285", [_layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].sec, minimize ? '-43px' : '-343px', anAlert ? _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].danger : _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim]]]) + " " + "name"
  }, __jsx("img", {
    src: perfilImg,
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1622551285", [_layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].sec, minimize ? '-43px' : '-343px', anAlert ? _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].danger : _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim]]])
  }), fullName), __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["ON_CHAT_CLOSE"],
      _id
    }),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1622551285", [_layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].sec, minimize ? '-43px' : '-343px', anAlert ? _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].danger : _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim]]])
  }, "X")), __jsx("ul", {
    ref: chatRef,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1622551285", [_layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].sec, minimize ? '-43px' : '-343px', anAlert ? _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].danger : _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim]]]) + " " + "body"
  }, chat.map(msg => __jsx("li", {
    key: uuid_v1__WEBPACK_IMPORTED_MODULE_5___default()(),
    style: {
      alignSelf: cuid === msg.id ? 'flex-end' : 'flex-start'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1622551285", [_layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].sec, minimize ? '-43px' : '-343px', anAlert ? _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].danger : _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim]]])
  }, cuid !== msg.id && __jsx("img", {
    src: perfilImg,
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1622551285", [_layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].sec, minimize ? '-43px' : '-343px', anAlert ? _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].danger : _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim]]])
  }), __jsx("p", {
    style: {
      background: cuid === msg.id ? _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim : 'rgba(0, 0, 0, .050)',
      color: cuid === msg.id ? _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].light : _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].dark
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1622551285", [_layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].sec, minimize ? '-43px' : '-343px', anAlert ? _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].danger : _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim]]])
  }, msg.pm)))), __jsx("form", {
    onSubmit: onSubmit,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1622551285", [_layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].sec, minimize ? '-43px' : '-343px', anAlert ? _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].danger : _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim]]])
  }, __jsx("textarea", {
    id: _id,
    value: msg,
    onChange: e => setMsg(e.currentTarget.value),
    onKeyDown: onSubmit,
    ref: inputRef,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1622551285", [_layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].sec, minimize ? '-43px' : '-343px', anAlert ? _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].danger : _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim]]])
  })), __jsx("footer", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1622551285", [_layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].sec, minimize ? '-43px' : '-343px', anAlert ? _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].danger : _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim]]])
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1622551285",
    dynamic: [_layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].sec, minimize ? '-43px' : '-343px', anAlert ? _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].danger : _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim]
  }, `li.main.__jsx-style-dynamic-selector{width:25%;border:1px solid ${_layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].sec};position:relative;top:${minimize ? '-43px' : '-343px'};margin-right:1rem;border-radius:3px 3px 0 0;}header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:${anAlert ? _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].danger : _layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim};}header.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{-webkit-transition:250ms ease;transition:250ms ease;border:none;font-size:1rem;color:rgba(255,255,255,.7);text-transform:capitalize;background:transparent;}header.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:focus{outline:none;}header.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{color:#fff;}.name.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;text-align:left;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:550;}.name.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:40px;height:40px;object-fit:cover;object-position:center;border-radius:50%;margin-right:.3rem;}ul.__jsx-style-dynamic-selector{list-style:none;marign:0;padding:0;height:250px;overflow-y:scroll;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#fff;}ul.__jsx-style-dynamic-selector::-webkit-scrollbar{width:0;}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{margin:.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:25px;height:25px;object-fit:cover;object-position:center;border-radius:50%;}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;background:rgba(0,0,0,.050);padding:.1rem .2rem;margin-left:.5rem;border-radius:3px;border:1px solid rgba(0,0,0,.080);}form.__jsx-style-dynamic-selector{width:30px;width:100%;margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}form.__jsx-style-dynamic-selector textarea.__jsx-style-dynamic-selector{resize:none;width:100%;height:100%;margin:0;font-size:11px;}footer.__jsx-style-dynamic-selector{height:10px;background:${_layout_var__WEBPACK_IMPORTED_MODULE_7__["color"].prim};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvY2hhdC9wcml2YXRlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxR2tCLEFBR3FCLEFBUUcsQUFLUyxBQVFULEFBR0YsQUFHQyxBQU9ELEFBUUssQUFVUixBQUdLLEFBTUYsQUFPRixBQVFFLEFBT0MsQUFPQSxRQXJDZCxDQWdCaUMsQ0FwRWUsQ0F3QmhELEFBVWMsQUEyQkEsQUFlRCxDQU9BLEFBTzZCLENBckUxQyxBQWtDZSxHQWJKLE1BbUNBLENBMUNRLEFBMkJBLEFBc0JMLEVBekNGLE1BbUNBLElBbENHLEFBeUNKLEVBaEJXLEdBakNHLEFBMkJBLENBZ0JWLEdBT0UsSUF6Q0csSUFoQ04sQUE4RWQsSUExRm9CLENBcUVBLEVBaUJwQixJQWxEb0IsQUEyQkEsQ0FsREgsRUFnQ0YsS0FuQkcsR0F6QmlCLEFBTWQsQ0ErREQsSUF4RFksRUF1QlgsQUEyQnJCLE1BckNlLEFBNEJNLE1BZ0JrQixPQWpDdkMsTUF2QjRCLENBYlIsUUE2RXBCLFVBNUU0QixFQXFFNUIsS0F4RHlCLFFBOEJELFdBMUN4QixJQWFBLE1BV3FCLE1BcEJxQixhQWdEbEIsMkJBL0N4QixXQXNDa0IsZ0JBQ2xCLG9CQW5Ca0IsSUE0QmxCLFlBM0JBIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvY2hhdC9wcml2YXRlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBPTl9DSEFUX0NMT1NFLCBPTl9DSEFUX01JTklNSVpFLCBPTl9DSEFUX01TRywgT05fQ0hBVF9BTEVSVCB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92MSc7XG5pbXBvcnQgcGVyc29ucyBmcm9tICcuLi8uLi90ZXN0L3BlcnNvbnMnO1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuLi8uLi9sYXlvdXQvdmFyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5cbmNvbnN0IENoYXQgPSAoeyBmdWxsTmFtZSwgcGVyZmlsSW1nLCBfaWQsIG1pbmltaXplLCBjaGF0SGlzdG9yeSwgcHJpdmF0ZXMsIGFuQWxlcnQgfSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGN1aWQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5uYXYubm90aWZpY2F0aW9ucy5pZCk7XG4gIGNvbnN0IFttc2csIHNldE1zZ10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBjaGF0UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBjdXJyZW50ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY2hhdC5jdXJyZW50KTtcbiAgY29uc3QgW2NoYXQsIHNldENoYXRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBvbkNoYXQgPSBhc3luYygpID0+IHtcbiAgICB0cnl7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYC9jaGF0L3ByaXZhdGUvJHtfaWR9YCk7XG4gICAgICBzZXRDaGF0KHJlcy5kYXRhKTtcbiAgICAgIGNoYXRSZWYuY3VycmVudC5zY3JvbGxUbygwLCBjaGF0UmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KTtcbiAgICB9Y2F0Y2goZSl7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG4gIH1cbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIGNoYXRSZWYuY3VycmVudC5zY3JvbGxUbygwLCBjaGF0UmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KTtcbiAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gIH0sW2NoYXRdKVxuXG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBjb25zdCBzb2NrZXQgPSBpbygpO1xuICAgIG9uQ2hhdCgpO1xuICAgIHRyeXtcbiAgICAgIHNvY2tldC5vcGVuKCk7XG4gICAgICBzb2NrZXQub24oYHByaXZhdGU6JHtjdWlkfWAsIChwYXlsb2FkKSA9PiB7XG4gICAgICAgIHNldENoYXQoWy4uLmNoYXQsIHBheWxvYWQubXNnXSk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdob2xhJyk7XG4gICAgcmV0dXJuICgpPT4ge1xuICAgICAgc29ja2V0LmNsb3NlKClcbiAgICB9O1xuICB9LFtdKTtcblxuICBjb25zdCBvbk1pbmltaXplID0gKCkgPT4ge1xuICAgIGNvbnN0IGlzTWluID0gcHJpdmF0ZXMuZmluZCh1c2VyID0+IHVzZXIuX2lkID09PSBfaWQpO1xuICAgIGlmKGlzTWluLm1pbmltaXplKXtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogT05fQ0hBVF9NSU5JTUlaRSwgX2lkLCBvcHRpb246IGZhbHNlIH0pO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBPTl9DSEFUX0FMRVJULCBfaWQsIG9wdGlvbjogZmFsc2UgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogT05fQ0hBVF9NSU5JTUlaRSwgX2lkLCBvcHRpb246IHRydWUgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xuICAgIHRyeXtcbiAgICAgIGlmKGUua2V5Q29kZSA9PT0gMTMgJiYgIWUuc2hpZnRLZXkgfHwgZS50eXBlID09PSBcInN1Ym1pdFwiKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBuZXdNc2cgPSB7XG4gICAgICAgICAgICBpZDogY3VpZCxcbiAgICAgICAgICAgIHBtOiBtc2csXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICB0aWQ6IF9pZCxcbiAgICAgICAgICBtc2c6IG5ld01zZyxcbiAgICAgICAgfVxuICAgICAgICBzZXRNc2coJycpO1xuICAgICAgICBzZXRDaGF0KFsuLi5jaGF0LCBuZXdNc2ddKTtcbiAgICAgICAgYXdhaXQgYXhpb3MucG9zdCgnL2NoYXQvc2VuZCcsIGRhdGEpO1xuICAgICAgfVxuICAgIH1jYXRjaChlcnIpe1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuKFxuICAgIDxsaSBjbGFzc05hbWU9XCJtYWluIHNoYWRvd1wiPlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbk1pbmltaXplfSBjbGFzc05hbWU9XCJuYW1lXCIgPlxuICAgICAgICAgIDxpbWcgc3JjPXtwZXJmaWxJbWd9IGFsdD1cIlwiLz5cbiAgICAgICAgICB7ZnVsbE5hbWV9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gZGlzcGF0Y2goeyB0eXBlOiBPTl9DSEFUX0NMT1NFLCBfaWQgfSl9Plg8L2J1dHRvbj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImJvZHlcIiByZWY9e2NoYXRSZWZ9PlxuICAgICAgICB7XG4gICAgICAgICAgY2hhdC5tYXAobXNnID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3V1aWQoKX0gc3R5bGU9e3sgYWxpZ25TZWxmOiBjdWlkID09PSBtc2cuaWQgPyAnZmxleC1lbmQnIDogJ2ZsZXgtc3RhcnQnIH19PlxuICAgICAgICAgICAgICB7Y3VpZCAhPT0gbXNnLmlkICYmIDxpbWcgc3JjPXtwZXJmaWxJbWd9IGFsdD1cIlwiLz59XG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGJhY2tncm91bmQ6IGN1aWQgPT09IG1zZy5pZCA/IGNvbG9yLnByaW0gOiAncmdiYSgwLCAwLCAwLCAuMDUwKScsIGNvbG9yOiBjdWlkID09PSBtc2cuaWQgPyBjb2xvci5saWdodCA6IGNvbG9yLmRhcmsgfX0+e21zZy5wbX08L3A+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICA8dGV4dGFyZWEgaWQ9e19pZH0gdmFsdWU9e21zZ30gb25DaGFuZ2U9eyhlKT0+IHNldE1zZyhlLmN1cnJlbnRUYXJnZXQudmFsdWUpfSBvbktleURvd249e29uU3VibWl0fSByZWY9e2lucHV0UmVmfSAvPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGZvb3Rlcj48L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbGkubWFpbntcbiAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3Iuc2VjfTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiAke21pbmltaXplID8gJy00M3B4JyA6ICctMzQzcHgnfTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2FuQWxlcnQgPyBjb2xvci5kYW5nZXIgOiBjb2xvci5wcmltfTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgYnV0dG9ue1xuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNyk7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciBidXR0b246aG92ZXJ7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLm5hbWV7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1NTA7XG4gICAgICAgIH1cbiAgICAgICAgLm5hbWUgaW1ne1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuM3JlbTtcbiAgICAgICAgfVxuICAgICAgICB1bHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIG1hcmlnbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIHVsOjotd2Via2l0LXNjcm9sbGJhcntcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgfVxuICAgICAgICB1bCBsaXtcbiAgICAgICAgICBtYXJnaW46IC41cmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIHVsIGxpIGltZ3tcbiAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG4gICAgICAgIHVsIGxpIHB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjA1MCk7XG4gICAgICAgICAgcGFkZGluZzogLjFyZW0gLjJyZW07XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4wODApO1xuICAgICAgICB9XG4gICAgICAgIGZvcm17XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgICBmb3JtIHRleHRhcmVhe1xuICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXJ7XG4gICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3IucHJpbX07XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvbGk+XG4gIClcbn1cblxuY29uc3QgUHJpdmF0ZSA9ICgpID0+IHtcbiAgY29uc3QgW2NoYXRzLCBzZXRDaGF0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHByaXZhdGVzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY2hhdC5wcml2YXRlcyk7XG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBzZXRDaGF0cyhwcml2YXRlcyk7XG4gIH0sW3ByaXZhdGVzLmxlbmd0aF0pO1xuXG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPHVsPlxuICAgICAgICB7XG4gICAgICAgICAgcHJpdmF0ZXMubWFwKChjaGF0KT0+IDxDaGF0IGtleT17dXVpZCgpfSB7Li4uY2hhdH0gcHJpdmF0ZXM9e3ByaXZhdGVzfSAvPilcbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgdWx7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcml2YXRlO1xuIl19 */
/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/chat/private.jsx */`));
};

const Private = () => {
  const {
    0: chats,
    1: setChats
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const privates = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.chat.privates);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setChats(privates);
  }, [privates.length]);
  return __jsx("div", {
    className: "jsx-60269558"
  }, __jsx("ul", {
    className: "jsx-60269558"
  }, privates.map(chat => __jsx(Chat, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: uuid_v1__WEBPACK_IMPORTED_MODULE_5___default()()
  }, chat, {
    privates: privates
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "60269558"
  }, "ul.jsx-60269558{list-style:none;margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvY2hhdC9wcml2YXRlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3TmtCLEFBRzJCLGdCQUNQLFNBQ0MsVUFDRywwRUFDWSxpR0FDM0IiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy9jaGF0L3ByaXZhdGUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IE9OX0NIQVRfQ0xPU0UsIE9OX0NIQVRfTUlOSU1JWkUsIE9OX0NIQVRfTVNHLCBPTl9DSEFUX0FMRVJUIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3YxJztcbmltcG9ydCBwZXJzb25zIGZyb20gJy4uLy4uL3Rlc3QvcGVyc29ucyc7XG5pbXBvcnQgeyBjb2xvciB9IGZyb20gJy4uLy4uL2xheW91dC92YXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcblxuY29uc3QgQ2hhdCA9ICh7IGZ1bGxOYW1lLCBwZXJmaWxJbWcsIF9pZCwgbWluaW1pemUsIGNoYXRIaXN0b3J5LCBwcml2YXRlcywgYW5BbGVydCB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgY3VpZCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm5hdi5ub3RpZmljYXRpb25zLmlkKTtcbiAgY29uc3QgW21zZywgc2V0TXNnXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGNoYXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGN1cnJlbnQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jaGF0LmN1cnJlbnQpO1xuICBjb25zdCBbY2hhdCwgc2V0Q2hhdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IG9uQ2hhdCA9IGFzeW5jKCkgPT4ge1xuICAgIHRyeXtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgL2NoYXQvcHJpdmF0ZS8ke19pZH1gKTtcbiAgICAgIHNldENoYXQocmVzLmRhdGEpO1xuICAgICAgY2hhdFJlZi5jdXJyZW50LnNjcm9sbFRvKDAsIGNoYXRSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQpO1xuICAgIH1jYXRjaChlKXtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfVxuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgY2hhdFJlZi5jdXJyZW50LnNjcm9sbFRvKDAsIGNoYXRSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQpO1xuICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgfSxbY2hhdF0pXG5cbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIGNvbnN0IHNvY2tldCA9IGlvKCk7XG4gICAgb25DaGF0KCk7XG4gICAgdHJ5e1xuICAgICAgc29ja2V0Lm9wZW4oKTtcbiAgICAgIHNvY2tldC5vbihgcHJpdmF0ZToke2N1aWR9YCwgKHBheWxvYWQpID0+IHtcbiAgICAgICAgc2V0Q2hhdChbLi4uY2hhdCwgcGF5bG9hZC5tc2ddKTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2hvbGEnKTtcbiAgICByZXR1cm4gKCk9PiB7XG4gICAgICBzb2NrZXQuY2xvc2UoKVxuICAgIH07XG4gIH0sW10pO1xuXG4gIGNvbnN0IG9uTWluaW1pemUgPSAoKSA9PiB7XG4gICAgY29uc3QgaXNNaW4gPSBwcml2YXRlcy5maW5kKHVzZXIgPT4gdXNlci5faWQgPT09IF9pZCk7XG4gICAgaWYoaXNNaW4ubWluaW1pemUpe1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBPTl9DSEFUX01JTklNSVpFLCBfaWQsIG9wdGlvbjogZmFsc2UgfSk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IE9OX0NIQVRfQUxFUlQsIF9pZCwgb3B0aW9uOiBmYWxzZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBPTl9DSEFUX01JTklNSVpFLCBfaWQsIG9wdGlvbjogdHJ1ZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyhlKSA9PiB7XG4gICAgdHJ5e1xuICAgICAgaWYoZS5rZXlDb2RlID09PSAxMyAmJiAhZS5zaGlmdEtleSB8fCBlLnR5cGUgPT09IFwic3VibWl0XCIpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG5ld01zZyA9IHtcbiAgICAgICAgICAgIGlkOiBjdWlkLFxuICAgICAgICAgICAgcG06IG1zZyxcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIHRpZDogX2lkLFxuICAgICAgICAgIG1zZzogbmV3TXNnLFxuICAgICAgICB9XG4gICAgICAgIHNldE1zZygnJyk7XG4gICAgICAgIHNldENoYXQoWy4uLmNoYXQsIG5ld01zZ10pO1xuICAgICAgICBhd2FpdCBheGlvcy5wb3N0KCcvY2hhdC9zZW5kJywgZGF0YSk7XG4gICAgICB9XG4gICAgfWNhdGNoKGVycil7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfVxuICByZXR1cm4oXG4gICAgPGxpIGNsYXNzTmFtZT1cIm1haW4gc2hhZG93XCI+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uTWluaW1pemV9IGNsYXNzTmFtZT1cIm5hbWVcIiA+XG4gICAgICAgICAgPGltZyBzcmM9e3BlcmZpbEltZ30gYWx0PVwiXCIvPlxuICAgICAgICAgIHtmdWxsTmFtZX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBkaXNwYXRjaCh7IHR5cGU6IE9OX0NIQVRfQ0xPU0UsIF9pZCB9KX0+WDwvYnV0dG9uPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiYm9keVwiIHJlZj17Y2hhdFJlZn0+XG4gICAgICAgIHtcbiAgICAgICAgICBjaGF0Lm1hcChtc2cgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17dXVpZCgpfSBzdHlsZT17eyBhbGlnblNlbGY6IGN1aWQgPT09IG1zZy5pZCA/ICdmbGV4LWVuZCcgOiAnZmxleC1zdGFydCcgfX0+XG4gICAgICAgICAgICAgIHtjdWlkICE9PSBtc2cuaWQgJiYgPGltZyBzcmM9e3BlcmZpbEltZ30gYWx0PVwiXCIvPn1cbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgYmFja2dyb3VuZDogY3VpZCA9PT0gbXNnLmlkID8gY29sb3IucHJpbSA6ICdyZ2JhKDAsIDAsIDAsIC4wNTApJywgY29sb3I6IGN1aWQgPT09IG1zZy5pZCA/IGNvbG9yLmxpZ2h0IDogY29sb3IuZGFyayB9fT57bXNnLnBtfTwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgIDx0ZXh0YXJlYSBpZD17X2lkfSB2YWx1ZT17bXNnfSBvbkNoYW5nZT17KGUpPT4gc2V0TXNnKGUuY3VycmVudFRhcmdldC52YWx1ZSl9IG9uS2V5RG93bj17b25TdWJtaXR9IHJlZj17aW5wdXRSZWZ9IC8+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8Zm9vdGVyPjwvZm9vdGVyPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBsaS5tYWlue1xuICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvci5zZWN9O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6ICR7bWluaW1pemUgPyAnLTQzcHgnIDogJy0zNDNweCd9O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7YW5BbGVydCA/IGNvbG9yLmRhbmdlciA6IGNvbG9yLnByaW19O1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciBidXR0b257XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC43KTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICAubmFtZXtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgICAgICAgfVxuICAgICAgICAubmFtZSBpbWd7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC4zcmVtO1xuICAgICAgICB9XG4gICAgICAgIHVse1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgbWFyaWduOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgdWw6Oi13ZWJraXQtc2Nyb2xsYmFye1xuICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICB9XG4gICAgICAgIHVsIGxpe1xuICAgICAgICAgIG1hcmdpbjogLjVyZW07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgICAgdWwgbGkgaW1ne1xuICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgdWwgbGkgcHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMDUwKTtcbiAgICAgICAgICBwYWRkaW5nOiAuMXJlbSAuMnJlbTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLjVyZW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjA4MCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybXtcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIGZvcm0gdGV4dGFyZWF7XG4gICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlcntcbiAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvci5wcmltfTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9saT5cbiAgKVxufVxuXG5jb25zdCBQcml2YXRlID0gKCkgPT4ge1xuICBjb25zdCBbY2hhdHMsIHNldENoYXRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgcHJpdmF0ZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jaGF0LnByaXZhdGVzKTtcbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIHNldENoYXRzKHByaXZhdGVzKTtcbiAgfSxbcHJpdmF0ZXMubGVuZ3RoXSk7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8dWw+XG4gICAgICAgIHtcbiAgICAgICAgICBwcml2YXRlcy5tYXAoKGNoYXQpPT4gPENoYXQga2V5PXt1dWlkKCl9IHsuLi5jaGF0fSBwcml2YXRlcz17cHJpdmF0ZXN9IC8+KVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICB1bHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaXZhdGU7XG4iXX0= */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/chat/private.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Private);

/***/ }),

/***/ "./components/dialogs/confirm.jsx":
/*!****************************************!*\
  !*** ./components/dialogs/confirm.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layout_var__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout/var */ "./layout/var.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const Confirm = () => {
  const confirmation = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.confirm);
  const {
    onConfirm,
    msg1,
    msg2
  } = confirmation.current;
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  const onNext = () => {
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_CONFIRM"],
      current: {}
    });
    onConfirm();
  };

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    isOpen: confirmation.visible
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["736367645", [_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]) + " " + "main"
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["736367645", [_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]])
  }, __jsx("button", {
    title: "Cancelar",
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_CONFIRM"],
      current: {}
    }),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["736367645", [_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]])
  }, "X")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["736367645", [_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]]) + " " + "body"
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["736367645", [_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]])
  }, msg1), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["736367645", [_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]])
  }, msg2), __jsx("button", {
    onClick: onNext,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["736367645", [_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]]])
  }, "Aceptar")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "736367645",
    dynamic: [_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light]
  }, `div.main.__jsx-style-dynamic-selector{height:25vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}button.__jsx-style-dynamic-selector{-webkit-transition:250ms ease;transition:250ms ease;}button.__jsx-style-dynamic-selector:focus{outline:none;}header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;background:${_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim};border-radius:3px;}header.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{background:transparent;border:none;color:${_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light};}.body.__jsx-style-dynamic-selector{padding:.5rem;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.body.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;color:${_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].dark};width:80%;text-align:center;}.body.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{border:1px solid ${_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim};color:${_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim};background:transparent;margin-top:1rem;}.body.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{background:${_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].prim};color:${_layout_var__WEBPACK_IMPORTED_MODULE_5__["color"].light};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvZGlhbG9ncy9jb25maXJtLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Qm9CLEFBR3lCLEFBS1UsQUFHVCxBQUdELEFBTVcsQUFLVCxBQVFMLEFBTXFDLEFBTU4sU0FYTCxHQTlCdEIsQ0FRZixDQWNjLFNBTEEsWUFDdUIsS0F3QkEsSUFYekIsRUFLeUIsTUEvQnJDLEVBMkJvQixnQkFicEIsRUFjQSxFQXRCMkIsQ0FnQzNCLE1BTnlCLElBZFYsQ0F0QlMsa0JBcUNOLGdCQUNsQix1Q0Fmd0IsS0F0QnhCLE9BVTBDLHdDQUN0QixrQkFDcEIsUUFXeUIsbUdBQ0osNkZBQ3JCIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvZGlhbG9ncy9jb25maXJtLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IE9OX0NPTkZJUk0gfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBjb2xvciB9IGZyb20gJy4uLy4uL2xheW91dC92YXInO1xuXG5jb25zdCBDb25maXJtID0gKCkgPT4ge1xuICBjb25zdCBjb25maXJtYXRpb24gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jb25maXJtKTtcbiAgY29uc3QgeyBvbkNvbmZpcm0sIG1zZzEsIG1zZzJ9ID0gY29uZmlybWF0aW9uLmN1cnJlbnQ7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgb25OZXh0ID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogT05fQ09ORklSTSwgY3VycmVudDoge30gfSk7XG4gICAgb25Db25maXJtKCk7XG4gIH1cbiAgcmV0dXJuKFxuICAgIDxNb2RhbCBpc09wZW49e2NvbmZpcm1hdGlvbi52aXNpYmxlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxidXR0b24gdGl0bGU9XCJDYW5jZWxhclwiIG9uQ2xpY2s9eygpPT4gZGlzcGF0Y2goeyB0eXBlOiBPTl9DT05GSVJNLCBjdXJyZW50OiB7fSB9KX0+WDwvYnV0dG9uPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAgPHA+e21zZzF9PC9wPlxuICAgICAgICAgIDxwPnttc2cyfTwvcD5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uTmV4dH0+QWNlcHRhcjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGRpdi5tYWlue1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXZoO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlcntcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9yLnByaW19O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgYnV0dG9ue1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvci5saWdodH07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ib2R5e1xuICAgICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJvZHkgcHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yLmRhcmt9O1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJvZHkgYnV0dG9ue1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvci5wcmltfTtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yLnByaW19O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYm9keSBidXR0b246aG92ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9yLnByaW19O1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3IubGlnaHR9O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTW9kYWw+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpcm07XG4iXX0= */
/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/dialogs/confirm.jsx */`)));
};

/* harmony default export */ __webpack_exports__["default"] = (Confirm);

/***/ }),

/***/ "./components/floating-notes/floating-notes.jsx":
/*!******************************************************!*\
  !*** ./components/floating-notes/floating-notes.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var _floating_notes_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./floating-notes.scss */ "./components/floating-notes/floating-notes.scss");
/* harmony import */ var _floating_notes_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_floating_notes_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mylink_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mylink/link */ "./components/mylink/link.jsx");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid/v1 */ "uuid/v1");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_8__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








const Note = ({
  note
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    user
  } = note;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setTimeout(() => {
      dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["OFF_FLOAT"],
        id: note.id
      });
    }, 6000);
  }, [note]);
  const date = new Date(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()());
  return __jsx("div", {
    id: note.id,
    className: "jsx-3558922848" + " " + "floating_note_cont shadow animated"
  }, __jsx("header", {
    className: "jsx-3558922848"
  }, __jsx("p", {
    className: "jsx-3558922848"
  }, (() => {
    switch (note.type) {
      case 'REACTION':
        return 'Reaccion';

      case 'FRIEND':
        return 'Solicitud';

      case 'COMMENT':
        return 'Comentario';

      case 'GIFT':
        return 'Regalo';
    }
  })()), __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["OFF_FLOAT"],
      id: note.id
    }),
    className: "jsx-3558922848"
  }, "x")), __jsx(_mylink_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: user.url
  }, __jsx("div", {
    className: "jsx-3558922848" + " " + "body"
  }, __jsx("img", {
    src: note.type === 'GIFT' ? user.img : user.perfilImg,
    alt: "",
    className: "jsx-3558922848"
  }), __jsx("div", {
    className: "jsx-3558922848" + " " + "info"
  }, __jsx("p", {
    className: "jsx-3558922848"
  }, note.type === 'GIFT' ? user.name : user.fullName), __jsx("small", {
    className: "jsx-3558922848"
  }, (() => {
    switch (note.type) {
      case 'REACTION':
        return 'Reacciono a uno de tus posts';

      case 'FRIEND':
        return 'Quiere Ser Tu Amigo';

      case 'COMMENT':
        return 'Comento uno de tus posts';

      case 'GIFT':
        return 'Has recibido un regalo';
    }
  })())))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3558922848"
  }, "div.floating_note_cont.jsx-3558922848{width:65%;background:#fff;position:relative;left:100%;margin:.5rem;z-index:50;border-radius:3px;}header.jsx-3558922848{padding:.2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#8bb940;}header.jsx-3558922848 p.jsx-3558922848{margin:0;}header.jsx-3558922848 button.jsx-3558922848{background:transparent;-webkit-transition:250ms ease;transition:250ms ease;border:none;color:#333;}header.jsx-3558922848 button.jsx-3558922848:focus{outline:none;}header.jsx-3558922848 button.jsx-3558922848:hover{color:#fff;}div.body.jsx-3558922848{padding:.2rem;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.body.jsx-3558922848 p.jsx-3558922848{margin:0;}.body.jsx-3558922848 .info.jsx-3558922848{margin-left:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}small.jsx-3558922848{font-size:11px;margin:0;}img.jsx-3558922848{width:60px;height:60px;border-radius:50%;object-fit:cover;object-position:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvZmxvYXRpbmctbm90ZXMvZmxvYXRpbmctbm90ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThEb0IsQUFHdUIsQUFTSSxBQU9MLEFBR2MsQUFNVixBQUdGLEFBR0csQUFLTCxBQUdRLEFBT0YsQUFJSixTQWpDYixBQW9CQSxDQXBDa0IsQ0E0QmxCLEFBc0JjLEVBekJkLENBaEJlLEFBc0JKLENBZUEsRUFQSSxNQXBCUyxBQWFULEFBbUJLLENBSnBCLEVBOUNvQixlQW1ERCxHQWxEUCxVQUNHLElBa0RVLFNBakRaLFFBZ0JDLEdBZk0sR0FpRHBCLE1BakNhLENBWG1CLEdBOEJSLEtBbEN4QixDQTJCQSxDQVhBLHVFQW1CeUIsa0NBOUJKLGlFQStCSSw0QkE5QkosbUJBQ3JCLDhEQThCQSIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL2Zsb2F0aW5nLW5vdGVzL2Zsb2F0aW5nLW5vdGVzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgT0ZGX0ZMT0FUIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCAnLi9mbG9hdGluZy1ub3Rlcy5zY3NzJztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcbmltcG9ydCBNeUxpbmsgZnJvbSAnLi4vbXlsaW5rL2xpbmsnO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92MSc7XG5cbmNvbnN0IE5vdGUgPSAoeyBub3RlIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IHVzZXIgfSA9IG5vdGU7XG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogT0ZGX0ZMT0FULCBpZDogbm90ZS5pZCB9KVxuICAgIH0sIDYwMDApXG4gIH0sW25vdGVdKTtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKERhdGUubm93KCkpO1xuICByZXR1cm4oXG4gICAgICA8ZGl2IGlkPXtub3RlLmlkfSBjbGFzc05hbWU9XCJmbG9hdGluZ19ub3RlX2NvbnQgc2hhZG93IGFuaW1hdGVkXCI+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICgoKT0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG5vdGUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSAnUkVBQ1RJT04nOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1JlYWNjaW9uJztcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ0ZSSUVORCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnU29saWNpdHVkJ1xuICAgICAgICAgICAgICAgICAgY2FzZSAnQ09NTUVOVCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnQ29tZW50YXJpbydcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ0dJRlQnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1JlZ2FsbydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IGRpc3BhdGNoKHsgdHlwZTogT0ZGX0ZMT0FULCBpZDogbm90ZS5pZCB9KX0gPng8L2J1dHRvbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxNeUxpbmsgaWQ9e3VzZXIudXJsfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtub3RlLnR5cGUgPT09ICdHSUZUJyA/IHVzZXIuaW1nIDogdXNlci5wZXJmaWxJbWd9IGFsdD1cIlwiLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgICA8cD57bm90ZS50eXBlID09PSAnR0lGVCcgPyB1c2VyLm5hbWUgOiB1c2VyLmZ1bGxOYW1lfTwvcD5cbiAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChub3RlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlICdSRUFDVElPTic6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1JlYWNjaW9ubyBhIHVubyBkZSB0dXMgcG9zdHMnO1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0ZSSUVORCc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1F1aWVyZSBTZXIgVHUgQW1pZ28nXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQ09NTUVOVCc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0NvbWVudG8gdW5vIGRlIHR1cyBwb3N0cydcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlICdHSUZUJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnSGFzIHJlY2liaWRvIHVuIHJlZ2FsbydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSkoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L015TGluaz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGRpdi5mbG9hdGluZ19ub3RlX2NvbnR7XG4gICAgICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IC41cmVtO1xuICAgICAgICAgICAgei1pbmRleDogNTA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlcntcbiAgICAgICAgICAgIHBhZGRpbmc6IC4ycmVtO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOGJiOTQwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgcHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIGJ1dHRvbntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYuYm9keXtcbiAgICAgICAgICAgIHBhZGRpbmc6IC4ycmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJvZHkgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ib2R5IC5pbmZve1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNtYWxse1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgRmxvYXRpbmdOb3RlcyA9ICgpID0+IHtcbiAgY29uc3Qgbm90ZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5mbG9hdGluZ25vdGVzKTtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmdfbWFpbl9jb250XCI+XG4gICAgICB7XG4gICAgICAgIG5vdGVzLm1hcCgobm90ZSwgaSkgPT4gPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlZCBmYWRlSW5MZWZ0XCI+PE5vdGUga2V5PXt1dWlkKCl9IG5vdGU9e25vdGV9IC8+PC9kaXY+KVxuICAgICAgfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZmxvYXRpbmdfbWFpbl9jb250e1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogLTMwJTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICAgIHotaW5kZXg6IDUwO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbG9hdGluZ05vdGVzO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/floating-notes/floating-notes.jsx */"));
};

const FloatingNotes = () => {
  const notes = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.floatingnotes);
  return __jsx("div", {
    className: "jsx-2440513572" + " " + "floating_main_cont"
  }, notes.map((note, i) => __jsx("div", {
    className: "jsx-2440513572" + " " + "animated fadeInLeft"
  }, __jsx(Note, {
    key: uuid_v1__WEBPACK_IMPORTED_MODULE_8___default()(),
    note: note
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2440513572"
  }, ".floating_main_cont.jsx-2440513572{position:fixed;top:0;left:-30%;border:1px solid red;width:30%;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;z-index:50;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvZmxvYXRpbmctbm90ZXMvZmxvYXRpbmctbm90ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFJa0IsQUFHMEIsZUFDVCxNQUNJLFVBQ1cscUJBQ1gsVUFDRyxhQUNBLDBFQUNpQixzR0FDbkIsV0FDYiIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL2Zsb2F0aW5nLW5vdGVzL2Zsb2F0aW5nLW5vdGVzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgT0ZGX0ZMT0FUIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCAnLi9mbG9hdGluZy1ub3Rlcy5zY3NzJztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcbmltcG9ydCBNeUxpbmsgZnJvbSAnLi4vbXlsaW5rL2xpbmsnO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92MSc7XG5cbmNvbnN0IE5vdGUgPSAoeyBub3RlIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IHVzZXIgfSA9IG5vdGU7XG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogT0ZGX0ZMT0FULCBpZDogbm90ZS5pZCB9KVxuICAgIH0sIDYwMDApXG4gIH0sW25vdGVdKTtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKERhdGUubm93KCkpO1xuICByZXR1cm4oXG4gICAgICA8ZGl2IGlkPXtub3RlLmlkfSBjbGFzc05hbWU9XCJmbG9hdGluZ19ub3RlX2NvbnQgc2hhZG93IGFuaW1hdGVkXCI+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICgoKT0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG5vdGUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSAnUkVBQ1RJT04nOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1JlYWNjaW9uJztcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ0ZSSUVORCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnU29saWNpdHVkJ1xuICAgICAgICAgICAgICAgICAgY2FzZSAnQ09NTUVOVCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnQ29tZW50YXJpbydcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ0dJRlQnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1JlZ2FsbydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IGRpc3BhdGNoKHsgdHlwZTogT0ZGX0ZMT0FULCBpZDogbm90ZS5pZCB9KX0gPng8L2J1dHRvbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxNeUxpbmsgaWQ9e3VzZXIudXJsfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtub3RlLnR5cGUgPT09ICdHSUZUJyA/IHVzZXIuaW1nIDogdXNlci5wZXJmaWxJbWd9IGFsdD1cIlwiLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgICA8cD57bm90ZS50eXBlID09PSAnR0lGVCcgPyB1c2VyLm5hbWUgOiB1c2VyLmZ1bGxOYW1lfTwvcD5cbiAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChub3RlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlICdSRUFDVElPTic6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1JlYWNjaW9ubyBhIHVubyBkZSB0dXMgcG9zdHMnO1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0ZSSUVORCc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1F1aWVyZSBTZXIgVHUgQW1pZ28nXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQ09NTUVOVCc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0NvbWVudG8gdW5vIGRlIHR1cyBwb3N0cydcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlICdHSUZUJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnSGFzIHJlY2liaWRvIHVuIHJlZ2FsbydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSkoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L015TGluaz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGRpdi5mbG9hdGluZ19ub3RlX2NvbnR7XG4gICAgICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IC41cmVtO1xuICAgICAgICAgICAgei1pbmRleDogNTA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlcntcbiAgICAgICAgICAgIHBhZGRpbmc6IC4ycmVtO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOGJiOTQwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgcHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIGJ1dHRvbntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYuYm9keXtcbiAgICAgICAgICAgIHBhZGRpbmc6IC4ycmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJvZHkgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ib2R5IC5pbmZve1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNtYWxse1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgRmxvYXRpbmdOb3RlcyA9ICgpID0+IHtcbiAgY29uc3Qgbm90ZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5mbG9hdGluZ25vdGVzKTtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmdfbWFpbl9jb250XCI+XG4gICAgICB7XG4gICAgICAgIG5vdGVzLm1hcCgobm90ZSwgaSkgPT4gPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlZCBmYWRlSW5MZWZ0XCI+PE5vdGUga2V5PXt1dWlkKCl9IG5vdGU9e25vdGV9IC8+PC9kaXY+KVxuICAgICAgfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZmxvYXRpbmdfbWFpbl9jb250e1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogLTMwJTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICAgIHotaW5kZXg6IDUwO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbG9hdGluZ05vdGVzO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/floating-notes/floating-notes.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FloatingNotes);

/***/ }),

/***/ "./components/floating-notes/floating-notes.scss":
/*!*******************************************************!*\
  !*** ./components/floating-notes/floating-notes.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/layout/header.jsx":
/*!**************************************!*\
  !*** ./components/layout/header.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo */ "./components/layout/logo.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.scss */ "./components/layout/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! uuid/v1 */ "uuid/v1");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mylink_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../mylink/link */ "./components/mylink/link.jsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;















const DownBar = () => {
  const {
    0: down,
    1: setDown
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.onscroll = () => {
      if (window.scrollY > 30) {
        setDown(true);
      } else {
        setDown(false);
      }
    };
  }, []);
  const {
    0: sm,
    1: setSm
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (window.innerWidth < 576) {
      setSm(true);
    }
  }, []);
  return __jsx("div", {
    className: "down_bar",
    style: {
      height: down || sm ? 40 : 0
    }
  });
};

const SearchBar = () => {
  const {
    0: suggest,
    1: setSuggest
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const onSuggest = async e => {
    const value = e.target.value;

    if (value) {
      value.toLocaleLowerCase();
      const res = await axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(`/user/search/${value}`);
      setSuggest(res.data);
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
  }))), visible && __jsx("ul", {
    style: {
      padding: suggest.length > 0 ? '.2rem' : '0'
    },
    className: "sugesstlist"
  }, suggest.map(item => __jsx("li", {
    key: uuid_v1__WEBPACK_IMPORTED_MODULE_12___default()()
  }, __jsx(_mylink_link__WEBPACK_IMPORTED_MODULE_14__["default"], {
    url: item.url,
    callback: setVisible
  }, __jsx("div", {
    className: "user_search_cont"
  }, __jsx("img", {
    src: item.perfilImg,
    alt: ""
  }), __jsx("p", null, item.fullName)))))));
};

const Gift = () => {
  const gifts = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.nav.notifications.gifts);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  const onView = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_8__["ON_VIEW_NAV"],
      note: _store_actions__WEBPACK_IMPORTED_MODULE_8__["navView"].GIFT
    });
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_8__["ON_VAULT"]
    });
  });
  return __jsx("div", {
    className: "btnicon_cont"
  }, __jsx("button", {
    id: "gift",
    onClick: onView,
    style: !gifts.view && gifts.items.length > 0 ? {
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
    style: !gifts.view && gifts.items.length > 0 ? {
      color: "#ff6c1a"
    } : {
      color: "#fff"
    }
  }, "+", gifts.items.length));
};

const Note = () => {
  const notes = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.nav.notifications.notes);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  const onView = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_8__["ON_VIEW_NAV"],
      note: _store_actions__WEBPACK_IMPORTED_MODULE_8__["navView"].NOTES
    });
  });
  const {
    0: pop,
    1: setPop
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleView = () => {
    onView();
    setPop(!pop);
  };

  const handleViewOut = () => {
    setPop(false);
  };

  return __jsx("div", {
    className: "jsx-1160065305" + " " + "btnicon_cont"
  }, __jsx("button", {
    id: "note",
    onClick: handleView,
    style: !notes.view && notes.items.length > 0 ? {
      background: "#fff",
      color: "#ff6c1a"
    } : {
      background: "transparent",
      color: "#fff"
    },
    className: "jsx-1160065305" + " " + "btnicon_nav"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faBell"]
  })), __jsx("span", {
    style: !notes.view && notes.items.length > 0 ? {
      color: "#ff6c1a"
    } : {
      color: "#fff"
    },
    className: "jsx-1160065305"
  }, "+", notes.items.length), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Popover"], {
    target: "note",
    isOpen: pop,
    placement: "bottom"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["PopoverBody"], null, __jsx("ul", {
    onClick: handleViewOut,
    onMouseLeave: handleViewOut,
    className: "jsx-1160065305"
  }, notes.items.map(item => __jsx("li", {
    key: uuid_v1__WEBPACK_IMPORTED_MODULE_12___default()(),
    className: "jsx-1160065305"
  }, __jsx(_mylink_link__WEBPACK_IMPORTED_MODULE_14__["default"], {
    url: item.url
  }, __jsx("div", {
    className: "jsx-1160065305" + " " + "friend_cont"
  }, __jsx("img", {
    src: item.perfilImg,
    alt: "",
    className: "jsx-1160065305"
  }), __jsx("p", {
    className: "jsx-1160065305"
  }, __jsx("strong", {
    className: "jsx-1160065305"
  }, `${item.name} ${item.lastName}`), __jsx("small", {
    className: "jsx-1160065305"
  }, item.action === 'LIKE' ? 'le gusta uno de tus posts' : 'comento uno de tus posts'))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1160065305"
  }, "ul.jsx-1160065305{list-style:none;margin:0;padding:0;}.friend_cont.jsx-1160065305{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:250ms ease;transition:250ms ease;}.friend_cont.jsx-1160065305 p.jsx-1160065305{margin:0;margin-left:.5rem;text-transform:capitalize;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.friend_cont.jsx-1160065305 p.jsx-1160065305 strong.jsx-1160065305:hover{-webkit-text-decoration:underline;text-decoration:underline;color:#8bb940;}.friend_cont.jsx-1160065305 img.jsx-1160065305{width:40px;height:40px;object-fit:cover;object-position:center;border-radius:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMExvQixBQUc2QixBQUtILEFBS0osQUFRaUIsQUFJZixTQVhPLEVBWU4sS0F0QkgsT0F1QlEsRUF0QlAsRUFVZ0IsUUFUNUIsS0FzQnlCLGFBWlYsT0FNQyxHQU9JLFdBcEJDLEFBY3JCLE9BT0EsOENBYndCLHdDQVBBLHNDQVFDLGNBUHpCLCtGQVFBIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9nbyBmcm9tICcuL2xvZ28nO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgJy4vaGVhZGVyLnNjc3MnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhU2VhcmNoLCBmYUdpZnQsIGZhSGVhcnQsIGZhVXNlciwgZmFDb2csIGZhQ29pbnMsIGZhQmVsbCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge1xuICBuYXZWaWV3LFxuICBPTl9WSUVXX05BVixcbiAgT05fTE9BREVSLFxuICBPTl9OT1RJRklDQVRJT05TLFxuICBPTl9MT0dJTiwgT0ZGX0ZMT0FULFxuICBPTl9GTE9BVCxcbiAgT05fR1JFRU5fTElLRSxcbiAgT05fVkFVTFQsXG59IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBQb3BvdmVyLCBQb3BvdmVyQm9keSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92MSc7XG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQgTXlMaW5rIGZyb20gJy4uL215bGluay9saW5rJztcblxuY29uc3QgRG93bkJhciA9ICgpID0+IHtcbiAgY29uc3QgW2Rvd24sIHNldERvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICB3aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XG4gICAgICBpZih3aW5kb3cuc2Nyb2xsWSA+IDMwKXtcbiAgICAgICAgc2V0RG93bih0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldERvd24oZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IFtzbSwgc2V0U21dID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPCA1NzYpe1xuICAgICAgc2V0U20odHJ1ZSk7XG4gICAgfVxuICB9LFtdKVxuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRvd25fYmFyXCIgc3R5bGU9e3sgaGVpZ2h0OiBkb3duIHx8IHNtID8gNDAgOiAwIH19IC8+XG59O1xuXG5jb25zdCBTZWFyY2hCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtzdWdnZXN0LCBzZXRTdWdnZXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uU3VnZ2VzdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBpZih2YWx1ZSl7XG4gICAgICB2YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAvdXNlci9zZWFyY2gvJHt2YWx1ZX1gKTtcbiAgICAgIHNldFN1Z2dlc3QocmVzLmRhdGEpO1xuICAgIH0gZWxzZXtcbiAgICAgIHNldFN1Z2dlc3QoW10pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaGJhcl9tYWluX2NvbnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoX2NvbnRcIj5cbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtvblN1Z2dlc3R9IHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgICA8cD48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2VhcmNofSAvPjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAge1xuICAgICAgICB2aXNpYmxlICYmIChcbiAgICAgICAgICA8dWwgc3R5bGU9e3sgcGFkZGluZzogc3VnZ2VzdC5sZW5ndGggPiAwID8gJy4ycmVtJyA6ICcwJyB9fSBjbGFzc05hbWU9XCJzdWdlc3N0bGlzdFwiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdWdnZXN0Lm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXt1dWlkKCl9PlxuICAgICAgICAgICAgICAgICAgPE15TGluayB1cmw9e2l0ZW0udXJsfSBjYWxsYmFjaz17c2V0VmlzaWJsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcl9zZWFyY2hfY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLnBlcmZpbEltZ30gYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLmZ1bGxOYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L015TGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufTtcblxuY29uc3QgR2lmdCA9ICgpID0+IHtcbiAgY29uc3QgZ2lmdHMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5uYXYubm90aWZpY2F0aW9ucy5naWZ0cyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgb25WaWV3ID0gdXNlQ2FsbGJhY2soKCk9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBPTl9WSUVXX05BViwgbm90ZTogbmF2Vmlldy5HSUZUIH0pO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogT05fVkFVTFQgfSk7XG4gIH0pXG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuaWNvbl9jb250XCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGlkPVwiZ2lmdFwiXG4gICAgICAgIG9uQ2xpY2s9e29uVmlld31cbiAgICAgICAgc3R5bGU9e1xuICAgICAgICAgICFnaWZ0cy52aWV3ICYmIGdpZnRzLml0ZW1zLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kOiBcIiNmZmZcIiwgY29sb3I6IFwiI2ZmNmMxYVwiIH1cbiAgICAgICAgICAgIDogeyBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsIGNvbG9yOiBcIiNmZmZcIiB9XG4gICAgICAgIH1cbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuaWNvbl9uYXZcIlxuICAgICAgPlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhR2lmdH0gLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPHNwYW5cbiAgICAgICAgc3R5bGU9e1xuICAgICAgICAgICFnaWZ0cy52aWV3ICYmIGdpZnRzLml0ZW1zLmxlbmd0aCA+IDBcbiAgICAgICAgICA/IHsgY29sb3I6IFwiI2ZmNmMxYVwiIH1cbiAgICAgICAgICA6IHsgY29sb3I6IFwiI2ZmZlwiIH1cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICAre2dpZnRzLml0ZW1zLmxlbmd0aH1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgTm90ZSA9ICgpID0+IHtcbiAgY29uc3Qgbm90ZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5uYXYubm90aWZpY2F0aW9ucy5ub3Rlcyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgb25WaWV3ID0gdXNlQ2FsbGJhY2soKCk9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBPTl9WSUVXX05BViwgbm90ZTogbmF2Vmlldy5OT1RFUyB9KTtcbiAgfSk7XG4gIGNvbnN0IFtwb3AsIHNldFBvcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZVZpZXcgPSAoKSA9PiB7XG4gICAgb25WaWV3KCk7XG4gICAgc2V0UG9wKCFwb3ApO1xuICB9O1xuICBjb25zdCBoYW5kbGVWaWV3T3V0ID0gKCkgPT57XG4gICAgc2V0UG9wKGZhbHNlKVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuaWNvbl9jb250XCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGlkPVwibm90ZVwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVZpZXd9XG4gICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAhbm90ZXMudmlldyAmJiBub3Rlcy5pdGVtcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IHsgYmFja2dyb3VuZDogXCIjZmZmXCIsIGNvbG9yOiBcIiNmZjZjMWFcIiB9XG4gICAgICAgICAgICA6IHsgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLCBjb2xvcjogXCIjZmZmXCIgfVxuICAgICAgICB9XG4gICAgICAgIGNsYXNzTmFtZT1cImJ0bmljb25fbmF2XCJcbiAgICAgID5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJlbGx9IC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxzcGFuXG4gICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAhbm90ZXMudmlldyAmJiBub3Rlcy5pdGVtcy5sZW5ndGggPiAwXG4gICAgICAgICAgPyB7IGNvbG9yOiBcIiNmZjZjMWFcIiB9XG4gICAgICAgICAgOiB7IGNvbG9yOiBcIiNmZmZcIiB9XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgK3tub3Rlcy5pdGVtcy5sZW5ndGh9XG4gICAgICA8L3NwYW4+XG4gICAgICA8UG9wb3ZlciB0YXJnZXQ9XCJub3RlXCIgaXNPcGVuPXtwb3B9IHBsYWNlbWVudD1cImJvdHRvbVwiPlxuICAgICAgICAgIDxQb3BvdmVyQm9keT5cbiAgICAgICAgICAgIDx1bCBvbkNsaWNrPXtoYW5kbGVWaWV3T3V0fSBvbk1vdXNlTGVhdmU9e2hhbmRsZVZpZXdPdXR9PlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbm90ZXMuaXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17dXVpZCgpfT5cbiAgICAgICAgICAgICAgICAgICAgPE15TGluayB1cmw9e2l0ZW0udXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyaWVuZF9jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5wZXJmaWxJbWd9IGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntgJHtpdGVtLm5hbWV9ICR7aXRlbS5sYXN0TmFtZX1gfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uYWN0aW9uID09PSAnTElLRScgPyAnbGUgZ3VzdGEgdW5vIGRlIHR1cyBwb3N0cycgOiAnY29tZW50byB1bm8gZGUgdHVzIHBvc3RzJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9NeUxpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L1BvcG92ZXJCb2R5PlxuICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICB1bHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZnJpZW5kX2NvbnR7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mcmllbmRfY29udCBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZyaWVuZF9jb250IHAgc3Ryb25nOmhvdmVye1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICBjb2xvcjogIzhiYjk0MDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZyaWVuZF9jb250IGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgRnJpZW5kID0gKCkgPT4ge1xuICBjb25zdCBmcmllbmQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5uYXYubm90aWZpY2F0aW9ucy5mcmllbmRSZXEpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IG9uVmlldyA9IHVzZUNhbGxiYWNrKCgpPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogT05fVklFV19OQVYsIG5vdGU6IG5hdlZpZXcuRlJJRU5EIH0pO1xuICB9KTtcblxuICBjb25zdCBbcG9wLCBzZXRQb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVWaWV3ID0gKCkgPT4ge1xuICAgIG9uVmlldygpO1xuICAgIHNldFBvcCghcG9wKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVZpZXdPdXQgPSAoKSA9PntcbiAgICBzZXRQb3AoZmFsc2UpXG4gIH1cblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidG5pY29uX2NvbnRcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgaWQ9XCJmcmllbmRcIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVWaWV3fVxuICAgICAgICBzdHlsZT17XG4gICAgICAgICAgIWZyaWVuZC52aWV3ICYmIGZyaWVuZC5pdGVtcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IHsgYmFja2dyb3VuZDogXCIjZmZmXCIsIGNvbG9yOiBcIiNmZjZjMWFcIiB9XG4gICAgICAgICAgICA6IHsgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLCBjb2xvcjogXCIjZmZmXCIgfVxuICAgICAgICB9XG4gICAgICAgIGNsYXNzTmFtZT1cImJ0bmljb25fbmF2XCJcbiAgICAgID5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxzcGFuXG4gICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAhZnJpZW5kLnZpZXcgJiYgZnJpZW5kLml0ZW1zLmxlbmd0aCA+IDBcbiAgICAgICAgICA/IHsgY29sb3I6IFwiI2ZmNmMxYVwiIH1cbiAgICAgICAgICA6IHsgY29sb3I6IFwiI2ZmZlwiIH1cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICAre2ZyaWVuZC5pdGVtcy5sZW5ndGh9XG4gICAgICA8L3NwYW4+XG4gICAgICA8UG9wb3ZlciB0YXJnZXQ9XCJmcmllbmRcIiBpc09wZW49e3BvcH0gcGxhY2VtZW50PVwiYm90dG9tXCI+XG4gICAgICAgICAgPFBvcG92ZXJCb2R5PlxuICAgICAgICAgICAgPHVsIG9uTW91c2VMZWF2ZT17aGFuZGxlVmlld091dH0+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmcmllbmQuaXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17dXVpZCgpfT5cbiAgICAgICAgICAgICAgICAgICAgPE15TGluayB1cmw9e2l0ZW0udXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyaWVuZF9jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5wZXJmaWxJbWd9IGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntgJHtpdGVtLm5hbWV9ICR7aXRlbS5sYXN0TmFtZX1gfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9NeUxpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L1BvcG92ZXJCb2R5PlxuICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICB1bHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZnJpZW5kX2NvbnR7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mcmllbmRfY29udCBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZnJpZW5kX2NvbnQgcDpob3ZlcntcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgY29sb3I6ICM4YmI5NDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mcmllbmRfY29udCBpbWd7XG4gICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE9wdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW3BvcCwgc2V0UG9wXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm5hdi5ub3RpZmljYXRpb25zLmlkKTtcbiAgY29uc3Qgb25Mb2dvdXQgPSB1c2VDYWxsYmFjayhhc3luYyAoKT0+IHtcbiAgICB0cnl7XG4gICAgICBhd2FpdCBheGlvcy5nZXQoJy91c2VyL2xvZ291dCcpO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBPTl9MT0dJTiwgb3B0aW9uOiBmYWxzZSB9KTtcbiAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICB9Y2F0Y2goZXJyKXtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9KVxuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bmljb25fY29udFwiPlxuICAgICAgPGJ1dHRvbiBpZD1cIm9wdGlvblwiIG9uQ2xpY2s9eygpPT4gc2V0UG9wKCFwb3ApfSBjbGFzc05hbWU9XCJidG5pY29uX25hdlwiPlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ29nfSAvPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8UG9wb3ZlciB0YXJnZXQ9XCJvcHRpb25cIiBpc09wZW49e3BvcH0gcGxhY2VtZW50PVwiYm90dG9tXCI+XG4gICAgICAgIDxQb3BvdmVyQm9keSBzdHlsZT17eyBwYWRkaW5nOjAgfX0+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm9wdGlvbl9saXN0XCIgb25Nb3VzZUxlYXZlPXsoKT0+IHNldFBvcChmYWxzZSl9PlxuICAgICAgICAgICAgPGxpPjxNeUxpbmsgdXJsPXtgL3BlcmZpbC8ke2lkfWB9PjxwIHN0eWxlPXt7IGNvbG9yOiAnIzhiYjk0MCcsIG1hcmdpbjowIH19PlBlcmZpbDwvcD48L015TGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxidXR0b24gb25DbGljaz17b25Mb2dvdXR9PnNhbGlyPC9idXR0b24+PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L1BvcG92ZXJCb2R5PlxuICAgICAgPC9Qb3BvdmVyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IFdhbGxldCA9ICgpID0+IHtcbiAgY29uc3Qgd2FsbGV0ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubmF2Lm5vdGlmaWNhdGlvbnMud2FsbGV0KTtcblxuICByZXR1cm4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImJ0bmljb25fY29udFwiPlxuICAgIDxwIGNsYXNzTmFtZT1cIndhbGxldF9jb250XCI+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNvaW5zfSAvPjwvcD5cbiAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTYgfX0+K3t3YWxsZXR9PC9zcGFuPlxuICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBOb3RpZmljYXRpb25zID0gKCkgPT4ge1xuXG4gIHJldHVybihcbiAgICA8dWwgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uc19tYWluX2NvbnRcIj5cbiAgICAgIDxsaT48R2lmdCAvPjwvbGk+XG4gICAgICA8bGk+PE5vdGUgLz48L2xpPlxuICAgICAgPGxpPjxGcmllbmQgLz48L2xpPlxuICAgICAgPGxpPjxPcHRpb24gLz48L2xpPlxuICAgICAgPGxpPjxXYWxsZXQgLz48L2xpPlxuICAgIDwvdWw+XG4gICk7XG59XG5cbmNvbnN0IEJhckxvYWRlciA9ICgpID0+IHtcbiAgY29uc3QgbG9hZGVyID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubmF2LmxvYWRlcik7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgb25Mb2FkZXIgPSB1c2VDYWxsYmFjaygobG9hZGVyKT0+IGRpc3BhdGNoKHsgdHlwZTogT05fTE9BREVSLCBsb2FkZXIgfSkpO1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImJhcmxvYWRlclwiIHN0eWxlPXt7IHdpZHRoOiBgJHtsb2FkZXJ9JWAsIG9wYWNpdHk6IGxvYWRlciA+IDAgPyAxIDogMCB9fSAvPlxufVxuXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgbmF2ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubmF2KTtcbiAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBvbk5vdGlmaWNhdGlvbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5e1xuICAgICAgaWYobmF2LmxvZ2luKXtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAvdXNlci9ub3RpZmljYXRpb25zYCk7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogT05fTk9USUZJQ0FUSU9OUywgbm90aWZpY2F0aW9uczogcmVzLmRhdGEgfSk7XG4gICAgICB9XG4gICAgfWNhdGNoKGVycil7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNvY2tldCA9IGlvKCk7XG4gICAgc29ja2V0Lm9wZW4oKTtcbiAgICBzb2NrZXQub24oYG5hdjoke25hdi5ub3RpZmljYXRpb25zLmlkfWAsIChwYXlsb2FkKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhwYXlsb2FkKTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ09OX05PVEUnLCBwYXlsb2FkIH0pO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBPTl9GTE9BVCwgcGF5bG9hZCB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4gc29ja2V0LmNsb3NlKCk7XG4gIH0sW25hdi5ub3RpZmljYXRpb25zXSk7XG5cbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIG9uTm90aWZpY2F0aW9ucygpO1xuICB9LFtuYXYubG9naW5dKTtcblxuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgc2V0V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuICB9LFtdKTtcblxuICByZXR1cm4oXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJfbWFpbl9jb250XCI+XG4gICAgICAgIDxCYXJMb2FkZXIgLz5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgPERvd25CYXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvX3NlYXJjaFwiPlxuICAgICAgICAgIDxMb2dvIHVybD0nLycgLz5cbiAgICAgICAgICB7IG5hdi5sb2dpbiAmJiB3aWR0aCA+IDk5MiAmJiA8U2VhcmNoQmFyIC8+IH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsgIW5hdi5sb2dpbiAmJiA8TGluayBocmVmPVwiL2xvZ2luXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG5fbG9naW5cIj5sb2dpbjwvYnV0dG9uPjwvTGluaz4gfVxuICAgICAgICB7IG5hdi5sb2dpbiAmJiA8Tm90aWZpY2F0aW9ucyAvPiB9XG4gICAgICAgIDwvbmF2PlxuICAgICAgICB7IHdpZHRoIDwgNTc2ICYmIG5hdi5sb2dpbiAmJiA8U2VhcmNoQmFyIC8+IH1cbiAgICA8L2hlYWRlcj5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/layout/header.jsx */"));
};

const Friend = () => {
  const friend = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.nav.notifications.friendReq);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  const onView = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_8__["ON_VIEW_NAV"],
      note: _store_actions__WEBPACK_IMPORTED_MODULE_8__["navView"].FRIEND
    });
  });
  const {
    0: pop,
    1: setPop
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleView = () => {
    onView();
    setPop(!pop);
  };

  const handleViewOut = () => {
    setPop(false);
  };

  return __jsx("div", {
    className: "jsx-1415226531" + " " + "btnicon_cont"
  }, __jsx("button", {
    id: "friend",
    onClick: handleView,
    style: !friend.view && friend.items.length > 0 ? {
      background: "#fff",
      color: "#ff6c1a"
    } : {
      background: "transparent",
      color: "#fff"
    },
    className: "jsx-1415226531" + " " + "btnicon_nav"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faUser"]
  })), __jsx("span", {
    style: !friend.view && friend.items.length > 0 ? {
      color: "#ff6c1a"
    } : {
      color: "#fff"
    },
    className: "jsx-1415226531"
  }, "+", friend.items.length), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Popover"], {
    target: "friend",
    isOpen: pop,
    placement: "bottom"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["PopoverBody"], null, __jsx("ul", {
    onMouseLeave: handleViewOut,
    className: "jsx-1415226531"
  }, friend.items.map(item => __jsx("li", {
    key: uuid_v1__WEBPACK_IMPORTED_MODULE_12___default()(),
    className: "jsx-1415226531"
  }, __jsx(_mylink_link__WEBPACK_IMPORTED_MODULE_14__["default"], {
    url: item.url
  }, __jsx("div", {
    className: "jsx-1415226531" + " " + "friend_cont"
  }, __jsx("img", {
    src: item.perfilImg,
    alt: "",
    className: "jsx-1415226531"
  }), __jsx("p", {
    className: "jsx-1415226531"
  }, `${item.name} ${item.lastName}`)))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1415226531"
  }, "ul.jsx-1415226531{list-style:none;margin:0;padding:0;}.friend_cont.jsx-1415226531{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:250ms ease;transition:250ms ease;}.friend_cont.jsx-1415226531 p.jsx-1415226531{margin:0;margin-left:.5rem;text-transform:capitalize;}.friend_cont.jsx-1415226531 p.jsx-1415226531:hover{-webkit-text-decoration:underline;text-decoration:underline;color:#8bb940;}.friend_cont.jsx-1415226531 img.jsx-1415226531{width:40px;height:40px;object-fit:cover;object-position:center;border-radius:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd1JvQixBQUc2QixBQUtILEFBS0osQUFLaUIsQUFJZixTQVJPLEVBU04sS0FuQkgsT0FvQlEsRUFuQlAsRUFVZ0IsUUFUNUIsS0FtQnlCLGFBVHpCLE9BR2dCLEdBT0ksV0FqQkMsQUFXckIsT0FPQSxzRkFqQndCLG9EQUN4QiIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL2xheW91dC9oZWFkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi9sb2dvJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0ICcuL2hlYWRlci5zY3NzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYVNlYXJjaCwgZmFHaWZ0LCBmYUhlYXJ0LCBmYVVzZXIsIGZhQ29nLCBmYUNvaW5zLCBmYUJlbGwgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtcbiAgbmF2VmlldyxcbiAgT05fVklFV19OQVYsXG4gIE9OX0xPQURFUixcbiAgT05fTk9USUZJQ0FUSU9OUyxcbiAgT05fTE9HSU4sIE9GRl9GTE9BVCxcbiAgT05fRkxPQVQsXG4gIE9OX0dSRUVOX0xJS0UsXG4gIE9OX1ZBVUxULFxufSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgUG9wb3ZlciwgUG9wb3ZlckJvZHkgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQvdjEnO1xuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuaW1wb3J0IE15TGluayBmcm9tICcuLi9teWxpbmsvbGluayc7XG5cbmNvbnN0IERvd25CYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtkb3duLCBzZXREb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICAgICAgaWYod2luZG93LnNjcm9sbFkgPiAzMCl7XG4gICAgICAgIHNldERvd24odHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXREb3duKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBbc20sIHNldFNtXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgNTc2KXtcbiAgICAgIHNldFNtKHRydWUpO1xuICAgIH1cbiAgfSxbXSlcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkb3duX2JhclwiIHN0eWxlPXt7IGhlaWdodDogZG93biB8fCBzbSA/IDQwIDogMCB9fSAvPlxufTtcblxuY29uc3QgU2VhcmNoQmFyID0gKCkgPT4ge1xuICBjb25zdCBbc3VnZ2VzdCwgc2V0U3VnZ2VzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvblN1Z2dlc3QgPSBhc3luYyAoZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgaWYodmFsdWUpe1xuICAgICAgdmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgL3VzZXIvc2VhcmNoLyR7dmFsdWV9YCk7XG4gICAgICBzZXRTdWdnZXN0KHJlcy5kYXRhKTtcbiAgICB9IGVsc2V7XG4gICAgICBzZXRTdWdnZXN0KFtdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hiYXJfbWFpbl9jb250XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaF9jb250XCI+XG4gICAgICAgIDxpbnB1dCBvbkNoYW5nZT17b25TdWdnZXN0fSB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAgPHA+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNlYXJjaH0gLz48L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtcbiAgICAgICAgdmlzaWJsZSAmJiAoXG4gICAgICAgICAgPHVsIHN0eWxlPXt7IHBhZGRpbmc6IHN1Z2dlc3QubGVuZ3RoID4gMCA/ICcuMnJlbScgOiAnMCcgfX0gY2xhc3NOYW1lPVwic3VnZXNzdGxpc3RcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3VnZ2VzdC5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17dXVpZCgpfT5cbiAgICAgICAgICAgICAgICAgIDxNeUxpbmsgdXJsPXtpdGVtLnVybH0gY2FsbGJhY2s9e3NldFZpc2libGV9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJfc2VhcmNoX2NvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5wZXJmaWxJbWd9IGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5mdWxsTmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9NeUxpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICApXG4gICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn07XG5cbmNvbnN0IEdpZnQgPSAoKSA9PiB7XG4gIGNvbnN0IGdpZnRzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubmF2Lm5vdGlmaWNhdGlvbnMuZ2lmdHMpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IG9uVmlldyA9IHVzZUNhbGxiYWNrKCgpPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogT05fVklFV19OQVYsIG5vdGU6IG5hdlZpZXcuR0lGVCB9KTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IE9OX1ZBVUxUIH0pO1xuICB9KVxuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bmljb25fY29udFwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBpZD1cImdpZnRcIlxuICAgICAgICBvbkNsaWNrPXtvblZpZXd9XG4gICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAhZ2lmdHMudmlldyAmJiBnaWZ0cy5pdGVtcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IHsgYmFja2dyb3VuZDogXCIjZmZmXCIsIGNvbG9yOiBcIiNmZjZjMWFcIiB9XG4gICAgICAgICAgICA6IHsgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLCBjb2xvcjogXCIjZmZmXCIgfVxuICAgICAgICB9XG4gICAgICAgIGNsYXNzTmFtZT1cImJ0bmljb25fbmF2XCJcbiAgICAgID5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdpZnR9IC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxzcGFuXG4gICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAhZ2lmdHMudmlldyAmJiBnaWZ0cy5pdGVtcy5sZW5ndGggPiAwXG4gICAgICAgICAgPyB7IGNvbG9yOiBcIiNmZjZjMWFcIiB9XG4gICAgICAgICAgOiB7IGNvbG9yOiBcIiNmZmZcIiB9XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgK3tnaWZ0cy5pdGVtcy5sZW5ndGh9XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IE5vdGUgPSAoKSA9PiB7XG4gIGNvbnN0IG5vdGVzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubmF2Lm5vdGlmaWNhdGlvbnMubm90ZXMpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IG9uVmlldyA9IHVzZUNhbGxiYWNrKCgpPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogT05fVklFV19OQVYsIG5vdGU6IG5hdlZpZXcuTk9URVMgfSk7XG4gIH0pO1xuICBjb25zdCBbcG9wLCBzZXRQb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVWaWV3ID0gKCkgPT4ge1xuICAgIG9uVmlldygpO1xuICAgIHNldFBvcCghcG9wKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlVmlld091dCA9ICgpID0+e1xuICAgIHNldFBvcChmYWxzZSlcbiAgfVxuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bmljb25fY29udFwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBpZD1cIm5vdGVcIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVWaWV3fVxuICAgICAgICBzdHlsZT17XG4gICAgICAgICAgIW5vdGVzLnZpZXcgJiYgbm90ZXMuaXRlbXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyB7IGJhY2tncm91bmQ6IFwiI2ZmZlwiLCBjb2xvcjogXCIjZmY2YzFhXCIgfVxuICAgICAgICAgICAgOiB7IGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIiwgY29sb3I6IFwiI2ZmZlwiIH1cbiAgICAgICAgfVxuICAgICAgICBjbGFzc05hbWU9XCJidG5pY29uX25hdlwiXG4gICAgICA+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCZWxsfSAvPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8c3BhblxuICAgICAgICBzdHlsZT17XG4gICAgICAgICAgIW5vdGVzLnZpZXcgJiYgbm90ZXMuaXRlbXMubGVuZ3RoID4gMFxuICAgICAgICAgID8geyBjb2xvcjogXCIjZmY2YzFhXCIgfVxuICAgICAgICAgIDogeyBjb2xvcjogXCIjZmZmXCIgfVxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgICt7bm90ZXMuaXRlbXMubGVuZ3RofVxuICAgICAgPC9zcGFuPlxuICAgICAgPFBvcG92ZXIgdGFyZ2V0PVwibm90ZVwiIGlzT3Blbj17cG9wfSBwbGFjZW1lbnQ9XCJib3R0b21cIj5cbiAgICAgICAgICA8UG9wb3ZlckJvZHk+XG4gICAgICAgICAgICA8dWwgb25DbGljaz17aGFuZGxlVmlld091dH0gb25Nb3VzZUxlYXZlPXtoYW5kbGVWaWV3T3V0fT5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5vdGVzLml0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3V1aWQoKX0+XG4gICAgICAgICAgICAgICAgICAgIDxNeUxpbmsgdXJsPXtpdGVtLnVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcmllbmRfY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0ucGVyZmlsSW1nfSBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57YCR7aXRlbS5uYW1lfSAke2l0ZW0ubGFzdE5hbWV9YH08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmFjdGlvbiA9PT0gJ0xJS0UnID8gJ2xlIGd1c3RhIHVubyBkZSB0dXMgcG9zdHMnIDogJ2NvbWVudG8gdW5vIGRlIHR1cyBwb3N0cyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTXlMaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9Qb3BvdmVyQm9keT5cbiAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgdWx7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZyaWVuZF9jb250e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZnJpZW5kX2NvbnQgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLjVyZW07XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mcmllbmRfY29udCBwIHN0cm9uZzpob3ZlcntcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgY29sb3I6ICM4YmI5NDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mcmllbmRfY29udCBpbWd7XG4gICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEZyaWVuZCA9ICgpID0+IHtcbiAgY29uc3QgZnJpZW5kID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubmF2Lm5vdGlmaWNhdGlvbnMuZnJpZW5kUmVxKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBvblZpZXcgPSB1c2VDYWxsYmFjaygoKT0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IE9OX1ZJRVdfTkFWLCBub3RlOiBuYXZWaWV3LkZSSUVORCB9KTtcbiAgfSk7XG5cbiAgY29uc3QgW3BvcCwgc2V0UG9wXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlVmlldyA9ICgpID0+IHtcbiAgICBvblZpZXcoKTtcbiAgICBzZXRQb3AoIXBvcCk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVWaWV3T3V0ID0gKCkgPT57XG4gICAgc2V0UG9wKGZhbHNlKVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuaWNvbl9jb250XCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGlkPVwiZnJpZW5kXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlVmlld31cbiAgICAgICAgc3R5bGU9e1xuICAgICAgICAgICFmcmllbmQudmlldyAmJiBmcmllbmQuaXRlbXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyB7IGJhY2tncm91bmQ6IFwiI2ZmZlwiLCBjb2xvcjogXCIjZmY2YzFhXCIgfVxuICAgICAgICAgICAgOiB7IGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIiwgY29sb3I6IFwiI2ZmZlwiIH1cbiAgICAgICAgfVxuICAgICAgICBjbGFzc05hbWU9XCJidG5pY29uX25hdlwiXG4gICAgICA+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSAvPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8c3BhblxuICAgICAgICBzdHlsZT17XG4gICAgICAgICAgIWZyaWVuZC52aWV3ICYmIGZyaWVuZC5pdGVtcy5sZW5ndGggPiAwXG4gICAgICAgICAgPyB7IGNvbG9yOiBcIiNmZjZjMWFcIiB9XG4gICAgICAgICAgOiB7IGNvbG9yOiBcIiNmZmZcIiB9XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgK3tmcmllbmQuaXRlbXMubGVuZ3RofVxuICAgICAgPC9zcGFuPlxuICAgICAgPFBvcG92ZXIgdGFyZ2V0PVwiZnJpZW5kXCIgaXNPcGVuPXtwb3B9IHBsYWNlbWVudD1cImJvdHRvbVwiPlxuICAgICAgICAgIDxQb3BvdmVyQm9keT5cbiAgICAgICAgICAgIDx1bCBvbk1vdXNlTGVhdmU9e2hhbmRsZVZpZXdPdXR9PlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZnJpZW5kLml0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3V1aWQoKX0+XG4gICAgICAgICAgICAgICAgICAgIDxNeUxpbmsgdXJsPXtpdGVtLnVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcmllbmRfY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0ucGVyZmlsSW1nfSBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57YCR7aXRlbS5uYW1lfSAke2l0ZW0ubGFzdE5hbWV9YH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTXlMaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9Qb3BvdmVyQm9keT5cbiAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgdWx7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZyaWVuZF9jb250e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZnJpZW5kX2NvbnQgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLjVyZW07XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZyaWVuZF9jb250IHA6aG92ZXJ7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIGNvbG9yOiAjOGJiOTQwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZnJpZW5kX2NvbnQgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBPcHRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IFtwb3AsIHNldFBvcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5uYXYubm90aWZpY2F0aW9ucy5pZCk7XG4gIGNvbnN0IG9uTG9nb3V0ID0gdXNlQ2FsbGJhY2soYXN5bmMgKCk9PiB7XG4gICAgdHJ5e1xuICAgICAgYXdhaXQgYXhpb3MuZ2V0KCcvdXNlci9sb2dvdXQnKTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogT05fTE9HSU4sIG9wdGlvbjogZmFsc2UgfSk7XG4gICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XG4gICAgfWNhdGNoKGVycil7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfSlcblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidG5pY29uX2NvbnRcIj5cbiAgICAgIDxidXR0b24gaWQ9XCJvcHRpb25cIiBvbkNsaWNrPXsoKT0+IHNldFBvcCghcG9wKX0gY2xhc3NOYW1lPVwiYnRuaWNvbl9uYXZcIj5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNvZ30gLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPFBvcG92ZXIgdGFyZ2V0PVwib3B0aW9uXCIgaXNPcGVuPXtwb3B9IHBsYWNlbWVudD1cImJvdHRvbVwiPlxuICAgICAgICA8UG9wb3ZlckJvZHkgc3R5bGU9e3sgcGFkZGluZzowIH19PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJvcHRpb25fbGlzdFwiIG9uTW91c2VMZWF2ZT17KCk9PiBzZXRQb3AoZmFsc2UpfT5cbiAgICAgICAgICAgIDxsaT48TXlMaW5rIHVybD17YC9wZXJmaWwvJHtpZH1gfT48cCBzdHlsZT17eyBjb2xvcjogJyM4YmI5NDAnLCBtYXJnaW46MCB9fT5QZXJmaWw8L3A+PC9NeUxpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48YnV0dG9uIG9uQ2xpY2s9e29uTG9nb3V0fT5zYWxpcjwvYnV0dG9uPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9Qb3BvdmVyQm9keT5cbiAgICAgIDwvUG9wb3Zlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBXYWxsZXQgPSAoKSA9PiB7XG4gIGNvbnN0IHdhbGxldCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm5hdi5ub3RpZmljYXRpb25zLndhbGxldCk7XG5cbiAgcmV0dXJuIChcbiAgPGRpdiBjbGFzc05hbWU9XCJidG5pY29uX2NvbnRcIj5cbiAgICA8cCBjbGFzc05hbWU9XCJ3YWxsZXRfY29udFwiPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFDb2luc30gLz48L3A+XG4gICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDE2IH19Pit7d2FsbGV0fTwvc3Bhbj5cbiAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTm90aWZpY2F0aW9ucyA9ICgpID0+IHtcblxuICByZXR1cm4oXG4gICAgPHVsIGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbnNfbWFpbl9jb250XCI+XG4gICAgICA8bGk+PEdpZnQgLz48L2xpPlxuICAgICAgPGxpPjxOb3RlIC8+PC9saT5cbiAgICAgIDxsaT48RnJpZW5kIC8+PC9saT5cbiAgICAgIDxsaT48T3B0aW9uIC8+PC9saT5cbiAgICAgIDxsaT48V2FsbGV0IC8+PC9saT5cbiAgICA8L3VsPlxuICApO1xufVxuXG5jb25zdCBCYXJMb2FkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGxvYWRlciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm5hdi5sb2FkZXIpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IG9uTG9hZGVyID0gdXNlQ2FsbGJhY2soKGxvYWRlcik9PiBkaXNwYXRjaCh7IHR5cGU6IE9OX0xPQURFUiwgbG9hZGVyIH0pKTtcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJiYXJsb2FkZXJcIiBzdHlsZT17eyB3aWR0aDogYCR7bG9hZGVyfSVgLCBvcGFjaXR5OiBsb2FkZXIgPiAwID8gMSA6IDAgfX0gLz5cbn1cblxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm5hdik7XG4gIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgb25Ob3RpZmljYXRpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeXtcbiAgICAgIGlmKG5hdi5sb2dpbil7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgL3VzZXIvbm90aWZpY2F0aW9uc2ApO1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IE9OX05PVElGSUNBVElPTlMsIG5vdGlmaWNhdGlvbnM6IHJlcy5kYXRhIH0pO1xuICAgICAgfVxuICAgIH1jYXRjaChlcnIpe1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzb2NrZXQgPSBpbygpO1xuICAgIHNvY2tldC5vcGVuKCk7XG4gICAgc29ja2V0Lm9uKGBuYXY6JHtuYXYubm90aWZpY2F0aW9ucy5pZH1gLCAocGF5bG9hZCkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocGF5bG9hZCk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdPTl9OT1RFJywgcGF5bG9hZCB9KTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogT05fRkxPQVQsIHBheWxvYWQgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuICgpID0+IHNvY2tldC5jbG9zZSgpO1xuICB9LFtuYXYubm90aWZpY2F0aW9uc10pO1xuXG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBvbk5vdGlmaWNhdGlvbnMoKTtcbiAgfSxbbmF2LmxvZ2luXSk7XG5cbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIHNldFdpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgfSxbXSk7XG5cbiAgcmV0dXJuKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyX21haW5fY29udFwiPlxuICAgICAgICA8QmFyTG9hZGVyIC8+XG4gICAgICAgIDxuYXY+XG4gICAgICAgIDxEb3duQmFyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb19zZWFyY2hcIj5cbiAgICAgICAgICA8TG9nbyB1cmw9Jy8nIC8+XG4gICAgICAgICAgeyBuYXYubG9naW4gJiYgd2lkdGggPiA5OTIgJiYgPFNlYXJjaEJhciAvPiB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ICFuYXYubG9naW4gJiYgPExpbmsgaHJlZj1cIi9sb2dpblwiPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuX2xvZ2luXCI+bG9naW48L2J1dHRvbj48L0xpbms+IH1cbiAgICAgICAgeyBuYXYubG9naW4gJiYgPE5vdGlmaWNhdGlvbnMgLz4gfVxuICAgICAgICA8L25hdj5cbiAgICAgICAgeyB3aWR0aCA8IDU3NiAmJiBuYXYubG9naW4gJiYgPFNlYXJjaEJhciAvPiB9XG4gICAgPC9oZWFkZXI+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/layout/header.jsx */"));
};

const Option = () => {
  const {
    0: pop,
    1: setPop
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  const id = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.nav.notifications.id);
  const onLogout = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(async () => {
    try {
      await axios__WEBPACK_IMPORTED_MODULE_9___default.a.get('/user/logout');
      dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_8__["ON_LOGIN"],
        option: false
      });
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/login');
    } catch (err) {
      console.log(err);
    }
  });
  return __jsx("div", {
    className: "btnicon_cont"
  }, __jsx("button", {
    id: "option",
    onClick: () => setPop(!pop),
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
    onMouseLeave: () => setPop(false)
  }, __jsx("li", null, __jsx(_mylink_link__WEBPACK_IMPORTED_MODULE_14__["default"], {
    url: `/perfil/${id}`
  }, __jsx("p", {
    style: {
      color: '#8bb940',
      margin: 0
    }
  }, "Perfil"))), __jsx("li", null, __jsx("button", {
    onClick: onLogout
  }, "salir"))))));
};

const Wallet = () => {
  const wallet = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.nav.notifications.wallet);
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

const Notifications = () => {
  return __jsx("ul", {
    className: "notifications_main_cont"
  }, __jsx("li", null, __jsx(Gift, null)), __jsx("li", null, __jsx(Note, null)), __jsx("li", null, __jsx(Friend, null)), __jsx("li", null, __jsx(Option, null)), __jsx("li", null, __jsx(Wallet, null)));
};

const BarLoader = () => {
  const loader = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.nav.loader);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  const onLoader = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(loader => dispatch({
    type: _store_actions__WEBPACK_IMPORTED_MODULE_8__["ON_LOADER"],
    loader
  }));
  return __jsx("div", {
    className: "barloader",
    style: {
      width: `${loader}%`,
      opacity: loader > 0 ? 1 : 0
    }
  });
};

const Header = () => {
  const nav = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.nav);
  const {
    0: width,
    1: setWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();

  const onNotifications = async () => {
    try {
      if (nav.login) {
        const res = await axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(`/user/notifications`);
        dispatch({
          type: _store_actions__WEBPACK_IMPORTED_MODULE_8__["ON_NOTIFICATIONS"],
          notifications: res.data
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_13___default()();
    socket.open();
    socket.on(`nav:${nav.notifications.id}`, payload => {
      console.log(payload);
      dispatch({
        type: 'ON_NOTE',
        payload
      });
      dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_8__["ON_FLOAT"],
        payload
      });
    });
    return () => socket.close();
  }, [nav.notifications]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    onNotifications();
  }, [nav.login]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setWidth(window.innerWidth);
  }, []);
  return __jsx("header", {
    className: "header_main_cont"
  }, __jsx(BarLoader, null), __jsx("nav", null, __jsx(DownBar, null), __jsx("div", {
    className: "logo_search"
  }, __jsx(_logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: "/"
  }), nav.login && width > 992 && __jsx(SearchBar, null)), !nav.login && __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/login"
  }, __jsx("button", {
    className: "btn_login"
  }, "login")), nav.login && __jsx(Notifications, null)), width < 576 && nav.login && __jsx(SearchBar, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/layout/header.scss":
/*!***************************************!*\
  !*** ./components/layout/header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/layout/layout.jsx":
/*!**************************************!*\
  !*** ./components/layout/layout.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./components/layout/header.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout_base_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layout/base.scss */ "./layout/base.scss");
/* harmony import */ var _layout_base_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_layout_base_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _postregister_postregister__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../postregister/postregister */ "./components/postregister/postregister.jsx");
/* harmony import */ var _store_store_cont__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/store-cont */ "./components/store/store-cont.jsx");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/store */ "./components/store/store.jsx");
/* harmony import */ var _floating_notes_floating_notes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../floating-notes/floating-notes */ "./components/floating-notes/floating-notes.jsx");
/* harmony import */ var _vault_vault__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../vault/vault */ "./components/vault/vault.jsx");
/* harmony import */ var _dialogs_confirm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dialogs/confirm */ "./components/dialogs/confirm.jsx");
/* harmony import */ var _chat_private__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../chat/private */ "./components/chat/private.jsx");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













const Layout = ({
  children
}) => {
  return __jsx("div", {
    style: {
      position: 'relative'
    },
    className: "jsx-3133056425" + " " + "lauout_main_cont"
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx("link", {
    rel: "stylesheet",
    href: "/static/animate.min.css",
    className: "jsx-3133056425"
  })), __jsx(_header__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_postregister_postregister__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx(_store_store_cont__WEBPACK_IMPORTED_MODULE_8__["default"], null, __jsx(_store_store__WEBPACK_IMPORTED_MODULE_9__["default"], null)), __jsx(_floating_notes_floating_notes__WEBPACK_IMPORTED_MODULE_10__["default"], null), __jsx(_vault_vault__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx(_dialogs_confirm__WEBPACK_IMPORTED_MODULE_12__["default"], null), children, __jsx("footer", {
    className: "jsx-3133056425" + " " + "col-10 p-0"
  }, __jsx(_chat_private__WEBPACK_IMPORTED_MODULE_13__["default"], null)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3133056425"
  }, "footer.jsx-3133056425{position:fixed;width:100%;bottom:-28px;background:#8bb940;height:28px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJrQixBQUcwQixlQUNKLFdBQ0UsYUFDTSxtQkFDUCxZQUNkIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICcuLi8uLi9sYXlvdXQvYmFzZS5zY3NzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBQb3N0UmVnaXN0ZXIgZnJvbSAnLi4vcG9zdHJlZ2lzdGVyL3Bvc3RyZWdpc3Rlcic7XG5pbXBvcnQgU3RvcmVDb250IGZyb20gJy4uL3N0b3JlL3N0b3JlLWNvbnQnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4uL3N0b3JlL3N0b3JlJztcbmltcG9ydCBGbG9hdGluZ05vdGVzIGZyb20gJy4uL2Zsb2F0aW5nLW5vdGVzL2Zsb2F0aW5nLW5vdGVzJztcbmltcG9ydCBWYXVsdCBmcm9tICcuLi92YXVsdC92YXVsdCc7XG5pbXBvcnQgQ29uZmlybSBmcm9tICcuLi9kaWFsb2dzL2NvbmZpcm0nO1xuaW1wb3J0IFByaXZhdGUgZnJvbSAnLi4vY2hhdC9wcml2YXRlJ1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF1b3V0X21haW5fY29udFwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9hbmltYXRlLm1pbi5jc3NcIi8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8UG9zdFJlZ2lzdGVyIC8+XG4gICAgICA8U3RvcmVDb250PjxTdG9yZSAvPjwvU3RvcmVDb250PlxuICAgICAgPEZsb2F0aW5nTm90ZXMgLz5cbiAgICAgIDxWYXVsdCAvPlxuICAgICAgPENvbmZpcm0gLz5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiY29sLTEwIHAtMFwiPlxuICAgICAgICA8UHJpdmF0ZSAvPlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGZvb3RlcntcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm90dG9tOiAtMjhweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjOGJiOTQwO1xuICAgICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/layout/layout.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/layout/logo.jsx":
/*!************************************!*\
  !*** ./components/layout/logo.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.scss */ "./components/layout/logo.scss");
/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logo_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Logo = ({
  url,
  dark
}) => {
  const tirangle = __jsx("svg", {
    width: "200",
    height: "200",
    version: "1.1",
    viewBox: "0 0 52.917 52.917",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("g", {
    transform: "translate(0 -244.08)"
  }, __jsx("ellipse", {
    cx: "26.548",
    cy: "250.43",
    r: "3.2741",
    fill: dark ? "#8bb940" : "#fff"
  }), __jsx("ellipse", {
    cx: "46.306",
    cy: "289.77",
    r: "3.2741",
    fill: dark ? "#8bb940" : "#fff"
  }), __jsx("path", {
    transform: "matrix(.62733 0 0 .72498 9.012 74.897)",
    d: "m59.521 296.7h-31.551-31.551l31.551-54.648 15.776 27.324z",
    fill: "none",
    stroke: dark ? "#8bb940" : "#fff",
    strokeWidth: "2"
  }), __jsx("circle", {
    cx: "46.306",
    cy: "289.77",
    r: "3.2741",
    fill: dark ? "#8bb940" : "#fff"
  }), __jsx("circle", {
    cx: "7.2335",
    cy: "289.77",
    r: "3.2741",
    fill: dark ? "#8bb940" : "#fff"
  }), __jsx("path", {
    d: "m25.542 276.71c0.25134 0.37102-0.37613 0.52185-0.61667 0.41774-0.65184-0.28213-0.59357-1.1753-0.21882-1.6511 0.67035-0.85098 1.9605-0.71767 2.6855-0.0199 1.0639 1.024 0.84772 2.7571-0.17903 3.7199-1.3685 1.2832-3.558 0.98044-4.7543-0.37795-1.5055-1.7094-1.1146-4.3608 0.57688-5.7887 2.0486-1.7294 5.1648-1.2495 6.8231 0.7758 1.9543 2.3868 1.385 5.9694-0.97472 7.8575-2.7244 2.1798-6.7746 1.5208-8.8919-1.1736-2.4058-3.0616-1.6568-7.5801 1.3726-9.9264 3.3985-2.6321 8.3859-1.7931 10.961 1.5715 2.8586 3.7353 1.9294 9.1918-1.7704 11.995",
    fill: "none",
    stroke: dark ? "#8bb940" : "#fff",
    strokeWidth: ".79375"
  }), __jsx("circle", {
    cx: "26.541",
    cy: "250.72",
    r: "3.2741",
    fill: dark ? "#8bb940" : "#fff"
  })));

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: url
  }, __jsx("a", {
    className: "logo_main_cont"
  }, tirangle, __jsx("p", {
    style: dark ? {
      color: '#8bb940'
    } : {
      color: '#fff'
    }
  }, "greenlink")));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/layout/logo.scss":
/*!*************************************!*\
  !*** ./components/layout/logo.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/loader/loader.jsx":
/*!**************************************!*\
  !*** ./components/loader/loader.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loader_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.scss */ "./components/loader/loader.scss");
/* harmony import */ var _loader_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loader_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Loader extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    gsap__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].to('#loader_line', 3.5, {
      strokeDashoffset: '-1000',
      repeat: -1,
      ease: Linear.easeNone
    });
  }

  render() {
    const {
      dark
    } = this.props;
    return __jsx("svg", {
      className: "green_loader",
      width: "200",
      height: "200",
      viewBox: "0 0 200 200"
    }, __jsx("polyline", {
      id: "loader_line",
      fill: "none",
      stroke: dark ? "#669f09" : '#fff',
      strokeWidth: "10px",
      strokeDasharray: "500",
      points: "15,185 95,15 185,180 15,180"
    }), __jsx("circle", {
      className: "circle",
      id: "circle-1",
      fill: dark ? "#669f09" : '#fff',
      cx: "20",
      cy: "180",
      r: "20"
    }), __jsx("circle", {
      className: "circle",
      id: "circle-2",
      fill: dark ? "#669f09" : '#fff',
      cx: "95",
      cy: "20",
      r: "20"
    }), __jsx("circle", {
      className: "circle",
      id: "circle-3",
      fill: dark ? "#669f09" : '#fff',
      cx: "180",
      cy: "180",
      r: "20"
    }));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./components/loader/loader.scss":
/*!***************************************!*\
  !*** ./components/loader/loader.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/mylink/link.jsx":
/*!************************************!*\
  !*** ./components/mylink/link.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const MyLink = ({
  url,
  children,
  cb
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  const onLink = async () => {
    let loader = 0;
    const interval = setInterval(() => {
      loader += 15;
      dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_LOADER"],
        loader
      });
    }, 1000);

    if (loader >= 75) {
      dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_LOADER"],
        loader: 97
      });
      clearInterval(interval);
    }

    try {
      clearInterval(interval);
      callbback();
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.replace(url);
      dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_LOADER"],
        loader: 100
      });
    } catch (err) {
      console.log(err);
      clearInterval(interval);
    }
  };

  return __jsx("button", {
    onClick: onLink,
    type: "button",
    className: "jsx-2059577519"
  }, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2059577519"
  }, "button.jsx-2059577519{background:transparent;border:none;padding:0;margin:0;outline:none;}button.jsx-2059577519:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvbXlsaW5rL2xpbmsuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDa0IsQUFHb0MsQUFPVixhQUNmLFVBUGMsWUFDRixVQUNELFNBQ0ksYUFDZiIsImZpbGUiOiIvaG9tZS9mZWxpeC9Eb2N1bWVudG9zL3Byb2plY3RzL2dyZWVubGluay9jb21wb25lbnRzL215bGluay9saW5rLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IE9OX0xPQURFUiB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBNeUxpbmsgPSAoeyB1cmwsIGNoaWxkcmVuLCBjYiB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgb25MaW5rID0gYXN5bmMoKSA9PiB7XG4gICAgbGV0IGxvYWRlciA9IDA7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+IHtcbiAgICAgIGxvYWRlciArPSAxNTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogT05fTE9BREVSLCBsb2FkZXIgfSk7XG4gICAgfSwxMDAwKTtcbiAgICBpZihsb2FkZXIgPj0gNzUpe1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBPTl9MT0FERVIsIGxvYWRlcjogOTcgfSk7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9XG4gICAgdHJ5e1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICBjYWxsYmJhY2soKTtcbiAgICAgIFJvdXRlci5yZXBsYWNlKHVybCk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IE9OX0xPQURFUiwgbG9hZGVyOiAxMDAgfSk7XG4gICAgfWNhdGNoKGVycil7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e29uTGlua30gdHlwZT1cImJ1dHRvblwiPlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2J1dHRvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUxpbms7XG4iXX0= */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/mylink/link.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MyLink);

/***/ }),

/***/ "./components/postregister/postregister.jsx":
/*!**************************************************!*\
  !*** ./components/postregister/postregister.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _postregister_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./postregister.scss */ "./components/postregister/postregister.scss");
/* harmony import */ var _postregister_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_postregister_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _layout_logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layout/logo */ "./components/layout/logo.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _loader_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../loader/loader */ "./components/loader/loader.jsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











const BtnUpload = () => {
  return __jsx("div", {
    className: "btnUpload_main_cont"
  }, __jsx("label", {
    htmlFor: "img"
  }, __jsx("div", {
    className: "img_cont"
  }, __jsx("img", {
    src: "",
    alt: ""
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUser"]
  })), __jsx("input", {
    id: "img",
    name: "img",
    type: "file"
  })));
};

const Welcome = () => {
  return __jsx("div", {
    className: "welcome_main_cont"
  }, __jsx("h1", null, "Bienvenido a ", __jsx("span", null, "Greenlink!")), __jsx("p", null, "Completa el registro agregando informacion adicional y creando tu primer ", __jsx("strong", null, "GreenPost,"), " de esta manera podras ser encontrado por otros usuarios ademas de recibir obsequios. Recuerda, mietras mas preciso seas mas facil sera que tus seres queridos contacten contigo."));
};

const Congratulations = () => {
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  return __jsx("div", {
    className: "welcome_main_cont"
  }, __jsx("h1", null, "Felicidades ", user.name), __jsx("p", null, "No olvides crear tu primer", __jsx("strong", null, "GreenPost,")));
};

const UserInfo = ({
  values,
  setValues,
  onImg
}) => {
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  return __jsx("div", {
    className: "user_postregister_cont"
  }, __jsx("label", {
    htmlFor: "perfilImg"
  }, !values.perfilImgFrontEnd && __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUser"]
  }), values.perfilImgFrontEnd && __jsx("img", {
    src: values.perfilImgFrontEnd,
    alt: ""
  }), __jsx("input", {
    onChange: onImg,
    type: "file",
    name: "perfilImg",
    id: "perfilImg"
  })), __jsx("p", null, "Elige una foto de perfil"), user.name === 'Green' && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("input", {
    value: values.name,
    onChange: e => setValues({
      name: e.currentTarget.value
    }),
    placeholder: "Nombre",
    type: "text"
  }), __jsx("input", {
    value: values.lastName,
    onChange: e => setValues({
      lastName: e.currentTarget.value
    }),
    placeholder: "Apellido",
    type: "text"
  }), __jsx("div", {
    className: "birth_sex_main"
  }, __jsx("p", null, "Cumplea\xF1os"), __jsx("input", {
    type: "date",
    value: values.birthday,
    onChange: e => setValues({
      birthday: e.currentTarget.value
    })
  }), __jsx("div", {
    className: "birthday_sex",
    style: {
      marginLeft: '1rem'
    }
  }, __jsx("p", null, "Sexo"), __jsx("select", {
    onChange: e => setValues({
      sex: e.currentTarget.value
    }),
    name: "sex",
    id: "sex"
  }, __jsx("option", {
    value: "female"
  }, "Mujer"), __jsx("option", {
    value: "male"
  }, "Hombre"), __jsx("option", {
    value: "otro"
  }, "Otro"))))));
};

const PostRegister = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    0: values,
    1: setValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])((state, next) => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, next), {
    name: '',
    lastName: '',
    birthday: '',
    sex: '',
    perfilImgFrontEnd: '',
    perfilImg: ''
  });
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);

  const onImg = e => {
    const img = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      if (reader.result) {
        setValues({
          perfilImgFrontEnd: reader.result,
          perfilImg: img
        });
      } else {
        setValues({
          perfilImgFrontEnd: null,
          perfilImg: null
        });
      }
    };

    reader.readAsDataURL(img);
  };

  const {
    0: section,
    1: setSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])((state, next) => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, next), {
    welcome: true,
    info: false,
    loader: false,
    congratulations: false
  });
  const visible = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.postregister);

  const onSubmit = async () => {
    try {
      const {
        name,
        lastName,
        birthday,
        sex,
        perfilImg
      } = values;
      const data = new FormData();
      setSection({
        info: false,
        loader: true
      });

      if (user.name === 'Green') {
        data.append('name', name);
        data.append('lastName', lastName);
        data.append('birthday', birthday);
        data.append('sex', sex);
      }

      data.append('perfilImg', perfilImg);
      const res = await axios__WEBPACK_IMPORTED_MODULE_9___default.a.post('/user/postregister', data);
      dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_UPDATE"],
        payload: res.data
      });
      dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_WALLET"],
        coin: 50
      });
      setSection({
        loader: false,
        congratulations: true
      });
      setTimeout(() => {
        dispatch({
          type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_POST_REGISTER"]
        });
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    className: "my_modal",
    isOpen: visible
  }, __jsx("div", {
    className: "postregister_main_cont"
  }, __jsx("header", null, __jsx(_layout_logo__WEBPACK_IMPORTED_MODULE_8__["default"], {
    dark: true,
    url: "/"
  })), __jsx("div", {
    className: "body"
  }, section.welcome && __jsx(Welcome, null), section.info && __jsx(UserInfo, {
    values: values,
    setValues: setValues,
    onImg: onImg
  }), section.loader && __jsx(_loader_loader__WEBPACK_IMPORTED_MODULE_10__["default"], {
    dark: true
  }), section.congratulations && __jsx(Congratulations, null)), __jsx("footer", null, section.welcome && __jsx("button", {
    onClick: () => setSection({
      welcome: false,
      info: true
    })
  }, "siguiente"), section.info && __jsx("button", {
    onClick: onSubmit
  }, "enviar"))));
};

/* harmony default export */ __webpack_exports__["default"] = (PostRegister);

/***/ }),

/***/ "./components/postregister/postregister.scss":
/*!***************************************************!*\
  !*** ./components/postregister/postregister.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/store/store-cont.jsx":
/*!*****************************************!*\
  !*** ./components/store/store-cont.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var _store_cont_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store-cont.scss */ "./components/store/store-cont.scss");
/* harmony import */ var _store_cont_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_store_cont_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const StoreCont = ({
  children
}) => {
  const visible = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.greenstore.visible);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    isOpen: visible,
    style: {
      maxWidth: '95vw'
    }
  }, __jsx("div", {
    className: "storecont_main_cont"
  }, __jsx("header", null, __jsx("nav", null, __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].HOME
    })
  }, "inicio"), __jsx("div", {
    className: "storesearch_cont"
  }, __jsx("div", null, __jsx("input", {
    type: "text"
  }), __jsx("p", null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSearch"]
  }))), __jsx("ul", null))), __jsx("button", {
    title: "cerrar",
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_2__["ON_STORE"]
    })
  }, "X")), children));
};

/* harmony default export */ __webpack_exports__["default"] = (StoreCont);

/***/ }),

/***/ "./components/store/store-cont.scss":
/*!******************************************!*\
  !*** ./components/store/store-cont.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/store/store.jsx":
/*!************************************!*\
  !*** ./components/store/store.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var _store_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store.scss */ "./components/store/store.scss");
/* harmony import */ var _store_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_store_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _test_products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../test/products */ "./test/products.js");
/* harmony import */ var _test_products__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_test_products__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid/v1 */ "uuid/v1");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_7__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const Home = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  return __jsx("div", {
    className: "storehome_main_cont"
  }, __jsx("div", {
    className: "cont_left"
  }, __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["storeSections"].MUSIC
    }),
    id: "music"
  }, __jsx("img", {
    src: "/static/store/ms.jpg",
    alt: ""
  }), __jsx("span", null, "musica"))), __jsx("div", {
    className: "cont_right"
  }, __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["storeSections"].CANDY
    }),
    id: "candy"
  }, __jsx("img", {
    src: "/static/store/gol.jpg",
    alt: ""
  }), __jsx("span", null, "golosinas")), __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["storeSections"].JEWEL
    }),
    className: "four",
    id: "jewel"
  }, __jsx("img", {
    src: "/static/store/bis.jpg",
    alt: ""
  }), __jsx("span", null, "bisuteria")), __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["storeSections"].TOY
    }),
    className: "four",
    id: "toy"
  }, __jsx("img", {
    src: "/static/store/ty.jpg",
    alt: ""
  }), __jsx("span", null, "juguetes")), __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["storeSections"].EBOOK
    }),
    className: "four",
    id: "ebook"
  }, __jsx("img", {
    src: "/static/store/eb.jpg",
    alt: ""
  }), __jsx("span", null, "ebook's")), __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["storeSections"].TV
    }),
    className: "four",
    id: "tv"
  }, __jsx("img", {
    src: "static/store/tv.jpg",
    alt: ""
  }), __jsx("span", null, "tv's"))));
};

const Category = ({
  tag
}) => {
  const items = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.greenstore.items);
  const products = items.filter(product => product.tag === tag);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  const onProduct = e => {
    const product = products.find(product => product.id === e.target.id);
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["storeSections"].PRODUCT,
      product
    });
  };

  return __jsx("div", {
    className: "category_main_cont"
  }, __jsx("ul", null, products.map(product => __jsx("li", null, __jsx("button", {
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
  }, "$", product.price)))))));
};

const Product = () => {
  const product = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.greenstore.current);
  const uid = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user._id);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const owner = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user.owner);
  const {
    0: disable,
    1: setDisable
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: note,
    1: setNote
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();

  const onGift = async e => {
    try {
      e.preventDefault();
      setDisable(true);
      const data = {
        gift: product,
        uid,
        note
      };
      await axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('/user/gift', data);

      const parseCoin = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(product.price, 10);

      dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_WALLET"],
        coin: -parseCoin
      });
      setDisable(false);
      dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_STORE"]
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onWish = async e => {
    try {
      e.preventDefault();
      setDisable(true);
      const res = await axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('/green/wish', {
        product
      });
      console.log(res.data);
      dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_WISH"],
        wish: res.data
      });
      setDisable(false);
      dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_STORE"]
      });
    } catch (err) {
      console.log(err);
    }
  };

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
    onChange: e => setNote(e.currentTarget.value)
  }), __jsx("footer", null, __jsx("button", {
    onClick: () => dispatch({
      type: product.tag
    })
  }, "atr\xE1s"), __jsx("button", {
    disabled: disable,
    type: "submit"
  }, owner ? 'agregar' : 'enviar'))))));
};

const Store = () => {
  const store = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.greenstore);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  const onProducts = async () => {
    try {
      //const res = await axios.get('/products');
      //dispatch({ type: ON_PRODUCTS, products: res.data });
      dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["ON_PRODUCTS"],
        products: (_test_products__WEBPACK_IMPORTED_MODULE_5___default())
      });
    } catch (err) {
      console.log(err);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    onProducts();
  }, []);
  return __jsx("div", {
    className: "store_main_cont"
  }, store.home && __jsx(Home, null), store.music && __jsx(Category, {
    tag: _store_actions__WEBPACK_IMPORTED_MODULE_3__["storeSections"].MUSIC
  }), store.candy && __jsx(Category, {
    tag: _store_actions__WEBPACK_IMPORTED_MODULE_3__["storeSections"].CANDY
  }), store.jewel && __jsx(Category, {
    tag: _store_actions__WEBPACK_IMPORTED_MODULE_3__["storeSections"].JEWEL
  }), store.toy && __jsx(Category, {
    tag: _store_actions__WEBPACK_IMPORTED_MODULE_3__["storeSections"].TOY
  }), store.ebook && __jsx(Category, {
    tag: _store_actions__WEBPACK_IMPORTED_MODULE_3__["storeSections"].EBOOK
  }), store.tv && __jsx(Category, {
    tag: _store_actions__WEBPACK_IMPORTED_MODULE_3__["storeSections"].TV
  }), store.product && __jsx(Product, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ }),

/***/ "./components/store/store.scss":
/*!*************************************!*\
  !*** ./components/store/store.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/vault/vault.jsx":
/*!************************************!*\
  !*** ./components/vault/vault.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid/v1 */ "uuid/v1");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const ProductList = ({
  item
}) => {
  return __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1039609738", [item.img]]])
  }, __jsx("button", {
    title: `enviado por ${item.sender.fullName}`,
    id: item._id,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1039609738", [item.img]]]) + " " + "shadow"
  }, __jsx("img", {
    id: item._id,
    src: item.sender.perfilImg,
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1039609738", [item.img]]])
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1039609738",
    dynamic: [item.img]
  }, `li.__jsx-style-dynamic-selector{margin:1rem;}button.__jsx-style-dynamic-selector{background:url(${item.img})center top no-repeat;background-size:cover;width:200px;height:220px;border:1px solid #fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-transition:250ms ease;transition:250ms ease;}button.__jsx-style-dynamic-selector:hover{border-color:#8bb940;}img.__jsx-style-dynamic-selector{width:50px;height:50px;object-fit:cover;object-position:center;border-radius:50%;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvdmF1bHQvdmF1bHQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFrQixBQUd5QixBQUdxRCxBQVk1QyxBQUdWLFdBQ0MsQ0FsQmQsU0FlQSxFQUltQixpQkFDTSx1QkFDTCxFQWxCSSxnQkFtQnhCLE1BbEJjLFlBQ0MsYUFDUyxzQkFDVCwwRUFDUyw4RUFDRyxpR0FDSixxR0FDQyxvREFDeEIiLCJmaWxlIjoiL2hvbWUvZmVsaXgvRG9jdW1lbnRvcy9wcm9qZWN0cy9ncmVlbmxpbmsvY29tcG9uZW50cy92YXVsdC92YXVsdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IE9OX1ZBVUxULCBPTl9WQVVMVF9IT01FLCBPTl9WQVVMVF9QUk9EVUNUIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3YxJztcblxuY29uc3QgUHJvZHVjdExpc3QgPSAoeyBpdGVtIH0pID0+IHtcblxuICByZXR1cm4oXG4gICAgPGxpPlxuICAgICAgPGJ1dHRvbiB0aXRsZT17YGVudmlhZG8gcG9yICR7aXRlbS5zZW5kZXIuZnVsbE5hbWV9YH0gY2xhc3NOYW1lPVwic2hhZG93XCIgaWQ9e2l0ZW0uX2lkfT5cbiAgICAgICAgPGltZyBpZD17aXRlbS5faWR9IHNyYz17aXRlbS5zZW5kZXIucGVyZmlsSW1nfSBhbHQ9XCJcIi8+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBsaXtcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7aXRlbS5pbWd9KWNlbnRlciB0b3Agbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjOGJiOTQwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9saT5cbiAgKVxufVxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBpdGVtcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm5hdi5ub3RpZmljYXRpb25zLmdpZnRzLml0ZW1zKTtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZVwiPlxuICAgICAgPHVsPlxuICAgICAgICB7XG4gICAgICAgICAgaXRlbXMubWFwKGl0ZW0gPT4gPFByb2R1Y3RMaXN0IGtleT17dXVpZCgpfSBpdGVtPXtpdGVtfSAvPilcbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhvbWV7XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICB1bHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgUHJvZHVjdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvZHVjdCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnZhdWx0LmN1cnJlbnQpO1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X21haW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxuICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWd9IGFsdD1cIlwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxuICAgICAgICA8aDE+e3Byb2R1Y3QubmFtZX08L2gxPlxuICAgICAgICA8cD57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VuZGVyXCI+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBWYXVsdCA9ICgpID0+IHtcbiAgY29uc3QgdmF1bHQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS52YXVsdClcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICByZXR1cm4oXG4gICAgPE1vZGFsIGlzT3Blbj17dmF1bHQudmlzaWJsZX0gc3R5bGU9e3sgbWluV2lkdGg6IFwiOTV2d1wiIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXVsdF9tYWluX2NvbnRcIj5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gZGlzcGF0Y2goeyB0eXBlOiBPTl9WQVVMVF9IT01FIH0pfSA+aW5pY2lvPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiB0aXRsZT1cImNlcnJhclwiIG9uQ2xpY2s9eygpPT4gZGlzcGF0Y2goeyB0eXBlOiBPTl9WQVVMVCB9KX0gPng8L2J1dHRvbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhdWx0LmhvbWUgJiYgPEhvbWUgLz5cbiAgICAgICAgICB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmF1bHQucHJvZHVjdCAmJiA8UHJvZHVjdCAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIGJ1dHRvbntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZVxuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgYnV0dG9uOmhvdmVye1xuICAgICAgICAgICAgY29sb3I6ICM4YmI5NDA7XG4gICAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmF1bHQ7XG4iXX0= */
/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/vault/vault.jsx */`));
};

const Home = () => {
  const items = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.nav.notifications.gifts.items);
  return __jsx("div", {
    className: "jsx-551955279" + " " + "home"
  }, __jsx("ul", {
    className: "jsx-551955279"
  }, items.map(item => __jsx(ProductList, {
    key: uuid_v1__WEBPACK_IMPORTED_MODULE_5___default()(),
    item: item
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "551955279"
  }, ".home.jsx-551955279{padding:1rem;}ul.jsx-551955279{margin:0;padding:0;list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvdmF1bHQvdmF1bHQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEa0IsQUFHd0IsQUFHSixTQUNDLElBSFosTUFJa0IsZ0JBQ0gsMEVBQ0UseURBQ2pCIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvdmF1bHQvdmF1bHQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBPTl9WQVVMVCwgT05fVkFVTFRfSE9NRSwgT05fVkFVTFRfUFJPRFVDVCB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92MSc7XG5cbmNvbnN0IFByb2R1Y3RMaXN0ID0gKHsgaXRlbSB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxsaT5cbiAgICAgIDxidXR0b24gdGl0bGU9e2BlbnZpYWRvIHBvciAke2l0ZW0uc2VuZGVyLmZ1bGxOYW1lfWB9IGNsYXNzTmFtZT1cInNoYWRvd1wiIGlkPXtpdGVtLl9pZH0+XG4gICAgICAgIDxpbWcgaWQ9e2l0ZW0uX2lkfSBzcmM9e2l0ZW0uc2VuZGVyLnBlcmZpbEltZ30gYWx0PVwiXCIvPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgbGl7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke2l0ZW0uaW1nfSljZW50ZXIgdG9wIG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIyMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzhiYjk0MDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvbGk+XG4gIClcbn1cblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgaXRlbXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5uYXYubm90aWZpY2F0aW9ucy5naWZ0cy5pdGVtcyk7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVcIj5cbiAgICAgIDx1bD5cbiAgICAgICAge1xuICAgICAgICAgIGl0ZW1zLm1hcChpdGVtID0+IDxQcm9kdWN0TGlzdCBrZXk9e3V1aWQoKX0gaXRlbT17aXRlbX0gLz4pXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5ob21le1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgdWx7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IFByb2R1Y3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2R1Y3QgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS52YXVsdC5jdXJyZW50KTtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9tYWluXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cbiAgICAgICAgPGltZyBzcmM9e3Byb2R1Y3QuaW1nfSBhbHQ9XCJcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cbiAgICAgICAgPGgxPntwcm9kdWN0Lm5hbWV9PC9oMT5cbiAgICAgICAgPHA+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbmRlclwiPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgVmF1bHQgPSAoKSA9PiB7XG4gIGNvbnN0IHZhdWx0ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudmF1bHQpXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgcmV0dXJuKFxuICAgIDxNb2RhbCBpc09wZW49e3ZhdWx0LnZpc2libGV9IHN0eWxlPXt7IG1pbldpZHRoOiBcIjk1dndcIiB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmF1bHRfbWFpbl9jb250XCI+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IGRpc3BhdGNoKHsgdHlwZTogT05fVkFVTFRfSE9NRSB9KX0gPmluaWNpbzwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gdGl0bGU9XCJjZXJyYXJcIiBvbkNsaWNrPXsoKT0+IGRpc3BhdGNoKHsgdHlwZTogT05fVkFVTFQgfSl9ID54PC9idXR0b24+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXVsdC5ob21lICYmIDxIb21lIC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhdWx0LnByb2R1Y3QgJiYgPFByb2R1Y3QgLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaGVhZGVye1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciBidXR0b257XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmVcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICAgIGNvbG9yOiAjOGJiOTQwO1xuICAgICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTW9kYWw+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhdWx0O1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/vault/vault.jsx */"));
};

const Product = () => {
  const product = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.vault.current);
  return __jsx("div", {
    className: "product_main"
  }, __jsx("div", {
    className: "left"
  }, __jsx("img", {
    src: product.img,
    alt: ""
  })), __jsx("div", {
    className: "right"
  }, __jsx("h1", null, product.name), __jsx("p", null, product.description), __jsx("div", {
    className: "sender"
  })));
};

const Vault = () => {
  const vault = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.vault);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    isOpen: vault.visible,
    style: {
      minWidth: "95vw"
    }
  }, __jsx("div", {
    className: "jsx-305558536" + " " + "vault_main_cont"
  }, __jsx("header", {
    className: "jsx-305558536"
  }, __jsx("button", {
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["ON_VAULT_HOME"]
    }),
    className: "jsx-305558536"
  }, "inicio"), __jsx("button", {
    title: "cerrar",
    onClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["ON_VAULT"]
    }),
    className: "jsx-305558536"
  }, "x")), __jsx("div", {
    className: "jsx-305558536" + " " + "body"
  }, vault.home && __jsx(Home, null), vault.product && __jsx(Product, null))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "305558536"
  }, "header.jsx-305558536{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}header.jsx-305558536 button.jsx-305558536{background:transparent;border:none;-webkit-transition:250ms ease;transition:250ms ease;text-transform:capitalize;}header.jsx-305558536 button.jsx-305558536:focus{outline:none;}header.jsx-305558536 button.jsx-305558536:hover{color:#8bb940;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvdmF1bHQvdmF1bHQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRHa0IsQUFHMEIsQUFLVSxBQU8xQixBQUVpQixhQUZoQixDQUdBLFNBVGMsWUFDVSx1Q0FOUSxhQU9KLDBCQUM1Qiw0RUFQcUIsNkZBQ3JCIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvdmF1bHQvdmF1bHQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBPTl9WQVVMVCwgT05fVkFVTFRfSE9NRSwgT05fVkFVTFRfUFJPRFVDVCB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92MSc7XG5cbmNvbnN0IFByb2R1Y3RMaXN0ID0gKHsgaXRlbSB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxsaT5cbiAgICAgIDxidXR0b24gdGl0bGU9e2BlbnZpYWRvIHBvciAke2l0ZW0uc2VuZGVyLmZ1bGxOYW1lfWB9IGNsYXNzTmFtZT1cInNoYWRvd1wiIGlkPXtpdGVtLl9pZH0+XG4gICAgICAgIDxpbWcgaWQ9e2l0ZW0uX2lkfSBzcmM9e2l0ZW0uc2VuZGVyLnBlcmZpbEltZ30gYWx0PVwiXCIvPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgbGl7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke2l0ZW0uaW1nfSljZW50ZXIgdG9wIG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIyMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzhiYjk0MDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvbGk+XG4gIClcbn1cblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgaXRlbXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5uYXYubm90aWZpY2F0aW9ucy5naWZ0cy5pdGVtcyk7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVcIj5cbiAgICAgIDx1bD5cbiAgICAgICAge1xuICAgICAgICAgIGl0ZW1zLm1hcChpdGVtID0+IDxQcm9kdWN0TGlzdCBrZXk9e3V1aWQoKX0gaXRlbT17aXRlbX0gLz4pXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5ob21le1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgdWx7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IFByb2R1Y3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2R1Y3QgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS52YXVsdC5jdXJyZW50KTtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9tYWluXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cbiAgICAgICAgPGltZyBzcmM9e3Byb2R1Y3QuaW1nfSBhbHQ9XCJcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cbiAgICAgICAgPGgxPntwcm9kdWN0Lm5hbWV9PC9oMT5cbiAgICAgICAgPHA+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbmRlclwiPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgVmF1bHQgPSAoKSA9PiB7XG4gIGNvbnN0IHZhdWx0ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudmF1bHQpXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgcmV0dXJuKFxuICAgIDxNb2RhbCBpc09wZW49e3ZhdWx0LnZpc2libGV9IHN0eWxlPXt7IG1pbldpZHRoOiBcIjk1dndcIiB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmF1bHRfbWFpbl9jb250XCI+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IGRpc3BhdGNoKHsgdHlwZTogT05fVkFVTFRfSE9NRSB9KX0gPmluaWNpbzwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gdGl0bGU9XCJjZXJyYXJcIiBvbkNsaWNrPXsoKT0+IGRpc3BhdGNoKHsgdHlwZTogT05fVkFVTFQgfSl9ID54PC9idXR0b24+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXVsdC5ob21lICYmIDxIb21lIC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhdWx0LnByb2R1Y3QgJiYgPFByb2R1Y3QgLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaGVhZGVye1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciBidXR0b257XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmVcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICAgIGNvbG9yOiAjOGJiOTQwO1xuICAgICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTW9kYWw+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhdWx0O1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/vault/vault.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Vault);

/***/ }),

/***/ "./layout/base.scss":
/*!**************************!*\
  !*** ./layout/base.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./layout/var.js":
/*!***********************!*\
  !*** ./layout/var.js ***!
  \***********************/
/*! exports provided: color, font, size */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "font", function() { return font; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
const color = {
  prim: "#8bb940",
  sec: "#669f09",
  tri: "#007f1a",
  danger: "#ff6c1a",
  alert: "#f9e453",
  gray1: "#ffffff80",
  light: "#fff",
  dark: "#333"
};
const font = {
  title: 'Sansita',
  text: 'Open Sans',
  logo: 'Pacifico'
};
const size = {
  fontXs: "11px",
  fontSm: "14px",
  fontMd: "16px",
  fontLg: "24px",
  fontXl: "48px",
  fontXxl: "72px"
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

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

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

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

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

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

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

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
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

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

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


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
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

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

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

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
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

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
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
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
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


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

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic prerendering. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/login.jsx":
/*!*************************!*\
  !*** ./pages/login.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _login_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.scss */ "./pages/login.scss");
/* harmony import */ var _login_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_login_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/layout */ "./components/layout/layout.jsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layout_logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout/logo */ "./components/layout/logo.jsx");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/actions */ "./store/actions.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;














const LoginForm = ({
  setLogin
}) => {
  const {
    0: mail,
    1: setMail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: pass,
    1: setPass
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: popMail,
    1: setPopMail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: popPass,
    1: setPopPass
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();

  const onSubmit = async e => {
    try {
      e.preventDefault();
      let count = 0;
      setActive(true);
      let interval = setInterval(() => {
        count = count + 15;

        if (count >= 75) {
          clearInterval(interval);
          dispatch({
            type: _store_actions__WEBPACK_IMPORTED_MODULE_10__["ON_LOADER"],
            loader: 99
          });
        } else {
          dispatch({
            type: _store_actions__WEBPACK_IMPORTED_MODULE_10__["ON_LOADER"],
            loader: count
          });
        }
      }, 1000);
      const data = {
        mail,
        pass
      };
      const res = await axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('/user/login', data);
      clearInterval(interval);

      if (res.data === 'mail') {
        setActive(false);
        dispatch({
          type: _store_actions__WEBPACK_IMPORTED_MODULE_10__["ON_LOADER"],
          loader: 0
        });
        return setPopMail(true);
      }

      if (res.data === 'pass') {
        setActive(false);
        dispatch({
          type: _store_actions__WEBPACK_IMPORTED_MODULE_10__["ON_LOADER"],
          loader: 0
        });
        return setPopPass(true);
      }

      dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_10__["ON_LOADER"],
        loader: 100
      });
      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push(`/perfil/${res.data}`);
      dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_10__["ON_LOADER"],
        loader: 100
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_10__["ON_LOADER"],
        loader: 0
      });
    }
  };

  return __jsx("div", {
    className: "login_register_cont animated fadeIn"
  }, __jsx("header", null, __jsx("h1", null, "Inicio de sessi\xF3n")), __jsx("form", {
    onSubmit: onSubmit
  }, __jsx("label", {
    htmlFor: "mail"
  }, __jsx("p", null, "usuario"), __jsx("input", {
    disabled: active,
    autoComplete: "false",
    onBlur: () => setPopMail(false),
    onFocus: () => setPopMail(false),
    id: "mail",
    value: mail,
    onChange: e => setMail(e.currentTarget.value),
    type: "text"
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Popover"], {
    isOpen: popMail,
    target: "mail",
    placement: "bottom"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["PopoverBody"], null, __jsx("span", null, "El correo no es correcto, por favor verifiquelo e intentelo de nuevo")))), __jsx("label", {
    htmlFor: "pass"
  }, __jsx("p", null, "contrase\xF1a"), __jsx("input", {
    disabled: active,
    onBlur: () => setPopPass(false),
    onFocus: () => setPopPass(false),
    id: "pass",
    value: pass,
    onChange: e => setPass(e.currentTarget.value),
    type: "password"
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Popover"], {
    isOpen: popPass,
    target: "pass",
    placement: "bottom"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["PopoverBody"], null, __jsx("span", null, "El correo no es correcto, por favor verifiquelo e intentelo de nuevo")))), __jsx("footer", {
    className: "login_register_cont"
  }, __jsx("button", {
    disabled: active,
    onClick: () => setLogin(false),
    className: "btn_loogin_register btn_inactive",
    type: "button"
  }, "registro"), __jsx("button", {
    disabled: active,
    className: "btn_loogin_register btn_active",
    type: "submit"
  }, "login"))));
};

const RegisterForm = ({
  setLogin
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();
  const {
    0: mailPop,
    1: setMailPop
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: values,
    1: setValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])((state, newState) => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, newState), {
    name: '',
    lastName: '',
    mail: '',
    pass: '',
    birthday: '',
    sex: ''
  });

  const onSubmit = async e => {
    try {
      e.preventDefault();
      let count = 0;
      const interval = setInterval(() => {
        count = count + 15;
        dispatch({
          type: _store_actions__WEBPACK_IMPORTED_MODULE_10__["ON_LOADER"],
          loader: count
        });
      }, 1000);
      const data = {
        name: values.name,
        lastName: values.lastName,
        mail: values.mail.toLocaleLowerCase(),
        pass: values.pass,
        birthday: values.birthday,
        sex: values.sex
      };
      const res = await axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('/user/register', data);
      clearInterval(interval);

      if (res.data === 'mail') {
        dispatch({
          type: _store_actions__WEBPACK_IMPORTED_MODULE_10__["ON_LOADER"],
          loader: 0
        });
        setMailPop(true);
      } else {
        dispatch({
          type: _store_actions__WEBPACK_IMPORTED_MODULE_10__["ON_LOADER"],
          loader: 100
        });
        console.log(res.data);
        next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push(`/perfil/${res.data}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return __jsx("div", {
    className: "register_login_cont animated fadeIn"
  }, __jsx("header", null, __jsx("h1", null, "registro"), __jsx("p", null, "Gratis, facil y rapido")), __jsx("form", {
    onSubmit: onSubmit
  }, __jsx("div", {
    className: "fullName"
  }, __jsx("input", {
    id: "name",
    type: "text",
    placeholder: "Nombre",
    value: values.name,
    onChange: e => setValues({
      name: e.currentTarget.value
    })
  }), __jsx("input", {
    style: {
      marginLeft: ".5rem"
    },
    id: "lastName",
    type: "text",
    placeholder: "Apellido",
    value: values.lastName,
    onChange: e => setValues({
      lastName: e.currentTarget.value
    })
  })), __jsx("input", {
    id: "mail",
    type: "text",
    placeholder: "Correo electr\xF3nico",
    value: values.mail,
    onFocus: () => setMailPop(false),
    onChange: e => setValues({
      mail: e.currentTarget.value
    })
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Popover"], {
    placement: "bottom",
    target: "mail",
    isOpen: mailPop
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["PopoverBody"], null, __jsx("span", null, "El correo ya fue usado para crear otra cuenta"))), __jsx("input", {
    id: "pass",
    type: "password",
    placeholder: "Contrase\xF1a",
    value: values.pass,
    onChange: e => setValues({
      pass: e.currentTarget.value
    })
  }), __jsx("div", {
    className: "birth_sex_main"
  }, __jsx("div", {
    className: "birthday_sex"
  }, __jsx("p", null, "Cumplea\xF1os"), __jsx("input", {
    id: "birthday",
    type: "date",
    placeholder: "Correo electr\xF3nico",
    value: values.birthday,
    onChange: e => setValues({
      birthday: e.currentTarget.value
    })
  })), __jsx("div", {
    className: "birthday_sex",
    style: {
      marginLeft: '1rem'
    }
  }, __jsx("p", null, "Sexo"), __jsx("select", {
    onChange: e => setValues({
      sex: e.currentTarget.value
    }),
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
    onClick: () => setLogin(true),
    className: "btn_loogin_register btn_inactive",
    type: "button"
  }, "login"))));
};

const Login = () => {
  const {
    0: login,
    1: setLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  return __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, __jsx("div", {
    className: "login_main_cont"
  }, __jsx("div", {
    className: "login_cont shadow"
  }, __jsx("div", {
    className: "green_cont"
  }, __jsx("header", null, __jsx(_components_layout_logo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    url: "/"
  })), __jsx("div", {
    className: "green_logo"
  }, __jsx("h1", null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faGift"]
  })), __jsx("p", null, "Comparte, disfruta... Ayuda el planeta"), __jsx("button", {
    type: "button"
  }, "\xBFquieres saber mas?")), __jsx("small", null, "Comparte con los seres que amas y ayuda a el planeta.")), login && __jsx(LoginForm, {
    setLogin: setLogin
  }), !login && __jsx(RegisterForm, {
    setLogin: setLogin
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./pages/login.scss":
/*!**************************!*\
  !*** ./pages/login.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./store/actions.js":
/*!**************************!*\
  !*** ./store/actions.js ***!
  \**************************/
/*! exports provided: ON_DOWN, ON_NOTIFICATIONS, ON_VIEW_NAV, ON_NOTE, ON_LOADER, ON_LOGIN, ON_WALLET, navView, ON_USER, ON_UPDATE, ON_STORE, ON_PRODUCTS, storeSections, ON_POST_REGISTER, ON_GREENINFO, ON_GREEN_CREATOR, ON_GREENPOST, ON_GREEN_LIKE, OFF_GREEN_LIKE, ON_GREEN_WISH_FOUND, ON_GREEN_COMMENT, onStore, ON_WISH, ON_FLOAT, OFF_FLOAT, ON_VAULT, ON_VAULT_HOME, ON_VAULT_PRODUCT, ON_SPACE_HOME, ON_SPACE_WALL, ON_SPACE_CHAT, ON_SPACE_FRIENDS, ON_SPACE_EVENTS, ON_POST, ON_WALL_TOP, ON_WALL_POSTS, ON_CONFIRM, ON_CHAT_FRIEND, ON_CHAT_PRIVATE, ON_CHAT_CLOSE, ON_CHAT_MINIMIZE, ON_CHAT_MSG, ON_CHAT_ALERT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_DOWN", function() { return ON_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_NOTIFICATIONS", function() { return ON_NOTIFICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_VIEW_NAV", function() { return ON_VIEW_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_NOTE", function() { return ON_NOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_LOADER", function() { return ON_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_LOGIN", function() { return ON_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_WALLET", function() { return ON_WALLET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navView", function() { return navView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_USER", function() { return ON_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_UPDATE", function() { return ON_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_STORE", function() { return ON_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_PRODUCTS", function() { return ON_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeSections", function() { return storeSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_POST_REGISTER", function() { return ON_POST_REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_GREENINFO", function() { return ON_GREENINFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_GREEN_CREATOR", function() { return ON_GREEN_CREATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_GREENPOST", function() { return ON_GREENPOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_GREEN_LIKE", function() { return ON_GREEN_LIKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OFF_GREEN_LIKE", function() { return OFF_GREEN_LIKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_GREEN_WISH_FOUND", function() { return ON_GREEN_WISH_FOUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_GREEN_COMMENT", function() { return ON_GREEN_COMMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStore", function() { return onStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_WISH", function() { return ON_WISH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_FLOAT", function() { return ON_FLOAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OFF_FLOAT", function() { return OFF_FLOAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_VAULT", function() { return ON_VAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_VAULT_HOME", function() { return ON_VAULT_HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_VAULT_PRODUCT", function() { return ON_VAULT_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_SPACE_HOME", function() { return ON_SPACE_HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_SPACE_WALL", function() { return ON_SPACE_WALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_SPACE_CHAT", function() { return ON_SPACE_CHAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_SPACE_FRIENDS", function() { return ON_SPACE_FRIENDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_SPACE_EVENTS", function() { return ON_SPACE_EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_POST", function() { return ON_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_WALL_TOP", function() { return ON_WALL_TOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_WALL_POSTS", function() { return ON_WALL_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_CONFIRM", function() { return ON_CONFIRM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_CHAT_FRIEND", function() { return ON_CHAT_FRIEND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_CHAT_PRIVATE", function() { return ON_CHAT_PRIVATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_CHAT_CLOSE", function() { return ON_CHAT_CLOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_CHAT_MINIMIZE", function() { return ON_CHAT_MINIMIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_CHAT_MSG", function() { return ON_CHAT_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_CHAT_ALERT", function() { return ON_CHAT_ALERT; });
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

/***/ }),

/***/ "./test/persons.js":
/*!*************************!*\
  !*** ./test/persons.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const uuid = __webpack_require__(/*! uuid/v1 */ "uuid/v1");

const names = ['james', 'johm', 'jenna', 'patrice', 'thera', 'rowan', 'star'];
const lastNames = ['doe', 'doe', 'fire', 'wind', 'earth', 'fire', 'green'];

const persons = num => {
  const persons = [];

  for (let i = 0; i < num; i++) {
    const _id = uuid();

    const person = {
      _id,
      mail: `foo${i + 1}@mail.com`,
      name: names[i],
      lastName: lastNames[i],
      fullName: `${names[i]} ${lastNames[i]}`,
      perfilImg: `/static/persons/person-${i + 1}.jpg`,
      status: 0,
      url: `/perfil/${_id}`
    };
    persons.push(person);
  }

  return persons;
};

module.exports = persons;

/***/ }),

/***/ "./test/products.js":
/*!**************************!*\
  !*** ./test/products.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const uuid = __webpack_require__(/*! uuid/v1 */ "uuid/v1");

const products = [{
  id: uuid(),
  name: '',
  price: 0,
  tag: '',
  img: '/static/store/products/',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'pulsera de perlas',
  price: 100,
  tag: 'JEWEL',
  img: '/static/store/products/bis-1.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'pulsera reloj',
  price: 150,
  tag: 'JEWEL',
  img: '/static/store/products/bis-2.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'pulsera de perlas negras',
  price: 200,
  tag: 'JEWEL',
  img: '/static/store/products/bis-3.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'pulsera de plata con perlas',
  price: 250,
  tag: 'JEWEL',
  img: '/static/store/products/bis-4.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'pulsera de oro y rubi',
  price: 300,
  tag: 'JEWEL',
  img: '/static/store/products/bis-5.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'pulsera de oro y rubis',
  price: 350,
  tag: 'JEWEL',
  img: '/static/store/products/bis-6.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'pablo neruda, poemas',
  price: 20,
  tag: 'EBOOK',
  img: '/static/store/products/eb-1.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'once minutos',
  price: 25,
  tag: 'EBOOK',
  img: '/static/store/products/eb-2.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'la culpa es de la vaca',
  price: 15,
  tag: 'EBOOK',
  img: '/static/store/products/eb-3.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'adulterio',
  price: 25,
  tag: 'EBOOK',
  img: '/static/store/products/eb-4.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: '100 años de soledad',
  price: 40,
  tag: 'EBOOK',
  img: '/static/store/products/eb-5.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'dracula',
  price: 30,
  tag: 'EBOOK',
  img: '/static/store/products/eb-6.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'oreo',
  price: 5,
  tag: 'CANDY',
  img: '/static/store/products/gol-1.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'sabmba',
  price: 15,
  tag: 'CANDY',
  img: '/static/store/products/gol-2.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'suzy',
  price: 10,
  tag: 'CANDY',
  img: '/static/store/products/gol-3.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'cocosette',
  price: 10,
  tag: 'CANDY',
  img: '/static/store/products/gol-4.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'caramelos duros',
  price: 5,
  tag: 'CANDY',
  img: '/static/store/products/gol-5.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'helado',
  price: 25,
  tag: 'CANDY',
  img: '/static/store/products/gol-6.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'aoki',
  price: 50,
  tag: 'MUSIC',
  img: '/static/store/products/ms-1.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'marc anthony',
  price: 20,
  tag: 'MUSIC',
  img: '/static/store/products/ms-2.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'mana',
  price: 30,
  tag: 'MUSIC',
  img: '/static/store/products/ms-3.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'maluma',
  price: 1,
  tag: 'MUSIC',
  img: '/static/store/products/ms-4.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'david guetta',
  price: 50,
  tag: 'MUSIC',
  img: '/static/store/products/ms-5.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'netflix',
  price: 30,
  tag: 'TV',
  img: '/static/store/products/tv-1.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'amazon GO',
  price: 30,
  tag: 'TV',
  img: '/static/store/products/tv-2.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'HBO',
  price: 30,
  tag: 'TV',
  img: '/static/store/products/tv-3.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'oso tedy',
  price: 30,
  tag: 'TOY',
  img: '/static/store/products/ty-1.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'cara de papa',
  price: 40,
  tag: 'TOY',
  img: '/static/store/products/ty-2.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'finger spinner',
  price: 30,
  tag: 'TOY',
  img: '/static/store/products/ty-3.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'oso hipster',
  price: 30,
  tag: 'TOY',
  img: '/static/store/products/ty-4.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}, {
  id: uuid(),
  name: 'toy story 4',
  price: 30,
  tag: 'TOY',
  img: '/static/store/products/ty-5.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
  count: 100
}];
module.exports = products;

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/login.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/felix/Documentos/projects/greenlink/pages/login.jsx */"./pages/login.jsx");


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "uuid/v1":
/*!**************************!*\
  !*** external "uuid/v1" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v1");

/***/ })

/******/ });
//# sourceMappingURL=login.js.map
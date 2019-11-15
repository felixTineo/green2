webpackHotUpdate("static/development/pages/perfil.js",{

/***/ "./components/chat/friends.jsx":
/*!*************************************!*\
  !*** ./components/chat/friends.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var _layout_var__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layout/var */ "./layout/var.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _test_persons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../test/persons */ "./test/persons.js");
/* harmony import */ var _test_persons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_test_persons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







 //const friends = persons(8);

var Friend = function Friend(_ref) {
  var perfilImg = _ref.perfilImg,
      fullName = _ref.fullName,
      _id = _ref._id,
      url = _ref.url,
      chatHistory = _ref.chatHistory;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var privates = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.chat.privates;
  });
  var cuid = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.nav.notifications.id;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    console.log('friend');
    var user = {
      perfilImg: perfilImg,
      fullName: fullName,
      _id: _id,
      url: url,
      chatHistory: chatHistory,
      minimize: false,
      anAlert: false
    };
    var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_9___default()();
    socket.open();
    socket.on("notification:".concat(cuid), function (_id) {
      var isOpen = privates.find(function (user) {
        return user._id === _id;
      });
      console.log(_id);

      if (isOpen && isOpen.minimize) {
        dispatch({
          type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["ON_CHAT_ALERT"],
          _id: _id,
          option: true
        });
      } else {
        dispatch({
          type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["ON_CHAT_PRIVATE"],
          user: user
        });
      }
    });
  }, []);

  var onPrivate = function onPrivate() {
    try {
      var user = {
        perfilImg: perfilImg,
        fullName: fullName,
        _id: _id,
        url: url,
        chatHistory: chatHistory,
        minimize: false,
        anAlert: false
      };
      var isOpen = privates.find(function (user) {
        return user._id === _id;
      });

      if (isOpen) {
        dispatch({
          type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["ON_CHAT_MINIMIZE"],
          _id: _id,
          option: false
        });
      } else {
        dispatch({
          type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["ON_CHAT_PRIVATE"],
          user: user
        });
      }

      setTimeout(function () {
        return document.getElementById(_id).focus();
      }, 200);
    } catch (err) {
      console.log(err);
    }
  };

  return __jsx("button", {
    onClick: onPrivate,
    type: "button",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1182382733", [_layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].sec, _layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].dark]]])
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1182382733", [_layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].sec, _layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].dark]]])
  }, __jsx("img", {
    src: perfilImg,
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1182382733", [_layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].sec, _layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].dark]]])
  })), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1182382733", [_layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].sec, _layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].dark]]])
  }, fullName), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1182382733",
    dynamic: [_layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].light, _layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].sec, _layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].dark, _layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].dark]
  }, "button.__jsx-style-dynamic-selector{background:transparent;border:none;-webkit-transition:250ms ease;transition:250ms ease;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0;border:1px solid rgba(139,185,64,.4);width:100%;text-transform:capitalize;}button.__jsx-style-dynamic-selector:outline{outline:none;}button.__jsx-style-dynamic-selector:hover{background:".concat(_layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].prim, ";color:").concat(_layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].light, ";border-color:").concat(_layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].sec, ";}p.__jsx-style-dynamic-selector{margin:0;color:").concat(_layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].dark, ";margin-left:.5rem;}div.__jsx-style-dynamic-selector{background:").concat(_layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].dark, ";width:55px;height:45px;border-left:8px solid rgba(255,255,255,.4);}img.__jsx-style-dynamic-selector{width:40px;height:40px;object-fit:cover;object-position:center;border-radius:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvY2hhdC9mcmllbmRzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRWtCLEFBR2tDLEFBWVYsQUFHMkIsQUFLL0IsQUFLK0IsQUFNN0IsU0FWd0IsRUFXdkIsRUFuQmQsVUFaYyxBQWdDSyxZQS9CSyxLQWNhLEFBVXhCLEFBUVksSUFaTCxPQUtOLFdBSmQsQ0FLZ0QsQUFPNUIsWUFsQndCLE1BbUI1QyxNQWpDZSxtQkEwQmYsV0FYQSw0Q0FkNkIseUdBQ1IsNkZBQ1QsVUFDOEIscUNBQzdCLFdBQ2UsMEJBQzVCIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvY2hhdC9mcmllbmRzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgT05fQ0hBVF9GUklFTkQsIE9OX0NIQVRfUFJJVkFURSwgT05fQ0hBVF9NSU5JTUlaRSwgT05fQ0hBVF9BTEVSVCB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuLi8uLi9sYXlvdXQvdmFyJztcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQvdjEnO1xuaW1wb3J0IHBlcnNvbnMgZnJvbSAnLi4vLi4vdGVzdC9wZXJzb25zJztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8vY29uc3QgZnJpZW5kcyA9IHBlcnNvbnMoOCk7XG5cbmNvbnN0IEZyaWVuZCA9ICh7IHBlcmZpbEltZywgZnVsbE5hbWUsIF9pZCwgdXJsLCBjaGF0SGlzdG9yeSAgfSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHByaXZhdGVzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY2hhdC5wcml2YXRlcyk7XG4gIGNvbnN0IGN1aWQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5uYXYubm90aWZpY2F0aW9ucy5pZCk7XG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBjb25zb2xlLmxvZygnZnJpZW5kJyk7XG4gICAgY29uc3QgdXNlciA9IHtcbiAgICAgIHBlcmZpbEltZyxcbiAgICAgIGZ1bGxOYW1lLFxuICAgICAgX2lkLFxuICAgICAgdXJsLFxuICAgICAgY2hhdEhpc3RvcnksXG4gICAgICBtaW5pbWl6ZTogZmFsc2UsXG4gICAgICBhbkFsZXJ0OiBmYWxzZSxcbiAgICB9XG4gICAgY29uc3Qgc29ja2V0ID0gaW8oKTtcbiAgICBzb2NrZXQub3BlbigpO1xuICAgIHNvY2tldC5vbihgbm90aWZpY2F0aW9uOiR7Y3VpZH1gLCAoX2lkKSA9PntcbiAgICAgIGNvbnN0IGlzT3BlbiA9IHByaXZhdGVzLmZpbmQodXNlciA9PiB1c2VyLl9pZCA9PT0gX2lkKTtcbiAgICAgIGNvbnNvbGUubG9nKF9pZCk7XG4gICAgICBpZihpc09wZW4gJiYgaXNPcGVuLm1pbmltaXplICl7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogT05fQ0hBVF9BTEVSVCwgX2lkLCBvcHRpb246IHRydWUgfSk7XG4gICAgICB9IGVsc2V7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogT05fQ0hBVF9QUklWQVRFLCB1c2VyICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxbXSlcblxuICBjb25zdCBvblByaXZhdGUgPSAoKSA9PiB7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgdXNlciA9IHtcbiAgICAgICAgcGVyZmlsSW1nLFxuICAgICAgICBmdWxsTmFtZSxcbiAgICAgICAgX2lkLFxuICAgICAgICB1cmwsXG4gICAgICAgIGNoYXRIaXN0b3J5LFxuICAgICAgICBtaW5pbWl6ZTogZmFsc2UsXG4gICAgICAgIGFuQWxlcnQ6IGZhbHNlLFxuICAgICAgfVxuICAgICAgY29uc3QgaXNPcGVuID0gcHJpdmF0ZXMuZmluZCh1c2VyID0+IHVzZXIuX2lkID09PSBfaWQpO1xuICAgICAgaWYoaXNPcGVuKXtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBPTl9DSEFUX01JTklNSVpFLCBfaWQsIG9wdGlvbjogZmFsc2UgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IE9OX0NIQVRfUFJJVkFURSwgdXNlciB9KTtcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCk9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChfaWQpLmZvY3VzKCksIDIwMCk7XG4gICAgfWNhdGNoKGVycil7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfVxuICByZXR1cm4oXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtvblByaXZhdGV9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbWcgc3JjPXtwZXJmaWxJbWd9IGFsdD1cIlwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHA+e2Z1bGxOYW1lfTwvcD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzOSwgMTg1LCA2NCwgLjQpO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpvdXRsaW5le1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3IucHJpbX07XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3IubGlnaHR9O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHtjb2xvci5zZWN9O1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yLmRhcmt9O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBkaXZ7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvci5kYXJrfTtcbiAgICAgICAgICB3aWR0aDogNTVweDtcbiAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIC40KTtcbiAgICAgICAgfVxuICAgICAgICBpbWd7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9idXR0b24+XG4gICk7XG59XG5cbmNvbnN0IEZyaWVuZHMgPSAoKSA9PiB7XG4gIGNvbnN0IFtmcmllbmRzLCBzZXRGcmllbmRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5uYXYubm90aWZpY2F0aW9ucy5faWQpO1xuICBjb25zdCBhbGwgPSBhc3luYygpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCcvY2hhdC9hbGwnKTtcbiAgICAgIHNldEZyaWVuZHMocmVzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNvY2tldCA9IGlvKCk7XG4gICAgaW8ub24oYGNoYXQ6JHtpZH1gKTtcbiAgICBhbGwoKTtcbiAgfSxbXSlcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPGhlYWRlcj5jaGF0PC9oZWFkZXI+XG4gICAgICA8dWw+XG4gICAgICAgIHtcbiAgICAgICAgICBmcmllbmRzLm1hcCgoZnJpZW5kKSA9PiA8bGkga2V5PXt1dWlkKCl9PjxGcmllbmQgey4uLmZyaWVuZH0gLz48L2xpPilcbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCk7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA3MCk7XG4gICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICB0b3A6IDQycHg7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9yLnByaW19O1xuICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICAgIHVse1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAke2NvbG9yLnNlY307XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGcmllbmRzO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/chat/friends.jsx */")));
};

var Friends = function Friends() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      friends = _useState[0],
      setFriends = _useState[1];

  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.nav.notifications._id;
  });

  var all =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('/chat/all');

            case 3:
              res = _context.sent;
              setFriends(res.data);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function all() {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_9___default()();
    socket_io_client__WEBPACK_IMPORTED_MODULE_9___default.a.on("chat:".concat(id));
    all();
  }, []);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2226638880", [_layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].sec]]]) + " " + "main"
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2226638880", [_layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].sec]]])
  }, "chat"), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2226638880", [_layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].sec]]])
  }, friends.map(function (friend) {
    return __jsx("li", {
      key: uuid_v1__WEBPACK_IMPORTED_MODULE_7___default()(),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2226638880", [_layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].sec]]])
    }, __jsx(Friend, friend));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2226638880",
    dynamic: [_layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].prim, _layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].sec]
  }, ".main.__jsx-style-dynamic-selector{height:calc(100vh - 40px);background:rgba(0,0,0,0.070);position:-webkit-sticky;position:sticky;top:42px;}header.__jsx-style-dynamic-selector{color:rgba(255,255,255,0.7);font-weight:550;background:".concat(_layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].prim, ";padding:.5rem;text-align:center;text-transform:uppercase;}ul.__jsx-style-dynamic-selector{list-style:none;padding:0;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:calc(100% - 40px);overflow:hidden;overflow-y:scroll;border-left:2px solid ").concat(_layout_var__WEBPACK_IMPORTED_MODULE_6__["color"].sec, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvY2hhdC9mcmllbmRzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SWtCLEFBR3FDLEFBTUssQUFRZixnQkFDTixVQWRzQixBQWV2QixFQVRPLE9BVUgsU0FUMkIsV0FOeEIsNkJBT0YsV0FOTCxHQU9TLE1BTnBCLEtBY3dCLE9BUEcseUJBQzNCLDhDQU8yQix5QkFDVCxnQkFDRSxrQkFDaUMsbURBQ3JEIiwiZmlsZSI6Ii9ob21lL2ZlbGl4L0RvY3VtZW50b3MvcHJvamVjdHMvZ3JlZW5saW5rL2NvbXBvbmVudHMvY2hhdC9mcmllbmRzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgT05fQ0hBVF9GUklFTkQsIE9OX0NIQVRfUFJJVkFURSwgT05fQ0hBVF9NSU5JTUlaRSwgT05fQ0hBVF9BTEVSVCB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuLi8uLi9sYXlvdXQvdmFyJztcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQvdjEnO1xuaW1wb3J0IHBlcnNvbnMgZnJvbSAnLi4vLi4vdGVzdC9wZXJzb25zJztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8vY29uc3QgZnJpZW5kcyA9IHBlcnNvbnMoOCk7XG5cbmNvbnN0IEZyaWVuZCA9ICh7IHBlcmZpbEltZywgZnVsbE5hbWUsIF9pZCwgdXJsLCBjaGF0SGlzdG9yeSAgfSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHByaXZhdGVzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY2hhdC5wcml2YXRlcyk7XG4gIGNvbnN0IGN1aWQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5uYXYubm90aWZpY2F0aW9ucy5pZCk7XG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBjb25zb2xlLmxvZygnZnJpZW5kJyk7XG4gICAgY29uc3QgdXNlciA9IHtcbiAgICAgIHBlcmZpbEltZyxcbiAgICAgIGZ1bGxOYW1lLFxuICAgICAgX2lkLFxuICAgICAgdXJsLFxuICAgICAgY2hhdEhpc3RvcnksXG4gICAgICBtaW5pbWl6ZTogZmFsc2UsXG4gICAgICBhbkFsZXJ0OiBmYWxzZSxcbiAgICB9XG4gICAgY29uc3Qgc29ja2V0ID0gaW8oKTtcbiAgICBzb2NrZXQub3BlbigpO1xuICAgIHNvY2tldC5vbihgbm90aWZpY2F0aW9uOiR7Y3VpZH1gLCAoX2lkKSA9PntcbiAgICAgIGNvbnN0IGlzT3BlbiA9IHByaXZhdGVzLmZpbmQodXNlciA9PiB1c2VyLl9pZCA9PT0gX2lkKTtcbiAgICAgIGNvbnNvbGUubG9nKF9pZCk7XG4gICAgICBpZihpc09wZW4gJiYgaXNPcGVuLm1pbmltaXplICl7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogT05fQ0hBVF9BTEVSVCwgX2lkLCBvcHRpb246IHRydWUgfSk7XG4gICAgICB9IGVsc2V7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogT05fQ0hBVF9QUklWQVRFLCB1c2VyICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxbXSlcblxuICBjb25zdCBvblByaXZhdGUgPSAoKSA9PiB7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgdXNlciA9IHtcbiAgICAgICAgcGVyZmlsSW1nLFxuICAgICAgICBmdWxsTmFtZSxcbiAgICAgICAgX2lkLFxuICAgICAgICB1cmwsXG4gICAgICAgIGNoYXRIaXN0b3J5LFxuICAgICAgICBtaW5pbWl6ZTogZmFsc2UsXG4gICAgICAgIGFuQWxlcnQ6IGZhbHNlLFxuICAgICAgfVxuICAgICAgY29uc3QgaXNPcGVuID0gcHJpdmF0ZXMuZmluZCh1c2VyID0+IHVzZXIuX2lkID09PSBfaWQpO1xuICAgICAgaWYoaXNPcGVuKXtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBPTl9DSEFUX01JTklNSVpFLCBfaWQsIG9wdGlvbjogZmFsc2UgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IE9OX0NIQVRfUFJJVkFURSwgdXNlciB9KTtcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCk9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChfaWQpLmZvY3VzKCksIDIwMCk7XG4gICAgfWNhdGNoKGVycil7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfVxuICByZXR1cm4oXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtvblByaXZhdGV9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbWcgc3JjPXtwZXJmaWxJbWd9IGFsdD1cIlwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHA+e2Z1bGxOYW1lfTwvcD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzOSwgMTg1LCA2NCwgLjQpO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpvdXRsaW5le1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3IucHJpbX07XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3IubGlnaHR9O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHtjb2xvci5zZWN9O1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yLmRhcmt9O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBkaXZ7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvci5kYXJrfTtcbiAgICAgICAgICB3aWR0aDogNTVweDtcbiAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIC40KTtcbiAgICAgICAgfVxuICAgICAgICBpbWd7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9idXR0b24+XG4gICk7XG59XG5cbmNvbnN0IEZyaWVuZHMgPSAoKSA9PiB7XG4gIGNvbnN0IFtmcmllbmRzLCBzZXRGcmllbmRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5uYXYubm90aWZpY2F0aW9ucy5faWQpO1xuICBjb25zdCBhbGwgPSBhc3luYygpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCcvY2hhdC9hbGwnKTtcbiAgICAgIHNldEZyaWVuZHMocmVzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNvY2tldCA9IGlvKCk7XG4gICAgaW8ub24oYGNoYXQ6JHtpZH1gKTtcbiAgICBhbGwoKTtcbiAgfSxbXSlcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPGhlYWRlcj5jaGF0PC9oZWFkZXI+XG4gICAgICA8dWw+XG4gICAgICAgIHtcbiAgICAgICAgICBmcmllbmRzLm1hcCgoZnJpZW5kKSA9PiA8bGkga2V5PXt1dWlkKCl9PjxGcmllbmQgey4uLmZyaWVuZH0gLz48L2xpPilcbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCk7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA3MCk7XG4gICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICB0b3A6IDQycHg7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9yLnByaW19O1xuICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICAgIHVse1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAke2NvbG9yLnNlY307XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGcmllbmRzO1xuIl19 */\n/*@ sourceURL=/home/felix/Documentos/projects/greenlink/components/chat/friends.jsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Friends);

/***/ })

})
//# sourceMappingURL=perfil.js.fe8764143a44b9622cee.hot-update.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"1TCz":function(t,e,n){"use strict";n.r(e);var r=n("ln6h"),i=n.n(r),o=n("O40h"),a=n("0iUn"),s=n("sLSF"),c=n("MI3g"),u=n("a7VT"),l=n("Tit0"),p=n("q1tI"),f=n.n(p),d=n("ANjH"),h=n("/MKj"),v=n("8Bbg"),m=n.n(v),g=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),y=function(){return(y=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},w=function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{c(r.next(t))}catch(e){o(e)}}function s(t){try{c(r.throw(t))}catch(e){o(e)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,s)}c((r=r.apply(t,e||[])).next())})},b=function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(s){o=[6,s],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},O=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n},P={storeKey:"__NEXT_REDUX_STORE__",debug:!1,serializeState:function(t){return t},deserializeState:function(t){return t}},x=n("zrwo"),j=n("dfwq"),k=n("UXZV"),S=n.n(k),_=n("nbCS"),T=n("qzSc"),A=(_.d,_.e,_.c,{nav:{loader:0,login:!1,down:!1,wallet:0,notifications:{id:"",wallet:0,notes:{view:!1,items:[]},gifts:{view:!1,items:[]},friendReq:{view:!1,items:[]}}},user:{id:"",owner:!1,mail:"",pass:"",name:"",lastName:"",birthday:"",greenPost:[{_id:""}],perfilImg:"",originCity:"",actualCity:"",primaryShool:"",secondarySchoool:"",university:"",job:"",posts:[{green:!0,img:"",date:"",author:"",_id:"",history:"",comments:[],likes:[],wish:{id:"123456789",name:"Oreo",img:"/static/store/products/gol-1.jpg",tag:"gol",price:100,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!"}}],interest:[],events:[],friends:[]},greenpost:{_id:"",info:!1,creator:!1,current:{likes:[],comments:[],wish:{}}},store:{visible:!1,current:{},home:!1,product:!1,music:!1,ebook:!1,toy:!1,tv:!1,jewel:!1,candy:!1,items:[]},vault:{visible:!1,home:!0,product:!1,current:{},items:[]},postregister:!1,floatingnotes:[],space:{home:!0,wall:!1,chat:!1,friends:!1,envents:!1},wall:{top:[],posts:[]},confirm:{visible:!1,current:{}},chat:{friends:[],privates:[],current:""},main:{nav:{visible:!1},theme:0}}),I=Object(d.b)({nav:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A.nav,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case T.i:return S()({},t,{down:e.option});case T.v:return S()({},t,{notifications:e.notifications});case T.q:return S()({},t,{loader:e.loader});case T.r:return S()({},t,{login:e.option});case T.L:return S()({},t,{notifications:S()({},t.notifications,{wallet:t.notifications.wallet+e.coin})});case T.K:if(e.note===T.P.GIFT)return S()({},t,{notifications:S()({},t.notifications,{gifts:S()({},t.notifications.gifts,{view:!0})})});if(e.note===T.P.NOTES)return S()({},t,{notifications:S()({},t.notifications,{notes:S()({},t.notifications.notes,{view:!0})})});if(e.note===T.P.FRIEND)return S()({},t,{notifications:S()({},t.notifications,{friendReq:S()({},t.notifications.friendReq,{view:!0})})});case T.u:var n=t.notifications,r=n.gifts,i=n.notes,o=n.friendReq;if(e.payload.note===T.P.GIFT)return S()({},t,{notifications:S()({},t.notifications,{gifts:S()({},t.notifications.gifts,{view:!1,items:[e.payload.user].concat(Object(j.a)(r.items))})})});if(e.payload.note===T.P.NOTES)return S()({},t,{notifications:S()({},t.notifications,{notes:S()({},t.notifications.notes,{view:!1,items:[e.payload.user].concat(Object(j.a)(i.items))})})});if(e.payload.note===T.P.FRIEND)return S()({},t,{notifications:S()({},t.notifications,{friendReq:S()({},t.notifications.friendReq,{view:!1,items:[e.payload.user].concat(Object(j.a)(o.items))})})});default:return t}},user:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A.user,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case T.G:return S()({},t,e.user);case T.F:return S()({},t,Object(x.a)({},e.payload));default:return t}},greenpost:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A.greenpost,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case T.k:return S()({},t,{info:e.option});case T.n:return S()({},t,{creator:!t.creator});case T.l:return S()({},t,{current:e.greenpost});case T.o:return S()({},t,{current:S()({},t.current,{likes:[e.like].concat(Object(j.a)(t.current.likes))})});case T.O:return S()({},t,{current:S()({},t.current,{wish:e.wish})});case T.b:var n=t.current.likes.filter(function(t){return t._id!==e.uid});return S()({},t,{current:S()({},t.current,{likes:n})});case T.p:return S()({},t,{current:S()({},t.current,{wish:S()({},t.current.wish,{found:t.current.wish.found+e.found})})});case T.m:return S()({},t,{current:S()({},t.current,{comments:[].concat(Object(j.a)(t.current.comments),[e.comment])})});default:return t}},greenstore:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A.store,e=arguments.length>1?arguments[1]:void 0,n=T.R.HOME,r=T.R.PRODUCT,i=T.R.MUSIC,o=T.R.TV,a=T.R.EBOOK,s=T.R.CANDY,c=T.R.TOY,u=T.R.JEWEL;switch(e.type){case T.E:return S()({},t,{visible:!t.visible,home:!0});case T.y:return S()({},t,{items:e.products});case r:return S()({},t,{current:e.product,product:!0,home:!1,jewel:!1,ebook:!1,music:!1,toy:!1,tv:!1,candy:!1});case n:return S()({},t,{product:!1,home:!0,jewel:!1,ebook:!1,music:!1,toy:!1,tv:!1,candy:!1});case i:return S()({},t,{product:!1,home:!1,jewel:!1,ebook:!1,music:!0,toy:!1,tv:!1,candy:!1});case o:return S()({},t,{product:!1,home:!1,jewel:!1,ebook:!1,music:!1,toy:!1,tv:!0,candy:!1});case u:return S()({},t,{product:!1,home:!1,jewel:!0,ebook:!1,music:!1,toy:!1,tv:!1,candy:!1});case c:return S()({},t,{product:!1,home:!1,jewel:!1,ebook:!1,music:!1,toy:!0,tv:!1,candy:!1});case s:return S()({},t,{product:!1,home:!1,jewel:!1,ebook:!1,music:!1,toy:!1,tv:!1,candy:!0});case a:return S()({},t,{product:!1,home:!1,jewel:!1,ebook:!0,music:!1,toy:!1,tv:!1,candy:!1});default:return t}},postregister:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A.postregister;return(arguments.length>1?arguments[1]:void 0).type===T.x?!t:t},floatingnotes:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A.floatingnotes,e=arguments.length>1?arguments[1]:void 0;return e.type===T.j?[].concat(Object(j.a)(t),[e.payload]):e.type===T.a?t.filter(function(t){return t.id!==e.id}):t},vault:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A.vault,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case T.H:return S()({},t,{visible:!t.visible});case T.I:return S()({},t,{home:!0,product:!1});case T.J:return S()({},t,{home:!1,product:!0,current:e.product});default:return t}},space:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A.space;switch((arguments.length>1?arguments[1]:void 0).type){case T.C:return S()({},t,{home:!0,wall:!1,chat:!1,friends:!1,events:!1});case T.D:return S()({},t,{home:!1,wall:!0,chat:!1,friends:!1,events:!1});case T.z:return S()({},t,{home:!1,wall:!1,chat:!0,friends:!1,events:!1});case T.B:return S()({},t,{home:!1,wall:!1,chat:!1,friends:!0,events:!1});case T.A:return S()({},t,{home:!1,wall:!1,chat:!1,friends:!1,events:!0});default:return t}},wall:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A.wall,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case T.w:return S()({},t,{posts:[e.post].concat(Object(j.a)(t.posts))});case T.N:return S()({},t,{top:e.posts});case T.M:return S()({},t,{posts:e.posts});default:return t}},confirm:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A.confirm,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case T.h:return S()({},t,{visible:!t.visible,current:e.current});default:return t}},chat:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A.chat,e=arguments.length>1?arguments[1]:void 0,n=t.privates;switch(e.type){case T.g:return S()({},t,{privates:[e.user].concat(Object(j.a)(n.slice(3)))});case T.d:return S()({},t,{privates:n.filter(function(t){return t._id!==e._id})});case T.e:return S()({},t,{privates:n.map(function(t){return t._id!==e._id?t:S()({},t,{minimize:e.option})})});case T.f:return S()({},t,{privates:n.map(function(t){return t._id!==e._id?t:S()({},t,{history:[].concat(Object(j.a)(t.history),[e.msg])})}),current:e._id});case T.c:return S()({},t,{privates:n.map(function(t){return t._id!==e._id?t:S()({},t,{anAlert:e.option})})});default:return t}},main:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A.main,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case T.s:var n=t.nav.visible;return S()({},t,{nav:S()({},t.nav,{visible:!n})});case T.t:return S()({},t,{theme:e.index});default:return t}}}),E=f.a.createElement,R=function(t){function e(){return Object(a.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps,r=t.store;return E(h.a,{store:r},E(e,n))}}],[{key:"getInitialProps",value:function(){var t=Object(o.a)(i.a.mark(function t(e){var n,r,o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.Component,r=e.ctx,!n.getInitialProps){t.next=7;break}return t.next=4,n.getInitialProps(r);case 4:t.t0=t.sent,t.next=8;break;case 7:t.t0={};case 8:return o=t.t0,t.abrupt("return",{pageProps:o});case 10:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}]),e}(m.a);e.default=function(t,e){e=y({},P,e);var n="undefined"===typeof window,r=function(r){var i=r.initialState,o=r.ctx,a=e.storeKey,s=function(){return t(e.deserializeState(i),y({},o,e,{isServer:n}))};return n?s():(window.hasOwnProperty(a)||(window[a]=s()),window[a])};return function(t){var i;return(i=function(n){function i(t,i){var o=n.call(this,t,i)||this,a=t.initialState;return e.debug&&console.log("4. WrappedApp.render created new store with initialState",a),o.store=r({initialState:a}),o}return g(i,n),i.prototype.render=function(){var e=this.props,n=e.initialProps,r=(e.initialState,O(e,["initialProps","initialState"]));return f.a.createElement(t,y({},r,n,{store:this.store}))},i}(p.Component)).displayName="withRedux("+(t.displayName||t.name||"App")+")",i.getInitialProps=function(i){return w(void 0,void 0,void 0,function(){var o,a;return b(this,function(s){switch(s.label){case 0:if(!i)throw new Error("No app context");if(!i.ctx)throw new Error("No page context");return o=r({ctx:i.ctx}),e.debug&&console.log("1. WrappedApp.getInitialProps wrapper got the store with state",o.getState()),i.ctx.store=o,i.ctx.isServer=n,a={},"getInitialProps"in t?[4,t.getInitialProps.call(t,i)]:[3,2];case 1:a=s.sent(),s.label=2;case 2:return e.debug&&console.log("3. WrappedApp.getInitialProps has store state",o.getState()),[2,{isServer:n,initialState:e.serializeState(o.getState()),initialProps:a}]}})})},i}}(function(t,e){return Object(d.c)(I,t)})(R)},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},B5Ud:function(t,e,n){"use strict";var r=n("/HRN"),i=n("WaGi"),o=n("ZDA2"),a=n("/+P4"),s=n("N9n2"),c=n("ln6h"),u=n("KI45");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=w,e.default=void 0;var l=u(n("htGi")),p=u(n("+oT+")),f=u(n("q1tI")),d=u(n("17x9")),h=n("g/15");e.AppInitialProps=h.AppInitialProps;var v=n("nOHt");function m(t){return g.apply(this,arguments)}function g(){return(g=(0,p.default)(c.mark(function t(e){var n,r,i;return c.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,r=e.ctx,t.next=3,(0,h.loadGetInitialProps)(n,r);case 3:return i=t.sent,t.abrupt("return",{pageProps:i});case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}var y=function(t){function e(){return r(this,e),o(this,a(e).apply(this,arguments))}return s(e,t),i(e,[{key:"getChildContext",value:function(){return{router:(0,v.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,i=w(e);return f.default.createElement(n,(0,l.default)({},r,{url:i}))}}]),e}(f.default.Component);function w(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",i=n||e;return t.push(r,i)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",i=n||e;return t.replace(r,i)}}}e.default=y,y.childContextTypes={router:d.default.object},y.origGetInitialProps=m,y.getInitialProps=m},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},nbCS:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i}),n.d(e,"d",function(){return o}),n.d(e,"e",function(){return a}),n.d(e,"c",function(){return s});var r={prim:"#8bb940",sec:"#669f09",light:"#ffffff",dark:"#333333",gray:"#f4f7f6"},i={title:"Archivo Black",text:"Open Sans"},o={index:1,prim:"#8bb940",sec:"#478407",img:"/static/main/mundi.png",textLeft:{title:"EL PLANETA TE NECESITA",subTitle:"Unete con nosotros y diviertete, mietras Proteges el medio ambiente, tan solo por usar greenlink."},textRight:{title:"PER\xda",subTitle:"Punto de inicio"},textBottom:"PROTEGE!"},a={index:2,prim:"#f03103",sec:"#a43112",img:"/static/main/gift.png",textLeft:{title:"LA NAVIDAD ESTA AQUI",subTitle:"Aprovecha esta hermosa epoca del a\xf1o para compartir con los seres que amas y Alcanzar tus deseos."},textRight:{title:"Regalos",subTitle:"Obten el tuyo \xbfQue esperas?"},textBottom:"ALCANZA!"},s={index:3,prim:"#03a7f0",sec:"#1251a4",img:"/static/main/cofee.png",textLeft:{title:"AYUDA CON NOSOTROS",subTitle:"En esta epoca los menos afortunados de las regiones andinas necesitan de ti. Participa mientras te diviertes."},textRight:{title:"Calidez",subTitle:"Apoya nuestras causas sociales."},textBottom:"PARTICIPA!"}}},[["GcxT",1,0]]]);
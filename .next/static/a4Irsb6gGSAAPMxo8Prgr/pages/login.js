(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"5QeG":function(e,t,a){"use strict";a.r(t);var n=a("zrwo"),r=a("ln6h"),o=a.n(r),l=a("9Jkg"),i=a.n(l),u=a("O40h"),s=a("q1tI"),c=a.n(s),p=(a("4W9Y"),a("ZTmz")),d=a("IP2g"),m=a("wHSu"),f=a("b9Vz"),g=(a("z/o8"),a("vDqi")),v=a.n(g),b=a("/MKj"),h=a("qzSc"),y=a("iqOp"),_=a("YGfb"),N=a("nOHt"),x=a.n(N),O=c.a.createElement,w=function(e){var t=e.setLogin,a=Object(s.useState)(""),n=a[0],r=a[1],l=Object(s.useState)(""),c=l[0],p=l[1],d=Object(s.useState)(!1),m=d[0],f=d[1],g=Object(s.useState)(!1),N=g[0],w=g[1],C=Object(b.c)(),j=function(){var e=Object(u.a)(o.a.mark(function e(t){var a,r,l,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),a=0,r=setInterval(function(){a+=25,C({type:h.d,loader:a})},1e3),l={mail:n,pass:c},e.next=7,v.a.post("/user/login",l);case 7:if(u=e.sent,clearInterval(r),"mail"!==u.data){e.next=12;break}return C({type:h.d,loader:0}),e.abrupt("return",f(!0));case 12:if("pass"!==u.data){e.next=15;break}return C({type:h.d,loader:0}),e.abrupt("return",w(!0));case 15:C({type:h.d,loader:100}),u.data.posts=i()(u.data.posts),u.data.greenPost=i()(u.data.greenPost),x.a.replace({pathname:"/perfil",query:u.data},"/perfil/".concat(u.data._id),{shallow:!0}),C({type:h.d,loader:0}),e.next=26;break;case 22:e.prev=22,e.t0=e.catch(0),console.log(e.t0),C({type:h.d,loader:0});case 26:case"end":return e.stop()}},e,null,[[0,22]])}));return function(t){return e.apply(this,arguments)}}();return O("div",{className:"login_register_cont animated fadeIn"},O("header",null,O("h1",null,"Inicio de sessi\xf3n")),O("form",{onSubmit:j},O("label",{htmlFor:"mail"},O("p",null,"usuario"),O("input",{autoComplete:"false",onBlur:function(){return f(!1)},onFocus:function(){return f(!1)},id:"mail",value:n,onChange:function(e){return r(e.currentTarget.value)},type:"text"}),O(y.a,{isOpen:m,target:"mail",placement:"bottom"},O(_.a,null,O("span",null,"El correo no es correcto, por favor verifiquelo e intentelo de nuevo")))),O("label",{htmlFor:"pass"},O("p",null,"contrase\xf1a"),O("input",{onBlur:function(){return w(!1)},onFocus:function(){return w(!1)},id:"pass",value:c,onChange:function(e){return p(e.currentTarget.value)},type:"password"}),O(y.a,{isOpen:N,target:"pass",placement:"bottom"},O(_.a,null,O("span",null,"El correo no es correcto, por favor verifiquelo e intentelo de nuevo")))),O("footer",{className:"login_register_cont"},O("button",{onClick:function(){return t(!1)},className:"btn_loogin_register btn_inactive",type:"button"},"registro"),O("button",{className:"btn_loogin_register btn_active",type:"submit"},"login"))))},C=function(e){var t=e.setLogin,a=Object(b.c)(),r=Object(s.useState)(),l=r[0],i=r[1],c=Object(s.useReducer)(function(e,t){return Object(n.a)({},e,t)},{name:"",lastName:"",mail:"",pass:"",birthday:"",sex:""}),p=c[0],d=c[1],m=function(){var e=Object(u.a)(o.a.mark(function e(t){var n,r,l,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),n=0,r=setInterval(function(){n+=15,a({type:h.d,loader:n})},1e3),l={name:p.name,lastName:p.lastName,mail:p.mail.toLocaleLowerCase(),pass:p.pass,birthday:p.birthday,sex:p.sex},e.next=7,v.a.post("/user/register",l);case 7:u=e.sent,clearInterval(r),"mail"===u.data?(a({type:h.d,loader:0}),i(!0)):(a({type:h.d,loader:0}),x.a.push({pathname:"/perfil?id=".concat(u.data.id),query:u.data},"/perfil/".concat(u.data._id))),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}},e,null,[[0,12]])}));return function(t){return e.apply(this,arguments)}}();return O("div",{className:"register_login_cont animated fadeIn"},O("header",null,O("h1",null,"registro"),O("p",null,"Gratis, facil y rapido")),O("form",{onSubmit:m},O("div",{className:"fullName"},O("input",{id:"name",type:"text",placeholder:"Nombre",value:p.name,onChange:function(e){return d({name:e.currentTarget.value})}}),O("input",{style:{marginLeft:".5rem"},id:"lastName",type:"text",placeholder:"Apellido",value:p.lastName,onChange:function(e){return d({lastName:e.currentTarget.value})}})),O("input",{id:"mail",type:"text",placeholder:"Correo electr\xf3nico",value:p.mail,onFocus:function(){return i(!1)},onChange:function(e){return d({mail:e.currentTarget.value})}}),O(y.a,{placement:"bottom",target:"mail",isOpen:l},O(_.a,null,O("span",null,"El correo ya fue usado para crear otra cuenta"))),O("input",{id:"pass",type:"password",placeholder:"Contrase\xf1a",value:p.pass,onChange:function(e){return d({pass:e.currentTarget.value})}}),O("div",{className:"birth_sex_main"},O("div",{className:"birthday_sex"},O("p",null,"Cumplea\xf1os"),O("input",{id:"birthday",type:"date",placeholder:"Correo electr\xf3nico",value:p.birthday,onChange:function(e){return d({birthday:e.currentTarget.value})}})),O("div",{className:"birthday_sex",style:{marginLeft:"1rem"}},O("p",null,"Sexo"),O("select",{onChange:function(e){return d({sex:e.currentTarget.value})},name:"sex",id:"sex"},O("option",{value:"female"},"Mujer"),O("option",{value:"male"},"Hombre"),O("option",{value:"otro"},"Otro")))),O("footer",{className:"login_register_cont"},O("button",{className:"btn_loogin_register btn_active",type:"submit"},"registro"),O("button",{onClick:function(){return t(!0)},className:"btn_loogin_register btn_inactive",type:"button"},"login"))))};t.default=function(){var e=Object(s.useState)(!0),t=e[0],a=e[1];return O(p.a,null,O("div",{className:"login_main_cont"},O("div",{className:"login_cont shadow"},O("div",{className:"green_cont"},O("header",null,O(f.a,{url:"/"})),O("div",{className:"green_logo"},O("h1",null,O(d.a,{icon:m.i})),O("p",null,"Comparte, disfruta... Ayuda el planeta"),O("button",{type:"button"},"\xbfquieres saber mas?")),O("small",null,"Comparte con los seres que amas y ayuda a el planeta.")),t&&O(w,{setLogin:a}),!t&&O(C,{setLogin:a}))))}},"9Jkg":function(e,t,a){e.exports=a("oh+g")},jRKa:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return a("5QeG")}])},"oh+g":function(e,t,a){var n=a("WEpk"),r=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}}},[["jRKa",0,1,2]]]);
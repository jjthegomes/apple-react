(this["webpackJsonpapple-react"]=this["webpackJsonpapple-react"]||[]).push([[0],{19:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),i=n(20),r=n.n(i),a=(n(19),n(17)),j=n(2),b=n(1);var d=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"404 not found"})})},s=n(27),l=n(28),h=n(7);var u,p=function(){var e=o.a.useState(10),t=Object(l.a)(e,1)[0];return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Home"}),Object(b.jsx)(h.b,{to:"/login",children:"login "}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:[{id:0,name:"Macbook Air M1"},{id:1,name:"Mac Mini M1"},{id:2,name:"iPhone 12"}].map((function(e){return Object(b.jsx)("p",{children:Object(b.jsxs)(h.b,{to:"/product/".concat(e.id),children:["Produto ",e.id,": ",e.name]})})}))}),Object(b.jsx)("img",{style:{animation:"spin ".concat(t,"s linear infinite")},src:"/logo512.png"})]})},O=function(){var e=Object(j.f)(),t=Object(j.g)().id;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Products"}),Object(b.jsx)("div",{onClick:function(){return e.goBack()},children:"Go back "}),t&&Object(b.jsxs)("span",{children:[" ",[{id:0,name:"Macbook Air M1"},{id:1,name:"Mac Mini M1"},{id:2,name:"iPhone 12"}][Number(t)].name," "]})]})},x=n(22),m=n(23),g=Object(m.a)(h.b)(u||(u=Object(x.a)(["\n    color: red;\n"]))),f=[{path:"/login",component:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsx)(g,{to:"/profile",children:"profile "}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:function(){localStorage.setItem("logado","true")},children:"Logar"})]})}},{path:"/profile",auth:!0,component:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Profile"}),Object(b.jsx)(h.b,{to:"news",children:" Noticias "}),Object(b.jsx)("button",{onClick:function(){localStorage.removeItem("logado")},children:"Logout"})]})}}],v=[].concat(Object(s.a)(f),[{path:"/",component:p},{path:"/product/:id",component:O},{path:"*",component:d}]);var M=function(){var e="true"===localStorage.getItem("logado");return Object(b.jsx)(j.c,{children:v.map((function(t){var n=!1!==t.exact;return t.auth?Object(c.createElement)(j.a,Object(a.a)(Object(a.a)({},t),{},{exact:n,key:t.path,component:e?t.component:d})):Object(b.jsx)(j.a,{exact:n,path:t.path,component:t.component},t.path)}))})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(h.a,{children:Object(b.jsx)(j.a,{component:M})})}),document.getElementById("root")),k()}},[[40,1,2]]]);
//# sourceMappingURL=main.c965d699.chunk.js.map
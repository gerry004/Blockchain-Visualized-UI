(function(e){function t(t){for(var r,c,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},a={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-4e203f25":"7ab156f2","chunk-537bb5ce":"92a7fd49","chunk-664e3316":"41511530","chunk-c4993e6e":"e4b44004","chunk-56ecbd3e":"dd5e55ab","chunk-5488a096":"642b108b"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-4e203f25":1,"chunk-537bb5ce":1,"chunk-664e3316":1,"chunk-c4993e6e":1,"chunk-56ecbd3e":1,"chunk-5488a096":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-4e203f25":"7fd9f395","chunk-537bb5ce":"62a09ea5","chunk-664e3316":"abee1bae","chunk-c4993e6e":"c9f5a90d","chunk-56ecbd3e":"8c3b68be","chunk-5488a096":"43385358"}[e]+".css",a=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],p.parentNode.removeChild(p),n(o)},p.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,n[1](f)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Blockchain-Visualized-UI/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{color:"black",dark:"",flat:"",app:""}},[n("v-toolbar-title",{staticClass:"font-weight-bold"},[e._v("Blockchain Visualized")]),n("v-spacer"),n("v-btn",{attrs:{to:"/account",color:"white",text:""}},[e._v("Wallet")]),n("v-btn",{attrs:{to:"/",color:"white",text:""}},[e._v("Blockchain")])],1),n("v-main",[n("router-view")],1)],1)},a=[],o={name:"App"},u=o,i=n("2877"),s=n("6544"),l=n.n(s),f=n("7496"),p=n("40dc"),h=n("8336"),d=n("f6c4"),m=n("2fa4"),b=n("2a7f"),v=Object(i["a"])(u,c,a,!1,null,null,null),g=v.exports;l()(v,{VApp:f["a"],VAppBar:p["a"],VBtn:h["a"],VMain:d["a"],VSpacer:m["a"],VToolbarTitle:b["a"]});var k=n("8c4f"),w=n("1da1"),y=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("2f62")),x=n("bc3a"),O=n.n(x),j=O.a.create({baseURL:"http://localhost:3000"}),A=!0,T={accounts:[],transaction:{}},_={accounts:function(e){return e.accounts},transaction:function(e){return e.transaction}},P={createAccount:function(e,t){return Object(w["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,j.post("/crypto/create-account",t).then((function(e){r("updateAccounts",e.data)})).catch((function(e){console.log(e)}));case 3:case"end":return n.stop()}}),n)})))()},signTransaction:function(e,t){return Object(w["a"])(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,c=e.dispatch,n.next=3,j.post("/crypto/sign",t).then((function(e){r("setTransaction",e.data),c("verifyTransaction",e.data)})).catch((function(e){console.log(e)}));case 3:case"end":return n.stop()}}),n)})))()},verifyTransaction:function(e,t){return Object(w["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,j.post("/crypto/verify",t).then((function(e){r("setTransaction",e.data)})).catch((function(e){console.log(e)}));case 3:case"end":return n.stop()}}),n)})))()},sendFunds:function(e,t){return Object(w["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,n.next=3,j.post("crypto/send",t).then((function(){r("getAccounts")})).catch((function(e){console.log(e)}));case 3:case"end":return n.stop()}}),n)})))()},getAccounts:function(e){return Object(w["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,j.get("crypto/accounts").then((function(e){n("setAccounts",e.data)})).catch((function(e){console.log(e)}));case 3:case"end":return t.stop()}}),t)})))()}},R={updateAccounts:function(e,t){e.accounts.push(t)},setTransaction:function(e,t){e.transaction=t},setAccounts:function(e,t){e.accounts=t}},E={namespaced:A,state:T,getters:_,actions:P,mutations:R};r["a"].use(y["a"]);var S=new y["a"].Store({modules:{home:E}}),B=[{path:"/",name:"home",component:function(){return Promise.all([n.e("chunk-4e203f25"),n.e("chunk-c4993e6e"),n.e("chunk-5488a096")]).then(n.bind(null,"bb51"))}},{path:"/account",name:"account",component:function(){return Promise.all([n.e("chunk-4e203f25"),n.e("chunk-c4993e6e"),n.e("chunk-537bb5ce"),n.e("chunk-56ecbd3e")]).then(n.bind(null,"c7d5"))},beforeEnter:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,S.dispatch("home/getAccounts");case 2:r();case 3:case"end":return e.stop()}}),e)})));function t(t,n,r){return e.apply(this,arguments)}return t}()},{path:"/transactions",name:"transactions",component:function(){return Promise.all([n.e("chunk-4e203f25"),n.e("chunk-537bb5ce"),n.e("chunk-664e3316")]).then(n.bind(null,"f045"))}}],V=B;r["a"].use(k["a"]);var C=new k["a"]({mode:"history",base:"/Blockchain-Visualized-UI/",routes:V}),L=C,M=n("f309");r["a"].use(M["a"]);var N=new M["a"]({});new r["a"]({router:L,vuetify:N,store:S,render:function(e){return e(g)}}).$mount("#app")}});
//# sourceMappingURL=app.a3c57fbd.js.map
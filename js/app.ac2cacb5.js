(function(t){function e(e){for(var a,s,o=e[0],c=e[1],l=e[2],u=0,v=[];u<o.length;u++)s=o[u],r[s]&&v.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function s(t){return o.p+"js/"+({contact:"contact",menu:"menu",news:"news",reservations:"reservations"}[t]||t)+"."+{contact:"50fb8b7b",menu:"71b871e8",news:"a7e350f8",reservations:"a7c9eaca"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=r[t]=[e,a]});e.push(n[2]=a);var i,c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=s(t),i=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+a+": "+i+")");s.type=a,s.request=i,n[1](s)}r[t]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,c.appendChild(l)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Nav"),n("main",{staticClass:"px-4"},[n("router-view")],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"text-center",staticStyle:{background:"#ee2852",padding:"1rem",color:"white"},attrs:{id:"banner"}},[t._v("\n      \tWynona is taking part in Winterlicious 2019! "),n("router-link",{staticStyle:{color:"black"},attrs:{to:"news"}},[t._v("Click here for more info.")])],1),n("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"navbar-brand"},[t._m(0),n("a",{staticClass:"navbar-burger burger",class:{"is-active":t.isActive},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbare"},on:{click:function(e){t.isActive=!t.isActive}}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])]),n("div",{staticClass:"navbar-menu",class:{"is-active":t.isActive},attrs:{id:"navbar"}},[n("div",{staticClass:"navbar-start"}),n("div",{staticClass:"navbar-end"},[n("router-link",{staticClass:"navbar-item has-background-light",attrs:{to:"reservations"},on:{click:function(e){t.isActive=!1}}},[t._v("\n\t\t        Reservations\n\t\t    ")]),n("router-link",{staticClass:"navbar-item",attrs:{to:"menu"},on:{click:function(e){t.isActive=!1}}},[t._v("\n\t\t        Menus & Group Reservations\n\t\t    ")]),n("router-link",{staticClass:"navbar-item",attrs:{to:"news"},on:{click:function(e){t.isActive=!1}}},[t._v("\n\t\t        News and Events\n\t\t    ")]),n("router-link",{staticClass:"navbar-item",attrs:{to:"contact"},on:{click:function(e){t.isActive=!1}}},[t._v("\n\t\t        Contact\n\t\t    ")])],1)])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"navbar-item",attrs:{href:"/"}},[n("img",{staticStyle:{"border-radius":"50%"},attrs:{src:"img/flower_circle.jpg"}})])}],c={data:function(){return{isActive:!1}},mounted:function(){var t=this;window.events.$on("toggleMenu",function(){return t.isActive=!1})}},l=c,u=n("2877"),f=Object(u["a"])(l,s,o,!1,null,null,null);f.options.__file="Nav.vue";var v=f.exports,d={components:{Nav:v}},p=d,m=(n("5c0b"),Object(u["a"])(p,r,i,!1,null,null,null));m.options.__file="App.vue";var b=m.exports,h=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",{staticClass:"Header is-flex justify-content-center align-items-center flex-direction-column"},[n("img",{attrs:{src:"img/logo.png",alt:"Wynona logo"}}),n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#feed",expression:"'#feed'"}],attrs:{href:"#"}},[n("div",{staticClass:"is-uppercase is-size-4 text-center",staticStyle:{position:"absolute",margin:"auto",left:"50%",bottom:"100px",transform:"translateX(-50%)","z-index":"9999",color:"rgb(255, 229, 203)"},attrs:{id:"instagram-title"}},[t._v("Instagram feed")]),t._m(0)])]),t._m(1)])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mouse-scroll"}},[n("div",{staticClass:"mouse"},[n("div",{staticClass:"mouse-in"})]),n("div",[n("span",{staticClass:"down-arrow-1"}),n("span",{staticClass:"down-arrow-2"}),n("span",{staticClass:"down-arrow-3"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticStyle:{"padding-top":"50px"},attrs:{id:"feed"}},[n("p",{staticClass:"is-size-4 text-center mb-8"},[t._v("\n    \t\tFollow us on Instagram "),n("a",{attrs:{href:"https://www.instagram.com/wynonatoronto"}},[t._v("@wynonatoronto")]),t._v(" for up to date photos of our menus, wine list and events.\n    \t")]),n("div",{staticClass:"elfsight-app-480e4a6a-e6cf-471c-87f2-7e1085f6ecb6"})])}],_={},y=Object(u["a"])(_,g,w,!1,null,null,null);y.options.__file="Home.vue";var C=y.exports;a["a"].use(h["a"]);var x=new h["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:C},{path:"/menu",name:"menu",component:function(){return n.e("menu").then(n.bind(null,"9a0b"))}},{path:"/reservations",name:"reservations",component:function(){return n.e("reservations").then(n.bind(null,"3f90"))}},{path:"/contact",name:"contact",component:function(){return n.e("contact").then(n.bind(null,"b8fa"))}},{path:"/news",name:"news",component:function(){return n.e("news").then(n.bind(null,"a2f9"))}}]}),k=n("2f62");a["a"].use(k["a"]);var j=new k["a"].Store({state:{},mutations:{},actions:{}}),A=n("f13c"),O=n.n(A);a["a"].use(O.a),a["a"].use(O.a,{container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),a["a"].config.productionTip=!1,window.events=new a["a"],new a["a"]({router:x,store:j,render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(t,e,n){}});
//# sourceMappingURL=app.ac2cacb5.js.map
(this.webpackJsonpsstest=this.webpackJsonpsstest||[]).push([[0],{22:function(e,t,a){e.exports=a(52)},27:function(e,t,a){},28:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),l=(a(27),a(21)),i=(a(28),a(3)),s=a(19),u=a.n(s),d=function(){var e=Object(i.c)((function(e){return e.githubReducer}));return r.a.createElement("div",{className:"list-repos"},e.datas.map((function(e,t){return r.a.createElement("div",{key:t,className:"repo"},e.name)})))},m=function(e){var t=e.active;return r.a.createElement("div",{className:t?"loader":""})};var h=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.githubReducer})),a=r.a.useState(""),n=Object(l.a)(a,2),c=n[0],o=n[1];return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"search-form"},r.a.createElement("h1",null,"Search Github User"),r.a.createElement("input",{type:"text",placeholder:"Search...",value:c,onChange:function(e){return o(e.target.value)}}),r.a.createElement("button",{onClick:function(){e(function(e){return function(t){t({type:"FETCH_GITHUB_LOADING"}),u.a.get("https://api.github.com/users/".concat(e,"/repos")).then((function(e){t({type:"FETCH_GITHUB_SUCCESS",payload:e})})).catch((function(e){t({type:"FETCH_GITHUB_ERROR",payload:e.response.data})}))}}(c))},className:"btn"},"Search"),r.a.createElement(m,{active:t.loading}),r.a.createElement(d,null),null!=t.error?r.a.createElement("div",{className:"error"},t.error.message):r.a.createElement("div",null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=a(2),E=a(20),v=a(8),f={loading:!1,datas:[],error:null},g=Object(p.c)({githubReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_GITHUB_LOADING":return Object(v.a)(Object(v.a)({},e),{},{loading:!0,error:null});case"FETCH_GITHUB_SUCCESS":return{loading:!1,datas:t.payload.data,error:null};case"FETCH_GITHUB_ERROR":return{loading:!1,datas:[],error:t.payload};default:return e}}}),b=Object(p.a)(E.a),O=Object(p.d)(g,b);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:O},r.a.createElement(h,null)),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.9a1e6106.chunk.js.map
(this.webpackJsonppixelart=this.webpackJsonppixelart||[]).push([[0],{131:function(e,t,n){},317:function(e,t,n){},318:function(e,t,n){},319:function(e,t,n){},320:function(e,t,n){},324:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n(119),s=n.n(a),i=(n(131),n(3)),o=n(6),l=n(13),j=n(73),u=n(48),d=n(120),b=n(70),h=n.n(b),f=function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,null,[{key:"get",value:function(e,t,n,c){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};h.a.get(e,this.getRequestConfig(r)).then((function(e){try{t(e),n(e)}catch(r){c(r)}})).catch((function(e){c(e)})).then((function(){}))}},{key:"post",value:function(e,t,n,c){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,s=this.getRequestConfig(r);h.a.post(e,a||s.data,s).then((function(e){try{t(e),n(e)}catch(r){c(r)}})).catch((function(e){c(e)})).then((function(){}))}},{key:"getRequestConfig",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL},n={};t.headers=n;var c=Object.assign(t,e);return c}}]),e}(),O=n(121),x=n(124),p=n(125),m=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).name="ValidationError",c}return n}(Object(p.a)(Error)),g=n(50);var v=n(23);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var N=r.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),S=r.createElement("path",{d:"M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1zM14 4c0 .55.45 1 1 1h2.59l-9.13 9.13c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V3h-6c-.55 0-1 .45-1 1z"});function C(e,t){var n=e.title,c=e.titleId,a=w(e,["title","titleId"]);return r.createElement("svg",y({viewBox:"0 0 24 24",fill:"whitesmoke",width:"16px",height:"16px",ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,N,S)}var k=r.forwardRef(C);n.p;function E(e){var t=e.image,n=e.i,r=(e.state,128),a="art-grid",s=r,i=r;return t.width>148&&(a+=" grid-w2",s=2*s+8),t.height>148&&(a+=" grid-h2",i=2*i+8),Object(c.jsx)("div",{className:a,children:Object(c.jsxs)(v.b,{to:{pathname:"/detail/".concat(t.pjId)},children:[t.width<=64&&t.height<=64?t.width<=r/3&&t.height<=r/3?Object(c.jsxs)("span",{children:[Object(c.jsx)("span",{className:"helper"}),Object(c.jsx)("img",{src:t.url,alt:t.title,id:n,width:3*t.width,height:3*t.height})]}):Object(c.jsxs)("span",{children:[Object(c.jsx)("span",{className:"helper"}),Object(c.jsx)("img",{src:t.url,alt:t.title,id:n,width:2*t.width,height:2*t.height})]}):Object(c.jsx)("img",{src:t.url,alt:t.title,id:n,className:"fit",width:s,height:i}),Object(c.jsx)("div",{className:"overlay"}),Object(c.jsxs)("div",{className:"color-count",children:[t.colorCount," Colors"]}),Object(c.jsx)("div",{className:"launch",children:Object(c.jsx)(k,{})}),Object(c.jsxs)("div",{className:"preview",children:[t.title,Object(c.jsx)("br",{}),"by ",t.author]})]})},n)}function P(e){var t=e.register,n=e.filter;switch(n){case"Keyword":return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("span",{className:"tooltip",children:[Object(c.jsx)("span",{className:"tooltiptext",children:"Searches in title and tags"}),"Keyword:\u2005"]}),Object(c.jsx)("input",{id:"keyword",name:"keyword",ref:t()})]});case"Author":return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("span",{className:"tooltip",children:[Object(c.jsx)("span",{className:"tooltiptext",children:"Name or part of name"}),"Author:\u2005"]}),Object(c.jsx)("input",{id:"author",name:"author",ref:t()})]});case"Color count":return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("span",{className:"tooltip",children:[Object(c.jsx)("span",{className:"tooltiptext",children:"Colors are counted on frame 1 of animations"}),"Color count:\u2005"]}),"Minimum:\u2005",Object(c.jsx)("input",{name:"colorMin",size:"2",ref:t()}),"\u2005Maximum:\u2005",Object(c.jsx)("input",{name:"colorMax",size:"2",ref:t()})]});case"Size":return Object(c.jsxs)(c.Fragment,{children:["Size:\u2005",Object(c.jsxs)("select",{name:"sizeType",ref:t(),children:[Object(c.jsx)("option",{value:"min",children:"Minimum"}),Object(c.jsx)("option",{value:"max",children:"Maximum"}),Object(c.jsx)("option",{value:"equal",children:"Equals"})]}),"\u2005Width: \u2005",Object(c.jsx)("input",{name:"width",size:"2",ref:t()}),"\u2005Height: \u2005",Object(c.jsx)("input",{name:"height",size:"2",ref:t()})]});case"Date":return Object(c.jsxs)(c.Fragment,{children:["Date after\u2005",Object(c.jsx)("input",{type:"date",name:"afterDate",ref:t()}),"\u2005Date before\u2005",Object(c.jsx)("input",{type:"date",name:"beforeDate",ref:t()})]});case"Transparency":return Object(c.jsxs)(c.Fragment,{children:["Transparency: ",Object(c.jsxs)("span",{className:"onoff",children:[" ",Object(c.jsx)("input",{type:"checkbox",name:"transparency",id:"transparency",ref:t()}),Object(c.jsx)("label",{htmlFor:"transparency"})," "]})]});case"Tolerance":return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("span",{className:"tooltip",children:[Object(c.jsx)("span",{className:"tooltiptext",children:"Tolerance influences how accurate the colors of your query match the colors in the search result. 0 means exact match only, 20 means your r/g/b values +/- 20 for each of those values. Default is between 7 and 25 depending on the amount of colors in the query."}),"Color tolerance:\u2005"]}),Object(c.jsx)("input",{name:"tolerance",size:"2",ref:t()})]});default:return console.log("formfield:"),console.log(n),Object(c.jsx)("p",{children:"NOTHING  I GUESS"})}}n(317),n(318),n(319);function R(e){var t=e.state,n=e.setState,a=Object(r.useState)(),s=Object(i.a)(a,2),o=s[0],j=s[1],u=Object(r.useState)({x:0,y:0}),d=Object(i.a)(u,2),b=d[0],h=d[1],f=Object(r.useState)(!1),O=Object(i.a)(f,2),x=O[0],p=O[1],m=Object(r.useRef)(null),v=Object(r.useRef)([]),y=Object(r.useRef)(null);Object(r.useEffect)((function(){function e(e){m.current&&!m.current.contains(e.target)&&y.current&&!y.current.contains(e.target)&&(p(!1),j(void 0))}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[m]),Object(r.useEffect)((function(){if("undefined"!==typeof o&&null!==v.current[o]){p(!0);var e=v.current[o].getBoundingClientRect();h({x:e.x,y:e.y})}}),[o]);var w=function(){return t.colorPalette.length?t.colorPalette.map((function(e,t){return Object(c.jsx)("div",{className:"swatch",style:{backgroundColor:e,boxShadow:t===o?"0px 0px 0px 2px rgba(255,255,255,1) inset":"0px 0px 0px 2px rgba(0, 0, 0, 0) inset"},onClick:function(){return j(t)},ref:function(e){return v.current[t]=e},children:Object(c.jsx)("div",{className:"color",children:Object(c.jsx)("div",{className:"remove-color",onClick:function(){return n((function(t){return Object(l.a)(Object(l.a)({},t),{},{colorPalette:t.colorPalette.filter((function(t){return t!==e}))})}))}})})},t)})):null};return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{ref:y,id:"palette",className:"color-search-container",children:[Object(c.jsx)(w,{}),Object(c.jsx)("button",{className:"button-large",onClick:function(){var e=t.colorPalette;e.push("#000000"),n((function(t){return Object(l.a)(Object(l.a)({},t),{},{colorPalette:e})})),j(t.colorPalette.length-1),p(!0)}})]}),x?Object(c.jsx)("div",{ref:m,style:{position:"absolute",display:"inline-block",left:b.x,top:b.y+40,zIndex:99},children:Object(c.jsx)(g.ChromePicker,{color:t.colorPalette[o],onChange:function(e){var c=t.colorPalette;c[o]=e.hex,n((function(e){return Object(l.a)(Object(l.a)({},e),{},{colorPalette:c})}))},disableAlpha:!0})}):null]})}function I(e){var t=e.state,n=e.setState,a=Object(r.useState)([]),s=Object(i.a)(a,2),u=s[0],d=s[1],b=Object(r.useState)(3),h=Object(i.a)(b,2),O=h[0],x=h[1],p=Object(r.useState)([]),g=Object(i.a)(p,2),v=g[0],y=g[1],w=Object(j.b)({defaultValues:t.filters}),N=w.register,S=w.control,C=w.handleSubmit,k=Object(j.a)({control:S,name:"filters"}),I=k.fields,z=k.append,T=k.remove;Object(r.useEffect)((function(){1===O&&function(){function e(e){}function n(e){e.data.length>0?(console.log(e),d(e.data),x(0)):x(2)}function c(){throw new m("Failed")}x(1),f.get("/api",e,n,c,{headers:{colorarray:t.colorPalette,keyword:t.filters.keyword,author:t.filters.author,colormin:t.filters.colorMin,colormax:t.filters.colorMax,sizetype:t.filters.sizeType,height:t.filters.height,width:t.filters.width,beforeDate:t.filters.beforeDate,afterDate:t.filters.afterDate,transparency:t.filters.transparency,tolerance:t.filters.tolerance}})}()}),[t]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"top-bar",children:[Object(c.jsx)(R,{state:t,setState:n}),Object(c.jsxs)("p",{children:["Add filter: \u2005",Object(c.jsxs)("select",{onChange:function(e){return t=e.target.value,y([].concat(Object(o.a)(v),[t])),void z({filter:t});var t},children:[Object(c.jsx)("option",{value:"empty",children:"+"}),["Keyword","Author","Color count","Size","Date","Transparency","Tolerance"].map((function(e){return!v.includes(e)&&Object(c.jsx)("option",{value:e,children:e},e)}))]})]}),Object(c.jsxs)("form",{children:[Object(c.jsx)("div",{children:I.map((function(e,t){return Object(c.jsxs)("div",{className:"filter-box",children:[Object(c.jsx)(P,{filter:e.filter,register:N}),"\u2005",Object(c.jsx)("button",{type:"button",onClick:function(){return function(e,t){y(v.filter((function(t){return t!==e}))),T(t)}(e.filter,t)},children:"X"})]},e.id)}))}),t.colorPalette.length<1&&v.length<1?null:Object(c.jsx)("button",{id:"search-button",type:"submit",onClick:C((function(e){x(1),n((function(t){return Object(l.a)(Object(l.a)({},t),{},{filters:e})}))})),children:"Search"})]})]}),Object(c.jsx)(D,{})]});function D(){var e="";return 0===O&&(e="Results"),1===O&&(e="Loading..."),2===O&&(e="No results. Consider removing colors or filters, or inrease tolerance."),3===O&&(e="Enter search query above"),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{style:{color:"#eeeeee",margin:"20px"},children:"Results"===e?Object(c.jsxs)("span",{className:"tooltip",children:[Object(c.jsx)("span",{className:"tooltiptext",children:"Sorted by date, newest to oldest."}),"Results"]}):e}),0===O&&Object(c.jsx)("div",{className:"grid-container",children:u.map((function(e,r){return Object(c.jsx)(E,{image:e,state:t,setState:n},r)}))})]})}}var z=n(17),T=(n(320),n(123)),D=n(5);function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var A=r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),H=r.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"});function L(e,t){var n=e.title,c=e.titleId,a=M(e,["title","titleId"]);return r.createElement("svg",F({viewBox:"0 0 24 24",fill:"black",width:"36px",height:"36px",ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,A,H)}var _=r.forwardRef(L);n.p;function B(e){var t=e.state,n=e.setState,a=Object(r.useState)([]),s=Object(i.a)(a,2),l=s[0],j=s[1],u=Object(r.useState)(),d=Object(i.a)(u,2),b=d[0],h=d[1],O=Object(r.useState)([]),x=Object(i.a)(O,2),p=x[0],g=x[1],y=Object(r.useState)(!0),w=Object(i.a)(y,2),N=w[0],S=w[1],C=Object(r.useState)(!0),P=Object(i.a)(C,2),R=P[0],I=P[1],F=Object(r.useState)(),M=Object(i.a)(F,2),A=M[0],H=M[1],L=Object(r.useState)({}),B=Object(i.a)(L,2),W=B[0],q=B[1],U=Object(r.useState)(),V=Object(i.a)(U,2),K=V[0],G=V[1],J=Object(D.f)().id;function X(){return N?Object(c.jsx)("h3",{children:"Loading..."}):Object(c.jsx)(ne,{})}function $(e,t){p.includes(e)?g(p.filter((function(t){return t!==e}))):g([].concat(Object(o.a)(p),[e])),q(t),H("")}function Q(e){0===p.length&&(q(e),H(""))}function Y(){return[].concat(b.colors).sort((function(e,t){return e.dbBrightness>t.dbBrightness?1:-1})).map((function(e,t){return Object(c.jsx)("div",{id:t,className:p.includes(e.hex)?"color-tile select":"color-tile deselect",style:{backgroundColor:e.hex},onClick:function(){return $(e.hex,e)},onMouseEnter:function(){return Q(e)},children:Object(c.jsx)("div",{className:"hover-visible"})},t)}))}function Z(){return b.colors.map((function(e,t){return Object(c.jsx)("div",{id:t,className:"palette-bar-item",style:{backgroundColor:e.hex,width:e.percent+"%"},onClick:function(){return $(e.hex,e)},onMouseEnter:function(){return Q(e)}},t)}))}function ee(){return Object(c.jsxs)("div",{className:"color-swatch",children:[Object(c.jsx)("div",{className:"color-example",style:{backgroundColor:W.hex}}),Object(c.jsx)(T.CopyToClipboard,{text:W.hex.toUpperCase(),onCopy:function(){return W.hex.toUpperCase(),void H(" copied!")},children:Object(c.jsxs)("p",{children:["HEX: ",W.hex.toUpperCase()," ",A]})}),Object(c.jsxs)("p",{children:["R: ",W.rgb[0]," G: ",W.rgb[1]," B: ",W.rgb[2]]}),Object(c.jsxs)("p",{children:["Percentage used: ",Math.round(100*W.percent)/100,"%"]})]})}function te(){return b.tags.length>0?Object(c.jsxs)("p",{children:["Tags:\u2004",b.tags.map((function(e,r){return Object(c.jsxs)(v.b,{to:"/",onClick:function(){return function(e){console.log(t),n((function(t){return{colorPalette:{},filters:{keyword:e}}}))}(e)},children:[e,r!==b.tags.length-1&&", "]},r)}))]}):Object(c.jsx)("p",{children:"No tags."})}function ne(){var e,r=[],a=Object(z.a)(b.tags.entries());try{for(a.s();!(e=a.n()).done;){var s=Object(i.a)(e.value,2),o=s[0],l=s[1];r.push(Object(c.jsx)("span",{children:l},o))}}catch(j){a.e(j)}finally{a.f()}return Object(c.jsxs)("div",{className:"detail-view",children:[Object(c.jsxs)("div",{className:"detail-top-bar",children:[Object(c.jsx)("div",{className:"return-bar",children:Object(c.jsxs)(v.b,{to:{pathname:"/"},className:"vertical-center",children:[Object(c.jsx)(_,{}),"return"]})}),Object(c.jsx)("div",{className:"pj-bar",children:Object(c.jsxs)("a",{href:"http://pixeljoint.com/pixelart/"+b.pjId+".htm",children:["Open on pixeljoint.com ",Object(c.jsx)(k,{fill:"black"})]})})]}),Object(c.jsxs)("div",{className:"detail-container",children:[Object(c.jsxs)("div",{className:"image-large",children:[Object(c.jsxs)("div",{className:"zoom-detail",children:["zoom",Object(c.jsx)("br",{}),Object(c.jsx)("button",{type:"button",onClick:function(){return function(e){var t=document.getElementById(e),n=t.clientWidth;if(n===t.naturalWidth)return!1;G(n/2+"px")}(b.pjId)},children:"-"}),Object(c.jsx)("button",{type:"button",onClick:function(){return function(e){var t=document.getElementById(e).clientWidth;G(2*t+"px")}(b.pjId)},children:"+"})]}),Object(c.jsx)("img",{className:"detail-img",src:b.url,alt:b.title,id:b.pjId,width:K})]}),Object(c.jsxs)("div",{className:"image-metadata",children:[Object(c.jsxs)("div",{className:"meta-text",children:[Object(c.jsx)("h2",{children:b.title}),Object(c.jsxs)("h3",{children:["Created by  ",Object(c.jsx)(v.b,{to:"/",onClick:function(){return e=b.author,console.log(t),void n((function(t){return{colorPalette:{},filters:{author:e}}}));var e},children:b.author})]}),Object(c.jsx)("p",{children:b.desc}),Object(c.jsx)(te,{}),Object(c.jsxs)("p",{className:"tooltip",children:[b.trans?Object(c.jsxs)("span",{className:"tooltiptext",children:[b.colorCount-1,"+ transparency"]}):Object(c.jsx)(c.Fragment,{}),"Number of colors: ",b.colorCount,Object(c.jsx)("br",{})]}),Object(c.jsxs)("p",{children:["Dimensions: ",b.width," x ",b.height,"px"]})]}),Object(c.jsxs)("div",{className:"palette-bar",children:["Sorted by percentage used: ",Object(c.jsx)("br",{}),Object(c.jsx)(Z,{}),Object(c.jsx)("br",{}),"Sorted by brightness:"]}),Object(c.jsxs)("div",{className:"color-flex",children:[Object(c.jsx)("div",{className:"color-wrapper",children:Object(c.jsx)(Y,{})}),0!==Object.keys(W).length?Object(c.jsx)(ee,{}):Object(c.jsx)(c.Fragment,{})]}),Object(c.jsx)(v.b,{to:{pathname:"/"},children:Object(c.jsx)("button",{onClick:function(){p.length&&n((function(e){return{colorPalette:p}}))},children:"Search with selected colors"})}),Object(c.jsxs)("span",{className:"select-all",children:[Object(c.jsx)("button",{onClick:function(){return function(){for(var e=[],t=0;t<b.colors.length;t++)e.push(b.colors[t].hex);g(e)}()},children:"select all"}),Object(c.jsx)("button",{onClick:function(){g([])},children:"deselect all"})]})]})]}),Object(c.jsx)("div",{className:"related-art",style:{backgroundColor:"#3A3A3C"},children:Object(c.jsx)(ce,{})})]})}function ce(){var e="";return!0===R&&(e="Loading artworks with similar palettes"),!1===R&&(e="Artworks with similar palettes"),0===l.length&&!1===R&&(e="No artworks with similar palettes found..."),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{style:{color:"#eeeeee",margin:"20px"},children:"Results"===e?Object(c.jsxs)("span",{className:"tooltip",children:[Object(c.jsx)("span",{className:"tooltiptext",children:"Sorted by date, newest to oldest."}),"Results"]}):e}),!1===R&&Object(c.jsx)("div",{className:"grid-container",children:l.map((function(e,r){return Object(c.jsx)(E,{image:e,state:t,setState:n},r)}))})]})}return Object(r.useEffect)((function(){S(!0),I(!0),function(e){function t(e){}function n(e){h(e.data),S(!1)}function c(){throw new m("Failed")}f.get("/api/".concat(e),t,n,c)}(J)}),[J]),Object(r.useEffect)((function(){if(!1===N){var e=b.colors.slice(0,4);(function(e){function t(e){}function n(e){if(e.data.length>0){var t=e.data;for(var n in t)t[n].pjId===b.pjId&&t.splice(n,1);j(t),I(!1)}}function c(){throw new m("Failed")}f.get("/api/".concat(J,"/relatingworks"),t,n,c,{headers:{colorarray:e}})})(e=JSON.stringify(e))}}),[N]),Object(c.jsx)(X,{})}var W=function(){var e=Object(r.useState)({colorPalette:[],filters:{}}),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(c.jsx)(v.a,{children:Object(c.jsxs)(D.c,{children:[Object(c.jsx)(D.a,{path:"/",exact:!0,children:Object(c.jsx)(I,{state:n,setState:a})}),Object(c.jsx)(D.a,{path:"/detail/:id",exact:!0,children:Object(c.jsx)(B,{state:n,setState:a})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(c.jsx)(W,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[324,1,2]]]);
//# sourceMappingURL=main.8704cc77.chunk.js.map
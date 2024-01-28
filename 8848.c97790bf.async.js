(self.webpackChunknicecode=self.webpackChunknicecode||[]).push([[8848],{45485:function($,W,v){"use strict";var l=v(1098),L=v(85170),j=v(30087);function _(u,n){return B(u)||z(u,n)||N(u,n)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N(u,n){if(u){if(typeof u=="string")return S(u,n);var a=Object.prototype.toString.call(u).slice(8,-1);if(a==="Object"&&u.constructor&&(a=u.constructor.name),a==="Map"||a==="Set")return Array.from(u);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return S(u,n)}}function S(u,n){(n==null||n>u.length)&&(n=u.length);for(var a=0,i=new Array(n);a<n;a++)i[a]=u[a];return i}function z(u,n){var a=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(a!=null){var i,f,c,m,M=[],d=!0,o=!1;try{if(c=(a=a.call(u)).next,n===0){if(Object(a)!==a)return;d=!1}else for(;!(d=(i=c.call(a)).done)&&(M.push(i.value),M.length!==n);d=!0);}catch(y){o=!0,f=y}finally{try{if(!d&&a.return!=null&&(m=a.return(),Object(m)!==m))return}finally{if(o)throw f}}return M}}function B(u){if(Array.isArray(u))return u}var x={toString:function(n){return typeof n.type=="string"&&n.type in this?"enum"in n?this.enum(n):this[n.type](n):n.type?this.getValidClassName(n)||n.type:"const"in n?"".concat(n.const):"oneOf"in n?this.oneOf(n):"unknown"},string:function(n){return n.type},number:function(n){return n.type},boolean:function(n){return n.type},any:function(n){return n.type},object:function(n){var a=this,i=[];return Object.entries(n.properties||{}).forEach(function(f){var c,m=_(f,2),M=m[0],d=m[1];i.push("".concat(M).concat((c=n.required)!==null&&c!==void 0&&c.includes(M)?"":"?",": ").concat(d.type==="object"?"object":a.toString(d)))}),i.length?"{ ".concat(i.join("; ")," }"):"{}"},array:function(n){if(n.items){var a=this.getValidClassName(n.items);return a?"".concat(a,"[]"):"".concat(this.toString(n.items),"[]")}return"any[]"},element:function(n){return"<".concat(n.componentName," />")},function:function(n){var a=this,i=n.signature;if(!i)return"Function";var f="oneOf"in i?i.oneOf:[i];return f.map(function(c){return"".concat(c.isAsync?"async ":"","(").concat(c.arguments.map(function(m){return"".concat(m.key,": ").concat(a.toString(m))}).join(", "),") => ").concat(a.toString(c.returnType))}).join(" | ")},dom:function(n){return n.className||"DOM"},enum:function(n){return n.enum.map(function(a){return JSON.stringify(a)}).join(" | ")},oneOf:function(n){var a=this;return n.oneOf.map(function(i){return a.getValidClassName(i)||a.toString(i)}).join(" | ")},getValidClassName:function(n){return"className"in n&&typeof n.className=="string"&&n.className!=="__type"?n.className:null}},R=function(n){var a=useState(function(){return x.toString(n)}),i=_(a,2),f=i[0],c=i[1];return useEffect(function(){c(x.toString(n))},[n]),React.createElement("code",null,f)},J=function(n){var a,i=useRouteMeta(),f=i.frontmatter,c=useAtomAssets(),m=c.components,M=n.id||f.atomId,d=useIntl();if(!M)throw new Error("`id` properties if required for API component!");var o=m==null?void 0:m[M];return React.createElement("div",{className:"markdown"},React.createElement(Table,null,React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,d.formatMessage({id:"api.component.name"})),React.createElement("th",null,d.formatMessage({id:"api.component.description"})),React.createElement("th",null,d.formatMessage({id:"api.component.type"})),React.createElement("th",null,d.formatMessage({id:"api.component.default"})))),React.createElement("tbody",null,o&&(a=o.propsConfig)!==null&&a!==void 0&&a.properties?Object.entries(o.propsConfig.properties).map(function(y){var g,b=_(y,2),h=b[0],I=b[1];return React.createElement("tr",{key:h},React.createElement("td",null,h),React.createElement("td",null,I.description||"--"),React.createElement("td",null,React.createElement(R,I)),React.createElement("td",null,React.createElement("code",null,(g=o.propsConfig.required)!==null&&g!==void 0&&g.includes(h)?d.formatMessage({id:"api.component.required"}):JSON.stringify(I.default)||"--")))}):React.createElement("tr",null,React.createElement("td",{colSpan:4},d.formatMessage({id:"api.component.".concat(m?"not.found":"unavailable")},{id:M}))))))},U=null},91207:function($,W,v){"use strict";var l=v(85170);function L(){return L=Object.assign?Object.assign.bind():function(A){for(var N=1;N<arguments.length;N++){var S=arguments[N];for(var z in S)Object.prototype.hasOwnProperty.call(S,z)&&(A[z]=S[z])}return A},L.apply(this,arguments)}var j=function(N){return React.createElement("span",L({className:"dumi-default-badge"},N))},_=null},30087:function($,W,v){"use strict";v.d(W,{Z:function(){return u}});var l=v(30826),L=v.n(l),j=v(85170),_=["children"];function A(n,a){return x(n)||B(n,a)||S(n,a)||N()}function N(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(n,a){if(n){if(typeof n=="string")return z(n,a);var i=Object.prototype.toString.call(n).slice(8,-1);if(i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set")return Array.from(n);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return z(n,a)}}function z(n,a){(a==null||a>n.length)&&(a=n.length);for(var i=0,f=new Array(a);i<a;i++)f[i]=n[i];return f}function B(n,a){var i=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var f,c,m,M,d=[],o=!0,y=!1;try{if(m=(i=i.call(n)).next,a===0){if(Object(i)!==i)return;o=!1}else for(;!(o=(f=m.call(i)).done)&&(d.push(f.value),d.length!==a);o=!0);}catch(g){y=!0,c=g}finally{try{if(!o&&i.return!=null&&(M=i.return(),Object(M)!==M))return}finally{if(y)throw c}}return d}}function x(n){if(Array.isArray(n))return n}function R(n,a){if(n==null)return{};var i=J(n,a),f,c;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(n);for(c=0;c<m.length;c++)f=m[c],!(a.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(n,f)&&(i[f]=n[f])}return i}function J(n,a){if(n==null)return{};var i={},f=Object.keys(n),c,m;for(m=0;m<f.length;m++)c=f[m],!(a.indexOf(c)>=0)&&(i[c]=n[c]);return i}var U=function(a){var i=a.children,f=R(a,_),c=(0,j.useRef)(null),m=(0,j.useState)(!1),M=A(m,2),d=M[0],o=M[1],y=(0,j.useState)(!1),g=A(y,2),b=g[0],h=g[1];return(0,j.useEffect)(function(){var I=c.current;if(I){var O=L()(function(){o(I.scrollLeft>0),h(I.scrollLeft<I.scrollWidth-I.offsetWidth)},100);return O(),I.addEventListener("scroll",O),window.addEventListener("resize",O),function(){I.removeEventListener("scroll",O),window.removeEventListener("resize",O)}}},[]),j.createElement("div",{className:"dumi-default-table"},j.createElement("div",{className:"dumi-default-table-content",ref:c,"data-left-folded":d||void 0,"data-right-folded":b||void 0},j.createElement("table",f,i)))},u=U},39144:function($,W,v){"use strict";v.d(W,{Z:function(){return Ae}});var l=v(85170),L=Object.defineProperty,j=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,N=(t,e,r)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,S=(t,e)=>{for(var r in e||(e={}))_.call(e,r)&&N(t,r,e[r]);if(j)for(var r of j(e))A.call(e,r)&&N(t,r,e[r]);return t};const z=t=>l.createElement("svg",S({viewBox:"64 64 896 896"},t),l.createElement("path",{d:"M854.6 288.6 639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494z"}));var B="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODU0LjYgMjg4LjYgNjM5LjQgNzMuNGMtNi02LTE0LjEtOS40LTIyLjYtOS40SDE5MmMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ2ODMyYzAgMTcuNyAxNC4zIDMyIDMyIDMyaDY0MGMxNy43IDAgMzItMTQuMyAzMi0zMlYzMTEuM2MwLTguNS0zLjQtMTYuNy05LjQtMjIuN3pNNzkwLjIgMzI2SDYwMlYxMzcuOEw3OTAuMiAzMjZ6bTEuOCA1NjJIMjMyVjEzNmgzMDJ2MjE2YTQyIDQyIDAgMCAwIDQyIDQyaDIxNnY0OTR6Ii8+PC9zdmc+",x=Object.defineProperty,R=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,u=(t,e,r)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,n=(t,e)=>{for(var r in e||(e={}))J.call(e,r)&&u(t,r,e[r]);if(R)for(var r of R(e))U.call(e,r)&&u(t,r,e[r]);return t};const a=t=>l.createElement("svg",n({viewBox:"64 64 896 896"},t),l.createElement("path",{d:"M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"}));var i="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTI4IDQ0NEg4MjBWMzMwLjRjMC0xNy43LTE0LjMtMzItMzItMzJINDczTDM1NS43IDE4Ni4yYTguMTUgOC4xNSAwIDAgMC01LjUtMi4ySDk2Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnY1OTJjMCAxNy43IDE0LjMgMzIgMzIgMzJoNjk4YzEzIDAgMjQuOC03LjkgMjkuNy0yMGwxMzQtMzMyYzEuNS0zLjggMi4zLTcuOSAyLjMtMTIgMC0xNy43LTE0LjMtMzItMzItMzJ6TTEzNiAyNTZoMTg4LjVsMTE5LjYgMTE0LjRINzQ4VjQ0NEgyMzhjLTEzIDAtMjQuOCA3LjktMjkuNyAyMEwxMzYgNjQzLjJWMjU2em02MzUuMyA1MTJIMTU5bDEwMy4zLTI1Nmg2MTIuNEw3NzEuMyA3Njh6Ii8+PC9zdmc+",f=Object.defineProperty,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,d=(t,e,r)=>e in t?f(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,o=(t,e)=>{for(var r in e||(e={}))m.call(e,r)&&d(t,r,e[r]);if(c)for(var r of c(e))M.call(e,r)&&d(t,r,e[r]);return t};const y=t=>l.createElement("svg",o({viewBox:"64 64 896 896"},t),l.createElement("path",{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}));var g="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODgwIDI5OC40SDUyMUw0MDMuNyAxODYuMmE4LjE1IDguMTUgMCAwIDAtNS41LTIuMkgxNDRjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjU5MmMwIDE3LjcgMTQuMyAzMiAzMiAzMmg3MzZjMTcuNyAwIDMyLTE0LjMgMzItMzJWMzMwLjRjMC0xNy43LTE0LjMtMzItMzItMzJ6TTg0MCA3NjhIMTg0VjI1NmgxODguNWwxMTkuNiAxMTQuNEg4NDBWNzY4eiIvPjwvc3ZnPg==",b=Object.defineProperty,h=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,E=(t,e,r)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,D=(t,e)=>{for(var r in e||(e={}))I.call(e,r)&&E(t,r,e[r]);if(h)for(var r of h(e))O.call(e,r)&&E(t,r,e[r]);return t};const Y=t=>l.createElement("svg",D({viewBox:"64 64 896 896"},t),l.createElement("path",{d:"M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}),l.createElement("path",{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}));var ae="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNMzI4IDU0NGgzNjhjNC40IDAgOC0zLjYgOC04di00OGMwLTQuNC0zLjYtOC04LThIMzI4Yy00LjQgMC04IDMuNi04IDh2NDhjMCA0LjQgMy42IDggOCA4eiIvPjxwYXRoIGQ9Ik04ODAgMTEySDE0NGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ2NzM2YzAgMTcuNyAxNC4zIDMyIDMyIDMyaDczNmMxNy43IDAgMzItMTQuMyAzMi0zMlYxNDRjMC0xNy43LTE0LjMtMzItMzItMzJ6bS00MCA3MjhIMTg0VjE4NGg2NTZ2NjU2eiIvPjwvc3ZnPg==",k=Object.defineProperty,G=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,ee=(t,e,r)=>e in t?k(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,te=(t,e)=>{for(var r in e||(e={}))K.call(e,r)&&ee(t,r,e[r]);if(G)for(var r of G(e))ie.call(e,r)&&ee(t,r,e[r]);return t};const F=t=>l.createElement("svg",te({viewBox:"64 64 896 896"},t),l.createElement("path",{d:"M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}),l.createElement("path",{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}));var oe="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNMzI4IDU0NGgxNTJ2MTUyYzAgNC40IDMuNiA4IDggOGg0OGM0LjQgMCA4LTMuNiA4LThWNTQ0aDE1MmM0LjQgMCA4LTMuNiA4LTh2LTQ4YzAtNC40LTMuNi04LTgtOEg1NDRWMzI4YzAtNC40LTMuNi04LTgtOGgtNDhjLTQuNCAwLTggMy42LTggOHYxNTJIMzI4Yy00LjQgMC04IDMuNi04IDh2NDhjMCA0LjQgMy42IDggOCA4eiIvPjxwYXRoIGQ9Ik04ODAgMTEySDE0NGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ2NzM2YzAgMTcuNyAxNC4zIDMyIDMyIDMyaDczNmMxNy43IDAgMzItMTQuMyAzMi0zMlYxNDRjMC0xNy43LTE0LjMtMzItMzItMzJ6bS00MCA3MjhIMTg0VjE4NGg2NTZ2NjU2eiIvPjwvc3ZnPg==",ue=v(36730);function Q(t){"@babel/helpers - typeof";return Q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(t)}function Z(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(C){return Object.getOwnPropertyDescriptor(t,C).enumerable})),r.push.apply(r,s)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Z(Object(r),!0).forEach(function(s){w(t,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(r,s))})}return t}function w(t,e,r){return e=V(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function V(t){var e=re(t,"string");return Q(e)==="symbol"?e:String(e)}function re(t,e){if(Q(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var s=r.call(t,e||"default");if(Q(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function de(t,e){return Me(t)||pe(t,e)||me(t,e)||ge()}function ge(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pe(t,e){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var s,C,T,P,H=[],q=!0,X=!1;try{if(T=(r=r.call(t)).next,e===0){if(Object(r)!==r)return;q=!1}else for(;!(q=(s=T.call(r)).done)&&(H.push(s.value),H.length!==e);q=!0);}catch(fe){X=!0,C=fe}finally{try{if(!q&&r.return!=null&&(P=r.return(),Object(P)!==P))return}finally{if(X)throw C}}return H}}function Me(t){if(Array.isArray(t))return t}function ve(t){return be(t)||Ie(t)||me(t)||he()}function he(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function me(t,e){if(t){if(typeof t=="string")return ce(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ce(t,e)}}function Ie(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function be(t){if(Array.isArray(t))return ce(t)}function ce(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,s=new Array(e);r<e;r++)s[r]=t[r];return s}function ne(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=[];return[].concat(t).forEach(function(s,C){var T="".concat(e?"".concat(e,"-"):"").concat(C);switch(s==null?void 0:s.type){case"ul":{var P,H=((P=r[r.length-1])===null||P===void 0?void 0:P.children)||r,q=ne(s.props.children||[],T);H.push.apply(H,ve(q));break}case"li":{var X=ne(s.props.children,T);r.push({title:[].concat(s.props.children).filter(function(fe){return fe.type!=="ul"}),key:T,children:X,isLeaf:!X.length});break}default:}}),r}var je=function(e){var r=(0,l.useState)(ne(e)),s=de(r,2),C=s[0],T=s[1];return(0,l.useEffect)(function(){T(ne(e))},[e]),C},Ne=function(e){var r=e.isLeaf,s=e.expanded;return r?l.createElement("span",{className:"dumi-default-tree-icon"},l.createElement(z,{fill:"currentColor"})):s?l.createElement("span",{className:"dumi-default-tree-icon"},l.createElement(a,{fill:"currentColor"})):l.createElement("span",{className:"dumi-default-tree-icon"},l.createElement(y,{fill:"currentColor"}))},Oe=function(e){var r=e.isLeaf,s=e.expanded;return r?l.createElement("span",{className:"tree-switcher-leaf-line"}):s?l.createElement("span",{className:"tree-switcher-line-icon"},l.createElement("span",{className:"dumi-default-tree-icon"},l.createElement(Y,{fill:"currentColor"}))):l.createElement("span",{className:"tree-switcher-line-icon"},l.createElement("span",{className:"dumi-default-tree-icon"},l.createElement(F,{fill:"currentColor"})))},le=function(){return{height:0,opacity:0}},ye=function(e){var r=e.scrollHeight;return{height:r,opacity:1}},Ee=function(e){return{height:e?e.offsetHeight:0}},se=function(e,r){return(r==null?void 0:r.deadline)===!0||r.propertyName==="height"},Te={motionName:"ant-motion-collapse",onAppearStart:le,onEnterStart:le,onAppearActive:ye,onEnterActive:ye,onLeaveStart:Ee,onLeaveActive:le,onAppearEnd:se,onEnterEnd:se,onLeaveEnd:se,motionDeadline:500},Ae=function(t){var e=je(t.children),r=(0,l.createRef)(),s=function(T,P){var H=P.isLeaf;H||T.shiftKey||T.metaKey||T.ctrlKey||r.current.onNodeExpand(T,P)};return l.createElement(ue.Z,{className:"dumi-default-tree",icon:Ne,ref:r,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:p(p({},Te),{},{motionAppear:!1}),onClick:s,treeData:[{key:"0",title:t.title||"<root>",children:e}],defaultExpandAll:!0,switcherIcon:Oe})}},30826:function($,W,v){var l="Expected a function",L=NaN,j="[object Symbol]",_=/^\s+|\s+$/g,A=/^[-+]0x[0-9a-f]+$/i,N=/^0b[01]+$/i,S=/^0o[0-7]+$/i,z=parseInt,B=typeof v.g=="object"&&v.g&&v.g.Object===Object&&v.g,x=typeof self=="object"&&self&&self.Object===Object&&self,R=B||x||Function("return this")(),J=Object.prototype,U=J.toString,u=Math.max,n=Math.min,a=function(){return R.Date.now()};function i(o,y,g){var b,h,I,O,E,D,Y=0,ae=!1,k=!1,G=!0;if(typeof o!="function")throw new TypeError(l);y=d(y)||0,c(g)&&(ae=!!g.leading,k="maxWait"in g,I=k?u(d(g.maxWait)||0,y):I,G="trailing"in g?!!g.trailing:G);function K(p){var w=b,V=h;return b=h=void 0,Y=p,O=o.apply(V,w),O}function ie(p){return Y=p,E=setTimeout(F,y),ae?K(p):O}function ee(p){var w=p-D,V=p-Y,re=y-w;return k?n(re,I-V):re}function te(p){var w=p-D,V=p-Y;return D===void 0||w>=y||w<0||k&&V>=I}function F(){var p=a();if(te(p))return oe(p);E=setTimeout(F,ee(p))}function oe(p){return E=void 0,G&&b?K(p):(b=h=void 0,O)}function ue(){E!==void 0&&clearTimeout(E),Y=0,b=D=h=E=void 0}function Q(){return E===void 0?O:oe(a())}function Z(){var p=a(),w=te(p);if(b=arguments,h=this,D=p,w){if(E===void 0)return ie(D);if(k)return E=setTimeout(F,y),K(D)}return E===void 0&&(E=setTimeout(F,y)),O}return Z.cancel=ue,Z.flush=Q,Z}function f(o,y,g){var b=!0,h=!0;if(typeof o!="function")throw new TypeError(l);return c(g)&&(b="leading"in g?!!g.leading:b,h="trailing"in g?!!g.trailing:h),i(o,y,{leading:b,maxWait:y,trailing:h})}function c(o){var y=typeof o;return!!o&&(y=="object"||y=="function")}function m(o){return!!o&&typeof o=="object"}function M(o){return typeof o=="symbol"||m(o)&&U.call(o)==j}function d(o){if(typeof o=="number")return o;if(M(o))return L;if(c(o)){var y=typeof o.valueOf=="function"?o.valueOf():o;o=c(y)?y+"":y}if(typeof o!="string")return o===0?o:+o;o=o.replace(_,"");var g=N.test(o);return g||S.test(o)?z(o.slice(2),g?2:8):A.test(o)?L:+o}$.exports=f}}]);
"use strict";(self.webpackChunknicecode=self.webpackChunknicecode||[]).push([[2893],{9470:function(x,d,e){e.r(d);var C=e(48305),s=e.n(C),a=e(85170),u=e(80868),p=e(68808),m=e(43010),y=function(){var E=(0,a.useState)([]),r=s()(E,2),c=r[0],D=r[1],l=(0,a.useState)([]),v=s()(l,2),f=v[0],P=v[1],h=function(){for(var o=[],n=[],_=0;_<20;_++){var t={key:_.toString(),title:"content".concat(_+1),description:"description of content".concat(_+1),chosen:_%2===0};t.chosen&&o.push(t.key),n.push(t)}D(n),P(o)};(0,a.useEffect)(function(){h()},[]);var K=function(o){P(o)},O=function(o,n){return(n==null?void 0:n.direction)==="left"?(0,m.jsx)(u.ZP,{size:"small",style:{float:"left",margin:5},onClick:h,children:"Left button reload"}):(0,m.jsx)(u.ZP,{size:"small",style:{float:"right",margin:5},onClick:h,children:"Right button reload"})};return(0,m.jsx)(p.Z,{dataSource:c,showSearch:!0,listStyle:{width:250,height:300},operations:["to right","to left"],targetKeys:f,onChange:K,render:function(o){return"".concat(o.title,"-").concat(o.description)},footer:O})};d.default=y},27053:function(x,d,e){e.r(d);var C=e(15558),s=e.n(C),a=e(48305),u=e.n(a),p=e(85170),m=e(68808),y=e(43010),i=Array.from({length:20}).map(function(c,D){return{key:D.toString(),title:"content".concat(D+1),description:"description of content".concat(D+1)}}),E=i.filter(function(c){return Number(c.key)>10}).map(function(c){return c.key}),r=function(){var D=(0,p.useState)(E),l=u()(D,2),v=l[0],f=l[1],P=(0,p.useState)([]),h=u()(P,2),K=h[0],O=h[1],b=function(t,M,A){console.log("targetKeys:",t),console.log("direction:",M),console.log("moveKeys:",A),f(t)},o=function(t,M){console.log("sourceSelectedKeys:",t),console.log("targetSelectedKeys:",M),O([].concat(s()(t),s()(M)))},n=function(t,M){console.log("direction:",t),console.log("target:",M.target)};return(0,y.jsx)(m.Z,{dataSource:i,titles:["Source","Target"],targetKeys:v,selectedKeys:K,onChange:b,onSelectChange:o,onScroll:n,render:function(t){return t.title}})};d.default=r},39404:function(x,d,e){e.r(d);var C=e(15558),s=e.n(C),a=e(48305),u=e.n(a),p=e(26068),m=e.n(p),y=e(67825),i=e.n(y),E=e(85170),r=e(68808),c=e(10538),D=e(13883),l=e(5e3),v=e(769),f=e(79932),P=e(7857),h=e(43010),K=["leftColumns","rightColumns"],O=function(T){var k=T.leftColumns,j=T.rightColumns,g=i()(T,K);return(0,h.jsx)(r.Z,m()(m()({},g),{},{children:function(W){var z=W.direction,N=W.filteredItems,F=W.onItemSelectAll,X=W.onItemSelect,$=W.selectedKeys,R=W.disabled,S=z==="left"?k:j,U={getCheckboxProps:function(Z){return{disabled:R||Z.disabled}},onSelectAll:function(Z,H){var G=H.filter(function(Y){return!Y.disabled}).map(function(Y){var w=Y.key;return w}),V=Z?(0,P.Z)(G,$):(0,P.Z)($,G);F(V,Z)},onSelect:function(Z,H){var G=Z.key;X(G,H)},selectedRowKeys:$};return(0,h.jsx)(c.Z,{rowSelection:U,columns:S,dataSource:N,size:"small",style:{pointerEvents:R?"none":void 0},onRow:function(Z){var H=Z.key,G=Z.disabled;return{onClick:function(){G||R||X(H,!$.includes(H))}}}})}}))},b=["cat","dog","bird"],o=Array.from({length:20}).map(function(A,T){return{key:T.toString(),title:"content".concat(T+1),description:"description of content".concat(T+1),disabled:T%4===0,tag:b[T%3]}}),n=[{dataIndex:"title",title:"Name"},{dataIndex:"tag",title:"Tag",render:function(T){return(0,h.jsx)(D.Z,{children:T})}},{dataIndex:"description",title:"Description"}],_=[{dataIndex:"title",title:"Name"}],t=o.filter(function(A){return Number(A.key)>10}).map(function(A){return A.key}),M=function(){var T=(0,E.useState)(t),k=u()(T,2),j=k[0],g=k[1],L=(0,E.useState)([]),W=u()(L,2),z=W[0],N=W[1],F=function(I,J,ee){console.log("targetKeys:",I),console.log("direction:",J),console.log("moveKeys:",ee),g(I)},X=function(I,J){console.log("sourceSelectedKeys:",I),console.log("targetSelectedKeys:",J),N([].concat(s()(I),s()(J)))},$=function(I,J){console.log("direction:",I),console.log("target:",J.target)},R=(0,E.useState)(!1),S=u()(R,2),U=S[0],B=S[1],Z=(0,E.useState)(!1),H=u()(Z,2),G=H[0],V=H[1],Y=function(I){g(I)},w=function(I){B(I)},q=function(I){V(I)};return(0,h.jsxs)(l.ZP,{theme:{components:{Transfer:{listWidth:40,listWidthLG:50,listHeight:30,itemHeight:20,itemPaddingBlock:10,headerHeight:18}}},children:[(0,h.jsx)(r.Z,{dataSource:o,titles:["Source","Target"],targetKeys:j,selectedKeys:z,onChange:F,onSelectChange:X,onScroll:$,render:function(I){return I.title}}),(0,h.jsx)(r.Z,{status:"error"}),(0,h.jsx)(r.Z,{status:"warning",showSearch:!0}),(0,h.jsx)(O,{dataSource:o,targetKeys:j,disabled:U,showSearch:G,onChange:Y,filterOption:function(I,J){return J.title.indexOf(I)!==-1||J.tag.indexOf(I)!==-1},leftColumns:n,rightColumns:_}),(0,h.jsxs)(v.Z,{style:{marginTop:16},children:[(0,h.jsx)(f.Z,{unCheckedChildren:"disabled",checkedChildren:"disabled",checked:U,onChange:w}),(0,h.jsx)(f.Z,{unCheckedChildren:"showSearch",checkedChildren:"showSearch",checked:G,onChange:q})]})]})};d.default=M},32417:function(x,d,e){e.r(d);var C=e(48305),s=e.n(C),a=e(85170),u=e(68808),p=e(43010),m=function(){var i=(0,a.useState)([]),E=s()(i,2),r=E[0],c=E[1],D=(0,a.useState)([]),l=s()(D,2),v=l[0],f=l[1],P=function(){for(var b=[],o=[],n=0;n<20;n++){var _={key:n.toString(),title:"content".concat(n+1),description:"description of content".concat(n+1),chosen:n%2===0};_.chosen&&b.push(_.key),o.push(_)}c(o),f(b)};(0,a.useEffect)(function(){P()},[]);var h=function(b,o,n){console.log(b,o,n),f(b)},K=function(b){var o=(0,p.jsxs)("span",{className:"custom-item",children:[b.title," - ",b.description]});return{label:o,value:b.title}};return(0,p.jsx)(u.Z,{dataSource:r,listStyle:{width:300,height:300},targetKeys:v,onChange:h,render:K})};d.default=m},61137:function(x,d,e){e.r(d);var C=e(48305),s=e.n(C),a=e(85170),u=e(68808),p=e(43010),m=Array.from({length:10}).map(function(r,c){return{key:c.toString(),title:"content".concat(c+1),description:"description of content".concat(c+1)}}),y=m.filter(function(r){return Number(r.key)%3>1}).map(function(r){return r.key}),i=["Select All",function(r){var c=r.selectedCount,D=r.totalCount;return"".concat(c,"/").concat(D)}],E=function(){var c=(0,a.useState)(y),D=s()(c,2),l=D[0],v=D[1];return(0,p.jsx)(u.Z,{dataSource:m,targetKeys:l,onChange:v,render:function(P){return P.title},selectAllLabels:i})};d.default=E},54038:function(x,d,e){e.r(d);var C=e(48305),s=e.n(C),a=e(85170),u=e(68808),p=e(79932),m=e(43010),y=function(){var E=(0,a.useState)(!1),r=s()(E,2),c=r[0],D=r[1],l=(0,a.useState)([]),v=s()(l,2),f=v[0],P=v[1],h=(0,a.useState)([]),K=s()(h,2),O=K[0],b=K[1];(0,a.useEffect)(function(){for(var n=[],_=[],t=0;t<2e3;t++){var M={key:t.toString(),title:"content".concat(t+1),description:"description of content".concat(t+1),chosen:t%2===0};M.chosen&&n.push(M.key),_.push(M)}b(n),P(_)},[]);var o=function(_,t,M){console.log(_,t,M),b(_)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u.Z,{dataSource:f,targetKeys:O,onChange:o,render:function(_){return _.title},oneWay:c,pagination:!0}),(0,m.jsx)("br",{}),(0,m.jsx)(p.Z,{unCheckedChildren:"one way",checkedChildren:"one way",checked:c,onChange:D})]})};d.default=y},56260:function(x,d,e){e.r(d);var C=e(15558),s=e.n(C),a=e(48305),u=e.n(a),p=e(85170),m=e(68808),y=e(79932),i=e(43010),E=Array.from({length:20}).map(function(D,l){return{key:l.toString(),title:"content".concat(l+1),description:"description of content".concat(l+1),disabled:l%3<1}}),r=E.filter(function(D){return Number(D.key)%3>1}).map(function(D){return D.key}),c=function(){var l=(0,p.useState)(r),v=u()(l,2),f=v[0],P=v[1],h=(0,p.useState)([]),K=u()(h,2),O=K[0],b=K[1],o=(0,p.useState)(!1),n=u()(o,2),_=n[0],t=n[1],M=function(g,L,W){P(g),console.log("targetKeys: ",g),console.log("direction: ",L),console.log("moveKeys: ",W)},A=function(g,L){b([].concat(s()(g),s()(L))),console.log("sourceSelectedKeys: ",g),console.log("targetSelectedKeys: ",L)},T=function(g,L){console.log("direction:",g),console.log("target:",L.target)},k=function(g){t(g)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.Z,{dataSource:E,titles:["Source","Target"],targetKeys:f,selectedKeys:O,onChange:M,onSelectChange:A,onScroll:T,render:function(g){return g.title},disabled:_,oneWay:!0,style:{marginBottom:16}}),(0,i.jsx)(y.Z,{unCheckedChildren:"disabled",checkedChildren:"disabled",checked:_,onChange:k})]})};d.default=c},71207:function(x,d,e){e.r(d);var C=e(48305),s=e.n(C),a=e(85170),u=e(68808),p=e(43010),m=function(){var i=(0,a.useState)([]),E=s()(i,2),r=E[0],c=E[1],D=(0,a.useState)([]),l=s()(D,2),v=l[0],f=l[1],P=function(){for(var o=[],n=[],_=0;_<20;_++){var t={key:_.toString(),title:"content".concat(_+1),description:"description of content".concat(_+1),chosen:_%2===0};t.chosen&&o.push(t.key),n.push(t)}c(n),f(o)};(0,a.useEffect)(function(){P()},[]);var h=function(o,n){return n.description.indexOf(o)>-1},K=function(o){f(o)},O=function(o,n){console.log("search:",o,n)};return(0,p.jsx)(u.Z,{dataSource:r,showSearch:!0,filterOption:h,targetKeys:v,onChange:K,onSearch:O,render:function(o){return o.title}})};d.default=m},69869:function(x,d,e){e.r(d);var C=e(85170),s=e(769),a=e(68808),u=e(43010),p=function(){return(0,u.jsxs)(s.Z,{direction:"vertical",children:[(0,u.jsx)(a.Z,{status:"error"}),(0,u.jsx)(a.Z,{status:"warning",showSearch:!0})]})};d.default=p},91046:function(x,d,e){e.r(d);var C=e(48305),s=e.n(C),a=e(26068),u=e.n(a),p=e(67825),m=e.n(p),y=e(85170),i=e(68808),E=e(10538),r=e(13883),c=e(769),D=e(79932),l=e(7857),v=e(43010),f=["leftColumns","rightColumns"],P=function(t){var M=t.leftColumns,A=t.rightColumns,T=m()(t,f);return(0,v.jsx)(i.Z,u()(u()({},T),{},{children:function(j){var g=j.direction,L=j.filteredItems,W=j.onItemSelectAll,z=j.onItemSelect,N=j.selectedKeys,F=j.disabled,X=g==="left"?M:A,$={getCheckboxProps:function(S){return{disabled:F||S.disabled}},onSelectAll:function(S,U){var B=U.filter(function(H){return!H.disabled}).map(function(H){var G=H.key;return G}),Z=S?(0,l.Z)(B,N):(0,l.Z)(N,B);W(Z,S)},onSelect:function(S,U){var B=S.key;z(B,U)},selectedRowKeys:N};return(0,v.jsx)(E.Z,{rowSelection:$,columns:X,dataSource:L,size:"small",style:{pointerEvents:F?"none":void 0},onRow:function(S){var U=S.key,B=S.disabled;return{onClick:function(){B||F||z(U,!N.includes(U))}}}})}}))},h=["cat","dog","bird"],K=Array.from({length:20}).map(function(_,t){return{key:t.toString(),title:"content".concat(t+1),description:"description of content".concat(t+1),disabled:t%4===0,tag:h[t%3]}}),O=K.filter(function(_){return Number(_.key)%3>1}).map(function(_){return _.key}),b=[{dataIndex:"title",title:"Name"},{dataIndex:"tag",title:"Tag",render:function(t){return(0,v.jsx)(r.Z,{children:t})}},{dataIndex:"description",title:"Description"}],o=[{dataIndex:"title",title:"Name"}],n=function(){var t=(0,y.useState)(O),M=s()(t,2),A=M[0],T=M[1],k=(0,y.useState)(!1),j=s()(k,2),g=j[0],L=j[1],W=(0,y.useState)(!1),z=s()(W,2),N=z[0],F=z[1],X=function(U){T(U)},$=function(U){L(U)},R=function(U){F(U)};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(P,{dataSource:K,targetKeys:A,disabled:g,showSearch:N,onChange:X,filterOption:function(U,B){return B.title.indexOf(U)!==-1||B.tag.indexOf(U)!==-1},leftColumns:b,rightColumns:o}),(0,v.jsxs)(c.Z,{style:{marginTop:16},children:[(0,v.jsx)(D.Z,{unCheckedChildren:"disabled",checkedChildren:"disabled",checked:g,onChange:$}),(0,v.jsx)(D.Z,{unCheckedChildren:"showSearch",checkedChildren:"showSearch",checked:N,onChange:R})]})]})};d.default=n},38518:function(x,d,e){e.r(d);var C=e(48305),s=e.n(C),a=e(15558),u=e.n(a),p=e(26068),m=e.n(p),y=e(67825),i=e.n(y),E=e(85170),r=e(2300),c=e(68808),D=e(39226),l=e(43010),v=["children"],f=["dataSource","targetKeys"],P=function(n,_){return n.includes(_)},h=function o(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],_=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return n.map(function(t){var M=t.children,A=i()(t,v);return m()(m()({},A),{},{disabled:_.includes(A.key),children:o(M,_)})})},K=function(n){var _=n.dataSource,t=n.targetKeys,M=i()(n,f),A=r.Z.useToken(),T=A.token,k=[];function j(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];g.forEach(function(L){k.push(L),j(L.children)})}return j(_),(0,l.jsx)(c.Z,m()(m()({},M),{},{targetKeys:t,dataSource:k,className:"tree-transfer",render:function(L){return L.title},showSelectAll:!1,children:function(L){var W=L.direction,z=L.onItemSelect,N=L.selectedKeys;if(W==="left"){var F=[].concat(u()(N),u()(t));return(0,l.jsx)("div",{style:{padding:T.paddingXS},children:(0,l.jsx)(D.Z,{blockNode:!0,checkable:!0,checkStrictly:!0,defaultExpandAll:!0,checkedKeys:F,treeData:h(_,t),onCheck:function($,R){var S=R.node.key;z(S,!P(F,S))},onSelect:function($,R){var S=R.node.key;z(S,!P(F,S))}})})}}}))},O=[{key:"0-0",title:"0-0"},{key:"0-1",title:"0-1",children:[{key:"0-1-0",title:"0-1-0"},{key:"0-1-1",title:"0-1-1"}]},{key:"0-2",title:"0-2"},{key:"0-3",title:"0-3"},{key:"0-4",title:"0-4"}],b=function(){var n=(0,E.useState)([]),_=s()(n,2),t=_[0],M=_[1],A=function(k){M(k)};return(0,l.jsx)(K,{dataSource:O,targetKeys:t,onChange:A})};d.default=b},33891:function(x,d,e){var C=e(85170),s=e(73434),a=e.n(s),u=e(43010);function p(y,i,E){return typeof y=="boolean"?y:i===void 0?!!E:i!==!1&&i!==null}function m(y,i,E){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:(0,u.jsx)(a(),{}),c=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,D=p(y,i,c);if(!D)return[!1,null];var l=typeof i=="boolean"||i===void 0||i===null?r:i;return[!0,E?E(l):l]}d.Z=m},11943:function(x,d,e){var C=e(26068),s=e.n(C),a=e(67825),u=e.n(a),p=e(26586),m=e(85170),y=e(43010),i=["style","noStyle","disabled"],E={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},r=m.forwardRef(function(c,D){var l=function(o){var n=o.keyCode;n===p.Z.ENTER&&o.preventDefault()},v=function(o){var n=o.keyCode,_=c.onClick;n===p.Z.ENTER&&_&&_()},f=c.style,P=c.noStyle,h=c.disabled,K=u()(c,i),O={};return P||(O=s()({},E)),h&&(O.pointerEvents="none"),O=s()(s()({},O),f),(0,y.jsx)("div",s()(s()({role:"button",tabIndex:0,ref:D},K),{},{onKeyDown:l,onKeyUp:v,style:O}))});d.Z=r},18933:function(x,d,e){var C=e(26068),s=e.n(C),a=e(85170),u=e(52600),p=e(37529),m=function(i,E){var r=a.useContext(u.Z),c=a.useMemo(function(){var l,v=E||p.Z[i],f=(l=r==null?void 0:r[i])!==null&&l!==void 0?l:{};return s()(s()({},typeof v=="function"?v():v),f||{})},[i,E,r]),D=a.useMemo(function(){var l=r==null?void 0:r.locale;return r!=null&&r.exist&&!l?p.Z.locale:l},[r]);return[c,D]};d.Z=m},92073:function(x,d,e){e.d(d,{N:function(){return C}});var C=function(a){return{color:a.colorLink,textDecoration:"none",outline:"none",cursor:"pointer",transition:"color ".concat(a.motionDurationSlow),"&:focus, &:hover":{color:a.colorLinkHover},"&:active":{color:a.colorLinkActive}}}}}]);
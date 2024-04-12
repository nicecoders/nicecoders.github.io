"use strict";(self.webpackChunknicecode=self.webpackChunknicecode||[]).push([[4350],{21773:function(U,x,c){c.d(x,{J:function(){return E}});var i=c(50959);const E=i.createContext({}),h=i.createContext({message:{},notification:{},modal:{}});x.Z=h},42627:function(U,x,c){c.d(x,{CW:function(){return n},ZP:function(){return l},z5:function(){return B}});var i=c(50959),E=c(93277),h=c(43920),N=c(78337),j=c(1010),F=c(86261),w=c(67118),R=c(82187),y=c.n(R),z=c(73062),H=c(25765),Z=c(28041),P=c(9173),L=c(26653),M=c(81275),D=(0,L.bk)(["Notification","PurePanel"],a=>{const e=`${a.componentCls}-notice`,r=(0,P.Rp)(a);return{[`${e}-pure-panel`]:Object.assign(Object.assign({},(0,P.$e)(r)),{width:r.width,maxWidth:`calc(100vw - ${(0,M.bf)(a.calc(r.notificationMarginEdge).mul(2).equal())})`,margin:0})}},P.eh),T=function(a,e){var r={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&e.indexOf(s)<0&&(r[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,s=Object.getOwnPropertySymbols(a);d<s.length;d++)e.indexOf(s[d])<0&&Object.prototype.propertyIsEnumerable.call(a,s[d])&&(r[s[d]]=a[s[d]]);return r};const A={info:i.createElement(F.Z,null),success:i.createElement(E.Z,null),error:i.createElement(h.Z,null),warning:i.createElement(j.Z,null),loading:i.createElement(w.Z,null)};function B(a,e){return e===null||e===!1?null:e||i.createElement(N.Z,{className:`${a}-close-icon`})}const t={success:E.Z,info:F.Z,error:h.Z,warning:j.Z},n=a=>{const{prefixCls:e,icon:r,type:s,message:d,description:b,btn:p,role:f="alert"}=a;let u=null;return r?u=i.createElement("span",{className:`${e}-icon`},r):s&&(u=i.createElement(t[s]||null,{className:y()(`${e}-icon`,`${e}-icon-${s}`)})),i.createElement("div",{className:y()({[`${e}-with-icon`]:u}),role:f},u,i.createElement("div",{className:`${e}-message`},d),i.createElement("div",{className:`${e}-description`},b),p&&i.createElement("div",{className:`${e}-btn`},p))};var l=a=>{const{prefixCls:e,className:r,icon:s,type:d,message:b,description:p,btn:f,closable:u=!0,closeIcon:I,className:g}=a,C=T(a,["prefixCls","className","icon","type","message","description","btn","closable","closeIcon","className"]),{getPrefixCls:O}=i.useContext(H.E_),$=e||O("notification"),v=`${$}-notice`,S=(0,Z.Z)($),[m,G,W]=(0,P.ZP)($,S);return m(i.createElement("div",{className:y()(`${v}-pure-panel`,G,r,W,S)},i.createElement(D,{prefixCls:$}),i.createElement(z.qX,Object.assign({},C,{prefixCls:$,eventKey:"pure",duration:null,closable:u,className:y()({notificationClassName:g}),closeIcon:B($,I),content:i.createElement(n,{prefixCls:v,icon:s,type:d,message:b,description:p,btn:f})}))))}},9173:function(U,x,c){c.d(x,{ZP:function(){return B},$e:function(){return M},eh:function(){return T},Rp:function(){return A}});var i=c(81275),E=c(56496),h=c(12775),N=c(51540),j=c(26653),w=t=>{const{componentCls:n,notificationMarginEdge:o,animationMaxHeight:l}=t,a=`${n}-notice`,e=new i.E4("antNotificationFadeIn",{"0%":{transform:"translate3d(100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}}),r=new i.E4("antNotificationTopFadeIn",{"0%":{top:-l,opacity:0},"100%":{top:0,opacity:1}}),s=new i.E4("antNotificationBottomFadeIn",{"0%":{bottom:t.calc(l).mul(-1).equal(),opacity:0},"100%":{bottom:0,opacity:1}}),d=new i.E4("antNotificationLeftFadeIn",{"0%":{transform:"translate3d(-100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}});return{[n]:{[`&${n}-top, &${n}-bottom`]:{marginInline:0,[a]:{marginInline:"auto auto"}},[`&${n}-top`]:{[`${n}-fade-enter${n}-fade-enter-active, ${n}-fade-appear${n}-fade-appear-active`]:{animationName:r}},[`&${n}-bottom`]:{[`${n}-fade-enter${n}-fade-enter-active, ${n}-fade-appear${n}-fade-appear-active`]:{animationName:s}},[`&${n}-topRight, &${n}-bottomRight`]:{[`${n}-fade-enter${n}-fade-enter-active, ${n}-fade-appear${n}-fade-appear-active`]:{animationName:e}},[`&${n}-topLeft, &${n}-bottomLeft`]:{marginRight:{value:0,_skip_check_:!0},marginLeft:{value:o,_skip_check_:!0},[a]:{marginInlineEnd:"auto",marginInlineStart:0},[`${n}-fade-enter${n}-fade-enter-active, ${n}-fade-appear${n}-fade-appear-active`]:{animationName:d}}}}};const R=["top","topLeft","topRight","bottom","bottomLeft","bottomRight"],y={topLeft:"left",topRight:"right",bottomLeft:"left",bottomRight:"right",top:"left",bottom:"left"},z=(t,n)=>{const{componentCls:o}=t;return{[`${o}-${n}`]:{[`&${o}-stack > ${o}-notice-wrapper`]:{[n.startsWith("top")?"top":"bottom"]:0,[y[n]]:{value:0,_skip_check_:!0}}}}},H=t=>{const n={};for(let o=1;o<t.notificationStackLayer;o++)n[`&:nth-last-child(${o+1})`]={overflow:"hidden",[`& > ${t.componentCls}-notice`]:{opacity:0,transition:`opacity ${t.motionDurationMid}`}};return Object.assign({[`&:not(:nth-last-child(-n+${t.notificationStackLayer}))`]:{opacity:0,overflow:"hidden",color:"transparent",pointerEvents:"none"}},n)},Z=t=>{const n={};for(let o=1;o<t.notificationStackLayer;o++)n[`&:nth-last-child(${o+1})`]={background:t.colorBgBlur,backdropFilter:"blur(10px)","-webkit-backdrop-filter":"blur(10px)"};return Object.assign({},n)};var L=t=>{const{componentCls:n}=t;return Object.assign({[`${n}-stack`]:{[`& > ${n}-notice-wrapper`]:Object.assign({transition:`all ${t.motionDurationSlow}, backdrop-filter 0s`,position:"absolute"},H(t))},[`${n}-stack:not(${n}-stack-expanded)`]:{[`& > ${n}-notice-wrapper`]:Object.assign({},Z(t))},[`${n}-stack${n}-stack-expanded`]:{[`& > ${n}-notice-wrapper`]:{"&:not(:nth-last-child(-n + 1))":{opacity:1,overflow:"unset",color:"inherit",pointerEvents:"auto",[`& > ${t.componentCls}-notice`]:{opacity:1}},"&:after":{content:'""',position:"absolute",height:t.margin,width:"100%",insetInline:0,bottom:t.calc(t.margin).mul(-1).equal(),background:"transparent",pointerEvents:"auto"}}}},R.map(o=>z(t,o)).reduce((o,l)=>Object.assign(Object.assign({},o),l),{}))};const M=t=>{const{iconCls:n,componentCls:o,boxShadow:l,fontSizeLG:a,notificationMarginBottom:e,borderRadiusLG:r,colorSuccess:s,colorInfo:d,colorWarning:b,colorError:p,colorTextHeading:f,notificationBg:u,notificationPadding:I,notificationMarginEdge:g,fontSize:C,lineHeight:O,width:$,notificationIconSize:v,colorText:S}=t,m=`${o}-notice`;return{position:"relative",marginBottom:e,marginInlineStart:"auto",background:u,borderRadius:r,boxShadow:l,[m]:{padding:I,width:$,maxWidth:`calc(100vw - ${(0,i.bf)(t.calc(g).mul(2).equal())})`,overflow:"hidden",lineHeight:O,wordWrap:"break-word"},[`${m}-message`]:{marginBottom:t.marginXS,color:f,fontSize:a,lineHeight:t.lineHeightLG},[`${m}-description`]:{fontSize:C,color:S},[`${m}-closable ${m}-message`]:{paddingInlineEnd:t.paddingLG},[`${m}-with-icon ${m}-message`]:{marginBottom:t.marginXS,marginInlineStart:t.calc(t.marginSM).add(v).equal(),fontSize:a},[`${m}-with-icon ${m}-description`]:{marginInlineStart:t.calc(t.marginSM).add(v).equal(),fontSize:C},[`${m}-icon`]:{position:"absolute",fontSize:v,lineHeight:1,[`&-success${n}`]:{color:s},[`&-info${n}`]:{color:d},[`&-warning${n}`]:{color:b},[`&-error${n}`]:{color:p}},[`${m}-close`]:Object.assign({position:"absolute",top:t.notificationPaddingVertical,insetInlineEnd:t.notificationPaddingHorizontal,color:t.colorIcon,outline:"none",width:t.notificationCloseButtonSize,height:t.notificationCloseButtonSize,borderRadius:t.borderRadiusSM,transition:`background-color ${t.motionDurationMid}, color ${t.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:t.colorIconHover,backgroundColor:t.colorBgTextHover},"&:active":{backgroundColor:t.colorBgTextActive}},(0,h.Qy)(t)),[`${m}-btn`]:{float:"right",marginTop:t.marginSM}}},D=t=>{const{componentCls:n,notificationMarginBottom:o,notificationMarginEdge:l,motionDurationMid:a,motionEaseInOut:e}=t,r=`${n}-notice`,s=new i.E4("antNotificationFadeOut",{"0%":{maxHeight:t.animationMaxHeight,marginBottom:o},"100%":{maxHeight:0,marginBottom:0,paddingTop:0,paddingBottom:0,opacity:0}});return[{[n]:Object.assign(Object.assign({},(0,h.Wf)(t)),{position:"fixed",zIndex:t.zIndexPopup,marginRight:{value:l,_skip_check_:!0},[`${n}-hook-holder`]:{position:"relative"},[`${n}-fade-appear-prepare`]:{opacity:"0 !important"},[`${n}-fade-enter, ${n}-fade-appear`]:{animationDuration:t.motionDurationMid,animationTimingFunction:e,animationFillMode:"both",opacity:0,animationPlayState:"paused"},[`${n}-fade-leave`]:{animationTimingFunction:e,animationFillMode:"both",animationDuration:a,animationPlayState:"paused"},[`${n}-fade-enter${n}-fade-enter-active, ${n}-fade-appear${n}-fade-appear-active`]:{animationPlayState:"running"},[`${n}-fade-leave${n}-fade-leave-active`]:{animationName:s,animationPlayState:"running"},"&-rtl":{direction:"rtl",[`${r}-btn`]:{float:"left"}}})},{[n]:{[`${r}-wrapper`]:Object.assign({},M(t))}}]},T=t=>({zIndexPopup:t.zIndexPopupBase+E.u6+50,width:384}),A=t=>{const n=t.paddingMD,o=t.paddingLG;return(0,N.TS)(t,{notificationBg:t.colorBgElevated,notificationPaddingVertical:n,notificationPaddingHorizontal:o,notificationIconSize:t.calc(t.fontSizeLG).mul(t.lineHeightLG).equal(),notificationCloseButtonSize:t.calc(t.controlHeightLG).mul(.55).equal(),notificationMarginBottom:t.margin,notificationPadding:`${(0,i.bf)(t.paddingMD)} ${(0,i.bf)(t.paddingContentHorizontalLG)}`,notificationMarginEdge:t.marginLG,animationMaxHeight:150,notificationStackLayer:3})};var B=(0,j.I$)("Notification",t=>{const n=A(t);return[D(n),w(n),L(n)]},T)},99684:function(U,x,c){c.d(x,{Z:function(){return n},k:function(){return t}});var i=c(50959),E=c(82187),h=c.n(E),N=c(73062),j=c(45195),F=c(25765),w=c(28041),R=c(73465),y=c(42627),z=c(9173);function H(o,l,a){let e;switch(o){case"top":e={left:"50%",transform:"translateX(-50%)",right:"auto",top:l,bottom:"auto"};break;case"topLeft":e={left:0,top:l,bottom:"auto"};break;case"topRight":e={right:0,top:l,bottom:"auto"};break;case"bottom":e={left:"50%",transform:"translateX(-50%)",right:"auto",top:"auto",bottom:a};break;case"bottomLeft":e={left:0,top:"auto",bottom:a};break;default:e={right:0,top:"auto",bottom:a};break}return e}function Z(o){return{motionName:`${o}-fade`}}var P=function(o,l){var a={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&l.indexOf(e)<0&&(a[e]=o[e]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(o);r<e.length;r++)l.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(o,e[r])&&(a[e[r]]=o[e[r]]);return a};const L=24,M=4.5,D="topRight",T=o=>{let{children:l,prefixCls:a}=o;const e=(0,w.Z)(a),[r,s,d]=(0,z.ZP)(a,e);return r(i.createElement(N.JB,{classNames:{list:h()(s,d,e)}},l))},A=(o,l)=>{let{prefixCls:a,key:e}=l;return i.createElement(T,{prefixCls:a,key:e},o)},B=i.forwardRef((o,l)=>{const{top:a,bottom:e,prefixCls:r,getContainer:s,maxCount:d,rtl:b,onAllRemoved:p,stack:f,duration:u}=o,{getPrefixCls:I,getPopupContainer:g,notification:C,direction:O}=(0,i.useContext)(F.E_),[,$]=(0,R.ZP)(),v=r||I("notification"),S=V=>H(V,a!=null?a:L,e!=null?e:L),m=()=>h()({[`${v}-rtl`]:b!=null?b:O==="rtl"}),G=()=>Z(v),[W,X]=(0,N.lm)({prefixCls:v,style:S,className:m,motion:G,closable:!0,closeIcon:(0,y.z5)(v),duration:u!=null?u:M,getContainer:()=>(s==null?void 0:s())||(g==null?void 0:g())||document.body,maxCount:d,onAllRemoved:p,renderNotifications:A,stack:f===!1?!1:{threshold:typeof f=="object"?f==null?void 0:f.threshold:void 0,offset:8,gap:$.margin}});return i.useImperativeHandle(l,()=>Object.assign(Object.assign({},W),{prefixCls:v,notification:C})),X});function t(o){const l=i.useRef(null),a=(0,j.ln)("Notification");return[i.useMemo(()=>{const r=p=>{var f;if(!l.current)return;const{open:u,prefixCls:I,notification:g}=l.current,C=`${I}-notice`,{message:O,description:$,icon:v,type:S,btn:m,className:G,style:W,role:X="alert",closeIcon:V,closable:J}=p,Q=P(p,["message","description","icon","type","btn","className","style","role","closeIcon","closable"]),K=(0,y.z5)(C,typeof V!="undefined"?V:g==null?void 0:g.closeIcon);return u(Object.assign(Object.assign({placement:(f=o==null?void 0:o.placement)!==null&&f!==void 0?f:D},Q),{content:i.createElement(y.CW,{prefixCls:C,icon:v,type:S,message:O,description:$,btn:m,role:X}),className:h()(S&&`${C}-${S}`,G,g==null?void 0:g.className),style:Object.assign(Object.assign({},g==null?void 0:g.style),W),closeIcon:K,closable:J!=null?J:!!K}))},d={open:r,destroy:p=>{var f,u;p!==void 0?(f=l.current)===null||f===void 0||f.close(p):(u=l.current)===null||u===void 0||u.destroy()}};return["success","info","warning","error"].forEach(p=>{d[p]=f=>r(Object.assign(Object.assign({},f),{type:p}))}),d},[]),i.createElement(B,Object.assign({key:"notification-holder"},o,{ref:l}))]}function n(o){return t(o)}}}]);

"use strict";(self.webpackChunknicecode=self.webpackChunknicecode||[]).push([[3277],{40075:function(E,e,_){_.r(e);var i=_(75271),r=_(21393),l=_(1986),s=_(52676),a=r.ZP._InternalPanelDoNotUseOrYouWillBeFired;e.default=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.ZP,{theme:{components:{Message:{contentPadding:40,contentBg:"#e6f4ff"}}},children:(0,s.jsx)(a,{content:"Hello World!",type:"error"})}),(0,s.jsx)(l.ZP,{theme:{components:{Message:{colorBgElevated:"#e6f4ff"}}},children:(0,s.jsx)(a,{content:"Hello World!",type:"error"})})]})}},22447:function(E,e,_){_.r(e);var i=_(48305),r=_.n(i),l=_(75271),s=_(21393),a=_(93633),n=_(52676),o=function(){var m=s.ZP.useMessage(),t=r()(m,2),d=t[0],c=t[1],u=function(){d.open({type:"success",content:"This is a prompt message with custom className and style",className:"custom-class",style:{marginTop:"20vh"}})};return(0,n.jsxs)(n.Fragment,{children:[c,(0,n.jsx)(a.ZP,{onClick:u,children:"Customized style"})]})};e.default=o},32405:function(E,e,_){_.r(e);var i=_(48305),r=_.n(i),l=_(75271),s=_(21393),a=_(93633),n=_(52676),o=function(){var m=s.ZP.useMessage(),t=r()(m,2),d=t[0],c=t[1],u=function(){d.open({type:"success",content:"This is a prompt message for success, and it will disappear in 10 seconds",duration:10})};return(0,n.jsxs)(n.Fragment,{children:[c,(0,n.jsx)(a.ZP,{onClick:u,children:"Customized display duration"})]})};e.default=o},15415:function(E,e,_){_.r(e);var i=_(48305),r=_.n(i),l=_(75271),s=_(21393),a=_(93633),n=_(52676),o=function(){var m=s.ZP.useMessage(),t=r()(m,2),d=t[0],c=t[1],u=function(){d.info("Hello, Ant Design!")};return(0,n.jsxs)(n.Fragment,{children:[c,(0,n.jsx)(a.ZP,{type:"primary",onClick:u,children:"Display normal message"})]})};e.default=o},51658:function(E,e,_){_.r(e);var i=_(75271),r=_(21393),l=_(93633),s=_(52676),a=function(){r.ZP.info("This is a normal message")},n=function(){return(0,s.jsx)(l.ZP,{type:"primary",onClick:a,children:"Static Method"})};e.default=n},16113:function(E,e,_){_.r(e);var i=_(48305),r=_.n(i),l=_(75271),s=_(21393),a=_(93633),n=_(52676),o=function(){var m=s.ZP.useMessage(),t=r()(m,2),d=t[0],c=t[1],u=function(){d.open({type:"loading",content:"Action in progress..",duration:0}),setTimeout(d.destroy,2500)};return(0,n.jsxs)(n.Fragment,{children:[c,(0,n.jsx)(a.ZP,{onClick:u,children:"Display a loading indicator"})]})};e.default=o},77615:function(E,e,_){_.r(e);var i=_(48305),r=_.n(i),l=_(75271),s=_(21393),a=_(8578),n=_(93633),o=_(52676),M=function(){var t=s.ZP.useMessage(),d=r()(t,2),c=d[0],u=d[1],P=function(){c.open({type:"success",content:"This is a success message"})},D=function(){c.open({type:"error",content:"This is an error message"})},g=function(){c.open({type:"warning",content:"This is a warning message"})};return(0,o.jsxs)(o.Fragment,{children:[u,(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(n.ZP,{onClick:P,children:"Success"}),(0,o.jsx)(n.ZP,{onClick:D,children:"Error"}),(0,o.jsx)(n.ZP,{onClick:g,children:"Warning"})]})]})};e.default=M},85096:function(E,e,_){_.r(e);var i=_(75271),r=_(21393),l=_(52676),s=r.ZP._InternalPanelDoNotUseOrYouWillBeFired;e.default=function(){return(0,l.jsx)(s,{content:"Hello World!",type:"error"})}},24532:function(E,e,_){_.r(e);var i=_(48305),r=_.n(i),l=_(75271),s=_(21393),a=_(93633),n=_(52676),o=function(){var m=s.ZP.useMessage(),t=r()(m,2),d=t[0],c=t[1],u=function(){d.open({type:"loading",content:"Action in progress..",duration:2.5}).then(function(){return s.ZP.success("Loading finished",2.5)}).then(function(){return s.ZP.info("Loading finished",2.5)})};return(0,n.jsxs)(n.Fragment,{children:[c,(0,n.jsx)(a.ZP,{onClick:u,children:"Display sequential messages"})]})};e.default=o},56362:function(E,e,_){_.r(e);var i=_(48305),r=_.n(i),l=_(75271),s=_(21393),a=_(93633),n=_(52676),o=function(){var m=s.ZP.useMessage(),t=r()(m,2),d=t[0],c=t[1],u="updatable",P=function(){d.open({key:u,type:"loading",content:"Loading..."}),setTimeout(function(){d.open({key:u,type:"success",content:"Loaded!",duration:2})},1e3)};return(0,n.jsxs)(n.Fragment,{children:[c,(0,n.jsx)(a.ZP,{type:"primary",onClick:P,children:"Open the message box"})]})};e.default=o}}]);

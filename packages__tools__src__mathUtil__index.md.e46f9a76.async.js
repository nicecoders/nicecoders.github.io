(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"+Ty7":function(e,t,n){"use strict";n.r(t);var a=n("T9Mk"),l=n.n(a),r=n("fmlK"),c=n("K8wY"),m=n("hqNw");n("JjdP");t["default"]=e=>(l.a.useEffect((()=>{null!==e&&void 0!==e&&e.location.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"mathutil"},l.a.createElement(r["AnchorLink"],{to:"#mathutil","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"mathUtil"),l.a.createElement(c["a"],{type:"info"},l.a.createElement("strong",null,"\u6570\u5b57\u65b9\u6cd5\u5408\u96c6")),l.a.createElement("h3",{id:"add\uff1a\u52a0\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#add\uff1a\u52a0\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"add\uff1a\u52a0\u6cd5"),l.a.createElement(m["a"],{code:"import { mathUtil } from '@nicecode/tools';\n\nconst val = mathUtil.add(1, 3)   // --\x3e 4",lang:"js"}),l.a.createElement("h3",{id:"subtract\uff1a\u51cf\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#subtract\uff1a\u51cf\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"subtract\uff1a\u51cf\u6cd5"),l.a.createElement(m["a"],{code:"import { mathUtil } from '@nicecode/tools';\n\nconst val = mathUtil.subtract(7, 3)   // --\x3e 4",lang:"js"}),l.a.createElement("h3",{id:"multiply\uff1a\u4e58\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#multiply\uff1a\u4e58\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"multiply\uff1a\u4e58\u6cd5"),l.a.createElement(m["a"],{code:"import { mathUtil } from '@nicecode/tools';\n\nconst val = mathUtil.multiply(7, 3)   // --\x3e 21",lang:"js"}),l.a.createElement("h3",{id:"devide\uff1a\u9664\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#devide\uff1a\u9664\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"devide\uff1a\u9664\u6cd5"),l.a.createElement(m["a"],{code:"import { mathUtil } from '@nicecode/tools';\n\nconst val = mathUtil.devide(6, 3)   // --\x3e 2",lang:"js"}),l.a.createElement("h3",{id:"mean\uff1a\u6c42\u5e73\u5747\u503c"},l.a.createElement(r["AnchorLink"],{to:"#mean\uff1a\u6c42\u5e73\u5747\u503c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"mean\uff1a\u6c42\u5e73\u5747\u503c"),l.a.createElement(m["a"],{code:"import { mathUtil } from '@nicecode/tools';\n\nconst val = mathUtil.mean([2,4,6,8])   // --\x3e 5",lang:"js"}),l.a.createElement("h3",{id:"meanby\uff1a\u8fed\u4ee3\u5668\u7248\u6c42\u5e73\u5747\u503c"},l.a.createElement(r["AnchorLink"],{to:"#meanby\uff1a\u8fed\u4ee3\u5668\u7248\u6c42\u5e73\u5747\u503c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"meanBy\uff1a\u8fed\u4ee3\u5668\u7248\u6c42\u5e73\u5747\u503c"),l.a.createElement(m["a"],{code:"import { mathUtil } from '@nicecode/tools';\n\nvar objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];\n \nmathUtil.meanBy(objects, function(o) { return o.n; });\n// => 5\n \n// The `mathUtil.property` iteratee shorthand.\nmathUtil.meanBy(objects, 'n');\n// => 5",lang:"js"}),l.a.createElement("h3",{id:"ceil\uff1a\u5411\u4e0a\u53d6\u6574"},l.a.createElement(r["AnchorLink"],{to:"#ceil\uff1a\u5411\u4e0a\u53d6\u6574","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"ceil\uff1a\u5411\u4e0a\u53d6\u6574"),l.a.createElement(m["a"],{code:"import { mathUtil } from '@nicecode/tools';\n\nmathUtil.ceil(4.006)   // --\x3e 5",lang:"js"}),l.a.createElement("h3",{id:"floor\uff1a\u5411\u4e0b\u53d6\u6574"},l.a.createElement(r["AnchorLink"],{to:"#floor\uff1a\u5411\u4e0b\u53d6\u6574","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"floor\uff1a\u5411\u4e0b\u53d6\u6574"),l.a.createElement(m["a"],{code:"import { mathUtil } from '@nicecode/tools';\n\nmathUtil.floor(4.006)   // --\x3e 4",lang:"js"}),l.a.createElement("h3",{id:"round\uff1a\u56db\u820d\u4e94\u5165"},l.a.createElement(r["AnchorLink"],{to:"#round\uff1a\u56db\u820d\u4e94\u5165","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"round\uff1a\u56db\u820d\u4e94\u5165"),l.a.createElement(m["a"],{code:"import { mathUtil } from '@nicecode/tools';\n\nmathUtil.round(4.4)   // --\x3e 4\n\nmathUtil.round(4.6)   // --\x3e 5",lang:"js"}),l.a.createElement("h3",{id:"sum\uff1a\u6c42\u548c"},l.a.createElement(r["AnchorLink"],{to:"#sum\uff1a\u6c42\u548c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"sum\uff1a\u6c42\u548c"),l.a.createElement(m["a"],{code:"import { mathUtil } from '@nicecode/tools';\n\nmathUtil.sum([2,4,6,8])   // --\x3e 20",lang:"js"}),l.a.createElement("h3",{id:"sumby\uff1a\u8fed\u4ee3\u5668\u7248\u6c42\u548c"},l.a.createElement(r["AnchorLink"],{to:"#sumby\uff1a\u8fed\u4ee3\u5668\u7248\u6c42\u548c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"sumBy\uff1a\u8fed\u4ee3\u5668\u7248\u6c42\u548c"),l.a.createElement(m["a"],{code:"import { mathUtil } from '@nicecode/tools';\n\nvar objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];\n \nmathUtil.sumBy(objects, function(o) { return o.n; });\n// => 20\n \n// The `mathUtil.property` iteratee shorthand.\nmathUtil.sumBy(objects, 'n');\n// => 20",lang:"js"}),l.a.createElement("h3",{id:"max\uff1a\u6700\u5927\u503c"},l.a.createElement(r["AnchorLink"],{to:"#max\uff1a\u6700\u5927\u503c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"max\uff1a\u6700\u5927\u503c"),l.a.createElement(m["a"],{code:"import { mathUtil } from '@nicecode/tools';\n\nmathUtil.max([2,4,6,8])   // --\x3e 8",lang:"js"}),l.a.createElement("h3",{id:"maxby\uff1a\u8fed\u4ee3\u5668\u7248\u6c42\u6700\u5927\u503c"},l.a.createElement(r["AnchorLink"],{to:"#maxby\uff1a\u8fed\u4ee3\u5668\u7248\u6c42\u6700\u5927\u503c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"maxBy\uff1a\u8fed\u4ee3\u5668\u7248\u6c42\u6700\u5927\u503c"),l.a.createElement(m["a"],{code:"import { mathUtil } from '@nicecode/tools';\n\nvar objects = [{ 'n': 1 }, { 'n': 2 }];\n \nmathUtil.maxBy(objects, function(o) { return o.n; });\n// => { 'n': 2 }\n \n// The `mathUtil.property` iteratee shorthand.\nmathUtil.maxBy(objects, 'n');\n// => { 'n': 2 }",lang:"js"}),l.a.createElement("h3",{id:"min\uff1a\u6700\u5c0f\u503c"},l.a.createElement(r["AnchorLink"],{to:"#min\uff1a\u6700\u5c0f\u503c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"min\uff1a\u6700\u5c0f\u503c"),l.a.createElement(m["a"],{code:"import { mathUtil } from '@nicecode/tools';\n\nmathUtil.min([2,4,6,8])   // --\x3e 2",lang:"js"}),l.a.createElement("h3",{id:"minby\uff1a\u8fed\u4ee3\u5668\u7248\u6c42\u6700\u5c0f\u503c"},l.a.createElement(r["AnchorLink"],{to:"#minby\uff1a\u8fed\u4ee3\u5668\u7248\u6c42\u6700\u5c0f\u503c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"minBy\uff1a\u8fed\u4ee3\u5668\u7248\u6c42\u6700\u5c0f\u503c"),l.a.createElement(m["a"],{code:"import { mathUtil } from '@nicecode/tools';\n\nvar objects = [{ 'n': 1 }, { 'n': 2 }];\n \nmathUtil.minBy(objects, function(o) { return o.n; });\n// => { 'n': 1 }\n \n// The `mathUtil.property` iteratee shorthand.\nmathUtil.minBy(objects, 'n');\n// => { 'n': 1 }",lang:"js"}),l.a.createElement("h3",{id:"inrange\uff1a\u5224\u65ad\u662f\u5426\u5728\u6570\u5b57\u533a\u95f4"},l.a.createElement(r["AnchorLink"],{to:"#inrange\uff1a\u5224\u65ad\u662f\u5426\u5728\u6570\u5b57\u533a\u95f4","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"inRange\uff1a\u5224\u65ad\u662f\u5426\u5728\u6570\u5b57\u533a\u95f4"),l.a.createElement(m["a"],{code:"import { mathUtil } from '@nicecode/tools';\n\nmathUtil.inRange(3, 2, 4);\n// => true\n \nmathUtil.inRange(4, 8);\n// => true\n \nmathUtil.inRange(4, 2);\n// => false\n \nmathUtil.inRange(2, 2);\n// => false\n \nmathUtil.inRange(1.2, 2);\n// => true\n \nmathUtil.inRange(5.2, 4);\n// => false\n \nmathUtil.inRange(-3, -2, -6);\n// => true",lang:"js"}),l.a.createElement("h3",{id:"random\uff1a\u8fd4\u56de\u4e00\u4e2a\u968f\u673a\u6570"},l.a.createElement(r["AnchorLink"],{to:"#random\uff1a\u8fd4\u56de\u4e00\u4e2a\u968f\u673a\u6570","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"random\uff1a\u8fd4\u56de\u4e00\u4e2a\u968f\u673a\u6570"),l.a.createElement(m["a"],{code:"import { mathUtil } from '@nicecode/tools';\n\nmathUtil.random(0, 5);\n// => an integer between 0 and 5\n \nmathUtil.random(5);\n// => also an integer between 0 and 5\n \nmathUtil.random(5, true);\n// => a floating-point number between 0 and 5\n \nmathUtil.random(1.2, 5.2);\n// => a floating-point number between 1.2 and 5.2",lang:"js"}),l.a.createElement("h3",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u65b9\u6cd5"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u8bf4\u660e"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"sub"),l.a.createElement("td",null,"\u51cf\u6cd5"),l.a.createElement("td",null,"function(val, oth)"),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"add"),l.a.createElement("td",null,"\u52a0\u6cd5"),l.a.createElement("td",null,"function(val, oth)"),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"devide"),l.a.createElement("td",null,"\u9664\u6cd5"),l.a.createElement("td",null,"function(val, oth)"),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"multiply"),l.a.createElement("td",null,"\u4e58\u6cd5"),l.a.createElement("td",null,"function(val, oth)"),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"mean"),l.a.createElement("td",null,"\u5e73\u5747\u503c"),l.a.createElement("td",null,"function(array)"),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"ceil"),l.a.createElement("td",null,"\u5411\u4e0a\u53d6\u6574"),l.a.createElement("td",null,"ceil(val, precision)"),l.a.createElement("td",null,"precision: \u4fdd\u7559\u51e0\u4f4d\u5c0f\u6570")),l.a.createElement("tr",null,l.a.createElement("td",null,"floor"),l.a.createElement("td",null,"\u5411\u4e0b\u53d6\u6574"),l.a.createElement("td",null,"floor(val, precision)"),l.a.createElement("td",null,"precision: \u4fdd\u7559\u51e0\u4f4d\u5c0f\u6570")),l.a.createElement("tr",null,l.a.createElement("td",null,"round"),l.a.createElement("td",null,"\u56db\u820d\u4e94\u5165"),l.a.createElement("td",null,"round(val, precision)"),l.a.createElement("td",null,"precision: \u4fdd\u7559\u51e0\u4f4d\u5c0f\u6570")),l.a.createElement("tr",null,l.a.createElement("td",null,"sum"),l.a.createElement("td",null,"\u6c42\u548c"),l.a.createElement("td",null,"sum(array)"),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"sumBy"),l.a.createElement("td",null,"\u6c42\u548c"),l.a.createElement("td",null,"sumBy(array, [iteratee=mathUtil.identity])"),l.a.createElement("td",null,"iteratee: \u8fed\u4ee3\u51fd\u6570")),l.a.createElement("tr",null,l.a.createElement("td",null,"max"),l.a.createElement("td",null,"\u6700\u5927\u503c"),l.a.createElement("td",null,"max(array)"),l.a.createElement("td",null,"\u8fd4\u56de\u6570\u7ec4\u6700\u5927\u503c")),l.a.createElement("tr",null,l.a.createElement("td",null,"maxBy"),l.a.createElement("td",null,"\u6700\u5927\u503c"),l.a.createElement("td",null,"max(array, [iteratee=mathUtil.identity])"),l.a.createElement("td",null,"iteratee: \u8fed\u4ee3\u51fd\u6570")),l.a.createElement("tr",null,l.a.createElement("td",null,"min"),l.a.createElement("td",null,"\u6700\u5c0f\u503c"),l.a.createElement("td",null,"min(array)"),l.a.createElement("td",null,"\u8fd4\u56de\u6570\u7ec4\u6700\u5c0f\u503c")),l.a.createElement("tr",null,l.a.createElement("td",null,"minBy"),l.a.createElement("td",null,"\u6700\u5c0f\u503c"),l.a.createElement("td",null,"minBy(array, [iteratee=mathUtil.identity])"),l.a.createElement("td",null,"iteratee: \u8fed\u4ee3\u51fd\u6570")),l.a.createElement("tr",null,l.a.createElement("td",null,"clamp"),l.a.createElement("td",null,"\u9650\u5236\u533a\u95f4\u8fd4\u56de"),l.a.createElement("td",null,"clamp(number, lower, upper)"),l.a.createElement("td",null,"lower: \u6700\u5c0f\u503c, upper: \u6700\u5927\u503c")),l.a.createElement("tr",null,l.a.createElement("td",null,"inRange"),l.a.createElement("td",null,"\u5224\u65ad\u662f\u5426\u5728\u6570\u5b57\u533a\u95f4"),l.a.createElement("td",null,"inRange(number, (start=0)?, end)"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"random"),l.a.createElement("td",null,"\u8fd4\u56de\u4e00\u4e2a\u968f\u673a\u6570"),l.a.createElement("td",null,"random(?(lower=0), ?(upper=1), ?floating)"),l.a.createElement("td",null,"lower: \u6700\u5c0f\u503c, upper: \u6700\u5927\u503c, floating: \u662f\u5426\u542b\u6709\u5c0f\u6570")))))))},"8Urt":function(e,t,n){},K8wY:function(e,t,n){"use strict";var a=n("DJqP"),l=n("T9Mk"),r=n.n(l);n("8Urt");t["a"]=e=>r.a.createElement("div",Object(a["a"])({className:"__dumi-default-alert"},e))}}]);
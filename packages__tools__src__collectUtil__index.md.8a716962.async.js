(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{"M/Q6":function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a);n("x8cr");function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}t["a"]=function(e){return l.a.createElement("div",c({className:"__dumi-default-alert"},e))}},h5pW:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),c=n("dEAq"),r=n("M/Q6"),i=n("H1Ra"),o=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u96c6\u5408\u7c7b\u65b9\u6cd5collectutil"},l.a.createElement(c["AnchorLink"],{to:"#\u96c6\u5408\u7c7b\u65b9\u6cd5collectutil","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u96c6\u5408\u7c7b\u65b9\u6cd5\uff1acollectUtil"),l.a.createElement(r["a"],{type:"info"},l.a.createElement("strong",null,"\u96c6\u5408\u7c7b\u65b9\u6cd5\u5408\u96c6")),l.a.createElement("h3",{id:"\u901a\u8fc7\u6761\u4ef6\u8ba1\u7b97"},l.a.createElement(c["AnchorLink"],{to:"#\u901a\u8fc7\u6761\u4ef6\u8ba1\u7b97","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u901a\u8fc7\u6761\u4ef6\u8ba1\u7b97"),l.a.createElement("p",null,"\u521b\u5efa\u4e00\u4e2a\u7ec4\u6210\u5bf9\u8c61\uff0ckey\uff08\u952e\uff09\u662f\u7ecf\u8fc7 iteratee\uff08\u8fed\u4ee3\u51fd\u6570\uff09 \u6267\u884c\u5904\u7406collection\u4e2d\u6bcf\u4e2a\u5143\u7d20\u540e\u8fd4\u56de\u7684\u7ed3\u679c\uff0c\u6bcf\u4e2akey\uff08\u952e\uff09\u5bf9\u5e94\u7684\u503c\u662f iteratee\uff08\u8fed\u4ee3\u51fd\u6570\uff09\u8fd4\u56de\u8be5key\uff08\u952e\uff09\u7684\u6b21\u6570\u3002 iteratee \u8c03\u7528\u4e00\u4e2a\u53c2\u6570\uff1a(value)\u3002"),l.a.createElement(r["a"],{type:"info"},"countBy(collection, [iteratee=collectUtil.identity])"),l.a.createElement("h4",{id:"\u53c2\u6570"},l.a.createElement(c["AnchorLink"],{to:"#\u53c2\u6570","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570"),l.a.createElement("ul",null,l.a.createElement("li",null,"collection (Array|Object): \u4e00\u4e2a\u7528\u6765\u8fed\u4ee3\u7684\u96c6\u5408\u3002"),l.a.createElement("li",null,"[iteratee=collectUtil.identity] (Array|Function|Object|string): \u4e00\u4e2a\u8fed\u4ee3\u51fd\u6570\uff0c\u7528\u6765\u8f6c\u6362key\uff08\u952e\uff09\u3002")),l.a.createElement("h4",{id:"-\u4f8b\u5b50"},l.a.createElement(c["AnchorLink"],{to:"#-\u4f8b\u5b50","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\ud83c\udf30 \u4f8b\u5b50"),l.a.createElement(i["a"],{code:"import { collectUtil } from '@nicecode/tools';\n\ncollectUtil.countBy([6.1, 4.2, 6.3], Math.floor);\n// => { '4': 1, '6': 2 }\n \ncollectUtil.countBy(['one', 'two', 'three'], 'length');\n// => { '3': 2, '5': 1 }",lang:"js"}),l.a.createElement("h3",{id:"\u901a\u8fc7\u6761\u4ef6\u6392\u5e8f"},l.a.createElement(c["AnchorLink"],{to:"#\u901a\u8fc7\u6761\u4ef6\u6392\u5e8f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u901a\u8fc7\u6761\u4ef6\u6392\u5e8f"),l.a.createElement("p",null,"\u521b\u5efa\u4e00\u4e2a\u5143\u7d20\u6570\u7ec4\u3002 \u4ee5 iteratee \u5904\u7406\u7684\u7ed3\u679c\u5347\u5e8f\u6392\u5e8f\u3002 \u8fd9\u4e2a\u65b9\u6cd5\u6267\u884c\u7a33\u5b9a\u6392\u5e8f\uff0c\u4e5f\u5c31\u662f\u8bf4\u76f8\u540c\u5143\u7d20\u4f1a\u4fdd\u6301\u539f\u59cb\u6392\u5e8f\u3002 iteratees \u8c03\u75281\u4e2a\u53c2\u6570\uff1a (value)\u3002"),l.a.createElement(r["a"],{type:"info"},"sortBy(collection, [iteratees=[collectUtil.identity]])"),l.a.createElement("h4",{id:"\u53c2\u6570-1"},l.a.createElement(c["AnchorLink"],{to:"#\u53c2\u6570-1","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570"),l.a.createElement("ul",null,l.a.createElement("li",null,"collection (Array|Object): \u4e00\u4e2a\u7528\u6765\u8fed\u4ee3\u7684\u96c6\u5408\u3002"),l.a.createElement("li",null,"[iteratees=[collectUtil.identity]] (...(Array|Array[]|Function|Function[]|Object|Object[]|string|string[])): \u8fd9\u4e2a\u51fd\u6570\u51b3\u5b9a\u6392\u5e8f\u3002")),l.a.createElement("h4",{id:"-\u4f8b\u5b50-1"},l.a.createElement(c["AnchorLink"],{to:"#-\u4f8b\u5b50-1","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\ud83c\udf30 \u4f8b\u5b50"),l.a.createElement(i["a"],{code:"import { collectUtil } from '@nicecode/tools';\n\nvar users = [\n  { 'user': 'fred',   'age': 48 },\n  { 'user': 'barney', 'age': 36 },\n  { 'user': 'fred',   'age': 40 },\n  { 'user': 'barney', 'age': 34 }\n];\n \ncollectUtil.sortBy(users, function(o) { return o.user; });\n// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]\n \ncollectUtil.sortBy(users, ['user', 'age']);\n// => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]\n \ncollectUtil.sortBy(users, 'user', function(o) {\n  return Math.floor(o.age / 10);\n});\n// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]",lang:"js"}),l.a.createElement("h3",{id:"\u4ece\u96c6\u5408\u4e2d\u83b7\u5f97\u4e00\u4e2a\u968f\u673a\u5143\u7d20"},l.a.createElement(c["AnchorLink"],{to:"#\u4ece\u96c6\u5408\u4e2d\u83b7\u5f97\u4e00\u4e2a\u968f\u673a\u5143\u7d20","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ece\u96c6\u5408\u4e2d\u83b7\u5f97\u4e00\u4e2a\u968f\u673a\u5143\u7d20"),l.a.createElement(r["a"],{type:"info"},"sample(collection)"),l.a.createElement("h4",{id:"\u53c2\u6570-2"},l.a.createElement(c["AnchorLink"],{to:"#\u53c2\u6570-2","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570"),l.a.createElement("ul",null,l.a.createElement("li",null,"collection (Array|Object): \u4e00\u4e2a\u7528\u6765\u8fed\u4ee3\u7684\u96c6\u5408\u3002")),l.a.createElement("h4",{id:"-\u4f8b\u5b50-2"},l.a.createElement(c["AnchorLink"],{to:"#-\u4f8b\u5b50-2","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\ud83c\udf30 \u4f8b\u5b50"),l.a.createElement(i["a"],{code:"import { collectUtil } from '@nicecode/tools';\n\ncollectUtil.sample([1, 2, 3, 4]);\n// => 2",lang:"js"}),l.a.createElement("h3",{id:"\u4ece\u96c6\u5408\u4e2d\u83b7\u5f97n\u4e2a\u968f\u673a\u5143\u7d20"},l.a.createElement(c["AnchorLink"],{to:"#\u4ece\u96c6\u5408\u4e2d\u83b7\u5f97n\u4e2a\u968f\u673a\u5143\u7d20","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ece\u96c6\u5408\u4e2d\u83b7\u5f97n\u4e2a\u968f\u673a\u5143\u7d20"),l.a.createElement(r["a"],{type:"info"},"sampleSize(collection, [n=1])"),l.a.createElement("h4",{id:"\u53c2\u6570-3"},l.a.createElement(c["AnchorLink"],{to:"#\u53c2\u6570-3","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570"),l.a.createElement("ul",null,l.a.createElement("li",null,"collection (Array|Object): \u4e00\u4e2a\u7528\u6765\u8fed\u4ee3\u7684\u96c6\u5408\u3002"),l.a.createElement("li",null,"[n=1] (number): \u53d6\u6837\u7684\u5143\u7d20\u4e2a\u6570\u3002")),l.a.createElement("h4",{id:"-\u4f8b\u5b50-3"},l.a.createElement(c["AnchorLink"],{to:"#-\u4f8b\u5b50-3","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\ud83c\udf30 \u4f8b\u5b50"),l.a.createElement(i["a"],{code:"import { collectUtil } from '@nicecode/tools';\n\ncollectUtil.sampleSize([1, 2, 3], 2);\n// => [3, 1]\n \ncollectUtil.sampleSize([1, 2, 3], 4);\n// => [2, 3, 1]",lang:"js"}),l.a.createElement("h3",{id:"\u6253\u4e71\u96c6\u5408"},l.a.createElement(c["AnchorLink"],{to:"#\u6253\u4e71\u96c6\u5408","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6253\u4e71\u96c6\u5408"),l.a.createElement(r["a"],{type:"info"},"shuffle(collection)"),l.a.createElement("h4",{id:"\u53c2\u6570-4"},l.a.createElement(c["AnchorLink"],{to:"#\u53c2\u6570-4","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570"),l.a.createElement("ul",null,l.a.createElement("li",null,"collection (Array|Object): \u8981\u6253\u4e71\u7684\u96c6\u5408\u3002")),l.a.createElement("h4",{id:"-\u4f8b\u5b50-4"},l.a.createElement(c["AnchorLink"],{to:"#-\u4f8b\u5b50-4","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\ud83c\udf30 \u4f8b\u5b50"),l.a.createElement(i["a"],{code:"import { collectUtil } from '@nicecode/tools';\n\ncollectUtil.shuffle([1, 2, 3, 4]);\n// => [4, 1, 3, 2]",lang:"js"}),l.a.createElement("h3",{id:"\u8fd4\u56de\u96c6\u5408\u957f\u5ea6"},l.a.createElement(c["AnchorLink"],{to:"#\u8fd4\u56de\u96c6\u5408\u957f\u5ea6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u96c6\u5408\u957f\u5ea6"),l.a.createElement("p",null,"\u8fd4\u56decollection\uff08\u96c6\u5408\uff09\u7684\u957f\u5ea6\uff0c\u5982\u679c\u96c6\u5408\u662f\u7c7b\u6570\u7ec4\u6216\u5b57\u7b26\u4e32\uff0c\u8fd4\u56de\u5176 length \uff1b\u5982\u679c\u96c6\u5408\u662f\u5bf9\u8c61\uff0c\u8fd4\u56de\u5176\u53ef\u679a\u4e3e\u5c5e\u6027\u7684\u4e2a\u6570\u3002"),l.a.createElement(r["a"],{type:"info"},"size(collection)"),l.a.createElement("h4",{id:"\u53c2\u6570-5"},l.a.createElement(c["AnchorLink"],{to:"#\u53c2\u6570-5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570"),l.a.createElement("ul",null,l.a.createElement("li",null,"collection (Array|Object): \u8981\u68c0\u67e5\u7684\u96c6\u5408")),l.a.createElement("h4",{id:"-\u4f8b\u5b50-5"},l.a.createElement(c["AnchorLink"],{to:"#-\u4f8b\u5b50-5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\ud83c\udf30 \u4f8b\u5b50"),l.a.createElement(i["a"],{code:"import { collectUtil } from '@nicecode/tools';\n\ncollectUtil.size([1, 2, 3]);\n// => 3\n \ncollectUtil.size({ 'a': 1, 'b': 2 });\n// => 2\n \ncollectUtil.size('pebbles');\n// => 7",lang:"js"}),l.a.createElement("h3",{id:"\u5224\u65ad\u771f\u5047\u503c\u5e76\u8fd4\u56de\u6570\u7ec4"},l.a.createElement(c["AnchorLink"],{to:"#\u5224\u65ad\u771f\u5047\u503c\u5e76\u8fd4\u56de\u6570\u7ec4","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5224\u65ad\u771f\u5047\u503c\uff0c\u5e76\u8fd4\u56de\u6570\u7ec4"),l.a.createElement("p",null,"\u521b\u5efa\u4e00\u4e2a\u5206\u6210\u4e24\u7ec4\u7684\u5143\u7d20\u6570\u7ec4\uff0c\u7b2c\u4e00\u7ec4\u5305\u542bpredicate\uff08\u65ad\u8a00\u51fd\u6570\uff09\u8fd4\u56de\u4e3a truthy\uff08\u771f\u503c\uff09\u7684\u5143\u7d20\uff0c\u7b2c\u4e8c\u7ec4\u5305\u542bpredicate\uff08\u65ad\u8a00\u51fd\u6570\uff09\u8fd4\u56de\u4e3a falsey\uff08\u5047\u503c\uff09\u7684\u5143\u7d20\u3002predicate \u8c03\u75281\u4e2a\u53c2\u6570\uff1a(value)\u3002"),l.a.createElement(r["a"],{type:"info"},"partition(collection, [predicate=collectUtil.identity])"),l.a.createElement("h4",{id:"\u53c2\u6570-6"},l.a.createElement(c["AnchorLink"],{to:"#\u53c2\u6570-6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570"),l.a.createElement("ul",null,l.a.createElement("li",null,"collection (Array|Object): \u8981\u68c0\u67e5\u7684\u96c6\u5408"),l.a.createElement("li",null,"[predicate=collectUtil.identity] (Array|Function|Object|string): \u6bcf\u6b21\u8fed\u4ee3\u8c03\u7528\u7684\u51fd\u6570\u3002")),l.a.createElement("h4",{id:"-\u4f8b\u5b50-6"},l.a.createElement(c["AnchorLink"],{to:"#-\u4f8b\u5b50-6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\ud83c\udf30 \u4f8b\u5b50"),l.a.createElement(i["a"],{code:"import { collectUtil } from '@nicecode/tools';\n\nvar users = [\n  { 'user': 'barney',  'age': 36, 'active': false },\n  { 'user': 'fred',    'age': 40, 'active': true },\n  { 'user': 'pebbles', 'age': 1,  'active': false }\n];\n \ncollectUtil.partition(users, function(o) { return o.active; });\n// => objects for [['fred'], ['barney', 'pebbles']]\n \ncollectUtil.partition(users, { 'age': 1, 'active': false });\n// => objects for [['pebbles'], ['barney', 'fred']]\n \ncollectUtil.partition(users, ['active', false]);\n// => objects for [['barney', 'pebbles'], ['fred']]\n \ncollectUtil.partition(users, 'active');\n// => objects for [['fred'], ['barney', 'pebbles']]",lang:"js"}),l.a.createElement("h3",{id:"\u5347\u964d\u5e8f\u6392\u5217\u6570\u7ec4"},l.a.createElement(c["AnchorLink"],{to:"#\u5347\u964d\u5e8f\u6392\u5217\u6570\u7ec4","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5347\u964d\u5e8f\u6392\u5217\u6570\u7ec4"),l.a.createElement("p",null,'\u6b64\u65b9\u6cd5\u7c7b\u4f3c\u4e8e sortBy\uff0c\u9664\u4e86\u5b83\u5141\u8bb8\u6307\u5b9a iteratee\uff08\u8fed\u4ee3\u51fd\u6570\uff09\u7ed3\u679c\u5982\u4f55\u6392\u5e8f\u3002 \u5982\u679c\u6ca1\u6307\u5b9a orders\uff08\u6392\u5e8f\uff09\uff0c\u6240\u6709\u503c\u4ee5\u5347\u5e8f\u6392\u5e8f\u3002 \u5426\u5219\uff0c\u6307\u5b9a\u4e3a"desc" \u964d\u5e8f\uff0c\u6216\u8005\u6307\u5b9a\u4e3a "asc" \u5347\u5e8f\uff0c\u6392\u5e8f\u5bf9\u5e94\u503c\u3002'),l.a.createElement(r["a"],{type:"info"},"orderBy(collection, [iteratees=[collectUtil.identity]], [orders])"),l.a.createElement("h4",{id:"\u53c2\u6570-7"},l.a.createElement(c["AnchorLink"],{to:"#\u53c2\u6570-7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570"),l.a.createElement("ul",null,l.a.createElement("li",null,"collection (Array|Object): \u8981\u68c0\u67e5\u7684\u96c6\u5408"),l.a.createElement("li",null,"[iteratees=[collectUtil.identity]] (Array[]|Function[]|Object[]|string[]): \u6392\u5e8f\u7684\u8fed\u4ee3\u51fd\u6570\u3002"),l.a.createElement("li",null,"[orders] (string[]): iteratees\u8fed\u4ee3\u51fd\u6570\u7684\u6392\u5e8f\u987a\u5e8f\u3002")),l.a.createElement("h4",{id:"-\u4f8b\u5b50-7"},l.a.createElement(c["AnchorLink"],{to:"#-\u4f8b\u5b50-7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\ud83c\udf30 \u4f8b\u5b50"),l.a.createElement(i["a"],{code:"import { collectUtil } from '@nicecode/tools';\n\nvar users = [\n  { 'user': 'fred',   'age': 48 },\n  { 'user': 'barney', 'age': 34 },\n  { 'user': 'fred',   'age': 40 },\n  { 'user': 'barney', 'age': 36 }\n];\n \n// \u4ee5 `user` \u5347\u5e8f\u6392\u5e8f \u518d  `age` \u4ee5\u964d\u5e8f\u6392\u5e8f\u3002\ncollectUtil.orderBy(users, ['user', 'age'], ['asc', 'desc']);\n// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]",lang:"js"}),l.a.createElement("h3",{id:"\u904d\u5386\u96c6\u5408\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u540e\u8fd4\u56de\u7684\u7ed3\u679c"},l.a.createElement(c["AnchorLink"],{to:"#\u904d\u5386\u96c6\u5408\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u540e\u8fd4\u56de\u7684\u7ed3\u679c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u904d\u5386\u96c6\u5408\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u540e\u8fd4\u56de\u7684\u7ed3\u679c"),l.a.createElement("p",null,"\u521b\u5efa\u4e00\u4e2a\u6570\u7ec4\uff0c value\uff08\u503c\uff09 \u662f iteratee\uff08\u8fed\u4ee3\u51fd\u6570\uff09\u904d\u5386 collection\uff08\u96c6\u5408\uff09\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u540e\u8fd4\u56de\u7684\u7ed3\u679c\u3002 iteratee\uff08\u8fed\u4ee3\u51fd\u6570\uff09\u8c03\u75283\u4e2a\u53c2\u6570\uff1a(value, index|key, collection)."),l.a.createElement(r["a"],{type:"info"},"orderBy(collection, [iteratees=[collectUtil.identity]], [orders])"),l.a.createElement("h4",{id:"\u53c2\u6570-8"},l.a.createElement(c["AnchorLink"],{to:"#\u53c2\u6570-8","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570"),l.a.createElement("ul",null,l.a.createElement("li",null,"collection (Array|Object): \u8981\u68c0\u67e5\u7684\u96c6\u5408"),l.a.createElement("li",null,"[iteratees=[collectUtil.identity]] (Array[]|Function[]|Object[]|string[]): \u6392\u5e8f\u7684\u8fed\u4ee3\u51fd\u6570\u3002")),l.a.createElement("h4",{id:"-\u4f8b\u5b50-8"},l.a.createElement(c["AnchorLink"],{to:"#-\u4f8b\u5b50-8","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\ud83c\udf30 \u4f8b\u5b50"),l.a.createElement(i["a"],{code:"import { collectUtil } from '@nicecode/tools';\n\nfunction square(n) {\n  return n * n;\n}\n \ncollectUtil.map([4, 8], square);\n// => [16, 64]\n \ncollectUtil.map({ 'a': 4, 'b': 8 }, square);\n// => [16, 64] \n \nvar users = [\n  { 'user': 'barney' },\n  { 'user': 'fred' }\n];\n \ncollectUtil.map(users, 'user');\n// => ['barney', 'fred']",lang:"js"})))}));t["default"]=e=>{var t=l.a.useContext(c["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(o,{demos:n})}},x8cr:function(e,t,n){}}]);
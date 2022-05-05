---
nav:
  title: 函数库
  path: /tools
group:
  title: 字符串：stringUtil
  order: 4
---

## 字符串：stringUtil

<Alert type="info">
  <strong>字符串方法合集</strong>
</Alert>

### 字符串转驼峰

<Alert type="info">
  camelCase([string=''])
</Alert>

```js
import { stringUtil } from '@nicecode/tools';

let fen = stringUtil.camelCase('fuck_you_asshole');   // ---> fuckYouAsshole
```

### 首字母大写

<Alert type="info">
  capitalize([string=''])
</Alert>

```js
import { stringUtil } from '@nicecode/tools';

stringUtil.capitalize('FUCK');
// => 'Fuck'
```

### 检查字符串string是否以给定的target字符串结尾

<Alert type="info">
  endsWith([string=''], [target], [position=string.length])
</Alert>

```js
import { stringUtil } from '@nicecode/tools';

stringUtil.endsWith('fuck', 'c');
// => false
 
stringUtil.endsWith('fuck', 'k');
// => true
 
stringUtil.endsWith('fuck', 'c', 3);
// => true
```

### 转义string中的 "&", "<", ">", '"', "'", 和 "`" 字符为HTML实体字符

<Alert type="info">
  escape([string=''])
</Alert>

```js
import { stringUtil } from '@nicecode/tools';

stringUtil.escape('fred, barney, & pebbles');
// => 'fred, barney, &amp; pebbles'
```

### 反向转义string中的 "&", "<", ">", '"', "'", 和 "`" 字符为HTML实体字符

<Alert type="info">
  unescape([string=''])
</Alert>

```js
import { stringUtil } from '@nicecode/tools';

stringUtil.unescape('json, HM, &amp; nicecode');
// => 'json, HM, & nicecode'
```

### 转义 RegExp 字符串中特殊的字符 "^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", 和 "|" in .

<Alert type="info">
  escapeRegExp([string=''])
</Alert>

```js
import { stringUtil } from '@nicecode/tools';

stringUtil.escapeRegExp('[nicecode](https://nicecoders.github.io)');
// => '\[nicecode\]\(https://nicecoders\.github.io\)'
```

### 转换字符串string为 kebab case.

<Alert type="info">
  kebabCase([string=''])
</Alert>

```js
import { stringUtil } from '@nicecode/tools';

stringUtil.kebabCase('fuck you');
// => 'fuck-you'
 
stringUtil.kebabCase('fuckYou');
// => 'fuck-you'
 
stringUtil.kebabCase('__fuck_you__');
// => 'fuck-you'
```

### 转换字符串string以空格分开单词，并转换为小写

<Alert type="info">
  lowerCase([string=''])
</Alert>

```js
import { stringUtil } from '@nicecode/tools';

stringUtil.lowerCase('--Fuck-You--');
// => 'fuck you'
 
stringUtil.lowerCase('fuckYou');
// => 'fuck you'
 
stringUtil.lowerCase('__FUCK_YOU__');
// => 'fuck you'
```



### 转换字符串string的首字母为小写

<Alert type="info">
  lowerFirst([string=''])
</Alert>

```js
import { stringUtil } from '@nicecode/tools';

stringUtil.lowerFirst('Fuck');
// => 'fuck'
 
stringUtil.lowerFirst('FUCK');
// => 'fUCK'
```

### 转换字符串string以空格分开单词，并转换为大写

<Alert type="info">
  upperFirst([string=''])
</Alert>

```js
import { stringUtil } from '@nicecode/tools';

stringUtil.upperFirst('fuck');
// => 'Fuck'
 
stringUtil.upperFirst('FUCK');
// => 'FUCK'
 
```

### 转换字符串string的首字母为大写

<Alert type="info">
  upperCase([string=''])
</Alert>

```js
import { stringUtil } from '@nicecode/tools';

stringUtil.upperCase('--Fuck-You--');
// => 'FUCK YOU'
 
stringUtil.upperCase('fuckYou');
// => 'FUCK YOU'
 
stringUtil.upperCase('__fuck_you__');
// => 'FUCK YOU'
```

### 如果string字符串长度小于 length 则从左侧和右侧填充字符。 如果没法平均分配，则截断超出的长度

<Alert type="info">
  pad([string=''], [length=0], [chars=' '])
</Alert>

```js
import { stringUtil } from '@nicecode/tools';

stringUtil.pad('fuck', 8);
// => '  fuck  '
 
stringUtil.pad('fuck', 8, '_-');
// => '_-fuck_-'
 
stringUtil.pad('fuck', 3);
// => 'fuc'
```

### 如果string字符串长度小于 length 则在右侧填充字符。 如果超出length长度则截断超出的部分

<Alert type="info">
  padEnd([string=''], [length=0], [chars=' '])
</Alert>

```js
import { stringUtil } from '@nicecode/tools';

stringUtil.padEnd('fuck', 8);
// => 'fuck    '
 
stringUtil.padEnd('fuck', 8, '_-');
// => 'fuck_-_-'
 
stringUtil.padEnd('fuck', 3);
// => 'fuc'
```

### 如果string字符串长度小于 length 则在右侧填充字符。 如果超出length长度则截断超出的部分

<Alert type="info">
  padStart([string=''], [length=0], [chars=' '])
</Alert>

```js
import { stringUtil } from '@nicecode/tools';

stringUtil.padStart('fuck', 8);
// => '    fuck'
 
stringUtil.padStart('fuck', 8, '_-');
// => '_-_-fuck'
 
stringUtil.padStart('fuck', 3);
// => 'fuc'
```

### 重复 N 次给定字符串

<Alert type="info">
  repeat([string=''], [n=1])
</Alert>

```js
import { stringUtil } from '@nicecode/tools';

stringUtil.repeat('**', 2);
// => '****'
 
stringUtil.repeat('fuck', 2);
// => 'fuckfuck'
 
stringUtil.repeat('fuck', 0);
// => ''
```

### 替换 string 字符串中匹配的 pattern 为给定的 replacement

<Alert type="info">
  replace([string=''], pattern, replacement)
</Alert>

```js
import { stringUtil } from '@nicecode/tools';

stringUtil.replace('Hi bro', 'bro', 'asshole');
// => 'Hi asshole'
```

### 转换字符串string为 ‘_’ 连接

<Alert type="info">
  snakeCase([string=''])
</Alert>

```js
import { stringUtil } from '@nicecode/tools';

stringUtil.snakeCase('Foo Bar');
// => 'foo_bar'
 
stringUtil.snakeCase('fooBar');
// => 'foo_bar'
 
stringUtil.snakeCase('--FOO-BAR--');
// => 'foo_bar'
```

### 根据 separator 拆分字符串string

<Alert type="info">
  split([string=''], separator, [limit])
</Alert>

```js
import { stringUtil } from '@nicecode/tools';

stringUtil.split('f-u-c-k', '-', 2);
// => ['f', 'u']
```

### 转换 string 字符串为 start case.

<Alert type="info">
  startCase([string=''])
</Alert>

```js
import { stringUtil } from '@nicecode/tools';

stringUtil.startCase('--fuck-you--');
// => 'fuck you'
 
stringUtil.startCase('fuckYou');
// => 'fuck you'
 
stringUtil.startCase('__FUCK_YOU__');
// => 'FUCK YOU'
```

### 检查字符串string是否以 target 开头

<Alert type="info">
  startsWith([string=''], [target], [position=0])
</Alert>

```js
import { stringUtil } from '@nicecode/tools';

stringUtil.startsWith('fuck', 'f');
// => true
 
stringUtil.startsWith('fuck', 'k');
// => false
 
stringUtil.startsWith('fuck', 'u', 1);
// => true
```

### 创建一个预编译模板方法

创建一个预编译模板方法，可以插入数据到模板中 "interpolate" 分隔符相应的位置。 HTML会在 "escape" 分隔符中转换为相应实体。 在 "evaluate" 分隔符中允许执行JavaScript代码。 在模板中可以自由访问变量。 如果设置了选项对象，则会优先覆盖 stringUtil.templateSettings 的值。

<Alert type="info">
  template([string=''], [options={}])
</Alert>

```js
import { stringUtil } from '@nicecode/tools';

// 使用 "interpolate" 分隔符创建编译模板
var compiled = stringUtil.template('hello <%= user %>!');
compiled({ 'user': 'fred' });
// => 'hello fred!'
 
// 使用 HTML "escape" 转义数据的值
var compiled = stringUtil.template('<b><%- value %></b>');
compiled({ 'value': '<script>' });
// => '<b>&lt;script&gt;</b>'
 
// 使用 "evaluate" 分隔符执行 JavaScript 和 生成HTML代码
var compiled = stringUtil.template('<% stringUtil.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
compiled({ 'users': ['fred', 'barney'] });
// => '<li>fred</li><li>barney</li>'
 
// 在 "evaluate" 分隔符中使用内部的 `print` 函数
var compiled = stringUtil.template('<% print("hello " + user); %>!');
compiled({ 'user': 'barney' });
// => 'hello barney!'
 
// 使用 ES 分隔符代替默认的 "interpolate" 分隔符
var compiled = stringUtil.template('hello ${ user }!');
compiled({ 'user': 'pebbles' });
// => 'hello pebbles!'
 
// 使用反斜杠符号作为纯文本处理
var compiled = stringUtil.template('<%= "\\<%- value %\\>" %>');
compiled({ 'value': 'ignored' });
// => '<%- value %>'
 
// 使用 `imports` 选项导入 `jq` 作为 `jQuery` 的别名
var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
var compiled = stringUtil.template(text, { 'imports': { 'jq': jQuery } });
compiled({ 'users': ['fred', 'barney'] });
// => '<li>fred</li><li>barney</li>'
 
// 使用 `sourceURL` 选项指定模板的来源URL
var compiled = stringUtil.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
compiled(data);
// => 在开发工具的 Sources 选项卡 或 Resources 面板中找到 "greeting.jst"
 
// 使用 `variable` 选项确保在编译模板中不声明变量
var compiled = stringUtil.template('hi <%= data.user %>!', { 'variable': 'data' });
compiled.source;
// => function(data) {
//   var __t, __p = '';
//   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
//   return __p;
// }
 
// 使用 `source` 特性内联编译模板
// 便以查看行号、错误信息、堆栈
fs.writeFileSync(path.join(cwd, 'jst.js'), '\
  var JST = {\
    "main": ' + stringUtil.template(mainText).source + '\
  };\
');
```

### 从string字符串中移除前面和后面的 空格 或 指定的字符

<Alert type="info">
  trim([string=''], [chars=whitespace])
</Alert>

```js
import { stringUtil } from '@nicecode/tools';

_.trim('  Fuck-You  ');
// => 'fuck-you'
 
_.trim('-_fuckYou_-', '_-);
// => 'fuckyou'
```

### 从string字符串中移除后面的 空格 或 指定的字符。

<Alert type="info">
  trimEnd([string=''], [chars=whitespace])
</Alert>

```js
import { stringUtil } from '@nicecode/tools';

_.trim('  Fuck-You  ');
// => '  fuck-you'
 
_.trim('-_fuckYou_-', '_-);
// => '-_fuckyou'
```

### 从string字符串中移除前面的 空格 或 指定的字符。

<Alert type="info">
  trimStart([string=''], [chars=whitespace])
</Alert>

```js
import { stringUtil } from '@nicecode/tools';

_.trimStart('  Fuck-You  ');
// => 'fuck-you  '
 
_.trimStart('-_fuckYou_-', '_-);
// => 'fuckyou_-'
```

### 截断string字符串，如果字符串超出了限定的最大值。 被截断的字符串后面会以 omission 代替，omission 默认是 "..."

<Alert type="info">
  truncate([string=''], [options={}])
</Alert>

#### 参数

* [string=''] (string): 要截断的字符串。/n
* [options={}] (Object): 选项对象。
* [options.length=30] (number): 允许的最大长度。
* [options.omission='...'] (string): 超出后的代替字符。
* [options.separator] (RegExp|string): 截断点。

#### 🌰 例子

```js
import { stringUtil } from '@nicecode/tools';

_.truncate('hi-json-ho there, neighborino');
// => 'hi-json-ho there, neighbo...'
 
_.truncate('hi-json-ho there, neighborino', {
  'length': 24,
  'separator': ' '
});
// => 'hi-json-ho there,...'
 
_.truncate('hi-json-ho there, neighborino', {
  'length': 24,
  'separator': /,? +/
});
// => 'hi-json-ho there...'
 
_.truncate('hi-json-ho there, neighborino', {
  'omission': ' [...]'
});
// => 'hi-json-ho there, neig [...]'
```

### 拆分字符串string中的词为数组

<Alert type="info">
  words([string=''], [pattern])
</Alert>

```js
import { stringUtil } from '@nicecode/tools';

_.words('fred, barney, & pebbles');
// => ['fred', 'barney', 'pebbles']
 
_.words('fred, barney, & pebbles', /[^, ]+/g);
// => ['fred', 'barney', '&', 'pebbles']
```


## API

| 方法       | 说明       | 类型     | 备注 |
| ---------- | ---------- | -------- | ------ |
| camelCase     | 字符串转驼峰     | camelCase(str) | -      |
| capitalize   | 首字母大写   | capitalize(str) | -      |
| endsWith | 检查字符串string是否以给定的target字符串结尾 | endsWith([string=''], [target], [position=string.length]) | -      |
| escape     | 转义string中的字符为HTML实体字符 | escape([string='']) | -      |
| unescape     | 反向转义string中的字符为HTML实体字符 | unescape([string='']) | -      |
| escapeRegExp     | 转义 RegExp 字符串中特殊的字符 | escapeRegExp([string='']) | -      |
| kebabCase     | 转换字符串string为 kebab case | kebabCase([string='']) | -      |
| lowerCase     | 转换为小写 | lowerCase([string='']) | -      |
| lowerFirst     | 转换首字母为小写 | lowerFirst([string='']) | -      |
| upperCase     | 转换为大写 | upperCase([string='']) | -      |
| upperFirst     | 转换字符串string的首字母为大写 | upperFirst([string='']) | -      |
| pad     | 从左侧和右侧填充字符 | pad([string=''], [length=0], [chars=' ']) | -      |
| padEnd     | 在右侧填充字符 | padEnd([string=''], [length=0], [chars=' ']) | -      |
| padStart     | 在左侧填充字符 | padStart([string=''], [length=0], [chars=' ']) | -      |
| repeat     | 重复 n 次给定字符串 | repeat([string=''], [n=1]) | -      |
| replace     | 替换string字符串 | replace([string=''], pattern, replacement) | pattern: RegExp|string     |
| snakeCase     | 转换字符串string | snakeCase([string='']) | -  |
| split     | 转换字符串string | split([string=''], separator, [limit]) | -     |
| startCase     | 转换 string 字符串为 start case. | startCase([string='']) | -     |
| startsWith     | 检查字符串string是否以 target 开头 | startsWith([string=''], [target], [position=0]) | -     |
| template     | 创建一个预编译模板方法 | template([string=''], [options={}]) | -     |
| trim     | 从string字符串中移除前面和后面的 空格 或 指定的字符 | trim([string=''], [chars=whitespace]) | -     |
| trimEnd     | 从string字符串中移除后面的 空格 或 指定的字符 | trimEnd([string=''], [chars=whitespace]) | -     |
| trimStart     | 从string字符串中移除前面的 空格 或 指定的字符 | trimStart([string=''], [chars=whitespace]) | -     |
| truncate     | 截断string字符串 | truncate([string=''], [options={}]) | -     |
| words     | 拆分字符串string中的词为数组 | words([string=''], [pattern]) | -     |


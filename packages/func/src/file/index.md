---
nav:
  title: func
  order: 2
title: 文件处理
---

## url转Img

```js
import { urlToImg } from '@nicecode/func'

const img = urlToImg('http://example.com/images.png')
```

## 获取图片base64

通过 url 获取图片的 base64

```js
import { getBase64ByUrl } from '@nicecode/func'

const base64 = getBase64ByUrl('http://example.com/images.png')
```

## url转base64(跨域加强版)

```js
import React from 'react'
import { urlToBase64V2 } from '@nicecode/func'

const base64 = urlToBase64V2('http://example.com/img.png')
```

## 文件转 base64

```js
import { fileToBase64 } from '@nicecode/func'

const base64 = fileToBase64(file)
```

## 获取文件后缀

```js
import { getFileSuffix } from '@nicecode/func'

const fileType = getFileSuffix('http://example.com/img.png')
```

## 图片打包压缩下载

```js
import { downloadPackageImages } from '@nicecode/func'

const zip = downloadPackageImages([file1, file2, file3])
```

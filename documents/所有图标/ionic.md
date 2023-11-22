---
order: 1
---

# icons

Icons 组件库

## 安装

```bash
yarn add @fexd/icons
# 或者
npm install @fexd/icons --save
```

## 图标展示

```jsx
import React from 'react'
import * as Icons from '@fexd/icons'

import IconsPreview from '../helpers/IconsPreview'

export default () => <IconsPreview icons={Icons} />
```

## 按需加载

配合 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 实现按需加载

```js
// babel.config.js
module.exports = {
  plugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@fexd/icons',
        camel2DashComponentName: false,
      },
      '@fexd/icons',
    ],
  ],
}
```

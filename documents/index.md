---
sidemenu: false
---

# Icons 组件库

## 安装

```bash
yarn add @fexd/icons
# 或者
npm install @fexd/icons --save
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

## 图标展示

```jsx
import React from 'react'
import * as Icons from '@fexd/icons'

import IconsPreview from './helpers/IconsPreview'

export default () => <IconsPreview icons={Icons} />
```

```jsx
/**
 * style: { display: 'none' }
 */
import React from 'react'
import './layout.less'
export default () => null
```

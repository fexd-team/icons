# icons-antd

Icons 组件库

## 安装

```bash
yarn add @fexd/icons-antd
# 或者
npm install @fexd/icons-antd --save
```

## 图标展示

```jsx
import React from 'react'
import * as Icons from '@fexd/icons-antd'

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
        libraryName: '@fexd/icons-antd',
        camel2DashComponentName: false,
      },
      '@fexd/icons-antd',
    ],
  ],
}
```

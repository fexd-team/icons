# icons-mono

Icons 组件库

## 安装

```bash
yarn add @fexd/icons-mono
# 或者
npm install @fexd/icons-mono --save
```

## 图标展示

```jsx
import React from 'react'
import * as Icons from '@fexd/icons-mono'

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
        libraryName: '@fexd/icons-mono',
        camel2DashComponentName: false,
      },
      '@fexd/icons-mono',
    ],
  ],
}
```

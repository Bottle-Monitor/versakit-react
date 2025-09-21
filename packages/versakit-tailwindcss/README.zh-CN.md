# @versakit/tailwindcss

为 Versakit 项目提供 Tailwind CSS 配置和工具。

## 安装

```bash
pnpm add @versakit/tailwindcss
```

## 使用方法

### 使用 PostCSS 配置

您可以在项目中引用 PostCSS 配置：

```javascript
// postcss.config.mjs
import { postcssConfigObject } from '@versakit/tailwindcss';

export default postcssConfigObject;
```

或直接使用文件路径：

```javascript
// 在构建工具配置中
const { postcssConfig } = require('@versakit/tailwindcss');
// postcssConfig 包含 postcss.config.mjs 文件的绝对路径
```

### 使用全局 CSS

在应用程序中导入全局 CSS：

```javascript
// 在主应用文件或 CSS 入口点中
import '@versakit/tailwindcss/globals.css';
```

或通过编程方式获取文件路径：

```javascript
const { globalsCss } = require('@versakit/tailwindcss');
// globalsCss 包含 globals.css 文件的绝对路径
```

## 包含的文件

- `postcss.config.mjs` - 包含 Tailwind CSS 插件的 PostCSS 配置
- `globals.css` - 包含 Tailwind 导入的全局 CSS 文件
- `index.js` - 主入口点，包含工具函数

## API

### `postcssConfigObject`

可以直接在 PostCSS 配置中使用的 PostCSS 配置对象。

### `postcssConfig`

`postcss.config.mjs` 文件的绝对路径。

### `globalsCss`

`globals.css` 文件的绝对路径。

---
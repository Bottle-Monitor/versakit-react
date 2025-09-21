# @versakit/tailwindcss

Tailwind CSS configuration and utilities for Versakit projects.

## Installation

```bash
pnpm add @versakit/tailwindcss
```

## Usage

### Using the PostCSS Configuration

You can reference the PostCSS configuration in your project:

```javascript
// postcss.config.mjs
import { postcssConfigObject } from '@versakit/tailwindcss';

export default postcssConfigObject;
```

Or use the file path directly:

```javascript
// In your build tool configuration
const { postcssConfig } = require('@versakit/tailwindcss');
// postcssConfig contains the absolute path to the postcss.config.mjs file
```

### Using the Global CSS

Import the global CSS in your application:

```javascript
// In your main app file or CSS entry point
import '@versakit/tailwindcss/globals.css';
```

Or get the file path programmatically:

```javascript
const { globalsCss } = require('@versakit/tailwindcss');
// globalsCss contains the absolute path to the globals.css file
```

## Files Included

- `postcss.config.mjs` - PostCSS configuration with Tailwind CSS plugin
- `globals.css` - Global CSS file with Tailwind imports
- `index.js` - Main entry point with utility functions

## API

### `postcssConfigObject`

The PostCSS configuration object that can be used directly in your PostCSS configuration.

### `postcssConfig`

Absolute path to the `postcss.config.mjs` file.

### `globalsCss`

Absolute path to the `globals.css` file.

---

## 中文文档

查看中文文档：[README.zh-CN.md](./README.zh-CN.md)
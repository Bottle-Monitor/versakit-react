# Button

一个简洁的按钮组件，遵循 shadcn/ui 设计理念，采用黑白配色方案。

## 特性

- ✨ 4 种变体：default、secondary、outline、ghost
- 📏 4 种尺寸：sm、default、lg、icon
- 🔄 内置加载状态
- 🎯 支持图标
- ♿ 完整的无障碍支持
- 🎨 基于 Tailwind CSS

## 使用方法

```tsx
import { Button } from "@versakit/components"

// 基础用法
<Button>Click me</Button>

// 不同变体
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// 不同尺寸
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon">🚀</Button>

// 加载状态
<Button loading>Loading...</Button>

// 带图标
import { Heart } from "lucide-react"
<Button>
  <Heart />
  Like
</Button>
```

## API

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `variant` | `"primary" \| "secondary" \| "outline" \| "ghost"` | `"primary"` | 按钮变体 |
| `size` | `"sm" \| "default" \| "lg" \| "icon"` | `"default"` | 按钮尺寸 |
| `loading` | `boolean` | `false` | 是否显示加载状态 |
| `asChild` | `boolean` | `false` | 是否作为子组件渲染 |
| `disabled` | `boolean` | `false` | 是否禁用 |

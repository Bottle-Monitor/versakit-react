# Popover

一个灵活的弹出层组件，用于在触发元素附近显示浮动内容，基于 Radix UI 构建。

## 特性

- ✨ 基于 Radix UI，完整的无障碍支持
- 🎯 灵活的定位选项（上、下、左、右）
- 🎨 基于 Tailwind CSS，支持自定义样式
- 🎭 流畅的进入/退出动画
- 🔧 支持受控和非受控模式
- 📍 可选箭头指示器
- 🧩 可组合的子组件
- ⌨️ 完整的键盘导航支持
- 🎪 支持 Portal 渲染

## 使用方法

```tsx
import { Popover, PopoverContent, PopoverTrigger } from "@versakit/components"
import { Button } from "@versakit/components"

// 基础用法
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">打开 Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <h4 className="font-medium">Popover 标题</h4>
      <p className="text-sm text-gray-500">这是 Popover 的内容区域。</p>
    </div>
  </PopoverContent>
</Popover>

// 带箭头
<Popover>
  <PopoverTrigger asChild>
    <Button>带箭头</Button>
  </PopoverTrigger>
  <PopoverContent showArrow>
    <p className="text-sm">这个 Popover 有箭头指示器</p>
  </PopoverContent>
</Popover>

// 带关闭按钮
import { PopoverClose } from "@versakit/components"

<Popover>
  <PopoverTrigger asChild>
    <Button>可关闭</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <h4 className="font-medium">标题</h4>
      <p className="text-sm">内容文本</p>
    </div>
    <PopoverClose />
  </PopoverContent>
</Popover>

// 自定义关闭按钮
<Popover>
  <PopoverTrigger asChild>
    <Button>自定义关闭</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p className="text-sm">内容</p>
    <PopoverClose className="mt-2">
      <Button size="sm">关闭</Button>
    </PopoverClose>
  </PopoverContent>
</Popover>

// 不同位置
<Popover>
  <PopoverTrigger asChild>
    <Button>顶部</Button>
  </PopoverTrigger>
  <PopoverContent side="top">
    <p className="text-sm">显示在顶部</p>
  </PopoverContent>
</Popover>

<Popover>
  <PopoverTrigger asChild>
    <Button>右侧</Button>
  </PopoverTrigger>
  <PopoverContent side="right">
    <p className="text-sm">显示在右侧</p>
  </PopoverContent>
</Popover>

// 不同对齐方式
<Popover>
  <PopoverTrigger asChild>
    <Button>开始对齐</Button>
  </PopoverTrigger>
  <PopoverContent align="start">
    <p className="text-sm">对齐到开始位置</p>
  </PopoverContent>
</Popover>

// 受控模式
import { useState } from "react"

function ControlledPopover() {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button>受控 Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p className="text-sm">当前状态: {open ? "打开" : "关闭"}</p>
        <Button onClick={() => setOpen(false)}>关闭</Button>
      </PopoverContent>
    </Popover>
  )
}

// 用户资料示例
import { User } from "lucide-react"

<Popover>
  <PopoverTrigger asChild>
    <Button variant="ghost" size="icon">
      <User className="h-5 w-5" />
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="flex gap-4">
      <div className="rounded-full bg-gray-200 h-12 w-12 flex items-center justify-center">
        <User className="h-6 w-6 text-gray-600" />
      </div>
      <div className="space-y-1 flex-1">
        <h4 className="font-semibold text-sm">张三</h4>
        <p className="text-sm text-gray-500">zhangsan@example.com</p>
        <div className="flex gap-2 pt-2">
          <Button size="sm" variant="outline" className="flex-1">
            查看资料
          </Button>
          <Button size="sm" variant="outline" className="flex-1">
            退出登录
          </Button>
        </div>
      </div>
    </div>
  </PopoverContent>
</Popover>
```

## API

### Popover

根组件，用于控制 Popover 的状态。

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `open` | `boolean` | - | 受控的打开状态 |
| `defaultOpen` | `boolean` | `false` | 非受控模式下的默认打开状态 |
| `onOpenChange` | `(open: boolean) => void` | - | 打开状态改变时的回调 |
| `modal` | `boolean` | `false` | 是否以模态方式显示 |

### PopoverTrigger

触发 Popover 显示的元素。

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `asChild` | `boolean` | `false` | 是否将属性传递给子元素 |

继承 `React.ButtonHTMLAttributes<HTMLButtonElement>` 的所有属性。

### PopoverContent

Popover 的内容容器。

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `showArrow` | `boolean` | `false` | 是否显示箭头指示器 |
| `side` | `"top" \| "right" \| "bottom" \| "left"` | `"bottom"` | Popover 显示的位置 |
| `align` | `"start" \| "center" \| "end"` | `"center"` | Popover 的对齐方式 |
| `sideOffset` | `number` | `4` | 距离触发器的偏移量（像素） |
| `alignOffset` | `number` | `0` | 对齐方向的偏移量（像素） |
| `avoidCollisions` | `boolean` | `true` | 是否自动避免与边界碰撞 |
| `className` | `string` | - | 自定义类名 |

继承 Radix UI `PopoverContent` 的所有属性。

### PopoverClose

关闭按钮组件，点击后关闭 Popover。

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `className` | `string` | - | 自定义类名 |
| `children` | `ReactNode` | `<X />` | 按钮内容，默认为关闭图标 |

继承 `React.ButtonHTMLAttributes<HTMLButtonElement>` 的所有属性。

### PopoverArrow

箭头指示器组件（通常通过 `showArrow` prop 自动添加）。

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `className` | `string` | - | 自定义类名 |

### PopoverAnchor

用于自定义 Popover 定位锚点的组件。

### PopoverPortal

用于将 Popover 内容渲染到 DOM 树的其他位置。

## 无障碍支持

- 自动管理焦点
- 支持 `Escape` 键关闭
- 完整的 ARIA 属性
- 键盘导航支持
- 屏幕阅读器友好

## 最佳实践

1. **使用 `asChild`**：当 Trigger 是自定义组件时，使用 `asChild` 避免额外的 DOM 嵌套
2. **合理使用 `modal`**：对于重要操作使用 `modal={true}`，确保用户专注
3. **避免嵌套**：不建议在 Popover 内嵌套另一个 Popover
4. **移动端考虑**：在移动设备上考虑使用 Sheet 或 Dialog 替代
5. **内容简洁**：保持 Popover 内容简洁，复杂内容考虑使用 Dialog

## 常见用例

- 用户资料卡片
- 设置菜单
- 日期选择器
- 颜色选择器
- 快捷操作面板
- 帮助提示
- 表单字段说明


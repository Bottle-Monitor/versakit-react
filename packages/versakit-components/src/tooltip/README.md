# Tooltip

一个简洁优雅的提示框组件，基于 Radix UI Tooltip 构建，提供丰富的样式变体和灵活的配置选项。

## 特性

- 🎨 多种预设样式变体（default, light, primary, success, warning, danger）
- ⚡ 基于 Radix UI 的无障碍访问支持
- 🎯 支持四个方向的定位（top, right, bottom, left）
- 🎭 流畅的动画效果
- 🔧 可自定义延迟时间
- 📦 支持箭头显示/隐藏
- 🎪 完全的 TypeScript 支持

## 安装

```bash
pnpm add @versakit/components
```

## 使用

### 基础用法

```tsx
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@versakit/components"

function App() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>悬停查看提示</TooltipTrigger>
        <TooltipContent>
          这是一个提示信息
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

### 样式变体

```tsx
<TooltipProvider>
  {/* 默认样式 */}
  <Tooltip>
    <TooltipTrigger>默认</TooltipTrigger>
    <TooltipContent variant="default">默认提示</TooltipContent>
  </Tooltip>

  {/* 浅色样式 */}
  <Tooltip>
    <TooltipTrigger>浅色</TooltipTrigger>
    <TooltipContent variant="light">浅色提示</TooltipContent>
  </Tooltip>

  {/* 主色调 */}
  <Tooltip>
    <TooltipTrigger>主色</TooltipTrigger>
    <TooltipContent variant="primary">主色提示</TooltipContent>
  </Tooltip>

  {/* 成功 */}
  <Tooltip>
    <TooltipTrigger>成功</TooltipTrigger>
    <TooltipContent variant="success">成功提示</TooltipContent>
  </Tooltip>

  {/* 警告 */}
  <Tooltip>
    <TooltipTrigger>警告</TooltipTrigger>
    <TooltipContent variant="warning">警告提示</TooltipContent>
  </Tooltip>

  {/* 危险 */}
  <Tooltip>
    <TooltipTrigger>危险</TooltipTrigger>
    <TooltipContent variant="danger">危险提示</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### 定位方向

```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>上方</TooltipTrigger>
    <TooltipContent side="top">上方提示</TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger>右侧</TooltipTrigger>
    <TooltipContent side="right">右侧提示</TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger>下方</TooltipTrigger>
    <TooltipContent side="bottom">下方提示</TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger>左侧</TooltipTrigger>
    <TooltipContent side="left">左侧提示</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### 隐藏箭头

```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>无箭头</TooltipTrigger>
    <TooltipContent showArrow={false}>
      这个提示框没有箭头
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### 自定义延迟时间

```tsx
<TooltipProvider delayDuration={300}>
  <Tooltip>
    <TooltipTrigger>自定义延迟</TooltipTrigger>
    <TooltipContent>
      延迟 300ms 显示
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### 受控模式

```tsx
function ControlledTooltip() {
  const [open, setOpen] = useState(false)

  return (
    <TooltipProvider>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger>受控提示</TooltipTrigger>
        <TooltipContent>
          受控的提示框
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

### 复杂内容

```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>查看详情</TooltipTrigger>
    <TooltipContent className="max-w-xs">
      <div className="space-y-2">
        <p className="font-semibold">提示标题</p>
        <p className="text-xs">这是一段详细的提示信息，可以包含多行文本和其他元素。</p>
      </div>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### 与按钮配合使用

```tsx
import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@versakit/components"

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost" size="icon">
        <Info className="h-4 w-4" />
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      点击查看更多信息
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

## API

### TooltipProvider

全局的 Tooltip 配置提供者，必须包裹在最外层。

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| delayDuration | number | 700 | 悬停后显示提示的延迟时间（毫秒） |
| skipDelayDuration | number | 300 | 快速切换提示时跳过延迟的时间（毫秒） |
| disableHoverableContent | boolean | false | 禁用鼠标悬停在提示内容上 |

### Tooltip

Tooltip 根组件。

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| open | boolean | - | 受控的开启状态 |
| defaultOpen | boolean | false | 默认的开启状态 |
| onOpenChange | (open: boolean) => void | - | 开启状态改变时的回调 |
| delayDuration | number | - | 覆盖 Provider 的延迟时间 |

### TooltipTrigger

触发 Tooltip 的元素。

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| asChild | boolean | false | 将触发器作为子元素的容器 |

### TooltipContent

Tooltip 的内容区域。

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| variant | 'default' \| 'light' \| 'primary' \| 'success' \| 'warning' \| 'danger' | 'default' | 样式变体 |
| side | 'top' \| 'right' \| 'bottom' \| 'left' | 'top' | 提示框的位置 |
| sideOffset | number | 4 | 与触发器的距离 |
| align | 'start' \| 'center' \| 'end' | 'center' | 对齐方式 |
| showArrow | boolean | true | 是否显示箭头 |

## 最佳实践

1. **提供者包裹**：始终使用 `TooltipProvider` 包裹所有的 Tooltip 组件
2. **简洁内容**：保持提示内容简短明了，避免过长的文本
3. **合适的延迟**：根据场景调整延迟时间，提升用户体验
4. **无障碍访问**：确保触发元素有适当的语义化标签
5. **移动端适配**：在移动端考虑使用其他交互方式（如点击）

## 样式定制

### 使用 className

```tsx
<TooltipContent className="bg-purple-600 text-white">
  自定义样式的提示
</TooltipContent>
```

### 使用 Tailwind Variants

可以通过修改 `tooltip.variants.ts` 来添加自定义变体：

```typescript
export const tooltipContentVariants = tv({
  base: [...],
  variants: {
    variant: {
      custom: "bg-purple-600 text-white",
    },
  },
})
```

## 注意事项

- Tooltip 需要包裹在 `TooltipProvider` 中才能正常工作
- 触发器默认是内联元素，如需块级元素可使用 `asChild` 属性
- 在移动设备上，Tooltip 的交互可能不如桌面设备流畅
- 避免在 Tooltip 内放置交互元素（如按钮、链接），这会影响可访问性

## 示例场景

### 图标按钮提示

```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <button className="p-2 hover:bg-gray-100 rounded">
        <Settings className="h-5 w-5" />
      </button>
    </TooltipTrigger>
    <TooltipContent>设置</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### 功能说明

```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <span className="cursor-help border-b border-dashed">
        API 密钥
      </span>
    </TooltipTrigger>
    <TooltipContent>
      用于验证您的应用程序身份的唯一标识符
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### 状态提示

```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 bg-green-500 rounded-full" />
        <span>在线</span>
      </div>
    </TooltipTrigger>
    <TooltipContent variant="success">
      系统运行正常
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

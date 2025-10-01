# Alert

一个灵活的警告提示组件，用于向用户显示重要信息，遵循现代设计理念。

## 特性

- ✨ 5 种变体：default、info、success、warning、destructive
- 🎨 基于 Tailwind CSS
- 🧩 可组合的子组件（Title、Description）
- 🎯 支持图标
- ♿ 完整的无障碍支持（role="alert"）
- 🎨 精美的配色方案

## 使用方法

```tsx
import { Alert, AlertDescription, AlertTitle } from "@versakit/components"

// 基础用法
<Alert>
  <AlertTitle>提示</AlertTitle>
  <AlertDescription>这是一条提示信息</AlertDescription>
</Alert>

// 不同变体
<Alert variant="info">
  <AlertTitle>信息</AlertTitle>
  <AlertDescription>这是一条信息提示</AlertDescription>
</Alert>

<Alert variant="success">
  <AlertTitle>成功</AlertTitle>
  <AlertDescription>操作已成功完成</AlertDescription>
</Alert>

<Alert variant="warning">
  <AlertTitle>警告</AlertTitle>
  <AlertDescription>请注意这个警告信息</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>错误</AlertTitle>
  <AlertDescription>发生了一个错误</AlertDescription>
</Alert>

// 带图标
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from "lucide-react"

<Alert variant="info">
  <Info className="h-4 w-4" />
  <AlertTitle>提示</AlertTitle>
  <AlertDescription>带图标的提示信息</AlertDescription>
</Alert>

<Alert variant="success">
  <CheckCircle2 className="h-4 w-4" />
  <AlertTitle>成功</AlertTitle>
  <AlertDescription>操作成功完成</AlertDescription>
</Alert>

<Alert variant="warning">
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>警告</AlertTitle>
  <AlertDescription>需要注意的警告</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>错误</AlertTitle>
  <AlertDescription>出现了错误</AlertDescription>
</Alert>

// 仅显示描述
<Alert variant="info">
  <AlertDescription>简单的提示信息</AlertDescription>
</Alert>
```

## API

### Alert

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `variant` | `"default" \| "info" \| "success" \| "warning" \| "destructive"` | `"default"` | 警告框变体 |
| `className` | `string` | - | 自定义类名 |

继承 `React.HTMLAttributes<HTMLDivElement>` 的所有属性。

### AlertTitle

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `className` | `string` | - | 自定义类名 |

继承 `React.HTMLAttributes<HTMLHeadingElement>` 的所有属性。

### AlertDescription

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `className` | `string` | - | 自定义类名 |

继承 `React.HTMLAttributes<HTMLParagraphElement>` 的所有属性。

## 变体说明

- **default**: 默认样式，适用于一般信息
- **info**: 蓝色主题，用于提示性信息
- **success**: 绿色主题，用于成功提示
- **warning**: 黄色主题，用于警告信息
- **destructive**: 红色主题，用于错误或危险操作提示

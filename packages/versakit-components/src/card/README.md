# Card

一个灵活的卡片容器组件，用于组织和展示相关内容，遵循现代设计理念。

## 特性

- ✨ 4 种变体：default、shadow、outline、ghost
- 📏 4 种内边距选项：none、sm、default、lg
- 🧩 可组合的子组件（Header、Title、Description、Content、Footer）
- 🎨 基于 Tailwind CSS
- ♿ 完整的语义化 HTML
- 🎯 灵活的布局和样式自定义
- 🔧 支持独立控制每个部分的内边距

## 使用方法

```tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@versakit/components"
import { Button } from "@versakit/components"

// 基础用法
<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>卡片标题</CardTitle>
    <CardDescription>卡片描述文本</CardDescription>
  </CardHeader>
  <CardContent>
    <p>这是卡片的主要内容区域，可以放置任何内容。</p>
  </CardContent>
  <CardFooter>
    <Button>操作按钮</Button>
  </CardFooter>
</Card>

// 不同变体
<Card variant="default" className="w-[350px]">
  <CardHeader>
    <CardTitle>默认样式</CardTitle>
    <CardDescription>带有简洁边框的卡片</CardDescription>
  </CardHeader>
  <CardContent>
    <p>默认变体适用于大多数场景。</p>
  </CardContent>
</Card>

<Card variant="shadow" className="w-[350px]">
  <CardHeader>
    <CardTitle>阴影样式</CardTitle>
    <CardDescription>带有阴影效果的卡片</CardDescription>
  </CardHeader>
  <CardContent>
    <p>阴影变体能创建更强的视觉层次。</p>
  </CardContent>
</Card>

<Card variant="outline" className="w-[350px]">
  <CardHeader>
    <CardTitle>轮廓样式</CardTitle>
    <CardDescription>带有明显边框的卡片</CardDescription>
  </CardHeader>
  <CardContent>
    <p>轮廓变体使用更明显的边框。</p>
  </CardContent>
</Card>

<Card variant="ghost" className="w-[350px]">
  <CardHeader>
    <CardTitle>幽灵样式</CardTitle>
    <CardDescription>无边框的卡片</CardDescription>
  </CardHeader>
  <CardContent>
    <p>幽灵变体适合需要更轻量视觉效果的场景。</p>
  </CardContent>
</Card>

// 不同内边距
<Card padding="none" className="w-[350px]">
  <CardHeader padding="default">
    <CardTitle>自定义内边距</CardTitle>
    <CardDescription>可以单独控制每个部分的内边距</CardDescription>
  </CardHeader>
  <CardContent padding="default">
    <p>卡片本身没有内边距，但子组件有。</p>
  </CardContent>
</Card>

<Card padding="sm" className="w-[350px]">
  <CardContent>
    <p>小内边距的卡片，适合紧凑布局。</p>
  </CardContent>
</Card>

<Card padding="lg" className="w-[350px]">
  <CardContent>
    <p>大内边距的卡片，适合宽松布局。</p>
  </CardContent>
</Card>

// 只使用部分子组件
<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>只有标题和内容</CardTitle>
  </CardHeader>
  <CardContent>
    <p>不是所有子组件都必须使用。</p>
  </CardContent>
</Card>

<Card className="w-[350px]">
  <CardContent>
    <p>也可以只使用内容区域。</p>
  </CardContent>
</Card>

// 用户资料卡片示例
import { User, Mail, Phone } from "lucide-react"

<Card className="w-[350px]">
  <CardHeader>
    <div className="flex items-center gap-4">
      <div className="rounded-full bg-gray-200 h-12 w-12 flex items-center justify-center">
        <User className="h-6 w-6 text-gray-600" />
      </div>
      <div>
        <CardTitle>张三</CardTitle>
        <CardDescription>高级开发工程师</CardDescription>
      </div>
    </div>
  </CardHeader>
  <CardContent className="space-y-2">
    <div className="flex items-center gap-2">
      <Mail className="h-4 w-4 text-gray-500" />
      <span className="text-sm">zhangsan@example.com</span>
    </div>
    <div className="flex items-center gap-2">
      <Phone className="h-4 w-4 text-gray-500" />
      <span className="text-sm">+86 138 0000 0000</span>
    </div>
  </CardContent>
  <CardFooter className="gap-2">
    <Button variant="outline" className="flex-1">联系</Button>
    <Button variant="primary" className="flex-1">查看详情</Button>
  </CardFooter>
</Card>

// 产品卡片示例
<Card variant="shadow" className="w-[300px]">
  <div className="aspect-video bg-gray-100 rounded-t-lg" />
  <CardHeader>
    <CardTitle>产品名称</CardTitle>
    <CardDescription>¥299.00</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-gray-600">
      产品描述文本，简要介绍产品的主要特点和优势。
    </p>
  </CardContent>
  <CardFooter>
    <Button className="w-full">加入购物车</Button>
  </CardFooter>
</Card>

// 统计卡片示例
<Card variant="outline" className="w-[200px]">
  <CardHeader>
    <CardDescription>总销售额</CardDescription>
    <CardTitle className="text-3xl">¥45,231</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-xs text-green-600">+20.1% 相比上月</p>
  </CardContent>
</Card>

// 表单卡片示例
<Card className="w-[400px]">
  <CardHeader>
    <CardTitle>创建账户</CardTitle>
    <CardDescription>填写以下信息以创建新账户</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <label className="text-sm font-medium">用户名</label>
      <input className="w-full px-3 py-2 border rounded-md" placeholder="请输入用户名" />
    </div>
    <div className="space-y-2">
      <label className="text-sm font-medium">邮箱</label>
      <input className="w-full px-3 py-2 border rounded-md" placeholder="请输入邮箱" />
    </div>
    <div className="space-y-2">
      <label className="text-sm font-medium">密码</label>
      <input type="password" className="w-full px-3 py-2 border rounded-md" placeholder="请输入密码" />
    </div>
  </CardContent>
  <CardFooter className="gap-2">
    <Button variant="outline" className="flex-1">取消</Button>
    <Button className="flex-1">创建账户</Button>
  </CardFooter>
</Card>
```

## API

### Card

卡片的主容器组件。

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `variant` | `"default" \| "shadow" \| "outline" \| "ghost"` | `"default"` | 卡片的视觉样式变体 |
| `padding` | `"none" \| "sm" \| "default" \| "lg"` | `"default"` | 卡片的内边距大小 |
| `className` | `string` | - | 自定义类名 |

继承 `React.HTMLAttributes<HTMLDivElement>` 的所有属性。

### CardHeader

卡片的头部区域，通常包含标题和描述。

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `padding` | `"none" \| "default"` | `"default"` | 头部区域的内边距 |
| `className` | `string` | - | 自定义类名 |

继承 `React.HTMLAttributes<HTMLDivElement>` 的所有属性。

### CardTitle

卡片的标题组件。

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `className` | `string` | - | 自定义类名 |

继承 `React.HTMLAttributes<HTMLHeadingElement>` 的所有属性，渲染为 `<h3>` 元素。

### CardDescription

卡片的描述文本组件。

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `className` | `string` | - | 自定义类名 |

继承 `React.HTMLAttributes<HTMLParagraphElement>` 的所有属性，渲染为 `<p>` 元素。

### CardContent

卡片的主内容区域。

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `padding` | `"none" \| "default"` | `"default"` | 内容区域的内边距 |
| `className` | `string` | - | 自定义类名 |

继承 `React.HTMLAttributes<HTMLDivElement>` 的所有属性。

### CardFooter

卡片的底部区域，通常包含操作按钮。

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `padding` | `"none" \| "default"` | `"default"` | 底部区域的内边距 |
| `className` | `string` | - | 自定义类名 |

继承 `React.HTMLAttributes<HTMLDivElement>` 的所有属性，默认使用 flex 布局。

## 变体说明

- **default**: 默认样式，带有简洁的边框，适用于大多数场景
- **shadow**: 带有阴影效果，创建更强的视觉层次和深度感
- **outline**: 使用更明显的边框，适合需要突出边界的场景
- **ghost**: 无边框和阴影，适合需要轻量视觉效果的场景

## 内边距说明

### Card 内边距
- **none**: 无内边距，完全由子组件控制
- **sm**: 小内边距（16px / 1rem），适合紧凑布局
- **default**: 默认内边距（24px / 1.5rem），适合大多数场景
- **lg**: 大内边距（32px / 2rem），适合宽松布局

### 子组件内边距
CardHeader、CardContent、CardFooter 支持独立的内边距控制：
- **none**: 无内边距
- **default**: 默认内边距

## 组合模式

Card 组件采用组合模式设计，你可以：

1. **使用全部子组件**：创建完整的卡片结构
2. **部分使用**：只使用需要的子组件
3. **自由组合**：在子组件中放置任何内容
4. **嵌套布局**：在内容区域创建复杂布局

## 最佳实践

1. **保持简洁**：卡片内容应该简洁明了，避免信息过载
2. **一致的宽度**：为卡片设置固定宽度（如 `w-[350px]`），保持视觉一致性
3. **合理使用变体**：根据重要性选择合适的变体
4. **语义化结构**：使用完整的子组件结构，提高可访问性
5. **响应式设计**：在移动端考虑使用 `w-full` 等响应式类名
6. **内边距控制**：当需要自定义布局时，使用 `padding="none"` 然后单独控制子组件

## 常见用例

- 产品展示卡片
- 用户资料卡片
- 文章预览卡片
- 统计数据展示
- 表单容器
- 设置面板
- 仪表板小部件
- 功能特性展示
- 价格方案展示
- 团队成员卡片


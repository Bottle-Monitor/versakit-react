# Drawer

一个灵活的抽屉组件，用于从屏幕边缘滑入展示内容，基于 Radix UI Dialog primitive 构建。

## 特性

- ✨ 4 个方向：left、right、top、bottom
- 🎭 流畅的动画效果
- 🎨 基于 Tailwind CSS
- ♿ 完整的可访问性支持（基于 Radix UI）
- 🔧 可选择是否显示遮罩层
- 🧩 可组合的子组件（Header、Title、Description、Content、Footer、Close）
- ⌨️ 支持键盘操作（ESC 关闭）
- 🎯 灵活的布局和样式自定义

## 使用方法

```tsx
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@versakit/components"
import { Button } from "@versakit/components"

// 基础用法（右侧抽屉）
<Drawer>
  <DrawerTrigger asChild>
    <Button>打开抽屉</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>抽屉标题</DrawerTitle>
      <DrawerDescription>这是一段描述文本</DrawerDescription>
    </DrawerHeader>
    <div className="p-6">
      <p>这是抽屉的主要内容区域。</p>
    </div>
    <DrawerFooter>
      <Button>确认</Button>
      <DrawerClose asChild>
        <Button variant="outline">取消</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

// 左侧抽屉
<Drawer>
  <DrawerTrigger asChild>
    <Button>打开左侧抽屉</Button>
  </DrawerTrigger>
  <DrawerContent side="left">
    <DrawerHeader>
      <DrawerTitle>菜单</DrawerTitle>
    </DrawerHeader>
    <div className="p-6">
      <nav>
        <a href="#">首页</a>
        <a href="#">关于</a>
        <a href="#">联系</a>
      </nav>
    </div>
  </DrawerContent>
</Drawer>

// 顶部抽屉
<Drawer>
  <DrawerTrigger asChild>
    <Button>打开顶部抽屉</Button>
  </DrawerTrigger>
  <DrawerContent side="top">
    <DrawerHeader>
      <DrawerTitle>通知</DrawerTitle>
      <DrawerDescription>您有新的消息</DrawerDescription>
    </DrawerHeader>
    <div className="p-6">
      <p>这是通知内容。</p>
    </div>
  </DrawerContent>
</Drawer>

// 底部抽屉
<Drawer>
  <DrawerTrigger asChild>
    <Button>打开底部抽屉</Button>
  </DrawerTrigger>
  <DrawerContent side="bottom">
    <DrawerHeader>
      <DrawerTitle>底部面板</DrawerTitle>
    </DrawerHeader>
    <div className="p-6">
      <p>底部抽屉内容。</p>
    </div>
  </DrawerContent>
</Drawer>

// 无遮罩层
<Drawer>
  <DrawerTrigger asChild>
    <Button>无遮罩抽屉</Button>
  </DrawerTrigger>
  <DrawerContent showOverlay={false}>
    <DrawerHeader>
      <DrawerTitle>无遮罩</DrawerTitle>
    </DrawerHeader>
    <div className="p-6">
      <p>此抽屉没有背景遮罩层。</p>
    </div>
  </DrawerContent>
</Drawer>

// 受控模式
function ControlledDrawer() {
  const [open, setOpen] = React.useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button>打开受控抽屉</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>受控抽屉</DrawerTitle>
        </DrawerHeader>
        <div className="p-6">
          <p>这是一个受控的抽屉组件。</p>
          <Button onClick={() => setOpen(false)}>关闭</Button>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

// 带表单的抽屉
<Drawer>
  <DrawerTrigger asChild>
    <Button>编辑资料</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>编辑资料</DrawerTitle>
      <DrawerDescription>在这里修改您的个人信息</DrawerDescription>
    </DrawerHeader>
    <div className="p-6 space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          姓名
        </label>
        <input
          id="name"
          type="text"
          className="w-full border rounded px-3 py-2"
          placeholder="输入姓名"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          邮箱
        </label>
        <input
          id="email"
          type="email"
          className="w-full border rounded px-3 py-2"
          placeholder="输入邮箱"
        />
      </div>
    </div>
    <DrawerFooter>
      <Button>保存修改</Button>
      <DrawerClose asChild>
        <Button variant="outline">取消</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

// 自定义关闭按钮
<Drawer>
  <DrawerTrigger asChild>
    <Button>自定义关闭按钮</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerClose>
      <span className="sr-only">关闭</span>
      {/* 默认会显示 X 图标 */}
    </DrawerClose>
    <DrawerHeader>
      <DrawerTitle>标题</DrawerTitle>
    </DrawerHeader>
    <div className="p-6">
      <p>点击右上角的 X 可以关闭抽屉。</p>
    </div>
  </DrawerContent>
</Drawer>
```

## API

### Drawer

根容器组件。

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `defaultOpen` | `boolean` | `false` | 默认是否打开 |
| `open` | `boolean` | - | 受控的打开状态 |
| `onOpenChange` | `(open: boolean) => void` | - | 打开状态改变时的回调 |
| `modal` | `boolean` | `true` | 是否为模态框模式 |

### DrawerTrigger

触发抽屉打开的按钮。

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `asChild` | `boolean` | `false` | 是否将子元素作为触发器 |

### DrawerContent

抽屉的内容容器。

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'` | 抽屉出现的位置 |
| `showOverlay` | `boolean` | `true` | 是否显示遮罩层 |
| `onEscapeKeyDown` | `(event: KeyboardEvent) => void` | - | 按下 ESC 键时的回调 |
| `onPointerDownOutside` | `(event: PointerDownOutsideEvent) => void` | - | 点击外部时的回调 |
| `onInteractOutside` | `(event: PointerDownOutsideEvent \| FocusOutsideEvent) => void` | - | 外部交互时的回调 |

### DrawerHeader

抽屉的头部区域，通常包含标题和描述。

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `className` | `string` | - | 自定义类名 |

### DrawerTitle

抽屉的标题。

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `className` | `string` | - | 自定义类名 |

### DrawerDescription

抽屉的描述文本。

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `className` | `string` | - | 自定义类名 |

### DrawerFooter

抽屉的底部区域，通常包含操作按钮。

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `className` | `string` | - | 自定义类名 |

### DrawerClose

关闭抽屉的按钮。

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `asChild` | `boolean` | `false` | 是否将子元素作为关闭按钮 |
| `className` | `string` | - | 自定义类名 |

### DrawerOverlay

抽屉的遮罩层（通常不需要单独使用）。

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `className` | `string` | - | 自定义类名 |

### DrawerPortal

Portal 组件，用于将抽屉渲染到 body 元素下（通常不需要单独使用）。

## 样式自定义

所有组件都支持通过 `className` 属性进行样式自定义：

```tsx
<DrawerContent side="right" className="w-[500px]">
  <DrawerHeader className="bg-gray-50">
    <DrawerTitle className="text-2xl">自定义样式</DrawerTitle>
  </DrawerHeader>
  <div className="p-8">
    <p>内容区域</p>
  </div>
</DrawerContent>
```

## Variants

组件使用 `tailwind-variants` 进行样式管理，你可以导入 variants 来自定义样式：

```tsx
import {
  drawerContentVariants,
  drawerHeaderVariants,
  drawerFooterVariants,
  drawerTitleVariants,
  drawerDescriptionVariants,
  drawerCloseVariants,
  drawerOverlayVariants,
} from "@versakit/components"
```

## 无障碍性

- 支持键盘导航（ESC 关闭、Tab 键焦点管理）
- 正确的 ARIA 属性
- 焦点陷阱（focus trap）
- 屏幕阅读器支持
- 基于 Radix UI Dialog primitive，符合 WAI-ARIA 规范

## 注意事项

1. **性能优化**：抽屉内容默认会在打开时才渲染，关闭后卸载
2. **滚动锁定**：抽屉打开时会自动锁定页面滚动
3. **焦点管理**：抽屉打开时焦点会自动转移到抽屉内，关闭后恢复到触发元素
4. **嵌套使用**：虽然支持嵌套抽屉，但不推荐过度使用，可能影响用户体验
5. **移动端适配**：在移动设备上，左右抽屉会占据 75% 的屏幕宽度，小屏幕设备上最大宽度为 `sm`（640px）

## 常见问题

### 如何阻止点击外部关闭抽屉？

```tsx
<DrawerContent
  onPointerDownOutside={(e) => e.preventDefault()}
  onInteractOutside={(e) => e.preventDefault()}
>
  {/* 内容 */}
</DrawerContent>
```

### 如何自定义抽屉宽度？

```tsx
<DrawerContent side="right" className="w-[600px] max-w-full">
  {/* 内容 */}
</DrawerContent>
```

### 如何在抽屉中使用表单并处理提交？

```tsx
function FormDrawer() {
  const [open, setOpen] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 处理表单提交
    setOpen(false)
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button>打开表单</Button>
      </DrawerTrigger>
      <DrawerContent>
        <form onSubmit={handleSubmit}>
          <DrawerHeader>
            <DrawerTitle>填写表单</DrawerTitle>
          </DrawerHeader>
          <div className="p-6">
            {/* 表单字段 */}
          </div>
          <DrawerFooter>
            <Button type="submit">提交</Button>
            <DrawerClose asChild>
              <Button type="button" variant="outline">取消</Button>
            </DrawerClose>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  )
}
```

## 依赖

- `@radix-ui/react-dialog`: Dialog primitive
- `tailwind-variants`: 样式变体管理
- `lucide-react`: 图标库（用于关闭按钮）


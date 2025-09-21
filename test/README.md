# 测试指南

## 概述

本项目使用 [Vitest](https://vitest.dev/) 作为测试框架，配合 [Testing Library](https://testing-library.com/) 进行 React 组件测试。

## 运行测试

### 基本命令

```bash
# 运行所有测试（监听模式）
npm run test

# 运行所有测试（单次运行）
npm run test:run

# 运行测试并生成覆盖率报告
npm run test:coverage

# 打开测试 UI 界面
npm run test:ui

# 仅运行组件测试
npm run test:components
```

### 包级别测试

```bash
# 在 versakit-components 包中运行测试
cd packages/versakit-components
npm run test
```

## 测试文件结构

```
packages/
├── versakit-components/
│   └── src/
│       ├── button/
│       │   └── __tests__/
│       │       └── button.test.tsx
│       └── __tests__/
│           └── test-utils.tsx
└── test/
    ├── setup.ts
    └── README.md
```

## 编写测试

### 基本测试结构

```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { YourComponent } from '../index'

describe('YourComponent', () => {
  it('renders correctly', () => {
    render(<YourComponent>Test content</YourComponent>)
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('handles user interactions', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()

    render(<YourComponent onClick={handleClick}>Click me</YourComponent>)
    
    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

### 测试最佳实践

1. **使用语义化查询**：优先使用 `getByRole`, `getByLabelText` 等语义化查询方法
2. **测试用户行为**：关注用户如何与组件交互，而不是实现细节
3. **Mock 外部依赖**：使用 `vi.fn()` 和 `vi.mock()` 来模拟外部依赖
4. **测试覆盖率**：确保重要的功能都有测试覆盖

### 可用的工具和方法

- **Vitest**: `describe`, `it`, `expect`, `vi`, `beforeEach`, `afterEach`
- **Testing Library**: `render`, `screen`, `fireEvent`, `waitFor`
- **User Events**: `userEvent.click()`, `userEvent.type()`, `userEvent.hover()`
- **Jest DOM**: `toBeInTheDocument()`, `toHaveClass()`, `toBeDisabled()`

## 配置文件

- `vitest.config.ts`: Vitest 主配置文件
- `test/setup.ts`: 全局测试设置和模拟
- `packages/versakit-components/src/__tests__/test-utils.tsx`: 组件测试工具函数

## 覆盖率报告

运行 `npm run test:coverage` 后，覆盖率报告将生成在 `coverage/` 目录中：

- `coverage/index.html`: HTML 格式的详细报告
- `coverage/coverage-final.json`: JSON 格式的覆盖率数据

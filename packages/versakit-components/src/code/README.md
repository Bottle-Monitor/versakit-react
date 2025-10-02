# Code

A versatile code component for displaying inline code snippets and code blocks with multiple variants and sizes.

## Features

- 📝 **Inline & Block Modes** - Support for both inline `<code>` and block `<pre><code>` rendering
- 🎨 **Multiple Variants** - Default, primary, success, warning, and error styles
- 📏 **Size Options** - Small, default, and large sizes
- 🔄 **Text Wrapping** - Optional text wrapping for long code
- 🏷️ **Language Support** - Semantic language attribute support
- ♿ **Accessible** - Semantic HTML with proper code elements

## Installation

```tsx
import { Code } from "@versakit/components"
```

## Usage

### Inline Code

```tsx
<Code>const hello = "world"</Code>
```

### Code Block

```tsx
<Code block>
{`function greet(name: string) {
  console.log(\`Hello, \${name}!\`)
}`}
</Code>
```

### With Language

```tsx
<Code block language="typescript">
  const greeting: string = "Hello, TypeScript!"
</Code>
```

### Variants

```tsx
// Default variant
<Code>npm install</Code>

// Primary variant
<Code variant="primary">git commit -m "feat: add feature"</Code>

// Success variant
<Code variant="success">✓ Build successful</Code>

// Warning variant
<Code variant="warning">⚠ Deprecated API</Code>

// Error variant
<Code variant="error">Error: Module not found</Code>
```

### Sizes

```tsx
<Code size="sm">Small code</Code>
<Code size="default">Default code</Code>
<Code size="lg">Large code</Code>
```

### Text Wrapping

```tsx
// Enable wrapping for long code
<Code block wrap>
  This is a very long line of code that will wrap to the next line instead of overflowing
</Code>

// Default behavior (no wrap, scrollable)
<Code block>
  This is a very long line of code that will require horizontal scrolling
</Code>
```

## API Reference

### Code Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error'` | `'default'` | Visual style variant |
| `size` | `'sm' \| 'default' \| 'lg'` | `'default'` | Size of the code text |
| `block` | `boolean` | `false` | If true, renders as a code block with `<pre><code>` |
| `wrap` | `boolean` | `false` | If true, enables text wrapping |
| `language` | `string` | - | Programming language (semantic only) |
| `className` | `string` | - | Additional CSS classes |

Plus all standard HTML attributes for `HTMLElement`.

## Examples

### Inline Command

```tsx
<p>
  Run <Code>pnpm install</Code> to install dependencies.
</p>
```

### Multi-line Code Block

```tsx
<Code block language="typescript">
{`interface User {
  id: string
  name: string
  email: string
}

const user: User = {
  id: "1",
  name: "John Doe",
  email: "john@example.com"
}`}
</Code>
```

### Error Message

```tsx
<Code variant="error" block>
{`Error: Cannot find module 'express'
  at Function.Module._resolveFilename
  at Module.require (internal/modules/cjs/loader.js:1095:19)`}
</Code>
```

### Shell Commands

```tsx
<Code variant="primary" block language="bash">
{`# Install dependencies
pnpm install

# Run development server
pnpm dev`}
</Code>
```

## Styling

The component uses Tailwind CSS classes and can be customized using the `className` prop:

```tsx
<Code className="border-2 border-blue-500">
  Custom styled code
</Code>
```

## Accessibility

- Uses semantic `<code>` and `<pre>` elements
- Includes `data-language` attribute for language identification
- Maintains proper text contrast ratios
- Supports keyboard navigation and screen readers


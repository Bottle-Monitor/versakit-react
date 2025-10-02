# Spinner

A versatile loading spinner component with multiple animation styles and customization options.

## Features

- 🎨 8 different animation variants (default, simple, gradient, dots, bars, pulse, ring, dualRing)
- 🎯 5 size options (xs, sm, default, lg, xl)
- 🌈 6 color themes (primary, secondary, success, warning, danger, white)
- ⚡ Customizable animation speed
- ♿ Fully accessible with ARIA attributes
- 🎭 Custom styling support

## Installation

```bash
pnpm add @versakit/components
```

## Usage

### Basic Usage

```tsx
import { Spinner } from "@versakit/components"

export default function Example() {
  return <Spinner />
}
```

### Variants

```tsx
// Default spinning circle
<Spinner variant="default" />

// Simple spinner
<Spinner variant="simple" />

// Gradient spinner (SVG-based)
<Spinner variant="gradient" />

// Three bouncing dots
<Spinner variant="dots" />

// Three pulsing bars
<Spinner variant="bars" />

// Pulsing circle
<Spinner variant="pulse" />

// Ring spinner
<Spinner variant="ring" />

// Dual ring spinner
<Spinner variant="dualRing" />
```

### Sizes

```tsx
<Spinner size="xs" />
<Spinner size="sm" />
<Spinner size="default" />
<Spinner size="lg" />
<Spinner size="xl" />
```

### Colors

```tsx
<Spinner color="primary" />    {/* Black */}
<Spinner color="secondary" />  {/* Gray */}
<Spinner color="success" />    {/* Green */}
<Spinner color="warning" />    {/* Yellow */}
<Spinner color="danger" />     {/* Red */}
<Spinner color="white" />      {/* White */}
```

### Custom Speed

```tsx
{/* Slower animation (2 seconds) */}
<Spinner speed={2} />

{/* Faster animation (0.5 seconds) */}
<Spinner speed={0.5} />
```

### Accessibility

```tsx
<Spinner aria-label="Loading data" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "simple" \| "gradient" \| "dots" \| "bars" \| "pulse" \| "ring" \| "dualRing"` | `"default"` | The animation style variant |
| `size` | `"xs" \| "sm" \| "default" \| "lg" \| "xl"` | `"default"` | Size of the spinner |
| `color` | `"primary" \| "secondary" \| "success" \| "warning" \| "danger" \| "white"` | `"primary"` | Color theme |
| `speed` | `number` | `1` | Animation speed in seconds |
| `aria-label` | `string` | `"Loading"` | Accessible label for screen readers |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Loading Button

```tsx
import { Button, Spinner } from "@versakit/components"

function LoadingButton() {
  const [loading, setLoading] = React.useState(false)

  return (
    <Button onClick={() => setLoading(true)} disabled={loading}>
      {loading && <Spinner size="sm" color="white" />}
      {loading ? "Loading..." : "Submit"}
    </Button>
  )
}
```

### Full Page Loading

```tsx
function FullPageLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="text-center">
        <Spinner size="xl" />
        <p className="mt-4 text-sm text-gray-600">Loading...</p>
      </div>
    </div>
  )
}
```

### Inline Loading

```tsx
function InlineLoader() {
  return (
    <div className="flex items-center gap-2">
      <Spinner size="sm" />
      <span>Loading content...</span>
    </div>
  )
}
```

### Status-Based Spinner

```tsx
function StatusSpinner({ status }: { status: "loading" | "success" | "error" }) {
  const colorMap = {
    loading: "primary",
    success: "success",
    error: "danger",
  }

  return <Spinner color={colorMap[status]} variant="dots" />
}
```

### Card Loading State

```tsx
import { Card, Spinner } from "@versakit/components"

function LoadingCard() {
  return (
    <Card className="p-8">
      <div className="flex flex-col items-center justify-center space-y-4">
        <Spinner variant="gradient" size="lg" />
        <p className="text-sm text-gray-600">Loading data...</p>
      </div>
    </Card>
  )
}
```

### Different Variants Showcase

```tsx
function SpinnerShowcase() {
  return (
    <div className="flex gap-4">
      <div className="text-center">
        <Spinner variant="default" />
        <p className="text-xs mt-2">Default</p>
      </div>
      <div className="text-center">
        <Spinner variant="dots" />
        <p className="text-xs mt-2">Dots</p>
      </div>
      <div className="text-center">
        <Spinner variant="bars" />
        <p className="text-xs mt-2">Bars</p>
      </div>
      <div className="text-center">
        <Spinner variant="gradient" />
        <p className="text-xs mt-2">Gradient</p>
      </div>
    </div>
  )
}
```

### Modal Loading Overlay

```tsx
import { Modal, Spinner } from "@versakit/components"

function LoadingModal({ open }: { open: boolean }) {
  return (
    <Modal open={open}>
      <ModalContent className="flex flex-col items-center justify-center p-12">
        <Spinner size="xl" variant="gradient" />
        <p className="mt-4 text-lg font-medium">Processing...</p>
        <p className="text-sm text-gray-600">Please wait</p>
      </ModalContent>
    </Modal>
  )
}
```

### Custom Styled Spinner

```tsx
<Spinner 
  variant="gradient"
  size="lg"
  speed={1.5}
  className="text-purple-500"
  aria-label="Uploading files"
/>
```

### Dark Background

```tsx
function DarkSpinner() {
  return (
    <div className="bg-black p-8 rounded-lg">
      <Spinner color="white" variant="ring" size="lg" />
    </div>
  )
}
```

## Variant Details

### Default / Simple
Classic spinning circle with a transparent section. Simple and clean.

### Gradient
SVG-based circular gradient for a modern look.

### Dots
Three bouncing dots with staggered animation timing.

### Bars
Three vertical bars that pulse up and down.

### Pulse
Pulsing circle that fades in and out.

### Ring
Spinning ring with a clean circular motion.

### DualRing
Two-colored ring creating a dual-tone spinning effect.

## Accessibility

The Spinner component follows WAI-ARIA guidelines:

- Uses `role="status"` for live region
- Includes `aria-label` for screen reader description
- Contains visually hidden text for screen readers
- All animations respect `prefers-reduced-motion`

## Performance

- Pure CSS animations for optimal performance
- No JavaScript animations
- GPU-accelerated transforms
- Minimal DOM manipulation

## Styling

The component uses Tailwind CSS and can be customized:

```tsx
<Spinner className="text-blue-500 opacity-75" />
```

## Browser Support

Works in all modern browsers that support:
- CSS animations
- CSS transforms
- SVG (for gradient variant)


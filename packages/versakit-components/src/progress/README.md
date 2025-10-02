# Progress

A customizable progress bar component with smooth animations and multiple variants.

## Features

- 🎨 Multiple visual variants (primary, secondary, success, warning, danger)
- 📏 Three size options (sm, default, lg)
- ✨ Smooth transition animations
- ♿ Fully accessible with ARIA attributes
- 🎯 Value clamping (0-100 or custom max)
- 📊 Optional percentage display
- 🎭 Custom styling support

## Installation

```bash
pnpm add @versakit/components
```

## Usage

### Basic Usage

```tsx
import { Progress } from "@versakit/components"

export default function Example() {
  return <Progress value={50} />
}
```

### With Variants

```tsx
<Progress value={75} variant="success" />
<Progress value={50} variant="warning" />
<Progress value={25} variant="danger" />
```

### Different Sizes

```tsx
<Progress value={50} size="sm" />
<Progress value={50} size="default" />
<Progress value={50} size="lg" />
```

### Show Percentage

```tsx
<Progress value={75} showValue />
```

### Custom Max Value

```tsx
<Progress value={50} max={200} showValue />
// Shows 25%
```

### With Animation Control

```tsx
<Progress value={75} animated={false} />
```

### Accessibility

```tsx
<Progress 
  value={75} 
  aria-label="Upload progress"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | The current progress value (0-max) |
| `max` | `number` | `100` | The maximum progress value |
| `variant` | `"primary" \| "secondary" \| "success" \| "warning" \| "danger"` | `"primary"` | Visual style variant |
| `size` | `"sm" \| "default" \| "lg"` | `"default"` | Size of the progress bar |
| `showValue` | `boolean` | `false` | Whether to display the percentage |
| `animated` | `boolean` | `true` | Enable smooth transitions |
| `indicatorClassName` | `string` | - | Custom className for the indicator |
| `aria-label` | `string` | `"Progress"` | Accessible label |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Loading Indicator

```tsx
function UploadExample() {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100
        return prev + 10
      })
    }, 500)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full max-w-md">
      <Progress value={progress} variant="primary" showValue />
    </div>
  )
}
```

### Multi-Step Form

```tsx
function MultiStepForm() {
  const [step, setStep] = React.useState(1)
  const totalSteps = 4
  const progress = (step / totalSteps) * 100

  return (
    <div>
      <Progress 
        value={progress} 
        variant="primary" 
        aria-label={`Step ${step} of ${totalSteps}`}
      />
      <p>Step {step} of {totalSteps}</p>
    </div>
  )
}
```

### File Upload with States

```tsx
function FileUpload() {
  const [uploadProgress, setUploadProgress] = React.useState(0)
  const [status, setStatus] = React.useState<"uploading" | "success" | "error">("uploading")

  const variant = {
    uploading: "primary",
    success: "success",
    error: "danger"
  }[status]

  return (
    <Progress 
      value={uploadProgress} 
      variant={variant}
      showValue
      aria-label="File upload progress"
    />
  )
}
```

## Accessibility

The Progress component follows WAI-ARIA guidelines:

- Uses `role="progressbar"`
- Includes `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
- Supports custom `aria-label` for screen readers
- Percentage text has `aria-live="polite"` for dynamic updates

## Styling

The component uses Tailwind CSS and can be customized:

```tsx
<Progress 
  value={50}
  className="bg-blue-100"
  indicatorClassName="bg-blue-600"
/>
```


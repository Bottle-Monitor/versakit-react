# Modal

A fully accessible modal dialog component built from scratch without external UI libraries. Features focus management, keyboard navigation, scroll locking, and animations.

## Features

- 🎯 **Fully Accessible** - ARIA attributes, focus management, and keyboard navigation
- ⌨️ **Keyboard Support** - ESC to close, Tab for focus trap
- 🔒 **Scroll Lock** - Prevents body scrolling when modal is open
- 🎨 **Multiple Sizes** - sm, default, lg, xl, and full sizes
- 🎭 **Portal Rendering** - Renders to document.body using React Portal
- 🎬 **Smooth Animations** - Built-in fade and zoom animations
- 🎛️ **Controlled & Uncontrolled** - Flexible state management
- ♿ **Screen Reader Friendly** - Proper role and aria attributes

## Installation

```tsx
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalFooter, ModalClose, ModalTrigger } from "@versakit/components"
```

## Usage

### Basic Modal

```tsx
<Modal>
  <ModalTrigger>Open Modal</ModalTrigger>
  <ModalContent>
    <ModalHeader>
      <ModalTitle>Modal Title</ModalTitle>
      <ModalDescription>Modal description goes here.</ModalDescription>
    </ModalHeader>
    <div>Modal content</div>
    <ModalFooter>
      <ModalClose>Close</ModalClose>
    </ModalFooter>
  </ModalContent>
</Modal>
```

### Controlled Modal

```tsx
const [open, setOpen] = useState(false)

<Modal open={open} onOpenChange={setOpen}>
  <ModalTrigger>Open</ModalTrigger>
  <ModalContent>
    <ModalTitle>Controlled Modal</ModalTitle>
  </ModalContent>
</Modal>
```

### Different Sizes

```tsx
// Small modal
<Modal>
  <ModalContent size="sm">
    <ModalTitle>Small Modal</ModalTitle>
  </ModalContent>
</Modal>

// Large modal
<Modal>
  <ModalContent size="lg">
    <ModalTitle>Large Modal</ModalTitle>
  </ModalContent>
</Modal>

// Extra large modal
<Modal>
  <ModalContent size="xl">
    <ModalTitle>Extra Large Modal</ModalTitle>
  </ModalContent>
</Modal>

// Full screen modal
<Modal>
  <ModalContent size="full">
    <ModalTitle>Full Screen Modal</ModalTitle>
  </ModalContent>
</Modal>
```

### Without Overlay

```tsx
<Modal>
  <ModalContent showOverlay={false}>
    <ModalTitle>No Overlay Modal</ModalTitle>
  </ModalContent>
</Modal>
```

### Without Close Button

```tsx
<Modal>
  <ModalContent showClose={false}>
    <ModalTitle>No Close Button</ModalTitle>
  </ModalContent>
</Modal>
```

### Prevent Closing

```tsx
// Prevent closing on overlay click
<Modal>
  <ModalContent closeOnOverlayClick={false}>
    <ModalTitle>Cannot Close on Overlay Click</ModalTitle>
  </ModalContent>
</Modal>

// Prevent closing on ESC
<Modal>
  <ModalContent closeOnEsc={false}>
    <ModalTitle>Cannot Close on ESC</ModalTitle>
  </ModalContent>
</Modal>
```

### Custom Close Button

```tsx
<Modal>
  <ModalContent showClose={false}>
    <ModalHeader>
      <ModalTitle>Custom Close</ModalTitle>
    </ModalHeader>
    <div>Content</div>
    <ModalFooter>
      <ModalClose asChild>
        <Button variant="outline">Cancel</Button>
      </ModalClose>
      <Button variant="primary">Confirm</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
```

**Note:** When using `ModalClose` with custom components like `Button`, set `asChild={true}` to prevent style conflicts.

## API Reference

### Modal Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | Controlled open state |
| `onOpenChange` | `(open: boolean) => void` | - | Callback when open state changes |
| `defaultOpen` | `boolean` | `false` | Default open state (uncontrolled) |
| `children` | `ReactNode` | - | Modal content |

### ModalTrigger Props

Extends all standard `button` HTML attributes.

### ModalContent Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'default' \| 'lg' \| 'xl' \| 'full'` | `'default'` | Size of the modal |
| `showOverlay` | `boolean` | `true` | Whether to show the overlay |
| `showClose` | `boolean` | `true` | Whether to show the close button |
| `closeOnOverlayClick` | `boolean` | `true` | Close when clicking overlay |
| `closeOnEsc` | `boolean` | `true` | Close when pressing ESC |
| `onClose` | `() => void` | - | Callback when close is requested |
| `className` | `string` | - | Additional CSS classes |

Plus all standard `div` HTML attributes.

### ModalHeader Props

Extends all standard `div` HTML attributes.

### ModalFooter Props

Extends all standard `div` HTML attributes.

### ModalTitle Props

Extends all standard `h2` HTML attributes.

### ModalDescription Props

Extends all standard `p` HTML attributes.

### ModalClose Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `asChild` | `boolean` | `false` | Render as wrapper for custom component (e.g., Button) |
| `className` | `string` | - | Additional CSS classes |

Plus all standard `button` HTML attributes.

**Usage:**
- Default: `<ModalClose>` renders as button with X icon in top-right corner
- With text: `<ModalClose>Close</ModalClose>` renders as button with custom text
- As wrapper: `<ModalClose asChild><Button>Close</Button></ModalClose>` wraps custom component

## Examples

### Confirmation Dialog

```tsx
<Modal>
  <ModalTrigger>Delete Account</ModalTrigger>
  <ModalContent size="sm">
    <ModalHeader>
      <ModalTitle>Are you sure?</ModalTitle>
      <ModalDescription>
        This action cannot be undone. This will permanently delete your account.
      </ModalDescription>
    </ModalHeader>
    <ModalFooter>
      <ModalClose>Cancel</ModalClose>
      <button className="bg-red-500 text-white px-4 py-2 rounded">
        Delete
      </button>
    </ModalFooter>
  </ModalContent>
</Modal>
```

### Form Modal

```tsx
<Modal>
  <ModalTrigger>Add User</ModalTrigger>
  <ModalContent>
    <ModalHeader>
      <ModalTitle>Add New User</ModalTitle>
      <ModalDescription>
        Fill in the user details below.
      </ModalDescription>
    </ModalHeader>
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        className="w-full border rounded px-3 py-2"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full border rounded px-3 py-2"
      />
    </form>
    <ModalFooter>
      <ModalClose>Cancel</ModalClose>
      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        Save
      </button>
    </ModalFooter>
  </ModalContent>
</Modal>
```

### Alert Modal

```tsx
<Modal>
  <ModalContent size="sm" closeOnOverlayClick={false} closeOnEsc={false}>
    <ModalHeader>
      <ModalTitle>Important Notice</ModalTitle>
      <ModalDescription>
        Please read this important information carefully.
      </ModalDescription>
    </ModalHeader>
    <ModalFooter>
      <ModalClose>I Understand</ModalClose>
    </ModalFooter>
  </ModalContent>
</Modal>
```

## Accessibility

The Modal component follows WAI-ARIA best practices:

- Uses `role="dialog"` and `aria-modal="true"`
- Implements focus trap - Tab cycles through focusable elements
- Focuses first focusable element on open
- Supports ESC key to close
- Prevents body scrolling when open
- Properly manages focus return on close
- Screen reader friendly with semantic HTML

## Keyboard Navigation

- `ESC` - Close modal (if `closeOnEsc` is true)
- `Tab` - Navigate to next focusable element
- `Shift + Tab` - Navigate to previous focusable element

## Styling

The component uses Tailwind CSS classes and can be customized using the `className` prop:

```tsx
<ModalContent className="bg-gradient-to-br from-purple-50 to-blue-50">
  <ModalTitle className="text-purple-900">Custom Styled Modal</ModalTitle>
</ModalContent>
```

## Implementation Details

- Built entirely with React, no external UI libraries
- Uses React Portal to render to `document.body`
- Implements custom focus trap and scroll locking
- Handles keyboard events for accessibility
- Provides both controlled and uncontrolled usage
- Context API for state sharing between components


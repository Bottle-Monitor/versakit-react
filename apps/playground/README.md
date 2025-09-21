# Versakit Playground

An interactive playground for exploring and experimenting with Versakit React components in real-time.

## Features

- 🎮 **Interactive Editor**: Built with Sandpack for a VSCode-like experience
- 🔄 **Live Preview**: See your changes instantly in the preview pane
- 📚 **Component Examples**: Pre-built examples for all Versakit components
- 🎨 **Customizable**: Edit code, styles, and see results in real-time
- 📱 **Responsive**: Works on desktop and mobile devices
- 🔍 **Component Browser**: Easy navigation through component categories

## Getting Started

### Development

```bash
# Install dependencies (from root directory)
pnpm install

# Start the playground development server
pnpm playground:dev
```

The playground will be available at `http://localhost:3001`

### Build

```bash
# Build the playground for production
pnpm playground:build

# Preview the production build
pnpm playground:preview
```

## Usage

1. **Select a Component**: Choose from the sidebar to see different component examples
2. **Edit Code**: Modify the code in the editor to experiment with props and styling
3. **Live Preview**: See your changes instantly in the preview pane
4. **Try Examples**: Each component has multiple examples showing different use cases

## Architecture

The playground is built with:

- **React 18**: Modern React with hooks and concurrent features
- **Vite**: Fast build tool and development server
- **Sandpack**: CodeSandbox's in-browser bundler for live code editing
- **Tailwind CSS**: For styling and component theming
- **TypeScript**: Full type safety and IntelliSense

## Adding New Examples

To add a new component example:

1. Create the example in `src/examples/[component].ts`
2. Add the example key to the types in `src/examples/types.ts`
3. Register the example in `src/examples/index.ts`
4. Add it to the appropriate category

Example structure:

```typescript
export const newComponentExamples: Record<string, Example> = {
  'component-basic': {
    title: 'Basic Usage',
    description: 'Simple example of the component',
    code: `
import React from 'react'
import { Component } from '@versakit/components'

export default function App() {
  return (
    <div className="p-8">
      <Component>Hello World</Component>
    </div>
  )
}
    `,
  },
}
```

## Customization

### Themes

The playground uses Tailwind CSS and can be customized by modifying:
- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Global styles
- Component examples can include custom styles

### Sandpack Configuration

Sandpack settings can be modified in `src/components/Playground.tsx`:

```typescript
const customSetup = {
  dependencies: {
    // Add or modify dependencies here
  },
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add your component examples
4. Test in the playground
5. Submit a pull request

## License

This project is part of the Versakit React component library.

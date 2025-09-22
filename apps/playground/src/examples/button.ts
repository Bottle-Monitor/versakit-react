import type { Example } from "./types"

export const buttonExamples: Record<string, Example> = {
	"button-basic": {
		title: "Basic Button",
		description: "A simple button with default styling",
		code: `import React from 'react'
import { Button } from '@versakit/components'

export default function App() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold mb-6">Basic Button</h1>
      
      <div className="space-y-4">
        <Button onClick={() => alert('Hello, World!')}>
          Click me
        </Button>
        
        <div className="space-x-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </div>
    </div>
  )
}`,
	},

	"button-variants": {
		title: "Button Variants",
		description: "Different visual styles for buttons",
		code: `import React from 'react'
import { Button } from '@versakit/components'

export default function App() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Button Variants</h1>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Primary Variants</h3>
          <div className="flex flex-wrap gap-2">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>
        
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Other Variants</h3>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          Try clicking any button to see the hover and focus states!
        </p>
      </div>
    </div>
  )
}`,
	},

	"button-sizes": {
		title: "Button Sizes",
		description: "Different sizes available for buttons",
		code: `import React from 'react'

// Inline Button component for demo
const Button = ({ 
  children, 
  variant = 'default', 
  size = 'default',
  onClick,
  disabled = false,
  className,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
  
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    link: 'text-blue-600 hover:text-blue-800 underline-offset-4 hover:underline focus:ring-blue-500'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    default: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  }
  
  return (
    <button
      className={\`\${baseStyles} \${variants[variant]} \${sizes[size]} \${className || ''}\`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default function App() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Button Sizes</h1>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Default Variant</h3>
          <div className="flex items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Outline Variant</h3>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">Small</Button>
            <Button variant="outline" size="md">Medium</Button>
            <Button variant="outline" size="lg">Large</Button>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Icon Size</h3>
          <div className="flex items-center gap-4">
            <Button size="icon">🚀</Button>
            <Button variant="outline" size="icon">⭐</Button>
            <Button variant="ghost" size="icon">❤️</Button>
          </div>
        </div>
      </div>
    </div>
  )
}`,
	},

	"button-disabled": {
		title: "Disabled State",
		description: "Buttons in disabled state",
		code: `import React, { useState } from 'react'

export default function App() {
  const [isDisabled, setIsDisabled] = useState(true)
  
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Disabled State</h1>
      
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Button 
            onClick={() => setIsDisabled(!isDisabled)}
            variant="outline"
          >
            Toggle Disabled State
          </Button>
          <span className="text-sm text-gray-600">
            Currently: {isDisabled ? 'Disabled' : 'Enabled'}
          </span>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <h3 className="font-semibold">Default</h3>
            <Button disabled={isDisabled}>Button</Button>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold">Secondary</h3>
            <Button variant="secondary" disabled={isDisabled}>Button</Button>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold">Outline</h3>
            <Button variant="outline" disabled={isDisabled}>Button</Button>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold">Destructive</h3>
            <Button variant="destructive" disabled={isDisabled}>Button</Button>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold">Ghost</h3>
            <Button variant="ghost" disabled={isDisabled}>Button</Button>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold">Link</h3>
            <Button variant="link" disabled={isDisabled}>Button</Button>
          </div>
        </div>
      </div>
    </div>
  )
}`,
	},

	"button-loading": {
		title: "Loading State",
		description: "Buttons with loading indicators",
		code: `import React, { useState } from 'react'

export default function App() {
  const [loading1, setLoading1] = useState(false)
  const [loading2, setLoading2] = useState(false)
  
  const handleAsyncAction = (setLoading) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert('Action completed!')
    }, 2000)
  }
  
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Loading State</h1>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Manual Loading State</h3>
          <div className="flex gap-4">
            <Button 
              onClick={() => handleAsyncAction(setLoading1)}
              disabled={loading1}
            >
              {loading1 ? '⏳ Loading...' : 'Start Action'}
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => handleAsyncAction(setLoading2)}
              disabled={loading2}
            >
              {loading2 ? '🔄 Processing...' : 'Process Data'}
            </Button>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Different Loading Styles</h3>
          <div className="grid grid-cols-2 gap-4">
            <Button disabled>
              ⏳ Saving...
            </Button>
            
            <Button variant="secondary" disabled>
              🔄 Updating...
            </Button>
            
            <Button variant="outline" disabled>
              📤 Uploading...
            </Button>
            
            <Button variant="destructive" disabled>
              🗑️ Deleting...
            </Button>
          </div>
        </div>
        
        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-700">
            💡 Tip: Use the disabled state combined with loading text/icons 
            to indicate ongoing operations.
          </p>
        </div>
      </div>
    </div>
  )
}`,
	},

	"button-with-icons": {
		title: "Buttons with Icons",
		description: "Buttons combined with icons and emojis",
		code: `import React from 'react'

// Inline Button component for demo
const Button = ({ 
  children, 
  variant = 'default', 
  size = 'default',
  onClick,
  disabled = false,
  className,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
  
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    link: 'text-blue-600 hover:text-blue-800 underline-offset-4 hover:underline focus:ring-blue-500'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    default: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  }
  
  return (
    <button
      className={\`\${baseStyles} \${variants[variant]} \${sizes[size]} \${className || ''}\`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default function App() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Buttons with Icons</h1>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Icon + Text</h3>
          <div className="flex flex-wrap gap-3">
            <Button>
              📁 Open File
            </Button>
            <Button variant="secondary">
              💾 Save Changes
            </Button>
            <Button variant="outline">
              📤 Export Data
            </Button>
            <Button variant="destructive">
              🗑️ Delete Item
            </Button>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Icon Only</h3>
          <div className="flex flex-wrap gap-3">
            <Button size="icon">
              ⚙️
            </Button>
            <Button variant="outline" size="icon">
              🔍
            </Button>
            <Button variant="ghost" size="icon">
              ❤️
            </Button>
            <Button variant="secondary" size="icon">
              🔔
            </Button>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Action Buttons</h3>
          <div className="space-y-3">
            <div className="flex gap-3">
              <Button onClick={() => alert('Downloaded!')}>
                ⬇️ Download
              </Button>
              <Button variant="outline" onClick={() => alert('Shared!')}>
                🔗 Share
              </Button>
            </div>
            
            <div className="flex gap-3">
              <Button variant="secondary">
                👍 Like
              </Button>
              <Button variant="secondary">
                💬 Comment
              </Button>
              <Button variant="secondary">
                🔄 Refresh
              </Button>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-green-700">
            🎨 You can use any emoji or icon library like Lucide React, 
            Heroicons, or Font Awesome with these buttons!
          </p>
        </div>
      </div>
    </div>
  )
}`,
	},
}

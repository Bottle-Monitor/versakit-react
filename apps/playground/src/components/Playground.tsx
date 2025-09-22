import { SandpackCodeEditor, SandpackLayout, SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react"

const SandpackProviderTyped = SandpackProvider as any
const SandpackLayoutTyped = SandpackLayout as any
const SandpackCodeEditorTyped = SandpackCodeEditor as any
const SandpackPreviewTyped = SandpackPreview as any

import { useState } from "react"
import { examples } from "../examples"
import type { ExampleKey } from "../examples/types"
import { ComponentSelector } from "./ComponentSelector"

export function Playground() {
	const [selectedExample, setSelectedExample] = useState<ExampleKey>("button-basic")
	const currentExample = examples[selectedExample]

	// Add mock versions of @versakit packages for Sandpack
	const defaultStyles = `
/* Tailwind CSS via CDN */
@import url('https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4');

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}`

	const componentsMock = `
// Mock implementation of @versakit/components for Sandpack
import React from 'react';

export const Button = ({ 
  children, 
  variant = 'default', 
  size = 'default',
  onClick,
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    link: 'text-blue-600 hover:text-blue-800 underline-offset-4 hover:underline focus:ring-blue-500'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    default: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
    icon: 'p-2'
  };
  
  const combinedClass = [baseStyles, variants[variant], sizes[size], className].join(' ');
  
  return (
    <button 
      className={combinedClass} 
      onClick={onClick} 
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// Export other mocked components if needed
`

	const sharedMock = `
// Mock implementation of @versakit/shared for Sandpack

// Utility function to combine class names
const combineClasses = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export { combineClasses };

// Export other mocked utilities if needed
`

	const sandpackFiles = {
		"/App.tsx": currentExample.code,
		"/styles.css": currentExample.styles || defaultStyles,
		"/node_modules/@versakit/components/index.js": componentsMock,
		"/node_modules/@versakit/shared/index.js": sharedMock,
	}

	// For local development, we need to use a special approach for Sandpack
	// Since @versakit packages are not published yet, we'll use mock versions
	const customSetup = {
		dependencies: {
			"lucide-react": "0.454.0",
			clsx: "2.1.1",
			"tailwind-variants": "^3.1.1",
		},
	}

	return (
		<div className="flex h-full w-full overflow-hidden bg-gray-50">
			{/* Sidebar - Fixed width with responsive behavior */}
			<div className="w-80 lg:w-80 md:w-72 sm:w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm flex-shrink-0">
				{/* Header - Fixed height */}
				<div className="h-20 p-4 border-b border-gray-200 flex-shrink-0">
					<h2 className="text-lg font-semibold text-gray-900 mb-2">Components</h2>
					<p className="text-sm text-gray-600">Select a component to see its example and try it out</p>
				</div>

				{/* Component List - Scrollable area */}
				<div className="flex-1 overflow-y-auto min-h-0">
					<ComponentSelector selectedExample={selectedExample} onSelectExample={setSelectedExample} />
				</div>

				{/* Footer - Fixed height */}
				<div className="h-24 p-4 border-t border-gray-200 bg-gray-50 flex-shrink-0">
					<div className="text-xs text-gray-600">
						<p className="mb-2">
							<strong>Current Example:</strong> {currentExample.title}
						</p>
						<p className="line-clamp-2">{currentExample.description}</p>
					</div>
				</div>
			</div>

			{/* Editor and Preview - Flexible area with responsive layout */}
			<div className="flex-1 flex min-w-0 bg-white">
				<SandpackProviderTyped
					template="react-ts"
					files={sandpackFiles}
					customSetup={customSetup}
					theme="light"
					options={{
						showLineNumbers: true,
						showInlineErrors: true,
						wrapContent: true,
						editorHeight: "100%",
						autorun: true,
					}}
				>
					<SandpackLayoutTyped className="h-full w-full">
						<div className="flex h-full w-full flex-col lg:flex-row">
							{/* Code Editor - Responsive width */}
							<div className="w-full lg:w-1/2 flex flex-col border-r-0 lg:border-r border-gray-200 bg-white">
								{/* Editor Header - Fixed height */}
								<div className="h-10 bg-gray-800 text-white px-4 py-2 text-sm font-medium flex items-center flex-shrink-0">
									<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-label="Code icon">
										<title>Code Editor Icon</title>
										<path
											fillRule="evenodd"
											d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
									Code Editor
								</div>
								{/* Editor Content - Scrollable */}
								<div className="flex-1 min-h-0 overflow-hidden dark-scrollbar">
									<SandpackCodeEditorTyped
										style={{
											height: "100%",
											width: "100%",
										}}
										showTabs={false}
										showLineNumbers={true}
										showInlineErrors={true}
										wrapContent={false}
									/>
								</div>
							</div>

							{/* Preview - Responsive width with proper overflow handling */}
							<div className="w-full lg:w-1/2 flex flex-col bg-white border-t lg:border-t-0 border-gray-200">
								{/* Preview Header - Fixed height */}
								<div className="h-10 bg-gray-100 text-gray-800 px-4 py-2 text-sm font-medium border-b border-gray-200 flex items-center flex-shrink-0">
									<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-label="Preview icon">
										<title>Preview Icon</title>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
											clipRule="evenodd"
										/>
									</svg>
									Preview
								</div>
								{/* Preview Content - Scrollable with proper overflow handling */}
								<div className="flex-1 min-h-0 overflow-auto bg-gray-50">
									<div className="h-full w-full">
										<SandpackPreviewTyped
											style={{
												height: "100%",
												width: "100%",
												minHeight: "100%",
											}}
											showRefreshButton={true}
											showOpenInCodeSandbox={false}
											showErrorScreen={true}
											showLoadingScreen={true}
										/>
									</div>
								</div>
							</div>
						</div>
					</SandpackLayoutTyped>
				</SandpackProviderTyped>
			</div>
		</div>
	)
}

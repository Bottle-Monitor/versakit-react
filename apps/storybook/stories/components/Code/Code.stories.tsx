import type { Meta, StoryObj } from "@storybook/react"
import { Code } from "@versakit/components"

const meta = {
	title: "Components/Code",
	component: Code,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["default", "primary", "success", "warning", "error"],
			description: "The visual style variant of the code",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "default" },
			},
		},
		size: {
			control: { type: "select" },
			options: ["sm", "default", "lg"],
			description: "The size of the code text",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "default" },
			},
		},
		block: {
			control: "boolean",
			description: "Renders as a code block with <pre><code>",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		wrap: {
			control: "boolean",
			description: "Enables text wrapping in code blocks",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		language: {
			control: "text",
			description: "Programming language for semantic hint",
			table: {
				type: { summary: "string" },
			},
		},
		children: {
			control: "text",
			description: "The code content",
		},
	},
} satisfies Meta<typeof Code>

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
	args: {
		children: 'const hello = "world"',
	},
}

// Inline code variants
export const InlineDefault: Story = {
	args: {
		variant: "default",
		children: "npm install",
	},
}

export const InlinePrimary: Story = {
	args: {
		variant: "primary",
		children: "git commit -m 'feat: add feature'",
	},
}

export const InlineSuccess: Story = {
	args: {
		variant: "success",
		children: "✓ Build successful",
	},
}

export const InlineWarning: Story = {
	args: {
		variant: "warning",
		children: "⚠ Deprecated API",
	},
}

export const InlineError: Story = {
	args: {
		variant: "error",
		children: "Error: Module not found",
	},
}

// Code block
export const CodeBlock: Story = {
	args: {
		block: true,
		language: "typescript",
		children: `function greet(name: string) {
  console.log(\`Hello, \${name}!\`)
}`,
	},
}

// Code block with language
export const TypeScriptBlock: Story = {
	args: {
		block: true,
		language: "typescript",
		children: `interface User {
  id: string
  name: string
  email: string
}

const user: User = {
  id: "1",
  name: "John Doe",
  email: "john@example.com"
}`,
	},
}

export const JavaScriptBlock: Story = {
	args: {
		block: true,
		language: "javascript",
		children: `const fetchData = async () => {
  const response = await fetch('/api/data')
  const data = await response.json()
  return data
}`,
	},
}

export const BashBlock: Story = {
	args: {
		block: true,
		variant: "primary",
		language: "bash",
		children: `# Install dependencies
pnpm install

# Run development server
pnpm dev`,
	},
}

// Size variants
export const Small: Story = {
	args: {
		size: "sm",
		children: "small code",
	},
}

export const Large: Story = {
	args: {
		size: "lg",
		children: "large code",
	},
}

// Text wrapping
export const WithWrap: Story = {
	args: {
		block: true,
		wrap: true,
		children:
			"This is a very long line of code that will wrap to the next line instead of requiring horizontal scrolling when the wrap prop is set to true",
	},
}

export const WithoutWrap: Story = {
	args: {
		block: true,
		wrap: false,
		children:
			"This is a very long line of code that will require horizontal scrolling because the wrap prop is set to false or not provided",
	},
}

// Error message
export const ErrorMessage: Story = {
	args: {
		block: true,
		variant: "error",
		children: `Error: Cannot find module 'express'
  at Function.Module._resolveFilename (internal/modules/cjs/loader.js:1090:15)
  at Module.require (internal/modules/cjs/loader.js:1095:19)
  at require (internal/modules/cjs/helpers.js:103:18)`,
	},
}

// All inline variants showcase
export const AllInlineVariants: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<div>
				Default: <Code variant="default">npm install</Code>
			</div>
			<div>
				Primary: <Code variant="primary">git commit</Code>
			</div>
			<div>
				Success: <Code variant="success">✓ Success</Code>
			</div>
			<div>
				Warning: <Code variant="warning">⚠ Warning</Code>
			</div>
			<div>
				Error: <Code variant="error">✗ Error</Code>
			</div>
		</div>
	),
}

// All block variants showcase
export const AllBlockVariants: Story = {
	render: () => (
		<div className="flex flex-col gap-4 w-[600px]">
			<Code block variant="default">
				const hello = "default"
			</Code>
			<Code block variant="primary">
				const hello = "primary"
			</Code>
			<Code block variant="success">
				const hello = "success"
			</Code>
			<Code block variant="warning">
				const hello = "warning"
			</Code>
			<Code block variant="error">
				const hello = "error"
			</Code>
		</div>
	),
}

// All sizes showcase
export const AllSizes: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<div>
				Small: <Code size="sm">const x = 1</Code>
			</div>
			<div>
				Default: <Code size="default">const x = 1</Code>
			</div>
			<div>
				Large: <Code size="lg">const x = 1</Code>
			</div>
		</div>
	),
}

// Real-world usage example
export const InSentence: Story = {
	render: () => (
		<p className="max-w-2xl text-sm">
			To install dependencies, run <Code>pnpm install</Code> in your terminal. Then start the development server with{" "}
			<Code>pnpm dev</Code>. If you encounter any errors, check the <Code variant="error">package.json</Code> file.
		</p>
	),
}

// Multi-language code blocks
export const MultiLanguageExample: Story = {
	render: () => (
		<div className="flex flex-col gap-6 w-[600px]">
			<div>
				<h3 className="text-sm font-semibold mb-2">TypeScript</h3>
				<Code block language="typescript">
					{`const greeting: string = "Hello, TypeScript!"`}
				</Code>
			</div>
			<div>
				<h3 className="text-sm font-semibold mb-2">Python</h3>
				<Code block language="python" variant="primary">
					{`def greet(name):
    print(f"Hello, {name}!")`}
				</Code>
			</div>
			<div>
				<h3 className="text-sm font-semibold mb-2">JSON</h3>
				<Code block language="json" variant="success">
					{`{
  "name": "versakit",
  "version": "1.0.0"
}`}
				</Code>
			</div>
		</div>
	),
}

// Custom styling
export const CustomStyling: Story = {
	args: {
		className: "shadow-lg ring-2 ring-purple-500",
		children: "Custom styled code",
	},
}

// Long code with scrolling
export const LongCodeBlock: Story = {
	args: {
		block: true,
		language: "typescript",
		children: `// This is a long code example to demonstrate horizontal scrolling
const veryLongFunctionNameThatExceedsTheWidthOfTheContainer = (parameterOne: string, parameterTwo: number, parameterThree: boolean) => {
  return \`Result: \${parameterOne}, \${parameterTwo}, \${parameterThree}\`
}`,
	},
}

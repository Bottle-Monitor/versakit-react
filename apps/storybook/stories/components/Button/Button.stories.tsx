import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@versakit/components"

const meta = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["primary", "secondary", "outline", "ghost"],
			description: "The visual style variant of the button",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "primary" },
			},
		},
		size: {
			control: { type: "select" },
			options: ["sm", "default", "lg", "icon"],
			description: "The size of the button",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "default" },
			},
		},
		loading: {
			control: "boolean",
			description: "Shows loading spinner and disables the button",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		disabled: {
			control: "boolean",
			description: "Disables the button",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		asChild: {
			control: "boolean",
			description: "Render as child component (for composition)",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		children: {
			control: "text",
			description: "The content of the button",
		},
	},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
	args: {
		children: "Button",
	},
}

// Variant stories
export const Primary: Story = {
	args: {
		variant: "primary",
		children: "Primary Button",
	},
}

export const Secondary: Story = {
	args: {
		variant: "secondary",
		children: "Secondary Button",
	},
}

export const Outline: Story = {
	args: {
		variant: "outline",
		children: "Outline Button",
	},
}

export const Ghost: Story = {
	args: {
		variant: "ghost",
		children: "Ghost Button",
	},
}

// Size stories
export const Small: Story = {
	args: {
		size: "sm",
		children: "Small Button",
	},
}

export const Large: Story = {
	args: {
		size: "lg",
		children: "Large Button",
	},
}

export const Icon: Story = {
	args: {
		size: "icon",
		children: "🚀",
	},
}

// State stories
export const Loading: Story = {
	args: {
		loading: true,
		children: "Loading Button",
	},
}

export const Disabled: Story = {
	args: {
		disabled: true,
		children: "Disabled Button",
	},
}

// All variants showcase
export const AllVariants: Story = {
	render: () => (
		<div className="flex flex-wrap gap-4">
			<Button variant="primary">Primary</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="outline">Outline</Button>
			<Button variant="ghost">Ghost</Button>
		</div>
	),
}

// All sizes showcase
export const AllSizes: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Button size="sm">Small</Button>
			<Button size="default">Default</Button>
			<Button size="lg">Large</Button>
			<Button size="icon">🎯</Button>
		</div>
	),
}

// Loading states for all variants
export const LoadingStates: Story = {
	render: () => (
		<div className="flex flex-wrap gap-4">
			<Button variant="primary" loading>
				Primary Loading
			</Button>
			<Button variant="secondary" loading>
				Secondary Loading
			</Button>
			<Button variant="outline" loading>
				Outline Loading
			</Button>
			<Button variant="ghost" loading>
				Ghost Loading
			</Button>
		</div>
	),
}

// Disabled states for all variants
export const DisabledStates: Story = {
	render: () => (
		<div className="flex flex-wrap gap-4">
			<Button variant="primary" disabled>
				Primary Disabled
			</Button>
			<Button variant="secondary" disabled>
				Secondary Disabled
			</Button>
			<Button variant="outline" disabled>
				Outline Disabled
			</Button>
			<Button variant="ghost" disabled>
				Ghost Disabled
			</Button>
		</div>
	),
}

// Interactive example with click handler
export const Interactive: Story = {
	render: () => (
		<Button onClick={() => alert("Button clicked!")} variant="primary">
			Click Me!
		</Button>
	),
}

// With custom styling
export const CustomStyling: Story = {
	args: {
		className: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
		children: "Custom Styled Button",
	},
}

// As Child example (composition pattern)
export const AsChild: Story = {
	render: () => (
		<Button asChild>
			<a href="https://example.com" target="_blank" rel="noopener noreferrer">
				Link Button
			</a>
		</Button>
	),
}

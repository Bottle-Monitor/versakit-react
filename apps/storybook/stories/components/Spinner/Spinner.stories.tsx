import type { Meta, StoryObj } from "@storybook/react"
import { Spinner } from "@versakit/components"

const meta: Meta<typeof Spinner> = {
	title: "Components/Spinner",
	component: Spinner,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["default", "simple", "gradient", "dots", "bars", "pulse", "ring", "dualRing"],
			description: "The animation style variant",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "default" },
			},
		},
		size: {
			control: { type: "select" },
			options: ["xs", "sm", "default", "lg", "xl"],
			description: "The size of the spinner",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "default" },
			},
		},
		color: {
			control: { type: "select" },
			options: ["primary", "secondary", "success", "warning", "danger", "white"],
			description: "The color theme of the spinner",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "primary" },
			},
		},
		speed: {
			control: { type: "range", min: 0.25, max: 5, step: 0.25 },
			description: "Animation speed in seconds",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "1" },
			},
		},
	},
}

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
	args: {},
}

// Variant stories
export const DefaultVariant: Story = {
	args: {
		variant: "default",
	},
}

export const Simple: Story = {
	args: {
		variant: "simple",
	},
}

export const Gradient: Story = {
	args: {
		variant: "gradient",
	},
}

export const Dots: Story = {
	args: {
		variant: "dots",
	},
}

export const Bars: Story = {
	args: {
		variant: "bars",
	},
}

export const Pulse: Story = {
	args: {
		variant: "pulse",
	},
}

export const Ring: Story = {
	args: {
		variant: "ring",
	},
}

export const DualRing: Story = {
	args: {
		variant: "dualRing",
	},
}

// Size stories
export const ExtraSmall: Story = {
	args: {
		size: "xs",
	},
}

export const Small: Story = {
	args: {
		size: "sm",
	},
}

export const Large: Story = {
	args: {
		size: "lg",
	},
}

export const ExtraLarge: Story = {
	args: {
		size: "xl",
	},
}

// Color stories
export const Primary: Story = {
	args: {
		color: "primary",
	},
}

export const Secondary: Story = {
	args: {
		color: "secondary",
	},
}

export const Success: Story = {
	args: {
		color: "success",
		variant: "ring",
	},
}

export const Warning: Story = {
	args: {
		color: "warning",
		variant: "ring",
	},
}

export const Danger: Story = {
	args: {
		color: "danger",
		variant: "ring",
	},
}

export const White: Story = {
	args: {
		color: "white",
		variant: "ring",
	},
	decorators: [
		(Story) => (
			<div className="bg-black p-8 rounded-lg">
				<Story />
			</div>
		),
	],
}

// All variants showcase
export const AllVariants: Story = {
	render: () => (
		<div className="grid grid-cols-4 gap-8">
			<div className="flex flex-col items-center gap-2">
				<Spinner variant="default" />
				<p className="text-xs text-gray-600">Default</p>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner variant="simple" />
				<p className="text-xs text-gray-600">Simple</p>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner variant="gradient" />
				<p className="text-xs text-gray-600">Gradient</p>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner variant="dots" />
				<p className="text-xs text-gray-600">Dots</p>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner variant="bars" />
				<p className="text-xs text-gray-600">Bars</p>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner variant="pulse" />
				<p className="text-xs text-gray-600">Pulse</p>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner variant="ring" />
				<p className="text-xs text-gray-600">Ring</p>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner variant="dualRing" />
				<p className="text-xs text-gray-600">Dual Ring</p>
			</div>
		</div>
	),
}

// All sizes showcase
export const AllSizes: Story = {
	render: () => (
		<div className="flex items-end gap-8">
			<div className="flex flex-col items-center gap-2">
				<Spinner size="xs" />
				<p className="text-xs text-gray-600">XS</p>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner size="sm" />
				<p className="text-xs text-gray-600">SM</p>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner size="default" />
				<p className="text-xs text-gray-600">Default</p>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner size="lg" />
				<p className="text-xs text-gray-600">LG</p>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner size="xl" />
				<p className="text-xs text-gray-600">XL</p>
			</div>
		</div>
	),
}

// All colors showcase
export const AllColors: Story = {
	render: () => (
		<div className="flex gap-8">
			<div className="flex flex-col items-center gap-2">
				<Spinner color="primary" variant="ring" />
				<p className="text-xs text-gray-600">Primary</p>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner color="secondary" variant="ring" />
				<p className="text-xs text-gray-600">Secondary</p>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner color="success" variant="ring" />
				<p className="text-xs text-gray-600">Success</p>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner color="warning" variant="ring" />
				<p className="text-xs text-gray-600">Warning</p>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner color="danger" variant="ring" />
				<p className="text-xs text-gray-600">Danger</p>
			</div>
			<div className="flex flex-col items-center gap-2 bg-black p-4 rounded">
				<Spinner color="white" variant="ring" />
				<p className="text-xs text-white">White</p>
			</div>
		</div>
	),
}

// Speed variations
export const SpeedVariations: Story = {
	render: () => (
		<div className="flex gap-8">
			<div className="flex flex-col items-center gap-2">
				<Spinner speed={0.5} />
				<p className="text-xs text-gray-600">Fast (0.5s)</p>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner speed={1} />
				<p className="text-xs text-gray-600">Normal (1s)</p>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner speed={2} />
				<p className="text-xs text-gray-600">Slow (2s)</p>
			</div>
		</div>
	),
}

// In button example
export const InButton: Story = {
	render: () => (
		<div className="flex gap-4">
			<button
				type="button"
				className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-black/90 disabled:opacity-50"
			>
				<Spinner size="sm" color="white" />
				Loading...
			</button>
			<button
				type="button"
				className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-900 rounded-md hover:bg-gray-200"
			>
				<Spinner size="sm" variant="dots" />
				Processing...
			</button>
		</div>
	),
}

// Inline with text
export const InlineWithText: Story = {
	render: () => (
		<div className="space-y-4">
			<div className="flex items-center gap-2">
				<Spinner size="sm" />
				<span className="text-sm">Loading content...</span>
			</div>
			<div className="flex items-center gap-2">
				<Spinner size="sm" variant="dots" color="success" />
				<span className="text-sm">Processing data...</span>
			</div>
			<div className="flex items-center gap-2">
				<Spinner size="sm" variant="bars" color="warning" />
				<span className="text-sm">Uploading files...</span>
			</div>
		</div>
	),
}

// Card loading
export const CardLoading: Story = {
	render: () => (
		<div className="w-80 bg-white border border-gray-200 rounded-lg shadow-sm p-8">
			<div className="flex flex-col items-center justify-center space-y-4">
				<Spinner variant="gradient" size="lg" />
				<div className="text-center">
					<p className="text-sm font-medium">Loading data...</p>
					<p className="text-xs text-gray-600 mt-1">Please wait</p>
				</div>
			</div>
		</div>
	),
}

// Full page loading
export const FullPageLoading: Story = {
	render: () => (
		<div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
			<div className="text-center">
				<Spinner size="xl" variant="ring" />
				<p className="mt-4 text-sm text-gray-600">Loading...</p>
			</div>
		</div>
	),
	parameters: {
		layout: "fullscreen",
	},
}

// Different variants with colors
export const VariantsWithColors: Story = {
	render: () => (
		<div className="grid grid-cols-3 gap-8">
			<div className="flex flex-col items-center gap-2">
				<Spinner variant="default" color="primary" size="lg" />
				<p className="text-xs text-gray-600">Default - Primary</p>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner variant="gradient" color="success" size="lg" />
				<p className="text-xs text-gray-600">Gradient - Success</p>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner variant="dots" color="warning" size="lg" />
				<p className="text-xs text-gray-600">Dots - Warning</p>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner variant="bars" color="danger" size="lg" />
				<p className="text-xs text-gray-600">Bars - Danger</p>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner variant="ring" color="success" size="lg" />
				<p className="text-xs text-gray-600">Ring - Success</p>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner variant="dualRing" color="primary" size="lg" />
				<p className="text-xs text-gray-600">Dual Ring - Primary</p>
			</div>
		</div>
	),
}

// Custom styling
export const CustomStyling: Story = {
	args: {
		variant: "ring",
		size: "lg",
		className: "text-purple-500",
	},
}

// Multiple spinners
export const MultipleSpinners: Story = {
	render: () => (
		<div className="space-y-8">
			<div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
				<div className="flex items-center gap-2">
					<Spinner size="sm" variant="dots" />
					<span className="text-sm">Task 1: Processing...</span>
				</div>
				<span className="text-xs text-gray-500">In progress</span>
			</div>
			<div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
				<div className="flex items-center gap-2">
					<Spinner size="sm" variant="bars" color="warning" />
					<span className="text-sm">Task 2: Uploading...</span>
				</div>
				<span className="text-xs text-gray-500">75%</span>
			</div>
			<div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
				<div className="flex items-center gap-2">
					<Spinner size="sm" variant="ring" color="success" />
					<span className="text-sm">Task 3: Finalizing...</span>
				</div>
				<span className="text-xs text-gray-500">Almost done</span>
			</div>
		</div>
	),
}

// Dark theme
export const DarkTheme: Story = {
	render: () => (
		<div className="bg-gray-900 p-12 rounded-lg space-y-8">
			<div className="flex gap-8 justify-center">
				<Spinner color="white" variant="default" size="lg" />
				<Spinner color="white" variant="dots" size="lg" />
				<Spinner color="white" variant="gradient" size="lg" />
				<Spinner color="white" variant="ring" size="lg" />
			</div>
		</div>
	),
}

// Accessibility example
export const WithAriaLabel: Story = {
	args: {
		variant: "ring",
		"aria-label": "Loading user data",
	},
}

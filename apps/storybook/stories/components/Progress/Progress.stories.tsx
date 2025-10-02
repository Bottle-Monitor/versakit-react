import type { Meta, StoryObj } from "@storybook/react"
import { Progress } from "@versakit/components"
import * as React from "react"

const meta: Meta<typeof Progress> = {
	title: "Components/Progress",
	component: Progress,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		value: {
			control: { type: "range", min: 0, max: 100, step: 1 },
			description: "The current progress value (0-max)",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "0" },
			},
		},
		max: {
			control: { type: "number" },
			description: "The maximum progress value",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "100" },
			},
		},
		variant: {
			control: { type: "select" },
			options: ["primary", "secondary", "success", "warning", "danger"],
			description: "The visual style variant of the progress bar",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "primary" },
			},
		},
		size: {
			control: { type: "select" },
			options: ["sm", "default", "lg"],
			description: "The size of the progress bar",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "default" },
			},
		},
		showValue: {
			control: "boolean",
			description: "Whether to display the percentage value",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		animated: {
			control: "boolean",
			description: "Enable smooth transitions when value changes",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
			},
		},
	},
	decorators: [
		(Story) => (
			<div className="w-96">
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
	args: {
		value: 50,
	},
}

// Variant stories
export const Primary: Story = {
	args: {
		variant: "primary",
		value: 60,
	},
}

export const Secondary: Story = {
	args: {
		variant: "secondary",
		value: 60,
	},
}

export const Success: Story = {
	args: {
		variant: "success",
		value: 100,
		showValue: true,
	},
}

export const Warning: Story = {
	args: {
		variant: "warning",
		value: 60,
		showValue: true,
	},
}

export const Danger: Story = {
	args: {
		variant: "danger",
		value: 30,
		showValue: true,
	},
}

// Size stories
export const Small: Story = {
	args: {
		size: "sm",
		value: 50,
	},
}

export const Large: Story = {
	args: {
		size: "lg",
		value: 50,
	},
}

// With value display
export const WithValue: Story = {
	args: {
		value: 75,
		showValue: true,
	},
}

// Different progress levels
export const ProgressLevels: Story = {
	render: () => (
		<div className="space-y-6">
			<div>
				<p className="text-sm text-gray-600 mb-2">Empty (0%)</p>
				<Progress value={0} showValue />
			</div>
			<div>
				<p className="text-sm text-gray-600 mb-2">Quarter (25%)</p>
				<Progress value={25} showValue />
			</div>
			<div>
				<p className="text-sm text-gray-600 mb-2">Half (50%)</p>
				<Progress value={50} showValue />
			</div>
			<div>
				<p className="text-sm text-gray-600 mb-2">Three Quarters (75%)</p>
				<Progress value={75} showValue />
			</div>
			<div>
				<p className="text-sm text-gray-600 mb-2">Complete (100%)</p>
				<Progress value={100} showValue variant="success" />
			</div>
		</div>
	),
}

// All variants showcase
export const AllVariants: Story = {
	render: () => (
		<div className="space-y-4">
			<div>
				<p className="text-sm text-gray-600 mb-2">Primary</p>
				<Progress variant="primary" value={60} />
			</div>
			<div>
				<p className="text-sm text-gray-600 mb-2">Secondary</p>
				<Progress variant="secondary" value={60} />
			</div>
			<div>
				<p className="text-sm text-gray-600 mb-2">Success</p>
				<Progress variant="success" value={60} />
			</div>
			<div>
				<p className="text-sm text-gray-600 mb-2">Warning</p>
				<Progress variant="warning" value={60} />
			</div>
			<div>
				<p className="text-sm text-gray-600 mb-2">Danger</p>
				<Progress variant="danger" value={60} />
			</div>
		</div>
	),
}

// All sizes showcase
export const AllSizes: Story = {
	render: () => (
		<div className="space-y-4">
			<div>
				<p className="text-sm text-gray-600 mb-2">Small</p>
				<Progress size="sm" value={60} />
			</div>
			<div>
				<p className="text-sm text-gray-600 mb-2">Default</p>
				<Progress size="default" value={60} />
			</div>
			<div>
				<p className="text-sm text-gray-600 mb-2">Large</p>
				<Progress size="lg" value={60} />
			</div>
		</div>
	),
}

// Animated progress example
export const AnimatedProgress: Story = {
	render: () => {
		const [progress, setProgress] = React.useState(0)

		React.useEffect(() => {
			const timer = setInterval(() => {
				setProgress((prev) => {
					if (prev >= 100) {
						return 0
					}
					return prev + 10
				})
			}, 500)

			return () => clearInterval(timer)
		}, [])

		return <Progress value={progress} showValue />
	},
}

// Upload simulation
export const UploadSimulation: Story = {
	render: () => {
		const [progress, setProgress] = React.useState(0)
		const [status, setStatus] = React.useState<"uploading" | "success" | "error">("uploading")

		React.useEffect(() => {
			if (progress >= 100) {
				setStatus("success")
				return
			}

			const timer = setInterval(() => {
				setProgress((prev) => Math.min(prev + Math.random() * 15, 100))
			}, 300)

			return () => clearInterval(timer)
		}, [progress])

		const variant = {
			uploading: "primary",
			success: "success",
			error: "danger",
		}[status] as "primary" | "success" | "danger"

		return (
			<div className="space-y-2">
				<p className="text-sm font-medium">
					{status === "uploading" && "Uploading..."}
					{status === "success" && "Upload Complete!"}
					{status === "error" && "Upload Failed"}
				</p>
				<Progress value={progress} variant={variant} showValue />
			</div>
		)
	},
}

// Multi-step form progress
export const MultiStepForm: Story = {
	render: () => {
		const [step, setStep] = React.useState(1)
		const totalSteps = 4
		const progress = (step / totalSteps) * 100

		return (
			<div className="space-y-4">
				<div className="flex justify-between items-center">
					<p className="text-sm font-medium">
						Step {step} of {totalSteps}
					</p>
					<p className="text-sm text-gray-600">{Math.round(progress)}% Complete</p>
				</div>
				<Progress value={progress} variant="primary" />
				<div className="flex gap-2 justify-end">
					<button
						type="button"
						onClick={() => setStep(Math.max(1, step - 1))}
						disabled={step === 1}
						className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded"
					>
						Previous
					</button>
					<button
						type="button"
						onClick={() => setStep(Math.min(totalSteps, step + 1))}
						disabled={step === totalSteps}
						className="px-4 py-2 text-sm bg-black text-white hover:bg-black/90 disabled:opacity-50 disabled:cursor-not-allowed rounded"
					>
						Next
					</button>
				</div>
			</div>
		)
	},
}

// Custom max value
export const CustomMaxValue: Story = {
	render: () => (
		<div className="space-y-4">
			<div>
				<p className="text-sm text-gray-600 mb-2">50 out of 200 (25%)</p>
				<Progress value={50} max={200} showValue />
			</div>
			<div>
				<p className="text-sm text-gray-600 mb-2">3 out of 5 steps (60%)</p>
				<Progress value={3} max={5} showValue />
			</div>
		</div>
	),
}

// Custom styling
export const CustomStyling: Story = {
	args: {
		value: 75,
		className: "bg-blue-100",
		indicatorClassName: "bg-gradient-to-r from-blue-500 to-purple-500",
		showValue: true,
	},
}

// Without animation
export const WithoutAnimation: Story = {
	render: () => {
		const [progress, setProgress] = React.useState(0)

		React.useEffect(() => {
			const timer = setInterval(() => {
				setProgress((prev) => {
					if (prev >= 100) return 0
					return prev + 10
				})
			}, 500)

			return () => clearInterval(timer)
		}, [])

		return (
			<div className="space-y-4">
				<div>
					<p className="text-sm text-gray-600 mb-2">With Animation (default)</p>
					<Progress value={progress} showValue animated />
				</div>
				<div>
					<p className="text-sm text-gray-600 mb-2">Without Animation</p>
					<Progress value={progress} showValue animated={false} />
				</div>
			</div>
		)
	},
}

// Different states for tasks
export const TaskStates: Story = {
	render: () => (
		<div className="space-y-4">
			<div>
				<div className="flex justify-between items-center mb-2">
					<p className="text-sm font-medium">Starting...</p>
					<p className="text-xs text-gray-500">Not started</p>
				</div>
				<Progress value={0} variant="secondary" />
			</div>
			<div>
				<div className="flex justify-between items-center mb-2">
					<p className="text-sm font-medium">In Progress</p>
					<p className="text-xs text-gray-500">45%</p>
				</div>
				<Progress value={45} variant="primary" showValue />
			</div>
			<div>
				<div className="flex justify-between items-center mb-2">
					<p className="text-sm font-medium">Almost There</p>
					<p className="text-xs text-gray-500">85%</p>
				</div>
				<Progress value={85} variant="warning" showValue />
			</div>
			<div>
				<div className="flex justify-between items-center mb-2">
					<p className="text-sm font-medium">Completed!</p>
					<p className="text-xs text-gray-500">100%</p>
				</div>
				<Progress value={100} variant="success" showValue />
			</div>
			<div>
				<div className="flex justify-between items-center mb-2">
					<p className="text-sm font-medium">Failed</p>
					<p className="text-xs text-gray-500">Error occurred</p>
				</div>
				<Progress value={35} variant="danger" />
			</div>
		</div>
	),
}

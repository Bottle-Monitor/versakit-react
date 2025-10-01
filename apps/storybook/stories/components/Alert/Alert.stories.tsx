import type { Meta, StoryObj } from "@storybook/react"
import { Alert, AlertDescription, AlertTitle } from "@versakit/components"
import { AlertCircle, AlertTriangle, CheckCircle2, Info, Terminal, X } from "lucide-react"
import * as React from "react"

const meta = {
	title: "Components/Alert",
	component: Alert,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["default", "info", "success", "warning", "destructive"],
			description: "The visual style variant of the alert",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "default" },
			},
		},
		children: {
			control: "text",
			description: "The content of the alert",
		},
	},
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
	render: () => (
		<Alert>
			<AlertTitle>提示</AlertTitle>
			<AlertDescription>这是一条默认的提示信息。</AlertDescription>
		</Alert>
	),
}

// Variant stories
export const InfoVariant: Story = {
	render: () => (
		<Alert variant="info">
			<Info className="h-4 w-4" />
			<AlertTitle>信息</AlertTitle>
			<AlertDescription>这是一条信息提示，用于向用户展示一般性信息。</AlertDescription>
		</Alert>
	),
}

export const SuccessVariant: Story = {
	render: () => (
		<Alert variant="success">
			<CheckCircle2 className="h-4 w-4" />
			<AlertTitle>成功</AlertTitle>
			<AlertDescription>你的操作已成功完成！</AlertDescription>
		</Alert>
	),
}

export const WarningVariant: Story = {
	render: () => (
		<Alert variant="warning">
			<AlertTriangle className="h-4 w-4" />
			<AlertTitle>警告</AlertTitle>
			<AlertDescription>请注意这个警告信息，可能需要你的关注。</AlertDescription>
		</Alert>
	),
}

export const DestructiveVariant: Story = {
	render: () => (
		<Alert variant="destructive">
			<AlertCircle className="h-4 w-4" />
			<AlertTitle>错误</AlertTitle>
			<AlertDescription>发生了一个错误，请稍后重试。</AlertDescription>
		</Alert>
	),
}

// All variants showcase
export const AllVariants: Story = {
	render: () => (
		<div className="flex flex-col gap-4 w-[500px]">
			<Alert>
				<Terminal className="h-4 w-4" />
				<AlertTitle>默认</AlertTitle>
				<AlertDescription>默认样式的提示框。</AlertDescription>
			</Alert>

			<Alert variant="info">
				<Info className="h-4 w-4" />
				<AlertTitle>信息</AlertTitle>
				<AlertDescription>信息提示框用于一般性信息。</AlertDescription>
			</Alert>

			<Alert variant="success">
				<CheckCircle2 className="h-4 w-4" />
				<AlertTitle>成功</AlertTitle>
				<AlertDescription>成功提示框用于成功操作。</AlertDescription>
			</Alert>

			<Alert variant="warning">
				<AlertTriangle className="h-4 w-4" />
				<AlertTitle>警告</AlertTitle>
				<AlertDescription>警告提示框用于需要注意的信息。</AlertDescription>
			</Alert>

			<Alert variant="destructive">
				<AlertCircle className="h-4 w-4" />
				<AlertTitle>错误</AlertTitle>
				<AlertDescription>错误提示框用于错误和危险操作。</AlertDescription>
			</Alert>
		</div>
	),
}

// Without icon
export const WithoutIcon: Story = {
	render: () => (
		<div className="flex flex-col gap-4 w-[500px]">
			<Alert variant="info">
				<AlertTitle>无图标信息</AlertTitle>
				<AlertDescription>这是一个没有图标的信息提示框。</AlertDescription>
			</Alert>

			<Alert variant="success">
				<AlertTitle>无图标成功</AlertTitle>
				<AlertDescription>这是一个没有图标的成功提示框。</AlertDescription>
			</Alert>
		</div>
	),
}

// Description only
export const DescriptionOnly: Story = {
	render: () => (
		<div className="flex flex-col gap-4 w-[500px]">
			<Alert variant="info">
				<Info className="h-4 w-4" />
				<AlertDescription>这是一个只有描述的提示信息，没有标题。</AlertDescription>
			</Alert>

			<Alert variant="success">
				<CheckCircle2 className="h-4 w-4" />
				<AlertDescription>操作成功完成！</AlertDescription>
			</Alert>
		</div>
	),
}

// Title only
export const TitleOnly: Story = {
	render: () => (
		<div className="flex flex-col gap-4 w-[500px]">
			<Alert variant="warning">
				<AlertTriangle className="h-4 w-4" />
				<AlertTitle>重要警告</AlertTitle>
			</Alert>

			<Alert variant="destructive">
				<AlertCircle className="h-4 w-4" />
				<AlertTitle>系统错误</AlertTitle>
			</Alert>
		</div>
	),
}

// With custom styling
export const CustomStyling: Story = {
	render: () => (
		<Alert className="border-2 border-purple-500" variant="info">
			<Info className="h-4 w-4" />
			<AlertTitle className="text-purple-700">自定义样式</AlertTitle>
			<AlertDescription className="text-purple-600">这是一个带有自定义样式的提示框。</AlertDescription>
		</Alert>
	),
}

// Long content
export const LongContent: Story = {
	render: () => (
		<div className="w-[600px]">
			<Alert variant="info">
				<Info className="h-4 w-4" />
				<AlertTitle>详细信息</AlertTitle>
				<AlertDescription>
					这是一段很长的描述文本。它可能包含多个段落和详细的信息，用于向用户解释复杂的情况或提供详细的指导。Alert
					组件能够很好地处理长文本内容，保持良好的可读性和布局。无论内容有多长，组件都能自适应并保持美观的外观。
				</AlertDescription>
			</Alert>
		</div>
	),
}

// Interactive example
export const Interactive: Story = {
	render: () => {
		const [show, setShow] = React.useState(true)

		if (!show) {
			return (
				<button
					type="button"
					onClick={() => setShow(true)}
					className="px-4 py-2 bg-black text-white rounded-md hover:bg-black/90"
				>
					显示提示
				</button>
			)
		}

		return (
			<Alert variant="success">
				<CheckCircle2 className="h-4 w-4" />
				<AlertTitle>成功</AlertTitle>
				<AlertDescription>这是一个可以关闭的提示框。</AlertDescription>
				<button
					type="button"
					onClick={() => setShow(false)}
					className="absolute top-3 right-3 rounded-md p-1 hover:bg-black/5"
					aria-label="关闭"
				>
					<X className="h-4 w-4" />
				</button>
			</Alert>
		)
	},
}

// Multiple alerts
export const MultipleAlerts: Story = {
	render: () => (
		<div className="flex flex-col gap-3 w-[500px]">
			<Alert variant="info">
				<Info className="h-4 w-4" />
				<AlertDescription>正在加载数据...</AlertDescription>
			</Alert>

			<Alert variant="warning">
				<AlertTriangle className="h-4 w-4" />
				<AlertDescription>某些功能可能不可用</AlertDescription>
			</Alert>

			<Alert variant="success">
				<CheckCircle2 className="h-4 w-4" />
				<AlertDescription>所有系统正常运行</AlertDescription>
			</Alert>
		</div>
	),
}

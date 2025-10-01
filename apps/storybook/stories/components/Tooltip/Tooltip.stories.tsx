import type { Meta, StoryObj } from "@storybook/react"
import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@versakit/components"
import { AlertCircle, Bell, HelpCircle, Info, Settings, User } from "lucide-react"
import * as React from "react"

const meta: Meta<typeof Tooltip> = {
	title: "Components/Tooltip",
	component: Tooltip,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<TooltipProvider>
				<Story />
			</TooltipProvider>
		),
	],
	argTypes: {
		open: {
			control: { type: "boolean" },
			description: "The controlled open state of the tooltip",
			table: {
				type: { summary: "boolean" },
			},
		},
		defaultOpen: {
			control: { type: "boolean" },
			description: "The open state of the tooltip when it is initially rendered",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		delayDuration: {
			control: { type: "number" },
			description: "The duration from when the mouse enters the trigger until the tooltip opens",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "700" },
			},
		},
	},
}

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
	render: () => (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button variant="outline">悬停查看提示</Button>
			</TooltipTrigger>
			<TooltipContent>这是一个提示信息</TooltipContent>
		</Tooltip>
	),
}

// All Variants
export const Variants: Story = {
	render: () => (
		<div className="flex gap-4 flex-wrap items-center justify-center">
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline">默认</Button>
				</TooltipTrigger>
				<TooltipContent variant="default">默认样式提示</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline">浅色</Button>
				</TooltipTrigger>
				<TooltipContent variant="light">浅色样式提示</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="primary">主色</Button>
				</TooltipTrigger>
				<TooltipContent variant="primary">主色样式提示</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline" className="text-green-600">
						成功
					</Button>
				</TooltipTrigger>
				<TooltipContent variant="success">成功样式提示</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline" className="text-yellow-600">
						警告
					</Button>
				</TooltipTrigger>
				<TooltipContent variant="warning">警告样式提示</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline" className="text-red-600">
						危险
					</Button>
				</TooltipTrigger>
				<TooltipContent variant="danger">危险样式提示</TooltipContent>
			</Tooltip>
		</div>
	),
}

// Positioning
export const Positioning: Story = {
	render: () => (
		<div className="flex gap-8 items-center justify-center">
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline">上方</Button>
				</TooltipTrigger>
				<TooltipContent side="top">上方提示</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline">右侧</Button>
				</TooltipTrigger>
				<TooltipContent side="right">右侧提示</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline">下方</Button>
				</TooltipTrigger>
				<TooltipContent side="bottom">下方提示</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline">左侧</Button>
				</TooltipTrigger>
				<TooltipContent side="left">左侧提示</TooltipContent>
			</Tooltip>
		</div>
	),
}

// Without Arrow
export const WithoutArrow: Story = {
	render: () => (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button variant="outline">无箭头提示</Button>
			</TooltipTrigger>
			<TooltipContent showArrow={false}>这个提示框没有箭头</TooltipContent>
		</Tooltip>
	),
}

// With Icons
export const WithIcons: Story = {
	render: () => (
		<div className="flex gap-4 items-center">
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="ghost" size="icon">
						<Info className="h-5 w-5" />
					</Button>
				</TooltipTrigger>
				<TooltipContent>查看信息</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="ghost" size="icon">
						<HelpCircle className="h-5 w-5" />
					</Button>
				</TooltipTrigger>
				<TooltipContent>帮助中心</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="ghost" size="icon">
						<Settings className="h-5 w-5" />
					</Button>
				</TooltipTrigger>
				<TooltipContent>设置</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="ghost" size="icon">
						<User className="h-5 w-5" />
					</Button>
				</TooltipTrigger>
				<TooltipContent>个人中心</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="ghost" size="icon">
						<Bell className="h-5 w-5" />
					</Button>
				</TooltipTrigger>
				<TooltipContent>通知</TooltipContent>
			</Tooltip>
		</div>
	),
}

// Rich Content
export const RichContent: Story = {
	render: () => (
		<div className="flex gap-4">
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline">用户信息</Button>
				</TooltipTrigger>
				<TooltipContent className="max-w-xs">
					<div className="space-y-2">
						<p className="font-semibold">张三</p>
						<p className="text-xs opacity-90">zhangsan@example.com</p>
						<p className="text-xs opacity-80">上次登录：2024-01-15</p>
					</div>
				</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline">统计数据</Button>
				</TooltipTrigger>
				<TooltipContent variant="light" className="max-w-xs">
					<div className="space-y-1">
						<div className="flex justify-between gap-4 text-xs">
							<span>访问量：</span>
							<span className="font-semibold">1,234</span>
						</div>
						<div className="flex justify-between gap-4 text-xs">
							<span>用户数：</span>
							<span className="font-semibold">567</span>
						</div>
						<div className="flex justify-between gap-4 text-xs">
							<span>转化率：</span>
							<span className="font-semibold">23.5%</span>
						</div>
					</div>
				</TooltipContent>
			</Tooltip>
		</div>
	),
}

// Controlled
export const Controlled: Story = {
	render: () => {
		const [open, setOpen] = React.useState(false)

		return (
			<div className="space-y-4">
				<div className="flex gap-2">
					<Button onClick={() => setOpen(true)} variant="outline" size="sm">
						打开
					</Button>
					<Button onClick={() => setOpen(false)} variant="outline" size="sm">
						关闭
					</Button>
					<Button onClick={() => setOpen(!open)} variant="outline" size="sm">
						切换
					</Button>
				</div>

				<Tooltip open={open} onOpenChange={setOpen}>
					<TooltipTrigger asChild>
						<Button variant="outline">受控提示框</Button>
					</TooltipTrigger>
					<TooltipContent>当前状态: {open ? "打开" : "关闭"}</TooltipContent>
				</Tooltip>
			</div>
		)
	},
}

// Help Text
export const HelpText: Story = {
	render: () => (
		<div className="space-y-4 max-w-md">
			<div className="flex items-center gap-2">
				<label htmlFor="email" className="text-sm font-medium">
					邮箱地址
				</label>
				<Tooltip>
					<TooltipTrigger asChild>
						<button type="button" className="text-gray-400 hover:text-gray-600">
							<HelpCircle className="h-4 w-4" />
						</button>
					</TooltipTrigger>
					<TooltipContent className="max-w-xs">我们会将重要通知发送到此邮箱</TooltipContent>
				</Tooltip>
			</div>
			<input
				id="email"
				type="email"
				placeholder="输入邮箱"
				className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>

			<div className="flex items-center gap-2">
				<label htmlFor="api-key" className="text-sm font-medium">
					API 密钥
				</label>
				<Tooltip>
					<TooltipTrigger asChild>
						<button type="button" className="text-gray-400 hover:text-gray-600">
							<Info className="h-4 w-4" />
						</button>
					</TooltipTrigger>
					<TooltipContent variant="light" className="max-w-xs">
						用于验证您的应用程序身份的唯一标识符。请妥善保管，不要泄露给他人。
					</TooltipContent>
				</Tooltip>
			</div>
			<input
				id="api-key"
				type="text"
				placeholder="输入 API 密钥"
				className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
		</div>
	),
}

// Status Indicators
export const StatusIndicators: Story = {
	render: () => (
		<div className="space-y-3">
			<Tooltip>
				<TooltipTrigger asChild>
					<div className="flex items-center gap-2 cursor-pointer">
						<div className="h-2 w-2 bg-green-500 rounded-full" />
						<span className="text-sm">在线</span>
					</div>
				</TooltipTrigger>
				<TooltipContent variant="success">系统运行正常</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger asChild>
					<div className="flex items-center gap-2 cursor-pointer">
						<div className="h-2 w-2 bg-yellow-500 rounded-full" />
						<span className="text-sm">警告</span>
					</div>
				</TooltipTrigger>
				<TooltipContent variant="warning">部分功能受限</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger asChild>
					<div className="flex items-center gap-2 cursor-pointer">
						<div className="h-2 w-2 bg-red-500 rounded-full" />
						<span className="text-sm">离线</span>
					</div>
				</TooltipTrigger>
				<TooltipContent variant="danger">连接已断开</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger asChild>
					<div className="flex items-center gap-2 cursor-pointer">
						<div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse" />
						<span className="text-sm">同步中</span>
					</div>
				</TooltipTrigger>
				<TooltipContent variant="primary">正在同步数据...</TooltipContent>
			</Tooltip>
		</div>
	),
}

// Interactive Elements
export const InteractiveElements: Story = {
	render: () => (
		<div className="flex gap-3 flex-wrap">
			<Tooltip>
				<TooltipTrigger asChild>
					<button
						type="button"
						className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
					>
						保存
					</button>
				</TooltipTrigger>
				<TooltipContent>保存当前更改</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger asChild>
					<button
						type="button"
						className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
					>
						取消
					</button>
				</TooltipTrigger>
				<TooltipContent>放弃所有更改</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger asChild>
					<button type="button" className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors">
						<AlertCircle className="h-5 w-5" />
					</button>
				</TooltipTrigger>
				<TooltipContent variant="danger">删除此项</TooltipContent>
			</Tooltip>
		</div>
	),
}

// Custom Delay
export const CustomDelay: Story = {
	render: () => (
		<TooltipProvider delayDuration={0}>
			<div className="flex gap-4">
				<Tooltip>
					<TooltipTrigger asChild>
						<Button variant="outline">无延迟</Button>
					</TooltipTrigger>
					<TooltipContent>立即显示的提示</TooltipContent>
				</Tooltip>

				<Tooltip delayDuration={1000}>
					<TooltipTrigger asChild>
						<Button variant="outline">长延迟</Button>
					</TooltipTrigger>
					<TooltipContent>1秒后显示的提示</TooltipContent>
				</Tooltip>
			</div>
		</TooltipProvider>
	),
}

// Disabled Element
export const DisabledElement: Story = {
	render: () => (
		<Tooltip>
			<TooltipTrigger asChild>
				<span className="inline-block">
					<Button variant="outline" disabled>
						禁用按钮
					</Button>
				</span>
			</TooltipTrigger>
			<TooltipContent>此功能暂时不可用</TooltipContent>
		</Tooltip>
	),
}

// Long Text
export const LongText: Story = {
	render: () => (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button variant="outline">查看详细说明</Button>
			</TooltipTrigger>
			<TooltipContent className="max-w-sm">
				这是一段较长的提示文本，用于演示 Tooltip 组件如何处理多行文本内容。 您可以通过 className
				属性来控制提示框的最大宽度和其他样式。
			</TooltipContent>
		</Tooltip>
	),
}

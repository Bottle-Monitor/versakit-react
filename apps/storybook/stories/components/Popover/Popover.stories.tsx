import type { Meta, StoryObj } from "@storybook/react"
import { Button, Popover, PopoverClose, PopoverContent, PopoverTrigger } from "@versakit/components"
import { Calendar, Info, Settings, User } from "lucide-react"
import * as React from "react"

const meta = {
	title: "Components/Popover",
	component: Popover,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		open: {
			control: { type: "boolean" },
			description: "The controlled open state of the popover",
			table: {
				type: { summary: "boolean" },
			},
		},
		defaultOpen: {
			control: { type: "boolean" },
			description: "The open state of the popover when it is initially rendered",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		modal: {
			control: { type: "boolean" },
			description: "The modality of the popover",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
	},
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
	render: () => (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline">打开 Popover</Button>
			</PopoverTrigger>
			<PopoverContent>
				<div className="space-y-2">
					<h4 className="font-medium leading-none">Popover 标题</h4>
					<p className="text-sm text-gray-500">这是 Popover 的内容区域，可以放置任何内容。</p>
				</div>
			</PopoverContent>
		</Popover>
	),
}

// With Arrow
export const WithArrow: Story = {
	render: () => (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline">带箭头的 Popover</Button>
			</PopoverTrigger>
			<PopoverContent showArrow>
				<div className="space-y-2">
					<h4 className="font-medium leading-none">带箭头</h4>
					<p className="text-sm text-gray-500">这个 Popover 有一个指向触发器的箭头。</p>
				</div>
			</PopoverContent>
		</Popover>
	),
}

// With Close Button
export const WithCloseButton: Story = {
	render: () => (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline">带关闭按钮</Button>
			</PopoverTrigger>
			<PopoverContent>
				<div className="space-y-2">
					<h4 className="font-medium leading-none">可关闭的 Popover</h4>
					<p className="text-sm text-gray-500">点击右上角的关闭按钮来关闭此 Popover。</p>
				</div>
				<PopoverClose />
			</PopoverContent>
		</Popover>
	),
}

// Different Positions
export const DifferentPositions: Story = {
	render: () => (
		<div className="flex flex-col gap-8 items-center">
			<div className="flex gap-4">
				<Popover>
					<PopoverTrigger asChild>
						<Button variant="outline">顶部</Button>
					</PopoverTrigger>
					<PopoverContent side="top">
						<p className="text-sm">Popover 在顶部</p>
					</PopoverContent>
				</Popover>

				<Popover>
					<PopoverTrigger asChild>
						<Button variant="outline">底部</Button>
					</PopoverTrigger>
					<PopoverContent side="bottom">
						<p className="text-sm">Popover 在底部</p>
					</PopoverContent>
				</Popover>

				<Popover>
					<PopoverTrigger asChild>
						<Button variant="outline">左侧</Button>
					</PopoverTrigger>
					<PopoverContent side="left">
						<p className="text-sm">Popover 在左侧</p>
					</PopoverContent>
				</Popover>

				<Popover>
					<PopoverTrigger asChild>
						<Button variant="outline">右侧</Button>
					</PopoverTrigger>
					<PopoverContent side="right">
						<p className="text-sm">Popover 在右侧</p>
					</PopoverContent>
				</Popover>
			</div>
		</div>
	),
}

// Different Alignments
export const DifferentAlignments: Story = {
	render: () => (
		<div className="flex gap-4">
			<Popover>
				<PopoverTrigger asChild>
					<Button variant="outline">开始对齐</Button>
				</PopoverTrigger>
				<PopoverContent align="start">
					<p className="text-sm">对齐到开始位置</p>
				</PopoverContent>
			</Popover>

			<Popover>
				<PopoverTrigger asChild>
					<Button variant="outline">居中对齐</Button>
				</PopoverTrigger>
				<PopoverContent align="center">
					<p className="text-sm">对齐到中心位置</p>
				</PopoverContent>
			</Popover>

			<Popover>
				<PopoverTrigger asChild>
					<Button variant="outline">结束对齐</Button>
				</PopoverTrigger>
				<PopoverContent align="end">
					<p className="text-sm">对齐到结束位置</p>
				</PopoverContent>
			</Popover>
		</div>
	),
}

// User Profile Example
export const UserProfile: Story = {
	render: () => (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="ghost" size="icon">
					<User className="h-5 w-5" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-80">
				<div className="flex gap-4">
					<div className="rounded-full bg-gray-200 h-12 w-12 flex items-center justify-center">
						<User className="h-6 w-6 text-gray-600" />
					</div>
					<div className="space-y-1 flex-1">
						<h4 className="font-semibold text-sm">张三</h4>
						<p className="text-sm text-gray-500">zhangsan@example.com</p>
						<div className="flex gap-2 pt-2">
							<Button size="sm" variant="outline" className="flex-1">
								查看资料
							</Button>
							<Button size="sm" variant="outline" className="flex-1">
								退出登录
							</Button>
						</div>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	),
}

// Settings Menu Example
export const SettingsMenu: Story = {
	render: () => (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline">
					<Settings className="h-4 w-4 mr-2" />
					设置
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-64">
				<div className="space-y-3">
					<h4 className="font-medium text-sm">快速设置</h4>
					<div className="space-y-2">
						<div className="flex items-center justify-between">
							<span className="text-sm">通知</span>
							<input type="checkbox" defaultChecked className="rounded" />
						</div>
						<div className="flex items-center justify-between">
							<span className="text-sm">自动保存</span>
							<input type="checkbox" className="rounded" />
						</div>
						<div className="flex items-center justify-between">
							<span className="text-sm">深色模式</span>
							<input type="checkbox" className="rounded" />
						</div>
					</div>
					<div className="pt-2 border-t">
						<Button variant="ghost" size="sm" className="w-full justify-start text-sm">
							高级设置
						</Button>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	),
}

// Calendar Picker Example
export const CalendarPicker: Story = {
	render: () => {
		const [date, setDate] = React.useState<Date | undefined>(new Date())

		return (
			<Popover>
				<PopoverTrigger asChild>
					<Button variant="outline">
						<Calendar className="h-4 w-4 mr-2" />
						{date ? date.toLocaleDateString("zh-CN") : "选择日期"}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0">
					<div className="p-4 space-y-4">
						<div className="flex items-center justify-between">
							<h4 className="font-medium text-sm">选择日期</h4>
							<PopoverClose />
						</div>
						<div className="grid grid-cols-7 gap-2 text-center text-sm">
							{["日", "一", "二", "三", "四", "五", "六"].map((day) => (
								<div key={day} className="font-medium text-gray-500">
									{day}
								</div>
							))}
							{Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
								<button
									key={day}
									type="button"
									onClick={() => {
										const newDate = new Date()
										newDate.setDate(day)
										setDate(newDate)
									}}
									className={`p-2 hover:bg-gray-100 rounded ${
										date?.getDate() === day ? "bg-black text-white hover:bg-black/90" : ""
									}`}
								>
									{day}
								</button>
							))}
						</div>
					</div>
				</PopoverContent>
			</Popover>
		)
	},
}

// Info Tooltip Example
export const InfoTooltip: Story = {
	render: () => (
		<div className="flex items-center gap-2">
			<span className="text-sm">账户余额</span>
			<Popover>
				<PopoverTrigger asChild>
					<Button variant="ghost" size="icon" className="h-5 w-5">
						<Info className="h-4 w-4" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-64" showArrow>
					<div className="space-y-2">
						<h4 className="font-medium text-sm">账户余额说明</h4>
						<p className="text-sm text-gray-500">
							账户余额是您当前可用的资金总额。此金额会随着您的充值和消费实时更新。
						</p>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	),
}

// Controlled Example
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

				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<Button variant="outline">受控 Popover</Button>
					</PopoverTrigger>
					<PopoverContent>
						<div className="space-y-2">
							<h4 className="font-medium leading-none">受控状态</h4>
							<p className="text-sm text-gray-500">当前状态: {open ? "打开" : "关闭"}</p>
							<p className="text-sm text-gray-500">您可以通过外部按钮控制此 Popover 的开关状态。</p>
						</div>
						<PopoverClose />
					</PopoverContent>
				</Popover>
			</div>
		)
	},
}

// Custom Styling
export const CustomStyling: Story = {
	render: () => (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline">自定义样式</Button>
			</PopoverTrigger>
			<PopoverContent className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
				<div className="space-y-2">
					<h4 className="font-medium leading-none text-purple-900">自定义样式</h4>
					<p className="text-sm text-purple-700">这个 Popover 使用了自定义的渐变背景和边框颜色。</p>
				</div>
				<PopoverClose className="text-purple-700" />
			</PopoverContent>
		</Popover>
	),
}

// Multiple Popovers
export const MultiplePopovers: Story = {
	render: () => (
		<div className="flex gap-4">
			<Popover>
				<PopoverTrigger asChild>
					<Button variant="outline">Popover 1</Button>
				</PopoverTrigger>
				<PopoverContent>
					<p className="text-sm">这是第一个 Popover</p>
				</PopoverContent>
			</Popover>

			<Popover>
				<PopoverTrigger asChild>
					<Button variant="outline">Popover 2</Button>
				</PopoverTrigger>
				<PopoverContent>
					<p className="text-sm">这是第二个 Popover</p>
				</PopoverContent>
			</Popover>

			<Popover>
				<PopoverTrigger asChild>
					<Button variant="outline">Popover 3</Button>
				</PopoverTrigger>
				<PopoverContent>
					<p className="text-sm">这是第三个 Popover</p>
				</PopoverContent>
			</Popover>
		</div>
	),
}

// Long Content
export const LongContent: Story = {
	render: () => (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline">长内容 Popover</Button>
			</PopoverTrigger>
			<PopoverContent className="w-96">
				<div className="space-y-4">
					<h4 className="font-medium">长内容示例</h4>
					<div className="space-y-2 max-h-64 overflow-y-auto">
						<p className="text-sm text-gray-500">
							这是一个包含大量内容的 Popover 示例。当内容超过一定高度时，会自动显示滚动条。
						</p>
						<p className="text-sm text-gray-500">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
						<p className="text-sm text-gray-500">
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat.
						</p>
						<p className="text-sm text-gray-500">
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						</p>
						<p className="text-sm text-gray-500">
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
							laborum.
						</p>
					</div>
				</div>
				<PopoverClose />
			</PopoverContent>
		</Popover>
	),
}

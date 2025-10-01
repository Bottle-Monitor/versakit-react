import type { Meta, StoryObj } from "@storybook/react"
import {
	Button,
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@versakit/components"
import { Bell, Menu, Settings, ShoppingCart, User } from "lucide-react"
import * as React from "react"

const meta = {
	title: "Components/Drawer",
	component: Drawer,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		open: {
			control: { type: "boolean" },
			description: "The controlled open state of the drawer",
			table: {
				type: { summary: "boolean" },
			},
		},
		defaultOpen: {
			control: { type: "boolean" },
			description: "The open state of the drawer when it is initially rendered",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		modal: {
			control: { type: "boolean" },
			description: "The modality of the drawer",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
			},
		},
	},
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

// Default story (Right side)
export const Default: Story = {
	render: () => (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="outline">打开抽屉</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>抽屉标题</DrawerTitle>
					<DrawerDescription>这是一段描述文本</DrawerDescription>
				</DrawerHeader>
				<div className="p-6">
					<p className="text-sm text-gray-600">这是抽屉的主要内容区域，可以放置任何内容。</p>
				</div>
				<DrawerFooter>
					<Button variant="primary">确认</Button>
					<DrawerClose asChild>
						<Button variant="outline">取消</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	),
}

// Right Side Drawer
export const RightSide: Story = {
	render: () => (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="outline">右侧抽屉</Button>
			</DrawerTrigger>
			<DrawerContent side="right">
				<DrawerClose />
				<DrawerHeader>
					<DrawerTitle>右侧抽屉</DrawerTitle>
					<DrawerDescription>从右侧滑入的抽屉</DrawerDescription>
				</DrawerHeader>
				<div className="p-6">
					<p className="text-sm text-gray-600">这是从屏幕右侧滑入的抽屉，适合用于详情页面或表单。</p>
				</div>
			</DrawerContent>
		</Drawer>
	),
}

// Left Side Drawer
export const LeftSide: Story = {
	render: () => (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="outline">左侧抽屉</Button>
			</DrawerTrigger>
			<DrawerContent side="left">
				<DrawerClose />
				<DrawerHeader>
					<DrawerTitle>左侧抽屉</DrawerTitle>
					<DrawerDescription>从左侧滑入的抽屉</DrawerDescription>
				</DrawerHeader>
				<div className="p-6">
					<p className="text-sm text-gray-600">这是从屏幕左侧滑入的抽屉，常用于导航菜单。</p>
				</div>
			</DrawerContent>
		</Drawer>
	),
}

// Top Side Drawer
export const TopSide: Story = {
	render: () => (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="outline">顶部抽屉</Button>
			</DrawerTrigger>
			<DrawerContent side="top">
				<DrawerClose />
				<DrawerHeader>
					<DrawerTitle>顶部抽屉</DrawerTitle>
					<DrawerDescription>从顶部滑入的抽屉</DrawerDescription>
				</DrawerHeader>
				<div className="p-6">
					<p className="text-sm text-gray-600">这是从屏幕顶部滑入的抽屉，适合用于通知或提醒。</p>
				</div>
			</DrawerContent>
		</Drawer>
	),
}

// Bottom Side Drawer
export const BottomSide: Story = {
	render: () => (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="outline">底部抽屉</Button>
			</DrawerTrigger>
			<DrawerContent side="bottom">
				<DrawerClose />
				<DrawerHeader>
					<DrawerTitle>底部抽屉</DrawerTitle>
					<DrawerDescription>从底部滑入的抽屉</DrawerDescription>
				</DrawerHeader>
				<div className="p-6">
					<p className="text-sm text-gray-600">这是从屏幕底部滑入的抽屉，适合移动端的操作面板。</p>
				</div>
			</DrawerContent>
		</Drawer>
	),
}

// All Sides Showcase
export const AllSides: Story = {
	render: () => (
		<div className="flex gap-4 flex-wrap">
			<Drawer>
				<DrawerTrigger asChild>
					<Button variant="outline">左侧</Button>
				</DrawerTrigger>
				<DrawerContent side="left">
					<DrawerClose />
					<DrawerHeader>
						<DrawerTitle>左侧抽屉</DrawerTitle>
					</DrawerHeader>
					<div className="p-6">
						<p className="text-sm">左侧内容</p>
					</div>
				</DrawerContent>
			</Drawer>

			<Drawer>
				<DrawerTrigger asChild>
					<Button variant="outline">右侧</Button>
				</DrawerTrigger>
				<DrawerContent side="right">
					<DrawerClose />
					<DrawerHeader>
						<DrawerTitle>右侧抽屉</DrawerTitle>
					</DrawerHeader>
					<div className="p-6">
						<p className="text-sm">右侧内容</p>
					</div>
				</DrawerContent>
			</Drawer>

			<Drawer>
				<DrawerTrigger asChild>
					<Button variant="outline">顶部</Button>
				</DrawerTrigger>
				<DrawerContent side="top">
					<DrawerClose />
					<DrawerHeader>
						<DrawerTitle>顶部抽屉</DrawerTitle>
					</DrawerHeader>
					<div className="p-6">
						<p className="text-sm">顶部内容</p>
					</div>
				</DrawerContent>
			</Drawer>

			<Drawer>
				<DrawerTrigger asChild>
					<Button variant="outline">底部</Button>
				</DrawerTrigger>
				<DrawerContent side="bottom">
					<DrawerClose />
					<DrawerHeader>
						<DrawerTitle>底部抽屉</DrawerTitle>
					</DrawerHeader>
					<div className="p-6">
						<p className="text-sm">底部内容</p>
					</div>
				</DrawerContent>
			</Drawer>
		</div>
	),
}

// Without Overlay
export const WithoutOverlay: Story = {
	render: () => (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="outline">无遮罩抽屉</Button>
			</DrawerTrigger>
			<DrawerContent showOverlay={false}>
				<DrawerClose />
				<DrawerHeader>
					<DrawerTitle>无遮罩层</DrawerTitle>
					<DrawerDescription>此抽屉没有背景遮罩层</DrawerDescription>
				</DrawerHeader>
				<div className="p-6">
					<p className="text-sm text-gray-600">没有遮罩层的抽屉，适合不需要强调的场景。</p>
				</div>
			</DrawerContent>
		</Drawer>
	),
}

// Navigation Menu Example
export const NavigationMenu: Story = {
	render: () => (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="ghost" size="icon">
					<Menu className="h-5 w-5" />
				</Button>
			</DrawerTrigger>
			<DrawerContent side="left">
				<DrawerClose />
				<DrawerHeader>
					<DrawerTitle>导航菜单</DrawerTitle>
				</DrawerHeader>
				<nav className="p-6">
					<ul className="space-y-3">
						<li>
							<button type="button" className="flex items-center gap-3 text-sm hover:text-blue-600 transition-colors">
								<User className="h-4 w-4" />
								个人中心
							</button>
						</li>
						<li>
							<button type="button" className="flex items-center gap-3 text-sm hover:text-blue-600 transition-colors">
								<Settings className="h-4 w-4" />
								设置
							</button>
						</li>
						<li>
							<button type="button" className="flex items-center gap-3 text-sm hover:text-blue-600 transition-colors">
								<Bell className="h-4 w-4" />
								通知
							</button>
						</li>
						<li>
							<button type="button" className="flex items-center gap-3 text-sm hover:text-blue-600 transition-colors">
								<ShoppingCart className="h-4 w-4" />
								购物车
							</button>
						</li>
					</ul>
				</nav>
				<DrawerFooter>
					<Button variant="outline" className="w-full">
						退出登录
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	),
}

// Shopping Cart Example
export const ShoppingCartDrawer: Story = {
	render: () => (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="outline">
					<ShoppingCart className="h-4 w-4 mr-2" />
					购物车 (3)
				</Button>
			</DrawerTrigger>
			<DrawerContent side="right">
				<DrawerClose />
				<DrawerHeader>
					<DrawerTitle>购物车</DrawerTitle>
					<DrawerDescription>您有 3 件商品在购物车中</DrawerDescription>
				</DrawerHeader>
				<div className="p-6 space-y-4 flex-1 overflow-auto">
					{[1, 2, 3].map((item) => (
						<div key={item} className="flex gap-4 items-center border-b pb-4">
							<div className="w-16 h-16 bg-gray-200 rounded" />
							<div className="flex-1">
								<h4 className="font-medium text-sm">商品 {item}</h4>
								<p className="text-sm text-gray-500">数量: 1</p>
							</div>
							<span className="font-semibold">¥99</span>
						</div>
					))}
				</div>
				<DrawerFooter>
					<div className="flex justify-between mb-4">
						<span className="font-medium">总计</span>
						<span className="font-bold text-lg">¥297</span>
					</div>
					<Button variant="primary" className="w-full">
						去结算
					</Button>
					<DrawerClose asChild>
						<Button variant="outline" className="w-full">
							继续购物
						</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	),
}

// Form Example
export const FormDrawer: Story = {
	render: () => (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="outline">编辑资料</Button>
			</DrawerTrigger>
			<DrawerContent side="right">
				<DrawerClose />
				<DrawerHeader>
					<DrawerTitle>编辑个人资料</DrawerTitle>
					<DrawerDescription>在这里修改您的个人信息</DrawerDescription>
				</DrawerHeader>
				<div className="p-6 space-y-4 flex-1 overflow-auto">
					<div>
						<label htmlFor="name" className="block text-sm font-medium mb-1">
							姓名
						</label>
						<input
							id="name"
							type="text"
							className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="输入姓名"
							defaultValue="张三"
						/>
					</div>
					<div>
						<label htmlFor="email" className="block text-sm font-medium mb-1">
							邮箱
						</label>
						<input
							id="email"
							type="email"
							className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="输入邮箱"
							defaultValue="zhangsan@example.com"
						/>
					</div>
					<div>
						<label htmlFor="phone" className="block text-sm font-medium mb-1">
							手机号
						</label>
						<input
							id="phone"
							type="tel"
							className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="输入手机号"
							defaultValue="13800138000"
						/>
					</div>
					<div>
						<label htmlFor="bio" className="block text-sm font-medium mb-1">
							个人简介
						</label>
						<textarea
							id="bio"
							rows={4}
							className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="介绍一下自己"
							defaultValue="热爱编程和设计"
						/>
					</div>
				</div>
				<DrawerFooter>
					<Button variant="primary" className="w-full">
						保存修改
					</Button>
					<DrawerClose asChild>
						<Button variant="outline" className="w-full">
							取消
						</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	),
}

// Notification Panel Example
export const NotificationPanel: Story = {
	render: () => (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="ghost" size="icon">
					<Bell className="h-5 w-5" />
					<span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
				</Button>
			</DrawerTrigger>
			<DrawerContent side="right">
				<DrawerClose />
				<DrawerHeader>
					<DrawerTitle>通知</DrawerTitle>
					<DrawerDescription>您有 5 条未读通知</DrawerDescription>
				</DrawerHeader>
				<div className="p-6 space-y-4 flex-1 overflow-auto">
					{[
						{
							id: "notif-1",
							title: "系统更新",
							content: "系统将在今晚 12:00 进行维护升级",
							time: "2 分钟前",
							unread: true,
						},
						{
							id: "notif-2",
							title: "新消息",
							content: "您收到了来自张三的新消息",
							time: "10 分钟前",
							unread: true,
						},
						{
							id: "notif-3",
							title: "订单更新",
							content: "您的订单已发货",
							time: "1 小时前",
							unread: false,
						},
						{
							id: "notif-4",
							title: "活动提醒",
							content: "双十一活动即将开始",
							time: "2 小时前",
							unread: false,
						},
						{
							id: "notif-5",
							title: "系统通知",
							content: "您的账户安全等级较低，请及时修改密码",
							time: "昨天",
							unread: false,
						},
					].map((notification) => (
						<div
							key={notification.id}
							className={`border rounded-lg p-4 ${notification.unread ? "bg-blue-50 border-blue-200" : "bg-white border-gray-200"}`}
						>
							<div className="flex items-start justify-between mb-1">
								<h4 className="font-medium text-sm">{notification.title}</h4>
								{notification.unread && <span className="h-2 w-2 bg-blue-500 rounded-full" />}
							</div>
							<p className="text-sm text-gray-600 mb-2">{notification.content}</p>
							<span className="text-xs text-gray-400">{notification.time}</span>
						</div>
					))}
				</div>
				<DrawerFooter>
					<Button variant="outline" className="w-full">
						标记全部为已读
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
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

				<Drawer open={open} onOpenChange={setOpen}>
					<DrawerTrigger asChild>
						<Button variant="outline">受控抽屉</Button>
					</DrawerTrigger>
					<DrawerContent>
						<DrawerClose />
						<DrawerHeader>
							<DrawerTitle>受控状态</DrawerTitle>
							<DrawerDescription>当前状态: {open ? "打开" : "关闭"}</DrawerDescription>
						</DrawerHeader>
						<div className="p-6">
							<p className="text-sm text-gray-600">您可以通过外部按钮控制此抽屉的开关状态。</p>
						</div>
						<DrawerFooter>
							<Button onClick={() => setOpen(false)} variant="primary">
								关闭抽屉
							</Button>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			</div>
		)
	},
}

// Settings Panel Example
export const SettingsPanel: Story = {
	render: () => (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="outline">
					<Settings className="h-4 w-4 mr-2" />
					设置
				</Button>
			</DrawerTrigger>
			<DrawerContent side="right">
				<DrawerClose />
				<DrawerHeader>
					<DrawerTitle>系统设置</DrawerTitle>
					<DrawerDescription>管理您的应用偏好设置</DrawerDescription>
				</DrawerHeader>
				<div className="p-6 space-y-6 flex-1 overflow-auto">
					<div>
						<h3 className="font-medium text-sm mb-3">通用设置</h3>
						<div className="space-y-3">
							<div className="flex items-center justify-between">
								<span className="text-sm">启用通知</span>
								<input type="checkbox" defaultChecked className="rounded" />
							</div>
							<div className="flex items-center justify-between">
								<span className="text-sm">自动保存</span>
								<input type="checkbox" defaultChecked className="rounded" />
							</div>
							<div className="flex items-center justify-between">
								<span className="text-sm">深色模式</span>
								<input type="checkbox" className="rounded" />
							</div>
						</div>
					</div>

					<div className="border-t pt-6">
						<h3 className="font-medium text-sm mb-3">隐私设置</h3>
						<div className="space-y-3">
							<div className="flex items-center justify-between">
								<span className="text-sm">个人资料公开</span>
								<input type="checkbox" defaultChecked className="rounded" />
							</div>
							<div className="flex items-center justify-between">
								<span className="text-sm">允许他人查看</span>
								<input type="checkbox" className="rounded" />
							</div>
						</div>
					</div>

					<div className="border-t pt-6">
						<h3 className="font-medium text-sm mb-3">语言设置</h3>
						<select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
							<option>简体中文</option>
							<option>繁體中文</option>
							<option>English</option>
							<option>日本語</option>
						</select>
					</div>
				</div>
				<DrawerFooter>
					<Button variant="primary" className="w-full">
						保存设置
					</Button>
					<DrawerClose asChild>
						<Button variant="outline" className="w-full">
							取消
						</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	),
}

// Filter Panel Example
export const FilterPanel: Story = {
	render: () => (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="outline">筛选</Button>
			</DrawerTrigger>
			<DrawerContent side="left">
				<DrawerClose />
				<DrawerHeader>
					<DrawerTitle>筛选条件</DrawerTitle>
					<DrawerDescription>选择您需要的筛选条件</DrawerDescription>
				</DrawerHeader>
				<div className="p-6 space-y-6 flex-1 overflow-auto">
					<div>
						<h3 className="font-medium text-sm mb-3">价格区间</h3>
						<div className="space-y-2">
							<label className="flex items-center gap-2">
								<input type="checkbox" className="rounded" />
								<span className="text-sm">¥0 - ¥100</span>
							</label>
							<label className="flex items-center gap-2">
								<input type="checkbox" className="rounded" />
								<span className="text-sm">¥100 - ¥500</span>
							</label>
							<label className="flex items-center gap-2">
								<input type="checkbox" className="rounded" />
								<span className="text-sm">¥500 - ¥1000</span>
							</label>
							<label className="flex items-center gap-2">
								<input type="checkbox" className="rounded" />
								<span className="text-sm">¥1000+</span>
							</label>
						</div>
					</div>

					<div className="border-t pt-6">
						<h3 className="font-medium text-sm mb-3">品牌</h3>
						<div className="space-y-2">
							<label className="flex items-center gap-2">
								<input type="checkbox" className="rounded" />
								<span className="text-sm">Apple</span>
							</label>
							<label className="flex items-center gap-2">
								<input type="checkbox" className="rounded" />
								<span className="text-sm">Samsung</span>
							</label>
							<label className="flex items-center gap-2">
								<input type="checkbox" className="rounded" />
								<span className="text-sm">Huawei</span>
							</label>
							<label className="flex items-center gap-2">
								<input type="checkbox" className="rounded" />
								<span className="text-sm">Xiaomi</span>
							</label>
						</div>
					</div>

					<div className="border-t pt-6">
						<h3 className="font-medium text-sm mb-3">评分</h3>
						<div className="space-y-2">
							<label className="flex items-center gap-2">
								<input type="checkbox" className="rounded" />
								<span className="text-sm">⭐⭐⭐⭐⭐ 5星</span>
							</label>
							<label className="flex items-center gap-2">
								<input type="checkbox" className="rounded" />
								<span className="text-sm">⭐⭐⭐⭐ 4星及以上</span>
							</label>
							<label className="flex items-center gap-2">
								<input type="checkbox" className="rounded" />
								<span className="text-sm">⭐⭐⭐ 3星及以上</span>
							</label>
						</div>
					</div>
				</div>
				<DrawerFooter>
					<Button variant="primary" className="w-full">
						应用筛选
					</Button>
					<Button variant="ghost" className="w-full">
						重置
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	),
}

// Custom Width
export const CustomWidth: Story = {
	render: () => (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="outline">自定义宽度</Button>
			</DrawerTrigger>
			<DrawerContent side="right" className="w-[600px] max-w-full">
				<DrawerClose />
				<DrawerHeader>
					<DrawerTitle>自定义宽度的抽屉</DrawerTitle>
					<DrawerDescription>这个抽屉的宽度被设置为 600px</DrawerDescription>
				</DrawerHeader>
				<div className="p-6">
					<p className="text-sm text-gray-600">您可以通过 className 属性自定义抽屉的宽度和其他样式。</p>
				</div>
			</DrawerContent>
		</Drawer>
	),
}

// Custom Styling
export const CustomStyling: Story = {
	render: () => (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="outline">自定义样式</Button>
			</DrawerTrigger>
			<DrawerContent className="bg-gradient-to-br from-purple-50 to-pink-50">
				<DrawerClose />
				<DrawerHeader>
					<DrawerTitle className="text-purple-900">自定义样式的抽屉</DrawerTitle>
					<DrawerDescription className="text-purple-700">使用渐变背景的抽屉</DrawerDescription>
				</DrawerHeader>
				<div className="p-6">
					<p className="text-sm text-purple-800">这个抽屉使用了自定义的渐变背景颜色。</p>
				</div>
				<DrawerFooter>
					<Button variant="primary" className="bg-purple-600 hover:bg-purple-700">
						确认
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	),
}

// Mobile Bottom Sheet
export const MobileBottomSheet: Story = {
	render: () => (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="outline">操作菜单</Button>
			</DrawerTrigger>
			<DrawerContent side="bottom">
				<DrawerHeader className="text-center">
					<DrawerTitle>选择操作</DrawerTitle>
				</DrawerHeader>
				<div className="p-6 space-y-2">
					<button type="button" className="w-full py-3 text-center hover:bg-gray-100 rounded-lg transition-colors">
						分享
					</button>
					<button type="button" className="w-full py-3 text-center hover:bg-gray-100 rounded-lg transition-colors">
						复制链接
					</button>
					<button type="button" className="w-full py-3 text-center hover:bg-gray-100 rounded-lg transition-colors">
						下载
					</button>
					<button
						type="button"
						className="w-full py-3 text-center text-red-600 hover:bg-red-50 rounded-lg transition-colors"
					>
						删除
					</button>
				</div>
				<DrawerFooter>
					<DrawerClose asChild>
						<Button variant="ghost" className="w-full">
							取消
						</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	),
}

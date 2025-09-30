import type { Meta, StoryObj } from "@storybook/react"
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@versakit/components"

const meta = {
	title: "Components/Card",
	component: Card,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["default", "shadow", "outline", "ghost"],
			description: "The visual style variant of the card",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "default" },
			},
		},
		padding: {
			control: { type: "select" },
			options: ["none", "sm", "default", "lg"],
			description: "The padding of the card",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "default" },
			},
		},
		className: {
			control: "text",
			description: "Additional CSS classes to apply to the card",
		},
	},
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
	render: (args) => (
		<Card {...args} className="w-[350px]">
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription>Card description goes here</CardDescription>
			</CardHeader>
			<CardContent>
				<p>This is the card content area where you can place any content you want.</p>
			</CardContent>
			<CardFooter>
				<Button variant="primary">Action</Button>
			</CardFooter>
		</Card>
	),
}

// Variant stories
export const DefaultVariant: Story = {
	render: () => (
		<Card variant="default" className="w-[350px]">
			<CardHeader>
				<CardTitle>Default Card</CardTitle>
				<CardDescription>A card with default border style</CardDescription>
			</CardHeader>
			<CardContent>
				<p>This card uses the default variant with a subtle border.</p>
			</CardContent>
		</Card>
	),
}

export const Shadow: Story = {
	render: () => (
		<Card variant="shadow" className="w-[350px]">
			<CardHeader>
				<CardTitle>Shadow Card</CardTitle>
				<CardDescription>A card with shadow effect</CardDescription>
			</CardHeader>
			<CardContent>
				<p>This card has a shadow to create depth and emphasis.</p>
			</CardContent>
		</Card>
	),
}

export const Outline: Story = {
	render: () => (
		<Card variant="outline" className="w-[350px]">
			<CardHeader>
				<CardTitle>Outline Card</CardTitle>
				<CardDescription>A card with prominent border</CardDescription>
			</CardHeader>
			<CardContent>
				<p>This card features a more prominent outline border.</p>
			</CardContent>
		</Card>
	),
}

export const Ghost: Story = {
	render: () => (
		<Card variant="ghost" className="w-[350px]">
			<CardHeader>
				<CardTitle>Ghost Card</CardTitle>
				<CardDescription>A card with minimal styling</CardDescription>
			</CardHeader>
			<CardContent>
				<p>This card has no border or shadow for a minimal look.</p>
			</CardContent>
		</Card>
	),
}

// Padding stories
export const PaddingNone: Story = {
	render: () => (
		<Card padding="none" className="w-[350px]">
			<CardHeader>
				<CardTitle>No Padding</CardTitle>
				<CardDescription>Card with no padding</CardDescription>
			</CardHeader>
			<CardContent>
				<p>Content without padding.</p>
			</CardContent>
		</Card>
	),
}

export const PaddingSmall: Story = {
	render: () => (
		<Card padding="sm" className="w-[350px]">
			<CardHeader padding="none">
				<CardTitle>Small Padding</CardTitle>
				<CardDescription>Card with small padding</CardDescription>
			</CardHeader>
			<CardContent padding="none">
				<p>Content with small padding.</p>
			</CardContent>
		</Card>
	),
}

export const PaddingLarge: Story = {
	render: () => (
		<Card padding="lg" className="w-[350px]">
			<CardHeader padding="none">
				<CardTitle>Large Padding</CardTitle>
				<CardDescription>Card with large padding</CardDescription>
			</CardHeader>
			<CardContent padding="none">
				<p>Content with large padding.</p>
			</CardContent>
		</Card>
	),
}

// All variants showcase
export const AllVariants: Story = {
	render: () => (
		<div className="flex flex-wrap gap-4">
			<Card variant="default" className="w-[300px]">
				<CardHeader>
					<CardTitle>Default</CardTitle>
					<CardDescription>Default variant</CardDescription>
				</CardHeader>
			</Card>
			<Card variant="shadow" className="w-[300px]">
				<CardHeader>
					<CardTitle>Shadow</CardTitle>
					<CardDescription>Shadow variant</CardDescription>
				</CardHeader>
			</Card>
			<Card variant="outline" className="w-[300px]">
				<CardHeader>
					<CardTitle>Outline</CardTitle>
					<CardDescription>Outline variant</CardDescription>
				</CardHeader>
			</Card>
			<Card variant="ghost" className="w-[300px]">
				<CardHeader>
					<CardTitle>Ghost</CardTitle>
					<CardDescription>Ghost variant</CardDescription>
				</CardHeader>
			</Card>
		</div>
	),
}

// Real-world examples
export const LoginCard: Story = {
	render: () => (
		<Card className="w-[400px]" variant="shadow">
			<CardHeader>
				<CardTitle>Welcome Back</CardTitle>
				<CardDescription>Sign in to your account to continue</CardDescription>
			</CardHeader>
			<CardContent>
				<form className="space-y-4">
					<div>
						<label htmlFor="email" className="block text-sm font-medium mb-1">
							Email
						</label>
						<input
							id="email"
							type="email"
							placeholder="you@example.com"
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<div>
						<label htmlFor="password" className="block text-sm font-medium mb-1">
							Password
						</label>
						<input
							id="password"
							type="password"
							placeholder="••••••••"
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button variant="ghost">Forgot Password?</Button>
				<Button variant="primary">Sign In</Button>
			</CardFooter>
		</Card>
	),
}

export const ProductCard: Story = {
	render: () => (
		<Card className="w-[350px]" variant="outline">
			<CardHeader padding="none">
				<div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-t-lg" />
			</CardHeader>
			<CardContent>
				<CardTitle className="mb-2">Premium Product</CardTitle>
				<CardDescription className="mb-4">
					High-quality product with amazing features and benefits for your needs.
				</CardDescription>
				<div className="flex items-baseline gap-2">
					<span className="text-3xl font-bold">$99</span>
					<span className="text-gray-500 line-through">$149</span>
				</div>
			</CardContent>
			<CardFooter>
				<Button variant="primary" className="w-full">
					Add to Cart
				</Button>
			</CardFooter>
		</Card>
	),
}

export const NotificationCard: Story = {
	render: () => (
		<Card className="w-[380px]" variant="default">
			<CardHeader>
				<div className="flex items-start justify-between">
					<div>
						<CardTitle>New Message</CardTitle>
						<CardDescription>2 minutes ago</CardDescription>
					</div>
					<span className="text-blue-500 text-sm">•</span>
				</div>
			</CardHeader>
			<CardContent>
				<p className="text-sm">
					You have received a new message from Sarah. Click to view the full conversation and reply.
				</p>
			</CardContent>
			<CardFooter className="gap-2">
				<Button variant="outline" size="sm">
					Dismiss
				</Button>
				<Button variant="primary" size="sm">
					View Message
				</Button>
			</CardFooter>
		</Card>
	),
}

export const StatsCard: Story = {
	render: () => (
		<div className="flex gap-4 flex-wrap">
			<Card className="w-[240px]" variant="shadow">
				<CardHeader>
					<CardDescription>Total Revenue</CardDescription>
					<CardTitle className="text-4xl">$45,231</CardTitle>
				</CardHeader>
				<CardContent padding="none">
					<p className="text-xs text-green-600">+20.1% from last month</p>
				</CardContent>
			</Card>
			<Card className="w-[240px]" variant="shadow">
				<CardHeader>
					<CardDescription>Active Users</CardDescription>
					<CardTitle className="text-4xl">2,350</CardTitle>
				</CardHeader>
				<CardContent padding="none">
					<p className="text-xs text-green-600">+12.5% from last month</p>
				</CardContent>
			</Card>
			<Card className="w-[240px]" variant="shadow">
				<CardHeader>
					<CardDescription>Conversion Rate</CardDescription>
					<CardTitle className="text-4xl">3.2%</CardTitle>
				</CardHeader>
				<CardContent padding="none">
					<p className="text-xs text-red-600">-2.4% from last month</p>
				</CardContent>
			</Card>
		</div>
	),
}

export const ProfileCard: Story = {
	render: () => (
		<Card className="w-[350px]" variant="outline">
			<CardHeader>
				<div className="flex items-center gap-4">
					<div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500" />
					<div>
						<CardTitle>Jane Doe</CardTitle>
						<CardDescription>Product Designer</CardDescription>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-gray-600 mb-4">
					Passionate about creating beautiful and functional user interfaces. Love to work with modern web technologies.
				</p>
				<div className="flex gap-2 text-sm">
					<span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">React</span>
					<span className="px-2 py-1 bg-green-100 text-green-700 rounded">Figma</span>
					<span className="px-2 py-1 bg-purple-100 text-purple-700 rounded">UI/UX</span>
				</div>
			</CardContent>
			<CardFooter>
				<Button variant="primary" className="w-full">
					View Profile
				</Button>
			</CardFooter>
		</Card>
	),
}

export const WithCustomStyling: Story = {
	render: () => (
		<Card className="w-[350px] bg-gradient-to-br from-blue-50 to-purple-50 border-purple-200">
			<CardHeader>
				<CardTitle className="text-purple-900">Custom Styled Card</CardTitle>
				<CardDescription className="text-purple-700">
					This card demonstrates custom styling capabilities
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="text-purple-800">You can easily customize the appearance of cards using Tailwind CSS classes.</p>
			</CardContent>
		</Card>
	),
}

export const MinimalCard: Story = {
	render: () => (
		<Card className="w-[350px]" variant="ghost" padding="sm">
			<CardContent padding="none">
				<p className="text-sm text-gray-600">
					A minimal card with ghost variant and small padding for subtle presentation.
				</p>
			</CardContent>
		</Card>
	),
}

export const WithoutSubComponents: Story = {
	render: () => (
		<Card className="w-[350px]">
			<div className="space-y-2">
				<h3 className="font-bold">Simple Card</h3>
				<p className="text-sm text-gray-600">
					This card doesn't use the sub-components like CardHeader, CardContent, etc.
				</p>
			</div>
		</Card>
	),
}

export const InteractiveCard: Story = {
	render: () => (
		<Card
			className="w-[350px] cursor-pointer transition-all hover:scale-105 hover:shadow-lg"
			variant="shadow"
			onClick={() => alert("Card clicked!")}
		>
			<CardHeader>
				<CardTitle>Interactive Card</CardTitle>
				<CardDescription>Click anywhere on this card</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="text-sm">This card is interactive and responds to clicks with a hover effect.</p>
			</CardContent>
		</Card>
	),
}

export const ComplexLayout: Story = {
	render: () => (
		<div className="grid grid-cols-2 gap-4 max-w-[800px]">
			<Card variant="shadow" className="col-span-2">
				<CardHeader>
					<CardTitle>Dashboard Overview</CardTitle>
					<CardDescription>Your key metrics at a glance</CardDescription>
				</CardHeader>
			</Card>
			<Card variant="outline">
				<CardHeader>
					<CardTitle className="text-xl">Quick Stats</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-2 text-sm">
						<div className="flex justify-between">
							<span>Revenue</span>
							<span className="font-semibold">$12,345</span>
						</div>
						<div className="flex justify-between">
							<span>Orders</span>
							<span className="font-semibold">123</span>
						</div>
					</div>
				</CardContent>
			</Card>
			<Card variant="outline">
				<CardHeader>
					<CardTitle className="text-xl">Recent Activity</CardTitle>
				</CardHeader>
				<CardContent>
					<ul className="space-y-1 text-sm">
						<li>• New order received</li>
						<li>• Payment processed</li>
						<li>• Item shipped</li>
					</ul>
				</CardContent>
			</Card>
		</div>
	),
}

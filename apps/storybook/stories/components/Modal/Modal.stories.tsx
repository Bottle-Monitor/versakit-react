import type { Meta, StoryObj } from "@storybook/react"
import {
	Button,
	Modal,
	ModalClose,
	ModalContent,
	ModalDescription,
	ModalFooter,
	ModalHeader,
	ModalTitle,
	ModalTrigger,
} from "@versakit/components"
import { useState } from "react"

const meta = {
	title: "Components/Modal",
	component: Modal,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

// Basic modal
export const Default: Story = {
	render: () => (
		<Modal>
			<ModalTrigger>
				<Button>Open Modal</Button>
			</ModalTrigger>
			<ModalContent>
				<ModalHeader>
					<ModalTitle>Modal Title</ModalTitle>
					<ModalDescription>This is a modal description that provides more context.</ModalDescription>
				</ModalHeader>
				<div className="py-4">
					<p className="text-sm text-gray-600">This is the modal content area. You can put anything here.</p>
				</div>
				<ModalFooter>
					<ModalClose>
						<Button variant="outline">Close</Button>
					</ModalClose>
				</ModalFooter>
			</ModalContent>
		</Modal>
	),
}

// Small size
export const SmallSize: Story = {
	render: () => (
		<Modal>
			<ModalTrigger>
				<Button>Open Small Modal</Button>
			</ModalTrigger>
			<ModalContent size="sm">
				<ModalHeader>
					<ModalTitle>Small Modal</ModalTitle>
					<ModalDescription>This is a small modal.</ModalDescription>
				</ModalHeader>
			</ModalContent>
		</Modal>
	),
}

// Large size
export const LargeSize: Story = {
	render: () => (
		<Modal>
			<ModalTrigger>
				<Button>Open Large Modal</Button>
			</ModalTrigger>
			<ModalContent size="lg">
				<ModalHeader>
					<ModalTitle>Large Modal</ModalTitle>
					<ModalDescription>This is a large modal with more space for content.</ModalDescription>
				</ModalHeader>
				<div className="py-4">
					<p className="text-sm text-gray-600">
						Large modals are great for forms, detailed content, or when you need more space to display information.
					</p>
				</div>
			</ModalContent>
		</Modal>
	),
}

// Extra large size
export const ExtraLargeSize: Story = {
	render: () => (
		<Modal>
			<ModalTrigger>
				<Button>Open Extra Large Modal</Button>
			</ModalTrigger>
			<ModalContent size="xl">
				<ModalHeader>
					<ModalTitle>Extra Large Modal</ModalTitle>
					<ModalDescription>This modal takes up a lot of screen space.</ModalDescription>
				</ModalHeader>
				<div className="py-4 space-y-4">
					<p className="text-sm text-gray-600">
						Extra large modals are perfect for rich content, data tables, or complex interfaces.
					</p>
					<p className="text-sm text-gray-600">You can display a lot of information without feeling cramped.</p>
				</div>
			</ModalContent>
		</Modal>
	),
}

// Full screen
export const FullScreen: Story = {
	render: () => (
		<Modal>
			<ModalTrigger>
				<Button>Open Full Screen Modal</Button>
			</ModalTrigger>
			<ModalContent size="full">
				<ModalHeader>
					<ModalTitle>Full Screen Modal</ModalTitle>
					<ModalDescription>This modal takes up most of the screen.</ModalDescription>
				</ModalHeader>
				<div className="py-4">
					<p className="text-sm text-gray-600">
						Full screen modals are useful for immersive experiences or when you need maximum space.
					</p>
				</div>
			</ModalContent>
		</Modal>
	),
}

// Without overlay
export const WithoutOverlay: Story = {
	render: () => (
		<Modal>
			<ModalTrigger>
				<Button>Open Modal (No Overlay)</Button>
			</ModalTrigger>
			<ModalContent showOverlay={false}>
				<ModalHeader>
					<ModalTitle>No Overlay</ModalTitle>
					<ModalDescription>This modal doesn't have a background overlay.</ModalDescription>
				</ModalHeader>
			</ModalContent>
		</Modal>
	),
}

// Without close button
export const WithoutCloseButton: Story = {
	render: () => (
		<Modal>
			<ModalTrigger>
				<Button>Open Modal (No Close Button)</Button>
			</ModalTrigger>
			<ModalContent showClose={false}>
				<ModalHeader>
					<ModalTitle>No Close Button</ModalTitle>
					<ModalDescription>This modal doesn't have the default close button.</ModalDescription>
				</ModalHeader>
				<ModalFooter>
					<ModalClose>
						<Button>Close Manually</Button>
					</ModalClose>
				</ModalFooter>
			</ModalContent>
		</Modal>
	),
}

// Prevent closing on overlay click
export const PreventOverlayClose: Story = {
	render: () => (
		<Modal>
			<ModalTrigger>
				<Button>Open Modal (Overlay Click Disabled)</Button>
			</ModalTrigger>
			<ModalContent closeOnOverlayClick={false}>
				<ModalHeader>
					<ModalTitle>Cannot Close on Overlay Click</ModalTitle>
					<ModalDescription>Click the overlay - nothing will happen. Use the close button or ESC.</ModalDescription>
				</ModalHeader>
			</ModalContent>
		</Modal>
	),
}

// Prevent closing on ESC
export const PreventEscClose: Story = {
	render: () => (
		<Modal>
			<ModalTrigger>
				<Button>Open Modal (ESC Disabled)</Button>
			</ModalTrigger>
			<ModalContent closeOnEsc={false}>
				<ModalHeader>
					<ModalTitle>Cannot Close on ESC</ModalTitle>
					<ModalDescription>Press ESC - nothing will happen. Use the close button.</ModalDescription>
				</ModalHeader>
			</ModalContent>
		</Modal>
	),
}

// Controlled modal
export const Controlled: Story = {
	render: () => {
		const [open, setOpen] = useState(false)

		return (
			<div className="space-y-4">
				<div className="flex gap-2">
					<Button onClick={() => setOpen(true)}>Open Modal</Button>
					<Button variant="outline" onClick={() => setOpen(false)}>
						Close Modal
					</Button>
				</div>
				<p className="text-sm text-gray-600">Modal is {open ? "open" : "closed"}</p>

				<Modal open={open} onOpenChange={setOpen}>
					<ModalContent>
						<ModalHeader>
							<ModalTitle>Controlled Modal</ModalTitle>
							<ModalDescription>This modal is controlled by external state.</ModalDescription>
						</ModalHeader>
						<div className="py-4">
							<p className="text-sm text-gray-600">The open state is managed by React useState.</p>
						</div>
					</ModalContent>
				</Modal>
			</div>
		)
	},
}

// Confirmation dialog
export const ConfirmationDialog: Story = {
	render: () => (
		<Modal>
			<ModalTrigger>
				<Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
					Delete Account
				</Button>
			</ModalTrigger>
			<ModalContent size="sm">
				<ModalHeader>
					<ModalTitle>Are you absolutely sure?</ModalTitle>
					<ModalDescription>
						This action cannot be undone. This will permanently delete your account and remove your data from our
						servers.
					</ModalDescription>
				</ModalHeader>
				<ModalFooter>
					<ModalClose>
						<Button variant="outline">Cancel</Button>
					</ModalClose>
					<ModalClose>
						<Button className="bg-red-500 hover:bg-red-600">Delete Account</Button>
					</ModalClose>
				</ModalFooter>
			</ModalContent>
		</Modal>
	),
}

// Form modal
export const FormModal: Story = {
	render: () => (
		<Modal>
			<ModalTrigger>
				<Button>Add User</Button>
			</ModalTrigger>
			<ModalContent>
				<ModalHeader>
					<ModalTitle>Add New User</ModalTitle>
					<ModalDescription>Fill in the details below to create a new user account.</ModalDescription>
				</ModalHeader>
				<form className="space-y-4 py-4">
					<div>
						<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
							Full Name
						</label>
						<input
							id="name"
							type="text"
							placeholder="John Doe"
							className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
						/>
					</div>
					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
							Email Address
						</label>
						<input
							id="email"
							type="email"
							placeholder="john@example.com"
							className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
						/>
					</div>
					<div>
						<label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
							Role
						</label>
						<select
							id="role"
							className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
						>
							<option>User</option>
							<option>Admin</option>
							<option>Editor</option>
						</select>
					</div>
				</form>
				<ModalFooter>
					<ModalClose>
						<Button variant="outline">Cancel</Button>
					</ModalClose>
					<Button>Create User</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	),
}

// Alert modal
export const AlertModal: Story = {
	render: () => (
		<Modal>
			<ModalTrigger>
				<Button>Show Alert</Button>
			</ModalTrigger>
			<ModalContent size="sm" closeOnOverlayClick={false} closeOnEsc={false}>
				<ModalHeader>
					<ModalTitle>⚠️ Important Notice</ModalTitle>
					<ModalDescription>Please read this important information carefully before proceeding.</ModalDescription>
				</ModalHeader>
				<div className="py-4">
					<p className="text-sm text-gray-600">
						This modal cannot be closed by clicking outside or pressing ESC. You must click the button below.
					</p>
				</div>
				<ModalFooter>
					<ModalClose>
						<Button>I Understand</Button>
					</ModalClose>
				</ModalFooter>
			</ModalContent>
		</Modal>
	),
}

// Nested content
export const RichContent: Story = {
	render: () => (
		<Modal>
			<ModalTrigger>
				<Button>View Details</Button>
			</ModalTrigger>
			<ModalContent size="lg">
				<ModalHeader>
					<ModalTitle>Product Details</ModalTitle>
					<ModalDescription>Complete information about this product.</ModalDescription>
				</ModalHeader>
				<div className="py-4 space-y-4">
					<div>
						<h3 className="font-semibold text-sm mb-2">Description</h3>
						<p className="text-sm text-gray-600">
							This is a high-quality product with amazing features. It's perfect for your needs and comes with a full
							warranty.
						</p>
					</div>
					<div>
						<h3 className="font-semibold text-sm mb-2">Features</h3>
						<ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
							<li>Feature one with great benefits</li>
							<li>Feature two that saves time</li>
							<li>Feature three for better performance</li>
						</ul>
					</div>
					<div>
						<h3 className="font-semibold text-sm mb-2">Specifications</h3>
						<div className="grid grid-cols-2 gap-2 text-sm">
							<div className="text-gray-500">Weight:</div>
							<div className="text-gray-900">1.5 kg</div>
							<div className="text-gray-500">Dimensions:</div>
							<div className="text-gray-900">30 x 20 x 10 cm</div>
							<div className="text-gray-500">Material:</div>
							<div className="text-gray-900">Premium Aluminum</div>
						</div>
					</div>
				</div>
				<ModalFooter>
					<ModalClose>
						<Button variant="outline">Close</Button>
					</ModalClose>
					<Button>Add to Cart</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	),
}

// Multiple modals showcase
export const AllSizes: Story = {
	render: () => (
		<div className="flex flex-wrap gap-4">
			<Modal>
				<ModalTrigger>
					<Button size="sm">Small</Button>
				</ModalTrigger>
				<ModalContent size="sm">
					<ModalTitle>Small Modal</ModalTitle>
				</ModalContent>
			</Modal>

			<Modal>
				<ModalTrigger>
					<Button size="sm">Default</Button>
				</ModalTrigger>
				<ModalContent size="default">
					<ModalTitle>Default Modal</ModalTitle>
				</ModalContent>
			</Modal>

			<Modal>
				<ModalTrigger>
					<Button size="sm">Large</Button>
				</ModalTrigger>
				<ModalContent size="lg">
					<ModalTitle>Large Modal</ModalTitle>
				</ModalContent>
			</Modal>

			<Modal>
				<ModalTrigger>
					<Button size="sm">Extra Large</Button>
				</ModalTrigger>
				<ModalContent size="xl">
					<ModalTitle>Extra Large Modal</ModalTitle>
				</ModalContent>
			</Modal>

			<Modal>
				<ModalTrigger>
					<Button size="sm">Full</Button>
				</ModalTrigger>
				<ModalContent size="full">
					<ModalTitle>Full Screen Modal</ModalTitle>
				</ModalContent>
			</Modal>
		</div>
	),
}

import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import {
	Modal,
	ModalClose,
	ModalContent,
	ModalDescription,
	ModalFooter,
	ModalHeader,
	ModalTitle,
	ModalTrigger,
} from ".."

describe("Modal", () => {
	it("renders modal trigger", () => {
		render(
			<Modal>
				<ModalTrigger>Open Modal</ModalTrigger>
			</Modal>,
		)
		expect(screen.getByRole("button", { name: /open modal/i })).toBeInTheDocument()
	})

	it("opens modal when trigger is clicked", async () => {
		const user = userEvent.setup()
		render(
			<Modal>
				<ModalTrigger>Open</ModalTrigger>
				<ModalContent>
					<ModalTitle>Modal Title</ModalTitle>
				</ModalContent>
			</Modal>,
		)

		await user.click(screen.getByRole("button", { name: /open/i }))
		expect(screen.getByRole("dialog")).toBeInTheDocument()
		expect(screen.getByText("Modal Title")).toBeInTheDocument()
	})

	it("closes modal when close button is clicked", async () => {
		const user = userEvent.setup()
		render(
			<Modal defaultOpen>
				<ModalContent>
					<ModalTitle>Modal Title</ModalTitle>
				</ModalContent>
			</Modal>,
		)

		expect(screen.getByRole("dialog")).toBeInTheDocument()

		const closeButton = screen.getByRole("button", { name: /close/i })
		await user.click(closeButton)

		await waitFor(() => {
			expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
		})
	})

	it("closes modal when ESC key is pressed", async () => {
		const user = userEvent.setup()
		render(
			<Modal defaultOpen>
				<ModalContent>
					<ModalTitle>Modal Title</ModalTitle>
				</ModalContent>
			</Modal>,
		)

		expect(screen.getByRole("dialog")).toBeInTheDocument()

		await user.keyboard("{Escape}")

		await waitFor(() => {
			expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
		})
	})

	it("does not close when ESC is pressed if closeOnEsc is false", async () => {
		const user = userEvent.setup()
		render(
			<Modal defaultOpen>
				<ModalContent closeOnEsc={false}>
					<ModalTitle>Modal Title</ModalTitle>
				</ModalContent>
			</Modal>,
		)

		expect(screen.getByRole("dialog")).toBeInTheDocument()

		await user.keyboard("{Escape}")

		await waitFor(() => {
			expect(screen.getByRole("dialog")).toBeInTheDocument()
		})
	})

	it("closes modal when overlay is clicked", async () => {
		const user = userEvent.setup()
		render(
			<Modal defaultOpen>
				<ModalContent>
					<ModalTitle>Modal Title</ModalTitle>
				</ModalContent>
			</Modal>,
		)

		expect(screen.getByRole("dialog")).toBeInTheDocument()

		// Click on overlay (aria-hidden element)
		const overlay = document.querySelector('[aria-hidden="true"]')
		if (overlay) {
			await user.click(overlay as HTMLElement)
		}

		await waitFor(() => {
			expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
		})
	})

	it("does not close when overlay is clicked if closeOnOverlayClick is false", async () => {
		const user = userEvent.setup()
		render(
			<Modal defaultOpen>
				<ModalContent closeOnOverlayClick={false}>
					<ModalTitle>Modal Title</ModalTitle>
				</ModalContent>
			</Modal>,
		)

		expect(screen.getByRole("dialog")).toBeInTheDocument()

		const overlay = document.querySelector('[aria-hidden="true"]')
		if (overlay) {
			await user.click(overlay as HTMLElement)
		}

		await waitFor(() => {
			expect(screen.getByRole("dialog")).toBeInTheDocument()
		})
	})

	it("renders modal without overlay when showOverlay is false", () => {
		render(
			<Modal defaultOpen>
				<ModalContent showOverlay={false}>
					<ModalTitle>Modal Title</ModalTitle>
				</ModalContent>
			</Modal>,
		)

		expect(screen.getByRole("dialog")).toBeInTheDocument()
		expect(document.querySelector('[aria-hidden="true"]')).not.toBeInTheDocument()
	})

	it("renders modal without close button when showClose is false", () => {
		render(
			<Modal defaultOpen>
				<ModalContent showClose={false}>
					<ModalTitle>Modal Title</ModalTitle>
				</ModalContent>
			</Modal>,
		)

		expect(screen.getByRole("dialog")).toBeInTheDocument()
		expect(screen.queryByRole("button", { name: /close/i })).not.toBeInTheDocument()
	})

	it("renders with different sizes", () => {
		const { rerender } = render(
			<Modal defaultOpen>
				<ModalContent size="sm">
					<ModalTitle>Small Modal</ModalTitle>
				</ModalContent>
			</Modal>,
		)

		let dialog = screen.getByRole("dialog")
		expect(dialog).toHaveClass("max-w-sm")

		rerender(
			<Modal defaultOpen>
				<ModalContent size="lg">
					<ModalTitle>Large Modal</ModalTitle>
				</ModalContent>
			</Modal>,
		)

		dialog = screen.getByRole("dialog")
		expect(dialog).toHaveClass("max-w-2xl")
	})

	it("supports controlled mode", async () => {
		const user = userEvent.setup()
		const onOpenChange = vi.fn()

		const { rerender } = render(
			<Modal open={false} onOpenChange={onOpenChange}>
				<ModalTrigger>Open</ModalTrigger>
				<ModalContent>
					<ModalTitle>Modal Title</ModalTitle>
				</ModalContent>
			</Modal>,
		)

		expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

		await user.click(screen.getByRole("button", { name: /open/i }))
		expect(onOpenChange).toHaveBeenCalledWith(true)

		rerender(
			<Modal open={true} onOpenChange={onOpenChange}>
				<ModalTrigger>Open</ModalTrigger>
				<ModalContent>
					<ModalTitle>Modal Title</ModalTitle>
				</ModalContent>
			</Modal>,
		)

		expect(screen.getByRole("dialog")).toBeInTheDocument()
	})

	it("renders header, footer, and description", () => {
		render(
			<Modal defaultOpen>
				<ModalContent>
					<ModalHeader>
						<ModalTitle>Modal Title</ModalTitle>
						<ModalDescription>Modal description text</ModalDescription>
					</ModalHeader>
					<div>Modal content</div>
					<ModalFooter>
						<ModalClose>Close</ModalClose>
					</ModalFooter>
				</ModalContent>
			</Modal>,
		)

		expect(screen.getByText("Modal Title")).toBeInTheDocument()
		expect(screen.getByText("Modal description text")).toBeInTheDocument()
		expect(screen.getByText("Modal content")).toBeInTheDocument()
	})

	it("applies custom className", () => {
		render(
			<Modal defaultOpen>
				<ModalContent className="custom-modal">
					<ModalTitle>Modal Title</ModalTitle>
				</ModalContent>
			</Modal>,
		)

		expect(screen.getByRole("dialog")).toHaveClass("custom-modal")
	})

	it("calls onClose callback", async () => {
		const user = userEvent.setup()
		const onClose = vi.fn()

		render(
			<Modal defaultOpen>
				<ModalContent onClose={onClose}>
					<ModalTitle>Modal Title</ModalTitle>
				</ModalContent>
			</Modal>,
		)

		await user.keyboard("{Escape}")
		expect(onClose).toHaveBeenCalled()
	})

	it("renders modal with aria-modal attribute", () => {
		render(
			<Modal defaultOpen>
				<ModalContent>
					<ModalTitle>Modal Title</ModalTitle>
				</ModalContent>
			</Modal>,
		)

		const dialog = screen.getByRole("dialog")
		expect(dialog).toHaveAttribute("aria-modal", "true")
	})

	it("does not render when open is false", () => {
		render(
			<Modal open={false}>
				<ModalContent>
					<ModalTitle>Modal Title</ModalTitle>
				</ModalContent>
			</Modal>,
		)

		expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
	})

	it("custom close button works", async () => {
		const user = userEvent.setup()
		render(
			<Modal defaultOpen>
				<ModalContent showClose={false}>
					<ModalTitle>Modal Title</ModalTitle>
					<ModalClose>Custom Close</ModalClose>
				</ModalContent>
			</Modal>,
		)

		expect(screen.getByRole("dialog")).toBeInTheDocument()

		await user.click(screen.getByRole("button", { name: /custom close/i }))

		await waitFor(() => {
			expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
		})
	})
})

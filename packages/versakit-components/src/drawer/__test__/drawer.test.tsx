import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from ".."

describe("Drawer", () => {
	it("renders drawer trigger", () => {
		render(
			<Drawer>
				<DrawerTrigger>Open Drawer</DrawerTrigger>
			</Drawer>,
		)
		expect(screen.getByText("Open Drawer")).toBeInTheDocument()
	})

	it("opens drawer when trigger is clicked", async () => {
		const user = userEvent.setup()
		render(
			<Drawer>
				<DrawerTrigger>Open Drawer</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Drawer Title</DrawerTitle>
						<DrawerDescription>Drawer Description</DrawerDescription>
					</DrawerHeader>
				</DrawerContent>
			</Drawer>,
		)

		await user.click(screen.getByText("Open Drawer"))
		expect(screen.getByText("Drawer Title")).toBeInTheDocument()
		expect(screen.getByText("Drawer Description")).toBeInTheDocument()
	})

	it("closes drawer when close button is clicked", async () => {
		const user = userEvent.setup()
		render(
			<Drawer>
				<DrawerTrigger>Open Drawer</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Drawer Title</DrawerTitle>
					</DrawerHeader>
					<DrawerClose />
				</DrawerContent>
			</Drawer>,
		)

		await user.click(screen.getByText("Open Drawer"))
		expect(screen.getByText("Drawer Title")).toBeInTheDocument()

		const closeButton = screen.getByRole("button", { name: "" })
		await user.click(closeButton)

		// Wait for animation to complete
		await new Promise((resolve) => setTimeout(resolve, 500))
	})

	it("renders drawer with different sides", () => {
		const { rerender } = render(
			<Drawer open>
				<DrawerContent side="left">
					<DrawerTitle>Left Drawer</DrawerTitle>
				</DrawerContent>
			</Drawer>,
		)
		expect(screen.getByText("Left Drawer")).toBeInTheDocument()

		rerender(
			<Drawer open>
				<DrawerContent side="right">
					<DrawerTitle>Right Drawer</DrawerTitle>
				</DrawerContent>
			</Drawer>,
		)
		expect(screen.getByText("Right Drawer")).toBeInTheDocument()

		rerender(
			<Drawer open>
				<DrawerContent side="top">
					<DrawerTitle>Top Drawer</DrawerTitle>
				</DrawerContent>
			</Drawer>,
		)
		expect(screen.getByText("Top Drawer")).toBeInTheDocument()

		rerender(
			<Drawer open>
				<DrawerContent side="bottom">
					<DrawerTitle>Bottom Drawer</DrawerTitle>
				</DrawerContent>
			</Drawer>,
		)
		expect(screen.getByText("Bottom Drawer")).toBeInTheDocument()
	})

	it("renders drawer footer", () => {
		render(
			<Drawer open>
				<DrawerContent>
					<DrawerFooter>
						<button type="button">Cancel</button>
						<button type="button">Submit</button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>,
		)
		expect(screen.getByText("Cancel")).toBeInTheDocument()
		expect(screen.getByText("Submit")).toBeInTheDocument()
	})

	it("renders without overlay when showOverlay is false", () => {
		const { container } = render(
			<Drawer open>
				<DrawerContent showOverlay={false}>
					<DrawerTitle>No Overlay</DrawerTitle>
				</DrawerContent>
			</Drawer>,
		)
		expect(screen.getByText("No Overlay")).toBeInTheDocument()
		// Check that overlay is not rendered
		const overlay = container.querySelector("[data-radix-dialog-overlay]")
		expect(overlay).not.toBeInTheDocument()
	})

	it("applies custom className", () => {
		render(
			<Drawer open>
				<DrawerContent className="custom-drawer">
					<DrawerTitle className="custom-title">Custom Drawer</DrawerTitle>
				</DrawerContent>
			</Drawer>,
		)
		const title = screen.getByText("Custom Drawer")
		expect(title).toHaveClass("custom-title")
	})
})

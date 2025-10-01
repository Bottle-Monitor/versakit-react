import "@testing-library/jest-dom"
import { userEvent } from "@testing-library/user-event"
import * as React from "react"
import { describe, expect, it } from "vitest"
import { render, screen, waitFor } from "../../__tests__/test-utils"
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "../index"

describe("Popover", () => {
	it("renders trigger correctly", () => {
		render(
			<Popover>
				<PopoverTrigger>Open Popover</PopoverTrigger>
				<PopoverContent>Popover Content</PopoverContent>
			</Popover>,
		)
		expect(screen.getByText("Open Popover")).toBeInTheDocument()
	})

	it("opens popover on trigger click", async () => {
		const user = userEvent.setup()
		render(
			<Popover>
				<PopoverTrigger>Open</PopoverTrigger>
				<PopoverContent>Content</PopoverContent>
			</Popover>,
		)

		const trigger = screen.getByText("Open")
		await user.click(trigger)

		await waitFor(() => {
			expect(screen.getByText("Content")).toBeInTheDocument()
		})
	})

	it("closes popover on close button click", async () => {
		const user = userEvent.setup()
		render(
			<Popover>
				<PopoverTrigger>Open</PopoverTrigger>
				<PopoverContent>
					<div>Content</div>
					<PopoverClose>Close</PopoverClose>
				</PopoverContent>
			</Popover>,
		)

		// Open popover
		await user.click(screen.getByText("Open"))

		await waitFor(() => {
			expect(screen.getByText("Content")).toBeInTheDocument()
		})

		// Close popover
		await user.click(screen.getByText("Close"))

		await waitFor(() => {
			expect(screen.queryByText("Content")).not.toBeInTheDocument()
		})
	})

	it("applies custom className to content", async () => {
		const user = userEvent.setup()
		render(
			<Popover>
				<PopoverTrigger>Open</PopoverTrigger>
				<PopoverContent className="custom-class" data-testid="popover-content">
					Content
				</PopoverContent>
			</Popover>,
		)

		await user.click(screen.getByText("Open"))

		await waitFor(() => {
			const content = screen.getByTestId("popover-content")
			expect(content).toHaveClass("custom-class")
		})
	})

	it("renders with arrow when showArrow is true", async () => {
		const user = userEvent.setup()
		render(
			<Popover>
				<PopoverTrigger>Open</PopoverTrigger>
				<PopoverContent showArrow>Content</PopoverContent>
			</Popover>,
		)

		await user.click(screen.getByText("Open"))

		await waitFor(() => {
			// Arrow is rendered as an SVG element
			const content = screen.getByText("Content").parentElement
			expect(content?.querySelector("svg")).toBeInTheDocument()
		})
	})

	it("forwards ref correctly for content", async () => {
		const ref = { current: null }
		const user = userEvent.setup()

		render(
			<Popover>
				<PopoverTrigger>Open</PopoverTrigger>
				<PopoverContent ref={ref}>Content</PopoverContent>
			</Popover>,
		)

		await user.click(screen.getByText("Open"))

		await waitFor(() => {
			expect(ref.current).toBeInstanceOf(HTMLDivElement)
		})
	})

	it("forwards ref correctly for trigger", () => {
		const ref = { current: null }

		render(
			<Popover>
				<PopoverTrigger ref={ref}>Open</PopoverTrigger>
				<PopoverContent>Content</PopoverContent>
			</Popover>,
		)

		expect(ref.current).toBeInstanceOf(HTMLButtonElement)
	})
})

describe("PopoverClose", () => {
	it("renders default close icon when no children provided", async () => {
		const user = userEvent.setup()
		render(
			<Popover>
				<PopoverTrigger>Open</PopoverTrigger>
				<PopoverContent>
					<PopoverClose />
				</PopoverContent>
			</Popover>,
		)

		await user.click(screen.getByText("Open"))

		await waitFor(() => {
			// The default X icon from lucide-react is an SVG
			const closeButton = screen.getByRole("button", { name: "" })
			expect(closeButton.querySelector("svg")).toBeInTheDocument()
		})
	})

	it("renders custom close button with children", async () => {
		const user = userEvent.setup()
		render(
			<Popover>
				<PopoverTrigger>Open</PopoverTrigger>
				<PopoverContent>
					<PopoverClose>Custom Close</PopoverClose>
				</PopoverContent>
			</Popover>,
		)

		await user.click(screen.getByText("Open"))

		await waitFor(() => {
			expect(screen.getByText("Custom Close")).toBeInTheDocument()
		})
	})

	it("applies custom className to close button", async () => {
		const user = userEvent.setup()
		render(
			<Popover>
				<PopoverTrigger>Open</PopoverTrigger>
				<PopoverContent>
					<PopoverClose className="custom-close" data-testid="close-button">
						Close
					</PopoverClose>
				</PopoverContent>
			</Popover>,
		)

		await user.click(screen.getByText("Open"))

		await waitFor(() => {
			const closeButton = screen.getByTestId("close-button")
			expect(closeButton).toHaveClass("custom-close")
		})
	})
})

describe("Popover composition", () => {
	it("works with controlled state", async () => {
		const user = userEvent.setup()
		const TestComponent = () => {
			const [open, setOpen] = React.useState(false)

			return (
				<div>
					<div data-testid="state-display">{open ? "open" : "closed"}</div>
					<button type="button" onClick={() => setOpen(true)} data-testid="open-button">
						Open
					</button>
					<button type="button" onClick={() => setOpen(false)} data-testid="close-button">
						Close
					</button>
					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger>Trigger</PopoverTrigger>
						<PopoverContent>Content</PopoverContent>
					</Popover>
				</div>
			)
		}

		render(<TestComponent />)

		// Initially closed
		expect(screen.getByTestId("state-display")).toHaveTextContent("closed")

		// Open via external button
		await user.click(screen.getByTestId("open-button"))

		await waitFor(() => {
			expect(screen.getByTestId("state-display")).toHaveTextContent("open")
			expect(screen.getByText("Content")).toBeInTheDocument()
		})

		// Close via external button
		await user.click(screen.getByTestId("close-button"))

		await waitFor(() => {
			expect(screen.getByTestId("state-display")).toHaveTextContent("closed")
		})
	})

	it("supports different align positions", async () => {
		const user = userEvent.setup()
		render(
			<Popover>
				<PopoverTrigger>Open</PopoverTrigger>
				<PopoverContent align="start" data-testid="popover-content">
					Content
				</PopoverContent>
			</Popover>,
		)

		await user.click(screen.getByText("Open"))

		await waitFor(() => {
			expect(screen.getByTestId("popover-content")).toBeInTheDocument()
		})
	})
})

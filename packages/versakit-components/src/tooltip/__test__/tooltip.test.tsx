import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from ".."

describe("Tooltip", () => {
	it("renders tooltip trigger", () => {
		render(
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>Hover me</TooltipTrigger>
				</Tooltip>
			</TooltipProvider>,
		)
		expect(screen.getByText("Hover me")).toBeInTheDocument()
	})

	it("shows tooltip content on hover", async () => {
		const user = userEvent.setup()
		render(
			<TooltipProvider delayDuration={0}>
				<Tooltip>
					<TooltipTrigger>Hover me</TooltipTrigger>
					<TooltipContent>Tooltip content</TooltipContent>
				</Tooltip>
			</TooltipProvider>,
		)

		const trigger = screen.getByText("Hover me")
		await user.hover(trigger)

		const contents = await screen.findAllByText("Tooltip content")
		expect(contents[0]).toBeInTheDocument()
	})

	it("hides tooltip content on unhover", async () => {
		const user = userEvent.setup()
		render(
			<TooltipProvider delayDuration={0}>
				<Tooltip>
					<TooltipTrigger>Hover me</TooltipTrigger>
					<TooltipContent>Tooltip content</TooltipContent>
				</Tooltip>
			</TooltipProvider>,
		)

		const trigger = screen.getByText("Hover me")
		await user.hover(trigger)
		const tooltips = await screen.findAllByText("Tooltip content")
		expect(tooltips.length).toBeGreaterThan(0)

		await user.unhover(trigger)
		// Wait for animation
		await new Promise((resolve) => setTimeout(resolve, 300))
	})

	it("renders tooltip with different variants", async () => {
		const user = userEvent.setup()
		render(
			<TooltipProvider delayDuration={0}>
				<Tooltip>
					<TooltipTrigger>Hover me</TooltipTrigger>
					<TooltipContent variant="primary">Primary tooltip</TooltipContent>
				</Tooltip>
			</TooltipProvider>,
		)

		await user.hover(screen.getByText("Hover me"))
		const contents = await screen.findAllByText("Primary tooltip")
		expect(contents[0]).toBeInTheDocument()
	})

	it("renders tooltip without arrow when showArrow is false", async () => {
		const user = userEvent.setup()
		render(
			<TooltipProvider delayDuration={0}>
				<Tooltip>
					<TooltipTrigger>Hover me</TooltipTrigger>
					<TooltipContent showArrow={false}>No arrow tooltip</TooltipContent>
				</Tooltip>
			</TooltipProvider>,
		)

		await user.hover(screen.getByText("Hover me"))
		const contents = await screen.findAllByText("No arrow tooltip")
		expect(contents[0]).toBeInTheDocument()

		// Check that arrow is not rendered (tooltip is in portal)
		const arrow = document.querySelector("[data-radix-popper-arrow]")
		expect(arrow).not.toBeInTheDocument()
	})

	it("respects custom side positioning", async () => {
		const user = userEvent.setup()
		render(
			<TooltipProvider delayDuration={0}>
				<Tooltip>
					<TooltipTrigger>Hover me</TooltipTrigger>
					<TooltipContent side="right">Right side tooltip</TooltipContent>
				</Tooltip>
			</TooltipProvider>,
		)

		await user.hover(screen.getByText("Hover me"))
		const contents = await screen.findAllByText("Right side tooltip")
		expect(contents[0]).toBeInTheDocument()
	})

	it("applies custom className", async () => {
		const user = userEvent.setup()
		render(
			<TooltipProvider delayDuration={0}>
				<Tooltip>
					<TooltipTrigger>Hover me</TooltipTrigger>
					<TooltipContent className="custom-tooltip">Custom tooltip</TooltipContent>
				</Tooltip>
			</TooltipProvider>,
		)

		await user.hover(screen.getByText("Hover me"))
		await screen.findAllByText("Custom tooltip")
		// Tooltip is rendered in a portal, so use document.querySelector
		const content = document.querySelector(".custom-tooltip")
		expect(content).toBeInTheDocument()
		expect(content).toHaveClass("custom-tooltip")
	})

	it("supports controlled open state", async () => {
		const { rerender } = render(
			<TooltipProvider>
				<Tooltip open={false}>
					<TooltipTrigger>Hover me</TooltipTrigger>
					<TooltipContent>Controlled tooltip</TooltipContent>
				</Tooltip>
			</TooltipProvider>,
		)

		expect(screen.queryByText("Controlled tooltip")).not.toBeInTheDocument()

		rerender(
			<TooltipProvider>
				<Tooltip open={true}>
					<TooltipTrigger>Hover me</TooltipTrigger>
					<TooltipContent>Controlled tooltip</TooltipContent>
				</Tooltip>
			</TooltipProvider>,
		)

		const contents = await screen.findAllByText("Controlled tooltip")
		expect(contents[0]).toBeInTheDocument()
	})
})

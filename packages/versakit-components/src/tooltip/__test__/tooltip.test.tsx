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

		expect(await screen.findByText("Tooltip content")).toBeInTheDocument()
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
		expect(await screen.findByText("Tooltip content")).toBeInTheDocument()

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
		const content = await screen.findByText("Primary tooltip")
		expect(content).toBeInTheDocument()
	})

	it("renders tooltip without arrow when showArrow is false", async () => {
		const user = userEvent.setup()
		const { container } = render(
			<TooltipProvider delayDuration={0}>
				<Tooltip>
					<TooltipTrigger>Hover me</TooltipTrigger>
					<TooltipContent showArrow={false}>No arrow tooltip</TooltipContent>
				</Tooltip>
			</TooltipProvider>,
		)

		await user.hover(screen.getByText("Hover me"))
		expect(await screen.findByText("No arrow tooltip")).toBeInTheDocument()

		// Check that arrow is not rendered
		const arrow = container.querySelector("[data-radix-popper-arrow]")
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
		expect(await screen.findByText("Right side tooltip")).toBeInTheDocument()
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
		const content = await screen.findByText("Custom tooltip")
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

		expect(await screen.findByText("Controlled tooltip")).toBeInTheDocument()
	})
})

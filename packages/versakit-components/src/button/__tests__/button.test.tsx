import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { Button } from "../index"

describe("Button", () => {
	it("renders correctly", () => {
		render(<Button>Click me</Button>)
		expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument()
	})

	it("handles click events", async () => {
		const handleClick = vi.fn()
		const user = userEvent.setup()

		render(<Button onClick={handleClick}>Click me</Button>)

		await user.click(screen.getByRole("button"))
		expect(handleClick).toHaveBeenCalledTimes(1)
	})

	it("applies variant classes correctly", () => {
		const { rerender } = render(<Button variant="default">Default</Button>)
		expect(screen.getByRole("button")).toHaveClass("bg-primary")

		rerender(<Button variant="destructive">Destructive</Button>)
		expect(screen.getByRole("button")).toHaveClass("bg-destructive")

		rerender(<Button variant="outline">Outline</Button>)
		expect(screen.getByRole("button")).toHaveClass("border")

		rerender(<Button variant="secondary">Secondary</Button>)
		expect(screen.getByRole("button")).toHaveClass("bg-secondary")

		rerender(<Button variant="ghost">Ghost</Button>)
		expect(screen.getByRole("button")).toHaveClass("hover:bg-accent")

		rerender(<Button variant="link">Link</Button>)
		expect(screen.getByRole("button")).toHaveClass("underline-offset-4")
	})

	it("applies size classes correctly", () => {
		const { rerender } = render(<Button size="sm">Small</Button>)
		expect(screen.getByRole("button")).toHaveClass("h-9")

		rerender(<Button size="md">Medium</Button>)
		expect(screen.getByRole("button")).toHaveClass("h-10")

		rerender(<Button size="lg">Large</Button>)
		expect(screen.getByRole("button")).toHaveClass("h-11")

		rerender(<Button size="icon">Icon</Button>)
		expect(screen.getByRole("button")).toHaveClass("h-10", "w-10")
	})

	it("applies custom className", () => {
		render(<Button className="custom-class">Custom</Button>)
		expect(screen.getByRole("button")).toHaveClass("custom-class")
	})

	it("is disabled when disabled prop is true", () => {
		render(<Button disabled>Disabled</Button>)
		expect(screen.getByRole("button")).toBeDisabled()
		expect(screen.getByRole("button")).toHaveClass("disabled:opacity-50")
	})

	it("forwards ref correctly", () => {
		const ref = vi.fn()
		render(<Button ref={ref}>Ref test</Button>)
		expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement))
	})

	it("passes through other HTML attributes", () => {
		render(
			<Button data-testid="custom-button" type="submit" aria-label="Submit form">
				Submit
			</Button>,
		)

		const button = screen.getByTestId("custom-button")
		expect(button).toHaveAttribute("type", "submit")
		expect(button).toHaveAttribute("aria-label", "Submit form")
	})
})

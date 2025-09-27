import "@testing-library/jest-dom"
import { describe, expect, it } from "vitest"
import { render, screen } from "../../__tests__/test-utils"
import { Button } from "../index"

describe("Button", () => {
	it("renders correctly", () => {
		render(<Button>Click me</Button>)
		expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument()
	})

	it("applies default variant and size classes", () => {
		render(<Button>Default Button</Button>)
		const button = screen.getByRole("button")
		expect(button).toHaveClass("bg-black", "text-white", "h-9", "px-4", "py-2")
	})

	it("applies secondary variant classes", () => {
		render(<Button variant="secondary">Secondary Button</Button>)
		const button = screen.getByRole("button")
		expect(button).toHaveClass("bg-gray-100", "text-gray-900")
	})

	it("applies outline variant classes", () => {
		render(<Button variant="outline">Outline Button</Button>)
		const button = screen.getByRole("button")
		expect(button).toHaveClass("border", "border-gray-200", "bg-white")
	})

	it("applies ghost variant classes", () => {
		render(<Button variant="ghost">Ghost Button</Button>)
		const button = screen.getByRole("button")
		expect(button).toHaveClass("hover:bg-gray-100")
	})

	it("applies small size classes", () => {
		render(<Button size="sm">Small Button</Button>)
		const button = screen.getByRole("button")
		expect(button).toHaveClass("h-8", "px-3", "text-xs")
	})

	it("applies large size classes", () => {
		render(<Button size="lg">Large Button</Button>)
		const button = screen.getByRole("button")
		expect(button).toHaveClass("h-10", "px-8")
	})

	it("applies icon size classes", () => {
		render(<Button size="icon">Icon</Button>)
		const button = screen.getByRole("button")
		expect(button).toHaveClass("h-9", "w-9")
	})

	it("is disabled when loading", () => {
		render(<Button loading>Loading Button</Button>)
		const button = screen.getByRole("button")
		expect(button).toBeDisabled()
	})

	it("shows loading spinner when loading", () => {
		render(<Button loading>Loading Button</Button>)
		expect(screen.getByRole("button")).toBeInTheDocument()
		// The Loader2 component should be present
		expect(document.querySelector(".animate-spin")).toBeInTheDocument()
	})

	it("is disabled when disabled prop is true", () => {
		render(<Button disabled>Disabled Button</Button>)
		const button = screen.getByRole("button")
		expect(button).toBeDisabled()
	})

	it("applies custom className", () => {
		render(<Button className="custom-class">Custom Button</Button>)
		const button = screen.getByRole("button")
		expect(button).toHaveClass("custom-class")
	})

	it("forwards ref correctly", () => {
		const ref = { current: null }
		render(<Button ref={ref}>Ref Button</Button>)
		expect(ref.current).toBeInstanceOf(HTMLButtonElement)
	})
})

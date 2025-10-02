import "@testing-library/jest-dom"
import { describe, expect, it } from "vitest"
import { render, screen } from "../../__tests__/test-utils"
import { Spinner } from "../index"

describe("Spinner", () => {
	it("renders correctly", () => {
		render(<Spinner aria-label="Loading spinner" />)
		const spinner = screen.getByRole("status", { name: /loading spinner/i })
		expect(spinner).toBeInTheDocument()
	})

	it("applies default variant classes", () => {
		render(<Spinner />)
		const spinner = screen.getByRole("status")
		expect(spinner).toHaveClass("animate-spin", "border-2", "rounded-full")
	})

	it("applies simple variant classes", () => {
		render(<Spinner variant="simple" />)
		const spinner = screen.getByRole("status")
		expect(spinner).toHaveClass("animate-spin", "border-2", "rounded-full")
	})

	it("applies pulse variant classes", () => {
		render(<Spinner variant="pulse" />)
		const spinner = screen.getByRole("status")
		expect(spinner).toHaveClass("animate-pulse", "rounded-full")
	})

	it("applies ring variant classes", () => {
		render(<Spinner variant="ring" />)
		const spinner = screen.getByRole("status")
		expect(spinner).toHaveClass("animate-spin", "rounded-full")
	})

	it("applies dualRing variant classes", () => {
		render(<Spinner variant="dualRing" />)
		const spinner = screen.getByRole("status")
		expect(spinner).toHaveClass("animate-spin", "rounded-full", "border-2")
	})

	it("renders dots variant with 3 dots", () => {
		render(<Spinner variant="dots" />)
		const spinner = screen.getByRole("status")
		const dots = spinner.querySelectorAll("span:not(.sr-only)")
		expect(dots).toHaveLength(3)
	})

	it("renders bars variant with 3 bars", () => {
		render(<Spinner variant="bars" />)
		const spinner = screen.getByRole("status")
		const bars = spinner.querySelectorAll("span:not(.sr-only)")
		expect(bars).toHaveLength(3)
	})

	it("renders gradient variant with SVG", () => {
		render(<Spinner variant="gradient" />)
		const spinner = screen.getByRole("status")
		const svg = spinner.querySelector("svg")
		expect(svg).toBeInTheDocument()
	})

	it("applies xs size classes", () => {
		render(<Spinner size="xs" />)
		const spinner = screen.getByRole("status")
		expect(spinner).toHaveClass("w-3", "h-3")
	})

	it("applies sm size classes", () => {
		render(<Spinner size="sm" />)
		const spinner = screen.getByRole("status")
		expect(spinner).toHaveClass("w-4", "h-4")
	})

	it("applies default size classes", () => {
		render(<Spinner size="default" />)
		const spinner = screen.getByRole("status")
		expect(spinner).toHaveClass("w-6", "h-6")
	})

	it("applies lg size classes", () => {
		render(<Spinner size="lg" />)
		const spinner = screen.getByRole("status")
		expect(spinner).toHaveClass("w-8", "h-8")
	})

	it("applies xl size classes", () => {
		render(<Spinner size="xl" />)
		const spinner = screen.getByRole("status")
		expect(spinner).toHaveClass("w-12", "h-12")
	})

	it("applies primary color classes", () => {
		render(<Spinner color="primary" />)
		const spinner = screen.getByRole("status")
		expect(spinner).toHaveClass("text-black")
	})

	it("applies secondary color classes", () => {
		render(<Spinner color="secondary" />)
		const spinner = screen.getByRole("status")
		expect(spinner).toHaveClass("text-gray-600")
	})

	it("applies success color classes", () => {
		render(<Spinner color="success" />)
		const spinner = screen.getByRole("status")
		expect(spinner).toHaveClass("text-green-500")
	})

	it("applies warning color classes", () => {
		render(<Spinner color="warning" />)
		const spinner = screen.getByRole("status")
		expect(spinner).toHaveClass("text-yellow-500")
	})

	it("applies danger color classes", () => {
		render(<Spinner color="danger" />)
		const spinner = screen.getByRole("status")
		expect(spinner).toHaveClass("text-red-500")
	})

	it("applies white color classes", () => {
		render(<Spinner color="white" />)
		const spinner = screen.getByRole("status")
		expect(spinner).toHaveClass("text-white")
	})

	it("applies custom className", () => {
		render(<Spinner className="custom-class" />)
		const spinner = screen.getByRole("status")
		expect(spinner).toHaveClass("custom-class")
	})

	it("applies custom speed style", () => {
		render(<Spinner speed={2} />)
		const spinner = screen.getByRole("status")
		expect(spinner).toHaveStyle({ animationDuration: "2s" })
	})

	it("forwards ref correctly", () => {
		const ref = { current: null }
		render(<Spinner ref={ref} />)
		expect(ref.current).toBeInstanceOf(HTMLDivElement)
	})

	it("applies default aria-label when not provided", () => {
		render(<Spinner />)
		const spinner = screen.getByRole("status", { name: /loading/i })
		expect(spinner).toBeInTheDocument()
	})

	it("applies custom aria-label", () => {
		render(<Spinner aria-label="Custom loading message" />)
		const spinner = screen.getByRole("status", { name: /custom loading message/i })
		expect(spinner).toBeInTheDocument()
	})

	it("contains screen reader text", () => {
		render(<Spinner aria-label="Processing" />)
		expect(screen.getByText("Processing")).toHaveClass("sr-only")
	})
})

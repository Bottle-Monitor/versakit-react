import "@testing-library/jest-dom"
import { describe, expect, it } from "vitest"
import { render, screen } from "../../__tests__/test-utils"
import { Progress } from "../index"

describe("Progress", () => {
	it("renders correctly", () => {
		render(<Progress value={50} aria-label="Loading progress" />)
		const progress = screen.getByRole("progressbar", { name: /loading progress/i })
		expect(progress).toBeInTheDocument()
	})

	it("applies correct aria attributes", () => {
		render(<Progress value={50} max={100} aria-label="Upload progress" />)
		const progress = screen.getByRole("progressbar")
		expect(progress).toHaveAttribute("aria-valuenow", "50")
		expect(progress).toHaveAttribute("aria-valuemin", "0")
		expect(progress).toHaveAttribute("aria-valuemax", "100")
	})

	it("clamps value between 0 and max", () => {
		const { rerender } = render(<Progress value={150} max={100} aria-label="Progress" />)
		let progress = screen.getByRole("progressbar")
		expect(progress).toHaveAttribute("aria-valuenow", "100")

		rerender(<Progress value={-50} max={100} aria-label="Progress" />)
		progress = screen.getByRole("progressbar")
		expect(progress).toHaveAttribute("aria-valuenow", "0")
	})

	it("applies primary variant classes by default", () => {
		render(<Progress value={50} />)
		const progress = screen.getByRole("progressbar")
		expect(progress).toBeInTheDocument()
		expect(progress.firstChild).toHaveClass("bg-black")
	})

	it("applies success variant classes", () => {
		render(<Progress value={50} variant="success" />)
		const progress = screen.getByRole("progressbar")
		expect(progress.firstChild).toHaveClass("bg-green-500")
	})

	it("applies warning variant classes", () => {
		render(<Progress value={50} variant="warning" />)
		const progress = screen.getByRole("progressbar")
		expect(progress.firstChild).toHaveClass("bg-yellow-500")
	})

	it("applies danger variant classes", () => {
		render(<Progress value={50} variant="danger" />)
		const progress = screen.getByRole("progressbar")
		expect(progress.firstChild).toHaveClass("bg-red-500")
	})

	it("applies small size classes", () => {
		render(<Progress value={50} size="sm" />)
		const progress = screen.getByRole("progressbar")
		expect(progress).toHaveClass("h-1")
	})

	it("applies default size classes", () => {
		render(<Progress value={50} size="default" />)
		const progress = screen.getByRole("progressbar")
		expect(progress).toHaveClass("h-2")
	})

	it("applies large size classes", () => {
		render(<Progress value={50} size="lg" />)
		const progress = screen.getByRole("progressbar")
		expect(progress).toHaveClass("h-3")
	})

	it("applies custom className", () => {
		render(<Progress value={50} className="custom-class" />)
		const progress = screen.getByRole("progressbar")
		expect(progress).toHaveClass("custom-class")
	})

	it("shows percentage value when showValue is true", () => {
		render(<Progress value={50} showValue />)
		expect(screen.getByText("50%")).toBeInTheDocument()
	})

	it("does not show percentage value by default", () => {
		render(<Progress value={50} />)
		expect(screen.queryByText("50%")).not.toBeInTheDocument()
	})

	it("calculates percentage correctly", () => {
		render(<Progress value={75} max={150} showValue />)
		expect(screen.getByText("50%")).toBeInTheDocument()
	})

	it("forwards ref correctly", () => {
		const ref = { current: null }
		render(<Progress value={50} ref={ref} />)
		expect(ref.current).toBeInstanceOf(HTMLDivElement)
	})

	it("applies default aria-label when not provided", () => {
		render(<Progress value={50} />)
		const progress = screen.getByRole("progressbar", { name: /progress/i })
		expect(progress).toBeInTheDocument()
	})

	it("applies custom indicator className", () => {
		render(<Progress value={50} indicatorClassName="custom-indicator" />)
		const progress = screen.getByRole("progressbar")
		expect(progress.firstChild).toHaveClass("custom-indicator")
	})

	it("handles zero value", () => {
		render(<Progress value={0} showValue />)
		const progress = screen.getByRole("progressbar")
		expect(progress).toHaveAttribute("aria-valuenow", "0")
		expect(screen.getByText("0%")).toBeInTheDocument()
	})

	it("handles max value", () => {
		render(<Progress value={100} showValue />)
		const progress = screen.getByRole("progressbar")
		expect(progress).toHaveAttribute("aria-valuenow", "100")
		expect(screen.getByText("100%")).toBeInTheDocument()
	})
})

import "@testing-library/jest-dom"
import { describe, expect, it } from "vitest"
import { render, screen } from "../../__tests__/test-utils"
import { Alert, AlertDescription, AlertTitle } from "../index"

describe("Alert", () => {
	it("renders correctly", () => {
		render(<Alert>Alert content</Alert>)
		expect(screen.getByRole("alert")).toBeInTheDocument()
		expect(screen.getByText("Alert content")).toBeInTheDocument()
	})

	it("applies default variant classes", () => {
		render(<Alert data-testid="alert">Default Alert</Alert>)
		const alert = screen.getByTestId("alert")
		expect(alert).toHaveClass("bg-white", "text-gray-950", "border-gray-200")
	})

	it("applies info variant classes", () => {
		render(
			<Alert variant="info" data-testid="alert">
				Info Alert
			</Alert>,
		)
		const alert = screen.getByTestId("alert")
		expect(alert).toHaveClass("bg-blue-50", "text-blue-900", "border-blue-200")
	})

	it("applies success variant classes", () => {
		render(
			<Alert variant="success" data-testid="alert">
				Success Alert
			</Alert>,
		)
		const alert = screen.getByTestId("alert")
		expect(alert).toHaveClass("bg-green-50", "text-green-900", "border-green-200")
	})

	it("applies warning variant classes", () => {
		render(
			<Alert variant="warning" data-testid="alert">
				Warning Alert
			</Alert>,
		)
		const alert = screen.getByTestId("alert")
		expect(alert).toHaveClass("bg-yellow-50", "text-yellow-900", "border-yellow-200")
	})

	it("applies destructive variant classes", () => {
		render(
			<Alert variant="destructive" data-testid="alert">
				Destructive Alert
			</Alert>,
		)
		const alert = screen.getByTestId("alert")
		expect(alert).toHaveClass("bg-red-50", "text-red-900", "border-red-200")
	})

	it("applies custom className", () => {
		render(
			<Alert className="custom-class" data-testid="alert">
				Custom Alert
			</Alert>,
		)
		const alert = screen.getByTestId("alert")
		expect(alert).toHaveClass("custom-class")
	})

	it("has role of alert", () => {
		render(<Alert>Alert with role</Alert>)
		const alert = screen.getByRole("alert")
		expect(alert).toBeInTheDocument()
	})

	it("forwards ref correctly", () => {
		const ref = { current: null }
		render(<Alert ref={ref}>Ref Alert</Alert>)
		expect(ref.current).toBeInstanceOf(HTMLDivElement)
	})
})

describe("AlertTitle", () => {
	it("renders correctly", () => {
		render(<AlertTitle>Alert Title</AlertTitle>)
		expect(screen.getByText("Alert Title")).toBeInTheDocument()
	})

	it("applies default classes", () => {
		render(<AlertTitle data-testid="alert-title">Title</AlertTitle>)
		const title = screen.getByTestId("alert-title")
		expect(title).toHaveClass("mb-1", "font-medium", "leading-none", "tracking-tight")
	})

	it("renders as h5 element", () => {
		render(<AlertTitle>Title</AlertTitle>)
		const title = screen.getByText("Title")
		expect(title.tagName).toBe("H5")
	})

	it("applies custom className", () => {
		render(
			<AlertTitle className="custom-title" data-testid="alert-title">
				Title
			</AlertTitle>,
		)
		const title = screen.getByTestId("alert-title")
		expect(title).toHaveClass("custom-title")
	})

	it("forwards ref correctly", () => {
		const ref = { current: null }
		render(<AlertTitle ref={ref}>Title</AlertTitle>)
		expect(ref.current).toBeInstanceOf(HTMLHeadingElement)
	})
})

describe("AlertDescription", () => {
	it("renders correctly", () => {
		render(<AlertDescription>Alert Description</AlertDescription>)
		expect(screen.getByText("Alert Description")).toBeInTheDocument()
	})

	it("applies default classes", () => {
		render(<AlertDescription data-testid="alert-description">Description</AlertDescription>)
		const description = screen.getByTestId("alert-description")
		expect(description).toHaveClass("text-sm")
	})

	it("applies custom className", () => {
		render(
			<AlertDescription className="custom-description" data-testid="alert-description">
				Description
			</AlertDescription>,
		)
		const description = screen.getByTestId("alert-description")
		expect(description).toHaveClass("custom-description")
	})

	it("forwards ref correctly", () => {
		const ref = { current: null }
		render(<AlertDescription ref={ref}>Description</AlertDescription>)
		expect(ref.current).toBeInstanceOf(HTMLDivElement)
	})
})

describe("Alert composition", () => {
	it("renders complete alert with all components", () => {
		render(
			<Alert data-testid="alert">
				<AlertTitle>Alert Title</AlertTitle>
				<AlertDescription>Alert Description</AlertDescription>
			</Alert>,
		)

		expect(screen.getByTestId("alert")).toBeInTheDocument()
		expect(screen.getByText("Alert Title")).toBeInTheDocument()
		expect(screen.getByText("Alert Description")).toBeInTheDocument()
	})

	it("renders alert with different variants", () => {
		const { rerender } = render(
			<Alert variant="info" data-testid="alert">
				<AlertTitle>Info</AlertTitle>
				<AlertDescription>This is an info alert</AlertDescription>
			</Alert>,
		)

		let alert = screen.getByTestId("alert")
		expect(alert).toHaveClass("bg-blue-50")

		rerender(
			<Alert variant="success" data-testid="alert">
				<AlertTitle>Success</AlertTitle>
				<AlertDescription>This is a success alert</AlertDescription>
			</Alert>,
		)

		alert = screen.getByTestId("alert")
		expect(alert).toHaveClass("bg-green-50")

		rerender(
			<Alert variant="warning" data-testid="alert">
				<AlertTitle>Warning</AlertTitle>
				<AlertDescription>This is a warning alert</AlertDescription>
			</Alert>,
		)

		alert = screen.getByTestId("alert")
		expect(alert).toHaveClass("bg-yellow-50")

		rerender(
			<Alert variant="destructive" data-testid="alert">
				<AlertTitle>Error</AlertTitle>
				<AlertDescription>This is an error alert</AlertDescription>
			</Alert>,
		)

		alert = screen.getByTestId("alert")
		expect(alert).toHaveClass("bg-red-50")
	})

	it("renders alert with only description", () => {
		render(
			<Alert data-testid="alert">
				<AlertDescription>Only description</AlertDescription>
			</Alert>,
		)

		expect(screen.getByTestId("alert")).toBeInTheDocument()
		expect(screen.getByText("Only description")).toBeInTheDocument()
		expect(screen.queryByRole("heading")).not.toBeInTheDocument()
	})

	it("renders alert with only title", () => {
		render(
			<Alert data-testid="alert">
				<AlertTitle>Only title</AlertTitle>
			</Alert>,
		)

		expect(screen.getByTestId("alert")).toBeInTheDocument()
		expect(screen.getByText("Only title")).toBeInTheDocument()
	})
})

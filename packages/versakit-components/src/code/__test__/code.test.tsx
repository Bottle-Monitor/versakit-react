import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Code } from ".."

describe("Code", () => {
	it("renders inline code correctly", () => {
		render(<Code>const hello = "world"</Code>)
		expect(screen.getByText('const hello = "world"')).toBeInTheDocument()
	})

	it("renders code block when block prop is true", () => {
		const { container } = render(<Code block>const hello = "world"</Code>)
		const pre = container.querySelector("pre")
		expect(pre).toBeInTheDocument()
		expect(pre?.querySelector("code")).toBeInTheDocument()
	})

	it("renders inline code when block prop is false", () => {
		const { container } = render(<Code block={false}>const hello = "world"</Code>)
		const pre = container.querySelector("pre")
		expect(pre).not.toBeInTheDocument()
	})

	it("applies default variant classes", () => {
		render(<Code>code</Code>)
		const code = screen.getByText("code")
		expect(code).toHaveClass("bg-gray-100", "text-gray-900")
	})

	it("applies primary variant classes", () => {
		render(<Code variant="primary">code</Code>)
		const code = screen.getByText("code")
		expect(code).toHaveClass("bg-blue-50", "text-blue-900")
	})

	it("applies success variant classes", () => {
		render(<Code variant="success">code</Code>)
		const code = screen.getByText("code")
		expect(code).toHaveClass("bg-green-50", "text-green-900")
	})

	it("applies warning variant classes", () => {
		render(<Code variant="warning">code</Code>)
		const code = screen.getByText("code")
		expect(code).toHaveClass("bg-yellow-50", "text-yellow-900")
	})

	it("applies error variant classes", () => {
		render(<Code variant="error">code</Code>)
		const code = screen.getByText("code")
		expect(code).toHaveClass("bg-red-50", "text-red-900")
	})

	it("applies small size classes", () => {
		render(<Code size="sm">code</Code>)
		const code = screen.getByText("code")
		expect(code).toHaveClass("text-xs")
	})

	it("applies default size classes", () => {
		render(<Code size="default">code</Code>)
		const code = screen.getByText("code")
		expect(code).toHaveClass("text-sm")
	})

	it("applies large size classes", () => {
		render(<Code size="lg">code</Code>)
		const code = screen.getByText("code")
		expect(code).toHaveClass("text-base")
	})

	it("applies custom className", () => {
		render(<Code className="custom-class">code</Code>)
		expect(screen.getByText("code")).toHaveClass("custom-class")
	})

	it("sets language attribute", () => {
		render(<Code language="typescript">code</Code>)
		const code = screen.getByText("code")
		expect(code).toHaveAttribute("data-language", "typescript")
	})

	it("applies wrap class when wrap is true", () => {
		render(<Code wrap>code</Code>)
		const code = screen.getByText("code")
		expect(code).toHaveClass("whitespace-pre-wrap")
	})

	it("applies nowrap class when wrap is false for inline code", () => {
		render(<Code wrap={false}>code</Code>)
		const code = screen.getByText("code")
		expect(code).toHaveClass("whitespace-nowrap")
	})

	it("applies pre class for block code without wrap", () => {
		render(
			<Code block wrap={false}>
				code
			</Code>,
		)
		const code = screen.getByText("code")
		expect(code).toHaveClass("whitespace-pre")
	})

	it("forwards ref correctly", () => {
		const ref = { current: null }
		render(<Code ref={ref}>code</Code>)
		expect(ref.current).toBeInstanceOf(HTMLElement)
	})

	it("renders multiline code block", () => {
		const code = `function hello() {
  console.log("Hello, World!")
}`
		render(<Code block>{code}</Code>)
		expect(screen.getByText(/function hello/)).toBeInTheDocument()
	})

	it("applies block-specific classes when block is true", () => {
		render(<Code block>code</Code>)
		const code = screen.getByText("code")
		expect(code).toHaveClass("block", "w-full", "p-4")
	})

	it("applies inline-specific classes when block is false", () => {
		render(<Code>code</Code>)
		const code = screen.getByText("code")
		expect(code).toHaveClass("inline-block", "px-1.5", "py-0.5")
	})
})

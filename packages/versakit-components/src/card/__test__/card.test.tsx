import "@testing-library/jest-dom"
import { describe, expect, it } from "vitest"
import { render, screen } from "../../__tests__/test-utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../index"

describe("Card", () => {
	it("renders correctly", () => {
		render(<Card>Card content</Card>)
		expect(screen.getByText("Card content")).toBeInTheDocument()
	})

	it("applies default variant and padding classes", () => {
		render(<Card data-testid="card">Default Card</Card>)
		const card = screen.getByTestId("card")
		expect(card).toHaveClass("rounded-lg", "border", "bg-white", "text-gray-950", "border-gray-200", "p-6")
	})

	it("applies shadow variant classes", () => {
		render(
			<Card variant="shadow" data-testid="card">
				Shadow Card
			</Card>,
		)
		const card = screen.getByTestId("card")
		expect(card).toHaveClass("border-gray-200", "shadow-md")
	})

	it("applies outline variant classes", () => {
		render(
			<Card variant="outline" data-testid="card">
				Outline Card
			</Card>,
		)
		const card = screen.getByTestId("card")
		expect(card).toHaveClass("border-gray-300")
	})

	it("applies ghost variant classes", () => {
		render(
			<Card variant="ghost" data-testid="card">
				Ghost Card
			</Card>,
		)
		const card = screen.getByTestId("card")
		expect(card).toHaveClass("border-transparent", "shadow-none")
	})

	it("applies none padding classes", () => {
		render(
			<Card padding="none" data-testid="card">
				No Padding Card
			</Card>,
		)
		const card = screen.getByTestId("card")
		expect(card).not.toHaveClass("p-6")
	})

	it("applies small padding classes", () => {
		render(
			<Card padding="sm" data-testid="card">
				Small Padding Card
			</Card>,
		)
		const card = screen.getByTestId("card")
		expect(card).toHaveClass("p-4")
	})

	it("applies large padding classes", () => {
		render(
			<Card padding="lg" data-testid="card">
				Large Padding Card
			</Card>,
		)
		const card = screen.getByTestId("card")
		expect(card).toHaveClass("p-8")
	})

	it("applies custom className", () => {
		render(
			<Card className="custom-class" data-testid="card">
				Custom Card
			</Card>,
		)
		const card = screen.getByTestId("card")
		expect(card).toHaveClass("custom-class")
	})

	it("forwards ref correctly", () => {
		const ref = { current: null }
		render(<Card ref={ref}>Ref Card</Card>)
		expect(ref.current).toBeInstanceOf(HTMLDivElement)
	})
})

describe("CardHeader", () => {
	it("renders correctly", () => {
		render(<CardHeader>Header content</CardHeader>)
		expect(screen.getByText("Header content")).toBeInTheDocument()
	})

	it("applies default padding classes", () => {
		render(<CardHeader data-testid="card-header">Header</CardHeader>)
		const header = screen.getByTestId("card-header")
		expect(header).toHaveClass("flex", "flex-col", "space-y-1.5", "p-6")
	})

	it("applies none padding classes", () => {
		render(
			<CardHeader padding="none" data-testid="card-header">
				Header
			</CardHeader>,
		)
		const header = screen.getByTestId("card-header")
		expect(header).not.toHaveClass("p-6")
	})

	it("applies custom className", () => {
		render(
			<CardHeader className="custom-header" data-testid="card-header">
				Header
			</CardHeader>,
		)
		const header = screen.getByTestId("card-header")
		expect(header).toHaveClass("custom-header")
	})

	it("forwards ref correctly", () => {
		const ref = { current: null }
		render(<CardHeader ref={ref}>Header</CardHeader>)
		expect(ref.current).toBeInstanceOf(HTMLDivElement)
	})
})

describe("CardTitle", () => {
	it("renders correctly", () => {
		render(<CardTitle>Title content</CardTitle>)
		expect(screen.getByText("Title content")).toBeInTheDocument()
	})

	it("applies default classes", () => {
		render(<CardTitle data-testid="card-title">Title</CardTitle>)
		const title = screen.getByTestId("card-title")
		expect(title).toHaveClass("text-2xl", "font-semibold", "leading-none", "tracking-tight")
	})

	it("renders as h3 element", () => {
		render(<CardTitle>Title</CardTitle>)
		const title = screen.getByText("Title")
		expect(title.tagName).toBe("H3")
	})

	it("applies custom className", () => {
		render(
			<CardTitle className="custom-title" data-testid="card-title">
				Title
			</CardTitle>,
		)
		const title = screen.getByTestId("card-title")
		expect(title).toHaveClass("custom-title")
	})

	it("forwards ref correctly", () => {
		const ref = { current: null }
		render(<CardTitle ref={ref}>Title</CardTitle>)
		expect(ref.current).toBeInstanceOf(HTMLHeadingElement)
	})
})

describe("CardDescription", () => {
	it("renders correctly", () => {
		render(<CardDescription>Description content</CardDescription>)
		expect(screen.getByText("Description content")).toBeInTheDocument()
	})

	it("applies default classes", () => {
		render(<CardDescription data-testid="card-description">Description</CardDescription>)
		const description = screen.getByTestId("card-description")
		expect(description).toHaveClass("text-sm", "text-gray-500")
	})

	it("renders as p element", () => {
		render(<CardDescription>Description</CardDescription>)
		const description = screen.getByText("Description")
		expect(description.tagName).toBe("P")
	})

	it("applies custom className", () => {
		render(
			<CardDescription className="custom-description" data-testid="card-description">
				Description
			</CardDescription>,
		)
		const description = screen.getByTestId("card-description")
		expect(description).toHaveClass("custom-description")
	})

	it("forwards ref correctly", () => {
		const ref = { current: null }
		render(<CardDescription ref={ref}>Description</CardDescription>)
		expect(ref.current).toBeInstanceOf(HTMLParagraphElement)
	})
})

describe("CardContent", () => {
	it("renders correctly", () => {
		render(<CardContent>Content</CardContent>)
		expect(screen.getByText("Content")).toBeInTheDocument()
	})

	it("applies default padding classes", () => {
		render(<CardContent data-testid="card-content">Content</CardContent>)
		const content = screen.getByTestId("card-content")
		expect(content).toHaveClass("p-6", "pt-0")
	})

	it("applies none padding classes", () => {
		render(
			<CardContent padding="none" data-testid="card-content">
				Content
			</CardContent>,
		)
		const content = screen.getByTestId("card-content")
		expect(content).not.toHaveClass("p-6")
	})

	it("applies custom className", () => {
		render(
			<CardContent className="custom-content" data-testid="card-content">
				Content
			</CardContent>,
		)
		const content = screen.getByTestId("card-content")
		expect(content).toHaveClass("custom-content")
	})

	it("forwards ref correctly", () => {
		const ref = { current: null }
		render(<CardContent ref={ref}>Content</CardContent>)
		expect(ref.current).toBeInstanceOf(HTMLDivElement)
	})
})

describe("CardFooter", () => {
	it("renders correctly", () => {
		render(<CardFooter>Footer content</CardFooter>)
		expect(screen.getByText("Footer content")).toBeInTheDocument()
	})

	it("applies default padding classes", () => {
		render(<CardFooter data-testid="card-footer">Footer</CardFooter>)
		const footer = screen.getByTestId("card-footer")
		expect(footer).toHaveClass("flex", "items-center", "p-6", "pt-0")
	})

	it("applies none padding classes", () => {
		render(
			<CardFooter padding="none" data-testid="card-footer">
				Footer
			</CardFooter>,
		)
		const footer = screen.getByTestId("card-footer")
		expect(footer).not.toHaveClass("p-6")
	})

	it("applies custom className", () => {
		render(
			<CardFooter className="custom-footer" data-testid="card-footer">
				Footer
			</CardFooter>,
		)
		const footer = screen.getByTestId("card-footer")
		expect(footer).toHaveClass("custom-footer")
	})

	it("forwards ref correctly", () => {
		const ref = { current: null }
		render(<CardFooter ref={ref}>Footer</CardFooter>)
		expect(ref.current).toBeInstanceOf(HTMLDivElement)
	})
})

describe("Card composition", () => {
	it("renders complete card with all components", () => {
		render(
			<Card data-testid="card">
				<CardHeader>
					<CardTitle>Card Title</CardTitle>
					<CardDescription>Card Description</CardDescription>
				</CardHeader>
				<CardContent>Card Content</CardContent>
				<CardFooter>Card Footer</CardFooter>
			</Card>,
		)

		expect(screen.getByTestId("card")).toBeInTheDocument()
		expect(screen.getByText("Card Title")).toBeInTheDocument()
		expect(screen.getByText("Card Description")).toBeInTheDocument()
		expect(screen.getByText("Card Content")).toBeInTheDocument()
		expect(screen.getByText("Card Footer")).toBeInTheDocument()
	})

	it("renders card with mixed variants and padding", () => {
		render(
			<Card variant="shadow" padding="lg" data-testid="card">
				<CardHeader padding="none">
					<CardTitle>Title</CardTitle>
				</CardHeader>
				<CardContent padding="none">Content</CardContent>
				<CardFooter padding="none">Footer</CardFooter>
			</Card>,
		)

		const card = screen.getByTestId("card")
		expect(card).toHaveClass("shadow-md", "p-8")
	})
})

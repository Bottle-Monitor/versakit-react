import { type RenderOptions, render } from "@testing-library/react"
import type React from "react"

// Custom render function that includes providers
const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, "wrapper">) => {
	// You can add providers here in the future if needed
	// const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
	//   return <div>{children}</div>
	// }

	return render(ui, { ...options })
}

// Re-export everything
export * from "@testing-library/react"
export { customRender as render }

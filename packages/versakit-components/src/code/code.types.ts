import type { VariantProps } from "tailwind-variants"
import type { codeVariants } from "./code.variants"

export interface CodeProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof codeVariants> {
	/**
	 * If true, renders a code block with <pre><code>. Otherwise, renders inline <code>.
	 * @default false
	 */
	block?: boolean

	/**
	 * Programming language for syntax highlighting hint (semantic only, no actual highlighting)
	 */
	language?: string

	/**
	 * If true, enables text wrapping in code blocks
	 * @default false
	 */
	wrap?: boolean
}

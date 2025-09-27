import type { VariantProps } from "tailwind-variants"
import type { buttonVariants } from "./button.variants"

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	/**
	 * If true, the button will be rendered as a child within the component.
	 * This child component must be a valid React component.
	 */
	asChild?: boolean
	/**
	 * If true, the button will show a loading spinner and be disabled.
	 */
	loading?: boolean
}

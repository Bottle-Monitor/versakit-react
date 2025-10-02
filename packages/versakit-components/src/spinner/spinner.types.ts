import type { VariantProps } from "tailwind-variants"
import type { spinnerVariants } from "./spinner.variants"

export interface SpinnerProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
		VariantProps<typeof spinnerVariants> {
	/**
	 * The visual style variant of the spinner
	 * @default "default"
	 */
	variant?: "default" | "simple" | "gradient" | "dots" | "bars" | "pulse" | "ring" | "dualRing"
	/**
	 * The size of the spinner
	 * @default "default"
	 */
	size?: "xs" | "sm" | "default" | "lg" | "xl"
	/**
	 * The color theme of the spinner
	 * @default "primary"
	 */
	color?: "primary" | "secondary" | "success" | "warning" | "danger" | "white"
	/**
	 * Speed of the animation (in seconds)
	 * @default 1
	 */
	speed?: number
	/**
	 * Accessible label for screen readers
	 */
	"aria-label"?: string
}

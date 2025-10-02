import type { VariantProps } from "tailwind-variants"
import type { progressIndicatorVariants, progressRootVariants } from "./progress.variants"

export interface ProgressProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof progressRootVariants>,
		Pick<VariantProps<typeof progressIndicatorVariants>, "variant"> {
	/**
	 * The current progress value (0-100)
	 * @default 0
	 */
	value?: number
	/**
	 * The maximum progress value
	 * @default 100
	 */
	max?: number
	/**
	 * If true, displays the percentage text
	 * @default false
	 */
	showValue?: boolean
	/**
	 * Custom label for accessibility
	 */
	"aria-label"?: string
	/**
	 * If true, enables animation when value changes
	 * @default true
	 */
	animated?: boolean
	/**
	 * Custom indicator className
	 */
	indicatorClassName?: string
}

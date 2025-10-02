import { cn } from "@versakit/shared"
import * as React from "react"
import type { ProgressProps } from "./progress.types"
import { progressIndicatorVariants, progressRootVariants } from "./progress.variants"

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
	(
		{
			className,
			value = 0,
			max = 100,
			size,
			variant,
			showValue = false,
			animated = true,
			indicatorClassName,
			"aria-label": ariaLabel,
			...props
		},
		ref,
	) => {
		// Ensure value is between 0 and max
		const clampedValue = Math.min(Math.max(value, 0), max)
		const percentage = (clampedValue / max) * 100

		return (
			<div className="relative w-full">
				<div
					ref={ref}
					role="progressbar"
					aria-valuemin={0}
					aria-valuemax={max}
					aria-valuenow={clampedValue}
					aria-label={ariaLabel || "Progress"}
					className={cn(progressRootVariants({ size, className }))}
					{...props}
				>
					<div
						className={cn(progressIndicatorVariants({ variant, animated, className: indicatorClassName }))}
						style={{ transform: `translateX(-${100 - percentage}%)` }}
					/>
				</div>
				{showValue && (
					<span className="mt-1 text-xs text-gray-600 block text-right" aria-live="polite">
						{Math.round(percentage)}%
					</span>
				)}
			</div>
		)
	},
)
Progress.displayName = "Progress"

export { Progress }
export type { ProgressProps }
export { progressIndicatorVariants, progressRootVariants }

import { cn } from "@versakit/shared"
import * as React from "react"
import type { SpinnerProps } from "./spinner.types"
import { spinnerBarVariants, spinnerDotVariants, spinnerVariants } from "./spinner.variants"

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
	(
		{
			className,
			variant = "default",
			size = "default",
			color = "primary",
			speed = 1,
			"aria-label": ariaLabel,
			style,
			...props
		},
		ref,
	) => {
		const gradientId = React.useId()
		const animationStyle = {
			...style,
			animationDuration: `${speed}s`,
		}

		// Dots variant - 3 bouncing dots
		if (variant === "dots") {
			return (
				// biome-ignore lint/a11y/useSemanticElements: role="status" is semantically correct for loading indicators
				<div
					ref={ref}
					role="status"
					aria-live="polite"
					aria-label={ariaLabel || "Loading"}
					className={cn(spinnerVariants({ variant, color, className }))}
					{...props}
				>
					<span className={cn(spinnerDotVariants({ size }))} style={{ ...animationStyle, animationDelay: "0s" }} />
					<span className={cn(spinnerDotVariants({ size }))} style={{ ...animationStyle, animationDelay: "0.15s" }} />
					<span className={cn(spinnerDotVariants({ size }))} style={{ ...animationStyle, animationDelay: "0.3s" }} />
					<span className="sr-only">{ariaLabel || "Loading"}</span>
				</div>
			)
		}

		// Bars variant - 3 pulsing bars
		if (variant === "bars") {
			return (
				// biome-ignore lint/a11y/useSemanticElements: role="status" is semantically correct for loading indicators
				<div
					ref={ref}
					role="status"
					aria-live="polite"
					aria-label={ariaLabel || "Loading"}
					className={cn(spinnerVariants({ variant, color, className }))}
					{...props}
				>
					<span className={cn(spinnerBarVariants({ size }))} style={{ ...animationStyle, animationDelay: "0s" }} />
					<span className={cn(spinnerBarVariants({ size }))} style={{ ...animationStyle, animationDelay: "0.15s" }} />
					<span className={cn(spinnerBarVariants({ size }))} style={{ ...animationStyle, animationDelay: "0.3s" }} />
					<span className="sr-only">{ariaLabel || "Loading"}</span>
				</div>
			)
		}

		// Gradient variant - circular gradient spinner
		if (variant === "gradient") {
			return (
				// biome-ignore lint/a11y/useSemanticElements: role="status" is semantically correct for loading indicators
				<div
					ref={ref}
					role="status"
					aria-live="polite"
					aria-label={ariaLabel || "Loading"}
					className={cn(spinnerVariants({ variant, size, color, className }))}
					style={animationStyle}
					{...props}
				>
					<svg className="w-full h-full" viewBox="0 0 50 50" aria-hidden="true">
						<title>{ariaLabel || "Loading"}</title>
						<defs>
							<linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" stopColor="currentColor" stopOpacity="0" />
								<stop offset="100%" stopColor="currentColor" stopOpacity="1" />
							</linearGradient>
						</defs>
						<circle
							cx="25"
							cy="25"
							r="20"
							fill="none"
							stroke={`url(#${gradientId})`}
							strokeWidth="4"
							strokeLinecap="round"
						/>
					</svg>
					<span className="sr-only">{ariaLabel || "Loading"}</span>
				</div>
			)
		}

		// Default, Simple, Pulse, Ring, DualRing variants - simple div with border
		return (
			// biome-ignore lint/a11y/useSemanticElements: role="status" is semantically correct for loading indicators
			<div
				ref={ref}
				role="status"
				aria-live="polite"
				aria-label={ariaLabel || "Loading"}
				className={cn(spinnerVariants({ variant, size, color, className }))}
				style={animationStyle}
				{...props}
			>
				<span className="sr-only">{ariaLabel || "Loading"}</span>
			</div>
		)
	},
)
Spinner.displayName = "Spinner"

export { Spinner }
export type { SpinnerProps }
export { spinnerBarVariants, spinnerDotVariants, spinnerVariants }

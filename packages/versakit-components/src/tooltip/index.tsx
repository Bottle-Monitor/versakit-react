import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "@versakit/shared"
import * as React from "react"
import type {
	TooltipArrowProps,
	TooltipContentProps,
	TooltipProps,
	TooltipProviderProps,
	TooltipTriggerProps,
} from "./tooltip.types"
import { tooltipArrowVariants, tooltipContentVariants } from "./tooltip.variants"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipPortal = TooltipPrimitive.Portal

const TooltipContent = React.forwardRef<React.ElementRef<typeof TooltipPrimitive.Content>, TooltipContentProps>(
	({ className, sideOffset = 4, variant, showArrow = true, children, ...props }, ref) => (
		<TooltipPortal>
			<TooltipPrimitive.Content
				ref={ref}
				sideOffset={sideOffset}
				className={cn(tooltipContentVariants({ variant, className }))}
				{...props}
			>
				{children}
				{showArrow && <TooltipArrow variant={variant} />}
			</TooltipPrimitive.Content>
		</TooltipPortal>
	),
)
TooltipContent.displayName = TooltipPrimitive.Content.displayName

const TooltipArrow = React.forwardRef<React.ElementRef<typeof TooltipPrimitive.Arrow>, TooltipArrowProps>(
	({ className, variant, ...props }, ref) => (
		<TooltipPrimitive.Arrow ref={ref} className={cn(tooltipArrowVariants({ variant, className }))} {...props} />
	),
)
TooltipArrow.displayName = TooltipPrimitive.Arrow.displayName

export { Tooltip, TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger }
export type { TooltipArrowProps, TooltipContentProps, TooltipProps, TooltipProviderProps, TooltipTriggerProps }
export { tooltipArrowVariants, tooltipContentVariants }

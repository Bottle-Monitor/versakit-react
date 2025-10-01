import * as PopoverPrimitive from "@radix-ui/react-popover"
import { cn } from "@versakit/shared"
import { X } from "lucide-react"
import * as React from "react"
import type {
	PopoverArrowProps,
	PopoverCloseProps,
	PopoverContentProps,
	PopoverProps,
	PopoverTriggerProps,
} from "./popover.types"
import { popoverArrowVariants, popoverCloseVariants, popoverContentVariants } from "./popover.variants"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverAnchor = PopoverPrimitive.Anchor

const PopoverPortal = PopoverPrimitive.Portal

const PopoverContent = React.forwardRef<React.ElementRef<typeof PopoverPrimitive.Content>, PopoverContentProps>(
	({ className, align = "center", sideOffset = 4, showArrow = false, children, ...props }, ref) => (
		<PopoverPortal>
			<PopoverPrimitive.Content
				ref={ref}
				align={align}
				sideOffset={sideOffset}
				className={cn(popoverContentVariants({ className }))}
				{...props}
			>
				{children}
				{showArrow && <PopoverArrow />}
			</PopoverPrimitive.Content>
		</PopoverPortal>
	),
)
PopoverContent.displayName = PopoverPrimitive.Content.displayName

const PopoverArrow = React.forwardRef<React.ElementRef<typeof PopoverPrimitive.Arrow>, PopoverArrowProps>(
	({ className, ...props }, ref) => (
		<PopoverPrimitive.Arrow ref={ref} className={cn(popoverArrowVariants({ className }))} {...props} />
	),
)
PopoverArrow.displayName = PopoverPrimitive.Arrow.displayName

const PopoverClose = React.forwardRef<React.ElementRef<typeof PopoverPrimitive.Close>, PopoverCloseProps>(
	({ className, children, ...props }, ref) => (
		<PopoverPrimitive.Close ref={ref} className={cn(popoverCloseVariants({ className }))} {...props}>
			{children || <X className="h-4 w-4" />}
		</PopoverPrimitive.Close>
	),
)
PopoverClose.displayName = PopoverPrimitive.Close.displayName

export { Popover, PopoverAnchor, PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverTrigger }
export type { PopoverArrowProps, PopoverCloseProps, PopoverContentProps, PopoverProps, PopoverTriggerProps }
export { popoverArrowVariants, popoverCloseVariants, popoverContentVariants }

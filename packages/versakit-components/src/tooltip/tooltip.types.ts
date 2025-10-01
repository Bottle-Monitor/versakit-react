import type * as TooltipPrimitive from "@radix-ui/react-tooltip"
import type { VariantProps } from "tailwind-variants"
import type { tooltipArrowVariants, tooltipContentVariants } from "./tooltip.variants"

export interface TooltipProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root> {}

export interface TooltipTriggerProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger> {}

export interface TooltipContentProps
	extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
		VariantProps<typeof tooltipContentVariants> {
	/**
	 * Whether to show the arrow
	 * @default true
	 */
	showArrow?: boolean
}

export interface TooltipProviderProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Provider> {}

export interface TooltipArrowProps
	extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow>,
		VariantProps<typeof tooltipArrowVariants> {}

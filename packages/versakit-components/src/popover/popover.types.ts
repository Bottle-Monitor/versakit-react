import type * as PopoverPrimitive from "@radix-ui/react-popover"
import type { VariantProps } from "tailwind-variants"
import type { popoverCloseVariants, popoverContentVariants } from "./popover.variants"

export interface PopoverProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Root> {}

export interface PopoverTriggerProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger> {}

export interface PopoverContentProps
	extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>,
		VariantProps<typeof popoverContentVariants> {
	/**
	 * Whether to show the arrow
	 * @default false
	 */
	showArrow?: boolean
}

export interface PopoverCloseProps
	extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Close>,
		VariantProps<typeof popoverCloseVariants> {}

export interface PopoverArrowProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Arrow> {}

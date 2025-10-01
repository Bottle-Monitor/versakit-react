import type * as DialogPrimitive from "@radix-ui/react-dialog"
import type { VariantProps } from "tailwind-variants"
import type {
	drawerCloseVariants,
	drawerContentVariants,
	drawerDescriptionVariants,
	drawerFooterVariants,
	drawerHeaderVariants,
	drawerOverlayVariants,
	drawerTitleVariants,
} from "./drawer.variants"

export interface DrawerProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {}

export interface DrawerTriggerProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger> {}

export interface DrawerPortalProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Portal> {}

export interface DrawerOverlayProps
	extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>,
		VariantProps<typeof drawerOverlayVariants> {}

export interface DrawerContentProps
	extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
		VariantProps<typeof drawerContentVariants> {
	/**
	 * Whether to show the overlay
	 * @default true
	 */
	showOverlay?: boolean
}

export interface DrawerHeaderProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof drawerHeaderVariants> {}

export interface DrawerFooterProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof drawerFooterVariants> {}

export interface DrawerTitleProps
	extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>,
		VariantProps<typeof drawerTitleVariants> {}

export interface DrawerDescriptionProps
	extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>,
		VariantProps<typeof drawerDescriptionVariants> {}

export interface DrawerCloseProps
	extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>,
		VariantProps<typeof drawerCloseVariants> {}

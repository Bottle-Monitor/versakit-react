import * as DialogPrimitive from "@radix-ui/react-dialog"
import { cn } from "@versakit/shared"
import { X } from "lucide-react"
import * as React from "react"
import type {
	DrawerCloseProps,
	DrawerContentProps,
	DrawerDescriptionProps,
	DrawerFooterProps,
	DrawerHeaderProps,
	DrawerOverlayProps,
	DrawerPortalProps,
	DrawerProps,
	DrawerTitleProps,
	DrawerTriggerProps,
} from "./drawer.types"
import {
	drawerCloseVariants,
	drawerContentVariants,
	drawerDescriptionVariants,
	drawerFooterVariants,
	drawerHeaderVariants,
	drawerOverlayVariants,
	drawerTitleVariants,
} from "./drawer.variants"

const Drawer = DialogPrimitive.Root

const DrawerTrigger = DialogPrimitive.Trigger

const DrawerPortal = DialogPrimitive.Portal

const DrawerClose = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Close>, DrawerCloseProps>(
	({ className, children, ...props }, ref) => (
		<DialogPrimitive.Close ref={ref} className={cn(drawerCloseVariants({ className }))} {...props}>
			{children || <X className="h-4 w-4" />}
		</DialogPrimitive.Close>
	),
)
DrawerClose.displayName = DialogPrimitive.Close.displayName

const DrawerOverlay = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Overlay>, DrawerOverlayProps>(
	({ className, ...props }, ref) => (
		<DialogPrimitive.Overlay ref={ref} className={cn(drawerOverlayVariants({ className }))} {...props} />
	),
)
DrawerOverlay.displayName = DialogPrimitive.Overlay.displayName

const DrawerContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, DrawerContentProps>(
	({ side = "right", className, children, showOverlay = true, ...props }, ref) => (
		<DrawerPortal>
			{showOverlay && <DrawerOverlay />}
			<DialogPrimitive.Content ref={ref} className={cn(drawerContentVariants({ side, className }))} {...props}>
				{children}
			</DialogPrimitive.Content>
		</DrawerPortal>
	),
)
DrawerContent.displayName = DialogPrimitive.Content.displayName

const DrawerHeader = ({ className, ...props }: DrawerHeaderProps) => (
	<div className={cn(drawerHeaderVariants({ className }))} {...props} />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({ className, ...props }: DrawerFooterProps) => (
	<div className={cn(drawerFooterVariants({ className }))} {...props} />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Title>, DrawerTitleProps>(
	({ className, ...props }, ref) => (
		<DialogPrimitive.Title ref={ref} className={cn(drawerTitleVariants({ className }))} {...props} />
	),
)
DrawerTitle.displayName = DialogPrimitive.Title.displayName

const DrawerDescription = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Description>,
	DrawerDescriptionProps
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Description ref={ref} className={cn(drawerDescriptionVariants({ className }))} {...props} />
))
DrawerDescription.displayName = DialogPrimitive.Description.displayName

export {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerPortal,
	DrawerTitle,
	DrawerTrigger,
}
export type {
	DrawerCloseProps,
	DrawerContentProps,
	DrawerDescriptionProps,
	DrawerFooterProps,
	DrawerHeaderProps,
	DrawerOverlayProps,
	DrawerPortalProps,
	DrawerProps,
	DrawerTitleProps,
	DrawerTriggerProps,
}
export {
	drawerCloseVariants,
	drawerContentVariants,
	drawerDescriptionVariants,
	drawerFooterVariants,
	drawerHeaderVariants,
	drawerOverlayVariants,
	drawerTitleVariants,
}

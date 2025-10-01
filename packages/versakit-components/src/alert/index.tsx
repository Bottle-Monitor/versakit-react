import { cn } from "@versakit/shared"
import * as React from "react"
import type {
	AlertContentProps,
	AlertDescriptionProps,
	AlertIconProps,
	AlertProps,
	AlertTitleProps,
} from "./alert.types"
import {
	alertContentVariants,
	alertDescriptionVariants,
	alertIconVariants,
	alertTitleVariants,
	alertVariants,
} from "./alert.variants"

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({ className, variant, ...props }, ref) => (
	<div ref={ref} role="alert" className={cn(alertVariants({ variant, className }))} {...props} />
))
Alert.displayName = "Alert"

const AlertIcon = React.forwardRef<SVGSVGElement, AlertIconProps>(({ className, variant, children, ...props }, ref) => {
	const iconClassName = cn(
		alertIconVariants({ variant }),
		className,
		// biome-ignore lint/suspicious/noExplicitAny: accessing props from ReactElement
		(children as any).props?.className,
	)
	return React.cloneElement(
		children,
		{
			className: iconClassName,
			...props,
			...(ref ? { ref } : {}),
		} as any, // biome-ignore lint/suspicious/noExplicitAny: ref typing for cloneElement
	)
})
AlertIcon.displayName = "AlertIcon"

const AlertContent = React.forwardRef<HTMLDivElement, AlertContentProps>(({ className, hasIcon, ...props }, ref) => (
	<div ref={ref} className={cn(alertContentVariants({ hasIcon, className }))} {...props} />
))
AlertContent.displayName = "AlertContent"

const AlertTitle = React.forwardRef<HTMLHeadingElement, AlertTitleProps>(({ className, ...props }, ref) => (
	<h5 ref={ref} className={cn(alertTitleVariants({ className }))} {...props} />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<HTMLParagraphElement, AlertDescriptionProps>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn(alertDescriptionVariants({ className }))} {...props} />
	),
)
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertContent, AlertDescription, AlertIcon, AlertTitle }
export type { AlertContentProps, AlertDescriptionProps, AlertIconProps, AlertProps, AlertTitleProps }
export { alertContentVariants, alertDescriptionVariants, alertIconVariants, alertTitleVariants, alertVariants }

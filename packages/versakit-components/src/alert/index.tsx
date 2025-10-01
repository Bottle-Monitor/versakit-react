import { cn } from "@versakit/shared"
import * as React from "react"
import type { AlertDescriptionProps, AlertProps, AlertTitleProps } from "./alert.types"
import { alertDescriptionVariants, alertTitleVariants, alertVariants } from "./alert.variants"

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({ className, variant, ...props }, ref) => (
	<div ref={ref} role="alert" className={cn(alertVariants({ variant, className }))} {...props} />
))
Alert.displayName = "Alert"

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

export { Alert, AlertDescription, AlertTitle }
export type { AlertDescriptionProps, AlertProps, AlertTitleProps }
export { alertDescriptionVariants, alertTitleVariants, alertVariants }

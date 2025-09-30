import { cn } from "@versakit/shared"
import * as React from "react"
import type {
	CardContentProps,
	CardDescriptionProps,
	CardFooterProps,
	CardHeaderProps,
	CardProps,
	CardTitleProps,
} from "./card.types"
import {
	cardContentVariants,
	cardDescriptionVariants,
	cardFooterVariants,
	cardHeaderVariants,
	cardTitleVariants,
	cardVariants,
} from "./card.variants"

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, variant, padding, ...props }, ref) => (
	<div ref={ref} className={cn(cardVariants({ variant, padding, className }))} {...props} />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({ className, padding, ...props }, ref) => (
	<div ref={ref} className={cn(cardHeaderVariants({ padding, className }))} {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(({ className, ...props }, ref) => (
	<h3 ref={ref} className={cn(cardTitleVariants({ className }))} {...props} />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(({ className, ...props }, ref) => (
	<p ref={ref} className={cn(cardDescriptionVariants({ className }))} {...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({ className, padding, ...props }, ref) => (
	<div ref={ref} className={cn(cardContentVariants({ padding, className }))} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(({ className, padding, ...props }, ref) => (
	<div ref={ref} className={cn(cardFooterVariants({ padding, className }))} {...props} />
))
CardFooter.displayName = "CardFooter"

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
export type { CardContentProps, CardDescriptionProps, CardFooterProps, CardHeaderProps, CardProps, CardTitleProps }
export {
	cardContentVariants,
	cardDescriptionVariants,
	cardFooterVariants,
	cardHeaderVariants,
	cardTitleVariants,
	cardVariants,
}

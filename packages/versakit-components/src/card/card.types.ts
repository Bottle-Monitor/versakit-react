import type { VariantProps } from "tailwind-variants"
import type {
	cardContentVariants,
	cardDescriptionVariants,
	cardFooterVariants,
	cardHeaderVariants,
	cardTitleVariants,
	cardVariants,
} from "./card.variants"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

export interface CardHeaderProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof cardHeaderVariants> {}

export interface CardTitleProps
	extends React.HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof cardTitleVariants> {}

export interface CardDescriptionProps
	extends React.HTMLAttributes<HTMLParagraphElement>,
		VariantProps<typeof cardDescriptionVariants> {}

export interface CardContentProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof cardContentVariants> {}

export interface CardFooterProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof cardFooterVariants> {}

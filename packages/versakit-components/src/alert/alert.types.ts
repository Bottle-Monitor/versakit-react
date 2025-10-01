import type { VariantProps } from "tailwind-variants"
import type {
	alertContentVariants,
	alertDescriptionVariants,
	alertIconVariants,
	alertTitleVariants,
	alertVariants,
} from "./alert.variants"

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {}

export interface AlertIconProps extends React.HTMLAttributes<SVGElement>, VariantProps<typeof alertIconVariants> {
	children: React.ReactElement
}

export interface AlertContentProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof alertContentVariants> {}

export interface AlertTitleProps
	extends React.HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof alertTitleVariants> {}

export interface AlertDescriptionProps
	extends React.HTMLAttributes<HTMLParagraphElement>,
		VariantProps<typeof alertDescriptionVariants> {}

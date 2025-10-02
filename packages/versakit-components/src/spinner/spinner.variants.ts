import { tv } from "tailwind-variants"

export const spinnerVariants = tv({
	base: ["inline-block"],
	variants: {
		variant: {
			default: "animate-spin border-2 border-current border-t-transparent rounded-full",
			simple: "animate-spin border-2 border-current border-t-transparent rounded-full",
			gradient: "animate-spin rounded-full",
			dots: "flex gap-1",
			bars: "flex gap-1",
			pulse: "animate-pulse rounded-full",
			ring: "animate-spin rounded-full",
			dualRing: "animate-spin rounded-full border-2 border-transparent",
		},
		size: {
			xs: "",
			sm: "",
			default: "",
			lg: "",
			xl: "",
		},
		color: {
			primary: "text-black",
			secondary: "text-gray-600",
			success: "text-green-500",
			warning: "text-yellow-500",
			danger: "text-red-500",
			white: "text-white",
		},
	},
	compoundVariants: [
		// Default/Simple sizes
		{
			variant: ["default", "simple"],
			size: "xs",
			class: "w-3 h-3",
		},
		{
			variant: ["default", "simple"],
			size: "sm",
			class: "w-4 h-4",
		},
		{
			variant: ["default", "simple"],
			size: "default",
			class: "w-6 h-6",
		},
		{
			variant: ["default", "simple"],
			size: "lg",
			class: "w-8 h-8",
		},
		{
			variant: ["default", "simple"],
			size: "xl",
			class: "w-12 h-12",
		},
		// Gradient sizes
		{
			variant: "gradient",
			size: "xs",
			class: "w-3 h-3",
		},
		{
			variant: "gradient",
			size: "sm",
			class: "w-4 h-4",
		},
		{
			variant: "gradient",
			size: "default",
			class: "w-6 h-6",
		},
		{
			variant: "gradient",
			size: "lg",
			class: "w-8 h-8",
		},
		{
			variant: "gradient",
			size: "xl",
			class: "w-12 h-12",
		},
		// Pulse sizes
		{
			variant: "pulse",
			size: "xs",
			class: "w-3 h-3 bg-current",
		},
		{
			variant: "pulse",
			size: "sm",
			class: "w-4 h-4 bg-current",
		},
		{
			variant: "pulse",
			size: "default",
			class: "w-6 h-6 bg-current",
		},
		{
			variant: "pulse",
			size: "lg",
			class: "w-8 h-8 bg-current",
		},
		{
			variant: "pulse",
			size: "xl",
			class: "w-12 h-12 bg-current",
		},
		// Ring sizes
		{
			variant: "ring",
			size: "xs",
			class: "w-3 h-3 border-2 border-current border-t-transparent",
		},
		{
			variant: "ring",
			size: "sm",
			class: "w-4 h-4 border-2 border-current border-t-transparent",
		},
		{
			variant: "ring",
			size: "default",
			class: "w-6 h-6 border-[3px] border-current border-t-transparent",
		},
		{
			variant: "ring",
			size: "lg",
			class: "w-8 h-8 border-[3px] border-current border-t-transparent",
		},
		{
			variant: "ring",
			size: "xl",
			class: "w-12 h-12 border-4 border-current border-t-transparent",
		},
		// DualRing sizes
		{
			variant: "dualRing",
			size: "xs",
			class: "w-3 h-3 border-t-current border-r-current",
		},
		{
			variant: "dualRing",
			size: "sm",
			class: "w-4 h-4 border-t-current border-r-current",
		},
		{
			variant: "dualRing",
			size: "default",
			class: "w-6 h-6 border-t-current border-r-current",
		},
		{
			variant: "dualRing",
			size: "lg",
			class: "w-8 h-8 border-t-current border-r-current",
		},
		{
			variant: "dualRing",
			size: "xl",
			class: "w-12 h-12 border-t-current border-r-current",
		},
	],
	defaultVariants: {
		variant: "default",
		size: "default",
		color: "primary",
	},
})

export const spinnerDotVariants = tv({
	base: ["rounded-full bg-current animate-bounce"],
	variants: {
		size: {
			xs: "w-1 h-1",
			sm: "w-1.5 h-1.5",
			default: "w-2 h-2",
			lg: "w-2.5 h-2.5",
			xl: "w-3 h-3",
		},
	},
	defaultVariants: {
		size: "default",
	},
})

export const spinnerBarVariants = tv({
	base: ["w-1 bg-current rounded-full animate-pulse"],
	variants: {
		size: {
			xs: "h-2",
			sm: "h-3",
			default: "h-4",
			lg: "h-6",
			xl: "h-8",
		},
	},
	defaultVariants: {
		size: "default",
	},
})

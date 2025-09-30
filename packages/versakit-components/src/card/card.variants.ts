import { tv } from "tailwind-variants"

export const cardVariants = tv({
	base: ["rounded-lg border bg-white text-gray-950", "transition-shadow"],
	variants: {
		variant: {
			default: "border-gray-200",
			shadow: "border-gray-200 shadow-md",
			outline: "border-gray-300",
			ghost: "border-transparent shadow-none",
		},
		padding: {
			none: "",
			sm: "p-4",
			default: "p-6",
			lg: "p-8",
		},
	},
	defaultVariants: {
		variant: "default",
		padding: "default",
	},
})

export const cardHeaderVariants = tv({
	base: "flex flex-col space-y-1.5",
	variants: {
		padding: {
			none: "",
			default: "p-6",
		},
	},
	defaultVariants: {
		padding: "default",
	},
})

export const cardTitleVariants = tv({
	base: "text-2xl font-semibold leading-none tracking-tight",
})

export const cardDescriptionVariants = tv({
	base: "text-sm text-gray-500",
})

export const cardContentVariants = tv({
	base: "",
	variants: {
		padding: {
			none: "",
			default: "p-6 pt-0",
		},
	},
	defaultVariants: {
		padding: "default",
	},
})

export const cardFooterVariants = tv({
	base: "flex items-center",
	variants: {
		padding: {
			none: "",
			default: "p-6 pt-0",
		},
	},
	defaultVariants: {
		padding: "default",
	},
})

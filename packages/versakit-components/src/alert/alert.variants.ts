import { tv } from "tailwind-variants"

export const alertVariants = tv({
	base: "relative w-full rounded-lg border px-4 py-3",
	variants: {
		variant: {
			default: "bg-white text-gray-950 border-gray-200",
			info: "bg-blue-50 text-blue-900 border-blue-200",
			success: "bg-green-50 text-green-900 border-green-200",
			warning: "bg-yellow-50 text-yellow-900 border-yellow-200",
			destructive: "bg-red-50 text-red-900 border-red-200",
		},
	},
	defaultVariants: {
		variant: "default",
	},
})

export const alertIconVariants = tv({
	base: "absolute left-4 top-3.5 text-current",
	variants: {
		variant: {
			default: "text-gray-950",
			info: "text-blue-600",
			success: "text-green-600",
			warning: "text-yellow-600",
			destructive: "text-red-600",
		},
	},
	defaultVariants: {
		variant: "default",
	},
})

export const alertContentVariants = tv({
	base: "",
	variants: {
		hasIcon: {
			true: "pl-7",
			false: "",
		},
	},
	defaultVariants: {
		hasIcon: false,
	},
})

export const alertTitleVariants = tv({
	base: "mb-1 font-medium leading-none tracking-tight",
})

export const alertDescriptionVariants = tv({
	base: "text-sm [&_p]:leading-relaxed",
})

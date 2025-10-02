import { tv } from "tailwind-variants"

export const codeVariants = tv({
	base: ["font-mono", "rounded", "transition-colors"],
	variants: {
		variant: {
			default: ["bg-gray-100 text-gray-900", "border border-gray-200"],
			primary: ["bg-blue-50 text-blue-900", "border border-blue-200"],
			success: ["bg-green-50 text-green-900", "border border-green-200"],
			warning: ["bg-yellow-50 text-yellow-900", "border border-yellow-200"],
			error: ["bg-red-50 text-red-900", "border border-red-200"],
		},
		size: {
			sm: "text-xs",
			default: "text-sm",
			lg: "text-base",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
})

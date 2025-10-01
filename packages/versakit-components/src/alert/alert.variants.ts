import { tv } from "tailwind-variants"

export const alertVariants = tv({
	base: [
		"relative w-full rounded-lg border px-4 py-3",
		"[&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-current",
		"[&>svg~*]:pl-7",
	],
	variants: {
		variant: {
			default: "bg-white text-gray-950 border-gray-200",
			info: "bg-blue-50 text-blue-900 border-blue-200 [&>svg]:text-blue-600",
			success: "bg-green-50 text-green-900 border-green-200 [&>svg]:text-green-600",
			warning: "bg-yellow-50 text-yellow-900 border-yellow-200 [&>svg]:text-yellow-600",
			destructive: "bg-red-50 text-red-900 border-red-200 [&>svg]:text-red-600",
		},
	},
	defaultVariants: {
		variant: "default",
	},
})

export const alertTitleVariants = tv({
	base: "mb-1 font-medium leading-none tracking-tight",
})

export const alertDescriptionVariants = tv({
	base: "text-sm [&_p]:leading-relaxed",
})

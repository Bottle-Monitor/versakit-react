import { tv } from "tailwind-variants"

export const tooltipContentVariants = tv({
	base: [
		"z-50 overflow-hidden rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white",
		"animate-in fade-in-0 zoom-in-95",
		"data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
		"data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
		"data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
	],
	variants: {
		variant: {
			default: "bg-gray-900 text-white",
			light: "bg-white text-gray-900 border border-gray-200 shadow-md",
			primary: "bg-blue-600 text-white",
			success: "bg-green-600 text-white",
			warning: "bg-yellow-600 text-white",
			danger: "bg-red-600 text-white",
		},
	},
	defaultVariants: {
		variant: "default",
	},
})

export const tooltipArrowVariants = tv({
	base: "fill-gray-900",
	variants: {
		variant: {
			default: "fill-gray-900",
			light: "fill-white",
			primary: "fill-blue-600",
			success: "fill-green-600",
			warning: "fill-yellow-600",
			danger: "fill-red-600",
		},
	},
	defaultVariants: {
		variant: "default",
	},
})

import { tv } from "tailwind-variants"

export const buttonVariants = tv({
	base: [
		"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium",
		"transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
		"disabled:pointer-events-none disabled:opacity-50",
		"[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	],
	variants: {
		variant: {
			primary: ["bg-black text-white shadow hover:bg-black/90", "focus-visible:ring-black"],
			secondary: ["bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200", "focus-visible:ring-gray-400"],
			outline: [
				"border border-gray-200 bg-white shadow-sm hover:bg-gray-50 hover:text-gray-900",
				"focus-visible:ring-gray-400",
			],
			ghost: ["hover:bg-gray-100 hover:text-gray-900", "focus-visible:ring-gray-400"],
		},
		size: {
			sm: "h-8 px-3 text-xs",
			default: "h-9 px-4 py-2",
			lg: "h-10 px-8",
			icon: "h-9 w-9",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "default",
	},
})

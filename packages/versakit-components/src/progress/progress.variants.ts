import { tv } from "tailwind-variants"

export const progressRootVariants = tv({
	base: ["relative overflow-hidden rounded-full bg-gray-200", "h-2 w-full"],
	variants: {
		size: {
			sm: "h-1",
			default: "h-2",
			lg: "h-3",
		},
	},
	defaultVariants: {
		size: "default",
	},
})

export const progressIndicatorVariants = tv({
	base: ["h-full w-full flex-1 transition-all duration-300 ease-in-out", "rounded-full"],
	variants: {
		variant: {
			primary: "bg-black",
			secondary: "bg-gray-600",
			success: "bg-green-500",
			warning: "bg-yellow-500",
			danger: "bg-red-500",
		},
		animated: {
			true: "transition-transform",
			false: "",
		},
	},
	defaultVariants: {
		variant: "primary",
		animated: true,
	},
})

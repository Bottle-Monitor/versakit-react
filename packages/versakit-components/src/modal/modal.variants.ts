import { tv } from "tailwind-variants"

export const modalOverlayVariants = tv({
	base: [
		"fixed inset-0 z-50 bg-black/80",
		"opacity-0",
		"transition-opacity duration-300 ease-out",
		"data-[state=open]:opacity-100",
		"data-[state=closed]:opacity-0",
	],
})

export const modalContentVariants = tv({
	base: [
		"fixed left-1/2 top-1/2 z-50",
		"w-full max-w-lg -translate-x-1/2 -translate-y-1/2",
		"gap-4 border border-gray-200 bg-white p-6 shadow-lg rounded-lg",
		"opacity-0 scale-95",
		"transition-all duration-300 ease-out",
		"data-[state=open]:opacity-100 data-[state=open]:scale-100",
		"data-[state=closed]:opacity-0 data-[state=closed]:scale-95",
	],
	variants: {
		size: {
			sm: "max-w-sm",
			default: "max-w-lg",
			lg: "max-w-2xl",
			xl: "max-w-4xl",
			full: "max-w-[95vw] max-h-[95vh]",
		},
	},
	defaultVariants: {
		size: "default",
	},
})

export const modalHeaderVariants = tv({
	base: "flex flex-col space-y-1.5 text-center sm:text-left",
})

export const modalFooterVariants = tv({
	base: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
})

export const modalTitleVariants = tv({
	base: "text-lg font-semibold leading-none tracking-tight text-gray-950",
})

export const modalDescriptionVariants = tv({
	base: "text-sm text-gray-500",
})

export const modalCloseVariants = tv({
	base: [
		"rounded-sm ring-offset-white transition-opacity",
		"focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2",
		"disabled:pointer-events-none",
	],
	variants: {
		position: {
			absolute: [
				"absolute right-4 top-4 opacity-70 hover:opacity-100",
				"inline-flex h-6 w-6 items-center justify-center",
			],
			relative: ["relative"],
		},
	},
	defaultVariants: {
		position: "absolute",
	},
})

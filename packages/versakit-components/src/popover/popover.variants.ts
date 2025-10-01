import { tv } from "tailwind-variants"

export const popoverContentVariants = tv({
	base: [
		"z-50 w-72 rounded-md border border-gray-200 bg-white p-4 shadow-md outline-none",
		"data-[state=open]:animate-in data-[state=closed]:animate-out",
		"data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
		"data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
		"data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
		"data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
	],
})

export const popoverArrowVariants = tv({
	base: "fill-white",
})

export const popoverCloseVariants = tv({
	base: [
		"absolute right-2 top-2 rounded-sm opacity-70 ring-offset-white",
		"transition-opacity hover:opacity-100 focus:outline-none focus:ring-2",
		"focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none",
	],
})

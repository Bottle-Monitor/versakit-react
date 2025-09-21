import React from "react"
import type { ButtonProps } from "./button.types"
import { buttonVariants } from "./button.variants"

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, ...props }, ref) => {
		return <button className={buttonVariants({ variant, size, class: className })} ref={ref} {...props} />
	},
)

Button.displayName = "Button"

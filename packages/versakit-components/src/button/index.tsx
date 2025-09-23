import React from "react"
import type { ButtonProps } from "./button.types"
import { buttonVariants } from "./button.variants"

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const _Comp = asChild ? React.Fragment : "button"
		const _buttonProps = asChild ? {} : { ref, ...props }

		if (asChild) {
			return React.cloneElement(props.children as React.ReactElement, {
				className: buttonVariants({ variant, size, class: className }),
				...props,
			})
		}

		return <button className={buttonVariants({ variant, size, class: className })} ref={ref} {...props} />
	},
)

Button.displayName = "Button"

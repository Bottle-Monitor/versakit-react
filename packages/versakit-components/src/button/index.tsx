import { Slot } from "@radix-ui/react-slot"
import { cn } from "@versakit/shared"
import { Loader2 } from "lucide-react"
import * as React from "react"
import type { ButtonProps } from "./button.types"
import { buttonVariants } from "./button.variants"

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, loading = false, disabled, children, ...props }, ref) => {
		const Comp = asChild ? Slot : "button"

		// 当使用 asChild 时，不支持 loading 状态，因为 Slot 只允许单个子元素
		if (asChild) {
			return (
				<Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
					{children}
				</Comp>
			)
		}

		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				disabled={disabled || loading}
				{...props}
			>
				{loading && <Loader2 className="animate-spin" />}
				{children}
			</Comp>
		)
	},
)
Button.displayName = "Button"

export { Button }
export type { ButtonProps }
export { buttonVariants }

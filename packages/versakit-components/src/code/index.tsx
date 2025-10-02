import { cn } from "@versakit/shared"
import * as React from "react"
import type { CodeProps } from "./code.types"
import { codeVariants } from "./code.variants"

const Code = React.forwardRef<HTMLElement, CodeProps>(
	({ className, variant, size, block = false, wrap = false, language, children, ...props }, ref) => {
		const codeElement = (
			<code
				ref={ref as React.Ref<HTMLElement>}
				className={cn(
					codeVariants({ variant, size }),
					block ? "block w-full p-4 overflow-x-auto" : "inline-block px-1.5 py-0.5",
					wrap && "whitespace-pre-wrap",
					!wrap && block && "whitespace-pre",
					!wrap && !block && "whitespace-nowrap",
					className,
				)}
				data-language={language}
				{...props}
			>
				{children}
			</code>
		)

		if (block) {
			return <pre className="overflow-x-auto">{codeElement}</pre>
		}

		return codeElement
	},
)
Code.displayName = "Code"

export { Code }
export type { CodeProps }
export { codeVariants }

import { buttonExamples } from "./button"
import type { Example, ExampleCategories, ExampleKey } from "./types"

export const examples: Record<ExampleKey, Example> = {
	...buttonExamples,
}

export const exampleCategories: ExampleCategories = {
	buttons: {
		title: "Button",
		examples: [
			"button-basic",
			"button-variants",
			"button-sizes",
			"button-disabled",
			"button-loading",
			"button-with-icons",
		],
	},
}

export * from "./types"

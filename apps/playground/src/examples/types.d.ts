export interface Example {
	title: string
	description: string
	code: string
	styles?: string
}
export interface ExampleCategory {
	title: string
	examples: ExampleKey[]
}
export type ExampleKey =
	| "button-basic"
	| "button-variants"
	| "button-sizes"
	| "button-disabled"
	| "button-loading"
	| "button-with-icons"
export type ExampleCategories = Record<string, ExampleCategory>
//# sourceMappingURL=types.d.ts.map

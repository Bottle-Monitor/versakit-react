import { ChevronRight, Component } from "lucide-react"
import { exampleCategories, examples } from "../examples"
import type { ExampleKey } from "../examples/types"

interface ComponentSelectorProps {
	selectedExample: ExampleKey
	onSelectExample: (example: ExampleKey) => void
}

export function ComponentSelector({ selectedExample, onSelectExample }: ComponentSelectorProps) {
	return (
		<div className="p-4">
			{Object.entries(exampleCategories).map(([categoryKey, category]) => (
				<div key={categoryKey} className="mb-6">
					<h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
						<Component className="w-4 h-4 mr-2" />
						{category.title}
					</h3>

					<div className="space-y-1">
						{category.examples.map((exampleKey) => {
							const example = examples[exampleKey]
							const isSelected = selectedExample === exampleKey

							return (
								<button
									type="button"
									key={exampleKey}
									onClick={() => onSelectExample(exampleKey)}
									className={`
                    w-full text-left px-3 py-2 rounded-md text-sm transition-colors
                    flex items-center justify-between group
                    ${
											isSelected
												? "bg-blue-50 text-blue-700 border border-blue-200"
												: "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
										}
                  `}
								>
									<div className="flex-1 min-w-0">
										<div className="font-medium truncate">{example.title}</div>
										<div className="text-xs text-gray-500 mt-0.5 truncate">{example.description}</div>
									</div>

									<ChevronRight
										className={`
                      w-4 h-4 transition-transform
                      ${isSelected ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"}
                    `}
									/>
								</button>
							)
						})}
					</div>
				</div>
			))}
		</div>
	)
}

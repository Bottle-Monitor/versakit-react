import { exampleCategories, examples } from "../examples"
import type { ExampleKey } from "../examples/types"

interface ComponentSelectorProps {
	selectedExample: ExampleKey
	onSelectExample: (example: ExampleKey) => void
}

export function ComponentSelector({ selectedExample, onSelectExample }: ComponentSelectorProps) {
	return (
		<div className="p-4 h-full overflow-y-auto overflow-x-hidden">
			{Object.entries(exampleCategories).map(([categoryKey, category]) => (
				<div key={categoryKey} className="mb-6">
					<h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center sticky top-0 bg-white py-2 z-10">
						<div className="w-4 h-4 mr-2 bg-blue-500 rounded-sm flex items-center justify-center">
							<span className="text-xs text-white font-bold">C</span>
						</div>
						{category.title}
					</h3>

					<div className="space-y-2">
						{category.examples.map((exampleKey) => {
							const example = examples[exampleKey]
							const isSelected = selectedExample === exampleKey

							return (
								<button
									type="button"
									key={exampleKey}
									onClick={() => onSelectExample(exampleKey)}
									className={`
                    w-full text-left px-3 py-3 rounded-md text-sm transition-all duration-200
                    flex items-start justify-between group hover:shadow-sm
                    ${
											isSelected
												? "bg-blue-50 text-blue-700 border border-blue-200 shadow-sm"
												: "text-gray-700 hover:bg-gray-50 hover:text-gray-900 border border-transparent"
										}
                  `}
								>
									<div className="flex-1 min-w-0">
										<div className="font-medium truncate">{example.title}</div>
										<div className="text-xs text-gray-500 mt-1 line-clamp-2">{example.description}</div>
									</div>

									<div
										className={`
                      w-4 h-4 mt-0.5 transition-transform flex-shrink-0 ml-2 flex items-center justify-center
                      ${isSelected ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"}
                    `}
									>
										→
									</div>
								</button>
							)
						})}
					</div>
				</div>
			))}
		</div>
	)
}

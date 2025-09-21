import { ChevronRight, Component } from "lucide-react"
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime"
import { exampleCategories, examples } from "../examples"
export function ComponentSelector({ selectedExample, onSelectExample }) {
	return _jsx("div", {
		className: "p-4",
		children: Object.entries(exampleCategories).map(([categoryKey, category]) =>
			_jsxs(
				"div",
				{
					className: "mb-6",
					children: [
						_jsxs("h3", {
							className: "text-sm font-semibold text-gray-900 mb-3 flex items-center",
							children: [_jsx(Component, { className: "w-4 h-4 mr-2" }), category.title],
						}),
						_jsx("div", {
							className: "space-y-1",
							children: category.examples.map((exampleKey) => {
								const example = examples[exampleKey]
								const isSelected = selectedExample === exampleKey
								return _jsxs(
									"button",
									{
										type: "button",
										onClick: () => onSelectExample(exampleKey),
										className: `
                    w-full text-left px-3 py-2 rounded-md text-sm transition-colors
                    flex items-center justify-between group
                    ${
											isSelected
												? "bg-blue-50 text-blue-700 border border-blue-200"
												: "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
										}
                  `,
										children: [
											_jsxs("div", {
												className: "flex-1 min-w-0",
												children: [
													_jsx("div", { className: "font-medium truncate", children: example.title }),
													_jsx("div", {
														className: "text-xs text-gray-500 mt-0.5 truncate",
														children: example.description,
													}),
												],
											}),
											_jsx(ChevronRight, {
												className: `
                      w-4 h-4 transition-transform
                      ${isSelected ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"}
                    `,
											}),
										],
									},
									exampleKey,
								)
							}),
						}),
					],
				},
				categoryKey,
			),
		),
	})
}
//# sourceMappingURL=ComponentSelector.js.map

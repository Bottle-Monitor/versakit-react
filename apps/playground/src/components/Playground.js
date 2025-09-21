import { SandpackCodeEditor, SandpackLayout, SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react"
import { useState } from "react"
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime"
import { examples } from "../examples"
import { ComponentSelector } from "./ComponentSelector"
export function Playground() {
	const [selectedExample, setSelectedExample] = useState("button-basic")
	const currentExample = examples[selectedExample]
	const sandpackFiles = {
		"/App.js": currentExample.code,
		"/styles.css":
			currentExample.styles ||
			`
/* Add your custom styles here */
@import url('https://unpkg.com/tailwindcss@3.5.6/dist/tailwind.min.css');

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}
`,
	}
	const customSetup = {
		dependencies: {
			react: "^18.0.0",
			"react-dom": "^18.0.0",
			"@versakit/components": "latest",
			"lucide-react": "^0.454.0",
			clsx: "^2.1.1",
			"tailwind-merge": "^3.3.1",
		},
	}
	return _jsxs("div", {
		className: "flex h-[calc(100vh-80px)]",
		children: [
			_jsxs("div", {
				className: "w-80 bg-white border-r border-gray-200 flex flex-col",
				children: [
					_jsxs("div", {
						className: "p-4 border-b border-gray-200",
						children: [
							_jsx("h2", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Components" }),
							_jsx("p", {
								className: "text-sm text-gray-600",
								children: "Select a component to see its example and try it out",
							}),
						],
					}),
					_jsx("div", {
						className: "flex-1 overflow-y-auto",
						children: _jsx(ComponentSelector, {
							selectedExample: selectedExample,
							onSelectExample: setSelectedExample,
						}),
					}),
					_jsx("div", {
						className: "p-4 border-t border-gray-200 bg-gray-50",
						children: _jsxs("div", {
							className: "text-xs text-gray-600",
							children: [
								_jsxs("p", {
									className: "mb-2",
									children: [_jsx("strong", { children: "Current Example:" }), " ", currentExample.title],
								}),
								_jsx("p", { children: currentExample.description }),
							],
						}),
					}),
				],
			}),
			_jsx("div", {
				className: "flex-1 flex flex-col",
				children: _jsx(SandpackProvider, {
					template: "react",
					files: sandpackFiles,
					customSetup: customSetup,
					theme: "light",
					options: {
						showTabs: true,
						showLineNumbers: true,
						showInlineErrors: true,
						wrapContent: true,
						editorHeight: "100%",
						autorun: true,
					},
					children: _jsx(SandpackLayout, {
						className: "h-full",
						children: _jsxs("div", {
							className: "flex h-full",
							children: [
								_jsxs("div", {
									className: "flex-1 flex flex-col",
									children: [
										_jsx("div", {
											className: "bg-gray-800 text-white px-4 py-2 text-sm font-medium",
											children: "Code Editor",
										}),
										_jsx("div", {
											className: "flex-1",
											children: _jsx(SandpackCodeEditor, {
												style: { height: "100%" },
												showTabs: true,
												showLineNumbers: true,
												showInlineErrors: true,
												wrapContent: true,
											}),
										}),
									],
								}),
								_jsxs("div", {
									className: "flex-1 flex flex-col border-l border-gray-200",
									children: [
										_jsx("div", {
											className: "bg-gray-100 text-gray-800 px-4 py-2 text-sm font-medium border-b border-gray-200",
											children: "Preview",
										}),
										_jsx("div", {
											className: "flex-1",
											children: _jsx(SandpackPreview, {
												style: { height: "100%" },
												showNavigator: false,
												showRefreshButton: true,
											}),
										}),
									],
								}),
							],
						}),
					}),
				}),
			}),
		],
	})
}
//# sourceMappingURL=Playground.js.map

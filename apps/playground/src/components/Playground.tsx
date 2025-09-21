import { SandpackCodeEditor, SandpackLayout, SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react"
import { useState } from "react"
import { examples } from "../examples"
import type { ExampleKey } from "../examples/types"
import { ComponentSelector } from "./ComponentSelector"

export function Playground() {
	const [selectedExample, setSelectedExample] = useState<ExampleKey>("button-basic")
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

	return (
		<div className="flex h-[calc(100vh-80px)]">
			{/* Sidebar */}
			<div className="w-80 bg-white border-r border-gray-200 flex flex-col">
				<div className="p-4 border-b border-gray-200">
					<h2 className="text-lg font-semibold text-gray-900 mb-2">Components</h2>
					<p className="text-sm text-gray-600">Select a component to see its example and try it out</p>
				</div>

				<div className="flex-1 overflow-y-auto">
					<ComponentSelector selectedExample={selectedExample} onSelectExample={setSelectedExample} />
				</div>

				<div className="p-4 border-t border-gray-200 bg-gray-50">
					<div className="text-xs text-gray-600">
						<p className="mb-2">
							<strong>Current Example:</strong> {currentExample.title}
						</p>
						<p>{currentExample.description}</p>
					</div>
				</div>
			</div>

			{/* Editor and Preview */}
			<div className="flex-1 flex flex-col">
				<SandpackProvider
					template="react"
					files={sandpackFiles}
					customSetup={customSetup}
					theme="light"
					options={{
						showTabs: true,
						showLineNumbers: true,
						showInlineErrors: true,
						wrapContent: true,
						editorHeight: "100%",
						autorun: true,
					}}
				>
					<SandpackLayout className="h-full">
						<div className="flex h-full">
							{/* Code Editor */}
							<div className="flex-1 flex flex-col">
								<div className="bg-gray-800 text-white px-4 py-2 text-sm font-medium">Code Editor</div>
								<div className="flex-1">
									<SandpackCodeEditor
										style={{ height: "100%" }}
										showTabs
										showLineNumbers
										showInlineErrors
										wrapContent
									/>
								</div>
							</div>

							{/* Preview */}
							<div className="flex-1 flex flex-col border-l border-gray-200">
								<div className="bg-gray-100 text-gray-800 px-4 py-2 text-sm font-medium border-b border-gray-200">
									Preview
								</div>
								<div className="flex-1">
									<SandpackPreview style={{ height: "100%" }} showNavigator={false} showRefreshButton={true} />
								</div>
							</div>
						</div>
					</SandpackLayout>
				</SandpackProvider>
			</div>
		</div>
	)
}

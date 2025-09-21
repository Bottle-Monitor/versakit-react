import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime"
import { Playground } from "./components/Playground"

function App() {
	return _jsxs("div", {
		className: "min-h-screen bg-gray-50",
		children: [
			_jsx("header", {
				className: "bg-white border-b border-gray-200 px-6 py-4",
				children: _jsxs("div", {
					className: "flex items-center justify-between",
					children: [
						_jsxs("div", {
							children: [
								_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Versakit Playground" }),
								_jsx("p", {
									className: "text-sm text-gray-600 mt-1",
									children: "Interactive playground for exploring Versakit React components",
								}),
							],
						}),
						_jsxs("div", {
							className: "flex items-center space-x-4",
							children: [
								_jsx("a", {
									href: "https://github.com/your-username/versakit-react",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "text-gray-600 hover:text-gray-900 transition-colors",
									children: "GitHub",
								}),
								_jsx("a", {
									href: "/docs",
									className: "text-gray-600 hover:text-gray-900 transition-colors",
									children: "Documentation",
								}),
							],
						}),
					],
				}),
			}),
			_jsx("main", { className: "flex-1", children: _jsx(Playground, {}) }),
		],
	})
}
export default App
//# sourceMappingURL=App.js.map

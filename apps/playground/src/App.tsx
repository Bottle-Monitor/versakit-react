import { Playground } from "./components/Playground"

function App() {
	return (
		<div className="h-screen w-screen overflow-hidden bg-gray-50 flex flex-col">
			<header className="h-16 bg-white border-b border-gray-200 px-6 flex-shrink-0">
				<div className="flex items-center justify-between h-full">
					<div>
						<h1 className="text-xl font-bold text-gray-900">Versakit Playground</h1>
						<p className="text-xs text-gray-600">Interactive playground for exploring Versakit React components</p>
					</div>
					<div className="flex items-center space-x-4">
						<a
							href="https://github.com/your-username/versakit-react"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
						>
							GitHub
						</a>
						<a href="/docs" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
							Documentation
						</a>
					</div>
				</div>
			</header>

			<main className="flex-1 min-h-0 overflow-hidden">
				<Playground />
			</main>
		</div>
	)
}

export default App

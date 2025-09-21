import { Playground } from "./components/Playground"

function App() {
	return (
		<div className="min-h-screen bg-gray-50">
			<header className="bg-white border-b border-gray-200 px-6 py-4">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-2xl font-bold text-gray-900">Versakit Playground</h1>
						<p className="text-sm text-gray-600 mt-1">Interactive playground for exploring Versakit React components</p>
					</div>
					<div className="flex items-center space-x-4">
						<a
							href="https://github.com/your-username/versakit-react"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-gray-900 transition-colors"
						>
							GitHub
						</a>
						<a href="/docs" className="text-gray-600 hover:text-gray-900 transition-colors">
							Documentation
						</a>
					</div>
				</div>
			</header>

			<main className="flex-1">
				<Playground />
			</main>
		</div>
	)
}

export default App

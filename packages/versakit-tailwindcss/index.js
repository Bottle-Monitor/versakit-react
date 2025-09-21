const path = require("node:path")

// Export the path to the postcss config
exports.postcssConfig = path.join(__dirname, "postcss.config.mjs")

// Export the path to the globals CSS
exports.globalsCss = path.join(__dirname, "globals.css")

// Export the PostCSS config object directly
exports.postcssConfigObject = {
	plugins: {
		"@tailwindcss/postcss": {},
	},
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{ts,tsx}", "../../packages/versakit-components/src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#3B82F6",
				"primary-foreground": "#FFFFFF",
				secondary: "#10B981",
				"secondary-foreground": "#FFFFFF",
				accent: "#8B5CF6",
				"accent-foreground": "#FFFFFF",
				background: "#FFFFFF",
				"background-dark": "#1F2937",
				border: "#E5E7EB",
				input: "#E5E7EB",
				ring: "#3B82F6",
				destructive: "#EF4444",
				"destructive-foreground": "#FFFFFF",
			},
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"],
				mono: ["Menlo", "Monaco", "monospace"],
			},
		},
	},
	plugins: [],
}

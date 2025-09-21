import path from "node:path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@versakit/components": path.resolve(__dirname, "../../packages/versakit-components/src"),
			"@versakit/shared": path.resolve(__dirname, "../../packages/versakit-shared/src"),
		},
	},
	server: {
		port: 3001,
		host: true,
	},
	build: {
		outDir: "dist",
		sourcemap: true,
	},
})
//# sourceMappingURL=vite.config.js.map

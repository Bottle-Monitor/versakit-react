/// <reference types="vitest" />

import { resolve } from "node:path"
import { defineConfig } from "vitest/config"

export default defineConfig({
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./test/setup.ts"],
		css: true,
		include: ["packages/**/*.{test,spec}.{js,ts,jsx,tsx}"],
		exclude: ["**/node_modules/**", "**/dist/**", "**/build/**", "**/.{idea,git,cache,output,temp}/**"],
		coverage: {
			provider: "v8",
			reporter: ["text", "json", "html"],
			exclude: ["node_modules/", "test/", "dist/", "**/*.d.ts", "**/*.config.*", "**/coverage/**"],
		},
	},
	resolve: {
		alias: {
			"@versakit/components": resolve(__dirname, "packages/versakit-components/src"),
			"@versakit/shared": resolve(__dirname, "packages/versakit-shared/src"),
		},
	},
})

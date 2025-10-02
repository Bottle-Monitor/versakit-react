import { readFileSync } from "node:fs"
import { join } from "node:path"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import { dts } from "rollup-plugin-dts"
import peerDepsExternal from "rollup-plugin-peer-deps-external"

// 读取包信息的辅助函数
function getPackageInfo(packagePath) {
	const packageJsonPath = join(packagePath, "package.json")
	const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"))
	return packageJson
}

// 创建构建配置的辅助函数
function createConfig(packagePath) {
	const packageInfo = getPackageInfo(packagePath)
	const input = join(packagePath, "src/index.ts")
	const outputDir = join(packagePath, "dist")

	return [
		// ESM 和 CJS 构建
		{
			input,
			output: [
				{
					file: join(outputDir, "index.esm.js"),
					format: "esm",
					sourcemap: true,
				},
				{
					file: join(outputDir, "index.cjs.js"),
					format: "cjs",
					sourcemap: true,
				},
			],
			plugins: [
				peerDepsExternal(),
				resolve({
					preferBuiltins: false,
				}),
				commonjs(),
				typescript({
					tsconfig: join(packagePath, "tsconfig.json"),
					declaration: false,
					outDir: outputDir,
				}),
			],
			external: (id) => {
				// 始终排除 React 和 React-DOM
				if (id === "react" || id === "react-dom" || id.startsWith("react/") || id.startsWith("react-dom/")) {
					return true
				}
				// 排除 peer dependencies
				if (packageInfo.peerDependencies && id in packageInfo.peerDependencies) {
					return true
				}
				// 排除 dependencies（除了 workspace 依赖）
				if (packageInfo.dependencies && id in packageInfo.dependencies) {
					// 对于 workspace 依赖，不排除
					if (packageInfo.dependencies[id]?.startsWith("workspace:")) {
						return false
					}
					return true
				}
				return false
			},
		},
		// 类型定义文件构建
		{
			input,
			output: {
				file: join(outputDir, "index.d.ts"),
				format: "esm",
			},
			plugins: [
				dts({
					tsconfig: join(packagePath, "tsconfig.json"),
				}),
			],
		},
	]
}

// 导出所有包的配置
export default [...createConfig("packages/versakit-shared"), ...createConfig("packages/versakit-components")]

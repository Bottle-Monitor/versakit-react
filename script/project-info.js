#!/usr/bin/env node

/**
 * 项目信息展示脚本
 */

const fs = require("node:fs")
const path = require("node:path")

// ANSI 颜色和样式代码
const colors = {
	reset: "\x1b[0m",
	bright: "\x1b[1m",
	dim: "\x1b[2m",
	underscore: "\x1b[4m",
	blink: "\x1b[5m",
	reverse: "\x1b[7m",
	hidden: "\x1b[8m",

	// 前景色
	black: "\x1b[30m",
	red: "\x1b[31m",
	green: "\x1b[32m",
	yellow: "\x1b[33m",
	blue: "\x1b[34m",
	magenta: "\x1b[35m",
	cyan: "\x1b[36m",
	white: "\x1b[37m",

	// 背景色
	bgBlack: "\x1b[40m",
	bgRed: "\x1b[41m",
	bgGreen: "\x1b[42m",
	bgYellow: "\x1b[43m",
	bgBlue: "\x1b[44m",
	bgMagenta: "\x1b[45m",
	bgCyan: "\x1b[46m",
	bgWhite: "\x1b[47m",

	// RGB 颜色
	rgb: (r, g, b) => `\x1b[38;2;${r};${g};${b}m`,
	bgRgb: (r, g, b) => `\x1b[48;2;${r};${g};${b}m`,
}

// 渐变色函数
function gradient(text, gradientColors) {
	const chars = text.split("")
	const step = (gradientColors.length - 1) / (chars.length - 1)

	return (
		chars
			.map((char, i) => {
				const colorIndex = Math.floor(i * step)
				const nextColorIndex = Math.min(colorIndex + 1, gradientColors.length - 1)
				const ratio = (i * step) % 1

				const color1 = gradientColors[colorIndex]
				const color2 = gradientColors[nextColorIndex]

				// 简单的颜色插值
				const r = Math.round(color1.r + (color2.r - color1.r) * ratio)
				const g = Math.round(color1.g + (color2.g - color1.g) * ratio)
				const b = Math.round(color1.b + (color2.b - color1.b) * ratio)

				return `${colors.rgb(r, g, b)}${char}`
			})
			.join("") + colors.reset
	)
}

// 项目艺术字
function getProjectArt() {
	const gradientColors = [
		{ r: 147, g: 51, b: 234 }, // 紫色
		{ r: 59, g: 130, b: 246 }, // 蓝色
		{ r: 16, g: 185, b: 129 }, // 绿色
		{ r: 245, g: 158, b: 11 }, // 橙色
	]

	const art = `
██╗   ██╗███████╗██████╗ ███████╗ █████╗ ██╗  ██╗██╗████████╗
██║   ██║██╔════╝██╔══██╗██╔════╝██╔══██╗██║ ██╔╝██║╚══██╔══╝
██║   ██║█████╗  ██████╔╝███████╗███████║█████╔╝ ██║   ██║   
╚██╗ ██╔╝██╔══╝  ██╔══██╗╚════██║██╔══██║██╔═██╗ ██║   ██║   
 ╚████╔╝ ███████╗██║  ██║███████║██║  ██║██║  ██╗██║   ██║   
  ╚═══╝  ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝   ╚═╝   
`

	return art
		.split("\n")
		.map((line) => gradient(line, gradientColors))
		.join("\n")
}

// 获取包信息
function getPackageInfo() {
	try {
		const packageJsonPath = path.join(process.cwd(), "package.json")
		const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"))
		return packageJson
	} catch (_error) {
		return {}
	}
}

// 获取子包信息
function getSubPackages() {
	try {
		const packagesDir = path.join(process.cwd(), "packages")
		if (!fs.existsSync(packagesDir)) return []

		const packages = fs
			.readdirSync(packagesDir)
			.filter((name) => {
				const packagePath = path.join(packagesDir, name)
				return fs.statSync(packagePath).isDirectory() && fs.existsSync(path.join(packagePath, "package.json"))
			})
			.map((name) => {
				try {
					const packageJsonPath = path.join(packagesDir, name, "package.json")
					const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"))
					return {
						name: packageJson.name || name,
						version: packageJson.version || "1.0.0",
						description: packageJson.description || "",
					}
				} catch {
					return { name, version: "1.0.0", description: "" }
				}
			})

		return packages
	} catch {
		return []
	}
}

// 主函数
function showProjectInfo() {
	const packageInfo = getPackageInfo()
	const subPackages = getSubPackages()

	console.log("\n")

	// 显示艺术字
	console.log(getProjectArt())

	// 项目信息
	console.log(`\n${colors.bright}${colors.cyan}🚀 欢迎来到 Versakit React 组件库！${colors.reset}\n`)

	if (packageInfo.version) {
		console.log(`${colors.green}📦 版本：${colors.bright}${packageInfo.version}${colors.reset}`)
	}

	if (packageInfo.description) {
		console.log(`${colors.blue}📝 描述：${packageInfo.description}${colors.reset}`)
	}

	// 显示子包信息
	if (subPackages.length > 0) {
		console.log(`\n${colors.bright}${colors.magenta}📚 包含的子包：${colors.reset}`)
		subPackages.forEach((pkg) => {
			console.log(
				`${colors.cyan}  • ${colors.bright}${pkg.name}${colors.reset} ${colors.dim}v${pkg.version}${colors.reset}`,
			)
			if (pkg.description) {
				console.log(`${colors.dim}    ${pkg.description}${colors.reset}`)
			}
		})
	}

	// 常用命令
	console.log(`\n${colors.bright}${colors.yellow}⚡ 常用命令：${colors.reset}`)
	console.log(`${colors.green}  pnpm build${colors.reset}          - 构建所有包`)
	console.log(`${colors.green}  pnpm build:components${colors.reset} - 构建组件库`)
	console.log(`${colors.green}  pnpm build:shared${colors.reset}     - 构建共享库`)
	console.log(`${colors.green}  pnpm lint${colors.reset}            - 代码检查`)
	console.log(`${colors.green}  pnpm format${colors.reset}          - 代码格式化`)
	console.log(`${colors.green}  pnpm type-check${colors.reset}      - 类型检查`)

	// 开发提示
	console.log(`\n${colors.bright}${colors.blue}💡 开发提示：${colors.reset}`)
	console.log(`${colors.cyan}  • 使用 TypeScript 进行类型安全的开发${colors.reset}`)
	console.log(`${colors.cyan}  • 组件库基于 Tailwind CSS 和 Tailwind Variants${colors.reset}`)
	console.log(`${colors.cyan}  • 支持 ESM 和 CJS 双格式输出${colors.reset}`)
	console.log(`${colors.cyan}  • 配置了 Biome 进行代码格式化和 Lint${colors.reset}`)

	// 分割线
	console.log(`\n${colors.dim}${"─".repeat(80)}${colors.reset}`)
	console.log(`${colors.bright}${colors.green}✅ 依赖安装完成，开始你的开发之旅吧！${colors.reset}`)
	console.log(`${colors.dim}${"─".repeat(80)}${colors.reset}\n`)
}

// 如果直接运行此脚本
if (require.main === module) {
	showProjectInfo()
}

module.exports = { showProjectInfo }

#!/usr/bin/env node

/**
 * 强制使用 pnpm 作为包管理器
 * 防止团队成员意外使用 npm 或 yarn
 */

const userAgent = process.env.npm_config_user_agent || ""

if (!userAgent.includes("pnpm")) {
	console.log("\n❌ 此项目只允许使用 pnpm 作为包管理器！\n")

	if (userAgent.includes("npm")) {
		console.log("检测到您正在使用 npm")
	} else if (userAgent.includes("yarn")) {
		console.log("检测到您正在使用 yarn")
	}

	console.log("\n解决方案:")
	console.log("1. 安装 pnpm: npm install -g pnpm")
	console.log("2. 使用 pnpm install 代替 npm install")
	console.log("3. 删除现有 lock 文件: rm -rf package-lock.json yarn.lock")
	console.log("4. 重新安装: pnpm install\n")

	process.exit(1)
}

console.log("✅ 使用 pnpm，符合项目要求！")

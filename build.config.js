// 构建配置文件，用于自定义构建选项
export const buildConfig = {
	// 是否生成源码映射
	sourcemap: false,
	// 是否压缩输出
	minify: process.env.NODE_ENV === "production",
	// 是否清理输出目录
	clean: true,
	// 支持的包列表
	packages: ["versakit-shared", "versakit-components"],
}

## 项目结构

```
page
	- build					// 构建公共配置文件
		build.config.js 	// webpack页面配置文件，可以配置多页面应用
		webpack.base.js 	// webpack基础配置文件
	- public				// 共用目录，包括页面模板和favicon.ico
		favicon.ico 		// favicon.ico
		index.html 			// 页面模板
	+ src 					// 源码
		+ actions 			// redux的action文件
		+ components 		// 共用组件库
		+ images			// 公用图片
		+ pages 			// 页面目录，每个页面一个独立文件夹
		+ reducers 			// redux的reducer文件
		+ styles 			// 公用样式
		+ utils 			// 公用js
		index.js 			// 项目入口
		routers.js 			// 路由配置页面
	.babelrc 				// babel配置文件
	package.json 			
	README.md 				// 说明文档
	webpack.dev.js 			// 开发环境配置文件
	webpack.prod.js 		// 生产环境配置文件
```

## 使用教程

### 创建项目并安装依赖
```
npm install -g reant-cli
reant create demo
cd demo
npm install
```

### 运行开发环境
```
npm start
```
浏览器打开： [http://localhost](http://localhost) 即可

### 构建
```
npm run build
```

## 说明

- 项目使用可以使用ES6，ES7语法，包括最新的class的属性定义，generator函数，aysn函数
- 使用axios做数据传输
- 可以在build/build.config.js里增加配置，是项目变为多页面项目


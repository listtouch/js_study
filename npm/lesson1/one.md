###  npm script 学习记录入门(1)

> npm 为我们提供了快速创建 package.json 文件的命令 npm init，执行该命令会问几个基本问题，如包名称、版本号、作者信息、入口文件、仓库地址、许可协议等，多数问题已经提供了默认值，你可以在问题后敲回车接受默认值

#### npm 安装eslint实例

> npm install eslint ,然后配置相关配置

``` {
  "name": "lesson1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "eslint": "eslint *.js"
  },
  "keywords": [
    "npm",
    "script"
  ],
  "author": "lianglizhong",
  "license": "ISC",
  "dependencies": {
    "eslint": "^5.14.1"
  }
}
```

> npm run eslint 开启文件检测能力


# 1、项目架构 reactjs + webpack + ES6
以下为项目目录结构  
|--app 为项目源码目录  
|&emsp;&emsp;|--common 公共资源 一些公用的，全局的样式，工具代码，配置文件可以存放在这里  
|&emsp;&emsp;|--component 组件目录，存放组件，例如header，swiper，ads等  
|&emsp;&emsp;|--module 模块目录   
|&emsp;&emsp;|&emsp;&emsp;|--zhekou 折扣目录   
|&emsp;&emsp;|&emsp;&emsp;|--jujia  居家馆目录   
|&emsp;&emsp;|&emsp;&emsp;|--global 全球购目录   
|&emsp;&emsp;|&emsp;&emsp;|--cart 购物车目录   
|&emsp;&emsp;|&emsp;&emsp;|--mine 个人中心   
|&emsp;&emsp;|-- index.tmpl.html 页面模板   
|&emsp;&emsp;|--main.js 入口js   
|&emsp;&emsp;|--build 打包目录   
|&emsp;&emsp;|&emsp;&emsp;|--index.html   
|&emsp;&emsp;|&emsp;&emsp;|--bundle.js    
|&emsp;&emsp;|-node_modules node模块目录（可以删除，只要有package.json，执行npm install 就可以产生）    
|-- .babelrc babel配置文件   
|--package.json npm配置文件，项目的依赖在这里   
|--webpack.config.js webpack配置文件   



## 安装：
* `git clone git@github.com:cooleye/react-store-jp.git`

* `cd react-store-jp`

* `npm install`

* `npm start`

1、项目架构 reactjs + webpack + ES6
以下为项目目录结构
|-app 为项目源码目录
  |-common 公共资源 一些公用的，全局的样式，工具代码，配置文件可以存放在这里
  |-component 组件目录，存放组件，例如header，swiper，ads等
  |-module 模块目录
    |-zhekou 折扣目录
    |-jujia  居家馆目录
    |-global 全球购目录
    |-cart 购物车目录
    |-mine 个人中心
  |- index.tmpl.html 页面模板
  |-main.js 入口js

|-build 打包目录
  |-index.html
  |-bundle.js

|-images 图片目录

|-node——modules node模块目录（可以删除，只要有package.json，执行npm install 就可以产生）
|- .babelrc babel配置文件
|-package.json npm配置文件，项目的依赖在这里
|-webpack.config.js webpack配置文件

2、webpack配置

3、package.json配置



安装：
git clone git@github.com:cooleye/react-store-jp.git
npm install
npm start

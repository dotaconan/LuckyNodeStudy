# LuckyNodeStudy

> LuckyNodeStudy是一个包含了很多有意思的学习node的开源项目。(LuckyNodeStudy is a project for studying node with many interesting example)

## browserify：nodejs平台代码运用在浏览器平台案例

> 通过本案例，您可以体会到browserify一种独特的思路：nodejs平台代码打包为web使用js的一种打包方案，除seajs/requirejs浏览器依赖外的独立js资源打包方案
项目中也采用了多种好用的功能能够
-编译less、更改后自动编译
-Browserify编译nodejs平台下js为独立js
-更改less、js、html自动刷新页面
-web服务器

### 安装nodejs
nodejs安装nodejs程序安装

### 安装gulp
运行 install-gulp.bat

### 安装node引用组建
运行 install.bat

### 运行
运行 run.bat

### 浏览器打开地址
- 浏览器输入：http://127.0.0.1:12580/browserify/html/page_index.html


## node基础篇

### 案例一：人生的意义[study readline]

> 通过使用nodejs的readline，来体会nodejs为开发者提供的命令行传入命令的界面，更有助于命令行程序的控制

> $ node node-study-whatIsYourLife



### 案例二：基于net的最简易web服务器[study net]

> 本案例是基于node最基础的net模块，手动输出http报头，相比于高大上的http等进阶模块，本案例更能够让开发者体会到最基础的tcp连接的真谛

> $ node node-study-net-webserver

> port:12570

### 案例三：基于socket.io的websocket服务器/客户端案例[study websocket server/client]

> 本案例是集成目前web端比较不错的js通信组件socket.io，实现websocket实时通信案例

> $ node node-study-WebSocketServer

> port:12571

### 案例四：异步编程：一步一个脚印[study async]

> node中很多基于异步编程：比如读取文件、网络请求等，很多时候需要一个一个按照顺序执行，这就像一步一个脚印，走好前一步才能走到下一步

> $ node node-study-async

> tags
- asysc.series
- asysc.waterfall



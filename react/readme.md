#Hello-React-Backbone

**目的：**做Backbone和ReactJS的整合，该例子使用了Backbone的Model和ReactJS整合，可以认为是ReactJS替换掉了Backbone的View，这个是入门小例子 。

**实现内容：**通过传递的json数据构建Backbone的Model，将数据展现出来，输入数据，点击按钮，修改数据，展示修改后的数据，btw，实现组件内部数据回传给外部的功能。

**使用组件：**
        <span style="margin-left:10px">1. jquery</span>
        <span style="margin-left:10px"> 2. underscore</span>
        <span style="margin-left:10px">3.  backbone</span>
         <span style="margin-left:10px">4.  reactjs</span>
        <span style="margin-left:10px"> 5. seajs</span>

例子是直接改的SeaJS的Hello的例子，可以看到此例子的痕迹哦。

**<span style="color:red">注意：</span>**在此例子中，SeaJS例子已经处理了jquery,underscore,backbone，当然ReactJS也得处理咯，我这里处理相对简单，将ReactJS第一行的typeof define==="function"&&define.amd
改成了typeof define==="function"&&define.cmd即可，也就是将amd改成cmd。

**例子目录结构：**  
app -->helloMessage.html   例子的主页面  
myreact --> app.jsx   入口组件  
myreact --> components--> HelloMessage.jsx  信息子组件  
sea-modules-->   依赖的库  
static\hello\src\build-->app.js  app.jsx编译后的js文件  
static\hello\src\build\components-->HellowMessage.js  HellowMessage.jsx编译后的js文件  

**JSX文件编译：**安装nodejs（话说这个是必装的啊），npm install -g react-tools
<https://www.npmjs.com/package/react-tools>  
执行命令：jsx -w -x jsx myreact/ static/hello/src/build
在主目录下（hello-react-backbone）下执行
-w 是观察文件修改，并自动重新生产js文件到指定的目录下
-x 文件扩展名的处理，默认是js
myreact/    目录是jsx文件的目录， static/hello/src/build 是生产js文件目录

ps：你要想在define作用域内直接使用JSXTransformer.js，请确定能其引入作用域中，我看到github上有人用requirejs做了插件处理，可以直接使用JSXTransformer.js编译Jsx文件，不过最好还是编辑成js文件吧，别老想着让自己认识，你得让机器认识这些代码才行啊。。。
可参考此处：<https://github.com/philix/jsx-requirejs-plugin>
         
**有做组件分离哦**
参考：react-backbone的TodoMVC<https://github.com/tastejs/todomvc/tree/master/examples/react-backbone>

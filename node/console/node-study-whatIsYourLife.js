/**
 * Create Server
 * Created by LuckyJourney on 2016/9/26.
 * email:lucheng888@vip.qq.com
 */
//引入node的自有模块 readline
var readline = require("readline");

//创建readline的用户命令行界面
var interface = readline.createInterface(process.stdin, process.stdout, null);

//创建用户显示的提问，当用户按回车后执行回调，显示用户回答内容
interface.question("欢迎使用node智能问答系统:)\r\n1.你认为什么是人生?\r\n", function (answer) {
    console.log("关于人生,你说：" + answer);
    interface.setPrompt(">>");
    interface.prompt();
});

//当用户输入命令，匹配，如果是不玩了，退出用户命令行界面
interface.on("line", function (cmd) {
    if (cmd.trim() == "不玩了") {
        closeInterface();
        return;
    }
    else {
        console.log("请输入命令:" + cmd);
    }
    interface.setPrompt(">>");
    interface.prompt();
});
//当用户执行关闭
interface.on("close", function () {
    closeInterface();
});

//关闭接口
function closeInterface() {
    console.log("退出系统...");
    process.exit();
}
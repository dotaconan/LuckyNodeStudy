/**
 * Create Server
 * Created by LuckyJourney on 2016/9/26.
 * email:lucheng888@vip.qq.com
 */
var readline = require("readline");

//创建接口
var interface = readline.createInterface(process.stdin, process.stdout, null);

interface.question("欢迎使用node智能问答系统:)\r\n1.你认为什么是人生?\r\n", function (answer) {
    console.log("关于人生,你说：" + answer);
    interface.setPrompt(">>");
    interface.prompt();
});


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
interface.on("close", function () {
    closeInterface();
});

//关闭接口
function closeInterface() {
    console.log("正在退出系统...");
    process.exit();
    console.log("成功退出系统...");
}
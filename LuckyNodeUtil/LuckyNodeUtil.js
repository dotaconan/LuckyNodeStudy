/**
 * LuckyNodeUtil
 * https://github.com/dotaconan/LuckyNodeUtilStudy
 * Created by LuckyJourney on 2016/9/30.
 */
var LuckyNodeUtil = {};
LuckyNodeUtil.Base = require("./LuckyNodeUtil.Base.js");
LuckyNodeUtil.TimeUtil = require("./LuckyNodeUtil.TimeUtil.js");
LuckyNodeUtil.BrowserUtil = require("./LuckyNodeUtil.BrowserUtil.js");

(function () {
    //默认需要执行的函数初始化
    LuckyNodeUtil.Base.init();
})();
module.exports = LuckyNodeUtil;
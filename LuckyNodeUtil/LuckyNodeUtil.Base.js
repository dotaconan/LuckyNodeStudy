/**
 * LuckyNodeUtil
 * https://github.com/dotaconan/LuckyNodeUtilStudy
 * Created by LuckyJourney on 2016/9/30.
 */
var LuckyNodeUtil = {};
LuckyNodeUtil= {
    init: function () {
        this.fixDebug();
    },
    /**
     * IE6-IE8没有console解决方案
     */
    fixDebug: function () {
        if (!window.console) {
            window.console = {
                log: function (msg) {
                    //alert(msg);
                }
            }
        }
    }
};
module.exports = LuckyNodeUtil;
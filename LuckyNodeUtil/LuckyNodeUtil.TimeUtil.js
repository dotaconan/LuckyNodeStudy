/**
 * TimeUtil时间辅助
 * https://github.com/dotaconan/LuckyNodeUtilStudy
 * Created by LuckyJourney on 2016/9/30.
 */
var LuckyNodeUtil = {};
LuckyNodeUtil.Base = require("./LuckyNodeUtil.Base.js");
var TimeUtil = {
    version: "1.0",
    addDays: function (date, days) {
        var d = new Date(date);
        d.setDate(d.getDate() + parseFloat(days));
        return new Date(d);
    }
};
module.exports = TimeUtil;

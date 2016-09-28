/**
 * async异步编程第一步，走好每一步
 * 执行one后执行two
 * Created by LuckyJourney on 2016/9/26.
 * email:lucheng888@vip.qq.com
 */
var async = require("async");

async.series({
    one: function (callback) {
        callback(null, {
            "step": 1
        });
    },
    two: function (callback) {
        callback(null, {
            "step": 2
        });
    }
}, function (err, results) {
    console.log(results);
    //{ one: { step: 1 }, two: { step: 2 } }
});
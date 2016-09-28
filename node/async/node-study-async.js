/**
 * async异步编程第一步，走好每一步
 * 执行one后执行two
 * Created by LuckyJourney on 2016/9/28.
 * email:lucheng888@vip.qq.com
 */
var async = require("async");


var NodeStudyAsync = (function () {
    return {
        init: function () {
            this.testSeries();
            this.testWaterFall();
        },
        /**
         * 测试Async的series方式执行串行异步函数
         */
        testSeries: function () {
            async.series({
                one: function (callback) {
                    console.log("testSeries one start>>", new Date().getTime());
                    setTimeout(function () {
                        console.log("testSeries one callback>>", new Date().getTime());
                        callback(null, {
                            "step": 1
                        });
                    }, 200);
                },
                two: function (callback) {
                    console.log("testSeries two start>>", new Date().getTime());
                    setTimeout(function () {
                        console.log("testSeries two callback>>", new Date().getTime());
                        callback(null, {
                            "step": 2
                        });
                    }, 100);
                }
            }, function (err, results) {
                console.log("testSeries done>>", results);
                //{ one: { step: 1 }, two: { step: 2 } }
            });
        },
        /**
         * 测试Async的series方式执行串行异步函数
         * 变量a,经过异步函数调用，增加、减少逐步执行
         */
        testWaterFall: function () {
            var data = {
                a: 0,
                time: null
            };
            try {
                async.waterfall([
                    function step1Add(callback) {
                        data.a = data.a + 1;
                        data.time = new Date().getTime();
                        console.log("testWaterFall step1 start:>>", data);
                        setTimeout(function () {
                            console.log("testWaterFall step1 callback:>>", data);
                            callback(null, 'one', data);
                        }, 700);
                    },
                    function step2Minus(arg1, data, callback) {
                        data.a = data.a - 100;
                        data.time = new Date().getTime();
                        console.log("testWaterFall step2 start:>>", data);

                        setTimeout(function () {
                            console.log("testWaterFall step2 callback:>>", data);
                            callback(null, data);
                        }, 600);
                    },
                    function step3Last(arg1, callback) {
                        data.a = data.a - 500;
                        data.time = new Date().getTime();
                        console.log("testWaterFall step3 start:>>", data);
                        setTimeout(function () {
                            console.log("testWaterFall step3 callback:>>", data);
                            callback(null, data);
                        }, 500);
                    }
                ], function (err, result) {
                    if (err) {
                        throw  err;
                    }
                    console.log("testWaterFall all done>>", result);
                })
            }
            catch (err) {
                console.log("testWaterFall err>>", err);
            }
        }
    }
})();

(function () {
    NodeStudyAsync.init();
})();


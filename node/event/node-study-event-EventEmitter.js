/**
 * event:EventEmitter
 * Created by LuckyJourney on 2016/10/4.
 * email:lucheng888@vip.qq.com
 */
//Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列
//Node.js里面的许多对象都会分发事件,产生事件的对象都是 events.EventEmitter 的实例。
//events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装。
var events = require("events");
// 创建 eventEmitter 对象
var event = new events.EventEmitter();
var async = require("async");
//注册起床事件
event.on('event_getUp', function (callback) {
    console.log('event_getUp 起床事件开始执行..', new Date().getTime());
    console.log('event_getUp 起床', new Date().getTime());
    console.log('event_getUp 穿衣服', new Date().getTime());
    console.log('event_getUp 叠被子', new Date().getTime());
    return callback ? callback() : null;
});
//注册听收音机事件
event.on('event_listenRadio', function (callback) {
    console.log('event_listenRadio 收音机事件开始执行..', new Date().getTime());
    console.log('event_listenRadio 打开收音机', new Date().getTime());
    console.log('event_listenRadio 听新闻', new Date().getTime());
    return callback ? callback() : null;
});
//注册吃早饭事件
event.on('event_haveBreakfast', function (callback) {
    console.log('event_haveBreakfast 早餐事件开始执行..', new Date().getTime());
    console.log('event_haveBreakfast 盛粥', new Date().getTime());
    console.log('event_haveBreakfast 喝粥', new Date().getTime());
    return callback ? callback() : null;
});
//注册去上班事件
event.on('event_goToWork', function (callback) {
    console.log('event_goToWork 去上班事件开始执行..', new Date().getTime());
    console.log('event_goToWork 去车库拿车', new Date().getTime());
    console.log('event_goToWork 骑车上班', new Date().getTime());
    callback ? callback() : "";
});
//测试执行函数
(function () {
    console.log('node-study-event-EventEmitter program start', new Date().getTime());
    //记录每个步骤数据
    var logger = {
        items: []
    };
    try {
        async.waterfall([
            //花了700起床
            function getUp(callback) {
                //执行听收音机
                event.emit("event_listenRadio");
                //执行起床
                event.emit('event_getUp', function () {
                    setTimeout(function () {
                        console.log("event_getUp 起床花了700ms执行完成>>>>>>>>>>>>>");
                        logger.items.push({
                            status:"OK",
                            action:"event_getUp",
                            timestamp:new Date().getTime()
                        });
                        callback(null, logger);
                    }, 700);
                });
            },
            //花了600吃早饭
            function haveBreakfast(data, callback) {
                event.emit("event_haveBreakfast", function () {
                    setTimeout(function () {
                        console.log("event_haveBreakfast 吃早饭花了600执行完成>>>>>>>>>>>>>");
                        data.items.push({
                            status:"OK",
                            action:"event_haveBreakfast",
                            timestamp:new Date().getTime()
                        });
                        callback(null, data);
                    }, 600);
                });
            },
            function goToWork(data, callback) {
                event.emit("event_goToWork", function () {
                    setTimeout(function () {
                        console.log("event_goToWork 骑车花了800执行完成>>>>>>>>>>>>>");
                        data.items.push({
                            status:"OK",
                            action:"event_goToWork",
                            timestamp:new Date().getTime()
                        });
                        callback(null, data);
                    }, 800);
                });
            }
        ], function (err, result) {
            if (err) {
                throw  err;
            }
            console.log("上班的早晨任务执行完成>>", result);
        })
    }
    catch (err) {
        console.log("上班的早晨任务执行有误>>", err);
    }
})();



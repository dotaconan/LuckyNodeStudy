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
//注册起床事件
event.on('event_getUp', function() {
    console.log('event_getUp 起床',new Date().getTime());
    setTimeout(function() {
        event.emit('event_haveBreakfast');
    },2000);
});
//注册听收音机事件
event.on('event_listenRadio', function() {
    console.log('event_listenRadio 听新闻(起床并发)',new Date().getTime());
});
//注册吃早饭事件
event.on('event_haveBreakfast', function() {
    console.log('event_haveBreakfast 吃早饭',new Date().getTime());
    setTimeout(function() {
        event.emit('event_goToWork');
    },3000);
});
//注册去上班事件
event.on('event_goToWork', function() {
    console.log('event_goToWork 去上班',new Date().getTime());
});
//测试执行函数
(function () {
    console.log('node-study-event-EventEmitter program start',new Date().getTime());
    setTimeout(function() {
        //执行起床
        event.emit('event_getUp');
        //执行听收音机
        event.emit("event_listenRadio");
    }, 1000);
})();



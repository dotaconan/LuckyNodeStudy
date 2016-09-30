/**
 * Created by Administrator on 2016/9/30.
 */
var $ = require("../lib/jquery");
$ = window.$;

var LuckyNodeUtil = require("../../../LuckyNodeUtil/LuckyNodeUtil");
var PageTest = (function () {
    return {
        init: function () {
            this.initEvent();
        },
        initEvent: function () {
            console.log("PageTest initEvent");
        }
    }
})();

(function () {
    PageTest.init();
})();
/**
 * Created by Administrator on 2016/9/30.
 */
var $ = require("../lib/jquery");
$ = window.$;
var LuckyNodeUtil = require("../../../LuckyNodeUtil/LuckyNodeUtil");
var PageIndex = (function () {
    return {
        defaults: {
            classNames: {
                testjQuery: "testjQuery"
            }
        },
        init: function () {
            this.initEvent();
            this.initView();
            console.log("PageIndex init done");
        },
        initView: function () {
            var _this = this;
            var $testjQuery = $("#" + _this.defaults.classNames.testjQuery);

            var testjQueryHtml = $testjQuery.html();
            console.log("$testjQuery.length >>", $testjQuery.length);
            setTimeout(function () {
                $testjQuery.html(testjQueryHtml + " modify by jQuery");
                $testjQuery.css("color", "green");
            }, 2000);


            console.log("PageIndex initView done");
        },
        initEvent: function () {
            console.log("PageIndex initEvent done");
        }
    }
})();

(function () {
    PageIndex.init();
})();
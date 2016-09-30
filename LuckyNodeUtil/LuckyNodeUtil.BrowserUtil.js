/**
 * BrowserUtil浏览器辅助
 * https://github.com/dotaconan/LuckyNodeUtilStudy
 * Created by LuckyJourney on 2016/9/30.
 */
var LuckyNodeUtil = {};
LuckyNodeUtil.Base = require("./LuckyNodeUtil.Base.js");
var BrowserUtil = {
    version: "1.0",
    Platform: {
        PC: "pc",
        Mobile: "mobile",
        Pad: "pad"
    },
    getPlatform: function () {
        var self = this;
        var Platform = self.Platform;
        //默认PC
        var platform = Platform.PC;
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            platform = Platform.Mobile;
        } else {
            platform = Platform.PC;
        }
        return platform;
    },
    getBrowser: function () {
        var self = this;
        var platform = self.getPlatform();
        var browser = {};
        var ua = navigator.userAgent.toLowerCase();
        var matches = {
            ie: /msie ([\d.]+)/,
            firefox: /firefox\/([\d.]+)/,
            chrome: /chrome\/([\d.]+)/,
            opera: /opera\/([\d.]+)/,
            safari: /version\/([\d.]+).*safari/
        };
        for (var matchBrowser in matches) {
            var s = ua.match(matches[matchBrowser]);
            if (s) {
                browser = {
                    platform: platform,
                    browser: matchBrowser,
                    version: s[1]
                };
                break;
            }
        }
        return browser;
    }
};
module.exports = BrowserUtil;

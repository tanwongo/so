"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/**
 * @param zhuye  我的主页
 * @param guba   我的股吧
 * @param wenda  我的问答
 * @param shouc  我的收藏
 * @param qianb  我的钱包
 * @param jifen  我的积分
 */
var index_1 = __importDefault(require("./zhuye/index"));
var index_2 = __importDefault(require("./guba/index"));
var index_3 = __importDefault(require("./wenda/index"));
var index_4 = __importDefault(require("./shouc/index"));
// import guba from "./template/guba/index"
// import wenda from "./template/wenda/index"
// import shouc from "./template/shouc/index"
// import qianb from "./template/qianb/index"
// import jifen from "./template/jifen/index"
var menunav = {
    init: function () {
        this.menuClick();
    },
    //导航点击
    menuClick: function () {
        var _this = this;
        $("a[data-click-types]").on("click", function () {
            $(this).parent().addClass("active").siblings().removeClass("active");
            var a = $(this).attr("data-click-types");
            switch (a) {
                case "zhuye":
                    index_1["default"].init();
                    break;
                case 'guba':
                    index_2["default"].init();
                    break;
                case 'wenda':
                    index_3["default"].init();
                    break;
                case 'shouc':
                    index_4["default"].init();
                    break;
                // default:
                // zhuye.init();
            }
        });
        $("a[data-click-types='zhuye']").click();
    }
};
exports["default"] = menunav;

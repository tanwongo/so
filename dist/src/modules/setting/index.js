"use strict";
exports.__esModule = true;
var indexhtml = require("./template/index.art");
var setting = {
    init: function () {
        this.getHtml();
        this.loadBox();
        this.backTop();
        this.showBox();
    },
    //消息设置,隐私设置,黑名单设置
    getHtml: function () {
        $("body").append(indexhtml);
    },
    //提交设置
    postSetting: function (id) {
        var _this = this;
        return new Promise(function (res, rej) {
            $.ajax({
                type: "post",
                url: "/api/getRandom",
                dataType: "json"
            }).then(function (data) {
            }).done(function (tmpl) {
            });
        });
    },
    //显示隐藏设置,认证
    showBox: function () {
        $("div[data-hover-types='side-bar-user']").on("mouseenter", function () {
            $("div[data-box-types='user-setting-box']").show();
            $("div[data-box-types='topnav-notice-box']").hide();
        });
        $("div[data-hover-types='side-bar-user']").on("mouseleave", function () {
            $("div[data-box-types='user-setting-box']").hide();
        });
    },
    /**
     * @param message 消息设置
     * @param privacy 隐私设置
     * @param blacklist 黑名单设置
     */
    loadBox: function () {
        var _this = this;
        $("#user-setting-box a").on("click", function (e) {
            var a = $(this).attr("data-setting-id");
            e.stopPropagation();
            switch (a) {
                case "message":
                    message(0, _this);
                    break;
                case "private":
                    message(1, _this);
                    break;
                case "blacklist":
                    message(2, _this);
                    break;
            }
        });
        //消息设置内容
        function message(o, t) {
            $("#lock").show();
            $("#main").addClass("blur");
            var boxid = "div[data-setting-id='setting-list']";
            $(boxid).show().stop(true, false).animate({ opacity: 1 });
            $(boxid + " li").on("click", function () {
                $(this).addClass("tabs").siblings().removeClass("tabs");
                $("div[data-setting-id='setting-box']>div").eq(o || $(this).index()).removeClass("hd").siblings().addClass("hd");
                o = undefined;
            });
            $(boxid + " li").eq(o).click();
            $(boxid + " [data-setting-bind='disc'],[data-setting-bind='at'],[data-setting-bind='newf'],[data-setting-bind='certi']").on("click", function () {
                $(this).addClass("active").siblings().removeClass("active");
            });
            $(boxid + " .sub").on("click", function () {
                t.postSetting("setting-list");
            });
        }
    },
    backTop: function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 1000) {
                $(".side-bar-back").show();
                //$("#leftmenu").stop(true,false).animate({top:$(window).scrollTop()-300},800)
            }
            else {
                $(".side-bar-back").hide();
                // $("#leftmenu").stop(true,false).animate({top:0},800)
            }
        });
    }
};
exports["default"] = setting;

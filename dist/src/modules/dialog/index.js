"use strict";
exports.__esModule = true;
var alert_dialog = {
    init: function () {
    },
    warn: function (options) {
        var opts = options;
        $("body").append("<div></div>");
    },
    /**
     * input为空提示---边框变红
     * @param options 标识，样式
     */
    bordfocus: function (options) {
        var $opt = options;
        $opt.domsym.addClass("borderlight");
        var relight = setTimeout(function () {
            $opt.domsym.removeClass("borderlight");
        }, 1000);
    }
};
exports["default"] = alert_dialog;

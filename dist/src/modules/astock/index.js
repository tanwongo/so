"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dot = require("dot");
var pop_up_box_html_1 = __importDefault(require("./pop_up_box.html"));
var astock = {
    init: function () {
        this.historyPopUpBox();
        console.log(123);
    },
    historyPopUpBox: function () {
        $("#a-stock-history-dividend").on("click", function () {
            $("body").append(dot.template(pop_up_box_html_1["default"]));
        });
    }
};
exports["default"] = astock;

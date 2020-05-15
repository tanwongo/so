"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var astock_1 = __importDefault(require("../src/modules/astock"));
$(document).ready(function () {
    $('.nav-div li[data-nav-id="main"]').addClass("active").siblings().removeClass("active");
});
astock_1["default"].init();

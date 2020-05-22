"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var tools_1 = __importDefault(require("../src/modules/tools"));
console.log(tools_1["default"].getURLParamer());
var a = $("[data-keywords-mark]");
if ($("[data-keywords-mark]")) {
    a.each(function (i, k) {
        k.innerHTML = k.innerHTML.split("黄金").join("<em class='up'>黄金</em>");
    });
}

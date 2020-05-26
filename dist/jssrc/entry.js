"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var tools_1 = __importDefault(require("../src/modules/tools"));
var geturlp = tools_1["default"].getURLParamer();
console.log(geturlp.keywords);
var a = $("[data-keywords-mark]");
if (a) {
    a.each(function (i, k) {
        k.innerHTML = k.innerHTML.split(geturlp.keywords).join("<em class='up'>" + geturlp.keywords + "</em>");
    });
}
tools_1["default"].exchangeT();

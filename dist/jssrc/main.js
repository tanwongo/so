"use strict";
// //父级导航栏
// import menunav from "../src/modules/menunav"
// menunav.init()
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
// //topnav 用户设置
// import setting from "../src/modules/topnav/setting"
// setting.init()
// //topnav 消息通知
// import notice from "../src/modules/topnav/notice"
// notice.init()
// //右边栏用户信息
// import userinfo from "../src/modules/userinfo"
// userinfo.init()
// //处理通用事件
// import others from "../src/modules/others"
// others.init()
// export interface Global {
//     document: Document;
//     window: Window;
//   }
//   declare var global: Global;
/**
 * ts中 往window挂载自定义属性
 */
// declare global {
// interface Window {
//     iszhuye: boolean
// }
// }
var tools_1 = __importDefault(require("../src/modules/tools"));
$(document).ready(function () {
    $('.nav-div li[data-nav-id="main"]').addClass("active");
});
console.log(tools_1["default"].getQueryString("keywords"));

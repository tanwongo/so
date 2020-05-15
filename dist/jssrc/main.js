// //父级导航栏
// import menunav from "../src/modules/menunav"
// menunav.init()
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
$(document).on("click", function (e) {
    return __awaiter(this, void 0, void 0, function () {
        var pop_up_box;
        return __generator(this, function (_a) {
            pop_up_box = $(".pop-up-box");
            if (pop_up_box.is(":visible")) {
                if (!pop_up_box.is(e.target) && pop_up_box.has(e.target).length === 0) {
                    pop_up_box.hide();
                }
            }
            return [2 /*return*/];
        });
    });
});

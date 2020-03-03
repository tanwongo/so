"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
//我的粉丝
var fans_template = require("./template/fans.art");
//我的关注
var watched_template = require("./template/watched.art");
//近期涨
var up_template = require("./template/nearlyup.art");
//近期跌
var down_template = require("./template/nearlydown.art");
var loadanimate_1 = __importDefault(require("../loadanimate"));
/**
 * 用户个人信息
 * 粉丝，关注，财富号，博客，自选股，自选组合，自选基金
 * 盘面走势，近期涨跌
 */
var userinfo = {
    init: function () {
        this.fawClick();
        this.nearlyUpDown();
        this.signIn();
    },
    getListHtml: function (template, data) {
        var _html = template(data);
        return _html;
    },
    //获取相应数据(粉丝，关注，财富号，博客，自选股，自选组合，自选基金)
    getMyInfo: function (path) {
        var _this = this;
        var _path = "/api/" + path;
        return new Promise(function (res, rej) {
            $.ajax({
                type: "get",
                url: _path,
                dataType: "json"
            }).then(function (datas) {
                switch (path) {
                    case "fans":
                        return _this.getListHtml(fans_template, datas);
                    case "watch":
                        return _this.getListHtml(watched_template, datas);
                }
            }).done(function (tmpl) {
                _this.fillHtml("div", "fans-watch", tmpl);
                res(true);
            });
        });
    },
    /**
     * 近期涨跌
     * @param par {up:涨,down:跌}
     */
    getNearly: function (par) {
        var _this = this;
        var _path = "/api/getNearly/" + par;
        return new Promise(function (res, rej) {
            $.ajax({
                type: "get",
                url: _path,
                dataType: "json"
            }).then(function (datas) {
                console.log(datas);
                switch (par) {
                    case "up":
                        return _this.getListHtml(up_template, datas);
                    case "down":
                        return _this.getListHtml(down_template, datas);
                }
            }).done(function (tmpl) {
                _this.fillHtml("ul", "nearlyupdown", tmpl);
                res(true);
            });
        });
    },
    //我的粉丝,我的关注点击事件
    fawClick: function () {
        var _this = this;
        $("#myinfo a[data-click-types='fans'],#myinfo a[data-click-types='watch']").on("click", function (e) {
            return __awaiter(this, void 0, void 0, function () {
                var a, b;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            e.stopPropagation();
                            a = $(this).attr("data-click-types");
                            b = $("div[data-box-types='fans-watch'");
                            //显示
                            b.show();
                            //加载动画
                            loadanimate_1["default"].cirAnimate(b, true, "tsanimate");
                            //等待加载标识对应数据
                            return [4 /*yield*/, _this.getMyInfo(a)
                                //加载完毕移除动画
                            ];
                        case 1:
                            //等待加载标识对应数据
                            _a.sent();
                            //加载完毕移除动画
                            loadanimate_1["default"].cirAnimate(b, false, "tsanimate");
                            return [2 /*return*/, !1];
                    }
                });
            });
        });
    },
    //取消关注
    excFans: function () {
    },
    /**
     * 签到
     */
    signIn: function () {
        var _this = this;
        $("#myinfo a[data-click-types='signin']").on("click", function () {
            $(this).html("已签到").addClass("qded");
        });
    },
    //近期涨跌
    nearlyUpDown: function () {
        var _this = this;
        $("#nearly-updown-choose a[data-click-types]").on("click", function (e) {
            return __awaiter(this, void 0, void 0, function () {
                var b;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            b = $("ul[data-box-types='nearlyupdown'");
                            //加载动画
                            loadanimate_1["default"].cirAnimate(b, true, "tsanimate");
                            if (!$(this).hasClass("active")) return [3 /*break*/, 5];
                            if (!$(this).hasClass("bjup")) return [3 /*break*/, 2];
                            return [4 /*yield*/, _this.getNearly("down")];
                        case 1:
                            _a.sent();
                            $(this).addClass("bjdown").removeClass("bjup");
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, _this.getNearly("up")];
                        case 3:
                            _a.sent();
                            $(this).addClass("bjup").removeClass("bjdown");
                            _a.label = 4;
                        case 4: return [3 /*break*/, 7];
                        case 5: return [4 /*yield*/, _this.getNearly("up")];
                        case 6:
                            _a.sent();
                            $(this).addClass("active bjup").siblings().removeClass("active bjdown bjup");
                            _a.label = 7;
                        case 7:
                            //加载完毕移除动画
                            loadanimate_1["default"].cirAnimate(b, false, "tsanimate");
                            return [2 /*return*/, !1];
                    }
                });
            });
        });
    },
    fillHtml: function (dom, types, temp) {
        console.log(dom + "." + types + "." + temp);
        $("" + dom + "[data-box-types=" + types + "").html(temp);
    }
};
exports["default"] = userinfo;

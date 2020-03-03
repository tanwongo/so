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
//头部子选项
var shouc_head = require("./template/head.art");
//收藏股吧
var getShoucGuba = require("./template/guba.art");
//收藏话题
var getShoucHuati = require("./template/huati.art");
//收藏问答
var getShoucWenda = require("./template/wenda.art");
//收藏财富号
var getShoucMoney = require("./template/caifuhao.art");
//收藏主题投资
var getShoucTouzi = require("./template/zhuti.art");
var loadanimate_1 = __importDefault(require("../../loadanimate"));
var shouc = {
    init: function () {
        //充填子选项头部
        $("div[data-box-types='menutabs']").html(this.getHeadHtml());
        //加载头部点击事件
        this.headClick();
    },
    //渲染头部导航html
    getHeadHtml: function () {
        var _html = shouc_head;
        return _html;
    },
    //渲染主体html
    getListHtml: function (template, data) {
        var _html = template(data);
        return _html;
    },
    /**
    * 获取页面加载数据
    * @param path api路径
    */
    getShouc: function (path) {
        var _this = this;
        var _path = "/api/" + path;
        return new Promise(function (res, rej) {
            $.ajax({
                type: "get",
                url: _path,
                dataType: "json"
            }).then(function (data) {
                switch (path) {
                    case "getShoucGuba":
                        return _this.getListHtml(getShoucGuba, data);
                    case "getShoucHuati":
                        return _this.getListHtml(getShoucHuati, data);
                    case "getShoucWenda":
                        return _this.getListHtml(getShoucWenda, data);
                    case "getShoucMoney":
                        return _this.getListHtml(getShoucMoney, data);
                    case "getShoucTouzi":
                        return _this.getListHtml(getShoucTouzi, data);
                    default:
                        return _this.getListHtml(getShoucGuba, data);
                }
            }).done(function (tmpl) {
                _this.fillHtml(tmpl);
                res(true);
            });
        });
    },
    //导航栏子选项点击
    headClick: function () {
        var _this = this;
        $("#shouc-head a[data-click-types]").on("click", function () {
            return __awaiter(this, void 0, void 0, function () {
                var a;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            //首次加载移除原有线条动画
                            loadanimate_1["default"].lineAnimate("data-box-types", "menutabs", false, "lineAnimate", true);
                            $(this).addClass("active").siblings().removeClass("active");
                            //加载线条动画
                            loadanimate_1["default"].lineAnimate("data-box-types", "menutabs", true, "lineAnimate", true);
                            a = $(this).attr("data-click-types");
                            //等待加载标识对应数据
                            return [4 /*yield*/, _this.getShouc(a)
                                //数据加载完毕,移除线条动画
                            ];
                        case 1:
                            //等待加载标识对应数据
                            _a.sent();
                            //数据加载完毕,移除线条动画
                            loadanimate_1["default"].lineAnimate("data-box-types", "menutabs", false, "lineAnimate", false);
                            return [2 /*return*/];
                    }
                });
            });
        });
        //默认点击随机推荐
        $("#shouc-head  a[data-click-types='getShoucGuba']").click();
    },
    fillHtml: function (temp) {
        return $("#menuscont").html(temp);
    }
};
exports["default"] = shouc;

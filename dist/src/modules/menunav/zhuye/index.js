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
var zhuye_head = require("./template/head.art");
//主页主体内容
var zhuye_list = require("./template/list.art");
var discuss = require("./template/discuss.art");
var reply_box_theme = require("./template/replyboxtheme.art");
var reply_box_user = require("./template/replyboxuser.art");
var adv = require("../../adv/template/index.art");
var sendreply = require("./template/sendreply.art");
var loadanimate_1 = __importDefault(require("../../loadanimate"));
console.log(zhuye_head);
var _list = 1;
var $ = jQuery;
var advlist = {
    "data": [
        {
            "url": "http://same.eastmoney.com/c?z=eastmoney&amp;la=0&amp;si=1&amp;cg=103&amp;c=1522&amp;ci=1&amp;or=3841&amp;l=15116&amp;bg=15116&amp;b=17666&amp;u=https%3A%2F%2Facttg.eastmoney.com%2Fpub%2Fwebtg_hskh_act_webdt_01_01_01_0",
            "img": "http://g1.dfcfw.com/g3/201909/20190930094713.gif"
        },
        {
            "url": "http://same.eastmoney.com/c?z=eastmoney&amp;la=0&amp;si=1&amp;cg=103&amp;c=1519&amp;ci=1&amp;or=47&amp;l=13763&amp;bg=13763&amp;b=15653&amp;u=http%3A%2F%2Fhuoqibao.1234567.com.cn%2F%3Fspm%3D100015.b.002",
            "img": "http://g1.dfcfw.com/g3/201905/20190516152258.jpg"
        },
        {
            "url": "#",
            "img": "http://g1.dfcfw.com/g3/201910/20191016134623.jpg"
        }
    ]
};
/* <img src='http://gbres.dfcfw.com/face/emot/emot02.png'></img> */
var zhuye = {
    //默认加载
    init: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //充填子选项头部
                $("div[data-box-types='menutabs']").html(this.getHeadHtml());
                //加载头部点击事件
                this.headClick();
                return [2 /*return*/];
            });
        });
    },
    //渲染头部导航html
    getHeadHtml: function () {
        var _html = zhuye_head;
        return _html;
    },
    //渲染主体html
    getListHtml: function (data) {
        var _html = zhuye_list(data);
        return _html;
    },
    //广告
    getAdv: function (advlist) {
        var _html = adv(advlist);
        return _html;
    },
    /**
     * 获取页面加载数据
     * @param path api路径
     */
    getZhuye: function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var _this, _list, _path;
            return __generator(this, function (_a) {
                _this = this;
                _list = 0;
                _path = '/api/' + path;
                return [2 /*return*/, new Promise(function (res, rej) {
                        $.ajax({
                            type: "get",
                            url: _path,
                            dataType: "json"
                        }).then(function (data) {
                            return _this.getListHtml(data);
                        }).done(function (tmpl) {
                            _this.fillHtml(tmpl);
                            // _this.appendHtml(_this.getAdv(advlist.data[_list]))
                            _this.userFeedBack();
                            _this.zhemeReply();
                            res(true);
                        });
                    })];
            });
        });
    },
    postUserReply: function (data) {
        var _this = this;
        return sendreply(data);
    },
    /**
     * 页面滚动底部加载新数据
     * @param id
     */
    pushLoading: function (id) {
        var _this = this;
        return new Promise(function (res, rej) {
            $.ajax({
                type: "get",
                url: "/api/getRandom2",
                beforeSend: function () {
                    // loadanimate.cirAnimate(id,true,'pushload')
                },
                dataType: "json"
            }).then(function (data) {
                return _this.getListHtml(data);
            }).done(function (tmpl) {
                _this.appendHtml(tmpl);
                if (_list < 3) {
                    _this.appendHtml(_this.getAdv(advlist.data[_list]));
                    _this.userVbq();
                    _this.zhemeReply();
                    _this.showUpImg();
                    _this.useGood();
                    _list++;
                    res(true);
                }
                loadanimate_1["default"].cirAnimate(id, false, 'pushload');
            });
        });
    },
    //导航栏子选项点击
    headClick: function () {
        var _this = this;
        $("#zhuye-head a[data-click-types]").on("click", function () {
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
                            return [4 /*yield*/, _this.getZhuye(a)
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
        $("#zhuye-head  a[data-click-types='getRandom']").click();
    },
    //主题回复
    zhemeReply: function () {
        var _this_ = this;
        $("a[data-click-types='discuss']").on("click", function () {
            return __awaiter(this, void 0, void 0, function () {
                var a;
                return __generator(this, function (_a) {
                    a = $(this).attr("data-discuss-id");
                    //加载对应的主题回复模板数据
                    $("div[data-box-types=" + a + "]").html(discuss).stop(true, false).animate({ height: "100%", opacity: 1 }, 200);
                    return [2 /*return*/];
                });
            });
        });
    },
    //点赞
    useGood: function () {
        $(".ts-info-good").on("click", function () {
            var b = 0;
            var a = parseInt($(this).attr("data-box-good"));
            if ($(this).hasClass('ts-info-upgood')) {
                a--;
                $(this).attr("data-box-good", a);
                $(this).removeClass('ts-info-upgood');
                $(this).children("span").html("(" + $(this).attr("data-box-good") + ")");
            }
            else {
                a++;
                $(this).attr("data-box-good", a);
                $(this).addClass('ts-info-upgood');
                $(this).children("span").html("(" + $(this).attr("data-box-good") + ")");
            }
        });
    },
    //用户反馈
    userFeedBack: function () {
        //a标签类型为反馈点击事件
        $("a[data-click-types='feedback']").on("click", function (e) {
            e.stopPropagation();
            var $this = $(this);
            //获取当前反馈对应的顶级list索引
            var a = $(this).attr("data-feedback-box");
            //获取对应的div
            var b = $("div[data-feedbackbox-id=feedbackbox-" + a + "]");
            //获取对应的提交按钮
            var c = $("a[data-click-types='feedbacksubmit']");
            //显示对应的div
            b.show().stop(true, false).animate({ opacity: 1 }, 200);
            if (b.find(c).hasClass("issubmit")) {
                return;
            }
            //反馈内容点击事件
            b.find("li").unbind("click").on("click", function (e) {
                e.stopPropagation();
                $(this).toggleClass("active");
                //只要选择了，添加按钮高亮样式，提示可以提交
                if (b.find("li").hasClass("active")) {
                    b.find(c).addClass("isready");
                }
                else {
                    b.find(c).removeClass("isready");
                }
            });
            //提交反馈 a标签类型为反馈提交
            b.find(c).unbind("click").on("click", function (e) {
                var _this = $(this);
                e.stopPropagation();
                //如果不为空就提交
                if (b.find("li").hasClass("active")) {
                    loadanimate_1["default"].cirAnimate(b, true, "tsanimate");
                    setTimeout(function () {
                        loadanimate_1["default"].cirAnimate(b, false, "tsanimate");
                        setTimeout(function () {
                            _this.html("已提交").addClass("issubmit");
                            //提交反馈是否成功,如果成功禁止再次点击
                            b.find("li").unbind("click");
                            b.find(c).unbind("click");
                            $this.addClass("addhover");
                        }, 200);
                    }, 2000);
                }
            });
        });
    },
    //文章搜索
    userSearch: function () {
        $(".search-ipt").on("focus", function () {
            $(this).stop(true, false).animate({ width: 200 }, 500).addClass("bg1 fff");
        });
        $(".search-ipt").on("blur", function () {
            $(this).stop(true, false).animate({ width: 140 }, 500).removeClass("bg1 fff");
        });
    },
    //滚动底部加载
    pushDown: function () {
        var _this = this;
        var sum = 0;
        $(window).on("resize scroll", function () {
            if (1 == 1)
                var windowHeight = $(window).height();
            var scrollTop = $(window).scrollTop();
            var docHeight = $(document).height();
            if (scrollTop + windowHeight + 1 >= docHeight) {
                if (sum < 3) {
                    _this.pushLoading("menuscont");
                    sum++;
                }
            }
        });
    },
    fillHtml: function (temp) {
        return $("#menuscont").html(temp);
    },
    appendHtml: function (temp) {
        return $("#menuscont").append(temp);
    }
};
exports["default"] = zhuye;

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
exports.__esModule = true;
var axios = require('axios');
var datas = {
    // getdatas: function(){
    //     return data1;
    // },
    getDatas: function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios.get(url)];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //我关注的
    getWatched: function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/watched.json')];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //市场热点
    getHot: function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/hot.json')];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //随机推荐
    getRandom: function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/random.json')];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //随机推荐
    getRandom2: function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/random2.json')];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //自选
    getZixuan: function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/zixuan.json')];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //我的帖子
    getGubaPosting: function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/guba.json')];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //我的回复
    getGubaReply: function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/huifu.json')];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //回复我的
    getGubaReplyMe: function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/huifu.json')];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //收到的赞
    getGubaZan: function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/huifu.json')];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //提到我的
    getGubaInv: function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/huifu.json')];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //我的提问
    getWendaQuestion: function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/anwser.json')];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //我的回答
    getWendaAnswer: function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/anwser.json')];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //我的消息
    getWendaMessage: function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/anwser.json')];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //收藏股吧
    getShoucGuba: function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/shouc.json')];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //收藏话题
    getShoucHuati: function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/shouc.json')];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //收藏问答
    getShoucWenda: function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/shouc.json')];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //收藏财富号
    getShoucMoney: function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/shouc.json')];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //收藏主题投资
    getShoucTouzi: function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/shouc.json')];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //我的钱包
    getQianb: function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/qianb.json')];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //我的积分
    getJiFen: function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/jifen.json')];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //积分明细
    getMinXi: function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/jifen.json')];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //积分商店
    getShop: function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/jifen.json')];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //任务
    getMis: function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/jifen.json')];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //我的个人信息
    getMyInfo: function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/info.json')];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //我的粉丝
    getMyFans: function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/fans.json')];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //我关注的人
    getMyWatch: function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/watch.json')];
                    case 1:
                        back = _a.sent();
                        return [2 /*return*/, back.data];
                }
            });
        });
    },
    //近期涨跌
    getNearlyUpDown: function (par) {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        par = par || "up";
                        return [4 /*yield*/, this.getDatas('http://127.0.0.1:12345/updown.json')];
                    case 1:
                        back = _a.sent();
                        if (par == "up") {
                            return [2 /*return*/, back.up.data];
                        }
                        else {
                            return [2 /*return*/, back.down.data];
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
};
exports["default"] = datas;

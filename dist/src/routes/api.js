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
var koa_router_1 = __importDefault(require("koa-router"));
var data_1 = __importDefault(require("../modules/data"));
var router = new koa_router_1["default"]();
router.prefix('/api');
// router.get('/', async (ctx, next) => {
//     ctx.body = {
//       re: true,
//       message: '',
//       result: null
//     }
// })
// 200 150
router.get('/test', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log(ctx);
        return [2 /*return*/];
    });
}); });
//读取我关注的
router.get('/getWatched', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var backdatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_1["default"].getWatched()];
            case 1:
                backdatas = _a.sent();
                ctx.body = {
                    re: true,
                    message: '',
                    result: backdatas
                };
                return [2 /*return*/];
        }
    });
}); });
//读取市场热点
router.get('/getHot', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var backdatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_1["default"].getHot()];
            case 1:
                backdatas = _a.sent();
                ctx.body = {
                    re: true,
                    message: '',
                    result: backdatas
                };
                return [2 /*return*/];
        }
    });
}); });
//读取随机推荐
router.get('/getRandom', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var backdatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_1["default"].getRandom()];
            case 1:
                backdatas = _a.sent();
                ctx.body = {
                    re: true,
                    message: '',
                    result: backdatas
                };
                return [2 /*return*/];
        }
    });
}); });
//读取随机推荐2
router.get('/getRandom2', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var backdatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_1["default"].getRandom2()];
            case 1:
                backdatas = _a.sent();
                ctx.body = {
                    re: true,
                    message: '',
                    result: backdatas
                };
                return [2 /*return*/];
        }
    });
}); });
//读取自选
router.get('/getZixuan', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var backdatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_1["default"].getZixuan()];
            case 1:
                backdatas = _a.sent();
                ctx.body = {
                    re: true,
                    message: '',
                    result: backdatas
                };
                return [2 /*return*/];
        }
    });
}); });
//读取我的帖子
router.get('/getGubaPosting', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var backdatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_1["default"].getGubaPosting()];
            case 1:
                backdatas = _a.sent();
                ctx.body = {
                    re: true,
                    message: '',
                    result: backdatas
                };
                return [2 /*return*/];
        }
    });
}); });
//读取我的回复
router.get('/getGubaReply', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var backdatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_1["default"].getGubaReply()];
            case 1:
                backdatas = _a.sent();
                ctx.body = {
                    re: true,
                    message: '',
                    result: backdatas
                };
                return [2 /*return*/];
        }
    });
}); });
//读取回复我的
router.get('/getGubaReplyMe', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var backdatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_1["default"].getGubaReplyMe()];
            case 1:
                backdatas = _a.sent();
                ctx.body = {
                    re: true,
                    message: '',
                    result: backdatas
                };
                return [2 /*return*/];
        }
    });
}); });
//读取收到的赞
router.get('/getGubaZan', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var backdatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_1["default"].getGubaZan()];
            case 1:
                backdatas = _a.sent();
                ctx.body = {
                    re: true,
                    message: '',
                    result: backdatas
                };
                return [2 /*return*/];
        }
    });
}); });
//读取收到的赞
router.get('/getGubaInv', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var backdatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_1["default"].getGubaInv()];
            case 1:
                backdatas = _a.sent();
                ctx.body = {
                    re: true,
                    message: '',
                    result: backdatas
                };
                return [2 /*return*/];
        }
    });
}); });
//我的提问
router.get('/getWendaQuestion', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var backdatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_1["default"].getWendaQuestion()];
            case 1:
                backdatas = _a.sent();
                ctx.body = {
                    re: true,
                    message: '',
                    result: backdatas
                };
                return [2 /*return*/];
        }
    });
}); });
//我的回答
router.get('/getWendaAnswer', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var backdatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_1["default"].getWendaAnswer()];
            case 1:
                backdatas = _a.sent();
                ctx.body = {
                    re: true,
                    message: '',
                    result: backdatas
                };
                return [2 /*return*/];
        }
    });
}); });
//我的消息
router.get('/getWendaMessage', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var backdatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_1["default"].getWendaMessage()];
            case 1:
                backdatas = _a.sent();
                ctx.body = {
                    re: true,
                    message: '',
                    result: backdatas
                };
                return [2 /*return*/];
        }
    });
}); });
//收藏股吧
router.get('/getShoucGuba', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var backdatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_1["default"].getShoucGuba()];
            case 1:
                backdatas = _a.sent();
                ctx.body = {
                    re: true,
                    message: '',
                    result: backdatas
                };
                return [2 /*return*/];
        }
    });
}); });
//收藏话题
router.get('/getShoucHuati', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var backdatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_1["default"].getShoucHuati()];
            case 1:
                backdatas = _a.sent();
                ctx.body = {
                    re: true,
                    message: '',
                    result: backdatas
                };
                return [2 /*return*/];
        }
    });
}); });
//收藏问答
router.get('/getShoucWenda', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var backdatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_1["default"].getShoucWenda()];
            case 1:
                backdatas = _a.sent();
                ctx.body = {
                    re: true,
                    message: '',
                    result: backdatas
                };
                return [2 /*return*/];
        }
    });
}); });
//收藏财富号
router.get('/getShoucMoney', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var backdatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_1["default"].getShoucMoney()];
            case 1:
                backdatas = _a.sent();
                ctx.body = {
                    re: true,
                    message: '',
                    result: backdatas
                };
                return [2 /*return*/];
        }
    });
}); });
//收藏主题投资
router.get('/getShoucTouzi', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var backdatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_1["default"].getShoucTouzi()];
            case 1:
                backdatas = _a.sent();
                ctx.body = {
                    re: true,
                    message: '',
                    result: backdatas
                };
                return [2 /*return*/];
        }
    });
}); });
//钱包
router.get('/getQianb', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var backdatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_1["default"].getQianb()];
            case 1:
                backdatas = _a.sent();
                ctx.body = {
                    re: true,
                    message: '',
                    result: backdatas
                };
                return [2 /*return*/];
        }
    });
}); });
//我的积分
router.get('/getJiFen', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var backdatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_1["default"].getJiFen()];
            case 1:
                backdatas = _a.sent();
                ctx.body = {
                    re: true,
                    message: '',
                    result: backdatas
                };
                return [2 /*return*/];
        }
    });
}); });
//积分明细
router.get('/getMinXi', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var backdatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_1["default"].getMinXi()];
            case 1:
                backdatas = _a.sent();
                ctx.body = {
                    re: true,
                    message: '',
                    result: backdatas
                };
                return [2 /*return*/];
        }
    });
}); });
//积分商店
router.get('/getShop', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var backdatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_1["default"].getShop()];
            case 1:
                backdatas = _a.sent();
                ctx.body = {
                    re: true,
                    message: '',
                    result: backdatas
                };
                return [2 /*return*/];
        }
    });
}); });
//积分商店
router.get('/getMis', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var backdatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_1["default"].getMis()];
            case 1:
                backdatas = _a.sent();
                ctx.body = {
                    re: true,
                    message: '',
                    result: backdatas
                };
                return [2 /*return*/];
        }
    });
}); });
//粉丝数量
router.get('/fans', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var backdatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_1["default"].getMyFans()];
            case 1:
                backdatas = _a.sent();
                ctx.body = {
                    re: true,
                    message: '',
                    result: backdatas
                };
                return [2 /*return*/];
        }
    });
}); });
//关注数量
router.get('/watch', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var backdatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_1["default"].getMyWatch()];
            case 1:
                backdatas = _a.sent();
                ctx.body = {
                    re: true,
                    message: '',
                    result: backdatas
                };
                return [2 /*return*/];
        }
    });
}); });
//近期涨跌
router.get('/getNearly/:sort', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var backdatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_1["default"].getNearlyUpDown(ctx.params.sort)];
            case 1:
                backdatas = _a.sent();
                ctx.body = {
                    re: true,
                    message: '',
                    result: backdatas
                };
                return [2 /*return*/];
        }
    });
}); });
module.exports = router;

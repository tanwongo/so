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
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development';
}
require('source-map-support').install();
var koa_1 = __importDefault(require("koa"));
var koaejs_1 = __importDefault(require("./src/modules/koaejs"));
var index_1 = __importDefault(require("./config/index"));
var koa_body_1 = __importDefault(require("koa-body"));
var reg_route_1 = __importDefault(require("./src/modules/reg_route"));
var onerror_1 = __importDefault(require("./src/modules/onerror"));
var getipport_1 = __importDefault(require("./src/modules/getipport"));
//   import catchweb from './modules/catchweb'
var app = new koa_1["default"]();
app.proxy = true;
app.use(getipport_1["default"]());
//静态文件
app.use(require("koa-static")('public'));
app.use(onerror_1["default"]());
app.use(koa_body_1["default"]());
// render(app, {
//   root: path.join(__dirname,'views'),
//   layout: 'shared/layout',
//   viewExt: 'ejs',
//   cache: false,
//   debug: false 
// });
koaejs_1["default"](app, {
    root: "views",
    layout: 'shared/layout',
    viewExt: 'ejs',
    cache: false,
    debug: false
});
// render(app, {
//   root:"views",
//   layout: 'shared/layout',
//   extname: '.art',
//   cache: false,
//   debug:true
// });
//   app.use(async (ctx, next)=>{
//     ctx.state.footer = await catchweb('http://emres.dfcfw.com/public/footer-1000-html.html', {}, 10 * 60 * 1000)
//     let nav2 = await catchweb('http://bulletin.eastmoney.com/html/Base/765.html', {}, 2 * 60 * 1000);
//     ctx.state.mainnav2 = (nav2.split('&nbsp;')).join("");
//     ctx.state.thistime = moment().format('yyyy-mm-dd HH:MM:ss')
//     ctx.state.machine_num = process.env.SERVER_NUM || 0
//     await next()
//   })
//注册路由
reg_route_1["default"](app);
app.use(function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ctx.status = 404;
                return [4 /*yield*/, ctx.render('shared/404', { title: '404', layout: false })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
app.use(function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ctx.state.machine_num = index_1["default"].machine_num;
                //ctx.state.footer = 'footer'
                return [4 /*yield*/, next()];
            case 1:
                //ctx.state.footer = 'footer'
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
var port = 777;
app.listen(port, function () {
    console.info("(ENV\uFF1A" + process.env.NODE_ENV + ")\u5DF2\u542F\u52A8\uFF0C\u76D1\u542C\u7AEF\u53E3 " + port);
});

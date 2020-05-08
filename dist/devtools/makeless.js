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
var less_1 = __importDefault(require("less"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var chokidar_1 = __importDefault(require("chokidar"));
var path_1 = __importDefault(require("path"));
var glob_1 = __importDefault(require("glob"));
var minimist_1 = __importDefault(require("minimist"));
var argv = minimist_1["default"](process.argv.slice(2));
// async function makeLess(lesspath){
//   if (!fs.existsSync(lesspath)) {
//     return 'no less file'
//   }
//   var result;
//   try {
//     let css = await fs.readFile(lesspath, 'utf-8')
//     let back = await less.render(css, {
//       paths: ['./style/'],
//       syncImport: false
//     })
//     result = back.css
//     await fs.writeFile('./public/css/main.css', result, 'utf-8')
//   } catch (error) {
//     console.error(error);
//     result = error.message
//   }
//   return result
// }
/**
 * 生成less
 *
 * @param {any} lesspath
 */
function makeLess(lesspath, outdir) {
    return __awaiter(this, void 0, void 0, function () {
        var lessfile;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs_extra_1["default"].readFile(lesspath, 'utf-8')];
                case 1:
                    lessfile = _a.sent();
                    less_1["default"].render(lessfile, {
                        paths: ['./less/']
                    }, function (e, output) {
                        if (e) {
                            console.error(e);
                        }
                        else {
                            // if (output.css.length == 0) {
                            //   makeLess(lesspath)
                            // }
                            // else{
                            fs_extra_1["default"].writeFile(path_1["default"].join(outdir, path_1["default"].basename(lesspath, '.less') + '.css'), output.css, 'utf-8').then(function () {
                                console.info(lesspath + ' 编译成功');
                            });
                            // }
                        }
                    });
                    return [2 /*return*/];
            }
        });
    });
}
if (argv.w) {
    var less_watcher = chokidar_1["default"].watch('./less/**/*.less');
    console.info('开始监听./less/*.less');
    less_watcher.on('change', function (lesspath) {
        var lessfile = glob_1["default"].sync('./less/*.less');
        lessfile.forEach(function (v) {
            makeLess(v, './public/css/');
        });
    });
}
else {
    var lessfile = glob_1["default"].sync('./less/*.less');
    console.info('开始编译./less/*.less');
    lessfile.forEach(function (v) {
        makeLess(v, './public/css/');
    });
}

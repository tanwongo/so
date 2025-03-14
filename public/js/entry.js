/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./jssrc/entry.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./jssrc/entry.ts":
/*!************************!*\
  !*** ./jssrc/entry.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var tools_1 = __importDefault(__webpack_require__(/*! ../src/modules/tools */ "./src/modules/tools/index.ts"));
var geturlp = tools_1["default"].getURLParamer();
console.log(geturlp.keywords);
var a = $("[data-keywords-mark]");
if (a) {
    a.each(function (i, k) {
        k.innerHTML = k.innerHTML.split(geturlp.keywords).join("<em class='up'>" + geturlp.keywords + "</em>");
    });
}
tools_1["default"].exchangeT();


/***/ }),

/***/ "./src/modules/dialog/index.ts":
/*!*************************************!*\
  !*** ./src/modules/dialog/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var alert_dialog = {
    init: function () {
    },
    warn: function (options) {
        var opts = options;
        $("body").append("<div></div>");
    },
    /**
     * input为空提示---边框变红
     * @param options 标识，样式
     */
    bordfocus: function (options) {
        var $opt = options;
        $opt.domsym.addClass("borderlight");
        var relight = setTimeout(function () {
            $opt.domsym.removeClass("borderlight");
        }, 1000);
    }
};
exports["default"] = alert_dialog;


/***/ }),

/***/ "./src/modules/tools/index.ts":
/*!************************************!*\
  !*** ./src/modules/tools/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dialog_1 = __importDefault(__webpack_require__(/*! ../dialog */ "./src/modules/dialog/index.ts"));
var tools = {
    init: function () {
    },
    keyWordsRed: function (str, kw, kw2) {
        kw = kw ? kw : "";
        if ((str + "") && (kw + "")) {
            var enc = kw.replace(/\*/g, "\\*");
            enc = enc.replace(/\^/g, "\\^");
            enc = enc.replace(/\$/g, "\\$");
            enc = enc.replace(/\+/g, "\\+");
            enc = enc.replace(/\?/g, "\\?");
            enc = enc.replace(/\./g, "\\.");
            enc = enc.replace(/\(/g, "\\(");
            enc = enc.replace(/\)/g, "\\)");
            var reg = new RegExp(enc, "g");
            var rep = "<em>" + kw + "</em>";
            var nstr = str.replace(reg, rep);
            // 标红第二个关键字		
            if (kw2) {
                return this.keyWordRed(nstr, kw2);
            }
            else {
                return nstr;
            }
        }
        return "";
    },
    getQueryString: function (name) {
        var enc = name.replace("*", "\\*");
        var reg = new RegExp("(^|&)" + enc + "=([^&]*)(&|$)", "i");
        var str = (window.location.search.substr(1));
        var r = str.match(reg);
        if (r != null) {
            return decodeURIComponent(r[2]);
        }
        else {
            return null;
        }
    },
    getURLParamer: function () {
        var str = window.location.search.substr(1);
        var arr = str.split("&");
        var obj = {};
        for (var i = 0, len = arr.length; i < len; i++) {
            var temp = arr[i].split("=");
            var key = temp[0].toLocaleLowerCase();
            var val = temp[1];
            try {
                val = decodeURIComponent(val);
            }
            catch (error) {
            }
            obj[key] = val;
        }
        return obj;
    },
    URLObjToString: function (obj) {
        var arr = [];
        for (var key in obj) {
            arr.push(key + "=" + obj[key]);
        }
        return arr.join("&");
    },
    exInputNumber: function (dom, domval, domsel) {
        var $fdom = dom;
        var $fdomval = domval;
        var $fdomsel = domsel;
        if (isNaN($fdomval) || $fdomval == "") {
            dialog_1["default"].bordfocus({
                "domsym": $fdom
            });
            return false;
        }
        else {
            $;
            console.log($fdomsel.select().val());
            // http://push2.eastmoney.com/api/qt/stock/get?secid=121.USDCNYI&fltt=2&fields=f43,f57,f60&cb=jQuery18305642555869954946_1590395277408&_=1590395285391
            // var x = $("c1")[$("c1").selectedIndex].value;
            // var y = $("c2")[$("c2").selectedIndex].value;
            // var url = "//hq.sinajs.cn/list=" + x + "," + y;
            // return true
        }
        // $("res").value = "正在计算..";
        // var x = $("c1")[$("c1").selectedIndex].value;
        // var y = $("c2")[$("c2").selectedIndex].value;
        // var url = "//hq.sinajs.cn/list=" + x + "," + y;
        // var scriptLoader = new IO.Script();
        // scriptLoader.load(url, this.deal.Bind(this, x, y, bsv));
    },
    exchangeT: function () {
        var _this = this;
        var div_entry_tools = $("[data-entry-tools]");
        if (div_entry_tools) {
            div_entry_tools.find("[data-entry-tips='gold']").click(function () {
                var gold_input = div_entry_tools.find("[data-entry-input='gold']");
                var gold_currency = div_entry_tools.find("[data-entry-select]");
                console.log(gold_currency);
                var gold_input_val = $.trim(gold_input.val());
                if (isNaN(gold_input_val) || gold_input_val == "") {
                    dialog_1["default"].bordfocus({
                        "domsym": gold_input
                    });
                    return false;
                }
                else {
                    $(".entry-tools-change-gold .entry-tools-change-result").show(200);
                    // let gold_input
                    // $.ajax({
                    //     type:"get",
                    //     url:"http://push2.eastmoney.com/api/qt/stock/get?secid=121.USDCNYI&fltt=2&fields=f43,f57,f60&cb=?"
                    // })
                }
            });
            div_entry_tools.find("[data-entry-tips='rate']").click(function () {
                var rate_input = div_entry_tools.find("[data-entry-input='rate']");
                var rate_currency = div_entry_tools.find("[data-entry-select]");
                var rate_input_val = $.trim(rate_input.val());
                if (isNaN(rate_input_val) || rate_input_val == "") {
                    dialog_1["default"].bordfocus({
                        "domsym": rate_input
                    });
                    return false;
                }
                else {
                    $(".entry-tools-change-rate .entry-tools-change-result").show(200);
                    // let gold_input
                    // $.ajax({
                    //     type:"get",
                    //     url:"http://push2.eastmoney.com/api/qt/stock/get?secid=121.USDCNYI&fltt=2&fields=f43,f57,f60&cb=?"
                    // })
                }
            });
        }
    }
};
exports["default"] = tools;


/***/ })

/******/ });
//# sourceMappingURL=entry.js.map
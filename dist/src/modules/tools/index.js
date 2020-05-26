"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dialog_1 = __importDefault(require("../dialog"));
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

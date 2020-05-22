"use strict";
exports.__esModule = true;
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
    }
};
exports["default"] = tools;

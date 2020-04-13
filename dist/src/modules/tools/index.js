"use strict";
exports.__esModule = true;
var tools = {
    init: function () {
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

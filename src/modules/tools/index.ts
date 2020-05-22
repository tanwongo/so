let tools = {
    init: function(){
    },
    keyWordsRed: function(str:any,kw:any,kw2:any){

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
                } else {
                    return nstr;
                }
            }
        
            return "";
    },
    getQueryString: function(name:any){
        let enc = name.replace("*", "\\*");
        let reg = new RegExp("(^|&)" + enc + "=([^&]*)(&|$)", "i");
        let str = (window.location.search.substr(1));
        let r = str.match(reg);
        if (r != null) {
            return decodeURIComponent(r[2])
        } else {
            return null;
        }
    },
    getURLParamer: function(){
        let str = window.location.search.substr(1);
        let arr = str.split("&");
        let obj = {};
        for(let i = 0, len = arr.length ; i < len ; i++){
            let temp = arr[i].split("=");
            let key = temp[0].toLocaleLowerCase();
            let val = temp[1];
            try {
                val = decodeURIComponent(val);
            } catch (error) {
                
            }
            obj[key] = val;
        }
        return obj;
    },
    URLObjToString: function(obj:any){
        let arr = []
    for (var key in obj) {
        arr.push(key + "=" + obj[key]);
    }
    return arr.join("&");
    }

    
}

export default tools
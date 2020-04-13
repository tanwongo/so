let tools = {
    init: function(){
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
import dialog from "../dialog"

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
    },
    exInputNumber: function(dom:any,domval:any,domsel:any){

        let $fdom = dom;
        let $fdomval = domval;
        let $fdomsel = domsel;


		if(isNaN($fdomval)||$fdomval=="") {
            dialog.bordfocus({
               "domsym": $fdom
            })

            return false;
        }
        else{
            $
            console.log($fdomsel.select().val())
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
    exchangeT: function(){
        let _this = this;
        let div_entry_tools  = $("[data-entry-tools]")


        if(div_entry_tools){
            div_entry_tools.find("[data-entry-tips='gold']").click(function(){
                let gold_input:any = div_entry_tools.find("[data-entry-input='gold']")
                
                let gold_currency:any = div_entry_tools.find("[data-entry-select]")
                console.log(gold_currency)

                let gold_input_val:any = $.trim(gold_input.val())

                if(isNaN(gold_input_val)||gold_input_val==""){
                    dialog.bordfocus({
                        "domsym": gold_input
                     })
                     return false;
                }
                else{
                    $(".entry-tools-change-gold .entry-tools-change-result").show(200)
                    // let gold_input
                    // $.ajax({
                    //     type:"get",
                    //     url:"http://push2.eastmoney.com/api/qt/stock/get?secid=121.USDCNYI&fltt=2&fields=f43,f57,f60&cb=?"
                    // })
                }
                
            })
            div_entry_tools.find("[data-entry-tips='rate']").click(function(){
                let rate_input:any = div_entry_tools.find("[data-entry-input='rate']")
                
                let rate_currency:any = div_entry_tools.find("[data-entry-select]")

                let rate_input_val:any = $.trim(rate_input.val())

                if(isNaN(rate_input_val)||rate_input_val==""){
                    dialog.bordfocus({
                        "domsym": rate_input
                     })
                     return false;
                }
                else{
                    $(".entry-tools-change-rate .entry-tools-change-result").show(200)
                    // let gold_input
                    // $.ajax({
                    //     type:"get",
                    //     url:"http://push2.eastmoney.com/api/qt/stock/get?secid=121.USDCNYI&fltt=2&fields=f43,f57,f60&cb=?"
                    // })
                }
                
            })
        }
    }

    
}

export default tools
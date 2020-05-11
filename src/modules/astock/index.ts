const dot = require("dot")

import popupbox from "./pop_up_box.html"

let astock = {
    init: function(){
        this.historyPopUpBox()
        console.log(123)
    },
    historyPopUpBox:function(){
        $("#a-stock-history-dividend").on("click",function(){
           $("body").append(dot.template(popupbox))
        })
    }
}
export default astock
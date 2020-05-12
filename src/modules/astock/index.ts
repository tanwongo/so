const dot = require("dot")

import popupbox from "./pop_up_box.html"

let options = {
    "title":"大笔买入",
    "sum":123,
    "css":{
        width:"250px",
        position:"fixed",
        zindex:"10",
        left:"50%",
        top:"35px",
        bottom: "0",
        height:"auto",
        padding: "10px",
        marginLeft: "100px",
        background:" #fffbd5",
        border: "1px solid #000",
        boxshadow: "2px 2px 5px 2px #808080"
    }
}

let astock = {
    init: function(){
        this.ydPopUpBox()
        console.log(123)
    },
    ydPopUpBox:function(){
        $("[data-yd-status='bigbuy']").on("click",async function(){
           $("body").append(dot.template(popupbox)(options))
           $(".pop-up-box").css(options.css)
           console.log($(this).offset().top)
           console.log($(this).offset().left)
        })
    }
}
export default astock
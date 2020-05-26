const dot = require("dot")

import popupbox from "./pop_up_box.html"

let options = {
    "title":"大笔买单",
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
        background:" #fff",
        border: "1px solid #efefef",
        overflow:"auto"
    }
}

let astock = {
    init: function(){
        this.ydPopUpBox()
        console.log(123)
    },
    ydPopUpBox:function(){
        $("[data-yd-status='bigbuy']").on("click",async function(e:any){
            e.stopPropagation();
            if($(".pop-up-box")){
                $(".pop-up-box").remove()
            }
            $("body").append(dot.template(popupbox)(options))
            $(".pop-up-box").css(options.css).show()
        })
    }
}
export default astock
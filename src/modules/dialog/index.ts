
let alert_dialog = {
    init:function(){

    },
    warn: function(options:any){
        let opts = options;
        $("body").append("<div></div>")
    },
    /**
     * input为空提示---边框变红
     * @param options 标识，样式
     */
    bordfocus: function(options:any){
        let $opt = options;
        $opt.domsym.addClass("borderlight")
        let relight =setTimeout(() => {
            $opt.domsym.removeClass("borderlight")
        }, 1000);

    }
}

export default alert_dialog
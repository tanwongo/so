/**
 * 处理通用事件
 */
let others = {
    init: function(){
        this.showTopBar()
        this.hideAlertBox()
    },
    
    /**
     * 显示顶部通用栏
     */
    showTopBar: function(){
        $("div[data-box-types='topnav']").stop(true,false).animate({top:0},200)
    },

    /**
     * 点击空白处，隐藏弹出框
     */
    hideAlertBox: function(){
    
        //消息设置弹出框
        let settinglist = $("#setting-list")
        
        $(document).on("click",async function(e:any){
            //头像下拉框弹出框
            let usersetbox = $('#user-setting-box') 

            //反馈弹出框
            let feedbackbox = $('.feedbackbox')
            
            //粉丝，关注弹出框
            let fansandwatch = $(".fans-and-watch")

            //消息提醒
            let newnoticebox = $("#new-notice-box")

            let arry =  [feedbackbox,fansandwatch,newnoticebox,usersetbox]


            for(let i = 0; i<arry.length;i++){
                if(arry[i].is(":visible")){
                    if(!arry[i].is(e.target) && arry[i].has(e.target).length === 0){
                        arry[i].hide()
                    }
                }
            }
            
        })

        //隐藏消息设置弹出框
        $("div[data-box-types='lock']").on("click",function(){
            $(this).hide()
            settinglist.hide()
            return !1;
        });
    }
}

export default others
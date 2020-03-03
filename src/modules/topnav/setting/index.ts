const indexhtml = require("./template/index.art")

import loadanimate  from "../../loadanimate"

let setting = {
    init: function(){
        this.getHtml()
        this.backTop()
        this.showBox()
        this.loadBox()
       
    },

    //消息设置,隐私设置,黑名单设置
    getHtml: function(){
        $("body").append(indexhtml);
    },

    //提交设置
    postSetting: function(id){
        let _this =this;
        return new Promise<any>(function(res:any,rej:any){
            $.ajax({
                type:"post",
                url:"/api/getRandom",
                dataType:"json"
            }).then(function(data){
                
            }).done(function(tmpl){

            })
        })
    },

    //显示隐藏设置,认证
    showBox: function(){

        //topnav我的头像点击
        $("a[data-click-types='user-setting-box']").on("click",function(e){
            e.stopPropagation()
            //显示设置框
            $("div[data-box-types='user-setting-box']").show()
            $("div[data-box-types='topnav-notice-box']").hide()
        })

        //认证
        $("div[data-hover-types='certi-dv']").on("mouseenter",function(){
            $("div[data-box-types='certi-dv-box']").show()
            $("div[data-box-types='topnav-notice-box']").hide()
        })
        $("div[data-hover-types='certi-dv']").on("mouseleave",function(){
            $("div[data-box-types='certi-dv-box']").hide()
            $("div[data-box-types='topnav-notice-box']").hide()
        })
    },

    /**
     * @param message 消息设置
     * @param privacy 隐私设置
     * @param blacklist 黑名单设置
     */
     loadBox: function(){
         let _this = this;
        //设置框A标签点击
        $("#user-setting-box a[data-click-types]").on("click",function(e){
            $("div[data-box-types='topnav-notice-box']").hide()
            e.stopPropagation()
            let a = $(this).attr("data-click-types");
            switch (a){
                case "message":
                message(0,_this);
                break;
                case "private":
                message(1,_this)
                break;
                case "blacklist":
                message(2,_this)
                break;
            }
            return !1;
        });

        //消息设置内容
        function message(o:any,t:any){
            $("div[data-box-types='lock']").show();
                                    
            //获取显示attr标识
            let boxid = "div[data-box-types='setting-list']"

            $(boxid).show().stop(true,false).animate({opacity:1})

            //头部点击
            $(boxid+" li").on("click",function(){
                $(this).addClass("tabs").siblings().removeClass("tabs")
                $("div[data-box-types='setting-list-cont']>div").eq(o||$(this).index()).removeClass("hd").siblings().addClass("hd")
                o = undefined
            })

            $(boxid+" li").eq(o).click()

            //选项标签点击
            $(boxid+" [data-click-types='disc'],[data-click-types='at'],[data-click-types='newfans'],[data-click-types='comb']").on("click",function(){
                $(this).addClass("active").siblings().removeClass("active")
            })

            //提交选项
            $(boxid+" .sub").on("click",function(){
                t.postSetting("setting-list")
            })
        }
        
        
    },
    backTop: function () { 
        $(window).scroll(function(){
            if($(window).scrollTop()>1000){
                $(".side-bar-back").show()
                //$("#leftmenu").stop(true,false).animate({top:$(window).scrollTop()-300},800)
            }
            else{
                $(".side-bar-back").hide()
               // $("#leftmenu").stop(true,false).animate({top:0},800)
            }
        })
     }
}
export default setting
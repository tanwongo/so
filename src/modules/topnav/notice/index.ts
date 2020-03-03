

//回复我的消息提示
const notice_reply = require("./template/reply.art")

//称赞我的消息提示
const notice_good = require("./template/good.art")

//提到我的消息提示
const notice_at = require("./template/at.art")

//新粉丝消息提示
const notice_fans = require("./template/fans.art")

//系统消息提示
const notice_sys = require("./template/sys.art")

//主页面
const notice_index = require("./template/index.art")

import loadanimate from "../../loadanimate"

let notice = {
    init: function(){
        let _this = this;

        //消息提醒点击
        $("a[data-click-types='topnav-notice']").on("click",async function(e){
            $("div[data-box-types='topnav-notice-box']").html(_this.getIndexHtml()).show()
            $("div[data-box-types='user-setting-box']").hide()
            e.stopPropagation()
            await _this.noticeClick()

        })
    },

    getIndexHtml: function(){
        const _html = notice_index;
        return _html;
    },

    //对应模板
    getListHtml: function(temp,data){
        const _html = temp(data)
        return _html;
    },

    //获取数据
    getNotice: function(path){
        let _this =this;
        let _path = path
        return new Promise<any>(function(res:any,rej:any){
            $.ajax({
                type:"get",
                url:"./api/getRandom",
                dataType:"json"
            }).then(function(data){
                switch(path) {
                    case 'notice_reply':
                    return _this.getListHtml(notice_reply,data);
                    case 'notice_good':
                    return _this.getListHtml(notice_good,data);
                    case 'notice_at':
                    return _this.getListHtml(notice_at,data);
                    case 'notice_fans':
                    return _this.getListHtml(notice_fans,data);
                    case 'notice_sys':
                    return _this.getListHtml(notice_sys,data);
                    default:
                    return _this.getListHtml(notice_reply,data);
               }    
            }).done(function(tmpl){
                _this.fillHtml(tmpl)
                res(true)
            })
        })
    },
    //消息栏点击
    noticeClick: function(){
        let _this = this;
        $("#topnav-notice-box a[data-click-types]").on("click",async function(e){
            e.stopPropagation()
            
           //获取attr标识值(回复我，点赞，新粉丝，提到我，系统消息)
           let a = $(this).attr("data-click-types")

           //获取对应的div
           let b  = $("div[data-box-types='new-notice-box']")

           //loading动画
           loadanimate.cirAnimate(b,true,"tsanimate")

           $(this).addClass("active").siblings().removeClass("active")

           //加载对应数据
           await _this.getNotice(a)

           //移除loading动画

           loadanimate.cirAnimate(b,false,"tsanimate")

           //关注按钮
           $("a[data-click-types='add_watch']").on("click",function(){
               $(this).addClass("watched").text("已关注")
           })
           return !1;

        })

        //默认点击随机推荐
        $("#topnav-notice-box a[data-click-types='notice_reply']").click()
    },
    fillHtml: function(temp){
        $("div[data-box-types='notice-box-cont']").html(temp)
    }
}
export default notice

//我的粉丝
const fans_template = require("./template/fans.art")

//我的关注
const watched_template = require("./template/watched.art")

//近期涨
const up_template = require("./template/nearlyup.art")

//近期跌
const down_template = require("./template/nearlydown.art")

import loadanimate from "../loadanimate"

/**
 * 用户个人信息
 * 粉丝，关注，财富号，博客，自选股，自选组合，自选基金
 * 盘面走势，近期涨跌
 */
let userinfo = {
    init: function(){
       this.fawClick()
       this.nearlyUpDown()
       this.signIn()
    },
    getListHtml: function(template,data){
         const _html = template(data)
         return _html;
    },

    //获取相应数据(粉丝，关注，财富号，博客，自选股，自选组合，自选基金)
    getMyInfo:function(path:any){
        let _this = this;
        let _path = "/api/"+path;
        return new Promise<any>(function(res,rej){
            $.ajax({
                type:"get",
                url:_path,
                dataType:"json"
            }).then(function(datas){
                switch(path){
                    case "fans":
                    return _this.getListHtml(fans_template,datas);
                    case "watch":
                    return _this.getListHtml(watched_template,datas)
                }
            }).done(function(tmpl){
                _this.fillHtml("div","fans-watch",tmpl)
                res(true)
            })  
            
        })
    },

    /**
     * 近期涨跌
     * @param par {up:涨,down:跌}
     */
    getNearly: function(par:string){
        let _this = this;
        let _path = "/api/getNearly/"+par;
        return new Promise<any>(function(res,rej){
            $.ajax({
                type:"get",
                url:_path,
                dataType:"json"
            }).then(function(datas){
                console.log(datas)
                switch(par){
                    case "up":
                    return _this.getListHtml(up_template,datas);
                    case "down":
                    return _this.getListHtml(down_template,datas)
                }
            }).done(function(tmpl){
                 _this.fillHtml("ul","nearlyupdown",tmpl)
                res(true)
            })  
            
        })
    },

    //我的粉丝,我的关注点击事件
    fawClick: function(){
        let _this = this;
        $("#myinfo a[data-click-types='fans'],#myinfo a[data-click-types='watch']").on("click",async function(e){
            e.stopPropagation()

            //获取attr标识值
            let a  = $(this).attr("data-click-types")

            //获取容器
            let b  = $("div[data-box-types='fans-watch'")

            //显示
            b.show()

            //加载动画
            loadanimate.cirAnimate(b,true,"tsanimate")

            //等待加载标识对应数据
            await _this.getMyInfo(a)

            //加载完毕移除动画
            loadanimate.cirAnimate(b,false,"tsanimate")


            return !1;
        })
    },

    //取消关注
    excFans: function(){

    },

    /**
     * 签到
     */
    signIn: function(){
        let _this = this;
        $("#myinfo a[data-click-types='signin']").on("click",function(){
            $(this).html("已签到").addClass("qded")
        })
    },

    //近期涨跌
    nearlyUpDown: function(){
        let _this = this;
        $("#nearly-updown-choose a[data-click-types]").on("click",async function(e){

            //获取容器
            let b  = $("ul[data-box-types='nearlyupdown'")

            //加载动画
            loadanimate.cirAnimate(b,true,"tsanimate")

            if($(this).hasClass("active")){
                if($(this).hasClass("bjup")){
                    await _this.getNearly("down")

                   $(this).addClass("bjdown").removeClass("bjup")
                }
                else{
                    await _this.getNearly("up")
                    $(this).addClass("bjup").removeClass("bjdown")
                }
            }
            else{
                await _this.getNearly("up")
                $(this).addClass("active bjup").siblings().removeClass("active bjdown bjup")

            } 
            //加载完毕移除动画
            loadanimate.cirAnimate(b,false,"tsanimate")
            return !1;
        })

    },

    fillHtml: function(dom,types,temp){
        console.log(dom+"."+types+"."+temp)
        $(""+dom+"[data-box-types="+types+"").html(temp)
    }
}
export default userinfo
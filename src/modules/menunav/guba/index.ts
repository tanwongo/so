//头部子选项
const guba_head = require('./template/head.art');

//我的帖子
const getGubaPosting = require('./template/posting.art');

//我的回复
const getGubaReply = require('./template/reply.art');

//回复我的
const getGubaReplyMe = require('./template/replyme.art');

//赞我的
const getGubaZan = require('./template/zan.art');

//提到我的
const getGubaInv = require('./template/inv.art');

//问董秘
const getWenDongMi = require("./template/wendongmi.art")


import loadanimate from "../../loadanimate"





let guba = {
    init: function(){
       //充填子选项头部
       $("div[data-box-types='menutabs']").html(this.getHeadHtml())

       //加载头部点击事件
        this.headClick()
    },

    //渲染头部导航html
    getHeadHtml: function(){
       const _html = guba_head;
       return _html;
    },

    //渲染主体html
    getListHtml: function(template,data){
        const _html = template(data)
        return _html;
     },

      /**
     * 获取页面加载数据
     * @param path api路径 显示对应模板
     */
     getMyGuba:function(path){
        const _this = this;
        const _path = '/api/'+path;
        return new Promise<any>(function(res,rej){
            $.ajax({
                type:"get",
                url:_path,
                dataType:"json"
            }).then(function(data){
                switch(path) {
                    case 'getGubaPosting':
                    return _this.getListHtml(getGubaPosting,data);
                    case 'getGubaReply':
                    return _this.getListHtml(getGubaReply,data);
                    case 'getGubaReplyMe':
                    return _this.getListHtml(getGubaReplyMe,data);
                    case 'getGubaZan':
                    return _this.getListHtml(getGubaZan,data);
                    case 'getGubaInv':
                    return _this.getListHtml(getGubaInv,data);
                    case 'getWenDongMi':
                    return _this.getListHtml(getWenDongMi,data);
                    default:
                    return _this.getListHtml(getGubaPosting,data);
               }    
            }).done(function(tmpl){
                _this.fillHtml(tmpl)
                res(true)
            })
        })
    },

    //导航栏子选项点击
    headClick: function(){
        let _this = this;

        $("#guba-head a[data-click-types]").on("click",async function(){

            //首次加载移除原有线条动画
            loadanimate.lineAnimate("data-box-types","menutabs",false,"lineAnimate",true)

            $(this).addClass("active").siblings().removeClass("active")

            //加载线条动画
            loadanimate.lineAnimate("data-box-types","menutabs",true,"lineAnimate",true)

            //获取attr标识值
            let a:any = $(this).attr("data-click-types")

            //等待加载标识对应数据
            await _this.getMyGuba(a)

            //数据加载完毕,移除线条动画
            loadanimate.lineAnimate("data-box-types","menutabs",false,"lineAnimate",false)
        })

        //默认点击我的帖子
        $("#guba-head a[data-click-types='getGubaPosting']").click()
        
    },
    fillHtml: function(temp){
       return $("#menuscont").html(temp)
    }
}
export default guba
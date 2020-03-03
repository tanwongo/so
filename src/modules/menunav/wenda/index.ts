//头部子选项
const wenda_head  =  require('./template/head.art');

//我的提问
const getWendaQuestion   =  require('./template/question.art');

//我的回答
const getWendaAnswer    =  require('./template/answer.art');

//我的消息
const getWendaMessage   =  require('./template/message.art');

import loadanimate from "../../loadanimate"



let wenda = {
    init: function(){
       //充填子选项头部
       $("div[data-box-types='menutabs']").html(this.getHeadHtml())

       //加载头部点击事件
       this.headClick()
    },

    //渲染头部导航html
    getHeadHtml: function(){
       const _html = wenda_head;
       return _html;
    },

    //渲染主体html
    getListHtml: function(template,data){
        const _html = template(data);
        return _html;
     },
     getMyWenda:function(path){
        const _this = this;
        const _path = '/api/'+path;
        return new Promise<any>(function(res,rej){
            $.ajax({
                type:"get",
                url:_path,
                dataType:"json"
            }).then(function(data){
                switch(path) {
                    case 'getWendaQuestion':
                    return _this.getListHtml(getWendaQuestion,data);
                    case 'getWendaAnswer':
                    return _this.getListHtml(getWendaAnswer,data);
                    case 'getWendaMessage':
                    return _this.getListHtml(getWendaMessage,data);
                    default:
                    return _this.getListHtml(getWendaQuestion,data);
               }    
            }).done(function(tmpl){
                _this.fillHtml(tmpl);
                res(true)
            })
        })
    },

    //导航栏子选项点击
    headClick: function(){
        let _this = this;

        $("#wenda-head a[data-click-types]").on("click",async function(){

            //首次加载移除原有线条动画
            loadanimate.lineAnimate("data-box-types","menutabs",false,"lineAnimate",true)

            $(this).addClass("active").siblings().removeClass("active")

            //加载线条动画
            loadanimate.lineAnimate("data-box-types","menutabs",true,"lineAnimate",true)

            //获取attr标识值
            let a:any = $(this).attr("data-click-types")

            //等待加载标识对应数据
            await _this.getMyWenda(a)

            //数据加载完毕,移除线条动画
            loadanimate.lineAnimate("data-box-types","menutabs",false,"lineAnimate",false)
        })

        //默认点击随机推荐
        $("#wenda-head a[data-click-types='getWendaQuestion']").click()
        
    },
    fillHtml: function(temp){
       return $("#menuscont").html(temp)
    }
}
export default wenda
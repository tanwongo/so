//头部子选项
const shouc_head =  require("./template/head.art");

//收藏股吧
const getShoucGuba    =  require("./template/guba.art");

//收藏话题
const getShoucHuati    =  require("./template/huati.art");

//收藏问答
const getShoucWenda    =  require("./template/wenda.art");

//收藏财富号
const getShoucMoney    =  require("./template/caifuhao.art");

//收藏主题投资
const getShoucTouzi    =  require("./template/zhuti.art");

import loadanimate from "../../loadanimate"




let shouc = {
    init: function(){
       //充填子选项头部
       $("div[data-box-types='menutabs']").html(this.getHeadHtml())
        //加载头部点击事件
        this.headClick()
    },

    //渲染头部导航html
    getHeadHtml: function(){
       const _html = shouc_head;
       return _html;
    },

    //渲染主体html
    getListHtml: function(template,data){
        const _html =template(data);
        return _html;
    },

     /**
     * 获取页面加载数据
     * @param path api路径
     */
    getShouc:function(path){
        let _this = this;
        let _path = "/api/"+path;
        return new Promise<any>(function(res,rej){
            $.ajax({
                type:"get",
                url:_path,
                dataType:"json"
            }).then(function(data){
                switch(path) {
                    case "getShoucGuba":
                    return _this.getListHtml(getShoucGuba,data);
                    case "getShoucHuati":
                    return _this.getListHtml(getShoucHuati,data);
                    case "getShoucWenda":
                    return _this.getListHtml(getShoucWenda,data);
                    case "getShoucMoney":
                    return _this.getListHtml(getShoucMoney,data);
                    case "getShoucTouzi":
                    return _this.getListHtml(getShoucTouzi,data);
                    default:
                    return _this.getListHtml(getShoucGuba,data);
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

        $("#shouc-head a[data-click-types]").on("click",async function(){

            //首次加载移除原有线条动画
            loadanimate.lineAnimate("data-box-types","menutabs",false,"lineAnimate",true)

            $(this).addClass("active").siblings().removeClass("active")

            //加载线条动画
            loadanimate.lineAnimate("data-box-types","menutabs",true,"lineAnimate",true)

            //获取attr标识值
            let a:any = $(this).attr("data-click-types")

            //等待加载标识对应数据
            await _this.getShouc(a)

            //数据加载完毕,移除线条动画
            loadanimate.lineAnimate("data-box-types","menutabs",false,"lineAnimate",false)
        })

        //默认点击随机推荐
        $("#shouc-head  a[data-click-types='getShoucGuba']").click()
    },
    fillHtml: function(temp){
       return $("#menuscont").html(temp)
    }
}
export default shouc
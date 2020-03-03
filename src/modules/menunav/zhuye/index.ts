//头部子选项
const zhuye_head = require("./template/head.art")

//主页主体内容
const zhuye_list = require ("./template/list.art")

const discuss = require ("./template/discuss.art")

const reply_box_theme = require( "./template/replyboxtheme.art")

const reply_box_user = require ("./template/replyboxuser.art")

const adv = require("../../adv/template/index.art")

const sendreply = require ("./template/sendreply.art")

import loadanimate from "../../loadanimate"

console.log(zhuye_head)


let _list = 1;

var $ = jQuery;

const advlist  ={
    "data":[
        {
            "url":"http://same.eastmoney.com/c?z=eastmoney&amp;la=0&amp;si=1&amp;cg=103&amp;c=1522&amp;ci=1&amp;or=3841&amp;l=15116&amp;bg=15116&amp;b=17666&amp;u=https%3A%2F%2Facttg.eastmoney.com%2Fpub%2Fwebtg_hskh_act_webdt_01_01_01_0",
            "img":"http://g1.dfcfw.com/g3/201909/20190930094713.gif"
        },
        {
            "url":"http://same.eastmoney.com/c?z=eastmoney&amp;la=0&amp;si=1&amp;cg=103&amp;c=1519&amp;ci=1&amp;or=47&amp;l=13763&amp;bg=13763&amp;b=15653&amp;u=http%3A%2F%2Fhuoqibao.1234567.com.cn%2F%3Fspm%3D100015.b.002",
            "img":"http://g1.dfcfw.com/g3/201905/20190516152258.jpg"
        },
        {
            "url":"#",
            "img":"http://g1.dfcfw.com/g3/201910/20191016134623.jpg"
        }
    ]
}
/* <img src='http://gbres.dfcfw.com/face/emot/emot02.png'></img> */

let zhuye = {
    
    //默认加载
    init: async function(){
        //充填子选项头部
       $("div[data-box-types='menutabs']").html(this.getHeadHtml())

        //加载头部点击事件
        this.headClick()
        // _this.userSearch();
        // window.iszhuye= true;
        // _this.pushDown()
    },

    //渲染头部导航html
    getHeadHtml: function(){
       const _html = zhuye_head;
       return _html;
    },

    //渲染主体html
    getListHtml: function(data){
        const _html = zhuye_list(data)
        return _html;
    },

    //广告
    getAdv: function(advlist){
        const _html = adv(advlist)
        return _html;
    },

    /**
     * 获取页面加载数据
     * @param path api路径
     */
    getZhuye: async function(path:any){
        let _this = this;
        let _list = 0;
        const _path = '/api/'+path;
        return new Promise<any>(function(res:any,rej){
            $.ajax({
                type:"get",
                url:_path,
                dataType:"json"
            }).then(function(data){
                return _this.getListHtml(data)
            }).done(function(tmpl){
                _this.fillHtml(tmpl);
                // _this.appendHtml(_this.getAdv(advlist.data[_list]))
                 _this.userFeedBack()
                 _this.zhemeReply()
                res(true)
            })
        })
    },
    postUserReply: function(data){
        const _this = this;
        return sendreply(data)
    },

    /**
     * 页面滚动底部加载新数据
     * @param id 
     */
    pushLoading: function(id){
        const _this = this;
        return new Promise<any>(function(res,rej){
            $.ajax({
                type:"get",
                url:"/api/getRandom2",
                beforeSend: function(){
                   // loadanimate.cirAnimate(id,true,'pushload')
                },
                dataType:"json"
            }).then(function(data){
                return _this.getListHtml(data)
            }).done(function(tmpl){
                _this.appendHtml(tmpl);
                if(_list<3){
                 _this.appendHtml(_this.getAdv(advlist.data[_list]));               
                 _this.userVbq()
                 _this.zhemeReply()
                 _this.showUpImg();
                 _this.useGood();
                 _list++;
                 res(true)
                }
                loadanimate.cirAnimate(id,false,'pushload')
 
            })
        })
    },

    //导航栏子选项点击
    headClick: function(){
        let _this = this;

        $("#zhuye-head a[data-click-types]").on("click",async function(){

            //首次加载移除原有线条动画
            loadanimate.lineAnimate("data-box-types","menutabs",false,"lineAnimate",true)

            $(this).addClass("active").siblings().removeClass("active")

            //加载线条动画
            loadanimate.lineAnimate("data-box-types","menutabs",true,"lineAnimate",true)

            //获取attr标识值
            let a:any = $(this).attr("data-click-types")

            //等待加载标识对应数据
            await _this.getZhuye(a)

            //数据加载完毕,移除线条动画
            loadanimate.lineAnimate("data-box-types","menutabs",false,"lineAnimate",false)
        })

        //默认点击随机推荐
        $("#zhuye-head  a[data-click-types='getRandom']").click()
    },

    //主题回复
    zhemeReply: function(){
        let _this_ = this;
        $("a[data-click-types='discuss']").on("click",async function(){

                //获取主题唯一索引
                let a  = $(this).attr("data-discuss-id")

                //加载对应的主题回复模板数据
                $("div[data-box-types="+a+"]").html(discuss).stop(true,false).animate({height:"100%",opacity:1},200)

                // $("#"+c).children(".a2").unbind("click").on("click",function(){
                //     let listid = $("#"+$(this).attr("data-id"))
                //     // $('html,body').stop(true,false).animate({scrollTop:listid.position().top-30},500,function(){
                //     //     $("#"+a).html("")
                //     //     $("#"+b).html("")
                //     //     $("#"+c).hide()
                //     //     $("#"+d).hide()
                //     // })
                // })

                // let _this = $(this);
                // let a = _this.attr("data-replyid");
                // let b = _this.attr("data-replybox");
                // let c = _this.attr("data-replyall");
                // let d = _this.attr("data-replytitle");
                // _this.addClass("ts-info-discuop");
                // $("#"+a).html(reply_list.default)
                // $("#"+b).html(reply_box_theme.default)
                // $("#"+c).show()
                // $("#"+d).show()
                // $("#"+c).children(".a2").unbind("click").on("click",function(){
                //     let listid = $("#"+$(this).attr("data-id"))
                //     $('html,body').stop(true,false).animate({scrollTop:listid.position().top-30},500,function(){
                //         $("#"+a).html("")
                //         $("#"+b).html("")
                //         $("#"+c).hide()
                //         $("#"+d).hide()
                //     })
                // })
                // await $(".rp-info-discu").on("click",function(e){
                //     let o = $(this).attr("data-box-id")
                //     let n = $(this).attr("data-rp-name")
                //     let rpbox = $("#"+o);
                //     if($(this).attr("data-is-active")=="false"){
                //         rpbox.html(reply_box_user.default)
                //         rpbox.find(".replybox-textrea-placeholder").html(n)
                //         $(this).attr("data-is-active","true")
                //     }
                //     else{
                //         rpbox.html("")
                //         $(this).attr("data-is-active","false")
                //     }
                //     $(".rpsubmit").on("click",function(){
                //         let rpdata ={
                //             "userName":"江",
                //             "replytext":"grgrgr"
                //         }
                //         $("#reply-0 .zhuye-reply").prepend( _this_.postUserReply(rpdata))
                //     })
                // })
                // $(".rpsubmit").on("click",function(){
                //     let rpdata ={
                //         "userName":"江",
                //         "replytext":$(".textarea").text()
                //     }
                //     $("#reply-0 .zhuye-reply").prepend( _this_.postUserReply(rpdata))
                // })
        })
        
          
        },

    //点赞
    useGood: function (){
        $(".ts-info-good").on("click",function(){
             let  b= 0;
             let a =  parseInt($(this).attr("data-box-good"))
             if($(this).hasClass('ts-info-upgood')){
                 a--;
                 $(this).attr("data-box-good",a)
                 $(this).removeClass('ts-info-upgood')
                 $(this).children("span").html("("+$(this).attr("data-box-good")+")")
             }
             else{
                 a++;
                 $(this).attr("data-box-good",a)
                 $(this).addClass('ts-info-upgood')
                 $(this).children("span").html("("+$(this).attr("data-box-good")+")")
             }
        })
    },

    //用户反馈
    userFeedBack: function(){
        //a标签类型为反馈点击事件
        $("a[data-click-types='feedback']").on("click",function(e){
             e.stopPropagation()

             let $this = $(this)

             //获取当前反馈对应的顶级list索引
             let a  = $(this).attr("data-feedback-box")

             //获取对应的div
             let b  = $("div[data-feedbackbox-id=feedbackbox-"+a+"]")

             //获取对应的提交按钮
             let c  =  $("a[data-click-types='feedbacksubmit']")

             //显示对应的div
             b.show().stop(true,false).animate({opacity:1},200)

             if(b.find(c!).hasClass("issubmit")){
                 return
             }
             //反馈内容点击事件
             b.find("li").unbind("click").on("click",function(e){
                 e.stopPropagation()
                 $(this).toggleClass("active")

                 //只要选择了，添加按钮高亮样式，提示可以提交
                 if(b.find("li").hasClass("active")){
                     b.find(c!).addClass("isready")
                 }
                 else{
                    b.find(c!).removeClass("isready")
                 }
             })

             //提交反馈 a标签类型为反馈提交
             b.find(c!).unbind("click").on("click",function(e){
                 let _this = $(this)
                 e.stopPropagation();

                 //如果不为空就提交
                 if(b.find("li").hasClass("active")){
                    loadanimate.cirAnimate(b,true,"tsanimate")
                    setTimeout(function(){
                        loadanimate.cirAnimate(b,false,"tsanimate")
                        setTimeout(function(){
                            _this.html("已提交").addClass("issubmit")

                            //提交反馈是否成功,如果成功禁止再次点击
                            b.find("li").unbind("click")
                            b.find(c!).unbind("click")
                            $this.addClass("addhover")
                        },200)
                    },2000)
                 }
             })
        })
    },

    //文章搜索
    userSearch: function () { 
        $(".search-ipt").on("focus",function(){
           $(this).stop(true,false).animate({width:200},500).addClass("bg1 fff")
        })
        $(".search-ipt").on("blur",function(){
           $(this).stop(true,false).animate({width:140},500).removeClass("bg1 fff")
        })
    },

    //滚动底部加载
    pushDown: function(){
        const _this = this;
        let sum  = 0;
        $(window).on("resize scroll",function(){
            if(1==1)
            var windowHeight = $(window).height();           
            var scrollTop = $(window).scrollTop();
            var docHeight = $(document).height();
            if (scrollTop + windowHeight+1 >= docHeight) { 
                if(sum<3){
                    _this.pushLoading("menuscont")
                    sum++
                }
            }
        });
    },
    fillHtml: function(temp){
        return $("#menuscont").html(temp)
    },
    appendHtml: function(temp){
        return $("#menuscont").append(temp)
    }
}

export default zhuye
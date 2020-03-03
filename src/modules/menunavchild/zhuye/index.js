const zhuye_head  =  require("./template/head.html");

const zhuye_list    =  require("./template/list.html");

const reply_list  = require("./template/reply.html");

const reply_box_theme  = require("./template/replyboxtheme.html");

const reply_box_user  = require("./template/replyboxuser.html");

const adv  = require("../../adv/template/index.html");

const sendreply = require("./template/sendreply.html")

const dot = require("dot");

const loadanimate = require("../../loadanimate")

let _list = 1;


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

module.exports = {
    init: async function(){
        const _this = this;
        $("#menutabs").html(_this.getHeadHtml())
        this.headClick()
        _this.userSearch();
        iszhuye= true;
        _this.pushDown()
    },
    getHeadHtml: function(){
       const _html = zhuye_head.default;
       return _html;
    },
    getListHtml: function(data){
        const _html = dot.template(zhuye_list.default)(data);
        return _html;
    },
    getAdv: function(advlist){
        const _html = dot.template(adv.default)(advlist);
        return _html;
    },
    getZhuye:function(path){
        const _this = this;
        let _list = 0;
        const _path = '/api/'+path;
        return new Promise(function(res,rej){
            $.ajax({
                type:'get',
                url:_path,
                beforeSend:function(){
                    loadanimate.upAnimate(true,false)
                },
                datatype:'json'
            }).then(function(data){
                return _this.getListHtml(data)
            }).done(function(temp){
               _this.fillHtml(temp);
               _this.appendHtml(_this.getAdv(advlist.data[_list]))
               loadanimate.upAnimate(false,false)
                _this.userVbq()
                _this.userReply()
                _this.showUpImg();
                _this.useGood();
                res(true)
            }).fail(function(){
                
            })
        })
    },
    postUserReply: function(data){
        const _this = this;
        return dot.template(sendreply.default)(data)
    },
    pushLoading: function(id){
        const _this = this;
        return new Promise(function(res,rej){
            $.ajax({
                type:'get',
                url:'/api/getRandom2',
                beforeSend:function(){
                    loadanimate.tsAnimate(id,true,'pushload')
                },
                datatype:'json'
            }).then(function(data){
                return _this.getListHtml(data)
            }).done(function(temp){
               _this.appendHtml(temp);
               if(_list<3){
                _this.appendHtml(_this.getAdv(advlist.data[_list]));               
                _this.userVbq()
                _this.userReply()
                _this.showUpImg();
                _this.useGood();
                _list++;
                res(true)
               }
               loadanimate.tsAnimate(id,false,'pushload')
              
            }).fail(function(){
                
            })
        })
    },
    headClick: function(){
        const _this = this;
        $("#zhuye-head a").on("click",function(){
            $(this).addClass("active").siblings().removeClass("active")
            loadanimate.upAnimate(false,true)
            _this.getZhuye($(this).attr('data-id'))
        })
        $("#zhuye-head a").eq(0).click()
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

    //回复
    userReply: async function(){
        const _this_ = this;
    await    $('.ts-info-discu').on("click",async function(){
                let _this = $(this);
                let a = _this.attr("data-replyid");
                let b = _this.attr("data-replybox");
                let c = _this.attr("data-replyall");
                let d = _this.attr("data-replytitle");
                _this.addClass("ts-info-discuop");
                $("#"+a).html(reply_list.default)
                $("#"+b).html(reply_box_theme.default)
                $("#"+c).show()
                $("#"+d).show()
                $("#"+c).children(".a2").unbind("click").on("click",function(){
                    let listid = $("#"+$(this).attr("data-id"))
                    $('html,body').stop(true,false).animate({scrollTop:listid.position().top-30},500,function(){
                        $("#"+a).html("")
                        $("#"+b).html("")
                        $("#"+c).hide()
                        $("#"+d).hide()
                    })
                })
                await $(".rp-info-discu").on("click",function(e){
                    let o = $(this).attr("data-box-id")
                    let n = $(this).attr("data-rp-name")
                    let rpbox = $("#"+o);
                    if($(this).attr("data-is-active")=="false"){
                        rpbox.html(dot.template(reply_box_user.default))
                        rpbox.find(".replybox-textrea-placeholder").html(n)
                        $(this).attr("data-is-active","true")
                    }
                    else{
                        rpbox.html("")
                        $(this).attr("data-is-active","false")
                    }
                    $(".rpsubmit").on("click",function(){
                        let rpdata ={
                            "userName":"江",
                            "replytext":"grgrgr"
                        }
                        $("#reply-0 .zhuye-reply").prepend( _this_.postUserReply(rpdata))
                    })
                })
                $(".rpsubmit").on("click",function(){
                    let rpdata ={
                        "userName":"江",
                        "replytext":$(".textarea").text()
                    }
                    $("#reply-0 .zhuye-reply").prepend( _this_.postUserReply(rpdata))
                })
        })
        
      
    },
    showUpImg: function(){
        // $(".ts-user-uploadimg a").on("click",function(){
        //     let _this = $(this);
        //    _this.siblings().children('img').stop(true,false).animate({width:70,height:70},50,function(){
        //         _this.children('img').stop(true,false).animate({width:420,height:270},600)
        //     })
        // })
    },
    //反馈
    userVbq: function(){
        $(".vbqfk").on("click",function(e){
             e.stopPropagation()
             let a  = $(this).attr("data-id");
             $("#"+a).show().stop(true,false).animate({opacity:1},200,function(){
                $(this).children().show()
             })
             $("#"+a).find("li").unbind("click").on("click",function(e){
                 e.stopPropagation()
                 $(this).toggleClass("active")
             })
             $("#"+a).children(".userfk-submit").unbind("click").on("click",function(e){
                 let _this = $(this)
                 e.stopPropagation();
                 if($("#"+a).find("li").hasClass("active")){
                    loadanimate.tsAnimate(a,true,'tsanimate')
                    setTimeout(function(){
                        loadanimate.tsAnimate(a,false,'tsanimate')
                        $("#"+a).addClass("bgfk").find("li").unbind("click")
                        $("#"+a).children(".userfk-submit").unbind("click")
                        setTimeout(function(){
                            loadanimate.subSuccess(a,true,'subsuccess',"提交成功")
                            _this.html("已提交").addClass("tsbg")
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
            if(iszhuye)
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
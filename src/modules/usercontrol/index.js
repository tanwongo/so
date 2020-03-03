const middlecont = require("../menunavchild/index")

const fans =  require("./template/fans.html");

const dot = require("dot")

const loadanimate = require("../loadanimate")

module.exports  =  {
    init: function(){
    },
    aboutBox: function(id){
        
    },
    checkIn: function(){
        // let a = true;
        // let b = $("#qd-jf");
        // $("#qd").on("click",function(){
        //     if(a){
        //         a = false;
        //         $(this).text("已签").addClass("ckqd");
        //         b.append("<i class='qd-jf'>+1</i>")
        //         $(".qd-jf").stop(true,false).animate({opacity:1,bottom:30},500,function(){
        //             let c = $(this);
        //             b.children(".ec5200").text("10000")
        //             setTimeout(function(){
        //                 c.remove()
        //             },3000)
        //        })
        //     }
            
        // })
    },
    postBox: function(){
        let _this = this;
        let postbox = $("#postbox")
        let isclick = true;
        $(".fb").on("click",function(){
            if(isclick){
                $(window).scrollTop(0,900)
                $(this).html("取消");
                $(this).addClass("fbexc")
                postbox.show().stop(true,false).animate({opacity:1},200)
                $("#postbox-textrea").on("keyup",function(){
                    if($(this).html()==""){
                        $("#postbox-textrea-placeholder").show()
                    }
                    else{
                        $("#postbox-textrea-placeholder").hide()
                    }
                })
                isclick = false
            }
            else{
                $(this).html("发布")
                $(this).removeClass("fbexc")
                postbox.stop(true,false).animate({opacity:0},200,function(){
                   $(this).hide()
                })
                isclick = true;
            }
        })
        $(".inemoji").click(function(){
            $("#postbox-textrea").append("<img src='http://g1.dfcfw.com/g3/201909/20190917142050.jpg '>")
        })
        $("#postbox-textrea").keyup(function(e){
            // if(e.target.value.length>2000){
            //     e.target.value = e.target.value.substr(0,2000);
            //   }else if(e.target.value.length>10){
            //     $("#submit_btn").removeClass("notAllowed").css("background","#ea5404");
            //   }else{
            //     $("#submit_btn").addClass("notAllowed").css("background","rgb(155, 155, 155)");
            //   }
            //  _this.makeExpandingArea($("#postbox"),true);
        })
    },
    makeExpandingArea: function(el, flag) {
        //textarea 可以随高度变化
        if (window.VBArray && el.attachEvent) {
            console.log(el)
        }

        el = el[0];
        var setStyle = function(el) {
            if (flag) {
                if (el.scrollHeight > 88) {
                    el.style.height = el.scrollHeight + 'px';
                } else {
                    el.style.height = '88px';
                }
            } else {
                el.style.height = 'auto';
            }
            // el.style.height = el.scrollHeight + 'px';
            // console.log("height",el.style.height)
        }
        var delayedResize = function(el) {
            window.setTimeout(function() {
                setStyle(el)
            }, 0);
        }
        if (el.addEventListener) {
            el.addEventListener('input', function() {
                setStyle(el)
            }, false);
            setStyle(el)
        } else if (el.attachEvent) {
            el.attachEvent('onpropertychange', function(e) {
                if (e.propertyName == 'value') {
                    setStyle(el)
                }
            });
            setStyle(el)
        }
        if (window.VBArray && el.attachEvent) {
            //IE9
            el.attachEvent("onkeydown", function() {
                var key = window.event.keyCode;
                if (key == 8 || key == 46)
                    delayedResize(el);

            });
            el.attachEvent("oncut", function() {
                delayedResize(el);
            });
            //处理粘贴
        }
    }
}
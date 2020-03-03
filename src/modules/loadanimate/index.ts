let Janimated =  {

    /**
     * 线条动画
     * @param attr  jquery对象attr
     * @param id   jquery对象attr值
     * @param status 是否存在
     * @param isload 是否加载
     * @param cls  动画样式
     */
    lineAnimate: function(attr,id,status,cls,isload){
        let temp = `<div class='${cls}' id='lineAnimate'></div>`
        if(status){
            $("["+attr+"="+id+"]").append(temp)
            $("#lineAnimate").show().stop(true,false).animate({width:'70%',opacity:1},300)
        }
        else{
            if(isload){
                $("#lineAnimate").remove()
            }
            else{
                $("#lineAnimate").animate({width:'100%'},200,function(){
                    $(this).remove()
                })
            }
        }     
    },
    /**
     * 下拉加载动画
     *
     * @param id   jquery对象
     * @param status 是否存在
     * @param cls  动画样式
     */
    downAnimate: function(id:any,status:any,cls:any){
        let temp = "<div style='width:1000px;height:30px;background:#000;display:none' id='aaaa'></div>"
        $(id).append(temp)
        if(status){
            $(id).stop(true,false).animate({marginTop:"25px"},500)
        }
        else{
          //  $(id).animate({marginTop:"0"},500)
        }
    },

    /**
     * 转圈圈动画
     * @param dom  html节点 jquery对象
     * @param status 是否存在
     * @param cls 动画样式
     */
    cirAnimate: function(dom,status,cls){
       if(status){
           let temp = `<div class='${cls}'></div>`
           dom.append(temp)
       }
       else{
           dom.find("."+cls+"").remove()
       }
    },

    /**
     * 文字-提交成功-动画
     * @param dom  html节点 jquery对象
     * @param status 是否存在
     * @param cls 动画样式
     * @param txt 提示文字
     */
    succAnimate:function(dom,status,cls,txt){
        if(status){
            let temp = `<div class="${cls}"><b class="txt">${txt}</b></div>`
            dom.append(temp)
            setTimeout(function(){
                dom.find("."+cls+"").remove()
            },2000)
        }
    }
}

export default Janimated
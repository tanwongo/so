
import loadanimate from "../loadanimate"

/**
 * @param zhuye  我的主页
 * @param guba   我的股吧
 * @param wenda  我的问答
 * @param shouc  我的收藏
 * @param qianb  我的钱包
 * @param jifen  我的积分
 */

import zhuye from "./zhuye/index"

import guba from "./guba/index"

import wenda from "./wenda/index"

import shouc from "./shouc/index"

// import guba from "./template/guba/index"

// import wenda from "./template/wenda/index"

// import shouc from "./template/shouc/index"

// import qianb from "./template/qianb/index"

// import jifen from "./template/jifen/index"

let menunav =   {

    init: function(){
       this.menuClick()
    },


    //导航点击
    menuClick: function(){
        let _this = this;
        $("a[data-click-types]").on("click",function(){

            $(this).parent().addClass("active").siblings().removeClass("active");

            let a:any = $(this).attr("data-click-types")

            switch(a){
                case "zhuye":
                zhuye.init()
                break;
                case 'guba':
                guba.init();
                break;
                case 'wenda':
                wenda.init();
                break;
                case 'shouc':
                shouc.init();
                break;
                // default:
                // zhuye.init();
            }

        })
        $("a[data-click-types='zhuye']").click()
    }
}

export default menunav
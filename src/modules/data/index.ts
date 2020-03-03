
const axios = require('axios')


let datas= {
    // getdatas: function(){
    //     return data1;
    // },

    async getDatas(url){
        let back = await axios.get(url)
        return back.data;
    },

    //我关注的
    async getWatched(){
        let back = await this.getDatas('http://127.0.0.1:12345/watched.json')
        return back.data;
    },

    //市场热点
    async getHot(){
        let back = await this.getDatas('http://127.0.0.1:12345/hot.json')
        return back.data;
    },

    //随机推荐
    async getRandom(){
        let back = await this.getDatas('http://127.0.0.1:12345/random.json')
        return back.data;
    },

    //随机推荐
    async getRandom2(){
        let back = await this.getDatas('http://127.0.0.1:12345/random2.json')
        return back.data;
    },

    //自选
    async getZixuan(){
        let back = await this.getDatas('http://127.0.0.1:12345/zixuan.json')
        return back.data;
    },

    //我的帖子
    async getGubaPosting(){
        let back = await this.getDatas('http://127.0.0.1:12345/guba.json')
        return back.data;
    },

    //我的回复
    async getGubaReply(){
        let back = await this.getDatas('http://127.0.0.1:12345/huifu.json')
        return back.data;
    },

    //回复我的
    async getGubaReplyMe(){
        let back = await this.getDatas('http://127.0.0.1:12345/huifu.json')
        return back.data;
    },

    //收到的赞
    async getGubaZan(){
        let back = await this.getDatas('http://127.0.0.1:12345/huifu.json')
        return back.data;
    },

    //提到我的
    async getGubaInv(){
        let back = await this.getDatas('http://127.0.0.1:12345/huifu.json')
        return back.data;
    },

    //我的提问
    async getWendaQuestion(){
        let back = await this.getDatas('http://127.0.0.1:12345/anwser.json')
        return back.data;
    },
    
    //我的回答
    async getWendaAnswer(){
        let back = await this.getDatas('http://127.0.0.1:12345/anwser.json')
        return back.data;
    },

    //我的消息
    async getWendaMessage(){
        let back = await this.getDatas('http://127.0.0.1:12345/anwser.json')
        return back.data;
    },

    //收藏股吧
    async getShoucGuba(){
        let back = await this.getDatas('http://127.0.0.1:12345/shouc.json');
        return back.data;
    },

    //收藏话题
    async getShoucHuati(){
        let back = await this.getDatas('http://127.0.0.1:12345/shouc.json');
        return back.data;
    },

    //收藏问答
    async getShoucWenda(){
        let back = await this.getDatas('http://127.0.0.1:12345/shouc.json');
        return back.data;
    },

    //收藏财富号
    async getShoucMoney(){
        let back = await this.getDatas('http://127.0.0.1:12345/shouc.json');
        return back.data;
    },

    //收藏主题投资
    async getShoucTouzi(){
        let back = await this.getDatas('http://127.0.0.1:12345/shouc.json');
        return back.data;
    },

    //我的钱包
    async getQianb(){
        let back = await this.getDatas('http://127.0.0.1:12345/qianb.json');
        return back.data;
    },

    //我的积分
    async getJiFen(){
        let back = await this.getDatas('http://127.0.0.1:12345/jifen.json');
        return back.data;
    },

    //积分明细
    async getMinXi(){
        let back = await this.getDatas('http://127.0.0.1:12345/jifen.json');
        return back.data;
    },

    //积分商店
    async getShop(){
        let back = await this.getDatas('http://127.0.0.1:12345/jifen.json');
        return back.data;
    },

    //任务
    async getMis(){
        let back = await this.getDatas('http://127.0.0.1:12345/jifen.json');
        return back.data;
    },

    //我的个人信息
    async getMyInfo(){
        let back = await this.getDatas('http://127.0.0.1:12345/info.json');
        return back.data;
    },

    //我的粉丝
    async getMyFans(){
        let back = await this.getDatas('http://127.0.0.1:12345/fans.json');
        return back.data;
    },

    //我关注的人
    async getMyWatch(){
        let back = await this.getDatas('http://127.0.0.1:12345/watch.json');
        return back.data;
    },

    //近期涨跌
    async getNearlyUpDown(par:string){
        par  = par || "up"
        let back = await this.getDatas('http://127.0.0.1:12345/updown.json');
        if(par=="up"){
            return back.up.data;
        }
        else{
            return back.down.data;
        }
        
    }
    
}

export default datas;
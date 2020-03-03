

import Router from "koa-router"

import datas from "../modules/data"

import userinfo from "../modules/userinfo"

let router = new Router()


router.prefix('/api');
// router.get('/', async (ctx, next) => {
//     ctx.body = {
//       re: true,
//       message: '',
//       result: null
//     }
// })

// 200 150

router.get('/test',async(ctx,next)=>{
    console.log(ctx)
})


//读取我关注的
router.get('/getWatched', async (ctx, next) => {
    let backdatas  =  await datas.getWatched();
    ctx.body = { 
        re: true,
        message: '',
        result: backdatas
    }
})

//读取市场热点
router.get('/getHot', async (ctx, next) => {
    let backdatas  =  await datas.getHot();
    ctx.body = { 
        re: true,
        message: '',
        result: backdatas
    }
})

//读取随机推荐
router.get('/getRandom', async (ctx, next) => {
    let backdatas  =  await datas.getRandom();
    ctx.body = { 
        re: true,
        message: '',
        result: backdatas
    }
})

//读取随机推荐2
router.get('/getRandom2', async (ctx, next) => {
    let backdatas  =  await datas.getRandom2();
    ctx.body = { 
        re: true,
        message: '',
        result: backdatas
    }
})

//读取自选
router.get('/getZixuan', async (ctx, next) => {
    let backdatas  =  await datas.getZixuan();
    ctx.body = { 
        re: true,
        message: '',
        result: backdatas
    }
})

//读取我的帖子
router.get('/getGubaPosting', async (ctx, next) => {
    let backdatas  =  await datas.getGubaPosting();
    ctx.body = { 
        re: true,
        message: '',
        result: backdatas
    }
})

//读取我的回复
router.get('/getGubaReply', async (ctx, next) => {
    let backdatas  =  await datas.getGubaReply();
    ctx.body = { 
        re: true,
        message: '',
        result: backdatas
    }
})

//读取回复我的
router.get('/getGubaReplyMe', async (ctx, next) => {
    let backdatas  =  await datas.getGubaReplyMe();
    ctx.body = { 
        re: true,
        message: '',
        result: backdatas
    }
})

//读取收到的赞
router.get('/getGubaZan', async (ctx, next) => {
    let backdatas  =  await datas.getGubaZan();
    ctx.body = { 
        re: true,
        message: '',
        result: backdatas
    }
})

//读取收到的赞
router.get('/getGubaInv', async (ctx, next) => {
    let backdatas  =  await datas.getGubaInv();
    ctx.body = { 
        re: true,
        message: '',
        result: backdatas
    }
})
//我的提问
router.get('/getWendaQuestion', async (ctx, next) => {
    let backdatas  =  await datas.getWendaQuestion();
    ctx.body = { 
        re: true,
        message: '',
        result: backdatas
    }
})

//我的回答
router.get('/getWendaAnswer', async (ctx, next) => {
    let backdatas  =  await datas.getWendaAnswer();
    ctx.body = { 
        re: true,
        message: '',
        result: backdatas
    }
})

//我的消息
router.get('/getWendaMessage', async (ctx, next) => {
    let backdatas  =  await datas.getWendaMessage();
    ctx.body = { 
        re: true,
        message: '',
        result: backdatas
    }
})


//收藏股吧
router.get('/getShoucGuba', async (ctx, next) => {
    let backdatas  =  await datas.getShoucGuba();
    ctx.body = { 
        re: true,
        message: '',
        result: backdatas
     }
})

//收藏话题
router.get('/getShoucHuati', async (ctx, next) => {
    let backdatas  =  await datas.getShoucHuati();
    ctx.body = { 
        re: true,
        message: '',
        result: backdatas
     }
})

//收藏问答
router.get('/getShoucWenda', async (ctx, next) => {
    let backdatas  =  await datas.getShoucWenda();
    ctx.body = { 
        re: true,
        message: '',
        result: backdatas
     }
})

//收藏财富号
router.get('/getShoucMoney', async (ctx, next) => {
    let backdatas  =  await datas.getShoucMoney();
    ctx.body = { 
        re: true,
        message: '',
        result: backdatas
     }
})

//收藏主题投资
router.get('/getShoucTouzi', async (ctx, next) => {
    let backdatas  =  await datas.getShoucTouzi();
    ctx.body = { 
        re: true,
        message: '',
        result: backdatas
     }
})

//钱包
router.get('/getQianb', async (ctx, next) => {
    let backdatas  =  await datas.getQianb();
    ctx.body = { 
        re: true,
        message: '',
        result: backdatas
     }
})


//我的积分
router.get('/getJiFen', async (ctx, next) => {
    let backdatas  =  await datas.getJiFen();
    ctx.body = { 
        re: true,
        message: '',
        result: backdatas
     }
})

//积分明细
router.get('/getMinXi', async (ctx, next) => {
    let backdatas  =  await datas.getMinXi();
    ctx.body = { 
        re: true,
        message: '',
        result: backdatas
     }
})

//积分商店
router.get('/getShop', async (ctx, next) => {
    let backdatas  =  await datas.getShop();
    ctx.body = { 
        re: true,
        message: '',
        result: backdatas
     }
})

//积分商店
router.get('/getMis', async (ctx, next) => {
    let backdatas  =  await datas.getMis();
    ctx.body = { 
        re: true,
        message: '',
        result: backdatas
     }
})


//粉丝数量
router.get('/fans', async (ctx, next) => {
    let backdatas  =  await datas.getMyFans();
    ctx.body = { 
        re: true,
        message: '',
        result: backdatas
     }
})

//关注数量
router.get('/watch', async (ctx, next) => {
    let backdatas  =  await datas.getMyWatch();
    ctx.body = { 
        re: true,
        message: '',
        result: backdatas
     }
})

//近期涨跌
router.get('/getNearly/:sort', async (ctx, next) => {
    let backdatas  =  await datas.getNearlyUpDown(ctx.params.sort);
    ctx.body = { 
        re: true,
        message: '',
        result: backdatas
     }
})

module.exports = router
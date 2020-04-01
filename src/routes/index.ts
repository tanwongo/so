
import {Context} from "Koa"

import Router from "koa-router"

import datas from "../modules/data"


let router = new Router()

// const  data1  =  require('../test/datas');

//首页
// router.get('/(index.html)?',async(ctx,next)=>{
//   await ctx.render('index/index',{
//   })
// })
router.get('/web/main', async (ctx:Context, next) => {
    let searchKeyWords = {
        "hj":true,
        "qh":true,
        "bk":true
    }
    // let url ="123"
    // let options = {
    //     method: 'get',
    //     headers: { 'content-type': 'application/x-www-form-urlencoded' },
    //     data: "",
    //     url
    // };
    ctx.body = { 
        re: true,
        message: '',
        result: searchKeyWords
    }
        await ctx.render('shared/layout',{data:searchKeyWords})
})

// 股票
// router.get('/stock/user/:id',async (ctx, next) => {
 
//   await ctx.render('layout/stock/stock',{
 
//    });
// })


// router.get('/stock/my',async (ctx, next) => {
//   let a  = await stock.getmywatchstock();
//   let b = false;
//   console.log(a.data.result)
//   await ctx.render('layout/stock/stock',{
//     a,b
//   });
// })

// router.get('/stock/:id',async (ctx, next) => {
//   let a  = await stock.getmywatchstock();
//   let b = true;
//   await ctx.render('layout/stock/stock',{
//     a,b
//   });
// })

module.exports = router;

import {Context} from "Koa"

import Router from "koa-router"

import datas from "../modules/data"

let ax = require('axios')

let loadas  =require("lodash").merge;

let router = new Router()

// const  data1  =  require('../test/datas');

//首页
router.get('/web/quote',async(ctx:Context,next)=>{
    let data = {
        a:{
         IsSuccess:false
        },
        b:{
         IsSuccess:true,
         TotalPage:9158,
         TotalCount:91566,
         Keyword:"",
         Data:[
             {
                 Art_UniqueUrl: "http://hk.eastmoney.com/a/201902281056120161.html",
                 Art_Title: "南方航空拟将有的2架<em>B777</em>-300ER客机订单转换为2架<em>B777</em>F货机订单",
                 Art_Url: "http://hk.eastmoney.com/news/1535,201902281056120161.html",
                 Art_CreateTime: "2019-02-28 15:52:20",
                 Art_Content: "　　南方航空(01055.HK)宣布，公司于2017年10月20日与波音公司签订《8架B777-300ER和30架B737-8飞机购买协议》(以下简称“原协议”)，向波音公司购买8架B777-300ER和30架B737-8飞机。根据该协议约定，上述8架B777-300ER飞机计划..."
             }
         ]
        },
        c:ctx.query.keywords
     }
        await ctx.render('web/quote/index',{data:data})
        console.log(ctx.query)
})

router.get('/web/main', async (ctx:Context, next) => {
    let from_action = ctx.request.query
    let data:any;
    if(from_action.keywords=="赤峰黄金"){
        data = {
            a:{
             IsSuccess:false
            },
            b:{
             IsSuccess:false,
             TotalPage:9158,
             TotalCount:91566,
             Keyword:"",
             news:true
            },
            c:ctx.query.keywords
         }
         await ctx.render('web/main/a_stock/layout',{
            layout: 'web/main/a_stock/layout',
            data:data
        })

    }

    if(from_action.keywords=="黄金"){
        data = {
            a:{
             IsSuccess:false
            },
            b:{
             IsSuccess:false,
             TotalPage:9158,
             TotalCount:91566,
             Keyword:"",
             news:123
            },
            c:ctx.query.keywords,
            d:{
                stock:true,
                futures:true,
                spot:true,
                fund:true,
                bk:true
            }
         }
         await ctx.render('web/main/entry/layout',{
            layout: 'web/main/entry/layout',
            data:data
        })

    }

})

router.get('/', async (ctx:Context, next) => {
    let from_action = ctx.request.query
    let data:any;

        data = {
            a:{
             IsSuccess:false
            },
            b:{
             IsSuccess:false,
             TotalPage:9158,
             TotalCount:91566,
             Keyword:"",
             Data:[
                 {
                     Art_UniqueUrl: "http://hk.eastmoney.com/a/201902281056120161.html",
                     Art_Title: "南方航空拟将有的2架<em>B777</em>-300ER客机订单转换为2架<em>B777</em>F货机订单",
                     Art_Url: "http://hk.eastmoney.com/news/1535,201902281056120161.html",
                     Art_CreateTime: "2019-02-28 15:52:20",
                     Art_Content: "　　南方航空(01055.HK)宣布，公司于2017年10月20日与波音公司签订《8架B777-300ER和30架B737-8飞机购买协议》(以下简称“原协议”)，向波音公司购买8架B777-300ER和30架B737-8飞机。根据该协议约定，上述8架B777-300ER飞机计划..."
                 }
             ]
            },
            c:ctx.query.keywords
         }
    


  
    


    await ctx.render('web/main/index',{
        layout: 'main/a_stock/layout',
        data:data
    })
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
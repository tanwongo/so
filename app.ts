if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development'
  }
  
  require('source-map-support').install();



  import Koa from 'koa'
  import path from "path"
  import render from "./src/modules/koaejs";
  import config from './config/index';
  import views from "koa-views"
  import koaBody from 'koa-body'
  import reg_route from './src/modules/reg_route'
  import onerror from './src/modules/onerror'
  import getipandport from './src/modules/getipport'
//   import catchweb from './modules/catchweb'
  
  const app = new Koa()
  app.proxy = true
  app.use(getipandport())
  //静态文件
app.use(require("koa-static")('public'))
  
  
  app.use(onerror())
  app.use(koaBody())
  
  // render(app, {
  //   root: path.join(__dirname,'views'),
  //   layout: 'shared/layout',
  //   viewExt: 'ejs',
  //   cache: false,
  //   debug: false 
  // });

  render(app, {
    root: "views",
    layout: 'shared/layout',
    viewExt: 'ejs',
    cache: false,
    debug: false
  });


  // render(app, {
  //   root:"views",
  //   layout: 'shared/layout',
  //   extname: '.art',
  //   cache: false,
  //   debug:true
  // });
//   app.use(async (ctx, next)=>{
//     ctx.state.footer = await catchweb('http://emres.dfcfw.com/public/footer-1000-html.html', {}, 10 * 60 * 1000)
//     let nav2 = await catchweb('http://bulletin.eastmoney.com/html/Base/765.html', {}, 2 * 60 * 1000);
//     ctx.state.mainnav2 = (nav2.split('&nbsp;')).join("");
//     ctx.state.thistime = moment().format('yyyy-mm-dd HH:MM:ss')
//     ctx.state.machine_num = process.env.SERVER_NUM || 0
//     await next()
//   })
  
  //注册路由
  reg_route(app) 
  
  app.use(async(ctx, next) => {
    ctx.status = 404
    await ctx.render('shared/404', {title:'404', layout: false})
  })

  app.use(async (ctx, next)=>{
    ctx.state.machine_num = config.machine_num
    //ctx.state.footer = 'footer'
    await next()
  })
  
  const port = 777
  app.listen(port, function(){
    console.info(`(ENV：${process.env.NODE_ENV})已启动，监听端口 ${port}`);
  }); 
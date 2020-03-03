// const zixuan_head  =  require('./template/head.html');
// const zixuan_stock =  require('./template/stock.html');
// const loadanimate = require("../../loadanimate")
// const dot = require("dot")
// /* <img src='http://gbres.dfcfw.com/face/emot/emot02.png'></img> */
// module.exports = {
//     init: async function(){
//         const _this = this;
//         await this.getZixuan(0,0)
//         $("#menutabs").html(_this.getHeadHtml())
//         this.searchStock()
//     },
//     getHeadHtml: function(){
//        const _html = zixuan_head.default;
//        return _html;
//     },
//     getListHtml: function(data){
//         const _html = dot.template(zixuan_stock.default)(data);
//         return _html;
//      },
//     getZixuan:function(a,b){
//         const _this = this;
//         return new Promise(function(res,rej){
//             $.ajax({
//                 type:'get',
//                 url:'/api/getZixuan',
//                 beforeSend:function(){
//                     loadanimate.upAnimate(true)
//                 },
//                 datatype:'json'
//             }).then(function(data){
//                 return _this.getListHtml(data)
//             }).done(function(temp){
//                _this.fillHtml(temp);
//                loadanimate.upAnimate(false)
//                 res(true)
//             }).fail(function(){
//             })
//         })
//     },
//     searchStock: function(){
//         $(".mystock-input").on("focus",function(){
//             $(this).stop(true,false).animate({width:200},500)
//          })
//          $(".mystock-input").on("blur",function(){
//             $(this).stop(true,false).animate({width:160},500)
//          })
//     },
//     fillHtml: function(temp){
//         return $("#menuscont").html(temp)
//      }
// }

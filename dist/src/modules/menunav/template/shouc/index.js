// const head =  require('./template/head.html');
// const getShoucGuba    =  require('./template/guba.html');
// const getShoucHuati    =  require('./template/huati.html');
// const getShoucWenda    =  require('./template/wenda.html');
// const getShoucMoney    =  require('./template/caifuhao.html');
// const getShoucTouzi    =  require('./template/zhuti.html');
// const loadanimate = require("../../loadanimate")
// const dot  =require("dot")
// module.exports = {
//     init: async function(){
//         const _this = this;
//         $("#menutabs").html(_this.getHeadHtml())
//         this.headClick()
//     },
//     getHeadHtml: function(){
//        const _html = head.default;
//        return _html;
//     },
//     getListHtml: function(tempname,data){
//         const _html = dot.template(tempname.default)(data);
//         return _html;
//      },
//      getShouc:function(path){
//         const _this = this;
//         const _path = '/api/'+path;
//         return new Promise(function(res,rej){
//             $.ajax({
//                 type:'get',
//                 url:_path,
//                 beforeSend:function(){
//                     loadanimate.upAnimate(true,false)
//                 },
//                 datatype:'json'
//             }).then(function(data){
//                 switch(path) {
//                     case 'getShoucGuba':
//                     return _this.getListHtml(getShoucGuba,data);
//                     case 'getShoucHuati':
//                     return _this.getListHtml(getShoucHuati,data);
//                     case 'getShoucWenda':
//                     return _this.getListHtml(getShoucWenda,data);
//                     case 'getShoucMoney':
//                     return _this.getListHtml(getShoucMoney,data);
//                     case 'getShoucTouzi':
//                     return _this.getListHtml(getShoucTouzi,data);
//                     default:
//                     return _this.getListHtml(getShoucGuba,data);
//                }    
//             }).done(function(temp){
//                 _this.fillHtml(temp)
//                 loadanimate.upAnimate(false,false)
//                 res(true)
//             })
//         })
//     },
//     headClick: function(){
//         const _this = this;
//         $("#shouc-head a").on('click',function(){
//             $(this).addClass("active").siblings().removeClass("active");
//             loadanimate.upAnimate(false,true)
//             _this.getShouc($(this).attr('data-id'))
//         });
//         $("#shouc-head a").eq(0).click()
//     },
//     fillHtml: function(temp){
//        return $("#menuscont").html(temp)
//     }
// }

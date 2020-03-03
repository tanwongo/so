// const head  =  require('./template/head.html');

// const getJiFen  =  require('./template/jifen.html');

// const getMinXi  =  require('./template/minxi.html');

// const getShop  =  require('./template/shop.html');

// const getMis  =  require('./template/mis.html');

// const loadanimate = require("../../loadanimate")

// const dot  =require("dot")

// module.exports = {
//     init: function(){
//         const _this = this;
//         $("#menutabs").html(_this.getHeadHtml())
//         this.headClick()
//     },
//     getHeadHtml: function(){
//         const _html = head.default;
//         return _html;
//     },
//     getListHtml: function(tempname,data){
//          const _html = dot.template(tempname.default)(data);
//          return _html;
//     },
//     getJiFen:function(path){
//         const _this = this;
//         const _path = '/api/'+path;
//          return new Promise(function(res,rej){
//              $.ajax({
//                  type:'get',
//                  url:_path,
//                  beforeSend:function(){
//                     loadanimate.upAnimate(true)
//                 },
//                  datatype:'json'
//              }).then(function(data){
//                 switch(path) {
//                     case 'getJiFen':
//                     return _this.getListHtml(getJiFen,data);
//                     case 'getMinXi':
//                     return _this.getListHtml(getMinXi,data);
//                     case 'getShop':
//                     return _this.getListHtml(getShop,data);
//                     case 'getMis':
//                     return _this.getListHtml(getMis,data);
//                     default:
//                     return _this.getListHtml(getJiFen,data);
//                }    
//              }).done(function(temp){
//                  _this.fillHtml(temp)
//                  loadanimate.upAnimate(false)
//                  res(true)
//              })
//          })
//      },
//      headClick: function(){
//         const _this = this;
//         $("#jifen-head a").on('click',function(){
//             $(this).addClass("active").siblings().removeClass("active");
//             loadanimate.upAnimate(false,true)
//             _this.getJiFen($(this).attr('data-id'))
//         });
//         $("#jifen-head a").eq(0).click()
        
//     },
//      fillHtml: function(temp){
//         return $("#menuscont").html(temp)
//      }
// }
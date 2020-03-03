// const head  =  require('./template/head.ejs');
// const getIndex  =  require('./template/index.ejs');
// const loadanimate = require("../../loadanimate")
// const dot  =require("dot")
// module.exports = {
//     init: function(id){
//         const _this = this;
//         $("#menutabs").html(_this.getHeadHtml())
//         _this.fillHtml(_this.getQianb("getQianb"))
//     },
//     getHeadHtml: function(){
//         const _html = head.default;
//         return _html;
//     },
//     getListHtml: function(tempname,data){
//          const _html = dot.template(tempname.default)(data);
//          return _html;
//     },
//     getQianb:function(path){
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
//                     case 'getQianb':
//                     return _this.getListHtml(getIndex,data);
//                     default:
//                     return _this.getListHtml(getIndex,data);
//                }    
//              }).done(function(temp){
//                  _this.fillHtml(temp)
//                  loadanimate.upAnimate(false)
//                  res(true)
//              })
//          })
//      },
//      fillHtml: function(temp){
//         return $("#menuscont").html(temp)
//      }
// }

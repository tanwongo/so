const head  =  require('./template/head.html');

const getWendaQuestion   =  require('./template/question.html');

const getWendaAnswer    =  require('./template/answer.html');

const getWendaMessage   =  require('./template/message.html');

const loadanimate = require("../../loadanimate")

const dot  =require("dot")


module.exports = {
    init: async function(){
        const _this = this;
        $("#menutabs").html(_this.getHeadHtml())
        this.headClick()
    },
    getHeadHtml: function(){
       const _html = head.default;
       return _html;
    },
    getListHtml: function(tempname,data){
        const _html = dot.template(tempname.default)(data);
        return _html;
     },
     getMyWenda:function(path){
        const _this = this;
        const _path = '/api/'+path;
        return new Promise(function(res,rej){
            $.ajax({
                type:'get',
                url:_path,
                beforeSend:function(){
                    loadanimate.upAnimate(true,false)
                },
                datatype:'json'
            }).then(function(data){
                switch(path) {
                    case 'getWendaQuestion':
                    return _this.getListHtml(getWendaQuestion,data);
                    case 'getWendaAnswer':
                    return _this.getListHtml(getWendaAnswer,data);
                    case 'getWendaMessage':
                    return _this.getListHtml(getWendaMessage,data);
                    default:
                    return _this.getListHtml(getWendaQuestion,data);
               }    
            }).done(function(temp){
                _this.fillHtml(temp)
                loadanimate.upAnimate(false,false)
                res(true)
            })
        })
    },
    headClick: function(){
        const _this = this;
        $("#wenda-head a").on('click',function(){
            $(this).addClass("active").siblings().removeClass("active");
            loadanimate.upAnimate(false,true)
            _this.getMyWenda($(this).attr('data-id'))
        });
        $("#wenda-head a").eq(0).click()
        
    },
    fillHtml: function(temp){
       return $("#menuscont").html(temp)
    }
}
const guba_head  =  require('./template/head.html');

const getGubaPosting    =  require('./template/posting.html');

const getGubaReply    =  require('./template/reply.html');

const getGubaReplyMe    =  require('./template/replyme.html');

const getGubaZan   =  require('./template/zan.html');

const getGubaInv   =  require('./template/inv.html');

const getWenDongMi  = require("./template//wendongmi.html")

const loadanimate = require("../../loadanimate")

const loadfail  = require("../../404/index.html")

const dot  =require("dot")

console.log(iszhuye)

module.exports = {
    init: async function(){
        const _this = this;
        $("#menutabs").html(_this.getHeadHtml())
        iszhuye = false
        this.headClick()
    },
    getHeadHtml: function(){
       const _html = guba_head.default;
       return _html;
    },
    getListHtml: function(tempname,data){
        const _html = dot.template(tempname.default)(data);
        return _html;
     },
     getMyGuba:function(path){
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
                    case 'getGubaPosting':
                    return _this.getListHtml(getGubaPosting,data);
                    case 'getGubaReply':
                    return _this.getListHtml(getGubaReply,data);
                    case 'getGubaReplyMe':
                    return _this.getListHtml(getGubaReplyMe,data);
                    case 'getGubaZan':
                    return _this.getListHtml(getGubaZan,data);
                    case 'getGubaInv':
                    return _this.getListHtml(getGubaInv,data);
                    case 'getWenDongMi':
                    return _this.getListHtml(getWenDongMi,data);
                    default:
                    return _this.getListHtml(getGubaPosting,data);
               }    
            }).done(function(temp){
                _this.fillHtml(temp)
                loadanimate.upAnimate(false,false)
                res(true)
            }).fail(function(){
                loadanimate.upAnimate(false,false)
                console.log(loadfail)
                _this.fillHtml(loadfail.default)
            })
        })
    },
    headClick: function(){
        const _this = this;
        $("#guba-head a").on('click',function(){
            $(this).addClass("active").siblings().removeClass("active")
            loadanimate.upAnimate(false,true)
            $(this).children(".rpcr").remove()
            _this.getMyGuba($(this).attr('data-id'))
        });
        $("#guba-head a").eq(0).click()
        
    },
    fillHtml: function(temp){
       return $("#menuscont").html(temp)
    }
}
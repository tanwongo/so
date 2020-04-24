import a from '../src/modules/getnewslist'
a.init()

$(document).ready(function(){
    $('.nav-div li[data-nav-id="main"]').addClass("active").siblings()
})
import astock from "../src/modules/astock"
$(document).ready(function(){
    $('.nav-div li[data-nav-id="main"]').addClass("active").siblings().removeClass("active")
})
astock.init()
import tools from "../src/modules/tools"


let geturlp:any =tools.getURLParamer()
console.log(geturlp.keywords)
let a  = $("[data-keywords-mark]")
if(a){
  a.each(function(i,k){
      k.innerHTML = k.innerHTML.split(geturlp.keywords).join("<em class='up'>"+geturlp.keywords+"</em>")
  })
}

tools.exchangeT()



import tools from "../src/modules/tools"

console.log(tools.getURLParamer())
let a  = $("[data-keywords-mark]")
if($("[data-keywords-mark]")){
  a.each(function(i,k){
      k.innerHTML = k.innerHTML.split("黄金").join("<em class='up'>黄金</em>")
  })
}
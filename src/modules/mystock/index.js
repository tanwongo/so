let isshow = true;
module.exports = {
    
    init: function(){
        this.showInfo()
    },

    //我的自选股详细内容展开
    showInfo: function(){
        let $thisheight = $("#mystock-cont li").height();//记录原始高度
        $("#mystock-cont li").hover(function(e){
            //  let $this = $(this);
            //  let $msus  = $this.children('.mystock-sus'); //获取需要展开的容器ID
            //  let $msusheight = $msus.height();//记录容器高度
            //  $this.stop(true,false).animate({height:$msusheight+$this.height()+25},500,function(){
            //      $msus.show().stop(true,false).animate({opacity:1},300,function(){
                
            //      })
            //  })
            
        },function(e){
            // let $this = $(this);
            // let $msus  = $this.children('.mystock-sus');
            // $this.stop(true,false).animate({height:$thisheight},500,function(){
            //     $msus.hide().stop(true,false).animate({opacity:0},300,function(){
               
            //     })
            // })
          
            // $(document).click(function(event){

               
                
            //           var _con = $('#div1');
                
            //          if(!_con.is(event.target) && _con.has(event.target).length === 0){
                
            //                $('#aaa').hide();
                
            //     }
        })
        $("#mystock-cont").hover(function(e){
            
        })
        $("#mystock-down").on('click',function(){
            let a = $(".mystock-fixed-head");
            if(isshow){
                a.stop(true,false).animate({height:a.children("table").height()},300)
                $(this).html("↑").attr("title","收起全部")
                isshow = false;
            }
            else{
                 a.stop(true,false).animate({height:'245px'},300)
                $(this).html("↓").attr("title","展开全部")
                isshow = true;
            }
           
        })
    }
}
/* 푸터 하단 선택 메뉴 */    
$(document).ready(function(){
    $(".fnb li").attr("data-count", 0);
    $(".fnb li").click(function(){
       $(".fnb li").removeClass("on");
       $(this).attr("data-count", parseInt($(this).attr("data-count"))+1); 
        var cnt = parseInt($(this).attr("data-count"));
       if(cnt % 2 == 1) {       
           $(this).addClass("on"); 
       } else {
           $(this).removeClass("on"); 
       }
    });
});  
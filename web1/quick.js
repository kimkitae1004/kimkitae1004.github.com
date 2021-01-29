/* 퀵 메뉴 부분 */    
$(document).ready(function(){
    $(".quick").css("display","none");
    $(window).scroll(function(){
        var pg1 = $("#page1").offset().top;
        var pg2 = $("#page2").offset().top;
        var pg3 = $("#page3").offset().top;
        var ft = $(".ft").offset().top;
        var pgTop = $(window).scrollTop();
        if(pgTop>=pg1-300 && pgTop<pg2-300){
            $(".quick").fadeIn(700);
            $(".quick li").removeClass("on");
            $(".quick li").eq(0).addClass("on");
        } else if(pgTop>=pg2-300 && pgTop<pg3-300){
            $(".quick li").removeClass("on");
            $(".quick li").eq(1).addClass("on");
        } else if(pgTop>=pg3-300 && pgTop<ft-300) {
            $(".quick li").removeClass("on");
            $(".quick li").eq(2).addClass("on");
        } else {
            $(".quick").fadeOut(700);
            $(".quick li").removeClass("on");
        } 
    });
});    
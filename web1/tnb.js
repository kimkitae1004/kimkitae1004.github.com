$(document).ready(function(){
    //언어 설정
    $(".cur_lang").click(function(){
       $(".lang_box").toggleClass("on");
    });
    //스크롤시 검색창 사라짐
    $(window).scroll(function(){
       var par = parseInt($(this).scrollTop());
       var chk = $("#find_open_btn").prop("checked");    
        if(par>=200){
            $("#find_open_btn").removeProp("checked");
        }
    });    
}); 
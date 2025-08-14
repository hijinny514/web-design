//index.js

//메뉴
$(function(){
    $('.gnb > li').mouseenter(function(){
        $(this).find('.lnb').stop().show();
    }).mouseleave(function(){
        $('.lnb').stop().hide();
    });
});

//자동 슬라이드
$(function(){
    setInterval(topmove, 3000);
});

//슬라이드 구현 함수 
function topmove() {
    var liH = $('.viewer li').height(); //슬라이드 하나의 높잇값을 담을 변수!

    $('.viewer').animate({
        marginTop: -liH
    }, 800, function () {
        //다음을 위한 준비!
        $('.viewer').append($('.viewer li').first());
        $('.viewer').css('margin-top', 0);
    });
}


// 레이어팝업
$(function () {
    $('.notice-list li:first a').click(function (e) {
        e.preventDefault();
        $('#popup').show();
    });

    $('.btn-close').click(function () {
        $('#popup').hide();
    });
});

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
    setInterval(leftmove, 3000);
});

//슬라이드 구현 함수 
function leftmove() {
    $('.viewer').animate({
        marginLeft: '-100%'
    }, 800, function () {
        //다음을 위한 준비!
        $('.viewer').append($('.viewer li').first());
        $('.viewer').css('margin-left', 0);
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

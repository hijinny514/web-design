//index.js

//드롭다운 메뉴
$(function () {
    $('.menu').mouseenter(function () {
        $('.lnb-wrap').stop().slideDown();
    });

    $('.menu').mouseleave(function () {
        $('.lnb-wrap').stop().slideUp();
    });
});


//자동 슬라이드
$(function () {
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


//모달 레이어 팝업
$(function(){
    $('.notice-list li:first a').click(function(e){
        e.preventDefault();

        $('#modal').show();
    });

    $('.btn-close').click(function(){
        $('#modal').hide();
    });
});

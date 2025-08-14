//index.js

//드롭다운 메뉴
$(function () {
    $('.gnb > li').mouseenter(function () {
        $('.lnb, .menu-bg').stop().slideDown();
    }).mouseleave(function(){
        $('.lnb, .menu-bg').stop().slideUp();
    });
});


//자동 슬라이드
$(function () {
    setInterval(topmove, 3000);
});

//슬라이드 구현 함수 
function topmove() {
    $('.viewer').animate({
        marginTop: '-300px'
    }, 800, function () {
        //다음을 위한 준비!
        $('.viewer').append($('.viewer li').first());
        $('.viewer').css('margin-top', 0);
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

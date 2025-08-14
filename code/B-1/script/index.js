//index.js

//드롭다운 메뉴
$(function () {
    $('.gnb li').mouseenter(function () {
        $('.lnb').stop().slideDown();
    });

    $('.menu').mouseleave(function(){
        $('.lnb').stop().slideUp();
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

//탭메뉴 구현
$(function () {

    $('.tab-menu a').click(function (e) {
        e.preventDefault();

        //클릭된 탭메뉴의 디자인 변경 
        $(this).parent().addClass('active').siblings().removeClass('active');

        //탭 컨텐츠 변경
        var tabId = $(this).attr('href');

        $(tabId).show().siblings().hide();

    });
});

//레이어 팝업
$(function(){
    $('.notice-list li:first a').click(function (e) {
        e.preventDefault();
        $('#popup').show();
    });

    $('.btn-close').click(function () {
        $('#popup').hide();
    });
});

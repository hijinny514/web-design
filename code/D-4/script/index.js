//index.js

//메뉴
$(function () {
    $('.gnb li').mouseenter(function(){
        $('.smenu').stop().fadeIn();
    });

    $('.menu').mouseleave(function(){
        $('.smenu').stop().fadeOut();
    });
});


//자동 슬라이드
$(function () {
    setInterval(fadeSlide, 3000);
});

//슬라이드 구현 함수 
function fadeSlide() {
    var fSlide = $('.viewer li').first();
    var nSlide = fSlide.next();

    nSlide.hide().addClass('active').fadeIn(800, function () {
        $('.viewer').append(fSlide);
        fSlide.removeClass('active');
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
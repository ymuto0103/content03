$(function(){

    /* スライダー（キャンパーの声）  */
    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll:2,
        responsive: [{
            breakpoint: 960,
            settings: {
            slidesToShow: 1,
            slidesToScroll:1,
            }
        }]
    });

    /* スライダー（キャンプスポット）  */
    $('.slider2').slick({
        arrows: true,
        dots: true,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll:3,
        responsive: [{
            breakpoint: 960,
            settings: {
            slidesToShow: 1,
            slidesToScroll:1,
            }
        }]
    });

    /* スライダー（キャンプに必要な物）  */
    $('.slider3').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        speed: 3000
        
    });

    
    /* ハンバーガーメニュー */      
    (function($) {
    var $nav   = $('#navArea');
    var $btn   = $('.toggle_btn');
    var open   = 'open'; // class
    // menu open close
    $btn.on( 'click', function() {
        if ( ! $nav.hasClass( open ) ) {
        $nav.addClass( open );
        } else {
        $nav.removeClass( open );
        }
    });

    // menu close
    $('a[href^="#"]').on('click', function() {
        $btn.click();
    });
    
    } )(jQuery);



});
$(function () {

    /*=================================================
    Slick
    ===================================================*/
    $(".sec02-slider").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: true,
        prevArrow: '<div class="slide-arrow prev-arrow"></div>',
        nextArrow: '<div class="slide-arrow next-arrow"></div>',
        dots: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
    });


    /*=================================================
    アコーディオンメニュー
    ===================================================*/
    // $('.accordion-header').on('click', function () {
    //     var $header = $(this);
    //     var $item = $header.parent(); 
    //     var $content = $header.next('.accordion-content');
    //     var $slider = $header.closest('.slick-slider'); 

    //     if ($header.hasClass('is-active')) {
    //         $header.removeClass('is-active');
    //         $item.removeClass('is-open-padding');
    //         $content.slideUp(400, function() {
    //             if ($slider.length) {
    //                 $slider.slick('setPosition');
    //             }
    //         });
    //     } else {
    //         $header.addClass('is-active');
    //         $item.addClass('is-open-padding');
    //         $content.slideDown(400, function() {
    //             if ($slider.length) {
    //                 $slider.slick('setPosition');
    //             }
    //             var $iframe = $content.find('iframe');
    //             if ($iframe.length && !$iframe.attr('src')) {
    //                 $iframe.attr('src', $iframe.data('src'));
    //             }
    //         });
    //     }
    // });

    $('.accordion-header').on('click', function () {
        var $header = $(this);
        var $item = $header.parent(); 
        var $content = $header.next('.accordion-content');

        if ($header.hasClass('is-active')) {
            $header.removeClass('is-active');
            $item.removeClass('is-open-padding');
            $content.slideUp(400);
        } else {
            $header.addClass('is-active');
            $item.addClass('is-open-padding');
            $content.slideDown(400, function() {
                var $iframe = $content.find('iframe');
                if ($iframe.length && !$iframe.attr('src')) {
                    $iframe.attr('src', $iframe.data('src'));
                }
            });
        }
    });

    $('.accordion-content').on('click', function () {
        $(this).closest('.accordion-content').prev('.accordion-header').click();
    });


    /*=================================================
    fixedbtn
    ===================================================*/

    $(function () {
        let cta = $(".fixedbtn");
        cta.hide();

        $(window).scroll(function () {
            let scrollThreshold = 500;
            if ($(window).scrollTop() > scrollThreshold) {
                cta.fadeIn();
            } else {
                cta.fadeOut();
            }
        });
    });


    $(window).on("scroll resize", function () {
        if (window.innerWidth <= 810) {
            let ctaHeight = $(".fixedbtn").outerHeight();
            ($(".fixedbtn").is(":visible"))
            $("footer .container").css("padding-bottom", ctaHeight + "px");

        } else {
            $("footer .container").css("padding-bottom", "60px");
        }
    });
});
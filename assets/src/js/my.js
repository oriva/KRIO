$(".success-slider").slick({
    fade: true,
    infinite: true,
    autoplay: true,
    responsive: [{
        breakpoint: 1024,
        settings: {

        }
    }]
});
$(".news-slider").slick({
    dots: true,
    autoplay: true,
    slidesToShow: 2,
    responsive: [{
        breakpoint: 1400,
        settings: {
            slidesToShow: 1,
        }
    } ,
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        } ,
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }]
});
$(".news-page-other").slick({
    dots: true,
    autoplay: true,
    slidesToShow: 2,
    responsive: [{
        breakpoint: 1900,
        settings: "unslick" // destroys slick
    } ,
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        } ,
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }]
});
$(document).ready(function () {
    $('.counts-item .count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1500,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    $('#up').click(function () {
        $('html, body').animate({scrollTop: 0}, 1000);
        return false;
    });
    if ($(window).width() <= 991) {
        $('#myDiv1>form').prependTo('#myDiv2');
    }
    if ($(window).width() <= 767) {
        $('#myDiv1> .header-getting-support-button').prependTo('#myDiv2');
    }
    if ($(window).width() >= 991) {
        $('#services-href').attr("href", "services.html");
        $('#institutes-href').attr("href", "institutes.html");
    }
});
var show = true;
$(window).scroll(function () {
    if (!show) return false;
    var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top = $('.story-count').offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height(); // Высота окна браузера
    var d_height = $(document).height(); // Высота всего документа
    var e_height = $('.story-count').outerHeight(); // Полная высота блока со счетчиками

    if (w_top + w_height >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        $('.story-count-block .count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 1500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
            show = false;
        });
    }
});
$('.service-dropdown').click(function () {
    $(this).next('.dropdown-hidden').slideToggle();
    if ($(this).find('.arrow-dropdown').hasClass('arrow-open')) {
        $(this).find('.arrow-dropdown').removeClass('arrow-open')
    } else {
        $(this).find('.arrow-dropdown').addClass('arrow-open')
    }
});
$('#burger').click(function () {

    if ($(".header-nav").hasClass('open-menu')) {
        $('.header-nav').removeClass('open-menu')
        $('.burger-line1').removeClass('burger-transform-1');
        $('.burger-line2').removeClass('burger-transform-2');
        $('.burger-line3').removeClass('burger-transform-3');
    }
    else {
        $('.header-nav').addClass('open-menu');
        $('.burger-line1').addClass('burger-transform-1');
        $('.burger-line2').addClass('burger-transform-2');
        $('.burger-line3').addClass('burger-transform-3');
    }
});
$('.header-nav-item').click(function () {
    $(this).find('.menu-child').slideToggle();
});
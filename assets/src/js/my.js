$(".success-slider").slick({
    fade: true,
    infinite: true,
    autoplay: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            infinite: true
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            dots: true
        }
    }, {
        breakpoint: 300,
        settings: "unslick"
    }]
});
$(".news-slider").slick({
    dots: true,
    autoplay: true,
    slidesToShow: 2,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            dots: true
        }

    }, {
        breakpoint: 300,
        settings: "unslick" // destroys slick

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
    $('#up').click(function() {
        $('html, body').animate({scrollTop: 0},2000);
        return false;
    })
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

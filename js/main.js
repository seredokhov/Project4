
/*  Инициализация маски */
$(function($){
    $(".mask").mask("+7 (999) 999 - 99 - 99");
});

// Мобильное меню
$(function(){
    var link = $('.hamb'),
        menu = $('.mobile_menu'),
        close = $('.mobile_close'),
        overlay = $('.overlay');

    link.on('click', function() {
        menu.addClass('opened');
        overlay.fadeIn(300);
    });
    overlay.add(close).on('click', function() {
        overlay.fadeOut(300);
        menu.removeClass('opened');
    });
});


// Показать все
$(function(){
    var table = $('table'),
        btn = $('.section_4 button');

    btn.on('click', function() {
        table.addClass('open');
        $(this).hide();
        return false;
    });
});
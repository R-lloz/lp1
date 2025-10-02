'use strict';

$(document).ready(function () {
    // メニューボタン
    $('#js-menu-btn').on('click', function (e) {
        e.preventDefault();
        $('#js-drawer').slideToggle();
    });
    $(document).on('click', function (e) {
        if (!$(e.target).closest('#js-drawer, .header__menu-btn').length) {
            if($('#js-drawer').is(':visible')) $('#js-drawer').slideToggle();
        }
    });
    $('#js-drawer a').on('click', function () {
        $('#js-drawer').slideToggle();
    });
    
    // タブ切り替え
    const $tabs = $('.target__tab');
    $tabs.on('click', function() {
        $('.active').removeClass('active');
        $(this).addClass('active');
        const index = $tabs.index(this);
        $('.target__content').removeClass('show').eq(index).addClass('show');
    });
});
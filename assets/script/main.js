'use strict';

$(document).ready(function () {
	// メニューボタン
	$('.header__menu-btn a').on('click', function (e) {
		e.preventDefault();
		$('#js-drawer').slideToggle();
	});
	$(document).on('click', function (e) {
		if (!$(e.target).closest('#js-drawer, .header__menu-btn').length) {
			if($('#js-drawer').is(':visible')) $('#js-drawer').slideToggle();
		}
	});

	// タブ切り替え
    const $tabs = $('.tab');
    $tabs.on('click', function() {
        $('.active').removeClass('active');
        $(this).addClass('active');
        const index = tabs.index(this);
        $('.content').removeClass('show').eq(index).addClass('show');
    });
});
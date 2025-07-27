'use strict';

$(document).ready(function () {
	$('.header__menu-btn a').on('click', function (e) {
		e.preventDefault();
		$('#js-drawer').slideToggle();
	});
	$(document).on('click', function (e) {
		if (!$(e.target).closest('#js-drawer, .header__menu-btn').length) {
			if($('#js-drawer').is(':visible')) $('#js-drawer').slideToggle();
		}
	});
});
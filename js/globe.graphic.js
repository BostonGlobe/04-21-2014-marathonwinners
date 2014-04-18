globe.graphicWinners = function() {

	function resize() {

		var container = $('#gf-winners')

		if (container.width() < 480) {
			container.removeClass('wide');
		} else {
			container.addClass('wide');
		}

	}

	$(window).resize(_.debounce(resize, 150));

	resize();

};
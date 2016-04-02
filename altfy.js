(function($) {

	$.fn.altfy = function() {

		this.filter("img").each(function() {
			$(this).attr('alt').appendTo('body');
		});

		return this;

	};

}(jQuery));
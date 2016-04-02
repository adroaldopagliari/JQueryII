(function($) {

	$.fn.altfy = function() {

		this.filter("img").each(function() {
			var alternative = "<p>" + $(this).attr('alt') + "</p>";
			$(alternative).appendTo('body');
		});

		return this;

	};

}(jQuery));
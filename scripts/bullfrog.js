
$(document).ready(function() {
	$('.snd ul.tabs').each(function() {
		var $active, $content, $links = $(this).find('a');

		$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
		$active.addClass('active');

		$content = $($active[0].hash);
		$active.css('background-color','white');
		$active.css('color', '#668134');
		$links.not($active).each(function() {
			$(this.hash).hide();
		})

		$(this).on('click', 'a', function(e) {
			$active.css('background-color','#668134');
			$active.css('color', 'white');
			$active.removeClass('active');
			$content.hide();

			$active = $(this);
			$content = $(this.hash);

			$active.addClass('active');
			$active.css('background-color','white');
			$active.css('color', '#668134');
			$content.show();


			e.preventDefault();
		});
	});
});
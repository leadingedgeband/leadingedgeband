$(document).ready(function () {
	$('#pictures img').on({

		mouseover: function () {
			$(this).css({
				'cursor': 'pointer',
				'border-Color' : 'red'
			});
		},

		mouseout: function () {
			$(this).css({
				'cursor': 'def',
				'border-Color' : 'grey'
			});
		},

		click: function () {
			var imageURL = $(this).attr('src');
			$('#mainImage').attr('src', imageURL);
		}
	})
});
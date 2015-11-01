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
			if($(this).attr('id') == 'portrait') {
				document.getElementById('mainImage').style.width = '480px';
			}
			else {
				document.getElementById('mainImage').style.width = '700px';
			}
			$('#mainImage').attr('src', imageURL);
		}
	})
});
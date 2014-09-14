$(function() {
	icon.render();
	icon.init();
});

var icon = {
	currentLink : '#main',
	init : function() {
		$('#create').toggle();
		$.ajax({ 
	        url: '2ndIndex.html', 
	        success: function (data, status, xhr) { 
	        	$('#body').append(data);
	        }
	    });
	},

	render : function() {
		var html = '';
		for (i=0; i<icons.length; i++) {
			html += '<div class="block" style="left: ' + i*100 + 'px; top: 0px">' + icons[i].preview + '</div>';
			console.log(icons[i].preview);
			if (i == icons.length-1) {
				$('#main').html(html);
			}
		}	
	},

	link : function(to) {
		$(to).toggle();
		$(icon.currentLink).toggle();
		icon.currentLink = to;
	},

	reload : function() {
		var a = $('#text').val();
		$('#preview').html(a);
	},
};
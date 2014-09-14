$(function() {
	money.init();
});

var money = {
	init : function() {
		$.ajax({ 
	        url: 'index.html', 
	        success: function (data, status, xhr) { 
	        	$('#body').append(data);
	        }
	    });
	},
};
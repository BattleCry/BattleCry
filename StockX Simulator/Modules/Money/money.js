$(function() {
	money.init();
});

var money = {
	init : function() {
		$.ajax({ 
	        url: 'Modules/Money/index.html', 
	        success: function (data, status, xhr) { 
	        	$('#body').append(data);
	        }
	    });
	},
};
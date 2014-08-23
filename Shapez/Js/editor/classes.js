$(function() {
	var html = '';
	html = '<div class="hor-range-part-1">'
	+ '<div class="hor-range-part-3" id="hor-range-1"></div>'
	+ '<div class="hor-range-part-2" id="hor-range-btn-1"></div>'
	+ '</div>';
	$( '.hor-range' ).html(html);
	$( "#hor-range-btn-1" ).mousedown(function() {
		moving = true;
	});
	setInterval(function() {
		classes.move();
	}, 10)

});
var moving = false;
var classes = {
	move : function() {
		if (moving) {
			var thing = document.getElementById('hor-range-btn-1');
			var a = changex+thing.style.marginLeft;
			thing.style.marginLeft = a;
			console.log(changex);
			//$('#hor-range-btn-1').css({ 'margin-left' : changex+a+'px' });
			//console.log(ml, ml+changex);

		}
	},
};
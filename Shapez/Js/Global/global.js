$(function() {
window.onbeforeunload = function(){ 
	global.save();
}
});
var global = {
	session : {},

	saves : [],

	save : function() {
		localstorage.session = global.session;
	},
};
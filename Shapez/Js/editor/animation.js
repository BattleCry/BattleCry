$(function() {
	$('#animation-dragger').mousedown(function() {
		changingAnimationDragger = true;
	});

	$('#play-holder').click(function() {
		playingFrames = !playingFrames;
		playingFramesChange = false;	
	});
	animation.loadFrame();
});
var playingFrames = false;
var changingAnimationDragger = false;
var playingFramesChange = false;
var animation = {

	totalFrames 	: 100,

	currentFrame  	: 0,

	curretX 		: 0,

	loadFrame : function() {
		var html = '';
		for (i = 0; i < animation.totalFrames; i++) {
			html = html + '<div class="block" style="background-color: #CDCDCD; height: 14px; width: 1px; bottom: 0px; left: ' + i + '%"></div>';
		}
		html = html + '<div class="block" style="background-color: red; height: 18px; width: 1px; bottom: 0px; left: ' + animation.currentFrame + '%" id="current-frame"></div>';
		$('#frames').html(html);
	},

	oneF : function(dir) {
		animation.currentFrame = Math.floor(animation.currentFrame);
		if (dir == 'f') {
			animation.currentFrame++;
		} else {
			animation.currentFrame--;
		}
		$('#current-frame').css({
  			'left' : animation.currentFrame+'%'
  		});
  		animation.refresh();
	},

	allF : function(dir) {
		if (dir == 'b') {
			animation.currentFrame = 0;
		} else {
			animation.currentFrame = animation.totalFrames;
		}
		$('#current-frame').css({
  			'left' : animation.currentFrame+'%'
  		});
	},

	refresh : function() {
		if (animation.currentFrame > animation.totalFrames) {
			animation.currentFrame = 0;
			$('#current-frame').css({
	  			'left' : '0%'
	  		});
		}
		if (animation.currentFrame < 0) {
			animation.currentFrame = animation.totalFrames;
			$('#current-frame').css({
	  			'left' : '100%'
	  		});
		}
	},
};
var config = {
	view : 'flatshade',

	changeViews : function(res) {
		if (res == 'wireframe') {
			config.view = res;
			for (i = 0; i < shapez.meshs.length; i++) {
				shapez.materials[i].wireframe = true;
				shapez.materials[i].wireframeLinewidth = 1;
			}
		}
		if (res == 'flatshade') {
			config.view = res;
			for (i = 0; i < shapez.meshs.length; i++) {
				shapez.materials[i].wireframe = false;
			}
		}
	},
};
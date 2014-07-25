var _ci_ = { // main activater i.e in jquery it is $ same here _ci_
	math : {
		randomRange : function(min, max) {
			return Math.floor(Math.random()*((max)-(min)+1)+(min));
			console.log('calculating, changing ' + variable + ' from ' + min + ' - ' + max + '.');
		},
	},
	mapMaker		: function() {

	},
};
var js3 = {
	positionOnAxis : function(freq, rot ) { // when this is used instead of position it will position itself corrisponding to the native axis
		var ratio = 2 * Math.PI / rot; //rotation deg
		var rotDeg = 90 / (ratio/4);
		var rotRad;

		if (freq) {
			rotRad = rotDeg;
		} else {
			rotRad = 360 - (rotDeg - 180);
		}

		rotRad *= Math.PI/180;

		var a = Math.cos(rotRad) * 10;
		var b = Math.sin(rotRad) * 10;
		console.log('a', a, 'b', b);

		mesh.position.x += b; // execution
		mesh.position.z += a;
		mesh1.position.x += b;
		mesh1.position.z += a;
	},

	checkForAxis : function() {
		if (camera.rotation.x != 0 && camera.rotation.y != 0) {
			camera.rotation.z = camera.rotation.x;
		} 
	},

	navigateAttack : function(curLocX, curLocZ, DestLocX, DestLocZ) {

	},

	makeJSONshape : function(varname, scale, x, y, z) {
		var a = 0;
		var name = varname;
		var points = [];
		for (var i = 0; i<armAnimation.vertices.length/3; i++) {
			console.log('here');
			points[i] = new THREE.Vector3( armAnimation.vertices[a]*scale, armAnimation.vertices[a+1]*scale, armAnimation.vertices[a+2]*scale );
			a = a + 3;
		}
		console.log(points);
		var geometry = new THREE.ConvexGeometry( points );
		var material = new THREE.MeshLambertMaterial({shading: THREE.FlatShading, color: 0xdcdcdc});
		var mesh = new THREE.Mesh( geometry, material );
		mesh.position.x = x;
		mesh.position.y = y;
		mesh.position.z = z;
		scene.add( mesh );
		console.log('animate');

		function animate() {
			setTimeout(function() {
				mesh.position.x = armAnimation.animations[0].hierarchy[0].keys[0].pos[0];
				mesh.position.y = armAnimation.animations[0].hierarchy[0].keys[0].pos[1];
				mesh.position.z = armAnimation.animations[0].hierarchy[0].keys[0].pos[2];
				console.log('animation');		
			}, 1000)
		}

	}
}

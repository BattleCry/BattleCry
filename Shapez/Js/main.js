$(function() {
	container = document.getElementById( 'main' );
	document.body.appendChild( container );
	container.appendChild( renderer.domElement );
	window.onmousemove = shapez.handleMouseMove;
	$('#main-dragger').on('mousedown', shapez.changingRot);
	$('#main-dragger').on('mouseup', shapez.changingRot);
	shapez.init();
});
var pasx, pasy, changex, changey = 0;
var mousePos = {
	x : 0,
	y : 0,
}


if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
scene    = new THREE.Scene();
renderer = new THREE.WebGLRenderer();
camera   = new THREE.PerspectiveCamera(100, window.screen.availWidth / window.screen.availHeight, 0.1, 1000);
renderer.setSize(window.screen.availWidth-300, window.screen.availHeight-100);
var renderer, camera, scene, loader;

var shapez = {
	changingRotation		: false, 
	meshs 	  	 			: [],
	materials 	 			: [],
	geometries 	 			: [],


	init : function() {
		wgeometry = new THREE.PlaneGeometry( 1000, 1000, 100, 100 );
		wmaterial = new THREE.MeshBasicMaterial( { color: 0x7D7D7D, wireframe: true, wireframeLinewidth: 1 } );
		wireplane = new THREE.Mesh( wgeometry, wmaterial );
		wireplane.scale.set( 0.5, 0.5, 0.5 );
		wireplane.rotation.x = - Math.PI / 2;

		scene.add( wireplane );

		camera.position.y = 50;
		camera.position.z = 300;

		camera.lookAt(new THREE.Vector3(0,0,0));

		shapez.render();
	},

	render : function() {
		requestAnimationFrame( shapez.render );		
		renderer.render( scene, camera );
	},

	makeShape : function(shape) {
		geometries[geometries.length] = new THREE.CubeGeometry(200, 200, 200);
		materials[materials.length] = new THREE.MeshPhongMaterial({shading: THREE.FlatShading, color: 0xdcdcdc});
		meshs[mesh.length] = new THREE.Mesh(geometry, material);
		shapez.addScene();
	},

	addScene : function() {
		scene.add(meshs[meshs.length]);
	},

	changingRot : function() {
		if (shapez.changingRotation) {
			shapez.changingRotation = false;
		} else {
			shapez.changingRotation = true;
		}
		if (shapez.changingRotation) {
			$('#main-dragger').addClass('selected');
		} else {
			$('#main-dragger').removeClass('selected');
		}
	},

	handleMouseMove: function(event) {
	    event = event || window.event; // IE-ism
	    mousePos = {
	        x: event.clientX,
	        y: event.clientY
	    };
	    changex = mousePos.x - pasx;
	    changey = pasy - mousePos.y;
	    pasx = mousePos.x;
	    pasy = mousePos.y;
	    if (shapez.changingRotation) {
	    	camera.position.x += changex;
			camera.position.y += changey;
			camera.lookAt(new THREE.Vector3(0,0,0));
	    }
	},
};
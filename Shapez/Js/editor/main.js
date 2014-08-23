$(function() {
	container = document.getElementById( 'main' );
	document.body.appendChild( container );
	container.appendChild( renderer.domElement );
	window.onmousemove = shapez.handleMouseMove;
	$('#main-dragger').on('mousedown', shapez.changingRot);
	$('#main-dragger').on('mouseup', shapez.changingRot);
	shapez.init();
	shapez.jq();
	chart.render();

	$('#main-dragger').bind('mousewheel', function(e) {
	    if(e.originalEvent.wheelDelta / 120 > 0) {
	        camera.position.z += 10;
	    } else {
	        camera.position.z -= 10;
	    }
	}); 
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
renderer.setSize(window.innerWidth-300, window.innerHeight);
var renderer, camera, scene, loader;




var shapez = {
	changingRotation		: false, 
	createBarUp				: false,

	meshs 	  	 			: [],
	materials 	 			: [],
	geometries 	 			: [],

	outline 				: [],

	axis 					: [],

	cameraMesh				: '',
	lookatMesh				: '',


	init : function() {
		wgeometry = new THREE.PlaneGeometry( 1000, 1000, 100, 100 );
		wmaterial = new THREE.MeshBasicMaterial( { color: 0x7D7D7D, wireframe: true, wireframeLinewidth: 1 } );
		wireplane = new THREE.Mesh( wgeometry, wmaterial );
		wireplane.scale.set( 0.5, 0.5, 0.5 );
		wireplane.rotation.x = - Math.PI / 2;

		scene.add( wireplane );

		camera.lookAt(new THREE.Vector3(0,0,0));

		camera.position.y = 50;
		camera.position.z = 300;

		var light = new THREE.HemisphereLight( 0xFFFFFF, 0xFFFFFF, 1 );
		scene.add( light );

		shapez.render();
		shapez.changeRotAxis();
	},

	jq : function() {
		$( '#file-slide-down' ).toggle();
		$( '#export-slide-down' ).toggle();
		$( '#mesh-slide-down' ).toggle();
		$( '#add-slide-down' ).toggle();
		$( '#view-slide-down' ).toggle();
		$( '#chart-shadow' ).toggle();
		$( '#delete' ).toggle();
		$( '#material-color' ).w2field('color');
		$( '#opacity' ).toggle();
		$( '#wireframe' ).toggle();
		$('#frame-options').toggle();
	},

	render : function() {
		requestAnimationFrame( shapez.render );		
		renderer.render( scene, camera );
	},

	makeShape : function(shape) {
		var type;
		if (shape == 'cube') {
			shapez.geometries[shapez.geometries.length] = new THREE.CubeGeometry(200, 200, 200);
			type = "THREE.CubeGeometry";
		} else if (shape == 'sphere') {
			shapez.geometries[shapez.geometries.length] = new THREE.SphereGeometry(150, 40, 40);
			type = "THREE.SphereGeometry";
		} else if (shape == 'icosahedron') {
			shapez.geometries[shapez.geometries.length] = new THREE.IcosahedronGeometry(150, 0);
			type = "THREE.IcosahedronGeometry";
		} else if (shape == 'octahedron') {
			shapez.geometries[shapez.geometries.length] = new THREE.OctahedronGeometry(150, 0);
			type = "THREE.OctahedronGeometry";
		} else if (shape == 'tetrahedron') {
			shapez.geometries[shapez.geometries.length] = new THREE.TetrahedronGeometry(150, 0);
			type = "THREE.TetrahedronGeometry";
		} else if (shape == 'cylinder') {
			shapez.geometries[shapez.geometries.length] = new THREE.CylinderGeometry(100, 100, 200, 20, 20, false);
			type = "THREE.CylinderGeometry";
		}
		
		shapez.materials[shapez.materials.length] = new THREE.MeshPhongMaterial({shading: THREE.FlatShading, color: 0xdcdcdc});
		shapez.meshs[shapez.meshs.length] = new THREE.Mesh(shapez.geometries[shapez.geometries.length-1], shapez.materials[shapez.materials.length-1]);
		shapez.addShape();
		chart.meshs[chart.meshs.length] = {
			name : 'shape ' + shapez.meshs.length,
			id   : chart.meshs.length+1,
			parent: "THREE.Scene",
			type : type,
		}
		if (config.view == 'wireframe') {
			shapez.materials[shapez.materials.length-1].wireframe = true;
			shapez.materials[shapez.materials.length-1].wireframeLinewidth = 1;
		} else if (config.view == 'flatshade') {
			shapez.materials[shapez.materials.length-1].wireframe = false;
		}
		chart.render();
	},

	addShape : function() {
		scene.add(shapez.meshs[shapez.meshs.length-1]);
		shapez.materials[shapez.materials.length-1].color.setHex( '0xFFFFFF' )
	},

	changingRot : function() {
		if (esx || esy || esz || epx || epy || epz || erx || ery || erz) return;
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

	changeRotAxis : function() {
		geometry = new THREE.CubeGeometry(20, 20, 20);
		material = new THREE.MeshNormalMaterial({transparent: true, opacity: 0});
		shapez.lookatMesh = new THREE.Mesh(geometry, material);
		scene.add(shapez.lookatMesh);

		camera.parent = shapez.lookatMesh;
		shapez.lookatMesh.children[0] = camera;
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
			shapez.lookatMesh.rotation.y += changex/1000;
			shapez.lookatMesh.rotation.x += changey/1000;

			camera.lookAt(new THREE.Vector3(shapez.lookatMesh.position.x,shapez.lookatMesh.position.y,shapez.lookatMesh.position.z));
	    }
	},
};



$(function() {
	container = document.getElementById( 'main' );
	document.body.appendChild( container );
	container.appendChild( renderer.domElement );

	window.onmousemove = main.handleMouseMove;

	$('#holder').bind('mousewheel', function(e) {
	    if(e.originalEvent.wheelDelta / 120 > 0) {
	        camera.position.z += 10;
	    } else {
	        camera.position.z -= 10;
	    }
	}); 

	$('#holder').on("mousedown", function() {
		main.dragging = true;
		console.log('here');
	});
	$('#holder').on("mouseup", function() {
		main.dragging = false;
		console.log('here2');
	});

	main.init();
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
renderer.setSize(window.innerWidth, window.innerHeight);
var renderer, camera, scene, loader;
var lookatMesh;
var main = {
	dragging : false,

	render : function() {
		requestAnimationFrame( main.render );		
		renderer.render( scene, camera );
	},

	init : function() {
		wgeometry = new THREE.PlaneGeometry( 1000, 1000, 100, 100 );
		wmaterial = new THREE.MeshBasicMaterial( { color: 0x7D7D7D, wireframe: true, wireframeLinewidth: 1 } );
		wireplane = new THREE.Mesh( wgeometry, wmaterial );
		wireplane.scale.set( 0.5, 0.5, 0.5 );
		wireplane.rotation.x = - Math.PI / 2;

		geometry = new THREE.CubeGeometry(10, 10, 10);
		material = new THREE.MeshNormalMaterial({shading: THREE.FlatShading, transparent: true, opacity: 0});
		lookatMesh = new THREE.Mesh(geometry, material);
		scene.add(lookatMesh);

		scene.add( wireplane );

		camera.parent = lookatMesh;
		lookatMesh.children[0] = camera;

		camera.position.z = 400;
		camera.position.y = 200;

		camera.lookAt(new THREE.Vector3(0,0,0));

		var light = new THREE.HemisphereLight( 0xFFFFFF, 0xFFFFFF, 1 );
		scene.add( light );

		main.render();
		main.renderPlanets();
		main.interval();
	},

	interval : function() {
		setInterval(function() {

		}, 1);
	},

	renderPlanets : function() {
		geometry = new THREE.SphereGeometry(150, 100, 100);
		material = new THREE.MeshLambertMaterial({shading: THREE.FlatShading, color: 0xFBFF00});
		mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

		geometry = new THREE.SphereGeometry(2, 100, 100);
		material = new THREE.MeshLambertMaterial({shading: THREE.FlatShading, color: 0xFF0000});
		mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);
		mesh.position.x = 180;

		geometry = new THREE.SphereGeometry(32, 100, 100);
		material = new THREE.MeshLambertMaterial({shading: THREE.FlatShading, color: 0xE3B872});
		mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);
		mesh.position.x = 236;

		geometry = new THREE.SphereGeometry(40, 100, 100);
		material = new THREE.MeshLambertMaterial({shading: THREE.FlatShading, color: 0x27B70A});
		mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);
		mesh.position.x = 338;

		geometry = new THREE.SphereGeometry(4, 100, 100);
		material = new THREE.MeshLambertMaterial({shading: THREE.FlatShading, color: 0x8C4530});
		mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);
		mesh.position.x = 434;

		geometry = new THREE.SphereGeometry(100, 100, 100);
		material = new THREE.MeshLambertMaterial({shading: THREE.FlatShading, color: 0x8C4530});
		mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);
		mesh.position.x = 704;
	},

	handleMouseMove : function() {
		event = event || window.event; // IE-ism
	    mousePos = {
	        x: event.clientX,
	        y: event.clientY
	    };
	    changex = pasx - mousePos.x;
	    changey = pasy - mousePos.y;
	    pasx = mousePos.x;
	    pasy = mousePos.y;
	    console.log(main.dragging);
	    if (main.dragging) {
			lookatMesh.rotation.y += changex/1000;
			lookatMesh.rotation.x += changey/1000;

			camera.lookAt(new THREE.Vector3(0,0,0));
	    }
	},
}
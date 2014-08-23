$(function() {
	$( "#edit-scale-x" ).mousedown(function() {esx = true;});
	$( "#edit-scale-y" ).mousedown(function() {esy = true;});
	$( "#edit-scale-z" ).mousedown(function() {esz = true;});

	$( "#edit-position-x" ).mousedown(function() {epx = true;});
	$( "#edit-position-y" ).mousedown(function() {epy = true;});
	$( "#edit-position-z" ).mousedown(function() {epz = true;});

	$( "#edit-rotation-x" ).mousedown(function() {erx = true;});
	$( "#edit-rotation-y" ).mousedown(function() {ery = true;});
	$( "#edit-rotation-z" ).mousedown(function() {erz = true;});

	$( window ).mouseup(function() {
		esx = false;
		esy = false;
		esz = false;

		epx = false;
		epy = false;
		epz = false;

		erx = false;
		ery = false;
		erz = false;

		moving = false;

		changingAnimationDragger = false;

		shapez.changingRotation = false;
	});
	setInterval(function() {
		if (esx) {
			shapez.meshs[chart.selected].scale.x += changex/1000;
	  		$('#edit-scale-x').val(shapez.meshs[chart.selected].scale.x.toFixed(2));
	  		update();
	  	}
	  	if (esy) {
			shapez.meshs[chart.selected].scale.y += changex/1000;
	  		$('#edit-scale-y').val(shapez.meshs[chart.selected].scale.y.toFixed(2));
	  		update();
	  	}
	  	if (esz) {
			shapez.meshs[chart.selected].scale.z += changex/1000;
	  		$('#edit-scale-z').val(shapez.meshs[chart.selected].scale.z.toFixed(2));
	  		update();
	  	}

	  	if (epx) {
			shapez.meshs[chart.selected].position.x += changex;
	  		$('#edit-position-x').val(shapez.meshs[chart.selected].position.x.toFixed(2));
	  		update();
	  	}
	  	if (epy) {
			shapez.meshs[chart.selected].position.y += changex;
	  		$('#edit-position-y').val(shapez.meshs[chart.selected].position.y.toFixed(2));
	  		update();
	  	}
	  	if (epz) {
			shapez.meshs[chart.selected].position.z += changex;
	  		$('#edit-position-z').val(shapez.meshs[chart.selected].position.z.toFixed(2));
	  		update();
	  	}

	  	if (erx) {
			shapez.meshs[chart.selected].rotation.x += changex/200;
	  		$('#edit-rotation-x').val(shapez.meshs[chart.selected].rotation.x.toFixed(2));
	  		update();
	  	}
	  	if (ery) {
			shapez.meshs[chart.selected].rotation.y += changex/200;
	  		$('#edit-rotation-y').val(shapez.meshs[chart.selected].rotation.y.toFixed(2));
	  		update();
	  	}
	  	if (erz) {
			shapez.meshs[chart.selected].rotation.z += changex/200;
	  		$('#edit-rotation-z').val(shapez.meshs[chart.selected].rotation.z.toFixed(2));
	  		update();
	  	}
	  	if (changingAnimationDragger) {
	  		if (mousePos.x < window.innerWidth-315) {
	  			$('#animation-dragger').css({
		  			'left' : mousePos.x+'px'
		  		});	
		  		$('#animation-holder').css({
		  			'width' : mousePos.x-2+'px'
		  		});	
	  		}
	  		animation.currentX = mousePos.x;
	  	}

	  	if (playingFrames) {
	  		if (animation.currentFrame >= animation.totalFrames+1) animation.currentFrame = -1;
	  		animation.currentFrame+=0.1;
	  		$('#current-frame').css({
	  			'left' : animation.currentFrame+'%'
	  		});
	  	}

	  	if (animation.currentX >= 118 && $("#frame-options").is(":hidden")) {
	  		$('#frame-options').toggle();
	  	}

	  	if (animation.currentX < 118 && !$("#frame-options").is(":hidden")) {
	  		$('#frame-options').toggle();
	  	}

	  	if (playingFrames) {
	  		if (playingFramesChange) return;
	  		var html = '<div class="block" style="width: 4px; height: 15px; background-color: #6E6E6E; left: 2px; bottom: 2px"></div><div class="block" style="width: 4px; height: 15px; background-color: #6E6E6E; left: 10px; bottom: 2px"></div>';
	  		$('#play-holder').html(html);
	  		playingFramesChange = true;
	  	} else {
	  		if (playingFramesChange) return;
	  		playingFramesChange = true;
	  		$('#play-holder').html('<div id="play-button" class="block" style="border: 8px solid transparent; border-left: 12px solid #6E6E6E; left: 2px; bottom: 2px; height: 0px; width: 0px"></div>')
	  	}

	}, 10);
});
function update() {
	chart.selectedMesh.position.x = shapez.meshs[chart.selected].position.x;
	chart.selectedMesh.position.y = shapez.meshs[chart.selected].position.y;
	chart.selectedMesh.position.z = shapez.meshs[chart.selected].position.z;
	chart.selectedMesh.rotation.x = shapez.meshs[chart.selected].rotation.x;
	chart.selectedMesh.rotation.y = shapez.meshs[chart.selected].rotation.y;
	chart.selectedMesh.rotation.z = shapez.meshs[chart.selected].rotation.z;
	chart.selectedMesh.scale.x = shapez.meshs[chart.selected].scale.x;
	chart.selectedMesh.scale.y = shapez.meshs[chart.selected].scale.y;
	chart.selectedMesh.scale.z = shapez.meshs[chart.selected].scale.z;
}
var esx = false;
var esy = false;
var esz = false;
var epx = false;
var epy = false;
var epz = false;
var erx = false;
var ery = false;
var erz = false;

var chart = {
	openChilds		: [],

	meshs 			: [],

	selected 		: 0,
	preSelected 	: 0,

	selectedMesh 	: 0,
	preSelectedMesh : 0,

	render : function() {
		var html = '';
		var all = chart.meshs.length;
		for (i=0; i<all; i++) {
			if (i % 2 == 0) {
				html += '<div class="mesh-chart-value" style="background-color: #E3E3E3" onclick="chart.select(' + i  + ')" id="mesh-chart-value-' + i + '">'
				+ '<div class="color-block-red" onclick="chart.deleteMesh(' + i + ')"></div>'
				+ '<div class="color-block" style="background-color: blue; margin-left: 16px; margin-top: -8px"></div>'
				+ '<div class="color-block-green" style="" onclick="chart.showChild(' + i + ')"></div>'
				+ '<div class="block" style="left: 50px; margin-top: -12px">' + chart.meshs[i].name + '</div>'
				+ '<div class="block" style="right: 2px; margin-top: -12px">' + chart.meshs[i].id + '</div>'
				+ '</div>'
				+ '<div id="mesh-chart-value-child-' + i + '" style="height: 0px; width: 180px; background-color: red; position: absolute; left: 20px">'
				+ '</div>';
			} else {
				html += '<div class="mesh-chart-value" style="background-color: #E7E7E7" onclick="chart.select(' + i  + ')" id="mesh-chart-value-' + i + '">'
				+ '<div class="color-block-red" onclick="chart.deleteMesh(' + i + ')"></div>'
				+ '<div class="color-block" style="background-color: blue; margin-left: 16px; margin-top: -8px"></div>'
				+ '<div class="color-block-green" style="" onclick="chart.showChild(' + i + ')"></div>'
				+ '<div class="block" style="left: 50px; margin-top: -12px">' + chart.meshs[i].name + '</div>'
				+ '<div class="block" style="right: 2px; margin-top: -12px">' + chart.meshs[i].id + '</div>'
				+ '</div>'
				+ '<div id="mesh-chart-value-child-' + i + '" style="height: 0px; width: 180px; background-color: red; position: absolute; left: 20px">'
				+ '</div>';
			}
		}
		$('#mesh-chart').html(html);
	},

	showChild : function(num) {
		var direction;
		var thing = document.getElementById('mesh-chart-value-child-'+num);
		var height = shapez.meshs[num].children.length * 24;
		if (height != 0) {
			if (thing.clientHeight == height) {
				direction = "up";
			} else {
				direction = "down";
			}
			var html = '';
			var all;
			if (direction == "down") all = 0;	
			if (direction == "up") all = height;		
			makeBig();
			function makeBig() {
				setTimeout(function() {
					var not = true;
					if (direction == "down") all++;
					if (direction == "up") all--;
					$( '#mesh-chart-value-child-'+num ).css({ 'height' : all + 'px' });
					if (all != height && direction == "down") {
						makeBig();
					} 
					if (all != 0 && direction == "up") {
						makeBig();
					} 
					for (i=0;i<chart.meshs.length;i++) {
						if (num < i && not) {
							not = false;
							$( '#mesh-chart-value-'+i ).css({ 'margin-top' : all + 'px' });
						}
					}
				}, 2);
			}
		}
		
	},

	select : function(num) {
		chart.selected = num;
		chart.selectChart();
	}, 

	selectChart : function() {
		$('#edit-name').val(chart.meshs[chart.selected].name);	
		$('#edit-parent').val(chart.meshs[chart.selected].parent);	

		$('#edit-scale-x').val(shapez.meshs[chart.selected].scale.x.toFixed(2));
		$('#edit-scale-y').val(shapez.meshs[chart.selected].scale.y.toFixed(2));
		$('#edit-scale-z').val(shapez.meshs[chart.selected].scale.z.toFixed(2));

		$('#edit-position-x').val(shapez.meshs[chart.selected].position.x.toFixed(2)); 
		$('#edit-position-y').val(shapez.meshs[chart.selected].position.y.toFixed(2));
		$('#edit-position-z').val(shapez.meshs[chart.selected].position.z.toFixed(2));

		$('#edit-rotation-x').val(shapez.meshs[chart.selected].rotation.x.toFixed(2));
		$('#edit-rotation-y').val(shapez.meshs[chart.selected].rotation.y.toFixed(2));
		$('#edit-rotation-z').val(shapez.meshs[chart.selected].rotation.z.toFixed(2)); 

		$('#material-color').val(shapez.materials[chart.selected].color); 
	
		var a;
		if (chart.meshs[chart.selected].type == 'THREE.CubeGeometry') {
			a = new THREE.CubeGeometry(200, 200, 200);
		}
		if (chart.meshs[chart.selected].type == 'THREE.SphereGeometry') {
			a = new THREE.SphereGeometry(150, 40, 40);
		}
		if (chart.meshs[chart.selected].type == 'THREE.IcosahedronGeometry') {
			a = new THREE.IcosahedronGeometry(150, 0);
		}
		if (chart.meshs[chart.selected].type == 'THREE.OctahedronGeometry') {
			a = new THREE.OctahedronGeometry(150, 0);
		}
		if (chart.meshs[chart.selected].type == 'THREE.TetrahedronGeometry') {
			a = new THREE.TetrahedronGeometry(150, 0);
		}
		if (chart.meshs[chart.selected].type == 'THREE.CylinderGeometry') {
			a = new THREE.CylinderGeometry(100, 100, 200, 20, 20, false);
		}
		var b =  new THREE.MeshPhongMaterial({shading: THREE.FlatShading, color: 0x1eff00, wireframe: true, wireframeLinewidth: 1.5});
		chart.selectedMesh = new THREE.Mesh(a, b);
		chart.selectedMesh.position.x = shapez.meshs[chart.selected].position.x;
		chart.selectedMesh.position.y = shapez.meshs[chart.selected].position.y;
		chart.selectedMesh.position.z = shapez.meshs[chart.selected].position.z;
		chart.selectedMesh.rotation.x = shapez.meshs[chart.selected].rotation.x;
		chart.selectedMesh.rotation.y = shapez.meshs[chart.selected].rotation.y;
		chart.selectedMesh.rotation.z = shapez.meshs[chart.selected].rotation.z;
		chart.selectedMesh.scale.x = shapez.meshs[chart.selected].scale.x;
		chart.selectedMesh.scale.y = shapez.meshs[chart.selected].scale.y;
		chart.selectedMesh.scale.z = shapez.meshs[chart.selected].scale.z;
		scene.add(chart.selectedMesh);
		scene.remove(chart.preSelectedMesh);
		chart.preSelectedMesh = chart.selectedMesh;	
	},

	update : function(e) {
		if (e == 'go') up();
		function up() {
			chart.meshs[chart.selected].name = $('#edit-name').val();

			chart.meshs[chart.selected].parent = parseInt($('#edit-parent').val())-1;
			shapez.meshs[chart.selected].parent = shapez.meshs[chart.meshs[chart.selected].parent];

			shapez.meshs[chart.selected].scale.x = parseInt($('#edit-scale-x').val());
			shapez.meshs[chart.selected].scale.y = parseInt($('#edit-scale-y').val());
			shapez.meshs[chart.selected].scale.z = parseInt($('#edit-scale-z').val());

			shapez.meshs[chart.selected].position.x = parseInt($('#edit-position-x').val()); 
			shapez.meshs[chart.selected].position.y = parseInt($('#edit-position-y').val());
			shapez.meshs[chart.selected].position.z = parseInt($('#edit-position-z').val());

			shapez.meshs[chart.selected].rotation.x = parseInt($('#edit-rotation-x').val());
			shapez.meshs[chart.selected].rotation.y = parseInt($('#edit-rotation-y').val());
			shapez.meshs[chart.selected].rotation.z = parseInt($('#edit-rotation-z').val());

			shapez.materials[chart.selected].color.setHex( '0x' + $('#material-color').val() );

			if ($('#true-false-btn-opacity').is(':checked')) {
				shapez.materials[chart.selected].opacity = $('#opacity-range').val();
				if (!$("#opacity").is(":hidden")) {
					// visable
				} else {
					$('#opacity').toggle();
				}
			}
			if (!$('#true-false-btn-opacity').is(':checked')) {
				shapez.materials[chart.selected].opacity = 1;
				if (!$("#opacity").is(":hidden")) {
					$('#opacity').toggle();
				} else {
					// not visable
				}
			}

			if ($('#true-false-btn-wireframe').is(':checked')) {
				shapez.materials[chart.selected].wireframe = true;
				shapez.materials[chart.selected].wireframeLinewidth = $('#wireframe-range').val();
				if (!$("#wireframe").is(":hidden")) {
					// visable
				} else {
					$('#wireframe').toggle();
				}
			}
			if (!$('#true-false-btn-wireframe').is(':checked')) {
				shapez.materials[chart.selected].wireframe = false;
				if (!$("#wireframe").is(":hidden")) {
					$('#wireframe').toggle();
				} else {
					// not visable
				}
			}

			chart.render();
			update();
		}
	},

	deleteMesh : function(num) {
		$( '#delete' ).toggle();
		$( '#chart-shadow' ).toggle();
		var a = 0;
		var t = 1;
		makeBig();
		function makeBig() {
			setTimeout(function() {
				a=a+3;
				$( '#delete' ).css({ 'height' : a+'px' });
				$( '#chart-shadow' ).css({ 'background-color' : 'rgba( 71, 71, 71 ,' + a/200 + ' )' });
				if (a < 120) {
					makeBig();
				} 
				if (a == 120) {
					finish();
				}

			}, t)
		}
		function finish() {
			$( '#delete' ).html('Are you sure you want to delete ' + chart.meshs[num].name + '<button class="btn" style="min-width: 49px !important; position: absolute; right: 4px; bottom: 10px" onclick="chart.delete(' + num + ')">ok</button>');
		}
	},

	delete : function(num) {
		scene.remove(chart.selectedMesh);
		scene.remove(shapez.meshs[num]);
		shapez.meshs.splice(num, 1);
		chart.meshs.splice(num, 1);
		shapez.materials.splice(num, 1);
		shapez.geometries.splice(num, 1);
		setTimeout(function() {

		}, 10)
		chart.render();
		chart.finish();
	},

	finish : function() {
		var a = 120;
		var t = 1;
		makeBig();
		$( '#delete' ).html('');
		function makeBig() {
			setTimeout(function() {
				a=a-3;
				$( '#delete' ).css({ 'height' : a+'px' });
				$( '#chart-shadow' ).css({ 'background-color' : 'rgba( 71, 71, 71 ,' + a/200 + ' )' });
				if (a > 0) {
					makeBig();
				} 
				if (a == 0) {
					$( '#delete' ).toggle();
					$( '#chart-shadow' ).toggle();
				}

			}, t)
		}
	},
};
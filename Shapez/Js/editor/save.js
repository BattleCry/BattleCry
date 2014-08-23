var save =  {
	save : function() {
		var json = '{ <br>'
		+ '&nbsp;"shapes" : [<br>';
		for (i = 0; i < shapez.meshs.length; i++) {
			json += '&nbsp;&nbsp;{<br>';

			json += '&nbsp;&nbsp;&nbsp;"id"   : "'+chart.meshs[i].id+'"<br>';
			json += '&nbsp;&nbsp;&nbsp;"name" : "'+chart.meshs[i].name+'"<br>';
			json += '&nbsp;&nbsp;&nbsp;"type" : "'+chart.meshs[i].type+'"<br>';

			if (i == shapez.meshs.length-1) {
				json += '&nbsp;&nbsp;}<br>';	
			} else {
				json += '&nbsp;&nbsp;},<br>';
			}
		
		}
		json += "&nbsp;],<br>";

		json += '&nbsp;"material" : [<br>';
		for (i = 0; i < shapez.materials.length; i++) {
			json += '&nbsp;&nbsp;{<br>';

			json += '&nbsp;&nbsp;&nbsp;"colorR"  : "'+shapez.materials[i].color.r+'"<br>';
			json += '&nbsp;&nbsp;&nbsp;"colorG"  : "'+shapez.materials[i].color.g+'"<br>';
			json += '&nbsp;&nbsp;&nbsp;"colorB"  : "'+shapez.materials[i].color.b+'"<br>';

			json += '&nbsp;&nbsp;&nbsp;"opacity" : "'+shapez.materials[i].opacity+'"<br>';

			json += '&nbsp;&nbsp;&nbsp;"opacity" : "'+shapez.materials[i].transparent+'"<br>';

			if (i == shapez.materials.length-1) {
				json += '&nbsp;&nbsp;}<br>';	
			} else {
				json += '&nbsp;&nbsp;},<br>';
			}
		
		}
		json += "&nbsp;]<br>";



		json += '}';

		w2popup.open({
			body: json,
		});
	},
};
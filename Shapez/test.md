$.parseJSON(w2utils.base64decode(w2utils.base64encode(JSON.stringify(a))))
w2utils.base64encode(JSON.stringify(a))
JSON.stringify(a)

$.ajax({ 
	url: 'http://localhost:8888/users', 
	success: function (data, status, xhr) { 
	  var users = $.parseJSON(data);
	  for (var i=0; i<users.length; i++) {
	    
	}
});

$.ajax({ 
	url: 'http://localhost:8888/makeCharacters',
	method: 'POST',
	data: {

	},
	success: function (data, status, xhr) {  

	}
});
var http  = require("http");
var qs 	  = require('querystring');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host	: '127.0.0.1',
    port	: 3306,
    user	: 'root',
    password: '',
    database : 'Shapez'
});
connection.connect();

var reqed = false;
var req;


function start(route) {
	console.log("Server has started...");
	console.log('Server waiting for request...');
	http.createServer(onRequest).listen(8888);
	checkReqest();

 	function onRequest(request, response) {
	    response.writeHead(200, {'Access-Control-Allow-Origin': '*' });    
	    response.writeHead(200, {"Content-Type": "text/plain"});

 		switch (request.url) {

			case '/recieveFile' :
				var queryString = 'SELECT * FROM assets';

				connection.query(queryString, function(err, rows, fields) {
				    if (err) {throw err;} else {

				    }

				    response.write(JSON.stringify(rows));
				    response.end();  
				    console.log('Request = ', queryString, '...');
				    //console.log(JSON.stringify(rows));
				});
				break;

			case '/sendFile' :
				if (request.method == 'POST') {
			        console.log("POST");
			        var body = '';
			        request.on('data', function (data) {
			            body += data;
			        });
			        request.on('end', function () {
			        	var data = qs.parse(body);
			        	var sql  = "INSERT INTO weapons (ownedWeapons, playerId, characterID, ownedWeaponId)"
						  			+"Values('"
						  			+ data.ownedWeapons
						  			+"', '" 
							  		+ data.playerId
							  		+"', '"
							  		+ data.characterID
							  		+"', '"
									+ data.ownedWeaponId
									+"')";
			        			   
						connection.query(sql, function(err) {
						    if (err) {
						    	throw err;
						    } else {
						    	console.log('Working...');
						    }
						    response.write('saved');
						    response.end();  
						});
			        });
			    }
			    response.write('dfdf');
			    response.end();
				break;

			default: 
			    response.write('Wrong request!');
			    response.end();  
			    break;

		}
		checkReqest();
  	}

  	function checkReqest() {
	  	if (reqed == false) {
	  		console.log('No incoming reqests...');
	  		console.log('...........');
	  		setTimeout(function() {
	  			console.log('Still no incoming reqests');
	  		}, 100)
	  	} else {
	  		reqed = false;
	  		console.log('Incoming requests...');
	  	}
	}
}

var post = {
	id  	 : 9,
    username : 'fatterPand2a',
    fname    : 'Vladim2ir',
    email	 : 'cool@gma22il.com',
    pass 	 : 'vladIzAw2esome',
};

exports.start = start;
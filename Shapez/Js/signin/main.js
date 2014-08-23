var bugs = false;
var sign = {
	signup : function() {
		var username = $('#username').val();
		var pass = $('#password').val();
		var conPass = $('#confirm-password').val();
		var email = $('#email').val();
		var lname = $('#lname').val();
		var fname = $('#fname').val();
		var emailBug = false;
		var passBug = false;
		var userBug = false;
		var fnameBug = false;
		var lnameBug = false;

		check4bugs() 

		function check4bugs() {
			
			if (pass != conPass) {
				$('#error-password').html('Password and confirmation password are not the same');
				passBug = true;
			} else {
				$('#error-password').html('');
			}
			if (pass == '') {
				$('#error-password').html('Please enter password');
				passBug = true;
			} else {
				$('#error-password').html('');
			}
			$.ajax({ 
				url: 'http://localhost:8888/acounts', 
				success: function (data, status, xhr) { 
					var users = $.parseJSON(data);
					for (var i=0; i<users.length; i++) {
						if (users[i].email == email) {
							emailBug = true;
						}
						if (i == users.length-1) {
							if (emailBug) {
								$('#error-email').html('Email is already taken');
							} else {
								$('#error-email').html('');
							}
						}

						if (users[i].username == username) {
							userBug = true;
						}
						if (i == users.length-1) {
							if (userBug) {
								$('#error-username').html('Username is already taken');
							} else {
								$('#error-username').html('');
							}
						}
					}
				}
			});
			if (fname == '') {
				fnameBug = true;
				$('#error-firstname').html('Please enter Firstname');
			} else {
				$('#error-firstname').html('');
			}
			if (lname == '') {
				lnameBug = true;
				$('#error-lastname').html('Please enter Lastname');
			} else {
				$('#error-lastname').html('');
			}
		}
		console.log(emailBug, passBug, userBug, lnameBug, fnameBug);
		if (emailBug || passBug || userBug || lnameBug || fnameBug) return;

		$.ajax({ 
			url: 'http://localhost:8888/makeAcount',
			method: 'POST',
			data: {
				username : username,
				pass : pass,
				email : email,
				lname : lname,
				fname : fname
			},
			success: function (data, status, xhr) {  
				location.href = '../Explore/index.html';
			}
		});
	},
};
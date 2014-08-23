$(function() {
	$('#collections').toggle();
});
var explore = {
	signInToggle : function() {
		if (localStorage.remember == 'true') {
        	$('#remember-me').prop('checked', true);
	    }
	    if (localStorage.password != 'null' && localStorage.username != 'null' && localStorage.remember != 'false') {
			$('#sign-in-password').val(localStorage.password);
			$('#sign-in-username').val(localStorage.username);
	    } 
		var html = '<input class="sign-in-input" style="right: 50%; margin-right: -25px; top: -5px" placeholder="Username" id="username">'
		+ '<input class="sign-in-input" style="right: 50%; margin-right: -25px; top: 25px" placeholder="Password" type="password" id="password">'
		+ '<button class="btn" style="min-width: 49px !important; position: absolute; right: 4px; bottom: -11px" onclick="explore.signIn()">Sign in</button>'
		+ '<input type="checkbox" id="remember-me" class="block" style="right: 59px; top: -2px"><div class="block" style="right: 2px; top: -2px; font-size: 14px; color: #656566">remember</div>';
		$('#sign-in').html(html);
	},

	signIn : function() {
		var password = $('#password').val();
		var username = $('#username').val();
		console.log(password, username);
		$.ajax({ 
			url: 'http://localhost:8888/acounts', 
			success: function (data, status, xhr) { 
			  var users = $.parseJSON(data);
			  for (var i=0; i<users.length; i++) {
			  	console.log(users[i].pass, users[i].username);
			  	if (username == users[i].username && password == users[i].pass) {
			  		console.log('signed in');
			  		global.session = users;
			  		explore.signedInToggle();
			  		explore.rememberMe()
			  		$.ajax({ 
						url: 'http://localhost:8888/receive', 
						success: function (data, status, xhr) { 
							var receives = $.parseJSON(data);
							var all = [];
							for (var i=0; i<receives.length; i++) {
								if (receives[i].ownerId == global.session.id) {
									all.push(receives[i]);
								}
								if (i == receives.length) {
									global.saves = receives;
								}
							}
						}
					});
			  	}
			  }
			}
		});
	},

	rememberMe : function() {
		
		/*
	    console.log('reached remember me function');
	    var a = $('#remember-me').is(':checked');
	    if (!a) {
	      console.log('return');
	      localStorage.username = null;
	      localStorage.password = null;
	      localStorage.remember = false;
	      return;
	    }
	    console.log('a' + a + 'local' + localStorage.remember);
	    if (a == true) {
	      localStorage.username = $('#sign-in-username').val();
	      localStorage.password = $('#sign-in-password').val();
	      localStorage.remember = true;
	    } else {
	      localStorage.remember = false;
	    }
	    console.log(localStorage.remember, localStorage.password, localStorage.username);
	    */
	  },

	signedInToggle : function() {
		var html = '<div class="block" style="left: 25px; top: 10px; color: #656566">Welcome</div>'
		+ '<div class="block" style="left: 50px; top: 24px; color: #656566">' + global.session[0].fname + '</div>';
		$('#sign-in').html(html);
	},

	allCollections : function() {
		$('#collections').toggle();
	},
};
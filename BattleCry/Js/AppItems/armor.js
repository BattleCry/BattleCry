$(function() {
var armor = {
	
	warrior : {

		Swords :  [ {
			html: '<img id="StarterSword" src="img/Weapons/Swords/Starter Sword.png" width="50px" height="50px">',
			name: 'Starter Sword',
			tree: StarterSword,
			id: 0,
		} ],	

		renderSwords : function() {
			$.ajax({ 
				url: 'http://localhost:8888/weapons',
				success: function (data, status, xhr) {
					var weapons = $.parseJSON(data);
					var html = armor.warrior.Swords[0];
					for (var i=1; i<weapons.length; i++) {
						if (weapons[i].playerId == game.session.id && weapons[i].characterId == parseInt(currentSelectedCharacter.substring(7,8))) {
							html += armor.warrior.Swords[i];
						}
					}
					$('#armor-storage').html(html);
				}
			});
		},
	},
};
});
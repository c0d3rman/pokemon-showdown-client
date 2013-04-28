(function($) {

	var MainMenuRoom = this.MainMenuRoom = this.Room.extend({
		// minWidth: 480,
		// maxWidth: 480,
		bestWidth: 360,
		events: {
			'click .button': 'clickButton'
		},
		initialize: function() {
			// left menu
			var buf = '<div class="leftmenu"><div class="mainmenu"><p><button class="button big" value="search"><strong>Look for a battle</strong></button></p></div>';
			buf += '<div class="mainmenu"><p><button class="button" value="teambuilder">Teambuilder</button></p><p><button class="button" value="ladder">Ladder</button></p></div></div>';

			// right menu
			buf += '<div class="rightmenu"><div class="mainmenu"><p><button class="button" value="lobby">Join lobby chat</button></p></div></div>';
			this.$el.html(buf);

			app.on('init:formats', this.updateSearch, this);
			this.updateSearch();
		},
		updateSearch: function() {
			if (window.BattleFormats) {
				this.$('button.big').html('<strong>Look for a battle</strong>').removeClass('disabled');
			} else {
				this.$('button.big').html('<em>Connecting...</em>').addClass('disabled');
			}
		},
		updateRightMenu: function() {
			if (app.sideRoom) {
				this.$('.rightmenu').hide();
			} else {
				this.$('.rightmenu').show();
			}
		},
		clickButton: function(e) {
			e.preventDefault();
			var $target = $(e.currentTarget);
			switch ($target.val()) {
			case 'lobby':
				app.joinRoom('lobby');
				break;
			case 'teambuilder':
				app.joinRoom('teambuilder');
				break;
			case 'ladder':
				app.joinRoom('ladder');
				break;
			}
		}
	});

}).call(this, jQuery);

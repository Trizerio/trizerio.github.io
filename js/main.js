$(function() {
	let good = 0;
	let bad = 0;
	let game_started = false;
	let key_pressed = false;

	key_codes = [37, 38, 39, 40];

	last_key = {
		code: null,
		amount: 0
	};

	startGame = function() {
		game_started = true;
		timer = setInterval(function() {
			var random = ~~(Math.random() * key_codes.length);
			key = key_codes[random];
			if(!key_pressed) {
				bad++
				last_key.amount = 0;
				last_key.code = null;
			}
			if(key == last_key.code) {
				last_key.amount += 1;
			} else {
				last_key.amount = 0;
			}
			switch(key) {
				case 37:
				if(key == last_key.code) { 
					$(".key").text("Left x" + last_key.amount);
				} else {
					$(".key").text("Left");
				}
				break;
				case 38:
				if(key == last_key.code) { 
					$(".key").text("Up x" + last_key.amount);
				} else {
					$(".key").text("Up");
				}
				break;
				case 39:
				if(key == last_key.code) { 
					$(".key").text("Right x" + last_key.amount);
				} else {
					$(".key").text("Right");
				}
				break;
				case 40:
				if(key == last_key.code) { 
					$(".key").text("Down x" + last_key.amount);
				} else {
					$(".key").text("Down");
				}
				break;
			} 
			key_pressed = false;
			$(".stats").text("Good: " + good + " / Bad: " + bad);
		}, 600);
	};

	restartGame = function() {
		clearInterval(timer);
		good = 0;
		bad = 0;
		last_key.code = null;
		last_key.amount = 0;
		startGame();
		$(".stats").text("Good: " + good + " / Bad: " + bad);
	};

	stopGame = function() {
		clearInterval(timer);
		game_started = false;
		$(".key").text("Stopped");
	};

	keyCheck = function(x) {
		key_pressed = true;
		if(game_started) {
			if(key_codes.includes(x)) {
				if(x == key) {
					last_key.code = x;
					good++;
					} else {
						bad++;
					}
				}
			$(".stats").text("Good: " + good + " / Bad: " + bad);
		}
	};

	$(window).keydown(function(e) {
		if(!game_started) {
			if(e.keyCode == 32) {
				startGame();
			}
		} else {
			if(e.keyCode == 32) {
				stopGame();
			}
		} 
		if(e.keyCode == 82) {
			restartGame();
		}
	});

	$(window).keydown(function(e) {
		if(game_started) {
			keyCheck(e.keyCode);
			switch(e.keyCode) {
				case 37:
					$(".button.left").addClass("jqhover");
				break;
				case 38:
					$(".button.up").addClass("jqhover");
				break;
				case 39:
					$(".button.right").addClass("jqhover");
				break;
				case 40:
					$(".button.down").addClass("jqhover");
				break;
			}
		}
	});

	$(window).keyup(function(e) {
		if(game_started) {
			switch(e.keyCode) {
				case 37:
					$(".button.left").removeClass("jqhover");
				break;
				case 38:
					$(".button.up").removeClass("jqhover");
				break;
				case 39:
					$(".button.right").removeClass("jqhover");
				break;
				case 40:
					$(".button.down").removeClass("jqhover");
				break;
			}
		}
	});
});

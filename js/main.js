$(function() {
	let good = 0;
	let bad = 0;
	let game_started = false;
	let game_speed = 600;
	let timer_block = $(".timer");
	let key_pressed = false;


	key_codes = [37, 38, 39, 40];

	last_key = {
		code: null,
		amount: 0
	};

	startGame = function() {
		console.log("Game Started");
		$(".stats").text("Good: " + good + " / Bad: " + bad);
		var timer_num = 60;
		timer_block.text("60");

		game_timer = setInterval(function() {
		  timer_block.text(--timer_num);
		}, 1000);

		console.log(game_timer);

		end_timer = setTimeout(function() {
			console.log("End game");
			clearInterval(game_timer);
			stopGame();
		}, timer_num * 1000);

		speed = setTimeout(function() {
			game_speed = 160;
		}, 30000);

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
			};

			key_pressed = false; $(".stats").text("Good: " + good + " / Bad: " + bad);
		}, game_speed);
	};

	restartGame = function() {
		clearInterval(timer);
		clearInterval(game_timer);
		clearInterval(end_timer);
		clearTimeout(speed);
		timer_block.text("");
		game_started = false;
		game_speed = 600;
		good = 0;
		bad = 0;
		last_key.code = null;
		last_key.amount = 0;
		$(".key").text("");
		$(".stats").text("Press SPACE to start the game and R to restart");
		console.log("Game Restarted");
	};

	stopGame = function() {
		console.log("Game Ended");
		timer_block.text("");
		clearInterval(timer);
		clearInterval(game_timer);
		clearInterval(end_timer);
		clearTimeout(speed);
		timer_block.text("");
		game_speed = 600;
		last_key.code = null;
		last_key.amount = 0;
		$(".key").text("Game Over");
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
				$(".stats").text("Good: " + good + " / Bad: " + bad);
			}
		}
	};

	$(window).keydown(function(e) {
		if(!game_started) {
			if(e.keyCode == 32) {
				startGame();
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

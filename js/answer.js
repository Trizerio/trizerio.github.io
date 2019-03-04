$(function() {
	let answerer = {
		error: `<div class="animated fadeInUp answer" type="error" style="color: #de6969 !important;">Пожалуйста, введите свой вопрос</div>`,
		yes: `<div class="animated fadeInUp answer"><label>${$('input[type="text"]').val()} — </label>Да</div>`,
		no: `<div class="animated fadeInUp answer" style="color: #de6969 !important;"><label>${$('input[type="text"]').val()} — </label> Нет</div>`,
		count: 0
	}
	sendQuestion = () => {
	  	if($('input[type="text"]').val().length < 1 || !isNaN($('input[type="text"]').val())) {
	  		$('.answer-holder').prepend(answerer.error);
	  	} else {
	  		let answer = ["yes", "no"];
	  		let random = ~~(Math.random() * answer.length);
	  		switch(answer[random]) {
	  			case 0:
	  				$('.answer-holder').prepend(answerer.yes);
	  			break;
	  			case 1:
	  				$('.answer-holder').prepend(answerer.no);
	  			break;
	  		}
	  	}
	}
	$('input[type="text"]').on('keydown', function(e) {
		if(e.which == 13) {
			e.preventDefault();
			sendQuestion();
			$('input[type="text"]').val("");
		}
	});
});

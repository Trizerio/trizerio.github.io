$(function() {
	let answerer = {
		error: `<div class="animated fadeInUp answer" type="error" style="color: #de6969 !important;">Пожалуйста, введите свой вопрос</div>`,
		yes: `<div class="animated fadeInUp answer">Да</div>`,
		no: `<div class="animated fadeInUp answer" style="color: #de6969 !important;">Нет</div>`
	}
	sendQuestion = () => {
	  	if($('input[type="text"]').val().length > 1) {
	  		let answer = [answerer.yes, answerer.no];
	  		var random = ~~(Math.random() * answer.length);
	  		$("#answer-holder").prepend(`<div class="animated fadeInUp answer"><label>${$('input[type="text"]').val()}</label>` + answer[random] + "</div>");
	  	}
	}
	$('input[type="text"]').on('keydown', function(e) {
		if(e.which == 13) {
			e.preventDefault();
			$('.answer[type="error"]').remove();
			$('.answer').remove();
			sendQuestion();
			$('input[type="text"]').val("");
		}
	});
});

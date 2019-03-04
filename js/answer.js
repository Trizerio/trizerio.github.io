$(function() {
	let answerer = {
		error: `<div class="animated fadeInUp answer" type="error" style="color: #de6969 !important;">Пожалуйста, введите свой вопрос</div>`,
		yes: `<div class="animated fadeInUp answer">Да</div>`,
		no: `<div class="animated fadeInUp answer" style="color: #de6969 !important;">Нет</div>`
	}
	sendQuestion = () => {
		var text = $('input[type="text"]').val();
		if(text.toLowerCase().match(/(.*) (ИЛИ|Или|или) (.*)/g)) {
			var words = text.split(/(ИЛИ|Или|или)/);
			words = words.toString().replace('?', '').split(',');
			var random = ~~(Math.random() * words.length);
			$("#answer-holder").prepend(`<div class="animated fadeInUp answer"><label>${words[0]} или ${words[1]}?</label><div class="animated fadeInUp answer">` + words[random] + "</div>"); return;
		}
	  	if($('input[type="text"]').val().length > 1) {
	  		var answer = [answerer.yes, answerer.no];
	  		var random = ~~(Math.random() * answer.length);
	  		$("#answer-holder").prepend(`<div class="animated fadeInUp answer"><label>${$('input[type="text"]').val()}</label>` + answer[random] + "</div>");
	  	} else {
	  		$('#answer-holder').prepend(answerer.error);
	  	}
	}
	$('input[type="text"]').on('keydown', (e) => {
		if(e.which == 13) {
			e.preventDefault();
			$('.answer[type="error"]').remove();
			$('.answer').remove();
			sendQuestion();
			$('input[type="text"]').val("");
		}
	});
});

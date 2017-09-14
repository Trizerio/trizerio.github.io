$(function() {

  var answer_count = 0;

  $('button.btn').click(function() {
    var answer = ['Да', 'Нет'];
    var random = Math.floor(Math.random() * answer.length);

    if($('input[type="text"]').val().length < 1 || !isNaN($('input[type="text"]').val())) {
      $('.answer').remove();
      $('#answer-holder').prepend(`<div class="animated fadeInUp answer" type="error" style="color: #de6969 !important;">Пожалуйста, введите свой вопрос</div>`);
    } else {
      $('.answer[type="error"]').remove();
      if(answer_count > 0) {
        $('.answer').remove();
        if(answer[random] == 'Да') {
          $('#answer-holder').prepend(`<div class="animated fadeInUp answer">Да</div>`);
        } else {
          $('#answer-holder').prepend(`<div class="animated fadeInUp answer" style="color: #de6969 !important;">Нет</div>`);
        }
        answer_count +=1;
      }
      if(answer_count < 1) {
        if(answer[random] == 'Нет') {
          $('#answer-holder').prepend(`<div class="animated fadeInUp answer" style="color: #de6969 !important;">Нет</div>`);
        } else {
          $('#answer-holder').prepend(`<div class="animated fadeInUp answer">Да</div>`);
        }
        answer_count += 1;
      }
    }
  });
});

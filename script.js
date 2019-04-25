$(function(){
  //この中にjQueryを書く

  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $answer.slideUp();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('+');

    } else {
      $answer.addClass('open');
      // slideDownメソッドを用いて、$answerを表示してください
      $answer.slideDown();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('-');

    }
  });


    $('#form').submit(function(e){


      var selectValue1 = $('#select-form1').val();
      var selectValue2 = $('#select-form2').val();

      var textValue1 = $('#text-form1').val();
      var textValue2 = $('#text-form2').val();
      var textValue3 = $('#text-form3').val();


      
      if($('#text-form1').val() == ""){
        alert('名前入力は必須です。');
        return false;
      }
      if($('#text-form2').val() == ""){
        alert('メールアドレスは必須です。');
        return false;
      }
      if($('#text-form3').val() == ""){
        alert('お問い合わせ内容は必須です。');
        return false;
      }

    });

    });

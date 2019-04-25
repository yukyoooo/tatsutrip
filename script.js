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
      }elseif($('#text-form2').val() == ""){
        alert('メールアドレスは必須です。');
        return false;
      }elseif($('#text-form3').val() == ""){
        alert('お問い合わせ内容は必須です。');
        return false;
      }else{




      // 「CDO.Message」オブジェクト生成
      var cdoMsg = new ActiveXObject("CDO.Message");
      // 送信元設定
      cdoMsg.From = textValue2;
      // 送信先設定
      cdoMsg.To = "mrym12000@gmail.com";
      // 題名設定
      cdoMsg.Subject = "Tatsutripお問い合わせ";
      // 本文設定
      cdoMsg.Textbody = textValue1 + textValue2 + selectValue1 + selectValue2 +textValue3 ;

      // CDOオブジェクトコンフィグ用名前空間
      var namespace = "http://schemas.microsoft.com/cdo/configuration/";
      // 送信にネットワークを利用、「2」(cdoSendUsingPort)を設定
      cdoMsg.Configuration.Fields.Item(namespace + "sendusing") = 2;
      // SMTPサーバ設定
      cdoMsg.Configuration.Fields.Item(namespace + "smtpserver") = "smtp.gmail.com";
      // SMTPポート設定
      cdoMsg.Configuration.Fields.Item(namespace + "smtpserverport") = 465;
      // Basic認証、「1」(cdoBasic)を設定
      cdoMsg.Configuration.Fields.Item(namespace + "smtpauthenticate") = 1;
      // 認証ユーザ設定
      cdoMsg.Configuration.Fields.Item(namespace + "sendusername") = "mrym12000@gmail.com";
      // 認証パスワード設定
      cdoMsg.Configuration.Fields.Item(namespace + "sendpassword") = "password";
      // SSLを使用
      cdoMsg.Configuration.Fields.Item(namespace + "smtpusessl") = true;

      // コンフィグアップデート
      cdoMsg.Configuration.Fields.Update();

      // メール送信
      cdoMsg.Send();

      // 後処理
      cdoMsg = null;



    }

    });

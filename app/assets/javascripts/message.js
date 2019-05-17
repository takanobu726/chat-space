$(function(){
  function buildHTML(message){
    var image = (message.image.url) ? `<img class= "lower-message__image" src=${message.image.url} >` : '' ;
    var content = (message.content) ? `${message.content}` : '' ;
    var html = `<div class="message" data-message-id= ${message.id}>
                  <div class="message-info">
                    <p class="message-user-name">
                      ${message.user_name}
                    </p>
                    <p class="message-date">
                      ${message.time}
                    </p>
                  </div>
                  <div class="message-text">
                    <p class="lower-message__content">
                      ${content}
                    </p>
                      ${image}
                  </div>
                </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $('.new-message__submit-btn').removeAttr('data-disable-with');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('form')[0].reset()
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $('new-message__submit-btn').prop('disabled', false);
    })
    .fail(function(){
      alert('メッセージを入力してください');
    })
  })

// ここから自動更新
  var reloadMessages = function() {

     var last_message_id = $('.message:last').data('message-id')
     var url = "api/messages";

    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',
      data: {id: last_message_id},
    })

    .done(function(data) {
       var insertHTML = ''
       data.forEach(function (message) {
        if (message.id > last_message_id) {
          insertHTML += buildHTML(message);
          $('.messages').append(insertHTML);
          $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
        }
      });
    })

    .fail(function(messages) {
      alert('自動更新に失敗しました');
    });
  };

  if ( window.location.href.match(/\/groups\/\d+\/messages/)){
  setInterval(reloadMessages, 5000);
 }

});

$(function(){
  function buildHTML(message){
    var image = (message.image.url) ? `<img class= "lower-message__image" src=${message.image.url} >` : '' ;
    var content = (message.content) ? `${message.content}` : '' ;
    var html = `<div class="message">
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
});

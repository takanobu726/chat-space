$(function(){

  var member_list = $('.chat-group-user__name');
  var search_list = $('#user-search-result');

  function appendUserToList(user) {
    var html =
         `<div class="chat-group-user clearfix">
            <p class="chat-group-user__name">${ user.name }</p>
            <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name=${ user.name }>追加</a>
          </div>`
    return html;
  }

  function appendNoUserName(no_user) {
      var html = `<div class="chat-group-user clearfix">
                    <p class="chat-group-user__name">${ no_user }</p>
                  </div>`
      search_list.append(html);

  }

  $('#user-search-field').on('keyup' ,function(){
    var input = $('#user-search-field').val()

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(users){
      $('.user-search-result').empty();
      if (users.length !== 0) {
        users.forEach(function(user){
        search_list.append(appendUserToList(user));
        });
      } else {
        appendNoUserName('一致する名前はありません');
      }
    })
    .fail(function(){
      alert('ユーザー検索に失敗しました');
    })
    if (input.length === 0) {
      $('#user-search-result').remove();
    }
  });

  function appendUserToGroup(name, user_id){
    var html =
              `<div class="chat-group-user clearfix js-chat-member" id="chat-group-user-8">
                  <input name="group[user_ids][]" type="hidden" value="${ user_id }">
                  <p class="chat-group-user__name">${ name }</p>
                  <a class="user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn">削除</a>
               </div>`
      member_list.append(html);
  }

  $(document).on('click', '.user-search-add', function() {
    var name = $(this).data('user-name')
    var user_id = $(this).data('user-id')
    appendUserToGroup(name, user_id)
    $(this).parent().remove()
  });

  $(document).on('click', '.user-search-remove', function(){
    $(this).parent().remove()
  })
});

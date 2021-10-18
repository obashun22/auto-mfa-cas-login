chrome.tabs.query({}, () => {
  // username表示
  chrome.storage.local.get('acl_username', ({ acl_username = "" }) => {
    const username = acl_username;
    $('#username').val(username);
  });
  // password表示
  chrome.storage.local.get('acl_password', ({ acl_password = "" }) => {
    const password = acl_password;
    $('#password').val(acl_password);
  });

  // 保存処理
  $('#submit').on('click', () => {
    const username = $('#username').val();
    const password = $('#password').val();
    if (username && password) {
      chrome.storage.local.set({"acl_username": username}, () => {});
      chrome.storage.local.set({"acl_password": password}, () => {});
      $('#message').html('<p class="has-text-success">Saved Successfully!</p>');
    } else {
      $('#message').html('<p class="has-text-danger">Please fill in all fields.</p>');
    }
  });
});
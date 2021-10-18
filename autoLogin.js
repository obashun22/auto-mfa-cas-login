$(() => {
  chrome.storage.local.get('acl_username', ({ acl_username = "" }) => {
    const username = acl_username;
    $('#username').val(username);
    chrome.storage.local.get('acl_password', ({ acl_password = "" }) => {
      const password = acl_password;
      $('#password').val(password);
      // ログインボタン押下
      $('input[name=submit]').click();
    })
  })
});

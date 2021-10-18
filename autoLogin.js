$(() => {
  // 未ログインのNUCTにログインした場合の処理
  if (location.href.match(/https:\/\/ct.nagoya-u.ac.jp\/portal/)) {
    if ($('#loginLink1').length != 0) {
      // CASにリダイレクト
      location.href = "https://auth.nagoya-u.ac.jp/cas/login?service=https%3A%2F%2Fct.nagoya-u.ac.jp%2Fsakai-login-tool%2Fcontainer";
    }
  }
  // CAS認証ページの場合の処理
  if (location.href.match(/https:\/\/auth.nagoya-u.ac.jp\/cas\/login/)) {
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
  }
});

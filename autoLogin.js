$(() => {
  // 未ログインのNUCTにログインした場合の処理
  if (location.href.match(/https:\/\/ct.nagoya-u.ac.jp\/portal/)) {
    if ($('#loginLinks').find('img').length) {
      // CASにリダイレクト
      location.href = "https://auth-mfa.nagoya-u.ac.jp/cas/login?service=https%3A%2F%2Fct.nagoya-u.ac.jp%2Fsakai-login-tool%2Fcontainer";
    }
  }
  // CAS認証ページの場合の処理
  if (location.href.match(/https:\/\/auth-mfa.nagoya-u.ac.jp\/cas\/login/)) {
    chrome.storage.local.get('acl_username', ({ acl_username = "" }) => {
      const username = acl_username;
      $('#username').val(username);
      chrome.storage.local.get('acl_password', ({ acl_password = "" }) => {
        const password = acl_password;
        $('#password').val(password);
        const submit_btn = $('input[name="submit"]');
        submit_btn.removeAttr('disabled');
        submit_btn.click();
      });
      chrome.storage.local.get('acl_seed', ({ acl_seed = "" }) => {
        const totp = new TOTP(acl_seed);
        const code = totp.genOTP();
        $('#token').val(code);
        $('input[name="_eventId_submit"]').click();
      });
    })
  }
});

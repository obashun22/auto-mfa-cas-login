# Auto CAS Login
## なにこれ
CAS認証と多要素認証のログインを自動化するChrome拡張。名古屋大学が提供するCASのみに対応。  

## 使い方
`Auto CAS Login`に予めログイン情報を設定しておくことでCAS認証をログイン操作無しで自動でログインできる。  
厳密にはログイン情報の入力とログインボタンの押下を自動化している。
1. Chromeのウィンドウ右上にある拡張の一覧タブから`Auto CAS Login`を開く
1. ポップアップ上の入力欄から名大IDとパスワード、シード値を設定する  
シード値が不明な場合は、[シード管理ページ](https://auth-mfa.nagoya-u.ac.jp/gauth-manager/)（学内限定）から再発行してください。再発行した場合、Authenticatorアプリのシード値も変更する必要があるので注意してください。
1. CAS認証ページを開くと自動でログインしてくれる

## 導入
1. リポジトリをクローン  
`git clone https://github.com/obashun22/auto-mfa-cas-login.git`

1. Chromeの拡張機能(`chrome://extensions/`)を開く
1. デベロッパーモードに切り替える
1. `パッケージ化されていない拡張機能を読み込む`から先にクローンしたリポジトリを選択する

## 著作権
Copyright (c) 2022 Shunsuke Oba
Released under the MIT license
https://opensource.org/licenses/mit-license.php

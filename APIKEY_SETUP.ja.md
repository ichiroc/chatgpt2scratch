# APIキーの取得方法

1. [OpenAI](https://openai.com/)のサイトを開きます。

![chatgpt](images/openai.png)

2. サイトの一番下、フッターから「API Login」を選ぶと、ログイン画面が開きます。

![chatgpt](images/api-login.png)
![chatgpt](images/login.png)

3. 「アカウントをお持ちではありませんか？」の横「サインアップ」リンクをクリックします。メールアドレスと設定したいパスワードを入力して、「続ける」をクリックします。

![signup](images/signup.png)

4. 「メールを検証する」という画面になります。3.で設定したメールアドレスに「ChatGPT - メールアドレスの確認」というタイトルでメールが送られてくるので、メール文中の「メールアドレスの確認」をクリックします。

![verify-email](images/verify-email.png)

5. 「ご自身について教えてください」という画面が開くので、氏名と生年月日を入力します。規約とプライバシーポリシーに同意できれば、「同意する」をクリックします。

![onboarding](images/onboarding.png)

6. ChatGPTかAPIを選ぶ画面になるので、APIの方を選びます。

![start](images/start.png)

7. 左メニューより「API keys」を選びます。

![apikeys](images/apikeys.png)

8. APIキーを作成するには、電話番号の認証が必要です。「Start verification」のボタンをクリックします。

![start-verification](images/start-verification.png)

9. 電話番号を入力します。国番号の+81のあとには、電話番号の最初の0を抜いた番号を入力します。

![verify-phone-number](images/verify-phone-number.png)

10. 入力した番号あてにSMS(ショートメッセージ)が送られてきます。送られてきた6桁のコードを入力して電話番号を認証します。

![enter-code](images/enter-code.png)

11. 電話番号が認証されるとsecret key(APIキー)を作成できるようになります。Nameの欄には、複数のAPIキーを使うことになったときに区別がつくよう適切な名前をつけておきます。例えばChatGPT2Scratchと名付け、「Create secret key」をクリックします。

![key-name](images/key-name.png)

12. secret key(APIキー)が発行されるので内容を控えておきます。キーの内容はこれ以降表示されないので、どこかにコピーする前に画面を閉じてしまわないように注意しましょう。

![secret-key](images/secret-key.png)

13. 以上の手順でAPIキーを発行することができます。右上の歯車アイコン(Settings)のあとBillingを選ぶと利用残高が表示されます。表示されている金額分だけ使用することができます。

![credit](images/credit.png)

14. Payment methodsタブからクレジットカード情報を登録した上で、OverviewタブのAdd to credit balanceボタンを押すと残高を増やすことができます。

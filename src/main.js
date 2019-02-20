import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import "./assets/scss/app.scss";

Vue.use(Buefy);

import Amplify, * as AmplifyModules from "aws-amplify";
import { I18n } from "aws-amplify";
import { AmplifyPlugin } from "aws-amplify-vue";
import awsmobile from "./aws-exports";

console.log(awsmobile.aws_user_pools_id);

Amplify.configure(awsmobile);

Vue.use(AmplifyPlugin, AmplifyModules);

const dict = {
  ja: {
    "User already exists": "既に登録されています",
    "User does not exist.": "ユーザー名またはパスワードが正しくありません",
    "User is not confirmed.": "このユーザーはまだ確認されていません",
    "Incorrect username or password.":
      "ユーザー名またはパスワードが正しくありません",
    "Attempt limit exceeded, please try after some time.":
      "しばらく待ってからやり直してください",
    "Password did not conform with policy: Password not long enough":
      "パスワードが短すぎます",
    "Invalid verification code provided, please try again.":
      "コードが正しくありません",
    "Invalid session for the user, session is expired.": "セッションが無効です",
    "Password attempts exceeded": "しばらく待ってからやり直してください", // "パスワードを一定回数以上間違えたため、アカウントを無効にしました",
    "Account recovery requires verified contact information":
      "アカウントを復旧するには連絡先の確認が必要です",
    "Cannot reset password for the user as there is no registered/verified email or phone_number":
      "このユーザーは確認されていないため、パスワードをリセットできません",
    "Back to Sign In": "サインイン画面へ戻る",
    "Change Password": "パスワード変更",
    Change: "変更",
    Code: "確認コード",
    "Code cannot be empty": "コードを入力してください",
    "Confirmation Code": "確認コード",
    "Confirm a Code": "コードを確認する",
    "Confirm Sign In": "確認",
    "Confirm Sign Up": "サインアップ",
    Confirm: "確認",
    "Create account": "アカウントを作成する",
    Email: "メールアドレス",
    "Enter your username": "メールアドレスを入力してください",
    "Enter your password": "パスワードを入力してください",
    "Forgot Password": "パスワードをお忘れの場合",
    "Forget your password? ": "パスワードをお忘れの場合",
    "Have an account? ": "アカウントをお持ちの場合",
    "Loading...": "ロード中...",
    "Lost your code? ": "コードが見当たらない場合",
    "New Password": "新しいパスワード",
    "No account? ": "アカウントをお持ちでない場合",
    "No MFA": "MFAなし",
    Password: "パスワード",
    "Password cannot be empty": "パスワードを入力してください",
    "Phone Number": "電話番号",
    "Pick a File": "ファイルを選択する",
    "Resend a Code": "確認コードを再送する",
    "Resend Code": "確認コードを再送する",
    "Reset password": "パスワードをリセットする",
    "Reset your password": "パスワードをリセットする",
    "Send Code": "確認コードを送信する",
    "Select MFA Type": "MFAタイプの選択",
    "Select your preferred MFA Type": "MFAタイプを選択してください",
    "Sign In Account": "サインイン",
    "Sign In": "サインイン",
    "Sign Out": "サインアウト",
    "Sign Up Account": "サインアップ",
    "Sign Up": "サインアップ",
    Skip: "スキップする",
    Submit: "保存",
    Username: "メールアドレス",
    "Verify Contact": "確認",
    Verify: "確認する"
  }
};

I18n.putVocabularies(dict);
I18n.setLanguage("ja");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

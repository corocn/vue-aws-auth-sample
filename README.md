# vue-aws-auth-sample

サーバーレスで認証付きのSPAを作成したサンプルです。

![vue-aws](https://user-images.githubusercontent.com/1762675/34356925-a2672a5e-ea85-11e7-8c07-cb6807eb4d88.png)

AWS Amplifyを試してみたかったので、作りました。

試すにはAWS側（主にCognitoやAPI Gateway）の設定が必要です。

## Frontend
  
  - Vue, Vuex, VueRouter
  - [AWS Amplify](https://github.com/aws/aws-amplify)
  - vue-cli initで初期構築

## Backend (AWS)

  - Cognito
  - API Gateway
  - S3

## Implementation（試したこと）

 - 認証機構
   - ログイン
   - ログアウト
   - ユーザー登録
   - ユーザー登録確認（検証コード入力） 
 - 認証状態からのアクション
   - 公開APIの呼び出し
   - 非公開APIの呼び出し（要認証なAPI）
   - S3でusername以下のディレクトリへのファイル配置

## Setup

  - src/lib/aws_config.js にCongnitoとS3の設定を記述
  - `yarn dev`

## License

[MIT](https://opensource.org/licenses/MIT)

export default {
  Auth: {
    identityPoolId: 'ap-northeast-1:XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX', // Amazon Cognito Identity Pool ID
    region: 'ap-northeast-1', // Amazon Cognito Region
    userPoolId: 'ap-northeast-1_XXXXXXXXX', // Amazon Cognito User Pool ID
    userPoolWebClientId: 'XXXXXXXXXXXXXXXXXXXXXXXXXX' // Amazon Cognito Web Client ID
  },
  API: {
    endpoints: [
      {
        name: 'App',
        endpoint: 'https://bpe5pb79c7.execute-api.ap-northeast-1.amazonaws.com/v1' // API Gateway Endpoint URL
      }
    ]
  },
  Storage: {
    bucket: 'YOUR_BUCKET_NAME', // S3 Bucket Name
    region: 'ap-northeast-1',
    level: 'private'
  }
}

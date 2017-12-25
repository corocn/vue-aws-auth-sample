export default {
  Auth: {
    identityPoolId: 'ap-northeast-1:b6961bab-f191-43d4-abc1-f22d3ecef58a', // REQUIRED - Amazon Cognito Identity Pool ID
    region: 'ap-northeast-1', // REQUIRED - Amazon Cognito Region
    userPoolId: 'ap-northeast-1_0AnXHRtFn', // OPTIONAL - Amazon Cognito User Pool ID
    userPoolWebClientId: '7nv7ghtgeau6b87appcbcnds5i' // OPTIONAL - Amazon Cognito Web Client ID
  },
  API: {
    endpoints: [
      {
        name: 'AmplifyTest',
        endpoint: 'https://bpe5pb79c7.execute-api.ap-northeast-1.amazonaws.com/v1'
      }
    ]
  }
}

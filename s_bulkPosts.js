
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: 'samlabs',
  applicationName: 'adlersuit-bulkpost',
  appUid: 'tbcXDRkhmKkNnKTzjT',
  orgUid: 'MtkGWCL2hbJ5jDf2NH',
  deploymentUid: '47c278f5-aac1-4729-bccc-17adeaa0c129',
  serviceName: 'bulkposts',
  shouldLogMeta: true,
  shouldCompressLogs: true,
  disableAwsSpans: false,
  disableHttpSpans: false,
  stageName: 'dev',
  serverlessPlatformStage: 'prod',
  devModeEnabled: false,
  accessKey: null,
  pluginVersion: '3.6.12',
  disableFrameworksInstrumentation: false
});

const handlerWrapperArgs = { functionName: 'bulkposts-dev-bulkPosts', timeout: 60 };

try {
  const userHandler = require('./api/bulkposts.js');
  module.exports.handler = serverlessSDK.handler(userHandler.submit, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}
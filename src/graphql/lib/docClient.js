const AWS = require('aws-sdk');

const localOptions = {
  region: 'localhost',
  endpoint: 'http://localhost:8000',
};

const isOffline = function() {
  // Depends on serverless-offline plugin which adds IS_OFFLINE to process.env when running offline
  return process.env.IS_OFFLINE;
};

const dynamodb = {
  doc: isOffline()
    ? new AWS.DynamoDB.DocumentClient(localOptions)
    : new AWS.DynamoDB.DocumentClient(),
  raw: isOffline() ? new AWS.DynamoDB(localOptions) : new AWS.DynamoDB(),
};

export default dynamodb.doc;

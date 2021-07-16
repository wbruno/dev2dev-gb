// config/dynamodb.js

const AWS = require('aws-sdk')
AWS.config.update({
    accessKeyId: 'dummy',
    secretAccessKey: 'dummy',
    region: 'sa-east-1',
    endpoint: 'http://localhost:8000',
})
const dynamodb = new AWS.DynamoDB.DocumentClient()

module.exports = {
    dynamodb
}

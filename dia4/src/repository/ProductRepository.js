const { dynamodb } = require('../config/dynamodb')
const ProductRepository = {
    list(businessUnit = 'BOT') {
        const params = {
            TableName: 'gb-product',
            IndexName: 'xie_businessUnit_sku',
            KeyConditionExpression: `businesUnit = :pvalue`,
            ExpressionAttributeValues: {
                ':pvalue': `${businessUnit}`
            }
        }
        return dynamodb
            .query(params)
            .promise()
    },

    find(businessUnit, sku) {
        const params = {
            TableName: 'gb-product',
            Key: { 'businessUnit#sku': `${businessUnit}#${sku}` }
        }
        return dynamodb
            .get(params)
            .promise()
            .then(result => {
                return result.Item
            })
    },

    create(payload) {
        const data = {
            'businessUnit#sku': `${payload.businessUnit}#${payload.sku}`,
            ...payload
        }
        const putParams = {
            TableName: 'gb-product',
            Item: data,
            ReturnValues: 'ALL_OLD'
        }
        return dynamodb
            .put(putParams)
            .promise()
            .then(result => {
                console.log('result', result)
                return result
            })
            .catch(err => {
                console.log('err', err)
                throw err
            })
    }
}

module.exports = ProductRepository
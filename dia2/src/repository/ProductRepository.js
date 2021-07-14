const { dynamodb } = require('../config/dynamodb')
const ProductRepository = {
    list() {
        return dynamodb
            .get({})
            .promise()
    },
    async find(sku) {
        return db.find(p => p.sku === sku)
    }
}

module.exports = ProductRepository
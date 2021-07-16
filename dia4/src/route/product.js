// src/route/Product.js

const schema = require('../schema/Product');
const controller = require('../controller/ProductController');
const Product = require('../schema/Product');

const route = {
    create: {
        handler: controller.create,
        schema: {
            body: schema
        }
    }
}

module.exports = route
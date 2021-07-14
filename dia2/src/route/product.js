const schema = require('../schema/Product');
const controller = require('../controller/ProductController');

const route = {
    create: {
        handler: controller.create,
        schema: {
            body: schema
        }
    }
}

module.exports = route
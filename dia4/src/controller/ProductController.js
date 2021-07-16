const repository = require('../repository/ProductRepository')
const createError = require('http-errors')

const ProductController = {
    async list(request, reply) {
        const result = await repository.list()
        reply.send({ items: result })
    },
    async bySku(request, reply) {
        const result = await repository.find('BOT', request.params.sku)
        if (!result) {
            throw new createError.NotFound('product not found')
        }
        reply.send(result)
    },
    create(request, reply) {
        reply.status(201)
        return repository.create(request.body)
    },
    update(request, reply) {
        
    },
    delete(request, reply) {
        reply.status(204)
    }
}

module.exports = ProductController
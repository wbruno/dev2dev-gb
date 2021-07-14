const Product = {
    type: 'object',
    required: ['sku', 'name'],
    properties: {
        sku: { type: 'string' },
        name: { type: 'string' },
        inventory: { 
            type: 'object',
            properties: {
                quantity: { type: 'number' }
            }
        }
    }
}

module.exports = Product
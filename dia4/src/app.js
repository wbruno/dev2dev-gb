// src/app.js

const fastify = require('fastify');
const app = fastify();
const MainController = require('./controller/MainController')
const ProductController = require('./controller/ProductController')
const route = require('./route/product')

app.get('/', MainController.index)

app.get('/products', ProductController.list)
app.get('/products/:sku', ProductController.bySku)
app.post('/products', route.create)
app.put('/products/:sku', ProductController.update)
app.delete('/products/:sku', ProductController.delete)

module.exports = app;

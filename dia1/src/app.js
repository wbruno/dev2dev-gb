const fastify = require('fastify')
const app = fastify()
const MainController = require('./controller/MainController')

app.get('/', (req, reply, next) => {
    const User = new Repository()

})

module.exports = app

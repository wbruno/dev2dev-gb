const MainController = {
    index(request, reply) {
        return reply.send('oi');
    }
}

module.exports = MainController
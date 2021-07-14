const MainController = {
    index(request, reply, next) {
        reply.send('oi !!!')
    },
    notFound(request, reply, next) {
        
    },
    handleErrors(request, reply, next) {

    }
}

module.exports = MainController
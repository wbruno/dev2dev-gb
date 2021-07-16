// index.js

const cluster = require('cluster')
const numCPUs = require('os').cpus().length
const app = require('./src/app')

if (cluster.isMaster) {
    for (let i = 0; i < numCPUs; i++) {
        const worker = cluster.fork()

        worker.on('exit', (m) => {
            cluster.fork()
        })
    }
    
} else {
    app.listen(3000, () => {
        console.log('server started')
    })
}
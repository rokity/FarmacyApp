const fastify = require('fastify')

async function routes(fastify, options) {
    fastify.get('/RegistrazionePaziente', async (request, reply) => {
        console.log(request.body)
        console.log(request.query)
        console.log(request.params)
        console.log(request.headers)
        console.log(request.raw)
        console.log(request.id)
        console.log(request.ip)
        console.log(request.ips)
        console.log(request.hostname)
        console.log(request.protocol)
        request.log.info('some info')
        return { hello: 'registrazione' }
    })
}

module.exports = routes
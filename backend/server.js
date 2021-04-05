'use strict'

module.exports = async function (fastify, opts) {
    fastify.register(require('./api/autenticazione/registrazione'))
    fastify.register(require('./api/autenticazione/login'))
}
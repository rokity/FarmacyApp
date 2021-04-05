const fastify = require('fastify')

async function routes (fastify, options) {
    fastify.get('/login', async (request, reply) => {
      return { hello: 'login' }
    })
  }
  
  module.exports = routes
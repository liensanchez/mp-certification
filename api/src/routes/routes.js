const { Router } = require('express')
const router = Router()
const buyRoutes = require('./buy.routes')


function routesApi(app) {

  app.use('/api', router)

  router.use('/buy', buyRoutes)
}

module.exports = routesApi;

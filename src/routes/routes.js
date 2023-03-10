const { Router } = require('express')
const router = Router()


function routesApi(app) {

  app.use('/api/', router)


}

module.exports = routesApi;

const { Router } = require('express')
const { mercadopagoconfig } = require('../libs/mercadopago/mpconfig')
mercadopagoconfig()
const router = Router()

router.post('/', async (req, res) => {

  try {

    const body = req.body

    const response = await service.buyOne(body)

    res.json(response)
  }catch (error) {
    res.json(error)
  }

})

module.exports = router;
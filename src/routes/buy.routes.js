const { Router } = require('express')
const { mercadopagoconfig } = require('../libs/mercadopago/mpconfig')
const BuyService = require('../service/buy.service')


mercadopagoconfig()
const router = Router()
const service = new BuyService()

router.post('/', async (req, res) => {

  try {

    const lastName = req.body;
    console.log({ lastName });
    res.json(response)
  }catch (error) {
    res.json(error)
  }

})

router.get('/success', async (req, res) => {

  try {

    const response = 'Gracias por tu compra'

    res.json(response)
  }catch (error) {
    res.json(error)
  }

})

router.get('/failure', async (req, res) => {

  try {

    const response = 'Hubo un error en tu compra'

    res.json(response)
  }catch (error) {
    res.json(error)
  }

})

router.get('/pendig', async (req, res) => {

  try {

    const response = 'Tu pago en efectivo esta pendiente'

    res.json(response)
  }catch (error) {
    res.json(error)
  }

})

module.exports = router;
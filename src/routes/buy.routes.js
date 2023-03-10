const { Router } = require('express')
const router = Router()

router.post('/', async (req, res) => {

  try {
    const response = await service.create(req.body)

    res.json(response)
  }catch (error) {
    res.json(error)
  }

})

module.exports = router;
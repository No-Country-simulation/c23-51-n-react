const express = require('express')
const router = express.Router()
const SuscriptionController = require('../controllers/SuscriptionController.js')
const SuscriptionModel = require('../models/SuscriptionModel.js')
const { connection: pool } = require('../config/db.js')

const suscriptionModel = new SuscriptionModel(pool)
const suscriptionController = new SuscriptionController(suscriptionModel)
router
  .post('/suscriptions',
    suscriptionController.createSuscription.bind(suscriptionController)
  )

module.exports = router

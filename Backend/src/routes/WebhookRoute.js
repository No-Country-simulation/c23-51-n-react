const express = require('express')
const router = express.Router()
const WebHookController = require('../controllers/webhookController.js')
const SuscriptionModel = require('../models/SuscriptionModel.js')

const { connection: pool } = require('../config/db.js')

const suscriptionModel = new SuscriptionModel(pool)
const webHookController = new WebHookController(suscriptionModel)

router
  .post('/webhook/paypal',
    webHookController.handleWebHook.bind(webHookController)
  )

module.exports = router

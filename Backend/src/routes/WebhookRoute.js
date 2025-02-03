const express = require('express')
const router = express.Router()
const AuthMiddleware = require('../middlewares/authMiddleware.js')
const UserModel = require('../models/UserModel.js')
const WebHookController = require('../controllers/webhookController.js')
const SuscriptionModel = require('../models/SuscriptionModel.js')
const { connection: pool } = require('../config/db.js')

const userModel = new UserModel(pool)
const suscriptionModel = new SuscriptionModel(pool)
const webHookController = new WebHookController(suscriptionModel)
const authMiddleware = new AuthMiddleware(process.env.SECRET_KEY, userModel)

router
  .post('/webhook/paypal',
    authMiddleware.validateToken.bind(authMiddleware),
    webHookController.handleWebHook.bind(webHookController)
  )

module.exports = router

const express = require('express')
const router = express.Router()
const AuthMiddleware = require('../middlewares/authMiddleware.js')
const UserModel = require('../models/UserModel.js')
const SuscriptionController = require('../controllers/SuscriptionController.js')
const SuscriptionModel = require('../models/SuscriptionModel.js')
const { connection: pool } = require('../config/db.js')

const suscriptionModel = new SuscriptionModel(pool)
const userModel = new UserModel(pool)
const suscriptionController = new SuscriptionController(suscriptionModel)
const authMiddleware = new AuthMiddleware(process.env.SECRET_KEY, userModel)

router
  .post('/suscriptions',
    authMiddleware.validateToken.bind(authMiddleware),
    suscriptionController.createSuscription.bind(suscriptionController)
  )

module.exports = router

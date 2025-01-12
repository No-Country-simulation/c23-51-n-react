const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController.js')
const UserModel = require('../models/UserModel.js')
const { connection: pool } = require('../config/db.js')
const { validateCreateUser } = require('../validations/userValidations.js')
const rateLimit = require('express-rate-limit')

const userCreationLimiter = rateLimit({
  windowMs: 10000, // Ventana de tiempo de 15 minutos
  max: 10, // Máximo de 10 solicitudes por IP
  message: { error: 'Demasiadas solicitudes, intenta más tarde.' }
})

const userModel = new UserModel(pool)
const userController = new UserController(userModel)
router
  .post('/auth/register', userCreationLimiter, validateCreateUser, userController.createUser.bind(userController))

module.exports = router

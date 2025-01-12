const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController.js')
const UserModel = require('../models/UserModel.js')
const { connection: pool } = require('../config/db.js')
const { validateCreateUser, validateLoginUser } = require('../validations/userValidations.js')

const userModel = new UserModel(pool)
const userController = new UserController(userModel)
router
  .post('/auth/register',
    validateCreateUser,
    userController.createUser.bind(userController)
  )
  .post('/auth/login',
    validateLoginUser,
    userController.loginUser.bind(userController)
  )

module.exports = router

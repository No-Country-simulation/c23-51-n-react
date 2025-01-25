const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController.js')
const UserModel = require('../models/UserModel.js')
const AuthMiddleware = require('../middlewares/authMiddleware.js')
const { connection: pool } = require('../config/db.js')
const { validateCreateUser, validateLoginUser, validCreateUserProfile } = require('../validations/userValidations.js')

const userModel = new UserModel(pool)
const userController = new UserController(userModel)
const authMiddleware = new AuthMiddleware(process.env.SECRET_KEY, userModel)
router
  .post('/auth/register',
    validateCreateUser,
    userController.createUser.bind(userController)
  )
  .post('/auth/complete-profile',
    validCreateUserProfile,
    authMiddleware.validateToken.bind(authMiddleware),
    userController.createProfileUser.bind(userController)
  )
  .post('/auth/login',
    validateLoginUser,
    userController.loginUser.bind(userController)
  )

module.exports = router

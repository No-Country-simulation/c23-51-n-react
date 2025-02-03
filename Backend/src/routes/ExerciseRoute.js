const express = require('express')
const router = express.Router()
const AuthMiddleware = require('../middlewares/authMiddleware.js')
const UserModel = require('../models/UserModel.js')
const ExerciseController = require('../controllers/ExerciseController.js')
const ExerciseModel = require('../models/ExerciseModel.js')
const { connection: pool } = require('../config/db.js')
const { validateCreateExercise } = require('../validations/exerciseValidations.js')

const exerciseModel = new ExerciseModel(pool)
const userModel = new UserModel(pool)
const exerciseController = new ExerciseController(exerciseModel)
const authMiddleware = new AuthMiddleware(process.env.SECRET_KEY, userModel)

router
  .get('/exercises',
    authMiddleware.validateToken.bind(authMiddleware),
    exerciseController.getAllExercises.bind(exerciseController))
  .post('/exercises',
    validateCreateExercise,
    authMiddleware.validateToken.bind(authMiddleware),
    exerciseController.createExercise.bind(exerciseController)
  )

module.exports = router

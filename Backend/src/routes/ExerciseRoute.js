const express = require('express')
const router = express.Router()
const ExerciseController = require('../controllers/ExerciseController.js')
const ExerciseModel = require('../models/ExerciseModel.js')
const { connection: pool } = require('../config/db.js')
const { validateCreateExercise } = require('../validations/exerciseValidations.js')

const exerciseModel = new ExerciseModel(pool)
const exerciseController = new ExerciseController(exerciseModel)
router
  .post('/exercises',
    validateCreateExercise,
    exerciseController.createExercise.bind(exerciseController)
  )

module.exports = router

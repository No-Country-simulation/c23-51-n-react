const express = require('express')
const router = express.Router()
const RoutineController = require('../controllers/RoutineController.js')
const RoutineModel = require('../models/RoutineModel.js')
const { connection: pool } = require('../config/db.js')
// const { validateCreate } = require('../validations/exerciseValidations.js')

const routineModel = new RoutineModel(pool)
const routineController = new RoutineController(routineModel)
router
  .get('/routines',
    routineController.getAllRoutines.bind(routineController))
  .get('/routines/:id',
    routineController.getAllRoutinesByid.bind(routineController))
  // .post('/exercises',
  //   validateCreate,
  //   exerciseController.create.bind(exerciseController)
  // )

module.exports = router

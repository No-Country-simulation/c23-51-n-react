const express = require('express')
const router = express.Router()

const AuthMiddleware = require('../middlewares/authMiddleware.js')
const UserModel = require('../models/UserModel.js')
const RoutineController = require('../controllers/RoutineController.js')
const RoutineModel = require('../models/RoutineModel.js')
const { connection: pool } = require('../config/db.js')
// const { validateCreate } = require('../validations/exerciseValidations.js')

const userModel = new UserModel(pool)
const routineModel = new RoutineModel(pool)
const routineController = new RoutineController(routineModel)
const authMiddleware = new AuthMiddleware(process.env.SECRET_KEY, userModel)

router
  .get('/routines',
    authMiddleware.validateToken.bind(authMiddleware),
    routineController.getAllRoutines.bind(routineController))
  .get('/routines/:id',
    authMiddleware.validateToken.bind(authMiddleware),
    routineController.getAllRoutinesByid.bind(routineController))
  // .post('/exercises',
  //   validateCreate,
  //   exerciseController.create.bind(exerciseController)
  // )

module.exports = router

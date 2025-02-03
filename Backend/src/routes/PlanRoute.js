const express = require('express')
const router = express.Router()
const AuthMiddleware = require('../middlewares/authMiddleware.js')
const UserModel = require('../models/UserModel.js')
const PlanController = require('../controllers/PlanController.js')
const PlanModel = require('../models/PlanModel.js')
const { connection: pool } = require('../config/db.js')
const { validateCreatePlan } = require('../validations/planValidations.js')

const planModel = new PlanModel(pool)
const userModel = new UserModel(pool)
const planController = new PlanController(planModel)
const authMiddleware = new AuthMiddleware(process.env.SECRET_KEY, userModel)

router
  .post('/plans',
    validateCreatePlan,
    authMiddleware.validateToken.bind(authMiddleware),
    planController.createPlan.bind(planController)
  )

module.exports = router

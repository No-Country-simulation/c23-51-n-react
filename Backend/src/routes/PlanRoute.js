const express = require('express')
const router = express.Router()
const PlanController = require('../controllers/PlanController.js')
const PlanModel = require('../models/PlanModel.js')
const { connection: pool } = require('../config/db.js')
const { validateCreatePlan } = require('../validations/planValidations.js')

const planModel = new PlanModel(pool)
const planController = new PlanController(planModel)
router
  .post('/plans',
    validateCreatePlan,
    planController.createPlan.bind(planController)
  )

module.exports = router

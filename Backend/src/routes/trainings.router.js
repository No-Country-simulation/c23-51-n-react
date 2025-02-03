const router = require('express').Router();

const TrainingsController = require('../controllers/Trainings.controller.js');
const TrainingsModel = require('../models/Trainings.model.js');

const { validateTraining } = require('../validations/training.Validations.js');
const { connection: pool } = require('../config/db.js');

const trainingsModel = new TrainingsModel(pool);
const trainingsController = new TrainingsController(trainingsModel);

router.route("/trainings")
    .post(validateTraining, trainingsController.createTraining.bind(trainingsController))

router.route("/trainings/:id")
    .get(validateTraining, trainingsController.getTrainingById.bind(trainingsController))
    .put(validateTraining, trainingsController.updateTraining.bind(trainingsController))
    .delete(validateTraining, trainingsController.deleteTraining.bind(trainingsController))

module.exports = router;
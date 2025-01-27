const router = require('express').Router();
const TrainingsController = require('../controllers/Trainings.controller.js');
const TrainingsModel = require('../models/Trainings.model.js');
const { connection: pool } = require('../config/db.js');

const trainingsModel = new TrainingsModel(pool);
const trainingsController = new TrainingsController(trainingsModel);

router.route("/trainings")
    .post(trainingsController.createTraining.bind(trainingsController))

router.route("/trainings/:id")
    .get(trainingsController.getTrainingById.bind(trainingsController))
    .put(trainingsController.updateTraining.bind(trainingsController))
    .delete(trainingsController.deleteTraining.bind(trainingsController))

module.exports = router;
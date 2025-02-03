const { validationResult } = require('express-validator');
const { groupValidationErrors } = require('../utils/validationUtils.js');

class TrainingsController {
  constructor(trainingsModel) {
    this.trainingsModel = trainingsModel;
  }

  async createTraining(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const groupedErrors = groupValidationErrors(errors.array());

        return res.status(400).json({
          message: 'Errores de validación',
          errors: groupedErrors
        });
      }

      const training = await this.trainingsModel.createTraining(req.body);

      if (!training) {
        return res.status(400).json({
          status: 400,
          message: 'Training no creado'
        });
      }

      return res.status(201).json({
        status: 201,
        message: 'Training creado exitosamente',
        data: req.body
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message
      });
    }
  }

  async getTrainingById(req, res) {
    try {
      const training = await this.trainingsModel.getTrainingById(req.params.id);

      if (!training) {
        return res.status(404).json({
          status: 404,
          message: 'Training no encontrado'
        });
      }

      return res.status(200).json({
        status: 200,
        data: training,
        message: 'Training encontrado'
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: 500,
        error: error.message
      });
    }
  }

  async updateTraining(req, res) {
    try {
      const training = await this.trainingsModel.updateTraining(req.params.id, req.body);

      if (!training) {
        return res.status(400).json({
          status: 400,
          message: 'Training no actualizado'
        });
      }

      res.status(200).json({ status: 200, message: 'Training actualizado', data: req.body });
      
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: 500,
        error: error.message
      });
    }
  }

  async deleteTraining(req, res) {
    try {
      const training = await this.trainingsModel.deleteTraining(req.params.id);

      if (!training) {
        return res.status(400).json({
          status: 400,
          message: 'Training no eliminado'
        });
      }

      res.status(200).json({ status: 200, message: 'Training eliminado' });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message
      });
    }
  }
}

module.exports = TrainingsController;
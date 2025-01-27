class TrainingsController {
    constructor(trainingsModel) {
      this.trainingsModel = trainingsModel;
    }
  
    async createTraining(req, res) {
      try {
        const result = await this.trainingsModel.createTraining(req.body);
        res.status(201).json({ message: 'Training creado exitosamente', affectedRows: result });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async getTrainingById(req, res) {
      try {
        const training = await this.trainingsModel.getTrainingById(req.params.id);
        res.status(200).json(training);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async updateTraining(req, res) {
      try {
        const result = await this.trainingsModel.updateTraining(req.params.id, req.body);
        res.status(200).json({ message: 'Training actualizado exitosamente', affectedRows: result });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async deleteTraining(req, res) {
      try {
        const result = await this.trainingsModel.deleteTraining(req.params.id);
        res.status(200).json({ message: 'Training eliminado exitosamente', affectedRows: result });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  }
  
  module.exports = TrainingsController;
const logger = require('../utils/logger');

class TrainingsModel {
  constructor(db) {
    this.db = db;
  }

  async createTraining(training) {
    try {
      const { name, description, repetitions, duration, video_id, difficulty, status } = training;
      const pool = this.db;

      const [result] = await pool.query(
        `INSERT INTO trainings (name, description, repetitions, duration, video_id, difficulty, status) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [name, description, repetitions, duration, video_id, difficulty, status]
      );

      return result.affectedRows;
    } catch (error) {
      logger.error('Error interno del servidor: ', error);
      throw error;
    }
  }

  async getTrainingById(id) {
    try {
      const pool = this.db;
      const [rows] = await pool.query('SELECT * FROM trainings WHERE id = ?', [id]);
      return rows[0];
    } catch (error) {
      logger.error('Error interno del servidor: ', error);
      throw error;
    }
  }

  async updateTraining(id, training) {
    try {
      const { name, description, repetitions, duration, video_id, difficulty, status } = training;
      const pool = this.db;

      const [result] = await pool.query(
        `UPDATE trainings SET name = ?, description = ?, repetitions = ?, duration = ?, video_id = ?, difficulty = ?, status = ? WHERE id = ?`,
        [name, description, repetitions, duration, video_id, difficulty, status, id]
      );

      return result.affectedRows;
    } catch (error) {
      logger.error('Error interno del servidor: ', error);
      throw error;
    }
  }

  async deleteTraining(id) {
    try {
      const pool = this.db;
      const [result] = await pool.query('UPDATE trainings SET deleted_at = NOW() WHERE id = ?', [id]);
      return result.affectedRows;
    } catch (error) {
      logger.error('Error interno del servidor: ', error);
      throw error;
    }
  }
}

module.exports = TrainingsModel;
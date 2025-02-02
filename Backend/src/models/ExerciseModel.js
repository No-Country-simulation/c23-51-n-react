const logger = require('../utils/logger')

class ExerciseModel {
  constructor (db) {
    this.db = db
  }

  async createExercise ({ name, description, benefit, advice, repetition, duration, difficulty, video_id: videoId }) {
    const pool = this.db

    try {
      const query = `
        INSERT INTO exercises (name, description, benefit, advice, repetition, duration, difficulty, video_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `
      const values = [name, description, benefit, advice, repetition, duration, difficulty, videoId]

      const [result] = await pool.query(query, values)

      return +result.affectedRows
    } catch (error) {
      logger.error('Error interno del servidor: ', error)
      throw error
    }
  }
}

module.exports = ExerciseModel

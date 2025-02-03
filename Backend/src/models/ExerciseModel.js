const logger = require('../utils/logger')

class ExerciseModel {
  constructor (db) {
    this.db = db
  }

  async getAllExercises () {
    try {
      const pool = this.db
      const [exercises] = await pool.query('SELECT * FROM v_exercise_video')

      return exercises
    } catch (error) {
      logger.error('Error interno del servidor: ', error)
      throw error
    }
  }

  async createExercise ({ name, description, benefit, advice, repetition, duration, difficulty, video_id: videoId }) {
    try {
      const pool = this.db
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

const logger = require('../utils/logger')

class ExerciseModel {
  constructor (db) {
    this.db = db
  }

  async createExercise ({ name, description, repetition, duration, difficulty }) {
    const pool = this.db

    try {
      const query = `
        INSERT INTO exercises (name, description, repetition, duration, difficulty)
        VALUES (?, ?, ?, ?, ?)
      `
      const values = [name, description, repetition, duration, difficulty]

      const [result] = await pool.query(query, values)

      return +result.affectedRows
    } catch (error) {
      logger.error('Error interno del servidor: ', error)
      throw error
    }
  }
}

module.exports = ExerciseModel

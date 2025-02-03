const logger = require('../utils/logger.js')
const { formatRoutine } = require('../helpers/RoutineHelper.js')
class RoutineModel {
  constructor (db) {
    this.db = db
  }

  async getAllRoutines () {
    try {
      const pool = this.db

      const [rows] = await pool.query('SELECT * FROM v_exercise_routine_video')
      const routines = formatRoutine(rows)
      return routines
    } catch (error) {
      logger.error('Error interno del servidor: ', error)
      throw error
    }
  }

  async getAllRoutinesByid (id) {
    try {
      const pool = this.db

      console.log(id)

      const [rows] = await pool.query('SELECT * FROM v_exercise_routine_video WHERE routine_id = ?', [id])
      const routines = formatRoutine(rows)
      return routines
    } catch (error) {
      logger.error('Error interno del servidor: ', error)
      throw error
    }
  }
}

module.exports = RoutineModel

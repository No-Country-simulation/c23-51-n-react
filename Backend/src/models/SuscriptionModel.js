const logger = require('../utils/logger')

class SuscriptionModel {
  constructor (db) {
    this.db = db
  }

  async createSuscription (suscription) {
    const pool = this.db
    try {
      const { id, status, create_time, plan_id, custom_id } = suscription

      const [[plan]] = await pool.query('SELECT id FROM plans WHERE plan_paypal_id = ?', [plan_id])

      const [result] = await pool.query(`INSERT INTO suscriptions 
        SET suscription_paypal_id = ?,
          user_id = ?,
          plan_id = ?,
          start_date = ?,
          status = ?`, [id, custom_id, plan.id, create_time, status])

      return +result.affectedRows
    } catch (error) {
      logger.error('Error interno del servidor: ', error)
      throw error
    }
  }
}

module.exports = SuscriptionModel

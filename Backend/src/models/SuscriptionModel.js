const logger = require('../utils/logger')

class SuscriptionModel {
  constructor (db) {
    this.db = db
  }

  async createSuscription (suscription) {
    const pool = this.db
    try {
      const { id, status, create_time: createTime, final_time: finalTime, plan_id: planId, custom_id: customId } = suscription

      const [[plan]] = await pool.query('SELECT id FROM plans WHERE plan_paypal_id = ? OR id = ?', [planId, planId])

      const [result] = await pool.query(`INSERT INTO suscriptions
        SET suscription_paypal_id = ?,
        user_id = ?,
        plan_id = ?,
        start_date = ?,
        end_date = ?,
        status = ?`, [id, customId, plan.id, createTime, finalTime, status])

      return +result.affectedRows
    } catch (error) {
      logger.error('Error interno del servidor: ', error)
      throw error
    }
  }
}

module.exports = SuscriptionModel

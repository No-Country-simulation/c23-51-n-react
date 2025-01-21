const logger = require('../utils/logger')

class PlanModel {
  constructor (db) {
    this.db = db
  }

  async createPlan (plan) {
    try {
      const { id, product_id: productId, name, description, price } = plan

      const pool = this.db

      const [[product]] = await pool.query('SELECT id FROM products WHERE product_paypal_id = ?', [productId])

      if (product && +product.id > 0) {
        const [result] = await pool.query(`INSERT INTO plans
          SET plan_paypal_id = ?,
          product_id = ?,
          name = ?,
          description = ?,
          price = ?`,
        [id, product.id, name, description, price])

        return +result.affectedRows
      }
    } catch (error) {
      logger.error('Error interno del servidor: ', error)
      throw error
    }
  }
}

module.exports = PlanModel

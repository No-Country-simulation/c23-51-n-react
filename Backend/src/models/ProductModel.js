const logger = require('../utils/logger')

class ProductModel {
  constructor (db) {
    this.db = db
  }

  async createProduct (product) {
    try {
      const { id, description, name, type, category } = product
      const pool = this.db
      const result = await pool.query(`
      INSERT INTO products SET 
        product_paypal_id = ?,
        name = ?,
        description = ?,
        type = ?,
        category = ?`, [id, description, name, type, category]
      )

      return +result.affectedRows
    } catch (error) {
      logger.error('Error interno del servidor: ', error)
      throw error
    }
  }
}

module.exports = ProductModel

class userModel {
  constructor (db) {
    this.db = db
  }

  async createUser ({ email, password }) {
    try {
      const pool = this.db
      const [result] = await pool.query('INSERT INTO users SET email = ?, password = ?', [email, password])
      return +result.affectedRows
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

module.exports = userModel

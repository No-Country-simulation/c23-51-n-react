class userModel {
  constructor (db) {
    this.db = db
  }

  async createUser ({ email, password, name, brithdate, height, weigth }) {
    try {
      const pool = this.db
      const [user] = await pool.query('INSERT INTO users SET email = ?, password = ?', [email, password])
      const userId = +user.insertId

      if (userId) {
        await pool.query(`INSERT INTO profiles 
          SET
            user_id = ?,
            name = ?,
            birthdate = ?,
            height = ?,
            weight = ?`,
        [userId, name, brithdate, height, weigth])
      }

      return +user.affectedRows
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findByEmail (email) {
    try {
      const pool = this.db
      const [[user]] = await pool.query(`SELECT 
          id,
          email,
          password,
          role_id,
          status 
        FROM users 
        WHERE email = ?`,
      [email])

      if (!user) return {}
      return user
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

module.exports = userModel

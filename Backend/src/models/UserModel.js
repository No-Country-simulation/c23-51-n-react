const logger = require('../utils/logger')

class userModel {
  constructor (db) {
    this.db = db
  }

  async createUser ({ email, password, name }) {
    try {
      const pool = this.db
      const [user] = await pool.query('INSERT INTO users SET email = ?, password = ?', [email, password])
      const userId = +user.insertId

      if (userId) {
        await pool.query(`INSERT INTO profiles 
          SET
            user_id = ?,
            name = ?`,
        [userId, name])
      }

      return {
        userId: +user.insertId,
        affectedRows: +user.affectedRows
      }
    } catch (error) {
      logger.error('Error intertno en el servidor: ', error)
      throw error
    }
  }

  async createProfileUser ({ user_id, last_name, birth, photo, height, weight, gender, country }) {
    try {
      const pool = this.db
      const [profile] = await pool.query(`UPDATE profiles 
        SET 
          last_name = ?,
          birth = ?,
          photo = ?,
          height = ?,
          weight = ?,
          gender = ?,
          country = ?,
          completed = 'TRUE'
        WHERE user_id = ?
        AND completed = 'FALSE'
        `
      , [last_name, birth, photo, height, weight, gender, country, user_id])

      console.log(profile)

      return +profile.affectedRows
    } catch (error) {
      logger.error('Error intertno en el servidor: ', error)
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
      logger.error('Error intertno en el servidor: ', error)
      throw error
    }
  }

  async findById (id) {
    try {
      const pool = this.db
      const [[user]] = await pool.query(`SELECT 
          id,
          email,
          role_id,
          status 
        FROM users 
        WHERE id = ?`,
      [id])

      if (!user) return {}
      return user
    } catch (error) {
      logger.error('Error intertno en el servidor: ', error)
      throw error
    }
  }
}

module.exports = userModel

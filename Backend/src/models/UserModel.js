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

      const [[userData]] = await pool.query('SELECT id, email, plan_id FROM users WHERE id = ?', [userId])
      if (userId) {
        await pool.query(`INSERT INTO profiles 
          SET
            user_id = ?,
            name = ?`,
        [userId, name])
      }

      return {
        data: userData,
        affectedRows: +user.affectedRows
      }
    } catch (error) {
      logger.error('Error intertno en el servidor: ', error)
      throw error
    }
  }

  async createProfileUser ({ userId, lastName, birth, photo, height, weight, gender, country }) {
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
      , [lastName, birth, photo, height, weight, gender, country, userId])

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

      console.log(email)
      console.log(user)

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

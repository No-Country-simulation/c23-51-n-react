const { validationResult } = require('express-validator')
const { groupValidationErrors } = require('../utils/validationUtils.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class UserController {
  constructor (userModel) {
    this.userModel = userModel
  }

  async createUser (req, res) {
    const { email, password, name, birthdate, height, weight } = req.body
    try {
      const salt = 10
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        const groupedErrors = groupValidationErrors(errors.array())

        return res.status(400).json({
          message: 'Errores de validación',
          errors: groupedErrors
        })
      }

      const hashPassword = await bcrypt.hash(password, salt)
      const user = await this.userModel.createUser({
        email,
        password: hashPassword,
        name,
        birthdate,
        height,
        weight
      })

      if (user) {
        return res.status(201).json({
          message: 'usuario creado correctamente',
          errors: []
        })
      }
    } catch (error) {
      console.log(error)

      if (error.sqlState === '23000') {
        return res.status(409).json({
          message: `El correo ${email} ya esta registrado`,
          errors: [
            {
              field: 'email',
              reason: 'El correo electrónico proporcionado ya existe en nuestra base de datos'
            }
          ]
        })
      }

      return res.status(500).json({
        message: 'error interno',
        errors: error.message
      })
    }
  }

  async loginUser (req, res) {
    const { email, password } = req.body

    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        const groupedErrors = groupValidationErrors(errors.array())

        return res.status(400).json({
          message: 'Errores de validación',
          errors: groupedErrors
        })
      }

      const user = await this.userModel.findByEmail(email)

      if (user && typeof user === 'object' && Object.entries(user).length === 0) {
        return res.status(400).json({
          message: 'El correo no se encuentra registrado en el sistema',
          errors: []
        })
      }

      if (user.status === 0) {
        return res.status(400).json({
          message: 'La cuenta se encuentra desactivada',
          errors: []
        })
      }

      if (user && await bcrypt.compare(password, user.password)) {
        const payload = {
          user_id: user.id,
          user_email: user.email,
          user_role_id: user.role_id
        }

        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' })
        res.json({
          message: 'Se inicio la sesión correctamente',
          data: {
            token,
            token_type: 'Bearer',
            expires_in: 3600
          }
        })
      } else {
        return res.status(500).json({
          message: 'La contraseña es incorrecta',
          errors: []
        })
      }
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: 'error interno',
        errors: error.message
      })
    }
  }
}

module.exports = UserController

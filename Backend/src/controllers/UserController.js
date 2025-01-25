const { validationResult } = require('express-validator')
const { groupValidationErrors } = require('../utils/validationUtils.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class UserController {
  constructor (userModel) {
    this.userModel = userModel
  }

  async createUser (req, res) {
    const { email, password, name } = req.body
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
        name,
        email,
        password: hashPassword
      })

      if (user.affectedRows) {
        const payload = { user_id: user.userId }
        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '5m' })

        return res.status(201).json({
          success: true,
          status: 201,
          message: 'Usuario creado correctamente',
          data: {
            token
          }
        })
      }
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
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

  async createProfileUser (req, res) {
    const { last_name, birth, photo, height, weight, gender, country } = req.body
    const user_id = req.user_id

    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        const groupedErrors = groupValidationErrors(errors.array())

        return res.status(400).json({
          message: 'Errores de validación',
          errors: groupedErrors
        })
      }

      const profileUser = await this.userModel.createProfileUser({
        user_id,
        last_name,
        birth,
        photo,
        height,
        weight,
        gender,
        country
      })

      if (profileUser) {
        return res.status(201).json({
          success: true,
          status: 201,
          message: 'Perfil completado correctamente'
        })
      } else {
        return res.status(201).json({
          success: false,
          status: 400,
          message: 'Este perfil ya fue completado'
        })
      }
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({
          message: 'El id del perfil ya existe',
          errors: [
            {
              field: 'id',
              reason: 'El id de perfil ya existe en la base de datos'
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
        return res.status(404).json({
          message: 'El correo no se encuentra registrado en el sistema',
          errors: []
        })
      }

      if (user && user.status === 0) {
        return res.status(400).json({
          message: 'La cuenta vinculada a este correo esta desactivada',
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

        return res.json({
          message: 'Sesion iniciada correctamente',
          data: {
            token,
            token_type: 'Bearer',
            expires_in: 3600
          }
        })
      } else {
        return res.status(400).json({
          message: 'La contraseña es incorrecta',
          errors: []
        })
      }
    } catch (error) {
      return res.status(500).json({
        message: 'error interno en el servidor',
        errors: error.message
      })
    }
  }
}

module.exports = UserController

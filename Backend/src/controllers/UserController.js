const { validationResult } = require('express-validator')
const { groupValidationErrors } = require('../utils/validationUtils.js')
const bcrypt = require('bcrypt')

class UserController {
  constructor (userModel) {
    this.userModel = userModel
  }

  async createUser (req, res) {
    const { email, password } = req.body
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
      const user = await this.userModel.createUser({ email, password: hashPassword })
      console.log('try message', user)

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
}

module.exports = UserController

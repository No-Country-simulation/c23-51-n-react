const { body } = require('express-validator')

const validateCreateUser = [
  body('email')
    .exists({ checkFalsy: true }) // Requerido, no puede estar vacío ni falso
    .withMessage('El email es obligatorio')
    .isEmail()
    .withMessage('El formato del correo no es valido'),
  body('password')
    .exists({ checkFalsy: true }) // Requerido, no puede estar vacío ni falso
    .withMessage('La contraseña es obligatoria')
    .isLength({ min: 8, max: 50 })
    .withMessage('La contraseña debe tener entre 8 a 50 caracteres')
    .matches(/[a-z]/)
    .withMessage('La contraseña debe contener al menos una letra minúscula')
    .matches(/[A-Z]/)
    .withMessage('La contraseña debe contener al menos una letra mayúscula')
    .matches(/\d/)
    .withMessage('La contraseña debe contener al menos un número')
    .matches(/[@$!%*?&]/)
    .withMessage('La contraseña debe contener al menos un carácter especial (@, $, !, %, *, ?, &)'),
  body('name')
    .exists({ checkFalsy: true })
    .withMessage('El nombre es obligatorio')
    .isAlpha('es-ES', { ignore: ' ' }) // Permite letras y espacios (en español)
    .withMessage('El nombre solo puede contener letras')
    .isLength({ min: 2, max: 50 })
    .withMessage('El nombre debe tener entre 2 y 50 caracteres')
    .trim(), // Elimina espacios adicionales
  body('birthdate')
    .exists({ checkFalsy: true })
    .withMessage('La fecha de cumpleaños es obligatoria')
    .custom((value) => {
      console.log(value)

      // Verificar que cumple con el formato YYYY-MM-DD usando una expresión regular
      const regex = /^\d{4}-\d{2}-\d{2}$/
      if (!regex.test(value)) {
        throw new Error('La fecha de cumpleaños debe tener el formato válido YYYY-MM-DD')
      }

      const date = new Date(value)
      const minDate = new Date('1900-01-01') // Fecha mínima permitida
      const maxDate = new Date() // Fecha actual
      if (date < minDate || date > maxDate) {
        throw new Error(`La fecha de cumpleaños debe estar entre 1900-01-01 y ${maxDate.toISOString().split('T')[0]}`)
      }
      return true
    }),
  body('height')
    .exists({ checkFalsy: true })
    .withMessage('La altura es obligatorio')
    .isDecimal({ decimal_digits: '0,2', force_decimal: false })
    .withMessage('La altura debe ser un numero válido de hasta 2 decimales en cm'),
  body('weight')
    .exists({ checkFalsy: true })
    .withMessage('El peso es obligatorio')
    .isDecimal({ decimal_digits: '0,2', force_decimal: false })
    .withMessage('El peso debe ser un numero válido de hasta 2 decimales en kg')
]

const validateLoginUser = [
  body('email')
    .exists({ checkFalsy: true })
    .withMessage('El correo es obligatorio')
    .isEmail()
    .withMessage('Debe proporcionar un correo válido'),
  body('password')
    .exists({ checkFalsy: true }) // Requerido, no puede estar vacío ni falso
    .withMessage('La contraseña es obligatoria')
]

module.exports = {
  validateCreateUser,
  validateLoginUser
}

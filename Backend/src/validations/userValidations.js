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
    .trim()
]

const validCreateUserProfile = [
  body('last_name')
    .exists({ checkFalsy: true })
    .withMessage('El nombre es obligatorio')
    .isAlpha('es-ES', { ignore: ' ' }) // Permite letras y espacios (en español)
    .withMessage('El nombre solo puede contener letras')
    .isLength({ min: 2, max: 50 })
    .withMessage('El nombre debe tener entre 2 y 50 caracteres')
    .trim(),
  body('birth')
    .exists({ checkFalsy: true })
    .withMessage('La fecha de nacimiento es obligatoria')
    .custom((value) => {
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
  body('photo')
    .optional(),
  body('height')
    .exists({ checkFalsy: true })
    .withMessage('La altura es obligatorio')
    .isDecimal({ decimal_digits: '0,2', force_decimal: false })
    .withMessage('La altura debe ser un numero válido de hasta 2 decimales en cm'),
  body('weight')
    .exists({ checkFalsy: true })
    .withMessage('El peso es obligatorio')
    .isDecimal({ decimal_digits: '0,2', force_decimal: false })
    .withMessage('El peso debe ser un numero válido de hasta 2 decimales en kg'),
  body('gender')
    .notEmpty()
    .withMessage('El campo género es obligatorio.')
    .isString()
    .withMessage('El género debe ser un texto.')
    .isIn(['MASCULINO', 'FEMENINO'])
    .withMessage("El género debe ser 'MASCULINO' o 'FEMENINO'.")
    .trim(),
  body('country')
    .notEmpty()
    .withMessage('El campo país es obligatorio.')
    .isString()
    .withMessage('El país debe ser un texto.')
    .isLength({ min: 2 })
    .withMessage('El nombre del país debe tener al menos 2 caracteres.')
    .trim(),
  body('goals')
    .exists({ checkFalsy: true })
    .withMessage('Las metas son obligatorias')
    .isArray()
    .withMessage('El campo metas debe ser un array'),
  body('activityLevel')
    .notEmpty()
    .withMessage('El nivel de actividad es obligatorio.')
    .isString()
    .withMessage('El nivel de actividad debe ser un texto.')
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

const validRefreshTokenCompleteProfile = [
  body('email')
    .exists({ checkFalsy: true })
    .withMessage('El correo es obligatorio')
    .isEmail()
    .withMessage('Debe proporcionar un correo válido')
]

module.exports = {
  validateCreateUser,
  validCreateUserProfile,
  validateLoginUser,
  validRefreshTokenCompleteProfile
}

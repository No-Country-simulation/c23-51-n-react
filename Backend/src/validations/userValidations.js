const { body } = require('express-validator')

const validateCreateUser = [
  body('email')
    .exists({ checkFalsy: true }) // Requerido, no puede estar vacío ni falso
    .withMessage('El campo email es obligatorio')
    .isEmail()
    .withMessage('El formato del correo no es valido'),
  body('password')
    .exists({ checkFalsy: true }) // Requerido, no puede estar vacío ni falso
    .withMessage('El campo email es obligatorio')
    .isLength({ min: 8, max: 50 })
    .withMessage('La contraseña debe tener entre 8 a 50 caracteres')
    .matches(/[a-z]/)
    .withMessage('La contraseña debe contener al menos una letra minúscula')
    .matches(/[A-Z]/)
    .withMessage('La contraseña debe contener al menos una letra mayúscula')
    .matches(/\d/)
    .withMessage('La contraseña debe contener al menos un número')
    .matches(/[@$!%*?&]/)
    .withMessage('La contraseña debe contener al menos un carácter especial (@, $, !, %, *, ?, &)')
]

module.exports = {
  validateCreateUser
}

const { body } = require('express-validator')

const validateCreatePlan = [
  body('name')
    .exists({ checkFalsy: true })
    .withMessage('El id del plan es obligatorio')
    .isLength({ min: 1, max: 127 })
    .withMessage('El nombre de producto debe contener entre 1 a 127 caract.'),
  body('product_id')
    .exists({ checkFalsy: true })
    .withMessage('El id del plan es obligatorio')
    .isLength({ min: 1, max: 27 })
    .withMessage('El id del plan debe contener entre 1 a 127 caract.'),
  body('description')
    .optional()
    .isLength({ min: 1, max: 127 })
    .withMessage('El id del plan debe contener entre 1 a 127 caract.'),
  body('price')
    .exists({ checkFalsy: true })
    .withMessage('El precio del plan es obligatorio')
    .isDecimal({ decimal_digits: '0,2', force_decimal: false })
    .withMessage('El precio del plan debe ser un valor valido con 2 decimales')
]

module.exports = {
  validateCreatePlan
}

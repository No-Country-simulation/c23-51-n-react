const { body } = require('express-validator')

console.log('entre')

const validateCreateProduct = [
  body('name')
    .exists({ checkFalsy: true })
    .withMessage('El nombre de product es obligatorio')
    .isLength({ min: 1, max: 127 })
    .withMessage('El nombre de producto debe contener entre 1 a 127 caract.'),

  body('description')
    .optional()
    .isLength({ min: 1, max: 256 })
    .withMessage('La descripción de producto debe contener entre 1 a 256 caract.'),

  body('type')
    .optional()
    .isLength({ min: 1, max: 24 })
    .withMessage('El tipo del producto debe contener entre 1 a 24 caract.'),

  body('category')
    .optional()
    .isLength({ min: 1, max: 24 })
    .withMessage('El categoria del producto debe contener entre 1 a 256 caract.')
]

module.exports = {
  validateCreateProduct
}

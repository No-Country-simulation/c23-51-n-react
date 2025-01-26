const { body } = require('express-validator')

const validateCreateExercise = [
  body('name').notEmpty().withMessage('El nombre es requerido'),
  body('description').notEmpty().withMessage('La descripción es requerida'),
  body('repetition').isInt({ min: 1 }).withMessage('Las repeticiones deben ser un número positivo'),
  body('difficulty').isIn(['sin dificultad', 'básico', 'intermedio', 'avanzado']).withMessage('Dificultad no válida')
]

module.exports = {
  validateCreateExercise
}

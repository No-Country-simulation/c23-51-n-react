const { body } = require('express-validator')

const validateCreateExercise = [
  body('name')
    .notEmpty()
    .withMessage('El nombre es requerido'),
  body('description')
    .notEmpty()
    .withMessage('La descripción es requerida'),
  body('benefit')
    .optional(),
  body('advice')
    .optional(),
  body('repetition')
    .notEmpty()
    .withMessage('El numero de repeticiones es requerido')
    .isInt({ min: 1 })
    .withMessage('Las repeticiones deben ser un número positivo'),
  body('duration')
    .notEmpty()
    .withMessage('La duración es requerido')
    .matches(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)
    .withMessage('El horario debe estar en formato HH:mm:ss (24 horas)'),
  body('difficulty')
    .notEmpty()
    .withMessage('La dificultad es requerido')
    .isIn(['sin dificultad', 'básico', 'intermedio', 'avanzado'])
    .withMessage('Dificultad no válida, opciones: sin dificultad, básico, intermedio, avanzado'),
  body('video_id')
    .notEmpty()
    .withMessage('El id de video es requerido')
    .isInt({ min: 1 })
    .withMessage('El id de video debe ser un número entero positivo')
]

module.exports = {
  validateCreateExercise
}

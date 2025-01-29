const { body } = require('express-validator');

const validateTraining = [
  body('name')
    .exists({ checkFalsy: true })
    .withMessage('El nombre del entrenamiento es obligatorio')
    .isLength({ min: 1, max: 100 })
    .withMessage('El nombre del entrenamiento debe contener entre 1 a 100 caracteres'),
  body('description')
    .optional()
    .isLength({ min: 1, max: 255 })
    .withMessage('La descripción del entrenamiento debe contener entre 1 a 255 caracteres'),
  body('repetitions')
    .exists({ checkFalsy: true })
    .withMessage('El número de repeticiones es obligatorio')
    .isInt({ min: 1 })
    .withMessage('El número de repeticiones debe ser un número entero positivo'),
  body('duration')
    .exists({ checkFalsy: true })
    .withMessage('La duración del entrenamiento es obligatoria')
    .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)
    .withMessage('La duración debe estar en formato HH:MM:SS'),
  body('difficulty')
    .exists({ checkFalsy: true })
    .withMessage('La dificultad es obligatoria')
    .isIn(['facil', 'intermedio', 'avanzado'])
    .withMessage('La dificultad debe ser uno de los siguientes valores: facil, intermedio, avanzado'),
  body('status')
    .exists({ checkFalsy: true })
    .withMessage('El estado es obligatorio')
    .isInt({ min: 0, max: 1 })
    .withMessage('El estado debe ser 0 (inactivo) o 1 (activo)')
];

module.exports = {
  validateTraining
};
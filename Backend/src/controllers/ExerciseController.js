const { validationResult } = require('express-validator')
const { groupValidationErrors } = require('../utils/validationUtils')

class ExerciseController {
  constructor (exerciseModel) {
    this.exerciseModel = exerciseModel
  }

  async createExercise (req, res) {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      const groupedErrors = groupValidationErrors(errors.array())

      return res.status(400).json({
        message: 'Errores de validación',
        errors: groupedErrors
      })
    }

    try {
      const { name, description, benefit, advice, repetition, duration, difficulty, video_id: videoId } = req.body

      const exercise = await this.exerciseModel.createExercise({
        name,
        description,
        benefit,
        advice,
        repetition,
        duration,
        difficulty,
        video_id: videoId
      })

      if (exercise) {
        return res.status(201).json({
          success: true,
          status: 201,
          data: [],
          message: 'Ejercicio creado correctamente'
        })
      } else {
        return res.status(400).json({
          success: false,
          status: 400,
          data: [],
          message: 'Ejercicio no creado'
        })
      }
    } catch (error) {
      return res.status(500).json({
        status: 500,
        data: [],
        message: 'Error interno del servidor'
      })
    }
  }
}

module.exports = ExerciseController

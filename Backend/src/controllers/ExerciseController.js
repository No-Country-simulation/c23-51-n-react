class ExerciseController {
  constructor (exerciseModel) {
    this.exerciseModel = exerciseModel
  }

  async createExercise (req, res) {
    try {
      const { name, description, repetition, duration, difficulty } = req.body

      const exercise = await this.exerciseModel.createExercise({
        name,
        description,
        repetition,
        duration,
        difficulty
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

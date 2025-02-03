// const { validationResult } = require('express-validator')
// const { groupValidationErrors } = require('../utils/validationUtils')

class RoutineController {
  constructor (routineModel) {
    this.routineModel = routineModel
  }

  async getAllRoutines (_req, res) {
    try {
      const data = await this.routineModel.getAllRoutines()
      if (data.length > 0) {
        return res.status(200).json({
          success: true,
          status: 200,
          message: 'Rutinas obtenidas satisfactoriamente',
          data
        })
      }
      return res.status(404).json({
        success: false,
        status: 404,
        message: 'Rutinas no encontradas',
        data: []
      })
    } catch (error) {
      return res.status(500).json({
        status: 500,
        data: [],
        message: 'Error interno del servidor'
      })
    }
  }

  async getAllRoutinesByid (req, res) {
    try {
      const { id } = req.params
      const data = await this.routineModel.getAllRoutinesByid(id)
      if (data.length > 0) {
        return res.status(200).json({
          success: true,
          status: 200,
          message: 'Rutina obtenida satisfactoriamente',
          data
        })
      }
      return res.status(404).json({
        success: false,
        status: 404,
        message: 'No se encontro la rutina seleccionada',
        data: []
      })
    } catch (error) {
      return res.status(500).json({
        status: 500,
        data: [],
        message: 'Error interno del servidor'
      })
    }
  }
}

module.exports = RoutineController

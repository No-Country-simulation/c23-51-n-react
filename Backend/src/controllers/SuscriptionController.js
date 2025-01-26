const PaypalService = require('../services/PaypalService.js')

class SuscriptionController {
  constructor (suscriptionModel) {
    this.suscriptionModel = suscriptionModel
  }

  async createSuscription (req, res) {
    const data = req.body

    try {
      const paypal = new PaypalService()
      const suscriptionPaypal = await paypal.createSuscription(data)

      if (suscriptionPaypal.status === 201) {
        suscriptionPaypal.data.plan_id = data.plan_id
        suscriptionPaypal.data.custom_id = data.custom_id

        const suscription = await this.suscriptionModel.createSuscription(suscriptionPaypal.data)

        if (suscription) {
          return res.status(201).json({
            status: 201,
            data: {
              payment_url: suscriptionPaypal.data.links[0].href
            },
            message: 'Suscripcion creado correctamente'
          })
        } else {
          return res.status(400).json({
            status: 400,
            data: [],
            message: 'Suscripcion no fue creada'
          })
        }
      } else {
        return res.status(400).json({
          status: 400,
          data: suscriptionPaypal.data,
          message: suscriptionPaypal.message
        })
      }
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({
          message: 'La suscripcion ya esta registrado',
          errors: [
            {
              field: 'email',
              reason: 'El correo electrónico proporcionado ya existe en nuestra base de datos'
            }
          ]
        })
      }
      return res.status(500).json({
        status: 500,
        data: [],
        message: 'Error interno del sistema'
      })
    }
  }
}

module.exports = SuscriptionController

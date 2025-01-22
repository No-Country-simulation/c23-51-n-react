const logger = require('../utils/logger')

class webhookController {
  constructor (suscriptionModel) {
    this.suscriptionModel = suscriptionModel
  }

  async handleWebHook (req, res) {
    try {
      const event = req.body

      switch (event.event_type) {
        case 'BILLING.SUBSCRIPTION.ACTIVATED':
        {
          const { id, status, start_time, plan_id, custom_id } = event.resource
          const data = {
            id,
            status,
            create_time: start_time,
            plan_id,
            custom_id
          }
          await this.suscriptionModel.createSuscription(data)
          return res.status(200).send('Webhook suscription processed successfully')
        }

        default:
          console.log('nada')
          break
      }
    } catch (error) {
      logger.error('Error processing webhook:', error)
      return res.status(500).send('Internal Server Error')
    }
  }
}

module.exports = webhookController

const { validationResult } = require('express-validator')
const { groupValidationErrors } = require('../utils/validationUtils.js')
const PaypalService = require('../services/PaypalService.js')

class PlanController {
  constructor (planModel) {
    this.planModel = planModel
  }

  async createPlan (req, res) {
    const { name, product_id: productId, description, price } = req.body
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        const groupedErrors = groupValidationErrors(errors.array())

        return res.status(400).json({
          message: 'Errores de validación',
          errors: groupedErrors
        })
      }

      const paypal = new PaypalService()
      const planPaypal = await paypal.createPlan({
        name,
        product_id: productId,
        description,
        billing_cycles: [
          {
            frequency: {
              interval_unit: 'MONTH', // Unidad de tiempo: 'DAY', 'WEEK', 'MONTH', 'YEAR'
              interval_count: 1 // Cada 1 mes
            },
            tenure_type: 'REGULAR', // Tipo de ciclo: REGULAR (sin prueba gratuita)
            sequence: 1, // Secuencia del ciclo
            total_cycles: 12, // Ciclos infinitos (usa un número si quieres limitarlo)
            pricing_scheme: {
              fixed_price: {
                value: price, // Precio del plan
                currency_code: 'USD' // Moneda
              }
            }
          }
        ],
        payment_preferences: {
          auto_bill_outstanding: true, // Factura automáticamente montos pendientes
          setup_fee: {
            value: '0.00', // Sin tarifa inicial
            currency_code: 'USD'
          },
          setup_fee_failure_action: 'CONTINUE', // Continúa si falla el cobro inicial
          payment_failure_threshold: 3 // Número de intentos fallidos antes de cancelar
        }
      })

      if (planPaypal.status === 201) {
        planPaypal.data.price = price

        const plan = await this.planModel.createPlan(planPaypal.data)

        if (plan) {
          return res.status(201).json({
            status: 201,
            data: [],
            message: 'Plan creado correctamente'
          })
        } else {
          return res.status(400).json({
            status: 400,
            data: [],
            message: 'Plan no creado'
          })
        }
      } else {
        return res.status(400).json({
          status: 400,
          data: planPaypal.data,
          message: planPaypal.message
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

module.exports = PlanController

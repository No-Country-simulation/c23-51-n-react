const { validationResult } = require('express-validator')
const { groupValidationErrors } = require('../utils/validationUtils.js')
const PaypalService = require('../services/PaypalService.js')

class productController {
  constructor (productModel) {
    this.productModel = productModel
  }

  async createProduct (req, res) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        const groupedErrors = groupValidationErrors(errors.array())

        return res.status(400).json({
          message: 'Errores de validación',
          errors: groupedErrors
        })
      }

      const productData = req.body
      const paypal = new PaypalService()
      const productPaypal = await paypal.createProduct(productData)

      if (productPaypal.status === 201) {
        productPaypal.data.type = req.body.type
        productPaypal.data.category = req.body.category

        const product = this.productModel.createProduct(productPaypal.data)

        if (product) {
          return res.status(201).json({
            status: 201,
            data: [],
            message: 'producto creado correctamente'
          })
        } else {
          return res.status(400).json({
            status: 400,
            data: [],
            message: 'producto no creado'
          })
        }
      } else {
        return res.status(400).json({
          status: 400,
          data: productPaypal.data,
          message: productPaypal.message
        })
      }
    } catch (error) {
      return res.status(500).json({
        status: 500,
        data: [],
        message: 'Error interno del sistema'
      })
    }
  }
}

module.exports = productController

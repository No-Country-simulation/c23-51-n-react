const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController.js')
const ProductModel = require('../models/ProductModel.js')
const { connection: pool } = require('../config/db.js')
const { validateCreateProduct } = require('../validations/productValidations.js')

const productModel = new ProductModel(pool)
const productController = new ProductController(productModel)
router
  .post('/products',
    validateCreateProduct,
    productController.createProduct.bind(productController)
  )

module.exports = router

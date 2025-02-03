const express = require('express')
const router = express.Router()
const AuthMiddleware = require('../middlewares/authMiddleware.js')
const UserModel = require('../models/UserModel.js')
const ProductController = require('../controllers/ProductController.js')
const ProductModel = require('../models/ProductModel.js')
const { connection: pool } = require('../config/db.js')
const { validateCreateProduct } = require('../validations/productValidations.js')

const productModel = new ProductModel(pool)
const userModel = new UserModel(pool)
const productController = new ProductController(productModel)
const authMiddleware = new AuthMiddleware(process.env.SECRET_KEY, userModel)

router
  .post('/products',
    validateCreateProduct,
    authMiddleware.validateToken.bind(authMiddleware),
    productController.createProduct.bind(productController)
  )

module.exports = router

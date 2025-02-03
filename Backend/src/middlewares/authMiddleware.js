const jwt = require('jsonwebtoken')

class AuthMiddleware {
  constructor (secretKey, userModel) {
    this.secretKey = secretKey
    this.userModel = userModel
  }

  async validateToken (req, res, next) {
    const header = req.headers.authorization

    if (!header || !header.startsWith('Bearer ')) {
      return res.status(401).json({
        status: 401,
        message: 'Token no proporcionado o es inválido'
      })
    }

    const token = header.split(' ')[1]

    try {
      console.log(token)

      const decoded = jwt.verify(token, this.secretKey)

      console.log(decoded.user_id)

      const user = await this.userModel.findById(decoded.user_id)
      console.log(user)

      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' })
      }

      req.user = {
        ...(decoded.user_id && { id: decoded.user_id }),
        ...(decoded.plan_id && { plan_id: decoded.plan_id }),
        ...(decoded.email && { email: decoded.email }),
        ...(decoded.name && { name: decoded.name })
      }

      next()
    } catch (error) {
      return res.status(401).json({
        status: 401,
        message: 'Token inválido o expirado'
      })
    }
  }
}

module.exports = AuthMiddleware

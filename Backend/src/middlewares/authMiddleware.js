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
      // Decodificar el token (esta parte sigue siendo síncrona)
      const decoded = jwt.verify(token, this.secretKey)

      console.log(decoded)

      // Buscar al usuario en la base de datos
      const user = await this.userModel.findById(decoded.user_id)
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' })
      }

      req.user_id = user.id // Adjuntar los datos del usuario al objeto req
      next() // Pasar al siguiente middleware o controlador
    } catch (error) {
      return res.status(401).json({
        status: 401,
        message: 'Token inválido o expirado'
      })
    }
  }
}

module.exports = AuthMiddleware

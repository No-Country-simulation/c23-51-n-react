const swaggerJsdoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de momentum',
      version: '1.0.0',
      description: 'Documentación de la API para la webApp de calistenia'
    },
    servers: [
      {
        url: 'http://192.168.232.127:3000' // URL base del servidor
      }
    ]
  },
  apis: ['./src/routes/*.js'] // Ruta donde están tus archivos de rutas
}

const specs = swaggerJsdoc(options)
module.exports = specs

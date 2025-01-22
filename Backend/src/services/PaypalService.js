const axios = require('axios')
const logger = require('../utils/logger.js')

class PaypalService {
  #clientId
  #secret
  #baseUrl
  #version
  #methodAuth
  constructor () {
    this.#clientId = process.env.CLIENT_ID_PAYPAL
    this.#secret = process.env.SECRET_KEY_PAYPAL
    this.#baseUrl = (process.env.APP_ENV === 'development')
      ? process.env.URL_SANDBOX_PAYPAL
      : process.env.URL_LIVE_PAYPAL
    this.#version = process.env.VERSION_PAYPAL
    this.#methodAuth = process.env.METHOD_AUTH_PAYPAL
  }

  async getAccessToken () {
    try {
      const response = await axios.post(`${this.#baseUrl}/${this.#version}/${this.#methodAuth}`,
        'grant_type=client_credentials',
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          auth: {
            username: this.#clientId,
            password: this.#secret
          }
        }
      )
      logger.info('Token obtenido correctamente')
      return {
        access_token: response.data.access_token,
        token_type: response.data.token_type
      }
    } catch (error) {
      logger.error('Error al obtener el token de acceso:', error)
      throw error
    }
  }

  async createProduct (product) {
    try {
      const { access_token: accessToken, token_type: tokenType } = await this.getAccessToken()

      const response = await axios.post(`${this.#baseUrl}/${this.#version}/catalogs/products`,
        product,
        {
          headers: {
            Authorization: `${tokenType} ${accessToken}`
          }
        }
      )
      logger.info('producto paypal creado correctamente')
      return {
        status: 201,
        data: response.data,
        message: 'Producto paypal creado correctamente'
      }
    } catch (error) {
      if (error.response) {
        // Error de respuesta HTTP
        const { status, data: dataError } = error.response

        logger.error(`Error ${status} en la solicitud a PayPal:`, dataError)
        return {
          status,
          data: dataError.details || [],
          message: dataError.message || 'Error al procesar la solicitud'
        }
      } else if (error.request) {
        // No hubo respuesta del servidor
        logger.error('No se recibió respuesta del servidor:', error.request)
        return {
          status: 500,
          data: [],
          message: 'No se pudo conectar con el servidor de PayPal'
        }
      } else {
        // Error interno
        logger.error('Error interno en el servidor:', error.message)
        return {
          status: 500,
          data: [],
          message: 'Error interno en el servidor'
        }
      }
    }
  }

  async createPlan (plan) {
    try {
      const { access_token: accessToken, token_type: tokenType } = await this.getAccessToken()

      const response = await axios.post(`${this.#baseUrl}/${this.#version}/billing/plans`,
        plan,
        {
          headers: {
            Authorization: `${tokenType} ${accessToken}`
          }
        }
      )

      logger.info('Plan de paypal creado correctamente')

      return {
        status: 201,
        data: response.data,
        message: 'Plan de paypal creado correctamente'
      }
    } catch (error) {
      if (error.response) {
        // Error de respuesta HTTP
        const { status, data: dataError } = error.response

        logger.error(`Error ${status} en la solicitud a PayPal:`, dataError)
        return {
          status,
          data: dataError.details || [],
          message: dataError.message || 'Error al procesar la solicitud'
        }
      } else if (error.request) {
        // No hubo respuesta del servidor
        logger.error('No se recibió respuesta del servidor:', error.request)
        return {
          status: 500,
          data: [],
          message: 'No se pudo conectar con el servidor de PayPal'
        }
      } else {
        // Error interno
        logger.error('Error interno en el servidor:', error.message)
        return {
          status: 500,
          data: [],
          message: 'Error interno en el servidor'
        }
      }
    }
  }

  async createSuscription (suscription) {
    try {
      const { access_token: accessToken, token_type: tokenType } = await this.getAccessToken()

      const response = await axios.post(`${this.#baseUrl}/${this.#version}/billing/subscriptions`,
        suscription,
        {
          headers: {
            Authorization: `${tokenType} ${accessToken}`
          }
        }
      )

      logger.info('Suscripcion de paypal creado correctamente')

      return {
        status: 201,
        data: response.data,
        message: 'Suscripcion de paypal creado correctamente'
      }
    } catch (error) {
      if (error.response) {
        // Error de respuesta HTTP
        const { status, data: dataError } = error.response

        logger.error(`Error ${status} en la solicitud a PayPal:`, dataError)
        return {
          status,
          data: dataError.details || [],
          message: dataError.message || 'Error al procesar la solicitud'
        }
      } else if (error.request) {
        // No hubo respuesta del servidor
        logger.error('No se recibió respuesta del servidor:', error.request)
        return {
          status: 500,
          data: [],
          message: 'No se pudo conectar con el servidor de PayPal'
        }
      } else {
        // Error interno
        logger.error('Error interno en el servidor:', error.message)
        return {
          status: 500,
          data: [],
          message: 'Error interno en el servidor'
        }
      }
    }
  }
}

module.exports = PaypalService

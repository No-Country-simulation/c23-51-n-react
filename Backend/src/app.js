const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const userRoute = require('./routes/UserRoute.js')
const rateLimit = require('express-rate-limit')

const userCreationLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // Ventana de tiempo de 15 minutos
  max: 10, // Máximo de 10 solicitudes por IP
  message: { error: 'Demasiadas solicitudes, intenta más tarde.' }
})

const app = express()
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: false }))
app.use(cors())
app.use(morgan('dev'))

app.use('/api', userCreationLimiter, userRoute)

module.exports = { app }

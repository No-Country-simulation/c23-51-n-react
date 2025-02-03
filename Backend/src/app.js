const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const userRoute = require('./routes/UserRoute.js')
const webHookRoute = require('./routes/WebhookRoute.js')
const productRoute = require('./routes/ProductRoute.js')
const planRoute = require('./routes/PlanRoute.js')
const exerciseRoute = require('./routes/ExerciseRoute.js')
const exerciseRoutineRoute = require('./routes/RoutineRoute.js')
const suscriptionRoute = require('./routes/SuscriptionRoute.js')
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
// app.set('trust proxy', true) // O usar 'loopback' si es local
app.set('trust proxy', 'loopback')

app.use('/api', userCreationLimiter, userRoute)
app.use('/api', productRoute)
app.use('/api', planRoute)
app.use('/api', suscriptionRoute)
app.use('/api', exerciseRoute)
app.use('/api', exerciseRoutineRoute)
app.use('/api', webHookRoute)

module.exports = { app }

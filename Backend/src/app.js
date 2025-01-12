const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const userRoute = require('./routes/UserRoute.js')

const app = express()
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: false }))
app.use(cors())
app.use(morgan('dev'))

app.use('/api', userRoute)

module.exports = { app }

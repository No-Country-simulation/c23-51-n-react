
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: false}));
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {    
    res.json({ message: 'API de la aplicación de calistenia' });
});

module.exports = { app };
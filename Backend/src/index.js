require('dotenv').config()

const { app } = require('./app')
const { connection } = require('./config/db')

async function main () {
  try {
    const conn = await connection.getConnection()
    console.log('Conectado a la base de datos')

    app.listen(process.env.PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`)
    })

    conn.release()
  } catch (err) {
    console.error('Error cambiando a la base de datos:', err.stack)
  }
}

main()

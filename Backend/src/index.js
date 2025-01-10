const { app } = require("./app");
require("dotenv").config();
const ip = require("ip");
const { connection, createDatabase } = require("./config/db");

function main() {
    createDatabase();

    connection.changeUser({database : process.env.DB_NAME}, (err) => {
        if (err) {
            console.error('Error cambiando a la base de datos:', err.stack);
            return;
        }
        console.log('Conectado a la base de datos');
        app.listen(process.env.PORT, () => {
            console.log(`Servidor corriendo en http://${ip.address()}:${process.env.PORT}`);
        });
    });
}

main();
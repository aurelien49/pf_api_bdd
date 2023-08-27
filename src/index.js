const http = require('http');
const app = require('./app');
const database_connection = require("./db");
require('dotenv').config();
const PORT = process.env.PORT || 9001;

const server = http.createServer(app);

// Connection à la base de données puis démarrage du serveur
database_connection()
    .then((_) => {
        server.listen(PORT, () => {
            if (process.env.NODE_ENV === 'production') {
                console.log("\x1b[32m", `✔    2) Successful server started on production             ✔`);
            } else {
                console.log("\x1b[32m", `✔    2) Successful server started on local port : ${PORT} ✔`);
            }
        });
    }).catch((error) => {
        console.log(error)
    });

module.exports.PORT = PORT;

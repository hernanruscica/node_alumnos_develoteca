const mysql = require("mysql");

// Crea la conexión a la base de datos
//190.228.29.62 ip publica
const connection = mysql.createConnection({
  host: 'https://190.228.29.62',
  user: 'grupo97admin',
  password: 'b4rt0n2018',
  database: 'develoteca_escuela_db'
});
connection.connect(
    (err) => {
        if (!err){
            console.log("conexion establecida correctamente");
        } else {
            console.log("Error de conexion");
        }        
    }
);
module.exports = connection;
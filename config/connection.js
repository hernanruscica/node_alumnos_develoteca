const mysql = require("mysql");

// Crea la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'escuela_db'
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
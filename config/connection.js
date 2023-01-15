const mysql = require("mysql");

// Crea la conexión a la base de datos
const connection = mysql.createConnection({
  host: process.env.dbhost, 
  user: process.env.dbuser,
  password: process.env.dbpassword,
  database: process.env.database
});
connection.connect(
    (err) => {
        if (!err){
            console.log("conexion a la bd establecida correctamente");
        } else {
            console.log("Error de conexion a la bd");
        }        
    }
);
module.exports = connection;
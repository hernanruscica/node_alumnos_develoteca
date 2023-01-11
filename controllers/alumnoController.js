//Faltaria llamar al modelo que busque al o los usuarios.
const conexion = require("../config/connection");
const alumno = require("../models/alumnoModel");

module.exports = {
    mostrarAlumnos : (req, res) => {          
        alumno.obtenerTodosAlumnos(conexion, (err, data) => {
            if (!err) {
                console.log(data);
            }else{
                console.log("error en la consulta");
            }
        })
        conexion.end();
        res.render('alumnos', {nombre: 'pepe', dni: 33125458, usuario: 'pepe_92'});
    }
}
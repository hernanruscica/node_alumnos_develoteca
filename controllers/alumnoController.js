//Faltaria llamar al modelo que busque al o los usuarios.
const conexion = require("../config/connection");
const alumno = require("../models/alumnoModel");

module.exports = {
    mostrarAlumnos : (req, res) => {          
        let resultados = null;
        alumno.obtenerTodosAlumnos(conexion, (err, results) => {
            if (!err) {                
                res.render('alumnos', {resultados : results});  
            }else{
                console.log("error en la consulta");
            }
        })
        conexion.end();
          
    },
    mostrarJuanes : (req, res) => {
        alumno.buscarJuanes(conexion, (err, data) => {
            if (!err) {
                console.log(data);
            }else{
                console.log("error en la consulta");
            }
        })  
        conexion.end();     
        res.send('consulta correcta');
    }
    
}
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
    },
    mostrarJuanes : (req, res) => {
        alumno.buscarJuanes(conexion, (err, data) => {
            if (!err) {
                console.log(data);
            }else{
                console.log("error en la consulta");
            }
        })             
        res.send('consulta correcta');
    },
    mostrarFormuCrear : (req, res) => {
        res.render('crearAlumno');
    }
    
}
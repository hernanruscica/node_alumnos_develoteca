//Faltaria llamar al modelo que busque al o los usuarios.
const conexion = require("../config/connection");
const alumno = require("../models/alumnoModel");

/* bcrypt*/
const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = {
    mostrarAlumnos : (req, res) => {          
        
        alumno.obtenerTodosAlumnos(conexion, (err, results) => {
            if (!err) {                
                //console.log(results);
                res.render('alumnos', {resultados : results});  
            }else{
                console.log("error en la consulta");
            }
        })
    },
    verAlumno : (req, res) => {
        const id = req.params.id;
        //res.send(`viendo al usuario con id: ${id}`);
        alumno.verAlumno(id, conexion, (err, results) => {
            if (!err) {
                console.log(results);
                //res.send(data);
                res.render('ver_alumno', {resultado: results[0]});
            }else{
                console.log("error en la consulta");
            }    
        });
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
    },
    insertarAlumno : async (req, res) => {
        const formData = req.body;
        //console.log(req.files.image[0]);
        const passwordTexto = req.body.password;
        //console.log(passwordTexto);
        const imagePathName = req.files.image[0].filename;

        let passwordHashed = await bcrypt.hash(passwordTexto, saltRounds); 

        alumno.insertarAlumno(formData, imagePathName, passwordHashed, conexion, (err, result) => {
            if(err) throw err;
            console.log('Alumno agregado');
            res.redirect('/alumnos');
        });
    },
    eliminarAlumno : (req, res) => {
        const id = req.params.id;
        
        alumno.eliminarAlumno(id, conexion, (err, result) => {
            if(err) throw err;     
        });
        res.redirect('/alumnos');
        console.log(`eliminando a id: ${id}`);
        /**/
    },
    editarAlumno : (req, res) => {
        const id = req.params.id;
        alumno.verAlumno(id, conexion, (err, results) => {
            if (!err) {
                console.log(results);
                //res.send(data);
                res.render('editarAlumno', {resultado: results[0]});
            }else{
                console.log("error en la consulta");
            }    
        });        
    },
    actualizarAlumno : (req, res) => {
        const id = req.params.id;
        const formData = req.body;
        console.log(`Actualizando el registro ${id} con los siguientes datos: ${formData.nombres} y ${formData.email}`);
        alumno.actualizarAlumno(id, formData, conexion, (err, result) => {
            if(err) throw err;     
        });
        res.redirect('/alumnos');
        console.log(`actualizado el alumno con id: ${id}`);        
    }
}
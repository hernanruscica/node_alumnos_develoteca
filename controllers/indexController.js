const conexion = require("../config/connection");
const indexModel = require("../models/indexModel");

module.exports = {
 index: (req, res) => {
    //console.log("desde index controller");
    //res.send('<h1>Bienvenido a mi app!</h1><p>Podes iniciar sesion o registrarte</p><br><a href="/alumnos/">INGRESAR</a>');
    res.render('index');
 },    
 logueado: (req, res) => {    
    //res.send('<h1>Bienvenido a mi app!</h1><p>Bienvenido de nuevo</p>');
    res.render('logueado', {mensaje: 'Bienvenido de nuevo. Desde ejs'});
 },
 autentificacion: (req, res) => {
   const userNameSearched = req.body.username;
   const userNamePassword = req.body.password;
   //me faltaria comparar con usernames con el que esta ingresando y luego hacer las indicaciones de chatgpt
   indexModel.obtenerTodosUsername (conexion, (error, results) => {
      if (!error){
         res.send(`<p> username: ${userNameSearched} password: ${userNamePassword} <br> userNames: ${JSON.stringify(results)}`);
      }else{
         console.log("error en la consulta para buscar los username");
      }
   })
   
 }
}
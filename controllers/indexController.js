const conexion = require("../config/connection");
const indexModel = require("../models/indexModel");

const bcrypt = require('bcrypt');

module.exports = {
 index: (req, res) => {    
    res.render('index');
 },    
 logueado: (req, res) => {        
    res.render('logueado', {mensaje: 'Bienvenido de nuevo. Desde ejs'});
 }, 
 autentificacion:  (req, res) => {
   const userNameSearched = req.body.username;
   const userNamePassword = req.body.password; 
   indexModel.buscarPorUsername  (userNameSearched, conexion, async (error, results) => {
      //si encontró al usuario 
      if (results.length != 0){
         const passwordOk = await bcrypt.compare(userNamePassword, results[0].password);
         if (passwordOk){
            //res.send(`<p> username: ${userNameSearched} password: ${userNamePassword} ENCONTRADO Y VALIDADO ! <a href='/alumnos'>ALUMNOS</a>`);
            
         }else{
            res.send(`<p> username: ${userNameSearched} password: ${userNamePassword} PASSWORD INCORRECTO ! <a href='/'>HOME</a>`);
         }
      //si No lo encontró
      }else{
         res.send(`<p> username: ${userNameSearched} NO ENCONTRADO ! </p><a href='/'>HOME</a>`);         
      } 
   })   
 }
}
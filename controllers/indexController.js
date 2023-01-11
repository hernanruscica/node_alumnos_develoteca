module.exports = {
 index: (req, res) => {
    //console.log("desde index controller");
    res.send('<h1>Bienvenido a mi app!</h1><p>Podes iniciar sesion o registrarte</p>');
 },    
 logueado: (req, res) => {    
    //res.send('<h1>Bienvenido a mi app!</h1><p>Bienvenido de nuevo</p>');
    res.render('logueado', {mensaje: 'Bienvenido de nuevo. Desde ejs'});
 }
}
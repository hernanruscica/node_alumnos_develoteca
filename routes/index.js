const express = require('express');
const indexController = require('../controllers/indexController');
const alumnoController = require('../controllers/alumnoController');
var router = express.Router();

//rutas de index 
router.get('/', indexController.index);
router.get('/logueado', indexController.logueado);

//Rutas de alumno
router.get('/alumnos', alumnoController.mostrarAlumnos);

//mostrarJuanes
router.get('/juanes', alumnoController.mostrarJuanes);
module.exports = router;
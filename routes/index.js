
const express = require('express');
const indexController = require('../controllers/indexController');
const alumnoController = require('../controllers/alumnoController');
var router = express.Router();

//index controller
router.get('/', indexController.index);
router.get('/logueado', indexController.logueado);

//Alumno controller
router.get('/alumnos', alumnoController.mostrarAlumnos);

module.exports = router;
const express = require('express');
const alumnoController = require('../controllers/alumnoController');
var router = express.Router();

//Rutas de alumno
router.get('/', alumnoController.mostrarAlumnos);
router.get('/juanes', alumnoController.mostrarJuanes);
router.get('/crear', alumnoController.mostrarFormuCrear);

module.exports = router;
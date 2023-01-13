const express = require('express');
const alumnoController = require('../controllers/alumnoController');
var router = express.Router();

//Rutas de alumno
router.get('/', alumnoController.mostrarAlumnos);
router.get('/ver/:id', alumnoController.verAlumno);
//router.get('/juanes', alumnoController.mostrarJuanes);
router.get('/crear', alumnoController.mostrarFormuCrear);
router.post('/insertar-alumno', alumnoController.insertarAlumno);
router.delete('/eliminar/:id', alumnoController.eliminarAlumno);
router.get('/editar/:id', alumnoController.editarAlumno);
router.post('/actualizar/:id', alumnoController.actualizarAlumno);

module.exports = router;
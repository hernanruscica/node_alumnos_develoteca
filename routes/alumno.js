const express = require('express');
const alumnoController = require('../controllers/alumnoController');
var router = express.Router();
const multer = require('multer');
//var upload = multer({dest: 'uploads/'});
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  });
  const upload = multer({ storage });  

//Rutas de alumno
router.get('/', alumnoController.mostrarAlumnos);
router.get('/ver/:id', alumnoController.verAlumno);
//router.get('/juanes', alumnoController.mostrarJuanes);
/*
app.post('/upload', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'title' }, { name: 'description' }]), (req, res) => {
    // Código para almacenar la imagen y los campos en la base de datos
});
*/
router.get('/crear', alumnoController.mostrarFormuCrear);
//Asi esta antes de multer ...router.post('/insertar-alumno', alumnoController.insertarAlumno); abajo, despues de multer....
router.post('/insertar-alumno', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'nombres' }, { name: 'apellidos' }, { name: 'username' }, { name: 'dni' }, { name: 'mail' }, { name: 'password' }]), alumnoController.insertarAlumno);

router.delete('/eliminar/:id', alumnoController.eliminarAlumno);
router.get('/editar/:id', alumnoController.editarAlumno);
router.post('/actualizar/:id', alumnoController.actualizarAlumno);

module.exports = router;
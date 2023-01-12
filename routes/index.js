const express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();

//rutas de index 
router.get('/', indexController.index);
router.get('/logueado', indexController.logueado);

module.exports = router;
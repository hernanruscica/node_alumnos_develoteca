//console.log("hola desde la consola");
const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const indexRouter = require('./routes/index');
const alumnoController = require('./routes/alumno');

const PORT = 3000;

app.use('/', indexRouter);
app.use('/alumnos', alumnoController);

app.use(express.static(path.join(__dirname, 'views')));

app.listen(PORT, () => {
    console.log(`app escuchando en http://localhost:${PORT}`);
})
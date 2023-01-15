//console.log("hola desde la consola");
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('dotenv').config();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const indexRouter = require('./routes/index');
const alumnoController = require('./routes/alumno');

const PORT = process.env.port || 10000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', indexRouter);
app.use('/alumnos', alumnoController);
app.use(methodOverride('_method'));


app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static('./public'));


app.listen(PORT, () => {
    console.log(`app escuchando en http://localhost:${PORT}`);
})
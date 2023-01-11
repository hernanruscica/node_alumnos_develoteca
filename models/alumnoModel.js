module.exports = {
    obtenerTodosAlumnos : (con, func) => {
        con.query("SELECT * FROM alumnos;", func);
    },

    buscarJuanes: (con, func) => {
        con.query("SELECT * FROM alumnos WHERE nombres = 'Juan'", func);
    }
}
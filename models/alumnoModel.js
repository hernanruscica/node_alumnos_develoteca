module.exports = {
    obtenerTodosAlumnos : (con, func) => {
        con.query("SELECT * FROM alumnos;", func);
    }
}
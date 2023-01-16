module.exports = {
    obtenerTodosUsername : (con, func) => {
        con.query("SELECT username FROM alumnos;", func);
    }
}
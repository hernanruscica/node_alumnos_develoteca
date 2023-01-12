module.exports = {
    obtenerTodosAlumnos : (con, func) => {
        con.query("SELECT * FROM alumnos;", func);
    },
    verAlumno: (id, con, func) => {
        con.query(`SELECT * FROM alumnos WHERE id = ${id};`, func)
    },

    buscarJuanes: (con, func) => {
        con.query("SELECT * FROM alumnos WHERE nombres = 'Juan'", func);
    },

    insertarAlumno: (alumnoData, con, func) => {
        con.query(`INSERT INTO alumnos (nombres, apellidos, username, dni, mail, password)
                    VALUES ('${alumnoData.nombres}', '${alumnoData.apellidos}', '${alumnoData.username}', '${alumnoData.dni}', '${alumnoData.mail}', '${alumnoData.password}');`, func);
    },
    eliminarAlumno: (id, con, func) => {
        con.query(`DELETE FROM alumnos WHERE id = ${id};`);
    }
}
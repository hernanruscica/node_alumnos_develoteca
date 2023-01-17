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

    insertarAlumno: (alumnoData, image, passwordHashed, con, func) => {
        //console.log(image);
        con.query(`INSERT INTO alumnos (nombres, apellidos, username, dni, mail, password, foto)
                    VALUES ('${alumnoData.nombres}', '${alumnoData.apellidos}', '${alumnoData.username}', '${alumnoData.dni}', '${alumnoData.mail}', '${passwordHashed}', '${image}')`,  func);
    },
    eliminarAlumno: (id, con, func) => {
        con.query(`DELETE FROM alumnos WHERE id = ${id};`);
    },
    actualizarAlumno: (id, data, con, func) => {
        con.query(`UPDATE alumnos SET nombres = '${data.nombres}', apellidos = '${data.apellidos}', username = '${data.username}', dni = ${data.dni}, mail = '${data.mail}', password = '${data.password}' WHERE id = '${id}';`, func);
    }
}
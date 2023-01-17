module.exports = {
    buscarPorUsername : (username, con, func) => {
        con.query(`SELECT password FROM alumnos WHERE username = '${username}' ;`, func);
    }
}
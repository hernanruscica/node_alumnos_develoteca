CREATE DATABASE develoteca_escuela_db;
USE develoteca_escuela_db;
CREATE TABLE alumnos (
    id INTEGER AUTO_INCREMENT,
    nombres varchar(50) NOT NULL,
    apellidos varchar(50) NOT NULL,
    username varchar(25) NOT NULL,
    dni INTEGER NOT NULL,
    mail varchar(50) NOT NULL,
    password varchar(50) NOT NULL,
    PRIMARY KEY (id)
  );

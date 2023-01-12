
USE develoteca_escuela_db;

/*Insertar un alumno en particular con los datos ya validados*/
INSERT INTO alumnos (nombres, apellidos, username, dni, mail, password)
VALUES ('cesar', 'ruscica', 'cruscica', 28470361, 'cruscica@trabajo.gob.ar', '1234567');


/*Insertar varios usuarios de prueba*/
INSERT INTO alumnos (nombres, apellidos, username, dni, mail, password)
VALUES 
    ('Juan', 'Perez', 'jperez', 12234568, 'jperez@mail.com', 'pass1'),
    ('Pedro', 'Garcia', 'pgarcia', 14234567, 'pgarcia@mail.com', 'pass2'),
    ('Carlos', 'Sanchez', 'csanchez', 18234566, 'csanchez@mail.com', 'pass3'),
    ('Javier', 'Romero', 'jromero', 15234565, 'jromero@mail.com', 'pass4'),
    ('Diego', 'Ramirez', 'dramirez', 14234564, 'dramirez@mail.com', 'pass5'),
    ('Miguel', 'Flores', 'mflores', 16234563, 'mflores@mail.com', 'pass6'),
    ('Francisco', 'Gonzalez', 'fgonzalez', 10234562, 'fgonzalez@mail.com', 'pass7'),
    ('Jorge', 'Morales', 'jmorales', 13234561, 'jmorales@mail.com', 'pass8'),
    ('Luis', 'Garcia', 'lgarcia', 14234560, 'lgarcia@mail.com', 'pass9'),
    ('Rafael', 'Gomez', 'rgomez', 15234569, 'rgomez@mail.com', 'pass10'),
    ('Santiago', 'Lopez', 'slopez', 12234568, 'slopez@mail.com', 'pass11'),
    ('Andres', 'Martin', 'amartin', 17234567, 'amartin@mail.com', 'pass12'),
    ('Alejandro', 'Hernandez', 'ahernandez', 13234566, 'ahernandez@mail.com', 'pass13'),
    ('Sebastian', 'Gutierrez', 'sgutierrez', 14234565, 'sgutierrez@mail.com', 'pass14'),
    ('Oscar', 'Rodriguez', 'orodriguez', 18234564, 'orodriguez@mail.com', 'pass15'),
    ('Eduardo', 'Munoz', 'emunoz', 12234563, 'emunoz@mail.com', 'pass16'),
    ('Damian', 'Delgado', 'ddelgado', 15234562, 'ddelgado@mail.com', 'pass17'),
    ('Cristobal', 'Castro', 'ccastro', 14234561, 'ccastro@mail.com', 'pass18'),
    ('Victor', 'Benitez', 'vbenitez', 16234560, 'vbenitez@mail.com', 'pass19'),
    ('Fabian', 'Alvarez', 'falvarez', 10234569, 'falvarez@mail.com', 'pass20')
;

INSERT INTO alumnos (nombres, apellidos, username, dni, mail, password)
VALUES 
    ('Maria', 'Perez', 'mperez', 12234568, 'mperez@mail.com', 's3cr3t_p@s5'),
    ('Ana', 'Garcia', 'agarcia', 14234567, 'agarcia@mail.com', 's3cr3t_p@s5'),
    ('Sofia', 'Sanchez', 'ssanchez', 18234566, 'ssanchez@mail.com', 's3cr3t_p@s5'),
    ('Isabella', 'Romero', 'iromero', 15234565, 'iromero@mail.com', 's3cr3t_p@s5'),
    ('Valentina', 'Ramirez', 'vramirez', 14234564, 'vramirez@mail.com', 's3cr3t_p@s5'),
    ('Camila', 'Flores', 'cflores', 16234563, 'cflores@mail.com', 's3cr3t_p@s5'),
    ('Valeria', 'Gonzalez', 'vgonzalez', 10234562, 'vgonzalez@mail.com', 's3cr3t_p@s5'),
    ('Gabriela', 'Morales', 'gmorales', 13234561, 'gmorales@mail.com', 's3cr3t_p@s5'),
    ('Daniela', 'Garcia', 'dgarcia', 14234560, 'dgarcia@mail.com', 's3cr3t_p@s5'),
    ('Paula', 'Gomez', 'pgomez', 15234569, 'pgomez@mail.com', 's3cr3t_p@s5'),
    ('Maria Jose', 'Martin', 'mjmartin', 17234567, 'mjmartin@mail.com', 's3cr3t_p@s5'),
    ('Juliana', 'Hernandez', 'jhernandez', 13234566, 'jhernandez@mail.com', 's3cr3t_p@s5'),
    ('Catalina', 'Gutierrez', 'cgutierrez', 14234565, 'cgutierrez@mail.com', 's3cr3t_p@s5'),
    ('Andrea', 'Rodriguez', 'arodriguez', 18234564, 'arodriguez@mail.com', 's3cr3t_p@s5'),
    ('Diana', 'MunozF', 'dmunozF', 12234563, 'dmunozF@mail.com', 'passF16'),
    ('Samantha', 'Delgado', 'sdelgadoF', 15234562, 'sdelgadoF@mail.com', 'passF17'),
    ('Antonia', 'Castro', 'acastroF', 14234561, 'acastroF@mail.com', 'passF18'),
    ('Evelyn', 'Benitez', 'ebenitezF', 16234560, 'ebenitezF@mail.com', 'pass19'),
    ('Eleonora', 'Mendez', 'emendez', 24156852, 'emendez@tumail.com', '2541desg33'),
    ('Carla', 'Campese', 'ccampese', 18457963, 'ccampese@mimail.com', 'm1c4ll3')
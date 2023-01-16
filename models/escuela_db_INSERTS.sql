
USE develoteca_escuela_db;

/*Insertar un alumno en particular con los datos ya validados*/
INSERT INTO alumnos (nombres, apellidos, username, dni, mail, password, foto)
VALUES ('cesar', 'ruscica', 'cruscica', 28470361, 'cruscica@trabajo.gob.ar', '1234567', 'upload//avatar_default.webp');


/*Insertar varios usuarios de prueba*/


INSERT INTO alumnos (nombres, apellidos, username, dni, mail, password, foto)
VALUES 
    ('Maria', 'Perez', 'mperez', 12234568, 'mperez@mail.com', 's3cr3t_p@s5', 'public/avatar_default.webp'),
    ('Ana', 'Garcia', 'agarcia', 14234567, 'agarcia@mail.com', 's3cr3t_p@s5', 'public/avatar_default.webp'),
    ('Sofia', 'Sanchez', 'ssanchez', 18234566, 'ssanchez@mail.com', 's3cr3t_p@s5', 'public/avatar_default.webp'),
    ('Isabella', 'Romero', 'iromero', 15234565, 'iromero@mail.com', 's3cr3t_p@s5', 'public/avatar_default.webp'),
    ('Valentina', 'Ramirez', 'vramirez', 14234564, 'vramirez@mail.com', 's3cr3t_p@s5', 'public/avatar_default.webp'),
    ('Camila', 'Flores', 'cflores', 16234563, 'cflores@mail.com', 's3cr3t_p@s5', 'public/avatar_default.webp'),
    ('Valeria', 'Gonzalez', 'vgonzalez', 10234562, 'vgonzalez@mail.com', 's3cr3t_p@s5', 'public/avatar_default.webp'),
    ('Gabriela', 'Morales', 'gmorales', 13234561, 'gmorales@mail.com', 's3cr3t_p@s5', 'public/avatar_default.webp'),
    ('Daniela', 'Garcia', 'dgarcia', 14234560, 'dgarcia@mail.com', 's3cr3t_p@s5', 'public/avatar_default.webp'),
    ('Paula', 'Gomez', 'pgomez', 15234569, 'pgomez@mail.com', 's3cr3t_p@s5', 'public/avatar_default.webp'),
    ('Maria Jose', 'Martin', 'mjmartin', 17234567, 'mjmartin@mail.com', 's3cr3t_p@s5', 'public/avatar_default.webp'),
    ('Juliana', 'Hernandez', 'jhernandez', 13234566, 'jhernandez@mail.com', 's3cr3t_p@s5', 'public/avatar_default.webp'),
    ('Catalina', 'Gutierrez', 'cgutierrez', 14234565, 'cgutierrez@mail.com', 's3cr3t_p@s5', 'public/avatar_default.webp'),
    ('Andrea', 'Rodriguez', 'arodriguez', 18234564, 'arodriguez@mail.com', 's3cr3t_p@s5', 'public/avatar_default.webp'),
    ('Diana', 'MunozF', 'dmunozF', 12234563, 'dmunozF@mail.com', 'passF16', 'public/avatar_default.webp'),
    ('Samantha', 'Delgado', 'sdelgadoF', 15234562, 'sdelgadoF@mail.com', 'passF17', 'public/avatar_default.webp'),
    ('Antonia', 'Castro', 'acastroF', 14234561, 'acastroF@mail.com', 'passF18', 'public/avatar_default.webp'),
    ('Evelyn', 'Benitez', 'ebenitezF', 16234560, 'ebenitezF@mail.com', 'pass19', 'public/avatar_default.webp'),
    ('Eleonora', 'Mendez', 'emendez', 24156852, 'emendez@tumail.com', '2541desg33', 'public/avatar_default.webp'),
    ('Carla', 'Campese', 'ccampese', 18457963, 'ccampese@mimail.com', 'm1c4ll3', 'public/avatar_default.webp')
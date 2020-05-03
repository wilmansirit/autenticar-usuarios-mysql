<!-- 1.- Crear base de datos con el siguiente comando "create database": -->

        CREATE DATABASE nombre_de_base_de_datos CHARACTER SET utf8;

<!-- 2.- Crear nuevo usuario: -->

        CREATE USER nuevo_usuario@localhost;

<!-- O también junto con el PASSWORD -->

        CREATE USER autenticar_usuarios_mysql@localhost IDENTIFIED BY 'm94xp6zugrrjpc5m$';

<!-- 3.- Asignar una clave para el acceso con este usuario: -->

        SET PASSWORD FOR autenticar_usuarios_mysql@localhost = PASSWORD('UnAcl4v3muyDiFiCiL');

<!-- 4.- Asignar los privilegios para el acceso a la base de datos específica: -->

        GRANT ALL ON autenticar_usuarios_mysql.* TO autenticar_usuarios_mysql@localhost WITH GRANT OPTION;

<!-- O a todas las bases de datos: -->

        GRANT ALL ON *.* TO autenticar_usuarios_mysql@localhost;

<!-- 5.- Reiniciar la caché -->

        FLUSH PRIVILEGES;

<!-- 6.- Mostrar Usuarios -->

        SELECT USER from mysql.user;

<!-- 7.- Mostrar DATABASES y USERS -->

        SELECT u.User,Db FROM mysql.user u,mysql.db d WHERE u.User = d.User;

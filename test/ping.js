const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize(
    'AUTENTICAR_USUARIOS_MYSQL',          // Database
    'AUTENTICAR_USUARIOS_MYSQL',          // User name
    'BXLaWEEbR1-@VPzi',                    // Password
    {
        host: '172.18.0.3',  /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
        port: 3306,
        dialect: 'mysql'
    },
    {
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

/* Verificar conectividad */
sequelize
    .authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));
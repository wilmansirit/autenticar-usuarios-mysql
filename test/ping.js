const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize(
    'autenticar-usuarios-mysql',          // Database
    'autenticar-usuarios-mysql',          // User name
    'JtMUk7XzXNm2OgID',                    // Password
    {
        host: 'localhost',  /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
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
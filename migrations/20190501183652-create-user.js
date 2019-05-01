'use strict';

module.exports = {

  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('Users', {

      id: {
        allowNull     : false,
        autoIncrement : true,
        primaryKey    : true,
        type          : Sequelize.INTEGER
      },
      firstname       : {
        type          : Sequelize.STRING,
        allowNull     : false
      },
      lastname        : {
        type          : Sequelize.STRING,
        allowNull     : false
      },
      email           : {
        type          : Sequelize.STRING,
        allowNull     : false,
        unique        : true
      },
      password        : {
        type          : Sequelize.STRING,
        allowNull     : false
      },
      personalId      : {
        type          : Sequelize.STRING,
        unique        : true,
        allowNull     : false
      },
      perfil          : {
        type          : Sequelize.ENUM(['admin', 'aprobador', 'colaborador']),
        defaultValue  : 'colaborador'
      },
      isAdmin: {
        type          : Sequelize.BOOLEAN,
        defaultValue  : false
      },
      createdAt: {
        allowNull     : false,
        type          : Sequelize.DATE
      },
      updatedAt: {
        allowNull     : false,
        type          : Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
  
    return queryInterface.dropTable('Users');
  
  }
};
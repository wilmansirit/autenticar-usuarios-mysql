'use strict';

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {

    firstname   : DataTypes.STRING,
    lastname    : DataTypes.STRING,
    email       : DataTypes.STRING,

    fullname    : {
      type      : DataTypes.VIRTUAL,
      get() {
        return this.getDataValue('firstname') + ' ' + this.getDataValue('lastname')
      }
    },

    password    : DataTypes.STRING,
    personalId  : DataTypes.STRING,
    perfil      : DataTypes.ENUM(['admin', 'aprobador', 'colaborador']),
    isAdmin     : DataTypes.BOOLEAN

  }, {});

  User.associate = function(models) {

    // associations can be defined here
  
  };

  return User;
  
};

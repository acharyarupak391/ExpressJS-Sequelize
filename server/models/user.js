'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    email: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    age: { 
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sex: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    programmer: { 
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  
  User.sync();  // if sync() is not done we need to create the table manually
  return User;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class captainslog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  captainslog.init({
    items: DataTypes.STRING,
    logs: DataTypes.STRING,
    date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'captainslog',
  });
  return captainslog;
};
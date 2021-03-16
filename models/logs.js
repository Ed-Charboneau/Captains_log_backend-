'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Record.belongsToMany(models.User, {
        through: "UserRecord",
        foreignKey: "recordId",
        otherKey: "userId"
      });
    }
  };
  Record.init({
    artist: DataTypes.STRING,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Record',
  });
  return Record;
};
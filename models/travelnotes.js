'use strict';
const Fav = require('./favorites')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class travelNotes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.travelNotes.belongsTo(models.favorites)
    }
  };
  travelNotes.init({
    content: DataTypes.TEXT,
    favoriteId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'travelNotes',
  });
  return travelNotes;
};
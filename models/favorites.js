'use strict';
const User = require('./user')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favorites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.favorites.belongsTo(models.user)
      models.favorites.hasMany(models.travelNotes)
    }
  };
  favorites.init({
    currencyCode: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    
  },
  {
    sequelize,
    modelName: 'favorites',
  });
  return favorites;
};
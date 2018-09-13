'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    color: DataTypes.STRING,
    style: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    underscored: true,
  });
  Item.associate = function(models) {
    // associations can be defined here
  };
  return Item;
};
const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize }  = require('./../../../../../config/db');

class List extends Model {}

List.init({
    title: {
      type: DataTypes.STRING
    },
    token: {
      type: DataTypes.STRING
    },
    in_actived: {
      type: DataTypes.BOOLEAN
    }
  },{
    sequelize,
    timestamps: false,
    raw: true,
    tableName: 'list',
    modelName: 'List' // We need to choose the model name
});

module.exports = List;

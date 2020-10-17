const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('mercadolist', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

class List extends Model {}

List.init({
    title: {
      type: DataTypes.STRING,
    },
    token: {
      type: DataTypes.STRING
    }
  },{
    sequelize,
    timestamps: false,
    raw: true,
    tableName: 'list',
    modelName: 'List' // We need to choose the model name
});

module.exports = List;

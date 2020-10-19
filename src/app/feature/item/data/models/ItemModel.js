const { Sequelize, DataTypes, Model } = require('sequelize');
const List = require('../../../list/data/models/ListModel');
const { sequelize }  = require('./../../../../../config/db');

class Item extends Model {}

Item.init({
    title: { type: DataTypes.STRING },
    price: { type: DataTypes.FLOAT },
    quantity: { type: DataTypes.INTEGER },
    checked: { type: DataTypes.BOOLEAN },
    token: { type: DataTypes.STRING },
    in_actived: { type: DataTypes.BOOLEAN },
    
  },{
    sequelize,
    timestamps: false,
    raw: true,
    tableName: 'list_item',
    modelName: 'Item' // We need to choose the model name
});
Item.belongsTo(List);
module.exports = Item;


const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize }  = require('./../../../../../config/db');

class User extends Model {}



User.init({
	name: { type: DataTypes.STRING },
	email: { type: DataTypes.STRING },
	password:  { type: DataTypes.STRING },
	created: { type: DataTypes.DATE },
	modifield: { type: DataTypes.DATE },
	deleted: { type: DataTypes.DATE } ,	
    
  },{
    sequelize,
    timestamps: true,
    raw: true,
    tableName: 'users',
    modelName: 'User', // We need to choose the model name
    createdAt: "created",
    updatedAt: "modifield"
});

module.exports = User;
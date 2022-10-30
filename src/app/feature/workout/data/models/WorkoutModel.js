
const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize }  = require('./../../../../../config/db');

class Workout extends Model {}

Workout.init({
	userId: { type: DataTypes.UUID, field: 'user_id' },
	title: { type: DataTypes.STRING },
	breakTime:  { type: DataTypes.INTEGER, field: 'break_time'},
	created: { type: DataTypes.DATE },
	modifield: { type: DataTypes.DATE },
	deleted: { type: DataTypes.DATE },
  },{
    sequelize,
    timestamps: true,
    raw: true,
    tableName: 'workout',
    modelName: 'Workout', // We need to choose the model name
    createdAt: "created",
    updatedAt: "modifield"
});

module.exports = Workout;
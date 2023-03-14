
const { Sequelize, DataTypes, Model } = require('sequelize');
const Workout = require('../../../workout/data/models/WorkoutModel');
const { sequelize }  = require('./../../../../../config/db');

class Running extends Model {}

Running.init({
	workoutId: { type: DataTypes.STRING,  field: 'workout_id' },
	startDate: { type: DataTypes.DATE, field: 'start_date' },
	endDate:  { type: DataTypes.DATE, field: 'end_date' },
	created: { type: DataTypes.DATE },
	modifield: { type: DataTypes.DATE },
	deleted: { type: DataTypes.DATE } ,	
    
  },{
    sequelize,
    timestamps: true,
    raw: true,
    tableName: 'running_trainings',
    modelName: 'Running', // We need to choose the model name
    createdAt: "created",
    updatedAt: "modifield"
});

Running.belongsTo(Workout, {foreignKey: 'workout_id'})

module.exports = Running;
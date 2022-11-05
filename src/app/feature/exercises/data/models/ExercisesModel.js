
const { Sequelize, DataTypes, Model } = require('sequelize');
const {  Db }  = require('./../../../../../config/db');

const sequelize = new Db().database();


class Exercises extends Model {}


Exercises.init({
    id:  { type: DataTypes.UUID, primaryKey: true },
    workoutId : { type: DataTypes.UUID, field: 'workout_id' },
    title: { type: DataTypes.STRING },
    serie:  { type: DataTypes.INTEGER},
    repetition:  { type: DataTypes.INTEGER},
    created: { type: DataTypes.DATE },
    modifield: { type: DataTypes.DATE },
    deleted: { type: DataTypes.DATE },
  },{
    sequelize,
    timestamps: true,
    raw: true,
    tableName: 'exercises',
    modelName: 'Exercises', // We need to choose the model name
    createdAt: "created",
    updatedAt: "modifield"
});


module.exports = Exercises;
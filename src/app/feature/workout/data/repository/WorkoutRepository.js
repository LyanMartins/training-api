const Exercises = require("../../../exercises/data/models/ExercisesModel");

class WorkoutRepository {

    constructor(WorkoutModel = get('WorkoutModel')) {
        this.workoutModel = WorkoutModel;
    }

    create = function(workout) 
    {
        workout.created = Date.now();
        console.log(workout);
        return this.workoutModel.create(workout);
    }

    getWorkoutById = function(workoutId) 
    {
        return this.workoutModel.findOne({
            where: {
                id: workoutId
            }
        })
    }


    listWorkoutByUserId = function(userId) 
    {
        return this.workoutModel.findAll({
            where: {
                user_id: userId
            }
        })
    }

    listExercisesByWorkoutId = function(workoutId)
    {
        return this.workoutModel.findOne(
        {
            include:{
                model: Exercises,
            },
            where: {
                id: workoutId
            }, 

        })
    }
}

module.exports = WorkoutRepository;
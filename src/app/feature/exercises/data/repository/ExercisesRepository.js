class ExercisesRepository {

    constructor(
        ExercisesModel = get('ExercisesModel')
    ) {
        this.exercisesModel = ExercisesModel;
    }

    create = function(exercises)
    {
        exercises.create = Date.now();
        return this.exercisesModel.create(exercises);
    }

    getExercisesById = function(execisesId)
    {
        return this.exercisesModel.findOne({
            where: {
                id: execisesId
            }
        })
    }

    listAllExercisesByWorkoutId = function(workoutId) 
    {
        return this.exercisesModel.findAll({
            where: {
                workout_id: workoutId
            }
        })
    }
    
}
module.exports = ExercisesRepository;